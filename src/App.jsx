import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seo from './seo/Seo';
import { navigateTo } from './seo/navigate';

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
import MerchantProductsPage from './pages/MerchantProductsPage';
import EventsPage from './pages/EventsPage';
import MegazinePage from './pages/MegazinePage';
// 외부 주소로 바로 이동 (사이트 안 링크로 들어온 경우)
function ExternalRedirect({ to }) {
  if (typeof window !== 'undefined') window.location.replace(to);
  return null;
}
import CalculatorPage from './pages/CalculatorPage';
import ContactPage from './pages/ContactPage';

import { auth } from './lib/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { UserService } from './services/userService';
import { translations } from './locales/translations';

export default function App() {
  const [currentLang, setLangState] = useState(() => {
    // 'vi' (default), 'ko', 'en' — 주소 ?lang=ko 로 언어를 지정해 공유할 수 있음
    const LANGS = ['vi', 'ko', 'en'];
    try {
      const fromUrl = new URLSearchParams(window.location.search).get('lang');
      if (LANGS.includes(fromUrl)) {
        localStorage.setItem('bestwinner_lang', fromUrl);
        return fromUrl;
      }
      const saved = localStorage.getItem('bestwinner_lang');
      if (LANGS.includes(saved)) return saved;
      const browser = (navigator.languages || [navigator.language || '']).map((l) => String(l).toLowerCase());
      if (browser.some((l) => l.startsWith('ko'))) return 'ko';
    } catch (e) { }
    return 'vi';
  });
  const setLang = (lang) => {
    localStorage.setItem('bestwinner_lang', lang);
    setLangState(lang);
  };

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

  const rawT = translations[currentLang] || translations.vi;
  const t = { ...rawT, lang: currentLang };

  return (
    <Router>
      <Seo lang={currentLang} />
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
                    navigateTo('/calculator');
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
              path="/services/products" 
              element={
                <MerchantProductsPage 
                  t={t} 
                  user={user} 
                  onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} 
                />
              } 
            />
            <Route 
              path="/services/merchant-products" 
              element={
                <MerchantProductsPage 
                  t={t} 
                  user={user} 
                  onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} 
                />
              } 
            />
            <Route 
              path="/services/events" 
              element={
                <EventsPage 
                  t={t} 
                  user={user} 
                  onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} 
                />
              } 
            />
            <Route 
              path="/events" 
              element={
                <EventsPage 
                  t={t} 
                  user={user} 
                  onOpenGoogleAuth={() => setIsGoogleAuthOpen(true)} 
                />
              } 
            />
            {/* BEST MEGAZINE: 베스트클럽 웹진 기사를 이 사이트 화면으로 보여줌 (2026-10-21). 편집은 베스트클럽 웹진 */}
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
            <Route path="/megazine/admin" element={<ExternalRedirect to="https://bestclubvn.netlify.app/admin_webzine.html" />} />
            <Route path="/calculator" element={<CalculatorPage t={t} />} />
            <Route path="/contact" element={<ContactPage t={t} />} />
            {/* Fallback Catch-All Route */}
            <Route path="*" element={<HomePage t={t} />} />
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
            navigateTo('/calculator');
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
