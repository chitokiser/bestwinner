import React from 'react';
import { Link } from 'react-router-dom';
import SmartParkingSection from '../components/BusinessUnits/SmartParkingSection';
import ContactUs from '../components/ContactUs';
import { Car, ArrowRight } from 'lucide-react';

export default function SmartParkingPage({ t }) {
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
            <span className="text-gold-400 font-bold">BEST winner AI Smart Parking System Vn</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30 mb-2">
                <Car className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ③</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
                BEST winner AI Smart Parking System Vn
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-2xl">
                AI 번호판 인식(LPR), 스마트 차단기, 주차 유도 및 자동 정산 통합 무인 관제 IT 솔루션.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex space-x-3">
              <Link 
                to="/business/firefighting" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <span>다음: 소방 자재 페이지</span>
                <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <SmartParkingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="parking" />
    </div>
  );
}
