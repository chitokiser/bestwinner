import React from 'react';
import Hero from '../components/Hero';
import AboutGroup from '../components/AboutGroup';
import BusinessCardsSection from '../components/BusinessCardsSection';
import ElevatorCalculator from '../components/BusinessUnits/ElevatorCalculator';
import ContactUs from '../components/ContactUs';

export default function HomePage({ t, onOpenCalculator }) {
  return (
    <div>
      {/* Hero Banner (Simplified Copy) */}
      <Hero 
        t={t} 
        onOpenCalculator={onOpenCalculator}
      />

      {/* About Group Section */}
      <AboutGroup t={t} />

      {/* 5 Business Unit Cards Section */}
      <BusinessCardsSection t={t} />

      {/* Interactive Elevator Calculator */}
      <ElevatorCalculator 
        t={t} 
        isModalOpen={false}
        setIsModalOpen={onOpenCalculator}
      />

      {/* Contact & Showroom */}
      <ContactUs t={t} />
    </div>
  );
}
