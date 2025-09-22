import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Shield, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';

export default function ThreatDetailPage() {
  const { id } = useParams();

  // Mock data - in real app, this would come from API/database
  const threatDetails = {
    malware: {
      title: 'Malware',
      severity: 'High',
      description: 'Malicious software designed to damage, disrupt, or gain unauthorized access to systems. It includes viruses, worms, trojans, spyware, and ransomware.',
      howItWorks: [
        'Delivered via infected files, downloads, or email attachments',
        'Installs itself on the victim\'s device',
        'Executes malicious actions (stealing data, encrypting files, spying)',
        'May spread to other devices or networks'
      ],
      examples: [
        'Ransomware locking user files',
        'Spyware tracking user activity',
        'Trojan software disguised as legitimate apps',
        'Viruses spreading through email attachments'
      ],
      solutions: [
        'Keep OS and apps updated',
        'Use trusted antivirus and firewalls',
        'Download only from official sources',
        'Avoid opening unknown attachments'
      ],
      preventiveMeasures: [
        'Regularly back up important data',
        'Use application whitelisting',
        'Limit user privileges',
        'Monitor network traffic for anomalies'
      ],
      realCases: [
        {
          title: 'WannaCry (2017)',
          description: 'Ransomware attack that affected 200,000+ computers in 150 countries, exploiting Windows vulnerabilities.'
        },
        {
          title: 'ILOVEYOU Virus (2000)',
          description: 'Spread via email attachments, causing $10 billion in damages worldwide by overwriting files.'
        }
      ]
    },
    ransomware: {
      title: 'Ransomware',
      severity: 'Critical',
      description: 'Ransomware encrypts a victim\'s files and demands payment (usually in cryptocurrency) to restore access.',
      howItWorks: [
        'Delivered via phishing emails or malicious downloads',
        'Encrypts important files on the system',
        'Displays ransom note demanding payment',
        'Attackers may threaten to leak data if unpaid'
      ],
      examples: [
        'WannaCry',
        'Petya/NotPetya',
        'Ryuk',
        'Locky'
      ],
      solutions: [
        'Maintain offline backups',
        'Keep software updated',
        'Do not click suspicious links',
        'Deploy endpoint detection systems'
      ],
      preventiveMeasures: [
        'Restrict file execution in temporary folders',
        'Train employees on safe email practices',
        'Segment networks to reduce spread',
        'Implement zero-trust security model'
      ],
      realCases: [
        {
          title: 'Colonial Pipeline (2021)',
          description: 'Ransomware disrupted fuel supply in the U.S., causing gas shortages and panic buying.'
        },
        {
          title: 'Baltimore City (2019)',
          description: 'Ransomware shut down government systems for weeks, costing millions in recovery.'
        }
      ]
    },
    ddos: {
      title: 'Denial of Service (DoS) / DDoS',
      severity: 'High',
      description: 'Attackers overwhelm a server, service, or network with excessive requests, causing legitimate users to lose access.',
      howItWorks: [
        'Attackers send massive traffic to the target',
        'Server resources become exhausted',
        'Website/service crashes or becomes unavailable',
        'Sometimes used as a distraction for other attacks'
      ],
      examples: [
        'Botnets flooding websites',
        'Ping of Death attacks',
        'SYN Floods',
        'Application layer attacks'
      ],
      solutions: [
        'Use Content Delivery Networks (CDNs)',
        'Implement DDoS protection services (Cloudflare, Akamai)',
        'Monitor unusual traffic patterns',
        'Configure rate limiting'
      ],
      preventiveMeasures: [
        'Rate-limit traffic requests',
        'Employ redundant network resources',
        'Configure firewalls and intrusion detection systems',
        'Implement auto-scaling infrastructure'
      ],
      realCases: [
        {
          title: 'GitHub DDoS (2018)',
          description: '1.35 Tbps attack, one of the largest ever recorded, using memcached amplification.'
        },
        {
          title: 'Dyn DNS Attack (2016)',
          description: 'Took down Twitter, Netflix, and Spotify using IoT devices in a massive botnet.'
        }
      ]
    },
    mitm: {
      title: 'Man-in-the-Middle (MITM)',
      severity: 'Medium-High',
      description: 'MITM occurs when attackers secretly intercept and alter communication between two parties.',
      howItWorks: [
        'Attacker positions between victim and server (e.g., public Wi-Fi)',
        'Intercepts communications without detection',
        'Captures sensitive data (passwords, banking info)',
        'May alter messages before forwarding them'
      ],
      examples: [
        'Fake Wi-Fi hotspots',
        'Session hijacking',
        'SSL stripping',
        'ARP spoofing attacks'
      ],
      solutions: [
        'Use HTTPS and VPNs',
        'Avoid public Wi-Fi for sensitive tasks',
        'Enable end-to-end encryption',
        'Verify SSL certificates'
      ],
      preventiveMeasures: [
        'Use secure DNS (DNS over HTTPS/TLS)',
        'Keep SSL/TLS certificates updated',
        'Educate users about untrusted networks',
        'Implement certificate pinning'
      ],
      realCases: [
        {
          title: 'Superfish Adware (2015)',
          description: 'Pre-installed on Lenovo laptops, allowed HTTPS interception and compromised user security.'
        },
        {
          title: 'Equifax Breach (2017)',
          description: 'Attackers used MITM techniques during data theft, affecting 147 million people.'
        }
      ]
    },
    'sql-injection': {
      title: 'SQL Injection (SQLi)',
      severity: 'High',
      description: 'SQL Injection exploits vulnerabilities in web applications to gain unauthorized access to databases.',
      howItWorks: [
        'Attacker inserts malicious SQL queries into input fields',
        'Application executes the injected query',
        'Database reveals sensitive information or allows data manipulation',
        'Attackers may delete or alter data'
      ],
      examples: [
        'Login bypass using \' OR \'1\'=\'1',
        'Dumping entire customer databases',
        'Manipulating e-commerce transactions',
        'Extracting password hashes'
      ],
      solutions: [
        'Use prepared statements (parameterized queries)',
        'Employ web application firewalls',
        'Sanitize and validate user input',
        'Apply principle of least privilege'
      ],
      preventiveMeasures: [
        'Conduct regular vulnerability scans',
        'Follow secure coding practices',
        'Apply least-privilege access to databases',
        'Implement input validation and output encoding'
      ],
      realCases: [
        {
          title: 'Heartland Payment Systems (2008)',
          description: 'SQL injection exposed 130M credit card records, one of the largest payment processor breaches.'
        },
        {
          title: 'Yahoo Breach (2012)',
          description: 'SQLi led to 450,000 leaked passwords and compromised user accounts.'
        }
      ]
    }
  };

  const threat = threatDetails[id as keyof typeof threatDetails];

  if (!threat) {
    return (
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Threat Not Found</h1>
          <Link to="/threats" className="text-cyan-400 hover:text-cyan-300">
            ← Back to Threats
          </Link>
        </div>
      </div>
    );
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-500/20 border-red-500';
      case 'High': return 'text-orange-400 bg-orange-500/20 border-orange-500';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20 border-yellow-500';
      default: return 'text-green-400 bg-green-500/20 border-green-500';
    }
  };

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            to="/threats"
            className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Threats
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gray-700 rounded-lg">
                <AlertTriangle className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-white mb-2">{threat.title}</h1>
                <span className={`px-4 py-2 rounded-full text-sm font-semibold border ${getSeverityColor(threat.severity)}`}>
                  {threat.severity} Risk
                </span>
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-300">{threat.description}</p>
        </motion.div>

        {/* How It Works */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertTriangle className="h-6 w-6 mr-3 text-red-400" />
            How It Works
          </h2>
          <ol className="space-y-4">
            {threat.howItWorks.map((step, index) => (
              <li key={index} className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-8 h-8 bg-red-500/20 text-red-400 rounded-full font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-300 flex-1">{step}</p>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* Examples */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <XCircle className="h-6 w-6 mr-3 text-orange-400" />
            Common Examples
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {threat.examples.map((example, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                <p className="text-gray-300">{example}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Shield className="h-6 w-6 mr-3 text-green-400" />
            Protection Solutions
          </h2>
          <div className="space-y-3">
            {threat.solutions.map((solution, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300">{solution}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Preventive Measures */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <CheckCircle className="h-6 w-6 mr-3 text-blue-400" />
            Preventive Measures
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {threat.preventiveMeasures.map((measure, index) => (
              <div key={index} className="bg-blue-500/10 border border-blue-500 p-4 rounded-lg">
                <p className="text-blue-300">{measure}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Real Cases */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="cyber-card p-8 rounded-xl mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Real-World Cases</h2>
          <div className="space-y-6">
            {threat.realCases.map((case_, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                <h3 className="text-xl font-semibold text-white mb-3">{case_.title}</h3>
                <p className="text-gray-300">{case_.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Emergency Contact */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="cyber-card p-8 rounded-xl bg-red-500/10 border-red-500"
        >
          <div className="text-center">
            <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Victim of This Threat?
            </h3>
            <p className="text-gray-300 mb-6">
              If you believe you've been targeted by this threat, act quickly to minimize damage.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:1930"
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition-all"
              >
                Call Helpline: 1930
              </a>
              <Link
                to="/emergency"
                className="cyber-button text-white px-6 py-3 rounded-lg font-semibold"
              >
                Get Emergency Help
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}