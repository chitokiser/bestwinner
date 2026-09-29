import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WaterproofingSection from '../components/BusinessUnits/WaterproofingSection';
import ContactUs from '../components/ContactUs';
import { 
  Droplets, 
  ArrowRight, 
  Play, 
  Download, 
  ShieldCheck, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight,
  CheckCircle2,
  Award,
  Factory
} from 'lucide-react';

export default function WaterproofingPage({ t }) {
  const isVi = t?.lang === 'vi' || !t?.lang;

  // Hero Banner Images from /public/images/waterproofing/hero/ (1.png ~ 6.png)
  const heroSlides = [
    {
      src: '/images/waterproofing/hero/1.png',
      tag: 'K1 SPECIAL SUPER',
      title: isVi ? 'Chất chống thấm siêu cấp K1 Special — Công nghệ Hàn Quốc' : 'K1 특수 초강력 방수제 — 20년 한국 기술 원료 수입',
      desc: isVi ? 'Giải pháp chống thấm vượt trội với độ co giãn 300%, chịu thời tiết nhiệt đới khắc nghiệt và bảo hành lên tới 10 năm.' : '300% 고탄성 크랙 커버, 고온다습 열대 기후 최적화 & 지속시간 10년 보장 방수 솔루션.'
    },
    {
      src: '/images/waterproofing/hero/2.png',
      tag: '100% KOREAN RAW MATERIALS',
      title: isVi ? 'Nguyên liệu nhập khẩu direct 100% từ Hàn Quốc' : '100% 한국 프리미엄 원료 direct 수입',
      desc: isVi ? 'Chuỗi cung ứng nguyên liệu cao cấp nhập khẩu trực tiếp, đảm bảo chất lượng tiêu chuẩn quốc tế và an toàn thân thiện môi trường.' : '한국 원료 공급망 구축으로 최고의 기술력과 안정된 품질, 친환경 무독성 원료 적용.'
    },
    {
      src: '/images/waterproofing/hero/3.png',
      tag: 'LOCAL FACTORY PRODUCTION',
      title: isVi ? 'Nhà máy sản xuất trực tiếp duy nhất tại Việt Nam' : '베트남 유일 현지 직영 공장 직접 생산',
      desc: isVi ? 'Tối ưu hóa công thức cho khí hậu nóng ẩm Đông Nam Á với chi phí hợp lý và nguồn cung ổn định.' : '동남아 고온다습 기후에 특화된 맞춤형 생산 체계로 최고 품질과 합리적 가격 경쟁력 확보.'
    },
    {
      src: '/images/waterproofing/hero/4.png',
      tag: 'EASY 1-COMPONENT COATING',
      title: isVi ? 'Thi công 1 thành phần (Single-Component) đơn giản' : '1액형 (Single-Component) 누구나 간편 시공',
      desc: isVi ? 'Không cần pha trộn phức tạp, đóng gói 1 thành phần sẵn sàng lăn/sơn trực tiếp lên bề mặt bê tông, mái, tường.' : '별도 혼합 없이 붓이나 롤러 도장으로 Self 방수 작업 가능, 작업 시간 및 인건비 대폭 절감.'
    },
    {
      src: '/images/waterproofing/hero/5.png',
      tag: 'HEAT INSULATION & REFLECTION',
      title: isVi ? 'Tính năng cách nhiệt & Phản xạ nhiệt năng lượng mặt trời' : '여름철 차열 & 태양열 에너지는 반사 (Energy Saving)',
      desc: isVi ? 'Công nghệ màu đặc biệt phản xạ năng lượng mặt trời giúp giảm nhiệt độ bề mặt mái và tiết kiệm điện năng điều hòa.' : '특수 안료 기술로 여름철 태양열을 반사하여 건물 실내 온도 상승 차단 및 냉방 에너지 절감.'
    },
    {
      src: '/images/waterproofing/hero/6.png',
      tag: 'PROVEN TRACK RECORD',
      title: isVi ? 'Hơn 20 năm kiểm chứng & Công trình quy mô lớn' : '20년 검증된 기술력 & 국내외 대형 시공 실적',
      desc: isVi ? 'LG Display, Nhà máy Điện hạt nhân Younggwang, Dream Tech, Vincom City... hàng trăm dự án tin dùng.' : 'LG디스플레이, 영광원자력발전소, OCI, 드림텍, 빈컴시티 등 국내외 공인 대형 현장 준공 실적.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate hero background images every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  return (
    <div className="pt-6">
      {/* Dynamic Full Hero Banner Section */}
      <section className="relative min-h-[70vh] lg:min-h-[80vh] flex flex-col justify-between pt-8 pb-12 overflow-hidden bg-navy-950 border-b border-navy-800">
        
        {/* Background Image Slider (Rotating 1.png ~ 6.png) */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {heroSlides.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentSlide === idx ? 'opacity-70 sm:opacity-60 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-7000 ease-linear`}
            >
              <img 
                src={slide.src} 
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
          {/* Gradients Overlay for crisp readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/80 to-navy-950/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/70"></div>
        </div>

        {/* Ambient Glow accent */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none z-0"></div>

        {/* Hero Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto w-full space-y-6">
          
          {/* Breadcrumb Navigation */}
          <div className="flex items-center space-x-2 text-xs text-slate-300 bg-navy-900/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-navy-700 w-fit max-w-full overflow-x-auto whitespace-nowrap scrollbar-none">
            <Link to="/" className="hover:text-gold-400 shrink-0">Home</Link>
            <span className="shrink-0">/</span>
            <span className="shrink-0">Business Areas</span>
            <span className="shrink-0">/</span>
            <span className="text-cyan-400 font-bold shrink-0">BEST WINNER WATERPROOF VN</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Headlines & Action Buttons */}
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30 whitespace-nowrap">
                  <Droplets className="w-3.5 h-3.5" />
                  <span>BUSINESS UNIT ⑤</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 whitespace-nowrap">
                  <Sparkles className="w-3 h-3 mr-1" />
                  <span>{isVi ? 'Giải pháp Chống thấm Siêu cấp K1 BEST Winner' : 'BEST Winner K1 특수 초강력 방수 솔루션'}</span>
                </span>
              </div>

              <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight break-keep">
                BEST WINNER <span className="text-cyan-400">{isVi ? 'WATERPROOF VN' : 'K1 초강력 방수제'}</span>
              </h1>
              
              <p className="text-xs sm:text-lg text-slate-200 font-medium max-w-2xl leading-relaxed break-keep">
                {isVi 
                  ? 'Chất chống thấm siêu cấp K1 Special — Nguyên liệu nhập khẩu công nghệ Hàn Quốc 20 năm × Sản xuất trực tiếp tại Việt Nam cam kết bảo hành 10 năm.' 
                  : 'K1 특수 초강력 방수제 — 20년 한국 기술 원료 수입 × 베트남 현지 공장 직접 생산 10년 보장 방수 솔루션입니다.'}
              </p>

              {/* Feature Highlights Pill Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1 max-w-xl">
                <div className="bg-navy-900/80 border border-cyan-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span className="whitespace-nowrap">{isVi ? 'Bảo hành 10 năm' : '10년 품질 보장'}</span>
                </div>
                <div className="bg-navy-900/80 border border-gold-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                  <span className="whitespace-nowrap">{isVi ? 'Co giãn 300%' : '300% 고탄성'}</span>
                </div>
                <div className="bg-navy-900/80 border border-emeraldGreen-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <Award className="w-3.5 h-3.5 text-emeraldGreen-400 shrink-0" />
                  <span className="whitespace-nowrap">{isVi ? 'Nguyên liệu Hàn Quốc' : '한국 원료 수입'}</span>
                </div>
                <div className="bg-navy-900/80 border border-purple-500/30 rounded-xl p-2.5 text-[11px] sm:text-xs text-slate-200 flex items-center justify-center space-x-1.5 whitespace-nowrap">
                  <Factory className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                  <span className="whitespace-nowrap">{isVi ? 'Sản xuất tại VN' : '베트남 직영생산'}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap gap-2.5 items-center">
                <a
                  href="/docu/Waterproofing/방수액한글버전(수정)_1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-5 py-3 rounded-xl shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center text-xs sm:text-sm whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>{isVi ? 'Brochure PDF K1 (16 Trang)' : 'K1 방수액 PDF 카탈로그 (16P)'}</span>
                </a>

                <a 
                  href="#promo-video" 
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById('promo-video');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-3 rounded-xl border border-red-500/40 shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap space-x-1.5"
                >
                  <Play className="w-4 h-4 fill-white shrink-0" />
                  <span>{isVi ? 'Xem Video Quảng bá' : '공식 홍보 동영상 보기'}</span>
                </a>

                <Link 
                  to="/business/energy" 
                  className="bg-navy-800 hover:bg-navy-700 text-slate-200 border border-navy-700 font-bold px-5 py-3 rounded-xl text-xs sm:text-sm flex items-center whitespace-nowrap"
                >
                  <span>{isVi ? 'Tiếp: Năng lượng Mặt trời' : '다음: 태양광 에너지'}</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 text-cyan-400 shrink-0" />
                </Link>
              </div>

            </div>

            {/* Right Column: Interactive Hero Slide Card Preview */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden border-2 border-cyan-500/50 shadow-2xl bg-navy-950 group">
                <img
                  src={heroSlides[currentSlide].src}
                  alt={heroSlides[currentSlide].title}
                  className="w-full h-[260px] sm:h-[320px] object-cover transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>

                {/* Slide Caption Box */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-navy-900/90 border border-navy-700 backdrop-blur-md space-y-1">
                  <div className="flex justify-between items-center text-[10px] uppercase tracking-wider font-bold">
                    <span className="text-cyan-400 bg-cyan-500/20 px-2 py-0.5 rounded border border-cyan-500/30">
                      {heroSlides[currentSlide].tag}
                    </span>
                    <span className="text-slate-400 font-mono">
                      SLIDE {currentSlide + 1} / {heroSlides.length}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white">
                    {heroSlides[currentSlide].title}
                  </h4>
                  <p className="text-xs text-slate-300 line-clamp-2">
                    {heroSlides[currentSlide].desc}
                  </p>
                </div>
              </div>

              {/* Slider Prev / Next Arrow Controls */}
              <div className="flex justify-between items-center mt-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrevSlide}
                    aria-label="Previous Slide"
                    className="p-2.5 rounded-xl bg-navy-900/90 border border-navy-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleNextSlide}
                    aria-label="Next Slide"
                    className="p-2.5 rounded-xl bg-navy-900/90 border border-navy-700 hover:border-cyan-400 text-slate-300 hover:text-cyan-400 transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Slide Thumbnail Dots */}
                <div className="flex items-center space-x-1.5">
                  {heroSlides.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        currentSlide === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-navy-700 hover:bg-slate-500'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <WaterproofingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="waterproofing" />
    </div>
  );
}

