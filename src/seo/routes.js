// SEO 경로 메타데이터: 각 페이지의 <title>, <meta description>, <link rel="canonical">, <meta name="robots">
// '하노이 인테리어' 구글 최우선 랭킹을 위한 On-Page SEO 키워드 최적화 완료

export const SITE_URL = 'https://bestwinnervn.com';
export const SITE_NAME = 'BEST winner Vn Group';
export const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

export const SEO_ROUTES = [
  {
    path: '/',
    title: '하노이 인테리어 전문 BEST winner Vn Group | 베트남 아파트·빌라·상가 맞춤 인테리어 시공',
    description:
      '하노이 인테리어 1위 전문 기업 BEST winner Group. 베트남 하노이 아파트, 빌라, 오피스 맞춤 인테리어 설계 및 턴키 시공. 한국인 수석 엔지니어 100% 현장 감리, 3D CAD/BIM 스마트 1분 자동 견적, 무료 현장 실측 상담.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/about',
    title: 'BEST winner 소개 | 하노이 인테리어 & 스마트 빌딩 생태계 (회사소개)',
    description:
      '하노이 인테리어와 종합 건축 인프라를 혁신하는 BEST winner Group Vietnam 소개. 한국인 수석 엔지니어 팀과 베트남 현지 직영 시공 인프라를 통한 신뢰의 파트너.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/business',
    title: '7대 핵심 사업분야 | 하노이 인테리어, 승강기, 스마트주차 | BEST winner Group',
    description:
      '하노이 맞춤 인테리어, 홈 엘리베이터(BEST Home 350), AI 스마트 주차, 소방자재, 특수 방수, 3D PVT 태양광, 디지털 에이전시. 베트남 건축 통합 생태계.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/interior',
    title: '하노이 인테리어 디자인 & 턴키 시공 | BEST winner Interior Hanoi (아파트·빌라·상가)',
    description:
      '하노이 인테리어 1위 설계 및 시공 전문. 하노이 아파트, 타운하우스, 럭셔리 빌라, 오피스, 매장 3D 맞춤 인테리어 디자인 및 한국인 수석 엔지니어 100% 직영 시공. 무료 3D 도면 및 현장 실측 상담.',
    priority: 1.0,
    changefreq: 'weekly',
  },
  {
    path: '/business/elevator',
    title: '베트남 하노이 가정용 엘리베이터 BEST Home 350 | BEST winner Elevator',
    description:
      '하노이 타운하우스, 빌라, 상가 맞춤형 승강기. BEST Home 350 (350kg / 3-7인승), 최소 피트 깊이, 24/7 한국인 엔지니어 직영 A/S.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/parking',
    title: 'AI 스마트 주차 관제 시스템 (LPR) | BEST winner AI Smart Parking Vn',
    description:
      '베트남 스마트 주차 솔루션: 99.8% AI 차량 번호판 인식(LPR), 초고속 차단기, LED 주차 유도, 무인 키오스크 정산.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/firefighting',
    title: '베트남 소방자재 & QCVN/TCVN 법규 인증 | BEST winner Firefighting Vn',
    description:
      '베트남 소방 규격(QCVN/TCVN) 승인 소방자재 공급: 자동화재탐지설비, 소화기, 방화도어, 방화도료 및 완공 소방 인허가 컨설팅.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/waterproofing',
    title: '베트남 열대 기후 특수 방수 공법 | BEST winner Waterproofing Vn',
    description:
      '엘리베이터 하부 PIT, 옥상, 지하층, 외벽 특수 방수. 폴리우레탄, 침투성 결정체 공법 적용, 최대 10년 하자 보증.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/business/energy',
    title: '3D PVT 하이브리드 태양광 발전 & 온수 시스템 | BEST winner Solar Energy',
    description:
      '3D Photon Cycling Box 기술: 전기 생산과 온수를 동시에 해결하는 40년 수명의 고효율 스마트 태양광 PVT.',
    priority: 0.8,
    changefreq: 'monthly',
  },
  {
    path: '/business/digital-agency',
    title: '디지털 에이전시 & 베트남 로컬 마케팅 | BEST winner Digital Agency',
    description:
      '베트남 진출 기업을 위한 맞춤형 웹사이트 제작, 검색엔진 최적화(SEO), 페이스북/틱톡 디지털 마케팅 및 AI 솔루션.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  { path: '/business/agency', canonical: '/business/digital-agency' },
  {
    path: '/services/ai-management',
    title: 'BEST AI 경영관리 1.0 (SaaS) | 베트남 하노이 기업 AI ERP 솔루션',
    description:
      '자체 서버 구축 없이 즉시 가동되는 클라우드 AI 경영관리 SaaS: 실시간 P&L 손익 대시보드, 1분 CAD/BIM 스마트 자동 견적, 엔지니어 현장 배치.',
    priority: 0.8,
    changefreq: 'weekly',
  },
  { path: '/services', canonical: '/services/ai-management' },
  {
    path: '/services/products',
    title: 'BEST Mall - 건축자재 & 인테리어 제품 쇼핑몰 | BEST winner Vn Group',
    description: '베트남 하노이 최고급 인테리어 마감재, 조명, 스마트 빌딩 자재 및 회원 전용 특가 상품 안내.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/services/merchant-products',
    title: '베스트클럽 가맹점 전용 상품 | BEST winner Vn Group',
    description: '베스트클럽 가맹점 회원 전용 우대 상품 및 BestMoney(BM) 결제 지원.',
    priority: 0.6,
    changefreq: 'weekly',
  },
  {
    path: '/events',
    title: '이벤트, 쿠폰 & 바우처 혜택 | BEST winner Vn Group',
    description: '하노이 인테리어 시공 할인 쿠폰, 홈 엘리베이터 무상 점검 이벤트 및 베스트클럽 가맹점 바우처 안내.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  { path: '/services/events', canonical: '/events' },
  {
    path: '/services/bestclub',
    title: '베스트클럽 (BestClub) - 하노이 가맹점 상생 연합 플랫폼',
    description: '하노이 한인 식당, 뷰티, 라이프스타일 가맹점 결제 적립 및 잭팟 보너스 티켓 혜택 안내.',
    priority: 0.7,
    changefreq: 'monthly',
  },
  {
    path: '/services/bestclub-game',
    title: '베스트클럽 AR 게임 - 몬스터 사냥 & 보물찾기 리워드',
    description: '하노이 위치기반 증강현실(AR) 탐험 게임. 몬스터 사냥과 보물상자 찾기로 BestMoney를 획득하여 실생활 결제에 사용.',
    priority: 0.6,
    changefreq: 'monthly',
  },
  {
    path: '/megazine',
    title: 'BEST MEGAZINE - 하노이 교민 라이프스타일 & 맛집 매거진',
    description: '하노이 인테리어 트렌드, 베트남 맛집, 미용, 부동산, 여행 정보를 한눈에 보는 AI 라이프스타일 매거진.',
    priority: 0.7,
    changefreq: 'weekly',
  },
  {
    path: '/calculator',
    title: '하노이 인테리어 & 엘리베이터 온라인 스마트 견적 계산기',
    description: '평수, 층수, 자재 등급을 선택하여 1분 만에 하노이 인테리어 및 승강기 예상 견적을 즉시 확인하고 무료 현장 실측 신청.',
    priority: 0.9,
    changefreq: 'monthly',
  },
  {
    path: '/contact',
    title: '하노이 쇼룸 안내 & 인테리어 무료 상담 문의 | BEST winner Hanoi',
    description:
      '하노이 하동 반푹 쇼룸 (Hanoi Experience Center): NO 6B-LK46B Vạn Phúc, Hà Đông, Hà Nội. 하노이 인테리어, 승강기, 특수 방수 1:1 맞춤 견적 상담.',
    priority: 0.9,
    changefreq: 'monthly',
  },
];

const byPath = new Map(SEO_ROUTES.map((r) => [r.path, r]));

export function resolveSeo(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const route = byPath.get(clean);
  if (!route) {
    return { path: clean, title: `페이지를 찾을 수 없습니다 | ${SITE_NAME}`, description: '', canonical: null, index: false, notFound: true };
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
