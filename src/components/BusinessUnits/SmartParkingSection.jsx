import React, { useState } from 'react';
import { 
  Car, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  ArrowRight, 
  RefreshCw,
  FileText,
  Download,
  Eye,
  X,
  ChevronLeft,
  ChevronRight,
  Monitor,
  Activity,
  Smartphone,
  Sliders,
  Layers,
  Award,
  Clock,
  Server,
  Building,
  Check,
  TrendingUp,
  PieChart,
  MapPin,
  Briefcase,
  Sparkles
} from 'lucide-react';

export default function SmartParkingSection({ t, onOpenConsult }) {
  const isVi = t?.lang === 'vi' || !t?.lang;

  // Simulator State
  const [isScanning, setIsScanning] = useState(false);
  const [plateNumber, setPlateNumber] = useState('30A-888.99');
  const [gateStatus, setGateStatus] = useState(isVi ? 'ĐÃ ĐÓNG' : 'CLOSED'); // CLOSED, SCANNING..., ACCESS GRANTED (OPEN)
  const [assignedSpot, setAssignedSpot] = useState('B2-108');

  // Active Tab State: 'bizplan' | 'tech' | 'equipment' | 'backoffice' | 'mobile'
  const [activeTab, setActiveTab] = useState('bizplan');

  // Catalog PDF Viewer Modal State (20 Pages)
  const [pdfViewerOpen, setPdfViewerOpen] = useState(false);
  const [pdfCurrentPage, setPdfCurrentPage] = useState(1);

  // Vietnam Parking Investment Business Plan Modal State (43 Pages)
  const [bizPlanModalOpen, setBizPlanModalOpen] = useState(false);
  const [bizPlanCurrentPage, setBizPlanCurrentPage] = useState(1);

  // Full 43-Page Vietnam Parking Business Investment Plan Metadata
  const bizPlanPages = [
    { page: 1, title: isVi ? 'Bìa Kế hoạch Đầu tư Bãi đỗ xe Việt Nam' : '베트남 주차장 투자 사업계획서 표지', desc: isVi ? 'BEST Winner Kế hoạch Tổng thể Đầu tư Hạ tầng Bãi đỗ xe Thông minh Việt Nam 2026' : 'BEST Winner 베트남 스마트 주차 인프라 투자 마스터플랜 2026', src: '/images/parking/biz_plan/page_1.png' },
    { page: 2, title: isVi ? 'Mục lục & Tóm tắt Dự án (Executive Summary)' : '목차 및 사업 요약 (Executive Summary)', desc: isVi ? 'Hiện trạng thị trường bãi đỗ xe Việt Nam, hiệu quả đầu tư & mục lục kế hoạch' : '베트남 주차 시장 현황, 투자 수익성 및 마스터플랜 목차', src: '/images/parking/biz_plan/page_2.png' },
    { page: 3, title: isVi ? 'Phân tích Kinh tế Vĩ mô & Môi trường Sống Việt Nam' : '베트남 거시경제 및 거주 환경 분석', desc: isVi ? 'Tăng trưởng GDP 7.52% phát triển nhanh & đô thị hóa Hà Nội / TP.HCM' : 'GDP 성장률 7.52% 고속 성장과 하노이/호치민 도시화', src: '/images/parking/biz_plan/page_3.png' },
    { page: 4, title: isVi ? 'Hiện trạng Dân số & Phương tiện Giao thông' : '베트남 인구 & 모빌리티 보유 현황', desc: isVi ? 'Dân số 102 triệu người, 6.8 triệu xe hơi, 65 triệu xe máy tăng nhanh' : '인구 1억 200만명, 승용차 680만대, 오토바이 6,500만대 급증', src: '/images/parking/biz_plan/page_4.png' },
    { page: 5, title: 'Thực trạng Thiếu hụt Bãi đỗ xe Trung tâm Hà Nội / TP.HCM', desc: isVi ? 'Tỷ lệ cung cấp dưới 10% so với nhu cầu đỗ xe thực tế' : '주차 수요 대비 공급률 10% 미만의 심각한 주차 난', src: '/images/parking/biz_plan/page_5.png' },
    { page: 6, title: isVi ? 'Chính sách Mở rộng Bãi đỗ xe Việt Nam 2030' : '베트남 2030 주차장 확충 정책', desc: isVi ? 'Luật Quy hoạch Tổng thể Hà Nội 2030 & nghĩa vụ bảo đảm chỗ đỗ xe' : '하노이 마스터플랜 2030 법안 및 주차 수용 의무화', src: '/images/parking/biz_plan/page_6.png' },
    { page: 7, title: isVi ? 'Sự cần thiết Áp dụng Hạ tầng Bãi đỗ xe Thông minh' : '스마트 주차 인프라 도입의 필요성', desc: isVi ? 'Hệ thống AI LPR tự động ngăn thất thoát doanh thu & tối ưu hóa vận hành' : '무인 AI LPR 시스템 도입으로 수입 누수 방지 및 운영 최적화', src: '/images/parking/biz_plan/page_7.png' },
    { page: 8, title: isVi ? 'Mục tiêu Xây dựng 1.700 Bãi đỗ xe Mới tại Hà Nội' : '하노이 1,700개소 주차장 신설 인프라 타겟', desc: isVi ? 'Phát triển tháp đỗ xe & bãi đỗ xe trung tâm đến năm 2030' : '2030년까지 도심 핵심 구역 주차 타워 및 주차장 확보', src: '/images/parking/biz_plan/page_8.png' },
    { page: 9, title: isVi ? '5 Lợi thế Cạnh tranh Cốt lõi của BEST Winner' : 'BEST Winner 주차 사업 5대 핵심 경쟁력', desc: isVi ? 'Dòng tiền ổn định, tăng giá trị bất động sản, lợi nhuận hoạt động đến 70%' : '안정적 현금 흐름, 토지 가치 상승, 70% 높은 영업이익률', src: '/images/parking/biz_plan/page_9.png' },
    { page: 10, title: isVi ? 'Mô hình Đầu tư & Vận hành (BOT / BOO / Ủy thác)' : '투자 & 운영 모델 (BOT / BOO / 위탁)', desc: isVi ? 'Hợp tác công tư (PPP), thuê vận hành dài hạn BOT & ủy thác tự động' : '민관협력(PPP), BOT 장기 임대 운영 및 무인 위탁 사업', src: '/images/parking/biz_plan/page_10.png' },
    { page: 11, title: isVi ? 'Dự án Mục tiêu 01: Starlake City (Tây Hồ Tây)' : '핵심 투자 타겟 01: 스타레이크 시티 (Starlake City)', desc: isVi ? 'Khu đô thị Daewoo E&C / THT 2.076.000m² trung tâm CBD mới' : '대우건설/THT 개발 63.6만평 (2,076,000㎡) 신도시 CBD 주차 타겟', src: '/images/parking/biz_plan/page_11.png' },
    { page: 12, title: isVi ? 'Di dời Bộ ngành Chính phủ & Vị trí Starlake City' : '스타레이크 시티 정부부처 이전 및 입지', desc: isVi ? '16 bộ ngành chính phủ di dời & khu thương mại cao cấp' : '16개 행정부처 이전 및 고급 주거/상업지구 주차 거점', src: '/images/parking/biz_plan/page_12.png' },
    { page: 13, title: isVi ? 'Thiết kế Tháp Đỗ xe & Cổng Thông minh Starlake' : '스타레이크 주차 빌딩 및 스마트 게이트 설계', desc: isVi ? 'Dự án phát triển tháp đỗ xe biểu tượng thông minh' : '스마트 주차타워 랜드마크 개발안', src: '/images/parking/biz_plan/page_13.png' },
    { page: 14, title: isVi ? 'Dự án Mục tiêu 02: ParkCity Hà Nội' : '핵심 투자 타겟 02: 파크시티 하노이 (ParkCity)', desc: isVi ? 'Khu đô thị 77.4 Ha với 7.000 căn hộ thông minh' : '77.4 Ha 대규모 타운십 7,000세대 스마트 주차 인프라', src: '/images/parking/biz_plan/page_14.png' },
    { page: 15, title: isVi ? 'Quản lý Giám sát Trung tâm ParkCity Town Center' : '파크시티 타운센터 주차 통합 관제', desc: isVi ? 'Hạ tầng thanh toán tự động trung tâm thương mại & căn hộ' : '쇼핑몰 및 아파트 단지 무인 정산 인프라 구축', src: '/images/parking/biz_plan/page_15.png' },
    { page: 16, title: isVi ? 'Dự án Mục tiêu 03: Tòa nhà BIDV Tower Hà Nội' : '핵심 투자 타겟 03: 하노이 BIDV 타워 (BIDV Tower)', desc: isVi ? 'Tự động hóa bãi đỗ xe cao cấp 25 tầng trung tâm Hà Nội' : '하노이 25층 최고급 오피스 프라임 주차 무인화', src: '/images/parking/biz_plan/page_16.png' },
    { page: 17, title: isVi ? 'Dự án Mục tiêu 04: Lotte Center Hà Nội' : '핵심 투자 타겟 04: 롯데센터 하노이 (Lotte Center)', desc: isVi ? 'Tòa nhà 65 tầng (430 ô tô, 4.000 xe máy) doanh thu 82.8 triệu KRW/tháng' : '65층 랜드마크 (승용차 430대, 이륜차 4,000대) 월 8,280만원 매출', src: '/images/parking/biz_plan/page_17.png' },
    { page: 18, title: isVi ? 'Dự án Mục tiêu 05: Lotte Mall West Lake Hà Nội' : '핵심 투자 타겟 05: 롯데몰 웨스트레이크 하노이', desc: isVi ? 'TTTM lớn nhất Hà Nội (1.719 ô tô, 6.271 xe máy) doanh thu 200 triệu KRW/tháng' : '하노이 최대 쇼핑몰 (승용차 1,719대, 이륜차 6,271대) 월 2억원 매출', src: '/images/parking/biz_plan/page_18.png' },
    { page: 19, title: isVi ? 'Bảng Giá & Cơ cấu Doanh thu Bãi đỗ xe Việt Nam' : '베트남 주차 요금 체계 및 수익 구조', desc: isVi ? 'Bảng giá theo giờ, theo tháng, phân biệt ô tô & xe máy' : '시간제, 월정액, 차량/이륜차 차등 요금 테이블', src: '/images/parking/biz_plan/page_19.png' },
    { page: 20, title: isVi ? 'Tiết kiệm 60% Chi phí Nhân sự nhờ Hệ thống Tự động' : '무인 관제 도입에 따른 인건비 60% 절감', desc: isVi ? 'Giảm chi phí nhân công & thu phí tự động 24/7 thời gian thực' : '인건비 절감 및 24시간 실시간 무인 요금 징수 효과', src: '/images/parking/biz_plan/page_20.png' },
    { page: 21, title: isVi ? 'Mô hình Doanh thu Bổ sung từ Trạm Sạc EV' : 'EV 충전소 결합 부가 수익 모델', desc: isVi ? 'Gói đỗ xe kết hợp hạ tầng sạc nhanh xe điện' : '전기차 급속 충전 인프라 연동 주차 패키지', src: '/images/parking/biz_plan/page_21.png' },
    { page: 22, title: isVi ? 'Đặt chỗ & Thanh toán Bãi đỗ xe qua Ứng dụng Di động' : '모바일 앱 기반 주차 사전 예약 및 결제', desc: isVi ? 'Ứng dụng tài xế kết nối ưu đãi bãi đỗ xe xung quanh' : '운전자 모바일 앱으로 주변 주차장 혜택 연동', src: '/images/parking/biz_plan/page_22.png' },
    { page: 23, title: isVi ? 'Phân tích Vị trí & Khảo sát Tính Khả thi Mặt bằng' : '입지 분석 및 주차장 부지 타당성 검토', desc: isVi ? 'Đánh giá vị trí theo khu thương mại, lượng xe & chỉ số ùn tắc' : '상권, 유동 차량, 도로 정체 지수 입지 평가', src: '/images/parking/biz_plan/page_23.png' },
    { page: 24, title: isVi ? 'Đầu tư Ban đầu CAPEX & Chi phí Vận hành OPEX' : 'CAPEX & OPEX 초기 투자 및 운영비용', desc: isVi ? 'Mô phỏng chi phí cổng rào, camera LPR & máy chủ' : '차단기, LPR 카메라, 서버 구축비 시뮬레이션', src: '/images/parking/biz_plan/page_24.png' },
    { page: 25, title: isVi ? 'Điểm Hòa vốn (BEP) & Thời gian Hoàn vốn' : '손익분기점 (BEP) 및 투자금 회수 분기', desc: isVi ? 'Đạt điểm hòa vốn trong 2~3 năm & tỷ suất lợi nhuận 20%+/năm' : '2~3년 내 손익분기 도달 및 연 20%+ 손익률', src: '/images/parking/biz_plan/page_25.png' },
    { page: 26, title: isVi ? 'Quản lý Rủi ro & Hướng dẫn Cấp phép Chính quyền' : '리스크 관리 및 대관 허가 가이드', desc: isVi ? 'Hướng dẫn cấp phép từ Bộ KH&ĐT (MPI) & Bộ GTVT Việt Nam' : '베트남 기획투자부(MPI) 및 교통부 인허가 가이드', src: '/images/parking/biz_plan/page_26.png' },
    { page: 27, title: isVi ? 'Dự án Ủy thác Quản lý Bãi đỗ xe Công cộng Hà Nội' : '하노이 공영 주차장 위탁 관리 사업', desc: isVi ? 'Dự án tự động hóa đỗ xe lòng đường hợp tác với chính quyền' : '지자체 협력 공용 도로 주차 무인화 사업', src: '/images/parking/biz_plan/page_27.png' },
    { page: 28, title: isVi ? 'Lộ trình Mở rộng CBD Quận 1/Quận 2 TP.HCM' : '호치민 1군/2군 CBD 확장 로드맵', desc: isVi ? 'Mở rộng điểm đỗ xe tại các đô thị trọng điểm phía Nam' : '남부 핵심 광역 도시 주차 거점 확대', src: '/images/parking/biz_plan/page_28.png' },
    { page: 29, title: isVi ? 'Lợi thế Cạnh tranh Khác biệt của Giải pháp BEST Winner' : 'BEST Winner 솔루션 차별화 경쟁력', desc: isVi ? 'Cung cấp tích hợp Phần cứng, Phần mềm & Giám sát 24/7' : '하드웨어, 소프트웨어, 24시간 원격 관제 통합 제공', src: '/images/parking/biz_plan/page_29.png' },
    { page: 30, title: isVi ? 'Thông số Kỹ thuật Phần cứng Bãi đỗ xe Thông minh' : '스마트 주차 하드웨어 사양서', desc: isVi ? 'Thông số cổng thông minh tốc độ cao & cảm biến kép AI LPR' : '고속 스마트 게이트 및 AI LPR 듀얼 센서 사양', src: '/images/parking/biz_plan/page_30.png' },
    { page: 31, title: isVi ? 'Tích hợp Ví Điện tử Việt Nam (MoMo, ZaloPay, ShopeePay)' : '베트남 로컬 PG 연동 (Momo, ZaloPay, ShopeePay)', desc: isVi ? 'Giải pháp thu phí tích hợp mã QR thanh toán tiện lợi' : '간편 결제 QR 통합 징수 솔루션', src: '/images/parking/biz_plan/page_31.png' },
    { page: 32, title: isVi ? 'Phát hành Hóa đơn Điện tử (E-Tax) Thời gian Thực' : '전자세금계산서 (E-Tax) 실시간 국세청 발행', desc: isVi ? 'Tự động hóa thủ tục chứng từ thuế điện tử Việt Nam' : '베트남 전자 세무 증빙 수속 자동화', src: '/images/parking/biz_plan/page_32.png' },
    { page: 33, title: isVi ? 'Quy trình Vận hành Trung tâm Giám sát 24/7' : '24시간 무인 관제 센터 운영 프로세스', desc: isVi ? 'Điện thoại nội bộ khẩn cấp & điều khiển cổng từ xa' : '비상 인터폰 튜닝 및 원격 차단기 제어망', src: '/images/parking/biz_plan/page_33.png' },
    { page: 34, title: isVi ? 'Tiến độ Thực hiện theo Giai đoạn (Phase 1 ~ Phase 4)' : '단계별 추진 일정 (Phase 1 ~ Phase 4)', desc: isVi ? 'Từ lựa chọn địa điểm, hoàn thiện đến vận hành giám sát tự động' : '사이트 선정부터 준공, 무인 관제 가동 일정', src: '/images/parking/biz_plan/page_34.png' },
    { page: 35, title: isVi ? 'Huy động Quỹ Đầu tư & Cơ cấu Hợp tác Bãi đỗ xe' : '주차장 투자 펀드 모집 및 사업 구조', desc: isVi ? 'Phân chia cổ phần & đối tác phân chia lợi nhuận định kỳ' : '지분 분배 및 정기 수익 배당 파트너십', src: '/images/parking/biz_plan/page_35.png' },
    { page: 36, title: isVi ? 'Dự án Hạ tầng Đỗ xe PPP Công tư Việt Nam' : '베트남 PPP 민관합작 주차 인프라', desc: isVi ? 'Dự án đỗ xe thành phố thông minh phát triển đô thị chính phủ' : '정부 도시 개발 스마트시티 주차 프로젝트', src: '/images/parking/biz_plan/page_36.png' },
    { page: 37, title: isVi ? 'Thành lập Pháp nhân Địa phương (JV) & Pháp lý Thuế' : '현지 법인 (JV) 설립 및 세무 법률', desc: isVi ? 'Khai báo vốn đầu tư & quy trình cấp giấy phép kinh doanh' : '투자 자본금 신고 및 라이선스 취득 절차', src: '/images/parking/biz_plan/page_37.png' },
    { page: 38, title: isVi ? 'Mô phỏng Kết quả Vận hành & Báo cáo Dữ liệu' : '운영 실적 시뮬레이션 및 데이터 보고서', desc: isVi ? 'Xu hướng xe ra vào theo ngày/tháng & tỷ lệ sử dụng không gian' : '일별/월별 입출차 트렌드 및 주차 공간 활용률', src: '/images/parking/biz_plan/page_38.png' },
    { page: 39, title: isVi ? 'Đánh giá lại Giá trị Bất động sản (Asset Uplift)' : '부동산 자산 가치 재평가 (Asset Uplift)', desc: isVi ? 'Tăng giá trị bất động sản khi áp dụng hạ tầng đỗ xe thông minh' : '스마트 주차 시설 도입 시 부동산 가치 프리미엄', src: '/images/parking/biz_plan/page_39.png' },
    { page: 40, title: isVi ? 'Hạ tầng Đỗ xe Thông minh Thân thiện Môi trường ESG' : 'ESG 친환경 스마트 주차 인프라', desc: isVi ? 'Cải thiện chất lượng không khí & giảm thời gian chờ đỗ xe' : '공공 공기질 개선 및 주차 대기시간 단축', src: '/images/parking/biz_plan/page_40.png' },
    { page: 41, title: isVi ? 'Sơ đồ Tổ chức & Đội ngũ Hỗ trợ Kỹ thuật BEST Winner' : 'BEST Winner 조직도 및 현지 기술지원 팀', desc: isVi ? 'Hạ tầng kỹ sư thường trực tại Hà Nội & TP.HCM' : '하노이/호치민 현지 상주 엔지니어 인프라', src: '/images/parking/biz_plan/page_41.png' },
    { page: 42, title: isVi ? 'Câu hỏi Thường gặp (FAQ) & Hướng dẫn Đầu tư' : '자주 묻는 질문 (FAQ) & 투자 가이드', desc: isVi ? 'Các câu hỏi & giải đáp chính về đầu tư bãi đỗ xe Việt Nam' : '베트남 주차장 투자 주요 문의사항 및 답변', src: '/images/parking/biz_plan/page_42.png' },
    { page: 43, title: isVi ? 'BEST Winner - Đối tác Bãi đỗ xe Thông minh Hàng đầu Việt Nam' : '베트남 최고 스마트 주차 파트너 BEST Winner', desc: isVi ? 'Tầm nhìn hợp tác bãi đỗ xe thông minh cho di chuyển tương lai' : '미래 모빌리티 스마트 주차 공동 사업 승리 비전', src: '/images/parking/biz_plan/page_43.png' }
  ];

  const openBizPlanAtPage = (pageNum) => {
    setBizPlanCurrentPage(pageNum);
    setBizPlanModalOpen(true);
  };

  // Full 20-Page Catalog Metadata from SHEYONE_AMANO_스마트주차_F.pdf
  const catalogPages = [
    { page: 1, title: isVi ? 'Trang bìa: BEST Winner PARKING HUB' : '표지: BEST Winner PARKING HUB', desc: isVi ? 'Brochure chính thức Nền tảng Bãi đỗ xe Thông minh AI' : 'AI 스마트 주차 플랫폼 공식 브로슈어', src: '/images/parking/docu/page_1.png' },
    { page: 2, title: isVi ? 'Mục lục & Tổng quan Nền tảng' : '목차 & 플랫폼 개요', desc: isVi ? 'Triết lý công ty, dòng dịch vụ & cơ cấu vận hành' : '회사 철학, 서비스 라인업 및 운영 구조', src: '/images/parking/docu/page_2.png' },
    { page: 3, title: isVi ? 'Tầm nhìn Hạ tầng Đỗ xe Thông minh' : '스마트 주차 인프라 비전', desc: isVi ? 'Doanh nghiệp giải pháp đỗ xe thông minh dựa trên dữ liệu' : '데이터 기반 미래형 스마트 주차 솔루션 기업', src: '/images/parking/docu/page_3.png' },
    { page: 4, title: isVi ? 'Tầm nhìn & Sứ mệnh (Vision & Mission)' : '비전 & 미션 (Vision & Mission)', desc: isVi ? 'Tự động hóa vận hành đỗ xe qua giám sát & quản lý dữ liệu' : '실시간 모니터링과 데이터 관리를 통한 주차 운영 자동화', src: '/images/parking/docu/page_4.png' },
    { page: 5, title: isVi ? 'Mô hình Kinh doanh Tích hợp (Business Model)' : '통합 비즈니스 모델 (Business Model)', desc: isVi ? 'Kết nối từ tìm kiếm bãi đỗ xe, đặt chỗ, trả trước đến ra vào' : '주차장 검색부터 예약, 선결제, 입출차까지 연결', src: '/images/parking/docu/page_5.png' },
    { page: 6, title: isVi ? '4 Mảng Công nghệ Cốt lõi (Core Technology)' : '핵심 기술 4대 파트 (Core Technology)', desc: isVi ? 'AI LPR (Biển số), PAY (Thanh toán), OPS (Giám sát), DATA (Phân tích)' : 'AI LPR(번호판인식), PAY(결제), OPS(관제), DATA(분석)', src: '/images/parking/docu/page_6.png' },
    { page: 7, title: isVi ? 'Lĩnh vực Kinh doanh (Business Areas)' : '사업 영역 (Business Areas)', desc: isVi ? 'Cung cấp thiết bị, phát triển, kết nối sạc EV, giải pháp tổng thể ủy thác' : '장비 공급, 개발, 전기차 충전 연동, 위탁 운영 Total Solution', src: '/images/parking/docu/page_7.png' },
    { page: 8, title: isVi ? 'Dòng Thiết bị Cốt lõi BEST Winner (Equipment)' : 'BEST Winner 핵심 장비 라인업 (Equipment)', desc: isVi ? 'Cổng chắn thông minh, máy thanh toán, LPR tích hợp, màn hình đàm thoại' : '스마트 차단기, 무인정산기, 통합 LPR, 인터폰 디스플레이', src: '/images/parking/docu/page_8.png' },
    { page: 9, title: isVi ? 'Đổi mới Trải nghiệm Đỗ xe' : '주차 이용 경험 혁신', desc: isVi ? 'Trải nghiệm dịch vụ hài lòng cho cả người dùng & quản lý' : '사용자와 관리자 모두를 만족시키는 서비스 경험', src: '/images/parking/docu/page_9.png' },
    { page: 10, title: isVi ? 'Câu chuyện Khách hàng & Giải quyết Vấn đề' : '고객 스토리 & 문제 해결', desc: isVi ? 'Dịch vụ mới BEST Winner PARKING HUB giải tỏa căng thẳng đỗ xe' : '주차 스트레스 해소를 위한 BEST Winner PARKING HUB 신규 서비스', src: '/images/parking/docu/page_10.png' },
    { page: 11, title: isVi ? 'Giải pháp Thông minh Tích hợp' : '통합 스마트 솔루션', desc: isVi ? 'Tối đa hóa hiệu quả vận hành & nâng cao sự tiện lợi cho khách hàng' : '운영 효율 극대화 및 고객 편의성 향상', src: '/images/parking/docu/page_11.png' },
    { page: 12, title: isVi ? 'Quy trình Dịch vụ App & Web Di động' : '모바일 앱 & 웹 서비스 프로세스', desc: isVi ? 'Tìm kiếm, trả trước, vé tháng, kiểm soát & hóa đơn thuế tự động' : '검색, 선결제, 월정액, 단속, 세금계산서 자동화', src: '/images/parking/docu/page_12.png' },
    { page: 13, title: isVi ? 'Sơ đồ Sử dụng Ứng dụng Di động' : '스마트 앱 이용 흐름도', desc: isVi ? 'Tra cứu bãi đỗ xe xung quanh & thanh toán ngay trên 1 ứng dụng' : '앱 하나로 주변 주차장 조회 및 즉시 결제', src: '/images/parking/docu/page_13.png' },
    { page: 14, title: isVi ? 'Giới thiệu Phần mềm Vận hành Thời gian Thực' : '실시간 운영 소프트웨어 안내', desc: isVi ? 'Giới thiệu Backoffice Giám sát Thông minh BEST Winner ACRM' : 'BEST Winner ACRM 스마트 관제 백오피스 소개', src: '/images/parking/docu/page_14.png' },
    { page: 15, title: isVi ? 'Bảng Điều khiển Tích hợp BEST Winner ACRM' : 'BEST Winner ACRM 통합 대시보드', desc: isVi ? 'Giám sát xe ra vào thời gian thực & trạng thái ô đỗ xe' : '실시간 현장 입출차 및 주차면 점유 현황 모니터링', src: '/images/parking/docu/page_15.png' },
    { page: 16, title: isVi ? 'Trung tâm Giám sát Tích hợp & Quản lý Sự cố' : '통합관제센터 & 장애관리 백오피스', desc: isVi ? 'Hiệu chỉnh thời gian thực bãi đỗ tự động 24/7 & xử lý sự cố khẩn cấp' : '24시간 무인 현장 실시간 튜닝 및 장애 긴급 조치', src: '/images/parking/docu/page_16.png' },
    { page: 17, title: isVi ? 'Dữ liệu Vận hành & Báo cáo Phân tích' : '운영 데이터 & 분석 보고서', desc: isVi ? 'Phân tích doanh thu theo kỳ, xu hướng ra vào & dữ liệu lịch sử sự cố' : '기간별 매출, 입출차 트렌드 및 장애 이력 데이터 분석', src: '/images/parking/docu/page_17.png' },
    { page: 18, title: isVi ? 'Backoffice Quản lý Mặt bằng & Người dùng' : '현장 & 사용자 관리 백오피스', desc: isVi ? 'Đăng ký xe vé tháng, phát hành phiếu giảm giá & quản lý quyền người dùng' : '월정액 차량 등록, 할인권 발행 및 사용자 권한 관리', src: '/images/parking/docu/page_18.png' },
    { page: 19, title: isVi ? 'Vận hành Thực tế Trung tâm Giám sát 24/7' : '24시간 통합관제센터 실물 운영', desc: isVi ? 'Trung tâm giám sát thời gian thực 24h với nhân viên chuyên trách' : 'BEST Winner 파킹 관제 전담 요원 24시간 실시간 관제 현장', src: '/images/parking/docu/page_19.png' },
    { page: 20, title: isVi ? 'Kết bài BEST Winner SMART PARKING' : 'BEST Winner SMART PARKING 엔딩', desc: isVi ? 'Đối tác bãi đỗ xe thông minh dẫn đầu văn hóa đỗ xe tương lai' : '미래 주차 문화를 선도하는 스마트 주차 파트너', src: '/images/parking/docu/page_20.png' }
  ];

  const simulateScan = () => {
    setIsScanning(true);
    setGateStatus(isVi ? 'ĐANG QUÉT AI...' : 'SCANNING...');
    setTimeout(() => {
      setIsScanning(false);
      setGateStatus(isVi ? 'CHO PHÉP VÀO (MỞ CỔNG)' : 'ACCESS GRANTED (GATE OPEN)');
    }, 1200);
  };

  const samplePlates = ['30A-888.99', '29B-123.45', '51G-999.88', '30H-777.66', '30F-555.22'];

  const openPdfAtPage = (pageNum) => {
    setPdfCurrentPage(pageNum);
    setPdfViewerOpen(true);
  };

  return (
    <section id="parking" className="py-20 bg-navy-900/40 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unit Header & Official PDF Catalog Download Banner */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-8 border-b border-navy-800/80">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30 whitespace-nowrap">
                <Car className="w-3.5 h-3.5" />
                <span>BUSINESS UNIT ③</span>
              </span>
              <span className="text-xs text-gold-400 font-mono bg-navy-950 px-2.5 py-1 rounded border border-navy-700 whitespace-nowrap">
                BEST Winner KOREA & VIETNAM
              </span>
            </div>
            
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight break-keep">
              {isVi ? 'Hệ thống Bãi đỗ xe Thông minh BEST Winner VN' : 'BEST Winner 스마트 주차 시스템 VN'}
            </h2>
            <p className="text-xs sm:text-base text-slate-300 max-w-3xl leading-relaxed break-keep">
              {isVi
                ? 'Giải pháp quản lý bãi đỗ xe tiên tiến tích hợp Nhận diện biển số học sâu AI (LPR), cổng chắn tự động thông minh, giám sát từ xa 24/7 ACRM và nền tảng thanh toán di động.'
                : 'AI 딥러닝 번호판 인식(LPR), 스마트 무인 차단기, ACRM 24시간 원격 관제 및 모바일 결제 플랫폼이 통합된 최첨단 주차 관리 솔루션입니다.'}
            </p>
          </div>

          {/* Investment Plan & Catalog Controls */}
          <div className="mt-6 md:mt-0 flex flex-wrap gap-2.5">
            <button
              onClick={() => openBizPlanAtPage(1)}
              className="bg-gold-500/20 hover:bg-gold-500/30 text-gold-300 border border-gold-500/40 font-extrabold px-4 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap"
            >
              <Briefcase className="w-4 h-4 mr-1.5 text-gold-400 shrink-0" />
              <span>{isVi ? 'Xem Kế hoạch Đầu tư (43P)' : '사업계획서 뷰어 (43P)'}</span>
            </button>

            <a
              href="/docu/park/BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
              download="BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
              className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-4 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap"
            >
              <Download className="w-4 h-4 mr-1.5 shrink-0" />
              <span>{isVi ? 'Tải PDF Kế hoạch' : '사업계획서 PDF 받기'}</span>
            </a>

            <button
              onClick={() => openPdfAtPage(1)}
              className="bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 border border-emeraldGreen-500/30 font-bold px-4 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap"
            >
              <Eye className="w-4 h-4 mr-1.5 text-emeraldGreen-400 shrink-0" />
              <span>{isVi ? 'Catalogue Hệ thống (20P)' : '시스템 카탈로그 (20P)'}</span>
            </button>
          </div>
        </div>

        {/* 4 Key Highlight Cards */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-emeraldGreen-500/10 border border-emeraldGreen-500/30 text-emeraldGreen-400 flex items-center justify-center mb-3">
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-white mb-1 break-keep">
              {isVi ? 'AI LPR Nhận diện 99.8%' : 'AI LPR 99.8% 인식률'}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed break-keep">
              {isVi
                ? 'Thuật toán học sâu nhận diện chính xác trong 0.1s ngay cả khi ban đêm, mưa gió, biển số bẩn.'
                : '야간, 우천, 오염 번호판도 딥러닝 카메라 알고리즘으로 0.1초 내 정확히 인식.'}
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-3">
              <Monitor className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-white mb-1 break-keep">
              {isVi ? 'Backoffice ACRM BEST Winner' : 'BEST Winner ACRM 백오피스'}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed break-keep">
              {isVi
                ? 'Cung cấp sẵn Bảng điều khiển giám sát ra vào thời gian thực, tổng hợp doanh thu và lịch sử sự cố.'
                : '실시간 입출차 현황, 정산 집계, 장애 이력 모니터링 대시보드 기본 제공.'}
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gold-500/10 border border-gold-500/30 text-gold-400 flex items-center justify-center mb-3">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-white mb-1 break-keep">
              {isVi ? 'Hỗ trợ Giám sát Từ xa 24/7' : '24시간 관제 원격지원'}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed break-keep">
              {isVi
                ? 'Chuyên viên vận hành điều khiển cổng chắn tự động & xử lý đàm thoại nội bộ 365 ngày 24/7.'
                : '전문 운영요원이 365일 24시간 무인 현장 차단기 제어 및 인터폰 대응.'}
            </p>
          </div>

          <div className="bg-navy-950/80 border border-navy-800 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 text-purple-400 flex items-center justify-center mb-3">
              <Smartphone className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <h3 className="text-xs sm:text-base font-bold text-white mb-1 break-keep">
              {isVi ? 'Ứng dụng App & Hóa đơn E-Tax' : '모바일 앱 & E-Tax 연동'}
            </h3>
            <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed break-keep">
              {isVi
                ? 'Hỗ trợ tích hợp tìm bãi đỗ, đăng ký vé tháng, xuất hóa đơn thuế điện tử và xử lý đỗ xe trái phép.'
                : '주차장 검색, 월정액 신청, 전자세금계산서 및 무단주차 단속까지 통합 지원.'}
            </p>
          </div>
        </div>

        {/* Feature Navigation Tabs (Scrollable on Mobile) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 bg-navy-950 p-2 rounded-2xl border border-navy-800 overflow-x-auto whitespace-nowrap scrollbar-none max-w-full">
          <button
            onClick={() => setActiveTab('bizplan')}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
              activeTab === 'bizplan'
                ? 'bg-gold-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Briefcase className="w-4 h-4 shrink-0" />
            <span>{isVi ? '01. Kế hoạch Đầu tư Bãi đỗ xe VN (43P)' : '01. 베트남 주차장 투자 사업계획서 (43P)'}</span>
          </button>

          <button
            onClick={() => setActiveTab('tech')}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
              activeTab === 'tech'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Layers className="w-4 h-4 shrink-0" />
            <span>{isVi ? '02. 4 Trụ cột Công nghệ Cốt lõi' : '02. 핵심 기술 4대 파트'}</span>
          </button>

          <button
            onClick={() => setActiveTab('equipment')}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
              activeTab === 'equipment'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Sliders className="w-4 h-4 shrink-0" />
            <span>{isVi ? '03. Dòng Thiết bị Cốt lõi' : '03. 핵심 장비 라인업'}</span>
          </button>

          <button
            onClick={() => setActiveTab('backoffice')}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
              activeTab === 'backoffice'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Monitor className="w-4 h-4 shrink-0" />
            <span>{isVi ? '04. ACRM Tự động & Backoffice' : '04. ACRM 무인관제 & 백오피스'}</span>
          </button>

          <button
            onClick={() => setActiveTab('mobile')}
            className={`px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center space-x-1.5 shrink-0 whitespace-nowrap ${
              activeTab === 'mobile'
                ? 'bg-emeraldGreen-500 text-navy-950 shadow-lg'
                : 'text-slate-300 hover:bg-navy-900 hover:text-white'
            }`}
          >
            <Smartphone className="w-4 h-4 shrink-0" />
            <span>{isVi ? '05. Dịch vụ App Di động' : '05. 모바일 앱 서비스'}</span>
          </button>
        </div>

                {/* Tab 0: Vietnam Parking Investment Plan (43 Pages) */}
        {activeTab === 'bizplan' && (
          <div className="space-y-10 bg-navy-950/80 p-6 sm:p-10 rounded-3xl border border-gold-500/30">
            
            {/* Business Plan Banner Header */}
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6 pb-6 border-b border-navy-800">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30 uppercase tracking-widest whitespace-nowrap">
                    2026 VIETNAM PARKING INVESTMENT PLAN (43 PAGES)
                  </span>
                  <span className="text-xs text-emeraldGreen-400 bg-navy-900 px-2.5 py-1 rounded border border-navy-700 whitespace-nowrap font-mono">
                    Official Document 260222
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight break-keep">
                  {isVi ? (
                    <>Kế hoạch Masterplan <span className="text-gold-400">Đầu tư Bãi đỗ xe Thông minh</span> Việt Nam</>
                  ) : (
                    <>베트남 스마트 주차장 <span className="text-gold-400">투자 사업계획서</span> 마스터플랜</>
                  )}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed break-keep">
                  {isVi
                    ? 'Nhằm giải quyết vấn đề thiếu hụt chỗ đỗ xe tại Hà Nội/TP.HCM do sự bùng nổ dân số 102 triệu người và 6.8 triệu ô tô tại Việt Nam, BEST Winner đề xuất chiến lược phát triển, đầu tư bãi đỗ xe & giám sát tự động 24/7 dài 43 trang.'
                    : '베트남 1억 200만 인구와 680만대 승용차 급증으로 인한 하노이/호치민 주차 난 극복을 위해, BEST Winner가 제안하는 43페이지 분량의 주차장 개발·투자 및 24시간 무인 관제 통합 전략입니다.'}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 shrink-0">
                <button
                  onClick={() => openBizPlanAtPage(1)}
                  className="bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-5 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap"
                >
                  <Eye className="w-4 h-4 mr-1.5 shrink-0" />
                  <span>{isVi ? 'Trình chiếu 43 Trang Slide' : '전체 43페이지 슬라이드 뷰어'}</span>
                </button>
                <a
                  href="/docu/park/BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                  download="BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                  className="bg-navy-900 hover:bg-navy-800 text-gold-300 border border-gold-500/40 font-bold px-5 py-3 rounded-xl shadow-lg transition-all flex items-center text-xs sm:text-sm whitespace-nowrap"
                >
                  <Download className="w-4 h-4 mr-1.5 shrink-0 text-gold-400" />
                  <span>{isVi ? 'Tải PDF Bản Đầy Đủ' : 'PDF 풀버전 다운로드'}</span>
                </a>
              </div>
            </div>

            {/* 4 Macro Market Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5">
                <div className="text-gold-400 font-extrabold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Tăng trưởng GDP' : 'GDP 성장률'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">7.52%</div>
                <p className="text-[11px] text-slate-400 mt-1 break-keep">
                  {isVi ? 'Tăng trưởng kinh tế vĩ mô liên tục cao hàng đầu Đông Nam Á' : '동남아 최고 수준의 거시경제 지속 고속 성장'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5">
                <div className="text-emeraldGreen-400 font-extrabold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Car className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Số lượng Xe lưu thông' : '차량 보유대수'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">{isVi ? '6.8 Triệu' : '680만대'}</div>
                <p className="text-[11px] text-slate-400 mt-1 break-keep">
                  {isVi ? 'Dân số 102 triệu người, sở hữu đồng thời 65 triệu xe máy' : '인구 1억 200만, 이륜차 6,500만대 동시 보유'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5">
                <div className="text-cyan-400 font-extrabold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <Building className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Thiếu hụt Đỗ xe Hà Nội' : '하노이 주차 난'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">1,700+</div>
                <p className="text-[11px] text-slate-400 mt-1 break-keep">
                  {isVi ? 'Bãi đỗ xe mới cần thiết đến 2030 (Hiện có 72 điểm)' : '2030년까지 신규 필요 주차장 (현재 72개소)'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5">
                <div className="text-purple-400 font-extrabold text-xs uppercase tracking-wider mb-1 flex items-center gap-1">
                  <PieChart className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Hiệu quả Vận hành' : '운영 수익성'}</span>
                </div>
                <div className="text-2xl sm:text-3xl font-black text-white font-mono">70% BEP</div>
                <p className="text-[11px] text-slate-400 mt-1 break-keep">
                  {isVi ? 'Thu hồi vốn đầu tư trong 2~3 năm nhờ áp dụng AI tự động' : '무인화 AI 도입으로 2~3년 내 투자 회수'}
                </p>
              </div>
            </div>

            {/* Target Major Projects Section */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">TARGET INVESTMENT LOCATIONS</span>
                  <h4 className="text-lg sm:text-xl font-extrabold text-white break-keep">
                    {isVi ? 'Dự án Mục tiêu Đầu tư & Giám sát Bãi đỗ xe Trọng điểm' : '베트남 핵심 주차 개발 & 관제 타겟 프로젝트'}
                  </h4>
                </div>
                <span className="text-xs text-slate-400 font-mono hidden sm:block">
                  {isVi ? 'Tóm tắt Kế hoạch P.11 ~ P.18' : '사업계획서 P.11 ~ P.18 요약'}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                
                {/* Site 1: Starlake City */}
                <div 
                  onClick={() => openBizPlanAtPage(11)}
                  className="bg-navy-900 rounded-2xl p-5 border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/30">
                      NEW CBD (2,076,000㎡)
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-gold-400 transition-colors flex items-center">
                      <Eye className="w-3 h-3 mr-1" /> {isVi ? 'Xem P.11' : 'P.11 뷰어'}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors break-keep">
                    Khu đô thị Starlake City (Tây Hồ Tây)
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Khu đô thị 2.076.000㎡ Daewoo E&C / THT phát triển. Mục tiêu xây dựng hạ tầng đỗ xe cho 16 bộ ngành chính phủ & tòa nhà phức hợp.'
                      : '대우건설/THT 개발 2,076,000㎡ 신도시. 베트남 16개 정부부처 이전 및 최고급 복합 빌딩 주차 인프라 구축 타겟.'}
                  </p>
                  <div className="pt-2 border-t border-navy-800 text-[11px] text-slate-400 flex justify-between">
                    <span>{isVi ? 'Chủ đầu tư: Daewoo E&C / THT' : '개발 주체: Daewoo E&C / THT'}</span>
                    <span className="text-gold-400 font-bold">{isVi ? 'Tháp đỗ xe & Giám sát ngầm' : '주차타워 & 지하 관제'}</span>
                  </div>
                </div>

                {/* Site 2: ParkCity Hanoi */}
                <div 
                  onClick={() => openBizPlanAtPage(14)}
                  className="bg-navy-900 rounded-2xl p-5 border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 px-2.5 py-0.5 rounded border border-emeraldGreen-500/30">
                      TOWNSHIP (77.4 Ha)
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-emeraldGreen-400 transition-colors flex items-center">
                      <Eye className="w-3 h-3 mr-1" /> {isVi ? 'Xem P.14' : 'P.14 뷰어'}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-emeraldGreen-300 transition-colors break-keep">
                    Khu đô thị ParkCity Hà Nội
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Chuẩn hóa hệ thống thanh toán đỗ xe tự động tích hợp cho 7.000 căn hộ cao cấp và TTTM ParkCity Town Center.'
                      : '7,000세대 대규모 고급 아파트 및 파크시티 타운센터 쇼핑몰 통합 무인 주차 정산 시스템 표준화.'}
                  </p>
                  <div className="pt-2 border-t border-navy-800 text-[11px] text-slate-400 flex justify-between">
                    <span>{isVi ? 'Quy mô: 7.000+ căn hộ' : '수용 규모: 7,000+ 세대'}</span>
                    <span className="text-emeraldGreen-400 font-bold">{isVi ? 'Cổng tự động Town Center' : '타운센터 무인 게이트'}</span>
                  </div>
                </div>

                {/* Site 3: Lotte Mall West Lake */}
                <div 
                  onClick={() => openBizPlanAtPage(18)}
                  className="bg-navy-900 rounded-2xl p-5 border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-0.5 rounded border border-cyan-500/30">
                      MEGA MALL ({isVi ? 'Doanh thu 200tr KRW/tháng' : '월 2억 매출'})
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-cyan-400 transition-colors flex items-center">
                      <Eye className="w-3 h-3 mr-1" /> {isVi ? 'Xem P.18' : 'P.18 뷰어'}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors break-keep">
                    Lotte Mall West Lake Hà Nội
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'TTTM phức hợp Tây Hồ lớn nhất Hà Nội (1.719 ô tô, 6.271 xe máy). Đạt thành tích doanh thu phí đỗ xe khoảng 200 triệu KRW/tháng.'
                      : '하노이 최대 서호 복합 쇼핑몰 (승용차 1,719대, 이륜차 6,271대). 월 2억원 상당의 주차 요금 매출 실적 보유.'}
                  </p>
                  <div className="pt-2 border-t border-navy-800 text-[11px] text-slate-400 flex justify-between">
                    <span>{isVi ? 'Sức chứa: 1.719 ô tô / 6.271 xe máy' : '수용: 승용 1,719대 / 오토바이 6,271대'}</span>
                    <span className="text-cyan-400 font-bold">{isVi ? 'AI LPR Siêu lớn' : '초대형 AI LPR'}</span>
                  </div>
                </div>

                {/* Site 4: Lotte Center Hanoi */}
                <div 
                  onClick={() => openBizPlanAtPage(17)}
                  className="bg-navy-900 rounded-2xl p-5 border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded border border-purple-500/30">
                      LANDMARK (65 Tầng)
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-purple-400 transition-colors flex items-center">
                      <Eye className="w-3 h-3 mr-1" /> {isVi ? 'Xem P.17' : 'P.17 뷰어'}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors break-keep">
                    Lotte Center Hà Nội
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Tòa nhà biểu tượng 65 tầng trung tâm Hà Nội. Sức chứa 430 ô tô, 4.000 xe máy tạo ra doanh thu hàng tháng trên 82.8 triệu KRW.'
                      : '하노이 중심 65층 프라임 랜드마크. 승용차 430대, 이륜차 4,000대 수용으로 월 8,280만원 이상 수익 창출.'}
                  </p>
                  <div className="pt-2 border-t border-navy-800 text-[11px] text-slate-400 flex justify-between">
                    <span>{isVi ? 'Sức chứa: 430 ô tô / 4.000 xe máy' : '수용: 승용 430대 / 오토바이 4,000대'}</span>
                    <span className="text-purple-400 font-bold">{isVi ? 'Doanh thu 82.8tr KRW/tháng' : '월 8,280만원 매출'}</span>
                  </div>
                </div>

                {/* Site 5: BIDV Tower */}
                <div 
                  onClick={() => openBizPlanAtPage(16)}
                  className="bg-navy-900 rounded-2xl p-5 border border-navy-700 hover:border-gold-500/50 transition-all cursor-pointer group space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-0.5 rounded border border-gold-500/30">
                      GRADE A OFFICE (25F)
                    </span>
                    <span className="text-[10px] text-slate-400 group-hover:text-gold-400 transition-colors flex items-center">
                      <Eye className="w-3 h-3 mr-1" /> {isVi ? 'Xem P.16' : 'P.16 뷰어'}
                    </span>
                  </div>
                  <h5 className="text-base font-bold text-white group-hover:text-gold-300 transition-colors break-keep">
                    Tòa nhà BIDV Tower Hà Nội
                  </h5>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Vận hành thành công cổng chắn tự động & giám sát từ xa 24/7 cho bãi đỗ xe tòa nhà tài chính văn phòng cao cấp 25 tầng quận Hoàn Kiếm.'
                      : '하노이 환끔 구역 25층 최고급 프라임 금융 오피스 빌딩 주차장 무인 차단기 및 24/7 원격 관제 성공 운영.'}
                  </p>
                  <div className="pt-2 border-t border-navy-800 text-[11px] text-slate-400 flex justify-between">
                    <span>{isVi ? 'Vị trí: Quận Hoàn Kiếm' : '위치: Hoan Kiem District'}</span>
                    <span className="text-gold-400 font-bold">{isVi ? 'Giám sát Từ xa ACRM' : 'ACRM 원격 관제'}</span>
                  </div>
                </div>

                {/* Download Card */}
                <div className="bg-gradient-to-br from-gold-500/20 via-navy-900 to-navy-950 rounded-2xl p-5 border border-gold-500/40 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-gold-400 uppercase tracking-widest block">FULL REPORT DOWNLOAD</span>
                    <h5 className="text-base font-bold text-white break-keep">
                      {isVi ? 'Kế hoạch Đầu tư Báo cáo 43 Trang' : '43페이지 전체 투자 사업계획서'}
                    </h5>
                    <p className="text-xs text-slate-300 leading-relaxed break-keep">
                      {isVi
                        ? 'Bao gồm phân tích kinh tế vĩ mô, báo cáo tài chính ước tính, cơ cấu kinh doanh BOT/BOO, thủ tục cấp phép pháp lý & thuế.'
                        : '거시 경제 분석, 추정 재무제표, BOT/BOO 사업 구조, 법률 및 세무 인허가 절차가 수록되어 있습니다.'}
                    </p>
                  </div>
                  <a
                    href="/docu/park/BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                    download="BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                    className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-black py-2.5 rounded-xl shadow text-center text-xs flex items-center justify-center space-x-1.5 transition-all"
                  >
                    <Download className="w-4 h-4 shrink-0" />
                    <span>{isVi ? 'Tải PDF Masterplan' : 'PDF 마스터플랜 다운로드'}</span>
                  </a>
                </div>

              </div>
            </div>

            {/* 43 Slide Preview Strip */}
            <div className="space-y-3 pt-2">
              <div className="flex justify-between items-center">
                <h4 className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-gold-400" />
                  <span>
                    {isVi ? 'Xem trước 43 Slide Kế hoạch Đầu tư (Nhấp để phóng to)' : '사업계획서 전체 43 슬라이드 미리보기 (클릭 시 확대)'}
                  </span>
                </h4>
                <button
                  onClick={() => openBizPlanAtPage(1)}
                  className="text-xs font-bold text-gold-400 hover:text-gold-300 flex items-center"
                >
                  <Eye className="w-3.5 h-3.5 mr-1" />
                  <span>{isVi ? 'Xem Tất cả' : '모두 보기'}</span>
                </button>
              </div>

              <div className="flex gap-3 overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-gold-500">
                {bizPlanPages.slice(0, 15).map((item) => (
                  <div
                    key={item.page}
                    onClick={() => openBizPlanAtPage(item.page)}
                    className="flex-shrink-0 w-44 rounded-xl overflow-hidden border border-navy-700 bg-navy-900 cursor-pointer hover:border-gold-400 hover:scale-105 transition-all group relative"
                  >
                    <img src={item.src} alt={item.title} className="w-full h-28 object-cover" />
                    <div className="p-2">
                      <span className="text-[10px] font-mono font-bold text-gold-400 block">SLIDE {item.page}</span>
                      <p className="text-[11px] font-bold text-slate-200 line-clamp-1 group-hover:text-gold-300">
                        {item.title}
                      </p>
                    </div>
                  </div>
                ))}
                <button
                  onClick={() => openBizPlanAtPage(16)}
                  className="flex-shrink-0 w-36 h-[152px] rounded-xl border-2 border-dashed border-gold-500/40 bg-navy-900/60 hover:bg-navy-900 text-gold-400 flex flex-col items-center justify-center p-3 text-center space-y-1 transition-all"
                >
                  <Eye className="w-6 h-6 mb-1" />
                  <span className="text-xs font-bold">{isVi ? 'Xem thêm 28 Slide' : '+28개 슬라이드 더보기'}</span>
                </button>
              </div>
            </div>

          </div>
        )}

        {/* Tab 1: Core Tech */}
        {activeTab === 'tech' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-emeraldGreen-500/30 group">
              <img
                src="/images/parking/docu/page_6.png"
                alt="Core Technology 4 Pillars"
                className="w-full h-auto object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <button
                onClick={() => openPdfAtPage(6)}
                className="absolute bottom-4 right-4 bg-navy-950/90 text-emeraldGreen-400 border border-emeraldGreen-500/40 text-xs px-3 py-1.5 rounded-lg flex items-center hover:bg-emeraldGreen-500 hover:text-navy-950 transition-all font-bold"
              >
                <Eye className="w-3.5 h-3.5 mr-1" />
                <span>{isVi ? 'Phóng to Catalogue 6P' : '카탈로그 6P 확대보기'}</span>
              </button>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <div>
                <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                  CORE TECHNOLOGY
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white break-keep">
                  {isVi ? '4 Trụ cột Công nghệ Giám sát Bãi đỗ xe BEST Winner' : 'BEST Winner 주차 관제 4대 핵심 축'}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-emeraldGreen-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-emeraldGreen-500/20 flex items-center justify-center text-xs shrink-0">AI</span>
                    <span className="break-keep">{isVi ? 'AI LPR - Nhận diện Biển số Học sâu' : 'AI LPR - 딥러닝 번호판 인식'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Áp dụng động cơ học sâu tiên tiến bảo đảm tỷ lệ nhận diện chính xác 99.8% ngay cả ban ngày/ban đêm, đèn yếu, thời tiết mưa.'
                      : '주간/야간, 미등 점등, 우천 상황에서도 99.8% 고득점 인식률을 보장하는 최신 딥러닝 엔진 적용.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-cyan-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center text-xs shrink-0">PAY</span>
                    <span className="break-keep">{isVi ? 'PAY - Thanh toán Tự động Tích hợp' : 'PAY - 통합 무인 정산'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Triệt tiêu ùn tắc khi xuất bãi nhờ hỗ trợ thẻ tín dụng, Samsung Pay, mã QR di động, phiếu giảm giá và thanh toán trước.'
                      : '신용카드, 삼성페이, 모바일 QR, 할인권 및 사전 정산 지원으로 출차 정체 제로화 구현.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-gold-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-gold-500/20 flex items-center justify-center text-xs shrink-0">OPS</span>
                    <span className="break-keep">{isVi ? 'OPS - Backoffice Giám sát Trung tâm 24/7' : 'OPS - 24/7 중앙 관제 백오피스'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Xử lý tự động 24h giám sát trạng thái thiết bị tại chỗ, điều khiển cổng chắn từ xa, cuộc gọi đàm thoại nội bộ và biện pháp khẩn cấp.'
                      : '현장 장비 상태 감시, 차단기 원격 제어, 인터폰 통화 및 비상 조치를 24시간 무인 처리.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-navy-900/80 border border-navy-700">
                  <div className="flex items-center space-x-2 text-purple-400 font-extrabold text-sm mb-1">
                    <span className="w-6 h-6 rounded bg-purple-500/20 flex items-center justify-center text-xs shrink-0">DATA</span>
                    <span className="break-keep">{isVi ? 'DATA - Phân tích Dữ liệu Bãi đỗ xe' : 'DATA - 주차 빅데이터 분석'}</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {isVi
                      ? 'Tự động tạo báo cáo xu hướng xe ra vào theo khung giờ, phân tích doanh thu theo ngày và quản lý xe vé tháng.'
                      : '시간대별 입출차 트렌드, 요일별 매출 분석, 정기권 관리 보고서를 자동 산출.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Hardware Equipment */}
        {activeTab === 'equipment' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                  HARDWARE EQUIPMENT
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white break-keep">
                  {isVi ? 'Dòng Thiết bị Giám sát Bãi đỗ xe Cốt lõi BEST Winner' : 'BEST Winner 주차 관제 핵심 라인업'}
                </h3>
              </div>
              <button
                onClick={() => openPdfAtPage(8)}
                className="mt-1 sm:mt-0 text-xs font-bold text-emeraldGreen-400 hover:text-emeraldGreen-300 flex items-center space-x-1 whitespace-nowrap"
              >
                <Eye className="w-4 h-4 shrink-0" />
                <span>{isVi ? 'Xem Thiết bị Thực tế Catalogue 8P' : '카탈로그 8P 실물 라인업 보기'}</span>
              </button>
            </div>

            {/* Hardware Page Visual Slide */}
            <div className="relative rounded-2xl overflow-hidden border border-navy-700 bg-navy-900">
              <img
                src="/images/parking/docu/page_8.png"
                alt="BEST Winner Parking Hardware Lineup"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* 4 Hardware Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Barrier Gate" className="object-cover h-full w-full object-left-top" />
                </div>
                <span className="text-[11px] font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 px-2 py-0.5 rounded whitespace-nowrap">01. SMART GATE</span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1 mb-2 break-keep">
                  {isVi ? 'Cổng Chắn Tự động Thông minh' : '스마트 무인 차단기'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed break-keep">
                  {isVi
                    ? 'Cổng chắn thanh Bar tốc độ cao hiển thị LED rõ nét, tích hợp cảm biến chống va chạm thân xe & động cơ inverter thế hệ mới.'
                    : 'LED 시기성이 뛰어난 고속 바(Bar) 차단기로 차체 충격 방지 센서 및 차세대 인버터 모터 내장.'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Integrated LPR" className="object-cover h-full w-full object-center" />
                </div>
                <span className="text-[11px] font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded whitespace-nowrap">02. INTEGRATED LPR</span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1 mb-2 break-keep">
                  {isVi ? 'Camera AI LPR Tích hợp' : '통합 AI LPR 카메라'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed break-keep">
                  {isVi
                    ? 'Tùy chọn camera kép trước/sau, đèn LED độ sáng cao & quay đêm hồng ngoại IR nhận diện 99.8% trong mọi điều kiện khắc nghiệt.'
                    : '전/후면 듀얼 카메라 옵션, 고휘도 LED 조명 및 IR 야간 촬영으로 극악의 조건에서도 99.8% 인식.'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Payment Terminal" className="object-cover h-full w-full object-right" />
                </div>
                <span className="text-[11px] font-bold text-gold-400 bg-gold-500/10 px-2 py-0.5 rounded whitespace-nowrap">03. PAYMENT KIOSK</span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1 mb-2 break-keep">
                  {isVi ? 'Máy Thanh toán Tự động (Kiosk)' : '무인 정산기 (Kiosk)'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed break-keep">
                  {isVi
                    ? 'Kiosk thanh toán tự động nguyên khối tích hợp màn hình cảm ứng 21.5 inch, thẻ tín dụng, ví điện tử & phiếu giảm giá QR.'
                    : '21.5인치 터치스크린, 신용카드, 모바일 페이, QR 할인권 일체형 무인 정산 키오스크.'}
                </p>
              </div>

              <div className="bg-navy-900/90 border border-navy-700 rounded-2xl p-4 sm:p-5 hover:border-emeraldGreen-500/40 transition-all">
                <div className="h-32 bg-navy-950 rounded-xl mb-4 overflow-hidden flex items-center justify-center border border-navy-800">
                  <img src="/images/parking/docu/page_8.png" alt="Intercom Display" className="object-cover h-full w-full object-right-bottom" />
                </div>
                <span className="text-[11px] font-bold text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded whitespace-nowrap">04. INTERCOM & LED</span>
                <h4 className="text-base sm:text-lg font-bold text-white mt-1 mb-2 break-keep">
                  {isVi ? 'Đàm thoại Nội bộ & Màn hình LED' : '통합 인터폰 & 디스플레이'}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed break-keep">
                  {isVi
                    ? 'Đàm thoại nội bộ khẩn cấp trực tiếp với trung tâm giám sát 24/7 & hiển thị trực quan hướng dẫn phí đỗ xe, ra vào.'
                    : '24시간 관제센터 직통 비상 인터폰 통화 및 요금, 입출차 안내 텍스트 가시화.'}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Backoffice & Control Center */}
        {activeTab === 'backoffice' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div>
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                ACRM BACKOFFICE & 24/7 CONTROL CENTER
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white break-keep">
                {isVi ? 'Bảng Điều khiển Giám sát BEST Winner ACRM & Trung tâm Giám sát Thực tế 24h' : 'BEST Winner ACRM 관제 대시보드 & 24시간 실물 관제센터'}
              </h3>
            </div>

            {/* Screenshots Grid from Catalog Pages 15, 16, 17, 19 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              
              <div className="bg-navy-900 rounded-2xl p-4 sm:p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 px-2.5 py-1 rounded whitespace-nowrap">
                    {isVi ? '[P.15] Bảng điều khiển ACRM Thời gian thực' : '[P.15] ACRM 실시간 현장 대시보드'}
                  </span>
                  <button onClick={() => openPdfAtPage(15)} className="text-xs text-slate-400 hover:text-emeraldGreen-400 flex items-center whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5 mr-1 shrink-0" /> {isVi ? 'Gốc 15P' : '15P 원본'}
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_15.png" alt="ACRM Dashboard" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300 break-keep">
                  {isVi
                    ? 'Giám sát video thời gian thực xe ra vào, điều khiển cổng chắn & nắm bắt trạng thái ô đỗ xe trống/đầy.'
                    : '입출차 차량 실시간 영상 모니터링, 차단기 제어, 만차/잔여 면수 점유 현황 한눈에 파악.'}
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-4 sm:p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-cyan-400 bg-cyan-500/10 px-2.5 py-1 rounded whitespace-nowrap">
                    {isVi ? '[P.16] Quản lý Sự cố & Backoffice Giám sát' : '[P.16] 장애 관리 & 관제 백오피스'}
                  </span>
                  <button onClick={() => openPdfAtPage(16)} className="text-xs text-slate-400 hover:text-cyan-400 flex items-center whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5 mr-1 shrink-0" /> {isVi ? 'Gốc 16P' : '16P 원본'}
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_16.png" alt="Control & Trouble Mgmt" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300 break-keep">
                  {isVi
                    ? 'Tự động thông báo lỗi thiết bị & sự cố kết nối, khởi động lại từ xa và liên kết ứng cứu tại chỗ khẩn cấp 24h.'
                    : '장비 오류 및 통신 장애 자동 알림, 원격 재부팅 및 24h 긴급 현장 출동 링크.'}
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-4 sm:p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-gold-400 bg-gold-500/10 px-2.5 py-1 rounded whitespace-nowrap">
                    {isVi ? '[P.17] Báo cáo Doanh thu & Lịch sử theo Kỳ' : '[P.17] 기간별 매출 & 이력 보고서'}
                  </span>
                  <button onClick={() => openPdfAtPage(17)} className="text-xs text-slate-400 hover:text-gold-400 flex items-center whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5 mr-1 shrink-0" /> {isVi ? 'Gốc 17P' : '17P 원본'}
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_17.png" alt="Operation Reports" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300 break-keep">
                  {isVi
                    ? 'Xuất tự động báo cáo doanh thu theo ngày/tháng, thống kê theo loại xe, sử dụng phiếu giảm giá ra Excel & PDF.'
                    : '일별/월별 매출 정산서, 차량 종류별 통계, 할인권 사용 실적 엑셀 및 PDF 자동 출력.'}
                </p>
              </div>

              <div className="bg-navy-900 rounded-2xl p-4 sm:p-5 border border-navy-700 space-y-3">
                <div className="flex justify-between items-center gap-2">
                  <span className="text-[11px] sm:text-xs font-bold text-purple-400 bg-purple-500/10 px-2.5 py-1 rounded whitespace-nowrap">
                    {isVi ? '[P.19] Trung tâm Giám sát Thực tế Vận hành 24/7' : '[P.19] 24시간 관제센터 실제 운영 현장'}
                  </span>
                  <button onClick={() => openPdfAtPage(19)} className="text-xs text-slate-400 hover:text-purple-400 flex items-center whitespace-nowrap">
                    <Eye className="w-3.5 h-3.5 mr-1 shrink-0" /> {isVi ? 'Gốc 19P' : '19P 원본'}
                  </button>
                </div>
                <div className="rounded-xl overflow-hidden border border-navy-800">
                  <img src="/images/parking/docu/page_19.png" alt="24/7 Operations Room" className="w-full h-auto object-cover" />
                </div>
                <p className="text-xs text-slate-300 break-keep">
                  {isVi
                    ? 'Phòng giám sát trụ sở chính nơi chuyên viên theo dõi hình ảnh camera thời gian thực 365 ngày 24/7.'
                    : 'BEST Winner 관제 전문 요원이 365일 24시간 실시간 카메라 화면을 모니터링하는 본사 관제실.'}
                </p>
              </div>

            </div>
          </div>
        )}

        {/* Tab 4: Mobile App & Service Flow */}
        {activeTab === 'mobile' && (
          <div className="space-y-8 bg-navy-950/60 p-6 sm:p-8 rounded-3xl border border-navy-800">
            <div>
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block mb-1">
                MOBILE & WEB SERVICE FLOW
              </span>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white break-keep">
                {isVi ? 'Dịch vụ Ứng dụng Di động cho Tài xế & Quản lý Bãi đỗ' : '운전자 & 주차장 관리자 모바일 앱 서비스'}
              </h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center font-bold text-sm shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white break-keep">
                      {isVi ? 'Tìm bãi đỗ & Kiểm tra giá theo thời gian thực' : '주차장 검색 & 실시간 요금 확인'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 break-keep">
                      {isVi
                        ? 'So sánh ngay số ô đỗ còn trống và thông tin phí theo giờ tại các bãi đỗ xe xung quanh vị trí hiện tại.'
                        : '현재 위치 주변 목적지 주차장의 잔여 주차면 수와 시간당 요금 정보를 앱에서 즉시 비교.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-sm shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white break-keep">
                      {isVi ? 'Thanh toán trước qua di động & Tự động xuất bãi' : '모바일 선결제 & 자동 출차'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 break-keep">
                      {isVi
                        ? 'Hoàn tất thanh toán trước trên di động trước khi xuất bãi, cổng chắn tự động nhận diện biển số đi qua không cần dừng.'
                        : '출차 전 모바일 결제로 사전정산 완료 시, 차단기가 번호판을 자동 인식하여 무정차 통과.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-gold-500/20 text-gold-400 flex items-center justify-center font-bold text-sm shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white break-keep">
                      {isVi ? 'Đăng ký vé tháng & Xử lý đỗ xe trái phép' : '정기권 신청 & 무단주차 단속'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 break-keep">
                      {isVi
                        ? 'Đăng ký đỗ xe vé tháng, gia hạn hợp đồng tự động, đăng ký ưu đãi cư dân & xử lý tự động xe đỗ trái phép chưa đăng ký.'
                        : '월정액 주차 신청, 자동 계약 갱신, 입주민 할인 등록 및 미등록 무단주차 자동 단속 처리.'}
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-navy-900 border border-navy-700 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white break-keep">
                      {isVi ? 'Phát hành Hóa đơn Thuế Điện tử Tự động' : '전자세금계산서 자동 발행'}
                    </h4>
                    <p className="text-xs text-slate-300 mt-1 break-keep">
                      {isVi
                        ? 'Tự động gửi email / kết nối cơ quan thuế hóa đơn điện tử chứng minh chi phí đỗ xe cho doanh nghiệp & cá nhân.'
                        : '법인 및 개인 사업자 주차 요금 증빙을 위한 전자세금계산서 자동 이메일/국세청 연동.'}
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden border border-navy-700 bg-navy-900">
                <img
                  src="/images/parking/docu/page_12.png"
                  alt="Mobile Service Flow"
                  className="w-full h-auto object-cover"
                />
                <button
                  onClick={() => openPdfAtPage(12)}
                  className="absolute bottom-4 right-4 bg-navy-950/90 text-emeraldGreen-400 border border-emeraldGreen-500/40 text-xs px-3 py-1.5 rounded-lg flex items-center font-bold whitespace-nowrap"
                >
                  <Eye className="w-3.5 h-3.5 mr-1 shrink-0" />
                  <span>{isVi ? 'Sơ đồ Quy trình App 12P' : '12P 모바일 흐름도 원본'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Interactive AI Gate & LPR Simulator */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Simulator Visual Box */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emeraldGreen-500/30 space-y-6 relative overflow-hidden">
              
              <div className="flex justify-between items-center pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emeraldGreen-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-200">AI LPR Camera & Smart Gate Simulator</span>
                </div>
                <span className="text-[10px] bg-navy-950 text-emeraldGreen-400 font-mono px-2.5 py-1 rounded border border-navy-700">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Simulated Barrier Gate Screen */}
              <div className="bg-navy-950 rounded-2xl p-6 border border-navy-800 flex flex-col items-center justify-center min-h-[230px] relative">
                
                {/* LPR Plate Display */}
                <div className="mb-4 text-center">
                  <span className="text-xs text-slate-400 block mb-1">
                    {isVi ? 'Biển số xe phát hiện (Camera AI LPR)' : '감지된 차량 번호판 (AI LPR Camera)'}
                  </span>
                  <div className="bg-white text-navy-950 px-6 py-2.5 rounded-xl border-2 border-slate-900 font-black text-2xl tracking-widest font-mono shadow-md inline-block">
                    {plateNumber}
                  </div>
                </div>

                {/* Barrier Gate Status Indicator */}
                <div className="space-y-1.5 text-center">
                  <span className="text-xs text-slate-400">{isVi ? 'Trạng thái Cổng Gate:' : '차단기 Gate 상태:'}</span>
                  <div className={`text-lg font-extrabold ${gateStatus.includes('OPEN') || gateStatus.includes('MỞ') ? 'text-emeraldGreen-400' : 'text-gold-400'}`}>
                    {gateStatus}
                  </div>
                  {(gateStatus.includes('OPEN') || gateStatus.includes('MỞ')) && (
                    <div className="text-xs text-slate-300 mt-2 bg-emeraldGreen-500/10 text-emeraldGreen-400 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                      {isVi ? 'Số ô đỗ chỉ dẫn: Spot' : '유도 주차 면수: Spot'} <span className="font-bold text-white">{assignedSpot}</span> {isVi ? '(Bật đèn LED xanh)' : '(LED 녹색 점등)'}
                    </div>
                  )}
                </div>

              </div>

              {/* Simulation Controls */}
              <div className="space-y-3">
                <span className="text-xs text-slate-400 font-medium block break-keep">
                  {isVi ? 'Mô phỏng quét biển số xe:' : '차량 번호판 스캔 시뮬레이션:'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {samplePlates.map((plate) => (
                    <button
                      key={plate}
                      onClick={() => { setPlateNumber(plate); simulateScan(); }}
                      className={`text-xs font-bold px-3 py-2 rounded-lg border transition-all whitespace-nowrap ${
                        plateNumber === plate
                          ? 'bg-emeraldGreen-500 text-navy-950 border-emeraldGreen-400'
                          : 'bg-navy-900 text-slate-300 border-navy-700 hover:border-emeraldGreen-500/40'
                      }`}
                    >
                      {plate}
                    </button>
                  ))}
                  <button
                    onClick={simulateScan}
                    className="bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 text-xs font-bold px-4 py-2 rounded-lg border border-emeraldGreen-500/30 flex items-center whitespace-nowrap shrink-0"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 mr-1 shrink-0 ${isScanning ? 'animate-spin' : ''}`} />
                    <span>{isVi ? 'Chạy quét AI' : 'AI 스캔 실행'}</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Consultation & Spec Callout */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-5 sm:p-6 rounded-2xl border border-navy-700 space-y-3">
              <span className="text-xs font-bold text-emeraldGreen-400 uppercase tracking-wider block">
                {isVi ? 'Báo giá Hệ thống Bãi đỗ xe' : '주차 시스템 구축 견적'}
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white break-keep">
                {isVi ? 'Thiết kế Tùy chỉnh theo Quy mô Mặt bằng & Tư vấn Miễn phí' : '현장 규모별 맞춤 설계 & 무료 맞춤 컨설팅'}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed break-keep">
                {isVi
                  ? 'Chúng tôi hướng dẫn cấu hình số lượng cổng chắn, máy thanh toán tự động và phần mềm giám sát tối ưu cho nhà phố, tòa nhà phức hợp, TTTM lớn, bệnh viện & tháp đỗ xe.'
                  : '타운하우스, 주상복합 빌딩, 대형 쇼핑몰, 병원 및 주차타워까지 최적의 차단기 수량과 무인정산기, 관제 소프트웨어 구성을 안내해 드립니다.'}
              </p>
            </div>

            <div className="space-y-2.5">
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200 break-keep">
                  {isVi ? 'Cam kết bảo hành chính thức hợp tác kỹ thuật AMANO Hàn Quốc & BEST Winner' : '한국 AMANO & BEST Winner 기술 제휴 공식 보증'}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200 break-keep">
                  {isVi ? 'Xây dựng mạng lưới giám sát & Bảo hành sửa chữa 24/7 tại chỗ ở Việt Nam' : '베트남 현지 24/7 출동 A/S 및 관제망 구축'}
                </span>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-xl bg-navy-900/60 border border-navy-800">
                <CheckCircle2 className="w-4 h-4 text-emeraldGreen-400 shrink-0" />
                <span className="text-xs text-slate-200 break-keep">
                  {isVi ? 'Có thể tương thích & thay thế cổng chắn/hệ thống bãi đỗ xe hiện có' : '기존 차단기/주차장 시스템 호환 및 교체 가능'}
                </span>
              </div>
            </div>

            <button
              onClick={() => onOpenConsult('parking')}
              className="w-full bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-extrabold text-xs sm:text-sm py-3.5 rounded-xl shadow-lg transition-all flex items-center justify-center space-x-2 whitespace-nowrap"
            >
              <Car className="w-4 h-4 shrink-0" />
              <span>{isVi ? 'Yêu cầu Báo giá Bãi đỗ xe Thông minh' : '스마트 주차 시스템 맞춤 견적 신청'}</span>
            </button>
          </div>

        </div>

      </div>

      {/* Full 43-Page Business Plan Viewer Modal */}
      {bizPlanModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto">
          {/* Modal Header */}
          <div className="w-full max-w-6xl flex items-center justify-between py-3 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <Briefcase className="w-5 h-5 text-gold-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {isVi ? 'Kế hoạch Đầu tư Bãi đỗ xe Việt Nam (BEST Winner Investment Plan)' : '베트남 주차장 투자 사업계획서 (BEST Winner Investment Plan)'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isVi ? 'Slide' : '슬라이드'} {bizPlanCurrentPage} / 43 — {bizPlanPages[bizPlanCurrentPage - 1]?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/docu/park/BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                download="BEST_Winner_Vietnam_Parking_Investment_Plan_2026.pdf"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-bold text-gold-950 bg-gold-500 px-3 py-1.5 rounded-lg hover:bg-gold-400 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isVi ? 'Tải PDF' : 'PDF 다운로드'}</span>
              </a>

              <button
                onClick={() => setBizPlanModalOpen(false)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Slide Image & Navigation */}
          <div className="w-full max-w-5xl my-4 relative flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={() => setBizPlanCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={bizPlanCurrentPage <= 1}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/70 hover:bg-gold-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Image */}
            <div className="max-h-[70vh] overflow-hidden rounded-xl border border-slate-800 shadow-2xl flex items-center justify-center bg-navy-950">
              <img
                src={bizPlanPages[bizPlanCurrentPage - 1]?.src}
                alt={`Business Plan Slide ${bizPlanCurrentPage}`}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setBizPlanCurrentPage((prev) => Math.min(43, prev + 1))}
              disabled={bizPlanCurrentPage >= 43}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/70 hover:bg-gold-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Page Info & Grid Thumbnail Selector */}
          <div className="w-full max-w-6xl space-y-3">
            <div className="text-center">
              <span className="text-xs font-mono text-gold-400 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
                SLIDE {bizPlanCurrentPage} of 43 — {bizPlanPages[bizPlanCurrentPage - 1]?.title}
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {bizPlanPages[bizPlanCurrentPage - 1]?.desc}
              </p>
            </div>

            {/* Thumbnail Grid Bar */}
            <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-gold-500 justify-start">
              {bizPlanPages.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setBizPlanCurrentPage(item.page)}
                  className={`flex-shrink-0 w-16 h-12 rounded border transition-all overflow-hidden relative ${
                    bizPlanCurrentPage === item.page
                      ? 'border-gold-400 ring-2 ring-gold-400 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt={`Page ${item.page}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-black/80 text-[9px] font-mono text-white px-1">
                    {item.page}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full 20-Page Interactive Catalog Viewer Modal */}
      {pdfViewerOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-between p-4 sm:p-6 overflow-y-auto">
          {/* Modal Header */}
          <div className="w-full max-w-6xl flex items-center justify-between py-3 border-b border-slate-800">
            <div className="flex items-center space-x-3">
              <FileText className="w-5 h-5 text-emeraldGreen-400" />
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">
                  {isVi ? 'Catalogue Chính thức Tích hợp Bãi đỗ xe Thông minh BEST Winner' : 'BEST Winner 스마트주차 통합 공식 카탈로그'}
                </h3>
                <p className="text-xs text-slate-400">
                  {isVi ? 'Trang' : '페이지'} {pdfCurrentPage} / 20 — {catalogPages[pdfCurrentPage - 1]?.title}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="/docu/park/SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                download="SHEYONE_AMANO_Smart_Parking_Catalog_2026.pdf"
                className="hidden sm:flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-400 bg-emeraldGreen-500/10 border border-emeraldGreen-500/30 px-3 py-1.5 rounded-lg hover:bg-emeraldGreen-500 hover:text-navy-950 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isVi ? 'Tải PDF' : 'PDF 받기'}</span>
              </a>

              <button
                onClick={() => setPdfViewerOpen(false)}
                className="text-slate-400 hover:text-white p-2 rounded-lg bg-slate-900 border border-slate-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Modal Main Slide Image & Navigation */}
          <div className="w-full max-w-5xl my-4 relative flex items-center justify-center">
            {/* Prev Button */}
            <button
              onClick={() => setPdfCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={pdfCurrentPage <= 1}
              className="absolute left-2 sm:left-4 z-10 p-3 rounded-full bg-black/70 hover:bg-emeraldGreen-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Image */}
            <div className="max-h-[70vh] overflow-hidden rounded-xl border border-slate-800 shadow-2xl flex items-center justify-center bg-navy-950">
              <img
                src={catalogPages[pdfCurrentPage - 1]?.src}
                alt={`Catalog Page ${pdfCurrentPage}`}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            {/* Next Button */}
            <button
              onClick={() => setPdfCurrentPage((prev) => Math.min(20, prev + 1))}
              disabled={pdfCurrentPage >= 20}
              className="absolute right-2 sm:right-4 z-10 p-3 rounded-full bg-black/70 hover:bg-emeraldGreen-500 hover:text-navy-950 text-white disabled:opacity-30 disabled:hover:bg-black/70 disabled:hover:text-white transition-all border border-slate-700"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Page Info & Grid Thumbnail Selector */}
          <div className="w-full max-w-6xl space-y-3">
            <div className="text-center">
              <span className="text-xs font-mono text-emeraldGreen-400 bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                PAGE {pdfCurrentPage} of 20 — {catalogPages[pdfCurrentPage - 1]?.title}
              </span>
              <p className="text-xs text-slate-300 mt-1">
                {catalogPages[pdfCurrentPage - 1]?.desc}
              </p>
            </div>

            {/* Thumbnail Grid Bar */}
            <div className="flex gap-2 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-emeraldGreen-500 justify-start sm:justify-center">
              {catalogPages.map((item) => (
                <button
                  key={item.page}
                  onClick={() => setPdfCurrentPage(item.page)}
                  className={`flex-shrink-0 w-16 h-12 rounded border transition-all overflow-hidden relative ${
                    pdfCurrentPage === item.page
                      ? 'border-emeraldGreen-400 ring-2 ring-emeraldGreen-400 scale-105'
                      : 'border-slate-800 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={item.src} alt={`Page ${item.page}`} className="w-full h-full object-cover" />
                  <span className="absolute bottom-0 right-0 bg-black/80 text-[9px] font-mono text-white px-1">
                    {item.page}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

