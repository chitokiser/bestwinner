import React from 'react';
import { Link } from 'react-router-dom';
import WaterproofingSection from '../components/BusinessUnits/WaterproofingSection';
import ContactUs from '../components/ContactUs';
import { Droplets, ArrowRight } from 'lucide-react';

export default function WaterproofingPage({ t }) {
  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span>Business Areas</span>
            <span>/</span>
            <span className="text-gold-400 font-bold">BEST WINNER WATERPROOF VN</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
                <Droplets className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ⑤</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST WINNER WATERPROOF VN
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                K1 특수 초강력 방수제 — 20년 한국 기술 원료 수입 × 베트남 현지 공장 직접 생산 10년 보장 방수 솔루션.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/business/interior" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>처음: 인테리어 페이지</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <WaterproofingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="waterproofing" />
    </div>
  );
}
