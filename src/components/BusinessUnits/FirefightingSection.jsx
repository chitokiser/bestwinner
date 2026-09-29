import React, { useState } from 'react';
import { 
  Flame, 
  ShieldCheck, 
  FileCheck, 
  AlertTriangle, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Lightbulb, 
  Sparkles, 
  Tv, 
  Globe, 
  Award, 
  FileText, 
  Download, 
  Check, 
  Zap, 
  Cpu, 
  ShieldAlert, 
  Maximize2,
  X
} from 'lucide-react';

export default function FirefightingSection({ t, onOpenConsult }) {
  const [activeTab, setActiveTab] = useState('lighting');
  const [isDocModalOpen, setIsDocModalOpen] = useState(false);

  const isVi = t?.lang === 'vi' || !t?.lang;

  // 6 Enhanced Product & Tech Categories inspired by SY-21 (신영소방) & Sobang24
  const categoriesData = [
    {
      id: 'lighting',
      badge: isVi ? 'Chứng nhận Q-Mark Chiếu sáng 24h' : '국내 최장 24시간 점등 Q-Mark',
      name: isVi ? 'Đèn chiếu sáng khẩn cấp & Thiết bị thoát hiểm (Emergency Lighting)' : '비상조명등 & 피난 설비 (Emergency Lighting)',
      desc: isVi ? 'Dòng sản phẩm đèn chiếu sáng khẩn cấp LED và đèn chiếu sáng di động đạt chứng nhận Q-Mark & KFI thời gian chiếu sáng liên tục 24h / 60 phút.' : 'KFI 형식승인 및 Q-Mark 품질 인증을 취득한 LED 비상조명등 및 최장 24시간/60분 연속 점등 휴대용 비상조명등 라인업.',
      highlight: isVi ? 'Đèn khẩn cấp di động SY-M119-FI (Chiếu sáng liên tục 24h) & Đèn âm trần SY-5009C/R 3W~15W' : 'SY-M119-FI 휴대용 비상조명등 (국내 최장 24시간/60분 인증) & SY-5009C/R 다운라이트 3W~15W 비상등',
      items: [
        { name: isVi ? 'Đèn chiếu sáng khẩn cấp di động SY-M119-FI' : 'SY-M119-FI 휴대용 비상조명등', detail: isVi ? 'Đạt chứng nhận Q-Mark chiếu sáng liên tục 24h, LED độ sáng cao & Pin Lithium sạc điện' : '24시간 연속 점등 Q-Mark 지정서 획득, 고휘도 LED & 충전식 리튬 배터리' },
        { name: isVi ? 'Đèn âm trần khẩn cấp SY-5009C/R (3W~15W)' : 'SY-5009C/R 매립형·다운라이트 비상등 (3W~15W)', detail: isVi ? 'Chứng nhận KFI, thiết kế mỏng âm trần thẩm mỹ' : 'KFI 형식승인 (비26-12/비26-21), 천장 매립형 슬림 디자인' },
        { name: isVi ? 'Hệ thống đèn khẩn cấp điều khiển điều khiển từ xa RF' : 'RF 리모컨 제어 비상조명 시스템', detail: isVi ? 'Kiểm tra thủ công từ xa, tiết kiệm 90% thời gian kiểm tra định kỳ' : '원격 수동 점검 가능, 공동주택 & 상가 정기 점검 시간 90% 절감' },
        { name: isVi ? 'Đèn khẩn cấp LED 2-in-1 kết hợp' : '상시 겸용 LED 비상조명등', detail: isVi ? 'Chiếu sáng thường nhật + Tự động bật đèn khẩn cấp khi mất điện do hỏa hoạn' : '평시 일반 조명 + 화재 정전 시 자동 비상등 전환 2-in-1 모듈' }
      ]
    },
    {
      id: 'cabinets',
      badge: isVi ? 'Chống nước đặc biệt & Năng lượng mặt trời' : '태양광 & 특수 방수 거치대',
      name: isVi ? 'Bình chữa cháy & Tủ bảo vệ chuyên dụng (Extinguisher & Cabinets)' : '소화기 용품 & 전문 보관함 (Extinguisher & Cabinets)',
      desc: isVi ? 'Tủ đựng bình chữa cháy LED tự sạc năng lượng mặt trời, tủ chống nước ngoài trời SY-7010A/B và dòng bình chữa cháy thiết kế Boutique cao cấp.' : '태양광 자가발전 LED 소화기 보관함부터 야외 방수형, 거치대 통합형 SY-7010A/B 및 고급 인테리어 부띠크 소화기.',
      highlight: isVi ? 'Tủ chữa cháy chống nước SY-7010A/B tích hợp giá đỡ & Tủ bảo vệ ngoài đường nổi bật' : '특수 방수형 소화기함 SY-7010A/B 거치대 통합 공법 & 도로/건물 시시각각 눈에 띄는 거리형 보관함',
      items: [
        { name: isVi ? 'Tủ đựng bình chữa cháy LED năng lượng mặt trời' : '태양광 자가발전 LED 소화기 보관함', detail: isVi ? 'Ban ngày sạc năng lượng mặt trời, ban đêm tự phát sáng LED nổi bật' : '주간 태양광 충전, 야간 자동 LED 자가 발광으로 시인성 극대화' },
        { name: isVi ? 'Tủ chữa cháy chống nước (Set chân đế SY-7010A/B)' : '방수형 소화기함 (SY-7010A/B 거치대 세트)', detail: isVi ? 'Gioăng chống nước ngoài trời chuyên dụng, khung thép đúc nguyên khối' : '야외 비바람 차단 특수 방수 패킹, 일체형 강철 거치 구조' },
        { name: isVi ? 'Tủ đựng bình chữa cháy cỡ lớn ngoài trời / ven đường' : '거리형 / 옥외 대형 소화기 보관함', detail: isVi ? 'Hộp bảo vệ độ bền cao chuyên dụng cho nơi công cộng, ven đường, công trường' : '공공장소, 도로변, 건설 현장 전용 고강도 내후성 케이스' },
        { name: isVi ? 'Bình chữa cháy Boutique & Kim loại Metro' : '부띠크 디자인 소화기 & 메트로 금속 소화기', detail: isVi ? 'Thiết bị chữa cháy thiết kế sang trọng hài hòa với nội thất cao cấp' : '럭셔리 인테리어에 어우러지는 고품격 디자인 소화용품' }
      ]
    },
    {
      id: 'detection',
      badge: isVi ? 'Bằng sáng chế IoT loại bỏ báo cháy giả' : 'IoT 특허 오작동 해소',
      name: isVi ? 'Báo cháy tự động & IoT thông minh (Fire Detection & IoT)' : '자동화재탐지 & 스마트 IoT (Fire Detection & IoT)',
      desc: isVi ? 'Bộ tủ PBL chữa cháy đạt chuẩn KFI, đầu báo khói độc lập và đầu báo thông minh IoT triệt tiêu báo động giả.' : 'KFI 형식승인 소화전/속보 PBL 세트, 단독경보형 연기감지기, 그리고 비화재보 오작동을 차단하는 스마트 IoT 무선 감지기.',
      highlight: isVi ? 'Công nghệ bằng sáng chế IoT loại bỏ báo cháy giả (Số 10-2357956) & Giải pháp đồng bộ tủ trung tâm' : 'IoT 기반 비화재보 오작동 해소 특허 기술 (제10-2357956호) & 수신기/전원반 통합 솔루션',
      items: [
        { name: isVi ? 'Đầu báo khói / nhiệt cục bộ độc lập' : '단독경보형 연기/열 감지기', detail: isVi ? 'Pin 10 năm, cảm biến khói quang học giảm thiểu báo động giả' : '배터리 10년 수명, 광학식 연기 센서 적용으로 오작동 최소화' },
        { name: isVi ? 'Bộ tủ PBL chữa cháy & Hộp nút bấm khẩn cấp' : '소화전 PBL 세트 & 속보 PBL 세트', detail: isVi ? 'Đạt chứng nhận KFI, tích hợp nút bấm báo cháy khẩn cấp' : 'KFI 형식승인 완료 (형식승인서 보유), 비상경보 발신기 통합' },
        { name: isVi ? 'Tủ trung tâm & Nền tảng báo cháy không dây IoT' : 'IoT 무선 화재 감지 수신기 & 플랫폼', detail: isVi ? 'Kết nối App giám sát thời gian thực, thuật toán lọc bụi mịn / độ ẩm' : '실시간 관제 어플 연동, 미세 먼지/습기 오작동 필터링 알고리즘' },
        { name: isVi ? 'Tủ nguồn trung tâm & Thiết bị ổ cắm khẩn cấp' : '중앙 관제 전원반 & 비상 콘센트 설비', detail: isVi ? 'Đạt tiêu chuẩn luật PCCC, bảo vệ quá dòng & Lưu trữ nguồn dự phòng 24h' : '소방법규 표준 부합, 과전류 보호 및 24시간 비상 전원 비축' }
      ]
    },
    {
      id: 'ev_safety',
      badge: isVi ? 'An toàn PCCC Xe điện bãi xe ngầm' : '전기차 지하주차장 방재',
      name: isVi ? 'PCCC Xe điện (EV) & Thiết bị dập lửa đặc biệt (EV Safety)' : '전기차(EV) & 특수 소화 장치 (EV Safety & Special Extinction)',
      desc: isVi ? 'Chăn dập lửa chữa cháy xe điện khẩn cấp, bình chữa cháy tự động Nano Capsule cho tủ điện và hệ thống dập lửa Drone.' : '지하 주차장 EV 열폭주 대비 전기차 전용 자동 질식 소화포 Set, 배선반 나노캡슐 자동 소화기 및 드론 소화 시스템.',
      highlight: isVi ? 'Chăn dập lửa chuyên dụng chống bùng nổ nhiệt Pin EV & Miếng dán chữa cháy tự động Nano' : '전기차 배터리 열폭주 차단 전용 소화 질식포 & 수조 차단 펜스 및 나노캡슐 자동 소화패치',
      items: [
        { name: isVi ? 'Chăn dập lửa chuyên dụng xe điện EV (Fire Blanket)' : 'EV 전기차 전용 질식 소화포 (Fire Blanket)', detail: isVi ? 'Vải chịu nhiệt 1.400℃, thiết kế 2 người trùm phủ dập lửa tức thì' : '1,400℃ 고온 견디는 특수 초극세사 방화 천, 2인 즉시 투척 구조' },
        { name: isVi ? 'Bình dập lửa Nano Capsule tủ điện / bảng phân phối' : '전기 분전반/배선반 전용 나노캡슐 소화기', detail: isVi ? 'Tự động kích hoạt dập lửa khi nhiệt độ vượt 120℃' : '특수 소화 약제 캡슐이 120℃ 화재 감지 시 자동 터짐 진화' },
        { name: isVi ? 'Hệ thống phun nước tự động gầm xe điện bãi ngầm' : 'EV 지하주차장 자동 주수 하부 소화장치', detail: isVi ? 'Phun nước áp lực cao tự động định hướng vào gói Pin dưới gầm xe' : '차량 하부 배터리팩 향해 고압 소수 노즐 자동 조준 분사' },
        { name: isVi ? 'Drone chữa cháy & Hệ thống dập lửa bằng khí tự động' : '소화 드론 & 자동 가스 소화 시스템', detail: isVi ? 'Hệ thống xả khí tự động cho nhà cao tầng và kho hàng nguy hiểm' : '초고층 및 위험물 저장소용 특수 가스 자동 방출 시스템' }
      ]
    },
    {
      id: 'signs',
      badge: isVi ? 'Dạ quang phản quang ban đêm' : '고휘도 축광 야간 유도',
      name: isVi ? 'Biển chỉ dẫn thoát hiểm Dạ quang (Photoluminescent Signs)' : '축광 피난 유도 & 안전 표지 (Photoluminescent Signs)',
      desc: isVi ? 'Biển thoát hiểm dạ quang đảm bảo tầm nhìn ban đêm khi mất điện, nẹp cầu thang dạ quang, nắp trụ chữa cháy và sàn kho lạnh.' : '정전 시 완벽한 야간 시야를 확보하는 축광 피난구 표지, 고휘도 축광 계단 논슬립 패드, 소화전 캡 및 냉동창고 바닥깔판.',
      highlight: isVi ? 'Vật liệu tự phát sáng dạ quang vượt tiêu chuẩn PCCC & Sàn cách nhiệt chuyên dụng kho lạnh' : '소방청 고시 축광 성능 기준을 상회하는 고휘도 자가 발광 소재 & 냉동창고 전용 방한 바닥재',
      items: [
        { name: isVi ? 'Biển chỉ dẫn lối thoát hiểm dạ quang' : '축광 피난구 유도표지 & 통로 표지', detail: isVi ? 'Phát sáng kéo dài tới 8 giờ sau khi tích tụ ánh sáng, đạt chứng nhận KFI' : '빛 축적 후 최대 8시간 지속 발광, KFI 축광 유도표지 인증' },
        { name: isVi ? 'Nẹp cầu thang dạ quang chống trượt' : '고휘도 축광 계단 논슬립 패드', detail: isVi ? 'Chống trượt cầu thang khẩn cấp + Chỉ dẫn lối đi rõ ràng ban đêm' : '비상 계단 미끄럼 방지 + 야간 이동 경로 선명한 표시' },
        { name: isVi ? 'Nắp van chữa cháy & Khung bảo vệ nắp ổ cắm khẩn cấp' : '소화전 캡 & 비상 콘센트 안전 커버', detail: isVi ? 'Chất liệu đồng/inox chống ăn mòn, tháo lắp nhanh khi hỏa hoạn' : '부식 방지 황동/스테인리스 스틸 소재, 화재 시 신속 분리' },
        { name: isVi ? 'Tấm lót sàn kho lạnh (Kích thước 500x500mm)' : '냉동창고 바닥깔판 (500x500mm 규격)', detail: isVi ? 'Chống nứt gãy môi trường âm 40℃, ngăn ẩm & bảo vệ an toàn kho lạnh' : '-40℃ 영하 환경 파손 방지, 습기 차단 및 냉동고 안전 바닥재' }
      ]
    },
    {
      id: 'consulting',
      badge: 'QCVN / TCVN Chuẩn mực',
      name: isVi ? 'Tư vấn Thẩm duyệt & Nghiệm thu PCCC Việt Nam (QCVN/TCVN)' : '베트남 소방 인허가 & 서류 솔루션 (Vietnam Permit & CAD/BIM)',
      desc: isVi ? 'Tư vấn thẩm duyệt bản vẽ PCCC (Thẩm duyệt PCCC), nghiệm thu công trình (Nghiệm thu PCCC), bản vẽ CAD/BIM và hồ sơ chứng nhận KFI.' : '소방 설계 도면 승인(Thẩm duyệt PCCC)부터 현장 완공 검사(Nghiệm thu PCCC), CAD/DWG/BIM 도면 및 KFI 성적서 패키지 제공.',
      highlight: isVi ? 'Kỹ sư chuyên trách PCCC hỗ trợ 1:1 đáp ứng quy chuẩn mới nhất QCVN 06:2022' : '베트남 소방당국 최신 규정(QCVN 06:2022) 대응 전문 소방 엔지니어 1:1 서류 대행',
      items: [
        { name: 'Thẩm duyệt PCCC (Bản vẽ PCCC)', detail: isVi ? 'Tư vấn & Thẩm duyệt bản vẽ kiến trúc / điện / PCCC theo tiêu chuẩn Cục PCCC' : '건축/전기/소방 도면 베트남 소방청 기준에 맞춘 사전 승인 대행' },
        { name: 'Nghiệm thu PCCC (Hoàn công)', detail: isVi ? 'Giám sát thực địa, thử nghiệm vận hành & Hoàn thiện thủ tục lấy giấy chứng nhận PCCC' : '현장 감리, 작동 시험, 소방 필증 수령까지 완벽 책임 서류화' },
        { name: 'Bộ hồ sơ chứng nhận KFI & Bản vẽ CAD/BIM', detail: isVi ? 'Cung cấp bản vẽ CAD và bản dịch chứng nhận KFI trình Chủ đầu tư & Giám sát' : '발주처 및 감리단 제출용 CAD 도면, KFI 형식승인서 번역본' },
        { name: 'Tư vấn quản lý an toàn & Bảo trì PCCC định kỳ', detail: isVi ? 'Bảo trì hệ thống PCCC hàng năm & Kỹ sư ứng cứu sự cố 24/7' : '연간 소방 시설 유지 보수 및 직영 기술진 24/7 긴급 대응' }
      ]
    }
  ];

  const currentCat = categoriesData.find(c => c.id === activeTab);

  return (
    <section id="firefighting" className="py-16 bg-navy-950 text-slate-100 relative overflow-hidden">
      {/* Background Decorative Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative z-10">

        {/* 1. Alliance Header Banner */}
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 border border-red-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center space-x-1.5 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full border border-red-500/40">
                  <Flame className="w-3.5 h-3.5 text-red-400" />
                  <span>BEST WINNER FIREFIGHTING VN</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-amber-500/20 text-amber-400 text-xs font-bold px-3 py-1 rounded-full border border-amber-500/40">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Hợp tác Kỹ thuật Shinyoung (SY-21) & Aneun Sobang' : '(주)신영 (SY-21) & 아는소방 기술 제휴'}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 bg-cyan-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full border border-cyan-500/40">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Đạt chuẩn QCVN 06:2022 / TCVN & KFI Hàn Quốc' : 'QCVN 06:2022 / TCVN & KFI 형식승인'}</span>
                </span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight break-keep">
                {isVi ? 'Vật tư PCCC BEST Winner' : 'BEST Winner 소방자재'} <br />
                <span className="bg-gradient-to-r from-red-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                  {isVi ? 'Chứng nhận KFI Hàn Quốc & Đáp ứng hoàn hảo QCVN' : '대한민국 KFI 검정 필증 & QCVN 완벽 대응'}
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed break-keep">
                {isVi
                  ? 'Thông qua hợp tác kỹ thuật với doanh nghiệp chuyên về thiết bị PCCC hàng đầu Hàn Quốc Shinyoung (SY-21) và Aneun Sobang, chúng tôi cung cấp giải pháp One-Stop từ đèn chiếu sáng khẩn cấp Q-Mark chiếu sáng 24h, tủ đựng bình chữa cháy chống nước, đầu báo cháy IoT lọc báo giả, giải pháp PCCC xe điện EV đến thủ tục thẩm duyệt & nghiệm thu PCCC tại Việt Nam (Thẩm duyệt / Nghiệm thu PCCC).'
                  : '대한민국 소방용품 전문기업 (주)신영 (SY-21) 및 (주)아는소방과의 기술 제휴를 통해 24시간 연속 점등 Q-Mark 비상조명등, 특수 방수 소화기함, IoT 화재 오작동 해소 감지기, EV 전기차 방재 솔루션부터 베트남 소방 인허가(Thẩm duyệt / Nghiệm thu PCCC) 승인까지 One-Stop으로 제공합니다.'}
              </p>
            </div>

            {/* Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto flex-shrink-0">
              <button
                onClick={() => setIsDocModalOpen(true)}
                className="w-full sm:w-auto bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 text-white font-extrabold px-6 py-3.5 rounded-xl shadow-lg flex items-center justify-center space-x-2 text-xs transition-all border border-red-400/40 min-h-[48px]"
              >
                <FileText className="w-4 h-4" />
                <span>{isVi ? 'Tải Catalogue & Chứng nhận KFI' : '카탈로그 & KFI 형식승인서 다운로드'}</span>
              </button>

              <button
                onClick={() => {
                  if (onOpenConsult) onOpenConsult('firefighting');
                  else {
                    const el = document.getElementById('contact');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-slate-200 hover:text-red-400 font-bold px-6 py-3.5 rounded-xl border border-red-500/30 flex items-center justify-center space-x-2 text-xs transition-all min-h-[48px]"
              >
                <ShieldCheck className="w-4 h-4 text-red-400" />
                <span>{isVi ? 'Tư vấn 1:1 Hồ sơ PCCC Việt Nam' : '베트남 소방 인허가 서류 1:1 문의'}</span>
              </button>
            </div>
          </div>
        </div>

        {/* 2. Key Technology Strengths (4 KPI Banner) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="glass-card rounded-2xl p-6 border border-red-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-extrabold text-white">
              {isVi ? 'Chứng nhận Q-Mark Chiếu sáng 24h' : '24시간 연속 점등 Q-Mark'}
            </h4>
            <p className="text-xs text-slate-300">
              {isVi
                ? 'Đèn chiếu sáng khẩn cấp di động đạt chứng nhận Q-Mark thời gian dài nhất Hàn Quốc (SY-M119-FI)'
                : '국내 최장시간 Q-Mark 지정서 획득 휴대용 비상조명등 (SY-M119-FI)'}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-amber-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-extrabold text-white">
              {isVi ? 'Bằng sáng chế Khắc phục Báo giả IoT' : 'IoT 오작동 차단 특허'}
            </h4>
            <p className="text-xs text-slate-300">
              {isVi
                ? 'Hệ thống báo cháy không dây dựa trên bằng sáng chế khắc phục báo giả số 10-2357956'
                : '비화재보 오작동 해소 특허 제10-2357956호 기반 무선 화재 감지 시스템'}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-cyan-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-extrabold text-white">
              {isVi ? 'Chăn dập lửa Chuyên dụng Xe điện EV' : 'EV 전기차 전용 소화포'}
            </h4>
            <p className="text-xs text-slate-300">
              {isVi
                ? 'Chăn dập lửa dập tắt bùng nổ nhiệt Pin xe điện bãi xe ngầm chịu nhiệt 1.400℃'
                : '1,400℃ 초고온 견디는 전기차 지하주차장 배터리 열폭주 질식 소화포'}
            </p>
          </div>

          <div className="glass-card rounded-2xl p-6 border border-purple-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <FileCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-extrabold text-white">
              {isVi ? 'Đáp ứng 100% QCVN / TCVN' : 'QCVN / TCVN 100% 부합'}
            </h4>
            <p className="text-xs text-slate-300">
              {isVi
                ? 'Cung cấp hồ sơ Thẩm duyệt thiết kế & Nghiệm thu hoàn công PCCC'
                : '소방 설계 도면 승인(Thẩm duyệt) & 완공 검사(Nghiệm thu) 서류 제공'}
            </p>
          </div>
        </div>

        {/* 3. 6 Core Product & Tech Categories (Interactive Tabs & Cards) */}
        <div className="space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3.5 py-1.5 rounded-full border border-red-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>PRODUCT & TECHNOLOGY LINEUP</span>
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white break-keep">
              {isVi ? '6 Dòng Sản phẩm & Công nghệ PCCC Shinyoung & Aneun Sobang' : '(주)신영 & 아는소방 6대 소방 제품 라인업'}
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm break-keep">
              {isVi
                ? 'Chọn từng thẻ để xem chi tiết sản phẩm, chứng nhận KFI và độ tương thích với quy chuẩn PCCC Việt Nam.'
                : '탭을 선택하시면 제품별 상세 설명, KFI 형식승인 및 베트남 소방 규격 부합 내역을 확인하실 수 있습니다.'}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Category Nav List (Left Column) */}
            <div className="lg:col-span-4 space-y-3">
              {categoriesData.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${
                    activeTab === cat.id
                      ? 'bg-gradient-to-r from-red-950 to-navy-900 border-red-500 shadow-lg text-white font-bold'
                      : 'bg-navy-900/80 text-slate-300 border-navy-800 hover:border-red-500/40'
                  }`}
                >
                  <div className="space-y-1">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border block w-max ${
                      activeTab === cat.id ? 'bg-red-500 text-white border-red-400' : 'bg-navy-950 text-slate-400 border-navy-800'
                    }`}>
                      {cat.badge}
                    </span>
                    <span className="text-xs sm:text-sm block">{cat.name}</span>
                  </div>
                  <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${
                    activeTab === cat.id ? 'text-red-400' : 'text-slate-500'
                  }`} />
                </button>
              ))}
            </div>

            {/* Active Category Display (Right Column) */}
            <div className="lg:col-span-8 glass-card p-6 sm:p-8 rounded-3xl border border-red-500/30 flex flex-col justify-between space-y-6 bg-navy-900">
              <div className="space-y-6">
                
                {/* Category Header */}
                <div className="space-y-2 border-b border-navy-800 pb-4">
                  <span className="text-xs font-bold text-red-400 bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
                    {currentCat.badge}
                  </span>
                  <h4 className="text-xl sm:text-2xl font-black text-white pt-1">
                    {currentCat.name}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentCat.desc}
                  </p>
                  <div className="p-3 rounded-xl bg-navy-950 border border-red-500/20 text-xs text-amber-300 font-semibold italic">
                    💡 {isVi ? 'Điểm mạnh cốt lõi: ' : '핵심 강점: '}{currentCat.highlight}
                  </div>
                </div>

                {/* 4 Lineup Item Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {currentCat.items.map((item, idx) => (
                    <div key={idx} className="bg-navy-950 p-4 rounded-xl border border-navy-800 space-y-1.5 hover:border-red-500/30 transition-colors">
                      <div className="flex items-center space-x-2 text-xs font-bold text-white">
                        <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                        <span>{item.name}</span>
                      </div>
                      <p className="text-[11px] text-slate-400 pl-6 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>
                  ))}
                </div>

              </div>

              {/* Bottom CTA */}
              <div className="pt-4 border-t border-navy-800 flex flex-col sm:flex-row justify-between items-center gap-4">
                <span className="text-xs text-slate-400">
                  {isVi
                    ? 'Có thể tra cứu trước Báo cáo thử nghiệm QCVN và Chứng nhận KFI.'
                    : 'QCVN 시험성적서 및 KFI 형식승인서 사전 조회가 가능합니다.'}
                </span>
                <button
                  onClick={() => setIsDocModalOpen(true)}
                  className="bg-red-600 hover:bg-red-500 text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow-md transition-all whitespace-nowrap"
                >
                  {isVi ? 'Xem Hồ sơ Chứng nhận →' : '관련 승인서류 확인하기 →'}
                </button>
              </div>

            </div>

          </div>
        </div>

        {/* 4. Broadcast Sponsorship & Exhibition Record */}
        <div className="bg-navy-900 border border-navy-800 rounded-3xl p-8 sm:p-12 space-y-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-navy-800 pb-6">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-1">BROADCAST & GLOBAL EXHIBITION</span>
              <h3 className="text-2xl font-extrabold text-white flex items-center space-x-2">
                <Tv className="w-6 h-6 text-red-400" />
                <span>{isVi ? 'Tài trợ Truyền hình & Thành tích Hội chợ Quốc tế' : '방송 협찬 & 글로벌 박람회 참가 실적'}</span>
              </h3>
            </div>
            <span className="text-xs bg-red-500/20 text-red-400 px-3.5 py-1.5 rounded-full border border-red-500/30">
              {isVi ? 'Tài trợ Đài truyền hình Hàn Quốc & Tham gia Hội chợ PCCC Toàn cầu' : '한국 대표 방송사 협찬 & 글로벌 소방 박람회 참전'}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Left: TV Drama Sponsorship */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white flex items-center space-x-2">
                <Tv className="w-4 h-4 text-amber-400" />
                <span>{isVi ? 'Tài trợ Phim Truyền hình (TV Drama Sponsorship)' : '주요 방송 협찬 (TV Drama Sponsorship)'}</span>
              </h4>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                  <span className="font-bold text-amber-400 block">KBS2 Drama</span>
                  <span className="text-white">"If You Wish Upon Me"</span>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isVi ? 'Tài trợ bình chữa cháy & đèn khẩn cấp' : '소화기 및 비상조명 제품 협찬'}
                  </p>
                </div>
                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                  <span className="font-bold text-amber-400 block">JTBC Drama</span>
                  <span className="text-white">"Law School"</span>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isVi ? 'Tài trợ vật tư an toàn PCCC' : '소방 안전 자재 제품 협찬'}
                  </p>
                </div>
                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                  <span className="font-bold text-amber-400 block">SBS Drama</span>
                  <span className="text-white">"The King: Eternal Monarch"</span>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isVi ? 'Tài trợ thiết bị chữa cháy đặc biệt' : '특수 소화 용품 협찬'}
                  </p>
                </div>
                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800">
                  <span className="font-bold text-amber-400 block">tvN Drama</span>
                  <span className="text-white">"Money Game"</span>
                  <p className="text-[10px] text-slate-400 mt-1">
                    {isVi ? 'Tài trợ thiết bị báo động khẩn cấp' : '비상경보장치 협찬'}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Global Exhibitions */}
            <div className="space-y-4">
              <h4 className="text-sm font-extrabold text-white flex items-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{isVi ? 'Hội chợ Quốc tế (Secutech & Intersec)' : '글로벌 박람회 (Secutech & Intersec)'}</span>
              </h4>
              <div className="space-y-3 text-xs">
                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 text-red-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    VN
                  </div>
                  <div>
                    <span className="font-bold text-white block">2026 Secutech Việt Nam</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {isVi
                        ? 'Tham gia triển lãm PCCC & An ninh Hà Nội/TP.HCM, hoàn thành gian hàng đèn khẩn cấp & tủ chữa cháy chuẩn QCVN'
                        : '하노이/호치민 소방 시큐리티 박람회 참가, QCVN 규격 비상조명등 및 소화기함 부스 성료'}
                    </p>
                  </div>
                </div>

                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    UAE
                  </div>
                  <div>
                    <span className="font-bold text-white block">2026 Dubai Intersec</span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {isVi
                        ? 'Tham gia triển lãm PCCC lớn nhất Trung Đông, ra mắt đèn khẩn cấp 24h & đầu báo IoT thông minh'
                        : '중동 최대 소방 박람회 참가, 24시간 휴대용 비상조명등 및 스마트 IoT 감지기 현지 반응'}
                    </p>
                  </div>
                </div>

                <div className="bg-navy-950 p-3.5 rounded-xl border border-navy-800 flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    KFI
                  </div>
                  <div>
                    <span className="font-bold text-white block">
                      {isVi ? 'Hội chợ An toàn PCCC Quốc tế (FIRE TECH)' : '국제소방안전박람회 (FIRE TECH)'}
                    </span>
                    <p className="text-slate-400 text-[11px] mt-0.5">
                      {isVi
                        ? 'Trưng bày hàng năm tại triển lãm do Cục PCCC & Viện KFI chủ trì, nhận bằng khen chất lượng xuất sắc'
                        : '소방청 및 한국소방산업기술원 주관 박람회 연례 출품 및 우수 품질 표창'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 5. Bottom Consultation CTA */}
        <div className="bg-gradient-to-r from-red-600 via-rose-600 to-red-700 rounded-3xl p-8 sm:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div className="space-y-3 text-center md:text-left">
              <span className="bg-navy-950 text-red-400 text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                QCVN / TCVN OFFICIAL CONSULTING
              </span>
              <h3 className="text-2xl sm:text-4xl font-black text-white break-keep">
                {isVi ? 'Tư vấn Báo giá Cung cấp Vật tư & Cấp phép PCCC Việt Nam' : '베트남 소방 자재 공급 & 인허가 견적 문의'}
              </h3>
              <p className="text-red-100 text-sm font-semibold max-w-2xl break-keep">
                {isVi
                  ? 'Chuyên viên kỹ thuật trực tiếp tư vấn từ thẩm duyệt bản vẽ PCCC, cung cấp vật tư đạt chuẩn đến nghiệm thu hoàn công tại công trình.'
                  : '소방 도면 승인부터 검정 필증 자재 납품 및 현장 소방 완공 검사까지 전문 엔지니어가 직접 상담해 드립니다.'}
              </p>
            </div>

            <button
              onClick={() => {
                if (onOpenConsult) onOpenConsult('firefighting');
                else {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="w-full sm:w-auto bg-navy-950 hover:bg-navy-900 text-white font-extrabold text-sm px-8 py-4 rounded-2xl shadow-2xl transition-all transform hover:scale-105 flex items-center justify-center space-x-2 whitespace-nowrap min-h-[52px]"
            >
              <Flame className="w-5 h-5 text-red-400" />
              <span>{isVi ? 'Yêu cầu Báo giá & Hồ sơ PCCC →' : '소방 자재 견적 & 서류 신청하기 →'}</span>
            </button>
          </div>
        </div>

      </div>

      {/* 6. Document & Certification Modal */}
      {isDocModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-navy-900 border border-red-500/30 rounded-3xl p-6 sm:p-8 max-w-2xl w-full space-y-6 relative shadow-2xl">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <div className="flex items-center space-x-2 text-white">
                <FileCheck className="w-5 h-5 text-red-400" />
                <h4 className="text-lg font-bold">
                  {isVi ? 'Hồ sơ Phê duyệt Vật tư PCCC & Chứng nhận KFI' : '소방 자재 승인 서류 & KFI 형식승인서'}
                </h4>
              </div>
              <button
                onClick={() => setIsDocModalOpen(false)}
                className="p-1.5 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">
                    {isVi ? 'Hồ sơ Năng lực & Giới thiệu Công ty Shinyoung (PDF)' : '(주)신영 지명원 & 회사소개서 (PDF)'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isVi
                      ? 'Tài liệu phê duyệt sản phẩm, catalogue, quy trình sản xuất & chứng nhận ISO'
                      : '제품 승인 자료, 카탈로그, 생산 공정 및 ISO 인증서'}
                  </span>
                </div>
                <a
                  href="/docu/fire/아는소방회사소개.pdf"
                  download="BEST_Winner_Shinyoung_Fire_Profile.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 hover:bg-red-500 text-white font-bold px-3.5 py-2 rounded-lg flex items-center space-x-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>{isVi ? 'Tải về' : '다운로드'}</span>
                </a>
              </div>

              <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">
                    {isVi ? 'Giấy chỉ định Q-Mark & Chứng nhận KFI Đèn khẩn cấp di động' : '휴대용 비상조명등 Q-Mark 지정서 & 형식승인서'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isVi
                      ? 'Chứng nhận Q-Mark 24h/60분 & KFI cho model SY-M119-FI'
                      : 'SY-M119-FI 24시간/60분 Q-Mark 및 KFI 승인서'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsDocModalOpen(false);
                    if (onOpenConsult) onOpenConsult('firefighting');
                  }}
                  className="bg-navy-800 hover:bg-navy-700 text-red-400 font-bold px-3.5 py-2 rounded-lg border border-red-500/30"
                >
                  {isVi ? 'Yêu cầu Hồ sơ' : '서류 신청'}
                </button>
              </div>

              <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">
                    {isVi ? 'Giấy chứng nhận KFI Bộ tủ PBL Hộp chữa cháy & Báo động' : '소화전 & 속보 PBL 세트 KFI 형식승인서'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isVi
                      ? 'Báo cáo thử nghiệm chứng nhận Cục PCCC & Bộ bản vẽ CAD'
                      : '소방청 검정필증 시험성적서 & CAD 도면 세트'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsDocModalOpen(false);
                    if (onOpenConsult) onOpenConsult('firefighting');
                  }}
                  className="bg-navy-800 hover:bg-navy-700 text-red-400 font-bold px-3.5 py-2 rounded-lg border border-red-500/30"
                >
                  {isVi ? 'Yêu cầu Hồ sơ' : '서류 신청'}
                </button>
              </div>

              <div className="p-3.5 bg-navy-950 rounded-xl border border-navy-800 flex items-center justify-between">
                <div>
                  <span className="font-bold text-white block">
                    {isVi ? 'Giấy chứng nhận Phù hợp Quy chuẩn PCCC QCVN 06:2022 Việt Nam' : '베트남 QCVN 06:2022 소방 검정 부합 증명서'}
                  </span>
                  <span className="text-[11px] text-slate-400">
                    {isVi
                      ? 'Báo cáo kết quả chính thức cho Thẩm duyệt PCCC & Nghiệm thu PCCC'
                      : 'Thẩm duyệt PCCC & Nghiệm thu PCCC 공식 성적서'}
                  </span>
                </div>
                <button
                  onClick={() => {
                    setIsDocModalOpen(false);
                    if (onOpenConsult) onOpenConsult('firefighting');
                  }}
                  className="bg-navy-800 hover:bg-navy-700 text-red-400 font-bold px-3.5 py-2 rounded-lg border border-red-500/30"
                >
                  {isVi ? 'Yêu cầu Hồ sơ' : '서류 신청'}
                </button>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setIsDocModalOpen(false)}
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 font-bold text-xs px-5 py-2.5 rounded-xl"
              >
                {isVi ? 'Đóng' : '닫기'}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
