import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ElevatorSection from '../components/BusinessUnits/ElevatorSection';
import ElevatorCalculator from '../components/BusinessUnits/ElevatorCalculator';
import ContactUs from '../components/ContactUs';
import { ArrowLeft, ArrowRight, ArrowUpRight, Calculator, Download, BookOpen, Play } from 'lucide-react';

export default function ElevatorPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [defaultSubTab, setDefaultSubTab] = useState('overview');

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
            <span className="text-gold-400 font-bold">{isKo ? 'BEST winner elevator Vn (승강기)' : isVi ? 'BEST winner elevator Vn (Thang máy)' : 'BEST winner elevator Vn'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-2">
                <ArrowUpRight className="w-3.5 h-3.5" />
                <span>{isVi ? 'LĨNH VỰC KINH DOANH ②' : isKo ? '핵심 사업 부문 ②' : 'BUSINESS UNIT ②'}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST WINNER ELEVATOR VN
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                {isVi
                  ? 'Mạng lưới Kỹ thuật Thang máy Geochang (Hàn Quốc) × Thư viện Catalog Toàn cầu × Nhà máy 3,000m² tại Hà Nội với hơn 180 dự án đã hoàn thành.'
                  : isKo
                  ? '한국 거창승강기밸리 기술 네트워크 × BEST WINNER 글로벌 카탈로그 라이브러리 × 베트남 하노이 3,000m² 직영 공장 180대+ 준공 실적.'
                  : 'Korea Geochang Elevator Valley tech network × global catalog library × 3,000sqm Hanoi factory with 180+ completions.'}
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex flex-wrap gap-2.5">
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
              <button
                onClick={() => {
                  setDefaultSubTab('library');
                  const el = document.getElementById('elevator');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-extrabold px-4 py-2.5 rounded-xl flex items-center shadow-gold-glow transition-transform hover:scale-[1.02]"
              >
                <BookOpen className="w-4 h-4 mr-1.5" />
                <span>{isVi ? 'Web Catalog BEST WINNER' : isKo ? 'BEST WINNER 웹 카탈로그' : 'BEST WINNER Web Catalog'}</span>
              </button>
              <Link 
                to="/business/parking" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>{isVi ? 'Tiếp: Bãi đỗ xe AI Smart' : isKo ? '다음: AI 주차 (Smart Parking)' : 'Next: AI Smart Parking'}</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Elevator Product Showcase */}
      <ElevatorSection 
        t={t} 
        defaultSubTab={defaultSubTab}
        onOpenCalculator={() => {
          const el = document.getElementById('calculator');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Embedded Online Price Calculator */}
      <ElevatorCalculator 
        t={t} 
        isModalOpen={isCalculatorOpen}
        setIsModalOpen={setIsCalculatorOpen}
      />

      {/* Contact Form */}
      <ContactUs t={t} initialBU="elevator" />
    </div>
  );
}
