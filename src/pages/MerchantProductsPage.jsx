import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShoppingBag, 
  ExternalLink, 
  ShieldCheck, 
  Sparkles, 
  CheckCircle, 
  RefreshCw, 
  Tag, 
  Package, 
  Wrench, 
  Calendar, 
  Utensils, 
  ArrowRight, 
  AlertCircle,
  Eye,
  ShoppingCart,
  Zap,
  Info,
  X,
  AlertTriangle,
  Ticket
} from 'lucide-react';
import { db } from '../lib/firebase';
import { collection, doc, query, where, onSnapshot } from 'firebase/firestore';
import { MERCHANT_CONFIG } from '../config/merchant';

export default function MerchantProductsPage({ t, user, onOpenGoogleAuth }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [merchantData, setMerchantData] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [showEmbedAdmin, setShowEmbedAdmin] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [purchaseSuccessMessage, setPurchaseSuccessMessage] = useState(null);

  // BT 부족 시 구매 의사 확인 모달 상태
  // { isOpen: boolean, targetType: 'single' | 'cart', product?: any, requiredBt: number, merchantBt: number }
  const [btShortageConfirmModal, setBtShortageConfirmModal] = useState(null);

  // Check if current user is the CEO
  const isCeo = user?.email?.toLowerCase() === MERCHANT_CONFIG.ceoEmail.toLowerCase();

  // 1. Load products in real time from BestClub Firestore
  useEffect(() => {
    setLoading(true);
    const q = query(
      collection(db, 'merchant_products'),
      where('merchant_id', 'in', [MERCHANT_CONFIG.merchantId, Number(MERCHANT_CONFIG.merchantId)]),
      where('sale_status', '==', 'published')
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = [];
        snapshot.forEach((docSnap) => {
          list.push({ id: docSnap.id, ...docSnap.data() });
        });
        list.sort((a, b) => (a.display_order || 99) - (b.display_order || 99));
        setProducts(list);
        setLoading(false);
      },
      (error) => {
        console.error('[BestClub Firestore Error] merchant_products load failed:', error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, []);

  // 2. Real-time subscription to merchant profile to track CEO's live BT reserve
  useEffect(() => {
    const unsubMerchant = onSnapshot(
      doc(db, 'merchants', String(MERCHANT_CONFIG.merchantId)),
      (docSnap) => {
        if (docSnap.exists()) {
          setMerchantData(docSnap.data());
        }
      },
      (err) => {
        console.warn('[BestClub Firestore] merchant profile load warning:', err);
      }
    );
    return () => unsubMerchant();
  }, []);

  // CEO / 가맹점의 현재 보유 BT 잔여량 (미설정 시 0)
  const merchantBtBalance = Number(merchantData?.btBalance || 0);

  const categories = [
    { id: 'ALL', label: isVi ? 'Tất cả' : isKo ? '전체' : 'All', icon: Sparkles },
    { id: 'physical_product', label: isVi ? 'Sản phẩm vật tư' : isKo ? '실물 상품 / 자재' : 'Physical Products', icon: Package },
    { id: 'service', label: isVi ? 'Dịch vụ & Vé' : isKo ? '시공 / 서비스 / 티켓' : 'Services & Tickets', icon: Wrench },
    { id: 'menu', label: isVi ? 'Menu / F&B' : isKo ? '식음료 / 메뉴' : 'Menu & F&B', icon: Utensils },
    { id: 'booking', label: isVi ? 'Đặt chỗ' : isKo ? '예약형 서비스' : 'Booking', icon: Calendar },
  ];

  const filteredProducts = activeCategory === 'ALL'
    ? products
    : products.filter(p => p.product_type === activeCategory);

  const handleAddToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleBuyNow = (product) => {
    if (!user) {
      if (onOpenGoogleAuth) onOpenGoogleAuth();
      return;
    }
    setSelectedProduct(product);
  };

  const getProductImage = (p) => {
    if (p.images && p.images.length > 0 && p.images[0]) return p.images[0];
    if (p.image_url) return p.image_url;
    return 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80';
  };

  const cartTotalAmount = cart.reduce((sum, item) => sum + (Number(item.price) || 0) * item.qty, 0);
  const cartBtReward = Math.floor(cartTotalAmount / 100000);

  // 결제 실행 함수 (단품 또는 장바구니)
  const executePurchase = (type, product = null, withoutBt = false) => {
    if (type === 'single' && product) {
      const msg = withoutBt
        ? `'${product.product_name}' 주문 완료 (BT 미지급 조건 동의 / BM 결제 접수)`
        : `'${product.product_name}' 주문이 정상 완료되었습니다! (+${Math.floor(Number(product.price || 0) / 100000)} BT 지급)`;
      setPurchaseSuccessMessage(msg);
      setSelectedProduct(null);
    } else if (type === 'cart') {
      const msg = withoutBt
        ? `${cart.length}개 상품 주문 완료 (BT 미지급 조건 동의 / BM 결제 접수)`
        : `${cart.length}개 상품의 결제가 완료되었습니다! (+${cartBtReward} BT 지급)`;
      setPurchaseSuccessMessage(msg);
      setCart([]);
      setIsCartOpen(false);
    }
    setBtShortageConfirmModal(null);
    setTimeout(() => setPurchaseSuccessMessage(null), 4500);
  };

  // 단품 결제 버튼 클릭 시 BT 잔여량 검증
  const handleConfirmSinglePurchase = (product) => {
    const requiredBt = Math.floor(Number(product.price || 0) / 100000);
    // 가맹점(CEO) 계정에 지급할 BT가 부족한 경우 확인 모달 팝업
    if (requiredBt > 0 && merchantBtBalance < requiredBt) {
      setBtShortageConfirmModal({
        isOpen: true,
        targetType: 'single',
        product: product,
        requiredBt: requiredBt,
        merchantBt: merchantBtBalance
      });
      return;
    }
    // BT 충분한 경우 즉시 결제
    executePurchase('single', product, false);
  };

  // 장바구니 결제 버튼 클릭 시 BT 잔여량 검증
  const handleConfirmCartPurchase = () => {
    if (!user) {
      setIsCartOpen(false);
      if (onOpenGoogleAuth) onOpenGoogleAuth();
      return;
    }
    // 가맹점(CEO) 계정에 지급할 BT가 부족한 경우 확인 모달 팝업
    if (cartBtReward > 0 && merchantBtBalance < cartBtReward) {
      setBtShortageConfirmModal({
        isOpen: true,
        targetType: 'cart',
        product: null,
        requiredBt: cartBtReward,
        merchantBt: merchantBtBalance
      });
      return;
    }
    // BT 충분한 경우 즉시 결제
    executePurchase('cart', null, false);
  };

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
            <span className="text-gold-400 font-bold">{isVi ? 'Sản phẩm bán' : isKo ? '판매제품' : 'Products'}</span>
          </div>

          {/* Submenu Tabs (AI 경영관리 | 판매제품 | BEST 매거진) */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-1 pt-1 no-scrollbar border-b border-navy-800">
            <Link
              to="/services/ai-management"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-cyan-400 hover:bg-navy-800 whitespace-nowrap"
            >
              🤖 {isVi ? 'Quản lý AI (AI Management)' : isKo ? 'AI경영관리 (AI Management)' : 'AI Management'}
            </Link>
            <Link
              to="/services/products"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all bg-gradient-to-r from-gold-500/20 to-cyan-500/20 text-gold-400 border border-gold-500/40 shadow-sm whitespace-nowrap"
            >
              🛒 {isVi ? 'Sản phẩm bán (BEST Mall)' : isKo ? '판매제품 (BEST Mall)' : 'Products (BEST Mall)'}
            </Link>
            <Link
              to="/megazine"
              className="px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all text-slate-300 hover:text-gold-400 hover:bg-navy-800 whitespace-nowrap"
            >
              📰 {isVi ? 'BEST MEGAZINE (Tạp chí AI)' : isKo ? 'BEST MEGAZINE (AI 매거진)' : 'BEST MEGAZINE'}
            </Link>
          </div>

          {/* Main Title & Action Bar */}
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 pt-2">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center space-x-1 text-[11px] font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                  <ShoppingBag className="w-3.5 h-3.5 mr-1" />
                  <span>BEST WINNER STORE (BEST Mall)</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-[11px] font-semibold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  <ShieldCheck className="w-3.5 h-3.5 mr-1" />
                  <span>BestClub jumper-b15aa Realtime DB</span>
                </span>

                {/* Live Merchant BT Reserve Pill */}
                <span className={`inline-flex items-center space-x-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                  merchantBtBalance > 0
                    ? 'text-emerald-300 bg-emerald-500/10 border-emerald-500/30'
                    : 'text-amber-300 bg-amber-500/10 border-amber-500/30'
                }`}>
                  <Ticket className="w-3 h-3 mr-1" />
                  <span>
                    {isVi ? 'Quỹ BT Cửa hàng:' : isKo ? '가맹점 BT 보유량:' : 'Merchant BT:'} {merchantBtBalance} {isVi ? 'vé' : isKo ? '장' : 'BT'}
                  </span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                BEST WINNER {isVi ? 'SẢN PHẨM & DỊCH VỤ CHÍNH HÃNG' : isKo ? '공식 가맹점 판매제품' : 'OFFICIAL MERCHANT STORE'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                {isVi
                  ? 'Toàn bộ sản phẩm được đồng bộ trực tiếp từ BestClub Cloud. Thanh toán bằng BM nhận ngay 5% Cashback và 1 BT (Bonus Ticket) cho mỗi 100,000 VND (áp dụng khi quỹ BT của 가맹점 còn hiệu lực).'
                  : isKo
                  ? 'BestClub 중앙 데이터베이스와 100% 실시간 연동된 베스트위너 공식 판매상품입니다. BM 결제 시 5% 캐시백과 10만 동당 1 BT가 지급됩니다.'
                  : 'Real-time integrated products powered by BestClub central cloud. Earn 5% Cashback & 1 Bonus Ticket per 100,000 VND.'}
              </p>
            </div>

            {/* Quick Cart Trigger */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative bg-navy-800 hover:bg-navy-700 text-gold-400 border border-gold-500/40 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm flex items-center shadow-lg transition-all"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                <span>{isVi ? 'Giỏ hàng' : isKo ? '장바구니' : 'Cart'}</span>
                {cart.length > 0 && (
                  <span className="ml-2 bg-gold-500 text-navy-950 px-2 py-0.5 rounded-full text-xs font-black">
                    {cart.reduce((s, i) => s + i.qty, 0)}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 space-y-8">
        
        {/* 2. 가맹점 CEO 전용 BestERP 상품 관리 시스템 카드 (CEO Admin Portal) */}
        <div className={`rounded-2xl border transition-all p-5 sm:p-6 ${
          isCeo 
            ? 'bg-gradient-to-r from-navy-900 via-purple-950/40 to-navy-900 border-purple-500/50 shadow-xl shadow-purple-500/10' 
            : 'bg-navy-900/80 border-navy-800 hover:border-gold-500/30'
        }`}>
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-5">
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="bg-purple-500/20 text-purple-300 border border-purple-500/40 px-2.5 py-1 rounded-lg text-xs font-black tracking-wide flex items-center">
                  👑 {isVi ? 'CỔNG QUẢN TRỊ CEO' : isKo ? '베스트위너 CEO 관리자 포털' : 'CEO ADMIN PORTAL'}
                </span>
                <span className="text-xs text-slate-300 font-mono bg-navy-950 px-2.5 py-1 rounded-lg border border-navy-700">
                  {MERCHANT_CONFIG.ceoEmail}
                </span>

                {/* BT Balance status badge inside CEO card */}
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border flex items-center ${
                  merchantBtBalance > 0
                    ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                    : 'bg-amber-500/15 text-amber-300 border-amber-500/40'
                }`}>
                  <Ticket className="w-3 h-3 mr-1" />
                  <span>
                    BT 잔여: <strong>{merchantBtBalance}장</strong> {merchantBtBalance <= 0 && '(소진됨 - 구매자 확인 필요)'}
                  </span>
                </span>

                {isCeo && (
                  <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {isVi ? 'Đã xác thực quyền CEO' : isKo ? 'CEO 계정 로그인 활성화' : 'CEO Authorized'}
                  </span>
                )}
              </div>

              <h2 className="text-lg sm:text-xl font-bold text-white flex items-center">
                <span>BestERP {isVi ? 'Hệ thống Quản lý Sản phẩm & Đơn hàng' : isKo ? '가맹점 상품 관리 시스템 (BestERP)' : 'Merchant Product Admin'}</span>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
                {isVi
                  ? `Tài khoản CEO (${MERCHANT_CONFIG.ceoEmail}) có thể thêm, sửa, quản lý trạng thái bán và giá BM tại cổng BestERP. Toàn bộ thay đổi sẽ được phản ánh trực tiếp tức thì trên trang này.`
                  : isKo
                  ? `가맹점 CEO 계정(${MERCHANT_CONFIG.ceoEmail})으로 BestERP 관리자에 접속하여 상품 신규 등록, 가격(BM) 책정, 재고 및 판매 상태를 실시간으로 관리할 수 있습니다.`
                  : `CEO account (${MERCHANT_CONFIG.ceoEmail}) manages product catalogs, BM prices, and stock via BestERP.`}
              </p>
            </div>

            {/* Direct Launch Button & Toggle */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={MERCHANT_CONFIG.adminProductsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-black text-xs sm:text-sm px-5 py-3 rounded-xl shadow-lg transition-all flex items-center border border-purple-400/40 hover:scale-[1.02]"
              >
                <span>{isVi ? 'Mở BestERP Quản lý Sản phẩm' : isKo ? '🚀 BestERP 상품 관리자 열기 (새 창)' : 'Launch BestERP Admin'}</span>
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>

              <button
                type="button"
                onClick={() => setShowEmbedAdmin(!showEmbedAdmin)}
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold text-xs sm:text-sm px-4 py-3 rounded-xl border border-navy-700 transition-colors flex items-center"
              >
                <span>{showEmbedAdmin ? (isKo ? '▲ 임베드 뷰 닫기' : 'Close Viewer') : (isKo ? '▼ 웹 내 관리 화면 열기' : 'Toggle Embed View')}</span>
              </button>
            </div>
          </div>

          {/* Embedded Viewer (With X-Frame-Options notice & fallback) */}
          {showEmbedAdmin && (
            <div className="mt-6 pt-5 border-t border-navy-800 space-y-3">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 text-xs text-amber-200 flex items-start space-x-2">
                <Info className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <strong>안내:</strong> Netlify 보안 정책(X-Frame-Options)에 의해 브라우저에 따라 임베드 내부 로그인이 제한될 수 있습니다. 
                  원활한 상품 등록 및 이미지 업로드를 위해 상단의 <strong>[🚀 BestERP 상품 관리자 열기 (새 창)]</strong> 버튼을 이용하시기를 적극 권장합니다.
                </div>
              </div>

              <div className="relative w-full h-[620px] rounded-xl overflow-hidden border border-navy-700 bg-white shadow-2xl">
                <iframe
                  src={MERCHANT_CONFIG.adminProductsUrl}
                  title="BestERP Merchant Products"
                  className="w-full h-full border-0"
                  allow="camera; microphone; clipboard-write"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>

        {/* 3. Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar max-w-full">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              const count = cat.id === 'ALL' 
                ? products.length 
                : products.filter(p => p.product_type === cat.id).length;

              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 whitespace-nowrap min-h-[40px] ${
                    isActive
                      ? 'bg-gold-500 text-navy-950 shadow-md font-black'
                      : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-navy-800 border border-navy-800'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{cat.label}</span>
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isActive ? 'bg-navy-950/20 text-navy-950 font-black' : 'bg-navy-800 text-slate-400'
                  }`}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="text-xs text-slate-400 font-semibold flex items-center">
            <span>{isVi ? 'Tổng số:' : isKo ? '실시간 등록 상품:' : 'Total Items:'}</span>
            <span className="ml-1.5 text-gold-400 font-black text-sm">{filteredProducts.length}</span>
            <span className="ml-0.5">{isVi ? 'sản phẩm' : isKo ? '건' : 'items'}</span>
          </div>
        </div>

        {/* 4. Products Grid */}
        {loading ? (
          <div className="bg-navy-900/50 border border-navy-800 rounded-2xl p-16 text-center space-y-3">
            <RefreshCw className="w-8 h-8 text-gold-400 animate-spin mx-auto" />
            <p className="text-sm font-bold text-slate-300">
              {isVi ? 'Đang tải danh mục sản phẩm từ BestClub Cloud...' : isKo ? 'BestClub 중앙 DB에서 실시간 상품 목록을 불러오는 중입니다...' : 'Loading live products from BestClub Cloud...'}
            </p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="bg-navy-900/50 border border-dashed border-navy-800 rounded-2xl p-12 text-center space-y-3">
            <Package className="w-12 h-12 text-slate-600 mx-auto" />
            <p className="text-base font-bold text-slate-300">
              {isVi ? 'Chưa có sản phẩm nào trong danh mục này' : isKo ? '해당 카테고리에 등록된 상품이 없습니다.' : 'No products found in this category.'}
            </p>
            <p className="text-xs text-slate-500 max-w-md mx-auto">
              가맹점 CEO 계정({MERCHANT_CONFIG.ceoEmail})으로 BestERP에 접속하여 상품을 등록하면 즉시 노출됩니다.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((p) => {
              const price = Number(p.price || 0);
              const isSoldOut = p.inventory <= 0 || p.sale_status === 'sold_out';
              const imageUrl = getProductImage(p);
              const btReward = Math.floor(price / 100000);
              const isShortageForThisProduct = btReward > 0 && merchantBtBalance < btReward;

              return (
                <div 
                  key={p.id}
                  className="bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/5 group"
                >
                  {/* Image Container */}
                  <div className="relative w-full aspect-[16/10] bg-navy-950 overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={p.product_name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Category Tag */}
                    <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md text-gold-400 border border-gold-500/30 text-[10px] font-black uppercase px-2.5 py-1 rounded-lg">
                      {p.product_type || 'Product'}
                    </div>

                    {/* Sold out overlay */}
                    {isSoldOut && (
                      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center">
                        <span className="bg-red-500/20 text-red-400 border border-red-500/40 px-3 py-1.5 rounded-xl font-black text-xs uppercase tracking-wider">
                          {isVi ? 'HẾT HÀNG' : isKo ? '품절 (SOLD OUT)' : 'SOLD OUT'}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex flex-col flex-grow space-y-3">
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-400 transition-colors line-clamp-1">
                      {p.product_name}
                    </h3>
                    
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed flex-grow">
                      {p.description || (isKo ? '베스트위너 공식 인증 상품입니다.' : 'Official certified product.')}
                    </p>

                    {/* Reward Badge / Shortage Notice */}
                    <div className={`rounded-xl p-2.5 flex items-center justify-between text-[11px] border ${
                      isShortageForThisProduct
                        ? 'bg-amber-500/10 border-amber-500/30'
                        : 'bg-navy-950/80 border-navy-800'
                    }`}>
                      <span className="text-slate-400 flex items-center">
                        <Ticket className={`w-3.5 h-3.5 mr-1 ${isShortageForThisProduct ? 'text-amber-400' : 'text-gold-400'}`} />
                        {isVi ? 'Thưởng BT (Bonus)' : isKo ? '보너스 티켓(BT)' : 'BT Reward'}
                      </span>
                      {isShortageForThisProduct ? (
                        <span className="text-amber-400 font-bold flex items-center text-[10px]">
                          <AlertTriangle className="w-3 h-3 mr-0.5" />
                          {isVi ? 'Tạm hết vé BT' : isKo ? '지급 BT 부족 (소진)' : 'BT Insufficient'}
                        </span>
                      ) : (
                        <span className="text-gold-400 font-bold">
                          +{btReward} {isVi ? 'vé' : isKo ? '장 지급' : 'Tickets'}
                        </span>
                      )}
                    </div>

                    {/* Price and Cart Buttons */}
                    <div className="pt-2 border-t border-navy-800/80 space-y-3">
                      <div className="flex items-baseline justify-between">
                        <span className="text-xs text-slate-400">{isVi ? 'Giá bán' : isKo ? '판매가' : 'Price'}</span>
                        <div className="text-right">
                          <span className="text-lg sm:text-xl font-black text-gold-400 tracking-tight">
                            {price.toLocaleString()}
                          </span>
                          <span className="ml-1 text-xs font-bold text-cyan-400">BM (VND)</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          disabled={isSoldOut}
                          onClick={() => handleAddToCart(p)}
                          className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 hover:border-gold-500/30 font-bold text-xs py-2.5 px-3 rounded-xl transition-all flex items-center justify-center disabled:opacity-50 min-h-[42px]"
                        >
                          <ShoppingCart className="w-3.5 h-3.5 mr-1 text-gold-400" />
                          <span>{isVi ? 'Thêm giỏ' : isKo ? '장바구니' : 'Add Cart'}</span>
                        </button>
                        
                        <button
                          disabled={isSoldOut}
                          onClick={() => handleBuyNow(p)}
                          className="bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-black text-xs py-2.5 px-3 rounded-xl shadow-md transition-all flex items-center justify-center disabled:opacity-50 min-h-[42px]"
                        >
                          <Zap className="w-3.5 h-3.5 mr-1" />
                          <span>{isVi ? 'Mua ngay' : isKo ? '💎 바로구매' : 'Buy Now'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* 5. BestClub Ecosystem Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-navy-700/80 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
              BESTCLUB CENTRAL PLATFORM
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white">
              {isVi ? 'Tích hợp Thanh toán BM & Quyền lợi Khách hàng' : isKo ? 'BestClub 통합 BM 결제 및 고객 리워드 보장' : 'BestClub BM Integration'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              {isVi
                ? 'Tất cả các giao dịch thanh toán qua BM đều được bảo chứng minh bạch qua hợp đồng thông minh và hệ thống BestClub. Mua sắm an toàn, tích lũy điểm thưởng không giới hạn.'
                : isKo
                ? '베스트위너 매장 및 온라인에서 BM으로 결제 시 결제액의 5% 즉시 캐시백과 10만 동당 1장의 보너스티켓(BT)이 자동 적립되어 룰렛 추첨 기회가 제공됩니다.'
                : 'All BM transactions include 5% cashback & 1 Bonus Ticket per 100,000 VND.'}
            </p>
          </div>

          <a
            href="https://bestclubvn.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-navy-950 hover:bg-navy-900 text-gold-400 border border-gold-500/40 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm flex items-center whitespace-nowrap shadow-lg transition-all"
          >
            <span>{isVi ? 'Khám phá BestClub VN' : isKo ? 'BestClub 플랫폼 방문' : 'Visit BestClub'}</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>

      </div>

      {/* Cart Drawer Modal */}
      {isCartOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-navy-950/80 backdrop-blur-sm">
          <div className="w-full max-w-md bg-navy-900 border-l border-navy-800 h-full flex flex-col shadow-2xl">
            {/* Cart Header */}
            <div className="p-5 border-b border-navy-800 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="w-5 h-5 text-gold-400" />
                <h3 className="text-base font-bold text-white">
                  {isVi ? 'Giỏ hàng của bạn' : isKo ? '장바구니' : 'Your Shopping Cart'}
                </h3>
              </div>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-navy-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-grow overflow-y-auto p-5 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-16 space-y-2 text-slate-400">
                  <Package className="w-10 h-10 mx-auto text-slate-600" />
                  <p className="text-sm font-semibold">{isVi ? 'Giỏ hàng trống' : isKo ? '장바구니가 비어 있습니다.' : 'Cart is empty'}</p>
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.id} className="bg-navy-950 border border-navy-800 rounded-xl p-3 flex gap-3 items-center">
                    <img 
                      src={getProductImage(item)} 
                      alt={item.product_name}
                      className="w-16 h-16 object-cover rounded-lg bg-navy-900 flex-shrink-0"
                    />
                    <div className="flex-grow min-w-0">
                      <h4 className="text-xs font-bold text-white truncate">{item.product_name}</h4>
                      <p className="text-[11px] text-gold-400 font-bold mt-0.5">
                        {Number(item.price || 0).toLocaleString()} BM
                      </p>
                      <div className="flex items-center space-x-2 mt-2">
                        <button
                          onClick={() => {
                            setCart(prev => prev.map(i => i.id === item.id ? { ...i, qty: Math.max(1, i.qty - 1) } : i));
                          }}
                          className="w-6 h-6 rounded bg-navy-800 text-slate-300 font-bold text-xs"
                        >
                          -
                        </button>
                        <span className="text-xs font-bold text-white px-1.5">{item.qty}</span>
                        <button
                          onClick={() => {
                            setCart(prev => prev.map(i => i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
                          }}
                          className="w-6 h-6 rounded bg-navy-800 text-slate-300 font-bold text-xs"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <button
                      onClick={() => setCart(prev => prev.filter(i => i.id !== item.id))}
                      className="text-slate-500 hover:text-red-400 p-1"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Cart Footer Checkout */}
            {cart.length > 0 && (
              <div className="p-5 border-t border-navy-800 bg-navy-950 space-y-4">
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>{isVi ? 'Tổng tiền' : isKo ? '총 결제 예정액' : 'Total'}</span>
                    <span className="text-white font-bold">{cartTotalAmount.toLocaleString()} BM</span>
                  </div>
                  
                  {/* BT Reward Line with Shortage Indication */}
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400 flex items-center">
                      <Ticket className="w-3.5 h-3.5 mr-1 text-gold-400" />
                      {isVi ? 'Thưởng vé (BT)' : isKo ? '적립 예정 보너스티켓' : 'BT Reward'}
                    </span>
                    {cartBtReward > 0 && merchantBtBalance < cartBtReward ? (
                      <span className="text-amber-400 font-bold text-[11px] flex items-center">
                        <AlertTriangle className="w-3 h-3 mr-1" />
                        {isVi ? `Quỹ BT không đủ (+${cartBtReward} vé)` : isKo ? `가맹점 BT 부족 (0장 지급 예정)` : `BT Shortage`}
                      </span>
                    ) : (
                      <span className="text-gold-400 font-bold">+{cartBtReward} 장</span>
                    )}
                  </div>

                  <div className="flex justify-between text-cyan-400">
                    <span>{isVi ? 'Cashback 5%' : isKo ? '5% 캐시백 혜택' : 'Cashback 5%'}</span>
                    <span className="font-bold">{(cartTotalAmount * 0.05).toLocaleString()} BM</span>
                  </div>
                </div>

                {/* Warning box if merchant BT is insufficient */}
                {cartBtReward > 0 && merchantBtBalance < cartBtReward && (
                  <div className="bg-amber-500/15 border border-amber-500/40 rounded-xl p-3 text-[11px] text-amber-200 flex items-start space-x-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                    <div className="leading-snug">
                      <strong>가맹점 BT 소진 안내:</strong> 현재 가맹점 보유 BT({merchantBtBalance}장)가 부족하여, 이번 결제 시 <strong>보너스 티켓이 지급되지 않습니다.</strong>
                    </div>
                  </div>
                )}

                <button
                  onClick={handleConfirmCartPurchase}
                  className="w-full bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-black py-3 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center min-h-[44px]"
                >
                  <Zap className="w-4 h-4 mr-1.5" />
                  <span>
                    {user ? (
                      cartBtReward > 0 && merchantBtBalance < cartBtReward
                        ? (isKo ? '💎 BT 없이 총액 결제하기' : 'Checkout without BT')
                        : (isKo ? '💎 BM으로 총액 결제하기' : 'Checkout with BM')
                    ) : (
                      isKo ? 'BestClub 로그인 후 결제' : 'Login to Checkout'
                    )}
                  </span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Buy Now Direct Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="w-full max-w-lg bg-navy-900 border border-gold-500/40 rounded-2xl p-6 shadow-2xl space-y-5">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <span className="text-[10px] bg-gold-500/20 text-gold-400 border border-gold-500/30 px-2 py-0.5 rounded uppercase font-bold">
                  BEST WINNER BM Checkout
                </span>
                <h3 className="text-lg font-bold text-white">{selectedProduct.product_name}</h3>
              </div>
              <button onClick={() => setSelectedProduct(null)} className="text-slate-400 hover:text-white">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex gap-4 items-center bg-navy-950 p-3 rounded-xl border border-navy-800">
              <img 
                src={getProductImage(selectedProduct)} 
                alt={selectedProduct.product_name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div className="space-y-1 text-xs">
                <p className="text-slate-300 line-clamp-2">{selectedProduct.description}</p>
                <div className="text-gold-400 font-bold text-sm">
                  {Number(selectedProduct.price || 0).toLocaleString()} BM (VND)
                </div>
              </div>
            </div>

            <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-3 text-xs text-cyan-300 space-y-1.5">
              <div className="flex justify-between">
                <span>구매자 계정:</span>
                <span className="font-bold text-white">{user?.email || 'Guest'}</span>
              </div>
              
              {/* Product BT Reward calculation */}
              {(() => {
                const requiredBt = Math.floor(Number(selectedProduct.price || 0) / 100000);
                const isShortage = requiredBt > 0 && merchantBtBalance < requiredBt;

                return (
                  <div className="flex justify-between items-center">
                    <span>지급 보너스티켓:</span>
                    {isShortage ? (
                      <span className="text-amber-400 font-bold flex items-center">
                        <AlertTriangle className="w-3.5 h-3.5 mr-1" />
                        0 장 (가맹점 잔여 {merchantBtBalance}장 부족)
                      </span>
                    ) : (
                      <span className="font-bold text-gold-400">+{requiredBt} 장 (10만동당 1장)</span>
                    )}
                  </div>
                );
              })()}
            </div>

            {/* Direct Warning banner if shortage */}
            {(() => {
              const requiredBt = Math.floor(Number(selectedProduct.price || 0) / 100000);
              const isShortage = requiredBt > 0 && merchantBtBalance < requiredBt;
              if (!isShortage) return null;

              return (
                <div className="bg-amber-500/15 border border-amber-500/40 rounded-xl p-3.5 text-xs text-amber-200 space-y-1">
                  <div className="font-bold flex items-center text-amber-300">
                    <AlertTriangle className="w-4 h-4 mr-1.5 flex-shrink-0" />
                    <span>지급할 보너스티켓(BT) 없음 안내</span>
                  </div>
                  <p className="leading-relaxed text-[11px]">
                    현재 가맹점(CEO) 계정의 보너스티켓 잔여량이 부족하여, 본 결제 완료 시 <strong>보너스 티켓이 지급되지 않습니다.</strong>
                  </p>
                  <p className="font-bold text-[11px] text-amber-300 pt-1">
                    지급할 BT가 없어도 계속 구매를 진행하시겠습니까?
                  </p>
                </div>
              );
            })()}

            <div className="flex gap-3">
              <button
                onClick={() => setSelectedProduct(null)}
                className="flex-1 bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold py-2.5 rounded-xl text-xs"
              >
                {isKo ? '취소' : 'Cancel'}
              </button>
              
              <button
                onClick={() => handleConfirmSinglePurchase(selectedProduct)}
                className={`flex-1 font-black py-2.5 rounded-xl text-xs shadow-md transition-all ${
                  Math.floor(Number(selectedProduct.price || 0) / 100000) > 0 && merchantBtBalance < Math.floor(Number(selectedProduct.price || 0) / 100000)
                    ? 'bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-navy-950'
                    : 'bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 text-navy-950'
                }`}
              >
                {Math.floor(Number(selectedProduct.price || 0) / 100000) > 0 && merchantBtBalance < Math.floor(Number(selectedProduct.price || 0) / 100000)
                  ? (isKo ? '⚠️ BT 없이 결제 진행' : 'Buy without BT')
                  : (isKo ? '💎 결제 확정' : 'Confirm Purchase')}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 6. 가맹점 BT 부족 시 최종 구매 확인 다이얼로그 (BT Shortage Confirmation Modal) */}
      {btShortageConfirmModal && btShortageConfirmModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md">
          <div className="w-full max-w-md bg-navy-900 border-2 border-amber-500/60 rounded-3xl p-6 sm:p-7 shadow-2xl space-y-5 animate-scaleIn">
            
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 border border-amber-500/40 text-amber-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-7 h-7" />
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-lg sm:text-xl font-black text-white">
                {isVi ? 'Xác nhận Mua hàng khi không có Vé Thưởng (BT)' : isKo ? '지급할 BT가 없어도 구매하시겠습니까?' : 'Proceed without Bonus Tickets?'}
              </h3>
              
              <div className="bg-navy-950 border border-navy-800 rounded-2xl p-4 text-xs text-left space-y-2">
                <div className="flex justify-between text-slate-300">
                  <span>가맹점(CEO) 현재 BT 보유량:</span>
                  <span className="font-bold text-amber-400">{btShortageConfirmModal.merchantBt} 장</span>
                </div>
                <div className="flex justify-between text-slate-300">
                  <span>원래 적립 예정 BT:</span>
                  <span className="font-bold text-slate-400 line-through">+{btShortageConfirmModal.requiredBt} 장</span>
                </div>
                <div className="border-t border-navy-800 pt-2 text-[11px] text-amber-200 leading-relaxed">
                  ⚠️ 현재 가맹점 대표 계정에 보유된 보너스 티켓(BT)이 모두 소진되어, <strong>이번 주문 시에는 보너스 티켓이 추가 지급되지 않습니다.</strong> (5% BM 캐시백은 정상 제공됩니다.)
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <button
                type="button"
                onClick={() => setBtShortageConfirmModal(null)}
                className="w-full sm:flex-1 bg-navy-800 hover:bg-navy-700 text-slate-200 font-bold py-3 rounded-xl text-xs transition-colors border border-navy-700"
              >
                {isVi ? 'Hủy bỏ' : isKo ? '취소 (구매 안 함)' : 'Cancel'}
              </button>
              
              <button
                type="button"
                onClick={() => executePurchase(btShortageConfirmModal.targetType, btShortageConfirmModal.product, true)}
                className="w-full sm:flex-1 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 text-navy-950 font-black py-3 rounded-xl text-xs shadow-lg transition-transform active:scale-95 flex items-center justify-center"
              >
                <span>{isVi ? 'Đồng ý tiếp tục mua' : isKo ? 'BT 없이 구매 계속 진행' : 'Proceed without BT'}</span>
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Success Notification Toast */}
      {purchaseSuccessMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white px-5 py-3 rounded-2xl shadow-2xl font-bold text-xs sm:text-sm flex items-center space-x-2 animate-bounce">
          <CheckCircle className="w-5 h-5 flex-shrink-0" />
          <span>{purchaseSuccessMessage}</span>
        </div>
      )}

    </div>
  );
}
