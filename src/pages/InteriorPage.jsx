import React from 'react';
import { Link } from 'react-router-dom';
import InteriorSection from '../components/BusinessUnits/InteriorSection';
import ContactUs from '../components/ContactUs';
import { ArrowRight, Paintbrush, Play } from 'lucide-react';

export default function InteriorPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Header with Strong '하노이 인테리어' SEO Keywords */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-gold-400">{isVi ? 'Lĩnh vực Kinh doanh' : isKo ? '사업분야' : 'Business Areas'}</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">{isKo ? '하노이 인테리어 (BEST winner Interior)' : isVi ? 'Thiết kế Nội thất Hà Nội (BEST winner)' : 'Hanoi Interior (BEST winner)'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-2">
                <Paintbrush className="w-3.5 h-3.5" />
                <span>{isVi ? 'LĨNH VỰC KINH DOANH 02' : isKo ? '핵심 사업 02 (하노이 인테리어)' : 'BUSINESS UNIT 02'}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                {isKo ? '하노이 인테리어 전문 BEST winner Interior' : isVi ? 'Thiết kế & Thi công Nội thất Hà Nội' : 'BEST winner Interior Hanoi'}
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl leading-relaxed">
                {isVi
                  ? 'Thiết kế Không gian May đo & Thi công Nội thất Cao cấp cho Căn hộ, Biệt thự, Townhouse và Thương mại tại Hà Nội.'
                  : isKo
                  ? '베트남 하노이 아파트, 럭셔리 빌라, 타운하우스, 오피스 맞춤 3D 공간 디자인 & 프리미엄 턴키 인테리어 시공. 한국인 수석 엔지니어 100% 현장 직영 감리.'
                  : 'Tailored interior design and premium turnkey execution for villas, residences, and commercial spaces in Hanoi, Vietnam.'}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2.5 items-center">
              <a
                href="#promo-video"
                onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('promo-video');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-red-600 hover:bg-red-500 text-white text-xs font-extrabold px-4 py-2.5 rounded-xl border border-red-500/40 flex items-center space-x-1.5 shadow-md transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                <span>{isVi ? 'Xem Video Quảng bá' : isKo ? '인테리어 시공 영상 보기' : 'Watch Promo Video'}</span>
              </a>
              <Link 
                to="/business/elevator" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>{isVi ? 'Tiếp: Thang máy' : isKo ? '다음: 승강기 (Elevator)' : 'Next: Elevator'}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interior Component Section */}
      <InteriorSection t={t} onOpenConsult={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Dedicated Contact Form */}
      <ContactUs t={t} initialBU="interior" />
    </div>
  );
}
