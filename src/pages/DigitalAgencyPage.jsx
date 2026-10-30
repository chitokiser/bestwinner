import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { 
  Globe, 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Layers, 
  Database, 
  Bot, 
  CheckCircle2, 
  TrendingUp, 
  Users, 
  Repeat, 
  Share2, 
  Smartphone, 
  BarChart3, 
  Zap, 
  ShieldCheck, 
  DollarSign, 
  Check, 
  Calculator,
  Megaphone,
  Video,
  Award,
  ChevronRight,
  Maximize2,
  Image as ImageIcon,
  Cpu,
  Workflow,
  Compass,
  Briefcase,
  Building2,
  ShoppingBag,
  Utensils,
  QrCode,
  Ticket,
  Wine,
  Crown,
  FileText,
  Star,
  MessageSquare,
  Clock,
  Filter,
  Eye,
  Shield,
  Gift
} from 'lucide-react';

// 한국어 화면 여부
let __koLang = false;

export default function DigitalAgencyPage({ t }) {
  const isVi = t?.lang === 'vi';
  __koLang = t?.lang === 'ko';
  const isKo = t?.lang === 'ko' || !t?.lang;

  // Hero Gallery Image State
  const [activeImgIndex, setActiveImgIndex] = useState(0);

  // Active Proposal Tab State (1: 홍보&고객DB, 2: Zalo CRM, 3: AI예약, 4: VVIP오프라인, 5: KPI&견적)
  const [activeProposalTab, setActiveProposalTab] = useState(1);

  // Proposal Flywheel Step State
  const [activeFlywheelStep, setActiveFlywheelStep] = useState(1);

  // Quotation Package Preset Mode: 'custom' or 'baekje-vvip'
  const [quoteMode, setQuoteMode] = useState('baekje-vvip');

  const heroImages = [
    {
      src: '/images/dgitalagency/1.png',
      title: isKo ? 'Phase 1: 기획 & 기본 웹 구축' : 'Phase 1: Quy hoạch & Web cơ bản',
      badge: isKo ? '기본 인프라 구축 (약 8,000,000 VND ~)' : 'Báo giá dự kiến ~ 8.000.000 VND'
    },
    {
      src: '/images/dgitalagency/2.png',
      title: isKo ? 'Phase 2: CRM & 회원제 고도화' : 'Phase 2: CRM & Thẻ hội viên',
      badge: isKo ? '멤버십 & 포인트 적립 (약 35,000,000 VND ~)' : 'Báo giá dự kiến ~ 35.000.000 VND'
    },
    {
      src: '/images/dgitalagency/3.png',
      title: isKo ? 'Phase 3: 자동화 마케팅 & API 연동' : 'Phase 3: Marketing Tự động hóa',
      badge: isKo ? '날씨/조건별 쿠폰 발송 (약 35,000,000 VND ~)' : 'Báo giá dự kiến ~ 35.000.000 VND'
    },
    {
      src: '/images/dgitalagency/4.png',
      title: isKo ? 'Phase 4: AI & AX (AI Transformation) 고도화' : 'Phase 4: Chuyển đổi AI & AX',
      badge: isKo ? 'AX 에이전틱 AI & 고객분석 (약 30,000,000 VND ~)' : 'AX & Báo giá dự kiến ~ 30.000.000 VND'
    },
    {
      src: '/images/dgitalagency/5.png',
      title: isKo ? '월간 운영 및 유지관리 서비스' : 'Vận hành & Bảo trì Hàng tháng',
      badge: isKo ? '월 350만 동 (4K 숏폼 8회 · KOC 10회 · 정밀광고 20만회)' : '3.500.000 VND/tháng (8 Shortform · 10 KOC)'
    },
    {
      src: '/images/dgitalagency/6.png',
      title: isKo ? '10대 비즈니스 기대효과 종합 매트릭스' : '10 Hiệu quả Kỳ vọng Kinh doanh',
      badge: isKo ? '고객확보 · 재방문 · 매출증대 · AX 혁신' : 'Tăng doanh thu & Khách hàng'
    }
  ];

  // Selected Phases for interactive quote estimation (Default Phases)
  const [selectedPhases, setSelectedPhases] = useState({
    phase1: true,
    phase2: true,
    phase3: true,
    phase4: true
  });

  const phasePrices = {
    phase1: 8000000,
    phase2: 35000000,
    phase3: 35000000,
    phase4: 30000000
  };

  // Baekje VVIP Full Package Quotation Data (from Proposal PDF)
  const baekjeInitialItems = [
    {
      category: isKo ? '디지털 인프라 구축' : 'Xây dựng Hạ tầng Kỹ thuật số',
      desc: isKo 
        ? '프리미엄 반응형 공식 랜딩페이지/웹사이트 구축 (SEO 최적화 포함) + AI 경영지원(고객/자원관리) 통제실 셋팅 + 베스트클럽(가맹점 페이지, 이벤트, 보너스티켓, 바우처 등) 연동'
        : 'Trang đích / Website chính thức chuẩn SEO + Thiết lập phòng điều hành AI ERP + Tích hợp BestClub (Trang đại lý, Sự kiện, Vé Bonus, Voucher)',
      price: 25000000,
      badge: 'Infra'
    },
    {
      category: isKo ? 'Zalo OA & CRM 셋팅' : 'Thiết lập Zalo OA & CRM',
      desc: isKo 
        ? 'Zalo OA 비즈니스 계정 공식 인증 및 Mini App 연동 + 테이블 맞춤형 QR 온보딩 시스템 및 프로모션 파라미터 설계 + CRM 연동 DB 환경 구축 및 멤버십 등급(Tier) 로직'
        : 'Xác thực Zalo OA Doanh nghiệp & Mini App + QR bàn theo bàn & Tham số khuyến mãi + Cơ sở dữ liệu CRM & Phân cấp thành viên (Tier)',
      price: 20000000,
      badge: 'CRM'
    },
    {
      category: isKo ? 'AI 예약 & 자동화 엔진' : 'Động cơ AI Đặt phòng & Tự động hóa',
      desc: isKo 
        ? '24/7 AI 다국어(베·한·영) 스마트 예약 및 상담 인터뷰 챗봇 개발 + 3단계 락인 펀널(30일 미방문 트리거, 생일/기념일 알림톡 자동화) + 게이미피케이션(모바일 룰렛 / Bonus Ticket 연동)'
        : 'Chatbot AI 24/7 đa ngôn ngữ (Vi-Hàn-Anh) tư vấn & phỏng vấn đặt phòng + Phễu giữ chân 3 bước (30 ngày, sinh nhật, kỷ niệm) + Gamification (Vòng quay may mắn / Vé Bonus)',
      price: 15000000,
      badge: 'AI Engine'
    },
    {
      category: isKo ? '현장 연계 프로그램 구축' : 'Xây dựng Chương trình Thực địa',
      desc: isKo 
        ? '위스키 오크통 킵핑(Barrel Keeping) 관리 시스템 구축 + 현장 직원용 오프라인 관리자 모드 및 실시간 VIP 오더 시트 연동'
        : 'Hệ thống quản lý gửi thùng gỗ sồi Whisky (Barrel Keeping) + Chế độ quản trị viên thực địa cho nhân viên & Phiếu VIP Order thời gian thực',
      price: 10000000,
      badge: 'VIP Program'
    }
  ];

  const [selectedBaekjeItems, setSelectedBaekjeItems] = useState([true, true, true, true]);

  const calculateBaekjeTotal = () => {
    return baekjeInitialItems.reduce((acc, item, idx) => {
      return selectedBaekjeItems[idx] ? acc + item.price : acc;
    }, 0);
  };

  const calculateTotalVND = () => {
    if (quoteMode === 'baekje-vvip') {
      return calculateBaekjeTotal();
    }
    let total = 0;
    if (selectedPhases.phase1) total += phasePrices.phase1;
    if (selectedPhases.phase2) total += phasePrices.phase2;
    if (selectedPhases.phase3) total += phasePrices.phase3;
    if (selectedPhases.phase4) total += phasePrices.phase4;
    return total;
  };

  // AX (AI Transformation) Pillars
  const axPillars = [
    {
      icon: Cpu,
      tag: "AX Core 01",
      title: isKo ? "Agentic Environment (에이전틱 AI 환경)" : "Môi trường Agentic AI",
      desc: isKo 
        ? "단순 프롬프트 반응을 넘어, 비즈니스 목표를 자율 수행하는 지능형 AI 에이전틱(Agentic) 환경을 구축합니다." 
        : "Xây dựng môi trường Agentic AI thông minh tự động thực thi mục tiêu kinh doanh vượt xa AI phản hồi thông thường.",
      color: "from-cyan-500/20 to-blue-500/10 border-cyan-500/30 text-cyan-400"
    },
    {
      icon: Workflow,
      tag: "AX Core 02",
      title: isKo ? "Hyper-Personalized CRM (초개인화 데이터 지능)" : "CRM Siêu cá nhân hóa",
      desc: isKo 
        ? "고객의 방문 이력, 선호도, 구매 패턴 데이터를 AI 머신러닝으로 실시간 분석하여 1:1 맞춤 프로모션을 자동 매칭합니다." 
        : "Phân tích thời gian thực dữ liệu hành vi khách hàng bằng AI Machine Learning để khớp khuyến mãi 1:1 tự động.",
      color: "from-gold-500/20 to-amber-500/10 border-gold-500/30 text-gold-400"
    },
    {
      icon: Bot,
      tag: "AX Core 03",
      title: isKo ? "Enterprise Integration (엔터프라이즈 AX 통합)" : "Tích hợp Enterprise AX",
      desc: isKo 
        ? "웹, 모바일 PWA, CRM, 결제 시스템 및 외부 기상/소셜 API를 유기적으로 연결하여 무중단 자동화 파이프라인을 완성합니다." 
        : "Liên kết liền mạch Web, Mobile PWA, CRM, Thanh toán & API bên ngoài tạo nên đường ống tự động hóa liên tục.",
      color: "from-purple-500/20 to-indigo-500/10 border-purple-500/30 text-purple-300"
    },
    {
      icon: BarChart3,
      tag: "AX Core 04",
      title: isKo ? "AI PMO & Operations (AI 기반 통합 관제)" : "Quản trị & Vận hành AI PMO",
      desc: isKo 
        ? "시각화된 통합 대시보드와 월 20만~100만 회 노출 타깃 광고, 숏폼/CF 영상 제작 지원으로 지속적인 비즈니스 성장을 케어합니다." 
        : "Dashboard quản trị trực quan, quảng cáo mục tiêu 200k-1 triệu lượt & hỗ trợ sản xuất video thúc đẩy tăng trưởng.",
      color: "from-emerald-500/20 to-teal-500/10 border-emerald-500/30 text-emeraldGreen-400"
    }
  ];

  // Industry-Tailored AX Offerings
  const axOfferings = [
    {
      icon: Utensils,
      title: isKo ? "F&B / 하이엔드 다이닝 AX 솔루션" : "Giải pháp AX Ngành F&B / Nhà hàng Cao cấp",
      subtitle: isKo ? "VVIP 고객 유치 & 데이터 플라이휠 (백제갈비 적용 모델)" : "Thu hút VVIP & Vòng đà Tăng trưởng Dữ liệu",
      desc: isKo ? "테이블 QR 온보딩, Zalo OA CRM, 30일 이탈 방지 AI 트리거, 위스키 오크통 킵핑 및 비즈니스 접대 맞춤 예약 인터뷰 시스템 완비." : "QR bàn, Zalo OA CRM, kích hoạt AI chống rời bỏ 30 ngày, gửi thùng sồi Whisky & đặt phòng tiếp khách B2B.",
      tags: ["백제갈비 실행사례", "Zalo OA CRM", "위스키 오크통 킵핑", "테이블 QR 온보딩"]
    },
    {
      icon: ShoppingBag,
      title: isKo ? "유통 & 리테일 AX 솔루션" : "Giải pháp AX Bán lẻ & Thương mại",
      subtitle: isKo ? "AI 구매 패턴 분석 & 등급제 바코드" : "Phân tích AI & Thẻ mã vạch thành viên",
      desc: isKo ? "고객별 결제 적립 바코드, AI 기반 선호 상품 추천, 이탈 위험 고객 세그먼트 자동 분류 엔진 제공." : "Mã vạch tích điểm, gợi ý sản phẩm theo AI & công cụ tự động phân loại khách hàng nguy cơ rời bỏ.",
      tags: ["AI 세그먼트 분류", "모바일 바코드", "친구 추천 포인트"]
    },
    {
      icon: Briefcase,
      title: isKo ? "오피스 & B2B 서비스 AX" : "Giải pháp AX Văn phòng & B2B",
      subtitle: isKo ? "SaaS AI CRM & 자동화 마케팅 파이프라인" : "SaaS AI CRM & Pipeline tự động",
      desc: isKo ? "B2B 파트너 자원 관리, 실시간 견적 산출 시스템, AI 대시보드를 통한 데이터 시각화 및 리드 관리." : "Quản lý đối tác B2B, hệ thống tính báo giá tự động & trực quan hóa dữ liệu qua AI Dashboard.",
      tags: ["SaaS AI CRM", "자동 견적 엔진", "실시간 대시보드"]
    },
    {
      icon: Building2,
      title: isKo ? "스마트 빌딩 & 인프라 AX" : "Giải pháp AX Tòa nhà Thông minh",
      subtitle: isKo ? "BEST WINNER 인프라 연동 관제" : "Tích hợp Quản lý Hạ tầng BEST WINNER",
      desc: isKo ? "승강기, AI 주차, 소방 자재, K1 방수 등 그룹 인프라 요소와 통합 연동되는 디지털 관제 및 마케팅 엔진." : "Động cơ quản lý & marketing kỹ thuật số tích hợp thang máy, bãi đỗ xe AI, PCCC & chống thấm.",
      tags: ["AI 주차 연동", "스마트빌딩 관제", (__koLang ? "원스톱 시너지" : "One-Stop Synergy")]
    }
  ];

  const phases = [
    {
      id: 'phase1',
      num: 'Phase 1',
      title: isKo ? '기획 & 기본 웹 구축' : 'Quy hoạch & Xây dựng Web Cơ bản',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 8000000,
      scope: isKo ? '반응형 웹 플랫폼 및 기본 인프라 구축' : 'Nền tảng Web đáp ứng & Hạ tầng cơ bản',
      features: [
        isKo ? 'UX/UI 전문 기획 및 커스텀 감성 디자인' : 'Thiết kế UX/UI chuyên nghiệp & giao diện tùy chỉnh',
        isKo ? '모바일 최적화 & PWA 기기 호환성' : 'Tối ưu hóa thiết bị di động & tương thích PWA',
        isKo ? '메뉴 DB 구축 (사진 / 가격 / 추천 카테고리)' : 'Xây dựng Cơ sở dữ liệu Thực đơn (Ảnh / Giá / Danh mục)',
        isKo ? 'HOME / MENU / 매장안내 / REVIEW 기본 페이지' : 'Cấu hình trang HOME / MENU / Giới thiệu / REVIEW',
        isKo ? '매장 기본 정보 및 정체성 브랜드 콘텐츠 구성' : 'Cấu hình thông tin cơ bản & nhận diện thương hiệu'
      ],
      icon: Layers,
      color: 'from-blue-500 to-cyan-500',
      badgeColor: 'bg-blue-500/20 text-cyan-400 border-blue-500/30'
    },
    {
      id: 'phase2',
      num: 'Phase 2',
      title: isKo ? 'CRM & 회원제 고도화' : 'Nâng cấp CRM & Hệ thống Thẻ hội viên',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 35000000,
      scope: isKo ? '멤버십 및 고객 데이터 파이프라인 구축' : 'Đường ống Dữ liệu Khách hàng & Thẻ thành viên',
      features: [
        isKo ? '매장 오픈 알림 & 회원가입 / 소셜 로그인 연동 (Kakao/Google)' : 'Thông báo mở cửa & Đăng ký / Đăng nhập mạng xã hội',
        isKo ? '전화번호 인증 & 기본 쿠폰 자동 발급 시스템' : 'Xác thực SĐT & Phát hành phiếu giảm giá tự động',
        isKo ? '회원 레벨/등급 로직 & 현장 결제 적립 연동' : 'Logic cấp bậc hội viên & Tích điểm thanh toán tại chỗ',
        isKo ? '모바일 바코드 / 포인트 적립 & 고객 프로필 카드' : 'Mã vạch di động / Tích điểm & Thẻ hồ sơ khách hàng',
        isKo ? '방문 횟수 / 선호 메뉴 / 최근 방문일 DB 축적' : 'Tích lũy DB Lượt ghé / Món ăn yêu thích / Lần ghé gần nhất',
        isKo ? '친구 초대 추천인 링크 & 리뷰 보상 포인트' : 'Link giới thiệu bạn bè & Điểm thưởng đánh giá',
        isKo ? '하노이 매거진 콘텐츠 게시판 연동 파이프라인' : 'Liên kết bảng tin bài viết Tạp chí Hà Nội'
      ],
      icon: Database,
      color: 'from-amber-500 to-gold-500',
      badgeColor: 'bg-amber-500/20 text-gold-400 border-amber-500/30'
    },
    {
      id: 'phase3',
      num: 'Phase 3',
      title: isKo ? '자동화 마케팅 & API 연동' : 'Marketing Tự động hóa & Tích hợp API',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 35000000,
      scope: isKo ? '조건별 자동 CRM 및 외부 API 연동' : 'CRM Tự động theo điều kiện & Tích hợp API bên ngoài',
      features: [
        isKo ? '조건별 쿠폰 자동 발송 (생일 / 30일 미방문 웰컴백)' : 'Tự động gửi Voucher (Sinh nhật / 30 ngày chưa quay lại)',
        isKo ? '날씨 API 연동 (우전/폭염 등 날씨 조건별 맞춤 쿠폰)' : 'Tích hợp API Thời tiết (Voucher ngày mưa / nắng nóng)',
        isKo ? '파전/막걸리 등 기상 상황별 타겟 프로모션' : 'Khuyến mãi mục tiêu theo tình hình thời tiết',
        isKo ? '요일별 자동 쿠폰 & Google 리뷰 연동' : 'Phát hành Voucher tự động theo ngày & Đánh giá Google',
        isKo ? '잭팟 이벤트 기능 연동 & Facebook 광고 유입 추적' : 'Tính năng Jackpot sự kiện & Theo dõi quảng cáo Facebook'
      ],
      icon: Zap,
      color: 'from-emerald-500 to-teal-500',
      badgeColor: 'bg-emerald-500/20 text-emeraldGreen-400 border-emerald-500/30'
    },
    {
      id: 'phase4',
      num: 'Phase 4',
      title: isKo ? 'AI & AX (AI Transformation) 고도화' : 'Chuyển đổi AI & AX (Tùy chọn)',
      period: isKo ? '1주' : '1 Tuần',
      priceVND: 30000000,
      scope: isKo ? 'AX 에이전틱 AI 엔진 & 고객 세그먼트 자동 분류' : 'Động cơ Agentic AI & Phân loại tự động phân khúc',
      features: [
        isKo ? '주문 / 방문 이력 AI 머신러닝 분석 & AX 모델 적용' : 'Phân tích lịch sử gọi món / ghé thăm bằng AI Machine Learning & Mô hình AX',
        isKo ? 'Agentic AI 기반 맞춤 메뉴 추천 & 초개인화 매칭' : 'Gợi ý món ăn siêu cá nhân hóa dựa trên Agentic AI',
        isKo ? '고객 세그먼트 자동 분류 엔진 (VIP / 단골 / 이탈위험)' : 'Phân loại tự động phân khúc khách hàng (VIP / Thường xuyên / Nguy cơ)',
        isKo ? '관리자 통합 CRM 대시보드 & 시각화 통계 대시보드' : 'Bảng điều khiển CRM quản trị viên & Thống kê trực quan'
      ],
      icon: Bot,
      color: 'from-purple-500 to-indigo-500',
      badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30'
    }
  ];

  const businessEffects = [
    { title: isKo ? '고객 확보' : 'Thu hút Khách hàng', desc: isKo ? '신규 방문 고객의 회원 전환 및 신규고객 DB 확보 (정밀 퍼포먼스 광고 및 테이블 QR 온보딩 연계)' : 'Chuyển đổi khách mới & Tích lũy DB (QC mục tiêu & QR bàn)', icon: Users, color: 'text-cyan-400' },
    { title: isKo ? '재방문 증가' : 'Tăng Tỷ lệ Quay lại', desc: isKo ? '쿠폰, 포인트, 등급제, 30일 이탈방지 AI 알림을 통한 강력한 재방문 유도 (재방문율 25%+ 달성)' : 'Thúc đẩy quay lại qua Voucher, Điểm thưởng, Cấp bậc, AI 30 ngày', icon: Repeat, color: 'text-amber-400' },
    { title: isKo ? '매출 증가' : 'Tăng Doanh thu', desc: isKo ? '50만 VND당 전자복권 발행 등 결제 허들 완화 및 객단가 동시 상승 유도' : 'Phát hành vé số điện tử cho mỗi 500k VND tăng chi tiêu trung bình', icon: TrendingUp, color: 'text-emeraldGreen-400' },
    { title: isKo ? '고객 데이터화' : 'Dữ liệu hóa Khách hàng', desc: isKo ? '방문횟수, 선호메뉴, 접대 주류, 기념일 등 고소득 고객 행동 데이터 축적' : 'Tích lũy dữ liệu hành vi: Lượt ghé, Món thích, Rượu, Kỷ niệm', icon: Database, color: 'text-blue-400' },
    { title: isKo ? '자동 마케팅' : 'Marketing Tự động', desc: isKo ? '생일·법인설립일 D-7 웰컴 와인 발송 및 30일 미방문 VIP 컴백 쿠폰 자동화' : 'Tự động gửi rượu vang sinh nhật D-7 & Voucher trở lại VIP 30 ngày', icon: Zap, color: 'text-purple-400' },
    { title: isKo ? '바이럴 & KOC' : 'Marketing Lan tỏa & KOC', desc: isKo ? '4K ASMR 숏폼 & 비즈니스 AI KOC 옴니채널 바이럴로 격식 있는 비즈니스 경험 확산' : 'Video ASMR 4K & KOC AI lan tỏa trải nghiệm tiếp khách đẳng cấp', icon: Share2, color: 'text-rose-400' },
    { title: isKo ? '브랜드 권위 확립' : 'Củng cố Uy tín Thương hiệu', desc: isKo ? 'BestClub KCA 미식 칼럼 기사형 광고 & 구글 디스커버 지속 노출' : 'Bài viết chuyên sâu KCA BestClub & hiển thị Google Discover', icon: Award, color: 'text-gold-400' },
    { title: isKo ? 'AX 지능형 혁신' : 'Ứng dụng AX & AI', desc: isKo ? '24/7 AI 다국어 상담 및 비즈니스 접대 맞춤 예약 인터뷰(VIP 오더 시트) 자동화' : 'AI đa ngôn ngữ 24/7 & Phỏng vấn đặt phòng tiếp khách VIP tự động', icon: Cpu, color: 'text-cyan-300' },
    { title: isKo ? 'VVIP 락인' : 'Khóa chân Khách VIP', desc: isKo ? '위스키 오크통 레이저 각인 킵핑 & 상위 1% 모바일 셰프 세션 비공개 초대장' : 'Gửi thùng gỗ sồi Whisky khắc tên & Thư mời bí mật Bếp trưởng', icon: Crown, color: 'text-amber-300' },
    { title: isKo ? '운영 통합화' : 'Tối ưu Vận hành', desc: isKo ? 'Zalo OA, Facebook 메신저, 웹 채팅 단일 AI 통제실 통합 연동' : 'Tích hợp Zalo OA, Facebook Messenger, Web Chat vào 1 phòng điều hành', icon: BarChart3, color: 'text-indigo-400' }
  ];

  // Proposal KPI Data
  const kpiData = [
    {
      category: isKo ? '인지 / 유입' : 'Nhận diện / Tiếp cận',
      items: isKo ? '메타 정밀 타깃 광고 / 숏폼 영상 제작 / 웹진 칼럼 발행' : 'Quảng cáo Meta mục tiêu / Video ngắn / Bài viết Tạp chí',
      target: isKo ? '20만 회 이상 노출 / 숏폼 8회 / 칼럼 2회' : '≥ 200.000 lượt / 8 Video / 2 Bài viết',
      icon: Eye,
      color: 'text-cyan-400',
      badge: 'Acquisition'
    },
    {
      category: isKo ? '전환 / DB' : 'Chuyển đổi / DB',
      items: isKo ? '테이블 QR 온보딩 / Bonus Ticket 발급 연계' : 'QR bàn Onboarding / Phát hành Vé Bonus',
      target: isKo ? '신규 고객 DB 300명+ / 복권 100장' : '≥ 300 DB Khách mới / 100 Vé số',
      icon: QrCode,
      color: 'text-emeraldGreen-400',
      badge: 'Conversion'
    },
    {
      category: isKo ? '리텐션 / 평판' : 'Giữ chân / Uy tín',
      items: isKo ? '구글 포토리뷰 관리 / 30일 미방문 AI 락인 쿠폰 발송' : 'Quản lý Google Review ảnh / Coupon AI 30 ngày',
      target: isKo ? '구글 리뷰 20건+ / 재방문율 25% 달성' : '≥ 20 Review Google / Tỷ lệ quay lại 25%',
      icon: Star,
      color: 'text-gold-400',
      badge: 'Retention'
    },
    {
      category: isKo ? '하이엔드 특화' : 'Đặc quyền Cao cấp',
      items: isKo ? '위스키 오크통 각인 킵핑 / B2B 시크릿 호스팅 모임' : 'Thùng gỗ sồi Whisky khắc tên / Sự kiện B2B Bí mật',
      target: isKo ? '오크통 신규 킵핑 2~3건 / B2B 세션 월 1회' : '2~3 Thùng sồi mới / 1 Buổi B2B tháng',
      icon: Crown,
      color: 'text-amber-300',
      badge: 'High-End VIP'
    }
  ];

  return (
    <div className="pt-6 min-h-screen bg-navy-950 text-slate-100">
      
      {/* 1. Page Header & Hero Section with Image Showcase */}
      <div className="bg-gradient-to-b from-navy-900 via-navy-950 to-navy-950 border-b border-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-gold-400">{isVi ? 'Lĩnh vực Kinh doanh' : isKo ? '사업분야' : 'Business Areas'}</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">{isKo ? 'BEST winner Digital Agency Vn (디지털에이젼시)' : isVi ? 'BEST winner Digital Agency Vn (Đại lý kỹ thuật số)' : 'BEST winner Digital Agency Vn'}</span>
          </div>

          {/* Hero Grid: Text Content + Interactive Hero Image Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Hero Text */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
                  <Cpu className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{isKo ? '핵심 사업 부문 ⑦ · AX & 풀스택 디지털 에이전시' : isVi ? 'LĨNH VỰC KINH DOANH ⑦ · AX & DIGITAL AGENCY' : 'BUSINESS UNIT ⑦ · AX & FULL-STACK DIGITAL AGENCY'}</span>
                </span>
                <span className="inline-flex items-center space-x-1 text-xs font-black text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                  <Crown className="w-3.5 h-3.5 text-gold-400" />
                  <span>{isKo ? '백제갈비 AX 통합 실행 모델 완비' : 'Mô hình AX Cao cấp'}</span>
                </span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                Imagine <span className="gold-gradient-text">AX</span> <br className="hidden sm:inline" />
                BEST winner <span className="text-cyan-400">Digital Agency</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed break-keep">
                {isKo
                  ? '프리미엄 비즈니스 랜딩페이지 구축부터 Zalo OA & CRM 데이터 플라이휠, 24/7 AI 다국어 스마트 예약, 그리고 하노이 상위 1% VVIP 오프라인 특화 프로그램까지 — 기업의 실질적 매출 성장과 AX(AI 전환)을 주도하는 Global-Standard Full-Stack AX 파트너.'
                  : 'Từ xây dựng Landing Page doanh nghiệp cao cấp, Flywheel dữ liệu CRM Zalo OA, Đặt phòng AI đa ngôn ngữ 24/7 đến Chương trình VVIP độc quyền — Đối tác AX toàn diện dẫn dắt doanh thu thực tế.'}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href="#proposal-baekje"
                  className="px-5 py-3 rounded-xl bg-gradient-to-r from-gold-500 via-amber-500 to-gold-400 text-navy-950 text-xs font-black flex items-center space-x-2 shadow-xl shadow-gold-500/20 hover:scale-105 transition-all"
                >
                  <Crown className="w-4 h-4 fill-navy-950" />
                  <span>{isKo ? '백제갈비 AI 마케팅 실행계획 보기' : 'Kế hoạch Thực thi AX Bạch Đệ'}</span>
                </a>
                <a
                  href="#pricing-matrix"
                  className="px-5 py-3 rounded-xl bg-navy-900 border border-gold-500/40 text-gold-400 text-xs font-extrabold flex items-center space-x-2 shadow-lg hover:bg-navy-850 hover:border-gold-400 transition-all"
                >
                  <Calculator className="w-4 h-4" />
                  <span>{isKo ? '공식 상세 견적서 & 시뮬레이터' : 'Báo giá Chi tiết & Máy tính'}</span>
                </a>
                <a
                  href="#ax-framework"
                  className="px-4 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold flex items-center space-x-1.5 hover:bg-cyan-500/20 transition-all"
                >
                  <Cpu className="w-3.5 h-3.5" />
                  <span>{isKo ? 'AX 4대 기둥' : 'Trụ cột AX'}</span>
                </a>
              </div>
            </div>

            {/* Right Column: Hero Image Showcase Viewer */}
            <div className="lg:col-span-6 space-y-3">
              <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 bg-navy-900 shadow-2xl group">
                <div className="aspect-[16/10] w-full relative overflow-hidden">
                  <img 
                    src={heroImages[activeImgIndex].src} 
                    alt={heroImages[activeImgIndex].title}
                    className="w-full h-full object-contain bg-navy-950 transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent opacity-80" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                  <div className="space-y-1">
                    <span className="inline-block text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-gold-500 text-navy-950 shadow-md">
                      {heroImages[activeImgIndex].badge}
                    </span>
                    <h3 className="text-sm sm:text-base font-extrabold text-white drop-shadow-md">
                      {heroImages[activeImgIndex].title}
                    </h3>
                  </div>
                  <span className="text-xs font-bold text-slate-400 bg-navy-950/80 px-2.5 py-1 rounded-lg border border-navy-700">
                    {activeImgIndex + 1} / {heroImages.length}
                  </span>
                </div>
              </div>

              {/* Thumbnails Strip */}
              <div className="grid grid-cols-6 gap-2">
                {heroImages.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImgIndex(idx)}
                    className={`aspect-video rounded-xl overflow-hidden border transition-all ${
                      activeImgIndex === idx 
                        ? 'border-gold-500 scale-105 ring-2 ring-gold-500/30' 
                        : 'border-navy-800 opacity-60 hover:opacity-100 hover:border-slate-500'
                    }`}
                  >
                    <img src={img.src} alt={img.title} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. [NEW FEATURED SECTION] 백제갈비 AI 마케팅 통합 실행 계획서 쇼케이스 */}
      {/* ========================================================================= */}
      <section id="proposal-baekje" className="relative py-16 border-b border-navy-800 bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
        
        {/* Subtle Ambient Background Glows */}
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-gold-500/20 via-amber-500/20 to-gold-500/10 border border-gold-500/40 text-gold-400 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4 text-gold-400" />
              <span>AX & HIGH-END PERFORMANCE PROPOSAL</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {isKo ? '백제갈비 AI 마케팅 통합 실행 계획서' : 'Kế Hoạch Thực Thi Tiếp Thị AI Toàn Diện'}
            </h2>

            <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed">
              {isKo 
                ? '하노이 프리미엄 VVIP 고객 유치 및 데이터 기반 AX 자동화 성장 체계'
                : 'Thu hút Khách hàng VVIP Cao cấp tại Hà Nội & Hệ thống Tăng trưởng Tự động hóa AX Dựa trên Dữ liệu'}
            </p>

            <div className="flex flex-wrap justify-center items-center gap-2 pt-1 text-xs text-slate-400">
              <span className="bg-navy-950 px-3 py-1 rounded-md border border-navy-800 text-slate-300 font-semibold">
                {isKo ? '제안사: 베스트위너 (BEST Winner VN)' : 'Đơn vị Đề xuất: BEST Winner VN'}
              </span>
              <span className="text-slate-600">•</span>
              <span className="bg-navy-950 px-3 py-1 rounded-md border border-navy-800 text-slate-300 font-semibold">
                {isKo ? '타깃: 하노이 서부권(미딩·까우저이·하동) 3050 고소득층 & B2B 기업 임원진' : 'Mục tiêu: Giới tinh hoa Mỹ Đình - Cầu Giấy - Hà Đông & B2B'}
              </span>
            </div>
          </div>

          {/* 4 Strategy Navigation Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
            {[
              { id: 1, num: '01', title: isKo ? '홍보 및 고객 DB 확보' : 'Thu hút & Thu thập DB', icon: Users, sub: isKo ? '랜딩페이지·SEO·숏폼·QR온보딩' : 'Landing·SEO·Shortform·QR' },
              { id: 2, num: '02', title: isKo ? 'Zalo OA & CRM 자동화' : 'Zalo OA & CRM Tự động', icon: Database, sub: isKo ? '3단계 데이터 플라이휠·락인' : 'Flywheel 3 Bước·Giữ chân VIP' },
              { id: 3, num: '03', title: isKo ? '24/7 AI 다국어 스마트 예약' : 'AI Đặt phòng Đa ngôn ngữ', icon: Bot, sub: isKo ? '비즈니스 접대 VIP 오더 시트' : 'Phiếu Order VIP Tiếp khách' },
              { id: 4, num: '04', title: isKo ? 'VVIP 오프라인 특화' : 'Đặc quyền VVIP Thực địa', icon: Crown, sub: isKo ? '위스키 오크통 킵핑·시크릿 초대' : 'Gửi Thùng Sồi·Thư mời Kín' }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeProposalTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveProposalTab(tab.id)}
                  className={`p-4 rounded-2xl border text-left transition-all duration-300 relative overflow-hidden ${
                    isActive 
                      ? 'bg-gradient-to-br from-navy-850 to-navy-900 border-gold-500 shadow-xl shadow-gold-500/10 ring-1 ring-gold-500/40' 
                      : 'bg-navy-950/70 border-navy-800 hover:border-slate-700 hover:bg-navy-900/60'
                  }`}
                >
                  {isActive && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-gold-500 to-amber-400" />}
                  <div className="flex items-center justify-between mb-2">
                    <span className={`text-[11px] font-black tracking-widest ${isActive ? 'text-gold-400' : 'text-slate-500'}`}>
                      STRATEGY {tab.num}
                    </span>
                    <Icon className={`w-4 h-4 ${isActive ? 'text-gold-400' : 'text-slate-500'}`} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1">{tab.title}</h4>
                  <p className="text-[11px] text-slate-400 truncate">{tab.sub}</p>
                </button>
              );
            })}
          </div>

          {/* TAB 1 CONTENT: 홍보 및 고객 DB 확보 전략 (Customer Acquisition Engine) */}
          {activeProposalTab === 1 && (
            <div className="bg-navy-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
              
              {/* Tab Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-navy-800 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-gold-500 text-navy-950 font-black flex items-center justify-center text-sm shadow">01</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {isKo ? '홍보 및 고객 DB 확보 전략 (Customer Acquisition Engine)' : 'Chiến Lược Thu Hút & Tạo Lập Cơ Sở Dữ Liệu Khách Hàng'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {isKo 
                      ? '하노이 서부권(미딩·까우저이·하동)의 고소득층, 한인 및 로컬 기업체 임원진, HR 부서 담당자를 타깃으로 온·오프라인 접점에서 지속적인 고객 DB를 자동 확보합니다.'
                      : 'Tự động thu thập liên tục DB khách hàng thu nhập cao, ban giám đốc doanh nghiệp & HR tại Mỹ Đình, Cầu Giấy, Hà Đông.'}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-navy-950 px-4 py-2 rounded-xl border border-gold-500/20 shrink-0">
                  <Users className="w-4 h-4 text-gold-400" />
                  <span className="text-xs text-slate-300 font-bold">{isKo ? '첫 방문 DB 전환율 80% 이상 목표' : 'Tỷ lệ chuyển đổi DB ≥ 80%'}</span>
                </div>
              </div>

              {/* 8 Execution Modules Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* 1. 브랜드 웹 & SEO */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-gold-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400">
                      <Globe className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 01</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '브랜드 웹 & 구글 B2B SEO' : 'Web Thương hiệu & SEO B2B'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li><strong className="text-white">{isKo ? '프리미엄 비즈니스 다이닝 전용 랜딩' : 'Landing Page riêng biệt'}:</strong> 프라이빗 룸 VR 뷰어, 와인/위스키 페어링 셀렉션, 비즈니스 코스 안내 반응형 웹.</li>
                    <li><strong className="text-white">{isKo ? '구글 B2B 검색 최적화' : 'SEO Google B2B'}:</strong> 'Hanoi VIP Korean BBQ', 'Mỹ Đình private room dining', '하노이 비즈니스 접대 식당', '수제 평양냉면' 등 고전환 키워드 선점.</li>
                  </ul>
                </div>

                {/* 2. 테마형 숏폼 영상 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-cyan-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-cyan-500/30 text-cyan-400">
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 02 · 월 8회</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '테마형 숏폼 영상 정기 발행' : 'Sản Xuất Video Ngắn Định Kỳ'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li><strong className="text-white">{isKo ? 'ASMR & 4K 시각화' : 'ASMR & 4K'}:</strong> 최상급 원육 마블링, 숯불 직화 그릴링 사운드, 와인 및 프리미엄 전통주 페어링 집중 연출.</li>
                    <li><strong className="text-white">{isKo ? '프리미엄 큐레이션 시리즈' : 'Chuỗi Curation'}:</strong> "하노이 비밀 접대 장소 Top 3", "주차부터 룸까지 원스톱 비즈니스 동선", "진짜 수제 평양냉면" 영상 배포.</li>
                  </ul>
                </div>

                {/* 3. 정밀 타깃 퍼포먼스 광고 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-emerald-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-emerald-500/30 text-emeraldGreen-400">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 03 · 월 20만회+</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '정밀 타깃 퍼포먼스 광고' : 'Quảng Cáo Performance Mục Tiêu'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li><strong className="text-white">{isKo ? '정밀 타깃 세그먼트' : 'Phân khúc mục tiêu'}:</strong> 매장 반경 5~7km(미딩, 까우저이, 하동), 3050 고소득층, 아이폰 최신 기종, 골프·수입차·비즈니스 관심사 매칭.</li>
                    <li><strong className="text-white">{isKo ? '시즌별 집중 캠페인' : 'Chiến dịch Mùa vụ'}:</strong> 10/20 여성의 날, 11/20 스승의 날, 12월 연말 갈라, 뗏 명절 D-2주 전 기업체 HR/경영진 대상 법인 회식 집중 광고.</li>
                  </ul>
                </div>

                {/* 4. KOC & AI 인플루언서 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-purple-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-purple-500/30 text-purple-300">
                      <Bot className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 04 · 월 10회+</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? 'KOC & AI 가상 인플루언서 바이럴' : 'Viral KOC & AI Influencer'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>인스타그램, 페이스북, 스레드(Threads)에 비즈니스 인플루언서 및 미식가 페르소나의 AI KOC 콘텐츠 발행.</li>
                    <li>단순 먹방을 지양하고 '격식 있는 비즈니스 접대 경험'과 '멤버십 혜택'을 조명하는 고급 UGC 생산.</li>
                  </ul>
                </div>

                {/* 5. BestClub 연계 미디어 마케팅 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-gold-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400">
                      <Award className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 05 · 월 2회+</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? 'BestClub 연계 미디어 마케팅' : 'Truyền Thông BestClub'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>베스트클럽 KCA 웹진 내 하노이 최상위 미식 문화 칼럼 기사형 광고(Advertorial) 정기 발행.</li>
                    <li>구글 디스커버 및 포털 뉴스 검색에 지속 노출시켜 식당의 브랜드 권위(Brand Authority) 확립.</li>
                  </ul>
                </div>

                {/* 6. 테이블 QR 온보딩 & 보너스티켓 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-rose-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-rose-500/30 text-rose-400">
                      <QrCode className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 06 · 전환율 80%+</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '테이블 QR 온보딩 & 보너스티켓' : 'QR Bàn & Vé Số Bonus'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>각 테이블 전용 QR 스캔 즉시 Zalo 공식 계정(OA) 친구로 자동 등록.</li>
                    <li>현장 디저트 리워드와 즉석 당첨 전자복권(Bonus Ticket) 발급으로 첫 방문 고객 DB 전환율 80% 견인.</li>
                  </ul>
                </div>

                {/* 7. 구글 맵스 포토리뷰 & 평판 관리 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-amber-500/40 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-amber-500/30 text-amber-400">
                      <Star className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 07 · 월 20건+</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '구글 맵스 리뷰 평판 선순환' : 'Đánh Giá Google Maps & Uy Tín'}</h4>
                    </div>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside leading-relaxed">
                    <li>식사 후 Zalo 메시지로 구글 포토리뷰 작성 링크 전송 → 인증 시 매월 Bonus Ticket 추가 지급.</li>
                    <li>외국인 및 현지 고소득층 유입의 핵심 기준인 구글 평점 4.8 이상 상시 유지 관리.</li>
                  </ul>
                </div>

                {/* 8. 매출 연동 전자복권 & 프라이빗 호스팅 */}
                <div className="bg-navy-950/80 border border-navy-800 hover:border-gold-500/40 rounded-2xl p-5 space-y-3 md:col-span-2">
                  <div className="flex items-center space-x-2.5">
                    <div className="p-2 rounded-lg bg-navy-900 border border-gold-500/30 text-gold-400">
                      <Ticket className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Engine 08 · 고단가 락인</span>
                      <h4 className="text-sm font-bold text-white">{isKo ? '매출 연동 전자복권 & 프라이빗 소셜 호스팅' : 'Vé Số Doanh Thu & Private Social Hosting'}</h4>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300 pt-1">
                    <div className="bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                      <span className="font-bold text-gold-400 block mb-1">{isKo ? '매출 연동 전자복권 (월 100장 한정)' : 'Vé số theo doanh thu (100 vé/tháng)'}</span>
                      {isKo ? '결제 금액 50만 VND 단위당 전자복권 1장을 발행하여 결제 허들을 낮추고 객단가 상승을 유도.' : 'Cứ mỗi 500k VND thanh toán tặng 1 vé số kích thích tăng chi tiêu.'}
                    </div>
                    <div className="bg-navy-900/60 p-2.5 rounded-xl border border-navy-800">
                      <span className="font-bold text-cyan-400 block mb-1">{isKo ? '프라이빗 소셜 호스팅 다이닝' : 'Private Social Hosting'}</span>
                      {isKo ? '베스트클럽 플랫폼 기반 호스트-게스트(엄선된 VIP)-스폰서(브랜드사) 3자 연결 이벤트. 스폰서 전액 비용 부담 구조로 하이엔드 VVIP DB 흡수.' : 'Kết nối 3 bên Host - Khách VIP - Nhà tài trợ. Nhà tài trợ chi trả 100% chi phí.'}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 2 CONTENT: Zalo OA & AX 자동화 고객관리 시스템 (CRM) */}
          {activeProposalTab === 2 && (
            <div className="bg-navy-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
              
              {/* Tab Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-navy-800 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-gold-500 text-navy-950 font-black flex items-center justify-center text-sm shadow">02</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {isKo ? 'Zalo OA & AX 자동화 고객관리 시스템 (CRM)' : 'Hệ Thống CRM & Tự Động Hóa Zalo OA AX'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {isKo 
                      ? '일회성 방문 고객을 30일 이내에 다시 부르고, 단골을 VVIP로 묶어두는 3단계 데이터 플라이휠을 가동합니다.'
                      : 'Kích hoạt Vòng đà Dữ liệu 3 bước: Kéo khách trở lại trong 30 ngày & Khóa chân khách quen thành VVIP.'}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-navy-950 px-4 py-2 rounded-xl border border-gold-500/20 shrink-0">
                  <Repeat className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-slate-300 font-bold">{isKo ? '3단계 데이터 플라이휠 가동' : 'Data Flywheel 3 Bước'}</span>
                </div>
              </div>

              {/* Interactive 3-Step Flywheel Diagram */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  {
                    step: 1,
                    tag: isKo ? '1단계: 유입 (Acquisition)' : 'Bước 1: Tiếp cận',
                    title: isKo ? '테이블 QR 온보딩 & DB 확보' : 'Onboarding QR Bàn & Thu DB',
                    desc: isKo ? '테이블 QR 스캔 즉시 Zalo OA 공식 친구 등록, 디저트 제공 및 Bonus Ticket 발급 연동으로 첫 방문 고객 80% DB화' : 'Quét QR bàn thành bạn Zalo OA, nhận tráng miệng & vé số biến 80% khách thành DB.',
                    icon: QrCode,
                    color: 'border-cyan-500/40 bg-cyan-500/10 text-cyan-400'
                  },
                  {
                    step: 2,
                    tag: isKo ? '2단계: 너처링 (Nurturing)' : 'Bước 2: Nuôi dưỡng',
                    title: isKo ? '방문 주기 · 생일 · 기념일 트리거' : 'Trigger Chu kỳ · Sinh nhật · Lễ',
                    desc: isKo ? '생일 및 법인설립일 7일 전 와인 쿠폰 발송, 30일 미방문 시 AI 매니저가 Bonus Ticket 2배 교환권을 개인화 메시지로 자동 발송' : 'Gửi coupon rượu vang trước 7 ngày, sau 30 ngày AI tự gửi voucher x2 vé số.',
                    icon: Zap,
                    color: 'border-gold-500/40 bg-gold-500/10 text-gold-400'
                  },
                  {
                    step: 3,
                    tag: isKo ? '3단계: 락인 (VIP Lock-in)' : 'Bước 3: Khóa chân VIP',
                    title: isKo ? '오크통 킵핑 & 멤버십 특권' : 'Gửi Thùng Sồi & Đặc quyền VIP',
                    desc: isKo ? '실버/골드/블랙 3단계 등급제, 상위 티어 프라이빗 룸 우선 배정, 전용 와인 셀러 무료 보관, 10L 전용 위스키 오크통 레이저 각인 킵핑' : 'Cấp bậc Silver/Gold/Black, phòng ưu tiên, tủ rượu riêng, thùng gỗ sồi khắc tên.',
                    icon: Crown,
                    color: 'border-amber-500/40 bg-amber-500/10 text-amber-300'
                  }
                ].map((st) => {
                  const Icon = st.icon;
                  return (
                    <div key={st.step} className={`p-5 rounded-2xl border ${st.color} space-y-3 relative`}>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full bg-navy-950 border border-slate-700">
                          {st.tag}
                        </span>
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white">{st.title}</h4>
                      <p className="text-xs text-slate-300 leading-relaxed">{st.desc}</p>
                    </div>
                  );
                })}
              </div>

              {/* Detailed Breakdown: Nurturing vs Lock-in */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                
                {/* Left Card: 1단계 너처링 & AI 자동 마케팅 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-gold-400" />
                    <h4 className="text-base font-bold text-white">{isKo ? '너처링 & AI 자동 마케팅 세부 로직' : 'Logic Tiếp thị Tự động & Nuôi dưỡng'}</h4>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <strong className="text-gold-400 block">{isKo ? '기념일 자동 트리거 (D-7)' : 'Trigger Kỷ niệm (D-7)'}</strong>
                      <p>{isKo ? '고객 생일, 법인 설립일 7일 전 축하 메시지와 함께 \'프라이빗 룸 웰컴 와인 1병 쿠폰\' 자동 발송.' : 'Tự động gửi lời chúc & coupon 1 chai rượu vang trước 7 ngày sinh nhật / ngày thành lập cty.'}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <strong className="text-cyan-400 block">{isKo ? '30일 미방문 이탈 방지 AI 매니저' : 'AI Chống Rời Bỏ 30 Ngày'}</strong>
                      <p>{isKo ? '마지막 결제일로부터 30일 경과 시, AI가 고객 이름으로 \'VIP 컴백 전용 Bonus Ticket 2배 교환권\'을 개인화 메시지로 자동 발송.' : 'Sau 30 ngày chưa ghé, AI gửi tin nhắn đích danh tặng voucher x2 vé số quay lại.'}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <strong className="text-emeraldGreen-400 block">{isKo ? '사후 피드백 자동 수집 (식사 후 2시간)' : 'Thu Thập Đánh Giá Sau 2 Giờ'}</strong>
                      <p>{isKo ? '식사 후 2시간 내 식사 만족도 설문 자동 발송 (불만 접수 시 즉각 매니저 호출 알림 연동).' : 'Tự gửi khảo sát sau bữa ăn 2 tiếng (nếu có phàn nàn sẽ báo động ngay cho Quản lý).'}</p>
                    </div>
                  </div>
                </div>

                {/* Right Card: 2단계 락인 & VVIP 등급제 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-4">
                  <div className="flex items-center space-x-2">
                    <Crown className="w-5 h-5 text-amber-300" />
                    <h4 className="text-base font-bold text-white">{isKo ? 'VVIP 락인 & 3-Tier 멤버십 시스템' : 'Khóa Chân VVIP & Hệ Thống 3 Cấp Bậc'}</h4>
                  </div>
                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <div className="flex items-center justify-between">
                        <strong className="text-amber-300">{isKo ? '실버 / 골드 / 블랙(VVIP) 3단계 등급제' : 'Hệ thống Silver / Gold / Black (VVIP)'}</strong>
                        <span className="text-[10px] text-slate-400 bg-navy-950 px-2 py-0.5 rounded border border-navy-700">누적 결제액 연동</span>
                      </div>
                      <p>{isKo ? '상위 티어(블랙 VVIP) 전용 독점 혜택: 주말·성수기 프라이빗 룸 최우선 배정 권한, 개인 전용 와인 셀러 무료 보관 및 상시 콜키지 프리.' : 'Đặc quyền Black VVIP: Ưu tiên đặt phòng cuối tuần/lễ tết, gửi tủ rượu riêng & miễn phí khui rượu.'}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <strong className="text-purple-300 block">{isKo ? '셰프 비메뉴(Off-menu) 특선 요리 무료 서빙' : 'Phục Vụ Món Đặc Quyền Ngoài Menu'}</strong>
                      <p>{isKo ? '마스터 셰프 당일 엄선 식재료를 활용한 비메뉴 특선 요리를 VVIP 테이블에 무료 제공하여 특별한 감동 선사.' : 'Bếp trưởng đích thân chuẩn bị món đặc sắc ngoài menu từ nguyên liệu tuyển chọn trong ngày.'}</p>
                    </div>
                    <div className="p-3 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
                      <strong className="text-rose-400 block">{isKo ? '영수증 게이미피케이션 & 평판 관리' : 'Gamification Hóa Đơn & Quản Lý Đánh Giá'}</strong>
                      <p>{isKo ? '결제 영수증 연동 모바일 룰렛/잭팟을 통해 다음 방문 마일리지 적립 + 구글 맵스 및 페이스북 리뷰 실시간 모니터링.' : 'Quét hóa đơn quay thưởng tích lũy điểm dùng cho lần tới + Giám sát đánh giá thời gian thực.'}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* TAB 3 CONTENT: 24/7 AI 기반 다국어 스마트 예약·상담 시스템 */}
          {activeProposalTab === 3 && (
            <div className="bg-navy-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
              
              {/* Tab Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-navy-800 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-gold-500 text-navy-950 font-black flex items-center justify-center text-sm shadow">03</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {isKo ? '24/7 AI 기반 다국어 스마트 예약·상담 시스템' : 'Hệ Thống Đặt Bàn & Tư Vấn Thông Minh AI Đa Ngôn Ngữ 24/7'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {isKo 
                      ? '전담 매니저 역할을 하는 AI 챗봇이 예약 누수를 원천 차단하고 접대 목적에 최적화된 맞춤형 룸 배정과 VIP 오더 시트를 전송합니다.'
                      : 'Chatbot AI đóng vai trò quản lý chuyên trách, ngăn chặn bỏ lỡ đặt bàn & gửi phiếu Order VIP tối ưu theo mục đích tiếp khách.'}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-navy-950 px-4 py-2 rounded-xl border border-gold-500/20 shrink-0">
                  <Bot className="w-4 h-4 text-purple-300" />
                  <span className="text-xs text-slate-300 font-bold">{isKo ? '3개 국어(한·베·영) 실시간 지원' : '3 Ngôn ngữ: Hàn · Việt · Anh'}</span>
                </div>
              </div>

              {/* 3 Core Blocks */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. 24/7 옴니채널 자동 응대 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{isKo ? '24시간 무중단 옴니채널 통합' : 'Tích Hợp Omni-channel 24/7'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? 'Zalo OA, 페이스북 메신저, 웹사이트 실시간 채팅창을 단일 AI 통제실로 통합 연동하여 고객이 어느 채널로 문의하든 실시간 즉각 대응합니다.'
                      : 'Tích hợp Zalo OA, Facebook Messenger, Chat Web vào phòng điều hành AI duy nhất, phản hồi tức thì mọi lúc mọi nơi.'}
                  </p>
                </div>

                {/* 2. 한·베·영 실시간 다국어 지원 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{isKo ? '한·베·영 다국어 실시간 통번역' : 'Dịch Thuật Đa Ngôn Ngữ Thời Gian Thực'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? '현지 고소득층(베트남어), 한국 주재원/출장자(한국어), 다국적 기업 임원진(영어) 문의를 자연스러운 AI 번역 엔진으로 오차 없이 실시간 응대합니다.'
                      : 'Phục vụ mượt mà khách bản địa (tiếng Việt), chuyên gia Hàn Quốc (tiếng Hàn) & khách quốc tế (tiếng Anh).'}
                  </p>
                </div>

                {/* 3. 스마트 프로파일링 & VIP 오더 시트 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-navy-800 space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emeraldGreen-400 flex items-center justify-center">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{isKo ? 'Smart Profiling & VIP 오더 시트' : 'Smart Profiling & Phiếu VIP Order'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? '인원수, 접대 성격(법인 임원, 친목, 가족), 선호 주류(와인, 전통주, 위스키)를 단계적으로 인터뷰하여 현장 매니저에게 즉시 VIP 오더 시트를 전송합니다.'
                      : 'Phỏng vấn thông minh: Số khách, tính chất bữa tiệc, loại rượu ưa thích và gửi Phiếu VIP Order cho quản lý.'}
                  </p>
                </div>

              </div>

              {/* VIP Order Sheet Live Simulation Box */}
              <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-gold-500/40 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between border-b border-navy-800 pb-3">
                  <div className="flex items-center space-x-2">
                    <FileText className="w-5 h-5 text-gold-400" />
                    <span className="text-sm font-black text-white uppercase tracking-wider">{isKo ? '현장 홀 매니저 실시간 수신 VIP 오더 시트 (시뮬레이션)' : 'Phiếu VIP Order Thời Gian Thực'}</span>
                  </div>
                  <span className="text-[10px] text-emeraldGreen-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-bold">
                    ● Real-Time AI Auto-Dispatched
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[10px]">{isKo ? '배정 룸 & 인원' : 'Phòng & Số lượng'}</span>
                    <span className="text-white font-black text-sm">Room 03 (VVIP 6인)</span>
                  </div>
                  <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[10px]">{isKo ? '접대 성격' : 'Mục đích'}</span>
                    <span className="text-gold-400 font-bold text-sm">{isKo ? '한·베 법인 임원 접대' : 'Tiếp đối tác Ban Giám Đốc'}</span>
                  </div>
                  <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[10px]">{isKo ? '주류 & 사전 세팅' : 'Chuẩn bị Rượu'}</span>
                    <span className="text-cyan-400 font-bold text-sm">{isKo ? '위스키 오크통 디캔터 22℃' : 'Thùng Whisky Decanter 22℃'}</span>
                  </div>
                  <div className="bg-navy-950 p-3 rounded-xl border border-navy-800">
                    <span className="text-slate-400 block text-[10px]">{isKo ? '추천 코스' : 'Set Menu đề xuất'}</span>
                    <span className="text-white font-bold text-sm">{isKo ? '마스터 셰프 VVIP 코스' : 'Set Master Chef VVIP'}</span>
                  </div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 4 CONTENT: 하이엔드 VVIP 오프라인 특화 프로그램 (사교 다이닝 클럽) */}
          {activeProposalTab === 4 && (
            <div className="bg-navy-900/90 border border-gold-500/30 rounded-3xl p-6 sm:p-8 space-y-8 animate-fadeIn">
              
              {/* Tab Header Banner */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-navy-800 pb-6">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="w-8 h-8 rounded-xl bg-gold-500 text-navy-950 font-black flex items-center justify-center text-sm shadow">04</span>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {isKo ? '하이엔드 VVIP 오프라인 특화 프로그램 (사교 다이닝 클럽)' : 'Chương Trình Đặc Quyền Ngoại Tuyến VVIP (Dining Club Xã Hội)'}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300">
                    {isKo 
                      ? '단순한 외식 공간을 넘어 하노이 리딩 그룹의 \'사교 다이닝 클럽\'으로 공간 가치를 극대화합니다.'
                      : 'Vượt qua không gian ăn uống thông thường, tối đa hóa giá trị thành \'Câu Lạc Bộ Ẩm Thực Xã Hội\' cho giới thượng lưu.'}
                  </p>
                </div>
                <div className="flex items-center space-x-2 bg-navy-950 px-4 py-2 rounded-xl border border-gold-500/20 shrink-0">
                  <Wine className="w-4 h-4 text-amber-300" />
                  <span className="text-xs text-slate-300 font-bold">{isKo ? '대체 불가능한 자부심 부여' : 'Đẳng Cấp Độc Quyền'}</span>
                </div>
              </div>

              {/* 3 Unique High-End Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* 1. 상위 1% 시크릿 VIP 초대장 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-gold-500/30 space-y-3 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gold-500/5 rounded-full blur-xl group-hover:scale-150 transition-all" />
                  <div className="w-10 h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center">
                    <Gift className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-gold-400 font-black uppercase tracking-widest block">EXCLUSIVE 01</span>
                  <h4 className="text-base font-bold text-white">{isKo ? '상위 1% 시크릿 VIP 모바일 셰프 초대장' : 'Thư Mời Bí Mật Bếp Trưởng Cho Top 1%'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? 'Zalo CRM 누적 데이터 기반 상위 1% 단골 고객만을 선별하여, 일반 메뉴판에 없는 자연산 송이, 특수부위 미식 코스를 선보이는 \'단 하루의 마스터 셰프 세션\' 비공개 초대장을 발송하여 대체 불가능한 자부심을 부여합니다.'
                      : 'Gửi thư mời bí mật thưởng thức Nấm Tùng nhung tự nhiên & phần thịt đặc biệt không có trong menu dành riêng cho top 1% khách quen.'}
                  </p>
                </div>

                {/* 2. 위스키 오크통 킵핑 서비스 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-amber-500/30 space-y-3 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-amber-500/5 rounded-full blur-xl group-hover:scale-150 transition-all" />
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 flex items-center justify-center">
                    <Wine className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-amber-300 font-black uppercase tracking-widest block">EXCLUSIVE 02</span>
                  <h4 className="text-base font-bold text-white">{isKo ? 'VVIP 하우스 위스키 오크통 킵핑 (Barrel Keeping)' : 'Dịch Vụ Gửi Thùng Sồi Whisky VVIP'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? 'VVIP 고객의 영문 이름과 날짜가 레이저 각인된 10L 전용 위스키 오크통을 매장 오크 베럴룸에 보관합니다. 매장 방문 시에만 전용 크리스탈 디캔터로 서빙(외부 반출 불가)하여 비즈니스 접대 시 백제갈비 독점 방문을 확고히 유도합니다.'
                      : 'Thùng gỗ sồi 10L khắc tên & ngày của khách bằng laser. Chỉ phục vụ bằng Decanter pha lê khi đến quán, kéo khách luôn quay lại tiếp khách.'}
                  </p>
                </div>

                {/* 3. B2B 연계 하이엔드 파트너십 */}
                <div className="bg-navy-950 p-6 rounded-2xl border border-cyan-500/30 space-y-3 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-xl group-hover:scale-150 transition-all" />
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] text-cyan-400 font-black uppercase tracking-widest block">EXCLUSIVE 03</span>
                  <h4 className="text-base font-bold text-white">{isKo ? 'B2B 연계 하이엔드 소셜 파트너십' : 'Đối Tác B2B Xã Hội Cao Cấp'}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isKo 
                      ? '하노이 프리미엄 와인숍, 럭셔리카 오너스 클럽(포르쉐/마이바흐), 하이엔드 오디오, 명품 시계·보석 컬렉터 모임, 요트·골프 클럽과 상호 제휴를 맺고 모바일 와인 콜키지 프리 바우처를 상호 발급하여 최상위 고객층을 매장으로 인입합니다.'
                      : 'Liên kết CLB Porsche/Maybach, âm thanh cao cấp, đồng hồ kim hoàn, du thuyền & golf phát hành voucher khui rượu miễn phí.'}
                  </p>
                </div>

              </div>
            </div>
          )}

          {/* ========================================================================= */}
          {/* 3. 월간 실행 및 리포팅 KPI 가이드 (공식 KPI 카드) */}
          {/* ========================================================================= */}
          <div className="space-y-6 pt-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-gold-400 uppercase tracking-widest">{isKo ? '실행 목표 & 정량 지표' : 'MỤC TIÊU ĐỊNH LƯỢNG'}</span>
                <h3 className="text-2xl font-black text-white">
                  {isKo ? '월간 실행 및 리포팅 KPI 가이드' : 'Chỉ Số Đo Lường Hiệu Suất KPI Hàng Tháng'}
                </h3>
              </div>
              <span className="text-xs text-slate-400 bg-navy-950 px-3.5 py-1.5 rounded-full border border-navy-800">
                {isKo ? '월간 정기 분석 리포트 제공' : 'Báo cáo Định kỳ Hàng tháng'}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {kpiData.map((kpi, idx) => {
                const Icon = kpi.icon;
                return (
                  <div key={idx} className="bg-navy-900/80 rounded-2xl p-5 border border-navy-800 hover:border-gold-500/40 transition-all space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 bg-navy-950 px-2 py-0.5 rounded border border-navy-700">
                        {kpi.badge}
                      </span>
                      <Icon className={`w-4 h-4 ${kpi.color}`} />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-400">{kpi.category}</h4>
                      <p className="text-xs text-white font-medium mt-1 leading-snug">{kpi.items}</p>
                    </div>
                    <div className="pt-2 border-t border-navy-800">
                      <span className="text-[10px] text-slate-400 block">{isKo ? '월간 목표치 (KPI)' : 'Chỉ tiêu KPI Tháng'}</span>
                      <span className={`text-base font-black ${kpi.color} block mt-0.5`}>
                        {kpi.target}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. AX Framework 4 Core Pillars */}
      {/* ========================================================================= */}
      <section id="ax-framework" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>AI TRANSFORMATION ARCHITECTURE</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isKo ? '기업의 성장을 완성하는 4대 AX 코어 프레임워크' : '4 Trụ Cột Kiến Trúc Chuyển Đổi AX'}
          </h2>
          <p className="text-sm text-slate-400">
            {isKo 
              ? '단순한 웹 제작을 넘어, 에이전틱 AI 환경과 초개인화 데이터 CRM을 통합하여 지속 가능한 비즈니스 성장 엔진을 구축합니다.' 
              : 'Vượt trên thiết kế web thông thường, tích hợp Agentic AI & CRM siêu cá nhân hóa tạo động cơ tăng trưởng.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {axPillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div 
                key={idx}
                className="bg-navy-900/60 border border-navy-800 hover:border-gold-500/40 rounded-3xl p-6 space-y-4 transition-all duration-300 hover:bg-navy-900 hover:-translate-y-1 shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-2xl bg-navy-950 border border-navy-700">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <span className="text-[10px] font-bold tracking-widest text-slate-500 uppercase">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Industry Offerings */}
        <div className="space-y-6 pt-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              {isKo ? '산업별 맞춤형 AX 구축 오퍼링' : 'Giải Pháp AX Theo Từng Ngành Nghề'}
            </h3>
            <p className="text-xs text-slate-400">
              {isKo ? '각 산업군의 특성과 고객 여정에 최적화된 에이전틱 AI 솔루션을 제안합니다.' : 'Tối ưu hóa hành trình khách hàng theo từng lĩnh vực.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {axOfferings.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-navy-950/80 rounded-2xl p-6 border border-navy-800 hover:border-gold-500/40 transition-all space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 rounded-xl bg-navy-900 border border-gold-500/30 text-gold-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <span className="text-xs text-cyan-400 font-medium">{item.subtitle}</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {item.tags.map((tg, tIdx) => (
                      <span key={tIdx} className="text-[10px] bg-navy-900 text-slate-300 px-2.5 py-1 rounded-md border border-navy-700">
                        #{tg}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. 서비스 상세 견적서 & 대화형 견적 계산기 (Service Quotation) */}
      {/* ========================================================================= */}
      <section id="pricing-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-gold-500/30">
            <Calculator className="w-3.5 h-3.5 text-gold-400" />
            <span>SERVICE QUOTATION & SIMULATOR</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isKo ? '서비스 상세 견적서 및 맞춤형 견적 시뮬레이터' : 'Bảng Báo Giá Chi Tiết & Máy Tính Mô Phỏng Báo Giá'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {isKo 
              ? '백제갈비에 공식 제안된 프리미엄 VVIP 풀패키지부터 표준 4단계 개발 모듈까지 투명한 견적을 확인하세요.' 
              : 'Báo giá minh bạch từ Gói VVIP Toàn diện Bạch Đệ đến 4 giai đoạn tiêu chuẩn.'}
          </p>

          {/* Mode Switcher Buttons */}
          <div className="flex justify-center items-center gap-3 pt-3">
            <button
              onClick={() => setQuoteMode('baekje-vvip')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition-all ${
                quoteMode === 'baekje-vvip'
                  ? 'bg-gradient-to-r from-gold-500 to-amber-500 text-navy-950 shadow-lg shadow-gold-500/20 ring-2 ring-gold-400'
                  : 'bg-navy-900 text-slate-400 border border-navy-800 hover:text-white'
              }`}
            >
              <Crown className="w-4 h-4" />
              <span>{isKo ? '★ 백제갈비 프리미엄 VVIP 풀패키지 견적서' : '★ Gói VVIP Toàn diện Bạch Đệ'}</span>
            </button>
            <button
              onClick={() => setQuoteMode('custom')}
              className={`px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center space-x-2 transition-all ${
                quoteMode === 'custom'
                  ? 'bg-cyan-500 text-navy-950 shadow-lg shadow-cyan-500/20 ring-2 ring-cyan-300'
                  : 'bg-navy-900 text-slate-400 border border-navy-800 hover:text-white'
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>{isKo ? '표준 4단계 (Phase 1~4) 맞춤형 조합' : 'Tùy chọn 4 Giai đoạn Tiêu chuẩn'}</span>
            </button>
          </div>
        </div>

        {/* 1) BAEKJE VVIP FULL PACKAGE TABLE VIEW */}
        {quoteMode === 'baekje-vvip' && (
          <div className="space-y-8 animate-fadeIn">
            
            {/* Initial Build Table */}
            <div className="bg-navy-900/90 rounded-3xl border border-gold-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded-md border border-gold-500/30 inline-block mb-1">
                    PART A · ONE-TIME SETUP
                  </span>
                  <h3 className="text-xl font-black text-white">{isKo ? '가. 초기 개발 및 시스템 구축비 (1회 청구)' : 'A. Chi Phí Phát Triển & Thiết Lập Ban Đầu (Thu 1 lần)'}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">{isKo ? '공식 총 구축비 (VAT 별도)' : 'Tổng Dự Toán (Chưa VAT)'}</span>
                  <span className="text-2xl sm:text-3xl font-black gold-gradient-text">70,000,000 VND</span>
                </div>
              </div>

              {/* Table Rows with Checkboxes */}
              <div className="space-y-3">
                {baekjeInitialItems.map((item, idx) => {
                  const isChecked = selectedBaekjeItems[idx];
                  return (
                    <div 
                      key={idx}
                      onClick={() => {
                        const updated = [...selectedBaekjeItems];
                        updated[idx] = !updated[idx];
                        setSelectedBaekjeItems(updated);
                      }}
                      className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                        isChecked 
                          ? 'bg-navy-950/90 border-gold-500/40 shadow-md' 
                          : 'bg-navy-950/40 border-navy-800 opacity-60'
                      }`}
                    >
                      <div className="flex items-start space-x-3.5">
                        <div className={`w-5 h-5 rounded border mt-0.5 flex items-center justify-center shrink-0 ${
                          isChecked ? 'bg-gold-500 border-gold-500 text-navy-950' : 'border-slate-600'
                        }`}>
                          {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <h4 className="text-sm sm:text-base font-bold text-white">{item.category}</h4>
                            <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-navy-900 border border-slate-700 text-slate-300">
                              {item.badge}
                            </span>
                          </div>
                          <p className="text-xs text-slate-300 leading-relaxed max-w-3xl">{item.desc}</p>
                        </div>
                      </div>

                      <div className="text-left md:text-right shrink-0 pl-8 md:pl-0">
                        <span className="text-xs text-slate-400 block">{isKo ? '견적 금액' : 'Báo giá'}</span>
                        <span className="text-base sm:text-lg font-black text-gold-400">
                          {item.price.toLocaleString()} VND
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Initial Build Summary Strip */}
              <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-navy-950 border border-gold-500/30 gap-3">
                <span className="text-xs text-slate-300 font-bold">
                  {isKo ? '선택된 항목 초기 구축비 합계 (VAT 별도):' : 'Tổng chi phí các mục đã chọn (Chưa VAT):'}
                </span>
                <span className="text-2xl font-black text-cyan-400">
                  {calculateBaekjeTotal().toLocaleString()} VND
                </span>
              </div>
            </div>

            {/* Monthly Maintenance Table */}
            <div className="bg-navy-900/90 rounded-3xl border border-cyan-500/40 p-6 sm:p-8 space-y-6 shadow-2xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-4">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded-md border border-cyan-500/30 inline-block mb-1">
                    PART B · RECURRING MONTHLY
                  </span>
                  <h3 className="text-xl font-black text-white">{isKo ? '나. 월간 운영 및 유지관리비 (정기 청구)' : 'B. Chi Phí Vận Hành & Bảo Trì Hàng Tháng'}</h3>
                </div>
                <div className="text-right">
                  <span className="text-xs text-slate-400 block">{isKo ? '월 고정 운영비 (VAT 별도)' : 'Chi phí hàng tháng'}</span>
                  <span className="text-2xl sm:text-3xl font-black text-cyan-400">3,500,000 VND <span className="text-sm font-normal text-slate-400">/ 월</span></span>
                </div>
              </div>

              {/* 4 Monthly Service Items */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <Video className="w-4 h-4 text-cyan-400" />
                      <span>{isKo ? '콘텐츠 제작 및 발행' : 'Sản xuất Nội dung'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emeraldGreen-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{isKo ? '포함' : 'Bao gồm'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>4K ASMR/기획 숏폼 기획·촬영·편집 (월 8회 / 주 2회)</li>
                    <li>AI KOC 옴니채널(인스타, FB, 스레드) 바이럴 (월 10회)</li>
                    <li>BestClub KCA 웹진 기사형 광고 기획 및 공식 발행 (월 2회)</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <TrendingUp className="w-4 h-4 text-gold-400" />
                      <span>{isKo ? '퍼포먼스 광고 운영' : 'Vận hành Quảng cáo'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emeraldGreen-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{isKo ? '포함' : 'Bao gồm'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>메타 정밀 타깃 광고 세팅, 소재 A/B 테스트</li>
                    <li>월 20만 회 이상 노출 보장 집행 관리</li>
                    <li className="text-slate-400 text-[11px]">※ 매체 순수 광고비 실비는 협의된 예산 내 별도 집행</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <ShieldCheck className="w-4 h-4 text-emeraldGreen-400" />
                      <span>{isKo ? '시스템 유지보수 & 평판 관리' : 'Bảo trì Hệ thống & Đánh giá'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emeraldGreen-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{isKo ? '포함' : 'Bao gồm'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>24시간 AI 챗봇 모니터링, 오류 대응 및 프롬프트 고도화</li>
                    <li>Zalo CRM 자동화 엔진 모니터링 및 락인 쿠폰 발송 관리</li>
                    <li>구글 맵스 포토리뷰(월 20건) 유도 및 FB 댓글 실시간 모니터링</li>
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center space-x-1.5">
                      <BarChart3 className="w-4 h-4 text-purple-300" />
                      <span>{isKo ? '성과 리포팅' : 'Báo cáo Hiệu quả'}</span>
                    </span>
                    <span className="text-[10px] font-bold text-emeraldGreen-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{isKo ? '포함' : 'Bao gồm'}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                    <li>월간 퍼포먼스 광고 지표 분석 보고서</li>
                    <li>신규 고객 DB 인입률 & 재방문율 통계 제공</li>
                    <li>정기 월간 전략 미팅 및 최적화 피드백</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* 2) STANDARD 4-PHASE DEVELOPMENT MATRIX (CUSTOM MODE) */}
        {quoteMode === 'custom' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phases.map((ph) => {
                const Icon = ph.icon;
                const isChecked = selectedPhases[ph.id];

                return (
                  <div 
                    key={ph.id}
                    className={`relative rounded-3xl p-6 border transition-all duration-300 bg-gradient-to-b from-navy-900/90 to-navy-950/90 backdrop-blur-xl ${
                      isChecked ? 'border-gold-500/50 shadow-2xl shadow-gold-500/10' : 'border-navy-800 opacity-80'
                    }`}
                  >
                    <div className="flex items-center justify-between border-b border-navy-800 pb-4 mb-4">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${ph.color} flex items-center justify-center text-navy-950 font-black shadow-md`}>
                          <Icon className="w-5 h-5 text-navy-950" />
                        </div>
                        <div>
                          <span className={`text-[10px] font-black tracking-widest px-2.5 py-0.5 rounded-full border ${ph.badgeColor}`}>
                            {ph.num} · {ph.period}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1">{ph.title}</h3>
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-slate-400 block">{isKo ? '예상 견적 (약 ~, VAT 별도)' : 'Báo giá dự kiến (~, Chưa VAT)'}</span>
                        <span className="text-xl font-black gold-gradient-text">
                          약 {ph.priceVND.toLocaleString()} ~ <span className="text-xs text-slate-300 font-normal">VND</span>
                        </span>
                        <span className="text-xs font-bold text-gold-400 block mt-0.5">{ph.scope}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6">
                      <span className="text-[11px] font-bold text-slate-400 block uppercase tracking-wider">{isKo ? '세부 구성 및 개발 항목' : 'Chi tiết các mục phát triển'}</span>
                      <ul className="space-y-2">
                        {ph.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button
                      onClick={() => setSelectedPhases(prev => ({ ...prev, [ph.id]: !prev[ph.id] }))}
                      className={`w-full py-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center space-x-2 transition-all ${
                        isChecked 
                          ? 'bg-gold-500/20 text-gold-400 border border-gold-500/50 hover:bg-gold-500/30' 
                          : 'bg-navy-800 text-slate-400 border border-navy-700 hover:text-white'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded border flex items-center justify-center ${isChecked ? 'bg-gold-500 border-gold-500 text-navy-950' : 'border-slate-500'}`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <span>{isChecked ? (isKo ? '견적 계산기에 포함됨' : 'Đã chọn bao gồm trong báo giá') : (isKo ? '견적 선택에 추가하기' : 'Thêm vào báo giá')}</span>
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Standard Mode Maintenance Note */}
            <div className="bg-navy-950/90 rounded-2xl p-5 border border-gold-500/20 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-navy-800 pb-3">
                <div className="flex items-center space-x-2">
                  <Megaphone className="w-5 h-5 text-gold-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{isKo ? '월간 운영 및 유지관리 서비스 (정기 청구)' : 'Dịch vụ Vận hành & Bảo trì Hàng tháng'}</h4>
                    <p className="text-xs text-slate-400">{isKo ? '4K 숏폼 8회 + AI KOC 바이럴 10회 + 광고 20만회 노출 + 챗봇/CRM 통합 유지관리' : '8 Video 4K + 10 KOC + 200k lượt hiển thị + Quản trị AI/CRM'}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-lg font-black text-cyan-400 block">3,500,000 <span className="text-xs text-slate-400 font-normal">VND / 월</span></span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Interactive Quotation Summary Card (Common) */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-gold-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
            <div className="space-y-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/30">
                <Calculator className="w-3.5 h-3.5" />
                <span>TOTAL ESTIMATED INVESTMENT</span>
              </span>
              <h3 className="text-2xl font-black text-white">
                {isKo ? '선택 패키지 종합 견적 합계' : 'Tổng Chi Phí Gói Đã Chọn'}
              </h3>
              <p className="text-xs text-slate-300">
                {quoteMode === 'baekje-vvip'
                  ? (isKo ? '백제갈비 스펙 초기 구축비 4대 항목 및 월 3,500,000 VND 운영비가 연동됩니다.' : 'Gói VVIP Bạch Đệ bao gồm 4 hạng mục & 3.500.000 VND/tháng vận hành.')
                  : (isKo ? '위 표준 4단계 중 원하시는 단계를 자유롭게 조합하여 총 견적을 산출합니다.' : 'Tùy chọn kết hợp các Giai đoạn trên.')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-center">
              <div className="bg-navy-950 px-6 py-4 rounded-2xl border border-gold-500/40 text-left sm:text-right">
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-bold">
                  {isKo ? '초기 시스템 구축비 합계 (VAT 별도)' : 'Chi phí Thiết lập Ban đầu (Chưa VAT)'}
                </span>
                <span className="text-3xl sm:text-4xl font-black gold-gradient-text block mt-1">
                  약 {calculateTotalVND().toLocaleString()} ~ <span className="text-sm text-slate-200 font-bold">VND</span>
                </span>
              </div>
              <div className="bg-navy-950 px-6 py-4 rounded-2xl border border-cyan-500/40 text-left sm:text-right">
                <span className="text-[11px] text-slate-400 block uppercase tracking-wider font-bold">
                  {isKo ? '월간 정기 운영/유지관리비' : 'Chi phí Vận hành Hàng tháng'}
                </span>
                <span className="text-2xl sm:text-3xl font-black text-cyan-400 block mt-1">
                  3,500,000 <span className="text-xs text-slate-300 font-normal">VND/월</span>
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================================================= */}
      {/* 6. 10 Business Expected Effects Grid */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <div className="text-center space-y-3">
          <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-cyan-400 uppercase tracking-widest bg-navy-900 px-3.5 py-1.5 rounded-full border border-cyan-500/30">
            <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
            <span>10 EXPECTED BUSINESS EFFECTS</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white">
            {isKo ? '도입 시 10대 기대효과 및 비즈니스 성과' : '10 Hiệu quả Kỳ vọng & Thành quả Kinh doanh'}
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            {isKo 
              ? '단순한 웹 구축을 넘어 신규 고객 확보부터 30일 재방문율 25%+ 달성, VVIP 락인, 객단가 상승까지 입증된 성과 모델.' 
              : 'Vượt xa việc xây dựng Web thông thường, nâng tầm thu hút khách hàng, tỷ lệ quay lại 25%+, khóa chân VVIP & doanh thu.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {businessEffects.map((ef, idx) => {
            const Icon = ef.icon;
            return (
              <div 
                key={idx}
                className="bg-navy-900/70 border border-navy-800 hover:border-gold-500/40 rounded-2xl p-5 space-y-3 transition-all duration-300 hover:bg-navy-900 hover:-translate-y-1 shadow-lg"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-9 h-9 rounded-xl bg-navy-950 border border-navy-700 flex items-center justify-center">
                    <Icon className={`w-4 h-4 ${ef.color}`} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-bold block uppercase tracking-widest">EFFECT 0{idx + 1}</span>
                    <h3 className="text-base font-bold text-white">{ef.title}</h3>
                  </div>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed pl-1 border-l-2 border-navy-700">
                  {ef.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 7. Contact Us Form Section */}
      <ContactUs t={t} />
    </div>
  );
}
