import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Wallet, CreditCard, Gift, Map, ShoppingBag, Newspaper, Ticket, Store } from 'lucide-react';

const BESTCLUB_URL = 'https://bestclubvn.netlify.app';

// 베스트클럽(가맹점 연합 포인트 플랫폼) 소개 + 바로가기 페이지
export default function BestClubPage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  const L = (vi, ko, en) => (isVi ? vi : isKo ? ko : en);

  const steps = [
    {
      icon: Wallet,
      title: L('Nạp tiền BM', '머니 충전', 'Top up BM'),
      desc: L(
        'Nạp tiền BM vào tài khoản BestClub để thanh toán tại cửa hàng thành viên.',
        '베스트클럽 계정에 머니(BM)를 충전해 두면 가맹점 어디서든 바로 결제할 수 있습니다.',
        'Top up BM in your BestClub account and pay at any member store.'
      ),
    },
    {
      icon: CreditCard,
      title: L('Thanh toán tại cửa hàng', '가맹점에서 결제', 'Pay at a member store'),
      desc: L(
        'Quét mã QR thanh toán tại cửa hàng thành viên, online hoặc offline.',
        '매장에서 결제 QR을 찍거나 온라인으로 결제합니다. 온라인·오프라인 모두 같은 방식입니다.',
        'Scan the store QR or pay online. It works the same in store and online.'
      ),
    },
    {
      icon: Gift,
      title: L('Nhận jackpot điểm', '포인트 잭팟 받기', 'Get the points jackpot'),
      desc: L(
        'Mỗi lần thanh toán, bạn nhận jackpot điểm theo tỷ lệ số tiền và vé thưởng (BT).',
        '결제할 때마다 결제 금액에 비례한 포인트 잭팟과 보너스티켓(BT)을 받습니다.',
        'Every payment earns a points jackpot in proportion to the amount, plus bonus tickets (BT).'
      ),
    },
  ];

  const features = [
    {
      icon: Map,
      href: `${BESTCLUB_URL}/merchants.html`,
      title: L('Bản đồ kho báu', '보물지도', 'Treasure map'),
      desc: L(
        'Tìm cửa hàng thành viên quanh bạn trên bản đồ và chơi game theo vị trí.',
        '내 주변 가맹점을 지도에서 찾고, 위치 기반 게임으로 보물을 모읍니다.',
        'Find member stores near you on the map and play the location game.'
      ),
    },
    {
      icon: ShoppingBag,
      href: `${BESTCLUB_URL}/mall`,
      title: L('BestClub Mall', '베스트클럽 쇼핑몰', 'BestClub Mall'),
      desc: L(
        'Mua sản phẩm và dịch vụ của các cửa hàng thành viên bằng BM.',
        '가맹점들의 상품과 서비스를 머니(BM)로 구매합니다.',
        'Buy member stores’ products and services with BM.'
      ),
    },
    {
      icon: Ticket,
      href: `${BESTCLUB_URL}/`,
      title: L('Sự kiện & coupon', '이벤트·쿠폰', 'Events & coupons'),
      desc: L(
        'Nhận coupon và voucher ưu đãi từ các cửa hàng thành viên.',
        '가맹점이 여는 이벤트에서 쿠폰과 바우처를 받습니다.',
        'Collect coupons and vouchers from member store events.'
      ),
    },
    {
      icon: Newspaper,
      href: `${BESTCLUB_URL}/kca_webzine`,
      title: L('Tạp chí BestClub', '베스트클럽 웹진', 'BestClub webzine'),
      desc: L(
        'Tin tức cửa hàng thành viên và đời sống, được biên tập như báo chí.',
        '가맹점 소식과 생활 정보를 기자가 취재한 기사로 읽습니다.',
        'Member store news and local life, written as reported articles.'
      ),
    },
  ];

  return (
    <div className="pt-6">
      {/* 경로 표시 */}
      <div className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center space-x-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-gold-400">{L('Trang chủ', '홈', 'Home')}</Link>
          <span>/</span>
          <span className="text-cyan-400 font-semibold">{L('Dịch vụ', '서비스', 'Services')}</span>
          <span>/</span>
          <span className="text-gold-400 font-bold">{L('BestClub', '베스트클럽', 'BestClub')}</span>
        </div>
      </div>

      {/* 소개 첫 화면 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-3">BestClub Alliance</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight break-keep">
              {L(
                'Thanh toán tại cửa hàng thành viên, nhận điểm và jackpot',
                '가맹점에서 결제하면 포인트에 잭팟까지',
                'Pay at member stores, earn points and a jackpot'
              )}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl break-keep">
              {L(
                'BestClub là nền tảng điểm thưởng liên minh các cửa hàng thành viên, gộp mua sắm online và offline vào một ví điểm. BEST winner Vn Group là cửa hàng thành viên của BestClub.',
                '베스트클럽은 여러 가맹점이 함께 쓰는 연합 포인트 플랫폼입니다. 온라인과 오프라인 결제가 하나의 포인트로 모입니다. BEST winner Vn Group도 베스트클럽 가맹점입니다.',
                'BestClub is a points platform shared by an alliance of member stores, bringing online and offline spending into one wallet. BEST winner Vn Group is a BestClub member store.'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={BESTCLUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl transition-colors"
              >
                {L('Vào BestClub', '베스트클럽 바로가기', 'Open BestClub')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href={`${BESTCLUB_URL}/mypage.html`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-navy-700 hover:border-gold-500/60 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                {L('Đăng ký / Đăng nhập', '가입·로그인', 'Sign up or log in')}
              </a>
            </div>
          </div>
          <img
            src="/images/bestclub/hero.png"
            alt={L('Thanh toán BestClub và jackpot điểm', '베스트클럽 결제와 포인트 잭팟', 'BestClub payment and points jackpot')}
            className="w-full aspect-video object-cover rounded-2xl border border-navy-800"
          />
        </div>
      </section>

      {/* 이용 순서 */}
      <section className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{L('Cách sử dụng', '이용 방법', 'How it works')}</h2>
          <ol className="mt-8 grid md:grid-cols-3 gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className="bg-navy-950 border border-navy-800 rounded-2xl p-6">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-full bg-gold-500 text-navy-950 font-black flex items-center justify-center">{i + 1}</span>
                  <s.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed break-keep">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 베스트클럽에서 할 수 있는 것 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{L('Trên BestClub', '베스트클럽에서 할 수 있는 것', 'What you can do on BestClub')}</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <a
                key={f.title}
                href={f.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-4 p-5 rounded-2xl border border-navy-800 hover:border-gold-500/50 bg-navy-900/60 transition-colors"
              >
                <f.icon className="w-7 h-7 text-gold-400 shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-white group-hover:text-gold-400 transition-colors flex items-center">
                    {f.title}
                    <ExternalLink className="w-3.5 h-3.5 ml-1.5 text-slate-500" />
                  </h3>
                  <p className="mt-1.5 text-sm text-slate-300 leading-relaxed break-keep">{f.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 베스트위너와 베스트클럽 */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <img
            src="/images/bestclub/jackpot.png"
            alt={L('Ưu đãi cửa hàng thành viên BestClub', '베스트클럽 가맹점 혜택', 'BestClub member store benefits')}
            className="w-full aspect-video object-cover rounded-2xl border border-navy-800"
            loading="lazy"
          />
          <div>
            <Store className="w-8 h-8 text-gold-400" />
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white break-keep">
              {L('Mua sản phẩm BEST winner trên BestClub', '베스트위너 상품도 베스트클럽으로', 'Buy BEST winner products through BestClub')}
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed break-keep">
              {L(
                'Sản phẩm và dịch vụ của BEST winner được bán trên BestClub. Thanh toán bằng BM để nhận jackpot điểm và vé thưởng.',
                '베스트위너의 상품과 서비스도 베스트클럽에서 판매합니다. 머니(BM)로 결제하면 포인트 잭팟과 보너스티켓을 똑같이 받습니다.',
                'BEST winner products and services are sold on BestClub. Pay with BM to earn the points jackpot and bonus tickets.'
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                to="/services/merchant-products"
                className="inline-flex items-center bg-navy-800 hover:bg-navy-700 text-white font-bold px-5 py-3 rounded-xl border border-navy-700 transition-colors"
              >
                {L('Xem sản phẩm BEST winner', '베스트위너 가맹점 상품 보기', 'See BEST winner products')}
              </Link>
              <Link
                to="/services/events"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 font-bold px-2 py-3 underline underline-offset-4"
              >
                {L('Sự kiện & voucher', '이벤트·쿠폰 보기', 'Events & vouchers')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
