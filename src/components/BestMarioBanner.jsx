import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight, BadgeCheck, ShieldCheck, Languages } from 'lucide-react';
import { BESTMARIO_CATEGORIES } from '../data/bestmarioCategories';

const MARIO_URL = 'https://bestmario.netlify.app';
const SHOWN_CHIPS = 8;

// 홈 화면: 베스트마리오 홍보 배너 (핵심 사업 분야 바로 아래)
export default function BestMarioBanner({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  const L = (vi, ko, en) => (isVi ? vi : isKo ? ko : en);
  const loc = isVi ? 'vi' : isKo ? 'ko' : 'en';
  const home = `${MARIO_URL}/${loc}`;
  const apply = `${MARIO_URL}/${loc}/apply`;
  const rest = BESTMARIO_CATEGORIES.length - SHOWN_CHIPS;

  return (
    <section id="bestmario-banner" className="bg-navy-950 border-t border-navy-800 py-14 sm:py-20">
      <style>{`
        @keyframes bmb-float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-8px); } }
        .bmb-float { animation: bmb-float 5.5s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .bmb-float { animation: none; } }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-navy-900 via-navy-900 to-amber-950/50">
          {/* 배경 장식 */}
          <div className="pointer-events-none absolute -left-24 -top-24 w-80 h-80 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="pointer-events-none absolute right-10 bottom-0 w-[26rem] h-[26rem] rounded-full bg-gradient-to-t from-orange-600/40 via-red-600/20 to-transparent blur-2xl hidden md:block" />

          <div className="relative grid md:grid-cols-[1.25fr_1fr] items-center gap-6 md:gap-4">
            {/* 캐릭터: 모바일은 위, 데스크톱은 오른쪽 */}
            <div className="order-first md:order-last relative flex justify-center md:justify-end items-end h-64 sm:h-80 md:h-full md:min-h-[26rem] overflow-hidden md:pr-10 pt-6 md:pt-8">
              <div className="absolute bottom-0 w-60 h-60 sm:w-72 sm:h-72 rounded-full bg-gradient-to-t from-orange-500/50 via-red-500/25 to-transparent blur-xl md:hidden" />
              <img
                src="/images/bestmario/character.webp"
                alt={L('Nhân vật BestMario giơ ngón tay cái', '엄지를 든 베스트마리오 캐릭터', 'BestMario mascot giving a thumbs up')}
                width="320"
                height="535"
                loading="lazy"
                className="bmb-float relative h-[110%] w-auto max-w-none md:h-[104%] md:w-full md:max-w-full object-contain object-bottom translate-y-6 drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)]"
              />
            </div>

            {/* 카피 */}
            <div className="px-6 sm:px-10 pb-10 md:py-14 lg:py-16 space-y-5">
              <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-300 animate-pulse" />
                {L('Dịch vụ mới · BestMario', '새 서비스 · 베스트마리오', 'New service · BestMario')}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-[1.15] break-keep">
                {L('Thợ chuyên nghiệp ', '전문 기술자가 ', 'Verified pros ')}
                <span className="bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
                  {L('đến tận nhà bạn', '직접 방문합니다', 'come to your door')}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed break-keep max-w-xl">
                {L(
                  'Điện, nước, điều hòa, nội thất, chống thấm và nhiều hạng mục khác tại Hà Nội. Gửi yêu cầu, nhận báo giá, thanh toán an toàn.',
                  '전기·배관·에어컨·인테리어·방수까지 하노이 13개 분야. 신청하고, 견적 받고, 안전하게 결제하세요.',
                  '13 home-service categories in Hanoi, from electrical to waterproofing. Request, compare quotes and pay safely.'
                )}
              </p>

              <ul className="flex flex-wrap gap-2">
                {BESTMARIO_CATEGORIES.slice(0, SHOWN_CHIPS).map((c) => (
                  <li key={c.en} className="text-xs font-semibold text-slate-200 bg-navy-950/70 border border-navy-700 rounded-full px-3 py-1.5">
                    <span className="mr-1">{c.icon}</span>{L(c.vi, c.ko, c.en)}
                  </li>
                ))}
                <li className="text-xs font-bold text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5">+{rest}</li>
              </ul>

              <ul className="flex flex-wrap gap-x-5 gap-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-1.5"><BadgeCheck className="w-4 h-4 text-emerald-400" />{L('Kỹ thuật viên xác minh', '인증된 기술자', 'Verified pros')}</li>
                <li className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-emerald-400" />{L('Thanh toán được bảo vệ', '안전 결제·정산', 'Protected payments')}</li>
                <li className="flex items-center gap-1.5"><Languages className="w-4 h-4 text-emerald-400" />{L('Hàn · Anh · Việt', '한·영·베트남어', 'KO · EN · VI')}</li>
              </ul>

              <div className="flex flex-wrap gap-3 pt-1">
                <a
                  href={home}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl shadow-gold-glow transition-colors"
                >
                  {L('Gửi yêu cầu dịch vụ', '서비스 신청하기', 'Request a service')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
                <a
                  href={apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center border border-navy-600 hover:border-gold-500/60 text-slate-100 font-bold px-6 py-3.5 rounded-xl transition-colors"
                >
                  {L('Đăng ký làm kỹ thuật viên', '기술자로 등록하기', 'Register as a technician')}
                </a>
                <Link
                  to="/services/bestmario"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center text-gold-400 hover:text-gold-300 font-bold px-1 py-3.5 underline underline-offset-4"
                >
                  {L('Tìm hiểu thêm', '자세히 보기', 'Learn more')}
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
