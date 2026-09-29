import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCardsSection from '../components/BusinessCardsSection';
import ContactUs from '../components/ContactUs';
import { Building2, Sparkles, ArrowRight } from 'lucide-react';

export default function BusinessPage({ t }) {
  return (
    <div className="pt-6">
      {/* Page Breadcrumb & Hero */}
      <div className="bg-navy-900 border-b border-navy-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">
              {t?.lang === 'vi' || !t?.lang ? 'Lĩnh vực Kinh doanh' : 'Business Areas (사업분야)'}
            </span>
          </div>
          
          <div className="space-y-2">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-navy-950 px-3.5 py-1.5 rounded-full border border-gold-500/30">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>6 CORE BUSINESS DIVISIONS</span>
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white">
              {t?.lang === 'vi' || !t?.lang ? 'Các Lĩnh vực Kinh doanh BEST Winner Group' : 'BEST Winner Group 사업분야'}
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-3xl leading-relaxed">
              {t?.lang === 'vi' || !t?.lang
                ? 'Khám phá 6 lĩnh vực kinh doanh cốt lõi từ Nội thất cao cấp, Thang máy, Bãi đỗ xe thông minh AI, Vật tư PCCC, Chống thấm đến Năng lượng Mặt trời 3D PVT.'
                : '프리미엄 인테리어, 승강기, AI 스마트 파킹, 소방 자재, 건축 방수재부터 3D PVT 태양광 신재생 에너지까지 BEST Winner Group의 6대 핵심 사업 영역을 확인하세요.'}
            </p>
          </div>
        </div>
      </div>

      {/* 6 Business Cards Section */}
      <BusinessCardsSection t={t} />

      {/* Contact Form */}
      <ContactUs t={t} />
    </div>
  );
}
