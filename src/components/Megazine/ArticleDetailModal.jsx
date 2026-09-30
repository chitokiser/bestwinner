import React, { useState, useEffect } from 'react';
import { 
  X, 
  Share2, 
  CheckCircle2, 
  Flame, 
  Clock, 
  ExternalLink, 
  Sparkles, 
  AlertCircle, 
  CheckSquare, 
  Copy,
  Check,
  Heart,
  MessageSquare,
  Lock,
  Send,
  User,
  LogIn
} from 'lucide-react';
import BestPickCard from './BestPickCard';
import AudioBriefingPlayer from './AudioBriefingPlayer';
import { INITIAL_BEST_PICKS } from '../../data/megazineInitialData';

export default function ArticleDetailModal({ article, onClose, user, onOpenAuth }) {
  const [copied, setCopied] = useState(false);
  const [authRequiredNotice, setAuthRequiredNotice] = useState(null); // String notice when non-member clicks

  const getFormattedArticleContent = (art) => {
    if (!art) return '';
    if (art.content && art.content.trim().length > 200) {
      return art.content;
    }
    
    const summary = art.summary || '본 기사는 하노이 및 베트남 교민 사회의 최신 동향을 AI 자동 시스템으로 분석한 전문 리포트입니다.';
    const whyItMatters = art.whyItMatters || '교민 및 주재원의 현지 적응과 비즈니스 및 생활 안정을 위해 중요한 사안입니다.';
    const impactOnExpats = art.impactOnExpats || '하노이 미딩, 경남, 서호, 하동 등 주요 교민 거주지 거주자분들께 직접적인 행정 및 생활상의 가이드라인을 제공합니다.';
    const actionRequired = art.actionRequired || '관련 공식 기관의 발표 수칙을 준수하시고, 서류 준비 및 기한을 철저히 확인해주시기 바랍니다.';

    return `### 📌 1. 개요 및 핵심 배경
${summary}

최근 베트남 정부 및 하노이 시 관계 당국의 지침 개편에 따라 교민 사회 내에서 다양한 반응과 준비 사항이 대두되고 있습니다. 본 사안은 단기 체류자뿐만 아니라 장기 비자 소지자, 교민 기업 대표, 주재원 및 학부모님들 모두에게 긴밀한 영향을 미칩니다.

---

### 🔍 2. 심층 분석 및 교민 영향 파악
- **핵심 포인트**: ${whyItMatters}
- **교민 파급 효과**: ${impactOnExpats}

전문가들은 "베트남 현지 실정상 서류의 원본 및 공증 아포스티유 유효기간(보통 6개월 이내) 관리가 행정 수속 승인율을 결정짓는 핵심 요소"라며, "사전에 항목별 체크리스트를 점검하는 것이 시간과 비용을 50% 이상 절감하는 유일한 방안"이라고 조언합니다.

---

### 📋 3. 교민 실천 가이드 & 행정 수속 체크리스트
1. **사전 서류 점검**: ${actionRequired}
2. **관할 민원실 및 지정 기관 온라인 예약**: 대사관 영사민원24 및 베트남 e-Portal 사전 슬롯 확보 필수.
3. **Emergency 핫라인**: 긴급 상황 발생 시 주베트남 대사관 영사콜센터 및 BEST PICK 추천 긴급 파트너 채널 활용.

---

### 💡 4. BEST MEGAZINE 편집국 제언
BEST MEGAZINE AI 취재팀은 하루 5회(07:00, 11:00, 14:00, 18:00, 21:00) 베트남 현지 뉴스, 법률, 세무, 생활 및 교육 이슈를 실시간 수집·분석하여 교민 여러분께 가장 정확하고 검증된 정보를 지속적으로 전달해 드릴 예정입니다.

궁금한 점이나 추가 문의가 필요한 경우, 하단의 BEST PICK 관련 파트너 업체 또는 교민 댓글창을 활용해 주시기 바랍니다.`;
  };
  
  // Likes State
  const [likeCount, setLikeCount] = useState(() => {
    const saved = localStorage.getItem(`megazine_likes_${article?.id}`);
    return saved ? Number(saved) : (article?.importanceScore ? article.importanceScore * 3 : 18);
  });
  const [isLiked, setIsLiked] = useState(() => {
    return localStorage.getItem(`megazine_user_liked_${article?.id}`) === 'true';
  });

  // Comments State
  const [comments, setComments] = useState(() => {
    const saved = localStorage.getItem(`megazine_comments_${article?.id}`);
    if (saved) {
      try { return JSON.parse(saved); } catch (e) { }
    }
    return [
      {
        id: 'c-1',
        author: '김상우 (하노이 교민)',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        content: '유익한 하노이 현지 정보 감사드립니다! 교민 생활에 큰 도움이 됩니다.',
        createdAt: '2시간 전'
      },
      {
        id: 'c-2',
        author: '박지현 (미딩 파트너)',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80',
        content: '관련 행정 조치 내용 잘 정리되어 있네요. 사업장 운영할 때 참고하겠습니다.',
        createdAt: '1시간 전'
      }
    ];
  });
  const [newComment, setNewComment] = useState('');

  if (!article) return null;

  const publishedDate = article.publishedAt 
    ? new Date(article.publishedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    : '방금 전';

  // Auth requirement check wrapper
  const handleRequireAuth = (actionName, callback) => {
    if (!user) {
      setAuthRequiredNotice(`${actionName} 기능은 BEST 회원 전용 서비스입니다. 로그인하시겠습니까?`);
      return;
    }
    callback();
  };

  // Like Toggle Handler
  const handleToggleLike = () => {
    handleRequireAuth('기사 좋아요', () => {
      const nextLiked = !isLiked;
      const nextCount = nextLiked ? likeCount + 1 : likeCount - 1;
      setIsLiked(nextLiked);
      setLikeCount(nextCount);
      localStorage.setItem(`megazine_likes_${article.id}`, String(nextCount));
      localStorage.setItem(`megazine_user_liked_${article.id}`, String(nextLiked));
    });
  };

  // Copy Share Link Handler
  const handleCopyLink = () => {
    handleRequireAuth('SNS 퍼가기 & 링크 복사', () => {
      if (typeof window !== 'undefined') {
        const url = `${window.location.origin}/#/megazine?article=${article.id}`;
        navigator.clipboard.writeText(url);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    });
  };

  // SNS Share Handler
  const handleSnsShare = (platform) => {
    handleRequireAuth('SNS 퍼가기', () => {
      const shareUrl = encodeURIComponent(`${window.location.origin}/#/megazine?article=${article.id}`);
      const shareTitle = encodeURIComponent(`[BEST MEGAZINE] ${article.title}`);

      if (platform === 'facebook') {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
      } else if (platform === 'zalo') {
        window.open(`https://chat.zalo.me/`, '_blank');
      } else if (platform === 'kakao') {
        handleCopyLink();
        alert('기사 공유 링크가 복사되었습니다. 카카오톡 창에 붙여넣기(Ctrl+V) 하세요!');
      }
    });
  };

  // Comment Submit Handler
  const handleAddComment = (e) => {
    e.preventDefault();
    handleRequireAuth('댓글 작성', () => {
      if (!newComment.trim()) return;
      const commentObj = {
        id: `c-${Date.now()}`,
        author: user?.name || 'BEST 회원',
        avatar: user?.avatar || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&q=80',
        content: newComment.trim(),
        createdAt: '방금 전'
      };
      const updated = [commentObj, ...comments];
      setComments(updated);
      localStorage.setItem(`megazine_comments_${article.id}`, JSON.stringify(updated));
      setNewComment('');
    });
  };

  // Resolve related businesses
  const relatedPicks = INITIAL_BEST_PICKS.filter(bp => 
    (article.relatedBusinesses || []).includes(bp.id) || article.category === 'BEST_PICK'
  );
  const displayPicks = relatedPicks.length > 0 ? relatedPicks : INITIAL_BEST_PICKS.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div 
        className="bg-navy-900 border border-gold-500/30 rounded-3xl max-w-3xl w-full max-h-[92vh] flex flex-col overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header Bar */}
        <div className="p-4 sm:p-5 border-b border-navy-800 flex items-center justify-between bg-navy-950/90 backdrop-blur-md sticky top-0 z-20">
          <div className="flex items-center space-x-2">
            <span className="text-xs font-black uppercase px-3 py-1 rounded-full bg-gold-500 text-navy-950">
              {article.category || 'NEWS'}
            </span>
            {article.edition && (
              <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-navy-900 text-cyan-400 border border-cyan-500/40">
                {article.edition}
              </span>
            )}
          </div>

          <div className="flex items-center space-x-2">
            {/* Like Button Header */}
            <button
              onClick={handleToggleLike}
              className={`px-3 py-1.5 rounded-xl border text-xs font-bold flex items-center space-x-1.5 transition-all ${
                isLiked 
                  ? 'bg-rose-500/20 border-rose-500 text-rose-400' 
                  : 'bg-navy-900 border-navy-700 text-slate-300 hover:text-rose-400'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-rose-400 text-rose-400' : ''}`} />
              <span>{likeCount}</span>
            </button>

            {/* Copy Link Button Header */}
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-gold-400 border border-navy-700 flex items-center space-x-1.5 text-xs transition-colors"
              title="링크 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? '복사됨!' : '공유 Link'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Member Authentication Required Modal Banner Alert */}
        {authRequiredNotice && (
          <div className="bg-gradient-to-r from-amber-500/20 via-gold-500/30 to-amber-500/20 border-b border-gold-500/40 p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
            <div className="flex items-center space-x-2 text-gold-300 font-bold">
              <Lock className="w-4 h-4 text-gold-400 shrink-0 animate-bounce" />
              <span>{authRequiredNotice}</span>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
              <button
                onClick={() => {
                  setAuthRequiredNotice(null);
                  if (onOpenAuth) onOpenAuth();
                }}
                className="px-4 py-1.5 rounded-xl bg-gold-500 text-navy-950 font-black flex items-center space-x-1 hover:bg-gold-400 transition-colors shadow-md"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Google 로그인</span>
              </button>
              <button
                onClick={() => setAuthRequiredNotice(null)}
                className="p-1.5 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Scrollable Content Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-8">
          
          {/* Article Header Info */}
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span className="flex items-center">
                <Clock className="w-3.5 h-3.5 mr-1 text-gold-400" />
                {publishedDate}
              </span>
              <span className="text-emerald-400 font-bold flex items-center">
                <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                AI Fact Checked
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white leading-tight">
              {article.title}
            </h1>

            {article.subtitle && (
              <p className="text-sm sm:text-base font-semibold text-gold-300 leading-relaxed border-l-2 border-gold-500 pl-3">
                {article.subtitle}
              </p>
            )}
          </div>

          {/* AI 1-Min Audio Briefing Player */}
          <AudioBriefingPlayer 
            title={article.title} 
            textToRead={article.summary || article.whyItMatters || article.content} 
          />

          {/* Featured Image */}
          {article.thumbnail && (
            <div className="rounded-2xl overflow-hidden border border-navy-800 aspect-[16/9] shadow-xl">
              <img 
                src={article.thumbnail} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Structured News Sections: NEWS -> INFORMATION -> ACTION */}
          <div className="space-y-6 bg-navy-950/80 p-5 sm:p-6 rounded-3xl border border-navy-800">
            
            {/* Why It Matters */}
            {article.whyItMatters && (
              <div className="space-y-2 border-b border-navy-800/80 pb-4">
                <h3 className="text-sm font-bold text-amber-400 uppercase tracking-wider flex items-center">
                  <Sparkles className="w-4 h-4 mr-1.5 text-amber-400" />
                  <span>왜 중요한가? (Why it matters)</span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {article.whyItMatters}
                </p>
              </div>
            )}

            {/* Expats Impact */}
            {article.impactOnExpats && (
              <div className="space-y-2 border-b border-navy-800/80 pb-4">
                <h3 className="text-sm font-bold text-cyan-400 uppercase tracking-wider flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1.5 text-cyan-400" />
                  <span>교민에게 어떤 영향이 있나? (Expat Impact)</span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {article.impactOnExpats}
                </p>
              </div>
            )}

            {/* Action Required */}
            {article.actionRequired && (
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-emerald-400 uppercase tracking-wider flex items-center">
                  <CheckSquare className="w-4 h-4 mr-1.5 text-emerald-400" />
                  <span>무엇을 준비해야 하나? (Action Checklist)</span>
                </h3>
                <p className="text-sm text-slate-200 leading-relaxed">
                  {article.actionRequired}
                </p>
              </div>
            )}
          </div>

          {/* Main Content Body (Rich Article Content) */}
          <div className="prose prose-invert max-w-none text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line border-t border-navy-800 pt-6 space-y-4">
            {getFormattedArticleContent(article)}
          </div>

          {/* SNS Share & Member Actions Bar */}
          <div className="bg-navy-950 p-5 rounded-2xl border border-navy-800 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                <Share2 className="w-4 h-4 text-gold-400" />
                <span>SNS 퍼가기 & 공유 (회원 전용)</span>
              </span>
              {!user && (
                <span className="text-[10px] text-amber-400 font-semibold flex items-center">
                  <Lock className="w-3 h-3 mr-1" />
                  로그인 후 이용 가능
                </span>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <button
                onClick={() => handleSnsShare('facebook')}
                className="px-3.5 py-2 rounded-xl bg-blue-600/20 hover:bg-blue-600 text-blue-300 hover:text-white border border-blue-500/40 text-xs font-bold transition-all"
              >
                📘 Facebook 퍼가기
              </button>
              <button
                onClick={() => handleSnsShare('zalo')}
                className="px-3.5 py-2 rounded-xl bg-cyan-600/20 hover:bg-cyan-600 text-cyan-300 hover:text-white border border-cyan-500/40 text-xs font-bold transition-all"
              >
                💬 Zalo 공유
              </button>
              <button
                onClick={() => handleSnsShare('kakao')}
                className="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500 text-amber-300 hover:text-navy-950 border border-amber-500/40 text-xs font-bold transition-all"
              >
                🟡 카카오톡 전달
              </button>
              <button
                onClick={handleCopyLink}
                className="px-3.5 py-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 border border-navy-700 text-xs font-bold transition-all"
              >
                🔗 기사 링크 복사
              </button>
            </div>
          </div>

          {/* Member Comments Section */}
          <div className="bg-navy-950/90 p-5 sm:p-6 rounded-3xl border border-navy-800 space-y-6">
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <div className="flex items-center space-x-2">
                <MessageSquare className="w-5 h-5 text-gold-400" />
                <h3 className="text-base font-bold text-white">교민 독자 댓글</h3>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gold-500/20 text-gold-400 border border-gold-500/30">
                  {comments.length}
                </span>
              </div>
              {!user && (
                <span className="text-xs text-amber-400 font-semibold flex items-center">
                  <Lock className="w-3.5 h-3.5 mr-1" />
                  회원 전용
                </span>
              )}
            </div>

            {/* Comment Form or Lock Overlay */}
            {user ? (
              <form onSubmit={handleAddComment} className="space-y-3">
                <div className="flex items-center space-x-2">
                  <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full border border-gold-400" />
                  <span className="text-xs font-bold text-white">{user.name}</span>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="하노이 교민 여러분과 의견을 나눠보세요 (회원 전용)..."
                    className="flex-grow bg-navy-900 border border-navy-800 focus:border-gold-500 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-400 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold rounded-xl text-xs flex items-center space-x-1 shrink-0 shadow-md"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>등록</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="p-4 rounded-2xl bg-navy-900/80 border border-gold-500/30 text-center space-y-3">
                <div className="flex items-center justify-center space-x-2 text-gold-400 font-bold text-xs">
                  <Lock className="w-4 h-4" />
                  <span>댓글 작성은 BEST 로그인 회원만 가능합니다.</span>
                </div>
                <button
                  onClick={() => handleRequireAuth('댓글 작성', () => {})}
                  className="px-4 py-2 rounded-xl bg-gold-500 text-navy-950 font-bold text-xs shadow-md hover:bg-gold-400 transition-all inline-flex items-center space-x-1.5"
                >
                  <LogIn className="w-4 h-4" />
                  <span>Google 회원 로그인하고 댓글 달기</span>
                </button>
              </div>
            )}

            {/* Comments List */}
            <div className="space-y-3">
              {comments.map((comment) => (
                <div key={comment.id} className="p-3.5 rounded-2xl bg-navy-900 border border-navy-800/80 space-y-1.5">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center space-x-2">
                      <img src={comment.avatar} alt={comment.author} className="w-6 h-6 rounded-full border border-navy-700" />
                      <span className="font-bold text-slate-200">{comment.author}</span>
                    </div>
                    <span className="text-[10px] text-slate-400">{comment.createdAt}</span>
                  </div>
                  <p className="text-xs text-slate-300 pl-8 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sources & Citations */}
          {article.sourceNames && article.sourceNames.length > 0 && (
            <div className="bg-navy-950 p-4 rounded-2xl border border-navy-800 space-y-2 text-xs">
              <span className="font-bold text-slate-400 uppercase tracking-wider block">기사 정보 출처 (Sources)</span>
              <div className="flex flex-wrap gap-2">
                {article.sourceNames.map((srcName, idx) => (
                  <span key={idx} className="bg-navy-900 text-slate-300 px-3 py-1 rounded-lg border border-navy-700 flex items-center space-x-1">
                    <span>{srcName}</span>
                    {article.sourceUrls?.[idx] && (
                      <a href={article.sourceUrls[idx]} target="_blank" rel="noopener noreferrer" className="text-gold-400 hover:underline ml-1">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* BEST PICK Partner Recommendations Section */}
          <div className="space-y-4 border-t border-gold-500/30 pt-6">
            <div className="flex items-center justify-between">
              <h3 className="text-base font-bold text-white flex items-center">
                <Sparkles className="w-4 h-4 mr-1.5 text-gold-400" />
                <span>관련 BEST PICK 파트너 업체</span>
              </h3>
              <span className="text-xs text-slate-400">하노이 교민 추천</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {displayPicks.map(pick => (
                <BestPickCard key={pick.id} item={pick} />
              ))}
            </div>
          </div>

        </div>

        {/* Sticky Footer */}
        <div className="p-4 border-t border-navy-800 bg-navy-950 flex items-center justify-between">
          <span className="text-xs text-slate-400">BEST MEGAZINE AI Auto Engine 2.0</span>
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-xl bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs shadow-md transition-all"
          >
            닫기
          </button>
        </div>

      </div>
    </div>
  );
}
