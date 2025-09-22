import React from 'react';
import { Shield, Mail, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Shield className="h-8 w-8 text-cyan-400" />
              <span className="cyber-font text-xl font-bold text-white">
                CyberShield
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Your comprehensive cybersecurity awareness platform. Stay informed, stay protected.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Globe className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/threats" className="text-gray-400 hover:text-cyan-400 transition-colors">Cyber Threats</a></li>
              <li><a href="/cyber-laws" className="text-gray-400 hover:text-cyan-400 transition-colors">Cyber Laws</a></li>
              <li><a href="/password-checker" className="text-gray-400 hover:text-cyan-400 transition-colors">Password Checker</a></li>
              <li><a href="/emergency" className="text-gray-400 hover:text-cyan-400 transition-colors">Emergency Contacts</a></li>
            </ul>
          </div>

          {/* Emergency Contacts */}
          <div>
            <h3 className="text-white font-semibold mb-4">Emergency</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <strong className="text-red-400">Helpline:</strong> 1930
              </li>
              <li>
                <a 
                  href="https://cybercrime.gov.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  cybercrime.gov.in
                </a>
              </li>
              <li>
                <a 
                  href="https://cert-in.org.in" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  CERT-In
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 CyberShield. All rights reserved. Built for cybersecurity awareness and education.
          </p>
        </div>
      </div>
    </footer>
  );
}