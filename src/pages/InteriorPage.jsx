import React from 'react';
import { Link } from 'react-router-dom';
import InteriorSection from '../components/BusinessUnits/InteriorSection';
import ContactUs from '../components/ContactUs';
import { ArrowLeft, ArrowRight, Paintbrush, Sparkles } from 'lucide-react';

export default function InteriorPage({ t }) {
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
            <span className="text-gold-400 font-bold">BEST winner interior Vn</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 mb-2">
                <Paintbrush className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ①</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST winner interior Vn
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                주택, 빌라, 타운하우스 및 상업 공간 맞춤형 공간 Design & 고급 인테리어 시공.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/business/elevator" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>다음: 승강기 페이지</span>
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
