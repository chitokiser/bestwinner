import React from 'react';
import { Link } from 'react-router-dom';
import {
  Home,
  ShieldCheck,
  Tag,
  QrCode,
  Crown,
  Coins,
  Ticket,
  ExternalLink,
  Lock,
  Sparkles,
  Zap,
  Gift
} from 'lucide-react';

const MERCHANT_CONFIG = {
  merchantId: "1791605366",
  brandName: "BEST WINNER",
  ceoEmail: "hexttokenopbnb@gmail.com",
  eventsUrl: "https://bestclubvn.netlify.app/events",
  myPageUrl: "https://bestclubvn.netlify.app/mypage#couponsSection"
};

/**
 * BEST WINNER Events & Vouchers Hero Section
 * Modern, high-converting E-Commerce & Loyalty Rewards Hero component.
 * Created via hero-banner skill for https://bestwinnervn.com/services/events
 */
export default function EventsHero({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || !t?.lang;

  return (
    <div className="relative pt-8 pb-16 overflow-hidden bg-[#070B19]">
      {/* Festive Radial Backlight Glows */}
      <div 
        className="absolute -top-36 -left-36 w-[620px] h-[620px] rounded-full pointer-events-none blur-3xl opacity-60"
        style={{ background: 'radial-gradient(circle, rgba(245, 158, 11, 0.28) 0%, transparent 70%)' }}
      />
      <div 
        className="absolute top-1/4 -right-36 w-[580px] h-[580px] rounded-full pointer-events-none blur-3xl opacity-50"
        style={{ background: 'radial-gradient(circle, rgba(147, 51, 234, 0.25) 0%, transparent 70%)' }}
      />

      {/* Grid Mesh Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          backgroundImage: 'radial-gradient(rgba(245, 158, 11, 0.15) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Breadcrumb & Service Tab Navigation */}
        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <Home className="w-3.5 h-3.5" />
              <span>{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</span>
            </Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{isVi ? 'Dịch vụ' : isKo ? '서비스' : 'Services'}</span>
            <span>/</span>
            <span className="text-amber-400 font-bold">{isVi ? 'Sự kiện & Voucher' : isKo ? '이벤트 (쿠폰·바우쳐)' : 'Events & Vouchers'}</span>
          </div>

          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-b border-white/5">
            <Link 
              to="/services/ai-management" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-cyan-400 hover:bg-navy-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🤖</span>
              <span>{isVi ? 'Quản lý AI (AI Management)' : isKo ? 'AI경영관리 (AI Management)' : 'AI Management'}</span>
            </Link>
            <Link 
              to="/services/products" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-gold-400 hover:bg-navy-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🛒</span>
              <span>{isVi ? 'Sản phẩm bán (BEST Mall)' : isKo ? '판매제품 (BEST Mall)' : 'Products (BEST Mall)'}</span>
            </Link>
            <Link 
              to="/services/events" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 shadow-lg shadow-amber-500/10 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>🎟️</span>
              <span>{isVi ? 'Sự kiện & Voucher (BestClub)' : isKo ? '이벤트 & 바우쳐 (BestClub)' : 'Events & Vouchers'}</span>
            </Link>
            <Link 
              to="/megazine" 
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all text-slate-300 hover:text-gold-400 hover:bg-navy-900 whitespace-nowrap flex items-center gap-1.5"
            >
              <span>📰</span>
              <span>{isVi ? 'BEST MEGAZINE (Tạp chí AI)' : isKo ? 'BEST MEGAZINE (AI 매거진)' : 'BEST MEGAZINE'}</span>
            </Link>
          </div>
        </div>

        {/* Hero Split Layout: Left Content + Right 3D VIP Voucher Pass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center pt-2">
          
          {/* Left Column: Heading, Value Prop, Badges, CTAs */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Tenant Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-500/35 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span className="text-[11px] font-black uppercase tracking-wider text-amber-300">
                  BEST WINNER EXCLUSIVE VOUCHER PASS
                </span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-semibold text-emerald-400">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>
                  {isVi 
                    ? `Hệ thống độc lập (ID: ${MERCHANT_CONFIG.merchantId})` 
                    : isKo 
                    ? `단독 테넌트 격리 (ID: ${MERCHANT_CONFIG.merchantId})` 
                    : `Tenant Isolated (ID: ${MERCHANT_CONFIG.merchantId})`}
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
                BEST WINNER 공식 가맹점 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-orange-500">
                  {isVi ? 'VOUCHER & PHIẾU GIẢM GIÁ' : isKo ? '전용 할인 쿠폰 & VIP 바우처' : 'EXCLUSIVE VOUCHERS'}
                </span>
              </h1>
            </div>

            {/* Value Proposition Description */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl">
              {isVi
                ? `Chỉ hiển thị các phiếu giảm giá và voucher do Giám đốc BEST WINNER (${MERCHANT_CONFIG.ceoEmail}) trực tiếp phát hành. Không hiển thị cửa hàng khác. Tích hợp mã QR đổi quà tức thì và chính sách hoàn điểm thưởng BestClub BM/BT.`
                : isKo
                ? `베스트위너 대표 계정(${MERCHANT_CONFIG.ceoEmail})이 직접 인증·발행한 공식 할인권과 교환 바우처만 선별 제공합니다. 온·오프라인 매장에서 즉시 사용 가능한 모바일 QR 티켓과 BestClub BM/BT 리워드 적립 혜택을 즉시 누려보세요.`
                : `Official discount coupons and exchange vouchers authenticated directly by BEST WINNER CEO (${MERCHANT_CONFIG.ceoEmail}). Enjoy instant mobile QR code redemption with BestClub BM/BT reward cashback.`}
            </p>

            {/* 4 Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 shrink-0">
                  <Tag className="w-3.5 h-3.5" />
                </div>
                <span>{isVi ? 'Phiếu giảm giá 10% toàn bộ sản phẩm' : isKo ? '전 상품 10% 즉시 할인권 (10,000 BM)' : '10% Sitewide Discount Voucher'}</span>
              </div>
              
              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 shrink-0">
                  <QrCode className="w-3.5 h-3.5" />
                </div>
                <span>{isVi ? 'Đổi mã QR di động ngay tại cửa hàng' : isKo ? '마이페이지 QR 온·오프라인 즉시 교환' : 'Instant Mobile QR Code Scan'}</span>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
                  <Crown className="w-3.5 h-3.5" />
                </div>
                <span>{isVi ? 'Voucher chính hãng 100% từ CEO' : isKo ? 'CEO 직접 승인 100% 정품 바우처' : '100% CEO-Certified Authentic'}</span>
              </div>

              <div className="flex items-center space-x-2.5 text-xs text-slate-200 bg-white/[0.03] p-2.5 rounded-xl border border-white/5">
                <div className="w-6 h-6 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 shrink-0">
                  <Coins className="w-3.5 h-3.5" />
                </div>
                <span>{isVi ? 'Tự động tích lũy điểm thưởng BT' : isKo ? '구매 시 BT 자동 적립 & 리워드 페이백' : 'Automated BT Rewards Cashback'}</span>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="pt-3 flex flex-wrap gap-3.5 items-center">
              {/* Primary CTA */}
              <a 
                href={MERCHANT_CONFIG.myPageUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-950 font-black text-xs sm:text-sm shadow-xl shadow-amber-500/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] border border-amber-300/40"
              >
                <Ticket className="w-4 h-4 text-navy-950" />
                <span>{isVi ? '📦 Xem Ví Voucher của tôi' : isKo ? '📦 내 보유 쿠폰·바우처 확인 (마이페이지)' : 'My Voucher Wallet'}</span>
                <ExternalLink className="w-4 h-4 text-navy-950 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              {/* Secondary CTA */}
              <a 
                href={MERCHANT_CONFIG.eventsUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-purple-900/80 to-indigo-950/80 hover:from-purple-800 hover:to-indigo-900 text-purple-200 hover:text-white font-bold text-xs sm:text-sm border border-purple-500/40 transition-all duration-300 hover:scale-[1.02]"
              >
                <Crown className="w-4 h-4 text-purple-400" />
                <span>{isVi ? '👑 Quản trị phát hành BestClub' : isKo ? '👑 CEO 쿠폰 발행 센터 (BestClub)' : 'BestClub Event Admin'}</span>
                <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
              </a>
            </div>

            {/* Tenant Privacy Note */}
            <div className="pt-1 flex items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Lock className="w-3.5 h-3.5" />
                <span>{isVi ? 'Bảo mật Tenant riêng biệt' : isKo ? '타 가맹점 데이터 완전 차단·격리' : 'Strict Tenant Isolation'}</span>
              </span>
              <span className="text-slate-600">•</span>
              <span className="truncate">
                {isVi ? 'Tách biệt hoàn toàn với các thương hiệu khác' : isKo ? '백제갈비·대한김치와 분리된 단독 가맹점 혜택' : 'Isolated from 3rd party merchants'}
              </span>
            </div>

          </div>

          {/* Right Column: 3D Holographic VIP Voucher Ticket */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Backlight */}
            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-orange-500/20 to-purple-600/30 rounded-3xl blur-2xl opacity-60 -z-10" />

            {/* Holographic Pass Box */}
            <div className="bg-navy-900/85 backdrop-blur-xl border border-amber-500/35 rounded-3xl p-6 shadow-2xl relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-navy-950 font-black shadow-md">
                    BW
                  </div>
                  <div>
                    <div className="text-xs font-black text-white tracking-wide">BEST WINNER</div>
                    <div className="text-[10px] text-amber-300 font-mono">OFFICIAL VIP VOUCHER</div>
                  </div>
                </div>
                <div className="px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-[10px] font-black text-amber-300">
                  10% OFF PASS
                </div>
              </div>

              {/* Ticket Body with Notches */}
              <div className="relative bg-navy-950/90 rounded-2xl p-5 border border-amber-500/20 mb-4">
                <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#070B19] border-r border-amber-500/30" />
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-[#070B19] border-l border-amber-500/30" />

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-[11px] font-bold text-amber-400 uppercase tracking-widest">
                      {isVi ? 'Giảm giá tức thì' : isKo ? '전 품목 즉시 할인' : 'Sitewide Discount'}
                    </span>
                    <div className="text-4xl font-black text-white tracking-tight mt-0.5">
                      10% <span className="text-amber-400 text-2xl font-black">DISCOUNT</span>
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">
                      {isVi ? 'Áp dụng cho mọi sản phẩm chính hãng' : isKo ? '베스트위너 공식 가맹점 전 상품 적용' : 'Valid on all official items'}
                    </div>
                  </div>
                  
                  {/* QR Box */}
                  <div className="bg-white p-2 rounded-xl shrink-0 shadow-lg flex flex-col items-center">
                    <QrCode className="w-12 h-12 text-navy-950" />
                    <span className="text-[8px] font-mono text-navy-900 font-bold mt-0.5">SCAN QR</span>
                  </div>
                </div>

                {/* Price & Quantity Bar */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1.5 text-amber-300 font-mono font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>10,000 BM</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium">
                    <span>{isVi ? 'Còn lại:' : isKo ? '잔여 수량:' : 'Remaining:'}</span>{' '}
                    <strong className="text-emerald-400 font-mono">184</strong> / 200
                  </div>
                </div>
              </div>

              {/* Barcode & Security Strip */}
              <div className="space-y-3 pt-1">
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Pass ID: #BW-CPN-10PCT</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    READY TO USE
                  </span>
                </div>

                <div className="bg-navy-950 p-2.5 rounded-xl border border-white/5 flex flex-col items-center">
                  <div className="h-6 w-full flex items-center justify-center space-x-1 opacity-70">
                    <span className="w-1 h-full bg-slate-300"></span>
                    <span className="w-0.5 h-full bg-slate-400"></span>
                    <span className="w-1.5 h-full bg-slate-200"></span>
                    <span className="w-0.5 h-full bg-slate-500"></span>
                    <span className="w-2 h-full bg-slate-300"></span>
                    <span className="w-1 h-full bg-slate-400"></span>
                    <span className="w-0.5 h-full bg-slate-300"></span>
                    <span className="w-1.5 h-full bg-slate-200"></span>
                    <span className="w-1 h-full bg-slate-400"></span>
                    <span className="w-0.5 h-full bg-slate-300"></span>
                    <span className="w-2 h-full bg-slate-200"></span>
                    <span className="w-1 h-full bg-slate-400"></span>
                    <span className="w-1.5 h-full bg-slate-300"></span>
                  </div>
                  <span className="text-[9px] font-mono text-slate-500 tracking-[0.25em] mt-1">1791605366-BESTWINNER-VIP</span>
                </div>
              </div>

            </div>

            {/* Floating Top Badge */}
            <div className="absolute -top-3 -right-3 bg-navy-900/95 border border-amber-400/40 rounded-2xl px-3.5 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2">
              <span className="text-base">💎</span>
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold">{isVi ? 'Hoàn điểm BestClub' : isKo ? '포인트 자동 환급' : 'Loyalty Points'}</div>
                <div className="text-xs font-black text-amber-300">+10% BT Cashback</div>
              </div>
            </div>

            {/* Floating Bottom Badge */}
            <div className="absolute -bottom-3 -left-3 bg-navy-900/95 border border-emerald-400/40 rounded-2xl px-3.5 py-2 shadow-xl backdrop-blur-md hidden sm:flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <div className="text-left">
                <div className="text-[10px] text-slate-400 font-semibold">{isVi ? 'Voucher chính hãng' : isKo ? '가맹점 공식 등록' : 'Official Issuer'}</div>
                <div className="text-xs font-black text-emerald-300">{isVi ? '100% Chính Hãng' : isKo ? '100% 정품 보증' : '100% Authentic'}</div>
              </div>
            </div>

          </div>

        </div>

        {/* Bottom 4-Column KPI Stats Strip */}
        <div className="pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            
            <div className="bg-navy-900/70 border border-white/5 hover:border-amber-400/50 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-amber-400 uppercase tracking-wider">
                  {isVi ? 'Tỷ lệ chính hãng' : isKo ? '정품 보증률' : 'Authenticity'}
                </span>
                <ShieldCheck className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-white tracking-tight">100%</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Xác thực trực tiếp bởi Giám đốc' : isKo ? '가맹점 대표 직접 인증 정식 바우처' : 'Directly certified by CEO'}
              </p>
            </div>

            <div className="bg-navy-900/70 border border-white/5 hover:border-emerald-400/50 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-emerald-400 uppercase tracking-wider">
                  {isVi ? 'Đổi mã QR di động' : isKo ? '모바일 QR 교환' : 'QR Redeem'}
                </span>
                <Zap className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-emerald-300 tracking-tight">&lt; 10초</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Quét mã sử dụng tại chỗ nhanh chóng' : isKo ? '온·오프라인 매장 현장 즉시 스캔' : 'Instant on-site scan & redeem'}
              </p>
            </div>

            <div className="bg-navy-900/70 border border-white/5 hover:border-purple-400/50 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-purple-400 uppercase tracking-wider">
                  {isVi ? 'Thưởng BM/BT' : isKo ? 'BM/BT 리워드' : 'Rewards'}
                </span>
                <Gift className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-2xl sm:text-4xl font-black text-purple-300 tracking-tight">+10%</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Tự động tích điểm BestClub khi thanh toán' : isKo ? '결제 시 BestClub 포인트 자동 환급' : 'BestClub loyalty payback'}
              </p>
            </div>

            <div className="bg-navy-900/70 border border-white/5 hover:border-cyan-400/50 rounded-2xl p-4 sm:p-5 transition-all duration-300">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[11px] sm:text-xs font-bold text-cyan-400 uppercase tracking-wider">
                  {isVi ? 'Bảo mật Tenant' : isKo ? '테넌트 데이터 보안' : 'Tenant Security'}
                </span>
                <Lock className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-xl sm:text-2xl font-black text-cyan-300 tracking-tight font-mono">{MERCHANT_CONFIG.merchantId}</div>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-1.5 leading-relaxed">
                {isVi ? 'Hệ thống độc lập tách biệt hoàn toàn' : isKo ? '타 가맹점 간섭 없는 완전 독립 격리' : 'Strict tenant data isolation'}
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
