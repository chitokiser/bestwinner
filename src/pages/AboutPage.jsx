import React from 'react';
import { Link } from 'react-router-dom';
import AboutGroup from '../components/AboutGroup';
import CeoGreetingSection from '../components/CeoGreetingSection';
import OrgChartSection from '../components/OrgChartSection';
import ContactUs from '../components/ContactUs';

export default function AboutPage({ t }) {
  return (
    <div className="pt-6">
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">About Group</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white">
            BEST winner Group Vietnam
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            {t?.lang === 'vi' || !t?.lang
              ? 'Công nghệ Hàn Quốc + Sản xuất Chuyên biệt Địa phương — 7 năm kinh nghiệm & Tập đoàn Hạ tầng Thông minh Hàng đầu.'
              : 'Korean Technology + Local Specialized Production — 7년 현지 노하우 & 통합 스마트 인프라 리더.'}
          </p>
        </div>
      </div>

      <AboutGroup t={t} />
      <CeoGreetingSection t={t} />
      <OrgChartSection t={t} />
      <ContactUs t={t} />
    </div>
  );
}
