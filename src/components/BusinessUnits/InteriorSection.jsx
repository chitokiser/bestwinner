import React, { useState, useEffect } from 'react';
import { 
  Paintbrush, 
  Eye, 
  Layers, 
  Check, 
  Sparkles, 
  ArrowRight, 
  Box,
  Building,
  Briefcase,
  Award,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Download,
  X,
  ZoomIn,
  Play
} from 'lucide-react';

export default function InteriorSection({ t, onOpenConsult }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeStyle, setActiveStyle] = useState('luxury');
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [selectedPdfProject, setSelectedPdfProject] = useState(null);

  const isVi = t?.lang === 'vi' || !t?.lang;

  const interiorHeroImages = [
    { 
      src: '/images/interior/1.png', 
      title: isVi ? 'Thiết kế Nội thất Cao cấp Penthouse & Biệt thự' : 'Luxury Penthouse & Villa Interior', 
      desc: isVi ? 'Không gian nội thất may đo đẳng cấp cho Penthouse & Biệt thự riêng tư' : '프라이빗 펜트하우스 & 빌라 고급 맞춤 인테리어',
      tag: 'LUXURY RESIDENTIAL'
    },
    { 
      src: '/images/interior/2.png', 
      title: isVi ? 'Phòng khách & Lounge Gỗ tự nhiên K-Design' : 'Natural K-Wood & Living Lounge', 
      desc: isVi ? 'Không gian phong cách K-Design kết hợp gỗ tự nhiên và ánh sáng hài hòa' : '원목과 자연 채광이 조화로운 K-디자인 공간',
      tag: 'K-DESIGN LOUNGE'
    },
    { 
      src: '/images/interior/3.png', 
      title: isVi ? 'Lounge Khách sạn 5 sao & Khu Nghỉ dưỡng' : '5-Star Hotel & Resort Lounge', 
      desc: isVi ? 'Thi công hoàn thiện trọn gói tiêu chuẩn khách sạn cao cấp (Dự án Khách sạn Shilla Hà Nội)' : '하노이 신라호텔 시공 검증 최고급 호텔식 턴키 마감',
      tag: 'HOTEL & RESORT'
    },
    { 
      src: '/images/interior/4.png', 
      title: isVi ? 'Căn hộ Suite Cao cấp & Phòng ăn Sang trọng' : 'Executive Custom Suite & Dining', 
      desc: isVi ? 'Thi công không gian chuyên biệt cho Keangnam Landmark 72 & Căn hộ VIP' : '경남 랜드마크 72 & 하이엔드 수트 전용 공간 시공',
      tag: 'EXECUTIVE SUITE'
    },
    { 
      src: '/images/interior/5.png', 
      title: isVi ? 'Văn phòng Thông minh & Thương mại Công nghệ' : 'Smart Office & Commercial Space', 
      desc: isVi ? 'Văn phòng LG Electronics (Hải Phòng) & Không gian thương mại cao cấp' : 'LG전자(하이퐁), 오피스 & 프리미엄 상업 공간',
      tag: 'COMMERCIAL & TECH'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % interiorHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [interiorHeroImages.length]);

  // Real Major Performance Projects extracted & matched from BEST WINNER VN PROFILE.pdf
  const portfolioProjects = [
    {
      id: 1,
      category: 'hotel_public',
      catLabel: isVi ? 'Khách sạn & Công cộng' : 'Hotel & Public Space',
      title: 'Shilla Hotel (Hanoi)',
      subtitle: isVi ? 'Thi công phim dán nội thất & Không gian khách sạn 5 sao Shilla Hà Nội' : '하노이 신라호텔 인테리어 필름 & 5성급 호텔 공간 시공',
      year: '2026.03',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_13.png',
      tag: '5-Star Hotel',
      pdfPage: 13
    },
    {
      id: 2,
      category: 'office_factory',
      catLabel: isVi ? 'Văn phòng & Nhà máy' : 'Office & Factory',
      title: 'I-BRIDGE Office (Landmark 72)',
      subtitle: isVi ? 'Thi công văn phòng thông minh cao cấp tại Tòa tháp Keangnam Landmark 72' : '하노이 경남 랜드마크 72 타워 프라이빗 스마트 오피스 시공',
      year: '2025.12',
      location: 'Landmark 72, Hanoi',
      img: '/images/interior/portfolio/page_14.png',
      tag: 'Executive Office',
      pdfPage: 14
    },
    {
      id: 3,
      category: 'commercial_fnb',
      catLabel: isVi ? 'Thương mại & F&B' : 'Commercial & F&B',
      title: 'Wau Haus Coffee (Vincom Ocean Park 2)',
      subtitle: isVi ? 'Thiết kế gian hàng & Nội thất quán Cafe tại Vincom Mega Mall Ocean Park 2' : 'Vincom Mega Mall Ocean Park 2 카페 인테리어 & 부스 디자인',
      year: '2025.07',
      location: 'Hung Yen',
      img: '/images/interior/portfolio/page_15.png',
      tag: 'Shopping Mall Store',
      pdfPage: 15
    },
    {
      id: 4,
      category: 'commercial_fnb',
      catLabel: isVi ? 'Thương mại & F&B' : 'Commercial & F&B',
      title: 'De Baakji Restaurant (Vincom Ocean Park 2)',
      subtitle: isVi ? 'Thi công nội thất nhà hàng ẩm thực Hàn Quốc sang trọng tại Vincom Mega Mall' : 'Vincom Mega Mall Ocean Park 2 한국형 고급 식당 인테리어',
      year: '2025.05',
      location: 'Hung Yen',
      img: '/images/interior/portfolio/page_17.png',
      tag: 'K-Dining Space',
      pdfPage: 17
    },
    {
      id: 5,
      category: 'office_factory',
      catLabel: isVi ? 'Văn phòng & Nhà máy' : 'Office & Factory',
      title: 'LG Electronics Factory (Hai Phong)',
      subtitle: isVi ? 'Nội thất phòng họp lớn P3 & Tách vách kính âm thanh Nhà máy LG Electronics Hải Phòng' : 'LG전자 하이퐁 공장 P3 대회의실 인테리어 & 음향/유리 벽체 시공',
      year: '2022.03',
      location: 'KCN Trang Due, Hai Phong',
      img: '/images/interior/portfolio/page_49.png',
      tag: 'Global Tech Factory',
      pdfPage: 49
    },
    {
      id: 6,
      category: 'office_factory',
      catLabel: isVi ? 'Văn phòng & Nhà máy' : 'Office & Factory',
      title: 'Dreamtech Factory (Bac Ninh)',
      subtitle: isVi ? 'Cải tạo toàn bộ Sảnh, Lễ tân, Phòng nghỉ & Cafe Nhà máy Dreamtech Bắc Ninh' : '드림텍 박닌 공장 1F 로비, 리셉션, 휴게실 & 카페 전면 리모델링',
      year: '2026.03',
      location: 'KCN Yen Phong, Bac Ninh',
      img: '/images/interior/portfolio/page_12.png',
      tag: 'Lobby & Reception',
      pdfPage: 12
    },
    {
      id: 7,
      category: 'residential',
      catLabel: isVi ? 'Nhà ở Cao cấp' : 'Luxury Residential',
      title: 'Keangnam Landmark 72 Apartment (A1608)',
      subtitle: isVi ? 'Cải tạo nội thất tổng thể căn hộ cao cấp Keangnam Landmark 72 Hà Nội' : '하노이 경남 랜드마크 72 아파트 하이엔드 전면 인테리어 리모델링',
      year: '2024.09',
      location: 'Landmark 72, Hanoi',
      img: '/images/interior/portfolio/page_28.png',
      tag: 'Luxury Apartment',
      pdfPage: 28
    },
    {
      id: 8,
      category: 'beauty_golf',
      catLabel: isVi ? 'Làm đẹp & Thể thao' : 'Beauty & Golf',
      title: 'OJALGONG Golf Zon (Westpoint Hanoi)',
      subtitle: isVi ? 'Thi công trọn gói không gian dịch vụ Golf 3D màn hình Westpoint Hà Nội' : '하노이 웨스트포인트 3D 스크린 골프 서비스 공간 턴키 시공',
      year: '2023.08',
      location: 'Westpoint, Hanoi',
      img: '/images/interior/portfolio/page_37.png',
      tag: 'Sports & Leisure',
      pdfPage: 37
    },
    {
      id: 9,
      category: 'hotel_public',
      catLabel: isVi ? 'Khách sạn & Công cộng' : 'Hotel & Public Space',
      title: 'Woori Bank Branches (Vinh Phuc & Ha Nam)',
      subtitle: isVi ? 'Nội thất không gian tài chính & Quầy VIP Ngân hàng Woori Bank Hà Nội, Vĩnh Phúc, Hà Nam' : '우리은행 하노이, 영푹, 하남 지점 금융 공간 & VIP 창구 인테리어',
      year: '2019-2020',
      location: 'Vinh Phuc & Ha Nam',
      img: '/images/interior/portfolio/page_60.png',
      tag: 'Banking & Financial',
      pdfPage: 60
    },
    {
      id: 10,
      category: 'hotel_public',
      catLabel: isVi ? 'Khách sạn & Công cộng' : 'Hotel & Public Space',
      title: 'Shinhan Bank & Korean Embassy (Hanoi)',
      subtitle: isVi ? 'Thi công Đại sứ quán Hàn Quốc tại Việt Nam & Chi nhánh Shinhan Bank Landmark 72' : '주베트남 대한민국 대사관 & 신한은행 랜드마크 지점 시공',
      year: '2018-2019',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_63.png',
      tag: 'Public & Embassy',
      pdfPage: 63
    },
    {
      id: 11,
      category: 'office_factory',
      catLabel: isVi ? 'Văn phòng & Nhà máy' : 'Office & Factory',
      title: 'KOICA Company Office (Hanoi)',
      subtitle: isVi ? 'Vách ngăn kính & Nội thất Văn phòng KOICA (Cơ quan Hợp tác Quốc tế Hàn Quốc) Hà Nội' : '한국국제협력단(KOICA) 하노이 오피스 유리 파티션 & 인테리어',
      year: '2024.06',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_30.png',
      tag: 'Public & NGO Office',
      pdfPage: 30
    },
    {
      id: 12,
      category: 'commercial_fnb',
      catLabel: isVi ? 'Thương mại & F&B' : 'Commercial & F&B',
      title: 'HOJI TEA HOUSE (Tràng Tiền Plaza)',
      subtitle: isVi ? 'Thi công không gian thương mại Quán trà cao cấp Hoji Tea House Tràng Tiền Plaza' : '하노이 짱띠엔 프라자 프리미엄 티하우스 상업 공간 시공',
      year: '2024.10',
      location: 'Trang Tien Plaza, Hanoi',
      img: '/images/interior/portfolio/page_27.png',
      tag: 'Commercial & Cafe',
      pdfPage: 27
    },
    {
      id: 13,
      category: 'beauty_golf',
      catLabel: isVi ? 'Làm đẹp & Thể thao' : 'Beauty & Golf',
      title: 'Pilates Studio (Mydinh Hanoi)',
      subtitle: isVi ? 'Nội thất trọn gói Studio Pilates chuẩn Hàn Quốc tại Mỹ Đình Hà Nội' : '하노이 미딩 한국형 기구 필라테스 스튜디오 턴키 인테리어',
      year: '2025.04',
      location: 'My Dinh, Hanoi',
      img: '/images/interior/portfolio/page_19.png',
      tag: 'Beauty & Wellness',
      pdfPage: 19
    },
    {
      id: 14,
      category: 'beauty_golf',
      catLabel: isVi ? 'Làm đẹp & Thể thao' : 'Beauty & Golf',
      title: 'MEDIVISOR Korean Beauty Salon & Spa',
      subtitle: isVi ? 'Thi công Salon làm đẹp & The Classe Spa cao cấp Medivisor Hà Nội' : '하노이 메디바이저 프리미엄 뷰티 살롱 & 더클라세 스파 시공',
      year: '2023.02',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_45.png',
      tag: 'K-Beauty Salon',
      pdfPage: 45
    },
    {
      id: 15,
      category: 'office_factory',
      catLabel: isVi ? 'Văn phòng & Nhà máy' : 'Office & Factory',
      title: 'Hyundai Kefico Factory (Hai Duong)',
      subtitle: isVi ? 'Thi công hoàn thiện nội thất & Phòng họp lớn Nhà máy Hyundai Kefico Việt Nam (Hải Dương)' : '현대케피코 베트남 공장 대회의실 & 인테리어 마감 시공',
      year: '2019.02',
      location: 'Hai Duong',
      img: '/images/interior/portfolio/page_62.png',
      tag: 'Global Tech Factory',
      pdfPage: 62
    },
    {
      id: 16,
      category: 'commercial_fnb',
      catLabel: isVi ? 'Thương mại & F&B' : 'Commercial & F&B',
      title: 'Artisee Cafe (Hanoi)',
      subtitle: isVi ? 'Nội thất tiệm bánh & Quán Cafe cao cấp Artisee Hà Nội' : '하노이 아티제(Artisee) 프리미엄 베이커리 카페 인테리어',
      year: '2021.07',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_52.png',
      tag: 'Commercial & Cafe',
      pdfPage: 52
    },
    {
      id: 17,
      category: 'commercial_fnb',
      catLabel: isVi ? 'Thương mại & F&B' : 'Commercial & F&B',
      title: 'Baekje Galbi Restaurant (Hanoi)',
      subtitle: isVi ? 'Nội thất phòng ăn riêng sang trọng phong cách Hàn Quốc - Nhà hàng Baekje Galbi' : '하노이 백제갈비 대표 한국형 고급 프라이빗 룸 인테리어',
      year: '2020.06',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_57.png',
      tag: 'K-Dining Space',
      pdfPage: 57
    },
    {
      id: 18,
      category: 'hotel_public',
      catLabel: isVi ? 'Khách sạn & Công cộng' : 'Hotel & Public Space',
      title: 'Korean Visa Application Center (Hanoi)',
      subtitle: isVi ? 'Không gian văn phòng & Quầy tiếp đón Trung tâm Dịch vụ Visa Hàn Quốc tại Hà Nội' : '하노이 대한민국 비자신청센터 민원 창구 & 사무 공간',
      year: '2019.04',
      location: 'Hanoi',
      img: '/images/interior/portfolio/page_61.png',
      tag: 'Public & Agency',
      pdfPage: 61
    }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(p => p.category === activeCategory);

  const styleOptions = [
    {
      id: 'luxury',
      name: isVi ? 'Biệt thự Sang trọng & Đá Cẩm thạch' : 'Luxury Penthouse & Marble Finish',
      desc: isVi ? 'Đá cẩm thạch cao cấp, điểm nhấn Vàng Champagne, thiết kế đồng bộ với Cabin Thang máy' : '고급 대리석, Champagne Gold 포인트, 승강기 파사드 일체형 커스텀 디자인',
      color: 'bg-gradient-to-r from-amber-600 to-gold-500',
      bgImg: '/images/interior/1.png'
    },
    {
      id: 'modern',
      name: isVi ? 'Gỗ Tự nhiên Hiện đại & Phòng khách' : 'Modern Natural Wood & Living Lounge',
      desc: isVi ? 'Ánh sáng tự nhiên kết hợp gỗ cao cấp, mang lại không gian ấm cúng cho gia đình' : '자연 채광과 프리미엄 원목 마감, 아늑한 가족적 거실 공간 인테리어',
      color: 'bg-gradient-to-r from-slate-700 to-slate-500',
      bgImg: '/images/interior/2.png'
    },
    {
      id: 'wood',
      name: isVi ? 'Gỗ Phong cách K-Wood & Lounge Khách sạn' : 'Natural K-Wood & Hotel Lounge',
      desc: isVi ? 'Cảm hứng từ Khách sạn Shilla / Artisee Cafe với chất liệu gỗ cao cấp và gu thẩm mỹ Hàn Quốc' : 'Shilla Hotel / Artisee Cafe 감성의 최고급 원목 질감과 K-디자인 감성',
      color: 'bg-gradient-to-r from-amber-800 to-yellow-700',
      bgImg: '/images/interior/3.png'
    },
    {
      id: 'executive',
      name: isVi ? 'Phòng Executive Suite & Căn hộ VIP' : 'Executive Suite & Private Dining',
      desc: isVi ? 'Thi công cải tạo nội thất cao cấp chuyên biệt cho Keangnam Landmark 72 & VIP' : '경남 랜드마크 72 & VIP 맞춤 인테리어 리모델링',
      color: 'bg-gradient-to-r from-emerald-800 to-teal-600',
      bgImg: '/images/interior/4.png'
    },
    {
      id: 'commercial',
      name: isVi ? 'Văn phòng Thông minh & Thương mại Tech' : 'Smart Office & Tech Commercial',
      desc: isVi ? 'Thiết kế không gian làm việc & thương mại cho Văn phòng LG Electronics, Landmark 72 I-BRIDGE' : 'LG전자 오피스, 랜드마크 72 I-BRIDGE 상업/업무 공간 설계',
      color: 'bg-gradient-to-r from-blue-800 to-indigo-600',
      bgImg: '/images/interior/5.png'
    }
  ];

  const currentStyleData = styleOptions.find(s => s.id === activeStyle);

  return (
    <section id="interior" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Interior Hero Image Slider Showcase (1.png ~ 5.png) */}
        <div className="relative min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden mb-16 border border-gold-500/40 shadow-2xl flex items-center bg-navy-900">
          {/* Rotating Background Images */}
          {interiorHeroImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentHeroSlide === idx ? 'opacity-80 sm:opacity-70 scale-105' : 'opacity-0 scale-100'
              } transition-transform duration-7000 ease-linear`}
            >
              <img 
                src={slide.src} 
                alt={slide.title}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}

          {/* Gradient Overlay for Readable Text */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/75 to-navy-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>

          {/* Hero Banner Text Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gold-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{interiorHeroImages[currentHeroSlide].tag} — BEST WINNER INTERIOR VN</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
              {interiorHeroImages[currentHeroSlide].title}
            </h1>

            <p className="text-sm sm:text-xl font-bold text-gold-300 leading-snug break-keep">
              {interiorHeroImages[currentHeroSlide].desc}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal break-keep">
              {isVi 
                ? 'Thiết kế nội thất không gian may đo trọn gói chuẩn Hàn Quốc — Chứng nhận năng lực qua loạt dự án Khách sạn Shilla (Hà Nội), LG Electronics (Hải Phòng), Woori Bank, Shinhan Bank & Keangnam Landmark 72.' 
                : '신라호텔(하노이), LG전자(하이퐁), 우리은행, 신한은행, 랜드마크 72 I-BRIDGE 준공 실적으로 증명된 한국형 기술력 & 턴키 맞춤 공간 인테리어.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={() => onOpenConsult('interior')}
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <span>{isVi ? 'Tư vấn 3D Nội thất Miễn phí' : '맞춤 3D 인테리어 무료 상담'}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Slide Controls & Indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
            <div className="flex space-x-1.5">
              {interiorHeroImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentHeroSlide(idx)}
                  aria-label={`Slide ${idx + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentHeroSlide === idx ? 'w-8 bg-gold-400' : 'w-2 bg-slate-500/50 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex space-x-1 ml-2">
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + interiorHeroImages.length) % interiorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title={isVi ? "Slide trước" : "이전 슬라이드"}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % interiorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title={isVi ? "Slide tiếp" : "다음 슬라이드"}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Unit Header Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
              <Paintbrush className="w-3.5 h-3.5" />
              <span>BUSINESS UNIT ① — BEST WINNER VN LIMITED COMPANY</span>
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              BEST winner interior Vn
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {isVi 
                ? 'Nội thất may đo & Thi công trọn gói uy tín hàng đầu Việt Nam được kiểm chứng qua các dự án Khách sạn Shilla (Hà Nội), LG Electronics (Hải Phòng), Woori Bank, Shinhan Bank & Keangnam Landmark 72.' 
                : '신라호텔(하노이), LG전자(하이퐁), 우리은행, 신한은행, 랜드마크 72 I-BRIDGE 오피스 시공 실적으로 검증된 베트남 최정상 맞춤 인테리어 & 턴키 시공 리더.'}
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex flex-wrap gap-3">
            <a
              href="#promo-video"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById('promo-video');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-3.5 rounded-xl border border-red-500/40 text-xs sm:text-sm flex items-center space-x-2 transition-all shadow-lg"
            >
              <Play className="w-4 h-4 fill-white" />
              <span>{isVi ? 'Xem Video Quảng bá' : '공식 홍보 동영상 시청'}</span>
            </a>
            <button
              onClick={() => onOpenConsult('interior')}
              className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all flex items-center text-xs sm:text-sm"
            >
              <span>{isVi ? 'Đăng ký Tư vấn Nội thất 3D' : '맞춤 3D 인테리어 상담 신청'}</span>
              <ArrowRight className="w-4 h-4 ml-2 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Official YouTube Shorts Promotional Video Showcase Section */}
        <div id="promo-video" className="glass-card-chrome p-6 sm:p-10 rounded-3xl border border-gold-500/40 mb-16 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-red-500/40 mb-2">
                <Play className="w-3.5 h-3.5 fill-red-400" />
                <span>OFFICIAL SHORTS VIDEO</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isVi ? 'Video Ngắn Thi công Nội thất BEST WINNER INTERIOR VN' : 'BEST WINNER INTERIOR VN 인테리어 시공 숏폼 영상'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isVi ? 'Video thực tế thi công hoàn thiện không gian nội thất Nhà ở, Biệt thự, Penthouse & Thương mại cao cấp' : '주택, 빌라, 펜트하우스 & 고급 상업 공간 맞춤형 공간 디자인 및 현장 시공 숏폼 동영상'}
              </p>
            </div>

            <a
              href="https://www.youtube.com/shorts/H0LrB_Qopls"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition-all shrink-0 w-fit shadow-md"
            >
              <span>{isVi ? 'Xem trên ứng dụng YouTube Shorts' : 'YouTube Shorts 앱에서 보기'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded YouTube Shorts Player (Vertical 9:16 optimized format) */}
          <div className="flex justify-center items-center">
            <div className="relative w-full max-w-sm aspect-[9/16] rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-black">
              <iframe
                src="https://www.youtube.com/embed/H0LrB_Qopls?autoplay=0&rel=0"
                title={isVi ? 'Video Ngắn Thi công Nội thất BEST WINNER INTERIOR VN' : 'BEST WINNER INTERIOR VN 인테리어 시공 숏폼 동영상'}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Company Identity & Stats Bar (Extracted from PDF Profile) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-card-chrome border border-chrome-300/40 mb-16">
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black gold-gradient-text">2023.02</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">{isVi ? 'Ngày thành lập (MSDN: 0110245813)' : '설립일 (법인번호: 0110245813)'}</p>
          </div>
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black chrome-gradient-text">2 + 15+</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">{isVi ? 'Chuyên gia Hàn Quốc & Kỹ sư Việt Nam' : '한국인 마스터 & 현지 전문 엔지니어'}</p>
          </div>
          <div className="text-center p-3 border-r border-navy-800 last:border-0">
            <p className="text-2xl sm:text-3xl font-black text-gold-400">50+</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">{isVi ? 'Dự án Doanh nghiệp Toàn cầu' : '글로벌 기업 준공 실적'}</p>
          </div>
          <div className="text-center p-3">
            <p className="text-2xl sm:text-3xl font-black text-emeraldGreen-500">100%</p>
            <p className="text-xs text-chrome-300 mt-1 font-semibold">{isVi ? 'Quản lý Chất lượng & Thi công Trọn gói' : '품질 관리 & 턴키 시공 직영'}</p>
          </div>
        </div>

        {/* 1. Interactive 3D Style Preview Showcase */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-gold-500/30">
              3D VIRTUAL PREVIEW
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isVi ? 'Phối cảnh 3D Không gian Virtual & Thư viện Mẫu Vật liệu' : '3D 가상 공간 프리뷰 & 자재 디자인 감성'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {isVi ? 'Thư viện vật liệu trang trí K-Design được tối ưu hóa cho kiến trúc nhà ở và thương mại tại Việt Nam' : '베트남 주택 및 상업 공간 특성을 고려한 K-디자인 감성 마감재 라이브러리'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image Preview Canvas */}
            <div className="lg:col-span-7">
              <div className="relative rounded-3xl overflow-hidden glass-card border border-gold-500/40 group shadow-2xl">
                <img 
                  src={currentStyleData.bgImg} 
                  alt={currentStyleData.name} 
                  className="w-full h-[380px] sm:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent"></div>
                
                <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-navy-900/90 backdrop-blur-md px-4 py-2 rounded-full border border-gold-500/40 flex items-center space-x-2">
                  <Box className="w-4 h-4 text-gold-400" />
                  <span className="text-xs font-extrabold text-slate-100">K-Design Virtual 3D Rendering</span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 space-y-4">
                  <div>
                    <h4 className="text-xl font-extrabold text-white">{currentStyleData.name}</h4>
                    <p className="text-xs text-slate-300 mt-1">{currentStyleData.desc}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {styleOptions.map((style) => (
                      <button
                        key={style.id}
                        onClick={() => setActiveStyle(style.id)}
                        className={`text-xs font-bold px-4 py-2.5 rounded-xl transition-all border ${
                          activeStyle === style.id
                            ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-md'
                            : 'bg-navy-900/90 text-slate-300 border-navy-700 hover:border-gold-500/50'
                        }`}
                      >
                        {style.name.split(' ')[0]} {style.name.split(' ')[1]}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Features & Integration Spec */}
            <div className="lg:col-span-5 space-y-6">
              <div className="glass-card-gold p-6 rounded-2xl border border-gold-500/40">
                <h4 className="text-lg font-bold text-gold-400 flex items-center mb-2">
                  <Sparkles className="w-5 h-5 mr-2" />
                  {isVi ? 'Đồng bộ Thiết kế Cabin Thang máy & Không gian' : '승강기 Cabin & 공간 디자인 일체화'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {isVi ? 'Không chỉ là nội thất thông thường, chúng tôi cung cấp giải pháp thiết kế không gian trọn gói hài hòa hoàn hảo với mặt tiền Thang máy (Cabin) và hệ thống PCCC/Chống thấm.' : '단순 인테리어를 넘어 승강기(Cabin) 파사드 및 소방/방수 설비와 완벽하게 조화를 이루는 일체형 턴키 공간 설계를 제공합니다.'}
                </p>
              </div>

              <div className="space-y-3">
                {[
                  isVi ? 'Thi công Phim dán nội thất Hàn Quốc (Vật liệu kiểm định LG/Hyundai KEFICO)' : '한국산 인테리어 필름 (LG/현대 KEFICO 검증 자재) 시공',
                  isVi ? 'Vách kính cường lực & Hệ thống cách âm (Áp dụng tại KOICA / Nhà máy LG)' : '강화유리 파티션 & 방음 폼 시스템 (KOICA / LG 공장 적용)',
                  isVi ? 'Thiết kế trọn gói cho Nhà ở, Biệt thự, Văn phòng, Nhà hàng F&B, Spa & Golf' : '주택, 빌라, 오피스, F&B 식당, 뷰티/골프장 턴키 설계'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-navy-900/80 border border-navy-800">
                    <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 stroke-[3]" />
                    </div>
                    <span className="text-xs sm:text-sm text-slate-200 font-medium">{feat}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onOpenConsult('interior')}
                className="w-full bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs py-3.5 rounded-xl border border-navy-700 hover:border-gold-500/40 transition-colors flex items-center justify-center space-x-2"
              >
                <Layers className="w-4 h-4 text-gold-400" />
                <span>{isVi ? 'Đăng ký Mẫu Vật liệu Miễn phí & Catalog Thiết kế 3D' : '무료 자재 샘플 & 3D 디자인 카탈로그 신청'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Major Performance Portfolio Grid (Extracted from Profile PDF) */}
        <div className="mt-16 pt-16 border-t border-navy-800">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-gold-500/30 mb-2 inline-block">
                PROJECT PORTFOLIO
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                {isVi ? 'Dự án Hoàn thành Tiêu biểu BEST WINNER INTERIOR VN' : 'BEST winner interior 주요 준공 실적 (Main Performance)'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isVi ? 'Các dự án đã hoàn thành: Shilla Hotel, Dreamtech, LG Electronics, Woori Bank, Shinhan Bank, Keangnam Landmark 72' : '신라호텔, 드림텍, LG전자, 우리은행, 신한은행, 경남 랜드마크 72 준공 프로젝트'}
              </p>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
              {[
                { id: 'all', label: isVi ? 'Tất cả (All)' : '전체 (All)' },
                { id: 'hotel_public', label: isVi ? 'Khách sạn & Công cộng' : '호텔 & 공공' },
                { id: 'office_factory', label: isVi ? 'Văn phòng & Nhà máy' : '오피스 & 공장' },
                { id: 'commercial_fnb', label: isVi ? 'Thương mại & F&B' : '상업 & F&B' },
                { id: 'beauty_golf', label: isVi ? 'Làm đẹp & Thể thao' : '뷰티 & 골프' },
                { id: 'residential', label: isVi ? 'Nhà ở Cao cấp' : '고급 주거' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`text-xs font-bold px-3.5 py-2 rounded-xl transition-all border ${
                    activeCategory === tab.id
                      ? 'bg-gold-500 text-navy-950 border-gold-400 shadow-md'
                      : 'bg-navy-900 text-slate-300 border-navy-800 hover:border-gold-500/40'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Cards Grid (Interactive PDF Image Match) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div 
                key={project.id}
                className="glass-card rounded-2xl overflow-hidden border border-navy-800 hover:border-gold-500/50 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between shadow-xl cursor-pointer"
                onClick={() => setSelectedPdfProject(project)}
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-navy-950">
                    <img 
                      src={project.img} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-black/20"></div>
                    
                    <div className="absolute top-3 left-3 flex items-center space-x-2">
                      <span className="text-[10px] font-bold bg-navy-950/90 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/40 shadow-sm backdrop-blur-md">
                        {project.tag}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3 text-[10px] font-mono font-bold bg-gold-500 text-navy-950 px-2 py-0.5 rounded shadow">
                      PDF Page {project.pdfPage}
                    </div>

                    <div className="absolute inset-0 bg-gold-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-navy-950/90 text-gold-300 text-xs font-bold px-3 py-1.5 rounded-full border border-gold-500/50 flex items-center space-x-1.5 shadow-lg backdrop-blur-md">
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>{isVi ? 'Phóng to Bản gốc Hồ sơ PDF' : 'PDF 원본 실적 돋보기'}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-extrabold text-white group-hover:text-gold-300 transition-colors">
                        {project.title}
                      </h4>
                      <span className="text-[11px] font-mono text-gold-400/80 font-bold">{project.year}</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {project.subtitle}
                    </p>
                    <p className="text-[11px] text-chrome-400 font-mono">
                      📍 {project.location}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 flex gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedPdfProject(project);
                    }}
                    className="flex-1 bg-navy-900 hover:bg-navy-800 text-gold-300 font-bold text-xs py-2.5 rounded-xl border border-navy-700 hover:border-gold-500/40 transition-colors flex justify-center items-center space-x-1"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>{isVi ? 'Xem bản gốc PDF' : '실적 원본 확대'}</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenConsult('interior');
                    }}
                    className="flex-1 bg-gold-500 hover:bg-gold-400 text-navy-950 font-bold text-xs py-2.5 rounded-xl transition-colors flex justify-center items-center"
                  >
                    <span>{isVi ? 'Báo giá →' : '견적 문의 →'}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* PDF Profile Download Link Bar */}
          <div className="mt-10 p-6 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-sm font-extrabold text-white flex items-center justify-center sm:justify-start">
                <Layers className="w-4 h-4 text-gold-400 mr-2" />
                {isVi ? 'TẢI HỒ SƠ NĂNG LỰC TRỌN BỘ PDF (BEST WINNER VN PROFILE PDF)' : 'BEST WINNER VN INTERIOR FULL PROFILE PDF (전체 브로슈어)'}
              </h4>
              <p className="text-xs text-slate-300">
                {isVi ? 'Xem toàn bộ tài liệu PDF 69 trang gồm danh mục dự án đã hoàn thành và thông số kỹ thuật vật liệu mới nhất.' : '69페이지 상당의 최신 준공 실적 및 자재 스펙 카탈로그 원본 PDF 문서를 확인하실 수 있습니다.'}
              </p>
            </div>
            <a
              href="/docu/Interior/BEST WINNER VN PROFILE.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold text-xs px-5 py-3 rounded-xl transition-all shadow-md flex items-center space-x-2 whitespace-nowrap"
            >
              <Download className="w-4 h-4" />
              <span>{isVi ? 'Mở File PDF Năng lực (Tải về)' : '프로필 PDF 원본 열기 (Download)'}</span>
            </a>
          </div>
        </div>

        {/* 3. Company Organization & System Pipeline (Extracted from Profile PDF) */}
        <div className="mt-20 glass-card-chrome rounded-3xl p-8 sm:p-10 border border-chrome-300/40">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold text-chrome-300 uppercase tracking-widest bg-navy-900 px-3 py-1 rounded-full border border-chrome-400/30">
              ORGANIZATION & QUALITY CONTROL
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              {isVi ? 'Sơ đồ Tổ chức & Quy trình Kiểm soát Chất lượng Trực tiếp' : 'BEST WINNER VN 조직도 & 직영 품질 관리 파이프라인'}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              {isVi ? 'Hệ thống liên kết chặt chẽ giữa Ban Giám đốc, HQ Thiết kế, Ban Quản lý Thi công & Đội Kiểm soát Chất lượng' : '본사 경영본부, 디자인 HQ, 시공 본부, 품질 관리팀의 유기적 턴키 체계'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center mx-auto">
                <Building className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">{isVi ? 'Ban Executive & HQ Thiết kế' : '경영 & 디자인 HQ'}</h5>
              <p className="text-[11px] text-slate-400">{isVi ? 'Đội ngũ Design 1 & 2 (Gu thẩm mỹ K-Design & Bản vẽ 3D/CAD)' : 'Design Team 1 & 2 (K-Design 감성 & CAD/3D 랜더링)'}</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mx-auto">
                <Briefcase className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">{isVi ? 'Ban Quản lý Thi công 1 & 2' : '시공 1 & 2 본부'}</h5>
              <p className="text-[11px] text-slate-400">{isVi ? 'Giám sát trực tiếp bởi Chuyên gia Hàn Quốc & Đội kỹ sư Việt Nam' : '한국인 마스터 감독 & 베트남 현지 전문 엔지니어 직영'}</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center mx-auto">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">{isVi ? 'Đội Vật tư & Chất lượng' : '자재 & 품질관리팀'}</h5>
              <p className="text-[11px] text-slate-400">{isVi ? 'Cung ứng vật liệu tinh xảo Hàn Quốc, phim dán chuẩn & chống thấm K1' : '한국 정밀 자재, 검정 인테리어 필름 & K1 방수 수급'}</p>
            </div>

            <div className="p-5 rounded-2xl bg-navy-900/90 border border-navy-800 space-y-2">
              <div className="w-10 h-10 rounded-xl bg-chrome-400/20 text-chrome-200 flex items-center justify-center mx-auto">
                <Award className="w-5 h-5" />
              </div>
              <h5 className="text-sm font-extrabold text-white">{isVi ? 'Hỗ trợ Kỹ thuật & Bảo hành' : '기술지원 & A/S'}</h5>
              <p className="text-[11px] text-slate-400">{isVi ? 'Quy trình kiểm tra định kỳ sau hoàn thiện & Bảo trì khẩn cấp 24/7' : '시공 완료 후 정기점검 및 24/7 긴급 유지보수 파이프라인'}</p>
            </div>
          </div>
        </div>

      </div>

      {/* High-Resolution PDF Portfolio Lightbox Modal */}
      {selectedPdfProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedPdfProject(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-navy-900 rounded-3xl border border-gold-500/50 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="p-4 sm:p-6 bg-navy-950 border-b border-navy-800 flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded-full border border-gold-500/30">
                    PDF Page {selectedPdfProject.pdfPage}
                  </span>
                  <span className="text-xs text-slate-400 font-mono">📍 {selectedPdfProject.location}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold text-white mt-1">
                  {selectedPdfProject.title}
                </h3>
                <p className="text-xs text-slate-300">
                  {selectedPdfProject.subtitle} ({selectedPdfProject.year})
                </p>
              </div>

              <button
                onClick={() => setSelectedPdfProject(null)}
                aria-label="Close modal"
                className="p-2.5 rounded-full bg-navy-900 text-slate-400 hover:text-white hover:bg-navy-800 border border-navy-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image View */}
            <div className="p-4 overflow-y-auto flex-1 flex justify-center items-center bg-black/40">
              <img 
                src={selectedPdfProject.img} 
                alt={selectedPdfProject.title}
                className="max-w-full max-h-[65vh] object-contain rounded-xl shadow-2xl border border-navy-800"
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-6 bg-navy-950 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-slate-400">
                {isVi ? '📄 Trang chụp từ File Hồ sơ Năng lực gốc BEST WINNER VN PROFILE.pdf' : '📄 BEST WINNER VN PROFILE.pdf 원본 브로슈어 수록 캡처 페이지'}
              </p>
              <div className="flex space-x-3 w-full sm:w-auto">
                <a
                  href="/docu/Interior/BEST WINNER VN PROFILE.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold text-xs px-4 py-2.5 rounded-xl border border-navy-700 transition-colors flex items-center justify-center space-x-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Mở Toàn bộ PDF' : 'PDF 전체 열기'}</span>
                </a>
                <button
                  onClick={() => {
                    const bu = 'interior';
                    setSelectedPdfProject(null);
                    onOpenConsult(bu);
                  }}
                  className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold text-xs px-5 py-2.5 rounded-xl transition-colors flex items-center justify-center space-x-1.5"
                >
                  <span>{isVi ? 'Yêu cầu Báo giá Loại tương tự →' : '동일 타입 견적 상담 신청 →'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
