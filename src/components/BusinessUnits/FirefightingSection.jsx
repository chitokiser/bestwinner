import React, { useState } from 'react';
import { 
  Flame, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  Check, 
  ArrowRight, 
  BookOpen 
} from 'lucide-react';

export default function FirefightingSection({ t, onOpenConsult }) {
  const [activeTab, setActiveTab] = useState('extinguisher');

  const catalogs = [
    {
      id: 'extinguisher',
      name: '자동 소화 & 감지 장비',
      items: ['자동 화재 탐지 수신기 (Addressable Panel)', '스프링클러 헤드 & 알람 밸브 Set', 'QCVN 검정 필증 부착 소화기 패키지']
    },
    {
      id: 'fireproof',
      name: '내화 / 방화 자재',
      items: ['내화 피복재 & 방화 폼 (Firestop Foam)', '60분/120분 방화도료 & 방화문', '방화 댐퍼 (Fire Damper) & 배연 설비']
    },
    {
      id: 'consulting',
      name: '베트남 소방 인허가 컨설팅',
      items: ['소방 설계 도면 승인 (Thẩm duyệt PCCC)', '공사 완료 후 소방 완공 검사 (Nghiệm thu PCCC)', '정기 소방 점검 및 서류 대행']
    }
  ];

  const currentCatalog = catalogs.find(c => c.id === activeTab);

  return (
    <section id="firefighting" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unit Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-fireRed-500 uppercase tracking-widest bg-fireRed-500/10 px-3 py-1 rounded-full border border-fireRed-500/30">
              <Flame className="w-3.5 h-3.5" />
              <span>BUSINESS UNIT ④</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.business.units.firefighting.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              {t.business.units.firefighting.desc}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onOpenConsult('firefighting')}
              className="bg-fireRed-500 hover:bg-fireRed-600 text-white font-bold px-5 py-3 rounded-xl shadow-lg transition-all flex items-center text-sm"
            >
              <span>{t.business.units.firefighting.cta}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* QCVN Compliance Banner */}
        <div className="glass-card border border-fireRed-500/30 rounded-3xl p-6 sm:p-8 mb-10 space-y-4">
          <div className="flex items-center space-x-3 text-fireRed-400 font-bold text-sm">
            <ShieldCheck className="w-5 h-5" />
            <span>베트남 소방 인허가/검사 솔루션 가이드</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-white">
            베트남 소방 법규(QCVN / TCVN) 완벽 준수 & 검정 자재 공급
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
            {t.business.units.firefighting.highlight}
          </p>
        </div>

        {/* Interactive Catalog Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Tab Selector */}
          <div className="lg:col-span-4 space-y-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">소방 자재 카테고리</span>
            {catalogs.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                  activeTab === cat.id
                    ? 'bg-fireRed-600/20 text-white border-fireRed-500 font-bold shadow-md'
                    : 'bg-navy-900/80 text-slate-300 border-navy-700 hover:border-fireRed-500/40'
                }`}
              >
                <span className="text-xs sm:text-sm">{cat.name}</span>
                <ArrowRight className="w-4 h-4 text-fireRed-400" />
              </button>
            ))}
          </div>

          {/* Active Category Display */}
          <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-2xl border border-navy-700 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center">
                <BookOpen className="w-5 h-5 mr-2 text-fireRed-400" />
                {currentCatalog.name} 주요 라인업
              </h4>
              <div className="space-y-3">
                {currentCatalog.items.map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 p-3.5 rounded-xl bg-navy-900 border border-navy-800">
                    <div className="w-6 h-6 rounded-full bg-fireRed-500/20 text-fireRed-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
              <span className="text-xs text-slate-400">QCVN 시험성적서 및 법규 부합 유무 즉시 확인 가능</span>
              <button
                onClick={() => onOpenConsult('firefighting')}
                className="bg-navy-800 hover:bg-navy-700 text-fireRed-400 font-bold text-xs px-4 py-2.5 rounded-lg border border-fireRed-500/30"
              >
                소방 자재 견적 및 서류 문의 →
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
