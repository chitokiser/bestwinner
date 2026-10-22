import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Mail, 
  PhoneCall, 
  MapPin, 
  Download, 
  ArrowUpRight,
  ExternalLink,
  Cpu,
  Users,
  CheckCircle2
} from 'lucide-react';


// 한국어 화면 여부 (렌더 때 갱신) — 번역 안 된 문구를 한국어로 보여줄 때 사용
let __koLang = false;

export default function Footer({ t }) {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isVi = t?.lang === 'vi';
  __koLang = t?.lang === 'ko';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  return (
    <footer className="bg-navy-950 text-slate-400 border-t border-navy-800 text-xs py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 3-Column Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-navy-800">
          
          {/* 1. About BEST winner Group */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3 cursor-pointer" onClick={() => handleLinkClick('/about')}>
              <img 
                src="/images/logo/logo.png" 
                alt="BEST winner Group Vietnam" 
                className="h-10 w-auto object-contain"
              />
              <span className="font-extrabold text-lg tracking-wider text-white">
                {t?.footer?.aboutTitle || (isKo ? "BEST winner Group 소개" : "About BEST winner Group")}
              </span>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {t?.footer?.aboutDesc || "Tập đoàn giải pháp hạ tầng thông minh, thang máy, nội thất, PCCC và chống thấm hàng đầu Việt Nam. Công nghệ Hàn Quốc, Sản xuất chuyên biệt địa phương."}
            </p>
            
            <div className="space-y-2 pt-1">
              <div className="flex items-center space-x-2 text-gold-400 font-bold text-[11px]">
                <ShieldCheck className="w-4 h-4 flex-shrink-0" />
                <span>{isKo ? "한국 정밀 기술력 × 베트남 현지 맞춤 직영 생산" : "Korean Technology × Vietnamese Local Production"}</span>
              </div>
              <div className="flex items-center space-x-2 text-emeraldGreen-400 font-bold text-[11px]">
                <Users className="w-4 h-4 flex-shrink-0" />
                <span>{isVi ? "2 Kỹ sư Trưởng Hàn Quốc & 15 Kỹ sư Chuyên trách" : "한국인 수석 기술진 2명 & 베트남 전문 엔지니어 15명"}</span>
              </div>
            </div>

            <button
              onClick={() => handleLinkClick('/about')}
              className="mt-2 inline-flex items-center text-xs font-bold text-gold-400 hover:text-gold-300 transition-colors"
            >
              <span>{isKo ? "그룹 소개 & CEO 인사말 자세히 보기 →" : isVi ? "Xem Hồ sơ Năng lực Tập đoàn & Thông điệp CEO →" : "About Group & CEO Message →"}</span>
            </button>
          </div>

          {/* 2. 제휴문의 & B2B Partner / SaaS AI Calculator */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-extrabold text-lg">
              <Building2 className="w-5 h-5 text-gold-400" />
              <h3>{t?.footer?.partnershipTitle || "Yêu cầu Hợp tác (B2B Partner)"}</h3>
            </div>
            <p className="text-slate-300 leading-relaxed text-xs">
              {t?.footer?.partnershipDesc || "Bộ Hồ sơ Kỹ thuật & Bản vẽ CAD/DWG/BIM dành riêng cho Kiến trúc sư & Nhà thầu Xây dựng."}
            </p>
            
            <div className="space-y-2.5 pt-1">
              <button
                onClick={() => handleLinkClick('/contact')}
                className="w-full bg-gradient-to-r from-gold-500 to-gold-600 hover:from-gold-400 hover:to-gold-500 text-navy-950 font-black py-3 rounded-xl shadow-gold-glow text-xs flex items-center justify-center space-x-2 transition-all"
              >
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
                <span>{isKo ? "제휴 및 B2B 견적/도면 문의하기" : isVi ? "Yêu cầu Báo giá B2B & CAD/BIM Kit" : "B2B Inquiry & CAD/BIM Kit"}</span>
              </button>

              <a
                href="https://besterp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-navy-900 hover:bg-navy-800 text-slate-200 hover:text-white font-bold py-2.5 px-3 rounded-xl border border-gold-500/30 text-[11px] flex items-center justify-between transition-all group"
              >
                <div className="flex items-center space-x-2">
                  <Cpu className="w-4 h-4 text-gold-400 group-hover:scale-110 transition-transform" />
                  <span>{isKo ? "SaaS AI 자동 견적 시스템 (besterp.netlify.app)" : "Hệ thống Báo giá Tự động SaaS AI (besterp.netlify.app)"}</span>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
              </a>
            </div>
          </div>

          {/* 3. Contact & Head Office Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-white font-extrabold text-lg">
              <MapPin className="w-5 h-5 text-gold-400" />
              <h3>{t?.footer?.contactTitle || "Liên hệ & Showroom"}</h3>
            </div>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span className="leading-snug">{t?.footer?.address || "NO 6B-LK46B service land area, Van Phuc ward, Ha Dong district, Hanoi city, Vietnam"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span className="font-bold text-white">{t?.footer?.hotline || "Hotline: 0988-123-456"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>{t?.footer?.email || "Email: contact@bestwinnervn.com"}</span>
              </div>
            </div>
            <button
              onClick={() => handleLinkClick('/contact')}
              className="mt-2 inline-flex items-center text-xs font-bold text-slate-200 hover:text-gold-400 transition-colors"
            >
              <span>{isKo ? "하노이 Experience Center 쇼룸 안내 →" : isVi ? "Trụ sở chính & Showroom Trải nghiệm Hà Nội →" : "Hanoi Experience Center Showroom →"}</span>
            </button>
          </div>

        </div>

        {/* Corporate Legal Identity Block (Extracted strictly from BEST_Winner_Group_회사소개서.pdf) */}
        <div className="mt-8 bg-navy-900/90 rounded-2xl p-6 border border-gold-500/30 text-xs text-slate-300 space-y-4 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-navy-800 pb-3 gap-2">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-[10px] font-extrabold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/30">
                  OFFICIAL CORPORATE IDENTITY · 공식 법인 정보
                </span>
                <span className="text-[10px] text-emeraldGreen-400 font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  {__koLang ? "PDF 회사소개서 인증" : "PDF Profile Verified"}
                </span>
              </div>
              <h4 className="text-sm sm:text-base font-extrabold text-white">
                {__koLang ? "베스트위너 VN 유한회사" : "BEST WINNER VN LIMITED COMPANY"} <span className="text-xs text-slate-400 font-medium">{__koLang ? "(베스트위너 VN 유한회사)" : "(CÔNG TY TNHH BEST WINNER VN)"}</span>
              </h4>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-slate-300 text-[11px]">
              <span>{__koLang ? "세금코드(사업자번호):" : "Mã số thuế (Tax Code):"} <strong className="text-gold-400 font-mono text-xs">0110245813</strong></span>
              <span>•</span>
              <span>설립일 (Est.): <strong className="text-white">2023년 2월 9일 (Feb 09th 2023)</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-[11px]">
            <div className="bg-navy-950/70 p-3 rounded-xl border border-navy-800">
              <span className="text-slate-400 block font-semibold text-[10px] uppercase">대표이사 (President Director)</span>
              <span className="font-bold text-white text-xs">김성원 (Kim Sung Won)</span>
            </div>
            <div className="bg-navy-950/70 p-3 rounded-xl border border-navy-800">
              <span className="text-slate-400 block font-semibold text-[10px] uppercase">자본금 (Capital)</span>
              <span className="font-bold text-gold-400 text-xs">1,270,000,000 VND</span>
            </div>
            <div className="bg-navy-950/70 p-3 rounded-xl border border-navy-800">
              <span className="text-slate-400 block font-semibold text-[10px] uppercase">사업자 등록번호 (License No.)</span>
              <span className="font-bold text-gold-400 font-mono text-xs">0110245813</span>
            </div>
            <div className="bg-navy-950/70 p-3 rounded-xl border border-navy-800">
              <span className="text-slate-400 block font-semibold text-[10px] uppercase">엔지니어 인력 (Engineering Team)</span>
              <span className="font-bold text-emeraldGreen-400 text-xs">한국인 수석 2명 + 현지 15명</span>
            </div>
          </div>

          <div className="pt-2 border-t border-navy-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-[11px] text-slate-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-200">본사 공식 주소 (Head Office Address):</strong> NO 6B-LK46B service land area, Van Phuc ward, Ha Dong district, Hanoi city, Vietnam
              </span>
            </div>
            <div className="flex-shrink-0 text-gold-400 text-[10px] font-mono">
              [https://bestwinnervn.com]
            </div>
          </div>
        </div>

        {/* Site Links: 검색엔진이 따라갈 수 있는 실제 <a href> 링크 (상단 메뉴는 버튼형) */}
        <nav aria-label="Sitemap" className="pt-8 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-400">
          {[
            ['/about', isKo ? '회사 소개' : 'Giới thiệu'],
            ['/business', isKo ? '사업 분야' : 'Lĩnh vực kinh doanh'],
            ['/business/elevator', isKo ? '엘리베이터' : 'Thang máy'],
            ['/business/interior', isKo ? '인테리어' : 'Nội thất'],
            ['/business/parking', isKo ? '스마트 주차' : 'Bãi đỗ xe thông minh'],
            ['/business/firefighting', isKo ? '소방 자재' : 'Vật liệu PCCC'],
            ['/business/waterproofing', isKo ? '방수' : 'Chống thấm'],
            ['/business/energy', isKo ? '태양광 에너지' : 'Năng lượng mặt trời'],
            ['/business/digital-agency', 'Digital Agency'],
            ['/services/ai-management', isKo ? 'AI 경영관리' : 'Quản trị AI'],
            ['/services/products', 'BEST Mall'],
            ['/events', isKo ? '이벤트' : 'Sự kiện'],
            ['/megazine', 'BEST MEGAZINE'],
            ['/calculator', isKo ? '엘리베이터 견적' : 'Dự toán thang máy'],
            ['/contact', isKo ? '문의' : 'Liên hệ'],
          ].map(([to, label]) => (
            <Link key={to} to={to} onClick={() => window.scrollTo({ top: 0 })} className="hover:text-gold-400 transition-colors">
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 BEST WINNER VN LIMITED COMPANY. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span>Tax Code: 0110245813</span>
            <span>•</span>
            <span>Est. 2023.02.09</span>
            <span>•</span>
            <span>QCVN / TCVN Compliant</span>
            <span>•</span>
            <span>{__koLang ? "SaaS AI ERP 연동" : "SaaS AI ERP Integrated"}</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
