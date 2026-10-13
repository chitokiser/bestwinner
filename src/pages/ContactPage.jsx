import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { MapPin } from 'lucide-react';

export default function ContactPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && false);

  return (
    <div className="pt-6">
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">{isVi ? 'Trang chủ' : isKo ? '홈' : 'Home'}</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">{isVi ? 'Liên hệ & Showroom' : isKo ? '문의 & 쇼룸' : 'Contact Us'}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white flex items-center">
            <MapPin className="w-8 h-8 mr-3 text-gold-400" />
            {isVi ? 'Liên hệ & Showroom Trải nghiệm Hà Nội' : isKo ? '문의 & 하노이 Experience Center' : 'Contact & Hanoi Experience Center'}
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            {isVi
              ? 'Thông tin Showroom Trụ sở Hà Nội & Đăng ký tư vấn 1:1 cho các mảng kinh doanh.'
              : isKo
              ? '하노이 본사 쇼룸 안내 및 전 사업부문 1:1 맞춤 상담 신청.'
              : 'Hanoi headquarters showroom guide and 1:1 consultation for all business divisions.'}
          </p>
        </div>
      </div>

      <ContactUs t={t} />
    </div>
  );
}
