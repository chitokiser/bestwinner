import React, { useState } from 'react';
import { 
  Droplets, 
  Wrench, 
  Check, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  Building2,
  Factory,
  Globe2,
  Newspaper,
  PhoneCall,
  CheckCircle,
  Sun,
  Shield,
  Palette,
  FileCheck,
  Eye,
  Maximize2,
  X,
  FileSpreadsheet,
  Download,
  Flame,
  Zap,
  ChevronRight
} from 'lucide-react';

export default function WaterproofingSection({ t, onOpenConsult }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'docu_pages' | 'certs' | 'specs' | 'references' | 'networks'
  const [selectedDocPage, setSelectedDocPage] = useState(null); // Lightbox for PDF page
  const [activeCertModal, setActiveCertModal] = useState(null); // Lightbox for cert

  // Official K1 Waterproofing Data extracted from PDF "방수액한글버전(수정)_1.pdf"
  const k1Data = {
    companyName: "BEST WINNER WATERPROOF VN",
    productName: "K1 특수 초강력 방수제 (K1 Special Super Waterproofing Coating)",
    slogan: "“물 한 방울도 허용하지 않는 완벽한 차단 • 10년의 안전 보장”",
    subSlogan: "20년간 한국 시장에서 검증된 기술력 × 베트남 유일 직접 생산 체계",
    
    // Core Vision & Mission Cards (Page 4-5)
    coreVisions: [
      {
        title: "지속시간 10년 보장",
        desc: "10년을 보장하는 특수 기술력으로 건물의 공간과 자산을 완벽하게 보호합니다.",
        highlight: "10 Years Guarantee",
        icon: ShieldCheck
      },
      {
        title: "친환경 무독성 원료",
        desc: "지속 가능한 기술로 자연과 공존하며 냄새와 독성이 없는 인체 무해 친환경 원료 사용.",
        highlight: "100% Eco-Friendly",
        icon: Shield
      },
      {
        title: "한국 원료 direct 수입",
        desc: "한국 프리미엄 수입 원료 공급망을 구축하여 원료 수급의 안정성과 최고 품질을 동시에 실현.",
        highlight: "Korean Raw Material",
        icon: Award
      },
      {
        title: "베트남 유일 현지 생산",
        desc: "고온다습 동남아 기후에 맞춰 베트남 현지 공장에서 직접 생산하여 최적 품질과 가격 경쟁력 수립.",
        highlight: "Local Factory Production",
        icon: Factory
      }
    ],

    // 6 Key Features (Page 3, Page 8)
    features: [
      {
        title: "일액형 (Single-Component) 간편 시공",
        desc: "주제와 경화제를 별도 혼합하는 타사 2액형과 달리, 전 성분이 1개 패키지로 구성되어 붓이나 롤러 도장으로 누구나 손쉽게 Self 방수 시공 가능.",
        icon: Wrench,
        badge: "혼합 불필요 1액형"
      },
      {
        title: "300% 고탄성 크랙 커버 (300% Elongation)",
        desc: "독보적인 탄력성(최대 300%)을 갖추어 건물 신축 및 대형 균열, 미세 구멍을 유연하게 커버하여 구조물 수명을 획기적으로 연장.",
        icon: ShieldCheck,
        badge: "300% 고탄성"
      },
      {
        title: "차열 & 열에너지 반사 (Energy Saving)",
        desc: "특수 안료 기술로 여름철 태양열 에너지를 반사하여 실내 온도 상승을 방지하고, 에어컨 냉방 에너지를 크게 절감.",
        icon: Sun,
        badge: "여름철 차열/절전"
      },
      {
        title: "상도 수성 페인트 후속 도장 가능",
        desc: "일반 유성 발수재와 달리 K1 시공 후 수성 페인트로 자유롭게 후속 칠이 가능하여 유연한 외관/인테리어 컬러 마감 구현.",
        icon: Palette,
        badge: "후속 페인팅 가능"
      },
      {
        title: "친환경 무독성 & 무취 (Non-Toxic & No Odor)",
        desc: "인체에 해롭지 않은 친환경 원료를 사용하여 작업 시 냄새가 없고 독성이 없어 주거/상업 실내외 공간에 모두 안심 시공.",
        icon: Shield,
        badge: "친환경 무독성"
      },
      {
        title: "구도막 & 내부 구조 고강도 접착력",
        desc: "기존 도막 및 콘크리트 바탕면에 대한 우수한 고강도 접착력을 발휘하며, 건물 내부 구조의 내구성을 크게 향상.",
        icon: Building2,
        badge: "고강도 접착력"
      }
    ],

    // PDF Document 16 Pages List
    pdfPages: [
      { page: 1, title: "표지 (Cover & Business Category)", desc: "BEST WINNER VN 방수액 생산 및 유통 개요", img: "/images/waterproofing/docu/page_1.png" },
      { page: 2, title: "목차 & K1 비전 (Contents)", desc: "K1 특수초강력방수제 전체 구성 가이드", img: "/images/waterproofing/docu/page_2.png" },
      { page: 3, title: "제품 소개 & 경쟁력 (Product Intro)", desc: "1액형 경화제 통합 및 300% 고탄성 크랙 커버", img: "/images/waterproofing/docu/page_3.png" },
      { page: 4, title: "비전과 사명 ① (Vision & Mission 1)", desc: "지속시간 10년 보장 & 한국 원료 수입", img: "/images/waterproofing/docu/page_4.png" },
      { page: 5, title: "비전과 사명 ② (Vision & Mission 2)", desc: "베트남 유일 직접 생산 & 20년 검증 기술력", img: "/images/waterproofing/docu/page_5.png" },
      { page: 6, title: "방수제품 인증서 (Certificates)", desc: "국내외 공인기관 품질 및 안전 인증서 수록", img: "/images/waterproofing/docu/page_6.png" },
      { page: 7, title: "제품 규격과 용량 (Volume Lineup)", desc: "18L, 10L, 5L, 1L 규격별 도포 안내", img: "/images/waterproofing/docu/page_7.png" },
      { page: 8, title: "용도와 특성 (Features & Usability)", desc: "일액형 작업성, 후속 수성페인트 도장 및 친환경", img: "/images/waterproofing/docu/page_8.png" },
      { page: 9, title: "시공 지침서 ① (Manual Step 1-2)", desc: "Step 01. 표면 점검 / Step 02. 표면 준비 작업", img: "/images/waterproofing/docu/page_9.png" },
      { page: 10, title: "시공 지침서 ② (Manual Step 3-4)", desc: "Step 03. 프라이머 하도 / Step 04. K1 방수제 2~3회 도포", img: "/images/waterproofing/docu/page_10.png" },
      { page: 11, title: "한국 시공 사례 ① (KR Cases 1)", desc: "LG디스플레이(파주), 영광원자력발전소, OCI, 군장에너지", img: "/images/waterproofing/docu/page_11.png" },
      { page: 12, title: "한국 시공 사례 ② (KR Cases 2)", desc: "다산한강르네상스, 청주기술경찰청, 신창부영2차", img: "/images/waterproofing/docu/page_12.png" },
      { page: 13, title: "베트남 시공 사례 (VN Cases)", desc: "Dream Tech 2공장, CAP Global, 백제갈비, VINCOM City", img: "/images/waterproofing/docu/page_13.png" },
      { page: 14, title: "언론 보도 자료 (Media Press)", desc: "프라임경제, 창업일보, 팍스경제TV, 브레이크뉴스", img: "/images/waterproofing/docu/page_14.png" },
      { page: 15, title: "해외/전국 총판 네트워크 (Global Network)", desc: "하노이 본사/공장, 호치민, 응에안, 캄보디아, 인도네시아", img: "/images/waterproofing/docu/page_15.png" },
      { page: 16, title: "연락처 & 하노이 센터 (Contact Info)", desc: "BEST WINNER VN 공식 본사 및 고객케어 문의", img: "/images/waterproofing/docu/page_16.png" }
    ],

    // Product Packaging Volumes (Page 7)
    volumes: [
      { id: '18L', name: '18 Liters (대용량 현장용)', recommended: '대형 옥상, 공장 지붕, 단지 옥외 전면 방수 시공', coverage: '약 35~40 m² (2회 도포 기준)', tag: 'RECOMMENDED FOR CONTRACTORS' },
      { id: '10L', name: '10 Liters (중용량 건축용)', recommended: '타운하우스, 빌라 옥상, 테라스 방수 시공', coverage: '약 20~22 m² (2회 도포 기준)', tag: 'COMMERCIAL & VILLA' },
      { id: '5L', name: '5 Liters (소용량 리모델링)', recommended: '발코니, 욕실, 주방, 베란다 방수 보수 시공', coverage: '약 10 m² (2회 도포 기준)', tag: 'RESIDENTIAL REPAIR' },
      { id: '1L', name: '1 Liter (소형/DIY 튜닝)', recommended: '부분 누수, 포인트 균열 메움 및 Self DIY 보수', coverage: '약 2 m² (2회 도포 기준)', tag: 'DIY TOUCH-UP' }
    ],

    // 4-Step Construction Manual (Page 9-10)
    manual: [
      { 
        step: "01", 
        title: "표면 점검 (Surface Inspection)", 
        desc: "시공 표면의 균열이나 구멍이 있는지 정밀 점검하고, 발견된 크랙 및 결함 부분은 실리콘이나 방수 실란트로 사전에 꼼꼼히 보수합니다.",
        img: "/images/waterproofing/docu/page_9.png"
      },
      { 
        step: "02", 
        title: "표면 준비 작업 (Surface Preparation)", 
        desc: "작업 부위의 먼지, 이물질, 기름, 레이턴스 등을 깨끗이 청소합니다. 고압 세척기나 스펀지를 사용하면 표면 청소 효과가 매우 탁월합니다.",
        img: "/images/waterproofing/docu/page_9.png"
      },
      { 
        step: "03", 
        title: "기초 도료(프라이머) 칠하기 (Primer Coat)", 
        desc: "청소된 표면에 기초 프라이머 도료를 롤러 또는 브러쉬로 고르게 바릅니다. 이 단계는 K1 방수제의 구도막 접착력을 극대화하는 핵심 공정입니다.",
        img: "/images/waterproofing/docu/page_10.png"
      },
      { 
        step: "04", 
        title: "K1 방수제 칠하기 (K1 Coating Application)", 
        desc: "기초 도료가 건조된 후, K1 방수제를 적절한 두께로 도포합니다. 보통 2~3회에 걸쳐 바르는 것이 좋으며, 각 층은 이전 층이 완전히 마른 후 진행합니다.",
        img: "/images/waterproofing/docu/page_10.png"
      }
    ],

    // Certified Construction References (Page 11-13)
    vietnamCases: [
      { title: "Dream Tech 2공장", desc: "베트남 현지 첨단 드림텍 제2공장 지붕 및 외벽 방수 시공", loc: "베트남 박닌 (Bac Ninh)" },
      { title: "CAP Global 공장", desc: "글로벌 제조 기업 공장 및 부속 시설 고탄성 방수", loc: "베트남 호아빈 (Hoa Binh)" },
      { title: "VINCOM Smart City", desc: "하노이 대형 신도시 메가 주거 단지 옥상 및 특수 방수", loc: "베트남 하노이 (Hanoi)" },
      { title: "(주)백제갈비 매장", desc: "하노이 대표 프리미엄 한국형 다이닝 습기 차단 방수", loc: "베트남 하노이 (Hanoi)" },
      { title: "이온몰 (Aeon Mall)", desc: "대형 쇼핑몰 승강기 PIT & 지하 시설 제품 승인 및 시공", loc: "제품 승인 완료" },
      { title: "사파 리조트 호텔", desc: "고산지대 프리미엄 호텔 옥상 및 발코니 특수 방수", loc: "제품 승인 완료" }
    ],

    koreaCases: [
      "LG디스플레이 (파주 공장)", "영광 원자력 발전소", "OCI 화학 공장", 
      "군장 에너터지 발전소", "새만금 그룹 산업단지", "해원 워터파크", 
      "다산 한강 르네상스", "익산 새터롤 공원", "청주 기술 경찰청", "신창 부영 2차 아파트"
    ],

    // Media & Press (Page 14)
    mediaPress: [
      { name: "프라임경제", category: "해외경제분야 보도" },
      { name: "창업일보", category: "기술혁신 방수제 보도" },
      { name: "팍스경제TV", category: "글로벌 비즈니스 보도" },
      { name: "브레이크뉴스", category: "친환경 신기술 보도" },
      { name: "아시아한상", category: "베트남 진출 우수기업 보도" },
      { name: "베트남 북부연합인증", category: "QCVN/TCVN 기술 인증" }
    ],

    // Global & Local Networks (Page 15)
    networks: [
      { region: "하노이 본사 (Hanoi HQ)", name: "BEST WINNER VN LIMITED", addr: "44 Đại Mỗ, Phường Đại Mỗ, Quận Nam Từ Liêm, Hà Nội" },
      { region: "하노이 직영 공장 (Factory)", name: "PG COMMERCE HANOI", addr: "Hà Nội, Việt Nam (3,000m² 생산 공장)" },
      { region: "베트남 남부 총판 (Ho Chi Minh)", name: "ETTE REACT", addr: "TP. Hồ Chí Minh, Việt Nam" },
      { region: "베트남 중부 총판 (Nghe An)", name: "KBINVIET", addr: "Nghệ An, Việt Nam" },
      { region: "해외 총판 캄보디아 (Cambodia)", name: "SHINYOUNG INDUSTRIAL CO., LTD", addr: "Phnom Penh, Cambodia" },
      { region: "해외 총판 인도네시아 (Indonesia)", name: "SHINYOUNG INDUSTRIAL CO., LTD", addr: "Jakarta, Indonesia" }
    ]
  };

  return (
    <section id="waterproofing" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                <Droplets className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ⑤ — K1 SUPER WATERPROOFING</span>
              </span>
              <span className="text-xs font-mono text-gold-400 font-bold bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30">
                20 YEARS KOREAN MARKET PROVEN
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {k1Data.companyName}
            </h2>
            <p className="text-base sm:text-lg text-cyan-300 font-bold italic">
              {k1Data.slogan}
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {k1Data.productName} — 20년간 한국 시장에서 검증된 기술력을 바탕으로, 한국 직수입 원료와 베트남 현지 공장 직영 생산을 결합하여 고온 다습한 동남아 기후에 최적화된 10년 품질 보증 초강력 방수 솔루션입니다.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <a
              href="/docu/Waterproofing/방수액한글버전(수정)_1.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold px-5 py-3.5 rounded-xl border border-gold-500/40 text-xs flex items-center space-x-2 transition-all"
            >
              <Download className="w-4 h-4 text-gold-400" />
              <span>방수액 PDF 카탈로그 열기</span>
            </a>
            <button
              onClick={() => onOpenConsult('waterproofing')}
              className="bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 hover:from-cyan-300 hover:to-blue-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-cyan-glow text-xs flex items-center space-x-2 transition-transform hover:scale-[1.02]"
            >
              <Droplets className="w-4 h-4 fill-navy-950" />
              <span>무료 현장 누수 진단 & 견적 신청 →</span>
            </button>
          </div>
        </div>

        {/* 4 Core Vision Highlight Banner (PDF Page 4-5) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {k1Data.coreVisions.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div key={idx} className="glass-card-chrome p-6 rounded-2xl border border-cyan-500/30 space-y-3 relative overflow-hidden group">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-gold-400 bg-navy-950/80 px-2.5 py-0.5 rounded border border-gold-500/30">
                    {v.highlight}
                  </span>
                </div>
                <h4 className="text-base font-black text-white">{v.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{v.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Product Visual Showcase & PDF Highlight Banner */}
        <div className="glass-card-gold p-6 sm:p-10 rounded-3xl border border-gold-500/40 mb-14 shadow-2xl overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-gold-500/40">
                <Sparkles className="w-3.5 h-3.5" />
                <span>K1 SPECIAL ULTRA-POWERFUL SEALANT — BEST WINNER WATERPROOF</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                K1 특수 초강력 방수제 실물 라인업
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                단 한 방울의 누수도 허용하지 않는 독보적 수밀성! 옥상, 테라스, 승강기 PIT, 외벽, 발코니까지 일액형 고탄성 코팅으로 건물의 가치를 완벽하게 보호합니다.
              </p>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 pt-2 text-xs font-semibold">
                <div className="bg-navy-950/90 text-gold-300 p-2.5 rounded-xl border border-gold-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-gold-400" />
                  <span>지속시간 10년 보장</span>
                </div>
                <div className="bg-navy-950/90 text-cyan-300 p-2.5 rounded-xl border border-cyan-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-cyan-400" />
                  <span>300% 고탄성 크랙 커버</span>
                </div>
                <div className="bg-navy-950/90 text-emeraldGreen-400 p-2.5 rounded-xl border border-emeraldGreen-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-emeraldGreen-400" />
                  <span>일액형 (믹싱 불필요)</span>
                </div>
                <div className="bg-navy-950/90 text-amber-300 p-2.5 rounded-xl border border-amber-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-amber-400" />
                  <span>여름철 차열/절전</span>
                </div>
                <div className="bg-navy-950/90 text-purple-300 p-2.5 rounded-xl border border-purple-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-purple-400" />
                  <span>상도 수성페인트 도장</span>
                </div>
                <div className="bg-navy-950/90 text-blue-300 p-2.5 rounded-xl border border-blue-500/30 flex items-center">
                  <Check className="w-3.5 h-3.5 mr-1.5 text-blue-400" />
                  <span>친환경 무독성/무취</span>
                </div>
              </div>
            </div>

            {/* Product Bucket Image Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group max-w-sm w-full">
                <div className="absolute inset-0 bg-cyan-500/30 rounded-2xl filter blur-2xl group-hover:bg-gold-500/40 transition-all"></div>
                <img 
                  src="/images/waterproofing/k1_overview_product.png" 
                  alt="K1 특수 초강력 방수제 실물"
                  className="relative z-10 w-full h-auto object-contain max-h-72 rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex space-x-2 border-b border-navy-800 pb-3 mb-10 overflow-x-auto scrollbar-none">
          {[
            { id: 'overview', name: 'K1 특성 & 6대 핵심 경쟁력', icon: Sparkles },
            { id: 'docu_pages', name: '📄 방수액 카탈로그 16개 브로슈어 (PDF 뷰어)', icon: FileSpreadsheet },
            { id: 'specs', name: '용량 라인업 (18L/10L/5L/1L) & 4단계 매뉴얼', icon: Package },
            { id: 'references', name: '한국/베트남 대형 시공 실적', icon: Globe2 },
            { id: 'networks', name: '언론보도 & 글로벌 총판 네트워크', icon: Newspaper },
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all border ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-navy-950 border-cyan-400 shadow-md scale-105'
                    : 'bg-navy-900 text-slate-300 border-navy-800 hover:border-cyan-500/40'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* SUB-TAB 1: Overview & 6 Core Features (PDF Page 3 & 8) */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <div className="text-center max-w-2xl mx-auto space-y-2 mb-8">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-cyan-500/30">
                CORE COMPETITIVENESS
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                K1 방수제 6대 핵심 기술 & 타사 대비 우위성
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                타사 2액형 혼합형과의 비교를 거부하는 일액형 탄성 코팅 기술
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {k1Data.features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-navy-700 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="w-12 h-12 rounded-xl bg-navy-900 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <span className="text-[10px] font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-full border border-gold-500/30">
                          {feat.badge}
                        </span>
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-navy-800 flex items-center justify-between text-[11px] text-cyan-400 font-semibold">
                      <div className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                        <span>K1 Certified Quality</span>
                      </div>
                      <span className="text-slate-400 font-mono">0{idx + 1}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SUB-TAB 2: PDF Document 16 Brochure Pages Lightbox Gallery */}
        {activeTab === 'docu_pages' && (
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-navy-800 pb-4">
              <div>
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                  ORIGINAL CATALOG BROCHURE
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  K1 방수액 한글 브로슈어 16개 전체 페이지 뷰어
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mt-1">
                  카드를 클릭하면 방수액 공식 카탈로그 PDF 16개 원본 페이지를 고해상도로 돋보기 검인하실 수 있습니다.
                </p>
              </div>

              <a
                href="/docu/Waterproofing/방수액한글버전(수정)_1.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 sm:mt-0 bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold text-xs px-4 py-2.5 rounded-xl transition-all shadow-md flex items-center space-x-1.5 whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>PDF 파일 다운로드</span>
              </a>
            </div>

            {/* 16 Pages Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {k1Data.pdfPages.map((pdfItem) => (
                <div
                  key={pdfItem.page}
                  onClick={() => setSelectedDocPage(pdfItem)}
                  className="glass-card rounded-2xl overflow-hidden border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group flex flex-col justify-between shadow-xl"
                >
                  <div className="relative aspect-[3/4] bg-navy-950 overflow-hidden">
                    <img 
                      src={pdfItem.img} 
                      alt={pdfItem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center space-y-2 text-white">
                      <Maximize2 className="w-6 h-6 text-gold-400" />
                      <span className="text-xs font-bold bg-navy-900/90 text-gold-300 px-3 py-1 rounded-full border border-gold-500/30">
                        페이지 확대 검인
                      </span>
                    </div>

                    <span className="absolute top-3 left-3 bg-gold-500 text-navy-950 font-black text-xs px-2.5 py-0.5 rounded shadow">
                      PAGE {pdfItem.page}
                    </span>
                  </div>

                  <div className="p-4 space-y-1.5 bg-navy-900">
                    <h4 className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-1">
                      {pdfItem.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 line-clamp-2 leading-snug">
                      {pdfItem.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Volumes (Page 7) & 4-Step Photo Manual (Page 9-10) */}
        {activeTab === 'specs' && (
          <div className="space-y-14">
            {/* Product Packaging Volumes (Page 7) */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-navy-800 pb-4">
                <div>
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                    VOLUME LINEUP
                  </span>
                  <h3 className="text-2xl font-black text-white mt-1">K1 용량별 포장 제품군 (18L / 10L / 5L / 1L)</h3>
                  <p className="text-xs text-slate-300 mt-1">대형 현장 옥상부터 소형 발코니 DIY까지 최적화된 포장 라인업</p>
                </div>
              </div>

              {/* Bucket Display Banner */}
              <div className="glass-card p-6 sm:p-8 rounded-3xl border border-navy-700 flex flex-col md:flex-row items-center gap-8 shadow-2xl">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src="/images/waterproofing/k1_buckets_all.png" 
                    alt="K1 18L 10L 5L 1L 용량별 통 이미지"
                    className="w-full max-w-md h-auto object-contain rounded-xl drop-shadow-2xl"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h4 className="text-lg font-black text-gold-400 flex items-center">
                    <Package className="w-5 h-5 mr-2" />
                    용량별 표준 도포 면적 가이드
                  </h4>
                  <div className="space-y-3">
                    {k1Data.volumes.map((vol) => (
                      <div key={vol.id} className="p-4 rounded-xl bg-navy-950 border border-navy-800 text-xs space-y-1.5 hover:border-gold-500/30 transition-colors">
                        <div className="flex justify-between items-center font-bold">
                          <span className="text-white text-sm">{vol.name}</span>
                          <span className="text-cyan-400 font-mono text-xs font-black bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                            {vol.coverage}
                          </span>
                        </div>
                        <p className="text-slate-300 text-xs">{vol.recommended}</p>
                        <span className="text-[10px] text-gold-400 font-mono inline-block">{vol.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Step Photo Manual (Page 9-10) */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-navy-700 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  VISUAL MANUAL (PAGE 9-10)
                </span>
                <h3 className="text-2xl font-black text-white">K1 방수제 4단계 표준 시공 매뉴얼</h3>
                <p className="text-xs text-slate-300">카탈로그 수록 실시간 4단계 방수 코팅 표준 프로세스</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {k1Data.manual.map((m) => (
                  <div key={m.step} className="glass-card rounded-2xl overflow-hidden border border-navy-800 space-y-3 relative group">
                    <div className="aspect-video bg-navy-950 overflow-hidden relative">
                      <img 
                        src={m.img} 
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 font-black text-xs px-2.5 py-0.5 rounded-md shadow">
                        STEP {m.step}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-bold text-white">{m.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: Case Studies & References (Page 11-13) */}
        {activeTab === 'references' && (
          <div className="space-y-12">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                FIELD REFERENCES (PAGE 11-13)
              </span>
              <h3 className="text-2xl font-black text-white">한국 & 베트남 대형 준공 시공 실적 내역</h3>
              <p className="text-xs text-slate-300">영광원자력발전소, LG디스플레이부터 베트남 현지 Dream Tech 공장 및 신도시 프로젝트까지 검증된 방수 실적</p>
            </div>

            {/* Vietnam Major Cases */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-cyan-400 flex items-center">
                <Globe2 className="w-5 h-5 mr-2" />
                베트남 주요 준공 시공 내역 (Vietnam Performance)
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {k1Data.vietnamCases.map((vc, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-700 hover:border-cyan-500/40 transition-all space-y-2">
                    <div className="flex justify-between items-start">
                      <h5 className="text-base font-extrabold text-white">{vc.title}</h5>
                      <span className="text-[10px] font-mono font-bold bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded border border-cyan-500/30">
                        {vc.loc}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{vc.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Korea Major Cases Badges Grid */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-gold-500/30 space-y-4">
              <h4 className="text-lg font-bold text-gold-400 flex items-center">
                <Award className="w-5 h-5 mr-2" />
                한국 시장 20년 검증 시공 실적 내역 (Page 11-12)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                {k1Data.koreaCases.map((kc, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs font-bold text-slate-200 text-center hover:border-gold-500/40 transition-colors">
                    ✓ {kc}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 5: Media Press & Global Networks (Page 14-15) */}
        {activeTab === 'networks' && (
          <div className="space-y-12">
            {/* Media Press (Page 14) */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-gold-400 flex items-center">
                <Newspaper className="w-5 h-5 mr-2" />
                언론 보도 및 공인 기술 인증 (Page 14)
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {k1Data.mediaPress.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl glass-card text-center space-y-1 border border-navy-700">
                    <p className="text-sm font-extrabold text-white">{m.name}</p>
                    <p className="text-[10px] text-cyan-300 font-mono">{m.category}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Global & Local Networks (Page 15) */}
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-cyan-400 flex items-center">
                <Globe2 className="w-5 h-5 mr-2" />
                본사·공장 및 해외/전국 총판 네트워크 (Page 15)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {k1Data.networks.map((net, idx) => (
                  <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-700 space-y-2">
                    <span className="text-[10px] font-bold bg-navy-950 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/30 inline-block">
                      {net.region}
                    </span>
                    <h5 className="text-base font-extrabold text-white">{net.name}</h5>
                    <p className="text-xs text-slate-300 font-mono">📍 {net.addr}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* PDF Document Page Lightbox Modal */}
        {selectedDocPage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedDocPage(null)}
          >
            <div 
              className="relative max-w-4xl w-full bg-navy-900 rounded-3xl border border-gold-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="p-4 sm:p-6 bg-navy-950 border-b border-navy-800 flex items-center justify-between">
                <div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                      PDF Page {selectedDocPage.page} / 16
                    </span>
                    <span className="text-xs text-cyan-300 font-mono">방수액한글버전(수정)_1.pdf</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                    {selectedDocPage.title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    {selectedDocPage.desc}
                  </p>
                </div>

                <button
                  onClick={() => setSelectedDocPage(null)}
                  className="p-2.5 rounded-full bg-navy-900 text-slate-400 hover:text-white hover:bg-navy-800 border border-navy-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image View */}
              <div className="p-4 overflow-y-auto flex-1 flex justify-center items-center bg-black/40">
                <img 
                  src={selectedDocPage.img} 
                  alt={selectedDocPage.title}
                  className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl border border-navy-800"
                />
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 bg-navy-950 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-slate-400">
                  📄 BEST WINNER K1 방수액 공식 카탈로그 원본 캡처 페이지
                </p>
                <div className="flex space-x-3 w-full sm:w-auto">
                  <a
                    href="/docu/Waterproofing/방수액한글버전(수정)_1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs px-4 py-2.5 rounded-xl border border-navy-700 transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>PDF 전체 열기</span>
                  </a>
                  <button
                    onClick={() => {
                      setSelectedDocPage(null);
                      onOpenConsult('waterproofing');
                    }}
                    className="flex-1 sm:flex-none bg-gradient-to-r from-cyan-400 to-blue-600 text-navy-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                  >
                    <span>방수 진단 & 상담 신청 →</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
