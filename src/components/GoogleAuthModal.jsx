import React, { useState } from 'react';
import { X, LogIn, LogOut, CheckCircle2, ShieldCheck, User } from 'lucide-react';

export default function GoogleAuthModal({ isOpen, onClose, user, setUser, t }) {
  const [isSigningIn, setIsSigningIn] = useState(false);

  if (!isOpen) return null;

  const handleGoogleLogin = () => {
    setIsSigningIn(true);
    setTimeout(() => {
      setUser({
        name: "김 성원 (Kim Sung-won)",
        email: "sungwon.kim@bestwinnervn.com",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        provider: "Google OAuth"
      });
      setIsSigningIn(false);
    }, 1200);
  };

  const handleLogout = () => {
    setUser(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
      <div className="glass-card-chrome max-w-sm w-full p-6 sm:p-8 rounded-3xl border border-chrome-300/40 relative shadow-2xl space-y-6">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Signed In State */
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-400 mx-auto shadow-gold-glow">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <span className="text-[10px] font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                Google OAuth Authenticated
              </span>
              <h3 className="text-lg font-extrabold text-white mt-2">{user.name}</h3>
              <p className="text-xs text-chrome-300 font-mono mt-0.5">{user.email}</p>
            </div>

            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-emeraldGreen-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>B2B Partner Session Active</span>
              </div>
              <p className="text-[11px] text-slate-400">CAD 도면 & 견적서 우선 지원 계정입니다.</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-navy-900 hover:bg-red-950 text-red-400 font-bold py-3 rounded-xl border border-red-500/30 text-xs flex items-center justify-center space-x-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t.nav.logout}</span>
            </button>
          </div>
        ) : (
          /* Sign In Form */
          <div className="space-y-6 text-center">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto shadow-md border border-slate-200">
              {/* Google G Logo SVG */}
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
              </svg>
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-extrabold text-white">Google 계정으로 로그인</h3>
              <p className="text-xs text-slate-300">
                BEST winner Group B2B 파트너 & 회원 전용 서비스
              </p>
            </div>

            <button
              onClick={handleGoogleLogin}
              disabled={isSigningIn}
              className="w-full bg-white hover:bg-slate-100 text-navy-950 font-bold py-3.5 rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center space-x-3 text-xs"
            >
              {isSigningIn ? (
                <div className="w-5 h-5 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Google 계정으로 계속하기</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-slate-400 space-y-1 pt-2 border-t border-navy-800">
              <p>Google OAuth 2.0 보안 인증이 적용됩니다.</p>
              <p>NEXT_PUBLIC_GOOGLE_CLIENT_ID: 1051842...apps.googleusercontent.com</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
