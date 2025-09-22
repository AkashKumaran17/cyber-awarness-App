import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Play, 
  Clock, 
  Users, 
  Star,
  BookOpen,
  Shield,
  AlertTriangle,
  Key,
  Smartphone
} from 'lucide-react';

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoTutorials = [
    {
      id: 1,
      title: 'Understanding Phishing Attacks',
      description: 'Learn to identify and protect yourself from phishing scams',
      duration: '12:30',
      views: '50K',
      rating: 4.8,
      category: 'threats',
      thumbnail: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Password Security Best Practices',
      description: 'Create strong passwords and use password managers effectively',
      duration: '8:45',
      views: '75K',
      rating: 4.9,
      category: 'passwords',
      thumbnail: 'https://images.pexels.com/photos/1591061/pexels-photo-1591061.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Mobile Security Essentials',
      description: 'Secure your smartphone from malware and data breaches',
      duration: '15:20',
      views: '42K',
      rating: 4.7,
      category: 'mobile',
      thumbnail: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Intermediate'
    },
    {
      id: 4,
      title: 'Two-Factor Authentication Setup',
      description: 'Step-by-step guide to enable 2FA on popular platforms',
      duration: '10:15',
      views: '38K',
      rating: 4.6,
      category: 'passwords',
      thumbnail: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    },
    {
      id: 5,
      title: 'Ransomware Protection Strategies',
      description: 'Comprehensive guide to prevent and respond to ransomware',
      duration: '18:30',
      views: '29K',
      rating: 4.8,
      category: 'threats',
      thumbnail: 'https://images.pexels.com/photos/2882552/pexels-photo-2882552.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Advanced'
    },
    {
      id: 6,
      title: 'Social Media Privacy Settings',
      description: 'Protect your privacy on Facebook, Instagram, and Twitter',
      duration: '14:20',
      views: '56K',
      rating: 4.5,
      category: 'privacy',
      thumbnail: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    },
    {
      id: 7,
      title: 'Email Security and Encryption',
      description: 'Secure your email communications with encryption',
      duration: '16:45',
      views: '33K',
      rating: 4.7,
      category: 'privacy',
      thumbnail: 'https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Advanced'
    },
    {
      id: 8,
      title: 'Safe Online Banking Practices',
      description: 'Protect your finances while banking online',
      duration: '11:30',
      views: '67K',
      rating: 4.9,
      category: 'financial',
      thumbnail: 'https://images.pexels.com/photos/4968631/pexels-photo-4968631.jpeg?auto=compress&cs=tinysrgb&w=400',
      level: 'Beginner'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos', icon: GraduationCap },
    { id: 'threats', label: 'Cyber Threats', icon: AlertTriangle },
    { id: 'passwords', label: 'Password Security', icon: Key },
    { id: 'mobile', label: 'Mobile Security', icon: Smartphone },
    { id: 'privacy', label: 'Privacy Protection', icon: Shield },
    { id: 'financial', label: 'Financial Security', icon: BookOpen }
  ];

  const learningPaths = [
    {
      title: 'Cybersecurity Basics',
      description: 'Start your cybersecurity journey with fundamental concepts',
      videos: 4,
      duration: '2h 30m',
      level: 'Beginner',
      color: 'green'
    },
    {
      title: 'Advanced Threat Protection',
      description: 'Learn advanced techniques to protect against sophisticated attacks',
      videos: 6,
      duration: '4h 15m',
      level: 'Advanced',
      color: 'red'
    },
    {
      title: 'Mobile & IoT Security',
      description: 'Secure your mobile devices and Internet of Things devices',
      videos: 5,
      duration: '3h 20m',
      level: 'Intermediate',
      color: 'blue'
    }
  ];

  const filteredVideos = selectedCategory === 'all' 
    ? videoTutorials 
    : videoTutorials.filter(video => video.category === selectedCategory);

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Advanced': return 'text-red-400 bg-red-500/20';
      default: return 'text-gray-400 bg-gray-500/20';
    }
  };

  const getPathColor = (color: string) => {
    switch (color) {
      case 'green': return 'bg-green-500/20 border-green-500';
      case 'blue': return 'bg-blue-500/20 border-blue-500';
      case 'red': return 'bg-red-500/20 border-red-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <GraduationCap className="h-16 w-16 text-purple-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Learning Resources
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Master cybersecurity with our comprehensive video tutorials and learning paths
          </p>
        </motion.div>

        {/* Learning Paths */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`cyber-card p-8 rounded-xl border ${getPathColor(path.color)}`}
              >
                <div className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-full mb-4 mx-auto">
                    <GraduationCap className="h-8 w-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{path.title}</h3>
                  <p className="text-gray-300 mb-4">{path.description}</p>
                  <div className="flex justify-center space-x-4 mb-4">
                    <span className="text-sm text-gray-400">{path.videos} videos</span>
                    <span className="text-sm text-gray-400">{path.duration}</span>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getLevelColor(path.level)}`}>
                    {path.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                <category.icon className="h-4 w-4" />
                <span>{category.label}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredVideos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-0 rounded-xl overflow-hidden group hover:scale-105 transition-transform"
            >
              {/* Thumbnail */}
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                  <div className="bg-red-600 rounded-full p-3 group-hover:scale-110 transition-transform">
                    <Play className="h-6 w-6 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 rounded text-white text-xs flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{video.duration}</span>
                </div>
                <div className="absolute top-4 left-4">
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${getLevelColor(video.level)}`}>
                    {video.level}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {video.description}
                </p>

                {/* Metadata */}
                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Users className="h-4 w-4" />
                      <span>{video.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400" />
                      <span>{video.rating}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.sans.org/security-awareness-training/"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-8 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">SANS Training</h3>
              <p className="text-gray-300">Professional cybersecurity training courses</p>
            </a>

            <a
              href="https://www.cybrary.it"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-8 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <BookOpen className="h-12 w-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cybrary</h3>
              <p className="text-gray-300">Free cybersecurity training platform</p>
            </a>

            <a
              href="https://www.coursera.org/browse/information-technology/security"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-8 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <GraduationCap className="h-12 w-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Coursera</h3>
              <p className="text-gray-300">University-level cybersecurity courses</p>
            </a>
          </div>
        </motion.div>

        {/* Subscribe CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 cyber-card p-8 rounded-xl bg-purple-500/10 border-purple-500 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Updated with New Content
          </h3>
          <p className="text-gray-300 mb-6">
            Get notified when we add new cybersecurity tutorials and learning materials
          </p>
          <button className="cyber-button text-white px-8 py-3 rounded-lg font-semibold">
            Subscribe to Updates
          </button>
        </motion.div>
      </div>
    </div>
  );
}