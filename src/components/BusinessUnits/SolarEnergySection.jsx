import React, { useState } from 'react';
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
  Check
} from 'lucide-react';

import { CarbonCalculationService, EMISSION_FACTORS, METHODOLOGIES } from '../../services/carbonCalculationService';
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

        {/* 01. HERO BANNER: Beyond Solar Energy — Building Carbon Assets */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>3D PVT SOLAR & CARBON PLATFORM</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-emerald-500/20 text-emeraldGreen-300 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/40">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>VERRA VMR0017 METHODOLOGY</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/40">
                  <Award className="w-3.5 h-3.5" />
                  <span>특허 제10-2776941호</span>
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-400 block">
                  Beyond Solar Energy — Building Carbon Assets
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
                  태양광 발전을 넘어, <br />
                  <span className="bg-gradient-to-r from-amber-400 via-emeraldGreen-400 to-cyan-300 bg-clip-text text-transparent">
                    검증 가능한 탄소자산(Carbon Assets)을 만듭니다
                  </span>
                </h2>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed break-keep">
                BEST winner Vn은 태양광 발전 프로젝트의 발전량과 탄소감축 데이터를 디지털화하고, 
                국제 검증 기준에 부합하는 <strong>Carbon Credit (탄소크레딧)</strong> 및 
                차세대 <strong>Carbon Asset Management Platform</strong>을 구축합니다.
              </p>
            </div>

            {/* Quick Action Button Stack */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => setIsAiConsultantOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-xs transition-all transform hover:scale-[1.02] border border-emerald-400/40 whitespace-nowrap min-h-[48px]"
              >
                <Bot className="w-4 h-4" />
                <span>AI 탄소감축량 시뮬레이터 실행</span>
              </button>

              <button
                onClick={() => setIsEsgModalOpen(true)}
                className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-slate-200 hover:text-emeraldGreen-400 font-bold px-6 py-3.5 rounded-xl border border-emerald-500/30 flex items-center justify-center space-x-2 text-xs transition-all whitespace-nowrap min-h-[48px]"
              >
                <FileCheck2 className="w-4 h-4 text-emeraldGreen-400" />
                <span>ESG 환경 성과 보고서 생성 (PDF/Excel)</span>
              </button>

              <a 
                href={pdfPath} 
                download="BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-navy-900 hover:bg-navy-800 text-slate-300 font-semibold px-6 py-3 rounded-xl border border-navy-700 flex items-center justify-center space-x-2 text-xs transition-all whitespace-nowrap min-h-[44px]"
              >
                <Download className="w-3.5 h-3.5 text-amber-400" />
                <span>사업계획서 PDF 원본 다운로드</span>
              </a>
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

        {/* 05. CARBON REDUCTION CALCULATOR & METHODOLOGY (Requirement 7, 16, 17) */}
        <div className="glass-card rounded-3xl p-8 sm:p-12 border border-emerald-500/30 space-y-8 bg-navy-900/90">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest block mb-1">04. CARBON REDUCTION ENGINE</span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">CO₂ 감축량 및 탄소크레딧 산정 엔진</h3>
            </div>
            <span className="text-xs bg-emerald-500/20 text-emeraldGreen-300 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              Verra VMR0017 / ACM0002 방법론 선택 가능
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-4 text-xs">
              <div className="space-y-2">
                <label className="font-bold text-white flex justify-between">
                  <span>태양광 설치 용량 (Solar Capacity):</span>
                  <span className="text-amber-400 font-black text-sm">{calcCapacityMW} MW ({calcCapacityMW * 1000} kW)</span>
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

              <div className="space-y-2 pt-2">
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

              <div className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                <span className="font-bold text-slate-400 block">적용 배출계수 (Emission Factor):</span>
                <span className="text-white font-mono">{calcLocationFactor} tCO₂e / MWh</span>
                <p className="text-[10px] text-slate-400">베트남 국가 전력 계통 배출계수 표준 적용</p>
              </div>
            </div>

            {/* Calculation Output Box */}
            <div className="lg:col-span-6 bg-navy-950 p-6 sm:p-8 rounded-2xl border border-emerald-500/40 space-y-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                <span className="text-xs font-bold text-slate-400 uppercase">Calculation Engine Output</span>
                <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  Projected / Estimated
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[11px] text-slate-400 block">연간 예상 발전량</span>
                  <p className="text-2xl font-black text-cyan-400">{calcResult.annualGenerationMWh.toLocaleString()} MWh</p>
                </div>
                <div>
                  <span className="text-[11px] text-emeraldGreen-400 block">Estimated CO₂ Reduction</span>
                  <p className="text-2xl font-black text-emeraldGreen-400">{calcResult.netReduction.toLocaleString()} tCO₂e/yr</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>Gross Emission Reduction:</span>
                  <span className="font-mono">{calcResult.grossReduction} tCO₂e</span>
                </div>
                <div className="flex justify-between text-slate-400 text-[11px]">
                  <span>Project Emissions & Leakage:</span>
                  <span className="font-mono">0.0 tCO₂e</span>
                </div>
                <div className="flex justify-between font-bold text-emeraldGreen-300 border-t border-navy-800 pt-2 text-sm">
                  <span>Projected Carbon Credits in Pipeline:</span>
                  <span className="font-mono">{calcResult.estimatedCredits} VCU/yr</span>
                </div>
              </div>

              <p className="text-[11px] text-slate-400 italic">
                ⚠️ 주의: 위 계산 결과는 방법론 예시 기준이며, 공식 탄소크레딧 발급은 3자 검증기관(VVB)의 현장 실사 및 최종 검증(Verification) 후 확정됩니다.
              </p>
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
