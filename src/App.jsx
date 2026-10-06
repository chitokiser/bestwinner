import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import GoogleAuthModal from './components/GoogleAuthModal';
import PwaInstallBanner from './components/PwaInstallBanner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BusinessPage from './pages/BusinessPage';
import InteriorPage from './pages/InteriorPage';
import ElevatorPage from './pages/ElevatorPage';
import SmartParkingPage from './pages/SmartParkingPage';
import FirefightingPage from './pages/FirefightingPage';
import WaterproofingPage from './pages/WaterproofingPage';
import SolarEnergyPage from './pages/SolarEnergyPage';
import DigitalAgencyPage from './pages/DigitalAgencyPage';
import AIManagementPage from './pages/AIManagementPage';
import MegazinePage from './pages/MegazinePage';
import MegazineAdminPage from './pages/MegazineAdminPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UserService } from './services/userService';
import { translations } from './locales/translations';

export default function App() {
  const [currentLang, setLang] = useState('vi'); // 'vi' (default), 'ko', 'en'
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('best_user_session');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return null;
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || firebaseUser.email.split('@')[0],
          email: firebaseUser.email,
          avatar: firebaseUser.photoURL || 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
          provider: 'Google OAuth 2.0'
        };
        const synced = await UserService.syncUserToFirestore(userData);
        setUser(synced || userData);
      }
    });
    return () => unsubscribe();
  }, []);

  const t = translations[currentLang] || translations.vi;

  return (
    <Router>
      <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans">
        
        {/* Simplified Header */}
        <Header 
          currentLang={currentLang} 
          setLang={setLang} 
          t={t}
          onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)}
          user={user}
        />

        {/* Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  t={t} 
                  onOpenCalculator={() => {
                    window.location.hash = '#/calculator';
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                />
              } 
            />
            <Route path="/about" element={<AboutPage t={t} />} />
            <Route path="/business" element={<BusinessPage t={t} />} />
            <Route path="/business/interior" element={<InteriorPage t={t} />} />
            <Route 
              path="/business/elevator" 
              element={<ElevatorPage t={t} />} 
            />
            <Route path="/business/parking" element={<SmartParkingPage t={t} />} />
            <Route path="/business/firefighting" element={<FirefightingPage t={t} />} />
            <Route path="/business/waterproofing" element={<WaterproofingPage t={t} />} />
            <Route path="/business/energy" element={<SolarEnergyPage t={t} />} />
            <Route path="/business/agency" element={<DigitalAgencyPage t={t} />} />
            <Route path="/business/digital-agency" element={<DigitalAgencyPage t={t} />} />
            <Route path="/services" element={<AIManagementPage t={t} />} />
            <Route path="/services/ai-management" element={<AIManagementPage t={t} />} />
            <Route 
              path="/megazine" 
              element={
                <MegazinePage 
                  t={t} 
                  user={user} 
                  onOpenAuth={() => setIsGoogleAuthOpen(true)} 
                />
              } 
            />
            <Route path="/megazine/admin" element={<MegazineAdminPage t={t} />} />
            <Route path="/calculator" element={<CalculatorPage t={t} />} />
            <Route path="/contact" element={<ContactPage t={t} />} />
          </Routes>
        </main>

        {/* Simplified Footer: 1. About | 2. 제휴문의 | 3. Contact */}
        <Footer 
          t={t} 
        />

        {/* Floating Omnichannel Lead Widgets */}
        <FloatingWidgets 
          t={t}
          onOpenCalculator={() => {
            window.location.hash = '#/calculator';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* PWA App Instant Install Banner */}
        <PwaInstallBanner t={t} />

        {/* Google Auth Login Modal */}
        <GoogleAuthModal 
          t={t}
          isOpen={isGoogleAuthOpen}
          onClose={() => setIsGoogleAuthOpen(false)}
          user={user}
          setUser={setUser}
        />

      </div>
    </Router>
  );
}
