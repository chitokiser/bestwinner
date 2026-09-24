import React from 'react';
import { Link } from 'react-router-dom';
import ContactUs from '../components/ContactUs';
import { MapPin } from 'lucide-react';

export default function ContactPage({ t }) {
  return (
    <div className="pt-6">
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">Contact Us</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white flex items-center">
            <MapPin className="w-8 h-8 mr-3 text-gold-400" />
            Contact & Hanoi Experience Center
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            하노이 본사 쇼룸 안내 및 5대 사업부별 1:1 맞춤 상담 신청.
          </p>
        </div>
      </div>

      <ContactUs t={t} />
    </div>
  );
}
