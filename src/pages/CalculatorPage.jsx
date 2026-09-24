import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ElevatorCalculator from '../components/BusinessUnits/ElevatorCalculator';
import ContactUs from '../components/ContactUs';
import { Calculator } from 'lucide-react';

export default function CalculatorPage({ t }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="pt-6">
      <div className="bg-navy-900 border-b border-navy-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
          <div className="flex items-center space-x-2 text-xs text-slate-400">
            <Link to="/" className="hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-gold-400 font-bold">Elevator Calculator</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white flex items-center">
            <Calculator className="w-8 h-8 mr-3 text-gold-400" />
            승강기 온라인 자동 견적 계산기
          </h1>
          <p className="text-sm text-slate-300 max-w-2xl">
            층수, 하중, 디자인 선택 시 즉시 실시간 견적을 확인하고 무료 현장 실측을 예약할 수 있습니다.
          </p>
        </div>
      </div>

      <ElevatorCalculator t={t} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      <ContactUs t={t} initialBU="elevator" />
    </div>
  );
}
