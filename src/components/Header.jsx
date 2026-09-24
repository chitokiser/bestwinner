import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Globe, 
  ChevronDown, 
  LogIn, 
  Menu, 
  X,
  UserCheck
} from 'lucide-react';

export default function Header({ currentLang, setLang, t, onOpenGoogleAuth, user }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
  const [isBUDropdownOpen, setIsBUDropdownOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const languages = [
    { code: 'vi', label: 'Tiếng Việt', flag: '🇻🇳' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ];

  // 5 Business Units strictly matching user specification
  const businessUnitsNav = [
    { id: 'interior', path: '/business/interior', name: 'BEST winner interior Vn (인테리어)', tag: 'Interior' },
    { id: 'elevator', path: '/business/elevator', name: 'BEST winner elevator Vn (엘리베이터)', tag: 'Elevator' },
    { id: 'parking', path: '/business/parking', name: 'BEST winner AI Smart Parking (AI 스마트파킹)', tag: 'AI Parking' },
    { id: 'firefighting', path: '/business/firefighting', name: 'BEST winner Firefighting materials (소방자재)', tag: 'Fire Safety' },
    { id: 'waterproofing', path: '/business/waterproofing', name: 'BEST winner Waterproofing Vn (방수재)', tag: 'Waterproof' },
  ];

  const handleNavClick = (path) => {
    setIsMobileMenuOpen(false);
    setIsBUDropdownOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-navy-800/80 bg-navy-950/90 backdrop-blur-md transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo on Left */}
          <Link 
            to="/" 
            className="flex items-center space-x-3 group" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img 
              src="/images/logo/logo.png" 
              alt="BEST winner Group Vietnam" 
              className="h-12 sm:h-14 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="hidden sm:block border-l border-navy-800 pl-3">
              <span className="text-xs font-black tracking-wider text-white uppercase block leading-none">
                BEST winner <span className="gold-gradient-text">Group</span>
              </span>
              <span className="text-[10px] text-chrome-400 font-medium tracking-widest block mt-0.5">
                Vietnam Official
              </span>
            </div>
          </Link>

          {/* Simple Header Navbar strictly: 1. 홈 | 2. 사업분야 (인테리어/엘리베이터/AI 스마트파킹/소방자재/방수재) */}
          <nav className="hidden md:flex items-center space-x-2">
            
            {/* 1. 홈 */}
            <Link
              to="/"
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${
                location.pathname === '/' 
                  ? 'text-gold-400 bg-navy-900 border border-gold-500/30 shadow-sm' 
                  : 'text-slate-200 hover:bg-navy-900/80 hover:text-gold-400'
              }`}
            >
              {t.nav.home}
            </Link>

            {/* 2. 사업분야 Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsBUDropdownOpen(!isBUDropdownOpen)}
                className={`px-4 py-2 rounded-xl text-sm font-bold transition-all flex items-center ${
                  location.pathname.startsWith('/business') 
                    ? 'text-gold-400 bg-navy-900 border border-gold-500/30 shadow-sm' 
                    : 'text-slate-200 hover:bg-navy-900/80 hover:text-gold-400'
                }`}
              >
                <span>{t.nav.business}</span>
                <ChevronDown className="w-4 h-4 ml-1.5 text-gold-500" />
              </button>

              {isBUDropdownOpen && (
                <div className="absolute left-0 mt-2 w-80 bg-navy-900/95 backdrop-blur-xl border border-gold-500/30 rounded-2xl shadow-2xl py-2 z-50 divide-y divide-navy-800">
                  {businessUnitsNav.map((bu) => (
                    <button
                      key={bu.id}
                      onClick={() => handleNavClick(bu.path)}
                      className={`w-full text-left px-4 py-3 text-xs text-slate-200 hover:bg-navy-800 hover:text-gold-400 transition-colors flex items-center justify-between group ${
                        location.pathname === bu.path ? 'bg-navy-800/80 text-gold-400 font-bold' : ''
                      }`}
                    >
                      <span className="font-bold group-hover:translate-x-1 transition-transform">{bu.name}</span>
                      <span className="text-[10px] bg-navy-950 text-gold-400 px-2 py-0.5 rounded-full border border-navy-700">
                        {bu.tag}
                      </span>
                    </button>
                  ))}
                </div>
              )}
            </div>

          </nav>

          {/* Right Controls: Language Selector + 3. 로그인(구글로그인) */}
          <div className="hidden md:flex items-center space-x-3">
            
            {/* Globe Multi-Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                className="flex items-center space-x-1.5 px-3 py-2 rounded-xl bg-navy-900 border border-navy-800 text-xs font-semibold text-slate-200 hover:border-gold-500/40 transition-colors"
              >
                <Globe className="w-4 h-4 text-gold-400" />
                <span>{languages.find(l => l.code === currentLang)?.flag}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {isLangDropdownOpen && (
                <div className="absolute right-0 mt-2 w-36 bg-navy-900 border border-gold-500/30 rounded-xl shadow-2xl z-50 py-1 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setLang(lang.code);
                        setIsLangDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs flex items-center space-x-2 hover:bg-navy-800 transition-colors ${
                        currentLang === lang.code ? 'text-gold-400 font-bold bg-navy-800/80' : 'text-slate-300'
                      }`}
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.label}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* 3. 로그인(구글로그인) Button */}
            <button
              onClick={onOpenGoogleAuth}
              className="bg-white hover:bg-slate-100 text-navy-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all transform hover:scale-105 flex items-center space-x-2 border border-slate-200"
            >
              {user ? (
                <>
                  <img src={user.avatar} alt={user.name} className="w-4 h-4 rounded-full" />
                  <span>{user.name.split(' ')[0]} (구글 계정)</span>
                </>
              ) : (
                <>
                  {/* Google SVG Icon */}
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>{t.nav.login}</span>
                </>
              )}
            </button>

          </div>

          {/* Mobile menu toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-navy-900 text-slate-200 hover:text-gold-400 border border-navy-800"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-navy-950 border-b border-navy-800 px-4 pt-3 pb-6 space-y-4 shadow-2xl">
          
          {/* Mobile Language Switcher */}
          <div className="flex items-center justify-between pb-3 border-b border-navy-800">
            <span className="text-xs font-bold text-slate-400 flex items-center">
              <Globe className="w-3.5 h-3.5 text-gold-400 mr-1.5" />
              Language / 언어
            </span>
            <div className="flex space-x-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => setLang(lang.code)}
                  className={`px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all min-h-[36px] flex items-center space-x-1 ${
                    currentLang === lang.code 
                      ? 'bg-gold-500 text-navy-950 shadow-sm' 
                      : 'bg-navy-900 text-slate-300 border border-navy-800 hover:border-gold-500/30'
                  }`}
                >
                  <span>{lang.flag}</span>
                  <span className="uppercase">{lang.code}</span>
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => handleNavClick('/')}
            className="w-full text-left px-3 py-3 text-sm font-bold text-slate-200 hover:bg-navy-900 rounded-xl min-h-[44px] flex items-center"
          >
            {t.nav.home}
          </button>
          
          <div className="pl-3 py-1 space-y-2 border-l-2 border-gold-500/50">
            <p className="text-xs font-bold text-gold-400 uppercase tracking-wider">{t.nav.business}</p>
            {businessUnitsNav.map((bu) => (
              <button
                key={bu.id}
                onClick={() => handleNavClick(bu.path)}
                className="block w-full text-left text-xs text-slate-300 hover:text-gold-400 py-2 font-semibold min-h-[40px] flex items-center"
              >
                • {bu.name}
              </button>
            ))}
          </div>

          <div className="pt-2">
            <button
              onClick={() => { setIsMobileMenuOpen(false); onOpenGoogleAuth(); }}
              className="w-full bg-white text-navy-950 font-black py-3.5 rounded-xl shadow-md flex justify-center items-center text-sm space-x-2 min-h-[48px]"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
              <span>{user ? user.name : t.nav.login}</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
