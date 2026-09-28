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
  Clock
} from 'lucide-react';

export default function SolarEnergySection({ t, onOpenConsult }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // 31 Slides
  const totalSlides = 31;
  const slideImages = Array.from({ length: totalSlides }, (_, i) => `/images/solar/deck/page_${i + 1}.png`);
  const pdfPath = '/docu/solar/BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf';

  const handleOpenModalAt = (index) => {
    setCurrentSlideIndex(index);
    setIsModalOpen(true);
  };

  const nextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <section className="py-16 bg-navy-950 text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">

        {/* 1. Header Banner & PDF Action Bar */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-amber-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 transform translate-x-12 -translate-y-12 w-64 h-64 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40">
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                  <span>3D PVT SOLAR INNOVATION</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-blue-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-blue-500/40">
                  <Award className="w-3.5 h-3.5" />
                  <span>특허 제10-2776941호</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-purple-500/20 text-purple-300 text-xs font-bold px-3 py-1 rounded-full border border-purple-500/40">
                  <Globe className="w-3.5 h-3.5" />
                  <span>Intersolar Munich 2023 & 두바이 엑스포</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
                BEST Winner Solar Energy <br />
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-yellow-300 bg-clip-text text-transparent">
                  광자 순환 박스 (Photon Cycling Box) 3D PVT
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed break-keep">
                기존 평면 태양광 패널의 물리적 한계를 극복한 차세대 3D 집광형 PVT 모듈. 
                단위 면적당 <strong>10배 발전량 밀도 (1,300W/㎡)</strong>와 액체 수냉 시스템 기반 <strong>40년+ 수명</strong>, 
                그리고 <strong>전기+24시간 온수 동시 생산</strong>으로 최고 수준의 ROI를 제공합니다.
              </p>
            </div>

            {/* Action Buttons Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <a 
                href={pdfPath} 
                download="BEST_Winner_Solar_Energy_Seed_Deck_2026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-xs transition-all transform hover:scale-[1.02] border border-amber-400/40 whitespace-nowrap min-h-[48px]"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>사업계획서 PDF 원본 다운로드</span>
              </a>

              <button
                onClick={() => handleOpenModalAt(0)}
                className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-slate-200 hover:text-amber-400 font-bold px-6 py-3.5 rounded-xl border border-amber-500/30 flex items-center justify-center space-x-2 text-xs transition-all whitespace-nowrap min-h-[48px]"
              >
                <Eye className="w-4 h-4 text-amber-400" />
                <span>사업계획서 31 슬라이드 미리보기</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Key Breakthrough Metrics (4 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="glass-card rounded-2xl p-6 border border-amber-500/30 space-y-3 relative overflow-hidden group hover:border-amber-400/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform">
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">발전 밀도</span>
              <p className="text-3xl font-black text-amber-400 mt-1">10배 극대화</p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                기존 131W/㎡ 대비 실증 데이터 <strong>1,300W/㎡</strong> 달성 (동일 설치 면적 기준 10배 출력)
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-amber-500/30 space-y-3 relative overflow-hidden group hover:border-amber-400/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center border border-orange-500/30 text-orange-400 group-hover:scale-110 transition-transform">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">모듈 내구성</span>
              <p className="text-3xl font-black text-orange-400 mt-1">40년+ 수명 (2배)</p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                액체 수냉 및 차폐형 밀폐 박스로 셀 열화 원인(열·습기·오염)을 근본 차단
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-amber-500/30 space-y-3 relative overflow-hidden group hover:border-amber-400/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30 text-cyan-400 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">하이브리드 에너지</span>
              <p className="text-3xl font-black text-cyan-400 mt-1">PVT 복합 발전</p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                태양광 전력 생산과 동시에 냉각열을 <strong>24시간 온수 공급</strong>으로 회수
              </p>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-amber-500/30 space-y-3 relative overflow-hidden group hover:border-amber-400/60 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-slate-400 font-semibold uppercase tracking-wider block">원천 기술 검증</span>
              <p className="text-3xl font-black text-purple-400 mt-1">특허 등록 완료</p>
              <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                등록 특허 제10-2776941호 및 Intersolar 뮌헨 2023 · 두바이 엑스포 출품
              </p>
            </div>
          </div>

        </div>

        {/* 3. 3D Photon Cycling Box Core Optics Principle */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3.5 py-1.5 rounded-full border border-amber-500/30">
              <Cpu className="w-3.5 h-3.5" />
              <span>CORE OPTICS MECHANISM</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white break-keep">
              3D 광자 순환 박스 (Photon Cycling Box) 작동 원리
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm break-keep">
              기존 평면 태양광은 1회 반사 시 빛의 80% 이상이 유실되지만, 광자 순환 박스는 내부 고반사 캐비티에서 빛을 가두어 완벽히 재활용합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="flex items-center space-x-3 text-amber-400 font-black text-lg">
                <span className="w-8 h-8 rounded-lg bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-sm">1</span>
                <span>집광 렌즈 (Concentrator Lens)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                모듈 상단의 고투과집광 렌즈가 직사광 및 산사광을 넓은 면적으로 받아들여 내부 캐비티 중심부로 고밀도 수집합니다.
              </p>
            </div>

            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="flex items-center space-x-3 text-orange-400 font-black text-lg">
                <span className="w-8 h-8 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-sm">2</span>
                <span>4면 내부 셀 (4-Side Cells)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                박스 내부 4개 측면에 고효율 태양전지(Si / Perovskite Tandem)를 3D 배치하여 어느 각도에서 입사하더라도 100% 모듈 발전.
              </p>
            </div>

            <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
              <div className="flex items-center space-x-3 text-cyan-400 font-black text-lg">
                <span className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/30 flex items-center justify-center text-sm">3</span>
                <span>액체 냉각 순환 (Cooling Fluid)</span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                특수 냉각 유체가 4개 셀 표면을 지속 냉각하여 고온 셀 열화를 방지하고, 회수된 열을 사우나/호텔/가정 온수로 유용하게 전환.
              </p>
            </div>

          </div>

          {/* Special Feature Comparison Banner */}
          <div className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-amber-500/10 border border-amber-500/30 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">비교 실증 데이터</span>
              <h4 className="text-lg font-bold text-white">기존 100㎡ 면적 발전량 = 광자 순환 박스 단 10㎡로 대체 완료</h4>
              <p className="text-xs text-slate-300">부지 설치 비용 90% 절감, 토지/지붕 면적 이용 효율 극대화</p>
            </div>
            <button
              onClick={() => handleOpenModalAt(5)} // Page 6: Optics tech
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-black text-xs px-5 py-3 rounded-xl shadow-md transition-all whitespace-nowrap"
            >
              광자 순환 특허 도면 상세 보기 →
            </button>
          </div>
        </div>

        {/* 4. Target Market & Application Case Studies (4 Industry Cards) */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/30">
              <Activity className="w-3.5 h-3.5" />
              <span>TARGET MARKET & INVESTMENT ROI</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white break-keep">
              주요 타겟 사업분야 및 회수 기간 (ROI)
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm break-keep">
              온수와 전력을 동시에 대량 사용하는 시설일수록 최고의 경제적 이득을 얻을 수 있습니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Target 1: Sauna / Jjimjilbang */}
            <div className="glass-card rounded-3xl p-8 border border-amber-500/40 relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-amber-500 text-navy-950 px-3 py-1 rounded-full uppercase tracking-wider">
                  🔥 1순위 타겟 (최우선)
                </span>
                <span className="text-amber-400 font-extrabold text-sm">ROI 예상: 1년 이내</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">사우나 / 찜질방 / 온천 리조트</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                24시간 대량 온수 공급과 찜질방 전기 사용을 PVT 시스템으로 동시 해결합니다. 
                가스비/전기세 70% 이상 절감으로 단 1년 만에 설비 투자금을 전액 회수할 수 있습니다.
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs text-amber-300 font-semibold">
                <span>• 24시간 온수 리서보어 연결</span>
                <span>• 연료비 절감률 최대 75%</span>
              </div>
            </div>

            {/* Target 2: Hotels & Resorts */}
            <div className="glass-card rounded-3xl p-8 border border-blue-500/40 relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-blue-500 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  🏨 2순위 타겟
                </span>
                <span className="text-cyan-300 font-extrabold text-sm">ROI 예상: 1.5년</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">호텔 / 고급 리조트 / 스포츠 센터</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                객실 온수 공급 및 수영장/피트니스 부대시설 난방 에너지를 충당합니다. 
                옥상 설치 면적을 최소화하면서 건물 에너지 효율 등급 향상과 ESG 경영 실천.
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs text-cyan-300 font-semibold">
                <span>• 옥상 공간 활용률 10배</span>
                <span>• LEED / ESG 친환경 인증</span>
              </div>
            </div>

            {/* Target 3: Factories & Industrial Parks */}
            <div className="glass-card rounded-3xl p-8 border border-emerald-500/40 relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-emerald-500 text-navy-950 px-3 py-1 rounded-full uppercase tracking-wider">
                  🏭 3순위 타겟
                </span>
                <span className="text-emeraldGreen-400 font-extrabold text-sm">ROI 예상: 2년</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">공장 지붕 / 산업단지 / RE100</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                공장 지붕이나 벽면 하중 부담을 줄이면서 10배 전력을 발전합니다. 
                글로벌 공급망 RE100 이행 필수 조건 충족 및 40년+ 초장기 안정적 발전 보장.
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs text-emeraldGreen-300 font-semibold">
                <span>• RE100 정품 인증 규격</span>
                <span>• 지붕 구조물 하중 최소화</span>
              </div>
            </div>

            {/* Target 4: Residential / Villa */}
            <div className="glass-card rounded-3xl p-8 border border-purple-500/40 relative overflow-hidden space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-black bg-purple-500 text-white px-3 py-1 rounded-full uppercase tracking-wider">
                  🏡 4순위 타겟
                </span>
                <span className="text-purple-300 font-extrabold text-sm">자급자족 솔루션</span>
              </div>
              <h4 className="text-xl font-extrabold text-white">단독주택 / 타운하우스 / 고급 빌라</h4>
              <p className="text-slate-300 text-xs leading-relaxed">
                소형 3D PVT 모듈 2~4개 설치만으로 주택 전체 전력 및 가정용 온수를 완전 자율 공급. 
                컴팩트한 크기로 건물 디자인미를 해치지 않고 독창적인 외관 구현.
              </p>
              <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs text-purple-300 font-semibold">
                <span>• 가정용 전기세/온수비 0원</span>
                <span>• 컴팩트 모듈 설치 가능</span>
              </div>
            </div>

          </div>
        </div>

        {/* 5. Global Validation & Exhibition Record */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-8 sm:p-12 space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">GLOBAL FIELD VALIDATION</span>
              <h3 className="text-2xl font-extrabold text-white">Intersolar Munich 2023 & 글로벌 바이어 상담</h3>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-xs bg-amber-500/20 text-amber-400 px-3 py-1 rounded-full border border-amber-500/30">독일, 프랑스, UAE, 가나, 케냐 바이어 러브콜</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-2">
              <span className="font-bold text-amber-400 block">🇫🇷 프랑스 E-LECLERC</span>
              <p className="text-slate-300">대형 유통 매장 옥상 PVT 도입 타당성 검토 진행</p>
            </div>
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-2">
              <span className="font-bold text-amber-400 block">🇩🇪 독일 Öko-Asset</span>
              <p className="text-slate-300">유럽 친환경 자산 운용 펀드 솔루션 협력 논의</p>
            </div>
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-2">
              <span className="font-bold text-amber-400 block">🇦🇪 UAE ADNOC</span>
              <p className="text-slate-300">중동 고온 환경 내 셀 액체 냉각 효율 테스트 검증</p>
            </div>
            <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-2">
              <span className="font-bold text-amber-400 block">🇬🇭 가나 / 케냐 / 토고</span>
              <p className="text-slate-300">아프리카 전력/온수 오프그리드 분산 발전 시스템 공급</p>
            </div>
          </div>
        </div>

        {/* 6. Interactive Slide Preview Section (All 31 Slides Grid) */}
        <div id="deck-preview" className="space-y-6 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">BEST WINNER SOLAR ENERGY DECK</span>
              <h3 className="text-2xl font-extrabold text-white flex items-center space-x-2">
                <span>사업계획서 전체 31 슬라이드 미리보기</span>
                <span className="text-xs font-medium text-slate-400 bg-navy-900 px-2.5 py-1 rounded-full border border-navy-800">
                  클릭 시 대형 뷰어로 확대
                </span>
              </h3>
            </div>

            <div className="flex items-center space-x-3">
              <button
                onClick={() => handleOpenModalAt(0)}
                className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-extrabold text-xs px-4 py-2.5 rounded-xl shadow-md transition-all flex items-center space-x-2"
              >
                <Maximize2 className="w-4 h-4" />
                <span>슬라이드 쇼 뷰어 열기</span>
              </button>
            </div>
          </div>

          {/* Grid of 31 Slide Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {slideImages.map((src, index) => (
              <div
                key={index}
                onClick={() => handleOpenModalAt(index)}
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

        {/* 7. Bottom Consultation & Partnership CTA */}
        <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 rounded-3xl p-8 sm:p-12 text-navy-950 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-navy-950 text-amber-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                B2B & B2C PARTNERSHIP INQUIRY
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-navy-950 break-keep">
                BEST Winner 태양광 PVT 시공 & 제휴 문의
              </h3>
              <p className="text-navy-900 text-sm font-semibold max-w-2xl break-keep">
                사우나, 호텔, 공장, 빌라 맞춤형 기술 컨설팅 및 현장 정밀 산출 견적을 무료로 지원해 드립니다.
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
              <span>태양광 에너지 맞춤 상담 신청하기 →</span>
            </button>
          </div>
        </div>

      </div>

      {/* 8. Fullscreen Interactive Deck Viewer Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 animate-fade-in">
          
          {/* Modal Top Bar */}
          <div className="flex items-center justify-between border-b border-slate-800 pb-4 text-white">
            <div className="flex items-center space-x-3">
              <img src="/images/logo/logo.png" alt="BEST Winner" className="h-8 w-auto object-contain" />
              <div>
                <h4 className="text-sm font-bold text-white">BEST Winner Solar Energy Seed Deck</h4>
                <p className="text-[11px] text-slate-400">
                  Slide {currentSlideIndex + 1} of {totalSlides}
                </p>
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
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Modal Main Slide Image Display */}
          <div className="relative flex-grow flex items-center justify-center py-4 my-2 overflow-hidden">
            
            {/* Prev Button */}
            <button
              onClick={prevSlide}
              className="absolute left-2 sm:left-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-navy-950 text-white border border-slate-700 transition-all shadow-2xl"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Current Slide Image */}
            <div className="max-w-5xl max-h-[75vh] flex items-center justify-center shadow-2xl rounded-xl overflow-hidden border border-slate-800 bg-navy-950">
              <img
                src={slideImages[currentSlideIndex]}
                alt={`Slide ${currentSlideIndex + 1}`}
                className="max-w-full max-h-[75vh] object-contain select-none"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="absolute right-2 sm:right-6 z-20 p-3 rounded-full bg-slate-900/80 hover:bg-amber-500 hover:text-navy-950 text-white border border-slate-700 transition-all shadow-2xl"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </div>

          {/* Modal Bottom Thumbnail Selector & Controls */}
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
    </section>
  );
}
