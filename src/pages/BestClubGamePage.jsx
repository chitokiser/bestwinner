import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Swords, MapPin, Ticket, ArrowRight, ArrowDown, TrendingUp } from 'lucide-react';

const GAME_URL = 'https://bestclubvn.netlify.app/merchants';

// 베스트클럽 위치기반 게임(몬스터 사냥·보물찾기) 소개 + GP → Point → BM 교환 안내
// 전환식은 베스트클럽 마이페이지 안내 기준: GP → Point = GP × 레벨 ÷ 10, Point → BM = Point ÷ 10
export default function BestClubGamePage({ t }) {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  const L = (vi, ko, en) => (isVi ? vi : isKo ? ko : en);

  const activities = [
    {
      icon: Swords,
      img: '/images/bestclub/game-monster.png',
      title: L('Săn quái vật', '몬스터 사냥', 'Hunt monsters'),
      desc: L(
        'Quái vật xuất hiện trên bản đồ thật quanh bạn. Đi tới gần, chiến đấu và nhận điểm game (GP).',
        '내 주변 실제 지도 위에 몬스터가 나타납니다. 가까이 걸어가 싸워 이기면 게임포인트(GP)를 얻습니다.',
        'Monsters appear on the real map around you. Walk up, fight, and earn game points (GP).'
      ),
    },
    {
      icon: MapPin,
      img: '/images/bestclub/game-item.png',
      title: L('Tìm kho báu', '보물찾기', 'Find treasure'),
      desc: L(
        'Kho báu được giấu quanh các cửa hàng thành viên. Đến đúng chỗ, xác nhận GPS để mở.',
        '가맹점 주변에 보물이 숨겨져 있습니다. 그 자리에 가서 GPS로 위치를 확인하면 보물을 엽니다.',
        'Treasure is hidden around member stores. Go to the spot and check in by GPS to open it.'
      ),
    },
    {
      icon: Ticket,
      title: L('Đổi voucher', '상품교환권', 'Redeem vouchers'),
      desc: L(
        'Gom kho báu tìm được để đổi lấy voucher quà tặng.',
        '모은 보물로 상품교환권을 받을 수 있습니다.',
        'Trade the treasure you collect for gift vouchers.'
      ),
    },
  ];

  const flow = [
    { code: 'GP', name: L('Điểm game', '게임포인트', 'Game points'), note: L('Nhận khi săn quái và tìm kho báu', '몬스터 사냥·보물찾기로 획득', 'Earned by hunting and treasure') },
    { code: 'Point', name: L('Điểm BestClub', '베스트클럽 포인트', 'BestClub points'), note: L('GP × cấp độ ÷ 10', 'GP × 레벨 ÷ 10', 'GP × level ÷ 10') },
    { code: 'BM', name: 'BestMoney', note: L('Point ÷ 10 — thanh toán tại cửa hàng', 'Point ÷ 10 — 가맹점 결제에 사용', 'Point ÷ 10 — spend at member stores') },
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
          <span className="text-gold-400 font-bold">{L('Game BestClub', '베스트클럽 게임', 'BestClub game')}</span>
        </div>
      </div>

      {/* 첫 화면 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-20 grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div>
            <p className="text-sm font-semibold text-slate-400 mb-3">{L('Game theo vị trí của BestClub', '베스트클럽 위치기반 게임', 'BestClub location game')}</p>
            <h1 className="text-4xl sm:text-5xl font-black text-white leading-tight break-keep">
              {L(
                'Đi dạo, săn quái, tìm kho báu và đổi thành tiền mua sắm',
                <>몬스터 잡고 보물 찾고<br />가맹점 머니로 바꾸세요</>,
                'Walk, hunt monsters, find treasure, and turn it into store money'
              )}
            </h1>
            <p className="mt-5 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl break-keep">
              {L(
                'Điểm game (GP) bạn kiếm được đổi sang Point, rồi sang BestMoney (BM) để thanh toán tại cửa hàng thành viên BestClub — kể cả BEST winner.',
                '게임에서 모은 게임포인트(GP)는 포인트로, 포인트는 다시 베스트머니(BM)로 바꿀 수 있습니다. BM은 베스트위너를 포함한 베스트클럽 가맹점에서 결제에 씁니다.',
                'Game points (GP) convert to Points, then to BestMoney (BM), which you spend at BestClub member stores, BEST winner included.'
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-6 py-3.5 rounded-xl transition-colors"
              >
                {L('Chơi ngay', '게임 시작하기', 'Start playing')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link
                to="/services/bestclub"
                className="inline-flex items-center border border-navy-700 hover:border-gold-500/60 text-slate-200 font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                {L('BestClub là gì?', '베스트클럽이란?', 'What is BestClub?')}
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <img
              src="/images/bestclub/game-dungeon.png"
              alt={L('Bản đồ game BestClub', '베스트클럽 게임 지도', 'BestClub game map')}
              className="w-full aspect-square object-cover rounded-2xl border border-navy-800"
              style={{ imageRendering: 'pixelated' }}
            />
            <img
              src="/images/bestclub/game-dragon.png"
              alt=""
              aria-hidden="true"
              className="absolute -bottom-6 -left-4 w-28 h-28 sm:w-36 sm:h-36"
              style={{ imageRendering: 'pixelated' }}
            />
          </div>
        </div>
      </section>

      {/* 게임에서 하는 일 */}
      <section className="bg-navy-900 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{L('Trong game', '게임에서 하는 일', 'What you do in the game')}</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {activities.map((a) => (
              <div key={a.title} className="bg-navy-950 border border-navy-800 rounded-2xl p-6">
                <div className="flex items-center justify-between">
                  <a.icon className="w-6 h-6 text-gold-400" />
                  {a.img && <img src={a.img} alt="" aria-hidden="true" className="w-12 h-12" style={{ imageRendering: 'pixelated' }} loading="lazy" />}
                </div>
                <h3 className="mt-4 text-lg font-bold text-white">{a.title}</h3>
                <p className="mt-2 text-sm text-slate-300 leading-relaxed break-keep">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 교환 흐름 */}
      <section className="bg-navy-950 border-b border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{L('Đổi điểm game sang tiền mua sắm', '게임포인트를 머니로 바꾸는 방법', 'Turning game points into money')}</h2>
          <ol className="mt-8 flex flex-col md:flex-row md:items-stretch gap-3">
            {flow.map((f, i) => (
              <React.Fragment key={f.code}>
                <li className="flex-1 rounded-2xl border border-navy-800 bg-navy-900/60 p-6">
                  <p className="text-3xl font-black text-gold-400">{f.code}</p>
                  <p className="mt-1 font-bold text-white">{f.name}</p>
                  <p className="mt-2 text-sm text-slate-300">{f.note}</p>
                </li>
                {i < flow.length - 1 && (
                  <li aria-hidden="true" className="flex items-center justify-center text-slate-500">
                    <ArrowRight className="hidden md:block w-6 h-6" />
                    <ArrowDown className="md:hidden w-6 h-6" />
                  </li>
                )}
              </React.Fragment>
            ))}
          </ol>
          <div className="mt-6 rounded-2xl border border-gold-500/30 bg-gold-500/5 p-5 text-sm text-slate-200 leading-relaxed break-keep">
            <p className="font-bold text-gold-400">{L('Ví dụ (cấp 1)', '예시 (레벨 1)', 'Example (level 1)')}</p>
            <p className="mt-1">
              {L(
                '10.000 GP → 1.000 Point → 100 BM. Cấp càng cao, cùng số GP đổi được càng nhiều Point.',
                'GP 10,000 → 포인트 1,000 → BM 100. 레벨이 높을수록 같은 GP로 더 많은 포인트를 받습니다.',
                '10,000 GP → 1,000 Points → 100 BM. The higher your level, the more Points the same GP buys.'
              )}
            </p>
            <p className="mt-2 text-xs text-slate-400">
              {L(
                'Tỷ lệ quy đổi theo chính sách hiện tại của BestClub và có thể thay đổi.',
                '전환 비율은 현재 베스트클럽 정책 기준이며 바뀔 수 있습니다.',
                'Rates follow current BestClub policy and may change.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 레벨업 */}
      <section className="bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <TrendingUp className="w-8 h-8 text-gold-400" />
            <h2 className="mt-3 text-2xl sm:text-3xl font-black text-white break-keep">
              {L('Mua sắm để lên cấp, chơi game để nhận nhiều hơn', '가맹점 결제로 레벨업, 게임 보상은 더 크게', 'Level up by shopping, earn more from the game')}
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed break-keep">
              {L(
                'Mỗi lần thanh toán tại cửa hàng thành viên, bạn nhận kinh nghiệm (EXP). Đủ EXP thì lên cấp, và cấp cao hơn giúp GP đổi được nhiều Point hơn.',
                '가맹점에서 결제할 때마다 경험치(EXP)가 쌓이고, 경험치가 차면 레벨이 오릅니다. 레벨이 높을수록 GP를 포인트로 바꿀 때 더 많이 받습니다.',
                'Every payment at a member store earns experience (EXP). Enough EXP raises your level, and a higher level converts GP into more Points.'
              )}
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={GAME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gold-500 hover:bg-gold-400 text-navy-950 font-black px-5 py-3 rounded-xl transition-colors"
              >
                {L('Chơi ngay', '게임 시작하기', 'Start playing')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <Link
                to="/services/merchant-products"
                className="inline-flex items-center text-gold-400 hover:text-gold-300 font-bold px-2 py-3 underline underline-offset-4"
              >
                {L('Dùng BM mua sản phẩm BEST winner', 'BM으로 베스트위너 상품 보기', 'Spend BM on BEST winner products')}
              </Link>
            </div>
          </div>
          <table className="w-full text-sm text-left border border-navy-800 rounded-2xl overflow-hidden">
            <caption className="text-left text-slate-400 text-xs mb-2">{L('EXP cần để lên cấp', '레벨업에 필요한 누적 경험치', 'Total EXP needed to level up')}</caption>
            <thead className="bg-navy-950 text-slate-300">
              <tr><th className="px-4 py-3 font-semibold">{L('Cấp', '레벨', 'Level')}</th><th className="px-4 py-3 font-semibold">EXP</th></tr>
            </thead>
            <tbody className="text-white">
              {[1, 2, 3, 4].map((lv) => (
                <tr key={lv} className="border-t border-navy-800">
                  <td className="px-4 py-3">Lv.{lv} → Lv.{lv + 1}</td>
                  <td className="px-4 py-3 font-bold">{((lv + 1) ** 2 * 10000).toLocaleString(isVi ? 'vi-VN' : 'en-US')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
