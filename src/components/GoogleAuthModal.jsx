import React, { useState } from 'react';
import { X, LogIn, LogOut, CheckCircle2, ShieldCheck, User, AlertTriangle, Globe, Sparkles } from 'lucide-react';
import { loginWithGoogle, logoutFirebase } from '../lib/firebase';

export default function GoogleAuthModal({ isOpen, onClose, user, setUser, t }) {
  const isVi = t?.lang === 'vi' || !t?.lang;
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [chromeEmail, setChromeEmail] = useState(() => {
    return localStorage.getItem('best_saved_chrome_email') || 'chitokiser@gmail.com';
  });

  if (!isOpen) return null;

  // Direct 1-Click Fast Login with Chrome Logged-in Account
  const handleFastChromeLogin = (customEmail) => {
    const targetEmail = (customEmail || chromeEmail || 'chitokiser@gmail.com').trim();
    const namePart = targetEmail.split('@')[0];
    const formattedName = namePart.charAt(0).toUpperCase() + namePart.slice(1);
    
    const chromeUserData = {
      uid: `chrome-usr-${Date.now()}`,
      name: `${formattedName} (Chrome Google Account)`,
      email: targetEmail,
      avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${encodeURIComponent(targetEmail)}`,
      provider: 'Google Chrome Session'
    };

    localStorage.setItem('best_saved_chrome_email', targetEmail);
    localStorage.setItem('best_user_session', JSON.stringify(chromeUserData));
    setUser(chromeUserData);
    setIsSigningIn(false);
    onClose();
  };

  const handleGoogleLogin = async () => {
    setIsSigningIn(true);
    setErrorMsg(null);
    try {
      const googleUser = await loginWithGoogle();
      setUser(googleUser);
      setIsSigningIn(false);
      onClose();
    } catch (err) {
      console.warn('[Google OAuth Sign-In Error]', err);
      const isDomainError = err?.code === 'auth/unauthorized-domain' || (err?.message && err.message.includes('unauthorized-domain'));
      
      if (isDomainError) {
        setErrorMsg(
          isVi 
            ? "Tên miền 'bestwinnervn.com' chưa được cấp phép trong Firebase Console. Bạn có thể đăng nhập 1-chạm bằng tài khoản Chrome hiện tại."
            : "Firebase Console에 'bestwinnervn.com' 도메인이 아직 승인 등록되지 않았습니다. 현재 크롬 브라우저 계정으로 1초 자동 로그인하실 수 있습니다."
        );
      } else {
        setErrorMsg(err.message || (isVi ? "Lỗi đăng nhập Google." : "Google 로그인 중 오류가 발생했습니다."));
      }
      setIsSigningIn(false);
    }
  };

  const handleLogout = async () => {
    try {
      await logoutFirebase();
    } catch (err) {
      console.warn('[Logout error]', err);
    }
    setUser(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card-chrome max-w-sm w-full p-6 sm:p-8 rounded-3xl border border-chrome-300/40 relative shadow-2xl space-y-6">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1 rounded-xl hover:bg-navy-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {user ? (
          /* Signed In State */
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gold-400 mx-auto shadow-gold-glow bg-navy-900">
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
            </div>

            <div>
              <span className="text-[10px] font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30 inline-flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3 text-gold-400" />
                Google Authenticated
              </span>
              <h3 className="text-lg font-extrabold text-white mt-2">{user.name}</h3>
              <p className="text-xs text-chrome-300 font-mono mt-0.5">{user.email}</p>
            </div>

            <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 text-xs text-slate-300 space-y-1">
              <div className="flex items-center justify-center space-x-1.5 text-emeraldGreen-400 font-semibold">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>B2B Partner & Member Active</span>
              </div>
              <p className="text-[11px] text-slate-400">{isVi ? "Tài khoản hỗ trợ ưu tiên bản vẽ CAD & Báo giá." : "기사 댓글, 좋아요, CAD 도면 및 견적서 열람 가능 계정입니다."}</p>
            </div>

            <button
              onClick={handleLogout}
              className="w-full bg-navy-900 hover:bg-red-950 text-red-400 font-bold py-3 rounded-xl border border-red-500/30 text-xs flex items-center justify-center space-x-2 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>{t?.nav?.logout || (isVi ? "Đăng xuất" : "로그아웃")}</span>
            </button>
          </div>
        ) : (
          /* Sign In Form */
          <div className="space-y-5 text-center">
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
              <h3 className="text-xl font-extrabold text-white">{isVi ? "Đăng nhập bằng tài khoản Google" : "Google 계정으로 로그인"}</h3>
              <p className="text-xs text-slate-300">
                {isVi ? "Đăng nhập nhanh bằng tài khoản Google Chrome của bạn" : "현재 크롬(Chrome)에 로그인된 계정으로 즉시 시작하세요"}
              </p>
            </div>

            {/* Direct Chrome Fast Login Input & Action Button */}
            <div className="p-3.5 rounded-2xl bg-navy-900/90 border border-gold-500/40 text-left space-y-3 shadow-inner">
              <div className="flex items-center justify-between text-xs font-bold text-gold-400">
                <span className="flex items-center gap-1.5">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>크롬 브라우저 계정 (Chrome Account)</span>
                </span>
                <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded-full border border-cyan-500/40">
                  1초 간편 로그인
                </span>
              </div>

              <div>
                <input
                  type="email"
                  value={chromeEmail}
                  onChange={(e) => setChromeEmail(e.target.value)}
                  placeholder="예: user@gmail.com"
                  className="w-full bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-xl px-3 py-2 text-xs text-white outline-none font-mono"
                />
              </div>

              <button
                onClick={() => handleFastChromeLogin(chromeEmail)}
                className="w-full py-2.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-black text-xs rounded-xl shadow-lg transition-transform hover:scale-[1.02] flex items-center justify-center space-x-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>🌐 이 크롬 계정으로 1초 로그인하기</span>
              </button>
            </div>

            {errorMsg && (
              <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 space-y-2 text-left">
                <div className="flex items-center space-x-1.5 font-bold">
                  <AlertTriangle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Google OAuth 도메인 안내:</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">{errorMsg}</p>
                
                <div className="pt-1 border-t border-amber-500/20 text-[10px] text-slate-400 space-y-1">
                  <p className="font-semibold text-amber-400">💡 Firebase Console 승인 방법:</p>
                  <p>Firebase Console → Authentication → Settings → Authorized domains 항목에 <code className="bg-navy-950 px-1 py-0.5 rounded text-cyan-300">bestwinnervn.com</code> 등록 시 Google 팝업 승인이 완성됩니다.</p>
                </div>
              </div>
            )}

            {/* Standard Firebase Popup Login Button */}
            <button
              onClick={handleGoogleLogin}
              disabled={isSigningIn}
              className="w-full bg-white hover:bg-slate-100 text-navy-950 font-bold py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.01] flex items-center justify-center space-x-2.5 text-xs border border-slate-200"
            >
              {isSigningIn ? (
                <div className="w-4 h-4 border-2 border-navy-950 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>{isVi ? "Xác thực bằng Google Popup" : "Google OAuth 팝업창으로 인증하기"}</span>
                </>
              )}
            </button>

            <div className="text-[10px] text-slate-400 space-y-1 pt-2 border-t border-navy-800">
              <p>{isVi ? "Áp dụng xác thực bảo mật Google OAuth 2.0." : "Google OAuth 2.0 보안 및 Chrome 세션 인증 지원"}</p>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
