import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  AlertTriangle, 
  Lock, 
  Wifi, 
  Smartphone, 
  Database,
  Search,
  ArrowRight,
  Mail
} from 'lucide-react';

export default function ThreatsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  const threats = [
    {
      id: 'phishing',
      title: 'Phishing',
      icon: Mail,
      severity: 'High Risk',
      description: 'Phishing tricks users into revealing credentials, personal data, or installing malware by pretending to be a trusted party.',
      examples: [
        'Fake bank/email provider login pages that steal usernames/passwords',
        'Spear-phishing targeting an individual (e.g., CFO) with a tailored message asking for wire transfers',
        'Business Email Compromise (BEC): attacker spoofs or hijacks an executive\'s email to request invoice payments',
        'Smishing/Vishing: malicious SMS or voice calls asking for OTPs or account details',
        'Malicious attachments (invoice.doc with macro) that install remote access trojans'
      ],
      howItWorks: [
        'Attacker crafts a convincing message (email, SMS, social media) that appears legitimate',
        'Victim clicks a link or opens an attachment that leads to a fake login page or installs malware',
        'Victim submits credentials or the malware captures keystrokes, cookies, or other sensitive data',
        'Attacker uses stolen credentials to access accounts, move laterally, commit fraud, or exfiltrate data'
      ],
      protection: [
        'Enable Multi-Factor Authentication (MFA) everywhere possible',
        'Use email security: SPF, DKIM, DMARC, and advanced email filters (ATP/secure email gateways)',
        'Deploy browser and endpoint protections that detect fake sites and block malicious downloads',
        'Implement strong link/attachment sandboxing and URL rewriting in email gateways',
        'Enforce least-privilege access and use conditional access policies'
      ],
      prevention: [
        'Conduct periodic phishing awareness training and simulated phishing exercises',
        'Keep software and browsers patched; disable risky features (e.g., macros by default)',
        'Maintain an incident response playbook for compromised credentials and BEC attempts',
        'Monitor authentication logs for unusual logins, impossible travel, and brute-force attempts',
        'Require out-of-band verification for high-value financial requests (call the requester on a known number)'
      ],
      realWorldCases: [
        'RSA SecurID Breach (2011) — Attackers used a targeted phishing email to compromise an RSA employee; stolen information weakened SecurID two-factor security for some customers',
        'Target Supply-Chain Phishing (2013) — Attackers phished credentials from an HVAC vendor, then used those credentials to access Target\'s network and exfiltrate customer payment data',
        'Sony Pictures (2014) — Spear-phishing and social engineering helped attackers gain footholds that led to a destructive breach and large data leak'
      ],
      color: 'red'
    },
    {
      id: 'malware',
      title: 'Malware',
      icon: Smartphone,
      severity: 'High',
      description: 'Malicious software designed to damage, disrupt, or gain unauthorized access to systems. Includes viruses, worms, trojans, spyware, and ransomware.',
      examples: ['Ransomware locking user files', 'Spyware tracking user activity', 'Trojan software disguised as legitimate apps'],
      howItWorks: [
        'Delivered via infected files, downloads, or email attachments',
        'Installs itself on the victim\'s device',
        'Executes malicious actions (stealing data, encrypting files, spying)',
        'May spread to other devices or networks'
      ],
      protection: [
        'Keep OS and apps updated',
        'Use trusted antivirus and firewalls',
        'Download only from official sources',
        'Avoid opening unknown attachments'
      ],
      prevention: [
        'Regularly back up important data',
        'Use application whitelisting',
        'Limit user privileges',
        'Monitor network traffic for anomalies'
      ],
      realWorldCases: [
        'WannaCry (2017): Ransomware attack that affected 200,000+ computers in 150 countries',
        'ILOVEYOU Virus (2000): Spread via email attachments, causing $10 billion in damages'
      ],
      color: 'red'
    },
    {
      id: 'ransomware',
      title: 'Ransomware',
      icon: Lock,
      severity: 'Critical',
      description: 'Ransomware encrypts a victim\'s files and demands payment (usually in cryptocurrency) to restore access.',
      examples: ['WannaCry', 'Petya/NotPetya', 'Ryuk'],
      howItWorks: [
        'Delivered via phishing emails or malicious downloads',
        'Encrypts important files on the system',
        'Displays ransom note demanding payment',
        'Attackers may threaten to leak data if unpaid'
      ],
      protection: [
        'Maintain offline backups',
        'Keep software updated',
        'Do not click suspicious links',
        'Deploy endpoint detection systems'
      ],
      prevention: [
        'Restrict file execution in temporary folders',
        'Train employees on safe email practices',
        'Segment networks to reduce spread'
      ],
      realWorldCases: [
        'Colonial Pipeline (2021): Ransomware disrupted fuel supply in the U.S.',
        'Baltimore City (2019): Ransomware shut down government systems for weeks'
      ],
      color: 'red'
    },
    {
      id: 'ddos',
      title: 'Denial of Service (DoS) / DDoS',
      icon: AlertTriangle,
      severity: 'High',
      description: 'Attackers overwhelm a server, service, or network with excessive requests, causing legitimate users to lose access.',
      examples: ['Botnets flooding websites', 'Ping of Death attacks', 'SYN Floods'],
      howItWorks: [
        'Attackers send massive traffic to the target',
        'Server resources become exhausted',
        'Website/service crashes or becomes unavailable',
        'Sometimes used as a distraction for other attacks'
      ],
      protection: [
        'Use Content Delivery Networks (CDNs)',
        'Implement DDoS protection services (Cloudflare, Akamai)',
        'Monitor unusual traffic patterns'
      ],
      prevention: [
        'Rate-limit traffic requests',
        'Employ redundant network resources',
        'Configure firewalls and intrusion detection systems'
      ],
      realWorldCases: [
        'GitHub DDoS (2018): 1.35 Tbps attack, one of the largest ever recorded',
        'Dyn DNS Attack (2016): Took down Twitter, Netflix, and Spotify'
      ],
      color: 'orange'
    },
    {
      id: 'mitm',
      title: 'Man-in-the-Middle (MITM)',
      icon: Wifi,
      severity: 'Medium-High',
      description: 'MITM occurs when attackers secretly intercept and alter communication between two parties.',
      examples: ['Fake Wi-Fi hotspots', 'Session hijacking', 'SSL stripping'],
      howItWorks: [
        'Attacker positions between victim and server (e.g., public Wi-Fi)',
        'Intercepts communications without detection',
        'Captures sensitive data (passwords, banking info)',
        'May alter messages before forwarding them'
      ],
      protection: [
        'Use HTTPS and VPNs',
        'Avoid public Wi-Fi for sensitive tasks',
        'Enable end-to-end encryption'
      ],
      prevention: [
        'Use secure DNS (DNS over HTTPS/TLS)',
        'Keep SSL/TLS certificates updated',
        'Educate users about untrusted networks'
      ],
      realWorldCases: [
        'Superfish Adware (2015): Pre-installed on Lenovo laptops, allowed HTTPS interception',
        'Equifax Breach (2017): Attackers used MITM techniques during data theft'
      ],
      color: 'orange'
    },
    {
      id: 'sql-injection',
      title: 'SQL Injection (SQLi)',
      icon: Database,
      severity: 'High',
      description: 'SQL Injection exploits vulnerabilities in web applications to gain unauthorized access to databases.',
      examples: ['Login bypass using \' OR \'1\'=\'1', 'Dumping entire customer databases', 'Manipulating e-commerce transactions'],
      howItWorks: [
        'Attacker inserts malicious SQL queries into input fields',
        'Application executes the injected query',
        'Database reveals sensitive information or allows data manipulation',
        'Attackers may delete or alter data'
      ],
      protection: [
        'Use prepared statements (parameterized queries)',
        'Employ web application firewalls',
        'Sanitize and validate user input'
      ],
      prevention: [
        'Conduct regular vulnerability scans',
        'Follow secure coding practices',
        'Apply least-privilege access to databases'
      ],
      realWorldCases: [
        'Heartland Payment Systems (2008): SQL injection exposed 130M credit card records',
        'Yahoo Breach (2012): SQLi led to 450,000 leaked passwords'
      ],
      color: 'red'
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'Critical': return 'text-red-400 bg-red-500/20';
      case 'High': return 'text-orange-400 bg-orange-500/20';
      case 'Medium': return 'text-yellow-400 bg-yellow-500/20';
      default: return 'text-green-400 bg-green-500/20';
    }
  };

  const filteredThreats = threats.filter(threat =>
    threat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    threat.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
            <AlertTriangle className="h-16 w-16 text-red-400 neon-glow" />
          </div>
          <h1 className="cyber-font text-5xl font-bold text-white mb-6">
            Cyber Threats
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay informed about the latest cybersecurity threats and learn how to protect yourself
          </p>
        </motion.div>

        {/* Search */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search threats..."
              className="w-full bg-gray-800 text-white px-6 py-4 rounded-xl pl-14 border border-gray-600 focus:border-cyan-400 focus:outline-none transition-all duration-300"
            />
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
          </div>
        </motion.div>

        {/* Threats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredThreats.map((threat, index) => (
            <motion.div
              key={threat.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/threats/${threat.id}`}>
                <div className="cyber-card p-6 rounded-xl h-full threat-gradient hover:scale-105 transition-transform">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center justify-center w-12 h-12 bg-gray-700 rounded-lg">
                      <threat.icon className="h-6 w-6 text-red-400" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getSeverityColor(threat.severity)}`}>
                      {threat.severity}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {threat.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {threat.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-300 mb-2">Examples:</h4>
                    <ul className="text-xs text-gray-400 space-y-1">
                      {threat.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center text-cyan-400 mt-auto">
                    <span className="text-sm">Learn More</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Emergency Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16"
        >
          <div className="cyber-card p-8 rounded-xl bg-red-500/10 border-red-500">
            <div className="text-center">
              <AlertTriangle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Under Attack? Get Help Immediately
              </h3>
              <p className="text-gray-300 mb-6">
                If you're experiencing a cyber attack, don't panic. Contact authorities immediately.
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
                  Emergency Resources
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}