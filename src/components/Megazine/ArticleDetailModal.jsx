import React, { useState } from 'react';
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
  Layers,
  Copy,
  Check
} from 'lucide-react';
import BestPickCard from './BestPickCard';
import AudioBriefingPlayer from './AudioBriefingPlayer';
import { INITIAL_BEST_PICKS } from '../../data/megazineInitialData';

export default function ArticleDetailModal({ article, onClose, onShare }) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const publishedDate = article.publishedAt 
    ? new Date(article.publishedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    : '방금 전';

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      const url = `${window.location.origin}/#/megazine?article=${article.id}`;
      navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  // Resolve related businesses
  const relatedPicks = INITIAL_BEST_PICKS.filter(bp => 
    (article.relatedBusinesses || []).includes(bp.id) || article.category === 'BEST_PICK'
  );
  const displayPicks = relatedPicks.length > 0 ? relatedPicks : INITIAL_BEST_PICKS.slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
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
            <button
              onClick={handleCopyLink}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-gold-400 border border-navy-700 flex items-center space-x-1.5 text-xs transition-colors"
              title="링크 복사"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              <span className="hidden sm:inline">{copied ? '복사됨!' : '공유 링크'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-300 hover:text-white border border-navy-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

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

          {/* Main Content Body */}
          <div className="prose prose-invert max-w-none text-sm sm:text-base text-slate-200 leading-relaxed whitespace-pre-line border-t border-navy-800 pt-6">
            {article.content}
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
