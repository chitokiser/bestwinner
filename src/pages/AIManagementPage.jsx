import AIManagementHero from '../components/Services/AIManagementHero';
import React from 'react';
import { Link } from 'react-router-dom';
import AIManagementSection from '../components/Services/AIManagementSection';
import ContactUs from '../components/ContactUs';
import { Cpu, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';

export default function AIManagementPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko' || (!t?.lang && true);

  return (
    <div className="pt-0">
      <AIManagementHero t={t} onOpenConsult={() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }} />

      {/* Main Service Section Component */}
      <AIManagementSection 
        t={t} 
        onOpenConsult={() => {
          const el = document.getElementById('contact');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }} 
      />

      {/* Contact Form Section */}
      <ContactUs t={t} initialBU="parking" />
    </div>
  );
}
