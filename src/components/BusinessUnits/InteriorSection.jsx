import React, { useState, useEffect } from 'react';
import { 
  Paintbrush, 
  Eye, 
  Layers, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Box,
  Building,
  Briefcase,
  Utensils,
  Scissors,
  Home,
  Award,
  CheckCircle2,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Send,
  Download
} from 'lucide-react';

export default function InteriorSection({ t, onOpenConsult }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStyle, setActiveStyle] = useState('luxury');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  const interiorHeroImages = [
    { 
      src: '/images/interior/1.png', 
      title: 'Luxury Penthouse & Villa Interior', 
      desc: '프라이빗 펜트하우스 & 빌라 고급 맞춤 인테리어',
      tag: 'LUXURY RESIDENTIAL'
    },
    { 
      src: '/images/interior/2.png', 
      title: 'Natural K-Wood & Living Lounge', 
      desc: '원목과 자연 채광이 조화로운 K-디자인 공간',
      tag: 'K-DESIGN LOUNGE'
    },
    { 
      src: '/images/interior/3.png', 
      title: '5-Star Hotel & Resort Lounge', 
      desc: '하노이 신라호텔 시공 검증 최고급 호텔식 턴키 마감',
      tag: 'HOTEL & RESORT'
    },
    { 
      src: '/images/interior/4.png', 
      title: 'Executive Custom Suite & Dining', 
      desc: '경남 랜드마크 72 & 하이엔드 수트 전용 공간 시공',
      tag: 'EXECUTIVE SUITE'
    },
    { 
      src: '/images/interior/5.png', 
      title: 'Smart Office & Commercial Space', 
      desc: 'LG전자(하이퐁), 오피스 & 프리미엄 상업 공간',
      tag: 'COMMERCIAL & TECH'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % interiorHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [interiorHeroImages.length]);

  // Real Major Performance Projects extracted from BEST WINNER VN PROFILE.pdf
  const portfolioProjects = [
    {
      id: 1,
      category: 'hotel_public',
      catLabel: 'Hotel & Public Space',
      title: 'Shilla Hotel (Hanoi)',
      subtitle: '프리미엄 호텔 인테리어 필름 & 공간 시공',
      year: '2026',
      location: 'Hanoi',
      img: '/images/interior/3.png',
      tag: '5-Star Hotel'
    },
    {
      id: 2,
      category: 'office_factory',
      catLabel: 'Office & Factory',
      title: 'I-BRIDGE Office (Landmark 72)',
      subtitle: '랜드마크 72 타워 프라이빗 스마트 오피스 시공',
      year: '2025',
      location: 'Landmark 72, Hanoi',
      img: '/images/interior/5.png',
      tag: 'Executive Office'
    },
    {
      id: 3,
      category: 'commercial_fnb',
      catLabel: 'Commercial & F&B',
      title: 'Wau Haus Coffee',
      subtitle: 'Vincom Mega Mall Ocean Park 2 부스 디자인 & 시공',
      year: '2025',
      location: 'Hung Yen',
      img: '/images/interior/2.png',
      tag: 'Shopping Mall Store'
    },
    {
      id: 4,
      category: 'commercial_fnb',
      catLabel: 'Commercial & F&B',
      title: 'De Baakji / Baekje Galbi Restaurant',
      subtitle: 'Vincom Mega Mall & 하노이 VIP 룸 한국형 디자이닝',
      year: '2025',
      location: 'Ocean Park 2, Hanoi',
      img: '/images/interior/4.png',
      tag: 'K-Dining Space'
    },
    {
      id: 5,
      category: 'office_factory',
      catLabel: 'Office & Factory',
      title: 'LG Electronics Factory (P3 Conference Room)',
      subtitle: 'LG전자 하이퐁 공장 P3 회의실 인테리어 시공',
      year: '2022',
      location: 'KCN Trang Due, Hai Phong',
      img: '/images/interior/5.png',
      tag: 'Global Tech Factory'
    },
    {
      id: 6,
      category: 'office_factory',
      catLabel: 'Office & Factory',
      title: 'Dreamtech Factory (Bac Ninh)',
      subtitle: '드림텍 공장 1F 로비 리셉션, 휴게실 & 휴게 테라스 전면 리모델링',
      year: '2025',
      location: 'Bac Ninh',
      img: '/images/interior/2.png',
      tag: 'Lobby & Reception'
    },
    {
      id: 7,
      category: 'beauty_golf',
      catLabel: 'Beauty & 3D Golf',
      title: 'GolfZon & SG Screen Golf 3D',
      subtitle: '하노이 & 박닌 3D 스크린 골프 서비스 공간 턴키 시공',
      year: '2024',
      location: 'Hanoi & Bac Ninh',
      img: '/images/interior/1.png',
      tag: 'Sports & Leisure'
    },
    {
      id: 8,
      category: 'residential',
      catLabel: 'Luxury Residential',
      title: 'Keangnam Landmark 72 Apartment (A1608)',
      subtitle: '하노이 경남 랜드마크 72 아파트 하이엔드 리모델링',
      year: '2024',
      location: 'Hanoi',
      img: '/images/interior/1.png',
      tag: 'Luxury Apartment'
    },
    {
      id: 9,
      category: 'hotel_public',
      catLabel: 'Hotel & Public Space',
      title: 'Woori Bank & Shinhan Bank Branches',
      subtitle: '우리은행(완끼엠, 영푹, 하남) & 신한은행 랜드마크지점 금융 공간',
      year: '2020-2024',
      location: 'Hanoi & Provinces',
      img: '/images/interior/3.png',
      tag: 'Banking & Financial'
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  const styleOptions = [
    {
      id: 'luxury',
      name: 'Luxury Penthouse & Marble Finish',
      desc: '고급 대리석, Champagne Gold 포인트, 승강기 파사드 일체형 커스텀 디자인',
      color: 'bg-gradient-to-r from-amber-600 to-gold-500',
      bgImg: '/images/interior/1.png'
    },
    {
      id: 'modern',
      name: 'Modern Natural Wood & Living Lounge',
      desc: '자연 채광과 프리미엄 원목 마감, 아늑한 가족적 거실 공간 인테리어',
      color: 'bg-gradient-to-r from-slate-700 to-slate-500',
      bgImg: '/images/interior/2.png'
    },
    {
      id: 'wood',
      name: 'Natural K-Wood & Hotel Lounge',
      desc: 'Shilla Hotel / Artisee Cafe 감성의 최고급 원목 질감과 K-디자인 감성',
      color: 'bg-gradient-to-r from-amber-800 to-yellow-700',
      bgImg: '/images/interior/3.png'
    },
    {
      id: 'executive',
      name: 'Executive Suite & Private Dining',
      desc: '경남 랜드마크 72 & VIP 맞춤 인테리어 리모델링',
      color: 'bg-gradient-to-r from-emerald-800 to-teal-600',
      bgImg: '/images/interior/4.png'
    },
    {
      id: 'commercial',
      name: 'Smart Office & Tech Commercial',
      desc: 'LG전자 오피스, 랜드마크 72 I-BRIDGE 상업/업무 공간 설계',
      color: 'bg-gradient-to-r from-blue-800 to-indigo-600',
      bgImg: '/images/interior/5.png'
    }
  ];

  const currentStyleData = styleOptions.find(s => s.id === activeStyle);

  return (
    <section id="interior" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Interior Hero Image Slider Showcase (1.png ~ 5.png) */}
        <div className="relative min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden mb-16 border border-gold-500/40 shadow-2xl flex items-center bg-navy-900">
          {/* Rotating Background Images */}
          {interiorHeroImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentHeroSlide === idx ? 'opacity-80 sm:opacity-70 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-7000 ease-linear`}
            >
              <img 
                src={slide.src} 
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Gradient Overlay for Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>

          {/* Hero Banner Text Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gold-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{interiorHeroImages[currentHeroSlide].tag} — BEST WINNER INTERIOR VN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
              {interiorHeroImages[currentHeroSlide].title}
            </h1>

            <p className="text-sm sm:text-xl font-bold text-gold-300 leading-snug break-keep">
              {interiorHeroImages[currentHeroSlide].desc}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal break-keep">
              신라호텔(하노이), LG전자(하이퐁), 우리은행, 신한은행, 랜드마크 72 I-BRIDGE 준공 실적으로 증명된 한국형 기술력 & 턴키 맞춤 공간 인테리어.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsult('interior')}
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <span>맞춤 3D 인테리어 무료 상담</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Slide Controls & Indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
            <div className="flex space-x-1.5">
              {interiorHeroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentHeroSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-slate-500/50 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-1 ml-2">
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + interiorHeroImages.length) % interiorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title="이전 슬라이드"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % interiorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title="다음 슬라이드"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Unit Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
              <Paintbrush className="w-3.5 h-3.5" />
              <span>BUSINESS UNIT ① — BEST WINNER VN LIMITED COMPANY</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              BEST winner interior Vn
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              신라호텔(하노이), LG전자(하이퐁), 우리은행, 신한은행, 랜드마크 72 I-BRIDGE 오피스 시공 실적으로 검증된 베트남 최정상 맞춤 인테리어 & 턴키 시공 리더.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-3">
            <button
              onClick={() => onOpenConsult('interior')}
              className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all flex items-center text-sm"
            >
              <span>맞춤 3D 인테리어 상담 신청</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Company Identity & Stats Bar (Extracted from PDF Profile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card-chrome border border-chrome-300/40 mb-16">
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black gold-gradient-text">2023.02</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">설립일 (법인번호: 0110245813)</p>
          </div>
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black chrome-gradient-text">2 + 15+</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">한국인 마스터 & 현지 전문 엔지니어</p>
          </div>
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black text-gold-400">50+</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">글로벌 기업 준공 실적</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl sm:text-3xl font-black text-emeraldGreen-500">100%</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">품질 관리 & 턴키 시공 직영</p>
          </div>
        </div>

        {/* 1. Interactive 3D Style Preview Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-gold-500/30">
              3D VIRTUAL PREVIEW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              3D 가상 공간 프리뷰 & 자재 디자인 감성
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              베트남 주택 및 상업 공간 특성을 고려한 K-디자인 감성 마감재 라이브러리
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Preview Canvas */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden glass-card border border-gold-500/40 group shadow-2xl">
                <img 
                  src={currentStyleData.bgImg} 
                  alt={currentStyleData.name} 
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-navy-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold-500/40 flex items-center space-x-2">
                  <Box className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-extrabold text-slate-100">K-Design Virtual 3D Rendering</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-white">{currentStyleData.name}</h4>
                    <p className="text-xs text-slate-300 mt-1">{currentStyleData.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {styleOptions.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setActiveStyle(style.id)}
                        className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all border ${
                          activeStyle === style.id
                            ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-md'
                            : 'bg-navy-900/90 text-slate-300 border-navy-700 hover:border-gold-500/50'
                        }`}
                      >
                        {style.name.split(' ')[0]} {style.name.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Integration Spec */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card-gold p-6 rounded-2xl border border-gold-500/40">
                <h4 className="text-lg font-bold text-gold-400 flex items-center mb-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  승강기 Cabin & 공간 디자인 일체화
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  단순 인테리어를 넘어 승강기(Cabin) 파사드 및 소방/방수 설비와 완벽하게 조화를 이루는 일체형 턴키 공간 설계를 제공합니다.
                </p>
              </div>

              <div className="space-y-3">
                {[
                  "한국산 인테리어 필름 (LG/현대 KEFICO 검증 자재) 시공",
                  "강화유리 파티션 & 방음 폼 시스템 (KOICA / LG 공장 적용)",
                  "주택, 빌라, 오피스, F&B 식당, 뷰티/골프장 턴키 설계"
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-navy-900/80 border border-navy-800">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenConsult('interior')}
                className="w-full bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs py-3.5 rounded-xl border border-navy-700 hover:border-gold-500/40 transition-colors flex items-center justify-center space-x-2"
              >
                <Layers className="w-4 h-4 text-gold-400" />
                <span>무료 자재 샘플 & 3D 디자인 카탈로그 신청</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Major Performance Portfolio Grid (Extracted from Profile PDF) */}
        <div className="mt-16 pt-16 border-t border-navy-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-gold-500/30 mb-2 inline-block">
                PROJECT PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                BEST winner interior 주요 준공 실적 (Main Performance)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                신라호텔, 드림텍, LG전자, 우리은행, 신한은행, 경남 랜드마크 72 준공 프로젝트
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {[
                { id: 'all', label: '전체 (All)' },
                { id: 'hotel_public', label: '호텔 & 공공' },
                { id: 'office_factory', label: '오피스 & 공장' },
                { id: 'commercial_fnb', label: '상업 & F&B' },
                { id: 'beauty_golf', label: '뷰티 & 골프' },
                { id: 'residential', label: '고급 주거' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all border ${
                    activeCategory === tab.id
                      ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-md'
                      : 'bg-navy-900 text-slate-300 border-navy-800 hover:border-gold-500/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-navy-800 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-lg"
              >
                <div>
                  <div className="relative h-44 overflow-hidden">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                    
                    <div className="absolute top-3 left-3">
                      <span className="text-[10px] font-bold bg-navy-950/90 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/30">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-navy-900/90 text-slate-300 px-2 py-0.5 rounded border border-navy-700">
                      {project.year}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <h4 className="text-lg font-extrabold text-white group-hover:text-gold-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs text-slate-300">
                      {project.subtitle}
                    </p>
                    <p className="text-[11px] text-chrome-400 font-mono">
                      📍 {project.location}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <button
                    onClick={() => onOpenConsult('interior')}
                    className="w-full bg-navy-900 hover:bg-navy-800 text-gold-400 font-bold text-xs py-2.5 rounded-xl border border-navy-800 hover:border-gold-500/40 transition-colors flex justify-center items-center"
                  >
                    <span>유사 프로젝트 견적 문의 →</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Company Organization & System Pipeline (Extracted from Profile PDF) */}
        <div className="mt-20 glass-card-chrome rounded-3xl p-8 sm:p-10 border border-chrome-300/40">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-chrome-300 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-chrome-400/30">
              ORGANIZATION & QUALITY CONTROL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              BEST WINNER VN 조직도 & 직영 품질 관리 파이프라인
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              본사 경영본부, 디자인 HQ, 시공 본부, 품질 관리팀의 유기적 턴키 체계
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                <Building className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">경영 & 디자인 HQ</h5>
              <p className="text-[11px] text-slate-400">Design Team 1 & 2 (K-Design 감성 & CAD/3D 랜더링)</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                <Briefcase className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">시공 1 & 2 본부</h5>
              <p className="text-[11px] text-slate-400">한국인 마스터 감독 & 베트남 현지 전문 엔지니어 직영</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">자재 & 품질관리팀</h5>
              <p className="text-[11px] text-slate-400">한국 정밀 자재, 검정 인테리어 필름 & K1 방수 수급</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-chrome-400/20 text-chrome-200 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">기술지원 & A/S</h5>
              <p className="text-[11px] text-slate-400">시공 완료 후 정기점검 및 24/7 긴급 유지보수 파이프라인</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
