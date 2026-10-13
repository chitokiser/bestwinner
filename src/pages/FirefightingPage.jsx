import React from 'react';
import { Link } from 'react-router-dom';
import FirefightingSection from '../components/BusinessUnits/FirefightingSection';
import ContactUs from '../components/ContactUs';
import { Flame, ArrowRight, ArrowLeft, ShieldCheck, Award } from 'lucide-react';

export default function FirefightingPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Header */}
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <Link to="/business" className="hover:text-gold-400">{isVi ? 'Lĩnh vực Kinh doanh' : isKo ? '사업분야' : 'Business Areas'}</Link>
            <span>/</span>
            <span className="text-red-400 font-bold">{isKo ? 'BEST winner Firefighting (소방 자재)' : isVi ? 'BEST winner Firefighting materials Vn (Vật tư PCCC)' : 'BEST WINNER FIREFIGHTING MATERIALS VN'}</span>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-red-400 uppercase tracking-widest bg-red-500/10 px-3 py-1 rounded-full border border-red-500/30">
                  <Flame className="w-3.5 h-3.5" />
                  <span>{isVi ? 'LĨNH VỰC KINH DOANH ④' : isKo ? '핵심 사업 부문 ④' : 'BUSINESS UNIT ④'}</span>
                </span>
                <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                  <Award className="w-3.5 h-3.5" />
                  <span>{isKo ? '(주)신영 (SY-21) & 아는소방 기술제휴' : isVi ? 'Hợp tác Kỹ thuật với Shin-Young (SY-21) & Sobang24' : 'Shin-Young (SY-21) & Sobang24 Tech Alliance'}</span>
                </span>
              </div>
              <h1 className="text-3xl sm:text-5xl font-black text-white">
                BEST WINNER FIREFIGHTING VN
              </h1>
              <p className="text-sm text-slate-300 mt-2 max-w-3xl leading-relaxed">
                {isVi
                  ? 'Đèn chiếu sáng khẩn cấp Q-Mark 24h & KFI Hàn Quốc, Tủ đựng bình chữa cháy đặc biệt, Đầu báo IoT triệt tiêu báo giả & Tư vấn PCCC chuẩn QCVN/TCVN.'
                  : isKo
                  ? '대한민국 KFI 형식승인 & Q-Mark 24시간 연속점등 비상조명등, 특수 소화기함, IoT 화재 오작동 해소 감지기 및 베트남 QCVN/TCVN 소방 인허가 전문 솔루션.'
                  : 'Korea KFI-certified & Q-Mark 24hr emergency lights, specialized extinguisher cabinets, IoT fire sensors, and QCVN/TCVN fire inspection solutions.'}
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2.5 items-center">
              <Link 
                to="/business/parking" 
                className="bg-navy-800 hover:bg-navy-700 text-slate-300 text-xs font-semibold px-4 py-2.5 rounded-xl border border-navy-700 flex items-center"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 text-slate-400" />
                <span>{isVi ? 'Trước: Bãi đỗ xe AI Smart' : isKo ? '이전: AI 스마트파킹' : 'Prev: AI Smart Parking'}</span>
              </Link>

              <Link 
                to="/business/waterproofing" 
                className="bg-red-600 hover:bg-red-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center shadow-md transition-all"
              >
                <span>{isVi ? 'Tiếp: Vật liệu Chống thấm' : isKo ? '다음: 건축 방수 (Waterproofing)' : 'Next: Waterproofing'}</span>
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <FirefightingSection t={t} onOpenConsult={(bu) => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      <ContactUs t={t} initialBU="firefighting" />
    </div>
  );
}
