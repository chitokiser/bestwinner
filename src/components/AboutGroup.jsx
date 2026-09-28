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

export default function AboutGroup({ t }) {
  const isVi = t?.lang === 'vi' || !t?.lang;

  const about = t?.about || {
    subtitle: isVi ? "TỔNG QUAN TẬP ĐOÀN" : "TỔNG QUAN TẬP ĐOÀN / 그룹 개요",
    title: "BEST winner Group Vietnam",
    philosophy: isVi ? "Hội tụ Công nghệ Kỹ thuật Hàn Quốc & Hệ thống Sản xuất Trực tiếp tại Việt Nam" : "Korean Technology × Vietnamese Production",
    cards: [
      { title: "Korean Technology", desc: isVi ? "Áp dụng kỹ thuật chính xác Hàn Quốc và quy trình kiểm định chất lượng nghiêm ngặt." : "한국의 정밀 기술력과 엄격한 품질 관리 프로세스 적용." },
      { title: "Local Production", desc: isVi ? "Nhà máy 3.000m² tại Hà Nội đáp ứng may đo trực tiếp theo công trình." : "하노이 3,000m² 직영 공장 연계 현지 맞춤 제작 및 공급." },
      { title: "Expert Engineering", desc: isVi ? "2 Kỹ sư Trưởng Hàn Quốc & 15 Kỹ sư chuyên trách trực tiếp thi công." : "한국인 수석 기술진 2인과 현지 전문 엔지니어 15인 직접 시공." },
      { title: "Multi-Business Synergy", desc: isVi ? "Tối ưu hóa chi phí và quản lý đồng bộ tất cả mảng hạ tầng trong một hợp đồng." : "전 사업 분야 단일 계약 파이프라인 및 일원화된 A/S 보증." }
    ],
    synergyTitle: "One-Stop Integrated Synergy",
    synergyDesc: isVi ? "Giải pháp đồng bộ từ tư vấn, thiết kế, thi công lắp đặt đến bảo hành A/S 24/7 toàn diện." : "단일 계약 및 통합 관리로 최상의 시공 품질과 24/7 A/S를 제공합니다."
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
                  <span>Guaranteed Standards</span>
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
                <span>One-Stop Integrated Synergy</span>
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
                <p className="text-xs text-slate-400 font-semibold uppercase tracking-wider">Group Turnkey Pipeline</p>
                <div className="text-lg font-extrabold gold-gradient-text break-keep">
                  {isVi ? 'Hợp đồng Đơn - Bảo hành Đồng bộ' : 'Single Contract • Unified Warranty'}
                </div>
                <p className="text-[11px] text-slate-300 break-keep">
                  {isVi ? 'Giải pháp hợp đồng đơn lẻ & kênh bảo hành A/S 24/7 đồng bộ cho tất cả các mảng.' : '전 사업 분야 단일 계약 및 일원화된 24/7 A/S 파이프라인'}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
