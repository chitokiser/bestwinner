import React, { useState, useEffect } from 'react';
import { 
  ShoppingBag, 
  Settings, 
  TrendingUp, 
  Truck, 
  Search, 
  Filter, 
  Calculator, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  DollarSign, 
  Package, 
  RefreshCw, 
  ExternalLink,
  Plus,
  Trash2,
  Send,
  Sparkles,
  Info
} from 'lucide-react';
import { 
  CJDropshippingService, 
  DEMO_CJ_PRODUCTS, 
  SHIPPING_METHODS 
} from '../services/cjDropshippingService';

export default function DropshippingPage({ t }) {
  const [activeTab, setActiveTab] = useState('catalog'); // 'catalog', 'calculator', 'orders', 'settings'
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('popular'); // 'popular', 'price-low', 'price-high', 'margin'

  // CJ API Config & Status State
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
  const [selectedProductForCalc, setSelectedProductForCalc] = useState(DEMO_CJ_PRODUCTS[0]);

  // Margin Calculator Interactive State
  const [calcMarginPercent, setCalcMarginPercent] = useState(35);
  const [calcShippingMethod, setCalcShippingMethod] = useState('CJPacket_Standard');

  // Load products based on filter
  const [products, setProducts] = useState(DEMO_CJ_PRODUCTS);

  useEffect(() => {
    let result = [...DEMO_CJ_PRODUCTS];

    if (selectedCategory !== 'all') {
      result = result.filter(p => p.category === selectedCategory);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(p => 
        p.name.ko.toLowerCase().includes(q) ||
        p.name.vi.toLowerCase().includes(q) ||
        p.name.en.toLowerCase().includes(q) ||
        p.cjSku.toLowerCase().includes(q)
      );
    }

    if (sortBy === 'price-low') {
      result.sort((a, b) => a.supplierPriceUSD - b.supplierPriceUSD);
    } else if (sortBy === 'price-high') {
      result.sort((a, b) => b.supplierPriceUSD - a.supplierPriceUSD);
    } else if (sortBy === 'margin') {
      result.sort((a, b) => (b.suggestedRetailUSD - b.supplierPriceUSD) - (a.suggestedRetailUSD - a.supplierPriceUSD));
    }

    setProducts(result);
  }, [selectedCategory, searchQuery, sortBy]);

  // Save Cart & Load Orders
  const addToCart = (product) => {
    setCart(prev => {
      const exist = prev.find(item => item.id === product.id);
      if (exist) {
        return prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item);
      }
      return [...prev, { ...product, qty: 1 }];
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
      setAuthStatus({ loading: false, error: null, successMsg: 'CJ Dropshipping API 2.0 연동이 완료되었습니다!' });
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
    setActiveTab('orders');
    alert(`주문이 CJ Dropshipping API로 자동 전송되었습니다!\n운송장 번호: ${newOrder.trackingNumber}`);
  };

  const marginCalculation = CJDropshippingService.calculateMargin({
    supplierPriceUSD: selectedProductForCalc.supplierPriceUSD,
    weightKg: selectedProductForCalc.weightKg,
    shippingMethodCode: calcShippingMethod,
    marginPercent: calcMarginPercent
  });

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 py-6 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Hero Section */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-950 to-indigo-950 border border-gold-500/30 p-6 sm:p-10 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CJ Dropshipping Open API 2.0 Powered</span>
              </div>
              <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                CJ 드랍쉬핑 <span className="gold-gradient-text">스마트 쇼핑몰 & 마진 플랫폼</span>
              </h1>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                CJ Dropshipping 공식 API 연동으로 실시간 카탈로그 조회, 스마트 자동 마진 계산, 물류 배송비 견적, 그리고 1-Click 자동 발송 주문 관제를 경험하세요.
              </p>
            </div>

            {/* API Status Badge & Action */}
            <div className="w-full md:w-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3 bg-navy-900/90 border border-navy-800 p-4 rounded-2xl">
              <div className="flex items-center space-x-3">
                <div className={`w-3.5 h-3.5 rounded-full animate-pulse ${config.accessToken ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <div>
                  <div className="text-xs font-bold text-slate-300">API 연동 상태</div>
                  <div className="text-xs font-semibold text-slate-400">
                    {config.accessToken ? 'CJ API 2.0 Live' : '샌드박스 시뮬레이션 모드'}
                  </div>
                </div>
              </div>

              <button
                onClick={() => setIsApiModalOpen(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs transition-all flex items-center justify-center space-x-2 shadow-lg min-h-[44px]"
              >
                <Settings className="w-4 h-4" />
                <span>API Key 연동 설정</span>
              </button>
            </div>

          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-t border-navy-800/80 pt-6">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                <Package className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">글로벌 드랍쉬핑 SKU</p>
                <p className="text-base font-bold text-white">400,000+ Items</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-gold-500/10 text-gold-400 border border-gold-500/20">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">평균 글로벌 배송시간</p>
                <p className="text-base font-bold text-white">4 ~ 7 일 (CJ Packet)</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <TrendingUp className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">평균 목표 마진율</p>
                <p className="text-base font-bold text-white">30% ~ 55% +</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-semibold">품질 검수 & 자동 발송</p>
                <p className="text-base font-bold text-white">100% Quality Check</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Tab Navigation */}
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
              <span>드랍쉬핑 상품 카탈로그 ({products.length})</span>
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
              <span>CJ 마진 & 배송비 계산기</span>
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
              <span>발송 주문 내역 ({ordersHistory.length})</span>
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
              <span>API 설정 콘솔</span>
            </button>
          </div>

          {/* Cart Trigger Badge */}
          {cart.length > 0 && (
            <button
              onClick={() => setIsOrderModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold text-xs transition-all flex items-center space-x-2 shadow-lg min-h-[44px]"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>선택 상품 ({cart.length}) - CJ 발송 주문하기</span>
            </button>
          )}
        </div>

        {/* TAB 1: PRODUCT CATALOG */}
        {activeTab === 'catalog' && (
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

              {/* Search input & Sort */}
              <div className="flex items-center space-x-3">
                <div className="relative flex-grow md:w-64">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="상품명 또는 SKU 검색..."
                    className="w-full pl-9 pr-3 py-2 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500/50"
                  />
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 bg-navy-950 border border-navy-800 rounded-xl text-xs text-slate-200 focus:outline-none focus:border-gold-500/50"
                >
                  <option value="popular">인기순 정렬</option>
                  <option value="price-low">CJ 공급가 낮은순</option>
                  <option value="price-high">CJ 공급가 높은순</option>
                  <option value="margin">예상 마진 높은순</option>
                </select>
              </div>

            </div>

            {/* Product Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => {
                const marginData = CJDropshippingService.calculateMargin({
                  supplierPriceUSD: product.supplierPriceUSD,
                  weightKg: product.weightKg,
                  shippingMethodCode: 'CJPacket_Standard',
                  marginPercent: 35
                });

                return (
                  <div 
                    key={product.id}
                    className="bg-navy-900 border border-navy-800 hover:border-gold-500/40 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 flex flex-col group"
                  >
                    {/* Image & Tags */}
                    <div className="relative aspect-video sm:aspect-square overflow-hidden bg-navy-950">
                      <img 
                        src={product.image} 
                        alt={product.name.ko}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                        {product.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 rounded-md bg-navy-950/80 backdrop-blur-md text-[10px] font-bold text-gold-400 border border-gold-500/30">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="absolute bottom-2 right-2 bg-navy-950/90 backdrop-blur-md px-2 py-1 rounded-md text-[10px] font-medium text-slate-300">
                        SKU: {product.cjSku}
                      </div>
                    </div>

                    {/* Content Body */}
                    <div className="p-4 flex-grow flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-sm font-bold text-white line-clamp-2 group-hover:text-gold-400 transition-colors">
                          {product.name.ko}
                        </h3>
                        <p className="text-xs text-slate-400 line-clamp-1">
                          {product.name.vi}
                        </p>
                      </div>

                      {/* Pricing Specs */}
                      <div className="bg-navy-950/70 border border-navy-800 rounded-xl p-3 space-y-2 text-xs">
                        <div className="flex justify-between items-center text-slate-400">
                          <span>CJ 공급 도매가:</span>
                          <span className="font-bold text-white">${product.supplierPriceUSD.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center text-slate-400">
                          <span>권장 소비자 판매가:</span>
                          <span className="font-bold text-emerald-400">${product.suggestedRetailUSD.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between items-center border-t border-navy-800 pt-1 text-slate-300">
                          <span>예상 마진수익:</span>
                          <span className="font-extrabold text-gold-400">
                            +${marginData.profitUSD} ({marginData.profitVND.toLocaleString()}₫)
                          </span>
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center space-x-2 pt-2">
                        <button
                          onClick={() => {
                            setSelectedProductForCalc(product);
                            setActiveTab('calculator');
                          }}
                          className="flex-1 py-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-200 text-xs font-bold transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
                        >
                          <Calculator className="w-3.5 h-3.5 text-gold-400" />
                          <span>마진 계산</span>
                        </button>

                        <button
                          onClick={() => addToCart(product)}
                          className="flex-1 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-extrabold transition-colors flex items-center justify-center space-x-1 min-h-[40px]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                          <span>발송 담기</span>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* TAB 2: MARGIN & LOGISTICS CALCULATOR */}
        {activeTab === 'calculator' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Controls Side */}
            <div className="lg:col-span-1 bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                  <Calculator className="w-5 h-5 text-gold-400" />
                  <span>CJ 마진 계산 파라미터</span>
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  상품 원가, 배송비 및 목표 마진율을 실시간으로 시뮬레이션합니다.
                </p>
              </div>

              {/* Product Selector */}
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

              {/* Shipping Method */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">CJ 물류 배송 수단</label>
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

              {/* Margin Slider */}
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
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>10% (박리다매)</span>
                  <span>50% (프리미엄)</span>
                  <span>100% (고마진)</span>
                </div>
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

            {/* Results Visualization Side */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Product Preview Card */}
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6">
                <img 
                  src={selectedProductForCalc.image} 
                  alt={selectedProductForCalc.name.ko} 
                  className="w-32 h-32 object-cover rounded-xl border border-navy-800 flex-shrink-0"
                />
                <div className="space-y-2 text-center sm:text-left">
                  <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 text-gold-400 border border-gold-500/30 text-[10px] font-bold">
                    SKU: {selectedProductForCalc.cjSku}
                  </span>
                  <h4 className="text-base font-bold text-white">{selectedProductForCalc.name.ko}</h4>
                  <p className="text-xs text-slate-400">{selectedProductForCalc.name.vi}</p>
                  <p className="text-xs text-slate-300">무게: {selectedProductForCalc.weightKg} kg | CJ 재고: {selectedProductForCalc.stock}개</p>
                </div>
              </div>

              {/* Price Breakdown Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="bg-navy-900 border border-navy-800 rounded-2xl p-5 space-y-1">
                  <p className="text-xs text-slate-400 font-semibold">1. CJ 도매원가 + 배송비</p>
                  <p className="text-xl font-extrabold text-white">${marginCalculation.totalCostUSD}</p>
                  <p className="text-[11px] text-slate-400">
                    원가 ${marginCalculation.supplierPriceUSD} + 배송 ${marginCalculation.shippingFeeUSD}
                  </p>
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

              {/* Graphical Profit Ratio Bar */}
              <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 space-y-4">
                <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider">
                  판매가 구성 비중 (Price Structure Analysis)
                </h4>
                <div className="h-6 w-full rounded-xl bg-navy-950 overflow-hidden flex">
                  <div 
                    style={{ width: `${(selectedProductForCalc.supplierPriceUSD / marginCalculation.sellingPriceUSD) * 100}%` }}
                    className="bg-slate-600 text-[10px] font-bold text-white flex items-center justify-center"
                    title="CJ 상품 원가"
                  >
                    원가
                  </div>
                  <div 
                    style={{ width: `${(marginCalculation.shippingFeeUSD / marginCalculation.sellingPriceUSD) * 100}%` }}
                    className="bg-indigo-600 text-[10px] font-bold text-white flex items-center justify-center"
                    title="CJ 배송비"
                  >
                    배송
                  </div>
                  <div 
                    style={{ width: `${(marginCalculation.profitUSD / marginCalculation.sellingPriceUSD) * 100}%` }}
                    className="bg-gold-500 text-[10px] font-bold text-navy-950 flex items-center justify-center"
                    title="순이익"
                  >
                    순이익 ({calcMarginPercent}%)
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between text-xs text-slate-400 pt-2 border-t border-navy-800">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-sm bg-slate-600" />
                    <span>CJ 도매 원가 (${selectedProductForCalc.supplierPriceUSD})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-sm bg-indigo-600" />
                    <span>CJ 물류비 (${marginCalculation.shippingFeeUSD})</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 rounded-sm bg-gold-500" />
                    <span>쇼핑몰 이익금 (${marginCalculation.profitUSD})</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* TAB 3: ORDERS & TRACKING */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Package className="w-5 h-5 text-gold-400" />
                <span>CJ Dropshipping API 자동 발송 내역</span>
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
                <p className="text-slate-400 text-sm">아직 발송된 드랍쉬핑 주문 내역이 없습니다.</p>
                <button
                  onClick={() => setActiveTab('catalog')}
                  className="px-4 py-2 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs"
                >
                  상품 카탈로그에서 주문 담기
                </button>
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
                        <span className="text-xs font-bold text-gold-400">주문 ID: {ord.orderId}</span>
                        <span className="text-xs text-slate-400 ml-3">생성일: {new Date(ord.createdAt).toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                          {ord.status}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-bold">
                          송장번호: {ord.trackingNumber}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="text-slate-400 font-semibold mb-1">수령인 정보:</p>
                        <p className="text-white font-bold">{ord.customerName} ({ord.phone})</p>
                        <p className="text-slate-300">{ord.address}</p>
                        <p className="text-slate-400 mt-1">지정 택배사: {ord.courier}</p>
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

        {/* TAB 4: API SETTINGS CONSOLE */}
        {activeTab === 'settings' && (
          <div className="bg-navy-900 border border-navy-800 rounded-2xl p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white flex items-center space-x-2">
                <Settings className="w-5 h-5 text-gold-400" />
                <span>CJ Dropshipping Open API 2.0 환경 설정</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                CJ Developers Portal (developers.cjdropshipping.com)에서 발급받은 API Key와 계정 정보를 설정하세요.
              </p>
            </div>

            <form onSubmit={handleApiAuthSubmit} className="space-y-4 max-w-xl">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">CJ 계정 이메일 (Account Email)</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="cj_user@example.com"
                  className="w-full p-3 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white focus:outline-none focus:border-gold-500/50"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-300 block">CJ API Key</label>
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
                {authStatus.loading ? 'CJ Open API 2.0 인증 확인 중...' : 'CJ API 2.0 연결 저장하기'}
              </button>
            </form>

            <div className="border-t border-navy-800 pt-6 space-y-3 text-xs text-slate-400">
              <h4 className="font-bold text-slate-200">API 엔드포인트 명세 참조</h4>
              <p>• Auth Endpoint: POST https://developers.cjdropshipping.com/api2.0/v1/authentication/getAccessToken</p>
              <p>• Product List: GET https://developers.cjdropshipping.com/api2.0/v1/product/list</p>
              <p>• Logistics Calculation: POST https://developers.cjdropshipping.com/api2.0/v1/logistic/freightCalculate</p>
            </div>
          </div>
        )}

      </div>

      {/* API Key Modal */}
      {isApiModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-md space-y-4 shadow-2xl">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Settings className="w-5 h-5 text-gold-400" />
              <span>CJ Dropshipping API Key 설정</span>
            </h3>

            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">CJ Email</label>
                <input
                  type="email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">API Key</label>
                <input
                  type="text"
                  value={apiKeyInput}
                  onChange={(e) => setApiKeyInput(e.target.value)}
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-xs text-white"
                  placeholder="CJ API Key"
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
                저장 및 검증
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Order Dispatch Simulation Modal */}
      {isOrderModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm">
          <div className="bg-navy-900 border border-gold-500/30 rounded-2xl p-6 w-full max-w-lg space-y-4 shadow-2xl max-h-[90vh] overflow-y-auto">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Package className="w-5 h-5 text-gold-400" />
              <span>CJ Dropshipping API 주문 발송 신청</span>
            </h3>

            <div className="bg-navy-950 border border-navy-800 p-3 rounded-xl space-y-2 text-xs">
              <p className="font-bold text-gold-400">발송 예정 품목 목록:</p>
              {cart.map(item => (
                <div key={item.id} className="flex justify-between items-center text-slate-300">
                  <span>{item.name.ko} (x{item.qty})</span>
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-white">${(item.suggestedRetailUSD * item.qty).toFixed(2)}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-rose-400 hover:text-rose-300">
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleOrderSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-300 block mb-1">고객 성함 (Customer Name)</label>
                <input
                  type="text"
                  required
                  value={orderForm.customerName}
                  onChange={(e) => setOrderForm({ ...orderForm, customerName: e.target.value })}
                  placeholder="예: Nguyen Van A"
                  className="w-full p-2.5 bg-navy-950 border border-navy-800 rounded-xl text-white"
                />
              </div>

              <div>
                <label className="font-bold text-slate-300 block mb-1">연락처 (Phone)</label>
                <input
                  type="text"
                  required
                  value={orderForm.phone}
                  onChange={(e) => setOrderForm({ ...orderForm, phone: e.target.value })}
                  placeholder="예: 0988-123-456"
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
                  placeholder="상세 배송지 주소를 입력하세요"
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
                  className="flex-1 py-3 bg-emerald-500 hover:bg-emerald-400 text-navy-950 font-bold rounded-xl min-h-[44px] flex items-center justify-center space-x-1"
                >
                  <Send className="w-4 h-4" />
                  <span>{orderSubmitting ? '전송 중...' : 'CJ API 주문 자동 발송'}</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
