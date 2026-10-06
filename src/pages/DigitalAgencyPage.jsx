import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { 
  Globe, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Database, 
  Bot, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Repeat, 
  Share2, 
  Smartphone, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Check, 
  Calculator,
  Megaphone,
  Video,
  Award,
  ChevronRight,
  Maximize2,
  Image as ImageIcon
} from 'lucide-react';

export default function DigitalAgencyPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || !t?.lang;

  // Hero Gallery Image State
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const heroImages = [
    {
      src: '/images/dgitalagency/1.png',
      title: isKo ? 'Phase 1: 기획 & 기본 웹 구축' : 'Phase 1: Quy hoạch & Web cơ bản',
      badge: isKo ? '기본 인프라 구축 (8,000,000 VND)' : 'Báo giá 8.000.000 VND'
    },
    {
      src: '/images/dgitalagency/2.png',
      title: isKo ? 'Phase 2: CRM & 회원제 고도화' : 'Phase 2: CRM & Thẻ hội viên',
      badge: isKo ? '멤버십 & 포인트 적립 (35,000,000 VND)' : 'Báo giá 35.000.000 VND'
    },
    {
      src: '/images/dgitalagency/3.png',
      title: isKo ? 'Phase 3: 자동화 마케팅 & API 연동' : 'Phase 3: Marketing Tự động hóa',
      badge: isKo ? '날씨/조건별 쿠폰 발송 (35,000,000 VND)' : 'Báo giá 35.000.000 VND'
    },
    {
      src: '/images/dgitalagency/4.png',
      title: isKo ? 'Phase 4: AI & 고도화 (선택)' : 'Phase 4: Trí tuệ nhân tạo AI',
      badge: isKo ? 'AI 고객 분석 대시보드 (30,000,000 VND)' : 'Báo giá 30.000.000 VND'
    },
    {
      src: '/images/dgitalagency/5.png',
      title: isKo ? '월 유지관리 & Facebook 광고 대행' : 'Bảo trì Hàng tháng & FB Ads',
      badge: isKo ? '월 100만 회 노출 & CF 영상 월 4회' : 'QC Facebook 1tr lượt/tháng'
    },
    {
      src: '/images/dgitalagency/6.png',
      title: isKo ? '10대 비즈니스 기대효과 종합 매트릭스' : '10 Hiệu quả Kỳ vọng Kinh doanh',
      badge: isKo ? '고객확보 · 재방문 · 매출증대' : 'Tăng doanh thu & Khách hàng'
    }
  ];

  // Selected Phases for interactive quote estimation
  const [selectedPhases, setSelectedPhases] = useState({
    phase1: true,
    phase2: true,
    phase3: true,
    phase4: true
  });

  const phasePrices = {
    phase1: 8000000,
    phase2: 35000000,
    phase3: 35000000,
    phase4: 30000000
  };

  const calculateTotalVND = () => {
    let total = 0;
    if (selectedPhases.phase1) total += phasePrices.phase1;
    if (selectedPhases.phase2) total += phasePrices.phase2;
    if (selectedPhases.phase3) total += phasePrices.phase3;
    if (selectedPhases.phase4) total += phasePrices.phase4;
    return total;
  };

  const phases = [
    {
      id: 'phase1',
      num: 'Phase 1',
      title: isKo ? '기획 & 기본 웹 구축' : 'Quy hoạch & Xây dựng Web Cơ bản',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 8000000,
      scope: isKo ? '반응형 웹 플랫폼 및 기본 인프라 구축' : 'Nền tảng Web đáp ứng & Hạ tầng cơ bản',
      features: [
        isKo ? 'UX/UI 전문 기획 및 커스텀 감성 디자인' : 'Thiết kế UX/UI chuyên nghiệp & giao diện tùy chỉnh',
        isKo ? '모바일 최적화 & PWA 기기 호환성' : 'Tối ưu hóa thiết bị di động & tương thích PWA',
        isKo ? '메뉴 DB 구축 (사진 / 가격 / 추천 카테고리)' : 'Xây dựng Cơ sở dữ liệu Thực đơn (Ảnh / Giá / Danh mục)',
        isKo ? 'HOME / MENU / 매장안내 / REVIEW 기본 페이지' : 'Cấu hình trang HOME / MENU / Giới thiệu / REVIEW',
        isKo ? '매장 기본 정보 및 정체성 브랜드 콘텐츠 구성' : 'Cấu hình thông tin cơ bản & nhận diện thương hiệu'
      ],
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      badgeColor: 'bg-blue-500/20 text-cyan-400 border-blue-500/30'
    },
    {
      id: 'phase2',
      num: 'Phase 2',
      title: isKo ? 'CRM & 회원제 고도화' : 'Nâng cấp CRM & Hệ thống Thẻ hội viên',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 35000000,
      scope: isKo ? '멤버십 및 고객 데이터 파이프라인 구축' : 'Đường ống Dữ liệu Khách hàng & Thẻ thành viên',
      features: [
        isKo ? '매장 오픈 알림 & 회원가입 / 소셜 로그인 연동 (Kakao/Google)' : 'Thông báo mở cửa & Đăng ký / Đăng nhập mạng xã hội',
        isKo ? '전화번호 인증 & 기본 쿠폰 자동 발급 시스템' : 'Xác thực SĐT & Phát hành phiếu giảm giá tự động',
        isKo ? '회원 레벨/등급 로직 & 현장 결제 적립 연동' : 'Logic cấp bậc hội viên & Tích điểm thanh toán tại chỗ',
        isKo ? '모바일 바코드 / 포인트 적립 & 고객 프로필 카드' : 'Mã vạch di động / Tích điểm & Thẻ hồ sơ khách hàng',
        isKo ? '방문 횟수 / 선호 메뉴 / 최근 방문일 DB 축적' : 'Tích lũy DB Lượt ghé / Món ăn yêu thích / Lần ghé gần nhất',
        isKo ? '친구 초대 추천인 링크 & 리뷰 보상 포인트' : 'Link giới thiệu bạn bè & Điểm thưởng đánh giá',
        isKo ? '하노이 매거진 콘텐츠 게시판 연동 파이프라인' : 'Liên kết bảng tin bài viết Tạp chí Hà Nội'
      ],
      icon: Database,
      color: 'from-amber-500 to-gold-500',
      badgeColor: 'bg-amber-500/20 text-gold-400 border-amber-500/30'
    },
    {
      id: 'phase3',
      num: 'Phase 3',
      title: isKo ? '자동화 마케팅 & API 연동' : 'Marketing Tự động hóa & Tích hợp API',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 35000000,
      scope: isKo ? '조건별 자동 CRM 및 외부 API 연동' : 'CRM Tự động theo điều kiện & Tích hợp API bên ngoài',
      features: [
        isKo ? '조건별 쿠폰 자동 발송 (생일 / 30일 미방문 웰컴백)' : 'Tự động gửi Voucher (Sinh nhật / 30 ngày chưa quay lại)',
        isKo ? '날씨 API 연동 (우전/폭염 등 날씨 조건별 맞춤 쿠폰)' : 'Tích hợp API Thời tiết (Voucher ngày mưa / nắng nóng)',
        isKo ? '파전/막걸리 등 기상 상황별 타겟 프로모션' : 'Khuyến mãi mục tiêu theo tình hình thời tiết',
        isKo ? '요일별 자동 쿠폰 & Google 리뷰 연동' : 'Phát hành Voucher tự động theo ngày & Đánh giá Google',
        isKo ? '잭팟 이벤트 기능 연동 & Facebook 광고 유입 추적' : 'Tính năng Jackpot sự kiện & Theo dõi quảng cáo Facebook'
      ],
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'bg-emerald-500/20 text-emeraldGreen-400 border-emerald-500/30'
    },
    {
      id: 'phase4',
      num: 'Phase 4',
      title: isKo ? 'AI & 고도화 (선택)' : 'AI & Nâng cao (Tùy chọn)',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 30000000,
      scope: isKo ? 'AI 고객 분석 및 타겟 추천 시스템' : 'Hệ thống Phân tích & Gợi ý Mục tiêu bằng AI',
      features: [
        isKo ? '주문 / 방문 이력 AI 머신러닝 분석' : 'Phân tích lịch sử gọi món / ghé thăm bằng AI Machine Learning',
        isKo ? '고객별 맞춤 메뉴 추천 & 프로모션 AI 매칭' : 'Gợi ý món ăn & Khuyến mãi cá nhân hóa theo AI',
        isKo ? '고객 세그먼트 자동 분류 엔진 (고액 결제 / 단골 / 이탈위험)' : 'Phân loại tự động phân khúc khách hàng (VIP / Thường xuyên / Nguy cơ)',
        isKo ? '관리자 통합 CRM 대시보드 & 시각화 통계 대시보드' : 'Bảng điều khiển CRM quản trị viên & Thống kê trực quan'
      ],
      icon: Bot,
      color: 'from-purple-500 to-indigo-500',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  ];

  const businessEffects = [
    { title: isKo ? '고객 확보' : 'Thu hút Khách hàng', desc: isKo ? '신규 방문 고객의 회원 전환 및 신규고객 DB 확보 (페이스북 유료 광고로 월 100만회 노출)' : 'Chuyển đổi khách mới & Tích lũy DB (Quảng cáo FB 1 triệu lượt hiển thị/tháng)', icon: Users, color: 'text-cyan-400' },
    { title: isKo ? '재방문 증가' : 'Tăng Tỷ lệ Quay lại', desc: isKo ? '쿠폰, 포인트, 등급제, 웰컴백 마케팅을 통한 강력한 재방문 유도' : 'Thúc đẩy quay lại qua Voucher, Điểm thưởng, Cấp bậc, Welcome-back', icon: Repeat, color: 'text-amber-400' },
    { title: isKo ? '매출 증가' : 'Tăng Doanh thu', desc: isKo ? '시간대/요일/날씨별 맞춤 프로모션을 통한 비수기 매출 보완' : 'Bổ sung doanh thu mùa thấp điểm qua khuyến mãi theo giờ/thời tiết', icon: TrendingUp, color: 'text-emeraldGreen-400' },
    { title: isKo ? '고객 데이터화' : 'Dữ liệu hóa Khách hàng', desc: isKo ? '방문횟수, 선호메뉴, 구매이력 등 고객 행동 데이터 축적' : 'Tích lũy dữ liệu hành vi: Lượt ghé, Món thích, Lịch sử mua', icon: Database, color: 'text-blue-400' },
    { title: isKo ? '자동 마케팅' : 'Marketing Tự động', desc: isKo ? '고객 타겟 조건에 따른 쿠폰 및 프로모션 자동 발송' : 'Tự động phát hành Voucher & Khuyến mãi theo điều kiện mục tiêu', icon: Zap, color: 'text-purple-400' },
    { title: isKo ? '바이럴 마케팅' : 'Marketing Lan tỏa', desc: isKo ? 'CF 영상 제작 지원 / 친구 추천 및 리뷰 보상 시스템' : 'Hỗ trợ sản xuất Video CF / Giới thiệu bạn bè & Thưởng Đánh giá', icon: Share2, color: 'text-rose-400' },
    { title: isKo ? '브랜드 강화' : 'Củng cố Thương hiệu', desc: isKo ? '충성 단골 고객 커뮤니티 및 로열티 전용 바코드 구축' : 'Xây dựng cộng đồng khách hàng thân thiết & Mã vạch đặc quyền', icon: Award, color: 'text-gold-400' },
    { title: isKo ? 'AI 활용' : 'Ứng dụng AI', desc: isKo ? '고객별 메뉴 및 프로모션 추천을 통한 초개인화 마케팅' : 'Marketing siêu cá nhân hóa qua gợi ý món & khuyến mãi AI', icon: Bot, color: 'text-cyan-300' },
    { title: isKo ? '운영 효율화' : 'Tối ưu Vận hành', desc: isKo ? '관리자 CRM 대시보드를 통한 고객 및 마케팅 통합 관리' : 'Quản lý tích hợp Khách hàng & Marketing qua Dashboard CRM', icon: BarChart3, color: 'text-indigo-400' },
    { title: isKo ? '확장성' : 'Khả năng Mở rộng', desc: isKo ? '향후 배달 / 예약 / 주문 / 결제 / 다점포 / 제휴매장 모듈 유연 확장' : 'Mở rộng linh hoạt: Giao hàng / Đặt chỗ / Gọi món / Thanh toán / Chuỗi', icon: Layers, color: 'text-emerald-400' }
  ];

  return (
    <div className="pt-6 min-h-screen bg-navy-950 text-slate-100">
      
      {/* 1. Page Header & Hero Section with Image Showcase */}
      <div className="bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 border-b border-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-gold-400">Business Areas</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">BEST winner Digital Agency Vn</span>
          </div>

          {/* Hero Grid: Text Content + Interactive Hero Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 space-y-4">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                <span>BUSINESS DIVISION ⑦ · DIGITAL MARKETING & CRM AGENCY</span>
              </span>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                BEST winner <br className="hidden sm:inline" />
                <span className="gold-gradient-text">Digital Agency</span> Vn
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                {isKo
                  ? '반응형 웹 플랫폼 구축부터 CRM 회원제, 조건별 자동화 마케팅, AI 타겟 추천 시스템 및 페이스북 월 100만 회 노출 유료 광고 대행까지 — 베트남 현지 맞춤형 Full-Stack 디지털 에이전시 솔루션.'
                  : 'Từ xây dựng nền tảng Web đáp ứng, CRM hội viên, Marketing tự động hóa theo điều kiện, gợi ý mục tiêu bằng AI đến quản lý quảng cáo Facebook 1 triệu lượt hiển thị/tháng.'}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#pricing-matrix"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 text-xs font-extrabold flex items-center space-x-2 shadow-lg hover:scale-105 transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{isKo ? '개발 견적 Matrix 보기' : 'Xem Bảng báo giá'}</span>
                </a>
                <Link 
                  to="/business/interior" 
                  className="px-4 py-3 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 text-xs font-bold border border-navy-700 flex items-center space-x-1.5"
                >
                  <span>{isKo ? '인테리어 사업분야' : 'Lĩnh vực Nội thất'}</span>
                  <ChevronRight className="w-4 h-4 text-gold-400" />
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase Viewer */}
            <div className="lg:col-span-6 space-y-3">
              
              {/* Main Featured Image Container */}
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-2xl group">
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <img 
                    src={heroImages[activeImgIndex].src} 
                    alt={heroImages[activeImgIndex].title}
                    className="w-full h-full object-contain bg-navy-950 transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                </div>

                {/* Main Image Overlay Badge & Title */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold-500 text-navy-950 shadow-md">
                      {heroImages[activeImgIndex].badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white drop-shadow-md">
                      {heroImages[activeImgIndex].title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-navy-950/80 px-2.5 py-1 rounded-lg border border-navy-700">
                    {activeImgIndex + 1} / {heroImages.length}
                  </span>
                </div>
              </div>

              {/* Interactive Thumbnail Carousel Bar */}
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`relative rounded-xl overflow-hidden border-2 transition-all aspect-[16/10] bg-navy-900 ${
                      activeImgIndex === idx 
                        ? 'border-gold-400 scale-105 shadow-md shadow-gold-500/20' 
                        : 'border-navy-800 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* 2. Key Highlights Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-navy-900/80 border border-gold-500/20 rounded-2xl p-5 text-center space-y-1 backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-black gold-gradient-text block">108,000,000</span>
            <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">{isKo ? '풀패키지 총 견적 (VND)' : 'Tổng Báo giá Gói (VND)'}</span>
          </div>
          <div className="bg-navy-900/80 border border-cyan-500/20 rounded-2xl p-5 text-center space-y-1 backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-black text-cyan-400 block">4 {isKo ? '주 완성' : 'Tuần'}</span>
            <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">{isKo ? '전 단계 개발 소요 기간' : 'Thời gian phát triển'}</span>
          </div>
          <div className="bg-navy-900/80 border border-emerald-500/20 rounded-2xl p-5 text-center space-y-1 backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-black text-emeraldGreen-400 block">1,000,000+</span>
            <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">{isKo ? '페이스북 월 노출 수 (회)' : 'Hiển thị FB / Tháng'}</span>
          </div>
          <div className="bg-navy-900/80 border border-purple-500/20 rounded-2xl p-5 text-center space-y-1 backdrop-blur-md">
            <span className="text-2xl sm:text-3xl font-black text-purple-300 block">1,500,000</span>
            <span className="text-xs text-slate-400 font-medium block uppercase tracking-wider">{isKo ? '월 유지보수 & CF 제작 (VND/월)' : 'Bảo trì & CF / Tháng'}</span>
          </div>
        </div>
      </div>

      {/* 3. 4-Phase Development & Price Matrix Section */}
      <section id="pricing-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            <Layers className="w-3.5 h-3.5 text-gold-400" />
            <span>DEVELOPMENT PHASES & PRICING MATRIX</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isKo ? '단계별 주요 업무범위 및 개발 세부 구성' : 'Quy trình Phát triển theo Giai đoạn & Chi tiết Báo giá'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {isKo 
              ? '기획부터 CRM 회원제, 자동화 마케팅, AI 타겟 추천까지 맞춤형 단계별 투명 견적표를 확인하세요.' 
              : 'Chi tiết lộ trình phát triển và chi phí từng giai đoạn từ lập kế hoạch đến trí tuệ nhân tạo AI.'}
          </p>
        </div>

        {/* 4 Phase Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {phases.map((ph) => {
            const Icon = ph.icon;
            const isChecked = selectedPhases[ph.id];

            return (
              <div 
                key={ph.id}
                className={`relative rounded-3xl p-6 border transition-all duration-300 bg-gradient-to-b from-navy-900/90 to-navy-950/90 backdrop-blur-xl ${
                  isChecked ? 'border-gold-500/50 shadow-2xl shadow-gold-500/10' : 'border-navy-800 opacity-80'
                }`}
              >
                {/* Top Bar */}
                <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${ph.color} flex items-center justify-center text-navy-950 font-black shadow-md`}>
                      <Icon className="w-5 h-5 text-navy-950" />
                    </div>
                    <div>
                      <span className={`text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full border ${ph.badgeColor}`}>
                        {ph.num} · {ph.period}
                      </span>
                      <h3 className="text-lg font-bold text-white mt-1">{ph.title}</h3>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">{isKo ? '견적 (VAT 별도)' : 'Báo giá (Chưa VAT)'}</span>
                    <span className="text-xl font-black gold-gradient-text">
                      {ph.priceVND.toLocaleString()} <span className="text-xs text-slate-300 font-normal">VND</span>
                    </span>
                  </div>
                </div>

                {/* Scope */}
                <div className="bg-navy-950/80 rounded-xl p-3 border border-navy-800/80 mb-4">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">{isKo ? '주요 업무 범위' : 'Phạm vi công việc chính'}</span>
                  <span className="text-xs font-bold text-gold-400 block mt-0.5">{ph.scope}</span>
                </div>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">{isKo ? '세부 구성 및 개발 항목' : 'Chi tiết các mục phát triển'}</span>
                  <ul className="space-y-2">
                    {ph.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive Selection Checkbox */}
                <button
                  onClick={() => setSelectedPhases(prev => ({ ...prev, [ph.id]: !prev[ph.id] }))}
                  className={`w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all ${
                    isChecked 
                      ? 'bg-gold-500/20 text-gold-400 border border-gold-500/50 hover:bg-gold-500/30' 
                      : 'bg-navy-800 text-slate-400 border border-navy-700 hover:text-white'
                  }`}
                >
                  <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-gold-500 border-gold-500 text-navy-950' : 'border-slate-500'}`}>
                    {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <span>{isChecked ? (isKo ? '견적 계산기에 포함됨' : 'Đã chọn bao gồm trong báo giá') : (isKo ? '견적 선택에 추가하기' : 'Thêm vào báo giá')}</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* 4. Interactive Quotation Summary & Monthly Maintenance Card */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 border-b border-navy-800 pb-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>INTERACTIVE QUOTE ESTIMATOR</span>
              </span>
              <h3 className="text-2xl font-black text-white">
                {isKo ? '선택 패키지 합계 및 월 유지관리 비용' : 'Tổng Báo giá Gói đã chọn & Chi phí Bảo trì'}
              </h3>
              <p className="text-xs text-slate-300">
                {isKo ? '위 4단계 중 원하시는 Phase를 자유롭게 조합하여 견적 합계를 계산해 보세요.' : 'Tùy chỉnh chọn các Giai đoạn trên để tính toán tổng chi phí.'}
              </p>
            </div>

            <div className="text-left lg:text-right bg-navy-950 px-6 py-4 rounded-2xl border border-gold-500/30">
              <span className="text-xs text-slate-400 block uppercase tracking-widest font-bold">{isKo ? '선택 개발 단계 총액 (VAT 별도)' : 'Tổng Chi phí Phát triển (Chưa VAT)'}</span>
              <span className="text-3xl sm:text-4xl font-black gold-gradient-text block mt-1">
                {calculateTotalVND().toLocaleString()} <span className="text-sm text-slate-200 font-bold">VND</span>
              </span>
            </div>
          </div>

          {/* Monthly Maintenance Section */}
          <div className="bg-navy-950/90 rounded-2xl p-5 border border-gold-500/20 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-3">
              <div className="flex items-center space-x-2">
                <Megaphone className="w-5 h-5 text-gold-400" />
                <div>
                  <h4 className="text-sm font-bold text-white">{isKo ? '월 유지관리 & 마케팅 서비스 (월 단위)' : 'Bảo trì Hàng tháng & Dich vụ Marketing'}</h4>
                  <p className="text-xs text-slate-400">{isKo ? '플랫폼 기본 유지보수 + Facebook 마케팅 + 리뷰 관리 + CF 영상 제작 지원' : 'Bảo trì cơ bản + FB Ads + Quản lý Review + Sản xuất Video CF'}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-lg font-black text-cyan-400 block">1,500,000 <span className="text-xs text-slate-400 font-normal">VND / 월</span></span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 text-xs text-slate-300 pt-1">
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0" />
                <span>{isKo ? '보너스 티켓 1,000장 지원' : 'Hỗ trợ 1.000 Vé Bonus'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>{isKo ? 'Facebook 광고 운영/관리 (월 100만 노출)' : 'Quản lý QC Facebook (1tr lượt hiển thị)'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span>{isKo ? 'Google 리뷰 관리 및 활성화' : 'Quản lý & Tối ưu Google Review'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{isKo ? '광고 홍보 영상 월 4회 제작 지원' : 'Sản xuất 4 Video QC Hàng tháng'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{isKo ? '이벤트 및 프로모션 운영 지원' : 'Hỗ trợ vận hành Sự kiện & Khuyến mãi'}</span>
              </div>
              <div className="flex items-center space-x-2 bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{isKo ? '플랫폼 기본 버그 수정 및 유지보수' : 'Bảo trì & Sửa lỗi nền tảng cơ bản'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 10 Business Expected Effects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>10 EXPECTED BUSINESS EFFECTS</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isKo ? '도입 시 10대 기대효과 및 비즈니스 성과' : '10 Hiệu quả Kỳ vọng & Thành quả Kinh doanh'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {isKo 
              ? '단순한 웹 구축을 넘어 신규 고객 확보부터 매출 증대, 단골 커뮤니티 구축까지 입증된 성과 모델.' 
              : 'Vượt xa việc xây dựng Web thông thường, nâng tầm thu hút khách hàng và gia tăng doanh thu vượt trội.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessEffects.map((ef, idx) => {
            const Icon = ef.icon;
            return (
              <div 
                key={idx}
                className="bg-navy-900/70 border border-navy-800 hover:border-gold-500/40 rounded-2xl p-5 space-y-3 transition-all duration-300 hover:bg-navy-900 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${ef.color}`} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">EFFECT 0{idx + 1}</span>
                    <h3 className="text-base font-bold text-white">{ef.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1 border-l-2 border-navy-700">
                  {ef.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Contact Us Form Section */}
      <ContactUs t={t} />
    </div>
  );
}
