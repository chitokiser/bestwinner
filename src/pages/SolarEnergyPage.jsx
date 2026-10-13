import React from 'react';
import { Link } from 'react-router-dom';
import SolarEnergySection from '../components/BusinessUnits/SolarEnergySection';
import ContactUs from '../components/ContactUs';
import { Sun, ArrowRight, ArrowLeft, Play, FileText, Download } from 'lucide-react';

export default function SolarEnergyPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Hero Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-amber-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-amber-400">{isVi ? 'Lĩnh vực Kinh doanh' : isKo ? '사업분야' : 'Business Areas'}</Link>
            <span>/</span>
            <span className="text-amber-400 font-bold">{isKo ? 'BEST winner Solar Energy (3D PVT 태양광)' : isVi ? 'BEST winner Solar Energy (Năng lượng mặt trời)' : 'BEST WINNER SOLAR ENERGY VN'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30 mb-2">
                <Sun className="w-3.5 h-3.5" />
                <span>{isVi ? 'LĨNH VỰC KINH DOANH ⑥' : isKo ? '핵심 사업 부문 ⑥' : 'BUSINESS UNIT ⑥'}</span>
              </span>
              <h1 className="text-3xl sm:text-5xl font-black text-white">
                BEST WINNER SOLAR ENERGY VN
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {isVi
                  ? '3D PVT Photon Cycling Box — Mật độ phát điện gấp 10 lần, Tuổi thọ 40 năm+, Sản xuất điện & nước nóng 24h.'
                  : isKo
                  ? '광자 순환 박스 (Photon Cycling Box) 3D PVT — 10배 발전량 밀도, 40년+ 수명, 전기+24시간 온수 복합 생산 기술.'
                  : '3D PVT Photon Cycling Box — 10× power density, 40+ years lifespan, simultaneous 24/7 power and hot water.'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 items-center">
              <Link 
                to="/business/waterproofing" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>{isVi ? 'Trước: Vật liệu Chống thấm' : isKo ? '이전: 건축 방수 (Waterproofing)' : 'Prev: Waterproofing'}</span>
              </Link>

              <Link 
                to="/business/agency" 
                className="bg-amber-500 hover:bg-amber-400 text-navy-950 text-xs font-bold px-4 py-2.5 rounded-xl flex items-center shadow-md transition-all"
              >
                <span>{isVi ? 'Tiếp: Digital Agency' : isKo ? '다음: 디지털 에이전시 (Digital Agency)' : 'Next: Digital Agency'}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Business Section Component */}
      <SolarEnergySection 
        t={t} 
        onOpenConsult={(bu) => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* Contact Form Section */}
      <ContactUs t={t} initialBU="energy" />
    </div>
  );
}
