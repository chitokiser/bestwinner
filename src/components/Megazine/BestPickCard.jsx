import React from 'react';
import { Star, MapPin, Phone, MessageSquare, ExternalLink, ShieldCheck } from 'lucide-react';

export default function BestPickCard({ item }) {
  if (!item) return null;

  return (
    <div className="bg-gradient-to-br from-navy-900 via-navy-900 to-navy-950 border border-gold-500/30 rounded-2xl p-4 shadow-lg hover:border-gold-400 transition-all space-y-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <span className="text-[10px] font-bold text-gold-400 uppercase tracking-wider bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30 inline-flex items-center space-x-1">
            <Star className="w-3 h-3 text-gold-400 fill-gold-400" />
            <span>BEST PICK · {item.category || '추천 파트너'}</span>
          </span>
          <h4 className="text-sm font-black text-white mt-1.5 flex items-center">
            <span>{item.name}</span>
            {item.badge && (
              <span className="ml-2 text-[10px] bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded border border-cyan-500/30 font-semibold">
                {item.badge}
              </span>
            )}
          </h4>
        </div>

        {item.rating && (
          <div className="flex items-center space-x-1 text-xs font-bold text-gold-400 bg-navy-950 px-2 py-1 rounded-lg border border-navy-800">
            <Star className="w-3.5 h-3.5 fill-gold-400" />
            <span>{item.rating}</span>
          </div>
        )}
      </div>

      <p className="text-xs text-slate-300 leading-relaxed">
        {item.desc}
      </p>

      <div className="text-[11px] text-slate-400 flex items-center space-x-1">
        <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
        <span className="truncate">{item.address}</span>
      </div>

      {/* Direct Action Buttons */}
      <div className="flex items-center gap-2 pt-1 border-t border-navy-800">
        {item.phone && (
          <a
            href={`tel:${item.phone}`}
            className="flex-1 py-2 px-3 bg-navy-950 hover:bg-navy-800 text-slate-200 text-xs font-bold rounded-xl border border-navy-700 flex items-center justify-center space-x-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-gold-400" />
            <span>전화 문의</span>
          </a>
        )}

        {item.zalo && (
          <a
            href={`https://zalo.me/${item.zalo}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-3 bg-blue-600/20 hover:bg-blue-600/30 text-blue-400 text-xs font-bold rounded-xl border border-blue-500/30 flex items-center justify-center space-x-1.5 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Zalo 상담</span>
          </a>
        )}

        {item.mapUrl && (
          <a
            href={item.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-navy-950 hover:bg-navy-800 text-slate-300 rounded-xl border border-navy-700"
            title="지도에서 위치 보기"
          >
            <ExternalLink className="w-4 h-4 text-cyan-400" />
          </a>
        )}
      </div>
    </div>
  );
}
