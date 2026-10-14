import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Ticket, 
  ExternalLink, 
  Sparkles, 
  Gift, 
  Tag, 
  CheckCircle, 
  RefreshCw, 
  ArrowRight, 
  ShieldCheck, 
  Filter, 
  Store,
  Layers,
  Award
} from 'lucide-react';
import { MERCHANT_CONFIG } from '../config/merchant';

export default function EventsPage({ t, user, onOpenGoogleAuth }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  // Filter mode: 'all' or 'merchant' (베스트위너 전용)
  const [filterMode, setFilterMode] = useState('all');
  const [iframeKey, setIframeKey] = useState(0);

  const getEventsIframeUrl = () => {
    if (filterMode === 'merchant') {
      return `${MERCHANT_CONFIG.eventsUrl}?merchant=${MERCHANT_CONFIG.merchantId}`;
    }
    return MERCHANT_CONFIG.eventsUrl;
  };

  const handleRefreshIframe = () => {
    setIframeKey(prev => prev + 1);
  };

  const benefitCards = [
    {
      icon: Ticket,
      title: isVi ? 'Phiếu giảm giá độc quyền' : isKo ? '가맹점 특별 할인 쿠폰' : 'Exclusive Discount Coupons',
      desc: isVi 
        ? 'Giảm giá trực tiếp từ 5% ~ 20% khi sử dụng dịch vụ thang máy, nội thất, PCCC & chống thấm.'
        : isKo 
        ? '베스트위너 승강기, 맞춤 인테리어, 방수 시공 및 스마트파킹 현장 결제 시 최대 5%~20% 즉시 할인.'
        : 'Save 5% to 20% on Best Winner construction, interior, and elevator services.'
    },
    {
      icon: Gift,
      title: isVi ? 'Voucher đổi quà & Dịch vụ' : isKo ? '스페셜 교환 바우쳐' : 'Special Exchange Vouchers',
      desc: isVi
        ? 'Mua voucher bằng BM hoặc nhận miễn phí để đổi quà tặng và dịch vụ trải nghiệm cao cấp.'
        : isKo
        ? 'BM으로 실속 있게 교환 바우쳐를 구매하거나 무료로 발급받아 공식 매장에서 간편 사용.'
        : 'Exchange vouchers for services and products using BM points or free issue.'
    },
    {
      icon: Sparkles,
      title: isVi ? 'Tặng 1 Vé Thưởng (BT) mỗi 100K VND' : isKo ? '10만 동당 1 BT 적립' : '1 BT per 100,000 VND',
      desc: isVi
        ? 'Thanh toán các dịch vụ và voucher bằng BM để nhận thêm Vé Thưởng (BT) quay số trúng thưởng lớn.'
        : isKo
        ? '이벤트 바우쳐 및 서비스 BM 결제 시 100,000 VND당 1 BT가 자동 지급되어 룰렛 추첨에 참여 가능.'
        : 'Earn 1 Bonus Ticket for every 100,000 VND spent with BM for lucky wheel spins.'
    },
    {
      icon: ShieldCheck,
      title: isVi ? 'Xác thực QR Mã số tức thì' : isKo ? '원클릭 QR 현장 검증' : 'Instant QR Verification',
      desc: isVi
        ? 'Voucher đã nhận được lưu trữ an toàn trong MyPage và có thể quét mã QR tại chỗ để sử dụng.'
        : isKo
        ? '발급받은 쿠폰과 바우쳐는 마이페이지에 안전 보관되며 매장 현장에서 QR 코드로 1초 검증.'
        : 'Coupons stored in MyPage wallet with 1-second on-site QR code validation.'
    }
  ];

  return (
    <div className="pt-6 min-h-screen pb-20">
      
      {/* 1. Page Header & Submenu Navigation */}
      <div className="bg-navy-900 border-b border-navy-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          {/* Breadcrumbs */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <span className="text-cyan-400 font-semibold">{isVi ? 'Dịch vụ' : isKo ? '서비스' : 'Services'}</span>
            <span>/</span>
            <span className="text-amber-400 font-bold">{isVi ? 'Sự kiện & Voucher' : isKo ? '이벤트 (쿠폰·바우쳐)' : 'Events & Vouchers'}</span>
          </div>

          {/* Submenu Tabs (AI 경영관리 | 판매제품 | 이벤트 | BEST 매거진) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-b border-navy-800">
            <Link
              to="/services/ai-management"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-cyan-400 hover:bg-navy-800 whitespace-nowrap"
            >
              🤖 {isVi ? 'Quản lý AI (AI Management)' : isKo ? 'AI경영관리 (AI Management)' : 'AI Management'}
            </Link>
            <Link
              to="/services/products"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-gold-400 hover:bg-navy-800 whitespace-nowrap"
            >
              🛒 {isVi ? 'Sản phẩm bán (BEST Mall)' : isKo ? '판매제품 (BEST Mall)' : 'Products (BEST Mall)'}
            </Link>
            <Link
              to="/services/events"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-amber-500/20 to-orange-500/20 text-amber-300 border border-amber-500/40 shadow-sm whitespace-nowrap"
            >
              🎟️ {isVi ? 'Sự kiện & Voucher (BestClub)' : isKo ? '이벤트 (쿠폰·바우쳐)' : 'Events & Vouchers'}
            </Link>
            <Link
              to="/megazine"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-gold-400 hover:bg-navy-800 whitespace-nowrap"
            >
              📰 {isVi ? 'BEST MEGAZINE (Tạp chí AI)' : isKo ? 'BEST MEGAZINE (AI 매거진)' : 'BEST MEGAZINE'}
            </Link>
          </div>

          {/* Title & Actions */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pt-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-amber-300 uppercase tracking-widest bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30">
                  <Ticket className="w-3.5 h-3.5 mr-1" />
                  <span>BESTCLUB EVENT &amp; VOUCHER SYSTEM</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  <span>Realtime BestClub Central Integration</span>
                </span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                BEST WINNER {isVi ? 'SỰ KIỆN KHUYẾN MÃI & VOUCHER' : isKo ? '이벤트 쿠폰·바우쳐 라운지' : 'EVENT & VOUCHER LOUNGE'}
              </h1>
              
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {isVi
                  ? 'Khám phá các phiếu giảm giá đặc biệt và voucher dịch vụ chính hãng từ BestClub. Phát hành miễn phí hoặc thanh toán BM để nhận 1 BT cho mỗi 100,000 VND.'
                  : isKo
                  ? '공식 가맹점의 특별 할인 쿠폰과 실물 교환 바우쳐를 BM으로 구매하거나 무료로 발급받고 온·오프라인 매장에서 실속 있게 사용하세요.'
                  : 'Discover exclusive merchant discount coupons and service vouchers. Claim free or purchase with BM points.'}
              </p>
            </div>

            {/* Quick Link Buttons */}
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href={MERCHANT_CONFIG.eventsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-950 font-black text-xs sm:text-sm px-4 py-2.5 rounded-xl shadow-lg transition-all flex items-center hover:scale-[1.02]"
              >
                <span>{isVi ? 'Mở BestClub Events' : isKo ? '🚀 BestClub 이벤트 새 창 열기' : 'Launch BestClub Events'}</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>

              <a
                href="https://bestclubvn.netlify.app/mypage#couponsSection"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-xl transition-colors flex items-center"
              >
                <span>{isVi ? 'Ví Voucher của tôi' : isKo ? '📦 내 보유 쿠폰 확인' : 'My Coupons'}</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-400" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* 2. 4대 핵심 혜택 안내 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {benefitCards.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div 
                key={idx} 
                className="bg-navy-900/90 border border-navy-800 hover:border-amber-500/30 rounded-2xl p-5 space-y-2.5 transition-all hover:shadow-lg"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-white">{b.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.desc}</p>
              </div>
            );
          })}
        </div>

        {/* 3. Live BestClub Events Embed Section with Controls */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-4 sm:p-6 shadow-2xl space-y-4">
          
          {/* Toolbar & Filter Switch */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3 pb-3 border-b border-navy-800">
            <div className="flex items-center space-x-2">
              <span className="text-xs font-bold text-slate-300 flex items-center">
                <Filter className="w-3.5 h-3.5 text-amber-400 mr-1.5" />
                {isVi ? 'Chế độ hiển thị:' : isKo ? '이벤트 표시 필터:' : 'Filter View:'}
              </span>
              
              <div className="flex bg-navy-950 p-1 rounded-xl border border-navy-800">
                <button
                  type="button"
                  onClick={() => setFilterMode('all')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                    filterMode === 'all'
                      ? 'bg-amber-500 text-navy-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5 mr-1" />
                  <span>{isVi ? 'Tất cả 가맹점' : isKo ? '전체 가맹점 이벤트' : 'All Merchants'}</span>
                </button>
                
                <button
                  type="button"
                  onClick={() => setFilterMode('merchant')}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center space-x-1 ${
                    filterMode === 'merchant'
                      ? 'bg-amber-500 text-navy-950 shadow-sm'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Store className="w-3.5 h-3.5 mr-1" />
                  <span>{isVi ? 'BEST WINNER' : isKo ? '베스트위너 전용' : 'BEST WINNER Only'}</span>
                </button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleRefreshIframe}
                title="새로고침"
                className="p-2 rounded-xl bg-navy-950 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-800 text-xs flex items-center"
              >
                <RefreshCw className="w-3.5 h-3.5 mr-1" />
                <span>{isVi ? 'Làm mới' : isKo ? '새로고침' : 'Refresh'}</span>
              </button>
              
              <a
                href={getEventsIframeUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-navy-950 text-amber-400 hover:text-amber-300 hover:bg-navy-800 border border-navy-800 text-xs flex items-center"
              >
                <ExternalLink className="w-3.5 h-3.5 mr-1" />
                <span>{isVi ? 'Toàn màn hình' : isKo ? '새 창으로 보기' : 'Open Full'}</span>
              </a>
            </div>
          </div>

          {/* Responsive Embedded Iframe */}
          <div className="relative w-full h-[760px] sm:h-[840px] rounded-2xl overflow-hidden border border-navy-800 bg-white shadow-2xl">
            <iframe
              key={iframeKey}
              src={getEventsIframeUrl()}
              title="BestClub Events & Vouchers"
              className="w-full h-full border-0"
              allow="camera; microphone; clipboard-write; geolocation"
              loading="lazy"
            />
          </div>

          {/* Embed Footer Info */}
          <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-slate-400 gap-2 pt-2 px-1">
            <div className="flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>
                연동 대상: <strong>https://bestclubvn.netlify.app/events</strong> (BestClub 중앙 시스템 실시간 연결)
              </span>
            </div>
            <span>
              BestClub 통합 로그인 계정으로 발급받은 쿠폰은 모든 패밀리 가맹점 온·오프라인 매장에서 공통 사용 가능합니다.
            </span>
          </div>

        </div>

      </div>

    </div>
  );
}
