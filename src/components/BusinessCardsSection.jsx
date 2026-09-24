import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Paintbrush, 
  ArrowUpRight, 
  Car, 
  Flame, 
  Droplets, 
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function BusinessCardsSection({ t }) {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 'interior',
      path: '/business/interior',
      num: '01',
      tag: t.business.units.interior.tag,
      name: t.business.units.interior.name,
      desc: t.business.units.interior.desc,
      highlight: t.business.units.interior.highlight,
      features: t.business.units.interior.features,
      icon: Paintbrush,
      badgeColor: 'bg-amber-500/20 text-gold-400 border-amber-500/30',
      btnColor: 'bg-gradient-to-r from-amber-500 via-gold-500 to-chrome-200 text-navy-950',
      bgImg: t.business.units.interior.img
    },
    {
      id: 'elevator',
      path: '/business/elevator',
      num: '02',
      tag: t.business.units.elevator.tag,
      name: t.business.units.elevator.name,
      desc: t.business.units.elevator.desc,
      highlight: t.business.units.elevator.highlight,
      features: t.business.units.elevator.features,
      icon: ArrowUpRight,
      badgeColor: 'bg-chrome-400/20 text-chrome-200 border-chrome-400/30',
      btnColor: 'bg-gradient-to-r from-blue-600 via-indigo-600 to-chrome-400 text-white',
      bgImg: t.business.units.elevator.img
    },
    {
      id: 'parking',
      path: '/business/parking',
      num: '03',
      tag: t.business.units.parking.tag,
      name: t.business.units.parking.name,
      desc: t.business.units.parking.desc,
      highlight: t.business.units.parking.highlight,
      features: t.business.units.parking.features,
      icon: Car,
      badgeColor: 'bg-emerald-500/20 text-emeraldGreen-400 border-emerald-500/30',
      btnColor: 'bg-gradient-to-r from-emerald-500 via-teal-600 to-chrome-300 text-navy-950 font-bold',
      bgImg: t.business.units.parking.img
    },
    {
      id: 'firefighting',
      path: '/business/firefighting',
      num: '04',
      tag: t.business.units.firefighting.tag,
      name: t.business.units.firefighting.name,
      desc: t.business.units.firefighting.desc,
      highlight: t.business.units.firefighting.highlight,
      features: t.business.units.firefighting.features,
      icon: Flame,
      badgeColor: 'bg-red-500/20 text-fireRed-400 border-red-500/30',
      btnColor: 'bg-gradient-to-r from-red-600 via-rose-600 to-chrome-400 text-white',
      bgImg: t.business.units.firefighting.img
    },
    {
      id: 'waterproofing',
      path: '/business/waterproofing',
      num: '05',
      tag: t.business.units.waterproofing.tag,
      name: t.business.units.waterproofing.name,
      desc: t.business.units.waterproofing.desc,
      highlight: t.business.units.waterproofing.highlight,
      features: t.business.units.waterproofing.features,
      icon: Droplets,
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      btnColor: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-chrome-300 text-navy-950 font-bold',
      bgImg: t.business.units.waterproofing.img
    }
  ];

  const handleCardClick = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="business-cards" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-chrome-200 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-chrome-400/40 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>{t.cardsSection.badge}</span>
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white break-keep">
            {t.cardsSection.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 break-keep">
            {t.cardsSection.subtitle}
          </p>
        </div>

        {/* 5 Business Cards Grid with Metallic Chrome Border Accent */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cardsData.map((card) => {
            const IconComponent = card.icon;
            return (
              <div 
                key={card.id}
                onClick={() => handleCardClick(card.path)}
                className="glass-card rounded-3xl overflow-hidden border border-chrome-400/30 hover:border-chrome-200/80 transition-all duration-300 hover:-translate-y-2 cursor-pointer group flex flex-col justify-between shadow-card-hover hover:shadow-chrome-glow"
              >
                <div>
                  {/* Top Image Banner */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={card.bgImg} 
                      alt={card.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                    
                    {/* Floating Badges */}
                    <div className="absolute top-4 left-4 flex items-center space-x-2">
                      <span className="w-8 h-8 rounded-xl bg-navy-950/90 text-chrome-200 font-black text-xs flex items-center justify-center border border-chrome-400/40 shadow-sm">
                        {card.num}
                      </span>
                      <span className={`text-[11px] font-bold px-3 py-1 rounded-full border ${card.badgeColor}`}>
                        {card.tag}
                      </span>
                    </div>

                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-navy-950/90 text-chrome-300 group-hover:text-gold-400 group-hover:bg-gold-500/20 border border-chrome-400/40 flex items-center justify-center transition-colors">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-gold-300 transition-colors break-keep">
                      {card.name}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed break-keep">
                      {card.desc}
                    </p>

                    <div className="p-3 rounded-xl bg-navy-900/90 border border-chrome-400/20 text-[11px] text-chrome-200 font-medium italic break-keep">
                      💡 {card.highlight}
                    </div>

                    {/* Features checklist */}
                    <div className="space-y-2 pt-1">
                      {card.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start space-x-2 text-xs text-slate-200 break-keep">
                          <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Link Button */}
                <div className="p-6 pt-0">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCardClick(card.path);
                    }}
                    className={`w-full py-3.5 rounded-xl font-bold text-xs shadow-md transition-transform group-hover:scale-[1.02] flex items-center justify-center space-x-2 border border-chrome-300/30 min-h-[44px] ${card.btnColor}`}
                  >
                    <span>{t.cardsSection.cardCta}</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
