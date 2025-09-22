import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Key, 
  Eye, 
  EyeOff, 
  CheckCircle, 
  XCircle, 
  AlertCircle, 
  Shield,
  RefreshCw,
  Copy
} from 'lucide-react';

export default function PasswordCheckerPage() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [strength, setStrength] = useState({
    score: 0,
    level: 'Very Weak',
    color: 'red',
    checks: {
      length: false,
      uppercase: false,
      lowercase: false,
      numbers: false,
      symbols: false,
      common: true
    }
  });
  const [generatedPassword, setGeneratedPassword] = useState('');

  const checkPasswordStrength = (pwd: string) => {
    const checks = {
      length: pwd.length >= 8,
      uppercase: /[A-Z]/.test(pwd),
      lowercase: /[a-z]/.test(pwd),
      numbers: /\d/.test(pwd),
      symbols: /[^A-Za-z0-9]/.test(pwd),
      common: !isCommonPassword(pwd)
    };

    const score = Object.values(checks).filter(Boolean).length;
    
    let level = 'Very Weak';
    let color = 'red';
    
    if (score >= 5) {
      level = 'Very Strong';
      color = 'green';
    } else if (score >= 4) {
      level = 'Strong';
      color = 'blue';
    } else if (score >= 3) {
      level = 'Medium';
      color = 'yellow';
    } else if (score >= 2) {
      level = 'Weak';
      color = 'orange';
    }

    return { score, level, color, checks };
  };

  const isCommonPassword = (pwd: string) => {
    const commonPasswords = [
      'password', '123456', '123456789', 'qwerty', 'abc123',
      'password123', 'admin', 'letmein', 'welcome', 'monkey'
    ];
    return commonPasswords.includes(pwd.toLowerCase());
  };

  const generatePassword = () => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';
    
    const allChars = uppercase + lowercase + numbers + symbols;
    let password = '';
    
    // Ensure at least one character from each category
    password += uppercase[Math.floor(Math.random() * uppercase.length)];
    password += lowercase[Math.floor(Math.random() * lowercase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];
    
    // Fill the rest randomly
    for (let i = 4; i < 16; i++) {
      password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    
    // Shuffle the password
    return password.split('').sort(() => Math.random() - 0.5).join('');
  };

  const handleGeneratePassword = () => {
    const newPassword = generatePassword();
    setGeneratedPassword(newPassword);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    if (password) {
      setStrength(checkPasswordStrength(password));
    } else {
      setStrength({
        score: 0,
        level: 'Very Weak',
        color: 'red',
        checks: {
          length: false,
          uppercase: false,
          lowercase: false,
          numbers: false,
          symbols: false,
          common: true
        }
      });
    }
  }, [password]);

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-400 bg-green-500/20 border-green-500';
      case 'blue': return 'text-blue-400 bg-blue-500/20 border-blue-500';
      case 'yellow': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      case 'orange': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      default: return 'text-red-400 bg-red-500/20 border-red-500';
    }
  };

  const strengthBars = Array.from({ length: 5 }, (_, index) => (
    <div
      key={index}
      className={`h-2 rounded-full transition-all duration-300 ${
        index < strength.score
          ? strength.color === 'green'
            ? 'bg-green-400'
            : strength.color === 'blue'
            ? 'bg-blue-400'
            : strength.color === 'yellow'
            ? 'bg-yellow-400'
            : strength.color === 'orange'
            ? 'bg-orange-400'
            : 'bg-red-400'
          : 'bg-gray-700'
      }`}
    />
  ));

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Key className="h-16 w-16 text-green-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Password Strength Checker
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Test your password strength and learn how to create unbreakable passwords
          </p>
        </motion.div>

        {/* Password Input */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="cyber-card p-8 rounded-xl mb-8 password-gradient"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-3 text-green-400" />
            Test Your Password
          </h2>
          
          <div className="relative mb-6">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password to test its strength..."
              className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl pr-12 border border-gray-600 focus:border-green-400 focus:outline-none text-lg"
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-4 text-gray-400 hover:text-gray-300"
            >
              {showPassword ? <EyeOff className="h-6 w-6" /> : <Eye className="h-6 w-6" />}
            </button>
          </div>

          {/* Strength Indicator */}
          {password && (
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-gray-300">Password Strength:</span>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getColorClasses(strength.color)}`}>
                  {strength.level}
                </span>
              </div>
              <div className="grid grid-cols-5 gap-2 mb-4">
                {strengthBars}
              </div>
            </div>
          )}

          {/* Requirements Checklist */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-3">Requirements:</h3>
              
              <div className={`flex items-center space-x-3 ${strength.checks.length ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.length ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>At least 8 characters</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${strength.checks.uppercase ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.uppercase ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>Uppercase letter (A-Z)</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${strength.checks.lowercase ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.lowercase ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>Lowercase letter (a-z)</span>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-white mb-3 md:opacity-0">Hidden</h3>
              
              <div className={`flex items-center space-x-3 ${strength.checks.numbers ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.numbers ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>Number (0-9)</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${strength.checks.symbols ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.symbols ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>Special character (!@#$%)</span>
              </div>
              
              <div className={`flex items-center space-x-3 ${strength.checks.common ? 'text-green-400' : 'text-red-400'}`}>
                {strength.checks.common ? <CheckCircle className="h-5 w-5" /> : <XCircle className="h-5 w-5" />}
                <span>Not a common password</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Password Generator */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <RefreshCw className="h-6 w-6 mr-3 text-blue-400" />
            Secure Password Generator
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <button
              onClick={handleGeneratePassword}
              className="cyber-button text-white px-6 py-3 rounded-lg font-semibold flex items-center justify-center space-x-2"
            >
              <RefreshCw className="h-5 w-5" />
              <span>Generate Password</span>
            </button>
          </div>

          {generatedPassword && (
            <div className="bg-gray-800 p-4 rounded-lg border border-gray-600">
              <div className="flex items-center justify-between">
                <code className="text-green-400 font-mono text-lg break-all">
                  {generatedPassword}
                </code>
                <button
                  onClick={() => copyToClipboard(generatedPassword)}
                  className="ml-4 text-gray-400 hover:text-gray-300 flex-shrink-0"
                >
                  <Copy className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </motion.div>

        {/* Tips */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 mr-3 text-yellow-400" />
            Password Security Tips
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-green-400">Do's:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Use a unique password for each account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Use a password manager</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Enable two-factor authentication</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                  <span>Update passwords regularly</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-red-400">Don'ts:</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-start space-x-2">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Use personal information in passwords</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Share passwords with others</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Use dictionary words or common patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <XCircle className="h-5 w-5 text-red-400 mt-0.5 flex-shrink-0" />
                  <span>Store passwords in plain text</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Password Manager Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="cyber-card p-8 rounded-xl"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Recommended Password Managers
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <Shield className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">1Password</h3>
              <p className="text-gray-300 text-sm">Premium password manager with excellent security</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">Bitwarden</h3>
              <p className="text-gray-300 text-sm">Open-source password manager with free tier</p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 text-center">
              <Shield className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-semibold mb-2">LastPass</h3>
              <p className="text-gray-300 text-sm">Popular password manager with cross-platform sync</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}