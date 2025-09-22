import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  Scale, 
  Key, 
  Bug, 
  Newspaper, 
  Phone, 
  GraduationCap,
  Search,
  ArrowRight
} from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: AlertTriangle,
      title: 'Cyber Threats',
      description: 'Learn about phishing, ransomware, and other cyber threats',
      link: '/threats',
      gradient: 'threat-gradient'
    },
    {
      icon: Scale,
      title: 'Cyber Laws',
      description: 'Understand Indian cyber laws and IT Act provisions',
      link: '/cyber-laws',
      gradient: 'law-gradient'
    },
    {
      icon: Key,
      title: 'Password Checker',
      description: 'Test and improve your password strength',
      link: '/password-checker',
      gradient: 'password-gradient'
    },
    {
      icon: Bug,
      title: 'Malware Awareness',
      description: 'Protect yourself from malicious software',
      link: '/malware',
      gradient: 'threat-gradient'
    },
    {
      icon: Newspaper,
      title: 'Security Incidents',
      description: 'Stay updated with latest cybersecurity news',
      link: '/incidents',
      gradient: 'law-gradient'
    },
    {
      icon: Phone,
      title: 'Emergency Help',
      description: 'Quick access to cybercrime reporting portals',
      link: '/emergency',
      gradient: 'threat-gradient'
    },
    {
      icon: GraduationCap,
      title: 'Learning Resources',
      description: 'Educational videos and tutorials',
      link: '/learning',
      gradient: 'password-gradient'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 flex-1 flex items-center justify-center">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-8">
              <Shield className="h-24 w-24 text-cyan-400 neon-glow cyber-pulse" />
            </div>
            <h1 className="cyber-font text-5xl md:text-7xl font-bold text-white mb-6 neon-text leading-tight">
              CyberShield
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Your comprehensive cybersecurity awareness platform.<br />
              <span className="block mt-2">Stay informed, stay protected in the digital world.</span>
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12">
              <form className="relative flex items-center gap-2">
                <span className="absolute left-5 top-4 h-6 w-6 text-gray-400">
                  <Search />
                </span>
                <input
                  type="text"
                  placeholder="Search threats, laws, solutions..."
                  className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl pl-14 border border-gray-600 focus:border-cyan-400 focus:outline-none text-lg"
                />
                <button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all ml-2">
                  Search
                </button>
              </form>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <Link
                to="/threats"
                className="cyber-button text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Explore Threats</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/emergency"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-lg"
              >
                Emergency Help
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

  {/* Features Grid */}
  <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 leading-tight">
              Comprehensive Cybersecurity Resources
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Everything you need to stay safe in the digital world
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={feature.link} className="block">
                  <div className={`cyber-card p-8 rounded-xl h-full flex flex-col justify-between ${feature.gradient} shadow-lg`}>
                    <div>
                      <div className="flex items-center justify-center w-14 h-14 bg-gray-700 rounded-lg mb-6">
                        <feature.icon className="h-7 w-7 text-cyan-400" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2 leading-tight">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-6 flex items-center text-cyan-400">
                      <span className="text-sm">Learn More</span>
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

  {/* Stats Section */}
  <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="cyber-card p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300 leading-relaxed">Cyber Threats Covered</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="cyber-card p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
              <div className="text-gray-300 leading-relaxed">Indian Cyber Laws</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="cyber-card p-8 rounded-xl shadow-lg"
            >
              <div className="text-4xl font-bold text-cyan-400 mb-2">1930</div>
              <div className="text-gray-300 leading-relaxed">Cyber Crime Helpline</div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}