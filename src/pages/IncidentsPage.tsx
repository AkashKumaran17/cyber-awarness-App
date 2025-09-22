import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Newspaper, AlertTriangle, Clock, ExternalLink, Shield } from 'lucide-react';

export default function IncidentsPage() {
  const [incidents, setIncidents] = useState([]);

  // Mock data - In real app, this would come from news API
  const mockIncidents = [
    {
      id: 1,
      title: 'Major Banking Trojan Targets Indian Banks',
      summary: 'New strain of banking malware discovered targeting major Indian financial institutions through phishing campaigns.',
      source: 'CERT-In Alert',
      date: '2025-01-15',
      severity: 'Critical',
      category: 'Banking Security',
      link: '#',
      impact: 'High - Multiple banks affected'
    },
    {
      id: 2,
      title: 'Ransomware Attack on Government Portal',
      summary: 'State government website compromised by ransomware group, citizen data potentially at risk.',
      source: 'Cybersecurity News',
      date: '2025-01-14',
      severity: 'High',
      category: 'Government',
      link: '#',
      impact: 'Medium - Service disruption'
    },
    {
      id: 3,
      title: 'Phishing Campaign Targets UPI Users',
      summary: 'Sophisticated phishing campaign mimicking popular UPI apps to steal banking credentials.',
      source: 'Financial Times',
      date: '2025-01-13',
      severity: 'High',
      category: 'Mobile Security',
      link: '#',
      impact: 'High - Consumer financial data'
    },
    {
      id: 4,
      title: 'Data Breach at E-commerce Platform',
      summary: 'Personal information of 2 million users exposed due to security vulnerability in payment system.',
      source: 'Tech Security Report',
      date: '2025-01-12',
      severity: 'Medium',
      category: 'Data Breach',
      link: '#',
      impact: 'Medium - Personal data exposed'
    },
    {
      id: 5,
      title: 'IoT Botnet Targeting Smart Home Devices',
      summary: 'Security researchers discover new botnet compromising smart cameras and routers across India.',
      source: 'IoT Security Lab',
      date: '2025-01-11',
      severity: 'Medium',
      category: 'IoT Security',
      link: '#',
      impact: 'Low - Device compromise'
    },
    {
      id: 6,
      title: 'Cryptocurrency Exchange Security Breach',
      summary: 'Major cryptocurrency exchange reports unauthorized access to user accounts, investigation ongoing.',
      source: 'Blockchain News',
      date: '2025-01-10',
      severity: 'High',
      category: 'Cryptocurrency',
      link: '#',
      impact: 'High - Financial losses reported'
    }
  ];

  useEffect(() => {
    // In real app, fetch from news API
    setIncidents(mockIncidents);
  }, []);

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-500/20 border-red-500';
      case 'High': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      default: return 'text-green-400 bg-green-500/20 border-green-500';
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex justify-center mb-6">
            <Newspaper className="h-16 w-16 text-blue-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Security Incidents
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest cybersecurity incidents and threats affecting India
          </p>
        </motion.div>

        {/* Alert Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-card p-6 rounded-xl mb-8 bg-orange-500/10 border-orange-500"
        >
          <div className="flex items-center space-x-4">
            <AlertTriangle className="h-8 w-8 text-orange-400 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">
                Live Security Alerts
              </h3>
              <p className="text-gray-300">
                Critical incidents are reported in real-time. For immediate threats, contact authorities at 1930.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Incidents Feed */}
        <div className="space-y-6">
          {incidents.map((incident, index) => (
            <motion.div
              key={incident.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="cyber-card p-8 rounded-xl"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start space-x-4 flex-1">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h2 className="text-xl font-bold text-white">{incident.title}</h2>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getSeverityColor(incident.severity)}`}>
                        {incident.severity}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{incident.summary}</p>
                    
                    {/* Metadata */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <Clock className="h-4 w-4" />
                        <span>{formatDate(incident.date)}</span>
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Source:</span> {incident.source}
                      </div>
                      <div className="text-sm text-gray-400">
                        <span className="font-medium">Category:</span> {incident.category}
                      </div>
                    </div>
                    
                    {/* Impact */}
                    <div className="mb-4">
                      <div className="bg-gray-800 p-3 rounded-lg border border-gray-700">
                        <span className="text-sm font-medium text-gray-300">Impact: </span>
                        <span className="text-sm text-orange-400">{incident.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 ml-4">
                  <a
                    href={incident.link}
                    className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span className="text-sm">Read More</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Official Sources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <a
              href="https://cert-in.org.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Shield className="h-8 w-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">CERT-In</h4>
              <p className="text-gray-300 text-sm">Computer Emergency Response Team</p>
            </a>
            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <AlertTriangle className="h-8 w-8 text-red-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Cybercrime Portal</h4>
              <p className="text-gray-300 text-sm">National Cybercrime Reporting</p>
            </a>
            <a
              href="https://www.meity.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-card p-6 rounded-xl text-center hover:scale-105 transition-transform"
            >
              <Newspaper className="h-8 w-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">MeitY</h4>
              <p className="text-gray-300 text-sm">Ministry of Electronics & IT</p>
            </a>
          </div>
        </motion.div>

        {/* Subscribe Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 cyber-card p-8 rounded-xl bg-blue-500/10 border-blue-500 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Stay Informed
          </h3>
          <p className="text-gray-300 mb-6">
            Subscribe to official security bulletins and alerts to stay protected from emerging threats.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://cert-in.org.in/s2cMainServlet?pageid=PUBVLNOTES01&VLCODE=CIVN-2024"
              target="_blank"
              rel="noopener noreferrer"
              className="cyber-button text-white px-6 py-3 rounded-lg font-semibold"
            >
              Subscribe to CERT-In Alerts
            </a>
            <a
              href="https://www.meity.gov.in/content/cyber-security-initiatives"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg font-semibold transition-all"
            >
              Government Initiatives
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}