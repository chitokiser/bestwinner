import React, { useState } from 'react';
import { 
  Car, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  ArrowRight, 
  RefreshCw,
  FileText,
  Download,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Activity,
  Smartphone,
  Sliders,
  Layers,
  Award,
  Clock,
  Server,
  Building,
  Check
} from 'lucide-react';

export default function SmartParkingSection({ t, onOpenConsult }) {
  // Simulator State
  const [isScanning, setIsScanning] = useState(false);
  const [plateNumber, setPlateNumber] = useState('30A-888.99');
  const [gateStatus, setGateStatus] = useState('CLOSED'); // CLOSED, SCANNING..., ACCESS GRANTED (OPEN)
  const [assignedSpot, setAssignedSpot] = useState('B2-108');

  // Active Tab State: 'tech' | 'equipment' | 'backoffice' | 'mobile'
  const [activeTab, setActiveTab] = useState('tech');

  // PDF Viewer Modal State
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);

  // Full 20-Page Catalog Metadata from SHEYONE_AMANO_스마트주차_F.pdf
  const catalogPages = [
    { page: 1, title: '표지: SHEYONE x AMANO PARKING HUB', desc: 'AI 스마트 주차 플랫폼 공식 브로슈어', src: '/images/parking/docu/page_1.png' },
    { page: 2, title: '목차 & 플랫폼 개요', desc: '회사 철학, 서비스 라인업 및 운영 구조', src: '/images/parking/docu/page_2.png' },
    { page: 3, title: '스마트 주차 인프라 비전', desc: '데이터 기반 미래형 스마트 주차 솔루션 기업', src: '/images/parking/docu/page_3.png' },
    { page: 4, title: '비전 & 미션 (Vision & Mission)', desc: '실시간 모니터링과 데이터 관리를 통한 주차 운영 자동화', src: '/images/parking/docu/page_4.png' },
    { page: 5, title: '통합 비즈니스 모델 (Business Model)', desc: '주차장 검색부터 예약, 선결제, 입출차까지 연결', src: '/images/parking/docu/page_5.png' },
    { page: 6, title: '핵심 기술 4대 파트 (Core Technology)', desc: 'AI LPR(번호판인식), PAY(결제), OPS(관제), DATA(분석)', src: '/images/parking/docu/page_6.png' },
    { page: 7, title: '사업 영역 (Business Areas)', desc: '장비 공급, 개발, 전기차 충전 연동, 위탁 운영 Total Solution', src: '/images/parking/docu/page_7.png' },
    { page: 8, title: '아마노 핵심 장비 라인업 (Equipment)', desc: '스마트 차단기, 무인정산기, 통합 LPR, 인터폰 디스플레이', src: '/images/parking/docu/page_8.png' },
    { page: 9, title: '주차 이용 경험 혁신', desc: '사용자와 관리자 모두를 만족시키는 서비스 경험', src: '/images/parking/docu/page_9.png' },
    { page: 10, title: '고객 스토리 & 문제 해결', desc: '주차 스트레스 해소를 위한 AMANO PARKING HUB 신규 서비스', src: '/images/parking/docu/page_10.png' },
    { page: 11, title: '통합 스마트 솔루션', desc: '운영 효율 극대화 및 고객 편의성 향상', src: '/images/parking/docu/page_11.png' },
    { page: 12, title: '모바일 앱 & 웹 서비스 프로세스', desc: '검색, 선결제, 월정액, 단속, 세금계산서 자동화', src: '/images/parking/docu/page_12.png' },
    { page: 13, title: '스마트 앱 이용 흐름도', desc: '앱 하나로 주변 주차장 조회 및 즉시 결제', src: '/images/parking/docu/page_13.png' },
    { page: 14, title: '실시간 운영 소프트웨어 안내', desc: 'Amano ACRM 스마트 관제 백오피스 소개', src: '/images/parking/docu/page_14.png' },
    { page: 15, title: 'Amano ACRM 통합 대시보드', desc: '실시간 현장 입출차 및 주차면 점유 현황 모니터링', src: '/images/parking/docu/page_15.png' },
    { page: 16, title: '통합관제센터 & 장애관리 백오피스', desc: '24시간 무인 현장 실시간 튜닝 및 장애 긴급 조치', src: '/images/parking/docu/page_16.png' },
    { page: 17, title: '운영 데이터 & 분석 보고서', desc: '기간별 매출, 입출차 트렌드 및 장애 이력 데이터 분석', src: '/images/parking/docu/page_17.png' },
    { page: 18, title: '현장 & 사용자 관리 백오피스', desc: '월정액 차량 등록, 할인권 발행 및 사용자 권한 관리', src: '/images/parking/docu/page_18.png' },
    { page: 19, title: '24시간 통합관제센터 실물 운영', desc: '아마노 파킹 관제 전담 요원 24시간 실시간 관제 현장', src: '/images/parking/docu/page_19.png' },
    { page: 20, title: 'SHEYONE SMART PARKING 엔딩', desc: '미래 주차 문화를 선도하는 스마트 주차 파트너', src: '/images/parking/docu/page_20.png' }
  ];

  const simulateScan = () => {
    setIsScanning(true);
    setGateStatus('SCANNING...');
    setTimeout(() => {
      setIsScanning(false);
      setGateStatus('ACCESS GRANTED (GATE OPEN)');
    }, 1200);
  };

  const samplePlates = ['30A-888.99', '29B-123.45', '51G-999.88', '30H-777.66', '30F-555.22'];

  const openPdfAtPage = (pageNum) => {
    setPdfCurrentPage(pageNum);
    setPdfViewerOpen(true);
  };

  return (
    <section id="parking" className="py-20 bg-navy-900/40 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unit Header & Official PDF Catalog Download Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-navy-800/80">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                <Car className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ③</span>
              </span>
              <span className="text-xs text-gold-400 font-mono bg-navy-950 px-2.5 py-1 rounded border border-navy-700">
                SHEYONE x AMANO KOREA & VIETNAM
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              SHEYONE AMANO 스마트 주차 시스템
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              AI 딥러닝 번호판 인식(LPR), 스마트 무인 차단기, ACRM 24시간 원격 관제 및 모바일 결제 플랫폼이 통합된 최첨단 주차 관리 솔루션입니다.
            </p>
          </div>

          {/* Catalog PDF Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <button
              onClick={() => openPdfAtPage(1)}
              className="bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 border border-emeraldGreen-500/30 font-bold px-4 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm"
            >
              <Eye className="w-4 h-4 mr-2 text-emeraldGreen-400" />
              <span>카탈로그 뷰어 (전 20P)</span>
            </button>
            <a
              href="/docu/park/SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
              download="SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
              className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-bold px-4 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm"
            >
              <Download className="w-4 h-4 mr-2" />
              <span>PDF 브로슈어 다운로드</span>
            </a>
          </div>
        </div>

        {/* 4 Key Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-emeraldGreen-500/10 border border-emeraldGreen-500/30 text-emeraldGreen-400 flex items-center justify-center mb-3">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">AI LPR 99.8% 인식률</h3>
            <p className="text-xs text-slate-400">
              야간, 우천, 오염 번호판도 딥러닝 카메라 알고리즘으로 0.1초 내 정확히 인식.
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
              <Monitor className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">Amano ACRM 백오피스</h3>
            <p className="text-xs text-slate-400">
              실시간 입출차 현황, 정산 집계, 장애 이력 모니터링 대시보드 기본 제공.
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-3">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">24시간 관제센터 원격지원</h3>
            <p className="text-xs text-slate-400">
              전문 운영요원이 365일 24시간 무인 현장 차단기 제어 및 인터폰 대응.
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-1">모바일 앱 & E-Tax 연동</h3>
            <p className="text-xs text-slate-400">
              주차장 검색, 월정액 신청, 전자세금계산서 및 무단주차 단속까지 통합 지원.
            </p>
          </div>
        </div>

        {/* Feature Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 bg-navy-950 p-2 rounded-2xl border border-navy-800">
          <button
            onClick={() => setActiveTab('tech')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'tech'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>01. 핵심 기술 4대 파트</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'equipment'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4" />
            <span>02. 아마노 핵심 장비 라인업</span>
          </button>

          <button
            onClick={() => setActiveTab('backoffice')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'backoffice'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4" />
            <span>03. ACRM 무인관제 & 백오피스</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 ${
              activeTab === 'mobile'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4" />
            <span>04. 모바일 앱 & 이용 서비스</span>
          </button>
        </div>

        {/* Tab 1: Core Tech */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-emeraldGreen-500/30 group">
              <img
                src="/images/parking/docu/page_6.png"
                alt="Core Technology 4 Pillars"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => openPdfAtPage(6)}
                className="absolute bottom-4 right-4 bg-navy-950/90 text-emeraldGreen-400 border border-emeraldGreen-500/40 text-xs px-3 py-1.5 rounded-lg flex items-center hover:bg-emeraldGreen-500 hover:text-navy-950 transition-all font-bold"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                <span>카탈로그 6P 확대보기</span>
              </button>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                  CORE TECHNOLOGY
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  SHEYONE AMANO 주차 관제 4대 핵심 축
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-emeraldGreen-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-emeraldGreen-500/20 flex items-center justify-center text-xs">AI</span>
                    <span>AI LPR - 딥러닝 번호판 인식</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    주간/야간, 미등 점등, 우천 상황에서도 99.8% 고득점 인식률을 보장하는 최신 딥러닝 엔진 적용.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-cyan-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center text-xs">PAY</span>
                    <span>PAY - 통합 무인 정산</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    신용카드, 삼성페이, 모바일 QR, 할인권 및 사전 정산 지원으로 출차 정체 제로화 구현.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-gold-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-gold-500/20 flex items-center justify-center text-xs">OPS</span>
                    <span>OPS - 24/7 중앙 관제 백오피스</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    현장 장비 상태 감시, 차단기 원격 제어, 인터폰 통화 및 비상 조치를 24시간 무인 처리.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-purple-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-xs">DATA</span>
                    <span>DATA - 주차 빅데이터 분석</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    시간대별 입출차 트렌드, 요일별 매출 분석, 정기권 관리 보고서를 자동 산출.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hardware Equipment */}
        {activeTab === 'equipment' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center">
              <div>
                <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                  HARDWARE EQUIPMENT
                </span>
                <h3 className="text-2xl font-extrabold text-white">
                  아마노(AMANO) 주차 관제 핵심 라인업
                </h3>
              </div>
              <button
                onClick={() => openPdfAtPage(8)}
                className="mt-2 sm:mt-0 text-xs font-bold text-emeraldGreen-400 hover:text-emeraldGreen-300 flex items-center space-x-1"
              >
                <Eye className="w-4 h-4" />
                <span>카탈로그 8P 실물 라인업 보기</span>
              </button>
            </div>

            {/* Hardware Page Visual Slide */}
            <div className="relative rounded-2xl overflow-hidden border border-navy-700 bg-navy-900">
              <img
                src="/images/parking/docu/page_8.png"
                alt="AMANO Parking Hardware Lineup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 4 Hardware Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Barrier Gate" className="object-cover h-full w-full object-left-top" />
                </div>
                <span className="text-[11px] font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 px-2 py-0.5 rounded">01. SMART GATE</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">스마트 무인 차단기</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  LED 시기성이 뛰어난 고속 바(Bar) 차단기로 차체 충격 방지 센서 및 차세대 인버터 모터 내장.
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Integrated LPR" className="object-cover h-full w-full object-center" />
                </div>
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded">02. INTEGRATED LPR</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">통합 AI LPR 카메라</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  전/후면 듀얼 카메라 옵션, 고휘도 LED 조명 및 IR 야간 촬영으로 극악의 조건에서도 99.8% 인식.
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Payment Terminal" className="object-cover h-full w-full object-right" />
                </div>
                <span className="text-[11px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded">03. PAYMENT KIOSK</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">무인 정산기 (Kiosk)</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  21.5인치 터치스크린, 신용카드, 모바일 페이, QR 할인권 일체형 무인 정산 키오스크.
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Intercom Display" className="object-cover h-full w-full object-right-bottom" />
                </div>
                <span className="text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded">04. INTERCOM & LED</span>
                <h4 className="text-lg font-bold text-white mt-1 mb-2">통합 인터폰 & 디스플레이</h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  24시간 관제센터 직통 비상 인터폰 통화 및 요금, 입출차 안내 텍스트 가시화.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Backoffice & Control Center */}
        {activeTab === 'backoffice' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div>
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                ACRM BACKOFFICE & 24/7 CONTROL CENTER
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                아마노 ACRM 관제 대시보드 & 24시간 실물 관제센터
              </h3>
            </div>

            {/* Screenshots Grid from Catalog Pages 15, 16, 17, 19 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="bg-navy-900 rounded-2xl p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 px-2.5 py-1 rounded">
                    [P.15] ACRM 실시간 현장 대시보드
                  </span>
                  <button onClick={() => openPdfAtPage(15)} className="text-xs text-slate-400 hover:text-emeraldGreen-400 flex items-center">
                    <Eye className="w-3.5 h-3.5 mr-1" /> 15P 원본
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_15.png" alt="ACRM Dashboard" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300">
                  입출차 차량 실시간 영상 모니터링, 차단기 제어, 만차/잔여 면수 점유 현황 한눈에 파악.
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded">
                    [P.16] 장애 관리 & 관제 백오피스
                  </span>
                  <button onClick={() => openPdfAtPage(16)} className="text-xs text-slate-400 hover:text-cyan-400 flex items-center">
                    <Eye className="w-3.5 h-3.5 mr-1" /> 16P 원본
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_16.png" alt="Control & Trouble Mgmt" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300">
                  장비 오류 및 통신 장애 자동 알림, 원격 재부팅 및 24h 긴급 현장 출동 링크.
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded">
                    [P.17] 기간별 매출 & 이력 보고서
                  </span>
                  <button onClick={() => openPdfAtPage(17)} className="text-xs text-slate-400 hover:text-gold-400 flex items-center">
                    <Eye className="w-3.5 h-3.5 mr-1" /> 17P 원본
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_17.png" alt="Operation Reports" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300">
                  일별/월별 매출 정산서, 차량 종류별 통계, 할인권 사용 실적 엑셀 및 PDF 자동 출력.
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded">
                    [P.19] 24시간 관제센터 실제 운영 현장
                  </span>
                  <button onClick={() => openPdfAtPage(19)} className="text-xs text-slate-400 hover:text-purple-400 flex items-center">
                    <Eye className="w-3.5 h-3.5 mr-1" /> 19P 원본
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_19.png" alt="24/7 Operations Room" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300">
                  아마노 관제 전문 요원이 365일 24시간 실시간 카메라 화면을 모니터링하는 본사 관제실.
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Mobile App & Service Flow */}
        {activeTab === 'mobile' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div>
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                MOBILE & WEB SERVICE FLOW
              </span>
              <h3 className="text-2xl font-extrabold text-white">
                운전자 & 주차장 관리자 모바일 앱 서비스
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">주차장 검색 & 실시간 요금 확인</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      현재 위치 주변 목적지 주차장의 잔여 주차면 수와 시간당 요금 정보를 앱에서 즉시 비교.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">모바일 선결제 & 자동 출차</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      출차 전 모바일 결제로 사전정산 완료 시, 차단기가 번호판을 자동 인식하여 무정차 통과.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">정기권 신청 & 무단주차 단속</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      월정액 주차 신청, 자동 계약 갱신, 입주민 할인 등록 및 미등록 무단주차 자동 단속 처리.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">전자세금계산서 자동 발행</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      법인 및 개인 사업자 주차 요금 증빙을 위한 전자세금계산서 자동 이메일/국세청 연동.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-navy-700 bg-navy-900">
                <img
                  src="/images/parking/docu/page_12.png"
                  alt="Mobile Service Flow"
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => openPdfAtPage(12)}
                  className="absolute bottom-4 right-4 bg-navy-950/90 text-emeraldGreen-400 border border-emeraldGreen-500/40 text-xs px-3 py-1.5 rounded-lg flex items-center font-bold"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  <span>12P 모바일 흐름도 원본</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interactive AI Gate & LPR Simulator */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Simulator Visual Box */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emeraldGreen-500/30 space-y-6 relative overflow-hidden">
              
              <div className="flex justify-between items-center pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emeraldGreen-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-200">AI LPR Camera & Smart Gate Simulator</span>
                </div>
                <span className="text-[10px] bg-navy-950 text-emeraldGreen-400 font-mono px-2.5 py-1 rounded border border-navy-700">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Simulated Barrier Gate Screen */}
              <div className="bg-navy-950 rounded-2xl p-6 border border-navy-800 flex flex-col items-center justify-center min-h-[230px] relative">
                
                {/* LPR Plate Display */}
                <div className="mb-4 text-center">
                  <span className="text-xs text-slate-400 block mb-1">감지된 차량 번호판 (AI LPR Camera)</span>
                  <div className="bg-white text-navy-950 px-6 py-2.5 rounded-xl border-2 border-slate-900 font-black text-2xl tracking-widest font-mono shadow-md inline-block">
                    {plateNumber}
                  </div>
                </div>

                {/* Barrier Gate Status Indicator */}
                <div className="space-y-1.5 text-center">
                  <span className="text-xs text-slate-400">차단기 Gate 상태:</span>
                  <div className={`text-lg font-extrabold ${gateStatus.includes('OPEN') ? 'text-emeraldGreen-400' : 'text-gold-400'}`}>
                    {gateStatus}
                  </div>
                  {gateStatus.includes('OPEN') && (
                    <div className="text-xs text-slate-300 mt-2 bg-emeraldGreen-500/10 text-emeraldGreen-400 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                      유도 주차 면수: Spot <span className="font-bold text-white">{assignedSpot}</span> (LED 녹색 점등)
                    </div>
                  )}
                </div>

              </div>

              {/* Simulation Controls */}
              <div className="space-y-3">
                <span className="text-xs text-slate-400 font-medium">차량 번호판 스캔 시뮬레이션:</span>
                <div className="flex flex-wrap gap-2">
                  {samplePlates.map((plate) => (
                    <button
                      key={plate}
                      onClick={() => { setPlateNumber(plate); simulateScan(); }}
                      className={`text-xs font-bold px-3 py-2 rounded-lg border transition-all ${
                        plateNumber === plate
                          ? 'bg-emeraldGreen-500 text-navy-950 border-emeraldGreen-400'
                          : 'bg-navy-900 text-slate-300 border-navy-700 hover:border-emeraldGreen-500/40'
                      }`}
                    >
                      {plate}
                    </button>
                  ))}
                  <button
                    onClick={simulateScan}
                    className="bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 text-xs font-bold px-4 py-2 rounded-lg border border-emeraldGreen-500/30 flex items-center"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 mr-1 ${isScanning ? 'animate-spin' : ''}`} />
                    <span>AI 스캔 실행</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Consultation & Spec Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider">주차 시스템 구축 견적</span>
              <h3 className="text-xl font-extrabold text-white">현장 규모별 맞춤 설계 & 무료 맞춤 컨설팅</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                타운하우스, 주상복합 빌딩, 대형 쇼핑몰, 병원 및 주차타워까지 최적의 차단기 수량과 무인정산기, 관제 소프트웨어 구성을 안내해 드립니다.
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200">한국 SHEYONE & 아마노 기술 제휴 공식 보증</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200">베트남 현지 24/7 출동 A/S 및 관제망 구축</span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200">기존 차단기/주차장 시스템 호환 및 교체 가능</span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsult('parking')}
              className="w-full bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-extrabold text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
            >
              <Car className="w-4 h-4" />
              <span>스마트 주차 시스템 맞춤 견적 신청</span>
            </button>
          </div>

        </div>

      </div>

      {/* Full 20-Page Interactive Catalog Viewer Modal */}
      {pdfViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto">
          {/* Modal Header */}
          <div className="w-full max-w-6xl flex items-center justify-between py-3 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-emeraldGreen-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  SHEYONE x AMANO 스마트주차 통합 공식 카탈로그
                </h3>
                <p className="text-xs text-slate-400">
                  페이지 {pdfCurrentPage} / 20 — {catalogPages[pdfCurrentPage - 1]?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/docu/park/SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                download="SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 border border-emeraldGreen-500/30 px-3 py-1.5 rounded-lg hover:bg-emeraldGreen-500 hover:text-navy-950 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>PDF 받기</span>
              </a>

              <button
                onClick={() => setPdfViewerOpen(false)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Slide Image & Navigation */}
          <div className="w-full max-w-5xl my-4 relative flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={() => setPdfCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={pdfCurrentPage <= 1}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/70 hover:bg-emeraldGreen-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Image */}
            <div className="max-h-[70vh] overflow-hidden rounded-xl border border-slate-800 shadow-2xl flex items-center justify-center bg-navy-950">
              <img
                src={catalogPages[pdfCurrentPage - 1]?.src}
                alt={`Catalog Page ${pdfCurrentPage}`}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setPdfCurrentPage((prev) => Math.min(20, prev + 1))}
              disabled={pdfCurrentPage >= 20}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/70 hover:bg-emeraldGreen-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Page Info & Grid Thumbnail Selector */}
          <div className="w-full max-w-6xl space-y-3">
            <div className="text-center">
              <span className="text-xs font-mono text-emeraldGreen-400 bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                PAGE {pdfCurrentPage} of 20 — {catalogPages[pdfCurrentPage - 1]?.title}
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {catalogPages[pdfCurrentPage - 1]?.desc}
              </p>
            </div>

            {/* Thumbnail Grid Bar */}
            <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-emeraldGreen-500 justify-start sm:justify-center">
              {catalogPages.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPdfCurrentPage(item.page)}
                  className={`flex-shrink-0 w-16 h-12 rounded border transition-all overflow-hidden relative ${
                    pdfCurrentPage === item.page
                      ? 'border-emeraldGreen-400 ring-2 ring-emeraldGreen-400 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt={`Page ${item.page}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-black/80 text-[9px] font-mono text-white px-1">
                    {item.page}
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

