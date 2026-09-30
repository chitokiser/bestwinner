import React from 'react';
import { 
  Share2, 
  Eye, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Bookmark,
  Flame
} from 'lucide-react';
import { getDefaultThumbnail } from '../../services/megazineService';

export default function ArticleCard({ article, onOpen, onShare }) {
  const publishedDate = article.publishedAt 
    ? new Date(article.publishedAt).toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
    : '방금 전';

  return (
    <div 
      onClick={() => onOpen(article)}
      className="bg-navy-900/90 border border-navy-800 hover:border-gold-500/50 rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl hover:shadow-2xl cursor-pointer flex flex-col justify-between group"
    >
      <div>
        {/* Top Image Banner (SNS Optimized 3:2 Aspect Ratio) */}
        <div className="relative aspect-[16/10] overflow-hidden bg-navy-950">
          <img 
            src={article.thumbnail || getDefaultThumbnail(article.category)} 
            alt={article.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = getDefaultThumbnail(article.category);
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
          
          {/* Category Badge & Edition Floating Badges */}
          <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 items-center">
            <span className="text-[10px] font-black uppercase px-3 py-1 rounded-full bg-gold-500 text-navy-950 shadow-md">
              {article.category || 'NEWS'}
            </span>
            {article.edition && (
              <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-navy-950/90 text-cyan-400 border border-cyan-500/40 backdrop-blur-md">
                {article.edition}
              </span>
            )}
          </div>

          {/* AI Fact Checked Badge */}
          {article.factChecked && (
            <div className="absolute top-3 right-3 bg-navy-950/90 text-emerald-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-emerald-500/40 flex items-center space-x-1 shadow-md backdrop-blur-md">
              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
              <span>AI FACT CHECKED</span>
            </div>
          )}

          {/* Importance Score Badge */}
          {article.importanceScore && (
            <div className="absolute bottom-3 left-3 bg-navy-950/80 backdrop-blur-md px-2.5 py-1 rounded-lg border border-navy-700 flex items-center space-x-1 text-xs">
              <Flame className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span className="text-white font-black">{article.importanceScore}점</span>
            </div>
          )}
        </div>

        {/* Card Content Body */}
        <div className="p-5 space-y-3">
          <div className="flex items-center justify-between text-[11px] text-slate-400">
            <span className="flex items-center">
              <Clock className="w-3 h-3 mr-1 text-gold-400" />
              {publishedDate}
            </span>
            <span className="flex items-center space-x-2">
              <span className="flex items-center"><Eye className="w-3 h-3 mr-1" />{article.viewCount || 120}</span>
            </span>
          </div>

          <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-gold-300 transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          {article.subtitle && (
            <p className="text-xs font-semibold text-slate-300 line-clamp-1 italic">
              {article.subtitle}
            </p>
          )}

          <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
            {article.summary || article.whyItMatters}
          </p>

          {/* Tags list */}
          {article.tags && article.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 pt-1">
              {article.tags.slice(0, 3).map((tag, idx) => (
                <span key={idx} className="text-[10px] text-slate-400 bg-navy-950 px-2 py-0.5 rounded-md border border-navy-800">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer Actions */}
      <div className="p-5 pt-0 flex items-center justify-between gap-2 border-t border-navy-800/60 mt-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onOpen(article);
          }}
          className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center group-hover:translate-x-1 transition-transform"
        >
          <span>기사 전체 읽기</span>
          <ArrowRight className="w-3.5 h-3.5 ml-1" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            if (onShare) onShare(article);
          }}
          className="p-2 rounded-xl bg-navy-950 hover:bg-navy-800 text-slate-300 hover:text-gold-400 border border-navy-800 transition-colors"
          title="SNS 공유하기"
        >
          <Share2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
