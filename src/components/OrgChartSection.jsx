import React from 'react';
import { 
  Users, 
  Building2, 
  Palette, 
  ShieldCheck, 
  HardHat, 
  Wrench, 
  TrendingUp, 
  Globe, 
  Crown,
  ChevronDown
} from 'lucide-react';

export default function OrgChartSection({ t }) {
  const isVi = t?.lang === 'vi' || !t?.lang;

  const orgData = {
    ceo: {
      title: isVi ? "Chủ tịch / Tổng giám đốc (President & CEO)" : "대표이사 (President & CEO)",
      name: "Kim Sung Won (김성원)",
      desc: isVi ? "Chỉ đạo chiến lược toàn tập đoàn" : "BEST WINNER VN 총괄 경영"
    },
    hqs: [
      {
        id: "mgmt",
        icon: Building2,
        name: isVi ? "Ban Quản lý (Management HQ)" : "경영본부 (Management HQ)",
        subName: "Management HQ",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Phòng Nhân sự (H.R Dept.)" : "인사부 (H.R)",
          isVi ? "Phòng Tài chính (Finance Dept.)" : "재무부 (Finance)",
          isVi ? "Đội Quản lý Hệ thống (System Mgmt)" : "시스템관리팀"
        ]
      },
      {
        id: "design",
        icon: Palette,
        name: isVi ? "Ban Thiết kế (Design HQ)" : "디자인본부 (Design HQ)",
        subName: "Design HQ",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Đội Thiết kế 1 (Design Team 1)" : "디자인 1팀",
          isVi ? "Đội Thiết kế 2 (Design Team 2)" : "디자인 2팀"
        ]
      },
      {
        id: "quality",
        icon: ShieldCheck,
        name: isVi ? "Phòng Quản lý Chất lượng (QM Dept.)" : "품질관리부 (Quality Management Dept.)",
        subName: "Quality Management Dept.",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Phó Tổng Giám đốc Quản lý Chất lượng" : "품질총괄 부사장"
        ]
      },
      {
        id: "construction",
        icon: HardHat,
        name: isVi ? "Phòng Thi công Xây dựng (Construction Dept.)" : "건설사업부 (Construction Dept.)",
        subName: "Construction Dept.",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Đội Thi công 1 (Construction Team 1)" : "시공 1팀",
          isVi ? "Đội Thi công 2 (Construction Team 2)" : "시공 2팀"
        ]
      },
      {
        id: "tech",
        icon: Wrench,
        name: isVi ? "Phòng Hỗ trợ Kỹ thuật (Technical Support)" : "기술지원부 (Technical Support Dept.)",
        subName: "Technical Support Dept.",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Đội Chống thấm K1 Chuyên trách" : "K1 방수 전담팀",
          isVi ? "Đội Cung ứng Vật liệu" : "자재 수급팀",
          isVi ? "Đội Hỗ trợ Dịch vụ Công" : "공공서비스 지원팀"
        ]
      },
      {
        id: "sales",
        icon: TrendingUp,
        name: isVi ? "Phòng Kinh doanh & Marketing" : "영업/마케팅부 (Sales & Marketing Dept.)",
        subName: "Sales & Marketing Dept.",
        color: "from-amber-500/20 to-yellow-500/10 border-gold-500/30",
        teams: [
          isVi ? "Đội Kinh doanh B2B / B2C" : "B2B / B2C 영업팀",
          isVi ? "Đội Truyền thông & Quảng cáo" : "마케팅 전략팀"
        ]
      },
      {
        id: "agency",
        icon: Globe,
        name: isVi ? "Khối Digital Agency (Digital Agency HQ)" : "디지털에이전시 사업본부 (Digital Agency HQ)",
        subName: "Digital Agency HQ",
        highlight: true,
        color: "from-gold-500/30 to-amber-600/20 border-gold-400/50 shadow-gold-500/10",
        teams: [
          isVi ? "Đội Phát triển Web & App" : "웹 & 앱 개발팀 (Web & App Dev)",
          isVi ? "Đội Giải pháp AI & Tự động hóa" : "AI & 자동화 솔루션팀 (AI & Automation)",
          isVi ? "Đội Digital Marketing & Media" : "디지털 마케팅 & 미디어팀 (Marketing & Media)"
        ]
      }
    ]
  };

  return (
    <section id="org-chart" className="py-20 bg-navy-950/80 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-gold-400 tracking-widest uppercase bg-navy-800/80 px-3.5 py-1.5 rounded-full border border-gold-500/30 inline-flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5" />
            {isVi ? "CƠ CẤU TỔ CHỨC TẬP ĐOÀN" : "조직 체계 (Organization Chart)"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white break-keep">
            {isVi ? "Cơ cấu Tổ chức Tập đoàn BEST WINNER VN" : "BEST WINNER VN 그룹 조직 체계"}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed break-keep">
            {isVi 
              ? "Hệ thống quản lý 전문화된 전담 부서 간의 체계적인 유기적 협력 파이프라인" 
              : "경영, 디자인, 품질, 시공, 기술지원, 영업 및 디지털 에이전시 전담 부서의 일원화된 유기적 조직 체계"}
          </p>
        </div>

        {/* Level 1: CEO Card */}
        <div className="flex justify-center mb-12 relative">
          <div className="relative group max-w-md w-full">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-gold-500 to-amber-600 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
            <div className="relative bg-navy-900 border-2 border-gold-500/60 rounded-2xl p-6 text-center shadow-xl">
              <div className="w-14 h-14 mx-auto mb-3 rounded-full bg-gold-500/20 border border-gold-400 flex items-center justify-center text-gold-400 shadow-inner">
                <Crown className="w-7 h-7" />
              </div>
              <span className="text-[11px] font-extrabold text-gold-400 tracking-wider uppercase block mb-1">
                {orgData.ceo.title}
              </span>
              <h3 className="text-2xl font-black text-white gold-gradient-text">
                {orgData.ceo.name}
              </h3>
              <p className="text-xs text-slate-300 mt-1">
                {orgData.ceo.desc}
              </p>
            </div>
          </div>
        </div>

        {/* Connecting Arrow */}
        <div className="flex justify-center -mt-6 mb-10">
          <div className="w-0.5 h-8 bg-gradient-to-b from-gold-500/60 to-navy-700"></div>
        </div>

        {/* Level 2: Departments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {orgData.hqs.map((hq) => {
            const Icon = hq.icon;
            return (
              <div 
                key={hq.id}
                className={`glass-card rounded-2xl p-6 border transition-all duration-300 hover:-translate-y-1 ${
                  hq.highlight 
                    ? 'bg-gradient-to-br from-navy-900 via-navy-900 to-navy-800/90 border-gold-400/60 shadow-lg shadow-gold-500/10' 
                    : 'bg-navy-900/60 border-navy-700/80 hover:border-gold-500/40'
                }`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`p-2.5 rounded-xl border ${
                    hq.highlight 
                      ? 'bg-gold-500 text-navy-950 border-gold-400' 
                      : 'bg-navy-800 text-gold-400 border-gold-500/30'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white leading-snug break-keep">
                      {hq.name}
                    </h4>
                    <span className="text-[11px] text-slate-400 font-medium block">
                      {hq.subName}
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-navy-800/80 space-y-2">
                  {hq.teams.map((team, idx) => (
                    <div 
                      key={idx}
                      className="flex items-center text-xs text-slate-300 bg-navy-950/40 px-3 py-2 rounded-lg border border-navy-800/60"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold-400 mr-2.5 flex-shrink-0"></div>
                      <span className="font-medium break-keep">{team}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
