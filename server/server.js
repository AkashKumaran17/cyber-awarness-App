const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const JWT_SECRET = process.env.JWT_SECRET || 'cybersecurity_secret_key_2024';

// Middleware
app.use(cors());
app.use(express.json());

// Database setup
const db = new sqlite3.Database('./cybersecurity.db', (err) => {
  if (err) {
    console.error('Error opening database:', err);
  } else {
    console.log('🛡️ Connected to SQLite database');
    
    // Create users table
    db.run(`CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      email TEXT UNIQUE NOT NULL,
      password TEXT NOT NULL,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      last_login DATETIME
    )`, (err) => {
      if (err) {
        console.error('Error creating users table:', err);
      } else {
        console.log('✅ Users table ready');
      }
    });
  }
});

// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  
  if (!token) {
    return res.status(401).json({ error: 'Access denied. No token provided.' });
  }
  
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token.' });
  }
};

// Routes

// Sign Up
app.post('/api/signup', async (req, res) => {
  try {
    const { email, password, confirmPassword } = req.body;
    
    // Validation
    if (!email || !password || !confirmPassword) {
      return res.status(400).json({ 
        error: 'All fields are required',
        data: null 
      });
    }
    
    if (password !== confirmPassword) {
      return res.status(400).json({ 
        error: 'Passwords do not match',
        data: null 
      });
    }
    
    if (password.length < 6) {
      return res.status(400).json({ 
        error: 'Password must be at least 6 characters long',
        data: null 
      });
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ 
        error: 'Please enter a valid email address',
        data: null 
      });
    }
    
    // Check if user already exists
    db.get('SELECT email FROM users WHERE email = ?', [email], async (err, row) => {
      if (err) {
        return res.status(500).json({ 
          error: 'Database error',
          data: null 
        });
      }
      
      if (row) {
        return res.status(400).json({ 
          error: 'User with this email already exists',
          data: null 
        });
      }
      
      // Hash password
      const saltRounds = 12;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      
      // Insert user
      db.run('INSERT INTO users (email, password) VALUES (?, ?)', 
        [email, hashedPassword], 
        function(err) {
          if (err) {
            return res.status(500).json({ 
              error: 'Failed to create user',
              data: null 
            });
          }
          
          // Generate JWT token
          const token = jwt.sign(
            { userId: this.lastID, email }, 
            JWT_SECRET, 
            { expiresIn: '24h' }
          );
          
          res.status(201).json({
            data: {
              user: { id: this.lastID, email },
              token
            },
            error: null
          });
        }
      );
    });
    
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      data: null 
    });
  }
});

// Sign In
app.post('/api/signin', (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Validation
    if (!email || !password) {
      return res.status(400).json({ 
        error: 'Email and password are required',
        data: null 
      });
    }
    
    // Find user
    db.get('SELECT * FROM users WHERE email = ?', [email], async (err, user) => {
      if (err) {
        return res.status(500).json({ 
          error: 'Database error',
          data: null 
        });
      }
      
      if (!user) {
        return res.status(401).json({ 
          error: 'Invalid email or password',
          data: null 
        });
      }
      
      // Verify password
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        return res.status(401).json({ 
          error: 'Invalid email or password',
          data: null 
        });
      }
      
      // Update last login
      db.run('UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE id = ?', [user.id]);
      
      // Generate JWT token
      const token = jwt.sign(
        { userId: user.id, email: user.email }, 
        JWT_SECRET, 
        { expiresIn: '24h' }
      );
      
      res.json({
        data: {
          user: { id: user.id, email: user.email },
          token
        },
        error: null
      });
    });
    
  } catch (error) {
    console.error('Signin error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      data: null 
    });
  }
});

// Verify Token
app.get('/api/verify', verifyToken, (req, res) => {
  res.json({
    data: {
      user: { id: req.user.userId, email: req.user.email }
    },
    error: null
  });
});

// Get User Profile
app.get('/api/profile', verifyToken, (req, res) => {
  db.get('SELECT id, email, created_at, last_login FROM users WHERE id = ?', 
    [req.user.userId], 
    (err, user) => {
      if (err) {
        return res.status(500).json({ 
          error: 'Database error',
          data: null 
        });
      }
      
      if (!user) {
        return res.status(404).json({ 
          error: 'User not found',
          data: null 
        });
      }
      
      res.json({
        data: { user },
        error: null
      });
    }
  );
});

// Database viewer endpoint (for development only)
app.get('/api/db/users', (req, res) => {
  db.all('SELECT id, email, created_at, last_login FROM users ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    res.json({
      data: {
        users: rows,
        total: rows.length,
        timestamp: new Date().toISOString()
      },
      error: null
    });
  });
});

// Database statistics endpoint
app.get('/api/db/stats', (req, res) => {
  const stats = {};
  
  // Get total users
  db.get('SELECT COUNT(*) as total FROM users', [], (err, row) => {
    if (err) {
      return res.status(500).json({ error: 'Database error' });
    }
    
    stats.totalUsers = row.total;
    
    // Get active users (who have logged in)
    db.get('SELECT COUNT(*) as active FROM users WHERE last_login IS NOT NULL', [], (err, row) => {
      if (err) {
        return res.status(500).json({ error: 'Database error' });
      }
      
      stats.activeUsers = row.active;
      
      // Get latest user
      db.get('SELECT email, created_at FROM users ORDER BY created_at DESC LIMIT 1', [], (err, row) => {
        if (err) {
          return res.status(500).json({ error: 'Database error' });
        }
        
        stats.latestUser = row;
        stats.timestamp = new Date().toISOString();
        
        res.json({
          data: stats,
          error: null
        });
      });
    });
  });
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: '🛡️ Cybersecurity API is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🛡️ Cybersecurity API ready at http://localhost:${PORT}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🔒 Shutting down server...');
  db.close((err) => {
    if (err) {
      console.error('Error closing database:', err);
    } else {
      console.log('📱 Database connection closed');
    }
    process.exit(0);
  });
});