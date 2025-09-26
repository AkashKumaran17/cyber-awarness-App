import React, { createContext, useContext, useState, useEffect } from 'react';
import {AuthContextType} from '../types/auth';

const API_BASE_URL = 'http://localhost:5000/api';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(true); // Start with loading true

  // Check for existing token on app load
  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token = localStorage.getItem('authToken');
        if (token) {
          await verifyToken(token);
        }
      } catch (error) {
        console.error('Auth initialization failed:', error);
      } finally {
        setLoading(false); // Always set loading to false
      }
    };

    initializeAuth();
  }, []);

  const verifyToken = async (token: string) => {
    try {
      // Add timeout to prevent hanging
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 3000); // 3 second timeout

      const response = await fetch(`${API_BASE_URL}/verify`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        signal: controller.signal
      });

      clearTimeout(timeoutId);
      
      if (response.ok) {
        const result = await response.json();
        setUser(result.data.user);
      } else {
        localStorage.removeItem('authToken');
        setUser(null);
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      localStorage.removeItem('authToken');
      setUser(null);
    }
  };

  const signUp = async (email: string, password: string, confirmPassword?: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password, confirmPassword })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        // Don't auto-login after signup - user must sign in manually
        return { data: { user: result.data.user }, error: null };
      } else {
        return { data: null, error: { message: result.error } };
      }
    } catch (error: any) {
      return { data: null, error: { message: 'Network error. Please check if the server is running.' } };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${API_BASE_URL}/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });
      
      const result = await response.json();
      
      if (response.ok) {
        setUser(result.data.user);
        localStorage.setItem('authToken', result.data.token);
        return { data: result.data, error: null };
      } else {
        return { data: null, error: { message: result.error } };
      }
    } catch (error: any) {
      return { data: null, error: { message: 'Network error. Please check if the server is running.' } };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(null);
    localStorage.removeItem('authToken');
  };

  const value: AuthContextType = {
    user,
    session: null,
    signUp,
    signIn,
    signOut,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}