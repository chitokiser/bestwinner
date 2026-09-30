// Initial Data for BEST MEGAZINE AI Article System
export const DEFAULT_CATEGORIES = [
  { id: 'TODAY', label: 'TODAY', labelVi: 'HÔM NAY', icon: 'Sparkles', color: 'cyan' },
  { id: 'BUSINESS', label: 'BUSINESS', labelVi: 'KINH DOANH', icon: 'Briefcase', color: 'amber' },
  { id: 'LIFE', label: 'LIFE', labelVi: 'CUỘC SỐNG', icon: 'Heart', color: 'emerald' },
  { id: 'NEWS', label: 'NEWS', labelVi: 'TIN TỨC', icon: 'Newspaper', color: 'blue' },
  { id: 'HANOI', label: 'HANOI', labelVi: 'HÀ NỘI', icon: 'MapPin', color: 'rose' },
  { id: 'VIETNAM', label: 'VIETNAM', labelVi: 'VIỆT NAM', icon: 'Globe', color: 'red' },
  { id: 'KOREA', label: 'KOREA', labelVi: 'HÀN QUỐC', icon: 'Flag', color: 'indigo' },
  { id: 'COMMUNITY', label: 'COMMUNITY', labelVi: 'CỘNG ĐỒNG', icon: 'Users', color: 'violet' },
  { id: 'BEST_PICK', label: 'BEST PICK', labelVi: 'LỰA CHỌN BEST', icon: 'Star', color: 'gold' }
];

export const INITIAL_WEATHER = {
  city: 'Hanoi',
  temp: 29,
  feelsLike: 32,
  humidity: 78,
  rainProb: 30,
  windSpeed: 12,
  condition: '구름 조금 (Partly Cloudy)',
  conditionVi: 'Ít mây, ngày nắng',
  icon: 'CloudSun',
  updatedAt: new Date().toISOString()
};

export const INITIAL_EXCHANGE_RATES = {
  krwVnd: 18.52, // 1 KRW = 18.52 VND (1,000 KRW = 18,520 VND)
  usdVnd: 25420,  // 1 USD = 25,420 VND
  usdKrw: 1372,   // 1 USD = 1,372 KRW
  updatedAt: new Date().toISOString()
};

export const INITIAL_BEST_PICKS = [
  {
    id: 'bp-01',
    name: '하노이 미딩 한식당 가온 (Gaon Korean Restaurant)',
    category: '맛집 / 식당',
    address: 'TT4-01, Khu đô thị Mỹ Đình Sông Đà, Nam Từ Liêm, Hà Nội',
    phone: '098-123-4567',
    zalo: '0981234567',
    mapUrl: 'https://maps.google.com/?q=My+Dinh+Hanoi',
    rating: 4.9,
    badge: 'BEST 파트너',
    desc: '하노이 미딩 중심에 위치한 최고급 한국식 숯불구이 및 정갈한 한식 전문점.'
  },
  {
    id: 'bp-02',
    name: '하노이 K-의료센터 (Hanoi K-Medical Clinic)',
    category: '병원 / 종합검진',
    address: 'Keangnam Landmark 72, Cầu Giấy, Hà Nội',
    phone: '024-3771-8888',
    zalo: '02437718888',
    mapUrl: 'https://maps.google.com/?q=Keangnam+Hanoi',
    rating: 4.8,
    badge: '한국인 의사 상주',
    desc: '한국인 내과·피부과 전문의 상주, 24시간 한국어 가통역 진료 지원.'
  },
  {
    id: 'bp-03',
    name: 'BEST winner Elevator Vn (승강기 A/S 센터)',
    category: '승강기 / 주택설비',
    address: 'Số C17, Simco Sông Đà 2, Vạn Phúc, Hà Đông, Hà Nội',
    phone: '0988-123-456',
    zalo: '0988123456',
    mapUrl: 'https://maps.google.com/?q=Van+Phuc+Ha+Dong+Hanoi',
    rating: 5.0,
    badge: '공식 기술 파트너',
    desc: '한국 정밀 제어 승강기 공급 및 24시간 긴급 출동 직영 A/S 시스템.'
  }
];

export const INITIAL_ARTICLES = [
  {
    id: 'art-01',
    title: '베트남 노동법 개정령 발효: 교민 사업자 및 주재원 비자 발급 절차 2026 개편안 분석',
    subtitle: '노동허가증(Work Permit) 수속 기간 단축 및 온라인 일괄 접수 시스템 도입',
    summary: '2026년 4월부터 베트남 노동보훈사회부가 외국인 근로자 노동허가증 발급 절차를 대폭 간소화합니다. 교민 사업자 및 주재원이 필히 알아야 할 변경점 5가지를 분석합니다.',
    category: 'BUSINESS',
    edition: 'BEST BUSINESS',
    thumbnail: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 3).toISOString(),
    status: 'published',
    aiGenerated: true,
    importanceScore: 96,
    communityScore: 98,
    reliabilityScore: 99,
    viewCount: 1420,
    shareCount: 238,
    tags: ['베트남노동법', '비자', '워크퍼밋', '교민비즈니스', '하노이사업'],
    sourceUrls: ['https://molisa.gov.vn', 'https://vneconomy.vn'],
    sourceNames: ['베트남 노동보훈사회부 공식', 'VnEconomy'],
    whyItMatters: '기존 최소 30일 이상 소요되던 워크퍼밋 발급 기간이 14일 이내로 대폭 단축되며, 제출 서류 아포스티유 인증 절차가 일부 디지털화됩니다.',
    impactOnExpats: '신규 주재원 임용 및 교민 기업의 한국인 전담 인력 채용 시 행정 비용과 시간이 50% 이상 절감됩니다.',
    actionRequired: '기존 법인의 사업자등록증 및 외국인 임직원의 범죄경력증명서 유효기간(6개월)을 사전 체크하고 정부 e-Portal 회원가입을 완료해야 합니다.',
    relatedBusinesses: ['bp-03'],
    content: `
베트남 노동보훈사회부(MOLISA)가 2026년도 외국인 노동자 관리 시행령 개정안을 확정 발표했습니다. 이번 개정안은 베트남 내 주재원 및 교민 사업체 운영에 직결되는 사안으로, 복잡하던 노동허가증(Work Permit) 발급 및 연장 절차를 획기적으로 개선하는 데 초점을 맞추고 있습니다.

### 주요 개정 내용 3가지
1. **온라인 원스톱 서류 접수**: 기존 오프라인 관할 관청 방문 접수 방식에서 전면 디지털 e-Portal 신청 방식으로 일원화됩니다.
2. **학위 및 경력 증명 인정 범위 확대**: 기존 동일 전공 3년 경력 요건이 관련 분야 실무 경력 서류로 유연하게 인정됩니다.
3. **발급 처리 기한 단축**: 법정 처리 기한이 기존 15 영업일에서 7 영업일로 축소됩니다.

교민 기업체 관계자는 이번 조치로 인해 비자 연장 차질로 인한 불이익 위험이 크게 줄어들 것으로 예상하고 있습니다.
    `
  },
  {
    id: 'art-02',
    title: '하노이 미딩·경남 지역 교민 생활 가이드: 2026 상반기 신규 개원 병원 및 24시 약국 현황',
    subtitle: '응급 상황 시 한국어 통역 지원 종합병원 서비스 완벽 정리',
    summary: '하노이 거주 교민들의 건강과 안전을 위해 미딩, 서호, 하동 지역의 한국어 진료 가능 종합병원 및 24시간 야간 심야 약국 목록을 정리해 드립니다.',
    category: 'LIFE',
    edition: 'BEST LIFE',
    thumbnail: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 7).toISOString(),
    status: 'published',
    aiGenerated: true,
    importanceScore: 92,
    communityScore: 95,
    reliabilityScore: 97,
    viewCount: 980,
    shareCount: 175,
    tags: ['하노이병원', '미딩약국', '교민생활', '응급진료', '하노이육아'],
    sourceUrls: ['https://koreaembassy.go.kr', 'https://hanoitimes.vn'],
    sourceNames: ['주베트남 대한민국 대사관', 'Hanoi Times'],
    whyItMatters: '야간이나 주말 갑작스러운 고열, 아동 응급 상황 발생 시 당황하지 않고 가깝고 신뢰할 수 있는 의료 기관을 신속히 찾을 수 있습니다.',
    impactOnExpats: '한국인 간호사 및 가통역 전담 인력이 상주하는 병원을 즉시 파악하여 언어 장벽 없이 진료를 받으실 수 있습니다.',
    actionRequired: '비상 연락처 목록에 24시간 교민 응급 의료 핫라인 수신 번호를 저장해 두시기 바랍니다.',
    relatedBusinesses: ['bp-02'],
    content: `
하노이 교민 사회가 지속적으로 확대됨에 따라 교민들의 의료 접근성 향상을 위한 전문 의료 서비스가 확충되고 있습니다. 특히 미딩 송다 및 경남 랜드마크 72 인근 지역을 중심으로 한국어 통역원이 상주하는 소아과, 내과, 치과 진료 센터가 늘어나고 있습니다.

### 주요 의료 지원 네트워크
- **24시간 한국어 응급 핫라인**: 야간 긴급 상황 발생 시 주베트남 대사관 영사콜센터 및 지정 병원 긴급 콜센터 가동.
- **의료보험 청구 서류 원스톱 발급**: 한국 실손보험 청구용 영문/한글 진단서 및 영수증 자동 발급 지원.
    `
  },
  {
    id: 'art-03',
    title: '[BEST MORNING] 9월 30일 하노이 오늘의 날씨 & 환율·교통 교민 브리핑',
    subtitle: '낮 최고 31℃ 차차 구름 많음, 원/동 환율 18.52VND 기록',
    summary: '오늘 하노이는 오전 쾌청하나 오후 한때 소나기 가능성이 있습니다. 동환율은 100만동당 약 53,990원선을 유지하고 있습니다.',
    category: 'TODAY',
    edition: 'BEST MORNING',
    thumbnail: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    publishedAt: new Date(Date.now() - 1000 * 60 * 60 * 12).toISOString(),
    status: 'published',
    aiGenerated: true,
    importanceScore: 90,
    communityScore: 91,
    reliabilityScore: 100,
    viewCount: 2310,
    shareCount: 310,
    tags: ['하노이날씨', '오늘의환율', 'BEST모닝', '교민브리핑', '하노이교통'],
    sourceUrls: ['https://nchmf.gov.vn', 'https://sbv.gov.vn'],
    sourceNames: ['베트남 국립기상청', '베트남 중앙은행'],
    whyItMatters: '매일 아침 출근길 외출 준비 및 환전/송금 시점을 결정하는 데 필수적인 생활 지표 데이터입니다.',
    impactOnExpats: '야외 활동 시 우산 휴대가 권장되며, 수입 물품 자재 결제 시 환율 변동을 체크하세요.',
    actionRequired: '오후 3시 이후 출퇴근 시간대 미딩 팜흥(Phạm Hùng) 도로 공사 구간 우회도로 이용 권장.',
    relatedBusinesses: ['bp-01', 'bp-03'],
    content: `
좋은 아침입니다! BEST winnerVn 교민 여러분. 9월 30일 화요일 BEST MORNING 데일리 리포트입니다.

### 오늘의 하노이 핵심 지표
- **날씨**: 최고 31℃ / 최저 25℃ (구름 조금, 오후 30% 소나기 가능성)
- **습도**: 78% / 미세먼지 지수(AQI): 68 (보통)
- **환율**: 1 KRW = 18.52 VND | 1 USD = 25,420 VND
- **교통 안내**: 하동-미딩 연결 구간 도로 보수 작업으로 인해 오토바이 및 승용차 혼잡이 예상됩니다.
    `
  }
];
