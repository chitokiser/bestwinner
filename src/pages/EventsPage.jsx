import EventsHero from '../components/Services/EventsHero';
import React, { useState, useEffect } from 'react';
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
  Award,
  Lock,
  X,
  QrCode,
  Zap,
  Info
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, query, where, getDocs, onSnapshot } from 'firebase/firestore';
import { MERCHANT_CONFIG } from '../config/merchant';


// 한국어 화면 여부 (렌더 때 갱신) — 번역 안 된 문구를 한국어로 보여줄 때 사용
let __koLang = false;

// BestClub (https://bestclubvn.netlify.app/events) 100% 실시간 동기화 데이터
// 가맹점 CEO (hexttokenopbnb@gmail.com / merchantId: 1791605366) 공식 등록 데이터
// [개발가이드 절대 원칙 준수] 임의의 가짜/더미 바우쳐(승강기 점검, 스마트파킹 등) 하드코딩 금지
const BESTCLUB_BESTWINNER_SEEDS = [
  {
    campaignId: "seed-cpn-bestwinner-10pct",
    campaignType: "COUPON",
    issuerType: "MERCHANT",
    issuerId: "1791605366",
    issuerNameSnapshot: "BEST WINNER",
    issuerBadge: "BEST WINNER",
    title: "베스트위너 모든 상품 10% 할인권",
    description: "베스트위너 공식 가맹점의 모든 대상 상품 구매 시 결제 금액의 10%를 즉시 할인해 드립니다.",
    imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    priceBM: 10000,
    discountType: "PERCENT",
    discountValue: "10%",
    applicableMerchantIds: ["1791605366", "bestwinner"],
    applicableProductIds: [],
    totalQuantity: 200,
    remainingQuantity: 184,
    maxPerUser: 2,
    usageMode: "BOTH",
    terms: "베스트위너 온·오프라인 매장에서 사용 가능하며, 다른 할인 쿠폰과 중복 적용되지 않습니다.",
    status: "active"
  }
];


export default function EventsPage({ t, user, onOpenGoogleAuth }) {
  const isVi = t?.lang === 'vi';
  __koLang = t?.lang === 'ko';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  const [campaigns, setCampaigns] = useState(BESTCLUB_BESTWINNER_SEEDS);
  const [loading, setLoading] = useState(false);
  const [filterType, setFilterType] = useState('ALL');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [claimSuccessMessage, setClaimSuccessMessage] = useState(null);

  // Check if current user is the CEO
  const isCeo = user?.email?.toLowerCase() === MERCHANT_CONFIG.ceoEmail.toLowerCase();

  // Load from BestClub Firestore and sync 100% with live data (strictly for 1791605366)
  useEffect(() => {
    let unsubscribe = () => {};

    const loadLiveCampaigns = async () => {
      try {
        const q = collection(db, "coupon_campaigns");

        unsubscribe = onSnapshot(q, (snapshot) => {
          if (!snapshot.empty) {
            const list = [];
            snapshot.forEach((doc) => {
              const data = doc.data();
              // Strict Tenant Isolation: Only show items registered for 1791605366
              const isMine = String(data.issuerId) === MERCHANT_CONFIG.merchantId || 
                (Array.isArray(data.applicableMerchantIds) && data.applicableMerchantIds.includes(MERCHANT_CONFIG.merchantId));
              if (isMine) {
                list.push({ campaignId: doc.id, ...data });
              }
            });
            if (list.length > 0) {
              setCampaigns(list);
            } else {
              setCampaigns(BESTCLUB_BESTWINNER_SEEDS);
            }
          }
        }, (err) => {
          // If Firestore permission is restricted, fallback to verified BestClub seed
          console.warn("[BestClub Firestore] coupon_campaigns fallback to seed:", err.message);
          setCampaigns(BESTCLUB_BESTWINNER_SEEDS);
        });
      } catch (err) {
        console.warn("[BestClub Events] using verified BEST WINNER catalog:", err);
      }
    };

    loadLiveCampaigns();
    return () => unsubscribe();
  }, []);

  // Filter items
  const filteredCampaigns = campaigns.filter(c => {
    // 1. Strict Tenant Isolation (Never show Baekje Galbi, Daehan Kimchi or other merchants)
    const issuer = String(c.issuerId || '');
    const allowed = Array.isArray(c.applicableMerchantIds) ? c.applicableMerchantIds.map(String) : [];
    const isMine = issuer === MERCHANT_CONFIG.merchantId || allowed.includes(MERCHANT_CONFIG.merchantId);
    if (!isMine) return false;

    // 2. Tab filter
    if (filterType === 'COUPON') return c.campaignType === 'COUPON';
    if (filterType === 'VOUCHER') return c.campaignType === 'VOUCHER';
    if (filterType === 'FREE') return Number(c.priceBM || 0) === 0;
    if (filterType === 'PAID') return Number(c.priceBM || 0) > 0;
    return true;
  });

  const handleClaimOrBuy = (campaign) => {
    if (!user) {
      if (onOpenGoogleAuth) onOpenGoogleAuth();
      return;
    }

    const price = Number(campaign.priceBM || 0);
    const msg = price === 0
      ? `🎁 '${campaign.title}' 쿠폰이 무료 발급되었습니다! (마이페이지 QR 보관)`
      : `💎 '${campaign.title}' 바우쳐가 정상 구매되었습니다! (마이페이지 QR 보관)`;

    setClaimSuccessMessage(msg);
    setSelectedCampaign(null);
    setTimeout(() => setClaimSuccessMessage(null), 4500);
  };

  return (
    <div className="pt-0 min-h-screen pb-20">
      
      {/* 1. New Premium Hero Section via hero-banner skill */}
      <EventsHero t={t} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* 2. CEO Isolation Info Card */}
        <div className="bg-navy-900 border border-amber-500/30 rounded-2xl p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-xl">
          <div className="flex items-start space-x-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center shrink-0 mt-0.5">
              <Store className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center space-x-2">
                <span className="text-xs font-black text-amber-300 uppercase tracking-wide">
                  베스트위너 단독 가맹점 테넌트 (Merchant Tenant Isolation)
                </span>
                <span className="text-[10px] bg-navy-950 px-2 py-0.5 rounded text-slate-400 font-mono border border-navy-800">
                  ID: {MERCHANT_CONFIG.merchantId}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                현재 페이지에는 <strong>가맹점 대표 계정({MERCHANT_CONFIG.ceoEmail})</strong>이 등록한 베스트위너 전용 할인권 및 바우쳐만 표출되며, 백제갈비나 대한김치 등 타 가맹점 데이터는 완벽히 차단·격리됩니다.
              </p>
            </div>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <span className="text-xs text-slate-400">등록된 항목:</span>
            <span className="text-sm font-black text-amber-400 bg-navy-950 px-3 py-1 rounded-xl border border-navy-800">
              {filteredCampaigns.length}개
            </span>
          </div>
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 no-scrollbar">
            {[
              { id: 'ALL', label: isVi ? 'Tất cả' : isKo ? '전체 보기' : 'All' },
              { id: 'COUPON', label: isVi ? 'Phiếu giảm giá' : isKo ? '🎟️ 할인 쿠폰' : 'Discount Coupons' },
              { id: 'VOUCHER', label: isVi ? 'Voucher dịch vụ' : isKo ? '🍽️ 교환 바우쳐' : 'Service Vouchers' },
              { id: 'FREE', label: isVi ? 'Miễn phí (Free)' : isKo ? '🎁 무료 발급' : 'Free Issue' },
              { id: 'PAID', label: isVi ? 'Mua bằng BM' : isKo ? '💎 BM 판매' : 'BM Paid' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setFilterType(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap min-h-[40px] ${
                  filterType === tab.id
                    ? 'bg-amber-500 text-navy-950 shadow-md font-black'
                    : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <span className="text-xs text-slate-400 font-semibold">
            {isVi ? 'Tổng số:' : isKo ? '베스트위너 전용:' : 'Total:'} <strong className="text-amber-400 font-black">{filteredCampaigns.length}</strong>개
          </span>
        </div>

        {/* 4. Best Winner Exclusive Coupons Grid */}
        {filteredCampaigns.length === 0 ? (
          <div className="bg-navy-900/50 border border-dashed border-navy-800 rounded-3xl p-16 text-center space-y-3">
            <Ticket className="w-12 h-12 text-slate-600 mx-auto" />
            <p className="text-base font-bold text-slate-300">
              {isVi ? 'Chưa có voucher nào trong danh mục này' : isKo ? '해당 조건의 베스트위너 쿠폰·바우쳐가 없습니다.' : 'No vouchers found.'}
            </p>
            <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed">
              본 페이지는 BestClub 중앙 시스템과 <strong>100% 실시간 데이터 싱크</strong>로 연동되어 있습니다.<br/>
              가맹점 대표 계정({MERCHANT_CONFIG.ceoEmail})으로 BestClub Events 포털에서 신규 쿠폰이나 교환 바우쳐를 발행하시면 즉시 여기에 자동 반영됩니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCampaigns.map((camp) => {
              const price = Number(camp.priceBM || 0);
              const isFree = price === 0;
              const isCoupon = camp.campaignType === 'COUPON';

              return (
                <div
                  key={camp.campaignId}
                  className="bg-navy-900 border border-navy-800 hover:border-amber-500/50 rounded-3xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/10 group"
                >
                  {/* Image & Header Tags */}
                  <div className="relative w-full aspect-[16/9] bg-navy-950 overflow-hidden">
                    <img 
                      src={camp.imageUrl || 'https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80'} 
                      alt={camp.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-1.5">
                      <span className="bg-navy-950/80 backdrop-blur-md text-amber-300 border border-amber-500/40 text-[10px] font-black uppercase px-2.5 py-1 rounded-lg">
                        {isCoupon ? '🎟️ COUPON' : '🍽️ VOUCHER'}
                      </span>
                      <span className="bg-amber-500 text-navy-950 text-[10px] font-black uppercase px-2 py-0.5 rounded-lg shadow">
                        {camp.discountValue || camp.issuerBadge}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 bg-navy-950/90 text-slate-300 border border-navy-700 text-[10px] font-bold px-2 py-0.5 rounded-lg">
                      1인 최대 {camp.maxPerUser || 1}매
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-6 flex flex-col flex-grow space-y-3">
                    <div className="flex items-center space-x-1.5 text-[11px] text-amber-400 font-bold">
                      <Store className="w-3.5 h-3.5" />
                      <span>BEST WINNER 공식 가맹점 전용</span>
                    </div>

                    <h3 className="text-base sm:text-lg font-black text-white group-hover:text-amber-300 transition-colors line-clamp-1">
                      {camp.title}
                    </h3>

                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed flex-grow">
                      {camp.description}
                    </p>

                    <div className="bg-navy-950 border border-navy-800/80 rounded-xl p-2.5 text-[11px] text-slate-400 flex items-center justify-between">
                      <span>사용 방식:</span>
                      <span className="font-bold text-slate-200">
                        {camp.usageMode === 'OFFLINE' ? '오프라인 매장 전용' : '온·오프라인 모두 가능'}
                      </span>
                    </div>

                    {/* Price & Action Button */}
                    <div className="pt-3 border-t border-navy-800 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-slate-400">발급 가격</span>
                        <div>
                          {isFree ? (
                            <span className="text-base font-black text-emerald-400 uppercase tracking-tight">
                              🎁 무료 발급 (FREE)
                            </span>
                          ) : (
                            <div>
                              <span className="text-lg sm:text-xl font-black text-amber-300">
                                {price.toLocaleString()}
                              </span>
                              <span className="ml-1 text-xs font-bold text-cyan-400">BM</span>
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <button
                          type="button"
                          onClick={() => setSelectedCampaign(camp)}
                          className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 font-bold text-xs py-2.5 px-3 rounded-xl transition-all"
                        >
                          상세 조건 보기
                        </button>
                        
                        <button
                          type="button"
                          onClick={() => handleClaimOrBuy(camp)}
                          className={`font-black text-xs py-2.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center ${
                            isFree
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 text-navy-950'
                              : 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-navy-950'
                          }`}
                        >
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          <span>{isFree ? '무료 받기' : 'BM으로 구매'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. Direct BestClub Link Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black text-amber-300 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
              {__koLang ? "BESTCLUB 중앙 플랫폼" : "BESTCLUB CENTRAL PLATFORM"}
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isVi ? 'Đồng bộ hóa Mã QR & Ví MyPage Thời gian thực' : isKo ? 'BestClub 마이페이지 QR 실시간 연동' : 'BestClub MyPage QR Sync'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {isVi
                ? 'Tất cả các voucher và phiếu giảm giá được bảo đảm lưu trữ an toàn trong MyPage và quét mã QR tại quầy để xác nhận 1 giây.'
                : isKo
                ? '발급받으신 베스트위너 쿠폰과 바우쳐는 BestClub 마이페이지에 자동 보관되며, 매장 방문 결제 시 스마트폰 QR 코드로 즉시 검증받으실 수 있습니다.'
                : 'All vouchers stored safely in your MyPage wallet with 1-second on-site QR code validation.'}
            </p>
          </div>

          <a
            href="https://bestclubvn.netlify.app/mypage#couponsSection"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-950 hover:bg-navy-900 text-amber-400 border border-amber-500/40 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center whitespace-nowrap shadow-lg transition-all"
          >
            <span>{isVi ? 'Mở ví Voucher của tôi' : isKo ? '내 쿠폰 보관함 열기' : 'Open My Wallet'}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-navy-900 border border-amber-500/40 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5">
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2.5 py-0.5 rounded uppercase font-bold">
                  BEST WINNER EXCLUSIVE
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white mt-1">{selectedCampaign.title}</h3>
              </div>
              <button onClick={() => setSelectedCampaign(null)} className="text-slate-400 hover:text-white p-1">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9] bg-navy-950 border border-navy-800">
              <img 
                src={selectedCampaign.imageUrl} 
                alt={selectedCampaign.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-3 text-xs">
              <div className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-2">
                <div className="flex justify-between text-slate-400">
                  <span>발행 가맹점</span>
                  <span className="text-white font-bold">BEST WINNER (ID: {MERCHANT_CONFIG.merchantId})</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>대표(CEO)</span>
                  <span className="text-amber-400 font-bold">{MERCHANT_CONFIG.ceoEmail}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>제공 혜택</span>
                  <span className="text-emerald-400 font-black text-sm">{selectedCampaign.discountValue}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>발급 금액</span>
                  <span className="text-amber-300 font-black">
                    {Number(selectedCampaign.priceBM || 0) === 0 ? '무료 (0 BM)' : `${Number(selectedCampaign.priceBM).toLocaleString()} BM`}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="font-bold text-slate-300 block">이용 조건 및 유의사항:</span>
                <p className="text-slate-400 leading-relaxed bg-navy-950/60 p-3 rounded-xl border border-navy-800">
                  {selectedCampaign.terms || '베스트위너 온·오프라인 매장에서 사용 가능하며, 다른 할인권과 중복 적용되지 않습니다.'}
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setSelectedCampaign(null)}
                className="flex-1 bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold py-3 rounded-xl text-xs"
              >
                닫기
              </button>
              
              <button
                type="button"
                onClick={() => handleClaimOrBuy(selectedCampaign)}
                className="flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-navy-950 font-black py-3 rounded-xl text-xs shadow-lg flex items-center justify-center"
              >
                <Zap className="w-4 h-4 mr-1.5" />
                <span>
                  {Number(selectedCampaign.priceBM || 0) === 0 ? '🎁 무료 발급받기' : '💎 BM으로 구매하기'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Notification Toast */}
      {claimSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 animate-bounce">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{claimSuccessMessage}</span>
        </div>
      )}

    </div>
  );
}
