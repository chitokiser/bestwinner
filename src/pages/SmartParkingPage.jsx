import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SmartParkingSection from '../components/BusinessUnits/SmartParkingSection';
import ContactUs from '../components/ContactUs';
import { 
  Car, 
  ArrowRight, 
  ShieldCheck, 
  Download, 
  Sparkles, 
  Monitor, 
  ChevronLeft, 
  ChevronRight,
  Eye,
  FileText,
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function SmartParkingPage({ t }) {
  // Hero Banner Images from /public/images/parking/hero/ (1.png ~ 6.png)
  const heroSlides = [
    {
      src: '/images/parking/hero/1.png',
      tag: 'AI SMART GATE',
      title: 'BEST Winner AI 스마트 주차 무인 게이트',
      desc: '0.8초 초고속 바(Bar) 차단기와 차체 충격 방지 인텔리전트 모터 내장.'
    },
    {
      src: '/images/parking/hero/2.png',
      tag: 'DEEP LEARNING LPR',
      title: '딥러닝 초고속 AI 번호판 인식 카메라',
      desc: '야간, 우천, 훼손 번호판도 99.8% 정확도로 0.1초 내 실시간 인식.'
    },
    {
      src: '/images/parking/hero/3.png',
      tag: 'ACRM BACKOFFICE',
      title: 'Amano ACRM 현장 통합 대시보드',
      desc: '입출차 영상 모니터링, 만차/잔여 주차면, 요금 매출 통계 실시간 집계.'
    },
    {
      src: '/images/parking/hero/4.png',
      tag: 'SELF PAYMENT KIOSK',
      title: '21.5인치 무인 정산 키오스크 시스템',
      desc: '신용카드, 삼성페이, 모바일 QR, 할인권 사전 정산으로 출차 정체 제로화.'
    },
    {
      src: '/images/parking/hero/5.png',
      tag: '24/7 CONTROL ROOM',
      title: '24시간 무인 현장 원격 통합관제센터',
      desc: '365일 24시간 전문 요원의 실시간 인터폰 대응 및 비상 차단기 원격 제어.'
    },
    {
      src: '/images/parking/hero/6.png',
      tag: 'MOBILE & E-TAX',
      title: '모바일 앱 결제 & 정기권 자동 세금계산서',
      desc: '주차장 검색, 월정액 신청, 미등록 무단주차 자동 단속 및 국세청 E-Tax 연동.'
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="pt-6">
      {/* Dynamic Full Hero Banner Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden bg-navy-950 border-b border-navy-800">
        
        {/* Background Image Slider (Rotating 1.png ~ 6.png) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? 'opacity-70 sm:opacity-60 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-7000 ease-linear`}
            >
              <img 
                src={slide.src} 
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          {/* Gradients Overlay for crisp readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70"></div>
        </div>

        {/* Ambient Glow accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-emeraldGreen-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Hero Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full space-y-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-300 bg-navy-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-navy-700 w-fit max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link to="/" className="hover:text-gold-400 shrink-0">Home</Link>
            <span className="shrink-0">/</span>
            <span className="shrink-0">Business Areas</span>
            <span className="shrink-0">/</span>
            <span className="text-emeraldGreen-400 font-bold shrink-0">BEST winner AI Smart Parking System Vn</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headlines & Action Buttons */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30 whitespace-nowrap">
                  <Car className="w-3.5 h-3.5" />
                  <span>BUSINESS UNIT ③</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>SHEYONE x AMANO 공식 솔루션</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight break-keep">
                BEST winner <span className="text-emeraldGreen-400">AI 스마트 주차</span> 관제 시스템
              </h1>
              
              <p className="text-xs sm:text-lg text-slate-200 font-medium max-w-2xl leading-relaxed break-keep">
                딥러닝 AI 번호판 인식(LPR), 스마트 무인 차단기, ACRM 24시간 원격 관제 및 모바일 자동 결제가 통합된 미래형 주차 인프라 솔루션입니다.
              </p>

              {/* Feature Highlights Pill Bar */}
              <div className="grid grid-cols-3 gap-2 pt-1 max-w-xl">
                <div className="bg-navy-900/80 border border-emeraldGreen-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emeraldGreen-400 shrink-0" />
                  <span className="whitespace-nowrap">AI LPR 99.8%</span>
                </div>
                <div className="bg-navy-900/80 border border-cyan-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap">ACRM 원격관제</span>
                </div>
                <div className="bg-navy-900/80 border border-gold-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="whitespace-nowrap">24/7 출동A/S</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5 items-center">
                <a
                  href="/docu/park/SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                  download="SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                  className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-extrabold px-5 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center text-xs sm:text-sm whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>공식 PDF 카탈로그 (20P)</span>
                </a>

                <button
                  onClick={() => {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-navy-800 hover:bg-navy-700 text-white font-bold px-5 py-3 rounded-xl border border-navy-700 text-xs sm:text-sm flex items-center space-x-1.5 whitespace-nowrap"
                >
                  <Monitor className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                  <span>현장 맞춤 무료 견적</span>
                </button>
              </div>

            </div>

            {/* Right Column: Interactive Hero Slide Card Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-emeraldGreen-500/50 shadow-2xl bg-navy-950 group">
                <img
                  src={heroSlides[currentSlide].src}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                {/* Slide Caption Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy-900/90 border border-navy-700 backdrop-blur-md space-y-1">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-bold">
                    <span className="text-emeraldGreen-400 bg-emeraldGreen-500/20 px-2 py-0.5 rounded border border-emeraldGreen-500/30">
                      {heroSlides[currentSlide].tag}
                    </span>
                    <span className="text-slate-400 font-mono">
                      SLIDE {currentSlide + 1} / {heroSlides.length}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {heroSlides[currentSlide].title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {heroSlides[currentSlide].desc}
                  </p>
                </div>
              </div>

              {/* Slider Prev / Next Arrow Controls */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrevSlide}
                    className="p-2.5 rounded-xl bg-navy-900/90 border border-navy-700 hover:border-emeraldGreen-400 text-slate-300 hover:text-emeraldGreen-400 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    className="p-2.5 rounded-xl bg-navy-900/90 border border-navy-700 hover:border-emeraldGreen-400 text-slate-300 hover:text-emeraldGreen-400 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Thumbnail Dots */}
                <div className="flex items-center space-x-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx 
                          ? 'w-6 bg-emeraldGreen-400' 
                          : 'w-2 bg-slate-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

          <div className="pt-2 flex justify-end">
            <Link 
              to="/business/firefighting" 
              className="bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
            >
              <span>다음: 소방 자재 페이지</span>
              <ArrowRight className="w-4 h-4 ml-1.5 text-gold-400" />
            </Link>
          </div>

        </div>
      </section>

      {/* Main Smart Parking Details Section */}
      <SmartParkingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Contact Section */}
      <ContactUs t={t} initialBU="parking" />
    </div>
  );
}


