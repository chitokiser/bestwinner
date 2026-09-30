import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MegazineHeaderBanner from '../components/Megazine/MegazineHeaderBanner';
import ArticleCard from '../components/Megazine/ArticleCard';
import ArticleDetailModal from '../components/Megazine/ArticleDetailModal';
import BestPickCard from '../components/Megazine/BestPickCard';
import { getArticles } from '../services/megazineService';
import { fetchHanoiWeather, fetchExchangeRates } from '../services/weatherExchangeService';
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
  ArrowRight
} from 'lucide-react';

export default function MegazinePage({ t }) {
  const [articles, setArticles] = useState([]);
  const [weather, setWeather] = useState(null);
  const [exchangeRates, setExchangeRates] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [activeEdition, setActiveEdition] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    setLoading(true);
    const [arts, w, ex] = await Promise.all([
      getArticles(),
      fetchHanoiWeather(),
      fetchExchangeRates()
    ]);
    setArticles(arts);
    setWeather(w);
    setExchangeRates(ex);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
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
      
      {/* Top Header Banner with Weather & Rates */}
      <MegazineHeaderBanner weather={weather} exchangeRates={exchangeRates} t={t} />

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
          </div>
        </div>

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
        />
      )}

    </div>
  );
}
