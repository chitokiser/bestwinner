import React from 'react';
import { 
  Building, 
  ShieldAlert, 
  Wrench, 
  Sparkles, 
  CheckCircle, 
  Layers, 
  Cpu, 
  Users, 
  Globe2 
} from 'lucide-react';


// 한국어 화면 여부 (렌더 때 갱신) — 번역 안 된 문구를 한국어로 보여줄 때 사용
let __koLang = false;

export default function AboutGroup({ t }) {
  const isVi = t?.lang === 'vi';
  __koLang = t?.lang === 'ko';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  const about = t?.about || {
    subtitle: isVi ? "TỔNG QUAN TẬP ĐOÀN" : isKo ? "그룹 개요" : "About Group",
    title: "BEST winner Group Vietnam",
    philosophy: isVi ? "Hội tụ Công nghệ Kỹ thuật Hàn Quốc & Hệ thống Sản xuất Trực tiếp tại Việt Nam" : isKo ? "한국 정밀 기술력 × 베트남 현지 맞춤 직영 생산" : "Korean Technology × Vietnamese Production",
    cards: [
      { title: isVi ? "Công nghệ Hàn Quốc" : isKo ? "한국 정밀 기술력" : (__koLang ? "한국 기술력" : "Korean Technology"), desc: isVi ? "Áp dụng kỹ thuật chính xác Hàn Quốc và quy trình kiểm định chất lượng nghiêm ngặt." : isKo ? "한국의 정밀 기술력과 엄격한 품질 관리 프로세스 적용." : "Applying Korean precision engineering and strict quality standards." },
      { title: isVi ? "Sản xuất Địa phương" : isKo ? "현지 맞춤 직영 생산" : "Local Production", desc: isVi ? "Nhà máy 3.000m² tại Hà Nội đáp ứng may đo trực tiếp theo công trình." : isKo ? "하노이 3,000m² 직영 공장 연계 현지 맞춤 제작 및 공급." : "3,000sqm Hanoi factory customized for local projects." },
      { title: isVi ? "Đội ngũ Kỹ sư Chuyên gia" : isKo ? "전문 엔지니어 직영 시공" : "Expert Engineering", desc: isVi ? "2 Kỹ sư Trưởng Hàn Quốc & 15 Kỹ sư chuyên trách trực tiếp thi công." : isKo ? "한국인 수석 기술진 2인과 현지 전문 엔지니어 15인 직접 시공." : "2 Korean Chief Engineers and 15 specialized technical engineers." },
      { title: isVi ? "Hiệu quả Tích hợp Đa mảng" : isKo ? "전 사업 분야 시너지" : "Multi-Business Synergy", desc: isVi ? "Tối ưu hóa chi phí và quản lý đồng bộ tất cả mảng hạ tầng trong một hợp đồng." : isKo ? "전 사업 분야 단일 계약 파이프라인 및 일원화된 A/S 보증." : "All business areas unified under a single contract pipeline." }
    ],
    synergyTitle: isVi ? "Giải pháp One-Stop Synergy Tối ưu Hóa Giá trị Công trình" : isKo ? "원스톱 통합 시너지 (One-Stop Synergy)" : "One-Stop Integrated Synergy",
    synergyDesc: isVi ? "Đơn giản hóa toàn bộ quy trình vận hành. Từ khâu tư vấn thiết kế, thi công lắp đặt đến bảo hành A/S 24/7 đồng bộ cho toàn bộ mảng hạ tầng." : isKo ? "단일 계약 및 통합 관리로 최상의 시공 품질과 24/7 A/S를 일원화하여 제공합니다." : "Single contract and integrated management providing optimal quality and 24/7 A/S."
  };

  const cardsList = about.cards || [];

  return (
    <section id="about" className="py-20 bg-navy-900/50 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold text-gold-400 tracking-widest uppercase bg-navy-800/80 px-3 py-1 rounded-full border border-gold-500/30">
            {about.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white break-keep">
            {about.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal break-keep">
            {about.philosophy}
          </p>
        </div>

        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cardsList.map((card, idx) => {
            const icons = [Cpu, Building, Wrench, Globe2];
            const CardIcon = icons[idx] || Sparkles;
            return (
              <div 
                key={idx}
                className="glass-card rounded-2xl p-6 border border-navy-700/80 hover:border-gold-500/40 transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-navy-800 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:bg-gold-500 group-hover:text-navy-950 transition-colors">
                    <CardIcon className="w-6 h-6 text-gold-400 group-hover:text-navy-950 transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-gold-300 transition-colors break-keep">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed break-keep">
                    {card.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-navy-800 flex items-center text-[11px] text-gold-400 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 mr-1" />
                  <span>{isKo ? '품질 및 규격 보증' : isVi ? 'Tiêu chuẩn bảo đảm' : 'Guaranteed Standards'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Integrated Synergy Banner */}
        <div className="mt-16 glass-card-gold rounded-3xl p-6 sm:p-10 border border-gold-500/40 relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-gold-500/20 text-gold-400 px-3 py-1 rounded-full text-xs font-bold border border-gold-500/30">
                <Layers className="w-3.5 h-3.5" />
                <span>{isKo ? '원스톱 통합 시너지' : isVi ? 'Giải pháp Tích hợp One-Stop' : 'One-Stop Integrated Synergy'}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white break-keep">
                {about.synergyTitle}
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed max-w-3xl break-keep">
                {about.synergyDesc}
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <div className="p-6 rounded-2xl bg-navy-950/90 border border-gold-500/30 space-y-3 w-full max-w-xs text-center">
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                  {isKo ? '그룹 턴키 파이프라인' : isVi ? 'Quy trình Tổng thể Tập đoàn' : 'Group Turnkey Pipeline'}
                </p>
                <div className="text-lg font-extrabold gold-gradient-text break-keep">
                  {isKo ? '단일 계약 • 일원화된 보증' : isVi ? 'Hợp đồng Đơn - Bảo hành Đồng bộ' : 'Single Contract • Unified Warranty'}
                </div>
                <p className="text-[11px] text-slate-300 break-keep">
                  {isKo ? '전 사업 분야 단일 계약 및 일원화된 24/7 A/S 파이프라인' : isVi ? 'Giải pháp hợp đồng đơn lẻ & kênh bảo hành A/S 24/7 đồng bộ cho tất cả các mảng.' : 'Single turnkey contract & synchronized 24/7 A/S warranty across all divisions.'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
