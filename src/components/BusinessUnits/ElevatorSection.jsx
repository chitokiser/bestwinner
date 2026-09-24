import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Download, 
  Calculator, 
  CheckCircle2, 
  Wrench,
  Clock,
  Layers,
  Award,
  Building2,
  Factory,
  CheckCircle,
  Sparkles,
  ChevronRight,
  ExternalLink,
  Zap,
  PhoneCall,
  Activity,
  FileSpreadsheet,
  Gauge,
  HelpCircle,
  Settings,
  ShieldAlert
} from 'lucide-react';

export default function ElevatorSection({ t, onOpenCalculator }) {
  const [activeTab, setActiveTab] = useState('home350');
  const [activeSubTab, setActiveSubTab] = useState('overview'); // 'overview' | 'parts' | 'alliance'

  // Elevator Parts Lifecycle Data extracted from official document
  const partsLifecycle = [
    { part: "메인 인버터 (Main Inverter)", cat: "기계실 / 제어반", cycle: "7 년", role: "VVVF 고효율 전력 변환 및 정밀 속도 제어", priceVnd: "3.800.000~" },
    { part: "메인 제어 PCB (Main Control PCB)", cat: "기계실 / 제어반", cycle: "7 년", role: "승강기 전체 운행 로직 및 안전 회로 통제", priceVnd: "1.600.000~" },
    { part: "자동 구출 운전 장치 (ARD)", cat: "기계실 / 제어반", cycle: "7 년", role: "정전 시 최우선 층 자동 이송 및 문열림 비상구출", priceVnd: "1.700.000~" },
    { part: "비상 전원 장치 (UPS) / 통화장치", cat: "기계실 / 제어반", cycle: "5 년", role: "비상 정전 시 24시간 관제 센터 통화 및 비상 조명", priceVnd: "950.000~" },
    { part: "구동기 (Traction Machine)", cat: "구동부 / 권상기", cycle: "15 년", role: "기어리스 영구자석 동기모터 (PM Motor) 핵심 권상", priceVnd: "11.500.000~" },
    { part: "전자기계 브레이크 (Brake System)", cat: "구동부 / 권상기", cycle: "7 년", role: "이중 브레이크 구조로 비상 제동 및 수평 유지", priceVnd: "1.850.000~" },
    { part: "상승 과속 방지 장치 (Rope Brake)", cat: "안전 시스템", cycle: "10 년", role: "상승 방향 과속 감지 시 로프 직접 클램핑 제동", priceVnd: "2.600.000~" },
    { part: "개문 출발 방지 장치 (UCMP)", cat: "안전 시스템", cycle: "7 년", role: "문이 열린 채 출발하는 위험 감지 즉시 자동 락", priceVnd: "1.500.000~" },
    { part: "추락 방지 세이프티 기어 (Safety Gear)", cat: "안전 시스템", cycle: "15 년", role: "주로프 파손 시 가이드레일 물리적 웨지 브레이크", priceVnd: "1.800.000~" },
    { part: "멀티빔 도어 센서 (Multi-beam Sensor)", cat: "카 및 도어", cycle: "5 년", role: "128채널 적외선 빔으로 승객 손끼임 완벽 방지", priceVnd: "550.000~" },
    { part: "주행 가이드 레일 (Guide Rail)", cat: "승강로 / 피트", cycle: "20 년", role: "정밀 절삭 가이드레일로 수직 이동 유도", priceVnd: "175.000~ /m" },
    { part: "유압/스프링 완충기 (Buffer)", cat: "승강로 / 피트", cycle: "15 년", role: "최하층 오버슈트 시 충격 흡수 유압 완충", priceVnd: "380.000~" }
  ];

  // Comprehensive Elevator Model Data
  const elevatorData = {
    companyName: "BEST WINNER ELEVATOR VN",
    slogan: "Korean Technology × Vietnamese Production × Local Service",
    vision: "“엘리베이터를 파는 회사가 아니라, 주택의 가치를 완성하는 기업”",
    stats: [
      { label: "베트남 현지 사업 경력", value: "7년", desc: "하노이 및 주요 도시 180대+ 준공" },
      { label: "실제 납품·설치 실적", value: "180대+", desc: "타운하우스·빌라·상업시설 레퍼런스" },
      { label: "직영 공장 생산 연계", value: "3,000m²", desc: "하노이 하동 자체 Cabin 제작" },
      { label: "직영 엔지니어링 팀", value: "17명", desc: "한국인 수석 기술진 2인 + 현지 15인" }
    ],
    partners: [
      {
        name: "조은엘리베이터 (JOEUN ELEVATOR)",
        role: "핵심 기술 협력 & 정밀 제어 시스템 공급",
        desc: "한국 승강기 전문 기술력 및 설계 노하우 공유, 베트남 시장 공동 전개",
        website: "https://joeunel.com"
      },
      {
        name: "거창 승강기 산업 클러스터 (Geochang Elevator Valley)",
        role: "한국 승강기 특화단지 기술·부품 협력 네트워크",
        desc: "모든엘리베이터(완성품), 메이저텍(로프브레이크/가이드레일), 금강엔지니어링(내진/권상기), 안승엘리베이터(유지보수)"
      }
    ],
    models: {
      home350: {
        id: "home350",
        name: "BEST HOME 350",
        tag: "플래그십 빌라/타운하우스 전용 (Flagship Home)",
        capacity: "350 kg (4 ~ 5인승)",
        floors: "3 ~ 7 층 (Nhà phố & Villa)",
        speed: "0.4 ~ 1.0 m/s",
        pitDepth: "최소 300 mm ~ (최소 PIT 설계)",
        power: "단상 220V 또는 삼상 380V",
        baseVnd: "350.000.000 VNĐ",
        features: [
          "한국 거창 승강기밸리 정밀 제어반 & 인버터 적용",
          "하노이 3,000m² 직영 공장 연계 Cabin 인테리어 맞춤 제작",
          "최소 PIT 깊이(300mm~) 구조로 바닥 굴착이 어려운 기존 주택 리모델링(Retrofit) 완벽 대응",
          "단상 220V 가정용 전원 지원으로 별도 고압전력 공사 및 전기 증설 불필요",
          "정전 시 최우선 층 자동 이송 및 문열림 비상구출운전(ARD) 기본 탑재",
          "Champagne Gold Mirror, Rose Gold, Hairline Stainless, Panoramic Glass 등 다채로운 인테리어 Option"
        ],
        recommended: "하노이/주요 도시 3~7층 신축 타운하우스, 고급 빌라, 기존 주택 리모델링"
      },
      commercial: {
        id: "commercial",
        name: "BEST Commercial Series",
        tag: "상업 빌딩 / 오피스 / 호텔 (Commercial)",
        capacity: "450 ~ 1,000 kg (6 ~ 13인승)",
        floors: "5 ~ 20 층",
        speed: "1.0 ~ 1.75 m/s",
        pitDepth: "1,200 mm ~",
        power: "삼상 380V / 50Hz",
        baseVnd: "415.000.000 VNĐ~",
        features: [
          "VVVF 변속 제어로 고속 운행 중 최고 수준의 정숙성 및 승차감 제공",
          "24시간 스마트 관제 DB 시스템 연계 실시간 장애 감지 및 선제적 A/S",
          "Energy Regen Inverter 탑재로 감속 시 전력을 재활용하여 전력 소비 최대 35% 절감",
          "Stainless Hairline / Mirror / Etching 고급 캐빈 옵션",
          "화재 비상 운전 및 지진 감지 제어 시스템 연계"
        ],
        recommended: "근생 빌딩, 중소형 오피스, boutique 호텔, 병원 및 학원 시설"
      },
      industrial: {
        id: "industrial",
        name: "BEST Heavy Cargo & Industrial",
        tag: "공장 / 물류센터 / 대형 마트 (Cargo & Industrial)",
        capacity: "1,000 ~ 3,000+ kg",
        floors: "2 ~ 10 층",
        speed: "0.5 ~ 1.0 m/s",
        pitDepth: "1,400 mm ~",
        power: "삼상 380V / 50Hz",
        baseVnd: "630.000.000 VNĐ~",
        features: [
          "지게차(Forklift) 직접 진입을 견디는 고강도 바닥 및 프레임 구조",
          "중하중 충격 방지 강철 도어 및 세이프티 엣지 센서 탑재",
          "베트남 공단 환경(습기/부식/진동)에 특화된 방청 갤버나이즈 내장재",
          "인버터 인칭(Inching) 제어로 정확한 바닥 수평 착상 구현"
        ],
        recommended: "베트남 공단 내 제조 공장, 물류창고, 대형 쇼핑몰 및 화물 전용"
      }
    }
  };

  return (
    <section id="elevator" className="py-16 bg-navy-900/60 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ② — OFFICIAL SPECIFICATION</span>
              </span>
              <span className="text-xs font-mono text-chrome-300">EST. 2017 in VIETNAM</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {elevatorData.companyName}
            </h2>
            <p className="text-sm sm:text-base text-gold-300 font-semibold italic">
              "{elevatorData.slogan}"
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              한국 거창승강기밸리 및 조은엘리베이터의 정밀 승강기 엔지니어링 기술과 베트남 하노이 3,000m² 직영 공장의 Cabin 제작, 그리고 7년간 180대 이상의 시공 레퍼런스를 보유한 베트남 대표 프리미엄 승강기 솔루션입니다.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <button
              onClick={onOpenCalculator}
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-black px-6 py-3 rounded-xl shadow-gold-glow text-xs flex items-center space-x-2 transition-transform hover:scale-[1.02]"
            >
              <Calculator className="w-4 h-4 stroke-[2.5]" />
              <span>VND 자동 견적 시스템 →</span>
            </button>
          </div>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {elevatorData.stats.map((st, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-700 hover:border-gold-500/40 transition-all text-center">
              <span className="text-2xl sm:text-4xl font-extrabold gold-gradient-text block">
                {st.value}
              </span>
              <span className="text-xs font-bold text-white mt-1 block">{st.label}</span>
              <span className="text-[11px] text-slate-400 mt-0.5 block font-normal">{st.desc}</span>
            </div>
          ))}
        </div>

        {/* Navigation Sub-Tabs (Overview / Specs / Parts Lifecycle / Korea Alliance) */}
        <div className="flex space-x-2 border-b border-navy-800 pb-3 mb-10 overflow-x-auto">
          {[
            { id: 'overview', name: '핵심 라인업 & 사양', icon: Layers },
            { id: 'parts', name: '부품 표준 교체주기 & 유지관리 (QCVN)', icon: FileSpreadsheet },
            { id: 'alliance', name: '한국 거창승강기밸리 얼라이언스', icon: Building2 },
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeSubTab === tab.id
                    ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* SUB-TAB 1: Core Lineup & Specs */}
        {activeSubTab === 'overview' && (
          <div className="space-y-10">
            {/* Highlight Banner */}
            <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-3.5 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FLAGSHIP MODEL — BEST HOME 350</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    BEST HOME 350 — 베트남 타운하우스·빌라 전용 프리미엄 홈 승강기
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    하노이 및 주요 도시 3~7층 타운하우스(Nhà phố)와 빌라 환경에 특화된 표준형 승강기입니다. **최소 300mm PIT 깊이 설계**로 바닥 굴착이 어려운 기존 주택 리모델링(Retrofit)에도 완벽히 시공 가능하며, **단상 220V 전원 지원**으로 고압전력 공사 없이 가정용 전력으로 구동됩니다.
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="p-5 rounded-2xl bg-navy-950/90 border border-gold-500/30 space-y-3 w-full max-w-sm text-center">
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">표준 기본 출하가</span>
                    <div className="text-2xl font-black gold-gradient-text">400.000.000 VNĐ</div>
                    <p className="text-[11px] text-slate-300">350kg (4-5인) / 4층 표준 (4개 정차층) / 12개월(1년) 직영 무상 보증</p>
                    <button
                      onClick={onOpenCalculator}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold py-2.5 rounded-xl text-xs shadow-gold-glow"
                    >
                      옵션별 VND 견적 계산하기
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-navy-800">
              <h3 className="text-xl font-extrabold text-white">3대 주요 라인업 사양 비교</h3>
              <div className="flex bg-navy-950 p-1.5 rounded-xl border border-navy-800 space-x-1">
                <button
                  onClick={() => setActiveTab('home350')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'home350'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  BEST HOME 350 (홈)
                </button>
                <button
                  onClick={() => setActiveTab('commercial')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'commercial'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Commercial (상업용)
                </button>
                <button
                  onClick={() => setActiveTab('industrial')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'industrial'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Industrial (화물/공장)
                </button>
              </div>
            </div>

            {/* Selected Model Spec View */}
            {(() => {
              const model = elevatorData.models[activeTab];
              return (
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-chrome-400/30 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Specs Overview */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                          {model.tag}
                        </span>
                        <h4 className="text-3xl font-extrabold text-white mt-3">{model.name}</h4>
                      </div>

                      <div className="space-y-3 bg-navy-950/80 p-5 rounded-2xl border border-navy-800 text-xs">
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">적재 하중 (Capacity):</span>
                          <span className="font-bold text-gold-300">{model.capacity}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">운행 층수 (Floors):</span>
                          <span className="font-bold text-white">{model.floors}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">정격 속도 (Speed):</span>
                          <span className="font-bold text-white">{model.speed}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">PIT 깊이 (PIT Depth):</span>
                          <span className="font-bold text-emeraldGreen-400">{model.pitDepth}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">전원 사양 (Power):</span>
                          <span className="font-bold text-white">{model.power}</span>
                        </div>
                        <div className="flex justify-between py-1.5">
                          <span className="text-slate-400 font-medium">표준 기본가:</span>
                          <span className="font-bold text-gold-400 font-mono">{model.baseVnd}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs">
                        <span className="font-bold text-gold-400 block mb-1">권장 적용 대상:</span>
                        <p className="text-slate-300 leading-relaxed">{model.recommended}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="lg:col-span-7 space-y-6">
                      <h5 className="text-lg font-bold text-white flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-gold-400 mr-2" />
                        <span>핵심 기술 및 구조적 차별화 특징</span>
                      </h5>

                      <div className="space-y-3">
                        {model.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-navy-950/60 border border-navy-800 hover:border-gold-500/30 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                              {idx + 1}
                            </div>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                              {feat}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <button
                          onClick={onOpenCalculator}
                          className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 shadow-gold-glow"
                        >
                          <Calculator className="w-4 h-4 stroke-[2.5]" />
                          <span>{model.name} 견적 산출하기</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* SUB-TAB 2: Parts Lifecycle & Maintenance Table (Extracted Data) */}
        {activeSubTab === 'parts' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                QCVN / TCVN STANDARDS
              </span>
              <h3 className="text-2xl font-black text-white">
                승강기 핵심 부품 표준 교체주기 및 유지관리 가이드
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                승강기는 부품별 교체 주기가 각기 달라 정기 관리가 필수적입니다. BEST WINNER ELEVATOR VN은 한국 및 베트남 안전 표준에 맞춰 부품별 투명한 교체주기와 정품 부품 공급 체계를 보장합니다.
              </p>
            </div>

            {/* Interactive Parts Lifecycle Table */}
            <div className="glass-card rounded-2xl overflow-hidden border border-navy-700 shadow-2xl text-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800 uppercase tracking-wider">
                    <tr>
                      <th className="p-4">승강기 유지관리 부품명 (Component)</th>
                      <th className="p-4">설치 영역 (Category)</th>
                      <th className="p-4 text-center">표준 교체주기 (Lifecycle)</th>
                      <th className="p-4">핵심 기능 및 역할 (Role & Function)</th>
                      <th className="p-4 text-right">부품 단가 기준 (VND)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/80">
                    {partsLifecycle.map((p, idx) => (
                      <tr key={idx} className="hover:bg-navy-800/50 transition-colors">
                        <td className="p-4 font-bold text-white flex items-center space-x-2">
                          <Settings className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                          <span>{p.part}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="bg-navy-900 px-2.5 py-1 rounded-full border border-navy-800 text-[11px]">
                            {p.cat}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-extrabold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                            {p.cycle}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300 max-w-xs leading-relaxed">{p.role}</td>
                        <td className="p-4 text-right font-mono text-chrome-200">{p.priceVnd} VNĐ</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 text-xs text-slate-400 flex items-center space-x-3">
              <ShieldAlert className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <span>
                * 모든 부품은 BEST WINNER ELEVATOR VN 24/7 스마트 DB 모니터링 시스템을 통해 소모품 주기 도달 전 선제적으로 점검 및 교체 안내가 이루어집니다.
              </span>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Korea Alliance & Supply Chain */}
        {activeSubTab === 'alliance' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                KOREA × VIETNAM NETWORK
              </span>
              <h3 className="text-2xl font-black text-white">
                한국 거창 승강기밸리 & 전문 파트너 얼라이언스
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                국내 대표 승강기 특화 단지인 거창승강기밸리와의 기술·제조 협력 네트워크를 통해 한국의 첨단 정밀 기술과 베트남 현지의 실행력을 결합합니다.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elevatorData.partners.map((pt, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-navy-700 space-y-4 hover:border-gold-500/40 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black">
                      0{idx + 1}
                    </div>
                    {pt.website && (
                      <a 
                        href={pt.website} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-gold-400 hover:text-white flex items-center space-x-1 bg-navy-900 px-3 py-1 rounded-full border border-navy-800"
                      >
                        <span>공식 홈페이지</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{pt.name}</h4>
                    <p className="text-xs font-semibold text-gold-400 mt-0.5">{pt.role}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-t border-navy-800 pt-3">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Division of Labor Diagram */}
            <div className="glass-card-gold rounded-3xl p-8 border border-gold-500/40 space-y-6">
              <h4 className="text-lg font-bold text-white text-center">
                한국 기술력 × 베트남 현지 생산 분업 프로세스
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-center">
                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">1. KOREA TECHNOLOGY</div>
                  <h5 className="font-bold text-white text-sm">한국 R&D & 핵심부품</h5>
                  <p className="text-slate-300">권상기(TM), VVVF 제어반, 로프브레이크, 비상정지 세이프티 기어 정밀 수입</p>
                </div>

                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">2. VIETNAM FABRICATION</div>
                  <h5 className="font-bold text-white text-sm">하노이 3,000m² 공장 Cabin</h5>
                  <p className="text-slate-300">현지 주택 맞춤형 Cabin 인테리어 가공, 도어 조립 및 최종 품질 검사</p>
                </div>

                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">3. LOCAL CARE & A/S</div>
                  <h5 className="font-bold text-white text-sm">직영 시공 & 24/7 관제 DB</h5>
                  <p className="text-slate-300">17인 직영 엔지니어 시운전, 호기별 QR DB 등록 및 24시간 긴급 출동 케어</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Core Value Pillars & IT DB Management */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">Elevator + Interior 패키지</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              기계 단품 판매가 아닌 주택 공간(계단, 벽체, 조명, 인테리어)과 완벽히 조화되는 럭셔리 Cabin 맞춤형 설계.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">BEST Smart Elevator DB</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              호기별 고유 관리 DB 구축. 정비·부품 교체 이력 자동 추적, 원격 장애 알림 및 A/S 기사 자동 배정 CRM 연동.
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">24/7 직영 긴급 출동 A/S</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              하노이 및 주요 도시 17인 직영 기술 전담팀 상주. 24시간 365일 비상 대기 및 정기 점검 관리 체계 가동.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
