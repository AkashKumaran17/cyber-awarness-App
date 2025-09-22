import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Scale, Search, BookOpen, Shield, AlertCircle, FileText } from 'lucide-react';

export default function CyberLawsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const laws = [
    {
      id: 'it-act-2000',
      title: 'Information Technology Act, 2000',
      category: 'primary',
      description: 'The primary law in India dealing with cybercrime and electronic commerce.',
      sections: [
        {
          section: 'Section 43',
          title: 'Penalty for damage to computer, computer system, etc.',
          penalty: 'Up to ₹1 crore compensation',
          description: 'Covers unauthorized access, data damage, virus introduction, etc.'
        },
        {
          section: 'Section 66',
          title: 'Computer related offences',
          penalty: 'Up to 3 years imprisonment or ₹5 lakh fine',
          description: 'Hacking, data theft, and computer-related crimes'
        },
        {
          section: 'Section 66A',
          title: 'Punishment for sending offensive messages',
          penalty: 'Struck down by Supreme Court in 2015',
          description: 'Previously covered offensive messages through communication services'
        }
      ]
    },
    {
      id: 'it-amendment-2008',
      title: 'IT Act Amendment 2008',
      category: 'amendment',
      description: 'Major amendments to strengthen cybersecurity provisions.',
      sections: [
        {
          section: 'Section 66C',
          title: 'Identity Theft',
          penalty: 'Up to 3 years imprisonment and ₹1 lakh fine',
          description: 'Fraudulent or dishonest use of electronic signature, password, or identity'
        },
        {
          section: 'Section 66D',
          title: 'Cheating by Personation',
          penalty: 'Up to 3 years imprisonment and ₹1 lakh fine',
          description: 'Cheating by personation using computer resources'
        },
        {
          section: 'Section 66E',
          title: 'Violation of Privacy',
          penalty: 'Up to 3 years imprisonment and ₹2 lakh fine',
          description: 'Publishing private images without consent'
        },
        {
          section: 'Section 67B',
          title: 'Child Pornography',
          penalty: 'Up to 5 years imprisonment and ₹10 lakh fine',
          description: 'Publishing or transmitting material depicting children in sexually explicit acts'
        }
      ]
    },
    {
      id: 'data-protection',
      title: 'Data Protection Laws',
      category: 'privacy',
      description: 'Laws governing personal data protection and privacy.',
      sections: [
        {
          section: 'PDPB 2023',
          title: 'Personal Data Protection Bill',
          penalty: 'Under consideration',
          description: 'Comprehensive data protection framework for India'
        },
        {
          section: 'Section 43A',
          title: 'Data Protection',
          penalty: 'Compensation to affected persons',
          description: 'Negligence in implementing security practices causing wrongful loss'
        }
      ]
    },
    {
      id: 'banking-cyber-laws',
      title: 'Banking & Financial Cyber Laws',
      category: 'financial',
      description: 'Laws specific to financial and banking sector cybersecurity.',
      sections: [
        {
          section: 'Section 46',
          title: 'Digital Signature Certificates',
          penalty: 'Up to 2 years imprisonment',
          description: 'Unauthorized digital signature certificate publication'
        },
        {
          section: 'RBI Guidelines',
          title: 'Banking Cybersecurity',
          penalty: 'Regulatory action by RBI',
          description: 'Reserve Bank guidelines for cybersecurity in banking'
        }
      ]
    }
  ];

  const categories = [
    { id: 'all', label: 'All Laws' },
    { id: 'primary', label: 'Primary Acts' },
    { id: 'amendment', label: 'Amendments' },
    { id: 'privacy', label: 'Privacy Laws' },
    { id: 'financial', label: 'Financial Laws' }
  ];

  const filteredLaws = laws.filter(law => {
    const matchesSearch = searchQuery === '' || 
      law.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      law.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      law.sections.some(section => 
        section.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
        section.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    
    const matchesCategory = selectedCategory === 'all' || law.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

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
            <Scale className="h-16 w-16 text-blue-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Indian Cyber Laws
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive guide to cybersecurity laws, regulations, and legal provisions in India
          </p>
        </motion.div>

        {/* Search and Filter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search laws, sections, penalties..."
                className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl pl-14 border border-gray-600 focus:border-cyan-400 focus:outline-none"
              />
              <Search className="absolute left-5 top-4.5 h-6 w-6 text-gray-400" />
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Laws List */}
        <div className="space-y-8">
          {filteredLaws.map((law, index) => (
            <motion.div
              key={law.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-8 rounded-xl law-gradient"
            >
              {/* Law Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg">
                    <BookOpen className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{law.title}</h2>
                    <p className="text-gray-300">{law.description}</p>
                  </div>
                </div>
              </div>

              {/* Sections */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <FileText className="h-5 w-5 mr-2 text-blue-400" />
                  Key Sections
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {law.sections.map((section, sectionIndex) => (
                    <div
                      key={sectionIndex}
                      className="bg-gray-800 p-6 rounded-lg border border-gray-700"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-semibold text-blue-400">{section.section}</h4>
                        <div className="flex items-center space-x-2">
                          {section.penalty.includes('struck down') ? (
                            <AlertCircle className="h-4 w-4 text-red-400" />
                          ) : (
                            <Shield className="h-4 w-4 text-green-400" />
                          )}
                        </div>
                      </div>
                      <h5 className="text-white font-medium mb-2">{section.title}</h5>
                      <p className="text-gray-300 text-sm mb-3">{section.description}</p>
                      <div className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold ${
                        section.penalty.includes('struck down')
                          ? 'bg-red-500/20 text-red-400'
                          : section.penalty.includes('consideration')
                          ? 'bg-yellow-500/20 text-yellow-400'
                          : 'bg-red-500/20 text-red-400'
                      }`}>
                        {section.penalty}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <div className="cyber-card p-8 rounded-xl bg-yellow-500/10 border-yellow-500">
            <div className="flex items-start space-x-4">
              <AlertCircle className="h-8 w-8 text-yellow-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-white mb-3">
                  Important Legal Notice
                </h3>
                <div className="text-gray-300 space-y-2">
                  <p>
                    <strong>Disclaimer:</strong> This information is for educational purposes only and should not be considered as legal advice.
                  </p>
                  <p>
                    <strong>Always consult:</strong> A qualified legal professional for specific legal matters and current interpretations of cyber laws.
                  </p>
                  <p>
                    <strong>Laws evolve:</strong> Cyber laws are continuously updated. Always verify with official sources for the most current information.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Quick Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Official Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://www.meity.gov.in/content/information-technology-act-2000"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <BookOpen className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">IT Act 2000</h4>
              <p className="text-gray-300 text-sm">Ministry of Electronics & IT</p>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Cybercrime Portal</h4>
              <p className="text-gray-300 text-sm">Report Cyber Crimes</p>
            </a>
            <a
              href="https://cert-in.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <AlertCircle className="h-8 w-8 text-orange-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">CERT-In</h4>
              <p className="text-gray-300 text-sm">Computer Emergency Response</p>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}