import React from 'react';
import { Link } from 'react-router-dom';
import AIManagementSection from '../components/Services/AIManagementSection';
import ContactUs from '../components/ContactUs';
import { Cpu, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

export default function AIManagementPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Hero Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{isVi ? 'Dịch vụ' : isKo ? '서비스' : 'Services'}</span>
            <span>/</span>
            <span className="text-gold-400 font-bold">{isVi ? 'Quản lý AI' : isKo ? 'AI경영관리' : 'AI Management'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
                <Cpu className="w-3.5 h-3.5" />
                <span>AI MANAGEMENT SERVICE 1.0 (SaaS)</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white">
                BEST WINNER AI {isVi ? 'QUẢN LÝ DOANH NGHIỆP 1.0 (SaaS)' : isKo ? '경영관리 1.0 (SaaS)' : 'ENTERPRISE MANAGEMENT 1.0'}
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {isVi
                  ? 'SaaS 개념으로 즉시 이용 가능한 AI Quản lý Doanh nghiệp 1.0: Phân tích tài chính, tự động dự toán B2B, tối ưu công trình & giám sát 24/7.'
                  : isKo
                  ? 'SaaS 개념으로 즉시 이용 가능한 BEST AI 경영관리 1.0 서비스 — 경영 대시보드, 스마트 자동 견적, 공정 최적화 & 24/7 예지보전 관제.'
                  : 'Enterprise AI management SaaS system 1.0 for construction, elevators, interiors, and smart infrastructure operations.'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 items-center">
              <a
                href="https://besterp.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-black px-4 py-2.5 rounded-xl flex items-center shadow-lg transition-all border border-cyan-400/30"
              >
                <span>{isVi ? 'Truy cập SaaS 1.0' : isKo ? 'SaaS 1.0 접속 (besterp.netlify.app)' : 'Launch SaaS 1.0'}</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>

              <Link 
                to="/business" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>{isVi ? 'Xem 6대 사업 분야' : isKo ? '6대 사업분야 보기' : 'View Business Units'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Service Section Component */}
      <AIManagementSection 
        t={t} 
        onOpenConsult={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* Contact Form Section */}
      <ContactUs t={t} initialBU="parking" />
    </div>
  );
}
