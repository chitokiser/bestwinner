import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Share, PlusSquare, Check } from 'lucide-react';

export default function PwaInstallBanner() {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [isIos, setIsIos] = useState(false);
  const [showIosGuide, setShowIosGuide] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Check if already in standalone app mode
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true) {
      setIsInstalled(true);
      return;
    }

    // Check iOS Safari
    const ua = window.navigator.userAgent;
    const isIosDevice = /iphone|ipad|ipod/i.test(ua);
    const isSafari = /safari/i.test(ua) && !/chrome|crios|fxios/i.test(ua);
    if (isIosDevice && isSafari) {
      setIsIos(true);
      // Show banner for iOS if not dismissed in this session
      const dismissed = sessionStorage.getItem('pwa_ios_dismissed');
      if (!dismissed) {
        setShowBanner(true);
      }
    }

    // Listen for beforeinstallprompt event (Android / Chrome / Edge)
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      const dismissed = sessionStorage.getItem('pwa_prompt_dismissed');
      if (!dismissed) {
        setShowBanner(true);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Listen for appinstalled
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowBanner(false);
      setDeferredPrompt(null);
    };
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (isIos) {
      setShowIosGuide(!showIosGuide);
      return;
    }

    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
      setShowBanner(false);
    }
    setDeferredPrompt(null);
  };

  const handleDismiss = () => {
    setShowBanner(false);
    sessionStorage.setItem('pwa_prompt_dismissed', 'true');
    if (isIos) {
      sessionStorage.setItem('pwa_ios_dismissed', 'true');
    }
  };

  if (isInstalled || !showBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 transition-all duration-500 animate-slide-up">
      <div className="glass-card-gold p-4 rounded-2xl border border-gold-500/50 shadow-2xl bg-navy-950/95 backdrop-blur-xl relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2.5 right-2.5 p-1 text-slate-400 hover:text-white rounded-lg transition-colors"
          title="닫기"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center space-x-3.5 pr-6">
          <div className="w-12 h-12 rounded-xl bg-navy-900 border border-gold-500/40 p-1 flex-shrink-0 flex items-center justify-center shadow-md">
            <img src="/icons/icon-192.png" alt="BEST winner App Icon" className="w-full h-full object-contain rounded-lg" />
          </div>

          <div className="space-y-0.5 flex-1 min-w-0">
            <div className="flex items-center space-x-1.5">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">공식 앱 출시</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emeraldGreen-400 animate-pulse"></span>
            </div>
            <h4 className="text-sm font-black text-white truncate">
              BEST winner Group 앱 설치
            </h4>
            <p className="text-[11px] text-slate-300 truncate">
              홈 화면에 추가하여 당근처럼 빠른 실행
            </p>
          </div>
        </div>

        <div className="mt-3 pt-2.5 border-t border-navy-800 flex items-center justify-between gap-2">
          <span className="text-[10px] text-slate-400">
            {isIos ? "iOS Safari 지원" : "원클릭 즉시 설치"}
          </span>

          <button
            onClick={handleInstallClick}
            className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-extrabold px-4 py-2 rounded-xl text-xs shadow-gold-glow flex items-center space-x-1.5 transition-transform active:scale-95"
          >
            <Download className="w-3.5 h-3.5" />
            <span>{isIos ? "iOS 설치 방법" : "앱 설치하기"}</span>
          </button>
        </div>

        {/* iOS installation instructions popup */}
        {showIosGuide && isIos && (
          <div className="mt-3 p-3 bg-navy-900 rounded-xl border border-gold-500/30 text-xs text-slate-200 space-y-2">
            <p className="font-bold text-gold-300 flex items-center space-x-1">
              <span>iPhone/iPad 홈 화면에 설치하는 법:</span>
            </p>
            <ol className="list-decimal list-inside space-y-1 text-[11px] text-slate-300">
              <li>사파리 하단 중앙의 <Share className="w-3 h-3 inline text-gold-400" /> **공유** 아이콘 클릭</li>
              <li>메뉴를 올려 <PlusSquare className="w-3 h-3 inline text-gold-400" /> **'홈 화면에 추가'** 선택</li>
              <li>우측 상단 **'추가'**를 누르면 앱 아이콘 생성을 완료합니다.</li>
            </ol>
          </div>
        )}
      </div>
    </div>
  );
}
