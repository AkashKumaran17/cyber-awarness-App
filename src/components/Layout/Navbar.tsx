import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Shield, Menu, X, Search, User, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { user, signOut } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  const navLinks = [
    { to: '/threats', label: 'Cyber Threats' },
    { to: '/cyber-laws', label: 'Cyber Laws' },
    { to: '/password-checker', label: 'Password Checker' },
    { to: '/malware', label: 'Malware' },
    { to: '/incidents', label: 'Incidents' },
    { to: '/emergency', label: 'Emergency' },
    { to: '/learning', label: 'Learning' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to={user ? "/home" : "/"} className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-cyan-400 neon-glow" />
            <span className="cyber-font text-xl font-bold text-white neon-text">
              CyberShield
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-4">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search threats, laws..."
                className="bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            </form>

            {/* Auth Buttons */}
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-300">
                  <User className="h-4 w-4" />
                  <span className="text-sm">{user.email}</span>
                </div>
                <button
                  onClick={handleSignOut}
                  className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Sign In
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-700">
            <div className="flex flex-col space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search threats, laws..."
                  className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg pl-10 border border-gray-600 focus:border-cyan-400 focus:outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
              </form>

              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-gray-300 hover:text-cyan-400 transition-colors duration-200 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {user ? (
                <div className="pt-4 border-t border-gray-700">
                  <div className="flex items-center space-x-2 text-gray-300 mb-2">
                    <User className="h-4 w-4" />
                    <span className="text-sm">{user.email}</span>
                  </div>
                  <button
                    onClick={handleSignOut}
                    className="flex items-center space-x-2 text-gray-300 hover:text-red-400 transition-colors"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              ) : (
                <Link
                  to="/auth"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Sign In
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}