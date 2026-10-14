import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Sparkles, 
  Ticket, 
  Gift, 
  ShieldCheck, 
  Layers, 
  ArrowRight,
  Zap,
  Play,
  Pause
} from 'lucide-react';
import { MERCHANT_CONFIG } from '../../config/merchant';

export default function EventCardNewsSection({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  const cardNewsSlides = [
    {
      id: 1,
      badge: isVi ? 'SỰ KIỆN HOT' : isKo ? '🔥 공식 오픈' : 'HOT EVENT',
      tag: 'BestClub Events',
      title: isVi 
        ? 'Khai trương Sảnh Voucher & Phiếu Giảm Giá BestClub Chính Thức'
        : isKo 
        ? 'BestClub 이벤트 쿠폰 & 바우쳐 라운지 공식 오픈!'
        : 'BestClub Event & Voucher Lounge Officially Open!',
      subtitle: isVi
        ? 'Giảm giá tới 20% và tặng voucher đổi quà độc quyền tại BEST WINNER & các cửa hàng thành viên.'
        : isKo
        ? '베스트위너 인테리어·승강기·방수 시공 및 제휴 매장 최대 20% 할인 쿠폰 & 스페셜 바우쳐 대방출!'
        : 'Exclusive merchant coupons & exchange vouchers up to 20% discount!',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
      actionText: isVi ? 'Khám phá sự kiện' : isKo ? '이벤트 라운지 바로가기' : 'Explore Events',
      url: 'https://bestclubvn.netlify.app/events'
    },
    {
      id: 2,
      badge: isVi ? '100% MIỄN PHÍ' : isKo ? '🎁 무료 발급' : 'FREE EVENT',
      tag: 'Free Coupon',
      title: isVi
        ? 'Nhận Phiếu Giảm Giá 1 Giây Miễn Phí Dành Cho Thành Viên'
        : isKo
        ? '회원 누구나 클릭 1번에 무료 발급! 원클릭 이벤트 쿠폰'
        : '1-Click Free Issue Event Coupons for All Members',
      subtitle: isVi
        ? 'Không cần thủ tục phức tạp, lưu ngay vào MyPage và quét mã QR tại quầy để sử dụng ngay lập tức.'
        : isKo
        ? '복잡한 절차 없이 발급 즉시 마이페이지 보관! 매장 방문 결제 시 QR 코드로 1초 현장 인증.'
        : 'Claim instantly to your MyPage wallet and redeem on-site via instant QR scan.',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
      actionText: isVi ? 'Nhận phiếu ngay' : isKo ? '무료 쿠폰 받으러 가기' : 'Claim Free Coupon',
      url: 'https://bestclubvn.netlify.app/events'
    },
    {
      id: 3,
      badge: isVi ? 'CASHBACK & VÉ THƯỞNG' : isKo ? '💎 특급 리워드' : 'BM REWARD',
      tag: '5% Cashback + 1 BT',
      title: isVi
        ? 'Thanh toán BM nhận ngay 5% Cashback & 1 Vé Thưởng mỗi 100K VND'
        : isKo
        ? 'BM 결제 시 5% 캐시백 & 100,000 VND당 1 BT (보너스티켓) 적립'
        : '5% Cashback & 1 Bonus Ticket (BT) per 100,000 VND with BM',
      subtitle: isVi
        ? 'Tích lũy vé thưởng không giới hạn để tham gia Vòng quay may mắn trúng thưởng cực lớn từ BestClub.'
        : isKo
        ? '바우쳐 구매 및 서비스 BM 결제 시 보너스 티켓 무제한 적립! 룰렛 추첨 기회를 놓치지 마세요.'
        : 'Earn unlimited bonus tickets for the BestClub lucky roulette draw.',
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
      actionText: isVi ? 'Xem thể lệ & BM' : isKo ? '리워드 혜택 보기' : 'View Rewards',
      url: 'https://bestclubvn.netlify.app/events'
    },
    {
      id: 4,
      badge: isVi ? 'HỆ SINH THÁI BEST' : isKo ? '🏬 가맹점 제휴' : 'ECOSYSTEM',
      tag: 'BEST WINNER Store',
      title: isVi
        ? 'Hệ Sinh Thái Dịch vụ Xây dựng, Nội thất & Ẩm thực Hàn Quốc'
        : isKo
        ? '베스트위너 & 하노이 주요 제휴 가맹점 통합 쿠폰 연동'
        : 'BEST WINNER & Expat Merchant Integrated Voucher Network',
      subtitle: isVi
        ? 'Áp dụng cho dịch vụ Thang máy, Nội thất may đo, Chống thấm K1 đến ẩm thực Daehan Kimchi, Baekje Galbi.'
        : isKo
        ? '승강기, 맞춤 인테리어, K1 방수제부터 대한김치, 백제갈비 등 하노이 최고 인기 가맹점까지 One-Stop 연계.'
        : 'Valid for Elevators, Interior design, K1 waterproofing, and top Korean restaurants.',
      image: 'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
      actionText: isVi ? 'Xem sản phẩm 가맹점' : isKo ? '베스트위너 상품 보기' : 'View Products',
      url: '#/services/products'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide(prev => (prev + 1) % cardNewsSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, cardNewsSlides.length]);

  const activeSlide = cardNewsSlides[currentSlide];

  return (
    <div className="w-full space-y-3">
      
      {/* Header bar of the Card News Section */}
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center space-x-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping"></span>
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 flex items-center">
            <Ticket className="w-4 h-4 mr-1.5" />
            {isVi ? 'BEST MEGAZINE THÔNG TIN SỰ KIỆN ĐẶC BIỆT' : isKo ? 'BEST 매거진 특별 카드뉴스' : 'SPECIAL CARD NEWS'}
          </span>
        </div>

        <div className="flex items-center space-x-2">
          <a
            href="https://bestclubvn.netlify.app/events"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold text-amber-300 hover:text-white flex items-center transition-colors"
          >
            <span>{isVi ? 'Xem tất cả sự kiện' : isKo ? '전체 이벤트 라운지 가기' : 'All Events'}</span>
            <ExternalLink className="w-3.5 h-3.5 ml-1" />
          </a>
        </div>
      </div>

      {/* Main Card News Interactive Banner */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-amber-500/40 bg-navy-950 shadow-2xl min-h-[300px] sm:min-h-[360px] flex flex-col justify-end group">
        
        {/* Background Image with Cinematic Dark Gradient */}
        <div className="absolute inset-0 z-0">
          <img 
            src={activeSlide.image} 
            alt={activeSlide.title}
            className="w-full h-full object-cover transition-all duration-700 ease-out transform group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/75 to-navy-950/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/40 to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 p-6 sm:p-8 space-y-3 max-w-3xl">
          
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-amber-500 text-navy-950 font-black text-xs uppercase tracking-wider shadow-lg flex items-center">
              <Sparkles className="w-3 h-3 mr-1" />
              {activeSlide.badge}
            </span>
            <span className="px-3 py-1 rounded-full bg-navy-900/80 border border-amber-500/40 text-amber-300 font-bold text-xs backdrop-blur-md">
              {activeSlide.tag}
            </span>
            <span className="text-[11px] text-slate-400 font-mono ml-auto">
              CARD {currentSlide + 1} / {cardNewsSlides.length}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-white leading-tight tracking-tight drop-shadow-md">
            {activeSlide.title}
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed drop-shadow">
            {activeSlide.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            {activeSlide.url.startsWith('http') ? (
              <a
                href={activeSlide.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center hover:scale-105"
              >
                <span>{activeSlide.actionText}</span>
                <ExternalLink className="w-4 h-4 ml-1.5" />
              </a>
            ) : (
              <Link
                to="/services/products"
                className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-navy-950 font-black text-xs sm:text-sm px-5 py-2.5 rounded-xl shadow-lg transition-all flex items-center hover:scale-105"
              >
                <span>{activeSlide.actionText}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            )}

            <Link
              to="/services/events"
              className="bg-navy-900/90 hover:bg-navy-800 text-slate-200 border border-navy-700 font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all flex items-center backdrop-blur-md"
            >
              <span>{isVi ? 'Xem tại Web Best Winner' : isKo ? '웹 내 이벤트 라운지 보기' : 'In-App Lounge'}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 text-slate-400" />
            </Link>
          </div>

        </div>

        {/* Bottom Carousel Navigation Controls */}
        <div className="relative z-10 px-6 sm:px-8 pb-4 flex items-center justify-between border-t border-navy-800/80 pt-3">
          
          {/* Slide Indicator Dots */}
          <div className="flex items-center space-x-2">
            {cardNewsSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentSlide === idx 
                    ? 'w-8 bg-amber-400 shadow-md' 
                    : 'w-2 bg-navy-700 hover:bg-slate-500'
                }`}
                title={`슬라이드 ${idx + 1}`}
              />
            ))}
          </div>

          {/* Controls: Prev, Next, Play/Pause */}
          <div className="flex items-center space-x-1.5">
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-1.5 rounded-lg bg-navy-900/80 border border-navy-700 text-slate-300 hover:text-white"
              title={isPlaying ? '일시정지' : '자동재생'}
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5 text-amber-400" /> : <Play className="w-3.5 h-3.5 text-emerald-400" />}
            </button>
            <button
              onClick={() => setCurrentSlide(prev => (prev - 1 + cardNewsSlides.length) % cardNewsSlides.length)}
              className="p-1.5 rounded-lg bg-navy-900/80 border border-navy-700 text-slate-300 hover:text-white"
              title="이전 카드뉴스"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide(prev => (prev + 1) % cardNewsSlides.length)}
              className="p-1.5 rounded-lg bg-navy-900/80 border border-navy-700 text-slate-300 hover:text-white"
              title="다음 카드뉴스"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
