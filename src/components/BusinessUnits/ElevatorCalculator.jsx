import React, { useState } from 'react';
import { 
  Calculator, 
  Check, 
  FileText, 
  Calendar, 
  ShieldCheck, 
  Building, 
  Sliders, 
  Sparkles,
  Printer,
  ChevronRight,
  PhoneCall,
  User,
  MapPin,
  X,
  Download,
  Building2,
  CheckCircle2,
  Tv,
  Wifi,
  Fan,
  Video,
  Lock,
  Smartphone,
  Music,
  Maximize2,
  Layers,
  ChevronDown,
  Info
} from 'lucide-react';

export default function ElevatorCalculator({ t, isModalOpen, setIsModalOpen }) {
  const [floors, setFloors] = useState(4); // 3 ~ 12 stops
  const [capacity, setCapacity] = useState('350'); // 350, 450, 630, 1000
  const [cabinStyle, setCabinStyle] = useState('luxury_gold'); // stainless, luxury_gold, glass_panoramic
  const [doorType, setDoorType] = useState('center_open'); // center_open, side_open, automatic_glass

  // Selected Package Tier
  const [selectedPackage, setSelectedPackage] = useState('smart'); // basic, comfort, smart, media, premium, best_flagship

  // Selectable Custom Individual Options (category states)
  const [selectedOptions, setSelectedOptions] = useState({
    // 1. 안전 옵션
    cctv: true,
    intercom: true,
    ard: true,
    emergency_light: true,
    overspeed_sensor: true,
    door_safety_sensor: true,
    fire_alarm: false,
    earthquake_alarm: false,
    ups_power: false,
    remote_fault_alert: true,

    // 2. 냉방·공기 관련
    ac_unit: true,
    ceiling_blower: true,
    air_purifier: false,
    deodorizer: false,
    vent_fan: true,
    temp_humidity_sensor: false,

    // 3. 디스플레이·미디어 옵션
    lcd_display: true,
    touch_screen: false,
    info_weather_time: true,
    qr_display: true,
    wifi: true,
    bt_speaker: true,
    glass_led_video: false,

    // 4. 유리·인테리어 옵션
    tempered_glass: false,
    tint_glass: false,
    smart_glass: false,
    mirror_stainless: true,
    gold_bronze_finish: true,
    wood_panel: false,
    marble_tile: true,
    indirect_rgb_light: true,
    starlight_ceiling: false,

    // 5. 스마트홈 연동
    smartphone_app: true,
    nfc_rfid_card: true,
    face_fingerprint_id: false,
    smarthome_interlock: true,

    // 6. 고급 편의 옵션
    auto_light_voice: true,
    multilingual_guide: true,
    music_bluetooth: true,
    usb_wireless_charge: false,
    aroma_diffuser: false,
    folding_chair_child_btn: false
  });

  const [activeCategoryTab, setActiveCategoryTab] = useState('safety'); // 'safety' | 'cooling' | 'media' | 'interior' | 'smarthome' | 'convenience'
  const [bookingForm, setBookingForm] = useState({ name: '', phone: '', address: '', note: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showQuotePreview, setShowQuotePreview] = useState(false);

  // 6 Tier Packages Definition
  const packages = [
    {
      id: 'basic',
      name: 'BASIC',
      badge: '기본형',
      priceVnd: 0,
      spec: '기본 안전장치 + LED 조명',
      desc: '표준 안전 센서 및 에너지 절감형 LED 시스템'
    },
    {
      id: 'comfort',
      name: 'COMFORT',
      badge: '쾌적형',
      priceVnd: 25000000,
      spec: 'BASIC + 전용 에어컨 + 환기 시스템',
      desc: '동남아 고온 다습 기후 대응 엘리베이터 전용 에어컨 및 공기 순환'
    },
    {
      id: 'smart',
      name: 'SMART',
      badge: '인기 추천',
      priceVnd: 55000000,
      spec: 'COMFORT + 내장 CCTV + 스마트폰 연동',
      desc: '보안 CCTV 및 스마트폰 원격 호출/상태 관제 연동'
    },
    {
      id: 'media',
      name: 'MEDIA',
      badge: '미디어형',
      priceVnd: 85000000,
      spec: 'SMART + LCD 10인치 + Wi-Fi',
      desc: '디지털 디스플레이, 날씨/시간 정보 및 무선 Wi-Fi 구축'
    },
    {
      id: 'premium',
      name: 'PREMIUM',
      badge: '럭셔리형',
      priceVnd: 135000000,
      spec: 'MEDIA + 고급 유리/스마트글라스 + 대리석',
      desc: '골드/브론즈 인테리어, 별빛 천장 및 천연 대리석 마감'
    },
    {
      id: 'best_flagship',
      name: 'BEST FLAGSHIP',
      badge: '최고급 플래그십',
      priceVnd: 195000000,
      spec: 'PREMIUM + AI 스마트 관제 + 커스텀 인테리어',
      desc: '플래그십 럭셔리 마감, 스마트 센서 패키지 및 24/7 전용 원격 관제'
    }
  ];

  // Individual Options Definition with Costs
  const optionCatalog = {
    safety: {
      title: "1. 안전 옵션 (Safety Options)",
      items: [
        { id: 'cctv', name: '승강기 내부 HD CCTV', priceVnd: 12000000, defaultIncluded: true },
        { id: 'intercom', name: '비상통화 장치 / 24h 인터폰', priceVnd: 0, defaultIncluded: true },
        { id: 'ard', name: '정전 시 자동 층 이송 (ARD)', priceVnd: 0, defaultIncluded: true },
        { id: 'emergency_light', name: 'LED 비상조명 장치', priceVnd: 0, defaultIncluded: true },
        { id: 'overspeed_sensor', name: '과속방지 & 문 끼임 방지 센서', priceVnd: 0, defaultIncluded: true },
        { id: 'fire_alarm', name: '화재 연동 자동 복귀 시스템', priceVnd: 15000000 },
        { id: 'earthquake_alarm', name: '지진 감지 연동 제어', priceVnd: 15000000 },
        { id: 'ups_power', name: 'UPS/비상전원 백업 장치', priceVnd: 18000000 },
        { id: 'remote_fault_alert', name: '원격 고장 감지 & 자동 관제 알림', priceVnd: 10000000 }
      ]
    },
    cooling: {
      title: "2. 냉방·공기 관련 (Cooling & Air System)",
      items: [
        { id: 'ac_unit', name: '엘리베이터 전용 독립 에어컨', priceVnd: 25000000 },
        { id: 'ceiling_blower', name: '천장형 송풍/강풍 시스템', priceVnd: 8000000 },
        { id: 'air_purifier', name: 'HEPA 공기청정기 시스템', priceVnd: 12000000 },
        { id: 'deodorizer', name: '음이온 탈취 & 살균 모듈', priceVnd: 8000000 },
        { id: 'vent_fan', name: '고성능 환기팬', priceVnd: 5000000 },
        { id: 'temp_humidity_sensor', name: '실시간 온도·습도 디스플레이 센서', priceVnd: 6000000 }
      ]
    },
    media: {
      title: "3. 디스플레이·미디어 (Elevator Digital Display & Media)",
      items: [
        { id: 'lcd_display', name: 'LCD 스마트 안내 디스플레이 (10~15인치)', priceVnd: 28000000 },
        { id: 'touch_screen', name: '터치스크린 층 선택 화면', priceVnd: 20000000 },
        { id: 'info_weather_time', name: '층수 / 날씨 / 실시간 뉴스 표기', priceVnd: 15000000 },
        { id: 'qr_display', name: '스마트 QR코드 안내 디스플레이', priceVnd: 8000000 },
        { id: 'wifi', name: '초고속 Wi-Fi 구축 모듈', priceVnd: 10000000 },
        { id: 'bt_speaker', name: '고음질 블루투스 스피커 System', priceVnd: 10000000 },
        { id: 'glass_led_video', name: '유리벽 투명 LED / 프로젝션 비디오', priceVnd: 65000000 }
      ]
    },
    interior: {
      title: "4. 유리·인테리어 마감 (Glass & Interior)",
      items: [
        { id: 'tempered_glass', name: '투명 강화유리 패널', priceVnd: 20000000 },
        { id: 'tint_glass', name: '반사 / 틴트 스마트 조망 유리', priceVnd: 25000000 },
        { id: 'smart_glass', name: '스마트 글라스 (Smart Glass - 투명/불투명 전환)', priceVnd: 45000000 },
        { id: 'mirror_stainless', name: '거울형 헤어라인 스테인리스', priceVnd: 20000000 },
        { id: 'gold_bronze_finish', name: '골드 / 브론즈 / 블랙 럭셔리 마감', priceVnd: 30000000 },
        { id: 'wood_panel', name: '천연목재 패널 마감', priceVnd: 35000000 },
        { id: 'marble_tile', name: '바닥 천연 대리석 / 마블 패턴 타일', priceVnd: 25000000 },
        { id: 'indirect_rgb_light', name: '간접조명 & RGB LED 무드등', priceVnd: 18000000 },
        { id: 'starlight_ceiling', name: '별빛 천장 (Starlight Ceiling) 커스텀', priceVnd: 30000000 }
      ]
    },
    smarthome: {
      title: "5. 스마트홈 연동 (Smart Home & Access Control)",
      items: [
        { id: 'smartphone_app', name: '스마트폰 원격 호출 & 층 선택 App', priceVnd: 18000000 },
        { id: 'nfc_rfid_card', name: 'NFC / RFID 태그 카드 출입 제어', priceVnd: 8000000 },
        { id: 'face_fingerprint_id', name: '생체인식 (얼굴인식 / 지문인식)', priceVnd: 25000000 },
        { id: 'smarthome_interlock', name: '스마트홈 월패드 & 관제 센터 연동', priceVnd: 20000000 }
      ]
    },
    convenience: {
      title: "6. 고급 편의 옵션 (Luxury Convenience)",
      items: [
        { id: 'auto_light_voice', name: '자동 조명 감지 & 음성 안내 시스템', priceVnd: 6000000 },
        { id: 'multilingual_guide', name: '베트남어/한국어/영어 다국어 안내', priceVnd: 5000000 },
        { id: 'music_bluetooth', name: '배경음악(BGM) 재생 시스템', priceVnd: 5000000 },
        { id: 'usb_wireless_charge', name: 'USB & 스마트폰 무선충전 패드', priceVnd: 7000000 },
        { id: 'aroma_diffuser', name: '자동 향기 디퓨저 & 손잡이', priceVnd: 5000000 },
        { id: 'folding_chair_child_btn', name: '접이식 의자 & 휠체어/어린이 전용 버튼', priceVnd: 12000000 }
      ]
    }
  };

  // Toggle option handler
  const toggleOption = (optId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optId]: !prev[optId]
    }));
  };

  // Calculate Comprehensive Real VND Price
  const calculateVndPrice = () => {
    let baseVnd = 350000000; // Base 350kg 3-stop (3.5억 VND)

    // Extra Capacity
    let capacityAddVnd = 0;
    if (capacity === '450') capacityAddVnd = 65000000;
    if (capacity === '630') capacityAddVnd = 140000000;
    if (capacity === '1000') capacityAddVnd = 280000000;

    // Extra Floors over 3 stops
    const extraFloors = Math.max(0, floors - 3);
    const floorsAddVnd = extraFloors * 35000000;

    // Cabin Finish
    let cabinAddVnd = 0;
    if (cabinStyle === 'luxury_gold') cabinAddVnd = 45000000;
    if (cabinStyle === 'glass_panoramic') cabinAddVnd = 95000000;

    // Door Type
    let doorAddVnd = 0;
    if (doorType === 'automatic_glass') doorAddVnd = 40000000;

    // Selected Package Price
    const pkgObj = packages.find(p => p.id === selectedPackage) || packages[0];
    const packageAddVnd = pkgObj.priceVnd;

    // Sum of Individually Selected Custom Options
    let customOptionsAddVnd = 0;
    Object.keys(optionCatalog).forEach(catKey => {
      optionCatalog[catKey].items.forEach(item => {
        if (selectedOptions[item.id] && !item.defaultIncluded) {
          customOptionsAddVnd += item.priceVnd;
        }
      });
    });

    const totalVnd = baseVnd + capacityAddVnd + floorsAddVnd + cabinAddVnd + doorAddVnd + packageAddVnd + customOptionsAddVnd;
    const totalUsd = Math.round(totalVnd / 25400);
    const totalKrw = Math.round(totalVnd * 0.054 / 10000) * 10000;

    return {
      totalVnd,
      baseVnd,
      capacityAddVnd,
      floorsAddVnd,
      cabinAddVnd,
      doorAddVnd,
      packageAddVnd,
      customOptionsAddVnd,
      pkgObj,
      totalUsd,
      totalKrw,
      formattedVnd: totalVnd.toLocaleString('vi-VN'),
      trieuVnd: (totalVnd / 1000000).toLocaleString('vi-VN'),
      tyVnd: (totalVnd / 1000000000).toFixed(3)
    };
  };

  const prices = calculateVndPrice();

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setBookingForm({ name: '', phone: '', address: '', note: '' });
    }, 2500);
  };

  return (
    <section id="calculator" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            <Calculator className="w-3.5 h-3.5" />
            <span>BEST WINNER ELEVATOR VN SMART CONFIGURATOR</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white">
            승강기 패키지 & 커스텀 옵션 자동 견적
          </h2>
          <p className="text-sm sm:text-base text-slate-300">
            6대 패키지 상품과 스마트 미디어·스마트홈·인테리어 옵션을 조합하여 베트남 동화(VND) 견적을 실시간으로 산출해 드립니다.
          </p>
        </div>


        {/* 6 Tier Packages Selector Grid */}
        <div className="space-y-4 mb-14">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-extrabold text-white flex items-center">
              <Layers className="w-5 h-5 text-gold-400 mr-2" />
              <span>1. BEST winnerVn 상품 패키지 선택 (6 Tier Packages)</span>
            </h3>
            <span className="text-xs text-slate-400 font-mono">클릭 시 해당 패키지 사양이 자동 적용됩니다</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {packages.map((pkg) => {
              const isSelected = selectedPackage === pkg.id;
              return (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-gold-500/10 border-gold-400 shadow-gold-glow ring-1 ring-gold-400'
                      : 'bg-navy-900/80 border-navy-700 hover:border-gold-500/40'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full border ${
                        isSelected ? 'bg-gold-500 text-navy-950 border-gold-400' : 'bg-navy-950 text-gold-400 border-gold-500/30'
                      }`}>
                        {pkg.badge}
                      </span>
                      {isSelected && <Check className="w-5 h-5 text-gold-400 font-bold" />}
                    </div>
                    <h4 className="text-xl font-black text-white">{pkg.name}</h4>
                    <p className="text-xs font-bold text-gold-300">{pkg.spec}</p>
                    <p className="text-[11px] text-slate-400 leading-relaxed">{pkg.desc}</p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-navy-800 flex items-center justify-between">
                    <span className="text-xs text-slate-400">패키지 추가금:</span>
                    <span className="font-mono text-sm font-bold text-white">
                      {pkg.priceVnd === 0 ? '기본 포함 (0 VNĐ)' : `+${pkg.priceVnd.toLocaleString('vi-VN')} VNĐ`}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Main Configurator Container */}
        <div className="glass-card-gold rounded-3xl p-6 sm:p-10 border border-gold-500/40 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 7 Cols: Basic Hardware Specs & Detailed Options Customizer */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Floor Stops */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-sm font-bold text-gold-300 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 font-black text-xs flex items-center justify-center mr-2">1</span>
                    운행 층수 선택 (Số tầng / Stops)
                  </label>
                  <span className="text-lg font-extrabold text-white bg-navy-900 px-3.5 py-1 rounded-xl border border-gold-500/30 font-mono">
                    {floors} {floors >= 10 ? '층 이상 (Stops)' : '층 (Stops)'}
                  </span>
                </div>
                <input 
                  type="range" 
                  min="3" 
                  max="12" 
                  value={floors}
                  onChange={(e) => setFloors(parseInt(e.target.value))}
                  className="w-full h-2.5 bg-navy-800 rounded-lg appearance-none cursor-pointer accent-gold-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>3층 (기본)</span>
                  <span>5층 (타운하우스)</span>
                  <span>7층 (고급빌라)</span>
                  <span>10층+ (오피스)</span>
                </div>
              </div>

              {/* Step 2: Capacity */}
              <div className="space-y-3">
                <label className="text-sm font-bold text-gold-300 flex items-center">
                  <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 font-black text-xs flex items-center justify-center mr-2">2</span>
                  적재 하중 & 승차 인원 (Tải trọng / Capacity)
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {[
                    { id: '350', label: '350 kg', sub: 'BEST Home (4-5인)' },
                    { id: '450', label: '450 kg', sub: '중형 (6인승)' },
                    { id: '630', label: '630 kg', sub: '대형 (8인승)' },
                    { id: '1000', label: '1000 kg+', sub: '화물/상업용' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCapacity(item.id)}
                      className={`p-3.5 rounded-xl text-left border transition-all ${
                        capacity === item.id
                          ? 'bg-gold-500 text-navy-950 border-gold-400 font-bold shadow-lg'
                          : 'bg-navy-900/80 text-slate-200 border-navy-700 hover:border-gold-500/40'
                      }`}
                    >
                      <p className="text-sm font-black">{item.label}</p>
                      <p className={`text-[10px] mt-0.5 ${capacity === item.id ? 'text-navy-900 font-bold' : 'text-slate-400'}`}>{item.sub}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Detailed Option Categories Sub-Tabs */}
              <div className="space-y-4 pt-4 border-t border-navy-800">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-bold text-gold-300 flex items-center">
                    <span className="w-6 h-6 rounded-full bg-gold-500 text-navy-950 font-black text-xs flex items-center justify-center mr-2">3</span>
                    세부 커스텀 옵션 선택 (Individual Custom Options)
                  </label>
                  <span className="text-[11px] text-slate-400 font-mono">원하시는 옵션을 자유롭게 체크하세요</span>
                </div>

                {/* Category Sub-Tabs */}
                <div className="flex space-x-1.5 overflow-x-auto pb-2 border-b border-navy-800">
                  {[
                    { id: 'safety', label: '안전', icon: ShieldCheck },
                    { id: 'cooling', label: '냉방·공기', icon: Fan },
                    { id: 'media', label: '미디어', icon: Tv },
                    { id: 'interior', label: '유리·인테리어', icon: Layers },
                    { id: 'smarthome', label: '스마트홈', icon: Smartphone },
                    { id: 'convenience', label: '고급편의', icon: Music }
                  ].map((cat) => {
                    const CatIcon = cat.icon;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategoryTab(cat.id)}
                        className={`flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                          activeCategoryTab === cat.id
                            ? 'bg-gold-500 text-navy-950 shadow-md'
                            : 'bg-navy-900 text-slate-400 hover:text-white border border-navy-800'
                        }`}
                      >
                        <CatIcon className="w-3.5 h-3.5" />
                        <span>{cat.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Active Category Option Checkbox Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {optionCatalog[activeCategoryTab].items.map((opt) => {
                    const isChecked = selectedOptions[opt.id];
                    return (
                      <div
                        key={opt.id}
                        onClick={() => !opt.defaultIncluded && toggleOption(opt.id)}
                        className={`p-3.5 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          opt.defaultIncluded
                            ? 'bg-navy-950/60 border-navy-800 text-slate-400 cursor-not-allowed'
                            : isChecked
                              ? 'bg-gold-500/10 border-gold-400 text-white font-bold'
                              : 'bg-navy-900/60 border-navy-800 text-slate-300 hover:border-gold-500/30'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div className={`w-5 h-5 rounded flex items-center justify-center border transition-colors ${
                            isChecked || opt.defaultIncluded 
                              ? 'bg-gold-500 border-gold-400 text-navy-950' 
                              : 'border-slate-600 bg-navy-950'
                          }`}>
                            {(isChecked || opt.defaultIncluded) && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>
                          <div>
                            <span className="text-xs block">{opt.name}</span>
                            {opt.defaultIncluded ? (
                              <span className="text-[10px] text-emeraldGreen-400 font-semibold block">기본 포함 옵션</span>
                            ) : (
                              <span className="text-[10px] font-mono text-gold-300 block">
                                {opt.priceVnd === 0 ? '추가금 없음' : `+${opt.priceVnd.toLocaleString('vi-VN')} VNĐ`}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Estimated Price Summary Box (Right 5 Cols - VND Primary) */}
            <div className="lg:col-span-5 bg-navy-950/95 rounded-2xl p-6 border border-gold-500/40 flex flex-col justify-between shadow-2xl">
              <div className="space-y-5">
                <div className="flex justify-between items-center pb-3 border-b border-navy-800">
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-wider">VND ESTIMATE SUMMARY</span>
                  <span className="text-[10px] font-bold bg-navy-900 text-gold-400 px-2.5 py-1 rounded-full border border-gold-500/30">
                    BEST WINNER ELEVATOR VN
                  </span>
                </div>

                {/* Main Prominent VND Price Display */}
                <div className="space-y-2 bg-navy-900/90 p-4 rounded-2xl border border-gold-500/30">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-slate-300 font-semibold">베트남 동화(VND) 추정 견적가</span>
                    <span className="text-[10px] font-bold text-gold-400 bg-gold-500/20 px-2 py-0.5 rounded border border-gold-500/30">
                      {prices.pkgObj.name} 패키지
                    </span>
                  </div>
                  
                  <div className="text-3xl sm:text-4xl font-black gold-gradient-text tracking-tight">
                    {prices.trieuVnd} <span className="text-xl font-bold text-gold-400">Triệu VND</span>
                  </div>
                  
                  <div className="text-xs text-chrome-200 font-mono">
                    = {prices.formattedVnd} VNĐ ({prices.tyVnd} Tỷ VNĐ)
                  </div>

                  <div className="pt-2 flex items-center space-x-3 text-xs text-slate-400 border-t border-navy-800">
                    <span>≈ ${prices.totalUsd.toLocaleString()} USD</span>
                    <span>|</span>
                    <span>≈ {(prices.totalKrw / 10000).toLocaleString()} 만원</span>
                  </div>
                </div>

                {/* VND Calculation Line Item Breakdown */}
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-800 space-y-2 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>• 350kg 3스톱 기본가:</span>
                    <span className="font-mono text-white">350.000.000 VNĐ</span>
                  </div>
                  {prices.floorsAddVnd > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>• 추가 층수 (+{floors - 3}층):</span>
                      <span className="font-mono text-gold-300">+{prices.floorsAddVnd.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  )}
                  {prices.capacityAddVnd > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>• 용량 변경 ({capacity}kg):</span>
                      <span className="font-mono text-gold-300">+{prices.capacityAddVnd.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  )}
                  {prices.packageAddVnd > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>• 선택 패키지 ({prices.pkgObj.name}):</span>
                      <span className="font-mono text-gold-300">+{prices.packageAddVnd.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  )}
                  {prices.customOptionsAddVnd > 0 && (
                    <div className="flex justify-between text-slate-300">
                      <span>• 개별 커스텀 옵션 합계:</span>
                      <span className="font-mono text-gold-300">+{prices.customOptionsAddVnd.toLocaleString('vi-VN')} VNĐ</span>
                    </div>
                  )}
                  <div className="flex justify-between text-slate-300 pt-2 border-t border-navy-800 font-bold">
                    <span className="text-gold-400">• 무상 A/S & 서비스:</span>
                    <span className="text-emeraldGreen-400">24개월 직영 보증 포함</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed italic">
                  * 상기 금액은 표준 제작·설치·시운전 포함 VND 견적이며, 현장 구조물 및 타공 환경에 따라 정밀 실측 후 최종 확정됩니다.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 space-y-3">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black py-4 rounded-xl shadow-gold-glow text-sm flex items-center justify-center space-x-2 transition-transform hover:scale-[1.01]"
                >
                  <Calendar className="w-4 h-4 stroke-[2.5]" />
                  <span>VND 견적 기반 무료 현장 실측 신청</span>
                </button>

                <button
                  onClick={() => setShowQuotePreview(true)}
                  className="w-full bg-navy-900 hover:bg-navy-800 text-slate-200 font-bold py-3.5 rounded-xl border border-gold-500/40 hover:border-gold-400 text-xs flex items-center justify-center space-x-2"
                >
                  <FileText className="w-4 h-4 text-gold-400" />
                  <span>패키지 & 옵션 명세 견적서 다운로드</span>
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Printable VND Quote Document Modal */}
      {showQuotePreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
          <div className="glass-card-chrome max-w-3xl w-full p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto text-slate-100">
            <button 
              onClick={() => setShowQuotePreview(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Document Header */}
            <div className="border-b border-navy-800 pb-4 text-center space-y-1">
              <div className="inline-flex items-center space-x-2 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-0.5 rounded-full border border-gold-500/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>BÁO GIÁ THĂNG MÁY CHÍNH THỨC</span>
              </div>
              <h3 className="text-2xl font-black text-white">BEST WINNER ELEVATOR VN</h3>
              <p className="text-xs text-slate-400">공식 승강기 패키지 & 커스텀 옵션 견적서 (VND Currency Base)</p>
            </div>

            {/* Specifications Summary */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-navy-900 p-4 rounded-xl border border-navy-800">
                <div>
                  <span className="text-slate-400 block">선택 패키지:</span>
                  <span className="font-bold text-gold-400">{prices.pkgObj.name} ({prices.pkgObj.badge})</span>
                </div>
                <div>
                  <span className="text-slate-400 block">용량 / 승차인원:</span>
                  <span className="font-bold text-white">{capacity} kg</span>
                </div>
                <div>
                  <span className="text-slate-400 block">운행 층수:</span>
                  <span className="font-bold text-white">{floors} Stops (층)</span>
                </div>
                <div>
                  <span className="text-slate-400 block">적용 통화:</span>
                  <span className="font-bold text-gold-400">VND (VNĐ)</span>
                </div>
              </div>

              {/* Itemized Price Table in VND */}
              <div className="border border-navy-800 rounded-xl overflow-hidden text-xs">
                <table className="w-full text-left">
                  <thead className="bg-navy-900 text-gold-400 font-bold border-b border-navy-800">
                    <tr>
                      <th className="p-3">구분 / 항목명 (Item & Options Description)</th>
                      <th className="p-3 text-right">금액 (VND)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/80">
                    <tr>
                      <td className="p-3 text-slate-200">기본 승강기 패키지 (350kg / 3스톱 표준)</td>
                      <td className="p-3 text-right font-mono text-white">350.000.000 VNĐ</td>
                    </tr>
                    {prices.floorsAddVnd > 0 && (
                      <tr>
                        <td className="p-3 text-slate-200">추가 층수 옵션 (+{floors - 3}층 @ 35.000.000 VNĐ)</td>
                        <td className="p-3 text-right font-mono text-gold-300">+{prices.floorsAddVnd.toLocaleString('vi-VN')} VNĐ</td>
                      </tr>
                    )}
                    {prices.capacityAddVnd > 0 && (
                      <tr>
                        <td className="p-3 text-slate-200">용량 증설 옵션 ({capacity}kg)</td>
                        <td className="p-3 text-right font-mono text-gold-300">+{prices.capacityAddVnd.toLocaleString('vi-VN')} VNĐ</td>
                      </tr>
                    )}
                    {prices.packageAddVnd > 0 && (
                      <tr>
                        <td className="p-3 text-slate-200">선택 상품 패키지 ({prices.pkgObj.name} - {prices.pkgObj.spec})</td>
                        <td className="p-3 text-right font-mono text-gold-300">+{prices.packageAddVnd.toLocaleString('vi-VN')} VNĐ</td>
                      </tr>
                    )}
                    {prices.customOptionsAddVnd > 0 && (
                      <tr>
                        <td className="p-3 text-slate-200">추가 선택 커스텀 옵션 (개별 선택 6대 카테고리 항목 합계)</td>
                        <td className="p-3 text-right font-mono text-gold-300">+{prices.customOptionsAddVnd.toLocaleString('vi-VN')} VNĐ</td>
                      </tr>
                    )}
                    <tr className="bg-navy-900/90 font-black text-sm text-gold-400">
                      <td className="p-3.5">총 견적 합계 (TOTAL ESTIMATE VND)</td>
                      <td className="p-3.5 text-right font-mono text-base">{prices.formattedVnd} VNĐ</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="p-4 bg-navy-900/60 rounded-xl border border-navy-800 text-[11px] text-slate-300 space-y-1">
                <p className="font-bold text-gold-400">• 무상 보증 및 스마트 관제 서비스 조건:</p>
                <p>- 한국 거창승강기밸리 주요 제어 부품 및 베트남 직영 하노이 공장 제작 Cabin</p>
                <p>- 24개월 직영 무상 A/S 보증 및 24시간 긴급 출동 관제 DB 시스템 포함</p>
              </div>
            </div>

            {/* Print / Download Button */}
            <div className="flex space-x-3 pt-2">
              <button
                onClick={() => window.print()}
                className="flex-1 bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold py-3.5 rounded-xl shadow-gold-glow text-xs flex items-center justify-center space-x-2"
              >
                <Printer className="w-4 h-4" />
                <span>VND 견적서 인쇄 / PDF 저장</span>
              </button>
              <button
                onClick={() => setShowQuotePreview(false)}
                className="px-6 bg-navy-900 text-slate-400 hover:text-white rounded-xl border border-navy-800 text-xs font-bold"
              >
                닫기
              </button>
            </div>

          </div>
        </div>
      )}

      {/* Free Site Survey Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md">
          <div className="glass-card-gold max-w-md w-full p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative shadow-2xl">
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
            >
              <X className="w-6 h-6" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emeraldGreen-500/20 text-emeraldGreen-500 rounded-full flex items-center justify-center mx-auto">
                  <Check className="w-8 h-8 stroke-[3]" />
                </div>
                <h3 className="text-xl font-extrabold text-white">무료 현장 실측 신청 완료!</h3>
                <p className="text-xs text-slate-300">
                  BEST WINNER ELEVATOR VN 전문 엔지니어가 15분 이내에 입력해주신 연락처로 일정 확인 전화를 드립니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-xl font-extrabold text-white">VND 견적 기반 현장 실측 신청</h3>
                  <p className="text-xs text-gold-400 font-semibold">
                    선택 사양: [{prices.pkgObj.name}] {floors}층 / {capacity}kg / {prices.trieuVnd} Triệu VNĐ ({prices.formattedVnd} VNĐ)
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">성함 / 담당자명</label>
                    <input 
                      type="text" 
                      required
                      placeholder="예: 김성원 대표 / Nguyen Van A"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">연락처 (Zalo / 카카오톡)</label>
                    <input 
                      type="tel" 
                      required
                      placeholder="0988-xxx-xxx"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1">현장 위치 (도시 / 구)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="예: Hanoi, Nam Tu Liem / Ho Chi Minh City"
                      value={bookingForm.address}
                      onChange={(e) => setBookingForm({...bookingForm, address: e.target.value})}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-black py-3.5 rounded-xl shadow-gold-glow text-xs uppercase tracking-wider mt-4"
                >
                  VND 패키지 견적 신청 완료하기
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
