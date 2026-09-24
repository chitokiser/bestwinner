import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Building2, ShieldCheck, Mail, PhoneCall, MapPin, Download, ArrowUpRight } from 'lucide-react';

export default function Footer({ t }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Simplified 3-Column Footer strictly matching user request: 1. About | 2. 제휴문의 | 3. Contact */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-navy-800">
          
          {/* 1. About */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('/about')}>
              <img 
                src="/images/logo/logo.png" 
                alt="BEST winner Group Vietnam" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-extrabold text-lg tracking-wider text-white">
                About BEST winner Group
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {t.footer.aboutDesc}
            </p>
            <div className="flex items-center space-x-2 text-gold-400 font-bold text-[11px] pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Korean Technology + Local Specialized Production</span>
            </div>
            <button
              onClick={() => handleLinkClick('/about')}
              className="mt-2 inline-flex items-center text-xs font-bold text-gold-400 hover:text-gold-300"
            >
              <span>그룹 소개 & CEO 인사말 자세히 보기 →</span>
            </button>
          </div>

          {/* 2. 제휴문의 (Partnership) */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-extrabold text-lg">
              <Building2 className="w-5 h-5 text-gold-400" />
              <h3>{t.footer.partnershipTitle}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {t.footer.partnershipDesc}
            </p>
            <div className="pt-2">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-black py-3 rounded-xl shadow-gold-glow text-xs flex items-center justify-center space-x-2"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                <span>제휴 및 프로젝트 문의하기</span>
              </button>
            </div>
          </div>

          {/* 3. Contact */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-extrabold text-lg">
              <MapPin className="w-5 h-5 text-gold-400" />
              <h3>{t.footer.contactTitle}</h3>
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{t.footer.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="font-bold text-white">{t.footer.hotline}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{t.footer.email}</span>
              </div>
            </div>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="mt-2 inline-flex items-center text-xs font-bold text-slate-200 hover:text-gold-400"
            >
              <span>Experience Center Showroom 안내 →</span>
            </button>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 BEST winner Group Vietnam. All rights reserved.</p>
          <div className="flex space-x-4">
            <span>QCVN / TCVN Compliant</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
