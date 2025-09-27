
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import HomePage from './pages/HomePage';
import AuthPage from './pages/AuthPage';
import ThreatsPage from './pages/ThreatsPage';
import CyberLawsPage from './pages/CyberLawsPage';
import PasswordCheckerPage from './pages/PasswordCheckerPage';
import MalwarePage from './pages/MalwarePage';
import IncidentsPage from './pages/IncidentsPage';
import EmergencyPage from './pages/EmergencyPage';
import LearningPage from './pages/LearningPage';
import ThreatDetailPage from './pages/ThreatDetailPage';


function ProtectedApp() {
  const { user, loading } = useAuth();
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cyan-400 mx-auto mb-4"></div>
          <span className="text-white text-xl">Loading Cybersecurity App...</span>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="cyber-grid-bg min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Routes>
              {/* Root route - show login page if not authenticated, home page if authenticated */}
              <Route path="/" element={user ? <HomePage /> : <AuthPage />} />
              
              {/* Public routes - accessible without authentication */}
              <Route path="/auth" element={<AuthPage />} />
              <Route path="/home" element={user ? <HomePage /> : <AuthPage />} />
              <Route path="/threats" element={<ThreatsPage />} />
              <Route path="/threats/:id" element={<ThreatDetailPage />} />
              <Route path="/malware" element={<MalwarePage />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/learning" element={<LearningPage />} />
              <Route path="/password-checker" element={<PasswordCheckerPage />} />
              <Route path="/cyber-laws" element={<CyberLawsPage />} />
              <Route path="/incidents" element={<IncidentsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <ProtectedApp />
    </AuthProvider>
  );
}

export default App;