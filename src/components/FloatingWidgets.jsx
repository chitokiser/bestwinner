import React, { useState } from 'react';
import { 
  PhoneCall, 
  MessageCircle, 
  Calculator, 
  ChevronUp, 
  X, 
  Sparkles 
} from 'lucide-react';

export default function FloatingWidgets({ onOpenCalculator }) {
  const [showQuickMenu, setShowQuickMenu] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-3 pointer-events-auto">
      
      {/* Expanded Floating Actions */}
      {showQuickMenu && (
        <div className="flex flex-col space-y-2.5 items-end mb-2 animate-fade-in">
          
          {/* Zalo Chat Button (Vietnam National Messenger) */}
          <a
            href="https://zalo.me/0988123456" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-blue-400/30 transition-transform hover:scale-105"
          >
            <span className="w-2 h-2 rounded-full bg-emeraldGreen-400 animate-ping"></span>
            <span>Zalo Chat 💬</span>
          </a>

          {/* KakaoTalk Button (Korea Messenger) */}
          <a
            href="https://open.kakao.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 bg-amber-400 hover:bg-amber-300 text-navy-950 text-xs font-bold px-4 py-2.5 rounded-full shadow-2xl border border-amber-300 transition-transform hover:scale-105"
          >
            <span>KakaoTalk 🟡</span>
          </a>

          {/* Calculator Trigger */}
          <button
            onClick={() => { setShowQuickMenu(false); onOpenCalculator(); }}
            className="flex items-center space-x-2 bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold px-4 py-2.5 rounded-full shadow-gold-glow transition-transform hover:scale-105"
          >
            <Calculator className="w-4 h-4 stroke-[2.5]" />
            <span>승강기 자동 견적</span>
          </button>
        </div>
      )}

      {/* Main Floating Trigger Group */}
      <div className="flex items-center space-x-2">
        
        {/* Hotline Direct Phone Button */}
        <a
          href="tel:0988123456"
          className="bg-red-600 hover:bg-red-500 text-white p-3.5 rounded-full shadow-2xl border border-red-400/40 animate-pulse-slow flex items-center justify-center"
          title="Direct Hotline"
        >
          <PhoneCall className="w-5 h-5 stroke-[2.5]" />
        </a>

        {/* Floating Menu Toggle */}
        <button
          onClick={() => setShowQuickMenu(!showQuickMenu)}
          className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 text-navy-950 p-4 rounded-full shadow-gold-glow border border-gold-300 transition-transform hover:scale-110 flex items-center justify-center"
        >
          {showQuickMenu ? <X className="w-6 h-6 stroke-[2.5]" /> : <MessageCircle className="w-6 h-6 stroke-[2.5]" />}
        </button>

        {/* Scroll To Top */}
        <button
          onClick={scrollToTop}
          className="bg-navy-900/90 hover:bg-navy-800 text-slate-300 p-3 rounded-full border border-navy-700 shadow-lg"
          title="Top"
        >
          <ChevronUp className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
