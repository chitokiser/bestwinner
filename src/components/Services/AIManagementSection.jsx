import React, { useState } from 'react';
import { 
  Cpu, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  Clock, 
  Users, 
  Wrench, 
  DollarSign, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Calculator,
  Activity,
  Layers,
  ExternalLink,
  Globe
} from 'lucide-react';

export default function AIManagementSection({ t, onOpenConsult }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true); // default ko

  // Simulator State
  const [projectCount, setProjectCount] = useState(12);
  const [employeeCount, setEmployeeCount] = useState(25);

  // Dynamic Simulator Calculations
  const calculatedCostSavings = Math.round(projectCount * 3800 + employeeCount * 1200); // USD
  const calculatedHoursSaved = Math.round(projectCount * 18 + employeeCount * 8);
  const calculatedRiskReduction = Math.min(94, Math.round(75 + projectCount * 0.4));

  const modules = [
    {
      id: 'dashboard',
      num: '01',
      icon: BarChart3,
      badge: 'Executive Analytics',
      title: isVi 
        ? '1. AI 경영 & Tài chính Dashboard' 
        : isKo 
        ? '1. AI 경영 & 재무 통합 대시보드' 
        : '1. AI Executive & Financial Dashboard',
      desc: isVi 
        ? 'Phân tích doanh thu, tỷ suất lợi nhuận và dòng tiền theo thời gian thực cho 6 mảng kinh doanh cốt lõi (Nội thất, Thang máy, PCCC, Chống thấm, Bãi đỗ xe AI, Solar).'
        : isKo 
        ? '인테리어, 승강기, 소방, 방수, AI 주차, 태양광 6대 사업부의 실시간 매출, 마진율, 현금 흐름을 AI가 분석하고 미래 경영 리스크를 예측합니다.'
        : 'Real-time revenue, margin, and cashflow analytics across all 6 core business units powered by AI predictive modeling.',
      highlights: [
        isVi ? 'Phân tích P&L và tỷ suất lợi nhuận tự động' : isKo ? '실시간 사업부별 손익 & 마진율 AI 분석' : 'Automated P&L and margin analysis',
        isVi ? 'Mô hình hóa dự báo dòng tiền 3/6/12 tháng' : isKo ? '3/6/12개월 현금흐름 예측 모델링' : '3/6/12-month cash flow forecasting',
        isVi ? 'Cảnh báo rủi ro thu hồi nợ & thực hiện hợp đồng' : isKo ? '미수금 & 계약 이행 리스크 경고 시스템' : 'Receivables & contract execution risk alerts'
      ]
    },
    {
      id: 'estimation',
      num: '02',
      icon: Zap,
      badge: 'Smart Quoting',
      title: isVi 
        ? '2. Dự toán & Báo giá tự động AI' 
        : isKo 
        ? '2. AI 스마트 자동 견적 & 자재 최적화' 
        : '2. AI Smart Quoting & Material Optimization',
      desc: isVi 
        ? 'Tự động tính toán chi phí vật tư, nhân công và vận chuyển tại Việt Nam dựa trên dữ liệu bản vẽ CAD/BIM để xuất báo giá chuẩn xác trong 1 phút.'
        : isKo 
        ? 'CAD/BIM 도면 및 현장 데이터를 기반으로 베트남 현지 자재 단가, 인건비, 물류비를 자동 산출하여 1분 이내에 B2B/B2C 견적서를 생성합니다.'
        : 'Instantly calculates local material, labor, and logistics costs from CAD/BIM data to generate precise B2B proposals in under 60 seconds.',
      highlights: [
        isVi ? 'Bóc tách khối lượng vật tư từ bản vẽ CAD/BIM' : isKo ? 'CAD/BIM 도면 연동 자동 자재 수량 산출' : 'Automated CAD/BIM material takeoff',
        isVi ? 'Cập nhật biến động tỷ giá & giá vật tư thực tế' : isKo ? '환율 & 현지 원자재 시세 변동 실시간 반영' : 'Real-time forex & raw material price sync',
        isVi ? 'Động cơ tự động tối ưu hóa tỷ suất lợi nhuận' : isKo ? '최적 이익률 자동 조율 엔지니어링' : 'Optimal margin auto-calibration engine'
      ]
    },
    {
      id: 'workforce',
      num: '03',
      icon: Users,
      badge: 'Field Ops',
      title: isVi 
        ? '3. Tối ưu hóa Tiến độ & Nhân lực AI' 
        : isKo 
        ? '3. AI 공정 & 인력 배치 최적화' 
        : '3. AI Construction & Dispatch Optimization',
      desc: isVi 
        ? 'Phân tích lộ trình, tiến độ và yêu cầu thực tế của công trình để tự động phân bổ 2 Kỹ sư trưởng Hàn Quốc & 15 kỹ sư chuyên trách hiệu quả nhất.'
        : isKo 
        ? '한국인 수석 엔지니어 2인과 15명의 현지 전문 인력의 이동 동선, 공정 상태, 현장 요구사항을 AI가 분석하여 최적 시공 인력을 자동 배치합니다.'
        : 'Analyzes site status and route efficiency to automatically dispatch Korean chief engineers and local specialist technicians.',
      highlights: [
        isVi ? 'Tối ưu hóa lịch trình & lộ trình kỹ sư' : isKo ? '엔지니어 동선 & 일정 자동 최적화' : 'Automated engineer route & schedule optimization',
        isVi ? 'Phân tích ảnh tiến độ thi công bằng AI' : isKo ? '현장 실시간 공정률 이미지 AI 분석' : 'Real-time site progress visual AI analysis',
        isVi ? 'Rút ngắn tiến độ & cảnh báo an toàn lao động' : isKo ? '공기 단축 & 안전 사고 예방 알림' : 'Schedule acceleration & safety risk prevention'
      ]
    },
    {
      id: 'maintenance',
      num: '04',
      icon: ShieldCheck,
      badge: '24/7 Smart Maintenance',
      title: isVi 
        ? '4. Bảo trì Dự đoán & Giám sát AI 24/7' 
        : isKo 
        ? '4. AI 24/7 스마트 예지 보전 & A/S' 
        : '4. AI Predictive Maintenance & 24/7 Monitoring',
      desc: isVi 
        ? 'Học máy dữ liệu cảm biến IoT Thang máy, Hệ thống Bãi đỗ xe và Chống thấm để phát hiện sự cố sớm và tự động điều phối cứu hộ 24/7.'
        : isKo 
        ? '승강기 IoT 센서, 주차 시스템, 방수 모니터링 데이터를 AI가 학습하여 고장을 사전에 예측하고 24시간 원격 A/S 및 긴급 출동을 지원합니다.'
        : 'Machine learning models analyze IoT sensor streams from elevators, smart parking, and waterproofing to predict faults before downtime.',
      highlights: [
        isVi ? 'Cảnh báo sớm độ mài mòn & rung lắc Thang máy' : isKo ? '승강기 부품 마모 & 이상 진동 사전 감지' : 'Elevator component wear & vibration anomaly detection',
        isVi ? 'Dự báo thấm nước hố PIT & rò rỉ công trình' : isKo ? '승강기 PIT 누수 & 방수층 침투 예측' : 'Elevator PIT water leak & seepage prediction',
        isVi ? 'Tự động tiếp nhận & điều phối A/S 24/7' : isKo ? '24시간 자동 A/S 접수 및 긴급 출동' : 'Automated 24/7 emergency dispatch system'
      ]
    }
  ];

  return (
    <section id="ai-management-section" className="py-16 bg-navy-950 relative overflow-hidden">
      {/* Dynamic Glow Accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-bold uppercase tracking-widest">
            <Cpu className="w-4 h-4 animate-pulse text-cyan-400" />
            <span>BEST WINNER AI ENTERPRISE SOLUTION 1.0 (SaaS)</span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            {isVi 
              ? 'BEST AI Quản lý Doanh nghiệp 1.0 (SaaS)' 
              : isKo 
              ? 'BEST AI 경영관리 1.0 (SaaS)' 
              : 'BEST AI Enterprise Management 1.0 (SaaS)'}
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            {isVi
              ? 'SaaS dạng 클라우드 dịch vụ giúp doanh nghiệp sử dụng ngay AI Quản lý Doanh nghiệp 1.0 mà không cần cài đặt phức tạp.'
              : isKo
              ? '별도의 복잡한 구축 없이 SaaS 개념으로 즉시 이용 가능한 BEST AI 경영관리 1.0 서비스입니다. 경영 대시보드, 스마트 자동 견적, 공정 최적화 & 24시간 예지보전 관제 기능을 클라우드에서 제공합니다.'
              : 'Available instantly as a Cloud SaaS platform for AI Enterprise Management 1.0. Access Executive Dashboard, Smart Quoting & 24/7 Predictive Maintenance.'}
          </p>

          {/* SaaS Direct Launch Banner */}
          <div className="pt-2 flex justify-center">
            <a
              href="https://besterp.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-blue-500 text-white font-black text-xs sm:text-sm shadow-xl hover:scale-105 transition-all border border-cyan-400/40"
            >
              <Globe className="w-4 h-4 text-cyan-200" />
              <span>{isVi ? 'Truy cập 바로가기 SaaS: besterp.netlify.app' : isKo ? 'AI경영관리 1.0 SaaS 바로가기 (besterp.netlify.app)' : 'Launch SaaS 1.0 (besterp.netlify.app)'}</span>
              <ExternalLink className="w-4 h-4 text-white" />
            </a>
          </div>
        </div>

        {/* Top KPI Metrics Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-navy-900/90 border border-cyan-500/30 rounded-2xl p-5 hover:border-cyan-400/60 transition-all shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">{isVi ? 'Độ chính xác AI' : isKo ? 'AI 예측 정확도' : 'AI Accuracy'}</span>
              <Activity className="w-5 h-5 text-cyan-400" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white gold-gradient-text">99.4%</p>
            <p className="text-xs text-slate-400 mt-1.5">{isVi ? 'Tối ưu dự toán & chi phí' : isKo ? '매출 & 원가 산정 오차 최소화' : 'Minimal estimation error margin'}</p>
          </div>

          <div className="bg-navy-900/90 border border-gold-500/30 rounded-2xl p-5 hover:border-gold-400/60 transition-all shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">{isVi ? 'Tăng hiệu suất' : isKo ? '공정 효율 향상' : 'Efficiency Boost'}</span>
              <TrendingUp className="w-5 h-5 text-gold-400" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white gold-gradient-text">+35%</p>
            <p className="text-xs text-slate-400 mt-1.5">{isVi ? 'Rút ngắn thời gian tiến độ' : isKo ? '현장 공정 지연 & 자원 낭비 방지' : 'Prevents delays & material waste'}</p>
          </div>

          <div className="bg-navy-900/90 border border-emerald-500/30 rounded-2xl p-5 hover:border-emerald-400/60 transition-all shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">{isVi ? 'Giám sát 24/7' : isKo ? '스마트 예지 관제' : '24/7 Predictive'}</span>
              <Clock className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white text-emerald-400">24/7</p>
            <p className="text-xs text-slate-400 mt-1.5">{isVi ? 'Phát hiện sự cố Thang máy & 방수' : isKo ? '승강기 & 방수/설비 실시간 장애 감지' : 'Real-time fault & leakage detection'}</p>
          </div>

          <div className="bg-navy-900/90 border border-amber-500/30 rounded-2xl p-5 hover:border-amber-400/60 transition-all shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-wider">{isVi ? 'Dự án áp dụng' : isKo ? '도입 프로젝트' : 'Deployed Sites'}</span>
              <Layers className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-3xl sm:text-4xl font-black text-white gold-gradient-text">150+</p>
            <p className="text-xs text-slate-400 mt-1.5">{isVi ? 'Công trình tại Việt Nam' : isKo ? '베트남 현지 B2B/B2C 프로젝트 적용' : 'Active Vietnam project sites'}</p>
          </div>
        </div>

        {/* Core 4 Modules Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center">
              <Sparkles className="w-5 h-5 mr-2 text-cyan-400" />
              <span>{isVi ? '4 Phân hệ AI 경영관리 Cốt lõi' : isKo ? 'AI 경영관리 4대 핵심 모듈' : '4 Core AI Enterprise Modules'}</span>
            </h3>
            <span className="text-xs text-slate-400">{isVi ? 'Công nghệ AI Hàn Quốc' : isKo ? 'Korean AI Tech Powered' : 'Powered by K-AI'}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((m) => {
              const IconComp = m.icon;
              return (
                <div 
                  key={m.id}
                  className="bg-navy-900/80 border border-navy-800 hover:border-cyan-500/40 rounded-3xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between group"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                          <IconComp className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-wider bg-navy-950 text-cyan-400 px-2.5 py-1 rounded-full border border-navy-700">
                            {m.badge}
                          </span>
                        </div>
                      </div>
                      <span className="text-3xl font-black text-navy-800 group-hover:text-cyan-500/30 transition-colors">{m.num}</span>
                    </div>

                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {m.title}
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {m.desc}
                    </p>

                    <ul className="space-y-2 pt-2 border-t border-navy-800">
                      {m.highlights.map((h, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mr-2 mt-0.5 shrink-0" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Interactive AI Business ROI Simulator */}
        <div className="bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 border border-cyan-500/30 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 mb-2">
                <Calculator className="w-3.5 h-3.5" />
                <span>AI ROI SIMULATOR</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isVi ? 'Mô phỏng Hiệu quả AI 경영관리' : isKo ? 'AI 경영 도입 효과 시뮬레이터' : 'AI Business Efficiency Simulator'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isVi ? 'Nhập quy mô dự án & nhân sự để ước tính chi phí tiết kiệm & thời gian rút ngắn.' : isKo ? '사업 규모와 관리 인원에 따른 예상 비용 절감 및 생산성 향상 결과를 확인하세요.' : 'Adjust project volume and team size to calculate estimated ROI and cost savings.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Controls Left */}
            <div className="lg:col-span-6 space-y-6">
              
              {/* Slider 1: Monthly Projects */}
              <div className="bg-navy-950/80 p-5 rounded-2xl border border-navy-800 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300">{isVi ? 'Số dự án hàng tháng' : isKo ? '월 평균 진행 프로젝트 수' : 'Monthly Projects'}</span>
                  <span className="text-cyan-400 text-base font-extrabold">{projectCount} {isVi ? 'dự án' : isKo ? '개' : 'sites'}</span>
                </div>
                <input 
                  type="range" 
                  min="2" 
                  max="50" 
                  value={projectCount}
                  onChange={(e) => setProjectCount(Number(e.target.value))}
                  className="w-full accent-cyan-400 bg-navy-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>2개</span>
                  <span>25개</span>
                  <span>50개</span>
                </div>
              </div>

              {/* Slider 2: Team Size */}
              <div className="bg-navy-950/80 p-5 rounded-2xl border border-navy-800 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold">
                  <span className="text-slate-300">{isVi ? 'Số nhân sự quản lý & kỹ sư' : isKo ? '관리 & 엔지니어 인력 수' : 'Management & Engineers'}</span>
                  <span className="text-gold-400 text-base font-extrabold">{employeeCount} {isVi ? 'người' : isKo ? '명' : 'staff'}</span>
                </div>
                <input 
                  type="range" 
                  min="5" 
                  max="100" 
                  value={employeeCount}
                  onChange={(e) => setEmployeeCount(Number(e.target.value))}
                  className="w-full accent-gold-400 bg-navy-800 h-2 rounded-lg cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>5명</span>
                  <span>50명</span>
                  <span>100명</span>
                </div>
              </div>

            </div>

            {/* Results Output Right */}
            <div className="lg:col-span-6 bg-navy-950 p-6 rounded-2xl border border-cyan-500/40 space-y-6 shadow-2xl relative">
              <div className="absolute -top-3 left-6 bg-cyan-500 text-navy-950 text-[10px] font-black uppercase tracking-wider px-3 py-0.5 rounded-full">
                ESTIMATED RESULTS
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center pt-2">
                <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{isVi ? 'Tiết kiệm chi phí/năm' : isKo ? '연간 경영비 절감' : 'Annual Savings'}</p>
                  <p className="text-xl sm:text-2xl font-black text-cyan-400 mt-1">${calculatedCostSavings.toLocaleString()}</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">USD / year</p>
                </div>

                <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{isVi ? 'Thời gian tiết kiệm' : isKo ? '월 업무시간 단축' : 'Monthly Hrs Saved'}</p>
                  <p className="text-xl sm:text-2xl font-black text-gold-400 mt-1">{calculatedHoursSaved}h</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">hours / month</p>
                </div>

                <div className="bg-navy-900/90 p-4 rounded-xl border border-navy-800">
                  <p className="text-[10px] font-bold text-slate-400 uppercase">{isVi ? 'Giảm rủi ro' : isKo ? '손실 리스크 감소' : 'Risk Reduction'}</p>
                  <p className="text-xl sm:text-2xl font-black text-emerald-400 mt-1">-{calculatedRiskReduction}%</p>
                  <p className="text-[10px] text-slate-500 mt-0.5">Predictive AI</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => {
                    const contactEl = document.getElementById('contact');
                    if (contactEl) contactEl.scrollIntoView({ behavior: 'smooth' });
                    else if (onOpenConsult) onOpenConsult();
                  }}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 text-sm font-black py-3.5 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 group"
                >
                  <span>{isVi ? 'Đăng ký tư vấn demo AI 경영관리' : isKo ? 'AI 경영관리 도입 상담 & 데모 신청' : 'Request AI Demo & Consultation'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
