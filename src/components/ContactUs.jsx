import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  PhoneCall, 
  Mail, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';

export default function ContactUs({ t, initialBU = 'all' }) {
  const [selectedBU, setSelectedBU] = useState(initialBU);
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
      setContactForm({ name: '', phone: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="py-20 bg-navy-950 relative border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-gold-400 tracking-widest uppercase bg-navy-800/80 px-3 py-1 rounded-full border border-gold-500/30">
            {t.contact.subtitle}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            {t.contact.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Branch & Showroom Location Details (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card-gold p-6 sm:p-8 rounded-3xl border border-gold-500/40 space-y-6">
              
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-xl bg-gold-500/20 border border-gold-500/40 flex items-center justify-center text-gold-400">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-extrabold text-white">{t.contact.hanoiHQ}</h3>
                  <p className="text-xs text-gold-400 font-medium">BEST winner Group Vietnam</p>
                </div>
              </div>

              <div className="space-y-4 text-xs text-slate-300 pt-2 border-t border-navy-800">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{t.contact.address}</span>
                </div>

                <div className="flex items-start space-x-3">
                  <PhoneCall className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">{t.contact.hotline}</p>
                    <p className="text-slate-400 mt-0.5">{t.contact.techSupport}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>{t.contact.email}</span>
                </div>
              </div>

              {/* Showroom Preview Graphic */}
              <div className="rounded-xl overflow-hidden border border-navy-700 relative">
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80" 
                  alt="Hanoi Experience Center" 
                  className="w-full h-36 object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent flex items-end p-3">
                  <span className="text-[11px] font-bold text-gold-300">📍 Hanoi Experience Center Showroom</span>
                </div>
              </div>

            </div>
          </div>

          {/* Inquiry Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-navy-700 shadow-2xl">
              <h3 className="text-xl font-extrabold text-white mb-6">{t.contact.formTitle}</h3>

              {isSuccess ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 bg-emeraldGreen-500/20 text-emeraldGreen-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 stroke-[3]" />
                  </div>
                  <h4 className="text-lg font-bold text-white">문의가 정상 접수되었습니다!</h4>
                  <p className="text-xs text-slate-300 max-w-md mx-auto">
                    {t.contact.submitSuccess}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">{t.contact.selectBU}</label>
                    <select
                      value={selectedBU}
                      onChange={(e) => setSelectedBU(e.target.value)}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-gold-500"
                    >
                      <option value="all">{t.contact.allBU}</option>
                      <option value="interior">① BEST winner interior Vn (맞춤 인테리어)</option>
                      <option value="elevator">② BEST winner elevator Vn (승강기 & A/S)</option>
                      <option value="parking">③ BEST winner AI Smart Parking System Vn (AI주차)</option>
                      <option value="firefighting">④ BEST winner Firefighting materials Vn (소방 자재)</option>
                      <option value="waterproofing">⑤ BEST winner Waterproofing Vn (건축 방수)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">성함 / Company Name</label>
                      <input 
                        type="text" 
                        required
                        placeholder="이름 또는 회사명 입력"
                        value={contactForm.name}
                        onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                        className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-300 block mb-1.5">연락처 (Zalo / Kakao)</label>
                      <input 
                        type="tel" 
                        required
                        placeholder="0988-xxx-xxx"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({...contactForm, phone: e.target.value})}
                        className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">이메일 주소</label>
                    <input 
                      type="email" 
                      required
                      placeholder="name@company.com"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-300 block mb-1.5">문의 및 프로젝트 상세 내용</label>
                    <textarea 
                      rows="4" 
                      required
                      placeholder="건물 유형(빌라, 오피스, 공장), 위치, 희망 일정 등 문의사항을 남겨주세요."
                      value={contactForm.message}
                      onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                      className="w-full bg-navy-900 border border-navy-700 rounded-xl px-4 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-gold-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-gold-400 via-gold-500 to-gold-600 hover:from-gold-300 hover:to-gold-400 text-navy-950 font-black py-4 rounded-xl shadow-gold-glow text-xs uppercase tracking-wider flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4 stroke-[2.5]" />
                    <span>상담 신청서 제출하기</span>
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
