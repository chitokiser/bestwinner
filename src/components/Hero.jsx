import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Calculator, 
  CheckCircle2, 
  Clock, 
  ShieldCheck,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Hero({ t, onOpenCalculator }) {
  const heroImages = [
    '/images/hero/1.png',
    '/images/hero/2.png',
    '/images/hero/3.png',
    '/images/hero/4.png',
    '/images/hero/5.png',
    '/images/hero/6.png',
    '/images/hero/7.png',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-between pt-10 pb-12 overflow-hidden bg-navy-950 border-b border-navy-800">
      
      {/* Dynamic Background Image Slider (Rotating 1.png ~ 7.png) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {heroImages.map((imgSrc, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              currentSlide === idx ? 'opacity-75 sm:opacity-65 scale-105' : 'opacity-0 scale-100'
            } transition-transform duration-7000 ease-linear`}
          >
            <img 
              src={imgSrc} 
              alt={`BEST winner Group ${idx + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
        {/* Balanced Dark Gradient Overlay: Left side contrast for text, right/center vivid visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-950/60 to-navy-950/25 sm:from-navy-950/85 sm:via-navy-950/50 sm:to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>
      </div>

      {/* Subtle Lighting Accents */}
      <div className="absolute top-10 right-1/3 w-80 h-80 bg-gold-500/10 rounded-full filter blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full">
        {/* Main Hero Copy */}
        <div className="max-w-3xl space-y-5 sm:space-y-6">
          
          {/* Catchphrase Pill */}
          <div className="inline-flex items-center space-x-2 bg-navy-900/90 border border-gold-500/30 rounded-full px-3.5 py-1.5 shadow-md max-w-full">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse flex-shrink-0"></span>
            <span className="text-[11px] sm:text-sm font-bold text-gold-300 tracking-wide break-keep leading-tight">
              "{t.hero.catchphrase}"
            </span>
          </div>

          {/* Clean Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight break-keep">
            BEST winner Group <span className="gold-gradient-text">Vietnam</span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base sm:text-xl font-bold text-chrome-200 leading-snug break-keep">
            베트남 대표 통합 주택·건설·스마트 인프라 솔루션
          </p>

          {/* Concise Description */}
          <p className="text-slate-300 text-xs sm:text-base leading-relaxed max-w-2xl font-normal break-keep">
            한국의 정밀 기술력과 베트남 현지 맞춤 제작 시스템의 완벽한 조화로 공간의 가치를 완성합니다.
          </p>

          {/* Main CTAs */}
          <div className="pt-2 flex flex-wrap gap-4 items-center">
            <button
              onClick={onOpenCalculator}
              className="w-full sm:w-auto bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-extrabold px-6 py-3.5 rounded-xl shadow-gold-glow transition-all transform hover:-translate-y-0.5 flex items-center justify-center space-x-2.5 text-sm min-h-[48px]"
            >
              <Calculator className="w-4 h-4 stroke-[2.5]" />
              <span>{t.hero.ctaCalculator}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="pt-3 flex flex-wrap items-center gap-3 sm:gap-6 text-xs text-slate-400 border-t border-navy-800/80 break-keep">
            <div className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 flex-shrink-0" />
              <span>One-Stop B2B/B2C</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-gold-400 flex-shrink-0" />
              <span>Korean Safety Standards</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>24/7 Direct A/S Response</span>
            </div>
          </div>

        </div>

        {/* Clean Controls & Stats Footer Bar */}
        <div className="mt-8 pt-4 border-t border-navy-800/80 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Gallery Slider Controls */}
          <div className="flex items-center space-x-3 text-xs text-slate-400">
            <div className="flex items-center space-x-1.5">
              {heroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentSlide === idx ? 'w-6 bg-gold-400' : 'w-1.5 bg-navy-800 hover:bg-slate-600'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center space-x-1 ml-2">
              <button
                onClick={handlePrevSlide}
                className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNextSlide}
                className="p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white transition-colors min-w-[36px] min-h-[36px] flex items-center justify-center"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Clean 4 Key Statistics Metrics (2x2 Grid on mobile for optimum clarity) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center w-full md:w-auto">
            <div className="bg-navy-900/60 p-3 sm:p-0 rounded-xl border sm:border-none border-navy-800">
              <span className="text-lg sm:text-xl font-extrabold text-gold-400 block">7+</span>
              <span className="text-[11px] text-slate-400 block font-medium mt-0.5">{t.hero.stats.years}</span>
            </div>
            <div className="bg-navy-900/60 p-3 sm:p-0 rounded-xl border sm:border-none border-navy-800">
              <span className="text-lg sm:text-xl font-extrabold text-chrome-200 block">500+</span>
              <span className="text-[11px] text-slate-400 block font-medium mt-0.5">{t.hero.stats.projects}</span>
            </div>
            <div className="bg-navy-900/60 p-3 sm:p-0 rounded-xl border sm:border-none border-navy-800">
              <span className="text-lg sm:text-xl font-extrabold text-emeraldGreen-400 block">5</span>
              <span className="text-[11px] text-slate-400 block font-medium mt-0.5">{t.hero.stats.divisions}</span>
            </div>
            <div className="bg-navy-900/60 p-3 sm:p-0 rounded-xl border sm:border-none border-navy-800">
              <span className="text-lg sm:text-xl font-extrabold text-gold-400 block">24/7</span>
              <span className="text-[11px] text-slate-400 block font-medium mt-0.5">{t.hero.stats.support}</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
