import React from 'react';
import { CloudSun, CloudRain, Sun, DollarSign, TrendingUp, Sparkles, Clock, MapPin } from 'lucide-react';

export default function MegazineHeaderBanner({ weather, exchangeRates, aqi, t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  const getWeatherIcon = (iconName) => {
    switch (iconName) {
      case 'CloudRain':
        return <CloudRain className="w-5 h-5 text-blue-400" />;
      case 'Sun':
        return <Sun className="w-5 h-5 text-amber-400" />;
      case 'CloudSun':
      default:
        return <CloudSun className="w-5 h-5 text-amber-300" />;
    }
  };

  const getAqiColorBadge = (aqiVal) => {
    if (!aqiVal || aqiVal <= 50) return 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10';
    if (aqiVal <= 100) return 'text-amber-400 border-amber-500/30 bg-amber-500/10';
    if (aqiVal <= 150) return 'text-orange-400 border-orange-500/30 bg-orange-500/10';
    return 'text-rose-400 border-rose-500/30 bg-rose-500/10';
  };

  return (
    <div className="bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 border-b border-navy-800 py-6 px-4 sm:px-6 shadow-xl relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        
        {/* Title & Badge */}
        <div className="space-y-1.5 text-center lg:text-left">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 animate-pulse text-gold-400" />
            <span>AI AUTOMATED EXPAT NEWS SYSTEM</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight flex items-center justify-center lg:justify-start gap-2">
            <span>BEST <span className="gold-gradient-text">MEGAZINE</span></span>
            <span className="text-xs font-bold bg-navy-800 text-cyan-400 border border-cyan-500/30 px-2 py-0.5 rounded-md">DAILY 5x AI</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
            {isVi 
              ? 'Tin tức & thông tin dành riêng cho cộng đồng người Hàn Quốc tại Hà Nội & Việt Nam được tự động cập nhật bởi AI.' 
              : '하노이 & 베트남 교민 생활·비즈니스·행정 전문 AI 실시간 매거진 (하루 5회 자동 발행)'}
          </p>
        </div>

        {/* Live Weather, AQI & Exchange Widgets Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full lg:w-auto">
          
          {/* Weather Widget */}
          <div className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-3 flex items-center space-x-2.5 shadow-md backdrop-blur-md">
            <div className="p-2 rounded-xl bg-navy-800 border border-navy-700">
              {getWeatherIcon(weather?.icon)}
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-400 uppercase">
                <MapPin className="w-3 h-3 text-gold-400" />
                <span>Hanoi Weather</span>
              </div>
              <p className="text-xs font-black text-white">
                {weather?.temp || 29}°C <span className="text-[10px] text-slate-300 font-normal">({weather?.condition || '구름 조금'})</span>
              </p>
              <p className="text-[9px] text-slate-400">
                습도 {weather?.humidity || 75}% · 강수 {weather?.rainProb || 20}%
              </p>
            </div>
          </div>

          {/* AQI (Air Quality Index) Widget */}
          <div className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-3 flex items-center space-x-2.5 shadow-md backdrop-blur-md">
            <div className="p-2 rounded-xl bg-navy-800 border border-navy-700">
              <span className="text-lg">🍃</span>
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-400 uppercase">
                <span>Hanoi AQI (미세먼지)</span>
              </div>
              <p className="text-xs font-black text-white flex items-center gap-1">
                AQI {aqi?.aqi || 68}
                <span className={`text-[9px] px-1.5 py-0.2 rounded border font-semibold ${getAqiColorBadge(aqi?.aqi)}`}>
                  {aqi?.status?.split(' ')[0] || '보통'}
                </span>
              </p>
              <p className="text-[9px] text-slate-400">
                PM2.5: {aqi?.pm25 || 28}µg/m³
              </p>
            </div>
          </div>

          {/* Exchange Rates Widget */}
          <div className="bg-navy-900/90 border border-navy-700/80 rounded-2xl p-3 flex items-center space-x-2.5 shadow-md backdrop-blur-md">
            <div className="p-2 rounded-xl bg-navy-800 border border-navy-700">
              <DollarSign className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-1 text-[10px] font-bold text-slate-400 uppercase">
                <TrendingUp className="w-3 h-3 text-emerald-400" />
                <span>Live Exchange Rate</span>
              </div>
              <p className="text-xs font-black text-emerald-400">
                1,000 KRW = {Math.round((exchangeRates?.krwVnd || 18.52) * 1000).toLocaleString()} VND
              </p>
              <p className="text-[9px] text-slate-400">
                1 USD = {(exchangeRates?.usdVnd || 25420).toLocaleString()} VND
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* 5 Daily Editions Pipeline Status Ribbon */}
      <div className="mt-5 max-w-7xl mx-auto pt-4 border-t border-navy-800/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        <span className="text-[11px] font-bold text-slate-400 flex items-center">
          <Clock className="w-3.5 h-3.5 mr-1 text-gold-400" />
          <span>하루 5회 자동 발행 스케줄:</span>
        </span>
        
        <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="px-2.5 py-1 rounded-full bg-navy-900 border border-cyan-500/30 text-cyan-400 font-semibold">
            07:00 MORNING
          </span>
          <span className="px-2.5 py-1 rounded-full bg-navy-900 border border-amber-500/30 text-amber-400 font-semibold">
            11:00 BUSINESS
          </span>
          <span className="px-2.5 py-1 rounded-full bg-navy-900 border border-emerald-500/30 text-emerald-400 font-semibold">
            14:00 LIFE
          </span>
          <span className="px-2.5 py-1 rounded-full bg-navy-900 border border-rose-500/30 text-rose-400 font-semibold">
            18:00 NOW
          </span>
          <span className="px-2.5 py-1 rounded-full bg-navy-900 border border-gold-500/40 text-gold-400 font-bold">
            21:00 MEGAZINE
          </span>
        </div>
      </div>
    </div>
  );
}
