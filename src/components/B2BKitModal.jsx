import React, { useState } from 'react';
import { 
  X, 
  Download, 
  FileCheck, 
  Building2, 
  ShieldCheck, 
  Layers, 
  Check, 
  Sparkles 
} from 'lucide-react';

export default function B2BKitModal({ t, isOpen, onClose }) {
  const [formData, setFormData] = useState({
    companyName: '',
    role: 'Architect', // Architect, Contractor, Developer, Owner
    contactPerson: '',
    email: '',
    phone: ''
  });
  const [isDownloaded, setIsDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsDownloaded(true);
    setTimeout(() => {
      // Simulate file download trigger
      const element = document.createElement("a");
      const file = new Blob([`BEST winner Group Vietnam B2B Architect Kit\nCompany: ${formData.companyName}\nRole: ${formData.role}\nRequested files: CAD/DWG/BIM, Profile 2026, QCVN Certificates`], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "BEST_winner_Vn_Group_B2B_Partner_Kit.txt";
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-md">
      <div className="glass-card-gold max-w-lg w-full p-6 sm:p-8 rounded-3xl border border-gold-500/40 relative shadow-2xl space-y-6">
        
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="space-y-2">
          <div className="inline-flex items-center space-x-1.5 text-xs font-bold text-gold-400 uppercase tracking-widest bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/30">
            <Sparkles className="w-3.5 h-3.5" />
            <span>B2B ARCHITECT & CONTRACTOR KIT</span>
          </div>
          <h3 className="text-2xl font-extrabold text-white">{t.b2bKit.title}</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            {t.b2bKit.desc}
          </p>
        </div>

        {/* Package Contents Checklist */}
        <div className="p-4 rounded-xl bg-navy-950 border border-navy-800 space-y-2">
          <p className="text-xs font-bold text-gold-400 uppercase tracking-wider mb-1">포함 도면 & 문서 패키지</p>
          {t.b2bKit.items.map((item, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-xs text-slate-200">
              <Check className="w-3.5 h-3.5 text-gold-400 stroke-[3]" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {isDownloaded ? (
          <div className="text-center py-6 space-y-3">
            <div className="w-14 h-14 bg-emeraldGreen-500/20 text-emeraldGreen-500 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7 stroke-[3]" />
            </div>
            <h4 className="text-lg font-bold text-white">B2B Partner Kit 다운로드 시작!</h4>
            <p className="text-xs text-slate-300">
              입력해주신 이메일({formData.email})로도 최신 DWG/BIM 도면 수정본이 자동 발송됩니다.
            </p>
            <button
              onClick={onClose}
              className="mt-4 bg-gold-500 text-navy-950 font-bold text-xs px-6 py-2.5 rounded-xl"
            >
              닫기
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label className="text-xs font-bold text-slate-300 block mb-1">회사명 / 건축사무소명</label>
              <input 
                type="text" 
                required
                placeholder="예: Vina Architect & Associates"
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">구분</label>
                <select
                  value={formData.role}
                  onChange={(e) => setFormData({...formData, role: e.target.value})}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-gold-500"
                >
                  <option value="Architect">건축사 / 인테리어 디자이너</option>
                  <option value="Contractor">시공사 / 종합건설</option>
                  <option value="Developer">시행사 / 부동산 개발</option>
                  <option value="Owner">건축주 / 개인 고객</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">담당자 성함</label>
                <input 
                  type="text" 
                  required
                  placeholder="홍길동 팀장"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({...formData, contactPerson: e.target.value})}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">이메일 (도면 수신용)</label>
                <input 
                  type="email" 
                  required
                  placeholder="architect@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-300 block mb-1">연락처 (Zalo)</label>
                <input 
                  type="tel" 
                  required
                  placeholder="090-123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gold-500 hover:bg-gold-400 text-navy-950 font-black py-3.5 rounded-xl shadow-gold-glow text-xs uppercase tracking-wider mt-2 flex items-center justify-center space-x-2"
            >
              <Download className="w-4 h-4 stroke-[2.5]" />
              <span>{t.b2bKit.downloadBtn}</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
}
