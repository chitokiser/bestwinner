// 검색엔진(SEO) 페이지 정보 — 단일 기준.
// 화면(src/seo/Seo.jsx)과 빌드 스크립트(scripts/seo-build.mjs)가 함께 사용한다.
// 문구는 src/locales/translations.js 의 실제 사업 소개 문장을 바탕으로 작성 (기본 언어 vi + 한국어 키워드 병기).

export const SITE_URL = 'https://bestwinnervn.com';
export const SITE_NAME = 'BEST winner Vn Group';
export const DEFAULT_IMAGE = '/og-image.png';

/**
 * path: 실제 라우트
 * canonical: 같은 내용을 보여주는 별칭 주소일 때 대표 주소
 * index: false 면 검색 제외 (noindex) 및 사이트맵 제외
 */
export const SEO_ROUTES = [
  {
    path: '/',
    title: 'BEST winner Vn Group | Giải pháp tích hợp Nhà ở & Hạ tầng thông minh (집에 대한 시스템 통합 서비스)',
    description:
      'Tập đoàn giải pháp nhà ở & hạ tầng kiến trúc tại Hà Nội: Thang máy, Nội thất, Bãi đỗ xe thông minh AI, Vật liệu PCCC, Chống thấm, Năng lượng mặt trời PVT. 베트남 엘리베이터·인테리어·스마트주차·소방·방수 통합 솔루션.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'Giới thiệu Tập đoàn | BEST winner Vn Group (회사 소개)',
    description:
      'Hội tụ công nghệ kỹ thuật Hàn Quốc và hệ thống sản xuất - thi công trực tiếp tại Việt Nam. Nhà máy 3.000m² tại Hà Nội, đội ngũ kỹ sư Hàn Quốc & Việt Nam. 한국 기술력과 베트남 직영 생산·시공.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/business',
    title: 'Lĩnh vực kinh doanh | BEST winner Vn Group (핵심 사업 분야)',
    description:
      'Các mảng kinh doanh cốt lõi: Thang máy, Nội thất, Bãi đỗ xe AI, Vật liệu PCCC, Chống thấm, Năng lượng mặt trời PVT và Digital Agency. 7대 핵심 건축 인프라 사업.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/elevator',
    title: 'Thang máy gia đình BEST Home 350 | BEST winner Elevator Vn (베트남 엘리베이터)',
    description:
      'Thang máy gia đình, thương mại & công nghiệp. BEST Home 350 (350kg / 3-7 tầng) cho Townhouse & Villa, hố PIT tối thiểu, A/S 24/7 trực tiếp. 베트남 홈 엘리베이터 제조·설치·24시간 A/S.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/interior',
    title: 'Thiết kế & Thi công Nội thất cao cấp | BEST winner Interior Vn (베트남 인테리어)',
    description:
      'Thiết kế & thi công nội thất cao cấp cho Biệt thự, Townhouse, Penthouse và không gian thương mại. Phối cảnh 3D & thi công trọn gói. 하노이 빌라·타운하우스 고급 인테리어 턴키 시공.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/parking',
    title: 'Bãi đỗ xe thông minh AI (LPR) | BEST winner AI Smart Parking Vn (스마트 주차)',
    description:
      'Hệ thống quản lý bãi đỗ xe thông minh: AI nhận diện biển số LPR 99.8%, barrier tốc độ cao, dẫn đường LED, kiosk thanh toán tự động. AI 번호판 인식 스마트 주차 관제 솔루션.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/firefighting',
    title: 'Vật liệu & Hệ thống PCCC đạt chuẩn QCVN/TCVN | BEST winner Firefighting Vn (소방자재)',
    description:
      'Cung cấp vật liệu & hệ thống PCCC đạt chuẩn QCVN / TCVN: báo cháy tự động, bình chữa cháy, sơn & cửa chống cháy, tư vấn thẩm duyệt nghiệm thu. 베트남 소방 법규 준수 소방 자재·인허가 컨설팅.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/waterproofing',
    title: 'Chống thấm chuyên sâu cho khí hậu nhiệt đới | BEST winner Waterproofing Vn (방수)',
    description:
      'Công nghệ chống thấm chuyên sâu: hố PIT thang máy, sân thượng, tầng hầm, tường ngoài. Polyurethane, tinh thể thẩm thấu, màng bitum — bảo hành đến 10 năm. 베트남 기후 맞춤 전문 방수 시공.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/energy',
    title: 'Năng lượng mặt trời 3D PVT | BEST winner Solar Energy Vn (태양광 에너지)',
    description:
      'Hệ thống PVT 3D Photon Cycling Box: sản xuất điện + nước nóng đồng thời, tuổi thọ 40 năm+, mật độ phát điện cao. 3D PVT 태양광 — 전기·온수 동시 생산, 특허 기술.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/business/digital-agency',
    title: 'Digital Agency - Marketing & Web | BEST winner Vn Group (디지털 에이전시)',
    description:
      'Dịch vụ Digital Agency: xây dựng website, marketing số và giải pháp chuyển đổi số cho doanh nghiệp tại Việt Nam. 베트남 기업 웹사이트·디지털 마케팅.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  { path: '/business/agency', canonical: '/business/digital-agency' },
  {
    path: '/services/ai-management',
    title: 'BEST AI 경영관리 1.0 (SaaS) | Quản trị doanh nghiệp bằng AI | BEST winner Vn Group',
    description:
      'Dịch vụ SaaS quản trị doanh nghiệp bằng AI: dashboard điều hành, báo giá tự động, tối ưu tiến độ & giám sát bảo trì dự đoán 24/7. SaaS 개념의 AI 경영관리 1.0 서비스.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  { path: '/services', canonical: '/services/ai-management' },
  {
    path: '/services/products',
    title: 'BEST Mall - Sản phẩm | BEST winner Vn Group (쇼핑몰)',
    description: 'Sản phẩm và dịch vụ của BEST winner Vn Group trên BEST Mall. BEST winner 쇼핑몰 상품 안내.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/services/merchant-products',
    title: 'Sản phẩm thành viên BestClub | BEST winner Vn Group (가맹점 상품)',
    description:
      'Sản phẩm & dịch vụ của BEST winner trên hệ thống thành viên BestClub, thanh toán bằng BM. BestClub 가맹점 BEST winner 판매 상품.',
    priority: 0.6,
    changefreq: 'weekly',
  },
  {
    path: '/events',
    title: 'Sự kiện, Coupon & Voucher | BEST winner Vn Group (이벤트·쿠폰)',
    description: 'Coupon, voucher và sự kiện ưu đãi của BEST winner Vn Group dành cho thành viên BestClub. BEST winner 이벤트 쿠폰·바우처.',
    priority: 0.6,
    changefreq: 'weekly',
  },
  { path: '/services/events', canonical: '/events' },
  {
    path: '/services/bestclub',
    title: 'BestClub - Nền tảng điểm thưởng liên minh | BEST winner Vn Group (베스트클럽)',
    description:
      'BestClub: thanh toán tại cửa hàng thành viên, nhận jackpot điểm và vé thưởng. 베스트클럽 가맹점 결제 포인트 잭팟·보너스티켓 안내.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/services/bestclub-game',
    title: 'Game BestClub - Săn quái, tìm kho báu, đổi BestMoney | BEST winner Vn Group (베스트클럽 게임)',
    description:
      'Game theo vị trí của BestClub: săn quái vật, tìm kho báu, đổi GP sang Point và BestMoney để thanh toán tại cửa hàng thành viên. 위치기반 몬스터 사냥·보물찾기, GP→포인트→BM 교환.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/megazine',
    title: 'BEST MEGAZINE - Tạp chí đời sống Hà Nội | BEST winner Vn Group (매거진)',
    description:
      'BEST MEGAZINE: ẩm thực Hàn, làm đẹp, đời sống và ưu đãi cửa hàng tại Hà Nội. 하노이 교민 생활·맛집·가맹점 소식 매거진.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/calculator',
    title: 'Dự toán chi phí Thang máy online | BEST winner Elevator Vn (엘리베이터 견적)',
    description:
      'Công cụ dự toán chi phí thang máy online: chọn số tầng, tải trọng, thiết kế để nhận ước tính sơ bộ và đặt lịch khảo sát miễn phí. 승강기 온라인 자동 견적 & 무료 실측 신청.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: 'Liên hệ & Showroom Hà Nội | BEST winner Vn Group (문의·쇼룸)',
    description:
      'Trụ sở chính & Hanoi Experience Center: NO 6B-LK46B Vạn Phúc, Hà Đông, Hà Nội. Gửi yêu cầu tư vấn thang máy, nội thất, PCCC, chống thấm. 하노이 본사·쇼룸 안내 및 상담 문의.',
    priority: 0.8,
    changefreq: 'monthly',
  },
];

const byPath = new Map(SEO_ROUTES.map((r) => [r.path, r]));

/** 경로 → 적용할 SEO 정보 (별칭은 대표 페이지 정보 사용, 미등록 경로는 검색 제외) */
export function resolveSeo(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const route = byPath.get(clean);
  if (!route) {
    return { path: clean, title: `Không tìm thấy trang | ${SITE_NAME}`, description: '', canonical: null, index: false, notFound: true };
  }
  const target = route.canonical ? byPath.get(route.canonical) : route;
  return {
    path: clean,
    title: target.title,
    description: target.description || '',
    canonical: SITE_URL + (route.canonical || route.path),
    index: route.index !== false,
    notFound: false,
  };
}
