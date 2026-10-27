import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ExternalLink,
  MessageSquare,
  ShieldCheck,
  Calculator,
  Activity,
  Users,
  BarChart3,
  Building2,
  Clock,
  Zap,
  Cpu,
  HardHat,
  Shield,
  CheckCircle2,
  TrendingDown,
  Home,
  Box,
  FileCheck2,
  UploadCloud,
  RefreshCw,
  X
} from 'lucide-react';

/**
 * BEST AI Management 1.0 (SaaS) Hero Component
 * Ultra High-Converting B2B SaaS Hero section with 3D Visual Twin,
 * Live Telemetry, and 60-Second CAD Estimator Simulator.
 * Supports Korean (ko), Vietnamese (vi), and English (en) via props 't'.
 */
export default function AIManagementHero({ t, onOpenConsult }) {
  const isVi = t?.lang === 'vi';
  const isEn = t?.lang === 'en';
  const isKo = !isVi && !isEn;

  // View mode switcher: 'twin' | 'telemetry' | 'cad'
  const [activeView, setActiveView] = useState('twin');
  const [alertIndex, setAlertIndex] = useState(0);
  const [cadRunning, setCadRunning] = useState(false);

  // Rotating live alerts
  const sampleAlerts = isVi
    ? [
        'Thang máy #3 Van Phuc Tower đã được xếp lịch kỹ sư bảo dưỡng định kỳ.',
        'Khu biệt thự Tây Hồ hoàn tất bóc tách dự toán CAD nội thất trong 48 giây.',
        'Hệ thống chống thấm Mỹ Đình cảm biến IoT chẩn đoán 100% bình thường.',
        'Bãi đỗ xe thông minh AI duy trì tỷ lệ hoạt động 100% không sự cố.'
      ]
    : isEn
    ? [
        'Tower #3 Elevator routine predictive maintenance engineer assigned.',
        'West Lake Villa Phase 2 CAD interior estimate completed in 48s.',
        'My Dinh High-Tech Waterproofing IoT sensors diagnose 100% normal.',
        'Smart AI Parking automated dispatch telemetry running at 100% uptime.'
      ]
    : [
        '하노이 반푹 타워 #3 승강기 정기 예지 점검 엔지니어 배정 완료.',
        '서호 빌라 2단지 CAD 인테리어 도면 48초 적산 완료.',
        '미딩 파크뷰 하이테크 방수 IoT 센서 정상 진단 완료.',
        '스마트 파킹 관제 AI 센서 가동률 100% 유지 중.'
      ];

  useEffect(() => {
    const timer = setInterval(() => {
      setAlertIndex((prev) => (prev + 1) % sampleAlerts.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [sampleAlerts.length]);

  const handleConsultClick = (e) => {
    e.preventDefault();
    if (onOpenConsult) {
      onOpenConsult();
    } else {
      const el = document.getElementById('contact');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleCadSimulate = () => {
    setCadRunning(true);
    setTimeout(() => {
      setCadRunning(false);
    }, 1200);
  };

  return (
    <div className="relative pt-8 sm:pt-12 pb-16 sm:pb-24 overflow-hidden bg-[#060A16]">
      {/* Dynamic Background Glows & Cyber Grid */}
      <div 
        className="absolute -top-36 -left-36 w-[650px] h-[650px] rounded-full pointer-events-none blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/4 -right-36 w-[600px] h-[600px] rounded-full pointer-events-none blur-3xl opacity-40"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.22) 0%, transparent 70%)' }}
      />
      
      {/* Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
        
        {/* Breadcrumb Navigation & Category Tabs */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</span>
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{isVi ? 'Dịch vụ' : isKo ? '서비스' : 'Services'}</span>
            <span>/</span>
            <span className="text-amber-400 font-bold">{isVi ? 'Quản lý AI (SaaS)' : isKo ? 'AI경영관리 1.0 (SaaS)' : 'AI Management 1.0'}</span>
          </div>

          {/* Quick Sub-navigation Tabs */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-b border-white/5">
            <Link 
              to="/services/ai-management" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🤖</span>
              <span>{isVi ? 'Quản lý AI (AI Management)' : isKo ? 'AI경영관리 (AI Management)' : 'AI Management'}</span>
            </Link>
            <Link 
              to="/services/products" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-amber-400 hover:bg-slate-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🛒</span>
              <span>{isVi ? 'Sản phẩm bán (BEST Mall)' : isKo ? '판매제품 (BEST Mall)' : 'Products (BEST Mall)'}</span>
            </Link>
            <Link 
              to="/services/events" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-amber-400 hover:bg-slate-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🎟️</span>
              <span>{isVi ? 'Sự kiện & Voucher' : isKo ? '이벤트 (쿠폰·바우쳐)' : 'Events & Vouchers'}</span>
            </Link>
            <Link 
              to="/megazine" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-amber-400 hover:bg-slate-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>📰</span>
              <span>{isVi ? 'BEST MEGAZINE (Tạp chí AI)' : isKo ? 'BEST MEGAZINE (AI 매거진)' : 'BEST MEGAZINE'}</span>
            </Link>
          </div>
        </div>

        {/* Hero Main Grid: Left Copy & Right 3-Mode Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2">
          
          {/* Left Column: Headline, Value Proposition, Action Buttons */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-400/35 backdrop-blur-md shadow-inner">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-80"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
              <span className="text-[11px] sm:text-xs font-black uppercase tracking-widest text-cyan-300 font-mono">
                AI MANAGEMENT SERVICE 1.0 (SaaS)
              </span>
              <span className="text-slate-600 text-xs">|</span>
              <span className="text-[11px] font-semibold text-amber-400 flex items-center gap-1">
                <span>🇻🇳</span>
                {isVi ? 'Đồng bộ hạ tầng Việt Nam Real-time' : isKo ? '하노이 현지 인프라 실시간 관제' : 'Live Infrastructure Sync'}
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h2 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent"></span>
                <span>Enterprise Smart Building Ecosystem</span>
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                BEST WINNER AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
                  {isVi ? 'QUẢN LÝ DOANH NGHIỆP 1.0' : isKo ? '경영관리 1.0' : 'ENTERPRISE AI'}
                </span>{' '}
                <span className="text-amber-400 font-extrabold text-2xl sm:text-4xl">(SaaS)</span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {isVi
                ? 'Nền tảng SaaS Cloud Quản lý Doanh nghiệp AI 1.0 giúp chủ doanh nghiệp điều hành tức thì không cần cài đặt. Tự động hóa phân tích tài chính P&L theo thời gian thực, bóc tách dự toán CAD/BIM trong 1 phút, tối ưu hóa công trình & giám sát bảo trì dự đoán 24/7.'
                : isKo
                ? '복잡한 자체 서버 구축 없이 SaaS 개념으로 즉시 이용 가능한 BEST AI 경영관리 1.0 서비스입니다. 실시간 경영 대시보드, CAD/BIM 연동 1분 스마트 자동 견적, 한국인 수석 엔지니어 팀 최적 배치 및 24/7 IoT 예지보전 관제를 통합 제공합니다.'
                : 'Instant Cloud SaaS Enterprise Intelligence. Real-time executive P&L dashboard, 60-second CAD/BIM quoting, automated Korean Chief Engineer dispatching, and 24/7 predictive IoT maintenance.'}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.035] p-2.5 rounded-xl border border-white/5 hover:border-cyan-400/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 shrink-0">
                  <Calculator className="w-4 h-4" />
                </div>
                <span>{isVi ? 'Bóc tách khối lượng CAD/BIM 60 giây' : isKo ? 'CAD/BIM 기반 60초 자동 적산·견적' : '60s CAD/BIM Auto Takeoff'}</span>
              </div>
              
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.035] p-2.5 rounded-xl border border-white/5 hover:border-amber-400/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <span>{isVi ? 'Bảo trì dự đoán Thang máy & Hố PIT 24/7' : isKo ? '승강기·PIT 누수 24/7 스마트 예지보전' : '24/7 IoT Predictive Maintenance'}</span>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.035] p-2.5 rounded-xl border border-white/5 hover:border-indigo-400/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span>{isVi ? '2 Kỹ sư trưởng Hàn Quốc & 15 kỹ sư' : isKo ? '한국 수석 엔지니어 2인 & 15명 현장 배치' : '2 Chief Engineers & 15 Specialists'}</span>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.035] p-2.5 rounded-xl border border-white/5 hover:border-emerald-400/30 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 shrink-0">
                  <BarChart3 className="w-4 h-4" />
                </div>
                <span>{isVi ? 'Dự báo dòng tiền & P&L 6 mảng kinh doanh' : isKo ? '6대 사업부 통합 손익·현금흐름 예측' : 'Multi-BU P&L & Cash Flow Forecast'}</span>
              </div>
            </div>

            {/* Action CTA Buttons */}
            <div className="pt-3 flex flex-wrap gap-3.5 items-center">
              {/* Primary CTA */}
              <a 
                href="https://besterp.netlify.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-cyan-400 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-xs sm:text-sm shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-cyan-300/40"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>{isVi ? 'Truy cập SaaS 1.0 (besterp.netlify.app)' : isKo ? 'SaaS 1.0 접속 (besterp.netlify.app)' : 'Launch SaaS 1.0 (besterp.netlify.app)'}</span>
                <ExternalLink className="w-4 h-4 text-slate-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary CTA */}
              <button 
                onClick={handleConsultClick}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-xs sm:text-sm border border-slate-700/70 hover:border-cyan-400/50 transition-all duration-300 hover:scale-[1.02]"
              >
                <MessageSquare className="w-4 h-4 text-cyan-400" />
                <span>{isVi ? 'Đăng ký Tư vấn & Demo 1:1' : isKo ? '1:1 맞춤 데모 & 컨설팅 신청' : 'Request 1:1 Live Demo'}</span>
              </button>
            </div>

            {/* Trust SLA & Ecosystem */}
            <div className="pt-1 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <ShieldCheck className="w-4 h-4" />
                <span>99.9% Cloud SLA</span>
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="truncate">
                {isVi 
                  ? 'Nội thất · Thang máy · Bãi xe AI · PCCC · Chống thấm · Năng lượng' 
                  : isKo 
                  ? '인테리어 · 승강기 · 스마트주차 · 소방자재 · 방수 · 태양광 연동' 
                  : 'Interiors · Elevators · Smart Parking · Fire Safety · Waterproofing · Solar'}
              </span>
            </div>

          </div>

          {/* Right Column: 3-Mode Interactive High-Tech Visual Container */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500/30 to-amber-500/20 rounded-3xl blur-2xl opacity-60 -z-10" />

            {/* Showcase Container */}
            <div className="bg-slate-900/90 backdrop-blur-2xl border border-cyan-500/35 rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Window Controls & View Switcher */}
              <div className="p-3.5 bg-slate-950/90 border-b border-white/10 flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center space-x-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block"></span>
                  <span className="text-[11px] font-mono text-slate-400 ml-1.5 hidden sm:inline">BestERP Cloud v1.0.4</span>
                </div>

                {/* Tab Switch Buttons */}
                <div className="flex items-center bg-slate-900 rounded-lg p-0.5 border border-white/10 text-[10px]">
                  <button 
                    onClick={() => setActiveView('twin')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all flex items-center gap-1 ${
                      activeView === 'twin'
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Box className="w-3 h-3" />
                    <span>3D Twin</span>
                  </button>
                  <button 
                    onClick={() => setActiveView('telemetry')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all flex items-center gap-1 ${
                      activeView === 'telemetry'
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Activity className="w-3 h-3" />
                    <span>Telemetry</span>
                  </button>
                  <button 
                    onClick={() => setActiveView('cad')}
                    className={`px-2.5 py-1 rounded-md font-bold transition-all flex items-center gap-1 ${
                      activeView === 'cad'
                        ? 'bg-cyan-500 text-slate-950 shadow-sm'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    <Calculator className="w-3 h-3" />
                    <span>60s CAD</span>
                  </button>
                </div>
              </div>

              {/* VIEW 1: 3D Twin Graphic Showcase */}
              {activeView === 'twin' && (
                <div className="p-4 space-y-3.5">
                  <div className="relative rounded-xl overflow-hidden border border-cyan-500/30 group">
                    <img 
                      src="/ai_mgmt_hero_3d.jpg" 
                      alt="AI-Powered Enterprise Management 3D Blueprint" 
                      className="w-full h-56 sm:h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent pointer-events-none" />
                    
                    {/* Live Node Badge */}
                    <div className="absolute top-3 left-3 bg-slate-950/85 backdrop-blur-md px-2.5 py-1 rounded-md border border-cyan-400/40 text-[10px] font-mono text-cyan-300 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                      <span>HANOI TOWER #3 LIVE TWIN</span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                      <span className="flex items-center gap-1 text-amber-400 font-semibold font-mono">
                        <Zap className="w-3 h-3" /> 6 BUs Auto-Synced
                      </span>
                      <span className="text-emerald-400 font-mono text-[10px]">Zero Anomaly</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="bg-slate-950/80 rounded-xl p-2.5 border border-white/5">
                      <div className="text-[10px] text-slate-400 font-medium">{isVi ? 'Công trình quản lý' : isKo ? '월간 관리 현장' : 'Managed Sites'}</div>
                      <div className="text-base font-extrabold text-white mt-0.5">37 {isVi ? 'dự án' : isKo ? '개소' : 'sites'}</div>
                      <div className="text-[10px] text-emerald-400 font-medium">+18.4% MoM</div>
                    </div>
                    <div className="bg-slate-950/80 rounded-xl p-2.5 border border-white/5">
                      <div className="text-[10px] text-slate-400 font-medium">{isVi ? 'Thời gian bóc tách' : isKo ? '스마트 견적 속도' : 'Quoting Speed'}</div>
                      <div className="text-base font-extrabold text-amber-400 mt-0.5">48{isVi ? 'giây' : isKo ? '초' : 's'}</div>
                      <div className="text-[10px] text-cyan-300 font-medium">Auto CAD/BIM</div>
                    </div>
                  </div>
                </div>
              )}

              {/* VIEW 2: Real-time Telemetry Dashboard */}
              {activeView === 'telemetry' && (
                <div className="p-4 space-y-3.5">
                  <div className="bg-slate-950/90 border border-white/10 rounded-xl p-3.5 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-200 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-cyan-400 animate-spin" />
                        <span>{isVi ? 'Trạng thái AI Engine' : isKo ? 'AI 엔진 실시간 가동' : 'AI Engine Telemetry'}</span>
                      </span>
                      <span className="text-[10px] font-mono text-cyan-400 bg-slate-900 px-2 py-0.5 rounded border border-cyan-800">
                        Latency: 28ms
                      </span>
                    </div>

                    <div className="space-y-2.5">
                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>{isVi ? 'Độ chính xác bóc tách CAD' : isKo ? 'BIM 도면 자동 수량산출 정합도' : 'CAD/BIM Takeoff Accuracy'}</span>
                          <span className="text-cyan-400 font-bold font-mono">99.4%</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full" style={{ width: '99.4%' }} />
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>{isVi ? 'Phát hiện rung lắc Thang máy' : isKo ? '승강기 IoT 이상 진동 감지' : 'Elevator Anomaly Detection'}</span>
                          <span className="text-amber-400 font-bold font-mono">{isVi ? '100% Bình thường' : isKo ? '100% 정상' : '100% Normal'}</span>
                        </div>
                        <div className="w-full bg-slate-900 rounded-full h-1.5 overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-500 to-amber-400 h-1.5 rounded-full" style={{ width: '100%' }} />
                        </div>
                      </div>
                    </div>

                    {/* Live Stream Alert Feed */}
                    <div className="bg-slate-900/90 rounded-lg p-2.5 border border-white/5 text-[11px] font-mono text-slate-300 flex items-start gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 mt-1 shrink-0 animate-ping"></span>
                      <div className="truncate">
                        <span className="text-cyan-400">{isVi ? '[Sự kiện]' : isKo ? '[실시간]' : '[Event]'}</span>{' '}
                        {sampleAlerts[alertIndex]}
                      </div>
                    </div>
                  </div>

                  {/* Korean Chief Engineer Dispatch Status */}
                  <div className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-slate-900 to-indigo-950/60 border border-indigo-500/20 text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-400/30 flex items-center justify-center text-indigo-300 shrink-0">
                        <HardHat className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="font-bold text-white text-xs">
                          {isVi ? 'Điều phối Kỹ sư trưởng Hàn Quốc' : isKo ? '한국인 수석 엔지니어 현장 관제' : 'Korean Chief Engineer Dispatch'}
                        </div>
                        <div className="text-[10px] text-slate-400">
                          {isVi ? '2 Kỹ sư trưởng & 15 chuyên viên túc trực' : isKo ? '수석 엔지니어 2인 & 전문팀 15인 실시간 배치' : '2 Chief Engineers & 15 Specialists on site'}
                        </div>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-indigo-500/20 text-[10px] font-bold text-indigo-300 border border-indigo-400/30">
                      ACTIVE
                    </span>
                  </div>
                </div>
              )}

              {/* VIEW 3: 60s CAD/BIM Auto Estimator Simulator */}
              {activeView === 'cad' && (
                <div className="p-4 space-y-3.5">
                  <div className="bg-slate-950/90 rounded-xl p-3.5 border border-white/10 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-amber-400 flex items-center gap-1.5">
                        <FileCheck2 className="w-4 h-4" />
                        <span>{isVi ? 'Mô phỏng Bóc tách CAD/BIM 60 giây' : isKo ? 'CAD / BIM 1분 견적 시뮬레이터' : 'CAD/BIM 60s Takeoff Simulator'}</span>
                      </span>
                      <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/30">
                        {cadRunning ? '분석 중...' : '자동 산출 활성'}
                      </span>
                    </div>

                    <div className="p-3 bg-slate-900/80 rounded-lg border border-dashed border-cyan-500/40 text-center">
                      <UploadCloud className={`w-6 h-6 text-cyan-400 mx-auto mb-1 ${cadRunning ? 'animate-spin' : 'animate-bounce'}`} />
                      <div className="text-xs font-semibold text-white">Floor_12_Interior.dwg</div>
                      <div className="text-[10px] text-slate-400">
                        {isVi ? 'Tường 420㎡, Sàn 1,280㎡, 2 hố thang máy' : isKo ? '벽체 420㎡, 바닥 타일 1,280㎡, 엘리베이터 2개소 자동 검출' : 'Walls 420㎡, Floor 1,280㎡, 2 Elevator shafts'}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                      <div className="bg-slate-900/90 p-2 rounded border border-white/5">
                        <div className="text-[10px] text-slate-400">{isVi ? 'Đơn giá vật tư' : isKo ? '자재 원가 산정' : 'Material Price'}</div>
                        <div className="font-bold text-cyan-300 mt-0.5">{isVi ? 'Giá thực tế Hà Nội' : isKo ? '베트남 실시간 단가' : 'Live Hanoi Market'}</div>
                      </div>
                      <div className="bg-slate-900/90 p-2 rounded border border-white/5">
                        <div className="text-[10px] text-slate-400">{isVi ? 'Tốc độ bóc tách' : isKo ? '적산 완료 속도' : 'Speed'}</div>
                        <div className="font-bold text-amber-400 mt-0.5">48.2s (±0.6%)</div>
                      </div>
                    </div>

                    <button 
                      onClick={handleCadSimulate}
                      className="w-full py-2 rounded-lg bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-cyan-300 text-xs font-bold transition-all flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className={`w-3.5 h-3.5 ${cadRunning ? 'animate-spin' : ''}`} />
                      <span>{isVi ? 'Chạy lại mô phỏng bóc tách' : isKo ? '도면 재분석 시뮬레이션 실행' : 'Re-run CAD Simulation'}</span>
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-3 -right-3 bg-slate-900/95 border border-amber-500/40 rounded-xl px-3 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2">
              <span className="text-base">⚡</span>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold">{isVi ? 'Tốc độ báo giá' : isKo ? '견적 산출 속도' : 'Quoting Engine'}</div>
                <div className="text-xs font-black text-amber-400">{isVi ? 'Dưới 60 giây' : isKo ? '1분 이내 완성' : '< 60 Seconds'}</div>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-4 -left-4 bg-slate-900/95 border border-cyan-500/40 rounded-xl px-3.5 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2.5">
              <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Shield className="w-3.5 h-3.5" />
              </div>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold">{isVi ? 'Giám sát 24/7' : isKo ? '24/7 스마트 모니터링' : '24/7 Telemetry'}</div>
                <div className="text-xs font-black text-cyan-300">{isVi ? 'Ngăn ngừa sự cố sớm' : isKo ? '고장 사전 예방 관제' : 'Zero Downtime'}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom 4-Column KPI Stats Strip */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-slate-900/70 border border-white/5 hover:border-cyan-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {isVi ? 'Độ chính xác AI' : isKo ? 'AI 예측 정확도' : 'AI Accuracy'}
                </span>
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">99.4%</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Tối ưu hóa doanh thu & biên độ chi phí' : isKo ? '매출 및 공정 원가 산정 오차 최소화' : 'Minimal cost & revenue variance'}
              </p>
            </div>

            <div className="bg-slate-900/70 border border-white/5 hover:border-amber-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isVi ? 'Tốc độ báo giá' : isKo ? '스마트 견적 속도' : 'Quoting Speed'}
                </span>
                <Zap className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-amber-400 tracking-tight">&lt; 60초</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Bóc tách tự động từ bản vẽ CAD/BIM' : isKo ? 'CAD/BIM 기반 현지 자재비 실시간 산출' : 'Instant local material takeoff'}
              </p>
            </div>

            <div className="bg-slate-900/70 border border-white/5 hover:border-emerald-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {isVi ? 'Bảo trì dự đoán' : isKo ? '예지보전 관제' : 'Predictive Care'}
                </span>
                <Activity className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">24 / 7</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Giám sát cảm biến IoT & điều phối 24/7' : isKo ? 'IoT 센서 이상 징후 감지 및 긴급 출동' : 'IoT anomaly detection & 24/7 care'}
              </p>
            </div>

            <div className="bg-slate-900/70 border border-white/5 hover:border-indigo-400/40 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  {isVi ? 'Tiết kiệm chi phí' : isKo ? '공기·원가 절감' : 'Cost & Time'}
                </span>
                <TrendingDown className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-cyan-300 tracking-tight">-35%</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Tối ưu hóa nhân lực & kỹ sư Hàn Quốc' : isKo ? '한국인 수석 엔지니어 팀 최적 배치' : 'Optimized dispatch & route savings'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
