import React, { createContext, useContext, useState } from 'react';
import {AuthContextType} from '../types/auth';

// ...existing code...

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ email: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock authentication - store user in localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      
      // Check if user already exists
      if (users.find((u: any) => u.email === email)) {
        return { data: null, error: { message: 'User already exists' } };
      }
      
      // Add new user
      users.push({ email, password });
      localStorage.setItem('users', JSON.stringify(users));
      
      setUser({ email });
      return { data: { user: { email } }, error: null };
    } catch (error: any) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    try {
      // Mock authentication - check against localStorage
      const users = JSON.parse(localStorage.getItem('users') || '[]');
      const user = users.find((u: any) => u.email === email && u.password === password);
      
      if (user) {
        setUser({ email });
        return { data: { user: { email } }, error: null };
      } else {
        return { data: null, error: { message: 'Invalid email or password' } };
      }
    } catch (error: any) {
      return { data: null, error };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setUser(null);
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