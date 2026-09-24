import React, { useState } from 'react';
import { 
  Droplets, 
  ShieldAlert, 
  Wrench, 
  Check, 
  Search, 
  ArrowRight, 
  ShieldCheck,
  Award,
  Sparkles,
  CheckCircle2,
  Package,
  Layers,
  Building2,
  Factory,
  Globe2,
  Newspaper,
  PhoneCall,
  CheckCircle,
  Sun,
  Shield,
  Palette,
  FileCheck,
  Eye,
  Maximize2,
  X,
  FileSpreadsheet
} from 'lucide-react';

export default function WaterproofingSection({ t, onOpenConsult }) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'certs' | 'specs' | 'references'
  const [selectedVolume, setSelectedVolume] = useState('18L');
  const [activeCertModal, setActiveCertModal] = useState(null); // image URL for lightbox

  // Official K1 Waterproofing Data
  const k1Data = {
    companyName: "BEST WINNER WATERPROOF VN",
    productName: "K1 Special Ultra-Strong Waterproof Coating",
    koreanProductName: "K1 특수 초강력 방수제",
    slogan: "“물 한 방울도 허용하지 않는 완벽한 차단 • 10년의 안전 보장”",
    subSlogan: "Korean Imported Raw Materials × Vietnam Exclusive Production",
    features: [
      {
        title: "일액형 (Single-Component) 간편 시공",
        desc: "주제와 경화제를 별도 혼합하는 타사 2액형과 달리, 전 성분이 1개 패키지로 일체 구성되어 붓/롤러로 누구나 손쉽게 Self 방수 시공 가능.",
        icon: Wrench
      },
      {
        title: "300% 고탄성 크랙 커버 (300% Elongation)",
        desc: "독보적인 탄성률(최대 300%)을 갖추어 건물 신축 및 대형 균열, 미세 구멍을 유연하게 커버하여 구조물 수명을 획기적으로 연장.",
        icon: ShieldCheck
      },
      {
        title: "친환경 무독성 & 무취 (Eco-Friendly)",
        desc: "인체에 무해한 친환경 프리미엄 소재로 생산되어 냄새가 없고 독성이 없어 주거/상업 공간 내부와 외부 모두 안심 사용.",
        icon: Shield
      },
      {
        title: "차열 & 열에너지 반사 (Thermal Reflection)",
        desc: "특수 안료 기술로 고온 직사광선 및 실내 온도 상승을 차단, 여름철 냉방 에너지 절감 효과와 뛰어난 내한성 동시 실현.",
        icon: Sun
      },
      {
        title: "상도 수성 페인트 후속 도장 가능",
        desc: "일반 유성 발수재와 달리 방수 도포 및 건조 후 수성 페인트로 후속 칠이 가능하여 유연한 인테리어/외관 마감 구현.",
        icon: Palette
      },
      {
        title: "한국 원료 수입 + 베트남 직접 생산",
        desc: "20년간 한국 시장에서 검증된 기술 원료를 수입하여 고온 다습한 동남아 기후 특성에 맞게 베트남 현지 공장에서 직접 생산.",
        icon: Factory
      }
    ],
    certs: [
      {
        id: "cert_national",
        title: "베트남 국립 품질 인증서 (Vietnam National Certification)",
        desc: "베트남 국가 표준 QCVN/TCVN 건축 자재 및 방수 성능 품질 정식 인증서",
        img: "/images/waterproofing/k1_cert_vietnam_national.jpg",
        tag: "베트남 국가 인증"
      },
      {
        id: "cert_test1",
        title: "공인기관 시험성적서 1 (Experimental Test Report #1)",
        desc: "수압 부착력, 수밀성 및 탄성 복원률(300%) 정밀 실험 결과 보고서",
        img: "/images/waterproofing/k1_cert_test_report_1.jpg",
        tag: "성능 시험 성적서"
      },
      {
        id: "cert_test2",
        title: "공인기관 시험성적서 2 (Experimental Test Report #2)",
        desc: "내화학성, 내후성 및 고온 열에너지 반사율 공인 검인 결과서",
        img: "/images/waterproofing/k1_cert_test_report_2.jpg",
        tag: "내후성/차열 성적서"
      },
      {
        id: "cert_quality",
        title: "품질 보증 & ISO 안전 인증 (Quality Assurance Document)",
        desc: "인체 무독성, 무취, 친환경 원료 검증 및 10년 품질보증 공인 승인서",
        img: "/images/waterproofing/k1_cert_quality_doc.jpg",
        tag: "친환경/안전 인증"
      }
    ],
    volumes: [
      { id: '18L', name: '18 Liters (대용량)', recommended: '대형 옥상, 공장 지붕, 단지 옥외 전면 방수 시공', coverage: '약 35~40 m² (2회 도포)' },
      { id: '10L', name: '10 Liters (중용량)', recommended: '타운하우스, 빌라 옥상, 테라스 방수 시공', coverage: '약 20~22 m² (2회 도포)' },
      { id: '5L', name: '5 Liters (소용량)', recommended: '발코니, 욕실, 주방, 베란다 리모델링 시공', coverage: '약 10 m² (2회 도포)' },
      { id: '1L', name: '1 Liter (소형/DIY)', recommended: '부분 누수, 포인트 균열 메움 및 DIY 보수', coverage: '약 2 m² (2회 도포)' }
    ],
    manual: [
      { 
        step: "01", 
        title: "표면 점검 및 보수", 
        desc: "시공 표면의 균열이나 구멍을 점검하고 방수 실란트나 실리콘으로 기포 및 균열을 보수합니다.",
        img: "/images/waterproofing/k1_step1_surface_check.jpg"
      },
      { 
        step: "02", 
        title: "표면 청소 및 바탕 준비", 
        desc: "작업 부위의 먼지, 이물질, 기름, 이끼 등을 고압 세척기나 스펀지로 깨끗이 세척 후 건조시킵니다.",
        img: "/images/waterproofing/k1_step2_surface_prep.jpg"
      },
      { 
        step: "03", 
        title: "프라이머 하도 도포", 
        desc: "청소된 표면에 기초 프라이머를 롤러 또는 붓으로 고르게 도포하여 방수제의 접착력을 극대화합니다.",
        img: "/images/waterproofing/k1_step3_primer_app.jpg"
      },
      { 
        step: "04", 
        title: "K1 방수제 2~3회 도포", 
        desc: "프라이머 건조 후 K1 방수제를 도포합니다. 이전 층이 완전히 마른 후 2~3회에 걸쳐 칠합니다.",
        img: "/images/waterproofing/k1_step4_coating_app.png"
      }
    ],
    cases: [
      { title: "LG 디스플레이 (파주 공장)", desc: "한국 대형 산업 시설 초강력 방수 공법 시공", img: "/images/waterproofing/k1_case_lg_display.jpg", loc: "파주, 대한민국" },
      { title: "영광 원자력 발전소", desc: "고도의 수밀성과 내화학성이 요구되는 발전 시설 방수", img: "/images/waterproofing/k1_case_nuclear_power.jpg", loc: "영광, 대한민국" },
      { title: "다산 한강 르네상스", desc: "대규모 주상복합 옥상 및 테라스 고탄성 방수 시공", img: "/images/waterproofing/k1_case_dasan_renaissance.png", loc: "남양주, 대한민국" },
      { title: "Dream Tech 2공장", desc: "베트남 현지 첨단 제조 공장 지붕 및 외벽 방수", img: "/images/waterproofing/k1_case_dream_tech.jpg", loc: "베트남 현지 공장" },
      { title: "VINCOM Smart City", desc: "하노이 대형 신도시 주거 단지 옥상/지하 방수", img: "/images/waterproofing/k1_case_vincom_city.jpg", loc: "하노이, 베트남" },
      { title: "하노이 PG COMMERCE 직영 공장", desc: "K1 방수제 베트남 직접 생산 3,000m² 메인 시설", img: "/images/waterproofing/k1_factory_hanoi.jpeg", loc: "하노이 하동, 베트남" }
    ],
    networks: [
      { region: "본사 & 공장 (Hanoi)", name: "BEST WINNER VN / PG COMMERCE", addr: "44 Đại Mỗ, Nam Từ Liêm, Hà Nội" },
      { region: "남부 총판 (Ho Chi Minh)", name: "ETTE REACT", addr: "TP. Hồ Chí Minh, Việt Nam" },
      { region: "중부 총판 (Nghe An)", name: "KBINVIET", addr: "Nghệ An, Việt Nam" },
      { region: "해외 파트너 (Southeast Asia)", name: "SHINYOUNG INDUSTRIAL CO., LTD", addr: "Cambodia & Indonesia Network" }
    ]
  };

  return (
    <section id="waterproofing" className="py-16 bg-navy-900/60 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1 rounded-full border border-cyan-500/30">
                <Droplets className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ⑤ — K1 WATERPROOFING</span>
              </span>
              <span className="text-xs font-mono text-chrome-300">20 YEARS KOREAN MARKET PROVEN</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {k1Data.companyName}
            </h2>
            <p className="text-sm sm:text-base text-cyan-300 font-semibold italic">
              "{k1Data.slogan}"
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {k1Data.productName} — 20년간 한국 시장에서 검증된 기술력을 바탕으로, 한국 직수입 원료와 베트남 현지 직영 생산을 결합하여 고온 다습한 동남아 기후에 최적화된 10년 품질 보증 초강력 방수 솔루션입니다.
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <button
              onClick={() => onOpenConsult('waterproofing')}
              className="bg-gradient-to-r from-cyan-400 to-blue-600 hover:from-cyan-300 hover:to-blue-500 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-lg text-xs flex items-center space-x-2 transition-transform hover:scale-[1.02]"
            >
              <Droplets className="w-4 h-4 fill-navy-950" />
              <span>무료 현장 누수 진단 & 견적 신청 →</span>
            </button>
          </div>
        </div>

        {/* Product Visual Showcase Banner */}
        <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 mb-12 shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30 inline-flex items-center">
                <Sparkles className="w-3.5 h-3.5 mr-1.5" />
                K1 SPECIAL ULTRA-POWERFUL SEALANT
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                K1 특수 초강력 방수제 실물 라인업
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                단 한 방울의 누수도 허용하지 않는 독보적 수밀성! 옥상, 테라스, 승강기 PIT, 외벽, 발코니까지 1액형 고탄성 코팅으로 완벽 보호합니다.
              </p>
              
              <div className="pt-2 flex flex-wrap gap-2 text-xs">
                <span className="bg-navy-950/90 text-gold-300 px-3 py-1.5 rounded-lg border border-gold-500/30 font-semibold">
                  ✓ 10년 안전 보증
                </span>
                <span className="bg-navy-950/90 text-cyan-300 px-3 py-1.5 rounded-lg border border-cyan-500/30 font-semibold">
                  ✓ 300% 고탄성 크랙 커버
                </span>
                <span className="bg-navy-950/90 text-emeraldGreen-400 px-3 py-1.5 rounded-lg border border-emeraldGreen-500/30 font-semibold">
                  ✓ 일액형 (믹싱 불필요)
                </span>
              </div>
            </div>

            {/* Product Bucket Image Display */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative group max-w-md w-full">
                <div className="absolute inset-0 bg-cyan-500/20 rounded-2xl filter blur-xl group-hover:bg-gold-500/30 transition-all"></div>
                <img 
                  src="/images/waterproofing/k1_overview_product.png" 
                  alt="K1 특수 초강력 방수제 실물"
                  className="relative z-10 w-full h-auto object-contain max-h-72 rounded-2xl drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Navigation Sub-Tabs */}
        <div className="flex space-x-2 border-b border-navy-800 pb-3 mb-10 overflow-x-auto">
          {[
            { id: 'overview', name: 'K1 특성 & 6대 핵심 경쟁력', icon: Sparkles },
            { id: 'certs', name: '베트남 국립 품질 인증서 & 시험성적서', icon: FileCheck },
            { id: 'specs', name: '용량 라인업 (18L/10L/5L/1L) & 4단계 매뉴얼', icon: Package },
            { id: 'references', name: '한국/베트남 시공 실적 & 현장 갤러리', icon: Globe2 },
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500 text-navy-950 shadow-md'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* SUB-TAB 1: Overview & 6 Core Features */}
        {activeTab === 'overview' && (
          <div className="space-y-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {k1Data.features.map((feat, idx) => {
                const IconComp = feat.icon;
                return (
                  <div key={idx} className="glass-card rounded-2xl p-6 border border-navy-700 hover:border-cyan-500/40 transition-all flex flex-col justify-between group">
                    <div className="space-y-4">
                      <div className="w-12 h-12 rounded-xl bg-navy-800 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-navy-950 transition-colors">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {feat.title}
                      </h4>
                      <p className="text-xs text-slate-300 leading-relaxed">
                        {feat.desc}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-navy-800 flex items-center text-[11px] text-cyan-400 font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5 mr-1" />
                      <span>K1 Certified Quality</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* SUB-TAB 2: Certifications & Test Reports Showcase (Photo Inspector) */}
        {activeTab === 'certs' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                OFFICIAL CERTIFICATIONS
              </span>
              <h3 className="text-2xl font-black text-white">
                베트남 국립 품질 인증서 & 공인기관 시험성적서
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                K1 특수 초강력 방수제는 베트남 및 한국 공인 시험기관의 엄격한 수밀성, 탄성률, 내후성 테스트를 통과한 정식 인증 제품입니다. 카드를 클릭하시면 고해상도 인증서를 확대 검인하실 수 있습니다.
              </p>
            </div>

            {/* Certifications Grid with Lightbox Zoom */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {k1Data.certs.map((cert) => (
                <div 
                  key={cert.id}
                  onClick={() => setActiveCertModal(cert)}
                  className="glass-card rounded-2xl overflow-hidden border border-navy-700 hover:border-gold-500/40 transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="relative aspect-[3/4] bg-navy-950 overflow-hidden">
                    <img 
                      src={cert.img} 
                      alt={cert.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2 text-white">
                      <Maximize2 className="w-6 h-6 text-gold-400" />
                      <span className="text-xs font-bold">인증서 크게 보기</span>
                    </div>
                    <span className="absolute top-3 left-3 bg-navy-900/90 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-full border border-gold-500/30">
                      {cert.tag}
                    </span>
                  </div>

                  <div className="p-4 space-y-2 bg-navy-900/80">
                    <h4 className="text-xs font-bold text-white group-hover:text-gold-300 transition-colors line-clamp-2">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-slate-400 leading-relaxed line-clamp-2">
                      {cert.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Volumes & 4-Step Photo Manual */}
        {activeTab === 'specs' && (
          <div className="space-y-12">
            {/* Product Packaging Volumes */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-navy-800 pb-4">
                <div>
                  <h3 className="text-2xl font-extrabold text-white">K1 용량별 포장 제품군 (18L / 10L / 5L / 1L)</h3>
                  <p className="text-xs text-slate-300 mt-1">대형 현장 옥상부터 소형 발코니 DIY까지 최적화된 포장 라인업</p>
                </div>
              </div>

              {/* Bucket Display Banner */}
              <div className="glass-card p-6 rounded-2xl border border-navy-700 flex flex-col md:flex-row items-center gap-8">
                <div className="w-full md:w-1/2 flex justify-center">
                  <img 
                    src="/images/waterproofing/k1_buckets_all.png" 
                    alt="K1 18L 10L 5L 1L 용량별 통 이미지"
                    className="w-full max-w-md h-auto object-contain rounded-xl"
                  />
                </div>
                <div className="w-full md:w-1/2 space-y-4">
                  <h4 className="text-lg font-bold text-gold-400">용량별 도포 면적 산출 가이드</h4>
                  <div className="space-y-3">
                    {k1Data.volumes.map((vol) => (
                      <div key={vol.id} className="p-3.5 rounded-xl bg-navy-950 border border-navy-800 text-xs space-y-1">
                        <div className="flex justify-between font-bold">
                          <span className="text-white">{vol.name}</span>
                          <span className="text-cyan-400 font-mono">{vol.coverage}</span>
                        </div>
                        <p className="text-slate-400 text-[11px]">{vol.recommended}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* 4-Step Photo Manual */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-navy-700 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/30">
                  VISUAL CONSTRUCTION MANUAL
                </span>
                <h3 className="text-2xl font-black text-white">K1 방수제 4단계 현장 시공 매뉴얼</h3>
                <p className="text-xs text-slate-300">실제 시공 사진으로 확인하는 표준 4단계 방수 코팅 공정</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {k1Data.manual.map((m) => (
                  <div key={m.step} className="glass-card rounded-2xl overflow-hidden border border-navy-800 space-y-3 relative group">
                    <div className="aspect-video bg-navy-950 overflow-hidden relative">
                      <img 
                        src={m.img} 
                        alt={m.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 font-black text-xs px-2.5 py-0.5 rounded-md">
                        STEP {m.step}
                      </span>
                    </div>

                    <div className="p-4 space-y-2">
                      <h4 className="text-sm font-bold text-white">{m.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{m.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 4: Case Studies & Photos */}
        {activeTab === 'references' && (
          <div className="space-y-10">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                FIELD GALLERY
              </span>
              <h3 className="text-2xl font-black text-white">한국 & 베트남 주요 시공 현장 갤러리</h3>
              <p className="text-xs text-slate-300">원자력 발전소, LG디스플레이, 주상복합부터 베트남 현지 공장까지 검증된 방수 실적</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {k1Data.cases.map((c, idx) => (
                <div key={idx} className="glass-card rounded-2xl overflow-hidden border border-navy-700 group hover:border-gold-500/40 transition-all">
                  <div className="aspect-video bg-navy-950 overflow-hidden relative">
                    <img 
                      src={c.img} 
                      alt={c.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute bottom-2 left-2 bg-navy-900/90 text-gold-400 text-[10px] font-bold px-2 py-0.5 rounded border border-gold-500/30">
                      {c.loc}
                    </span>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h4 className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors">{c.title}</h4>
                    <p className="text-xs text-slate-400 leading-relaxed">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Certificate Modal (Lightbox) */}
        {activeCertModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md">
            <div className="glass-card-chrome max-w-3xl w-full p-6 rounded-3xl border border-gold-500/40 relative shadow-2xl space-y-4 max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setActiveCertModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-full bg-navy-900"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center space-y-1 pr-10">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">{activeCertModal.tag}</span>
                <h3 className="text-xl font-black text-white">{activeCertModal.title}</h3>
                <p className="text-xs text-slate-300">{activeCertModal.desc}</p>
              </div>

              <div className="bg-navy-950 p-2 rounded-2xl border border-navy-800 flex justify-center">
                <img 
                  src={activeCertModal.img} 
                  alt={activeCertModal.title}
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg"
                />
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveCertModal(null)}
                  className="bg-navy-900 hover:bg-navy-800 text-slate-300 px-6 py-2.5 rounded-xl border border-navy-800 text-xs font-bold"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
