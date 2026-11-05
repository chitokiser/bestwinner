import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Ticket, Store, Gamepad2, Newspaper, Wrench, ArrowUpRight } from 'lucide-react';

const useL = (t) => {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  return (vi, ko, en) => (isVi ? vi : isKo ? ko : en);
};

// 핵심 사업 분야 위에 놓는 숫자 요약 띠 (사이트 푸터·소개에 이미 적힌 수치만 사용)
export function CoreStatsStrip({ t, unitCount = 8 }) {
  const L = useL(t);
  const stats = [
    { value: String(unitCount), label: L('Lĩnh vực kinh doanh', '핵심 사업 분야', 'Business divisions') },
    { value: '2', label: L('Kỹ sư trưởng Hàn Quốc', '한국인 수석 기술진', 'Korean chief engineers') },
    { value: '15', label: L('Kỹ sư chuyên trách tại Việt Nam', '베트남 전문 엔지니어', 'Vietnamese engineers') },
    { value: '2023', label: L('Năm thành lập', '설립', 'Founded') },
  ];
  return (
    <dl className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-chrome-400/25 bg-navy-900/70 px-4 py-5 text-center">
          <dt className="text-3xl sm:text-4xl font-black bg-gradient-to-b from-gold-300 to-gold-500 bg-clip-text text-transparent">{s.value}</dt>
          <dd className="mt-1 text-xs sm:text-sm font-semibold text-slate-300 break-keep">{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}

// 사업 카드 아래: 서비스 메뉴에 있는 BEST 플랫폼 서비스 바로가기
export function PlatformServicesRow({ t }) {
  const L = useL(t);
  const navigate = useNavigate();

  const items = [
    {
      path: '/services/products', icon: ShoppingBag, name: 'BEST Mall',
      desc: L('Mua sản phẩm & dịch vụ của cửa hàng thành viên bằng BM', '가맹점 상품·서비스를 BM으로 구매', 'Buy member-store products and services with BM'),
    },
    {
      path: '/services/events', icon: Ticket, name: L('Sự kiện & Voucher', '이벤트·쿠폰', 'Events & Vouchers'),
      desc: L('Sảnh coupon và voucher ưu đãi', '쿠폰·바우처 라운지', 'Coupon and voucher lounge'),
    },
    {
      path: '/services/bestclub', icon: Store, name: L('BestClub', '베스트클럽', 'BestClub'),
      desc: L('Nền tảng điểm thưởng liên minh cửa hàng thành viên', '가맹점 연합 포인트·잭팟 플랫폼', 'Alliance points and jackpot platform'),
    },
    {
      path: '/services/bestclub-game', icon: Gamepad2, name: L('Game BestClub', '베스트클럽 게임', 'BestClub Game'),
      desc: L('Săn quái, tìm kho báu, đổi GP sang BM', '몬스터 사냥·보물찾기, GP를 BM으로', 'Monster hunting and treasure, GP to BM'),
    },
    {
      path: '/megazine', icon: Newspaper, name: 'BEST MEGAZINE',
      desc: L('Tạp chí đời sống Hà Nội do AI biên tập', '하노이 생활·맛집 AI 매거진', 'AI lifestyle magazine for Hanoi'),
    },
    {
      path: '/services/bestmario', icon: Wrench, name: L('BestMario', '베스트마리오', 'BestMario'),
      desc: L('Dịch vụ tại nhà Hà Nội, 13 hạng mục', '하노이 홈서비스, 13개 분야 기술자', 'Hanoi home services, 13 categories'),
    },
  ];

  const go = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mt-16">
      <div className="max-w-3xl space-y-2 mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-white break-keep">
          {L('Dịch vụ nền tảng BEST', 'BEST 플랫폼 서비스', 'BEST platform services')}
        </h3>
        <p className="text-sm text-slate-300 break-keep">
          {L(
            'Ngoài hạ tầng xây dựng, hệ sinh thái BEST còn kết nối đời sống hằng ngày.',
            '건축·인프라를 넘어 생활과 연결되는 BEST 생태계입니다.',
            'Beyond construction and infrastructure, the BEST ecosystem connects to everyday life.'
          )}
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((it) => (
          <button
            key={it.path}
            type="button"
            onClick={() => go(it.path)}
            className="group text-left flex items-start gap-4 rounded-2xl border border-navy-800 bg-navy-900/60 hover:border-gold-500/50 hover:-translate-y-0.5 p-5 transition-all"
          >
            <span className="w-11 h-11 rounded-xl bg-gold-500/10 border border-gold-500/25 flex items-center justify-center shrink-0">
              <it.icon className="w-5 h-5 text-gold-400" />
            </span>
            <span className="flex-1 min-w-0">
              <span className="flex items-center justify-between gap-2 font-bold text-white group-hover:text-gold-300 transition-colors">
                {it.name}
                <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-gold-400 shrink-0" />
              </span>
              <span className="mt-1 block text-xs text-slate-300 leading-relaxed break-keep">{it.desc}</span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
