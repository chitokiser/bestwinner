import React, { useEffect, useRef, useState } from 'react';
import { BESTMARIO_CATEGORIES } from '../data/bestmarioCategories';
import { Link } from 'react-router-dom';
import {
  ExternalLink, ShieldCheck, Camera, BellRing, Languages, Ticket, BadgeCheck,
  ClipboardList, MessageSquareQuote, Wallet, Wrench, ArrowRight, CheckCheck, MapPin,
} from 'lucide-react';

const MARIO_URL = 'https://bestmario.netlify.app';
const CATEGORIES = BESTMARIO_CATEGORIES;

// 스크롤하면 부드럽게 나타나는 블록
function Reveal({ children, delay = 0, className = '' }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined') { setShown(true); return undefined; }
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setShown(true); io.disconnect(); }
    }, { threshold: 0.12 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none ${shown ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} ${className}`}
    >
      {children}
    </div>
  );
}

// 베스트마리오(하노이 홈서비스 마켓플레이스) 소개 + 바로가기 페이지
export default function BestMarioPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  const L = (vi, ko, en) => (isVi ? vi : isKo ? ko : en);
  const loc = isVi ? 'vi' : isKo ? 'ko' : 'en';
  const home = `${MARIO_URL}/${loc}`;
  const apply = `${MARIO_URL}/${loc}/apply`;

  const steps = [
    {
      icon: ClipboardList,
      title: L('Gửi yêu cầu', '서비스 신청', 'Request a service'),
      desc: L(
        'Chọn hạng mục, mô tả sự cố và đính kèm ảnh hoặc bản vẽ. Chỉ mất vài phút.',
        '분야를 고르고 상황을 적은 뒤 사진이나 도면을 올리면 끝입니다. 몇 분이면 충분합니다.',
        'Pick a category, describe the job and attach photos or drawings. It takes a few minutes.'
      ),
    },
    {
      icon: MessageSquareQuote,
      title: L('Báo giá & chọn thợ', '견적 받고 기술자 선택', 'Get quotes, pick a pro'),
      desc: L(
        'Kỹ thuật viên trao đổi và gửi báo giá ngay trên yêu cầu của bạn. Bạn so sánh rồi chọn.',
        '기술자가 신청서에서 바로 질문하고 견적을 보냅니다. 비교해 보고 마음에 드는 기술자를 고르세요.',
        'Technicians ask questions and send quotes right on your request. Compare, then choose.'
      ),
    },
    {
      icon: Wallet,
      title: L('Thanh toán an toàn', '안전 결제·정산', 'Safe payment & payout'),
      desc: L(
        'Tiền được chuyển trước vào tài khoản quản lý của nền tảng. Khi hoàn tất, thợ nhận tiền sau khi trừ phí.',
        '결제금은 먼저 플랫폼 관리계좌에 입금되고, 작업이 끝나면 수수료를 뺀 금액이 기술자에게 정산됩니다.',
        'Your payment first goes to the platform account. When the job is done, the technician is paid minus the fee.'
      ),
    },
  ];

  const features = [
    {
      icon: BadgeCheck,
      title: L('Kỹ thuật viên được xác minh', '인증된 기술자', 'Verified technicians'),
      desc: L('Hồ sơ kỹ thuật viên được nền tảng xét duyệt trước khi nhận việc.', '플랫폼이 심사해 승인한 기술자만 일을 받습니다.', 'Only technicians approved by the platform can take jobs.'),
    },
    {
      icon: ShieldCheck,
      title: L('Thanh toán được bảo vệ', '안전한 결제 구조', 'Protected payments'),
      desc: L('Tiền chỉ chuyển cho thợ sau khi công việc hoàn tất.', '작업이 끝난 뒤에야 기술자에게 정산됩니다.', 'The technician is paid only after the job is done.'),
    },
    {
      icon: Camera,
      title: L('Báo giá bằng ảnh & bản vẽ', '사진·도면으로 정확한 견적', 'Quotes from photos & drawings'),
      desc: L('Trao đổi trước khi chọn thợ, đính kèm ảnh để báo giá sát thực tế.', '기술자를 고르기 전에 사진과 도면을 주고받아 견적이 정확해집니다.', 'Exchange photos and drawings before you choose, so quotes match the real job.'),
    },
    {
      icon: BellRing,
      title: L('Thông báo tức thì', '실시간 알림', 'Instant notifications'),
      desc: L('Nhận thông báo khi có báo giá, khi thợ được phân công và khi đã xác nhận thanh toán.', '견적 도착, 기술자 배정, 입금 확인을 알림으로 바로 알려 드립니다.', 'Get notified when a quote arrives, a technician is assigned and your payment is confirmed.'),
    },
    {
      icon: Languages,
      title: L('Tiếng Hàn · Anh · Việt', '한국어·영어·베트남어', 'Korean · English · Vietnamese'),
      desc: L('Giao diện ba ngôn ngữ, người Hàn ở Hà Nội dùng dễ dàng.', '3개 국어로 쓸 수 있어 하노이 교민도 편하게 이용합니다.', 'Three languages, built for expats and locals in Hanoi.'),
    },
    {
      icon: Ticket,
      title: L('Vé thưởng BT', 'BT 보너스 티켓', 'BT bonus tickets'),
      desc: L('Dùng dịch vụ để tích lũy BT và đổi ưu đãi của BestClub.', '서비스를 이용하면 BT가 쌓이고, 베스트클럽 혜택으로 교환합니다.', 'Earn BT with each service and redeem BestClub perks.'),
    },
  ];

  const related = [
    { to: '/business/elevator', label: L('Thang máy', '엘리베이터', 'Elevator') },
    { to: '/business/waterproofing', label: L('Chống thấm', '방수', 'Waterproofing') },
    { to: '/business/interior', label: L('Nội thất', '인테리어', 'Interior') },
  ];

  return (
    <div className="pt-6">
      <style>{`
        @keyframes bm-float { 0%,100% { transform: translateY(0) rotate(-1.5deg); } 50% { transform: translateY(-10px) rotate(-1.5deg); } }
        .bm-float { animation: bm-float 6s ease-in-out infinite; }
        @keyframes bm-pop { 0% { opacity: 0; transform: translateY(8px) scale(.96); } 100% { opacity: 1; transform: none; } }
        .bm-pop { opacity: 0; animation: bm-pop .5s ease-out forwards; }
        @media (prefers-reduced-motion: reduce) { .bm-float, .bm-pop { animation: none; opacity: 1; } }
      `}</style>

      {/* 경로 표시 */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-gold-400">{L('Trang chủ', '홈', 'Home')}</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{L('Dịch vụ', '서비스', 'Services')}</span>
          <span>/</span>
          <span className="text-gold-400 font-bold">{L('BestMario', '베스트마리오', 'BestMario')}</span>
        </div>
      </div>

      {/* 첫 화면 */}
      <section className="relative overflow-hidden bg-navy-950 border-b border-navy-800">
        <div className="pointer-events-none absolute -top-32 -left-24 w-[28rem] h-[28rem] rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-[32rem] h-[32rem] rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-wide text-amber-300 bg-amber-500/10 border border-amber-500/30 rounded-full px-3 py-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {L('Dịch vụ tại nhà · Hà Nội', '하노이 홈서비스', 'Home services · Hanoi')}
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl font-black text-white leading-[1.15] break-keep">
              {L('Thợ chuyên nghiệp ', '전문 기술자가 ', 'Verified pros ')}
              <span className="bg-gradient-to-r from-amber-300 via-gold-400 to-amber-500 bg-clip-text text-transparent">
                {L('đến tận nhà bạn', '직접 방문합니다', 'come to your door')}
              </span>
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl break-keep">
              {L(
                'BestMario kết nối bạn với kỹ thuật viên cho điện, nước, điều hòa và nhiều hạng mục khác tại Hà Nội. Gửi yêu cầu, nhận báo giá, thanh toán an toàn. Dịch vụ thuộc hệ sinh thái BEST winner và BestClub.',
                '베스트마리오는 전기·배관·에어컨을 비롯한 13개 분야의 기술자를 하노이에서 바로 연결해 드립니다. 신청하고, 견적 받고, 안전하게 결제하세요. 베스트위너·베스트클럽 생태계의 서비스입니다.',
                'BestMario connects you with technicians across 13 categories in Hanoi, from electrical and plumbing to air conditioning. Request, compare quotes and pay safely. A service of the BEST winner and BestClub ecosystem.'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
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
                href={home}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-navy-700 hover:border-gold-500/60 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                {L('Báo giá ngay', '즉시 견적 받기', 'Get an instant quote')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5"><CheckCheck className="w-4 h-4 text-emerald-400" />{L('Kỹ thuật viên xác minh', '인증된 기술자', 'Verified pros')}</li>
              <li className="flex items-center gap-1.5"><CheckCheck className="w-4 h-4 text-emerald-400" />{L('Thanh toán được bảo vệ', '안전 결제·정산', 'Protected payments')}</li>
              <li className="flex items-center gap-1.5"><CheckCheck className="w-4 h-4 text-emerald-400" />{L('Hàn · Anh · Việt', '한·영·베트남어', 'KO · EN · VI')}</li>
            </ul>
          </div>

          {/* 휴대폰 화면 모형 (그림 파일 없이 CSS로 구성) */}
          <div className="relative mx-auto w-full max-w-[19rem]" aria-hidden="true">
            <div className="bm-float rounded-[2.2rem] border border-navy-700 bg-navy-900 p-3 shadow-2xl shadow-black/50">
              <div className="rounded-[1.7rem] bg-navy-950 overflow-hidden border border-navy-800">
                <div className="px-4 py-3 bg-gradient-to-r from-amber-500 to-gold-500 text-navy-950">
                  <p className="text-[11px] font-bold opacity-80">BestMario</p>
                  <p className="font-black text-sm">{L('Yêu cầu của tôi', '내 신청서', 'My request')}</p>
                </div>
                <div className="p-3 space-y-2.5">
                  <div className="bm-pop rounded-xl bg-navy-900 border border-navy-800 p-3" style={{ animationDelay: '0.2s' }}>
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="text-base">❄️</span>
                      <span className="font-bold text-white">{L('Điều hòa không lạnh', '에어컨이 시원하지 않아요', 'AC is not cooling')}</span>
                    </div>
                    <div className="mt-2 flex gap-1.5">
                      <div className="h-10 flex-1 rounded-md bg-gradient-to-br from-slate-700 to-slate-800" />
                      <div className="h-10 flex-1 rounded-md bg-gradient-to-br from-slate-600 to-slate-800" />
                      <div className="h-10 flex-1 rounded-md bg-gradient-to-br from-slate-700 to-slate-900" />
                    </div>
                  </div>
                  <div className="bm-pop rounded-xl bg-cyan-500/10 border border-cyan-500/30 p-3" style={{ animationDelay: '0.8s' }}>
                    <p className="text-[11px] text-cyan-300 font-bold">{L('Báo giá mới', '새 견적 도착', 'New quote')}</p>
                    <p className="mt-0.5 text-white font-black">450.000₫ <span className="text-xs font-semibold text-slate-400">· 2{L(' giờ', '시간', ' h')}</span></p>
                  </div>
                  <div className="bm-pop rounded-xl bg-emerald-500/10 border border-emerald-500/30 p-3 flex items-center gap-2" style={{ animationDelay: '1.4s' }}>
                    <CheckCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                    <p className="text-xs text-emerald-200 font-bold">{L('Đã xác nhận thanh toán', '입금 확인 완료', 'Payment confirmed')}</p>
                  </div>
                  <div className="bm-pop rounded-xl bg-navy-900 border border-navy-800 p-3 flex items-center gap-2" style={{ animationDelay: '2s' }}>
                    <Wrench className="w-4 h-4 text-gold-400 shrink-0" />
                    <p className="text-xs text-slate-300">{L('Kỹ thuật viên đang trên đường tới', '기술자가 방문 준비 중입니다', 'Technician is on the way')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 서비스 분야 */}
      <section className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <p className="text-sm font-semibold text-amber-300">{L('13 hạng mục', '13개 서비스 분야', '13 service categories')}</p>
            <h2 className="mt-2 text-2xl sm:text-3xl font-black text-white break-keep">
              {L('Từ sửa chữa nhỏ đến cải tạo cả căn hộ', '작은 수리부터 집 전체 리모델링까지', 'From small repairs to full renovations')}
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c.en} delay={(i % 4) * 70}>
                <a
                  href={home}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 h-full rounded-2xl border border-navy-800 bg-navy-950/70 hover:border-gold-500/50 hover:-translate-y-0.5 px-4 py-3.5 transition-all"
                >
                  <span className="text-2xl shrink-0">{c.icon}</span>
                  <span className="text-sm font-bold text-slate-100 group-hover:text-gold-400 transition-colors leading-snug break-keep">
                    {L(c.vi, c.ko, c.en)}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 이용 방법 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-black text-white">{L('Cách sử dụng', '이용 방법', 'How it works')}</h2>
          </Reveal>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li key={s.title}>
                <Reveal delay={i * 120} className="h-full">
                  <div className="relative h-full bg-navy-900 border border-navy-800 rounded-2xl p-6">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-full bg-gold-500 text-navy-950 font-black flex items-center justify-center">{i + 1}</span>
                      <s.icon className="w-6 h-6 text-amber-300" />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed break-keep">{s.desc}</p>
                    {i < steps.length - 1 && (
                      <ArrowRight className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 w-5 h-5 text-navy-600" />
                    )}
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 믿을 수 있는 이유 */}
      <section className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-black text-white break-keep">
              {L('Vì sao chọn BestMario', '베스트마리오가 편한 이유', 'Why BestMario')}
            </h2>
          </Reveal>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 3) * 90}>
                <div className="h-full flex gap-4 p-5 rounded-2xl border border-navy-800 bg-navy-950/60 hover:border-gold-500/40 transition-colors">
                  <span className="w-11 h-11 rounded-xl bg-amber-500/10 border border-amber-500/25 flex items-center justify-center shrink-0">
                    <f.icon className="w-5 h-5 text-amber-300" />
                  </span>
                  <div>
                    <h3 className="font-bold text-white">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-300 leading-relaxed break-keep">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 기술자 모집 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <Reveal>
            <div className="relative overflow-hidden rounded-3xl border border-gold-500/30 bg-gradient-to-br from-navy-900 via-navy-900 to-amber-950/40 p-8 sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 w-64 h-64 rounded-full bg-gold-500/10 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1fr_auto] gap-6 items-center">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-white break-keep">
                    {L('Bạn là kỹ thuật viên? Nhận việc cùng BestMario', '기술자이신가요? 베스트마리오와 함께하세요', 'Are you a technician? Work with BestMario')}
                  </h2>
                  <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed break-keep">
                    {L(
                      'Đăng ký hồ sơ, nhận yêu cầu phù hợp với chuyên môn, gửi báo giá và nhận thanh toán sau khi hoàn tất công việc.',
                      '기술자로 등록하면 전문 분야에 맞는 신청서를 받고, 견적을 보내 일을 따낼 수 있습니다. 작업이 끝나면 수수료를 뺀 금액이 정산됩니다.',
                      'Register, receive requests that fit your skills, send quotes and get paid after the job is done.'
                    )}
                  </p>
                </div>
                <a
                  href={apply}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl transition-colors whitespace-nowrap"
                >
                  {L('Đăng ký làm kỹ thuật viên', '기술자로 등록하기', 'Register as a technician')}
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 베스트위너 연결 + 마무리 */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 text-center">
          <Reveal>
            <h2 className="text-2xl sm:text-3xl font-black text-white break-keep">
              {L('Cùng hệ sinh thái BEST winner', '베스트위너 생태계와 함께', 'Part of the BEST winner ecosystem')}
            </h2>
            <p className="mt-3 text-slate-300 max-w-2xl mx-auto leading-relaxed break-keep">
              {L(
                'Thang máy, chống thấm và nội thất cũng nằm trong các hạng mục của BestMario. Tìm hiểu thêm về từng mảng kinh doanh của BEST winner.',
                '엘리베이터, 방수, 인테리어도 베스트마리오의 서비스 분야에 들어 있습니다. 베스트위너의 각 사업 분야도 함께 살펴보세요.',
                'Elevators, waterproofing and interiors are all categories on BestMario. Explore each BEST winner business unit too.'
              )}
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              {related.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => window.scrollTo({ top: 0 })}
                  className="inline-flex items-center bg-navy-800 hover:bg-navy-700 text-white font-bold px-5 py-3 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-colors"
                >
                  {r.label}
                </Link>
              ))}
              <Link
                to="/services/bestclub"
                onClick={() => window.scrollTo({ top: 0 })}
                className="inline-flex items-center text-gold-400 hover:text-gold-300 font-bold px-2 py-3 underline underline-offset-4"
              >
                {L('Tìm hiểu BestClub', '베스트클럽 알아보기', 'Learn about BestClub')}
              </Link>
            </div>
            <a
              href={home}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-8 py-4 rounded-xl shadow-gold-glow transition-colors"
            >
              {L('Vào BestMario', '베스트마리오 바로가기', 'Open BestMario')}
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
