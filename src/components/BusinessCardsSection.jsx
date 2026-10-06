import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Paintbrush, 
  ArrowUpRight, 
  Car, 
  Flame, 
  Droplets, 
  Sun,
  Globe,
  Cpu,
  ExternalLink,
  CheckCircle2, 
  ArrowRight,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

export default function BusinessCardsSection({ t }) {
  const navigate = useNavigate();

  const cardsData = [
    {
      id: 'aiManagement',
      path: '/services/ai-management',
      externalUrl: 'https://besterp.netlify.app',
      num: '01',
      tag: t.business.units.aiManagement?.tag || 'SaaS AI 솔루션 1.0',
      name: t.business.units.aiManagement?.name || 'BEST AI 경영관리 1.0 (SaaS)',
      desc: t.business.units.aiManagement?.desc || 'SaaS 개념으로 즉시 이용 가능한 AI 경영관리 1.0 서비스 — 경영 대시보드, 스마트 자동 견적, 공정 최적화 & 24/7 예지보전 관제.',
      highlight: t.business.units.aiManagement?.highlight || 'besterp.netlify.app 클라우드 SaaS 방식으로 즉시 접속 및 스마트 경영 관리가 가능합니다.',
      features: t.business.units.aiManagement?.features || [
        "SaaS 클라우드 기반 AI 경영 대시보드 & 실시간 재무 분석",
        "1분 이내 CAD/BIM 연동 B2B 스마트 자동 견적 산출",
        "24시간 예지보전 관제 & 현장 공정·인력 최적 배치"
      ],
      cta: t.business.units.aiManagement?.cta || 'BEST AI 경영관리 SaaS 접속 (besterp.netlify.app)',
      icon: Cpu,
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      btnColor: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold',
      bgImg: '/images/parking/hero/1.png'
    },
    {
      id: 'interior',
      path: '/business/interior',
      num: '02',
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
      num: '03',
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
      num: '04',
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
      num: '05',
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
      num: '06',
      tag: t.business.units.waterproofing.tag,
      name: t.business.units.waterproofing.name,
      desc: t.business.units.waterproofing.desc,
      highlight: t.business.units.waterproofing.highlight,
      features: t.business.units.waterproofing.features,
      icon: Droplets,
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      btnColor: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-chrome-300 text-navy-950 font-bold',
      bgImg: t.business.units.waterproofing.img
    },
    {
      id: 'energy',
      path: '/business/energy',
      num: '07',
      tag: t.business.units.energy?.tag || (t?.lang === 'vi' || !t?.lang ? 'Năng lượng Mặt trời 3D PVT' : '3D PVT 태양광'),
      name: t.business.units.energy?.name || (t?.lang === 'vi' || !t?.lang ? 'BEST winner Solar Energy Vn (Năng lượng Mặt trời)' : 'BEST winner Solar Energy Vn (태양광 에너지)'),
      desc: t.business.units.energy?.desc || (t?.lang === 'vi' || !t?.lang ? 'Hệ thống 3D PVT Hộp tuần hoàn Photon - Mật độ phát điện gấp 10 lần & Tuổi thọ 40+ năm.' : '3D 광자 순환 박스(Photon Cycling Box) PVT 시스템 — 10배 발전량 & 40년+ 수명.'),
      highlight: t.business.units.energy?.highlight || (t?.lang === 'vi' || !t?.lang ? 'Bằng sáng chế #10-2776941 & Triển lãm Intersolar Munich / Dubai Expo.' : '특허 제10-2776941호 & Intersolar Europe 2023 / 두바이 엑스포 출품.'),
      features: t.business.units.energy?.features || (t?.lang === 'vi' || !t?.lang ? [
        "10x Mật độ phát điện (1,300W/㎡ so với 131W/㎡)",
        "Tuổi thọ 40+ năm (làm mát bằng chất lỏng & hộp kín)",
        "Hệ thống PVT 2 trong 1 (Điện + Nước nóng 24/7, ROI 1-2 năm)"
      ] : [
        "단위면적당 10배 발전 밀도 (1,300W/㎡ 실증 데이터)",
        "수명 2배 연장 (액체 냉각 & 밀폐 박스로 40년+ 수명)",
        "전기 + 온수 동시 생산 PVT (사우나/호텔/공장 ROI 1~2년)"
      ]),
      icon: Sun,
      badgeColor: 'bg-amber-500/20 text-amber-400 border-amber-500/30',
      btnColor: 'bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-400 text-navy-950 font-bold',
      bgImg: t.business.units.energy?.img || '/images/sola/hreo/1.png'
    },
    {
      id: 'agency',
      path: '/business/agency',
      num: '08',
      tag: t?.lang === 'vi' || !t?.lang ? 'Đại lý kỹ thuật số & Marketing CRM' : '디지털 에이전시 & CRM 마케팅',
      name: t?.lang === 'vi' || !t?.lang ? 'BEST winner Digital Agency Vn (베스트디지털에이젼시)' : 'BEST winner Digital Agency Vn (베스트디지털에이젼시)',
      desc: t?.lang === 'vi' || !t?.lang ? 'Giải pháp Marketing kỹ thuật số Full-Stack: Xây dựng Nền tảng Web, CRM Hội viên, Marketing Tự động hóa & Quảng cáo Facebook 1tr lượt hiển thị/tháng.' : '반응형 웹 구축부터 CRM 회원제, 조건별 자동화 마케팅, AI 타겟 추천 & 페이스북 월 100만 회 노출 유료 광고 대행까지 풀스택 디지털 솔루션.',
      highlight: t?.lang === 'vi' || !t?.lang ? 'Lộ trình 4 Giai đoạn từ 8.000.000 VND & Hỗ trợ sản xuất 4 Video CF hàng tháng.' : '8,000,000 VND부터 시작하는 4단계 구축 로드맵 & 월 4회 CF 광고 영상 제작 지원.',
      features: t?.lang === 'vi' || !t?.lang ? [
        "Xây dựng Web chuẩn UX/UI & Tích hợp CRM hội viên tự động",
        "Tích hợp API Thời tiết & Tự động phát hành Voucher theo điều kiện",
        "Quản lý QC Facebook 1tr lượt hiển thị & Bảng điều khiển AI CRM"
      ] : [
        "UX/UI 최적화 웹 구축 & 모바일 회원제/CRM 자동화 연동",
        "날씨/기상 API 연동 & 조건별 맞춤 쿠폰 자동 발송 시스템",
        "페이스북 월 100만회 노출 광고 관리 & AI 고객 세그먼트 분석"
      ],
      icon: Globe,
      badgeColor: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      btnColor: 'bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold',
      bgImg: '/images/parking/hero/1.png'
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
                <div className="p-6 pt-0 space-y-2">
                  {card.externalUrl ? (
                    <div className="flex flex-col gap-2">
                      <a
                        href={card.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="w-full py-3.5 rounded-xl font-bold text-xs shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center space-x-2 border border-cyan-400/40 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white min-h-[44px]"
                      >
                        <span>{card.cta || 'SaaS AI 1.0 접속 (besterp.netlify.app)'}</span>
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCardClick(card.path);
                        }}
                        className="w-full py-2 rounded-lg text-[11px] font-semibold text-slate-300 hover:text-cyan-400 hover:bg-navy-900 transition-colors flex items-center justify-center space-x-1 border border-navy-800"
                      >
                        <span>소개 & 상세 기능 보기</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  ) : (
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
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
