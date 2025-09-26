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
  Key
} from 'lucide-react';

export default function LearningPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const videoTutorials = [
    // Cybersecurity (Basics + Advanced)
    {
      id: 1,
      title: 'Cyber Security Full Course for Beginners | Edureka',
      description: 'Complete cybersecurity fundamentals from basics to advanced concepts',
      duration: '8:30:00',
      views: '2.1M',
      rating: 4.8,
      category: 'cybersecurity',
      url: 'https://www.youtube.com/watch?v=hXSFdwIOfnE',
      level: 'Beginner'
    },
    {
      id: 2,
      title: 'Cybersecurity Training for Beginners | Simplilearn',
      description: 'Essential cybersecurity training for newcomers to the field',
      duration: '6:45:00',
      views: '1.8M',
      rating: 4.7,
      category: 'cybersecurity',
      url: 'https://www.youtube.com/watch?v=rcDO8km6R6c',
      level: 'Beginner'
    },
    {
      id: 3,
      title: 'Cyber Security Crash Course',
      description: 'Quick introduction to cybersecurity concepts and practices',
      duration: '2:15:00',
      views: '950K',
      rating: 4.6,
      category: 'cybersecurity',
      url: 'https://www.youtube.com/watch?v=U_P23SqJaDc',
      level: 'Beginner'
    },
    {
      id: 4,
      title: 'Introduction to Cybersecurity | Cisco',
      description: 'Official Cisco introduction to cybersecurity fundamentals',
      duration: '4:20:00',
      views: '1.2M',
      rating: 4.9,
      category: 'cybersecurity',
      url: 'https://www.youtube.com/watch?v=inWWhr5tnEA',
      level: 'Beginner'
    },
    {
      id: 5,
      title: 'Cybersecurity Roadmap 2024 (Step by Step Guide)',
      description: 'Complete roadmap for cybersecurity career in 2024',
      duration: '45:30',
      views: '680K',
      rating: 4.8,
      category: 'cybersecurity',
      url: 'https://www.youtube.com/watch?v=HmId9LLyLws',
      level: 'Intermediate'
    },
    
    // Networking Courses
    {
      id: 6,
      title: 'Computer Networking Full Course | Cisco & Packet Tracer',
      description: 'Complete networking course with Cisco Packet Tracer hands-on',
      duration: '12:00:00',
      views: '3.2M',
      rating: 4.9,
      category: 'networking',
      url: 'https://www.youtube.com/watch?v=qiQR5rTSshw',
      level: 'Beginner'
    },
    {
      id: 7,
      title: 'Computer Networking Course – Network Engineering',
      description: 'Comprehensive network engineering concepts and implementation',
      duration: '9:30:00',
      views: '2.5M',
      rating: 4.8,
      category: 'networking',
      url: 'https://www.youtube.com/watch?v=rL8RSFQG8do',
      level: 'Intermediate'
    },
    {
      id: 8,
      title: 'Computer Networking Basics | Simplilearn',
      description: 'Fundamental networking concepts explained simply',
      duration: '3:45:00',
      views: '1.1M',
      rating: 4.6,
      category: 'networking',
      url: 'https://www.youtube.com/watch?v=DrI2lUXL1no',
      level: 'Beginner'
    },
    {
      id: 9,
      title: 'CCNA Full Course (Beginner to Advanced)',
      description: 'Complete CCNA certification preparation course',
      duration: '15:00:00',
      views: '1.8M',
      rating: 4.9,
      category: 'networking',
      url: 'https://www.youtube.com/watch?v=rv3QK2UquxM',
      level: 'Advanced'
    },
    {
      id: 10,
      title: 'OSI Model Explained',
      description: 'Detailed explanation of the OSI 7-layer model',
      duration: '25:15',
      views: '890K',
      rating: 4.7,
      category: 'networking',
      url: 'https://www.youtube.com/watch?v=vv4y_uOneC0',
      level: 'Beginner'
    },

    // Ethical Hacking
    {
      id: 11,
      title: 'Ethical Hacking Full Course for Beginners | Simplilearn',
      description: 'Complete ethical hacking course from basics to advanced techniques',
      duration: '10:30:00',
      views: '2.8M',
      rating: 4.8,
      category: 'ethical-hacking',
      url: 'https://www.youtube.com/watch?v=fNzpcB7ODxQ',
      level: 'Beginner'
    },
    {
      id: 12,
      title: 'Ethical Hacking Tutorial for Beginners | Edureka',
      description: 'Step-by-step ethical hacking tutorial for newcomers',
      duration: '8:15:00',
      views: '1.9M',
      rating: 4.7,
      category: 'ethical-hacking',
      url: 'https://www.youtube.com/watch?v=WnN6dbos5u8',
      level: 'Beginner'
    },
    {
      id: 13,
      title: 'Complete Ethical Hacking Course | FreeCodeCamp',
      description: 'Comprehensive ethical hacking course by FreeCodeCamp',
      duration: '15:45:00',
      views: '3.5M',
      rating: 4.9,
      category: 'ethical-hacking',
      url: 'https://www.youtube.com/watch?v=3Kq1MIfTWCE',
      level: 'Intermediate'
    },
    {
      id: 14,
      title: 'CEH (Certified Ethical Hacker) Full Course',
      description: 'Complete CEH certification preparation course',
      duration: '12:20:00',
      views: '1.6M',
      rating: 4.8,
      category: 'ethical-hacking',
      url: 'https://www.youtube.com/watch?v=MacVkjV5OvI',
      level: 'Advanced'
    },
    {
      id: 15,
      title: 'Kali Linux Ethical Hacking Tutorial',
      description: 'Learn ethical hacking using Kali Linux tools and techniques',
      duration: '6:30:00',
      views: '2.2M',
      rating: 4.7,
      category: 'ethical-hacking',
      url: 'https://www.youtube.com/watch?v=lZAoFs75_cs',
      level: 'Intermediate'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'networking', name: 'Networking', icon: AlertTriangle },
    { id: 'ethical-hacking', name: 'Ethical Hacking', icon: Key }
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
                <span>{category.name}</span>
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
              className="cyber-card p-0 rounded-xl overflow-hidden group hover:scale-105 transition-transform cursor-pointer"
              onClick={() => window.open(video.url, '_blank')}
            >
              {/* Video Preview */}
              <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                <div className="text-center">
                  <div className="bg-red-600 rounded-full p-4 group-hover:scale-110 transition-transform mb-4">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                  <div className="text-white text-sm font-medium">Click to Watch on YouTube</div>
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