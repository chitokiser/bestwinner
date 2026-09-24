import React, { useState } from 'react';
import { 
  Car, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  CreditCard, 
  ArrowRight, 
  RefreshCw 
} from 'lucide-react';

export default function SmartParkingSection({ t, onOpenConsult }) {
  const [isScanning, setIsScanning] = useState(false);
  const [plateNumber, setPlateNumber] = useState('30A-888.99');
  const [gateStatus, setGateStatus] = useState('CLOSED'); // CLOSED, OPENING, OPEN
  const [assignedSpot, setAssignedSpot] = useState('B2-108');

  const simulateScan = () => {
    setIsScanning(true);
    setGateStatus('SCANNING...');
    setTimeout(() => {
      setIsScanning(false);
      setGateStatus('ACCESS GRANTED (OPEN)');
    }, 1200);
  };

  const samplePlates = ['30A-888.99', '29B-123.45', '51G-999.88', '88C-777.66'];

  return (
    <section id="parking" className="py-20 bg-navy-900/40 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unit Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold text-emeraldGreen-500 uppercase tracking-widest bg-emeraldGreen-500/10 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
              <Car className="w-3.5 h-3.5" />
              <span>BUSINESS UNIT ③</span>
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              {t.business.units.parking.name}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
              {t.business.units.parking.desc}
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <button
              onClick={() => onOpenConsult('parking')}
              className="bg-emeraldGreen-500 hover:bg-emeraldGreen-600 text-navy-950 font-bold px-5 py-3 rounded-xl shadow-lg transition-all flex items-center text-sm"
            >
              <span>{t.business.units.parking.cta}</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>

        {/* Interactive AI Gate & LPR Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Simulator Visual Box */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-emeraldGreen-500/30 space-y-6 relative overflow-hidden">
              
              <div className="flex justify-between items-center pb-4 border-b border-navy-800">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-emeraldGreen-500 animate-pulse"></div>
                  <span className="text-xs font-bold text-slate-200">AI LPR Camera Control Center</span>
                </div>
                <span className="text-[10px] bg-navy-950 text-emeraldGreen-500 font-mono px-2.5 py-1 rounded border border-navy-700">
                  SYSTEM ONLINE
                </span>
              </div>

              {/* Simulated Barrier Gate Screen */}
              <div className="bg-navy-950 rounded-2xl p-6 border border-navy-800 flex flex-col items-center justify-center min-h-[220px] relative">
                
                {/* LPR Plate Display */}
                <div className="mb-4">
                  <span className="text-xs text-slate-400 block mb-1 text-center">감지된 차량 번호판 (AI LPR)</span>
                  <div className="bg-white text-navy-950 px-6 py-2 rounded-lg border-2 border-slate-900 font-black text-2xl tracking-widest font-mono shadow-md">
                    {plateNumber}
                  </div>
                </div>

                {/* Barrier Gate Status Indicator */}
                <div className="space-y-1 text-center">
                  <span className="text-xs text-slate-400">차단기 Gate 상태:</span>
                  <div className={`text-base font-extrabold ${gateStatus.includes('OPEN') ? 'text-emeraldGreen-500' : 'text-gold-400'}`}>
                    {gateStatus}
                  </div>
                  {gateStatus.includes('OPEN') && (
                    <div className="text-xs text-slate-300 mt-1 bg-emeraldGreen-500/10 text-emeraldGreen-400 px-3 py-1 rounded-full border border-emeraldGreen-500/30">
                      유도 주차 면수: Spot <span className="font-bold text-white">{assignedSpot}</span> (LED 녹색 점등)
                    </div>
                  )}
                </div>

              </div>

              {/* Simulation Controls */}
              <div className="space-y-3">
                <span className="text-xs text-slate-400 font-medium">차량 번호판 스캔 테스트:</span>
                <div className="flex flex-wrap gap-2">
                  {samplePlates.map((plate) => (
                    <button
                      key={plate}
                      onClick={() => { setPlateNumber(plate); simulateScan(); }}
                      className={`text-xs font-bold px-3 py-2 rounded-lg border transition-all ${
                        plateNumber === plate
                          ? 'bg-emeraldGreen-500 text-navy-950 border-emeraldGreen-400'
                          : 'bg-navy-900 text-slate-300 border-navy-700 hover:border-emeraldGreen-500/40'
                      }`}
                    >
                      {plate}
                    </button>
                  ))}
                  <button
                    onClick={simulateScan}
                    className="bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 text-xs font-bold px-4 py-2 rounded-lg border border-emeraldGreen-500/30 flex items-center"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 mr-1 ${isScanning ? 'animate-spin' : ''}`} />
                    <span>AI 스캔 실행</span>
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Key Features & System Modules */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 rounded-2xl border border-navy-700 space-y-2">
              <span className="text-xs font-bold text-emeraldGreen-500 uppercase tracking-wider">주요 연동 IT 시스템</span>
              <h3 className="text-xl font-extrabold text-white">무인 관제 & 초고속 AI LPR</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {t.business.units.parking.highlight}
              </p>
            </div>

            <div className="space-y-3">
              {t.business.units.parking.features.map((feature, idx) => (
                <div key={idx} className="flex items-start space-x-3 p-3.5 rounded-xl bg-navy-900/60 border border-navy-800">
                  <div className="w-6 h-6 rounded-full bg-emeraldGreen-500/20 text-emeraldGreen-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-200 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => onOpenConsult('parking')}
              className="w-full bg-navy-800 hover:bg-navy-700 text-emeraldGreen-400 font-semibold text-xs py-3 rounded-xl border border-navy-700 hover:border-emeraldGreen-500/40 transition-colors flex items-center justify-center space-x-2"
            >
              <Cpu className="w-4 h-4 text-emeraldGreen-400" />
              <span>건물 규모별 맞춤 스마트 주차 구성안 문의</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
