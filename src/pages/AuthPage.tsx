import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { Shield, Mail, Lock, Eye, EyeOff, AlertTriangle, CheckCircle } from 'lucide-react';
export default function AuthPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signIn, signUp } = useAuth();
  const navigate = useNavigate();

  // Form validation
  const validateForm = () => {
    if (!email.trim()) {
      setError('Email is required');
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return false;
    }
    
    if (!password.trim()) {
      setError('Password is required');
      return false;
    }
    
    if (password.length < 6) {
      setError('Password must be at least 6 characters long');
      return false;
    }
    
    if (!confirmPassword.trim()) {
      setError('Please confirm your password');
      return false;
    }
    
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      // First try to sign in
      const signInResult = await signIn(email, password);
      
      if (signInResult.error && signInResult.error.message.includes('Invalid email or password')) {
        // If sign in fails, try to create account
        setSuccess('Creating your account...');
        const signUpResult = await signUp(email, password, confirmPassword);
        
        if (signUpResult.error) {
          throw signUpResult.error;
        }
        
        // After successful signup, sign in automatically
        const autoSignInResult = await signIn(email, password);
        if (autoSignInResult.error) {
          throw autoSignInResult.error;
        }
        
        setSuccess('Account created and signed in successfully! Redirecting...');
        setTimeout(() => navigate('/home'), 1500);
      } else if (signInResult.error) {
        throw signInResult.error;
      } else {
        setSuccess('Successfully signed in! Redirecting...');
        setTimeout(() => navigate('/home'), 1000);
      }
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]"></div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          >
            <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
          </div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-md w-full relative z-10"
      >
        <div className="bg-gray-900/80 backdrop-blur-xl border border-gray-700/50 p-8 rounded-2xl shadow-2xl shadow-cyan-500/10">
          {/* Header */}
          <div className="text-center mb-8">
            <motion.div 
              className="flex justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="relative">
                <Shield className="h-16 w-16 text-cyan-400 neon-glow" />
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </motion.div>
                        <h2 className="cyber-font text-3xl font-bold text-white mb-2 text-center">
              SECURE ACCESS
            </h2>
            <motion.p 
              className="text-gray-300 text-center mb-8 text-lg leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              🛡️ Enter your credentials to access cybersecurity resources. New users will be automatically registered.
            </motion.p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-green-500/10 border border-green-500 text-green-400 px-4 py-3 rounded-lg mb-6 flex items-center"
            >
              <CheckCircle className="h-5 w-5 mr-2" />
              {success}
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-6 flex items-center"
            >
              <AlertTriangle className="h-5 w-5 mr-2" />
              {error}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Mail className="h-4 w-4 mr-2 text-cyan-400" />
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-gray-800/50 text-white px-4 py-4 rounded-lg pl-12 border border-gray-600 focus:border-cyan-400 focus:bg-gray-800 focus:outline-none transition-all duration-300 text-base"
                  placeholder="Enter your email address"
                />
                <Mail className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Lock className="h-4 w-4 mr-2 text-cyan-400" />
                Password <span className="text-red-400 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-gray-800/50 text-white px-4 py-4 rounded-lg pl-12 pr-12 border border-gray-600 focus:border-cyan-400 focus:bg-gray-800 focus:outline-none transition-all duration-300 text-base"
                  placeholder="Minimum 6 characters required"
                />
                <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 px-1">
                💡 Use a strong password with letters, numbers, and symbols
              </p>
            </div>

            {/* Confirm Password Field - Always visible */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-300 mb-3 flex items-center">
                <Lock className="h-4 w-4 mr-2 text-cyan-400" />
                Confirm Password <span className="text-red-400 ml-1">*</span>
              </label>
              <div className="relative">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  className="w-full bg-gray-800/50 text-white px-4 py-4 rounded-lg pl-12 pr-12 border border-gray-600 focus:border-cyan-400 focus:bg-gray-800 focus:outline-none transition-all duration-300 text-base"
                  placeholder="Re-enter your password"
                />
                <Lock className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-4 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <div className="mt-2 px-1">
                {confirmPassword && password !== confirmPassword && (
                  <p className="text-red-400 text-xs flex items-center">
                    <AlertTriangle className="h-3 w-3 mr-1" />
                    Passwords do not match
                  </p>
                )}
                {confirmPassword && password === confirmPassword && confirmPassword.length >= 6 && (
                  <p className="text-green-400 text-xs flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" />
                    Passwords match perfectly!
                  </p>
                )}
              </div>
            </div>

                        <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
            >
              {loading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                  <span>WELCOME TO THE WORLD OF SECURITY</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Shield className="h-5 w-5" />
                  <span>SECURE ACCESS</span>
                </div>
              )}
            </motion.button>
          </form>

          {/* Info Section */}
          <div className="mt-8 text-center">
            <div className="bg-blue-500/10 border border-blue-500/50 rounded-lg p-4">
              <p className="text-blue-300 text-sm">
                🔐 <strong>New users:</strong> Account will be created automatically<br/>
                🔑 <strong>Existing users:</strong> Sign in with your credentials
              </p>
            </div>
          </div>

          {/* Security Notice */}
          <motion.div 
            className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/50 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center justify-center text-green-400 text-sm">
              <Shield className="h-4 w-4 mr-2" />
              Your credentials are encrypted with bcrypt and stored securely
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}