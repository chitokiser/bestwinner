import React, { useState, useEffect } from 'react';
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
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Zap,
  PhoneCall,
  Activity,
  FileSpreadsheet,
  Gauge,
  HelpCircle,
  Settings,
  ShieldAlert,
  BookOpen,
  FileText,
  Search,
  FolderDown,
  FileCode,
  Check,
  Eye,
  X,
  Maximize2
} from 'lucide-react';

export default function ElevatorSection({ t, onOpenCalculator, defaultSubTab }) {
  const [activeTab, setActiveTab] = useState('home350');
  const [activeSubTab, setActiveSubTab] = useState(defaultSubTab || 'overview'); // 'overview' | 'library' | 'parts' | 'alliance'
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [libraryCategory, setLibraryCategory] = useState('all');
  const [librarySearch, setLibrarySearch] = useState('');
  const [activeCatalogModal, setActiveCatalogModal] = useState(null); // Selected product for Web Catalog Viewer
  const [catalogPage, setCatalogPage] = useState(1); // Web Catalog page (1 to 4)

  const elevatorHeroImages = [
    { 
      src: '/images/elevator/1.png', 
      title: 'BEST WINNER Premium Home Elevator', 
      desc: '한국 거창승강기밸리 기술 × 베트남 하노이 3,000m² 직영 공장',
      tag: 'FLAGSHIP VILLA & RESIDENTIAL'
    },
    { 
      src: '/images/elevator/2.png', 
      title: 'Minimal PIT Retrofit Elevator System', 
      desc: '최소 PIT(300mm~) & 단상 220V 지원으로 기존 주택 리모델링 완벽 대응',
      tag: 'RETROFIT & RESTRUCTURING'
    },
    { 
      src: '/images/elevator/3.png', 
      title: 'Luxury Stainless & Mirror Cabin Finish', 
      desc: 'Champagne Gold, Rose Gold Mirror 커스텀 카 인테리어 마감',
      tag: 'CUSTOM CABIN INTERIOR'
    },
    { 
      src: '/images/elevator/4.png', 
      title: 'Commercial & High-Capacity Freight Series', 
      desc: '근생 빌딩, 오피스, 호텔 및 공장/물류 전용 화물 승강기 라인업',
      tag: 'COMMERCIAL & INDUSTRIAL'
    },
    { 
      src: '/images/elevator/5.png', 
      title: 'Smart Safety & Emergency ARD System', 
      desc: '정전 시 최우선 층 비상 구출(ARD) 및 24시간 스마트 관제 DB',
      tag: 'SMART SAFETY & MONITORING'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % elevatorHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [elevatorHeroImages.length]);

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

  // Official LGRIS (SUZHOU LG ELEVATOR CO., LTD.) Global Technical Library Data
  const lgrisLibraryData = {
    partnerInfo: {
      name: "SUZHOU LG ELEVATOR CO., LTD. (LGRIS ELEVATOR)",
      role: "공식 글로벌 승강기 종합 공급 거래처 (Global Alliance Partner)",
      location: "Jiangsu Province, China (Qidu Town, Wujiang District, Suzhou)",
      certifications: ["CE Mark", "ISO 9001 Quality", "ISO 14001 Environmental", "EN81 Elevator Safety"],
      website: "https://www.lgriselevator.com",
      desc: "SUZHOU LG ELEVATOR(LGRIS)는 승객용, 전망용, 가정용, 화물용 엘리베이터 및 에스컬레이터 전 제품군을 생산·수출하는 국제 승강기 전문 기업으로, BEST WINNER ELEVATOR VN과 긴밀한 파트너십을 맺고 글로벌 스펙 카탈로그 및 완제품/부품 공급 네트워크를 전개합니다."
    },
    products: [
      {
        id: "passenger",
        modelCode: "LGRIS-P1000 / BEST PASSENGER",
        title: "LGRIS Passenger Elevator Series (승객용 엘리베이터)",
        category: "passenger",
        catLabel: "Passenger Elevator",
        speed: "1.0 m/s ~ 4.0 m/s (고속/중속 선택)",
        capacity: "450 kg ~ 1,600 kg (6인승 ~ 21인승)",
        machineType: "MRL (기계실 없는 타입) & Small MR (소형 기계실)",
        img: "/images/elevator/1.png",
        summary: "고효율 VVVF 재생 인버터 및 영구자석 동기권상기(PM Gearless Machine) 탑재 승객용 에코 솔루션",
        features: [
          "VVVF Energy Regen Inverter 탑재로 표준 운행 대비 전력 감축 최대 35%",
          "128채널 적외선 3D 멀티빔 센서 적용으로 손끼임 완전 차단 안전 구동",
          "최첨단 마이크로컴퓨터 스마트 그룹 제어 시스템 (Group Control System)",
          "초저소음 48dB(A) 수평 운행 착상 정밀 기술"
        ],
        downloads: [
          { title: "LGRIS Passenger Elevator Catalog 2026.pdf", size: "4.2 MB", type: "PDF Spec" },
          { title: "Passenger Elevator Standard Hoistway & Pit Layout.dwg", size: "8.5 MB", type: "CAD Plan" }
        ]
      },
      {
        id: "panoramic",
        modelCode: "LGRIS-OBS 360 / BEST PANORAMIC",
        title: "LGRIS Panoramic Glass Elevator Series (전망용 / 누드 엘리베이터)",
        category: "panoramic",
        catLabel: "Panoramic Elevator",
        speed: "1.0 m/s ~ 2.5 m/s",
        capacity: "630 kg ~ 1,350 kg (8인승 ~ 18인승)",
        machineType: "Circular / Semi-Circular / Square 3-Side Glass",
        img: "/images/elevator/3.png",
        summary: "180°~360° 파노라마 투명 이중 강화유리와 럭셔리 무드 조명이 어우러진 최고급 시그니처 전망 엘리베이터",
        features: [
          "이중 구조 안전 접합 강화유리(Laminated Safety Glass)로 100% 시야 확보",
          "건축 외관 브랜딩을 극대화하는 커스텀 RGB/LED 엠비언트 하이라이트",
          "Champagne Gold, Rose Gold Mirror Hairline 고급 스테인리스 프레임",
          "5성급 호텔, 대형 럭셔리 몰, 하이엔드 펜트하우스 시공"
        ],
        downloads: [
          { title: "LGRIS Panoramic Glass Elevator Brochure.pdf", size: "5.1 MB", type: "PDF Spec" },
          { title: "Panoramic Glass Hoistway Civil Engineering Spec.dwg", size: "9.2 MB", type: "CAD Plan" }
        ]
      },
      {
        id: "home",
        modelCode: "LGRIS-VILLA 350 / BEST HOME",
        title: "LGRIS Home & Villa Elevator Series (가정용 / 빌라 엘리베이터)",
        category: "home",
        catLabel: "Home & Villa Elevator",
        speed: "0.4 m/s ~ 1.0 m/s",
        capacity: "250 kg ~ 400 kg (3인승 ~ 5인승)",
        machineType: "Ultra-Low Pit (최소 300mm PIT & Single Phase 220V)",
        img: "/images/elevator/2.png",
        summary: "바닥 굴착이 어려운 기존 주택 리모델링 및 타운하우스에 최적화된 최소 PIT & 가정용 단상 220V 전원 승강기",
        features: [
          "최소 PIT 깊이 300mm / 오버헤드 2800mm 최첨단 컴팩트 설계",
          "별도 고압전력 증설 없이 가정용 단상 220V 전원으로 즉시 운행",
          "정전 시 최우선 층 자동 이송 및 문열림 비상구출운전(ARD) 기본 탑재",
          "무소음 벨트 밸런서 및 기어리스 PM 동기모터 적용"
        ],
        downloads: [
          { title: "LGRIS Villa & Home Elevator Specification.pdf", size: "3.8 MB", type: "PDF Spec" },
          { title: "Villa Home Elevator Retrofit Civil Drawings.dwg", size: "6.7 MB", type: "CAD Plan" }
        ]
      },
      {
        id: "freight",
        modelCode: "LGRIS-CARGO 3000 / BEST INDUSTRIAL",
        title: "LGRIS Heavy Cargo & Industrial Elevator Series (화물 / 공장 승강기)",
        category: "freight",
        catLabel: "Freight Elevator",
        speed: "0.5 m/s ~ 1.0 m/s",
        capacity: "1,000 kg ~ 5,000 kg+ (1톤 ~ 5톤 대형 중화물)",
        machineType: "Heavy Duty Side/Center Opening & Vertical Bi-parting Door",
        img: "/images/elevator/4.png",
        summary: "지게차 직접 진입을 견디는 고강도 바닥 프레임 및 베트남 KCN 공단 특화 방청 갤버나이즈 화물 승강기",
        features: [
          "지게차(Forklift) 진입 충격을 견디는 강철 체커 플레이트 바닥",
          "고습도·진동·부식 환경에 특화된 갈바나이즈드 세이프티 가드",
          "인버터 인칭(Inching) 착상 제어로 화물 입출고 시 0.1mm 수평 유지",
          "LG전자 하이퐁 공장, 드림텍 박닌 공장 대형 산업단지 레퍼런스"
        ],
        downloads: [
          { title: "LGRIS Industrial Heavy Cargo Catalog.pdf", size: "6.0 MB", type: "PDF Spec" },
          { title: "Heavy Cargo Hoistway Structural Loading Drawings.dwg", size: "11.4 MB", type: "CAD Plan" }
        ]
      },
      {
        id: "escalator",
        modelCode: "LGRIS-ESC 35° / LGRIS-WALK 12°",
        title: "LGRIS Commercial Escalator & Moving Sidewalk Series (에스컬레이터 & 무빙워크)",
        category: "escalator",
        catLabel: "Escalator & Moving Sidewalk",
        speed: "0.5 m/s (Smart Variable Speed)",
        capacity: "9,000 ~ 13,500 passengers / hour",
        machineType: "Escalator 30°/35° & Moving Sidewalk 10°/12°",
        img: "/images/elevator/5.png",
        summary: "대형 마트, 공항, 지하철, 복합 쇼핑몰을 위한 VVVF 스마트 정지/출발 자동 에너지 절감 에스컬레이터",
        features: [
          "승객 미탑승 시 대기 모드로 자동 변속되는 스마트 오토 센서",
          "슬림형 고강도 트러스 프레임 & LED 안티클립 핸드레일",
          "스텝 빗판 손끼임 방지 멀티 세이프티 클러치 브레이크",
          "IP55 실내외 옥외형 방수/방진 스텝 조립체"
        ],
        downloads: [
          { title: "LGRIS Escalator & Moving Sidewalk Technical Specs.pdf", size: "7.5 MB", type: "PDF Spec" },
          { title: "Commercial Escalator Installation Structural Layout.dwg", size: "10.1 MB", type: "CAD Plan" }
        ]
      }
    ],
    documents: [
      { id: 1, title: "BEST WINNER × LGRIS 2026 Global Elevator Catalog", size: "12.8 MB", type: "PDF Spec", version: "v2026.1", tag: "공식 종합 카탈로그" },
      { id: 2, title: "QCVN 32:2018/BLDTBXH National Technical Regulation on Elevator Safety", size: "2.4 MB", type: "PDF Standard", version: "QCVN 32", tag: "베트남 안전 규격" },
      { id: 3, title: "Standard Villa Hoistway & Pit Civil CAD Drawings Pack", size: "15.3 MB", type: "CAD (.DWG)", version: "CAD v3.0", tag: "건축 도면 팩" },
      { id: 4, title: "LGRIS ARD Automatic Emergency Rescue Device Manual & Wiring", size: "3.1 MB", type: "PDF Manual", version: "v1.4", tag: "비상구출 매뉴얼" },
      { id: 5, title: "Elevator Component Maintenance Lifecycle Matrix (Standard Replacement)", size: "1.8 MB", type: "PDF Matrix", version: "v2.0", tag: "유지보수 매뉴얼" }
    ]
  };

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
        name: "좋은엘리베이터 (JOEUN ELEVATOR)",
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
        
        {/* Dynamic Elevator Hero Image Slider Showcase (1.png ~ 5.png) */}
        <div className="relative min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden mb-14 border border-gold-500/40 shadow-2xl flex items-center bg-navy-900">
          {/* Rotating Background Images */}
          {elevatorHeroImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentHeroSlide === idx ? 'opacity-85 sm:opacity-75 scale-105' : 'opacity-0 scale-100'
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>

          {/* Hero Banner Text Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gold-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{elevatorHeroImages[currentHeroSlide].tag} — BEST WINNER ELEVATOR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
              {elevatorHeroImages[currentHeroSlide].title}
            </h1>

            <p className="text-sm sm:text-xl font-bold text-gold-300 leading-snug break-keep">
              {elevatorHeroImages[currentHeroSlide].desc}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal break-keep">
              한국 거창승강기밸리 및 좋은엘리베이터 기술 협력, 하노이 3,000m² 직영 공장의 Cabin 제작, 그리고 7년간 180대 이상의 시공 레퍼런스를 자랑합니다.
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenCalculator}
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 stroke-[2.5]" />
                <span>4층·350kg 기준 4억VND 실시간 견적 시스템 →</span>
              </button>
            </div>
          </div>

          {/* Slide Controls & Indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
            <div className="flex space-x-1.5">
              {elevatorHeroImages.map((_, idx) => (
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
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + elevatorHeroImages.length) % elevatorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title="이전 슬라이드"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % elevatorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title="다음 슬라이드"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

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
              한국 거창승강기밸리 및 좋은엘리베이터의 정밀 승강기 엔지니어링 기술과 베트남 하노이 3,000m² 직영 공장의 Cabin 제작, 그리고 7년간 180대 이상의 시공 레퍼런스를 보유한 베트남 대표 프리미엄 승강기 솔루션입니다.
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

        {/* Navigation Sub-Tabs (Overview / Library / Parts Lifecycle / Korea Alliance) */}
        <div className="flex space-x-2 border-b border-navy-800 pb-3 mb-10 overflow-x-auto">
          {[
            { id: 'overview', name: '핵심 라인업 & 사양', icon: Layers },
            { id: 'library', name: '📚 LGRIS 엘리베이터 기술 라이브러리 & 카탈로그', icon: BookOpen },
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

        {/* SUB-TAB 2: LGRIS Global Elevator Technical Library & Product Catalog */}
        {activeSubTab === 'library' && (
          <div className="space-y-10">
            {/* LGRIS Global Partner Header Banner */}
            <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 space-y-6">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>LGRIS (SUZHOU LG ELEVATOR) × BEST WINNER VN</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {lgrisLibraryData.partnerInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-300 font-semibold">
                    {lgrisLibraryData.partnerInfo.role} | {lgrisLibraryData.partnerInfo.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {lgrisLibraryData.partnerInfo.desc}
                  </p>
                </div>

                <div className="flex flex-col space-y-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      setActiveCatalogModal(lgrisLibraryData.products[0]);
                      setCatalogPage(1);
                    }}
                    className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-black px-6 py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-gold-glow transition-transform hover:scale-[1.02]"
                  >
                    <BookOpen className="w-4 h-4 stroke-[2.5]" />
                    <span>📖 2026 대형 웹 카탈로그 뷰어 열기</span>
                  </button>
                  <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                    {lgrisLibraryData.partnerInfo.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-navy-950 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-navy-800 font-mono">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Interactive Web Catalog Showcase Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-navy-700 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-wider block">INTERACTIVE WEB CATALOG VIEWER</span>
                <h4 className="text-2xl font-black text-white">
                  LGRIS 종합 승강기 3D & 건축 스펙 웹 카탈로그 (Flipbook)
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  별도의 PDF 뷰어 프로그램 없이 브라우저에서 승객용, 전망용, 가정용, 화물용 승강기의 **카빈 인테리어, 승강로/피트 건축 도면, 정전 구출(ARD) 회로도**를 고화질 인터랙티브 카탈로그로 바로 감상하실 수 있습니다.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  {lgrisLibraryData.products.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveCatalogModal(p);
                        setCatalogPage(1);
                      }}
                      className="bg-navy-800 hover:bg-navy-700 text-gold-300 hover:text-gold-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-navy-700 flex items-center space-x-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>{p.catLabel} 뷰어</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex-shrink-0 w-full md:w-72 h-44 rounded-2xl overflow-hidden border border-gold-500/30 group cursor-pointer"
                onClick={() => {
                  setActiveCatalogModal(lgrisLibraryData.products[0]);
                  setCatalogPage(1);
                }}
              >
                <img 
                  src="/images/elevator/1.png" 
                  alt="Web Catalog Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center space-y-2 text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-black shadow-gold-glow">
                    <BookOpen className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-extrabold text-white">클릭 시 웹 카탈로그 펼치기</span>
                  <span className="text-[10px] text-gold-300 font-mono">4-Page Interactive Spec Sheet</span>
                </div>
              </div>
            </div>

            {/* Category Filter & Keyword Search Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-navy-800">
              {/* Category Filter Tabs */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0">
                {[
                  { id: 'all', label: '전체 보기 (All)' },
                  { id: 'passenger', label: '승객용 (Passenger)' },
                  { id: 'panoramic', label: '전망용 (Panoramic Glass)' },
                  { id: 'home', label: '가정용/빌라 (Home Villa)' },
                  { id: 'freight', label: '화물/공장 (Freight Cargo)' },
                  { id: 'escalator', label: '에스컬레이터 (Escalator)' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setLibraryCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                      libraryCategory === cat.id
                        ? 'bg-gold-500 text-navy-950 shadow-md'
                        : 'bg-navy-900 text-slate-400 hover:text-white border border-navy-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Keyword Search Input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="모델명, 스펙, 라인업 검색..."
                  value={librarySearch}
                  onChange={(e) => setLibrarySearch(e.target.value)}
                  className="w-full bg-navy-900 border border-navy-700 text-white text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            {/* Product Catalog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {lgrisLibraryData.products
                .filter((p) => {
                  const matchesCat = libraryCategory === 'all' || p.category === libraryCategory;
                  const matchesQuery = librarySearch === '' ||
                    p.title.toLowerCase().includes(librarySearch.toLowerCase()) ||
                    p.modelCode.toLowerCase().includes(librarySearch.toLowerCase()) ||
                    p.summary.toLowerCase().includes(librarySearch.toLowerCase());
                  return matchesCat && matchesQuery;
                })
                .map((product) => (
                  <div key={product.id} className="glass-card rounded-3xl p-6 border border-navy-700 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Product Header & Image */}
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-navy-800 bg-navy-900 group cursor-pointer"
                        onClick={() => {
                          setActiveCatalogModal(product);
                          setCatalogPage(1);
                        }}
                      >
                        <img 
                          src={product.img} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
                        <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-gold-400 border border-gold-500/30">
                          {product.modelCode}
                        </div>

                        {/* Quick View Hover Badge */}
                        <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-gold-500 text-navy-950 font-black px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 shadow-gold-glow">
                            <Eye className="w-4 h-4 stroke-[2.5]" />
                            <span>웹 카탈로그 크게 보기</span>
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="text-[10px] font-bold text-gold-300 uppercase tracking-widest block">{product.catLabel}</span>
                          <h4 className="text-lg font-black leading-snug">{product.title}</h4>
                        </div>
                      </div>

                      {/* Specs Badges Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">운행 속도</span>
                          <span className="font-bold text-gold-400">{product.speed}</span>
                        </div>
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">적재 용량</span>
                          <span className="font-bold text-gold-400">{product.capacity}</span>
                        </div>
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">구동 구조</span>
                          <span className="font-bold text-gold-400">{product.machineType}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {product.summary}
                      </p>

                      {/* Feature Bullet List */}
                      <div className="space-y-1.5 border-t border-navy-800 pt-3">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Web Catalog & Download Action Buttons */}
                    <div className="pt-4 border-t border-navy-800 space-y-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setActiveCatalogModal(product);
                            setCatalogPage(1);
                          }}
                          className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-extrabold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-gold-glow transition-all"
                        >
                          <BookOpen className="w-4 h-4 stroke-[2.5]" />
                          <span>📖 웹 카탈로그 뷰어 열기</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveCatalogModal(product);
                            setCatalogPage(3);
                          }}
                          className="bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-700 px-3 py-2.5 rounded-xl text-xs flex items-center space-x-1 transition-colors"
                          title="승강로 CAD 도면 바로보기"
                        >
                          <FileCode className="w-4 h-4 text-gold-400" />
                          <span>CAD 도면</span>
                        </button>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {product.downloads.map((dl, idx) => (
                          <button
                            key={idx}
                            type="button"
                            className="bg-navy-950 hover:bg-navy-900 border border-navy-700 hover:border-gold-500/40 text-slate-200 hover:text-gold-400 p-2.5 rounded-xl text-xs flex items-center justify-between transition-all"
                            onClick={() => {
                              alert(`[${dl.title}] (용량: ${dl.size}) PDF 스펙 파일 다운로드가 완료되었습니다.`);
                            }}
                          >
                            <div className="flex items-center space-x-2 truncate">
                              <FileText className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                              <span className="truncate text-[11px]">{dl.title}</span>
                            </div>
                            <span className="text-[10px] font-mono text-slate-400 bg-navy-900 px-1.5 py-0.5 rounded border border-navy-800 ml-1 flex-shrink-0">
                              {dl.type}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Official Technical Document Downloads Hub Table */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-navy-700 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <FolderDown className="w-5 h-5 text-gold-400" />
                    <span>LGRIS 공식 통합 기술 자료실 (Download Center)</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    베트남 승강기 국가 안전 규정(QCVN 32), 건축 승강로 표준 CAD 도면, 비상 구출 회로도 및 종합 카탈로그
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-navy-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800">
                    <tr>
                      <th className="p-4">자료명 (Document Title)</th>
                      <th className="p-4">구분 (Category)</th>
                      <th className="p-4 text-center">버전 (Version)</th>
                      <th className="p-4 text-center">파일 용량</th>
                      <th className="p-4 text-right">웹 뷰어 / 다운로드</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/80 bg-navy-900/50">
                    {lgrisLibraryData.documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-navy-800/50 transition-colors">
                        <td className="p-4 font-bold text-white flex items-center space-x-2">
                          <FileCode className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>{doc.title}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="bg-gold-500/10 text-gold-400 px-2.5 py-1 rounded-full text-[11px] border border-gold-500/30 font-semibold">
                            {doc.tag}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono text-slate-400">{doc.version}</td>
                        <td className="p-4 text-center font-mono text-chrome-300">{doc.size}</td>
                        <td className="p-4 text-right flex items-center justify-end space-x-2">
                          <button
                            onClick={() => {
                              setActiveCatalogModal(lgrisLibraryData.products[0]);
                              setCatalogPage(doc.id % 4 + 1);
                            }}
                            className="bg-navy-800 hover:bg-navy-700 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-navy-700 flex items-center space-x-1"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>웹 뷰어</span>
                          </button>
                          <button
                            onClick={() => {
                              alert(`[${doc.title}] 다운로드가 정상 완료되었습니다.`);
                            }}
                            className="bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-gold-glow"
                          >
                            다운로드 ↓
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Parts Lifecycle & Maintenance Table (Extracted Data) */}
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

      {/* Interactive Web Catalog Viewer Modal Lightbox */}
      {activeCatalogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-5xl bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden my-6">
            
            {/* Modal Top Header */}
            <div className="bg-navy-950 px-6 py-4 border-b border-navy-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block">
                    {activeCatalogModal.modelCode} — OFFICIAL WEB CATALOG VIEWER
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {activeCatalogModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveCatalogModal(null)}
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-white border border-navy-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Page Navigation Tabs */}
            <div className="bg-navy-900/90 px-6 py-2 border-b border-navy-800 flex items-center space-x-2 overflow-x-auto text-xs">
              {[
                { page: 1, title: '1. 표지 & 라인업 사양' },
                { page: 2, title: '2. 카빈 인테리어 & 조명' },
                { page: 3, title: '3. 승강로/피트 건축도면' },
                { page: 4, title: '4. ARD & 안전시스템' }
              ].map((p) => (
                <button
                  key={p.page}
                  onClick={() => setCatalogPage(p.page)}
                  className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    catalogPage === p.page
                      ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                      : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Modal Body Content depending on catalogPage */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
              {/* PAGE 1: Product Overview & Core Specs */}
              {catalogPage === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-navy-800 bg-navy-950">
                    <img 
                      src={activeCatalogModal.img} 
                      alt={activeCatalogModal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md p-3 rounded-xl border border-gold-500/30">
                      <span className="text-[10px] text-gold-400 font-mono block">SUZHOU LG ELEVATOR (LGRIS) ALLIANCE</span>
                      <span className="text-sm font-bold text-white block">{activeCatalogModal.modelCode}</span>
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-4">
                    <div className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-400 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeCatalogModal.catLabel}</span>
                    </div>

                    <h4 className="text-xl font-black text-white">{activeCatalogModal.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeCatalogModal.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800">
                        <span className="text-[10px] text-slate-400 block">표준 속도</span>
                        <span className="font-bold text-gold-400 text-sm">{activeCatalogModal.speed}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800">
                        <span className="text-[10px] text-slate-400 block">적재 용량</span>
                        <span className="font-bold text-gold-400 text-sm">{activeCatalogModal.capacity}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 col-span-2">
                        <span className="text-[10px] text-slate-400 block">구동 권상기 방식</span>
                        <span className="font-bold text-white text-xs">{activeCatalogModal.machineType}</span>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-navy-800 pt-3">
                      {activeCatalogModal.features.map((f, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 2: Cabin Interior & Custom Finishes */}
              {catalogPage === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 2 — REAL CABIN DESIGN & CUSTOM FINISHES</span>
                    <h4 className="text-xl font-black text-white">실제 카빈 커스텀 인테리어 & 고급 마감 갤러리</h4>
                    <p className="text-xs text-slate-300">베트남 하노이 3,000m² 직영 공장에서 생산되는 실제 카빈 인테리어 마감재 시공 사진입니다.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
                    <div className="glass-card rounded-2xl overflow-hidden border border-navy-800 space-y-3 p-3">
                      <div className="h-44 rounded-xl overflow-hidden relative border border-navy-700">
                        <img src="/images/elevator/3.png" alt="Champagne Gold Mirror" className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded">Option 01</span>
                      </div>
                      <h5 className="font-bold text-white text-sm">Champagne Gold Mirror</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">고급 빌라/타운하우스용 샴페인 골드 거울 반사 마감 및 무드 에칭 패턴</p>
                    </div>

                    <div className="glass-card rounded-2xl overflow-hidden border border-navy-800 space-y-3 p-3">
                      <div className="h-44 rounded-xl overflow-hidden relative border border-navy-700">
                        <img src="/images/elevator/elevator_cabin.jpg" alt="Stainless Hairline & Lighting" className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded">Option 02</span>
                      </div>
                      <h5 className="font-bold text-white text-sm">Stainless Hairline & LED Mood</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">지문 방지 엠보 코팅 헤어라인 스테인리스 & 간접 천장 LED 무드 조명</p>
                    </div>

                    <div className="glass-card rounded-2xl overflow-hidden border border-navy-800 space-y-3 p-3">
                      <div className="h-44 rounded-xl overflow-hidden relative border border-navy-700">
                        <img src="/images/elevator/2.png" alt="Panoramic Glass & Villa Minimal Frame" className="w-full h-full object-cover" />
                        <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded">Option 03</span>
                      </div>
                      <h5 className="font-bold text-white text-sm">Panoramic Glass & Minimal Frame</h5>
                      <p className="text-slate-400 text-[11px] leading-relaxed">270°~360° 투명 이중 접합 강화유리 및 최소 프레임 라운드 인테리어</p>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-navy-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
                    <span className="text-slate-200">💡 3D 카빈 맞춤 조율이 필요하신가요? 베트남 하노이 직영 공장에서 100% 맞춤 가공해 드립니다.</span>
                    <button onClick={onOpenCalculator} className="bg-gold-500 text-navy-950 font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-gold-glow">
                      인테리어 맞춤 상담 신청
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 3: Hoistway & Pit Civil Engineering Specifications */}
              {catalogPage === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 3 — HOISTWAY CIVIL ENGINEERING SPECIFICATIONS</span>
                    <h4 className="text-xl font-black text-white">승강로 (Hoistway) & 피트 (Pit) 건축 표준 도면</h4>
                    <p className="text-xs text-slate-300">건축주 및 설계사를 위한 승강로 규격 및 전원 사양표입니다.</p>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-navy-800 text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800">
                        <tr>
                          <th className="p-3">용량 (Capacity)</th>
                          <th className="p-3">속도 (Speed)</th>
                          <th className="p-3">최소 PIT 깊이</th>
                          <th className="p-3">오버헤드 (OH)</th>
                          <th className="p-3">승강로 규격 (WxD)</th>
                          <th className="p-3">출입문 너비 (Door)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-navy-800/80 bg-navy-950/40">
                        <tr>
                          <td className="p-3 font-bold text-white">250~350 kg (4인)</td>
                          <td className="p-3 text-slate-300">0.4 ~ 1.0 m/s</td>
                          <td className="p-3 text-gold-400 font-bold">300 mm ~ (최소 PIT)</td>
                          <td className="p-3 text-slate-300">2,800 mm ~</td>
                          <td className="p-3 text-mono text-slate-300">1,400 × 1,400 mm</td>
                          <td className="p-3 text-slate-300">700 mm (2-Panel)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">450 kg (6인)</td>
                          <td className="p-3 text-slate-300">1.0 m/s</td>
                          <td className="p-3 text-slate-300">1,200 mm</td>
                          <td className="p-3 text-slate-300">3,800 mm</td>
                          <td className="p-3 text-mono text-slate-300">1,600 × 1,600 mm</td>
                          <td className="p-3 text-slate-300">800 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">630 kg (8인)</td>
                          <td className="p-3 text-slate-300">1.0 ~ 1.75 m/s</td>
                          <td className="p-3 text-slate-300">1,400 mm</td>
                          <td className="p-3 text-slate-300">4,200 mm</td>
                          <td className="p-3 text-mono text-slate-300">1,800 × 1,800 mm</td>
                          <td className="p-3 text-slate-300">800 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">1,000 kg (13인)</td>
                          <td className="p-3 text-slate-300">1.5 ~ 2.5 m/s</td>
                          <td className="p-3 text-slate-300">1,600 mm</td>
                          <td className="p-3 text-slate-300">4,500 mm</td>
                          <td className="p-3 text-mono text-slate-300">2,100 × 2,100 mm</td>
                          <td className="p-3 text-slate-300">900 mm (Center Open)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>📐 CAD (.DWG) 도면 원본 파일이 필요하신 경우 기술팀으로 일괄 요청이 가능합니다.</span>
                    <button
                      onClick={() => alert(`[${activeCatalogModal.modelCode}] CAD 원본 DWG 도면 패키지가 다운로드 폴더로 전송되었습니다.`)}
                      className="bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-400 font-bold px-3.5 py-1.5 rounded-lg border border-navy-700 transition-colors"
                    >
                      CAD (.DWG) 다운로드 ↓
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 4: ARD Emergency & Safety Control Matrix */}
              {catalogPage === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 4 — SAFETY & EMERGENCY RESCUE SYSTEMS</span>
                    <h4 className="text-xl font-black text-white">정전 자동 구출(ARD) 및 이중 브레이크 안전 회로</h4>
                    <p className="text-xs text-slate-300">한국 및 베트남 국가 안전 검사(QCVN 32)를 통과한 4대 핵심 안전 기술입니다.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <Zap className="w-4 h-4" />
                        <span>자동 구출 운전 장치 (ARD System)</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        갑작스러운 건물 정전 시 비상 배터리가 즉시 작동하여 엘리베이터를 가장 가까운 층으로 자동 이동시킨 후 문을 열어 승객을 안전하게 구출합니다.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>128채널 멀티빔 도어 세이프티 센서</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        128개의 적외선 감지 빔이 문 전체 높이에 입체 그물망을 형성하여 어린이나 반려동물의 끼임 위험을 사전 차단합니다.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <Wrench className="w-4 h-4" />
                        <span>상승 과속 방지 로프 브레이크 (Rope Brake)</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        상승 방향 기준 운행 속도가 초과될 경우 메인 주로프를 직접 기계적으로 클램핑하여 비상 정지시킵니다.
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <ShieldAlert className="w-4 h-4" />
                        <span>개문 출발 방지 장치 (UCMP)</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        승강기 문이 완전히 닫히지 않은 상태에서 출입문 착상 오차가 발생할 경우 제어반에서 즉시 비상 제동을 가합니다.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer Action Bar */}
            <div className="bg-navy-950 px-6 py-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <button
                  disabled={catalogPage <= 1}
                  onClick={() => setCatalogPage((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-navy-800 text-xs font-bold transition-colors"
                >
                  ◀ 이전 페이지
                </button>
                <span className="text-xs font-mono text-gold-400 font-bold px-2">
                  Page {catalogPage} of 4
                </span>
                <button
                  disabled={catalogPage >= 4}
                  onClick={() => setCatalogPage((prev) => Math.min(4, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-navy-800 text-xs font-bold transition-colors"
                >
                  다음 페이지 ▶
                </button>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    alert(`[${activeCatalogModal.title}] 2026 PDF 카탈로그 스펙 문서 다운로드가 시작되었습니다.`);
                  }}
                  className="flex-1 sm:flex-none bg-navy-800 hover:bg-navy-700 text-gold-400 font-bold px-4 py-2 rounded-xl text-xs border border-navy-700 flex items-center justify-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>PDF 다운로드</span>
                </button>
                <button
                  onClick={() => {
                    setActiveCatalogModal(null);
                    onOpenCalculator();
                  }}
                  className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-5 py-2 rounded-xl text-xs shadow-gold-glow flex items-center justify-center space-x-1"
                >
                  <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>실시간 VND 견적 계산</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
