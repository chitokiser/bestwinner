import React from 'react';
import { Link } from 'react-router-dom';
import InteriorSection from '../components/BusinessUnits/InteriorSection';
import ContactUs from '../components/ContactUs';
import { ArrowLeft, ArrowRight, Paintbrush, Sparkles, Play } from 'lucide-react';

export default function InteriorPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-gold-400">{isVi ? 'Lĩnh vực Kinh doanh' : isKo ? '사업분야' : 'Business Areas'}</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">{isKo ? 'BEST winner interior Vn (맞춤 인테리어)' : isVi ? 'BEST winner interior Vn (Nội thất)' : 'BEST winner interior Vn'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-2">
                <Paintbrush className="w-3.5 h-3.5" />
                <span>{isVi ? 'LĨNH VỰC KINH DOANH ①' : isKo ? '핵심 사업 부문 ①' : 'BUSINESS UNIT ①'}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST winner interior Vn
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {isVi
                  ? 'Thiết kế Không gian May đo & Thi công Nội thất Cao cấp cho Nhà ở, Biệt thự, Townhouse và Thương mại.'
                  : isKo
                  ? '주택, 빌라, 타운하우스 및 상업 공간 맞춤형 공간 Design & 고급 턴키 인테리어 시공.'
                  : 'Tailored interior design and premium turnkey execution for villas, residences, and commercial spaces.'}
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
                <span>{isVi ? 'Xem Video Quảng bá' : isKo ? '공식 홍보 동영상 보기' : 'Watch Promo Video'}</span>
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

      {/* Main Section */}
      <InteriorSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Dedicated Contact Form */}
      <ContactUs t={t} initialBU="interior" />
    </div>
  );
}
