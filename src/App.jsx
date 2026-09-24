import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import GoogleAuthModal from './components/GoogleAuthModal';
import PwaInstallBanner from './components/PwaInstallBanner';

import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import InteriorPage from './pages/InteriorPage';
import ElevatorPage from './pages/ElevatorPage';
import SmartParkingPage from './pages/SmartParkingPage';
import FirefightingPage from './pages/FirefightingPage';
import WaterproofingPage from './pages/WaterproofingPage';
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

import { translations } from './locales/translations';

export default function App() {
  const [currentLang, setLang] = useState('vi'); // 'vi' (default), 'ko', 'en'
  const [isGoogleAuthOpen, setIsGoogleAuthOpen] = useState(false);
  const [user, setUser] = useState(null);

  const t = translations[currentLang] || translations.vi;

  return (
    <Router>
      <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans">
        
        {/* Simplified Header: 1. 홈 | 2. 사업분야 (인테리어/엘리베이터/AI 스마트파킹/소방자재/방수재) | 3. 로그인(구글로그인) */}
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
            <Route path="/business/interior" element={<InteriorPage t={t} />} />
            <Route 
              path="/business/elevator" 
              element={<ElevatorPage t={t} />} 
            />
            <Route path="/business/parking" element={<SmartParkingPage t={t} />} />
            <Route path="/business/firefighting" element={<FirefightingPage t={t} />} />
            <Route path="/business/waterproofing" element={<WaterproofingPage t={t} />} />
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
          onOpenCalculator={() => {
            window.location.hash = '#/calculator';
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        />

        {/* PWA App Instant Install Banner */}
        <PwaInstallBanner />

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
