import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Globe, 
  Mail, 
  MapPin, 
  AlertTriangle, 
  Shield, 
  Clock,
  Users,
  FileText,
  ExternalLink
} from 'lucide-react';

export default function EmergencyPage() {
  const emergencyContacts = [
    {
      title: 'Cyber Crime Helpline',
      number: '1930',
      description: '24/7 helpline for reporting cybercrime incidents',
      type: 'phone',
      priority: 'critical'
    },
    {
      title: 'National Cybercrime Portal',
      url: 'https://cybercrime.gov.in',
      description: 'File online complaints for cybercrime incidents',
      type: 'website',
      priority: 'critical'
    },
    {
      title: 'CERT-In Emergency',
      email: 'incident@cert-in.org.in',
      description: 'Report security incidents to Computer Emergency Response Team',
      type: 'email',
      priority: 'high'
    },
    {
      title: 'Police Emergency',
      number: '100',
      description: 'General emergency police assistance',
      type: 'phone',
      priority: 'high'
    }
  ];

  const reportingSteps = [
    {
      step: '1',
      title: 'Secure Your System',
      description: 'Disconnect from internet, preserve evidence, document the incident',
      icon: Shield
    },
    {
      step: '2',
      title: 'Gather Information',
      description: 'Collect screenshots, transaction details, communication records',
      icon: FileText
    },
    {
      step: '3',
      title: 'File Complaint',
      description: 'Report through official channels with all necessary details',
      icon: Phone
    },
    {
      step: '4',
      title: 'Follow Up',
      description: 'Monitor complaint status and provide additional information if needed',
      icon: Clock
    }
  ];

  const incidentTypes = [
    {
      title: 'Financial Fraud',
      examples: ['UPI fraud', 'Credit card theft', 'Banking scams', 'Investment fraud'],
      urgency: 'Critical'
    },
    {
      title: 'Identity Theft',
      examples: ['Aadhaar misuse', 'Document forgery', 'Impersonation', 'Account takeover'],
      urgency: 'High'
    },
    {
      title: 'Online Harassment',
      examples: ['Cyberbullying', 'Stalking', 'Threatening messages', 'Fake profiles'],
      urgency: 'High'
    },
    {
      title: 'Data Breach',
      examples: ['Personal data leak', 'Privacy violation', 'Unauthorized access', 'Data theft'],
      urgency: 'Medium'
    }
  ];

  const statePortals = [
    { state: 'Maharashtra', url: 'https://cybercrime.maharashtrapolice.gov.in' },
    { state: 'Delhi', url: 'https://delhipolice.nic.in' },
    { state: 'Karnataka', url: 'https://cybercrime.karnataka.gov.in' },
    { state: 'Tamil Nadu', url: 'https://eservices.tnpolice.gov.in' },
    { state: 'Gujarat', url: 'https://gujaratpolice.gov.in' },
    { state: 'West Bengal', url: 'https://wb.gov.in' }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical': return 'bg-red-500/20 border-red-500 text-red-400';
      case 'high': return 'bg-orange-500/20 border-orange-500 text-orange-400';
      default: return 'bg-yellow-500/20 border-yellow-500 text-yellow-400';
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
            <Phone className="h-16 w-16 text-red-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Emergency Contacts
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Quick access to cybercrime reporting portals and emergency assistance
          </p>
        </motion.div>

        {/* Emergency Alert */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="cyber-card p-8 rounded-xl mb-12 bg-red-500/10 border-red-500"
        >
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4 cyber-pulse" />
            <h2 className="text-2xl font-bold text-white mb-4">
              Under Cyber Attack? Act Fast!
            </h2>
            <p className="text-gray-300 mb-6">
              If you're experiencing an active cyber attack, follow these immediate steps
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-red-400 font-semibold mb-2">1. Disconnect</h3>
                <p className="text-gray-300 text-sm">Disconnect from internet immediately</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-red-400 font-semibold mb-2">2. Document</h3>
                <p className="text-gray-300 text-sm">Take screenshots of evidence</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <h3 className="text-red-400 font-semibold mb-2">3. Report</h3>
                <p className="text-gray-300 text-sm">Call 1930 or file online complaint</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Emergency Contacts Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Emergency Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className={`cyber-card p-8 rounded-xl border ${getPriorityColor(contact.priority)}`}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg">
                    {contact.type === 'phone' && <Phone className="h-6 w-6 text-red-400" />}
                    {contact.type === 'website' && <Globe className="h-6 w-6 text-blue-400" />}
                    {contact.type === 'email' && <Mail className="h-6 w-6 text-green-400" />}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{contact.title}</h3>
                    <p className="text-gray-300 mb-4">{contact.description}</p>
                    
                    {contact.number && (
                      <a
                        href={`tel:${contact.number}`}
                        className="inline-flex items-center space-x-2 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                      >
                        <Phone className="h-5 w-5" />
                        <span>{contact.number}</span>
                      </a>
                    )}
                    
                    {contact.url && (
                      <a
                        href={contact.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center space-x-2 cyber-button text-white px-6 py-3 rounded-lg font-semibold"
                      >
                        <Globe className="h-5 w-5" />
                        <span>Visit Portal</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    
                    {contact.email && (
                      <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
                      >
                        <Mail className="h-5 w-5" />
                        <span>{contact.email}</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Reporting Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How to Report Cybercrime
          </h2>
          <div className="space-y-8">
            {reportingSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="cyber-card p-8 rounded-xl"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full cyber-font text-2xl font-bold text-white">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-4">
                      <step.icon className="h-6 w-6 text-cyan-400" />
                      <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                    </div>
                    <p className="text-gray-300 text-lg">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Incident Types */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Types of Incidents to Report
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {incidentTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="cyber-card p-6 rounded-xl"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{type.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    type.urgency === 'Critical' 
                      ? 'bg-red-500/20 text-red-400' 
                      : type.urgency === 'High'
                      ? 'bg-orange-500/20 text-orange-400'
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {type.urgency}
                  </span>
                </div>
                <div className="space-y-2">
                  {type.examples.map((example, idx) => (
                    <div key={idx} className="text-gray-300 text-sm">
                      • {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* State Cyber Crime Portals */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            State Cyber Crime Portals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {statePortals.map((portal, index) => (
              <motion.div
                key={portal.state}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="cyber-card p-6 rounded-xl text-center"
              >
                <MapPin className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-3">{portal.state}</h3>
                <a
                  href={portal.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <span className="text-sm">Visit Portal</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="cyber-card p-8 rounded-xl bg-blue-500/10 border-blue-500"
        >
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Additional Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Support Organizations
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• Women Helpline: 181</li>
                <li>• Child Helpline: 1098</li>
                <li>• Senior Citizen Helpline: 14567</li>
                <li>• Anti-Ragging Helpline: 1800-180-5522</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-400 mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-2" />
                Legal Resources
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li>• National Legal Services Authority</li>
                <li>• Consumer Protection Authority</li>
                <li>• Information Technology Act, 2000</li>
                <li>• Indian Penal Code Sections</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}