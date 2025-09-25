const sqlite3 = require('sqlite3').verbose();

// Open the database
const db = new sqlite3.Database('./cybersecurity.db', (err) => {
  if (err) {
    console.error('❌ Error opening database:', err);
    return;
  }
  console.log('🛡️ Connected to SQLite database\n');
});

// Function to display all users
function showAllUsers() {
  console.log('📊 ALL REGISTERED USERS:');
  console.log('=' .repeat(80));
  
  db.all('SELECT id, email, created_at, last_login FROM users ORDER BY created_at DESC', [], (err, rows) => {
    if (err) {
      console.error('❌ Error fetching users:', err);
      return;
    }
    
    if (rows.length === 0) {
      console.log('📭 No users found in database');
    } else {
      console.log(`👥 Total Users: ${rows.length}\n`);
      
      rows.forEach((row, index) => {
        console.log(`${index + 1}. User ID: ${row.id}`);
        console.log(`   📧 Email: ${row.email}`);
        console.log(`   📅 Created: ${row.created_at}`);
        console.log(`   🔄 Last Login: ${row.last_login || 'Never'}`);
        console.log('-'.repeat(50));
      });
    }
    
    showDatabaseStats();
  });
}

// Function to show database statistics
function showDatabaseStats() {
  console.log('\n📈 DATABASE STATISTICS:');
  console.log('=' .repeat(50));
  
  // Count total users
  db.get('SELECT COUNT(*) as total FROM users', [], (err, row) => {
    if (err) {
      console.error('❌ Error getting stats:', err);
    } else {
      console.log(`👥 Total Users: ${row.total}`);
    }
    
    // Count users who have logged in
    db.get('SELECT COUNT(*) as active FROM users WHERE last_login IS NOT NULL', [], (err, row) => {
      if (err) {
        console.error('❌ Error getting active users:', err);
      } else {
        console.log(`🔄 Active Users: ${row.active}`);
      }
      
      // Get latest user
      db.get('SELECT email, created_at FROM users ORDER BY created_at DESC LIMIT 1', [], (err, row) => {
        if (err) {
          console.error('❌ Error getting latest user:', err);
        } else if (row) {
          console.log(`🆕 Latest User: ${row.email} (${row.created_at})`);
        }
        
        console.log('\n' + '='.repeat(50));
        console.log('✅ Database access complete!');
        db.close();
      });
    });
  });
}

// Function to search users by email
function searchUser(email) {
  if (email) {
    console.log(`🔍 SEARCHING FOR USER: ${email}`);
    console.log('=' .repeat(50));
    
    db.get('SELECT id, email, created_at, last_login FROM users WHERE email LIKE ?', [`%${email}%`], (err, row) => {
      if (err) {
        console.error('❌ Error searching user:', err);
      } else if (row) {
        console.log(`✅ User Found:`);
        console.log(`   ID: ${row.id}`);
        console.log(`   📧 Email: ${row.email}`);
        console.log(`   📅 Created: ${row.created_at}`);
        console.log(`   🔄 Last Login: ${row.last_login || 'Never'}`);
      } else {
        console.log(`❌ No user found with email containing: ${email}`);
      }
      db.close();
    });
  } else {
    showAllUsers();
  }
}

// Command line arguments
const args = process.argv.slice(2);
const command = args[0];
const parameter = args[1];

switch (command) {
  case 'users':
  case 'all':
    showAllUsers();
    break;
  case 'search':
    searchUser(parameter);
    break;
  case 'count':
    showDatabaseStats();
    db.close();
    break;
  default:
    console.log('🛡️ CYBERSECURITY DATABASE VIEWER');
    console.log('=' .repeat(40));
    console.log('Usage:');
    console.log('  node db-viewer.js users     - Show all users');
    console.log('  node db-viewer.js search <email> - Search user by email');
    console.log('  node db-viewer.js count     - Show database statistics');
    console.log('');
    console.log('Default: Showing all users...\n');
    showAllUsers();
}