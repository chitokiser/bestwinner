import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegazineHeaderBanner from '../components/Megazine/MegazineHeaderBanner';
import ArticleCard from '../components/Megazine/ArticleCard';
import ArticleDetailModal from '../components/Megazine/ArticleDetailModal';
import BestPickCard from '../components/Megazine/BestPickCard';
import { getArticles, checkAndAutoPublishArticles, triggerAiArticleJob, removeArticle } from '../services/megazineService';
import { fetchHanoiWeather, fetchExchangeRates } from '../services/weatherExchangeService';
import { fetchHanoiAQI } from '../services/airQualityService';
import { VIETNAM_BANK_RATES, calculateInterest } from '../services/vietnamBankRatesService';
import { DEFAULT_CATEGORIES, INITIAL_BEST_PICKS } from '../data/megazineInitialData';
import { 
  Search, 
  Sparkles, 
  Settings, 
  RefreshCw, 
  Filter, 
  Newspaper,
  Star,
  Layers,
  ArrowRight,
  Landmark,
  Calculator,
  Zap
} from 'lucide-react';

export default function MegazinePage({ t, user, onOpenAuth }) {
  const [articles, setArticles] = useState([]);
  const [weather, setWeather] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [aqi, setAqi] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeEdition, setActiveEdition] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAutoPublishing, setIsAutoPublishing] = useState(false);

  // Deposit Calculator State
  const [calcAmount, setCalcAmount] = useState('100000000'); // 1억 VND default
  const [calcMonths, setCalcMonths] = useState(12);
  const [selectedBankId, setSelectedBankId] = useState('shinhan-vn');

  const loadData = async () => {
    setLoading(true);
    // 1. Run automated schedule check and publish due articles
    try {
      await checkAndAutoPublishArticles();
    } catch (e) {
      console.warn('[MegazinePage] Auto publish error:', e);
    }

    // 2. Load latest articles and environment metrics
    const [arts, w, ex, air] = await Promise.all([
      getArticles(),
      fetchHanoiWeather(),
      fetchExchangeRates(),
      fetchHanoiAQI()
    ]);
    setArticles(arts);
    setWeather(w);
    setExchangeRates(ex);
    setAqi(air);
    setLoading(false);
  };

  const handleManualAiGenerate = async () => {
    setIsAutoPublishing(true);
    try {
      await triggerAiArticleJob({
        jobType: activeEdition !== 'ALL' ? `BEST ${activeEdition}` : 'BEST MEGAZINE',
        category: activeCategory !== 'ALL' ? activeCategory : 'TODAY',
        topic: '하노이 및 베트남 교민을 위한 실시간 AI 데일리 포커스 뉴스',
        providerName: 'gemini'
      });
      await loadData();
    } catch (err) {
      console.error('[Manual AI Generate Error]', err);
    }
    setIsAutoPublishing(false);
  };

  const handleDeleteArticle = async (articleOrId) => {
    const targetId = typeof articleOrId === 'object' ? articleOrId.id : articleOrId;
    const targetTitle = typeof articleOrId === 'object' ? articleOrId.title : targetId;
    await removeArticle(targetId || targetTitle);
    if (selectedArticle && (selectedArticle.id === targetId || selectedArticle.title === targetTitle)) {
      setSelectedArticle(null);
    }
    await loadData();
  };

  useEffect(() => {
    loadData();

    // Auto-check schedule every 60 seconds
    const timer = setInterval(() => {
      checkAndAutoPublishArticles().then(res => {
        if (res?.publishedCount > 0) {
          getArticles().then(arts => setArticles(arts));
        }
      });
    }, 60000);

    return () => clearInterval(timer);
  }, []);

  // Filtering articles
  const filteredArticles = articles.filter(art => {
    const matchesCat = activeCategory === 'ALL' || art.category === activeCategory;
    const matchesEdition = activeEdition === 'ALL' || (art.edition && art.edition.includes(activeEdition));
    const matchesSearch = !searchQuery || 
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (art.summary || '').toLowerCase().includes(searchQuery.toLowerCase()) ||
      (art.tags || []).some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCat && matchesEdition && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-navy-950 pb-20">
      
      {/* Top Header Banner with Weather, AQI & Rates */}
      <MegazineHeaderBanner weather={weather} exchangeRates={exchangeRates} aqi={aqi} t={t} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation & Admin Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-navy-900/90 p-4 rounded-3xl border border-navy-800 shadow-lg">
          
          {/* Edition Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5 w-full sm:w-auto">
            {['ALL', 'MORNING', 'BUSINESS', 'LIFE', 'NOW', 'MEGAZINE'].map(ed => (
              <button
                key={ed}
                onClick={() => setActiveEdition(ed)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeEdition === ed
                    ? 'bg-gold-500 text-navy-950 shadow-md'
                    : 'bg-navy-950 text-slate-300 hover:text-white border border-navy-800'
                }`}
              >
                {ed === 'ALL' ? '전체 발행' : `BEST ${ed}`}
              </button>
            ))}
          </div>

          {/* Admin Link & Refresh */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleManualAiGenerate}
              disabled={isAutoPublishing}
              className="px-3.5 py-2 rounded-xl bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-black text-xs shadow-md transition-transform hover:scale-105 flex items-center space-x-1.5"
              title="AI 신규 기사 즉시 생성 및 자동 게시"
            >
              <Sparkles className={`w-4 h-4 ${isAutoPublishing ? 'animate-spin' : ''}`} />
              <span>{isAutoPublishing ? 'AI 기사 게시 중...' : '✨ AI 기사 실시간 게시'}</span>
            </button>

            <button
              onClick={loadData}
              className="p-2 rounded-xl bg-navy-950 hover:bg-navy-800 text-slate-300 border border-navy-800"
              title="새로고침"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin text-gold-400' : ''}`} />
            </button>

            <Link
              to="/megazine/admin"
              className="px-3.5 py-2 rounded-xl bg-navy-950 hover:bg-navy-800 text-cyan-400 text-xs font-bold border border-cyan-500/30 flex items-center space-x-1.5 transition-colors"
            >
              <Settings className="w-4 h-4 text-cyan-400" />
              <span>BEST MEGAZINE ADMIN</span>
            </Link>
          </div>
        </div>

        {/* Search Bar & Category Filter Tabs */}
        <div className="space-y-4">
          
          {/* Search Box */}
          <div className="relative max-w-md mx-auto sm:mx-0">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              placeholder="하노이 뉴스, 비자, 세금, 맛집 검색..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-navy-900 border border-navy-800 focus:border-gold-500 rounded-2xl pl-10 pr-4 py-2.5 text-xs text-white placeholder-slate-400 outline-none transition-all shadow-inner"
            />
          </div>

          {/* Category Tabs Scroll Bar */}
          <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setActiveCategory('ALL')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all ${
                activeCategory === 'ALL'
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 shadow-lg'
                  : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'
              }`}
            >
              🔥 전체 (ALL)
            </button>

            {DEFAULT_CATEGORIES.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-navy-950 shadow-lg'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'
                }`}
              >
                <span>{cat.label}</span>
              </button>
            ))}

            {/* Vietnam Bank Rates Tab Chip */}
            <button
              onClick={() => setActiveCategory('BANK_RATES')}
              className={`px-4 py-2 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-1.5 ${
                activeCategory === 'BANK_RATES'
                  ? 'bg-emerald-500 text-navy-950 shadow-lg'
                  : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'
              }`}
            >
              <Landmark className="w-3.5 h-3.5" />
              <span>🏦 베트남 은행 예금 금리</span>
            </button>
          </div>
        </div>

        {/* BANK_RATES Special Interactive Section */}
        {activeCategory === 'BANK_RATES' && (
          <div className="bg-navy-900/90 border border-emerald-500/30 rounded-3xl p-6 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-4">
              <div>
                <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-bold border border-emerald-500/30 mb-2">
                  <Landmark className="w-3.5 h-3.5" />
                  <span>VIETNAM BANK DEPOSIT INTEREST RATES</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white">베트남 주요 은행 예금 금리 비교 & 이자 계산기</h2>
                <p className="text-xs text-slate-400 mt-1">베트남 거주 교민을 위한 신한베트남은행, 우리베트남은행 및 주요 국영은행 예금 금리 안내 (개인 예금 이자 소득세 0% 비과세)</p>
              </div>
            </div>

            {/* Bank Rates Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {VIETNAM_BANK_RATES.map(bank => (
                <div 
                  key={bank.id}
                  onClick={() => setSelectedBankId(bank.id)}
                  className={`p-4 rounded-2xl border transition-all cursor-pointer ${
                    selectedBankId === bank.id 
                      ? 'bg-navy-800 border-gold-500 ring-2 ring-gold-500/40' 
                      : 'bg-navy-950 border-navy-800 hover:border-navy-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl">{bank.logo}</span>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30">
                      {bank.badge}
                    </span>
                  </div>
                  <h3 className="text-xs font-bold text-white mb-1 line-clamp-1">{bank.name}</h3>
                  <p className="text-[10px] text-slate-400 mb-3">{bank.desc}</p>
                  
                  <div className="space-y-1.5 border-t border-navy-800 pt-2 text-xs">
                    <div className="flex justify-between text-slate-300">
                      <span>1개월 예금</span>
                      <span className="font-bold text-white">{bank.rate1M}%</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>6개월 예금</span>
                      <span className="font-bold text-cyan-400">{bank.rate6M}%</span>
                    </div>
                    <div className="flex justify-between text-slate-300">
                      <span>12개월 예금</span>
                      <span className="font-bold text-emerald-400">{bank.rate12M}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Interest Calculator Widget */}
            {(() => {
              const currentBank = VIETNAM_BANK_RATES.find(b => b.id === selectedBankId) || VIETNAM_BANK_RATES[0];
              const rateToUse = calcMonths === 1 ? currentBank.rate1M : calcMonths === 6 ? currentBank.rate6M : currentBank.rate12M;
              const result = calculateInterest(calcAmount, rateToUse, calcMonths);
              return (
                <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-4">
                  <div className="flex items-center space-x-2 text-gold-400 font-bold text-sm">
                    <Calculator className="w-4 h-4" />
                    <span>선택 은행: {currentBank.name} 이자 자동 계산</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">예치 금액 (VND)</label>
                      <input 
                        type="number"
                        value={calcAmount}
                        onChange={(e) => setCalcAmount(e.target.value)}
                        className="w-full bg-navy-900 border border-navy-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-gold-500"
                        placeholder="예: 100000000"
                      />
                      <span className="text-[10px] text-slate-400 mt-1 block">
                        = 약 {(Number(calcAmount) / 18520).toFixed(0).toLocaleString()} 만원 (KRW)
                      </span>
                    </div>

                    <div>
                      <label className="text-[11px] font-bold text-slate-400 block mb-1">예치 기간</label>
                      <select
                        value={calcMonths}
                        onChange={(e) => setCalcMonths(Number(e.target.value))}
                        className="w-full bg-navy-900 border border-navy-800 rounded-xl px-3 py-2 text-xs text-white outline-none focus:border-gold-500"
                      >
                        <option value={1}>1개월 (연 {currentBank.rate1M}%)</option>
                        <option value={6}>6개월 (연 {currentBank.rate6M}%)</option>
                        <option value={12}>12개월 (연 {currentBank.rate12M}%)</option>
                      </select>
                    </div>

                    <div className="bg-navy-900 p-3 rounded-xl border border-gold-500/30 flex flex-col justify-center">
                      <span className="text-[10px] text-slate-400">만기 세후 예상 이자 수령액 (0% 비과세)</span>
                      <span className="text-base font-black text-emerald-400">
                        {result.netInterest.toLocaleString()} VND
                      </span>
                      <span className="text-[10px] text-gold-400">
                        = 약 {Math.round(result.netInterest / 18.52).toLocaleString()} 원 (KRW)
                      </span>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* BEST PICK Section if category is BEST_PICK */}
        {activeCategory === 'BEST_PICK' && (
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Star className="w-5 h-5 text-gold-400 fill-gold-400" />
              <h2 className="text-xl font-bold text-white">BEST PICK 하노이 추천 파트너</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {INITIAL_BEST_PICKS.map(pick => (
                <BestPickCard key={pick.id} item={pick} />
              ))}
            </div>
          </div>
        )}

        {/* Articles Grid (SNS Style Image Card Layout) */}
        {loading ? (
          <div className="py-20 text-center space-y-3">
            <RefreshCw className="w-8 h-8 animate-spin text-gold-400 mx-auto" />
            <p className="text-xs text-slate-400">AI 기사 데이터를 로딩 중입니다...</p>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="bg-navy-900 border border-navy-800 rounded-3xl p-12 text-center space-y-3">
            <Newspaper className="w-12 h-12 text-slate-600 mx-auto" />
            <p className="text-base font-bold text-white">해당 조건의 기사가 없습니다.</p>
            <p className="text-xs text-slate-400">다른 카테고리나 검색어로 시도해보세요.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map(article => (
              <ArticleCard
                key={article.id}
                article={article}
                onOpen={(art) => setSelectedArticle(art)}
                onShare={(art) => setSelectedArticle(art)}
                onDelete={handleDeleteArticle}
                user={user}
                onOpenAuth={onOpenAuth}
              />
            ))}
          </div>
        )}

      </div>

      {/* Article Detail Modal */}
      {selectedArticle && (
        <ArticleDetailModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
          user={user}
          onOpenAuth={onOpenAuth}
          onDeleteArticle={handleDeleteArticle}
        />
      )}

    </div>
  );
}
