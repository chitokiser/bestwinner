import React from 'react';
import { Link } from 'react-router-dom';
import FirefightingSection from '../components/BusinessUnits/FirefightingSection';
import ContactUs from '../components/ContactUs';
import { Flame, ArrowRight } from 'lucide-react';

export default function FirefightingPage({ t }) {
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
            <span className="text-gold-400 font-bold">BEST winner Firefighting materials Vn</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-fireRed-400 uppercase tracking-widest bg-fireRed-500/10 px-3 py-1 rounded-full border border-fireRed-500/30 mb-2">
                <Flame className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ④</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST winner Firefighting materials Vn
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                베트남 소방 안전 규정(QCVN / TCVN)을 준수하는 고품질 소방 자재 및 감지/소화 시스템.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/business/waterproofing" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>다음: 방수 솔루션 페이지</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FirefightingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="firefighting" />
    </div>
  );
}
