import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  ShieldCheck, 
  Cpu, 
  Calculator, 
  CheckCircle2, 
  Wrench,
  Clock,
  Layers,
  Award,
  Building2,
  Factory,
  Sparkles,
  ChevronRight,
  ChevronLeft,
  ArrowRight,
  ExternalLink,
  Zap,
  FileSpreadsheet,
  ShieldAlert,
  BookOpen,
  Search,
  FolderDown,
  FileCode,
  Check,
  Eye,
  X,
  Maximize2,
  Filter,
  FileDown,
  Play,
  Settings
} from 'lucide-react';

export default function ElevatorSection({ t, onOpenCalculator, defaultSubTab }) {
  const [activeTab, setActiveTab] = useState('home350');
  const [activeSubTab, setActiveSubTab] = useState(defaultSubTab || 'overview'); // 'overview' | 'library' | 'parts' | 'alliance'
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [libraryCategory, setLibraryCategory] = useState('all');
  const [librarySearch, setLibrarySearch] = useState('');
  const [activeCatalogModal, setActiveCatalogModal] = useState(null); // Selected product for Web Catalog Viewer
  const [catalogPage, setCatalogPage] = useState(1); // Web Catalog page (1 to 4)
  const [zoomedImage, setZoomedImage] = useState(null); // High-res image lightbox state
  const [galleryFilter, setGalleryFilter] = useState('all'); // Gallery filter category
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false); // Official 14-page presentation catalog viewer
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);

  const isVi = t?.lang === 'vi' || !t?.lang;

  const elevatorHeroImages = [
    { 
      src: '/images/elevator/1.png', 
      title: 'BEST WINNER Premium Home Elevator', 
      desc: isVi ? 'Công nghệ Thang máy Geochang (Hàn Quốc) × Nhà máy 3.000m² tại Hà Nội' : '한국 거창승강기밸리 기술 × 베트남 하노이 3,000m² 직영 공장',
      tag: 'FLAGSHIP VILLA & RESIDENTIAL'
    },
    { 
      src: '/images/elevator/2.png', 
      title: 'Minimal PIT Retrofit Elevator System', 
      desc: isVi ? 'Hố PIT tối thiểu (300mm~) & Điện 1 pha 220V, phù hợp cải tạo nhà ở' : '최소 PIT(300mm~) & 단상 220V 지원으로 기존 주택 리모델링 완벽 대응',
      tag: 'RETROFIT & RESTRUCTURING'
    },
    { 
      src: '/images/elevator/3.png', 
      title: 'Luxury Stainless & Mirror Cabin Finish', 
      desc: isVi ? 'Hoàn thiện cabin mạ Champagne Gold, Rose Gold Mirror sang trọng' : 'Champagne Gold, Rose Gold Mirror 커스텀 카 인테리어 마감',
      tag: 'CUSTOM CABIN INTERIOR'
    },
    { 
      src: '/images/elevator/4.png', 
      title: 'Commercial & High-Capacity Freight Series', 
      desc: isVi ? 'Dòng thang máy tải hàng & khách cho tòa nhà văn phòng, khách sạn, nhà máy' : '근생 빌딩, 오피스, 호텔 및 공장/물류 전용 화물 승강기 라인업',
      tag: 'COMMERCIAL & INDUSTRIAL'
    },
    { 
      src: '/images/elevator/5.png', 
      title: 'Smart Safety & Emergency ARD System', 
      desc: isVi ? 'Cứu hộ tự động ARD khi mất điện & Giám sát thông minh 24/7' : '정전 시 최우선 층 비상 구출(ARD) 및 24시간 스마트 관제 DB',
      tag: 'SMART SAFETY & MONITORING'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % elevatorHeroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [elevatorHeroImages.length]);

  // Elevator Parts Lifecycle Data extracted from official document
  const partsLifecycle = [
    { part: isVi ? "Biến tần chính (Main Inverter)" : "메인 인버터 (Main Inverter)", cat: isVi ? "Phòng máy / Tủ điện" : "기계실 / 제어반", cycle: isVi ? "7 năm" : "7 년", role: isVi ? "Biến đổi điện năng VVVF & Điều khiển tốc độ chính xác" : "VVVF 고효율 전력 변환 및 정밀 속도 제어", priceVnd: "3.800.000~" },
    { part: isVi ? "Bo mạch điều khiển chính (Main Control PCB)" : "메인 제어 PCB (Main Control PCB)", cat: isVi ? "Phòng máy / Tủ điện" : "기계실 / 제어반", cycle: isVi ? "7 năm" : "7 년", role: isVi ? "Quản lý toàn bộ logic vận hành & Mạch an toàn thang máy" : "승강기 전체 운행 로직 및 안전 회로 통제", priceVnd: "1.600.000~" },
    { part: isVi ? "Thiết bị cứu hộ tự động (ARD)" : "자동 구출 운전 장치 (ARD)", cat: isVi ? "Phòng máy / Tủ điện" : "기계실 / 제어반", cycle: isVi ? "7 năm" : "7 년", role: isVi ? "Tự động đưa thang về tầng gần nhất & mở cửa khi mất điện" : "정전 시 최우선 층 자동 이송 및 문열림 비상구출", priceVnd: "1.700.000~" },
    { part: isVi ? "Nguồn điện dự phòng (UPS) / Intercom" : "비상 전원 장치 (UPS) / 통화장치", cat: isVi ? "Phòng máy / Tủ điện" : "기계실 / 제어반", cycle: isVi ? "5 năm" : "5 년", role: isVi ? "Kết nối trung tâm giám sát 24/7 & Chiếu sáng khẩn cấp" : "비상 정전 시 24시간 관제 센터 통화 및 비상 조명", priceVnd: "950.000~" },
    { part: isVi ? "Động cơ kéo (Traction Machine)" : "구동기 (Traction Machine)", cat: isVi ? "Bộ truyền động / Động cơ" : "구동부 / 권상기", cycle: isVi ? "15 năm" : "15 년", role: isVi ? "Động cơ nam châm vĩnh cửu PM Gearless không hộp số" : "기어리스 영구자석 동기모터 (PM Motor) 핵심 권상", priceVnd: "11.500.000~" },
    { part: isVi ? "Phanh điện từ (Brake System)" : "전자기계 브레이크 (Brake System)", cat: isVi ? "Bộ truyền động / Động cơ" : "구동부 / 권상기", cycle: isVi ? "7 năm" : "7 년", role: isVi ? "Cấu trúc phanh kép hãm khẩn cấp & Giữ bằng tầng" : "이중 브레이크 구조로 비상 제동 및 수평 유지", priceVnd: "1.850.000~" },
    { part: isVi ? "Thiết bị chống vượt tốc (Rope Brake)" : "상승 과속 방지 장치 (Rope Brake)", cat: isVi ? "Hệ thống an toàn" : "안전 시스템", cycle: isVi ? "10 năm" : "10 년", role: isVi ? "Kẹp cáp phanh trực tiếp khi phát hiện vượt tốc chiều lên" : "상승 방향 과속 감지 시 로프 직접 클램핑 제동", priceVnd: "2.600.000~" },
    { part: isVi ? "Thiết bị chống cabin di chuyển khi cửa mở (UCMP)" : "개문 출발 방지 장치 (UCMP)", cat: isVi ? "Hệ thống an toàn" : "안전 시스템", cycle: isVi ? "7 năm" : "7 년", role: isVi ? "Tự động khóa ngay khi phát hiện nguy cơ cabin di chuyển mở cửa" : "문이 열린 채 출발하는 위험 감지 즉시 자동 락", priceVnd: "1.500.000~" },
    { part: isVi ? "Bộ hãm an toàn (Safety Gear)" : "추락 방지 세이프티 기어 (Safety Gear)", cat: isVi ? "Hệ thống an toàn" : "안전 시스템", cycle: isVi ? "15 năm" : "15 년", role: isVi ? "Kẹp cơ khí vào ray dẫn hướng khi đứt cáp chính" : "주로프 파손 시 가이드레일 물리적 웨지 브레이크", priceVnd: "1.800.000~" },
    { part: isVi ? "Cảm biến cửa hồng ngoại (Multi-beam Sensor)" : "멀티빔 도어 센서 (Multi-beam Sensor)", cat: isVi ? "Cabin & Cửa" : "카 및 도어", cycle: isVi ? "5 năm" : "5 년", role: isVi ? "128 kênh tia hồng ngoại chống kẹt tay tuyệt đối" : "128채널 적외선 빔으로 승객 손끼임 완벽 방지", priceVnd: "550.000~" },
    { part: isVi ? "Ray dẫn hướng (Guide Rail)" : "주행 가이드 레일 (Guide Rail)", cat: isVi ? "Hố thang / PIT" : "승강로 / 피트", cycle: isVi ? "20 năm" : "20 년", role: isVi ? "Ray cắt chính xác điều hướng di chuyển thẳng đứng" : "정밀 절삭 가이드레일로 수직 이동 유도", priceVnd: "175.000~ /m" },
    { part: isVi ? "Bộ giảm chấn (Buffer)" : "유압/스프링 완충기 (Buffer)", cat: isVi ? "Hố thang / PIT" : "승강로 / 피트", cycle: isVi ? "15 năm" : "15 년", role: isVi ? "Hấp thụ lực va đập thủy lực khi cabin vượt tầng đáy" : "최하층 오버슈트 시 충격 흡수 유압 완충", priceVnd: "380.000~" }
  ];

  // Official BEST WINNER Global Technical Library Data
  const lgrisLibraryData = {
    partnerInfo: {
      name: "BEST WINNER ELEVATOR GLOBAL TECHNICAL CENTER",
      role: isVi ? "Trung tâm Kỹ thuật & Tiêu chuẩn Thang máy Toàn cầu" : "공식 글로벌 승강기 기술 스펙 & 엔지니어링 센터",
      location: "Hanoi, Vietnam & Geochang Elevator Valley, Korea",
      certifications: ["CE Mark", "ISO 9001 Quality", "ISO 14001 Environmental", "QCVN 32 Elevator Safety"],
      website: "https://bestwinnervn.com",
      desc: isVi ? "BEST WINNER ELEVATOR là thương hiệu chuyên về thang máy tự thiết kế, sản xuất và lắp đặt trực tiếp toàn bộ các dòng thang máy tải khách, thang quan sát, thang gia đình, thang tải hàng và thang cuốn với nhà máy 3.000m² tại Hà Nội." : "BEST WINNER ELEVATOR는 승객용, 전망용, 가정용, 화물용 엘리베이터 및 에스컬레이터 전 제품군을 직접 독자 설계·제작·설치하는 승강기 전문 브랜드로, 독자적인 글로벌 스펙 카탈로그 및 베트남 하노이 3,000m² 직영 공장 생산망을 전개합니다."
    },
    products: [
      {
        id: "passenger",
        modelCode: "BEST PASSENGER P1000",
        title: isVi ? "Dòng Thang máy Tải khách (Passenger Elevator Series)" : "BEST WINNER Passenger Elevator Series (승객용 엘리베이터)",
        category: "passenger",
        catLabel: "Passenger Elevator",
        speed: "1.0 m/s ~ 4.0 m/s",
        capacity: isVi ? "450 kg ~ 1.600 kg (6 ~ 21 người)" : "450 kg ~ 1,600 kg (6 ~ 21명)",
        machineType: isVi ? "MRL (Không phòng máy) & Small MR (Phòng máy nhỏ)" : "MRL (무기계실) & Small MR (소형 기계실)",
        img: "/images/elevator/1.png",
        galleryImages: ["/images/elevator/1.png", "/images/elevator/elevator_cabin.jpg", "/images/elevator/3.png", "/images/elevator/2.png"],
        summary: isVi ? "Giải pháp thang máy tiết kiệm điện với biến tần tái tạo VVVF & Động cơ kéo nam châm vĩnh cửu PM Gearless" : "고효율 VVVF 재생 인버터 및 영구자석 동기권상기(PM Gearless Machine) 탑재 승객용 에코 솔루션",
        features: [
          isVi ? "Trang bị biến tần VVVF Energy Regen tiết kiệm điện lên đến 35%" : "VVVF Energy Regen Inverter 탑재로 표준 운행 대비 전력 감축 최대 35%",
          isVi ? "Cảm biến 3D hồng ngoại 128 kênh chống kẹt an toàn tuyệt đối" : "128채널 적외선 3D 멀티빔 센서 적용으로 손끼임 완전 차단 안전 구동",
          isVi ? "Hệ thống điều khiển nhóm thông minh vi xử lý (Group Control System)" : "최첨단 마이크로컴퓨터 스마트 그룹 제어 시스템 (Group Control System)",
          isVi ? "Công nghệ dừng tầng chính xác & Độ ồn siêu thấp 48dB(A)" : "초저소음 48dB(A) 수평 운행 착상 정밀 기술"
        ]
      },
      {
        id: "panoramic",
        modelCode: "BEST PANORAMIC OBS360",
        title: isVi ? "Dòng Thang máy Quan sát Kính 360° (Panoramic Glass Series)" : "BEST WINNER Panoramic Glass Elevator Series (전망용 / 누드 엘리베이터)",
        category: "panoramic",
        catLabel: "Panoramic Elevator",
        speed: "1.0 m/s ~ 2.5 m/s",
        capacity: isVi ? "630 kg ~ 1.350 kg (8 ~ 18 người)" : "630 kg ~ 1,350 kg (8인승 ~ 18인승)",
        machineType: "Circular / Semi-Circular / Square 3-Side Glass",
        img: "/images/elevator/3.png",
        galleryImages: ["/images/elevator/3.png", "/images/elevator/1.png", "/images/elevator/elevator_cabin.jpg", "/images/elevator/5.png"],
        summary: isVi ? "Thang máy kính quan sát sang trọng bậc nhất kết hợp kính cường lực an toàn 180°~360° và hệ thống đèn LED âm trần" : "180°~360° 파노라마 투명 이중 강화유리와 럭셔리 무드 조명이 어우러진 최고급 시그니처 전망 엘리베이터",
        features: [
          isVi ? "Sử dụng kính cường lực an toàn 2 lớp (Laminated Safety Glass) đảm bảo tầm nhìn 100%" : "이중 구조 안전 접합 강화유리(Laminated Safety Glass)로 100% 시야 확보",
          isVi ? "Đèn LED RGB chiếu sáng điểm nhấn sang trọng tôn lên kiến trúc công trình" : "건축 외관 브랜딩을 극대화하는 커스텀 RGB/LED 엠비언트 하이라이트",
          isVi ? "Khung inox cao cấp mạ Champagne Gold, Rose Gold Mirror Hairline" : "Champagne Gold, Rose Gold Mirror Hairline 고급 스테인리스 프레임",
          isVi ? "Phù hợp thi công cho Khách sạn 5 sao, Trung tâm thương mại & Penthouse cao cấp" : "5성급 호텔, 대형 럭셔리 몰, 하이엔드 펜트하우스 시공"
        ]
      },
      {
        id: "home",
        modelCode: "BEST HOME VILLA350",
        title: isVi ? "Dòng Thang máy Gia đình & Biệt thự (Home & Villa Series)" : "BEST WINNER Home & Villa Elevator Series (가정용 / 빌라 엘리베이터)",
        category: "home",
        catLabel: "Home & Villa Elevator",
        speed: "0.4 m/s ~ 1.0 m/s",
        capacity: isVi ? "250 kg ~ 400 kg (3 ~ 5 người)" : "250 kg ~ 400 kg (3인승 ~ 5인승)",
        machineType: isVi ? "Hố PIT tối thiểu (PIT 300mm & Điện 1 pha 220V)" : "Ultra-Low Pit (최소 300mm PIT & Single Phase 220V)",
        img: "/images/elevator/2.png",
        galleryImages: ["/images/elevator/2.png", "/images/elevator/1.png", "/images/elevator/elevator_cabin.jpg", "/images/elevator/4.png"],
        summary: isVi ? "Giải pháp thang máy Hố PIT tối thiểu & Điện 1 pha 220V phù hợp tuyệt đối cho cải tạo nhà ở và biệt thự" : "바닥 굴착이 어려운 기존 주택 리모델링 및 타운하우스에 최적화된 최소 PIT & 가정용 단상 220V 전원 승강기",
        features: [
          isVi ? "Chiều sâu hố PIT tối thiểu 300mm / Chiều cao đỉnh Overhead 2800mm" : "최소 PIT 깊이 300mm / 오버헤드 2800mm 최첨단 컴팩트 설계",
          isVi ? "Sử dụng trực tiếp điện 1 pha 220V gia đình không cần kéo điện 3 pha" : "별도 고압전력 증설 없이 가정용 단상 220V 전원으로 즉시 운행",
          isVi ? "Trang bị sẵn hệ thống cứu hộ tự động ARD khi mất điện khẩn cấp" : "정전 시 최우선 층 자동 이송 및 문열림 비상구출운전(ARD) 기본 탑재",
          isVi ? "Sử dụng động cơ nam châm vĩnh cửu PM êm ái không tiếng ồn" : "무소음 벨트 밸런서 및 기어리스 PM 동기모터 적용"
        ]
      },
      {
        id: "freight",
        modelCode: "BEST INDUSTRIAL CARGO3000",
        title: isVi ? "Dòng Thang máy Tải hàng Heavy Cargo & Công nghiệp" : "BEST WINNER Heavy Cargo & Industrial Elevator Series (화물 / 공장 승강기)",
        category: "freight",
        catLabel: "Freight Elevator",
        speed: "0.5 m/s ~ 1.0 m/s",
        capacity: isVi ? "1.000 kg ~ 5.000 kg+ (1 ~ 5 tấn)" : "1,000 kg ~ 5,000 kg+ (1톤 ~ 5톤 대형 중화물)",
        machineType: "Heavy Duty Side/Center Opening & Vertical Bi-parting Door",
        img: "/images/elevator/4.png",
        galleryImages: ["/images/elevator/4.png", "/images/elevator/5.png", "/images/elevator/1.png", "/images/elevator/3.png"],
        summary: isVi ? "Khung sàn thép gia cường chịu tải xe nâng (Forklift) trực tiếp & Chống ăn mòn cho nhà máy" : "지게차 직접 진입을 견디는 고강도 바닥 프레임 및 베트남 KCN 공단 특화 방청 갤버나이즈 화물 승강기",
        features: [
          isVi ? "Sàn thép vân nhám gia cường chịu tải lực nén trực tiếp từ xe nâng" : "지게차(Forklift) 진입 충격을 견디는 강철 체커 플레이트 바닥",
          isVi ? "Tấm bảo vệ chống rỉ sét chuyên dụng cho môi trường nhà máy nhiệt đới" : "고습도·진동·부식 환경에 특화된 갈바나이즈드 세이프티 가드",
          isVi ? "Điều khiển dừng tầng chính xác Inching tới 0.1mm khi xuất nhập hàng" : "인버터 인칭(Inching) 착상 제어로 화물 입출고 시 0.1mm 수평 유지",
          isVi ? "Thành tích thi công thực tế tại các khu công nghiệp lớn tại Bắc Ninh, Hải Phòng, Hà Nội" : "하노이 및 주요 산업단지 공장 대형 중화물 시공 레퍼런스"
        ]
      },
      {
        id: "escalator",
        modelCode: "BEST ESCALATOR ESC35",
        title: isVi ? "Dòng Thang cuốn & Băng tải bộ (Escalator & Moving Sidewalk)" : "BEST WINNER Commercial Escalator & Moving Sidewalk Series (에스컬레이터 & 무빙워크)",
        category: "escalator",
        catLabel: "Escalator & Moving Sidewalk",
        speed: "0.5 m/s (Smart Variable Speed)",
        capacity: "9,000 ~ 13,500 passengers / hour",
        machineType: "Escalator 30°/35° & Moving Sidewalk 10°/12°",
        img: "/images/elevator/5.png",
        galleryImages: ["/images/elevator/5.png", "/images/elevator/4.png", "/images/elevator/1.png", "/images/elevator/2.png"],
        summary: isVi ? "Thang cuốn thông minh tự động tiết kiệm điện năng cho Trung tâm thương mại, Siêu thị, Sân bay" : "대형 마트, 공항, 지하철, 복합 쇼핑몰을 위한 VVVF 스마트 정지/출발 자동 에너지 절감 에스컬레이터",
        features: [
          isVi ? "Cảm biến thông minh tự động giảm tốc/dừng khi không có hành khách" : "승객 미탑승 시 대기 모드로 자동 변속되는 스마트 오토 센서",
          isVi ? "Khung Truss cường lực siêu mỏng & Tay vịn đèn LED chống kẹt" : "슬림형 고강도 트러스 프레임 & LED 안티클립 핸드레일",
          isVi ? "Hệ thống phanh ly hợp an toàn chống kẹt chân lược 스텝" : "스텝 빗판 손끼임 방지 멀티 세이프티 클러치 브레이크",
          isVi ? "Cấu trúc chống nước IP55 đạt chuẩn lắp đặt trong nhà và ngoài trời" : "IP55 실내외 옥외형 방수/방진 스텝 조립체"
        ]
      }
    ],
    documents: [
      { id: 1, title: isVi ? "Catalog Kỹ thuật Thang máy Toàn cầu BEST WINNER 2026" : "BEST WINNER 2026 Global Elevator Technical Catalog", size: "12.8 MB", type: "PDF Spec", version: "v2026.1", tag: isVi ? "Catalog Tổng hợp" : "공식 종합 카탈로그" },
      { id: 2, title: isVi ? "QCVN 32:2018/BLDTBXH Quy chuẩn Kỹ thuật Quốc gia về An toàn Thang máy" : "QCVN 32:2018/BLDTBXH National Technical Regulation on Elevator Safety", size: "2.4 MB", type: "PDF Standard", version: "QCVN 32", tag: isVi ? "Quy chuẩn Việt Nam" : "베트남 안전 규격" },
      { id: 3, title: isVi ? "Bộ Bản vẽ Thiết kế CAD Kiến trúc Hố thang & PIT Biệt thự Chuẩn" : "Standard Villa Hoistway & Pit Civil CAD Drawings Pack", size: "15.3 MB", type: "CAD (.DWG)", version: "CAD v3.0", tag: isVi ? "Bộ Bản vẽ CAD" : "건축 도면 팩" },
      { id: 4, title: isVi ? "Sơ đồ Mạch điện & Hướng dẫn Thiết bị Cứu hộ Tự động ARD" : "BEST WINNER ARD Automatic Emergency Rescue Device Manual & Wiring", size: "3.1 MB", type: "PDF Manual", version: "v1.4", tag: isVi ? "Cẩm nang ARD" : "비상구출 매뉴얼" },
      { id: 5, title: isVi ? "Ma trận Chu kỳ Bảo trì & Thay thế Linh kiện Thang máy Chuẩn" : "Elevator Component Maintenance Lifecycle Matrix (Standard Replacement)", size: "1.8 MB", type: "PDF Matrix", version: "v2.0", tag: isVi ? "Cẩm nang Bảo trì" : "유지보수 매뉴얼" }
    ]
  };

  // Official 14-Page Catalog Presentation Pages List
  const officialPresentationPages = [
    { page: 1, title: isVi ? "Trang bìa & Tầm nhìn" : "표지 및 비전", subtitle: "Korean Tech × Vietnam Production", src: "/images/elevator/gallery/catalog_page_1.webp" },
    { page: 2, title: isVi ? "Nhà máy 3.000m² tại Hà Đông, Hà Nội" : "하노이 하동 3,000m² 직영 공장", subtitle: isVi ? "Công suất 250+ cabin/năm & Đội ngũ 17 kỹ sư chuyên trách" : "연간 250대+ 카빈 조립 및 기술진 17명", src: "/images/elevator/gallery/catalog_page_2.webp" },
    { page: 3, title: isVi ? "Hợp tác Geochang Valley & Chứng nhận" : "거창 승강기 밸리 협력 & 인증", subtitle: isVi ? "Chứng nhận an toàn quốc gia QCVN 32, CE, ISO 9001" : "베트남 QCVN 32, CE, ISO 9001 국가 안전 인증", src: "/images/elevator/gallery/catalog_page_3.webp" },
    { page: 4, title: isVi ? "Dòng chủ lực BEST HOME 350" : "플래그십 BEST HOME 350", subtitle: isVi ? "350kg / Điện 1 pha 220V / Hố PIT tối thiểu 300mm" : "350kg / 단상 220V / 최소 300mm PIT 리모델링", src: "/images/elevator/gallery/catalog_page_4.webp" },
    { page: 5, title: isVi ? "Dòng Thang tải khách & Thương mại" : "승객용 & 상업용 승강기 라인업", subtitle: isVi ? "Dòng thang máy tải khách cao tốc VVVF 450kg ~ 1600kg" : "450kg ~ 1600kg VVVF 고속 승객용 라인업", src: "/images/elevator/gallery/catalog_page_5.webp" },
    { page: 6, title: isVi ? "Thang máy Quan sát Kính 360°" : "전망용 360° 파노라마 승강기", subtitle: isVi ? "Kính cường lực 2 lớp an toàn & Khung inox mạ vàng sang trọng" : "이중 안전 접합 강화유리 & 골드 미니멀 프레임", src: "/images/elevator/gallery/catalog_page_6.webp" },
    { page: 7, title: isVi ? "Mẫu BEST-GOLD-01 Gương Vàng Champagne" : "BEST-GOLD-01 샴페인 골드 미러", subtitle: isVi ? "Mạ titan gương Vàng Champagne & Hoa văn ăn khắc tinh xảo" : "티타늄 샴페인 골드 거울 마감 & 패턴 에칭", src: "/images/elevator/gallery/catalog_page_7.webp" },
    { page: 8, title: isVi ? "Mẫu BEST-SILVER-02 Inox Hairline" : "BEST-SILVER-02 스테인리스 헤어라인", subtitle: isVi ? "Lớp phủ chống vân tay AFP & Nội thất hiện đại" : "지문 방지 AFP 코팅 모던 인테리어 마감", src: "/images/elevator/gallery/catalog_page_8.webp" },
    { page: 9, title: isVi ? "Mẫu BEST-BLACK-03 Titan Đen & Rose Gold" : "BEST-BLACK-03 블랙 티타늄 & 로즈골드", subtitle: isVi ? "Gương Titan Đen + Hoa văn Laser mạ Vàng Hồng" : "블랙 티타늄 미러 + 로즈골드 레이저 패턴", src: "/images/elevator/gallery/catalog_page_9.webp" },
    { page: 10, title: isVi ? "Tùy chọn Đèn trần & Sàn Thang máy" : "천장 조명 & 바닥 마감 옵션", subtitle: isVi ? "Trần LED khắc hoa văn & Sàn đá cẩm thạch / PVC cao cấp" : "LED 레이저 타공 천장 & PVC 마블/화강석 바닥", src: "/images/elevator/gallery/catalog_page_10.webp" },
    { page: 11, title: isVi ? "Thang máy Tải hàng & Thang cuốn" : "화물 승강기 & 에스컬레이터", subtitle: isVi ? "Sàn nhám gia cường 1-5 tấn & Thang cuốn tự động" : "1톤~5톤 강철 체커 바닥 & 오토 에스컬레이터", src: "/images/elevator/gallery/catalog_page_11.webp" },
    { page: 12, title: isVi ? "Thực tế Thi công Biệt thự Hà Nội 1" : "하노이 빌라 실제 준공 갤러리 1", subtitle: isVi ? "Dự án biệt thự tại Tây Hồ, Mỹ Đình, Hà Nội" : "하노이 서호(Tay Ho), 미딩(My Dinh) 빌라 시공", src: "/images/elevator/gallery/catalog_page_12.webp" },
    { page: 13, title: isVi ? "Thực tế Thi công Nhà ở & Thương mại 2" : "하노이 상업/주택 준공 갤러리 2", subtitle: isVi ? "Thi công thang máy gia đình Hố PIT 300mm nhà 6 tầng Hà Nội" : "하노이 근교 6층 타운하우스 300mm PIT 시공", src: "/images/elevator/gallery/catalog_page_13.webp" },
    { page: 14, title: isVi ? "Bảo hành & Hệ thống A/S Thông minh" : "스마트 A/S 및 무상 보증 시스템", subtitle: isVi ? "Bảo hành trực tiếp 12 tháng & Đội ứng cứu khẩn cấp 24/7" : "1년 무상 직영 보증 & 24/7 원격 긴급 출동", src: "/images/elevator/gallery/catalog_page_14.webp" }
  ];

  const realGalleryPhotos = [
    {
      id: 1,
      title: isVi ? "BEST-GOLD-01 — Cabin Gương Vàng Champagne & Hoa văn" : "BEST-GOLD-01 — 샴페인 골드 미러 & 에칭 카빈",
      category: isVi ? "Nội thất Cabin / Biệt thự" : "카빈 인테리어 / 빌라 플래그십",
      filterCategory: "cabin",
      desc: isVi ? "Trang 7 Catalog / Inox gương Titan Champagne Gold + Lớp phủ chống vân tay & Đèn LED âm trần" : "공식 카다로그 p.7 / 티타늄 샴페인 골드 거울 마감 + 미세 지문 방지 패턴 에칭 & LED 간접 무드 천장 조명",
      src: "/images/elevator/gallery/catalog_page_7.webp",
      slidePage: 7,
      tag: "CATALOG PAGE 7",
      details: [
        { label: "Chất liệu", val: "Titanium Champagne Gold Mirror & Etching" },
        { label: "Đèn trần", val: "Direct LED + Indirect Mood LED" },
        { label: "Sàn cabin", val: "High-grade PVC Marble / Real Granite" },
        { label: "Bảng COP", val: "Full-height Touch Digital COP Panel" }
      ]
    },
    {
      id: 2,
      title: isVi ? "BEST-SILVER-02 — Inox Hairline & Chống vân tay AFP" : "BEST-SILVER-02 — 스테인리스 헤어라인 & AFP 지문방지",
      category: isVi ? "Nội thất Cabin / Hiện đại Standard" : "카빈 인테리어 / 모던 스탠다드",
      filterCategory: "cabin",
      desc: isVi ? "Trang 8 Catalog / Lớp phủ chống vân tay AFP Inox Hairline độ bền cao & Đèn trần LED siêu mỏng" : "공식 카다로그 p.8 / 지문 방지 코팅(AFP) 고내구성 스테인리스 헤어라인 & 초슬림 LED 레이저 타공 천장",
      src: "/images/elevator/gallery/catalog_page_8.webp",
      slidePage: 8,
      tag: "CATALOG PAGE 8",
      details: [
        { label: "Chất liệu", val: "Anti-Fingerprint (AFP) Stainless Hairline" },
        { label: "Đèn trần", val: "Ultra-slim Laser Cut Direct LED Panel" },
        { label: "Sàn cabin", val: "Durable PVC Tile / Non-slip Checker Plate" },
        { label: "Bảng COP", val: "Stainless Mechanical Push Button COP" }
      ]
    },
    {
      id: 3,
      title: isVi ? "BEST-BLACK-03 — Titan Đen & Hoa văn Laser Rose Gold" : "BEST-BLACK-03 — 블랙 티타늄 & 로즈골드 레이저 에칭",
      category: isVi ? "Nội thất Cabin / Hoàng gia Royal" : "카빈 인테리어 / 로열 프리미엄",
      filterCategory: "cabin",
      desc: isVi ? "Trang 9 Catalog / Gương Titan Đen + Hoa văn Laser Rose Gold & Đèn trần ấm áp sang trọng" : "공식 카다로그 p.9 / 블랙 티타늄 미러 + 로즈골드 레이저 에칭 패턴 & 아늑한 무드 브라운 조명",
      src: "/images/elevator/gallery/catalog_page_9.webp",
      slidePage: 9,
      tag: "CATALOG PAGE 9",
      details: [
        { label: "Chất liệu", val: "Black Titanium Mirror + Rose Gold Laser" },
        { label: "Đèn trần", val: "Warm Ambient Mood LED Ceiling Panel" },
        { label: "Sàn cabin", val: "Custom Patterned Natural Granite Floor" },
        { label: "Bảng COP", val: "Black Mirror Touch COP & Voice Guide" }
      ]
    },
    {
      id: 4,
      title: isVi ? "BEST PANORAMIC — Thang máy Kính Quan sát 360°" : "BEST PANORAMIC — 360° 파노라마 투명 글래스 승강기",
      category: isVi ? "Thang máy Kính / Quan sát" : "전망용 / 누드 엘리베이터",
      filterCategory: "cabin",
      desc: isVi ? "Trang 6 Catalog / Kính cường lực 2 lớp an toàn tầm nhìn 360° & Khung inox mạ vàng champagne" : "공식 카다로그 p.6 / 이중 구조 안전 접합 강화유리 360° 파노라마 뷰 및 샴페인 골드 미니멀 프레임",
      src: "/images/elevator/gallery/catalog_page_6.webp",
      slidePage: 6,
      tag: "CATALOG PAGE 6",
      details: [
        { label: "Cấu trúc kính", val: "3-Side Laminated Tempered Safety Glass" },
        { label: "Hiệu ứng đèn", val: "Circular RGB/LED Ambient Soft Halo Light" },
        { label: "Sàn cabin", val: "Circular Granite / Marble Mosaic Floor" },
        { label: "Vị trí áp dụng", val: "5-Star Hotels, Luxury Vlllas & Penthouse" }
      ]
    },
    {
      id: 5,
      title: isVi ? "Nhà máy 3.000m² tại Hà Đông, Hà Nội - Sản xuất & Kiểm định Cabin" : "하노이 하동 3,000m² 직영 공장 카빈 생산 & 검수 현장",
      category: isVi ? "Nhà máy Hà Nội / Sản xuất Trực tiếp" : "베트남 현지 공장 / 직영 제조",
      filterCategory: "factory",
      desc: isVi ? "Trang 2 Catalog / Gia công laser khung cabin công suất 250+ thang/năm & Kiểm định 출하 nghiêm ngặt bởi 17 kỹ sư" : "공식 카다로그 p.2 / 연간 250대+ 카빈 구조체 레이저 가공, 접합 및 17인 기술진 엄격 출하 전 검수",
      src: "/images/elevator/gallery/catalog_page_2.webp",
      slidePage: 2,
      tag: "HANOI FACTORY",
      details: [
        { label: "Quy mô nhà máy", val: "Hanoi Ha Dong 3,000m² Direct Plant" },
        { label: "Năng lực sản xuất", val: "250+ Cabins Annual Assembly & Cutting" },
        { label: "Nhân lực kỹ thuật", val: "17 Engineers (2 Korean Chiefs + 15 Local)" },
        { label: "Kiểm soát chất lượng", val: "Pre-shipment 48-point Test Run" }
      ]
    },
    {
      id: 6,
      title: isVi ? "Hợp tác Geochang Elevator Valley & Chứng nhận Quốc gia QCVN 32" : "거창 승강기 밸리 협력 & 베트남 QCVN 32 국가 인증",
      category: isVi ? "Hợp tác Kỹ thuật / Chứng nhận An toàn" : "기술 협력 / 안전 인증",
      filterCategory: "factory",
      desc: isVi ? "Trang 3 Catalog / Mạng lưới kỹ thuật Geochang Valley (Joeun, Modun, Majortech) & Đạt chuẩn QCVN 32 Việt Nam" : "공식 카다로그 p.3 / 한국 거창승강기밸리(조은, 모든, 메이저텍 등) 기술 네트워크 및 베트남 국가 규정 충족",
      src: "/images/elevator/gallery/catalog_page_3.webp",
      slidePage: 3,
      tag: "CERTIFICATION & ALLIANCE",
      details: [
        { label: "Hợp tác kỹ thuật", val: "JOEUN ELEVATOR & Geochang Cluster" },
        { label: "Chuẩn an toàn", val: "QCVN 32:2018/BLDTBXH Safety Certified" },
        { label: "Linh kiện cốt lõi", val: "Korean PM Traction Machine & Safety Gear" },
        { label: "Bảo hành", val: "1-Year Direct Factory Warranty" }
      ]
    },
    {
      id: 7,
      title: isVi ? "BEST HOME 350 — Thang máy Chuẩn cho Biệt thự & Townhouse" : "BEST HOME 350 — 베트남 빌라/타운하우스 표준형",
      category: isVi ? "Dòng sản phẩm / Chủ lực" : "라인업 & 스펙 / 플래그십",
      desc: isVi ? "Trang 4 Catalog / Tải trọng 350kg (4-5 người), Điện 1 pha 220V, Hố PIT tối thiểu 300mm phù hợp cải tạo nhà" : "공식 카다로그 p.4 / 350kg (4-5인승), 단상 220V, 최소 300mm PIT 깊이 구동으로 리모델링 완벽 시공",
      src: "/images/elevator/gallery/catalog_page_4.webp",
      slidePage: 4,
      tag: "CATALOG PAGE 4",
      details: [
        { label: "Tải trọng", val: "350 kg (4-5 Persons)" },
        { label: "Số tầng phục vụ", val: "3 to 7 Stops (Max 30m Rise)" },
        { label: "Nguồn điện", val: "Single Phase 220V Home Power" },
        { label: "Độ sâu Hố PIT", val: "Min 300mm Ultra-Low Pit Retrofit" }
      ]
    },
    {
      id: 8,
      title: isVi ? "Mẫu Đèn trần LED & Tùy chọn Sàn Đá / PVC Cẩm thạch" : "천장 LED 조명 패턴 & 고급 PVC 마블/화강석 바닥 옵션",
      category: isVi ? "Tùy chọn Nội thất / Trần & Sàn" : "인테리어 옵션 / 천장 & 바닥",
      desc: isVi ? "Trang 10 Catalog / Đèn trần LED khắc hoa văn, Sàn PVC vân cẩm thạch chịu lực & Sàn đá tự nhiên" : "공식 카다로그 p.10 / 레이저 타공 LED 천장 조명, 내마모성 PVC 마블 타일 및 천연 화강석 바닥 선택",
      src: "/images/elevator/gallery/catalog_page_10.webp",
      slidePage: 10,
      tag: "CATALOG PAGE 10",
      details: [
        { label: "Trần cabin", val: "Direct / Indirect Laser Cut LED Ceiling" },
        { label: "Tay vịn", val: "Champagne Gold / Stainless Round Rail" },
        { label: "Sàn cabin", val: "Marble Pattern PVC / Natural Granite" },
        { label: "Nút bấm", val: "Vandal-resistant LED Push Buttons" }
      ]
    },
    {
      id: 9,
      title: isVi ? "Thang máy Tải hàng Heavy Cargo 5 tấn & Kết cấu xe nâng vào trực tiếp" : "5톤급 Heavy Cargo 화물 승강기 & 지게차 직접 진입 구조",
      category: isVi ? "Thang tải hàng / Công nghiệp" : "화물 & 공장 / 산업용",
      filterCategory: "lineup",
      desc: isVi ? "Trang 11 Catalog / Sàn thép vân nhám chịu va đập xe nâng & Tải trọng lớn 1 tấn ~ 5 tấn" : "공식 카다로그 p.11 / 지게차 진입 충격을 견디는 강철 체커 플레이트 바닥 & 1톤~5톤 대용량 화물승강기",
      src: "/images/elevator/gallery/catalog_page_11.webp",
      slidePage: 11,
      tag: "CATALOG PAGE 11",
      details: [
        { label: "Tải trọng hàng", val: "1,000 kg ~ 5,000 kg Heavy Load" },
        { label: "Kiểu cửa", val: "Heavy Duty Bi-parting & Side Open" },
        { label: "Độ bền sàn", val: "Reinforced Steel Checker Plate" },
        { label: "Hệ điều khiển", val: "High-torque VVVF Inverter Control" }
      ]
    },
    {
      id: 10,
      title: isVi ? "Công trình thực tế Biệt thự cao cấp tại Quận Tây Hồ, Hà Nội" : "하노이 서호(Tây Hồ) 고급 빌라 현장 실제 시공 갤러리",
      category: isVi ? "Công trình Thực tế / Biệt thự Hà Nội" : "실제 시공 현장 / 하노이 빌라",
      filterCategory: "sites",
      desc: isVi ? "Trang 12 Catalog / Cabin mạ vàng Champagne Gold & Khung cửa inox hoàn thiện tại biệt thự Tây Hồ" : "공식 카다로그 p.12 / 샴페인 골드 미러 카빈 및 층별 인테리어 도어 프레임 마감 준공 현장",
      src: "/images/elevator/gallery/catalog_page_12.webp",
      slidePage: 12,
      tag: "TAY HO VILLA SITE",
      details: [
        { label: "Địa điểm", val: "Tay Ho District, Hanoi, Vietnam" },
        { label: "Loại công trình", val: "5-Story Luxury Villa Residence" },
        { label: "Dòng sản phẩm", val: "BEST HOME 350 Gold Mirror Custom" },
        { label: "Trạng thái", val: "Completed & Operating (Active Maintenance)" }
      ]
    },
    {
      id: 11,
      title: isVi ? "Lắp đặt Thang máy Hố PIT 300mm cho Nhà phố 6 tầng tại Mỹ Đình, Hà Nội" : "하노이 미딩(Mỹ Đình) 기존 6층 타운하우스 300mm PIT 시공",
      category: isVi ? "Công trình Thực tế / Cải tạo Nhà ở" : "실제 시공 현장 / 주택 리모델링",
      filterCategory: "sites",
      desc: isVi ? "Trang 13 Catalog / Lắp đặt thang máy không đào sâu móng với Hố PIT 300mm tận dụng không gian giếng trời" : "공식 카다로그 p.13 / 바닥 굴착 없이 최소 300mm PIT 조건으로 계단참 공간을 활용한 홈승강기 설치",
      src: "/images/elevator/gallery/catalog_page_13.webp",
      slidePage: 13,
      tag: "MY DINH RETROFIT",
      details: [
        { label: "Địa điểm", val: "My Dinh District, Hanoi, Vietnam" },
        { label: "Loại công trình", val: "6-Story Townhouse Retrofit" },
        { label: "Kết cấu Hố PIT", val: "300mm Shallow Pit Special Civil Work" },
        { label: "Nguồn điện", val: "Single Phase 220V Home Power" }
      ]
    },
    {
      id: 12,
      title: isVi ? "Trung tâm Bảo trì 24/7 & Quản lý Mã QR Thông minh" : "24/7 원격 정비 긴급 출동 & 스마트 A/S QR 시스템",
      category: isVi ? "Bảo trì & Dịch vụ / A/S Thông minh" : "유지보수 & 서비스 / 스마트 A/S",
      filterCategory: "factory",
      desc: isVi ? "Trang 14 Catalog / Quản lý linh kiện qua mã QR, Cứu hộ tự động ARD khi mất điện & Ứng cứu 24/7" : "공식 카다로그 p.14 / QR코드 승강기 부품 이력 관리, 정전 시 비상구출(ARD) 및 24시간 긴급 A/S 체계",
      src: "/images/elevator/gallery/catalog_page_14.webp",
      slidePage: 14,
      tag: "SMART SERVICE A/S",
      details: [
        { label: "Hệ thống ARD", val: "Automatic Rescue Device (ARD) Active" },
        { label: "Truy xuất 이력", val: "QR-code Component Maintenance Tracking" },
        { label: "Ứng cứu khẩn cấp", val: "Under 30-min Emergency Response in Hanoi" },
        { label: "Chế độ bảo hành", val: "12-Month Free Guarantee + Monthly Check" }
      ]
    }
  ];

  // Comprehensive Elevator Model Data
  const elevatorData = {
    companyName: "BEST WINNER ELEVATOR VN",
    slogan: "Korean Technology × Vietnamese Production × Local Service",
    vision: isVi ? "“Chúng tôi không chỉ bán thang máy, chúng tôi hoàn thiện giá trị đích thực cho ngôi nhà của bạn”" : "“엘리베이터를 파는 회사가 아니라, 주택의 가치를 완성하는 기업”",
    stats: [
      { label: isVi ? "Kinh nghiệm hoạt động tại VN" : "베트남 현지 사업 경력", value: "7 năm", desc: isVi ? "Đã thi công 180+ thang tại Hà Nội & các tỉnh" : "하노이 및 주요 도시 180대+ 준공" },
      { label: isVi ? "Thành tích Lắp đặt & Bàn giao" : "실제 납품·설치 실적", value: "180대+", desc: isVi ? "Nhà phố, Biệt thự, Tòa nhà thương mại" : "타운하우스·빌라·상업시설 레퍼런스" },
      { label: isVi ? "Nhà máy Sản xuất Trực tiếp" : "직영 공장 생산 연계", value: "3.000m²", desc: isVi ? "Nhà máy sản xuất Cabin tại Hà Đông, Hà Nội" : "하노이 하동 자체 Cabin 제작" },
      { label: isVi ? "Đội ngũ Kỹ sư Chuyên trách" : "직영 엔지니어링 팀", value: "17명", desc: isVi ? "2 Chuyên gia Hàn Quốc + 15 Kỹ sư VN" : "한국인 수석 기술진 2인 + 현지 15인" }
    ],
    partners: [
      {
        name: isVi ? "JOEUN ELEVATOR (좋은엘리베이터)" : "좋은엘리베이터 (JOEUN ELEVATOR)",
        role: isVi ? "Hợp tác Kỹ thuật Cốt lõi & Cung cấp Tủ điều khiển Chính xác" : "핵심 기술 협력 & 정밀 제어 시스템 공급",
        desc: isVi ? "Chia sẻ bí quyết thiết kế & công nghệ thang máy Hàn Quốc, cùng phát triển thị trường Việt Nam" : "한국 승강기 전문 기술력 및 설계 노하우 공유, 베트남 시장 공동 전개",
        website: "https://joeunel.com"
      },
      {
        name: isVi ? "Cụm Thang máy Geochang Hàn Quốc (Geochang Elevator Valley)" : "거창 승강기 산업 클러스터 (Geochang Elevator Valley)",
        role: isVi ? "Mạng lưới Hợp tác Kỹ thuật & Linh kiện Cụm Thang máy Hàn Quốc" : "한국 승강기 특화단지 기술·부품 협력 네트워크",
        desc: isVi ? "Hợp tác cùng Modun Elevator, Majortech (Phanh cáp/Ray dẫn), Keumgang (Động cơ/Chống động đất), Anseung (Bảo trì)" : "모든엘리베이터(완성품), 메이저텍(로프브레이크/가이드레일), 금강엔지니어링(내진/권상기), 안승엘리베이터(유지보수)"
      }
    ],
    models: {
      home350: {
        id: "home350",
        name: "BEST HOME 350",
        tag: isVi ? "Dòng Thang máy Gia đình / Biệt thự (Flagship Home)" : "플래그십 빌라/타운하우스 전용 (Flagship Home)",
        capacity: "350 kg (4 ~ 5인승)",
        floors: "3 ~ 7 층 (Nhà phố & Villa)",
        speed: "0.4 ~ 1.0 m/s",
        pitDepth: "최소 300 mm ~ (최소 PIT 설계)",
        power: "단상 220V 또는 삼상 380V",
        baseVnd: "350.000.000 VNĐ",
        features: [
          isVi ? "Tủ điều khiển & Biến tần chính xác từ Cụm Thang máy Geochang Hàn Quốc" : "한국 거창 승강기밸리 정밀 제어반 & 인버터 적용",
          isVi ? "Sản xuất Cabin may đo trực tiếp tại Nhà máy 3.000m² Hà Nội" : "하노이 3,000m² 직영 공장 연계 Cabin 인테리어 맞춤 제작",
          isVi ? "Hố PIT tối thiểu 300mm~ không cần đào móng sâu, thích hợp tuyệt đối cho cải tạo nhà ở" : "최소 PIT 깊이(300mm~) 구조로 바닥 굴착이 어려운 기존 주택 리모델링(Retrofit) 완벽 대응",
          isVi ? "Sử dụng điện 1 pha 220V gia đình, không tốn chi phí kéo điện 3 pha" : "단상 220V 가정용 전원 지원으로 별도 고압전력 공사 및 전기 증설 불필요",
          isVi ? "Trang bị sẵn Hệ thống cứu hộ tự động ARD đưa thang về tầng gần nhất khi mất điện" : "정전 시 최우선 층 자동 이송 및 문열림 비상구출운전(ARD) 기본 탑재",
          isVi ? "Tùy chọn đa dạng: Champagne Gold Mirror, Rose Gold, Hairline Inox, Kính quan sát Panoramic" : "Champagne Gold Mirror, Rose Gold, Hairline Stainless, Panoramic Glass 등 다채로운 인테리어 Option"
        ],
        recommended: isVi ? "Nhà phố 3~7 tầng xây mới hoặc cải tạo, Biệt thự cao cấp tại Hà Nội & các tỉnh thành" : "하노이/주요 도시 3~7층 신축 타운하우스, 고급 빌라, 기존 주택 리모델링"
      },
      commercial: {
        id: "commercial",
        name: "BEST Commercial Series",
        tag: isVi ? "Tòa nhà Thương mại / Văn phòng / Khách sạn (Commercial)" : "상업 빌딩 / 오피스 / 호텔 (Commercial)",
        capacity: "450 ~ 1,000 kg (6 ~ 13인승)",
        floors: "5 ~ 20 층",
        speed: "1.0 ~ 1.75 m/s",
        pitDepth: "1,200 mm ~",
        power: "삼상 380V / 50Hz",
        baseVnd: "415.000.000 VNĐ~",
        features: [
          isVi ? "Biến tần VVVF điều khiển êm ái, vận hành mượt mà ở tốc độ cao" : "VVVF 변속 제어로 고속 운행 중 최고 수준의 정숙성 및 승차감 제공",
          isVi ? "Kết nối Hệ thống Giám sát Thông minh DB 24/7 phát hiện lỗi & hỗ trợ kỹ thuật chủ động" : "24시간 스마트 관제 DB 시스템 연계 실시간 장애 감지 및 선제적 A/S",
          isVi ? "Biến tần tái tạo năng lượng Energy Regen tiết kiệm tới 35% điện năng" : "Energy Regen Inverter 탑재로 감속 시 전력을 재활용하여 전력 소비 최대 35% 절감",
          isVi ? "Các tùy chọn cabin Stainless Hairline / Mirror / Etching cao cấp" : "Stainless Hairline / Mirror / Etching 고급 캐빈 옵션",
          isVi ? "Kết nối hệ thống báo cháy khẩn cấp & cảm biến động đất" : "화재 비상 운전 및 지진 감지 제어 시스템 연계"
        ],
        recommended: isVi ? "Tòa nhà văn phòng vừa và nhỏ, Khách sạn boutique, Bệnh viện, Trường học" : "근생 빌딩, 중소형 오피스, boutique 호텔, 병원 및 학원 시설"
      },
      industrial: {
        id: "industrial",
        name: "BEST Heavy Cargo & Industrial",
        tag: isVi ? "Nhà máy / Trung tâm Logictics / Siêu thị (Cargo & Industrial)" : "공장 / 물류센터 / 대형 마트 (Cargo & Industrial)",
        capacity: "1,000 ~ 3,000+ kg",
        floors: "2 ~ 10 층",
        speed: "0.5 ~ 1.0 m/s",
        pitDepth: "1,400 mm ~",
        power: "삼상 380V / 50Hz",
        baseVnd: "630.000.000 VNĐ~",
        features: [
          isVi ? "Kết cấu khung sàn thép gia cường chịu tải trực tiếp từ xe nâng (Forklift)" : "지게차(Forklift) 직접 진입을 견디는 고강도 바닥 및 프레임 구조",
          isVi ? "Cửa thép va đập nặng & Cảm biến an toàn Safety Edge" : "중하중 충격 방지 강철 도어 및 세이프티 엣지 센서 탑재",
          isVi ? "Vật liệu chống rỉ sét mạ kẽm thích ứng môi trường độ ẩm/vật lý nhà máy tại Việt Nam" : "베트남 공단 환경(습기/부식/진동)에 특화된 방청 갤버나이즈 내장재",
          isVi ? "Điều khiển Inching dừng tầng chính xác tuyệt đối khi bốc xếp hàng hóa" : "인버터 인칭(Inching) 제어로 정확한 바닥 수평 착상 구현"
        ],
        recommended: isVi ? "Nhà máy sản xuất tại các KCN Việt Nam, Kho vận logistics, Trung tâm thương mại" : "베트남 공단 내 제조 공장, 물류창고, 대형 쇼핑몰 및 화물 전용"
      }
    }
  };

  return (
    <section id="elevator" className="py-16 bg-navy-900/60 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Dynamic Elevator Hero Image Slider Showcase (1.png ~ 5.png) */}
        <div className="relative min-h-[420px] sm:min-h-[480px] rounded-3xl overflow-hidden mb-14 border border-gold-500/40 shadow-2xl flex items-center bg-navy-900">
          {/* Rotating Background Images */}
          {elevatorHeroImages.map((slide, idx) => (
            <div
              key={idx}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                currentHeroSlide === idx ? 'opacity-85 sm:opacity-75 scale-105' : 'opacity-0 scale-100'
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
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/30"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60"></div>

          {/* Hero Banner Text Content */}
          <div className="relative z-10 p-6 sm:p-12 max-w-3xl space-y-4">
            <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1.5 rounded-full text-xs font-bold border border-gold-500/40 backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{elevatorHeroImages[currentHeroSlide].tag} — BEST WINNER ELEVATOR</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
              {elevatorHeroImages[currentHeroSlide].title}
            </h1>

            <p className="text-sm sm:text-xl font-bold text-gold-300 leading-snug break-keep">
              {elevatorHeroImages[currentHeroSlide].desc}
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl font-normal break-keep">
              {isVi 
                ? 'Hợp tác kỹ thuật cùng Cụm Thang máy Geochang & Joeun Elevator Hàn Quốc, sản xuất trực tiếp tại Nhà máy 3.000m² Hà Nội với thành tích hơn 180 dự án đã hoàn thành trong 7 năm qua.' 
                : '한국 거창승강기밸리 및 좋은엘리베이터 기술 협력, 하노이 3,000m² 직영 공장의 Cabin 제작, 그리고 7년간 180대 이상의 시공 레퍼런스를 자랑합니다.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-3">
              <button
                onClick={onOpenCalculator}
                className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-all text-xs sm:text-sm flex items-center justify-center space-x-2"
              >
                <Calculator className="w-4 h-4 stroke-[2.5]" />
                <span>{isVi ? 'Hệ thống tính giá trực tuyến (Chuẩn 4 tầng 350kg từ 400 triệu VNĐ) →' : '4층·350kg 기준 4억VND 실시간 견적 시스템 →'}</span>
              </button>
            </div>
          </div>

          {/* Slide Controls & Indicators */}
          <div className="absolute bottom-6 right-6 z-20 flex items-center space-x-3">
            <div className="flex space-x-1.5">
              {elevatorHeroImages.map((_, idx) => (
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
                onClick={() => setCurrentHeroSlide((prev) => (prev - 1 + elevatorHeroImages.length) % elevatorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title={isVi ? "Slide trước" : "이전 슬라이드"}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentHeroSlide((prev) => (prev + 1) % elevatorHeroImages.length)}
                className="p-2 rounded-lg bg-navy-900/80 text-slate-300 hover:text-white border border-gold-500/30 transition-colors"
                title={isVi ? "Slide tiếp" : "다음 슬라이드"}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-extrabold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3.5 py-1 rounded-full border border-gold-500/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ② — OFFICIAL SPECIFICATION</span>
              </span>
              <span className="text-xs font-mono text-chrome-300">EST. 2017 in VIETNAM</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              {elevatorData.companyName}
            </h2>
            <p className="text-sm sm:text-base text-gold-300 font-semibold italic">
              "{elevatorData.slogan}"
            </p>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              {isVi 
                ? 'Giải pháp thang máy cao cấp hàng đầu Việt Nam sở hữu công nghệ kỹ thuật thang máy chính xác từ Cụm Thang máy Geochang & Joeun Elevator Hàn Quốc, sản xuất trực tiếp tại Nhà máy 3.000m² Hà Nội với hơn 180 công trình đã bàn giao.' 
                : '한국 거창승강기밸리 및 좋은엘리베이터의 정밀 승강기 엔지니어링 기술과 베트남 하노이 3,000m² 직영 공장의 Cabin 제작, 그리고 7년간 180대 이상의 시공 레퍼런스를 보유한 베트남 대표 프리미엄 승강기 솔루션입니다.'}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-3">
            <button
              onClick={onOpenCalculator}
              className="bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-black px-6 py-3 rounded-xl shadow-gold-glow text-xs flex items-center space-x-2 transition-transform hover:scale-[1.02]"
            >
              <Calculator className="w-4 h-4 stroke-[2.5]" />
              <span>{isVi ? 'Hệ thống tính giá tự động VNĐ →' : 'VND 자동 견적 시스템 →'}</span>
            </button>
          </div>
        </div>

        {/* 4 Key Metrics Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {elevatorData.stats.map((st, idx) => (
            <div key={idx} className="glass-card p-5 rounded-2xl border border-navy-700 hover:border-gold-500/40 transition-all text-center">
              <span className="text-2xl sm:text-4xl font-extrabold gold-gradient-text block">
                {st.value}
              </span>
              <span className="text-xs font-bold text-white mt-1 block">{st.label}</span>
            </div>
          ))}
        </div>

        {/* Official YouTube Promotional Video Showcase Section */}
        <div id="promo-video" className="glass-card-chrome p-6 sm:p-10 rounded-3xl border border-gold-500/40 mb-14 shadow-2xl overflow-hidden relative">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="inline-flex items-center space-x-2 bg-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-red-500/40 mb-2">
                <Play className="w-3.5 h-3.5 fill-red-400" />
                <span>OFFICIAL PROMOTIONAL VIDEO</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                {isVi ? 'Video Quảng bá Chính thức BEST WINNER ELEVATOR VN' : 'BEST WINNER ELEVATOR VN 공식 홍보 동영상'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {isVi ? 'Mạng lưới kỹ thuật Geochang Hàn Quốc × Sản xuất tại Nhà máy 3.000m² Hà Nội & Video giới thiệu 180+ công trình thực tế' : '한국 거창승강기밸리 기술 네트워크 × 베트남 하노이 3,000m² 직영 공장 생산 & 180대+ 준공 현장 소개 영상'}
              </p>
            </div>

            <a
              href="https://youtu.be/1ljonAClvok"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-600 hover:bg-red-500 text-white font-extrabold px-5 py-2.5 rounded-xl text-xs flex items-center space-x-2 transition-all shrink-0 w-fit shadow-md"
            >
              <span>{isVi ? 'Xem trên ứng dụng YouTube' : 'YouTube 앱에서 보기'}</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Embedded YouTube Player Container */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-2xl bg-black">
            <iframe
              src="https://www.youtube.com/embed/1ljonAClvok?autoplay=0&rel=0"
              title={isVi ? 'Video Quảng bá Chính thức BEST WINNER ELEVATOR VN' : 'BEST WINNER ELEVATOR VN 공식 홍보 동영상'}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Navigation Sub-Tabs (Overview / Library / Parts Lifecycle / Korea Alliance) */}
        <div className="flex space-x-2 border-b border-navy-800 pb-3 mb-10 overflow-x-auto">
          {[
            { id: 'overview', name: isVi ? 'Dòng sản phẩm & Thông số' : '핵심 라인업 & 사양', icon: Layers },
            { id: 'library', name: isVi ? '📚 Thư viện Kỹ thuật & Catalog Web BEST WINNER' : '📚 BEST WINNER 승강기 웹 카탈로그 & 기술 센터', icon: BookOpen },
            { id: 'parts', name: isVi ? 'Chu kỳ Thay thế 부품 & Bảo trì (QCVN)' : '부품 표준 교체주기 & 유지관리 (QCVN)', icon: FileSpreadsheet },
            { id: 'alliance', name: isVi ? 'Mạng lưới Liên minh Geochang Hàn Quốc' : '한국 거창승강기밸리 얼라이언스', icon: Building2 },
          ].map((tab) => {
            const IconComp = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                  activeSubTab === tab.id
                    ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                <IconComp className="w-4 h-4" />
                <span>{tab.name}</span>
              </button>
            );
          })}
        </div>

        {/* SUB-TAB 1: Core Lineup & Specs */}
        {activeSubTab === 'overview' && (
          <div className="space-y-10">
            {/* Highlight Banner */}
            <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-3.5 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FLAGSHIP MODEL — BEST HOME 350</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {isVi ? 'BEST HOME 350 — Thang máy Gia đình Cao cấp cho Nhà phố & Biệt thự' : 'BEST HOME 350 — 베트남 타운하우스·빌라 전용 프리미엄 홈 승강기'}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {isVi 
                      ? 'Dòng thang máy tiêu chuẩn chuyên dụng cho nhà phố (Nhà phố) và biệt thự 3~7 tầng. Với thiết kế **Hố PIT tối thiểu 300mm**, thang máy có thể lắp đặt hoàn hảo cho cả nhà cải tạo mà không lo đào móng sâu. **Hỗ trợ nguồn điện 1 pha 220V gia đình** giúp vận hành ngay mà không tốn chi phí kéo điện 3 pha.' 
                      : '하노이 및 주요 도시 3~7층 타운하우스(Nhà phố)와 빌라 환경에 특화된 표준형 승강기입니다. **최소 300mm PIT 깊이 설계**로 바닥 굴착이 어려운 기존 주택 리모델링(Retrofit)에도 완벽히 시공 가능하며, **단상 220V 전원 지원**으로 고압전력 공사 없이 가정용 전력으로 구동됩니다.'}
                  </p>
                </div>
                <div className="lg:col-span-4 flex justify-center lg:justify-end">
                  <div className="p-5 rounded-2xl bg-navy-950/90 border border-gold-500/30 space-y-3 w-full max-w-sm text-center">
                    <span className="text-xs text-slate-400 uppercase tracking-wider block">{isVi ? 'Giá xuất xưởng tiêu chuẩn' : '표준 기본 출하가'}</span>
                    <div className="text-2xl font-black gold-gradient-text">400.000.000 VNĐ</div>
                    <p className="text-[11px] text-slate-300">{isVi ? '350kg (4-5 người) / 4 điểm dừng tiêu chuẩn / Bảo hành trực tiếp 12 tháng (1 năm)' : '350kg (4-5인) / 4층 표준 (4개 정차층) / 12개월(1년) 직영 무상 보증'}</p>
                    <button
                      onClick={onOpenCalculator}
                      className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold py-2.5 rounded-xl text-xs shadow-gold-glow"
                    >
                      {isVi ? 'Tính giá theo tùy chọn VNĐ' : '옵션별 VND 견적 계산하기'}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Model Selector Tabs */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-navy-800">
              <h3 className="text-xl font-extrabold text-white">{isVi ? 'So sánh 3 dòng sản phẩm chủ lực' : '3대 주요 라인업 사양 비교'}</h3>
              <div className="flex bg-navy-950 p-1.5 rounded-xl border border-navy-800 space-x-1">
                <button
                  onClick={() => setActiveTab('home350')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'home350'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  BEST HOME 350 (Gia đình)
                </button>
                <button
                  onClick={() => setActiveTab('commercial')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'commercial'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Commercial (Thương mại)
                </button>
                <button
                  onClick={() => setActiveTab('industrial')}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-colors ${
                    activeTab === 'industrial'
                      ? 'bg-gold-500 text-navy-950 shadow-md'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Industrial (Tải hàng)
                </button>
              </div>
            </div>

            {/* Selected Model Spec View */}
            {(() => {
              const model = elevatorData.models[activeTab];
              return (
                <div className="glass-card rounded-3xl p-6 sm:p-8 border border-chrome-400/30 shadow-2xl">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Specs Overview */}
                    <div className="lg:col-span-5 space-y-6">
                      <div>
                        <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                          {model.tag}
                        </span>
                        <h4 className="text-3xl font-extrabold text-white mt-3">{model.name}</h4>
                      </div>

                      <div className="space-y-3 bg-navy-950/80 p-5 rounded-2xl border border-navy-800 text-xs">
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">{isVi ? 'Tải trọng (Capacity):' : '적재 하중 (Capacity):'}</span>
                          <span className="font-bold text-gold-300">{model.capacity}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">{isVi ? 'Số tầng (Floors):' : '운행 층수 (Floors):'}</span>
                          <span className="font-bold text-white">{model.floors}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">{isVi ? 'Tốc độ định mức (Speed):' : '정격 속도 (Speed):'}</span>
                          <span className="font-bold text-white">{model.speed}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">{isVi ? 'Độ sâu PIT (PIT Depth):' : 'PIT 깊이 (PIT Depth):'}</span>
                          <span className="font-bold text-emeraldGreen-400">{model.pitDepth}</span>
                        </div>
                        <div className="flex justify-between py-1.5 border-b border-navy-850">
                          <span className="text-slate-400 font-medium">{isVi ? 'Thông số nguồn điện:' : '전원 사양 (Power):'}</span>
                          <span className="font-bold text-white">{model.power}</span>
                        </div>
                        <div className="flex justify-between py-1.5">
                          <span className="text-slate-400 font-medium">{isVi ? 'Giá tiêu chuẩn:' : '표준 기본가:'}</span>
                          <span className="font-bold text-gold-400 font-mono">{model.baseVnd}</span>
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 text-xs">
                        <span className="font-bold text-gold-400 block mb-1">{isVi ? 'Đối tượng áp dụng:' : '권장 적용 대상:'}</span>
                        <p className="text-slate-300 leading-relaxed">{model.recommended}</p>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="lg:col-span-7 space-y-6">
                      <h5 className="text-lg font-bold text-white flex items-center">
                        <CheckCircle2 className="w-5 h-5 text-gold-400 mr-2" />
                        <span>{isVi ? 'Đặc tính kỹ thuật & Kết cấu nổi bật' : '핵심 기술 및 구조적 차별화 특징'}</span>
                      </h5>

                      <div className="space-y-3">
                        {model.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-navy-950/60 border border-navy-800 hover:border-gold-500/30 transition-colors">
                            <div className="w-6 h-6 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">
                              {idx + 1}
                            </div>
                            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                              {feat}
                            </p>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <button
                          onClick={onOpenCalculator}
                          className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-extrabold px-6 py-3 rounded-xl text-xs flex items-center space-x-2 shadow-gold-glow"
                        >
                          <Calculator className="w-4 h-4 stroke-[2.5]" />
                          <span>{isVi ? `Tính giá ${model.name}` : `${model.name} 견적 산출하기`}</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              );
            })()}

            {/* Real Photos Installation & Cabin Gallery */}
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-navy-700 space-y-8">
              
              {/* Header Banner with Catalog PDF Viewer Launchers */}
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 border-b border-navy-800 pb-6">
                <div className="space-y-2 max-w-3xl">
                  <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                    <span>BEST WINNER OFFICIAL CATALOG PRESENTATION & REAL GALLERY</span>
                  </div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white flex items-center space-x-2">
                    <span>📸 {isVi ? 'Thư viện Ảnh Thực tế Thi công & Cabin BEST WINNER' : 'BEST WINNER 실제 시공 & 카빈 갤러리'}</span>
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {isVi ? 'Hình ảnh thiết kế 3D cabin, thực tế nhà máy sản xuất 3.000m² tại Hà Nội, hơn 180+ công trình hoàn thiện và thông số kỹ thuật tiêu chuẩn an toàn quốc gia QCVN 32 từ **Catalog Prerentation 14 trang chính thức của BEST WINNER**.' : '**BEST WINNER 승강기 공식 프레젠테이션 카다로그 (총 14페이지)**에 수록된 3D 카빈 디자인, 베트남 하노이 3,000m² 직영 공장 생산 현장, 180대+ 실제 준공 현장 및 QCVN 32 국가 승인 기술 사양입니다.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 flex-shrink-0">
                  <button
                    onClick={() => {
                      setPdfCurrentPage(1);
                      setPdfViewerOpen(true);
                    }}
                    className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-black px-5 py-3 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-gold-glow transition-transform hover:scale-[1.02]"
                  >
                    <BookOpen className="w-4 h-4 stroke-[2.5]" />
                    <span>📖 {isVi ? 'Mở PDF Catalog Quảng bá (14 trang)' : '공식 프레젠테이션 PDF (14페이지) 뷰어 열기'}</span>
                  </button>
                  <a
                    href="/docu/elevator/BEST_Winner_Elevator_Official_Catalog_2026.pdf"
                    download="BEST_Winner_Elevator_Official_Catalog_2026.pdf"
                    className="bg-navy-800 hover:bg-navy-700 text-gold-300 hover:text-white font-bold px-4 py-3 rounded-xl text-xs border border-navy-700 flex items-center justify-center space-x-2 transition-colors"
                  >
                    <FileDown className="w-4 h-4 text-gold-400" />
                    <span>{isVi ? 'Tải Catalog PDF' : 'PDF 카탈로그 다운로드'}</span>
                  </a>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-thin">
                <span className="text-xs text-slate-400 font-bold mr-2 flex items-center space-x-1 flex-shrink-0">
                  <Filter className="w-3.5 h-3.5 text-gold-400" />
                  <span>{isVi ? 'Bộ lọc:' : '필터:'}</span>
                </span>
                {[
                  { id: 'all', label: isVi ? 'Tất cả Thư viện (12)' : '전체 갤러리 (12)' },
                  { id: 'cabin', label: isVi ? '✨ Nội thất Cabin (3D & Thực tế)' : '✨ 카빈 인테리어 (3D & 실물)' },
                  { id: 'sites', label: isVi ? '🏗️ Thực tế Thi công tại Hà Nội' : '🏗️ 하노이 실제 시공 현장' },
                  { id: 'options', label: isVi ? '💡 Tùy chọn Trần·Sàn·COP' : '💡 천장·바닥·COP 옵션' },
                  { id: 'lineup', label: isVi ? '📐 Dòng sản phẩm & Thông số' : '📐 라인업 & 스펙' },
                  { id: 'factory', label: isVi ? '🏭 Nhà máy Trực tiếp & Chứng nhận' : '🏭 직영 공장 & 국가 인증' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setGalleryFilter(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      galleryFilter === tab.id
                        ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                        : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {realGalleryPhotos
                  .filter(photo => galleryFilter === 'all' || photo.filterCategory === galleryFilter)
                  .map((photo) => (
                    <div 
                      key={photo.id}
                      className="glass-card rounded-2xl overflow-hidden border border-navy-800 hover:border-gold-500/50 transition-all duration-300 group space-y-4 p-4 flex flex-col justify-between"
                    >
                      <div className="space-y-3">
                        {/* Image Box */}
                        <div 
                          onClick={() => setZoomedImage(photo)}
                          className="h-56 rounded-xl overflow-hidden relative border border-navy-700 bg-navy-950 cursor-pointer"
                        >
                          <img 
                            src={photo.src} 
                            alt={photo.title} 
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-2">
                            <span className="bg-gold-500 text-navy-950 font-black px-3.5 py-1.5 rounded-xl text-xs flex items-center space-x-1 shadow-gold-glow">
                              <Maximize2 className="w-3.5 h-3.5" />
                              <span>{isVi ? 'Xem ảnh 고화질' : '고화질 크게보기'}</span>
                            </span>
                          </div>
                          <span className="absolute top-2 left-2 bg-navy-950/90 backdrop-blur-md text-gold-400 text-[10px] font-mono font-bold px-2.5 py-1 rounded-md border border-gold-500/30 shadow-md">
                            {photo.tag}
                          </span>
                        </div>

                        {/* Title & Desc */}
                        <div className="space-y-1.5">
                          <span className="text-[10px] text-gold-400 font-bold block">{photo.category}</span>
                          <h5 className="font-bold text-white text-base group-hover:text-gold-300 transition-colors leading-snug">
                            {photo.title}
                          </h5>
                          <p className="text-slate-300 text-xs leading-relaxed">{photo.desc}</p>
                        </div>

                        {/* Detail Badges Grid */}
                        {photo.details && (
                          <div className="grid grid-cols-2 gap-1.5 pt-2 border-t border-navy-850 text-[11px]">
                            {photo.details.map((d, idx) => (
                              <div key={idx} className="bg-navy-950/80 p-2 rounded-lg border border-navy-800">
                                <span className="text-[9px] text-slate-400 block font-semibold">{d.label}</span>
                                <span className="font-bold text-slate-200 line-clamp-1">{d.val}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Bottom Action Buttons */}
                      <div className="pt-2 flex items-center gap-2 border-t border-navy-800">
                        <button
                          onClick={() => setZoomedImage(photo)}
                          className="flex-1 bg-navy-900 hover:bg-navy-800 text-slate-200 hover:text-white font-bold py-2 rounded-xl text-xs border border-navy-750 flex items-center justify-center space-x-1 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-gold-400" />
                          <span>{isVi ? 'Phóng to' : '크게보기'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setPdfCurrentPage(photo.slidePage);
                            setPdfViewerOpen(true);
                          }}
                          className="flex-1 bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 hover:text-gold-200 font-bold py-2 rounded-xl text-xs border border-gold-500/40 flex items-center justify-center space-x-1 transition-colors"
                        >
                          <BookOpen className="w-3.5 h-3.5 text-gold-400" />
                          <span>Catalog p.{photo.slidePage}</span>
                        </button>
                      </div>

                    </div>
                  ))}
              </div>

            </div>
          </div>
        )}

        {/* SUB-TAB 2: LGRIS Global Elevator Technical Library & Product Catalog */}
        {activeSubTab === 'library' && (
          <div className="space-y-10">
            {/* LGRIS Global Partner Header Banner */}
            <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 space-y-6">
              <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-300 px-3.5 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>BEST WINNER ELEVATOR GLOBAL TECHNICAL CENTER</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white">
                    {lgrisLibraryData.partnerInfo.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gold-300 font-semibold">
                    {lgrisLibraryData.partnerInfo.role} | {lgrisLibraryData.partnerInfo.location}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                    {lgrisLibraryData.partnerInfo.desc}
                  </p>
                </div>

                <div className="flex flex-col space-y-2 flex-shrink-0">
                  <button
                    onClick={() => {
                      setActiveCatalogModal(lgrisLibraryData.products[0]);
                      setCatalogPage(1);
                    }}
                    className="bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-black px-6 py-3.5 rounded-xl text-xs flex items-center justify-center space-x-2 shadow-gold-glow transition-transform hover:scale-[1.02]"
                  >
                    <BookOpen className="w-4 h-4 stroke-[2.5]" />
                    <span>📖 {isVi ? 'Mở Trình xem Web Catalog 2026' : '2026 대형 웹 카탈로그 뷰어 열기'}</span>
                  </button>
                  <div className="flex flex-wrap gap-1.5 justify-center md:justify-start">
                    {lgrisLibraryData.partnerInfo.certifications.map((cert, idx) => (
                      <span key={idx} className="bg-navy-950 text-slate-300 text-[10px] px-2.5 py-1 rounded-md border border-navy-800 font-mono">
                        ✓ {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Featured Interactive Web Catalog Showcase Banner */}
            <div className="relative rounded-3xl overflow-hidden border border-navy-700 bg-gradient-to-r from-navy-900 via-navy-950 to-navy-900 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
              <div className="space-y-3 max-w-2xl">
                <span className="text-xs font-mono text-gold-400 font-bold uppercase tracking-wider block">INTERACTIVE WEB CATALOG VIEWER</span>
                <h4 className="text-2xl font-black text-white">
                  {isVi ? 'Web Catalog Tương tác Thông số Kỹ thuật & 3D Thang máy BEST WINNER' : 'BEST WINNER 종합 승강기 3D & 건축 스펙 웹 카탈로그 (Flipbook)'}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {isVi ? 'Không cần phần mềm xem PDF, bạn có thể xem trực tiếp bản thiết kế 3D cabin, sơ đồ bản vẽ kiến trúc Hố thang/PIT, sơ đồ mạch cứu hộ tự động ARD của các dòng thang máy ngay trên trình duyệt.' : '별도의 PDF 뷰어 프로그램 없이 브라우저에서 승객용, 전망용, 가정용, 화물용 승강기의 **카빈 인테리어, 승강로/피트 건축 도면, 정전 구출(ARD) 회로도**를 고화질 인터랙티브 카탈로그로 바로 감상하실 수 있습니다.'}
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  {lgrisLibraryData.products.slice(0, 4).map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        setActiveCatalogModal(p);
                        setCatalogPage(1);
                      }}
                      className="bg-navy-800 hover:bg-navy-700 text-gold-300 hover:text-gold-200 text-xs font-bold px-3.5 py-2 rounded-xl border border-navy-700 flex items-center space-x-1.5 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-gold-400" />
                      <span>{isVi ? `Xem ${p.catLabel}` : `${p.catLabel} 뷰어`}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative flex-shrink-0 w-full md:w-72 h-44 rounded-2xl overflow-hidden border border-gold-500/30 group cursor-pointer"
                onClick={() => {
                  setActiveCatalogModal(lgrisLibraryData.products[0]);
                  setCatalogPage(1);
                }}
              >
                <img 
                  src="/images/elevator/1.png" 
                  alt="Web Catalog Cover"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-navy-950/60 backdrop-blur-[2px] flex flex-col items-center justify-center space-y-2 text-center p-4">
                  <div className="w-12 h-12 rounded-full bg-gold-500 text-navy-950 flex items-center justify-center font-black shadow-gold-glow">
                    <BookOpen className="w-6 h-6 stroke-[2.5]" />
                  </div>
                  <span className="text-xs font-extrabold text-white">{isVi ? 'Bấm để mở Web Catalog' : '클릭 시 웹 카탈로그 펼치기'}</span>
                  <span className="text-[10px] text-gold-300 font-mono">4-Page Interactive Spec Sheet</span>
                </div>
              </div>
            </div>

            {/* Category Filter & Keyword Search Controls */}
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-4 border-b border-navy-800">
              {/* Category Filter Tabs */}
              <div className="flex items-center space-x-1.5 overflow-x-auto pb-2 md:pb-0">
                {[
                  { id: 'all', label: isVi ? 'Tất cả dòng thang (All)' : '전체 보기 (All)' },
                  { id: 'passenger', label: isVi ? 'Thang tải khách (Passenger)' : '승객용 (Passenger)' },
                  { id: 'panoramic', label: isVi ? 'Thang quan sát (Panoramic)' : '전망용 (Panoramic Glass)' },
                  { id: 'home', label: isVi ? 'Thang gia đình (Home Villa)' : '가정용/빌라 (Home Villa)' },
                  { id: 'freight', label: isVi ? 'Thang tải hàng (Freight)' : '화물/공장 (Freight Cargo)' },
                  { id: 'escalator', label: isVi ? 'Thang cuốn (Escalator)' : '에스컬레이터 (Escalator)' }
                ].map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setLibraryCategory(cat.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
                      libraryCategory === cat.id
                        ? 'bg-gold-500 text-navy-950 shadow-md'
                        : 'bg-navy-900 text-slate-400 hover:text-white border border-navy-800'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Keyword Search Input */}
              <div className="relative min-w-[240px]">
                <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder={isVi ? "Tìm theo mã model, thông số..." : "모델명, 스펙, 라인업 검색..."}
                  value={librarySearch}
                  onChange={(e) => setLibrarySearch(e.target.value)}
                  className="w-full bg-navy-900 border border-navy-700 text-white text-xs rounded-xl pl-9 pr-4 py-2.5 focus:outline-none focus:border-gold-500 transition-colors"
                />
              </div>
            </div>

            {/* Product Catalog Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {lgrisLibraryData.products
                .filter((p) => {
                  const matchesCat = libraryCategory === 'all' || p.category === libraryCategory;
                  const matchesQuery = librarySearch === '' ||
                    p.title.toLowerCase().includes(librarySearch.toLowerCase()) ||
                    p.modelCode.toLowerCase().includes(librarySearch.toLowerCase()) ||
                    p.summary.toLowerCase().includes(librarySearch.toLowerCase());
                  return matchesCat && matchesQuery;
                })
                .map((product) => (
                  <div key={product.id} className="glass-card rounded-3xl p-6 border border-navy-700 hover:border-gold-500/40 transition-all flex flex-col justify-between space-y-6">
                    <div className="space-y-4">
                      {/* Product Header & Image */}
                      <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-navy-800 bg-navy-900 group cursor-pointer"
                        onClick={() => {
                          setActiveCatalogModal(product);
                          setCatalogPage(1);
                        }}
                      >
                        <img 
                          src={product.img} 
                          alt={product.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
                        <div className="absolute top-3 left-3 bg-navy-950/80 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-mono text-gold-400 border border-gold-500/30">
                          {product.modelCode}
                        </div>

                        {/* Quick View Hover Badge */}
                        <div className="absolute inset-0 bg-navy-950/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <span className="bg-gold-500 text-navy-950 font-black px-4 py-2 rounded-xl text-xs flex items-center space-x-1.5 shadow-gold-glow">
                            <Eye className="w-4 h-4 stroke-[2.5]" />
                            <span>{isVi ? 'Xem Web Catalog Phóng to' : '웹 카탈로그 크게 보기'}</span>
                          </span>
                        </div>

                        <div className="absolute bottom-3 left-3 right-3 text-white">
                          <span className="text-[10px] font-bold text-gold-300 uppercase tracking-widest block">{product.catLabel}</span>
                          <h4 className="text-lg font-black leading-snug">{product.title}</h4>
                        </div>
                      </div>

                      {/* Specs Badges Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">{isVi ? 'Tốc độ' : '운행 속도'}</span>
                          <span className="font-bold text-gold-400">{product.speed}</span>
                        </div>
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">{isVi ? 'Tải trọng' : '적재 용량'}</span>
                          <span className="font-bold text-gold-400">{product.capacity}</span>
                        </div>
                        <div className="bg-navy-950 p-2.5 rounded-xl border border-navy-800">
                          <span className="text-slate-400 block text-[10px]">{isVi ? 'Kết cấu' : '구동 구조'}</span>
                          <span className="font-bold text-gold-400">{product.machineType}</span>
                        </div>
                      </div>

                      <p className="text-xs text-slate-300 leading-relaxed">
                        {product.summary}
                      </p>

                      {/* Feature Bullet List */}
                      <div className="space-y-1.5 border-t border-navy-800 pt-3">
                        {product.features.map((feat, idx) => (
                          <div key={idx} className="flex items-start space-x-2 text-xs text-slate-300">
                            <Check className="w-3.5 h-3.5 text-gold-400 mt-0.5 flex-shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Interactive Web Catalog & Action Buttons */}
                    <div className="pt-4 border-t border-navy-800 space-y-2">
                      <div className="flex gap-2">
                        <button
                          onClick={() => {
                            setActiveCatalogModal(product);
                            setCatalogPage(1);
                          }}
                          className="flex-1 bg-gradient-to-r from-gold-400 to-gold-600 hover:from-gold-300 hover:to-gold-500 text-navy-950 font-extrabold py-2.5 rounded-xl text-xs flex items-center justify-center space-x-1.5 shadow-gold-glow transition-all"
                        >
                          <BookOpen className="w-4 h-4 stroke-[2.5]" />
                          <span>📖 {isVi ? 'Mở Web Catalog' : '웹 카탈로그 뷰어 열기'}</span>
                        </button>
                        <button
                          onClick={() => {
                            setActiveCatalogModal(product);
                            setCatalogPage(3);
                          }}
                          className="bg-navy-800 hover:bg-navy-700 text-slate-200 hover:text-white border border-navy-700 px-3 py-2.5 rounded-xl text-xs flex items-center space-x-1 transition-colors"
                          title={isVi ? "Xem bản vẽ CAD hố thang" : "승강로 CAD 도면 바로보기"}
                        >
                          <FileCode className="w-4 h-4 text-gold-400" />
                          <span>{isVi ? 'Xem bản vẽ CAD' : 'CAD 도면 보기'}</span>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Official Technical Document Downloads Hub Table */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-navy-700 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                    <FolderDown className="w-5 h-5 text-gold-400" />
                    <span>{isVi ? 'Kho Tài liệu Kỹ thuật Thang máy BEST WINNER (Technical Center)' : 'BEST WINNER 공식 통합 기술 자료실 (Technical Center)'}</span>
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {isVi ? 'Quy chuẩn an toàn quốc gia QCVN 32, Bản vẽ CAD hố thang tiêu chuẩn, Sơ đồ mạch ARD & Catalog tổng hợp' : '베트남 승강기 국가 안전 규정(QCVN 32), 건축 승강로 표준 CAD 도면, 비상 구출 회로도 및 종합 카탈로그'}
                  </p>
                </div>
              </div>

              <div className="overflow-x-auto rounded-2xl border border-navy-800">
                <table className="w-full text-left border-collapse text-xs">
                  <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800">
                    <tr>
                      <th className="p-4">{isVi ? 'Tên Tài liệu (Document Title)' : '자료명 (Document Title)'}</th>
                      <th className="p-4">{isVi ? 'Phân loại (Category)' : '구분 (Category)'}</th>
                      <th className="p-4 text-center">{isVi ? 'Phiên bản' : '버전 (Version)'}</th>
                      <th className="p-4 text-center">{isVi ? 'Dung lượng' : '파일 용량'}</th>
                      <th className="p-4 text-right">{isVi ? 'Xem trực tuyến / Tải về' : '웹 뷰어 / 다운로드'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/80 bg-navy-900/50">
                    {lgrisLibraryData.documents.map((doc) => (
                      <tr key={doc.id} className="hover:bg-navy-800/50 transition-colors">
                        <td className="p-4 font-bold text-white flex items-center space-x-2">
                          <FileCode className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>{doc.title}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="bg-gold-500/10 text-gold-400 px-2.5 py-1 rounded-full text-[11px] border border-gold-500/30 font-semibold">
                            {doc.tag}
                          </span>
                        </td>
                        <td className="p-4 text-center font-mono text-slate-400">{doc.version}</td>
                        <td className="p-4 text-center font-mono text-chrome-300">{doc.size}</td>
                        <td className="p-4 text-right flex items-center justify-end">
                          <button
                            onClick={() => {
                              setActiveCatalogModal(lgrisLibraryData.products[0]);
                              setCatalogPage(doc.id % 4 + 1);
                            }}
                            className="bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-lg border border-navy-700 flex items-center space-x-1 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                            <span>{isVi ? 'Xem trực tuyến' : '웹 뷰어 열기'}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Parts Lifecycle & Maintenance Table (Extracted Data) */}
        {activeSubTab === 'parts' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                QCVN / TCVN STANDARDS
              </span>
              <h3 className="text-2xl font-black text-white">
                {isVi ? 'Ma trận Chu kỳ Thay thế Linh kiện Thang máy & Hướng dẫn Bảo trì' : '승강기 핵심 부품 표준 교체주기 및 유지관리 가이드'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {isVi ? 'Mỗi linh kiện thang máy có chu kỳ định kỳ khác nhau. BEST WINNER ELEVATOR VN cam kết quy trình bảo trì minh bạch và cung cấp linh kiện chính hãng đáp ứng chuẩn an toàn Việt Nam (QCVN 32) và Hàn Quốc.' : '승강기는 부품별 교체 주기가 각기 달라 정기 관리가 필수적입니다. BEST WINNER ELEVATOR VN은 한국 및 베트남 안전 표준에 맞춰 부품별 투명한 교체주기와 정품 부품 공급 체계를 보장합니다.'}
              </p>
            </div>

            {/* Interactive Parts Lifecycle Table */}
            <div className="glass-card rounded-2xl overflow-hidden border border-navy-700 shadow-2xl text-xs">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800 uppercase tracking-wider">
                    <tr>
                      <th className="p-4">{isVi ? 'Tên Linh kiện Bảo trì (Component)' : '승강기 유지관리 부품명 (Component)'}</th>
                      <th className="p-4">{isVi ? 'Vị trí Lắp đặt (Category)' : '설치 영역 (Category)'}</th>
                      <th className="p-4 text-center">{isVi ? 'Chu kỳ Thay thế (Lifecycle)' : '표준 교체주기 (Lifecycle)'}</th>
                      <th className="p-4">{isVi ? 'Vai trò & Chức năng Kỹ thuật' : '핵심 기능 및 역할 (Role & Function)'}</th>
                      <th className="p-4 text-right">{isVi ? 'Giá Linh kiện Tham khảo (VNĐ)' : '부품 단가 기준 (VND)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-navy-800/80">
                    {partsLifecycle.map((p, idx) => (
                      <tr key={idx} className="hover:bg-navy-800/50 transition-colors">
                        <td className="p-4 font-bold text-white flex items-center space-x-2">
                          <Settings className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                          <span>{p.part}</span>
                        </td>
                        <td className="p-4 text-slate-300">
                          <span className="bg-navy-900 px-2.5 py-1 rounded-full border border-navy-800 text-[11px]">
                            {p.cat}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="font-extrabold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                            {p.cycle}
                          </span>
                        </td>
                        <td className="p-4 text-slate-300 max-w-xs leading-relaxed">{p.role}</td>
                        <td className="p-4 text-right font-mono text-chrome-200">{p.priceVnd} VNĐ</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 text-xs text-slate-400 flex items-center space-x-3">
              <ShieldAlert className="w-5 h-5 text-gold-400 flex-shrink-0" />
              <span>
                {isVi ? '* Tất cả linh kiện thang máy được theo dõi tự động qua hệ thống DB 24/7 của BEST WINNER ELEVATOR VN để đưa ra cảnh báo bảo trì định kỳ trước khi hết hạn sử dụng.' : '* 모든 부품은 BEST WINNER ELEVATOR VN 24/7 스마트 DB 모니터링 시스템을 통해 소모품 주기 도달 전 선제적으로 점검 및 교체 안내가 이루어집니다.'}
              </span>
            </div>
          </div>
        )}

        {/* SUB-TAB 3: Korea Alliance & Supply Chain */}
        {activeSubTab === 'alliance' && (
          <div className="space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                KOREA × VIETNAM NETWORK
              </span>
              <h3 className="text-2xl font-black text-white">
                {isVi ? 'Mạng lưới Liên minh Cụm Thang máy Geochang Hàn Quốc' : '한국 거창 승강기밸리 & 전문 파트너 얼라이언스'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
                {isVi ? 'Kết hợp công nghệ kỹ thuật chính xác từ Cụm Thang máy Geochang Hàn Quốc với năng lực sản xuất thi công trực tiếp tại Việt Nam.' : '국내 대표 승강기 특화 단지인 거창승강기밸리와의 기술·제조 협력 네트워크를 통해 한국의 첨단 정밀 기술과 베트남 현지의 실행력을 결합합니다.'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {elevatorData.partners.map((pt, idx) => (
                <div key={idx} className="glass-card rounded-2xl p-6 border border-navy-700 space-y-4 hover:border-gold-500/40 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-12 h-12 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-black">
                      0{idx + 1}
                    </div>
                    {pt.website && (
                      <a 
                        href={pt.website} 
                        target="_blank" 
                        rel="noreferrer"
                        className="text-xs text-gold-400 hover:text-white flex items-center space-x-1 bg-navy-900 px-3 py-1 rounded-full border border-navy-800"
                      >
                        <span>{isVi ? 'Website Chính thức' : '공식 홈페이지'}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>

                  <div>
                    <h4 className="text-lg font-bold text-white">{pt.name}</h4>
                    <p className="text-xs font-semibold text-gold-400 mt-0.5">{pt.role}</p>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed border-t border-navy-800 pt-3">
                    {pt.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Division of Labor Diagram */}
            <div className="glass-card-gold rounded-3xl p-8 border border-gold-500/40 space-y-6">
              <h4 className="text-lg font-bold text-white text-center">
                {isVi ? 'Quy trình Phân công Công nghệ Hàn Quốc × Sản xuất tại Việt Nam' : '한국 기술력 × 베트남 현지 생산 분업 프로세스'}
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-center">
                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">1. KOREA TECHNOLOGY</div>
                  <h5 className="font-bold text-white text-sm">{isVi ? 'Hàn Quốc R&D & Linh kiện Cốt lõi' : '한국 R&D & 핵심부품'}</h5>
                  <p className="text-slate-300">{isVi ? 'Nhập khẩu chính xác Động cơ kéo (TM), Tủ điều khiển VVVF, Phanh cáp, Bộ hãm an toàn' : '권상기(TM), VVVF 제어반, 로프브레이크, 비상정지 세이프티 기어 정밀 수입'}</p>
                </div>

                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">2. VIETNAM FABRICATION</div>
                  <h5 className="font-bold text-white text-sm">{isVi ? 'Nhà máy 3.000m² tại Hà Nội' : '하노이 3,000m² 공장 Cabin'}</h5>
                  <p className="text-slate-300">{isVi ? 'Gia công cabin theo yêu cầu công trình, lắp ráp cửa & kiểm định chất lượng nghiêm ngặt' : '현지 주택 맞춤형 Cabin 인테리어 가공, 도어 조립 및 최종 품질 검사'}</p>
                </div>

                <div className="p-5 rounded-2xl bg-navy-950/80 border border-navy-800 space-y-2">
                  <div className="text-xs font-bold text-gold-400 uppercase">3. LOCAL CARE & A/S</div>
                  <h5 className="font-bold text-white text-sm">{isVi ? 'Thi công Trực tiếp & Giám sát DB 24/7' : '직영 시공 & 24/7 관제 DB'}</h5>
                  <p className="text-slate-300">{isVi ? 'Vận hành thử bởi đội ngũ kỹ sư chuyên trách, đăng ký mã QR DB & ứng cứu 24/7' : '17인 직영 엔지니어 시운전, 호기별 QR DB 등록 및 24시간 긴급 출동 케어'}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3 Core Value Pillars & IT DB Management */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">{isVi ? 'Gói giải pháp Thang máy + Nội thất' : 'Elevator + Interior 패키지'}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isVi ? 'Không chỉ bán thang máy đơn thuần, chúng tôi cung cấp giải pháp thiết kế cabin đồng bộ hoàn hảo với không gian nhà ở, cầu thang và ánh sáng.' : '기계 단품 판매가 아닌 주택 공간(계단, 벽체, 조명, 인테리어)과 완벽히 조화되는 럭셔리 Cabin 맞춤형 설계.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">BEST Smart Elevator DB</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isVi ? 'Xây dựng cơ sở dữ liệu quản lý riêng cho từng thang máy. Tự động truy xuất lịch sử bảo trì, cảnh báo lỗi từ xa và kết nối phân công kỹ sư.' : '호기별 고유 관리 DB 구축. 정비·부품 교체 이력 자동 추적, 원격 장애 알림 및 A/S 기사 자동 배정 CRM 연동.'}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h4 className="text-base font-bold text-white">{isVi ? 'Đội ứng cứu 24/7 Trực tiếp' : '24/7 직영 긴급 출동 A/S'}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">
              {isVi ? 'Đội ngũ 17 kỹ sư chuyên trách thường trực tại Hà Nội và các khu vực lân cận. Sẵn sàng ứng cứu khẩn cấp 24/7 và kiểm tra định kỳ hàng tháng.' : '하노이 및 주요 도시 17인 직영 기술 전담팀 상주. 24시간 365일 비상 대기 및 정기 점검 관리 체계 가동.'}
            </p>
          </div>
        </div>

      </div>

      {/* Interactive Web Catalog Viewer Modal Lightbox */}
      {activeCatalogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/90 backdrop-blur-md overflow-y-auto animate-fade-in">
          <div className="relative w-full max-w-5xl bg-navy-900 border border-gold-500/40 rounded-3xl shadow-2xl overflow-hidden my-6">
            
            {/* Modal Top Header */}
            <div className="bg-navy-950 px-6 py-4 border-b border-navy-800 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-9 h-9 rounded-xl bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-bold text-gold-400 uppercase tracking-widest block">
                    {activeCatalogModal.modelCode} — OFFICIAL WEB CATALOG VIEWER
                  </span>
                  <h3 className="text-base sm:text-lg font-black text-white">
                    {activeCatalogModal.title}
                  </h3>
                </div>
              </div>

              <button
                onClick={() => setActiveCatalogModal(null)}
                className="p-2 rounded-xl bg-navy-900 hover:bg-navy-800 text-slate-400 hover:text-white border border-navy-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Page Navigation Tabs */}
            <div className="bg-navy-900/90 px-6 py-2 border-b border-navy-800 flex items-center space-x-2 overflow-x-auto text-xs">
              {[
                { page: 1, title: isVi ? '1. Trang bìa & Thông số' : '1. 표지 & 라인업 사양' },
                { page: 2, title: isVi ? '2. Nội thất Cabin & Đèn' : '2. 카빈 인테리어 & 조명' },
                { page: 3, title: isVi ? '3. Bản vẽ CAD Hố thang' : '3. 승강로/피트 건축도면' },
                { page: 4, title: isVi ? '4. Hệ thống ARD & An toàn' : '4. ARD & 안전시스템' }
              ].map((p) => (
                <button
                  key={p.page}
                  onClick={() => setCatalogPage(p.page)}
                  className={`px-4 py-2 rounded-xl font-bold whitespace-nowrap transition-all ${
                    catalogPage === p.page
                      ? 'bg-gold-500 text-navy-950 shadow-gold-glow'
                      : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                  }`}
                >
                  {p.title}
                </button>
              ))}
            </div>

            {/* Modal Body Content depending on catalogPage */}
            <div className="p-6 sm:p-8 max-h-[70vh] overflow-y-auto space-y-6">
              {/* PAGE 1: Product Overview & Core Specs */}
              {catalogPage === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-6 relative h-64 sm:h-80 rounded-2xl overflow-hidden border border-navy-800 bg-navy-950">
                    <img 
                      src={activeCatalogModal.img} 
                      alt={activeCatalogModal.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4 bg-navy-950/80 backdrop-blur-md p-3 rounded-xl border border-gold-500/30">
                      <span className="text-[10px] text-gold-400 font-mono block">BEST WINNER ELEVATOR SERIES</span>
                      <span className="text-sm font-bold text-white block">{activeCatalogModal.modelCode}</span>
                    </div>
                  </div>

                  <div className="md:col-span-6 space-y-4">
                    <div className="inline-flex items-center space-x-1.5 bg-gold-500/10 text-gold-400 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>{activeCatalogModal.catLabel}</span>
                    </div>

                    <h4 className="text-xl font-black text-white">{activeCatalogModal.title}</h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {activeCatalogModal.summary}
                    </p>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800">
                        <span className="text-[10px] text-slate-400 block">{isVi ? 'Tốc độ' : '운행 속도'}</span>
                        <span className="font-bold text-gold-400 text-sm">{activeCatalogModal.speed}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800">
                        <span className="text-[10px] text-slate-400 block">{isVi ? 'Tải trọng' : '적재 용량'}</span>
                        <span className="font-bold text-gold-400 text-sm">{activeCatalogModal.capacity}</span>
                      </div>
                      <div className="p-3 rounded-xl bg-navy-950 border border-navy-800 col-span-2">
                        <span className="text-[10px] text-slate-400 block">{isVi ? 'Động cơ kéo' : '구동 권상기 방식'}</span>
                        <span className="font-bold text-white text-xs">{activeCatalogModal.machineType}</span>
                      </div>
                    </div>

                    <div className="space-y-2 border-t border-navy-800 pt-3">
                      {activeCatalogModal.features.map((f, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-xs text-slate-300">
                          <Check className="w-4 h-4 text-gold-400 flex-shrink-0" />
                          <span>{f}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* PAGE 2: Cabin Interior & Custom Finishes */}
              {catalogPage === 2 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 2 — REAL CABIN DESIGN & CUSTOM FINISHES</span>
                    <h4 className="text-xl font-black text-white">{isVi ? 'Thư viện Mẫu Cabin & Hoàn thiện Nội thất Thực tế' : '실제 카빈 커스텀 인테리어 & 고급 마감 갤러리'}</h4>
                    <p className="text-xs text-slate-300">{isVi ? 'Hình ảnh thực tế vật liệu hoàn thiện cabin sản xuất trực tiếp tại Nhà máy 3.000m² Hà Nội.' : '베트남 하노이 3,000m² 직영 공장에서 생산되는 실제 카빈 인테리어 마감재 시공 사진입니다.'}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    {realGalleryPhotos.map((item, idx) => (
                      <div 
                        key={item.id}
                        onClick={() => setZoomedImage(item)}
                        className="glass-card rounded-2xl overflow-hidden border border-navy-800 hover:border-gold-500/40 transition-all p-3 space-y-2.5 group cursor-pointer"
                      >
                        <div className="h-40 rounded-xl overflow-hidden relative border border-navy-700 bg-navy-950">
                          <img src={item.src} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                          <span className="absolute top-2 left-2 bg-gold-500 text-navy-950 text-[10px] font-bold px-2 py-0.5 rounded">Option 0{idx + 1}</span>
                          <div className="absolute inset-0 bg-navy-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="bg-gold-500 text-navy-950 font-black px-3 py-1 rounded-lg text-[11px] flex items-center space-x-1 shadow-gold-glow">
                              <Maximize2 className="w-3 h-3" />
                              <span>{isVi ? 'Xem lớn' : '크게보기'}</span>
                            </span>
                          </div>
                        </div>
                        <div>
                          <span className="text-[10px] text-gold-400 font-mono block">{item.tag}</span>
                          <h5 className="font-bold text-white text-xs group-hover:text-gold-300 transition-colors">{item.title}</h5>
                          <p className="text-slate-400 text-[10px] leading-relaxed line-clamp-2 mt-0.5">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-navy-950 border border-gold-500/30 flex flex-col sm:flex-row items-center justify-between text-xs gap-3">
                    <span className="text-slate-200">{isVi ? '💡 Bạn cần tùy chỉnh thiết kế 3D cabin? Nhà máy tại Hà Nội gia công 100% theo yêu cầu.' : '💡 3D 카빈 맞춤 조율이 필요하신가요? 베트남 하노이 직영 공장에서 100% 맞춤 가공해 드립니다.'}</span>
                    <button onClick={onOpenCalculator} className="bg-gold-500 text-navy-950 font-bold px-4 py-2 rounded-xl whitespace-nowrap shadow-gold-glow">
                      {isVi ? 'Tư vấn Nội thất Thang máy' : '인테리어 맞춤 상담 신청'}
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 3: Hoistway & Pit Civil Engineering Specifications */}
              {catalogPage === 3 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 3 — HOISTWAY CIVIL ENGINEERING SPECIFICATIONS</span>
                    <h4 className="text-xl font-black text-white">{isVi ? 'Bảng Thông số Bản vẽ CAD Hố thang (Hoistway) & Hố PIT Chuẩn' : '승강로 (Hoistway) & 피트 (Pit) 건축 표준 도면'}</h4>
                    <p className="text-xs text-slate-300">{isVi ? 'Bảng thông số kích thước hố thang và nguồn điện dành cho Chủ đầu tư & Đơn vị thiết kế kiến trúc.' : '건축주 및 설계사를 위한 승강로 규격 및 전원 사양표입니다.'}</p>
                  </div>

                  <div className="overflow-x-auto rounded-2xl border border-navy-800 text-xs">
                    <table className="w-full text-left border-collapse">
                      <thead className="bg-navy-950 text-gold-400 font-bold border-b border-navy-800">
                        <tr>
                          <th className="p-3">{isVi ? 'Tải trọng' : '용량 (Capacity)'}</th>
                          <th className="p-3">{isVi ? 'Tốc độ' : '속도 (Speed)'}</th>
                          <th className="p-3">{isVi ? 'Hố PIT tối thiểu' : '최소 PIT 깊이'}</th>
                          <th className="p-3">{isVi ? 'Overhead (OH)' : '오버헤드 (OH)'}</th>
                          <th className="p-3">{isVi ? 'Kích thước hố thang (WxD)' : '승강로 규격 (WxD)'}</th>
                          <th className="p-3">{isVi ? 'Rộng cửa (Door)' : '출입문 너비 (Door)'}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-navy-800/80 bg-navy-950/40">
                        <tr>
                          <td className="p-3 font-bold text-white">250~350 kg (4 người)</td>
                          <td className="p-3 text-slate-300">0.4 ~ 1.0 m/s</td>
                          <td className="p-3 text-gold-400 font-bold">300 mm ~ (최소 PIT)</td>
                          <td className="p-3 text-slate-300">2,800 mm ~</td>
                          <td className="p-3 text-mono text-slate-300">1,400 × 1,400 mm</td>
                          <td className="p-3 text-slate-300">700 mm (2-Panel)</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">450 kg (6 người)</td>
                          <td className="p-3 text-slate-300">1.0 m/s</td>
                          <td className="p-3 text-slate-300">1,200 mm</td>
                          <td className="p-3 text-slate-300">3,800 mm</td>
                          <td className="p-3 text-mono text-slate-300">1,600 × 1,600 mm</td>
                          <td className="p-3 text-slate-300">800 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">630 kg (8 người)</td>
                          <td className="p-3 text-slate-300">1.0 ~ 1.75 m/s</td>
                          <td className="p-3 text-slate-300">1,400 mm</td>
                          <td className="p-3 text-slate-300">4,200 mm</td>
                          <td className="p-3 text-mono text-slate-300">1,800 × 1,800 mm</td>
                          <td className="p-3 text-slate-300">800 mm</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-bold text-white">1,000 kg (13 người)</td>
                          <td className="p-3 text-slate-300">1.5 ~ 2.5 m/s</td>
                          <td className="p-3 text-slate-300">1,600 mm</td>
                          <td className="p-3 text-slate-300">4,500 mm</td>
                          <td className="p-3 text-mono text-slate-300">2,100 × 2,100 mm</td>
                          <td className="p-3 text-slate-300">900 mm (Center Open)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 text-xs text-slate-300 flex items-center justify-between">
                    <span>📐 {isVi ? 'Để nhận bộ bản vẽ CAD (.DWG) gốc và bảng thông số chi tiết, vui lòng liên hệ đội ngũ kỹ thuật của chúng tôi.' : 'CAD (.DWG) 원본 설계 도면 및 상세 기술 자재표는 당사 기술지원팀으로 문의해 주시기 바랍니다.'}</span>
                    <button
                      onClick={() => {
                        setActiveCatalogModal(null);
                        onOpenCalculator();
                      }}
                      className="bg-navy-800 hover:bg-gold-500 hover:text-navy-950 text-gold-400 font-bold px-3.5 py-1.5 rounded-lg border border-navy-700 transition-colors"
                    >
                      {isVi ? 'Yêu cầu Bản vẽ CAD / Báo giá' : '기술 문의 / 견적 요청'}
                    </button>
                  </div>
                </div>
              )}

              {/* PAGE 4: ARD Emergency & Safety Control Matrix */}
              {catalogPage === 4 && (
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="text-xs text-gold-400 font-bold uppercase tracking-wider">PAGE 4 — SAFETY & EMERGENCY RESCUE SYSTEMS</span>
                    <h4 className="text-xl font-black text-white">{isVi ? 'Thiết bị Cứu hộ Tự động ARD & Mạch An toàn Phanh Kép' : '정전 자동 구출(ARD) 및 이중 브레이크 안전 회로'}</h4>
                    <p className="text-xs text-slate-300">{isVi ? '4 công nghệ an toàn cốt lõi vượt qua kiểm định quốc gia QCVN 32 Việt Nam và Hàn Quốc.' : '한국 및 베트남 국가 안전 검사(QCVN 32)를 통과한 4대 핵심 안전 기술입니다.'}</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <Zap className="w-4 h-4" />
                        <span>{isVi ? 'Thiết bị Cứu hộ Tự động (Hệ thống ARD)' : '자동 구출 운전 장치 (ARD System)'}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isVi ? 'Khi mất điện đột ngột, pin dự phòng khẩn cấp kích hoạt tức thì đưa thang về tầng gần nhất và mở cửa an toàn cho hành khách.' : '갑작스러운 건물 정전 시 비상 배터리가 즉시 작동하여 엘리베이터를 가장 가까운 층으로 자동 이동시킨 후 문을 열어 승객을 안전하게 구출합니다.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <ShieldCheck className="w-4 h-4" />
                        <span>{isVi ? 'Cảm biến Cửa An toàn 128 Kênh Hồng ngoại' : '128채널 멀티빔 도어 세이프티 센서'}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isVi ? '128 tia hồng ngoại phủ đều toàn bộ chiều cao cửa cabin, ngăn ngừa triệt để nguy cơ kẹt tay trẻ em hoặc vật nuôi.' : '128개의 적외선 감지 빔이 문 전체 높이에 입체 그물망을 형성하여 어린이나 반려동물의 끼임 위험을 사전 차단합니다.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <Wrench className="w-4 h-4" />
                        <span>{isVi ? 'Phanh Cáp Chống Vượt Tốc Chiều Lên (Rope Brake)' : '상승 과속 방지 로프 브레이크 (Rope Brake)'}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isVi ? 'Khi phát hiện tốc độ cabin vượt quá giới hạn theo chiều lên, phanh cơ khí sẽ trực tiếp kẹp chặt cáp kéo chính để dừng thang khẩn cấp.' : '상승 방향 기준 운행 속도가 초과될 경우 메인 주로프를 직접 기계적으로 클램핑하여 비상 정지시킵니다.'}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-navy-950 border border-navy-800 space-y-2">
                      <div className="flex items-center space-x-2 text-gold-400 font-bold">
                        <ShieldAlert className="w-4 h-4" />
                        <span>{isVi ? 'Thiết bị Chống Cabin Di chuyển Khi Cửa Mở (UCMP)' : '개문 출발 방지 장치 (UCMP)'}</span>
                      </div>
                      <p className="text-slate-300 text-[11px] leading-relaxed">
                        {isVi ? 'Nếu cabin có nguy cơ di chuyển khi cửa chưa đóng hoàn toàn, hệ thống tủ điều khiển sẽ phanh hãm tức thì.' : '승강기 문이 완전히 닫히지 않은 상태에서 출입문 착상 오차가 발생할 경우 제어반에서 즉시 비상 제동을 가합니다.'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Modal Bottom Footer Action Bar */}
            <div className="bg-navy-950 px-6 py-4 border-t border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <button
                  disabled={catalogPage <= 1}
                  onClick={() => setCatalogPage((prev) => Math.max(1, prev - 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-navy-800 text-xs font-bold transition-colors"
                >
                  ◀ {isVi ? 'Trang trước' : '이전 페이지'}
                </button>
                <span className="text-xs font-mono text-gold-400 font-bold px-2">
                  Page {catalogPage} of 4
                </span>
                <button
                  disabled={catalogPage >= 4}
                  onClick={() => setCatalogPage((prev) => Math.min(4, prev + 1))}
                  className="px-3.5 py-1.5 rounded-lg bg-navy-900 text-slate-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed border border-navy-800 text-xs font-bold transition-colors"
                >
                  {isVi ? 'Trang tiếp' : '다음 페이지'} ▶
                </button>
              </div>

              <div className="flex items-center space-x-2 w-full sm:w-auto">
                <button
                  onClick={() => setActiveCatalogModal(null)}
                  className="bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold px-4 py-2 rounded-xl text-xs border border-navy-700 transition-colors"
                >
                  {isVi ? 'Đóng' : '닫기'}
                </button>
                <button
                  onClick={() => {
                    setActiveCatalogModal(null);
                    onOpenCalculator();
                  }}
                  className="flex-1 sm:flex-none bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-5 py-2 rounded-xl text-xs shadow-gold-glow flex items-center justify-center space-x-1"
                >
                  <Calculator className="w-3.5 h-3.5 stroke-[2.5]" />
                  <span>{isVi ? 'Tính giá VNĐ Trực tuyến' : '실시간 VND 견적 계산'}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

      {/* Official 14-Page Catalog Presentation Flipbook Viewer Modal */}
      {pdfViewerOpen && (
        <div 
          className="fixed inset-0 z-[70] bg-navy-950/95 backdrop-blur-xl flex items-center justify-center p-2 sm:p-6 animate-fade-in"
          onClick={() => setPdfViewerOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full h-[90vh] bg-navy-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-navy-950 px-6 py-4 border-b border-navy-800 flex items-center justify-between gap-4">
              <div className="flex items-center space-x-3">
                <div className="p-2 rounded-xl bg-gold-500/20 border border-gold-500/30 text-gold-400">
                  <BookOpen className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-white">
                    {isVi ? 'Catalog Presentation Thang máy BEST WINNER (14 trang chính thức)' : 'BEST WINNER 승강기 공식 프레젠테이션 카다로그 (총 14페이지)'}
                  </h4>
                  <p className="text-xs text-slate-300">
                    {isVi ? `Trang ${pdfCurrentPage} / 14 — ${officialPresentationPages[pdfCurrentPage - 1]?.title}` : `페이지 ${pdfCurrentPage} / 14 — ${officialPresentationPages[pdfCurrentPage - 1]?.title}`}
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <a
                  href="/docu/elevator/BEST_Winner_Elevator_Official_Catalog_2026.pdf"
                  download="BEST_Winner_Elevator_Official_Catalog_2026.pdf"
                  className="bg-navy-800 hover:bg-navy-700 text-gold-300 font-bold px-3.5 py-2 rounded-xl text-xs border border-navy-700 flex items-center space-x-1.5 transition-colors"
                >
                  <FileDown className="w-4 h-4 text-gold-400" />
                  <span className="hidden sm:inline">{isVi ? 'Tải File PDF' : 'PDF 다운로드'}</span>
                </a>
                <button
                  onClick={() => setPdfViewerOpen(false)}
                  aria-label="Close PDF Viewer"
                  className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-white border border-navy-700 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Main Slide Viewer */}
            <div className="relative flex-1 bg-black/90 p-4 flex items-center justify-center overflow-hidden group">
              <button
                disabled={pdfCurrentPage <= 1}
                onClick={() => setPdfCurrentPage((prev) => Math.max(1, prev - 1))}
                aria-label="Previous Page"
                className="absolute left-4 z-10 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:cursor-not-allowed border border-navy-700 transition-all shadow-xl"
              >
                <ChevronLeft className="w-6 h-6 stroke-[3]" />
              </button>

              <div className="relative max-h-full max-w-full flex flex-col items-center justify-center">
                <img 
                  src={officialPresentationPages[pdfCurrentPage - 1]?.src} 
                  alt={`Catalog Page ${pdfCurrentPage}`} 
                  className="max-h-[65vh] w-auto object-contain rounded-xl shadow-2xl border border-navy-800"
                />
                <div className="mt-3 bg-navy-950/80 backdrop-blur-md px-4 py-2 rounded-xl border border-gold-500/30 text-center">
                  <span className="text-xs font-bold text-gold-400 font-mono">
                    PAGE {pdfCurrentPage} of 14 — {officialPresentationPages[pdfCurrentPage - 1]?.title}
                  </span>
                  <p className="text-[11px] text-slate-300">
                    {officialPresentationPages[pdfCurrentPage - 1]?.subtitle}
                  </p>
                </div>
              </div>

              <button
                disabled={pdfCurrentPage >= 14}
                onClick={() => setPdfCurrentPage((prev) => Math.min(14, prev + 1))}
                aria-label="Next Page"
                className="absolute right-4 z-10 p-3 rounded-full bg-navy-900/80 hover:bg-gold-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:cursor-not-allowed border border-navy-700 transition-all shadow-xl"
              >
                <ChevronRight className="w-6 h-6 stroke-[3]" />
              </button>
            </div>

            {/* Bottom Page Thumbnails Bar */}
            <div className="bg-navy-950 p-4 border-t border-navy-800 flex items-center space-x-3 overflow-x-auto scrollbar-thin">
              {officialPresentationPages.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPdfCurrentPage(item.page)}
                  className={`flex-shrink-0 w-24 rounded-xl overflow-hidden border-2 transition-all text-left space-y-1 p-1 bg-navy-900 ${
                    pdfCurrentPage === item.page
                      ? 'border-gold-500 scale-105 shadow-gold-glow'
                      : 'border-navy-800 opacity-60 hover:opacity-100 hover:border-navy-700'
                  }`}
                >
                  <img src={item.src} alt={item.title} className="w-full h-12 object-cover rounded-lg" />
                  <span className="text-[10px] font-mono font-bold text-gold-400 block px-1">p.{item.page}</span>
                </button>
              ))}
            </div>

          </div>
        </div>
      )}

      {/* Lightbox / High-Res Image Fullscreen Viewer Modal */}
      {zoomedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setZoomedImage(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-navy-900 border border-gold-500/40 rounded-3xl overflow-hidden shadow-2xl space-y-4 p-4 sm:p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-navy-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-gold-400 font-bold uppercase tracking-wider block">
                  BEST WINNER REAL PHOTO HIGH-RES VIEW
                </span>
                <h4 className="text-base sm:text-lg font-black text-white">{zoomedImage.title || (isVi ? 'Xem ảnh thực tế thi công phóng to' : '실제 시공 사진 고화질 크게보기')}</h4>
              </div>
              <button
                onClick={() => setZoomedImage(null)}
                aria-label="Close Lightbox"
                className="p-2 rounded-xl bg-navy-800 hover:bg-navy-700 text-slate-400 hover:text-white border border-navy-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="relative max-h-[60vh] rounded-2xl overflow-hidden border border-navy-800 bg-black flex items-center justify-center">
              <img 
                src={zoomedImage.src || zoomedImage} 
                alt="High-Res Zoom View" 
                className="max-h-[60vh] w-auto object-contain mx-auto"
              />
            </div>

            {zoomedImage.desc && (
              <p className="text-xs text-slate-300 bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                {zoomedImage.desc}
              </p>
            )}

            {zoomedImage.slidePage && (
              <div className="flex items-center justify-between pt-2 border-t border-navy-800">
                <span className="text-xs text-gold-400 font-mono font-bold">
                  📄 {isVi ? `Tham chiếu Catalog trang ${zoomedImage.slidePage}` : `공식 카다로그 Page ${zoomedImage.slidePage} 참조 수록`}
                </span>
                <button
                  onClick={() => {
                    const pageNum = zoomedImage.slidePage;
                    setZoomedImage(null);
                    setPdfCurrentPage(pageNum);
                    setPdfViewerOpen(true);
                  }}
                  className="bg-gold-500 text-navy-950 font-bold px-4 py-2 rounded-xl text-xs shadow-gold-glow flex items-center space-x-1"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>{isVi ? `Xem trang ${zoomedImage.slidePage} trong Catalog` : `공식 카다로그 p.${zoomedImage.slidePage} 전체화면 보기`}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </section>
  );
}
