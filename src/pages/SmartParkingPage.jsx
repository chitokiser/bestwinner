import React from 'react';
import { Link } from 'react-router-dom';
import SmartParkingSection from '../components/BusinessUnits/SmartParkingSection';
import ContactUs from '../components/ContactUs';
import { Car, ArrowRight, ShieldCheck, Download, Sparkles, Monitor } from 'lucide-react';

export default function SmartParkingPage({ t }) {
  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Hero Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-12 relative overflow-hidden">
        {/* Background Ambient Glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emeraldGreen-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-4">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span>Business Areas</span>
            <span>/</span>
            <span className="text-emeraldGreen-400 font-bold">BEST winner AI Smart Parking System Vn</span>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                  <Car className="w-3.5 h-3.5" />
                  <span>BUSINESS UNIT ③</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>SHEYONE x AMANO 공식 파트너십</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                BEST winner AI 스마트 주차 관제 시스템
              </h1>
              <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
                딥러닝 AI 번호판 인식(LPR), 무인 차단기, ACRM 24/7 원격관제센터 및 모바일 자동 결제가 하나로 통합된 차세대 스마트 주차 플랫폼입니다.
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="/docu/park/SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                  download="SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                  className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-extrabold px-5 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  <span>SHEYONE AMANO 카탈로그 PDF (20P)</span>
                </a>
                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-navy-800 hover:bg-navy-700 text-white font-bold px-5 py-3 rounded-xl border border-navy-700 text-xs sm:text-sm flex items-center"
                >
                  <Monitor className="w-4 h-4 mr-2 text-emeraldGreen-400" />
                  <span>맞춤 스마트 주차 견적 문의</span>
                </button>
              </div>
            </div>

            {/* Visual Preview Frame */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden border-2 border-emeraldGreen-500/40 shadow-2xl bg-navy-950 group">
                <img
                  src="/images/parking/docu/page_1.png"
                  alt="SHEYONE AMANO Parking Hub Catalog Cover"
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-xs">
                  <span className="font-bold text-white bg-navy-900/90 px-3 py-1 rounded-lg border border-navy-700">
                    SHEYONE AMANO PARKING HUB
                  </span>
                  <span className="font-mono text-emeraldGreen-400 bg-emeraldGreen-500/20 px-2.5 py-1 rounded border border-emeraldGreen-500/30">
                    20P FULL CATALOG
                  </span>
                </div>
              </div>
            </div>

          </div>

          <div className="pt-4 flex justify-end">
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

      <SmartParkingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="parking" />
    </div>
  );
}

