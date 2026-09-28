import React, { useState, useEffect } from 'react';
import { 
  Sun, 
  Zap, 
  Flame, 
  ShieldCheck, 
  Award, 
  FileText, 
  Download, 
  Eye, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  CheckCircle2, 
  Building2, 
  Globe, 
  ArrowRight,
  Sparkles,
  Layers,
  Activity,
  Cpu,
  RefreshCw,
  Gauge,
  Clock,
  Database,
  MapPin,
  TrendingUp,
  BarChart3,
  Bot,
  Lock,
  FileCheck2,
  FileSpreadsheet,
  AlertCircle,
  HelpCircle,
  Share2,
  Sliders,
  Check,
  Play,
  Pause
} from 'lucide-react';

import { CarbonCalculationService, EMISSION_FACTORS, METHODOLOGIES } from '../../services/carbonCalculationService';
import { CarbonPriceService, VCM_BENCHMARKS } from '../../services/carbonPriceService';
import { solarProjectsData, carbonDashboardSummary } from '../../data/solarProjectsData';

export default function SolarEnergySection({ t, onOpenConsult }) {
  // Modal States
  const [isSlideModalOpen, setIsSlideModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isEsgModalOpen, setIsEsgModalOpen] = useState(false);
  const [isAiConsultantOpen, setIsAiConsultantOpen] = useState(false);

  // Tab & Calculator States
  const [activeTab, setActiveTab] = useState('overview'); // overview, carbon_flow, map, dashboard, token
  const [calcCapacityMW, setCalcCapacityMW] = useState(1.0);
  const [calcMethodology, setCalcMethodology] = useState('VMR0017');
  const [calcLocationFactor, setCalcLocationFactor] = useState(EMISSION_FACTORS.VIETNAM_NATIONAL_GRID);
  const [carbonUnitPriceUSD, setCarbonUnitPriceUSD] = useState(22.40); // Default VCM reference price
  const [isLivePriceSync, setIsLivePriceSync] = useState(true);
  const [selectedBenchmarkKey, setSelectedBenchmarkKey] = useState('SOLAR_PV_RE');
  const [livePriceInfo, setLivePriceInfo] = useState({
    priceUSD: 22.40,
    change24h: 2.35,
    timestamp: new Date().toLocaleTimeString('ko-KR', { hour12: false }),
    isLive: true
  });

  // Real-time market price fetcher
  const handleRefreshLivePrice = async (key = selectedBenchmarkKey, forceSync = isLivePriceSync) => {
    const data = await CarbonPriceService.fetchLiveCarbonPrice(key);
    setLivePriceInfo(data);
    if (forceSync) {
      setCarbonUnitPriceUSD(data.priceUSD);
    }
  };

  // Real-time polling timer (15s)
  useEffect(() => {
    handleRefreshLivePrice(selectedBenchmarkKey, isLivePriceSync);
    if (!isLivePriceSync) return;
    
    const interval = setInterval(() => {
      handleRefreshLivePrice(selectedBenchmarkKey, true);
    }, 15000);

    return () => clearInterval(interval);
  }, [isLivePriceSync, selectedBenchmarkKey]);

  // 6 Hero Banner Slides from public/images/sola/hreo/
  const heroSlides = [
    {
      id: 1,
      image: '/images/sola/hreo/1.png',
      badge: '3D PVT SOLAR & CARBON PLATFORM',
      badgeClass: 'bg-amber-500/20 text-amber-400 border-amber-500/40',
      subtitle: 'Beyond Solar Energy — Building Carbon Assets',
      title: '태양광 발전을 넘어,',
      highlightTitle: '검증 가능한 탄소자산(Carbon Assets)을 만듭니다',
      description: 'BEST winner Vn은 태양광 발전 프로젝트의 발전량과 탄소감축 데이터를 디지털화하고, 국제 검증 기준에 부합하는 Carbon Credit (탄소크레딧) 및 차세대 Carbon Asset Management Platform을 구축합니다.'
    },
    {
      id: 2,
      image: '/images/sola/hreo/2.png',
      badge: 'REAL-TIME IOT & EMS MONITORING',
      badgeClass: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40',
      subtitle: 'Smart Energy Infrastructure',
      title: '실시간 태양광 발전 데이터 기반',
      highlightTitle: '지능형 CO₂ 감축 모니터링 체계 구축',
      description: 'IoT Smart Meter 및 EMS API 연동을 통해 발전량, 자가소비량, 송전 데이터를 실시간 계측하여 감축량 산정의 신뢰성을 극대화합니다.'
    },
    {
      id: 3,
      image: '/images/sola/hreo/3.png',
      badge: 'VERRA VMR0017 & ACM0002 METHODOLOGY',
      badgeClass: 'bg-emerald-500/20 text-emeraldGreen-300 border-emerald-500/40',
      subtitle: 'International Standards Verified',
      title: '글로벌 표준 탄소 방법론 기준',
      highlightTitle: '투명하게 검증되는 탄소 감축량 산출 엔진',
      description: 'Verra VMR0017 및 UNFCCC ACM0002 방법론을 기반으로 계통 연계 태양광 발전의 기준선 배출계수와 프로젝트 배출량을 정밀 측정합니다.'
    },
    {
      id: 4,
      image: '/images/sola/hreo/4.png',
      badge: '3D PVT HIGH-EFFICIENCY SOLAR TECH',
      badgeClass: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
      subtitle: 'Patent No. 10-2776941',
      title: '발전 효율 10배 향상',
      highlightTitle: '3D PVT 태양광·수열 하이브리드 혁신 기술',
      description: '전기 생산과 동시에 열 에너지를 획득하는 차세대 3D PVT 모듈로 단위 면적당 최대 감축 성과를 실현합니다.'
    },
    {
      id: 5,
      image: '/images/sola/hreo/5.png',
      badge: 'DIGITAL CARBON ASSET LIFECYCLE',
      badgeClass: 'bg-amber-500/20 text-amber-300 border-amber-500/40',
      subtitle: 'End-to-End Asset Accounting',
      title: 'Solar PV에서 Carbon Asset까지',
      highlightTitle: '전과정 탄소자산 라이프사이클 디지털화',
      description: 'Solar PV ➔ 발전량 ➔ CO₂ 감축 ➔ Carbon Credit ➔ Carbon Asset으로 이어지는 전 과정을 6단계 파이프라인으로 체계적으로 관리합니다.'
    },
    {
      id: 6,
      image: '/images/sola/hreo/6.png',
      badge: 'FUTURE CARBON TOKENIZATION',
      badgeClass: 'bg-blue-500/20 text-blue-300 border-blue-500/40',
      subtitle: 'Next-Gen Blockchain Infrastructure',
      title: '검증된 탄소 자산 기반',
      highlightTitle: '차세대 블록체인 Carbon Tokenization 인프라',
      description: '정식 검증 절차를 마친 환경 자산을 바탕으로 규제 및 탄소등록제도 준수 하에 차세대 디지털 토큰화를 준비합니다 (Under Development).'
    }
  ];

  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const [isHeroAutoPlaying, setIsHeroAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isHeroAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [isHeroAutoPlaying, heroSlides.length]);

  const handleNextHero = () => setCurrentHeroIndex((prev) => (prev + 1) % heroSlides.length);
  const handlePrevHero = () => setCurrentHeroIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);

  // 31 Deck Slides
  const totalSlides = 31;
  const slideImages = Array.from({ length: totalSlides }, (_, i) => `/images/solar/deck/page_${i + 1}.png`);
  const pdfPath = '/docu/solar/BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf';

  const handleOpenSlideAt = (index) => {
    setCurrentSlideIndex(index);
    setIsSlideModalOpen(true);
  };

  const nextSlide = () => setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  const prevSlide = () => setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  // Live Carbon Engine Output for AI Consultant & Calculator
  const calcResult = CarbonCalculationService.calculateCO2Reduction({
    solarCapacityKW: calcCapacityMW * 1000,
    emissionFactor: calcLocationFactor,
    methodologyId: calcMethodology
  });

  return (
    <section className="py-16 bg-navy-950 text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* 01. HERO BANNER: Interactive Showcase with 6 High-Res Banner Images */}
        <div 
          className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-500/30 group bg-navy-900"
          onMouseEnter={() => setIsHeroAutoPlaying(false)}
          onMouseLeave={() => setIsHeroAutoPlaying(true)}
        >
          {/* Background Images with Fade Transition */}
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                idx === currentHeroIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10'
              }`}
            >
              <img
                src={slide.image}
                alt={`Hero Banner ${slide.id}`}
                className="w-full h-full object-cover object-center filter brightness-[0.70] contrast-[1.05]"
              />
              {/* Dark Gradient Overlay for Maximum Text Contrast */}
              <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/40 sm:from-navy-950/95 sm:via-navy-900/75 sm:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/30" />
            </div>
          ))}

          {/* Hero Banner Content Overlay */}
          <div className="relative z-10 p-6 sm:p-10 lg:p-12 min-h-[480px] sm:min-h-[520px] flex flex-col justify-between">
            {/* Top Bar: Slide Badge, Counter & AutoPlay Toggle */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className={`inline-flex items-center space-x-1.5 text-xs font-bold px-3 py-1 rounded-full border backdrop-blur-md ${heroSlides[currentHeroIndex].badgeClass}`}>
                  <Sun className="w-3.5 h-3.5" />
                  <span>{heroSlides[currentHeroIndex].badge}</span>
                </span>
                <span className="hidden sm:inline-flex items-center space-x-1.5 bg-navy-900/80 text-emeraldGreen-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40 backdrop-blur-md">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>VERRA VMR0017</span>
                </span>
              </div>

              <div className="flex items-center space-x-3 bg-navy-950/80 px-3 py-1.5 rounded-full border border-navy-700/80 text-xs backdrop-blur-md">
                <span className="font-mono text-amber-400 font-bold">
                  0{currentHeroIndex + 1} <span className="text-slate-500">/ 0{heroSlides.length}</span>
                </span>
                <button
                  onClick={() => setIsHeroAutoPlaying(!isHeroAutoPlaying)}
                  className="text-slate-400 hover:text-white transition-colors p-1"
                  title={isHeroAutoPlaying ? "자동 전환 일시정지" : "자동 전환 시작"}
                >
                  {isHeroAutoPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emeraldGreen-400" />}
                </button>
              </div>
            </div>

            {/* Middle Content area */}
            <div className="my-6 space-y-4 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block drop-shadow-md">
                {heroSlides[currentHeroIndex].subtitle}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-tight break-keep drop-shadow-lg">
                {heroSlides[currentHeroIndex].title} <br />
                <span className="bg-gradient-to-r from-amber-400 via-emeraldGreen-400 to-cyan-300 bg-clip-text text-transparent">
                  {heroSlides[currentHeroIndex].highlightTitle}
                </span>
              </h2>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed break-keep max-w-2xl drop-shadow">
                {heroSlides[currentHeroIndex].description}
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => setIsAiConsultantOpen(true)}
                  className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-navy-950 font-black px-5 py-3 rounded-xl shadow-lg flex items-center space-x-2 text-xs transition-all transform hover:scale-[1.02] border border-emerald-400/40 whitespace-nowrap"
                >
                  <Bot className="w-4 h-4" />
                  <span>AI 탄소감축량 시뮬레이터</span>
                </button>

                <button
                  onClick={() => setIsEsgModalOpen(true)}
                  className="bg-navy-950/90 hover:bg-navy-900 text-slate-200 hover:text-emeraldGreen-400 font-bold px-5 py-3 rounded-xl border border-emerald-500/40 flex items-center space-x-2 text-xs transition-all backdrop-blur-md whitespace-nowrap"
                >
                  <FileCheck2 className="w-4 h-4 text-emeraldGreen-400" />
                  <span>ESG 보고서 생성</span>
                </button>

                <a 
                  href={pdfPath} 
                  download="BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-navy-900/90 hover:bg-navy-800 text-slate-300 font-semibold px-5 py-3 rounded-xl border border-navy-700 flex items-center space-x-2 text-xs transition-all backdrop-blur-md whitespace-nowrap"
                >
                  <Download className="w-3.5 h-3.5 text-amber-400" />
                  <span>사업계획서 PDF</span>
                </a>
              </div>
            </div>

            {/* Bottom Row: Manual Navigation & 6-Image Thumbnail Selector */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-navy-800/60">
              {/* Prev / Next Buttons */}
              <div className="flex items-center space-x-2">
                <button
                  onClick={handlePrevHero}
                  className="w-9 h-9 rounded-xl bg-navy-950/80 hover:bg-amber-500 hover:text-navy-950 text-slate-300 flex items-center justify-center border border-navy-700 transition-all backdrop-blur-md"
                  aria-label="Previous Slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={handleNextHero}
                  className="w-9 h-9 rounded-xl bg-navy-950/80 hover:bg-amber-500 hover:text-navy-950 text-slate-300 flex items-center justify-center border border-navy-700 transition-all backdrop-blur-md"
                  aria-label="Next Slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* 6 Hero Image Thumbnails Strip */}
              <div className="flex items-center space-x-2 overflow-x-auto max-w-full py-1 scrollbar-none">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentHeroIndex(idx)}
                    className={`relative w-16 h-10 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                      idx === currentHeroIndex
                        ? 'border-amber-400 scale-105 shadow-md shadow-amber-500/20 ring-2 ring-amber-400/40'
                        : 'border-navy-700 opacity-60 hover:opacity-100 hover:border-slate-400'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={`Thumb ${slide.id}`}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute inset-0 bg-navy-950/30 ${idx === currentHeroIndex ? 'bg-transparent' : ''}`} />
                    <span className="absolute bottom-0.5 right-1 text-[9px] font-bold text-white bg-black/60 px-1 rounded">
                      0{slide.id}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 02. CARBON DASHBOARD KPI SUMMARY (Requirement 8) */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-white flex items-center space-x-2">
              <BarChart3 className="w-5 h-5 text-amber-400" />
              <span>BEST Winner Energy & Carbon Dashboard</span>
            </h3>
            <span className="text-[11px] text-slate-400 bg-navy-900 px-3 py-1 rounded-full border border-navy-800">
              Live Aggregate Status ({carbonDashboardSummary.lastUpdated})
            </span>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 text-xs">
            
            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Total Projects</span>
              <p className="text-2xl font-black text-white">{carbonDashboardSummary.totalProjects}</p>
              <span className="text-[10px] text-slate-400">Vietnam Regions</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Solar Capacity</span>
              <p className="text-2xl font-black text-amber-400">{carbonDashboardSummary.solarCapacityMW} MW</p>
              <span className="text-[10px] text-slate-400">3D PVT System</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Annual Generation</span>
              <p className="text-2xl font-black text-cyan-400">28,500 MWh</p>
              <span className="text-[10px] text-slate-400">Green Electricity</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-emerald-500/30 space-y-1 bg-emerald-950/20">
              <span className="text-emeraldGreen-400 font-semibold block text-[11px]">Estimated CO₂ Reduction</span>
              <p className="text-2xl font-black text-emeraldGreen-400">15,200 tCO₂e</p>
              <span className="text-[10px] text-emeraldGreen-300 font-medium">Projected / Year</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Verified Carbon Credits</span>
              <p className="text-2xl font-black text-slate-400">0</p>
              <span className="text-[10px] text-amber-400">Pending Verification</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Credits in Pipeline</span>
              <p className="text-2xl font-black text-purple-400">15,200</p>
              <span className="text-[10px] text-purple-300">Under Review</span>
            </div>

            <div className="glass-card p-4 rounded-2xl border border-navy-800 space-y-1 bg-navy-900/90 col-span-2 sm:col-span-1">
              <span className="text-slate-400 font-semibold block text-[11px]">Carbon Assets</span>
              <p className="text-xs font-extrabold text-amber-400 uppercase tracking-wider pt-2">Under Development</p>
              <span className="text-[10px] text-slate-400">Future Tokenization</span>
            </div>

          </div>
        </div>

        {/* 03. 3D PVT SOLAR TECHNOLOGY OVERVIEW & OPTICS MECHANISM */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">02. SOLAR TECHNOLOGY</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">광자 순환 박스 (Photon Cycling Box) 3D PVT</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">
                10× 발전 밀도 (1,300W/㎡) • 40년+ 수명 • 온수+전력
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">1</div>
              <h4 className="text-base font-bold text-white">집광 렌즈 (Concentrator Lens)</h4>
              <p className="text-slate-300 leading-relaxed">
                모듈 상단의 고투과집광 렌즈가 입사광을 넓은 면적으로 받아들여 내부 캐비티 중심부로 고밀도 수집합니다.
              </p>
            </div>

            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold">2</div>
              <h4 className="text-base font-bold text-white">4면 내부 셀 (4-Side Cells)</h4>
              <p className="text-slate-300 leading-relaxed">
                박스 내부 4개 측면에 고효율 태양전지(Si / Perovskite Tandem)를 3D 배치하여 내부 반사광을 100% 흡수.
              </p>
            </div>

            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">3</div>
              <h4 className="text-base font-bold text-white">액체 수냉 순환 (Cooling Fluid)</h4>
              <p className="text-slate-300 leading-relaxed">
                특수 수냉 유체가 셀 표면을 지속 냉각하여 고온 셀 열화를 방지하고, 회수된 열을 사우나/호텔/가정 24시간 온수로 활용.
              </p>
            </div>
          </div>
        </div>

        {/* 04. CARBON ASSET LIFECYCLE (Requirement 4 & 12) */}
        <div className="bg-navy-900 border border-emerald-500/30 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              <Activity className="w-3.5 h-3.5" />
              <span>CARBON ASSET LIFECYCLE</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white break-keep">
              태양광 프로젝트부터 탄소크레딧 및 미래 토큰화 단계
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm break-keep">
              발전량 데이터 수집부터 검증·발급, 그리고 미래 블록체인 디지털 자산화까지 명확하게 분리된 8단계 라이프사이클.
            </p>
          </div>

          {/* Lifecycle Flow Chart */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-3 text-center text-xs">
            
            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <Sun className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="font-bold text-white block">1. SOLAR PROJECT</span>
              <span className="text-[10px] text-slate-400">PVT 모듈 시공</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <Zap className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="font-bold text-white block">2. POWER GEN</span>
              <span className="text-[10px] text-slate-400">전력+온수 생산</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <Database className="w-5 h-5 text-cyan-400 mx-auto" />
              <span className="font-bold text-white block">3. REAL-TIME DATA</span>
              <span className="text-[10px] text-slate-400">IoT / Smart Meter</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-emerald-500/40 space-y-2">
              <TrendingUp className="w-5 h-5 text-emeraldGreen-400 mx-auto" />
              <span className="font-bold text-emeraldGreen-300 block">4. CO₂ REDUCTION</span>
              <span className="text-[10px] text-slate-400">VMR0017 산정</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <FileCheck2 className="w-5 h-5 text-purple-400 mx-auto" />
              <span className="font-bold text-white block">5. ACCOUNTING</span>
              <span className="text-[10px] text-slate-400">기준선 검토</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400 mx-auto" />
              <span className="font-bold text-white block">6. VALIDATION</span>
              <span className="text-[10px] text-slate-400">VVB 3자 검증</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-emerald-500/50 space-y-2">
              <Award className="w-5 h-5 text-emeraldGreen-400 mx-auto" />
              <span className="font-bold text-emeraldGreen-300 block">7. CARBON CREDIT</span>
              <span className="text-[10px] text-slate-400">Verra VCU 발급</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 space-y-2">
              <Layers className="w-5 h-5 text-amber-400 mx-auto" />
              <span className="font-bold text-white block">8. CARBON ASSET</span>
              <span className="text-[10px] text-slate-400">자산 레지스트리</span>
            </div>

            <div className="bg-navy-950 p-3 rounded-xl border border-purple-500/40 space-y-2 col-span-2 md:col-span-1">
              <Lock className="w-5 h-5 text-purple-400 mx-auto" />
              <span className="font-bold text-purple-300 block">9. TOKENIZATION</span>
              <span className="text-[10px] text-amber-400 font-bold">Future (TBD)</span>
            </div>

          </div>
        </div>

        {/* 05. CARBON REDUCTION CALCULATOR & METHODOLOGY (Requirement 7, 16, 17 + 1MW Token/USD Intuitive Engine) */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/30 space-y-8 bg-navy-900/90 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest">04. CARBON REDUCTION ENGINE</span>
                <span className="text-[11px] bg-emerald-500/20 text-emeraldGreen-300 px-3 py-0.5 rounded-full border border-emerald-500/40 font-bold">
                  PROJECTED CARBON ASSET CALCULATOR
                </span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                CO₂ 감축량 및 탄소크레딧·탄소토큰 추정 가치 산정 엔진
              </h3>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emeraldGreen-300 px-3.5 py-1.5 rounded-full border border-emerald-500/30 font-semibold">
              Verra VMR0017 / ACM0002 국제 방법론 적용
            </span>
          </div>

          {/* Quick Preset Buttons (Highlighting 1MW) */}
          <div className="bg-navy-950 p-4 rounded-2xl border border-navy-800 space-y-2">
            <span className="text-xs font-bold text-slate-400 block">⚡ 태양광 설치 용량 빠른 선택 (Solar Capacity Quick Presets):</span>
            <div className="flex flex-wrap gap-2 text-xs">
              {[0.5, 1.0, 2.0, 5.0, 10.0].map((cap) => (
                <button
                  key={cap}
                  onClick={() => setCalcCapacityMW(cap)}
                  className={`px-4 py-2 rounded-xl font-bold transition-all border ${
                    calcCapacityMW === cap
                      ? 'bg-gradient-to-r from-amber-500 to-emerald-500 text-navy-950 border-amber-400 shadow-md shadow-amber-500/20 scale-105'
                      : 'bg-navy-900 text-slate-300 border-navy-700 hover:border-slate-500'
                  }`}
                >
                  {cap === 1.0 ? '⚡ 1.0 MW (1MW 기본)' : `${cap} MW`}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Input Controls & Sliders */}
            <div className="lg:col-span-5 space-y-5 text-xs">
              
              {/* Solar Capacity Slider */}
              <div className="space-y-2 bg-navy-950 p-4 rounded-2xl border border-navy-800">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-white">태양광 설치 용량 (Solar Capacity):</span>
                  <span className="text-amber-400 font-black text-base bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30">
                    {calcCapacityMW} MW ({calcCapacityMW * 1000} kW)
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="10.0"
                  step="0.1"
                  value={calcCapacityMW}
                  onChange={(e) => setCalcCapacityMW(parseFloat(e.target.value))}
                  className="w-full accent-amber-400 cursor-pointer h-2 bg-navy-900 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>0.1 MW</span>
                  <span>1.0 MW</span>
                  <span>5.0 MW</span>
                  <span>10.0 MW</span>
                </div>
              </div>

              {/* Live VCM Carbon Market Price Feed & Sync Control */}
              <div className="space-y-3 bg-navy-950 p-5 rounded-2xl border border-emerald-500/40 shadow-lg">
                <div className="flex items-center justify-between border-b border-navy-800 pb-2.5">
                  <div className="flex items-center space-x-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isLivePriceSync ? 'bg-emerald-400 opacity-75' : 'bg-slate-500 opacity-0'}`}></span>
                      <span className={`relative inline-flex rounded-full h-2.5 w-2.5 ${isLivePriceSync ? 'bg-emerald-500' : 'bg-slate-500'}`}></span>
                    </span>
                    <span className="font-bold text-white text-xs flex items-center space-x-1">
                      <span>탄소크레딧 실시간 시장 지표 단가 (VCM Live Feed)</span>
                    </span>
                  </div>

                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        const newSyncState = !isLivePriceSync;
                        setIsLivePriceSync(newSyncState);
                        if (newSyncState) handleRefreshLivePrice(selectedBenchmarkKey, true);
                      }}
                      className={`text-[10px] font-bold px-2.5 py-1 rounded-full border transition-all ${
                        isLivePriceSync
                          ? 'bg-emerald-500/20 text-emeraldGreen-300 border-emerald-500/50'
                          : 'bg-navy-900 text-slate-400 border-navy-700'
                      }`}
                    >
                      {isLivePriceSync ? '🔴 LIVE 연동 ON' : '⚙️ 수동 설정'}
                    </button>
                    <button
                      onClick={() => handleRefreshLivePrice(selectedBenchmarkKey, true)}
                      className="p-1 rounded-lg bg-navy-900 text-slate-300 hover:text-white border border-navy-700 hover:border-emerald-500/50 transition-all"
                      title="실시간 시세 즉시 동기화"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-emeraldGreen-400" />
                    </button>
                  </div>
                </div>

                {/* Benchmark Selector Buttons with Market Type Badges */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  {Object.keys(VCM_BENCHMARKS).map((key) => {
                    const b = VCM_BENCHMARKS[key];
                    const isSelected = selectedBenchmarkKey === key;
                    const isCompliance = key === 'EU_ETS_COMPLIANCE';
                    return (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedBenchmarkKey(key);
                          handleRefreshLivePrice(key, isLivePriceSync);
                        }}
                        className={`p-3 rounded-xl border text-left transition-all relative overflow-hidden ${
                          isSelected
                            ? isCompliance
                              ? 'bg-purple-950/60 text-white border-purple-500 font-bold shadow-md ring-1 ring-purple-500'
                              : 'bg-emerald-950/50 text-white border-emerald-500 font-bold shadow-md ring-1 ring-emerald-500'
                            : 'bg-navy-900 text-slate-400 border-navy-800 hover:border-slate-600'
                        }`}
                      >
                        <div className="flex justify-between items-center text-[10px]">
                          <span className="font-mono text-slate-400">{b.symbol}</span>
                          <span className={b.change24h >= 0 ? 'text-emeraldGreen-400 font-mono' : 'text-red-400 font-mono'}>
                            {b.change24h >= 0 ? '▲' : '▼'} {Math.abs(b.change24h)}%
                          </span>
                        </div>
                        <div className="flex items-baseline justify-between mt-1">
                          <span className="text-sm font-black text-amber-300 font-mono">${b.defaultPrice} <span className="text-[9px] font-normal text-slate-400">USD/tCO₂e</span></span>
                          <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold ${
                            isCompliance ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40' : 'bg-emerald-500/20 text-emeraldGreen-300 border border-emerald-500/40'
                          }`}>
                            {isCompliance ? '🏛️ EU 의무규제' : '🌿 VCM 자발적(실제)'}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-400 block mt-1 line-clamp-1">{b.desc}</span>
                      </button>
                    );
                  })}
                </div>

                {/* VCM vs Compliance Market Educational Explanation Card */}
                <div className="p-3 rounded-xl bg-navy-900/90 border border-navy-800 text-[11px] space-y-1">
                  <div className="flex items-center space-x-1.5 text-amber-400 font-bold">
                    <HelpCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    <span>왜 EU-ETS 배출권 시세($74+)와 VCM 시세($22+) 차이가 큰가요?</span>
                  </div>
                  <p className="text-slate-300 text-[10px] leading-relaxed">
                    <strong>1. EU-ETS (의무 규제 시장):</strong> 유럽 대형 배출 기업이 법적 배출 할당량을 채우지 못할 때 톤당 100유로 이상의 막대한 벌금이 부과되는 <strong>법적 강제 규제 시장(EUA)</strong>으로 시세가 $70~$80 USD에 달합니다. (비교 참고용 지수)<br />
                    <strong>2. VCM (자발적 탄소 시장 - 실제 적용):</strong> 본 태양광 프로젝트가 정식 등록되는 Verra VMR0017 / Gold Standard 시장으로, 기업의 자발적 Net-Zero 달성용 <strong>$15 ~ $30 USD / tCO₂e</strong> 시세가 실제 자산 가치 산정의 정석 기준입니다.
                  </p>
                </div>

                {/* Active Indicator & Price Slider */}
                <div className="space-y-2 pt-1 border-t border-navy-800/80">
                  <div className="flex justify-between items-center">
                    <span className="text-[11px] text-slate-300">
                      적용 지표 단가 ({isLivePriceSync ? '실시간 라이브 API' : '수동 지정'}):
                    </span>
                    <span className={`font-black text-sm font-mono px-2.5 py-0.5 rounded border ${
                      selectedBenchmarkKey === 'EU_ETS_COMPLIANCE' 
                        ? 'text-purple-300 bg-purple-950/60 border-purple-500/50' 
                        : 'text-emeraldGreen-400 bg-navy-900 border-emerald-500/30'
                    }`}>
                      ${carbonUnitPriceUSD} USD / tCO₂e
                    </span>
                  </div>

                  {selectedBenchmarkKey === 'EU_ETS_COMPLIANCE' && (
                    <div className="text-[10px] text-purple-300 bg-purple-950/40 p-2 rounded-lg border border-purple-500/30">
                      ⚠️ EU-ETS 시세는 유럽 법적 강제 규제 지표입니다. 해외 태양광 자산은 VCM-SOLAR 시세($15~$30/tCO₂e)가 실제 정산 적용 기준입니다.
                    </div>
                  )}

                  {!isLivePriceSync && (
                    <input
                      type="range"
                      min="10"
                      max="80"
                      step="0.5"
                      value={carbonUnitPriceUSD}
                      onChange={(e) => setCarbonUnitPriceUSD(parseFloat(e.target.value))}
                      className="w-full accent-emerald-500 cursor-pointer h-2 bg-navy-900 rounded-lg"
                    />
                  )}

                  <div className="flex justify-between items-center text-[10px] text-slate-400 pt-0.5">
                    <span>최종 동기화 시각: {livePriceInfo.timestamp}</span>
                    <span className="text-emeraldGreen-400 font-medium">동기화 상태: Live Connected</span>
                  </div>
                </div>
              </div>

              {/* Methodology Selector */}
              <div className="space-y-2">
                <label className="font-bold text-white block">탄소 감축 산정 방법론 (Methodology):</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {METHODOLOGIES.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setCalcMethodology(m.id)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        calcMethodology === m.id
                          ? 'bg-emerald-500/20 text-emeraldGreen-300 border-emerald-500 font-bold'
                          : 'bg-navy-950 text-slate-400 border-navy-800 hover:border-emerald-500/30'
                      }`}
                    >
                      <span className="block text-xs text-white">{m.name}</span>
                      <span className="text-[10px] text-slate-400">{m.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Baseline Grid Info */}
              <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-slate-400 block text-[11px]">베트남 전력계통 배출계수:</span>
                  <span className="text-[10px] text-slate-400">Vietnam National Grid Baseline Factor</span>
                </div>
                <span className="text-white font-mono font-bold">{calcLocationFactor} tCO₂e / MWh</span>
              </div>
            </div>

            {/* Right Column: Intuitive Token Count & USD Asset Value Output Cards */}
            <div className="lg:col-span-7 bg-navy-950 p-6 sm:p-8 rounded-2xl border border-emerald-500/40 space-y-6 shadow-2xl">
              
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center space-x-1.5">
                  <BarChart3 className="w-4 h-4 text-emeraldGreen-400" />
                  <span>{calcCapacityMW}MW 설치 시 예상 탄소 토큰 수량 및 USD 자산 가치</span>
                </span>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-bold">
                  PROJECTED ESTIMATE
                </span>
              </div>

              {/* Key Output Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* 1. Carbon Token Count Card */}
                <div className="bg-navy-900/90 p-5 rounded-2xl border border-amber-500/40 space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-amber-500/10 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                    🪙 연간 예상 Carbon Token 수량
                  </span>
                  <p className="text-3xl font-black text-white">
                    {calcResult.estimatedCredits.toLocaleString()} <span className="text-amber-400 text-lg">Tokens / 년</span>
                  </p>
                  <p className="text-[11px] text-slate-300">
                    * 1 Token ≈ 1 tCO₂e 정식 검증 크레딧 연계
                  </p>
                  <div className="text-[10px] text-slate-400 bg-navy-950 p-2 rounded-lg border border-navy-800">
                    {calcCapacityMW}MW 기준 연간 <strong className="text-white">{calcResult.annualGenerationMWh.toLocaleString()} MWh</strong> 발전 ➔ <strong className="text-emeraldGreen-400">{calcResult.netReduction.toLocaleString()} tCO₂e</strong> CO₂ 감축
                  </div>
                </div>

                {/* 2. Projected Annual USD Value Card */}
                <div className="bg-navy-900/90 p-5 rounded-2xl border border-emerald-500/40 space-y-2 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-500/10 rounded-full blur-xl pointer-events-none" />
                  <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest block">
                    💵 연간 탄소 자산 USD 추정 가치
                  </span>
                  <p className="text-3xl font-black text-emeraldGreen-400">
                    ${(Math.round(calcResult.netReduction * carbonUnitPriceUSD)).toLocaleString()} <span className="text-slate-300 text-base font-normal">USD / 년</span>
                  </p>
                  <p className="text-[11px] text-slate-300">
                    * 톤당 ${carbonUnitPriceUSD} USD 시장 참고 단가 적용 시
                  </p>
                  <div className="text-[10px] text-slate-400 bg-navy-950 p-2 rounded-lg border border-navy-800">
                    글로벌 VCM 시세($15~$30/tCO₂e) 적용 시: <br />
                    <strong className="text-white">${(Math.round(calcResult.netReduction * 15)).toLocaleString()} ~ ${(Math.round(calcResult.netReduction * 30)).toLocaleString()} USD / 년</strong>
                  </div>
                </div>

              </div>

              {/* 3. Long-Term Cumulative Horizon Cards */}
              <div className="bg-navy-900 p-5 rounded-2xl border border-navy-800 space-y-3">
                <span className="text-xs font-bold text-slate-300 uppercase tracking-wider block">
                  📈 장기 누적 예상 탄소 자산 가치 추정 (10년 / 20년)
                </span>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[11px]">10년 누적 탄소 자산 가치</span>
                    <p className="text-xl font-black text-cyan-400 mt-1">
                      ${(Math.round(calcResult.netReduction * carbonUnitPriceUSD * 10)).toLocaleString()} USD
                    </p>
                    <span className="text-[10px] text-slate-400">
                      총 { (calcResult.estimatedCredits * 10).toLocaleString() } Tokens 누적
                    </span>
                  </div>

                  <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[11px]">20년 누적 탄소 자산 가치</span>
                    <p className="text-xl font-black text-purple-400 mt-1">
                      ${(Math.round(calcResult.netReduction * carbonUnitPriceUSD * 20)).toLocaleString()} USD
                    </p>
                    <span className="text-[10px] text-slate-400">
                      총 { (calcResult.estimatedCredits * 20).toLocaleString() } Tokens 누적
                    </span>
                  </div>
                </div>
              </div>

              {/* Detailed Technical Breakdown Table */}
              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Gross CO₂ Emission Reduction:</span>
                  <span className="font-mono">{calcResult.grossReduction} tCO₂e</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Project Emissions & Leakage:</span>
                  <span className="font-mono">0.0 tCO₂e</span>
                </div>
                <div className="flex justify-between font-bold text-emeraldGreen-300 border-t border-navy-800 pt-2 text-sm">
                  <span>Projected Verified Carbon Credits in Pipeline:</span>
                  <span className="font-mono">{calcResult.estimatedCredits} VCU / 년</span>
                </div>
              </div>

              {/* Mandatory Legal & Regulatory Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-[11px] text-amber-200 leading-relaxed space-y-1">
                <p className="font-bold flex items-center space-x-1">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                  <span>법률 및 탄소자산 추정 가치 고지 (Legal Disclaimer)</span>
                </p>
                <p className="text-slate-300">
                  본 계산 결과는 국제 자발적 탄소시장(VCM)의 톤당 참고 가격(${carbonUnitPriceUSD}/tCO₂e) 및 Verra VMR0017 방법론 기반의 예상 추정치(Projected Estimate)입니다. 
                  실제 탄소크레딧 발급량과 토큰화 가치는 제3자 검증기관(VVB)의 현장 실사, 탄소 등록제도(Verra, Gold Standard 등) 승인 및 향후 블록체인 토큰화 심사 결과에 따라 최종 확정되며, 확정 수익을 보장하는 금융 상품이 아닙니다.
                </p>
              </div>

            </div>

          </div>
        </div>

        {/* 06. FUTURE CARBON TOKENIZATION (Requirement 10, 11) */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border border-purple-500/40 rounded-3xl p-8 sm:p-12 space-y-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">08. BLOCKCHAIN INTEGRATION</span>
                <span className="text-[11px] bg-purple-500/20 text-purple-300 px-3 py-0.5 rounded-full border border-purple-500/40 font-bold">
                  TOKENIZATION UNDER DEVELOPMENT
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white">Future Carbon Tokenization</h3>
            </div>
            <span className="text-xs bg-navy-950 text-slate-300 px-4 py-2 rounded-xl border border-navy-800 font-semibold">
              Status: Coming Soon / Under Development
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-2">
              <span className="text-slate-400 font-semibold block">Underlying Asset</span>
              <p className="text-sm font-bold text-white">Verified Carbon Credit (VCU)</p>
              <span className="text-[10px] text-slate-400">Actual Reduction Based</span>
            </div>

            <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-2">
              <span className="text-slate-400 font-semibold block">Token Status</span>
              <p className="text-sm font-bold text-amber-400">Under Development</p>
              <span className="text-[10px] text-slate-400">Blockchain Protocol R&D</span>
            </div>

            <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-2">
              <span className="text-slate-400 font-semibold block">Blockchain Network</span>
              <p className="text-sm font-bold text-slate-400">TBD (To Be Determined)</p>
              <span className="text-[10px] text-slate-400">Eco-Friendly L1/L2 Review</span>
            </div>

            <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-2">
              <span className="text-slate-400 font-semibold block">Backing Ratio & Standard</span>
              <p className="text-sm font-bold text-slate-400">TBD (1 Credit : 1 Token TBD)</p>
              <span className="text-[10px] text-slate-400">Regulatory Review</span>
            </div>
          </div>

          {/* Legal Disclaimer Box (Mandatory Requirement 10 & 25) */}
          <div className="bg-navy-950/80 border border-amber-500/30 rounded-2xl p-6 space-y-2 text-xs">
            <div className="flex items-center space-x-2 text-amber-400 font-bold">
              <AlertCircle className="w-4 h-4 flex-shrink-0" />
              <span>법률 및 탄소자산 디지털화 규정 안내 (Legal Disclaimer)</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              <strong>한국어:</strong> 검증된 탄소자산의 블록체인 기반 디지털화는 관련 법규, 탄소등록제도(Verra, Gold Standard 등) 및 법률 검토를 거쳐 향후 추진합니다.
            </p>
            <p className="text-slate-400 text-[11px] leading-relaxed">
              <strong>English:</strong> Verified carbon assets may be digitally represented on blockchain infrastructure subject to applicable regulations, registry rules and legal review.
            </p>
          </div>
        </div>

        {/* 07. VIETNAM REGIONAL PROJECT MAP & SELECTOR (Requirement 14) */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">09. PROJECT MAP</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">베트남 지역별 태양광 & 탄소 프로젝트 지도</h3>
            </div>
            <span className="text-xs text-slate-400">클릭 시 프로젝트별 상세 데이터 및 탄소 감축 현황 확인</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Vietnam Region Map Quick Click List */}
            <div className="lg:col-span-5 space-y-3 text-xs">
              <span className="font-bold text-slate-400 uppercase block mb-2">Regional Operations:</span>
              {solarProjectsData.map((prj) => (
                <button
                  key={prj.projectId}
                  onClick={() => setSelectedProject(prj)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                    selectedProject?.projectId === prj.projectId
                      ? 'bg-amber-500/20 border-amber-500 text-white font-bold shadow-lg'
                      : 'bg-navy-950 text-slate-300 border-navy-800 hover:border-amber-500/40'
                  }`}
                >
                  <div className="space-y-1">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      <span className="font-bold text-white">{prj.province}</span>
                      <span className="text-[10px] bg-navy-900 px-2 py-0.5 rounded text-amber-300 font-mono">
                        {prj.solarCapacityMW} MW
                      </span>
                    </div>
                    <span className="text-[11px] text-slate-400 block pl-5">{prj.projectName}</span>
                  </div>
                  <ArrowRight className="w-4 h-4 text-amber-400 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>

            {/* Selected Project Preview Card */}
            <div className="lg:col-span-7 bg-navy-950 p-6 sm:p-8 rounded-3xl border border-navy-800 space-y-6">
              {selectedProject ? (
                <div className="space-y-6 text-xs">
                  <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                    <div>
                      <span className="text-[10px] text-amber-400 font-mono block">{selectedProject.projectCode}</span>
                      <h4 className="text-lg font-bold text-white">{selectedProject.projectName}</h4>
                      <p className="text-slate-400 text-[11px]">{selectedProject.location}</p>
                    </div>
                    <span className="bg-emerald-500/20 text-emeraldGreen-400 px-3 py-1 rounded-full text-[11px] font-bold border border-emerald-500/30">
                      {selectedProject.creditStatus}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div>
                      <span className="text-slate-400 text-[11px] block">설치 용량</span>
                      <p className="text-lg font-extrabold text-amber-400">{selectedProject.solarCapacityMW} MW</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] block">연간 예상 발전량</span>
                      <p className="text-lg font-extrabold text-cyan-400">{selectedProject.annualGenerationMWh.toLocaleString()} MWh</p>
                    </div>
                    <div>
                      <span className="text-slate-400 text-[11px] block">Estimated CO₂ Reduction</span>
                      <p className="text-lg font-extrabold text-emeraldGreen-400">{selectedProject.estimatedCO2Reduction.toLocaleString()} tCO₂e</p>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2">
                    <div className="flex justify-between text-slate-300">
                      <span>Verification Status:</span>
                      <span className="font-bold text-amber-400">{selectedProject.verificationStatus}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Tokenization Status:</span>
                      <span className="font-bold text-purple-400">{selectedProject.tokenStatus}</span>
                    </div>
                  </div>

                  <p className="text-slate-300 text-[11px] leading-relaxed">
                    {selectedProject.description}
                  </p>
                </div>
              ) : (
                <div className="py-12 text-center text-slate-400 space-y-3">
                  <MapPin className="w-10 h-10 text-amber-400 mx-auto" />
                  <p className="text-sm font-bold text-white">왼쪽 프로젝트 목록에서 원하는 지역을 선택하세요.</p>
                  <p className="text-xs">하노이, 박닌, 하이퐁, 다낭, 호치민 시 등 베트남 전역의 발전소 데이터 제공</p>
                </div>
              )}
            </div>

          </div>
        </div>

        {/* 08. 31-SLIDE SEED DECK PREVIEW SECTION */}
        <div id="deck-preview" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">BEST WINNER SOLAR DECK</span>
              <h3 className="text-2xl font-extrabold text-white flex items-center space-x-2">
                <span>사업계획서 전체 31 슬라이드 미리보기</span>
                <span className="text-xs font-medium text-slate-400 bg-navy-900 px-2.5 py-1 rounded-full border border-navy-800">
                  클릭 시 대형 뷰어로 확대
                </span>
              </h3>
            </div>

            <button
              onClick={() => handleOpenSlideAt(0)}
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center space-x-2"
            >
              <Maximize2 className="w-4 h-4" />
              <span>슬라이드 쇼 뷰어 열기</span>
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {slideImages.map((src, index) => (
              <div
                key={index}
                onClick={() => handleOpenSlideAt(index)}
                className="group relative bg-navy-900 rounded-xl overflow-hidden border border-navy-800 hover:border-amber-500/60 transition-all cursor-pointer shadow-md hover:-translate-y-1"
              >
                <div className="aspect-[16/9] overflow-hidden bg-navy-950">
                  <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2 flex items-center justify-between text-[11px] bg-navy-900 text-slate-300 group-hover:bg-amber-500 group-hover:text-navy-950 transition-colors font-bold">
                  <span>Slide {index + 1}</span>
                  <Eye className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 09. BOTTOM CTA BANNER */}
        <div className="bg-gradient-to-r from-amber-500 via-emerald-600 to-teal-600 rounded-3xl p-8 sm:p-12 text-navy-950 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-navy-950 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                ENERGY & CARBON PARTNERSHIP
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-navy-950 break-keep">
                태양광 시공 & 탄소 자산 개발 제휴 문의
              </h3>
              <p className="text-navy-950 font-semibold text-sm max-w-2xl break-keep">
                사우나, 호텔, 공장, 빌라 맞춤형 3D PVT 태양광 시공 및 Carbon Credit 연계 기술 컨설팅을 무료로 지원해 드립니다.
              </p>
            </div>

            <button
              onClick={() => {
                if (onOpenConsult) onOpenConsult('energy');
                else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap min-h-[52px]"
            >
              <Sun className="w-5 h-5 text-amber-400" />
              <span>태양광 & 탄소 플랫폼 상담 신청하기 →</span>
            </button>
          </div>
        </div>

      </div>

      {/* MODAL 1: FULLSCREEN DECK VIEWER MODAL */}
      {isSlideModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-white">
            <div className="flex items-center space-x-3">
              <img src="/images/logo/logo.png" alt="BEST Winner" className="h-8 w-auto object-contain" />
              <div>
                <h4 className="text-sm font-bold text-white">BEST Winner Solar Energy Seed Deck</h4>
                <p className="text-[11px] text-slate-400">Slide {currentSlideIndex + 1} of {totalSlides}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href={pdfPath}
                download="BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf"
                className="hidden sm:flex items-center space-x-1 text-xs bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-3 py-1.5 rounded-lg transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF 다운로드</span>
              </a>
              <button
                onClick={() => setIsSlideModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="relative flex-grow flex items-center justify-center py-4 my-2 overflow-hidden">
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-navy-950 text-white border border-slate-700 transition-all shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center shadow-2xl rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
              <img
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain select-none"
              />
            </div>

            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-navy-950 text-white border border-slate-700 transition-all shadow-2xl"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          <div className="border-t border-slate-800 pt-3">
            <div className="flex items-center justify-center space-x-2 overflow-x-auto py-1 max-w-full no-scrollbar">
              {slideImages.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlideIndex(idx)}
                  className={`relative flex-shrink-0 w-14 h-9 rounded-md overflow-hidden border transition-all ${
                    idx === currentSlideIndex 
                      ? 'border-amber-400 ring-2 ring-amber-400/50 scale-105' 
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt={`Thumb ${idx + 1}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-black/80 text-[9px] text-white px-1 font-bold">
                    {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: AI CARBON CONSULTANT SIMULATOR MODAL */}
      {isAiConsultantOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-emerald-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <div className="flex items-center space-x-2 text-white">
                <Bot className="w-6 h-6 text-emeraldGreen-400" />
                <h4 className="text-lg font-bold">AI Carbon Consultant (탄소 시뮬레이터)</h4>
              </div>
              <button
                onClick={() => setIsAiConsultantOpen(false)}
                className="p-1.5 rounded-lg bg-navy-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800 space-y-1">
                <span className="text-slate-400 font-semibold block">Q. "1MW 태양광 발전소를 설치하면 연간 탄소감축량은 얼마인가요?"</span>
                <p className="text-slate-300">A. 아래 슬라이더로 원하는 용량을 조절하시면 Verra VMR0017 방법론 기반 시뮬레이션 결과가 표시됩니다.</p>
              </div>

              <div className="space-y-2">
                <label className="font-bold text-white flex justify-between">
                  <span>설치용량 선택:</span>
                  <span className="text-emeraldGreen-400 font-black text-sm">{calcCapacityMW} MW</span>
                </label>
                <input
                  type="range"
                  min="0.1"
                  max="10.0"
                  step="0.1"
                  value={calcCapacityMW}
                  onChange={(e) => setCalcCapacityMW(parseFloat(e.target.value))}
                  className="w-full accent-emerald-500 cursor-pointer h-2 bg-navy-950 rounded-lg"
                />
              </div>

              <div className="bg-navy-950 p-5 rounded-2xl border border-emerald-500/30 space-y-3">
                <div className="flex justify-between border-b border-navy-800 pb-2">
                  <span className="text-slate-400">1. 예상 연간 발전량:</span>
                  <span className="font-bold text-cyan-400 font-mono">{calcResult.annualGenerationMWh.toLocaleString()} MWh</span>
                </div>
                <div className="flex justify-between border-b border-navy-800 pb-2">
                  <span className="text-slate-400">2. 적용 배출계수 (Vietnam Grid):</span>
                  <span className="font-bold text-white font-mono">0.533 tCO₂e/MWh</span>
                </div>
                <div className="flex justify-between border-b border-navy-800 pb-2">
                  <span className="text-slate-400">3. Estimated CO₂ Emission Reduction:</span>
                  <span className="font-bold text-emeraldGreen-400 font-mono">{calcResult.netReduction.toLocaleString()} tCO₂e / 년</span>
                </div>
                <div className="flex justify-between font-bold text-amber-400 text-sm pt-1">
                  <span>4. Projected Carbon Credits:</span>
                  <span className="font-mono">{calcResult.estimatedCredits} VCU / 년</span>
                </div>
              </div>

              <div className="p-3 bg-navy-950 rounded-xl border border-amber-500/30 text-[11px] text-slate-300 space-y-1">
                <span className="font-bold text-amber-400 block">필요 검증 절차 (Verification Steps):</span>
                <p>① PDD 설계서 작성 ➔ ② VVB 3자 검증 ➔ ③ Verra 등록 ➔ ④ 모니터링 성적서 발행 ➔ ⑤ VCU 공식 발급</p>
              </div>

              <p className="text-[10px] text-slate-400 italic">
                * 위 계산 결과는 Estimated / Preliminary 상태이며, 공식 발급량은 3자 검증기관의 최종 감사 후 확정됩니다.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsAiConsultantOpen(false)}
                className="bg-emerald-600 hover:bg-emerald-500 text-navy-950 font-bold text-xs px-6 py-2.5 rounded-xl"
              >
                시뮬레이터 닫기
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 3: ESG REPORT GENERATOR MODAL */}
      {isEsgModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-cyan-500/40 rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <div className="flex items-center space-x-2 text-white">
                <FileCheck2 className="w-6 h-6 text-cyan-400" />
                <h4 className="text-lg font-bold">ESG Environmental Performance Report</h4>
              </div>
              <button
                onClick={() => setIsEsgModalOpen(false)}
                className="p-1.5 rounded-lg bg-navy-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="p-4 bg-navy-950 rounded-2xl border border-navy-800 space-y-3">
                <div className="flex justify-between border-b border-navy-800 pb-2 font-bold text-white">
                  <span>BEST Winner Group ESG Summary:</span>
                  <span className="text-cyan-400">2026 Q3 Official Record</span>
                </div>
                <div className="space-y-1.5 text-slate-300">
                  <div className="flex justify-between">
                    <span>• Total Installed Solar Capacity:</span>
                    <span className="font-mono text-white">18.5 MW</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Cumulative Energy Generated:</span>
                    <span className="font-mono text-white">28,500 MWh</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Estimated Annual CO₂ Emission Reduction:</span>
                    <span className="font-mono text-emeraldGreen-400 font-bold">15,200 tCO₂e</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Equivalent Tree Planting Impact:</span>
                    <span className="font-mono text-amber-400">68,400 Pine Trees</span>
                  </div>
                  <div className="flex justify-between">
                    <span>• Verification Registry Status:</span>
                    <span className="font-mono text-purple-300">Verra VMR0017 Pipeline</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => alert('ESG Report PDF Download Started (Simulated).')}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-navy-950 font-black py-3 rounded-xl flex items-center justify-center space-x-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Full ESG Report (PDF)</span>
                </button>
                <button
                  onClick={() => alert('ESG Data Excel Exported (Simulated).')}
                  className="flex-1 bg-navy-950 hover:bg-navy-800 text-slate-200 border border-navy-800 font-bold py-3 rounded-xl flex items-center justify-center space-x-2"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emeraldGreen-400" />
                  <span>Export Raw Data (Excel)</span>
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsEsgModalOpen(false)}
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
