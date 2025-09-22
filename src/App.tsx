
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
        <span className="text-white text-2xl">Loading...</span>
      </div>
    );
  }
  if (!user) {
    return (
      <Router>
        <Routes>
          <Route path="/*" element={<AuthPage />} />
        </Routes>
      </Router>
    );
  }
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
        <div className="cyber-grid-bg min-h-screen">
          <Navbar />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/threats" element={<ThreatsPage />} />
              <Route path="/threats/:id" element={<ThreatDetailPage />} />
              <Route path="/cyber-laws" element={<CyberLawsPage />} />
              <Route path="/password-checker" element={<PasswordCheckerPage />} />
              <Route path="/malware" element={<MalwarePage />} />
              <Route path="/incidents" element={<IncidentsPage />} />
              <Route path="/emergency" element={<EmergencyPage />} />
              <Route path="/learning" element={<LearningPage />} />
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