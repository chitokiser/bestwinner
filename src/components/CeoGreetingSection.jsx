import React from 'react';
import { 
  Quote, 
  CheckCircle2, 
  Award, 
  Sparkles,
  UserCheck,
  Building2
} from 'lucide-react';

export default function CeoGreetingSection({ t }) {
  const g = t.ceoGreeting;

  return (
    <section id="ceo-greeting" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/30 shadow-sm">
            <UserCheck className="w-3.5 h-3.5 text-gold-400" />
            <span>{g.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {g.title}
          </h2>
        </div>

        {/* CEO Greeting Main Box (Text-Focused Without Photo) */}
        <div className="glass-card-chrome rounded-3xl p-6 sm:p-12 border border-chrome-300/40 shadow-2xl relative overflow-hidden space-y-8">
          
          {/* Background Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

          {/* Top Key Quote Card */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-gold-500/40 relative shadow-gold-glow">
            <Quote className="w-10 h-10 text-gold-500/30 absolute top-4 left-4 pointer-events-none" />
            <div className="relative z-10 text-center sm:text-left sm:pl-8">
              <p className="text-lg sm:text-2xl font-extrabold gold-chrome-gradient-text leading-relaxed whitespace-pre-line">
                "{g.quote}"
              </p>
            </div>
          </div>

          {/* Greeting Body Content */}
          <div className="space-y-6 text-slate-200 text-base leading-relaxed">
            
            <div className="flex flex-col sm:flex-row justify-between sm:items-center pb-4 border-b border-navy-800 gap-2">
              <p className="font-extrabold text-gold-300 text-xl">
                {g.greeting}
              </p>
              <div className="inline-flex items-center space-x-2 bg-navy-900 text-chrome-200 text-xs font-bold px-3 py-1 rounded-full border border-chrome-400/30">
                <Building2 className="w-3.5 h-3.5 text-gold-400" />
                <span>BEST winner Vn Group</span>
              </div>
            </div>

            <p className="whitespace-pre-line text-slate-300">
              {g.p1}
            </p>

            <p className="text-slate-300 font-medium">
              {g.p2}
            </p>

            {/* 5 Core Divisions Bullet Checklist */}
            <div className="grid grid-cols-1 gap-3.5 py-3">
              {g.bullets.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-navy-900/90 border border-navy-800 flex items-start space-x-3.5 shadow-sm">
                  <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </div>
                  <div>
                    <span className="font-extrabold text-white text-sm sm:text-base">{item.title} </span>
                    <span className="text-xs sm:text-sm text-slate-300">{item.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-slate-300">
              {g.p3}
            </p>

            <p className="text-slate-300">
              {g.p4}
            </p>

            {/* Executive Signature Closing Block */}
            <div className="pt-8 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-slate-400">{g.closing}</p>
              </div>

              <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-gold-500/40 text-right shadow-md">
                <span className="text-xs text-gold-400 font-bold block tracking-wider uppercase">BEST winner Vn Group</span>
                <span className="text-xl font-black text-white tracking-widest mt-0.5 block">
                  대표이사 <span className="gold-gradient-text">김성원</span> 드림
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
