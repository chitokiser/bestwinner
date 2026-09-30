import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X, Sparkles, Play, Pause } from 'lucide-react';

export default function MegazineHeroShowcase() {
  const getImgPath = (filename) => {
    const base = import.meta.env.BASE_URL || '/';
    const cleanBase = base.endsWith('/') ? base : base + '/';
    return `${cleanBase}images/megazine/${filename}`;
  };

  const HERO_ITEMS = [
    { id: 1, file: '1.png', title: 'BEST MEGAZINE COVER #1', edition: '07:00 MORNING ISSUE', tag: '하노이 브리핑' },
    { id: 2, file: '2.png', title: 'BEST MEGAZINE COVER #2', edition: '11:00 BUSINESS ISSUE', tag: '비즈니스 & 세무' },
    { id: 3, file: '3.png', title: 'BEST MEGAZINE COVER #3', edition: '14:00 LIFE ISSUE', tag: '생활 & 행정 가이드' },
    { id: 4, file: '4.png', title: 'BEST MEGAZINE COVER #4', edition: '18:00 NOW ISSUE', tag: '실시간 교민 이슈' },
    { id: 5, file: '5.png', title: 'BEST MEGAZINE COVER #5', edition: '21:00 MEGAZINE ISSUE', tag: '종합 매거진 Pick' },
    { id: 6, file: '6.png', title: 'BEST MEGAZINE COVER #6', edition: 'SPECIAL EXPAT ISSUE', tag: '베트남 하노이 특집' }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [lightboxImage, setLightboxImage] = useState(null);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_ITEMS.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPlaying]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + HERO_ITEMS.length) % HERO_ITEMS.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % HERO_ITEMS.length);
  };

  const activeItem = HERO_ITEMS[currentIndex];

  return (
    <div className="w-full space-y-3">
      {/* Main Hero Banner Frame */}
      <div className="relative w-full rounded-3xl overflow-hidden border border-gold-500/30 bg-navy-950 shadow-2xl group min-h-[220px] sm:min-h-[320px] lg:min-h-[380px] flex items-center justify-center">
        
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={getImgPath(activeItem.file)}
            alt={activeItem.title}
            className="w-full h-full object-cover object-center transition-all duration-700 ease-out transform scale-100 group-hover:scale-105"
            onError={(e) => {
              // Fallback path in case relative path differs
              e.currentTarget.src = `./images/megazine/${activeItem.file}`;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/80 via-transparent to-navy-950/80" />
        </div>

        {/* Content Info Overlay */}
        <div className="relative z-10 max-w-7xl w-full p-5 sm:p-8 flex flex-col justify-end h-full space-y-2 mt-auto">
          <div className="flex items-center space-x-2">
            <span className="px-3 py-1 rounded-full bg-gold-500/90 text-navy-950 font-black text-[10px] sm:text-xs uppercase tracking-wider shadow-lg flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              {activeItem.tag}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-navy-900/80 border border-cyan-500/40 text-cyan-300 font-bold text-[10px] sm:text-xs backdrop-blur-md">
              {activeItem.edition}
            </span>
          </div>

          <h2 className="text-xl sm:text-3xl font-black text-white tracking-tight drop-shadow-md">
            {activeItem.title}
          </h2>

          <div className="flex items-center justify-between pt-2">
            <button
              onClick={() => setLightboxImage(getImgPath(activeItem.file))}
              className="px-4 py-2 rounded-xl bg-navy-900/90 hover:bg-gold-500 hover:text-navy-950 border border-navy-700 text-white font-bold text-xs flex items-center space-x-1.5 transition-all shadow-md backdrop-blur-md"
            >
              <Maximize2 className="w-3.5 h-3.5" />
              <span>커버 고화질 크게보기</span>
            </button>

            {/* Play / Pause Toggle */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="p-2 rounded-xl bg-navy-900/80 hover:bg-navy-800 border border-navy-700 text-slate-300 hover:text-white transition-colors backdrop-blur-md"
              title={isPlaying ? '슬라이드 일시정지' : '슬라이드 자동재생'}
            >
              {isPlaying ? <Pause className="w-4 h-4 text-gold-400" /> : <Play className="w-4 h-4 text-emerald-400" />}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-navy-950/70 hover:bg-gold-500 hover:text-navy-950 text-white border border-navy-700 transition-all shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
          aria-label="이전 커버"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full bg-navy-950/70 hover:bg-gold-500 hover:text-navy-950 text-white border border-navy-700 transition-all shadow-xl backdrop-blur-md opacity-80 hover:opacity-100"
          aria-label="다음 커버"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* 6 Cover Images Thumbnail Strip */}
      <div className="grid grid-cols-6 gap-2 sm:gap-3">
        {HERO_ITEMS.map((item, index) => (
          <button
            key={item.id}
            onClick={() => {
              setCurrentIndex(index);
              setIsPlaying(false);
            }}
            className={`relative rounded-xl overflow-hidden aspect-[16/10] border-2 transition-all ${
              currentIndex === index
                ? 'border-gold-500 ring-2 ring-gold-500/50 scale-105 shadow-lg'
                : 'border-navy-800 opacity-60 hover:opacity-100 hover:border-navy-700'
            }`}
          >
            <img
              src={getImgPath(item.file)}
              alt={`Cover ${item.id}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `./images/megazine/${item.file}`;
              }}
            />
            <span className="absolute bottom-1 right-1 bg-navy-950/80 text-white text-[9px] font-bold px-1.5 py-0.5 rounded backdrop-blur-sm">
              #{item.id}
            </span>
          </button>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 z-50 bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-4 animate-in fade-in duration-200"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center justify-center">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-navy-900 border border-navy-700 text-slate-300 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Megazine Cover Preview"
              className="max-w-full max-h-[85vh] object-contain rounded-2xl border border-gold-500/40 shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
