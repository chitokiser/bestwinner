import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Settings, 
  TrendingUp, 
  Truck, 
  Search, 
  Calculator, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  Package, 
  RefreshCw, 
  Plus, 
  Trash2, 
  Send, 
  Sparkles, 
  Lock, 
  Unlock, 
  KeyRound, 
  Info,
  Sliders,
  Check,
  Eye,
  EyeOff,
  Star,
  X,
  ChevronRight,
  Shield,
  Clock,
  RotateCcw,
  Minus,
  Database,
  PlusCircle,
  Download,
  Image as ImageIcon
} from 'lucide-react';
import { 
  CJDropshippingService, 
  DEMO_CJ_PRODUCTS, 
  SHIPPING_METHODS,
  GLOBAL_CJ_DB_POOL
} from '../services/cjDropshippingService';
import { isSuperAdminEmail } from '../services/userService';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80';

export default function DropshippingPage({ t, user }) {
  // Mode State: false = General Customer View, true = Admin Control Mode
  const [isAdminMode, setIsAdminMode] = useState(() => {
    const saved = localStorage.getItem('best_mall_admin_authenticated') === 'true';
    if (user && isSuperAdminEmail(user.email)) return true;
    return saved;
  });

  useEffect(() => {
    if (user && isSuperAdminEmail(user.email)) {
      setIsAdminMode(true);
      localStorage.setItem('best_mall_admin_authenticated', 'true');
    }
  }, [user]);

  const [isAdminAuthModalOpen, setIsAdminAuthModalOpen] = useState(false);
  const [adminPinInput, setAdminPinInput] = useState('');
  const [adminAuthError, setAdminAuthError] = useState('');

  // Product Detail Modal State
  const [selectedProductDetail, setSelectedProductDetail] = useState(null);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [detailQuantity, setDetailQuantity] = useState(1);
  const [activeDetailTab, setActiveDetailTab] = useState('desc');

  // Admin Active Tab
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog', 'import', 'calculator', 'orders', 'settings'
  
  // CJ DB Import / Search State for Admin
  const [dbSearchQuery, setDbSearchQuery] = useState('');
  const [dbCategoryFilter, setDbCategoryFilter] = useState('all');
  const [dbSearchResults, setDbSearchResults] = useState(GLOBAL_CJ_DB_POOL);
  const [registeringProduct, setRegisteringProduct] = useState(null);
  const [customMarginPercent, setCustomMarginPercent] = useState(35);
  const [customCategory, setCustomCategory] = useState('interior');

  // Filter & Search for Main Store Catalog
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-low', 'price-high', 'margin'

  // Config & API Settings (Admin only)
  const [config, setConfig] = useState(() => CJDropshippingService.getStoredConfig());
  const [isApiModalOpen, setIsApiModalOpen] = useState(false);
  const [apiKeyInput, setApiKeyInput] = useState(config.apiKey || '');
  const [emailInput, setEmailInput] = useState(config.email || '');
  const [authStatus, setAuthStatus] = useState({ loading: false, error: null, successMsg: null });

  // Shopping Cart & Order States
  const [cart, setCart] = useState([]);
  const [ordersHistory, setOrdersHistory] = useState(() => CJDropshippingService.getOrdersHistory());
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);
  const [orderForm, setOrderForm] = useState({
    customerName: '',
    phone: '',
    address: '',
    courier: 'CJPacket_Standard'
  });
  const [orderSubmitting, setOrderSubmitting] = useState(false);

  // Admin Margin Calculator Interactive State
  const [selectedProductForCalc, setSelectedProductForCalc] = useState(DEMO_CJ_PRODUCTS[0]);
  const [calcMarginPercent, setCalcMarginPercent] = useState(35);
  const [calcShippingMethod, setCalcShippingMethod] = useState('CJPacket_Standard');

  // Filtered Main Store Products
  const [products, setProducts] = useState(DEMO_CJ_PRODUCTS);
  const [registeredCustomIds, setRegisteredCustomIds] = useState(() => 
    CJDropshippingService.getRegisteredCustomProducts().map(p => p.cjSku || p.id)
  );

  // Load Main Catalog Products
  const loadProducts = async () => {
    const list = await CJDropshippingService.getProducts({
      category: selectedCategory,
      keyword: searchQuery
    });

    let result = [...list];
    if (sortBy === 'price-low') {
      result.sort((a, b) => a.suggestedRetailUSD - b.suggestedRetailUSD);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.suggestedRetailUSD - a.suggestedRetailUSD);
    } else if (sortBy === 'margin' && isAdminMode) {
      result.sort((a, b) => (b.suggestedRetailUSD - b.supplierPriceUSD) - (a.suggestedRetailUSD - a.supplierPriceUSD));
    }

    setProducts(result);
    setRegisteredCustomIds(CJDropshippingService.getRegisteredCustomProducts().map(p => p.cjSku || p.id));
  };

  useEffect(() => {
    loadProducts();
  }, [selectedCategory, searchQuery, sortBy, isAdminMode]);

  // Live CJ Global DB Search for Admin
  useEffect(() => {
    const fetchDbResults = async () => {
      const results = await CJDropshippingService.searchCJGlobalDatabase({
        keyword: dbSearchQuery,
        category: dbCategoryFilter
      });
      setDbSearchResults(results);
    };
    fetchDbResults();
  }, [dbSearchQuery, dbCategoryFilter]);

  // Open Product Detail Modal
  const openProductDetail = (product) => {
    setSelectedProductDetail(product);
    setSelectedVariantIndex(0);
    setDetailQuantity(1);
    setActiveDetailTab('desc');
  };

  // Register Product to BEST Mall Catalog
  const handleConfirmRegisterProduct = (e) => {
    e.preventDefault();
    if (!registeringProduct) return;

    const marginCalc = CJDropshippingService.calculateMargin({
      supplierPriceUSD: registeringProduct.supplierPriceUSD,
      weightKg: registeringProduct.weightKg,
      shippingMethodCode: 'CJPacket_Standard',
      marginPercent: customMarginPercent
    });

    const finalProduct = {
      ...registeringProduct,
      category: customCategory || registeringProduct.category,
      suggestedRetailUSD: marginCalc.sellingPriceUSD,
      customMarginPercent
    };

    const registered = CJDropshippingService.registerProductToStore(finalProduct);
    if (registered) {
      loadProducts();
      setRegisteringProduct(null);
      alert(`[${finalProduct.name.ko}] 상품이 BEST Mall 카탈로그에 성공적으로 등록되었습니다!\n상점 카탈로그 탭에서 즉시 확인 가능합니다.`);
    }
  };

  const handleDeleteRegisteredProduct = (id, name) => {
    if (window.confirm(`[${name}] 상품을 쇼핑몰 카탈로그에서 삭제하시겠습니까?`)) {
      CJDropshippingService.deleteRegisteredProduct(id);
      loadProducts();
    }
  };

  // Handle Admin Login / PIN Check
  const handleAdminLoginSubmit = (e) => {
    e.preventDefault();
    if (adminPinInput.trim() === 'admin1234' || adminPinInput.trim() === '1234' || adminPinInput.trim() === 'best2026') {
      setIsAdminMode(true);
      localStorage.setItem('best_mall_admin_authenticated', 'true');
      setIsAdminAuthModalOpen(false);
      setAdminPinInput('');
      setAdminAuthError('');
    } else {
      setAdminAuthError('비밀번호가 올바르지 않습니다. (기본 핀: admin1234)');
    }
  };

  const handleAdminLogout = () => {
    setIsAdminMode(false);
    localStorage.removeItem('best_mall_admin_authenticated');
    setActiveTab('catalog');
  };

  // Cart operations
  const addToCart = (product, quantity = 1, selectedVariant = null) => {
    const variantName = selectedVariant || (product.variants && product.variants[0]) || '';
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id && item.selectedVariant === variantName);
      if (exist) {
        return prev.map(item => (item.id === product.id && item.selectedVariant === variantName) ? { ...item, qty: item.qty + quantity } : item);
      }
      return [...prev, { ...product, qty: quantity, selectedVariant: variantName }];
    });
  };

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const handleApiAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthStatus({ loading: true, error: null, successMsg: null });

    const result = await CJDropshippingService.authenticate({
      email: emailInput,
      apiKey: apiKeyInput
    });

    setAuthStatus({ loading: false, error: null, successMsg: null });
    if (result.success) {
      const updated = CJDropshippingService.getStoredConfig();
      setConfig(updated);
      setAuthStatus({ loading: false, error: null, successMsg: 'BEST Mall 풀필먼트 API 연동이 완료되었습니다!' });
      setTimeout(() => setIsApiModalOpen(false), 1200);
    } else {
      setAuthStatus({ loading: false, error: result.message, successMsg: null });
    }
  };

  const handleOrderSubmit = async (e) => {
    e.preventDefault();
    if (cart.length === 0) return;
    setOrderSubmitting(true);

    const totalUSD = cart.reduce((sum, item) => sum + (item.suggestedRetailUSD * item.qty), 0);
    const newOrder = await CJDropshippingService.createOrderSimulation({
      customerName: orderForm.customerName,
      phone: orderForm.phone,
      address: orderForm.address,
      courier: orderForm.courier,
      items: cart,
      totalUSD
    });

    setOrderSubmitting(false);
    setCart([]);
    setIsOrderModalOpen(false);
    setOrdersHistory(CJDropshippingService.getOrdersHistory());
    
    if (isAdminMode) {
      setActiveTab('orders');
    }
    alert(`주문이 성공적으로 접수되었습니다!\n주문 번호: ${newOrder.orderId}\n담당자가 확인 후 신속하게 배송 절차를 진행합니다.`);
  };

  const marginCalculation = CJDropshippingService.calculateMargin({
    supplierPriceUSD: selectedProductForCalc.supplierPriceUSD,
    weightKg: selectedProductForCalc.weightKg,
    shippingMethodCode: calcShippingMethod,
    marginPercent: calcMarginPercent
  });

  const cartTotalUSD = cart.reduce((sum, item) => sum + (item.suggestedRetailUSD * item.qty), 0);
  const cartTotalVND = Math.round(cartTotalUSD * 25400);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Top Header Banner & Mode Switch Bar */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-indigo-950 border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>BEST winner Group Official Store</span>
              </div>
              
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                BEST <span className="gold-gradient-text">Mall</span>
                {isAdminMode && (
                  <span className="ml-3 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 align-middle">
                    [관리자 통합 관제 모드]
                  </span>
                )}
              </h1>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {isAdminMode 
                  ? 'BEST Mall 스마트 쇼핑몰 관리자 모드입니다. 글로벌 CJ DB 상품 검색 & 직접 등록, 원가/마진 분석 및 풀필먼트 주문 자동 발송을 관제할 수 있습니다.'
                  : '스마트 하우징, 프리미엄 공간 인테리어, 소방/안전용품 및 차세대 태양광 에너지를 포함한 BEST winner Group 종합 셀렉트 숍입니다.'}
              </p>
            </div>

            {/* Admin Toggle / Status */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-navy-900/90 border border-navy-800 p-4 rounded-2xl">
              {isAdminMode ? (
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-emerald-400">운영자 관리 모드</span>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => setIsApiModalOpen(true)}
                      className="px-3 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center space-x-1 min-h-[40px]"
                    >
                      <Settings className="w-3.5 h-3.5 text-gold-400" />
                      <span>API 연동</span>
                    </button>

                    <button
                      onClick={handleAdminLogout}
                      className="px-3 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 text-xs font-bold border border-rose-500/30 transition-all flex items-center justify-center space-x-1 min-h-[40px]"
                    >
                      <Lock className="w-3.5 h-3.5" />
                      <span>관리자 종료</span>
                    </button>
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsAdminAuthModalOpen(true)}
                  className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-navy-950 hover:bg-navy-800 text-slate-400 hover:text-gold-400 border border-navy-800 text-xs font-bold transition-all flex items-center justify-center space-x-2 min-h-[44px]"
                >
                  <Lock className="w-4 h-4 text-gold-500" />
                  <span>쇼핑몰 관리자 로그인</span>
                </button>
              )}
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-navy-800/80 pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">프리미엄 검증 상품</p>
                <p className="text-base font-bold text-white">Official Quality</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">빠른 안전 직송 배송</p>
                <p className="text-base font-bold text-white">4 ~ 7 일 직송</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">품질 보증 & 직영 A/S</p>
                <p className="text-base font-bold text-white">100% Guaranteed</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">결제 및 문의</p>
                <p className="text-base font-bold text-white">Zalo / B2B 견적 지원</p>
              </div>
            </div>
          </div>
        </div>

        {/* ADMIN MODE ONLY: Tab Navigation */}
        {isAdminMode && (
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-navy-800 pb-4">
            <div className="flex flex-wrap items-center gap-2 overflow-x-auto pb-1 max-w-full">
              <button
                onClick={() => setActiveTab('catalog')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 min-h-[44px] ${
                  activeTab === 'catalog'
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-800'
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>상점 등록 카탈로그 ({products.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('import')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 min-h-[44px] ${
                  activeTab === 'import'
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-800'
                }`}
              >
                <Database className="w-4 h-4 text-cyan-400" />
                <span>🔍 CJ DB 검색 & 직접 등록</span>
              </button>

              <button
                onClick={() => setActiveTab('calculator')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 min-h-[44px] ${
                  activeTab === 'calculator'
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-800'
                }`}
              >
                <Calculator className="w-4 h-4" />
                <span>원가 & 마진율 분석기</span>
              </button>

              <button
                onClick={() => setActiveTab('orders')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 min-h-[44px] ${
                  activeTab === 'orders'
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-800'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>풀필먼트 발송 내역 ({ordersHistory.length})</span>
              </button>

              <button
                onClick={() => setActiveTab('settings')}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-2 min-h-[44px] ${
                  activeTab === 'settings'
                    ? 'bg-gold-500 text-navy-950 shadow-lg shadow-gold-500/20'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 hover:text-white border border-navy-800'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>풀필먼트 API 콘솔</span>
              </button>
            </div>

            {cart.length > 0 && (
              <button
                onClick={() => setIsOrderModalOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs transition-all flex items-center space-x-2 shadow-lg min-h-[44px]"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>담은 상품 ({cart.length}) - 주문 발송 처리</span>
              </button>
            )}
          </div>
        )}

        {/* CUSTOMER VIEW & ADMIN CATALOG TAB */}
        {(!isAdminMode || activeTab === 'catalog') && (
          <div className="space-y-6">
            
            {/* Filter & Search Bar */}
            <div className="bg-navy-900/90 border border-navy-800 rounded-2xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              
              {/* Category Pills */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-1 max-w-full">
                {[
                  { id: 'all', label: '전체 상품' },
                  { id: 'interior', label: '맞춤 인테리어' },
                  { id: 'parking', label: 'AI 주차/차량' },
                  { id: 'energy', label: '3D 태양광' },
                  { id: 'firefighting', label: '소방/안전' },
                  { id: 'waterproofing', label: '건축 방수' },
                  { id: 'elevator', label: '승강기 보안' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-colors min-h-[36px] ${
                      selectedCategory === cat.id
                        ? 'bg-gold-500/20 text-gold-400 border border-gold-500/40'
                        : 'bg-navy-950 text-slate-400 hover:text-slate-200 border border-navy-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search & Order controls */}
              <div className="flex items-center space-x-3">
                <div className="relative flex-grow md:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="상품명 검색..."
                    className="w-full pl-9 pr-3 py-2 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50"
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-navy-950 border border-navy-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-gold-500/50"
                >
                  <option value="popular">인기순 정렬</option>
                  <option value="price-low">가격 낮은순</option>
                  <option value="price-high">가격 높은순</option>
                  {isAdminMode && <option value="margin">관리자 마진율순</option>}
                </select>
              </div>

            </div>

            {/* Product Cards Grid */}
            {products.length === 0 ? (
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-12 text-center space-y-4">
                <Search className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">검색 조건에 맞는 상품이 없습니다.</h4>
                <p className="text-slate-400 text-xs">검색어(예: 인테리어, 태양광, 소방, 청소기)나 카테고리 필터를 변경해 보세요.</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="px-4 py-2 bg-navy-800 hover:bg-navy-700 text-gold-400 font-bold text-xs rounded-xl border border-navy-700 transition-colors"
                >
                  검색 및 카테고리 초기화
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {products.map((product) => {
                  const marginData = CJDropshippingService.calculateMargin({
                    supplierPriceUSD: product.supplierPriceUSD,
                    weightKg: product.weightKg,
                    shippingMethodCode: 'CJPacket_Standard',
                    marginPercent: product.customMarginPercent || 35
                  });

                  const retailVND = Math.round(product.suggestedRetailUSD * 25400);

                  return (
                    <div 
                      key={product.id}
                      className="bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group cursor-pointer"
                      onClick={() => openProductDetail(product)}
                    >
                      {/* Image & Tags */}
                      <div className="relative aspect-video sm:aspect-square overflow-hidden bg-navy-950">
                        <img 
                          src={product.image || FALLBACK_IMAGE} 
                          alt={product.name?.ko || '상품 이미지'}
                          loading="lazy"
                          onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        
                        {/* Overlay Preview Badge */}
                        <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="px-3 py-1.5 rounded-xl bg-navy-900/90 text-gold-400 border border-gold-500/40 text-xs font-bold flex items-center space-x-1 shadow-xl">
                            <Eye className="w-4 h-4" />
                            <span>상세보기</span>
                          </span>
                        </div>

                        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                          {product.tags?.map((tag, i) => (
                            <span key={i} className="px-2 py-0.5 rounded-md bg-navy-950/80 backdrop-blur-md text-[10px] font-bold text-gold-400 border border-gold-500/30">
                              {tag}
                            </span>
                          ))}
                        </div>

                        {/* Rating Badge */}
                        <div className="absolute top-2 right-2 px-2 py-0.5 rounded-md bg-navy-950/80 backdrop-blur-md text-[10px] font-bold text-amber-400 flex items-center space-x-1 border border-amber-500/20">
                          <Star className="w-3 h-3 fill-amber-400" />
                          <span>{product.rating || 4.9}</span>
                        </div>

                        {isAdminMode && (
                          <div className="absolute bottom-2 right-2 flex items-center space-x-1">
                            {product.isCustomRegistered && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteRegisteredProduct(product.id, product.name.ko);
                                }}
                                className="bg-rose-600 hover:bg-rose-500 text-white p-1 rounded text-[10px] font-bold"
                                title="카탈로그 등록 삭제"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            )}
                            <span className="bg-rose-500/90 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-white">
                              SKU: {product.cjSku}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Content Body */}
                      <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <h3 className="text-sm font-bold text-white line-clamp-2 group-hover:text-gold-400 transition-colors">
                            {product.name?.ko || product.name}
                          </h3>
                          <p className="text-xs text-slate-400 line-clamp-1">
                            {product.name?.vi || ''}
                          </p>
                        </div>

                        {/* General Customer Price Display */}
                        {!isAdminMode ? (
                          <div className="bg-navy-950/70 border border-navy-800 rounded-xl p-3 space-y-1">
                            <p className="text-[11px] text-slate-400">소비자 판매가</p>
                            <div className="flex items-baseline justify-between">
                              <span className="text-lg font-extrabold text-gold-400">
                                {retailVND.toLocaleString()} ₫
                              </span>
                              <span className="text-xs font-semibold text-slate-400">
                                (${product.suggestedRetailUSD.toFixed(2)})
                              </span>
                            </div>
                          </div>
                        ) : (
                          /* Admin Mode Specs & Margin View */
                          <div className="bg-navy-950/70 border border-rose-500/30 rounded-xl p-3 space-y-2 text-xs">
                            <div className="flex justify-between items-center text-slate-400">
                              <span>원가 (Supplier):</span>
                              <span className="font-bold text-white">${product.supplierPriceUSD.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center text-slate-400">
                              <span>소비자가격:</span>
                              <span className="font-bold text-emerald-400">${product.suggestedRetailUSD.toFixed(2)}</span>
                            </div>
                            <div className="flex justify-between items-center border-t border-navy-800 pt-1 text-slate-300">
                              <span>예상 마진수익:</span>
                              <span className="font-extrabold text-gold-400">
                                +${marginData.profitUSD} ({marginData.profitVND.toLocaleString()}₫)
                              </span>
                            </div>
                          </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center space-x-2 pt-2" onClick={(e) => e.stopPropagation()}>
                          <button
                            onClick={() => openProductDetail(product)}
                            className="py-2.5 px-3 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
                            title="상세보기"
                          >
                            <Eye className="w-3.5 h-3.5 text-gold-400" />
                            <span className="hidden sm:inline">상세</span>
                          </button>

                          <button
                            onClick={() => addToCart(product)}
                            className="flex-1 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-extrabold transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
                          >
                            <Plus className="w-4 h-4" />
                            <span>담기</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* 🔍 ADMIN TAB: CJ GLOBAL DB SEARCH & DIRECT IMPORT */}
        {isAdminMode && activeTab === 'import' && (
          <div className="space-y-6">
            
            <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                    <Database className="w-5 h-5 text-cyan-400" />
                    <span>CJ 글로벌 데이터베이스 실시간 검색 & 직접 등록</span>
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    CJ 글로벌 Dropshipping DB에서 원하는 상품을 찾아 BEST Mall 상점에 직접 등록하고 마진율을 설정합니다.
                  </p>
                </div>
              </div>

              {/* DB Search & Category Filter */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                <div className="sm:col-span-2 relative">
                  <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={dbSearchQuery}
                    onChange={(e) => setDbSearchQuery(e.target.value)}
                    placeholder="글로벌 CJ DB 키워드 또는 SKU 검색 (예: 인테리어, 로봇 청소기, 태양광, 소방, AI)..."
                    className="w-full pl-10 pr-4 py-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-cyan-500/50"
                  />
                </div>

                <select
                  value={dbCategoryFilter}
                  onChange={(e) => setDbCategoryFilter(e.target.value)}
                  className="px-3 py-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-cyan-500/50"
                >
                  <option value="all">전체 DB 카테고리 ({GLOBAL_CJ_DB_POOL.length}개)</option>
                  <option value="interior">맞춤 인테리어</option>
                  <option value="parking">AI 주차/차량</option>
                  <option value="energy">3D 태양광</option>
                  <option value="firefighting">소방/안전</option>
                  <option value="waterproofing">건축 방수</option>
                  <option value="elevator">승강기 보안</option>
                </select>
              </div>
            </div>

            {/* CJ DB Search Results Grid */}
            {dbSearchResults.length === 0 ? (
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-12 text-center space-y-4">
                <Database className="w-12 h-12 text-slate-600 mx-auto" />
                <h4 className="text-base font-bold text-white">CJ 글로벌 DB에 조건에 일치하는 상품이 없습니다.</h4>
                <p className="text-slate-400 text-xs">다른 키워드(예: 인테리어, 청소기, 소방, 태양광)를 검색해 보세요.</p>
                <button
                  onClick={() => {
                    setDbSearchQuery('');
                    setDbCategoryFilter('all');
                  }}
                  className="px-4 py-2 bg-navy-800 hover:bg-navy-700 text-cyan-400 font-bold text-xs rounded-xl border border-navy-700 transition-colors"
                >
                  전체 CJ DB 목록 보기
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {dbSearchResults.map((dbProduct) => {
                  const isAlreadyRegistered = registeredCustomIds.includes(dbProduct.cjSku) || registeredCustomIds.includes(dbProduct.id);
                  const marginData = CJDropshippingService.calculateMargin({
                    supplierPriceUSD: dbProduct.supplierPriceUSD,
                    weightKg: dbProduct.weightKg,
                    shippingMethodCode: 'CJPacket_Standard',
                    marginPercent: 35
                  });

                  return (
                    <div
                      key={dbProduct.id}
                      className="bg-navy-900 border border-navy-800 hover:border-cyan-500/40 rounded-2xl p-5 space-y-4 shadow-xl flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        <div className="relative aspect-video rounded-xl overflow-hidden bg-navy-950 border border-navy-800">
                          <img 
                            src={dbProduct.image || FALLBACK_IMAGE} 
                            alt={dbProduct.name?.ko || '상품 이미지'} 
                            loading="lazy"
                            onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-navy-950/80 backdrop-blur-md px-2 py-0.5 rounded text-[10px] font-bold text-cyan-400 border border-cyan-500/30">
                            SKU: {dbProduct.cjSku}
                          </div>
                        </div>

                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded border border-gold-500/30">
                            카테고리: {dbProduct.category}
                          </span>
                          <h4 className="text-sm font-bold text-white line-clamp-2 pt-1">{dbProduct.name?.ko || dbProduct.name}</h4>
                          <p className="text-xs text-slate-400 line-clamp-1">{dbProduct.name?.vi || ''}</p>
                        </div>

                        {/* Specs */}
                        <div className="bg-navy-950 p-3 rounded-xl border border-navy-800 text-xs space-y-1.5">
                          <div className="flex justify-between text-slate-400">
                            <span>CJ 도매 원가:</span>
                            <span className="font-bold text-white">${dbProduct.supplierPriceUSD.toFixed(2)}</span>
                          </div>
                          <div className="flex justify-between text-slate-400">
                            <span>권장 소비자 판매가:</span>
                            <span className="font-bold text-emerald-400">${marginData.sellingPriceUSD} (≈ {marginData.sellingPriceVND.toLocaleString()}₫)</span>
                          </div>
                          <div className="flex justify-between text-slate-400 border-t border-navy-800 pt-1">
                            <span>예상 마진:</span>
                            <span className="font-extrabold text-gold-400">+${marginData.profitUSD} (35%)</span>
                          </div>
                        </div>
                      </div>

                      {/* Import Button */}
                      <button
                        onClick={() => {
                          setRegisteringProduct(dbProduct);
                          setCustomMarginPercent(35);
                          setCustomCategory(dbProduct.category || 'interior');
                        }}
                        disabled={isAlreadyRegistered}
                        className={`w-full py-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1 min-h-[44px] ${
                          isAlreadyRegistered
                            ? 'bg-navy-950 text-emerald-400 border border-emerald-500/30 cursor-default'
                            : 'bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-navy-950 font-extrabold shadow-lg'
                        }`}
                      >
                        {isAlreadyRegistered ? (
                          <>
                            <Check className="w-4 h-4" />
                            <span>BEST Mall 등록 완료</span>
                          </>
                        ) : (
                          <>
                            <PlusCircle className="w-4 h-4" />
                            <span>BEST Mall에 직접 등록</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            )}

          </div>
        )}

        {/* ADMIN TAB: MARGIN & LOGISTICS CALCULATOR */}
        {isAdminMode && activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <span>BEST Mall 마진 계산 파라미터</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  상품 원가, 배송비 및 목표 마진율을 실시간으로 시뮬레이션합니다.
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">대상 상품 선택</label>
                <select
                  value={selectedProductForCalc.id}
                  onChange={(e) => {
                    const found = DEMO_CJ_PRODUCTS.find(p => p.id === e.target.value);
                    if (found) setSelectedProductForCalc(found);
                  }}
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-gold-500/50"
                >
                  {DEMO_CJ_PRODUCTS.map(p => (
                    <option key={p.id} value={p.id}>{p.name.ko} (${p.supplierPriceUSD})</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">물류 배송 수단</label>
                <select
                  value={calcShippingMethod}
                  onChange={(e) => setCalcShippingMethod(e.target.value)}
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-gold-500/50"
                >
                  {SHIPPING_METHODS.map(m => (
                    <option key={m.code} value={m.code}>
                      {m.name} ({m.estDays} | 기본 ${m.baseFeeUSD})
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs">
                  <span className="font-bold text-slate-300">목표 마진율 (%)</span>
                  <span className="font-extrabold text-gold-400 text-sm">{calcMarginPercent}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={calcMarginPercent}
                  onChange={(e) => setCalcMarginPercent(Number(e.target.value))}
                  className="w-full accent-gold-500 bg-navy-950 cursor-pointer"
                />
              </div>

              <div className="p-4 bg-navy-950/80 border border-navy-800 rounded-xl space-y-2 text-xs text-slate-400">
                <div className="flex items-center space-x-2 text-gold-400 font-bold">
                  <Info className="w-4 h-4" />
                  <span>환율 적용 기준</span>
                </div>
                <p>1 USD = 25,400 VND (베트남 동)</p>
                <p>1 USD = 1,350 KRW (대한민국 원)</p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={selectedProductForCalc.image || FALLBACK_IMAGE} 
                  alt={selectedProductForCalc.name?.ko || '상품 이미지'} 
                  onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  className="w-32 h-32 object-cover rounded-xl border border-navy-800 flex-shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-[10px] font-bold">
                    SKU: {selectedProductForCalc.cjSku}
                  </span>
                  <h4 className="text-base font-bold text-white">{selectedProductForCalc.name.ko}</h4>
                  <p className="text-xs text-slate-400">{selectedProductForCalc.name.vi}</p>
                  <p className="text-xs text-slate-300">무게: {selectedProductForCalc.weightKg} kg | 재고: {selectedProductForCalc.stock}개</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-navy-900 border border-navy-800 rounded-2xl p-5 space-y-1">
                  <p className="text-xs text-slate-400 font-semibold">1. 공급원가 + 배송비</p>
                  <p className="text-xl font-extrabold text-white">${marginCalculation.totalCostUSD}</p>
                </div>

                <div className="bg-navy-900 border border-emerald-500/30 rounded-2xl p-5 space-y-1">
                  <p className="text-xs text-emerald-400 font-semibold">2. 권장 소비자가격</p>
                  <p className="text-xl font-extrabold text-emerald-400">${marginCalculation.sellingPriceUSD}</p>
                  <p className="text-[11px] text-emerald-300/80 font-bold">
                    ≈ {marginCalculation.sellingPriceVND.toLocaleString()} ₫
                  </p>
                </div>

                <div className="bg-navy-900 border border-gold-500/40 rounded-2xl p-5 space-y-1">
                  <p className="text-xs text-gold-400 font-semibold">3. 단당 순이익금</p>
                  <p className="text-xl font-extrabold text-gold-400">+${marginCalculation.profitUSD}</p>
                  <p className="text-[11px] text-gold-300/90 font-bold">
                    ≈ {marginCalculation.profitVND.toLocaleString()} ₫ ({calcMarginPercent}% 이익)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ADMIN TAB: ORDERS & TRACKING */}
        {isAdminMode && activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Package className="w-5 h-5 text-gold-400" />
                <span>BEST Mall 풀필먼트 주문 처리 내역</span>
              </h3>
              <button
                onClick={() => setOrdersHistory(CJDropshippingService.getOrdersHistory())}
                className="px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300 hover:text-white flex items-center space-x-1"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>새로고침</span>
              </button>
            </div>

            {ordersHistory.length === 0 ? (
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-12 text-center space-y-4">
                <Package className="w-12 h-12 text-slate-600 mx-auto" />
                <p className="text-slate-400 text-sm">아직 접수된 주문 내역이 없습니다.</p>
              </div>
            ) : (
              <div className="space-y-4">
                {ordersHistory.map((ord) => (
                  <div 
                    key={ord.orderId}
                    className="bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-4 shadow-lg"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-b border-navy-800 pb-3">
                      <div>
                        <span className="text-xs font-bold text-gold-400">주문 번호: {ord.orderId}</span>
                        <span className="text-xs text-slate-400 ml-3">접수일: {new Date(ord.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                          {ord.status}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                          운송장: {ord.trackingNumber}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-slate-400 font-semibold mb-1">고객 정보:</p>
                        <p className="text-white font-bold">{ord.customerName} ({ord.phone})</p>
                        <p className="text-slate-300">{ord.address}</p>
                      </div>

                      <div>
                        <p className="text-slate-400 font-semibold mb-1">주문 품목 ({ord.items.length}건):</p>
                        <ul className="space-y-1">
                          {ord.items.map((it, idx) => (
                            <li key={idx} className="text-slate-200 flex justify-between">
                              <span>• {it.name?.ko || it.name} (x{it.qty})</span>
                              <span className="font-bold text-gold-400">${(it.suggestedRetailUSD * it.qty).toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ADMIN TAB: API SETTINGS CONSOLE */}
        {isAdminMode && activeTab === 'settings' && (
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-gold-400" />
                <span>BEST Mall 풀필먼트 API 2.0 연동 콘솔</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                스마트 주문 자동 전송 및 실시간 카탈로그 동기화를 위한 풀필먼트 API 인증 키를 관리합니다.
              </p>
            </div>

            <form onSubmit={handleApiAuthSubmit} className="space-y-4 max-w-xl">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">관리자 계정 이메일</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="admin@bestwinnervn.com"
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-gold-500/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">Fulfillment API Key</label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  placeholder="API Key 입력..."
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-gold-500/50"
                  required
                />
              </div>

              {authStatus.error && (
                <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl text-xs text-rose-300 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{authStatus.error}</span>
                </div>
              )}

              {authStatus.successMsg && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-xs text-emerald-300 flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{authStatus.successMsg}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={authStatus.loading}
                className="w-full py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs rounded-xl shadow-lg transition-all min-h-[44px]"
              >
                {authStatus.loading ? 'API 인증 확인 중...' : '풀필먼트 API 연결 저장하기'}
              </button>
            </form>
          </div>
        )}

      </div>

      {/* 🌟 REGISTER PRODUCT MODAL (NEW FEATURE FOR ADMIN) */}
      {registeringProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
          <div className="bg-navy-900 border border-cyan-500/40 rounded-3xl p-6 w-full max-w-lg space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <PlusCircle className="w-5 h-5 text-cyan-400" />
              <span>BEST Mall 카탈로그 직접 등록 설정</span>
            </h3>

            <div className="p-4 bg-navy-950 rounded-2xl border border-navy-800 space-y-2 text-xs">
              <div className="flex items-center space-x-3">
                <img 
                  src={registeringProduct.image || FALLBACK_IMAGE} 
                  alt="" 
                  onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                  className="w-14 h-14 object-cover rounded-xl" 
                />
                <div>
                  <p className="font-bold text-white">{registeringProduct.name?.ko || registeringProduct.name}</p>
                  <p className="text-slate-400">{registeringProduct.name?.vi || ''}</p>
                  <p className="text-cyan-400 mt-0.5">CJ 도매원가: ${registeringProduct.supplierPriceUSD}</p>
                </div>
              </div>
            </div>

            <form onSubmit={handleConfirmRegisterProduct} className="space-y-4 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">상점 노출 카테고리 지정</label>
                <select
                  value={customCategory}
                  onChange={(e) => setCustomCategory(e.target.value)}
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-white"
                >
                  <option value="interior">맞춤 인테리어</option>
                  <option value="parking">AI 주차/차량</option>
                  <option value="energy">3D 태양광</option>
                  <option value="firefighting">소방/안전</option>
                  <option value="waterproofing">건축 방수</option>
                  <option value="elevator">승강기 보안</option>
                </select>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="font-bold text-slate-300">목표 마진율 (%) 지정</label>
                  <span className="font-extrabold text-gold-400 text-sm">{customMarginPercent}%</span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="100"
                  step="5"
                  value={customMarginPercent}
                  onChange={(e) => setCustomMarginPercent(Number(e.target.value))}
                  className="w-full accent-gold-500 bg-navy-950 cursor-pointer"
                />
              </div>

              <div className="p-3 bg-navy-950 rounded-xl border border-gold-500/30 text-xs space-y-1">
                <p className="text-slate-400">최종 계산된 소비자 판매가:</p>
                <p className="text-lg font-black text-gold-400">
                  {Math.round(CJDropshippingService.calculateMargin({
                    supplierPriceUSD: registeringProduct.supplierPriceUSD,
                    weightKg: registeringProduct.weightKg,
                    shippingMethodCode: 'CJPacket_Standard',
                    marginPercent: customMarginPercent
                  }).sellingPriceUSD * 25400).toLocaleString()} ₫
                </p>
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setRegisteringProduct(null)}
                  className="flex-1 py-3 bg-navy-800 text-slate-300 font-bold rounded-xl min-h-[44px]"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-navy-950 font-extrabold rounded-xl min-h-[44px]"
                >
                  BEST Mall에 등록 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* 🌟 PRODUCT DETAIL MODAL */}
      {selectedProductDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
          <div className="bg-navy-900 border border-gold-500/40 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
            
            {/* Modal Top Close Bar */}
            <div className="px-6 py-4 border-b border-navy-800 flex items-center justify-between bg-navy-950/60">
              <div className="flex items-center space-x-2">
                <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-[10px] font-bold uppercase">
                  BEST Mall Select
                </span>
                <span className="text-xs text-slate-400">카테고리: {selectedProductDetail.category}</span>
              </div>

              <button
                onClick={() => setSelectedProductDetail(null)}
                className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-300 hover:text-white transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 overflow-y-auto space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* Left: Product Image & Badges */}
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-2xl overflow-hidden border border-navy-800 bg-navy-950">
                    <img 
                      src={selectedProductDetail.image || FALLBACK_IMAGE} 
                      alt={selectedProductDetail.name?.ko || '상품 상세 이미지'} 
                      onError={(e) => { e.target.src = FALLBACK_IMAGE; }}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      {selectedProductDetail.tags?.map((t, idx) => (
                        <span key={idx} className="px-2.5 py-1 rounded-lg bg-navy-950/90 text-gold-400 border border-gold-500/30 text-xs font-bold backdrop-blur-md">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Trust Badges Bar */}
                  <div className="grid grid-cols-3 gap-2 text-center text-[11px] text-slate-300">
                    <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                      <Truck className="w-4 h-4 text-cyan-400 mx-auto" />
                      <p className="font-bold">4-7일 직송</p>
                      <p className="text-[9px] text-slate-500">안전 무료배송</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                      <Shield className="w-4 h-4 text-emerald-400 mx-auto" />
                      <p className="font-bold">100% 품질검수</p>
                      <p className="text-[9px] text-slate-500">품질 보증서</p>
                    </div>

                    <div className="p-2.5 rounded-xl bg-navy-950 border border-navy-800 space-y-1">
                      <Clock className="w-4 h-4 text-gold-400 mx-auto" />
                      <p className="font-bold">24/7 CS지원</p>
                      <p className="text-[9px] text-slate-500">베트남 현지 A/S</p>
                    </div>
                  </div>
                </div>

                {/* Right: Info, Price & Options */}
                <div className="space-y-6 flex flex-col justify-between">
                  <div className="space-y-4">
                    
                    <div>
                      <div className="flex items-center space-x-2 text-amber-400 text-xs font-bold mb-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span>{selectedProductDetail.rating || 4.9} ({selectedProductDetail.reviewsCount || 100}개 구매후기)</span>
                      </div>

                      <h2 className="text-xl font-extrabold text-white leading-snug">
                        {selectedProductDetail.name?.ko || selectedProductDetail.name}
                      </h2>
                      <p className="text-xs text-slate-400 mt-1">
                        {selectedProductDetail.name?.vi || ''}
                      </p>
                    </div>

                    {/* Price Block */}
                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-1">
                      <p className="text-xs text-slate-400 font-semibold">소비자 공식 판매가</p>
                      <div className="flex items-baseline space-x-3">
                        <span className="text-2xl font-black text-gold-400">
                          {Math.round(selectedProductDetail.suggestedRetailUSD * 25400).toLocaleString()} ₫
                        </span>
                        <span className="text-sm font-bold text-slate-400">
                          (${selectedProductDetail.suggestedRetailUSD.toFixed(2)})
                        </span>
                      </div>
                      
                      {isAdminMode && (
                        <div className="mt-3 pt-3 border-t border-navy-800 text-xs text-rose-300 space-y-1">
                          <p>• 공급 원가: ${selectedProductDetail.supplierPriceUSD.toFixed(2)}</p>
                          <p>• SKU: {selectedProductDetail.cjSku} | 재고: {selectedProductDetail.stock}개</p>
                        </div>
                      )}
                    </div>

                    {/* Variants Selection */}
                    {selectedProductDetail.variants && selectedProductDetail.variants.length > 0 && (
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-slate-300 block">상품 옵션 / 변형 선택:</label>
                        <div className="flex flex-wrap gap-2">
                          {selectedProductDetail.variants.map((v, i) => (
                            <button
                              key={i}
                              onClick={() => setSelectedVariantIndex(i)}
                              className={`px-3 py-2 rounded-xl text-xs font-bold transition-all min-h-[38px] ${
                                selectedVariantIndex === i
                                  ? 'bg-gold-500 text-navy-950 shadow-md'
                                  : 'bg-navy-950 border border-navy-800 text-slate-300 hover:border-gold-500/40'
                              }`}
                            >
                              {v}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Quantity Selector */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-300 block">구매 수량:</label>
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center bg-navy-950 border border-navy-800 rounded-xl p-1">
                          <button
                            onClick={() => setDetailQuantity(Math.max(1, detailQuantity - 1))}
                            className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className="w-12 text-center text-sm font-bold text-white">{detailQuantity}</span>
                          <button
                            onClick={() => setDetailQuantity(detailQuantity + 1)}
                            className="p-2 rounded-lg bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white min-h-[36px] min-w-[36px] flex items-center justify-center"
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>

                        <span className="text-xs text-slate-400 font-semibold">
                          소계: <span className="text-gold-400 font-bold">{Math.round(selectedProductDetail.suggestedRetailUSD * detailQuantity * 25400).toLocaleString()} ₫</span>
                        </span>
                      </div>
                    </div>

                  </div>

                  {/* Modal Action Buttons */}
                  <div className="flex items-center space-x-3 pt-4 border-t border-navy-800">
                    <button
                      onClick={() => {
                        addToCart(
                          selectedProductDetail, 
                          detailQuantity, 
                          selectedProductDetail.variants ? selectedProductDetail.variants[selectedVariantIndex] : null
                        );
                        alert(`${selectedProductDetail.name?.ko || selectedProductDetail.name} (${detailQuantity}개)가 장바구니에 추가되었습니다.`);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold transition-all flex items-center justify-center space-x-2 min-h-[48px]"
                    >
                      <ShoppingBag className="w-4 h-4 text-gold-400" />
                      <span>장바구니 담기</span>
                    </button>

                    <button
                      onClick={() => {
                        addToCart(
                          selectedProductDetail, 
                          detailQuantity, 
                          selectedProductDetail.variants ? selectedProductDetail.variants[selectedVariantIndex] : null
                        );
                        setSelectedProductDetail(null);
                        setIsOrderModalOpen(true);
                      }}
                      className="flex-1 py-3 px-4 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-extrabold transition-all flex items-center justify-center space-x-2 shadow-lg min-h-[48px]"
                    >
                      <Send className="w-4 h-4" />
                      <span>바로 주문 신청</span>
                    </button>
                  </div>

                </div>
              </div>

              {/* Bottom Tabs: Features, Specs, Shipping */}
              <div className="border-t border-navy-800 pt-6 space-y-4">
                <div className="flex border-b border-navy-800 space-x-4">
                  {[
                    { id: 'desc', label: '상품 핵심 특징' },
                    { id: 'specs', label: '스펙 및 사양' },
                    { id: 'shipping', label: '배송 및 교환/반품' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveDetailTab(tab.id)}
                      className={`pb-3 text-xs font-bold transition-all relative ${
                        activeDetailTab === tab.id
                          ? 'text-gold-400 border-b-2 border-gold-500'
                          : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Tab 1: Description & Features */}
                {activeDetailTab === 'desc' && (
                  <div className="space-y-3 text-xs text-slate-300 leading-relaxed bg-navy-950/60 p-4 rounded-2xl border border-navy-800">
                    <p className="font-bold text-white">✨ BEST winner Group 프리미엄 큐레이션</p>
                    <p>본 제품은 한국 정밀 품질 규격 및 베트남 현지 공정 표준에 맞추어 엄격하게 검증된 프리미엄 상품입니다.</p>
                    <ul className="space-y-1.5 pt-2 text-slate-400">
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>한국 및 베트남 주요 품질/안전 인증 완료</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>초고속 해외 직구 풀필먼트 시스템으로 4~7일 내 무료 직송</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>BEST winner Group 24시간 직영 A/S 기술 지원 파이프라인 연계</span>
                      </li>
                    </ul>
                  </div>
                )}

                {/* Tab 2: Specs */}
                {activeDetailTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-3 text-xs bg-navy-950/60 p-4 rounded-2xl border border-navy-800">
                    <div>
                      <span className="text-slate-400 block">무게 (Weight):</span>
                      <span className="font-bold text-white">{selectedProductDetail.weightKg} kg</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">재고 상태 (Stock):</span>
                      <span className="font-bold text-emerald-400">실시간 직송 가능 ({selectedProductDetail.stock}개)</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">무상 보증 기간:</span>
                      <span className="font-bold text-gold-400">12개월 (1년) 무상 보증</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block">원산지 / 제조국:</span>
                      <span className="font-bold text-white">Best Certified Logistics</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: Shipping & Returns */}
                {activeDetailTab === 'shipping' && (
                  <div className="space-y-2 text-xs text-slate-400 bg-navy-950/60 p-4 rounded-2xl border border-navy-800">
                    <p className="font-bold text-white">🚚 배송 및 A/S 안내</p>
                    <p>• 주문 결제 완료 후 24시간 이내 포장 및 송장 발급이 진행됩니다.</p>
                    <p>• 베트남 및 한국 전지역 평균 4~7일 소요됩니다 (특수 도서산간 제외).</p>
                    <p>• 제품 초기 불량 시 7일 이내 무상 교환 및 1년 직영 A/S가 지원됩니다.</p>
                  </div>
                )}

              </div>

            </div>

          </div>
        </div>
      )}

      {/* ADMIN LOGIN PIN MODAL */}
      {isAdminAuthModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-sm space-y-4 shadow-2xl">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 bg-gold-500/10 text-gold-400 rounded-2xl flex items-center justify-center mx-auto border border-gold-500/30">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-white">BEST Mall 관리자 비밀번호</h3>
              <p className="text-xs text-slate-400">승인된 운영자 전용 암호를 입력하세요.</p>
            </div>

            <form onSubmit={handleAdminLoginSubmit} className="space-y-3">
              <div>
                <input
                  type="password"
                  autoFocus
                  value={adminPinInput}
                  onChange={(e) => setAdminPinInput(e.target.value)}
                  placeholder="비밀번호 입력 (기본: admin1234)"
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white text-center tracking-widest focus:outline-none focus:border-gold-500/50"
                  required
                />
              </div>

              {adminAuthError && (
                <p className="text-[11px] text-rose-400 text-center font-semibold">{adminAuthError}</p>
              )}

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsAdminAuthModalOpen(false);
                    setAdminAuthError('');
                  }}
                  className="flex-1 py-2.5 bg-navy-800 text-slate-300 text-xs font-bold rounded-xl min-h-[44px]"
                >
                  취소
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-gold-500 text-navy-950 text-xs font-bold rounded-xl min-h-[44px]"
                >
                  관리자 로그인
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* API Key Modal (Admin only) */}
      {isApiModalOpen && isAdminMode && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-md space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gold-400" />
              <span>BEST Mall API Key 설정</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">Email</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white"
                  placeholder="admin@bestwinnervn.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">API Key</label>
                <input
                  type="password"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white"
                  placeholder="API Key"
                />
              </div>
            </div>

            <div className="flex space-x-2 pt-2">
              <button
                onClick={() => setIsApiModalOpen(false)}
                className="flex-1 py-2.5 bg-navy-800 text-slate-300 text-xs font-bold rounded-xl min-h-[44px]"
              >
                취소
              </button>
              <button
                onClick={handleApiAuthSubmit}
                className="flex-1 py-2.5 bg-gold-500 text-navy-950 text-xs font-bold rounded-xl min-h-[44px]"
              >
                저장
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CUSTOMER ORDER MODAL */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <ShoppingBag className="w-5 h-5 text-gold-400" />
              <span>BEST Mall 주문 신청</span>
            </h3>

            <div className="bg-navy-950 border border-navy-800 p-4 rounded-xl space-y-3 text-xs">
              <p className="font-bold text-gold-400">선택하신 품목 목록:</p>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-slate-300">
                  <span>{item.name?.ko || item.name} {item.selectedVariant ? `(${item.selectedVariant})` : ''} (x{item.qty})</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">
                      {Math.round(item.suggestedRetailUSD * item.qty * 25400).toLocaleString()} ₫
                    </span>
                    <button onClick={() => removeFromCart(item.id)} className="text-rose-400 hover:text-rose-300">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="border-t border-navy-800 pt-2 flex justify-between items-center text-sm font-bold text-white">
                <span>총 주문 결제 예정금액:</span>
                <span className="text-gold-400 text-base">{cartTotalVND.toLocaleString()} ₫</span>
              </div>
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">성함 / 담당자명 (Full Name)</label>
                <input
                  type="text"
                  required
                  value={orderForm.customerName}
                  onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
                  placeholder="성함을 입력해 주세요"
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">연락처 (Phone / Zalo)</label>
                <input
                  type="text"
                  required
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  placeholder="연락처를 입력해 주세요 (0988-123-456)"
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">배송지 주소 (Delivery Address)</label>
                <textarea
                  required
                  rows="2"
                  value={orderForm.address}
                  onChange={(e) => setOrderForm({ ...orderForm, address: e.target.value })}
                  placeholder="배송 받으실 상세 주소를 입력하세요"
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-white resize-none"
                />
              </div>

              <div className="flex space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsOrderModalOpen(false)}
                  className="flex-1 py-3 bg-navy-800 text-slate-300 font-bold rounded-xl min-h-[44px]"
                >
                  닫기
                </button>
                <button
                  type="submit"
                  disabled={orderSubmitting}
                  className="flex-1 py-3 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-xl min-h-[44px] flex items-center justify-center space-x-1"
                >
                  <Send className="w-4 h-4" />
                  <span>{orderSubmitting ? '주문 처리 중...' : '주문 신청 완료'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
