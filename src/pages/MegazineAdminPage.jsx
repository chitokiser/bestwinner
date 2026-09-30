import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  getArticles, 
  saveArticle, 
  removeArticle, 
  updateArticleStatus, 
  triggerAiArticleJob, 
  getMegazineSettings, 
  saveMegazineSettings 
} from '../services/megazineService';
import { DEFAULT_CATEGORIES } from '../data/megazineInitialData';
import { 
  LayoutDashboard, 
  Newspaper, 
  Sparkles, 
  Clock, 
  Settings, 
  CheckCircle2, 
  XCircle, 
  Edit3, 
  Trash2, 
  Play, 
  ArrowLeft,
  Plus,
  Sliders,
  Cpu,
  ShieldAlert,
  Save,
  RefreshCw,
  X,
  FileText,
  Eye
} from 'lucide-react';

export default function MegazineAdminPage({ t }) {
  const [activeTab, setActiveTab] = useState('DASHBOARD'); // DASHBOARD | ARTICLES | GENERATE | SCHEDULE | PROMPTS
  const [articles, setArticles] = useState([]);
  const [settings, setSettings] = useState(getMegazineSettings());
  const [loading, setLoading] = useState(false);
  
  // Article Editor Modal State
  const [editingArticle, setEditingArticle] = useState(null); // Article object being edited/created
  const [isSaving, setIsSaving] = useState(false);

  // Manual AI Article Generator Form State
  const [genTopic, setGenTopic] = useState('');
  const [genCategory, setGenCategory] = useState('BUSINESS');
  const [genEdition, setGenEdition] = useState('BEST BUSINESS');
  const [genProvider, setGenProvider] = useState('gemini');
  const [genStatusMsg, setGenStatusMsg] = useState('');

  // Prompt Settings State
  const [prompts, setPrompts] = useState({
    news_analyzer: 'Analyze raw news sources for relevance to Korean expats in Vietnam.',
    article_writer: 'Write a comprehensive article using NEWS -> INFORMATION -> ACTION structure.',
    fact_checker: 'Verify numbers, laws, and official citations strictly against sources.',
    seo_writer: 'Generate 60-char title and 150-char meta description.'
  });

  const loadData = async () => {
    setLoading(true);
    const data = await getArticles();
    setArticles(data);
    setLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleStatusChange = async (id, status) => {
    await updateArticleStatus(id, status);
    loadData();
  };

  const handleDelete = async (id) => {
    if (window.confirm('정말 이 기사를 삭제하시겠습니까? 삭제 후에는 복구할 수 없습니다.')) {
      await removeArticle(id);
      loadData();
      if (editingArticle && editingArticle.id === id) {
        setEditingArticle(null);
      }
    }
  };

  const handleOpenNewArticleForm = () => {
    setEditingArticle({
      id: '',
      title: '',
      subtitle: '',
      category: 'BUSINESS',
      edition: 'BEST BUSINESS',
      summary: '',
      content: '',
      whyItMatters: '',
      impactOnExpats: '',
      actionRequired: '',
      thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
      status: 'published',
      factChecked: true,
      importanceScore: 90
    });
  };

  const handleSaveArticle = async (e) => {
    e.preventDefault();
    if (!editingArticle.title.trim()) {
      alert('기사 제목을 입력해주세요.');
      return;
    }
    setIsSaving(true);
    try {
      await saveArticle(editingArticle);
      alert('✓ 기사 내용이 성공적으로 저장되었습니다.');
      setEditingArticle(null);
      loadData();
    } catch (err) {
      alert('기사 저장 중 오류가 발생했습니다: ' + err.message);
    }
    setIsSaving(false);
  };

  const handleTriggerManualAi = async (e) => {
    e.preventDefault();
    setLoading(true);
    setGenStatusMsg('AI 기사 생성 중입니다 (수집 → 중복 검사 → 작성 → Fact Check)...');

    const result = await triggerAiArticleJob({
      jobType: genEdition,
      category: genCategory,
      topic: genTopic,
      providerName: genProvider
    });

    if (result.success) {
      setGenStatusMsg('✓ AI 기사 생성이 완료되고 정상 수속되었습니다.');
      setGenTopic('');
      loadData();
      setActiveTab('ARTICLES');
    } else {
      setGenStatusMsg(`오류 발생: ${result.reason || '기사 생성 실패'}`);
    }
    setLoading(false);
  };

  const handleSaveSettings = () => {
    saveMegazineSettings(settings);
    alert('설정이 저장되었습니다.');
  };

  // Metrics
  const totalCount = articles.length;
  const publishedCount = articles.filter(a => a.status === 'published').length;
  const reviewCount = articles.filter(a => a.status === 'review' || a.status === 'draft').length;

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 pb-20">
      
      {/* Top Header Bar */}
      <div className="bg-navy-900 border-b border-navy-800 py-6 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-3">
            <Link to="/megazine" className="p-2 rounded-xl bg-navy-950 border border-navy-800 hover:text-gold-400">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <span className="text-[10px] font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                ADMINISTRATION COCKPIT
              </span>
              <h1 className="text-2xl font-black text-white">BEST MEGAZINE ADMIN</h1>
            </div>
          </div>

          <div className="flex items-center space-x-2 text-xs">
            <button
              onClick={handleOpenNewArticleForm}
              className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-black flex items-center space-x-1.5 shadow-md transition-all"
            >
              <Plus className="w-4 h-4" />
              <span>기사 수동 직접 등록</span>
            </button>
            <span className="bg-emerald-500/20 text-emerald-400 px-3 py-1.5 rounded-xl border border-emerald-500/30 font-bold flex items-center">
              <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
              API Operational
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center space-x-2 border-b border-navy-800 pb-4 overflow-x-auto">
          {[
            { id: 'DASHBOARD', label: '대시보드', icon: LayoutDashboard },
            { id: 'ARTICLES', label: '기사 관리 (수정·삭제)', icon: Newspaper },
            { id: 'GENERATE', label: '수동 AI 기사 생성', icon: Sparkles },
            { id: 'SCHEDULE', label: '발행 스케줄 관리', icon: Clock },
            { id: 'PROMPTS', label: 'AI Prompt 관리', icon: Sliders }
          ].map(tab => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-2xl text-xs font-bold whitespace-nowrap transition-all flex items-center space-x-2 ${
                  activeTab === tab.id
                    ? 'bg-gold-500 text-navy-950 shadow-md'
                    : 'bg-navy-900 text-slate-300 hover:bg-navy-800 border border-navy-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Tab 1: DASHBOARD */}
        {activeTab === 'DASHBOARD' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="bg-navy-900 p-5 rounded-2xl border border-navy-800">
                <p className="text-xs font-bold text-slate-400">총 기사 수</p>
                <p className="text-3xl font-black text-white mt-1">{totalCount}</p>
              </div>
              <div className="bg-navy-900 p-5 rounded-2xl border border-emerald-500/30">
                <p className="text-xs font-bold text-emerald-400">발행 완료 (Published)</p>
                <p className="text-3xl font-black text-emerald-400 mt-1">{publishedCount}</p>
              </div>
              <div className="bg-navy-900 p-5 rounded-2xl border border-amber-500/30">
                <p className="text-xs font-bold text-amber-400">검수 대기 (Review)</p>
                <p className="text-3xl font-black text-amber-400 mt-1">{reviewCount}</p>
              </div>
              <div className="bg-navy-900 p-5 rounded-2xl border border-cyan-500/30">
                <p className="text-xs font-bold text-cyan-400">AI 모델 사용 비용</p>
                <p className="text-3xl font-black text-cyan-400 mt-1">$0.00 <span className="text-xs text-slate-400 font-normal">(Free Tier)</span></p>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-navy-900 p-6 rounded-3xl border border-navy-800 space-y-4">
              <h3 className="text-base font-bold text-white">빠른 제어</h3>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={handleOpenNewArticleForm}
                  className="px-4 py-2.5 rounded-xl bg-gold-500 text-navy-950 text-xs font-bold flex items-center space-x-2 shadow-md hover:bg-gold-400"
                >
                  <Plus className="w-4 h-4" />
                  <span>새 기사 직접 작성하기</span>
                </button>
                <button
                  onClick={() => setActiveTab('GENERATE')}
                  className="px-4 py-2.5 rounded-xl bg-navy-950 border border-gold-500/30 text-gold-400 text-xs font-bold flex items-center space-x-2"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>AI 기사 자동 생성 요청</span>
                </button>
                <button
                  onClick={loadData}
                  className="px-4 py-2.5 rounded-xl bg-navy-950 border border-navy-700 text-slate-200 text-xs font-bold flex items-center space-x-2"
                >
                  <RefreshCw className="w-4 h-4" />
                  <span>데이터 동기화</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: ARTICLES MANAGEMENT */}
        {activeTab === 'ARTICLES' && (
          <div className="bg-navy-900 rounded-3xl border border-navy-800 overflow-hidden shadow-xl space-y-4">
            <div className="p-5 border-b border-navy-800 flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-white">기사 목록 및 수정·삭제 제어</h3>
                <p className="text-xs text-slate-400 mt-0.5">각 기사의 [수정] 버튼을 누르면 제목, 요약, 본문 및 주요 항목을 직접 편집할 수 있습니다.</p>
              </div>
              
              <button
                onClick={handleOpenNewArticleForm}
                className="px-3.5 py-2 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 text-xs font-bold flex items-center space-x-1.5 shadow-md"
              >
                <Plus className="w-4 h-4" />
                <span>새 기사 등록</span>
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-navy-950 text-slate-400 font-bold uppercase border-b border-navy-800">
                  <tr>
                    <th className="p-4">제목 & 에디션</th>
                    <th className="p-4">카테고리</th>
                    <th className="p-4">상태</th>
                    <th className="p-4">작성일</th>
                    <th className="p-4 text-right">수정 / 삭제 / 발행</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-navy-800">
                  {articles.map(art => (
                    <tr key={art.id} className="hover:bg-navy-850">
                      <td className="p-4 max-w-md">
                        <p className="font-bold text-white truncate">{art.title}</p>
                        <p className="text-[10px] text-cyan-400">{art.edition || 'BEST MEGAZINE'}</p>
                      </td>
                      <td className="p-4">
                        <span className="px-2.5 py-1 rounded-full bg-navy-950 text-gold-400 font-bold border border-navy-700">
                          {art.category}
                        </span>
                      </td>
                      <td className="p-4">
                        <span className={`px-2.5 py-1 rounded-full font-bold ${
                          art.status === 'published' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' : 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        }`}>
                          {art.status}
                        </span>
                      </td>
                      <td className="p-4 text-slate-400">
                        {new Date(art.publishedAt || art.createdAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right space-x-1.5">
                        {/* Edit Button */}
                        <button
                          onClick={() => setEditingArticle({ ...art })}
                          className="px-2.5 py-1.5 bg-navy-950 hover:bg-navy-800 text-gold-400 border border-gold-500/40 rounded-xl font-bold flex items-center space-x-1 inline-flex"
                          title="기사 수정"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                          <span>수정</span>
                        </button>

                        {/* Status Change Button */}
                        {art.status !== 'published' && (
                          <button
                            onClick={() => handleStatusChange(art.id, 'published')}
                            className="px-2.5 py-1.5 bg-emerald-500 text-navy-950 font-bold rounded-xl hover:bg-emerald-400 inline-flex"
                          >
                            발행
                          </button>
                        )}

                        {/* Delete Button */}
                        <button
                          onClick={() => handleDelete(art.id)}
                          className="p-1.5 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 border border-red-500/30 inline-flex"
                          title="기사 삭제"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Tab 3: MANUAL AI GENERATION */}
        {activeTab === 'GENERATE' && (
          <div className="bg-navy-900 p-6 sm:p-8 rounded-3xl border border-gold-500/30 shadow-xl max-w-3xl space-y-6">
            <div>
              <h3 className="text-xl font-bold text-white flex items-center">
                <Sparkles className="w-5 h-5 mr-2 text-gold-400" />
                <span>수동 AI 기사 자동 생성 요청</span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                주제어 또는 뉴스 키워드를 입력하면 AI 엔진이 정보 수집, 요약, Fact Check 및 기사를 생성합니다.
              </p>
            </div>

            <form onSubmit={handleTriggerManualAi} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">기사 주제 / 키워드</label>
                <input
                  type="text"
                  placeholder="예: 2026 하노이 교민 비자 규정 개편 및 노동허가증 발급 절차"
                  value={genTopic}
                  onChange={(e) => setGenTopic(e.target.value)}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-white outline-none focus:border-gold-500 text-sm"
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">카테고리</label>
                  <select
                    value={genCategory}
                    onChange={(e) => setGenCategory(e.target.value)}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-white outline-none"
                  >
                    {DEFAULT_CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">발행 에디션</label>
                  <select
                    value={genEdition}
                    onChange={(e) => setGenEdition(e.target.value)}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-white outline-none"
                  >
                    <option value="BEST MORNING">BEST MORNING (07:00)</option>
                    <option value="BEST BUSINESS">BEST BUSINESS (11:00)</option>
                    <option value="BEST LIFE">BEST LIFE (14:00)</option>
                    <option value="BEST NOW">BEST NOW (18:00)</option>
                    <option value="BEST MEGAZINE">BEST MEGAZINE (21:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">AI Engine</label>
                  <select
                    value={genProvider}
                    onChange={(e) => setGenProvider(e.target.value)}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-3 text-white outline-none"
                  >
                    <option value="gemini">Gemini 1.5 Flash (권장)</option>
                    <option value="openai">OpenAI GPT-4o</option>
                    <option value="claude">Claude 3.5 Sonnet</option>
                  </select>
                </div>
              </div>

              {genStatusMsg && (
                <div className="p-3 bg-navy-950 border border-cyan-500/30 rounded-xl text-cyan-400 text-xs">
                  {genStatusMsg}
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-gradient-to-r from-gold-500 to-amber-500 hover:from-gold-400 hover:to-amber-400 text-navy-950 font-black text-sm rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2"
              >
                {loading ? <RefreshCw className="w-5 h-5 animate-spin" /> : <Sparkles className="w-5 h-5" />}
                <span>AI 기사 생성 및 자동 검수 실행</span>
              </button>
            </form>
          </div>
        )}

        {/* Tab 4: SCHEDULE MANAGEMENT */}
        {activeTab === 'SCHEDULE' && (
          <div className="bg-navy-900 p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-xl max-w-2xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <Clock className="w-5 h-5 mr-2 text-gold-400" />
              <span>하루 5회 자동 발행 스케줄 변경</span>
            </h3>

            <div className="space-y-4 text-xs">
              {Object.entries(settings.schedules || {}).map(([key, time]) => (
                <div key={key} className="flex items-center justify-between p-3 bg-navy-950 rounded-xl border border-navy-800">
                  <span className="font-bold text-slate-200">BEST {key}</span>
                  <input
                    type="time"
                    value={time}
                    onChange={(e) => {
                      setSettings({
                        ...settings,
                        schedules: { ...settings.schedules, [key]: e.target.value }
                      });
                    }}
                    className="bg-navy-900 border border-navy-700 text-gold-400 font-bold px-3 py-1.5 rounded-lg outline-none"
                  />
                </div>
              ))}

              <button
                onClick={handleSaveSettings}
                className="w-full py-3 bg-gold-500 text-navy-950 font-bold rounded-xl shadow-md"
              >
                스케줄 설정 저장
              </button>
            </div>
          </div>
        )}

        {/* Tab 5: PROMPT MANAGEMENT */}
        {activeTab === 'PROMPTS' && (
          <div className="bg-navy-900 p-6 sm:p-8 rounded-3xl border border-navy-800 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-white flex items-center">
              <Sliders className="w-5 h-5 mr-2 text-cyan-400" />
              <span>AI System Prompt 템플릿 관리</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              {Object.entries(prompts).map(([key, val]) => (
                <div key={key} className="space-y-2 bg-navy-950 p-4 rounded-2xl border border-navy-800">
                  <label className="font-bold text-gold-400 uppercase">{key}</label>
                  <textarea
                    rows={4}
                    value={val}
                    onChange={(e) => setPrompts({ ...prompts, [key]: e.target.value })}
                    className="w-full bg-navy-900 border border-navy-700 rounded-xl p-3 text-white outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

      {/* ARTICLE EDIT / CREATE MODAL */}
      {editingArticle && (
        <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto">
          <div 
            className="bg-navy-900 border border-gold-500/40 rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Sticky Header */}
            <div className="p-5 border-b border-navy-800 flex items-center justify-between bg-navy-950/90 sticky top-0 z-10">
              <div className="flex items-center space-x-2">
                <Edit3 className="w-5 h-5 text-gold-400" />
                <h2 className="text-lg font-black text-white">
                  {editingArticle.id ? '기사 내용 수정 (Edit Article)' : '새 기사 직접 등록 (New Article)'}
                </h2>
              </div>
              <button
                onClick={() => setEditingArticle(null)}
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-white border border-navy-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body Form */}
            <form onSubmit={handleSaveArticle} className="p-6 overflow-y-auto space-y-5 text-xs">
              
              {/* Title & Subtitle */}
              <div className="space-y-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">기사 제목 (Title) *</label>
                  <input
                    type="text"
                    value={editingArticle.title || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, title: e.target.value })}
                    placeholder="기사 제목을 입력하세요"
                    className="w-full bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-xl p-3 text-white outline-none text-sm font-bold"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">부제목 (Subtitle)</label>
                  <input
                    type="text"
                    value={editingArticle.subtitle || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, subtitle: e.target.value })}
                    placeholder="부제목을 입력하세요"
                    className="w-full bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-xl p-2.5 text-slate-200 outline-none"
                  />
                </div>
              </div>

              {/* Category, Edition & Status */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">카테고리 (Category)</label>
                  <select
                    value={editingArticle.category || 'BUSINESS'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, category: e.target.value })}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white outline-none font-bold"
                  >
                    {DEFAULT_CATEGORIES.map(c => (
                      <option key={c.id} value={c.id}>{c.label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">발행 에디션 (Edition)</label>
                  <select
                    value={editingArticle.edition || 'BEST BUSINESS'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, edition: e.target.value })}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white outline-none font-bold"
                  >
                    <option value="BEST MORNING">BEST MORNING (07:00)</option>
                    <option value="BEST BUSINESS">BEST BUSINESS (11:00)</option>
                    <option value="BEST LIFE">BEST LIFE (14:00)</option>
                    <option value="BEST NOW">BEST NOW (18:00)</option>
                    <option value="BEST MEGAZINE">BEST MEGAZINE (21:00)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">발행 상태 (Status)</label>
                  <select
                    value={editingArticle.status || 'published'}
                    onChange={(e) => setEditingArticle({ ...editingArticle, status: e.target.value })}
                    className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white outline-none font-bold"
                  >
                    <option value="published">게시 완료 (published)</option>
                    <option value="review">검수 대기 (review)</option>
                    <option value="draft">임시 저장 (draft)</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail URL */}
              <div>
                <label className="block text-slate-300 font-bold mb-1">대표 이미지 URL (Thumbnail URL)</label>
                <input
                  type="text"
                  value={editingArticle.thumbnail || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, thumbnail: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white outline-none font-mono"
                />
              </div>

              {/* Structured News Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-navy-950 p-4 rounded-2xl border border-navy-800">
                <div>
                  <label className="block text-amber-400 font-bold mb-1">왜 중요한가 (Why it matters)</label>
                  <textarea
                    rows={3}
                    value={editingArticle.whyItMatters || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, whyItMatters: e.target.value })}
                    className="w-full bg-navy-900 border border-navy-700 rounded-xl p-2 text-white outline-none"
                    placeholder="이 기사가 중요한 이유..."
                  />
                </div>

                <div>
                  <label className="block text-cyan-400 font-bold mb-1">교민 영향 (Expat impact)</label>
                  <textarea
                    rows={3}
                    value={editingArticle.impactOnExpats || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, impactOnExpats: e.target.value })}
                    className="w-full bg-navy-900 border border-navy-700 rounded-xl p-2 text-white outline-none"
                    placeholder="교민들에게 미치는 실질적 영향..."
                  />
                </div>

                <div>
                  <label className="block text-emerald-400 font-bold mb-1">행정/실천 가이드 (Action)</label>
                  <textarea
                    rows={3}
                    value={editingArticle.actionRequired || ''}
                    onChange={(e) => setEditingArticle({ ...editingArticle, actionRequired: e.target.value })}
                    className="w-full bg-navy-900 border border-navy-700 rounded-xl p-2 text-white outline-none"
                    placeholder="준비해야 할 체크리스트..."
                  />
                </div>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-slate-300 font-bold mb-1">기사 요약 (Summary)</label>
                <textarea
                  rows={2}
                  value={editingArticle.summary || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, summary: e.target.value })}
                  className="w-full bg-navy-950 border border-navy-700 rounded-xl p-2.5 text-white outline-none"
                  placeholder="카드 뉴스용 한눈에 보는 기사 요약"
                />
              </div>

              {/* Main Content Body */}
              <div>
                <label className="block text-gold-400 font-black text-sm mb-1">기사 본문 내용 (Main Content - Markdown 지원) *</label>
                <textarea
                  rows={12}
                  value={editingArticle.content || ''}
                  onChange={(e) => setEditingArticle({ ...editingArticle, content: e.target.value })}
                  placeholder="기사 전체 본문을 입력하세요. 마크다운(### 제목, - 리스트, **강조**) 작성이 가능합니다."
                  className="w-full bg-navy-950 border border-navy-700 focus:border-gold-500 rounded-xl p-3.5 text-white outline-none leading-relaxed font-sans text-xs"
                />
              </div>

              {/* Modal Footer Controls */}
              <div className="pt-4 border-t border-navy-800 flex items-center justify-between gap-3">
                {editingArticle.id ? (
                  <button
                    type="button"
                    onClick={() => handleDelete(editingArticle.id)}
                    className="px-4 py-2.5 bg-red-500/20 hover:bg-red-500/40 text-red-400 font-bold rounded-xl border border-red-500/30 flex items-center space-x-1.5"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>기사 삭제</span>
                  </button>
                ) : <div />}

                <div className="flex items-center space-x-2">
                  <button
                    type="button"
                    onClick={() => setEditingArticle(null)}
                    className="px-5 py-2.5 bg-navy-950 hover:bg-navy-800 text-slate-300 font-bold rounded-xl border border-navy-700"
                  >
                    취소
                  </button>

                  <button
                    type="submit"
                    disabled={isSaving}
                    className="px-6 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-black rounded-xl shadow-lg flex items-center space-x-1.5"
                  >
                    {isSaving ? <RefreshCw className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
                    <span>기사 저장 및 동기화</span>
                  </button>
                </div>
              </div>

            </form>
          </div>
        </div>
      )}

    </div>
  );
}
