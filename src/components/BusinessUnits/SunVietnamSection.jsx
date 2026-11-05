import React from 'react';
import { ExternalLink, ArrowRight, Factory, Flame, Cpu, Store, ShoppingBag } from 'lucide-react';

const SUN_URL = 'https://sunvietnam.netlify.app/';
const SUN_SHOP_URL = 'https://sunvietnam.netlify.app/shop.html';

const useL = (t) => {
  const isVi = t?.lang === 'vi';
  const isKo = t?.lang === 'ko';
  return { isVi, isKo, L: (vi, ko, en) => (isVi ? vi : isKo ? ko : en) };
};

// 페이지 맨 위에 두는 얇은 링크 띠
export function SunVietnamRibbon({ t }) {
  const { L } = useL(t);
  return (
    <a
      href={SUN_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-gradient-to-r from-red-700 via-red-600 to-amber-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-center gap-3 text-xs sm:text-sm font-bold">
        <img src="/images/sunvietnam/logo.png" alt="" width="22" height="22" className="rounded bg-white p-0.5 shrink-0" />
        <span className="text-center break-keep">
          {L(
            'Cửa hàng vật tư PCCC & an toàn SUN VIETNAM (đại lý chính thức SUNMEDI)',
            '소방·안전 자재 전문몰 SUN VIETNAM (썬메디 베트남 공식 에이전트)',
            'SUN VIETNAM fire & safety supplies store (official SUNMEDI agent)'
          )}
        </span>
        <span className="inline-flex items-center shrink-0 underline underline-offset-4 group-hover:no-underline">
          {L('Truy cập', '바로가기', 'Visit')}
          <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5" />
        </span>
      </div>
    </a>
  );
}

// 썬베트남 소개 + 링크 배너
export default function SunVietnamSection({ t }) {
  const { isVi, isKo, L } = useL(t);

  const cards = [
    {
      icon: Factory,
      title: L('Cung cấp trực tiếp từ nhà sản xuất Hàn Quốc', '한국 제조사 직공급', 'Direct from the Korean maker'),
      desc: L(
        'Vật tư an toàn – y tế và PCCC do SUNMEDI (Hàn Quốc) sản xuất, được đại lý chính thức tại Việt Nam cung cấp.',
        '한국 기업 썬메디(SUNMEDI)가 만든 보건안전·소방 자재를 베트남 공식 에이전트가 공급합니다.',
        'Health-and-safety and fire equipment made by SUNMEDI (Korea), supplied by its official agent in Vietnam.'
      ),
    },
    {
      icon: Flame,
      title: L('Thiết bị PCCC & vật tư an toàn', '소방 장비와 안전 자재', 'Fire equipment & safety supplies'),
      desc: L(
        'Bình chữa cháy, vòi chữa cháy, đầu báo cháy, mũ và đồ bảo hộ, bộ dụng cụ ứng phó thiên tai, cấu hình trọn gói theo nhu cầu.',
        '소화기·소방호스·화재감지기, 안전모·보호구, 재난 대비 키트까지 현장에 필요한 품목을 한 번에 구성합니다.',
        'Extinguishers, fire hoses, detectors, helmets and protective gear, and disaster kits, configured in one order.'
      ),
    },
    {
      icon: Cpu,
      title: L('Giải pháp an toàn thông minh', '스마트 안전 솔루션', 'Smart safety solutions'),
      desc: L(
        'Đề xuất thiết bị theo hiện trường: drone chữa cháy, camera nhiệt, máy đo khí, thiết bị chống rơi ngã.',
        '소방 드론, 열화상 장비, 가스 측정기, 추락방지 장비 등 현장 맞춤 장비를 제안합니다.',
        'Site-specific equipment such as fire drones, thermal cameras, gas detectors and fall-protection gear.'
      ),
    },
    {
      icon: Store,
      title: L('Liên kết BestClub', '베스트클럽 연동', 'Linked with BestClub'),
      desc: L(
        'Đăng nhập bằng Google để trở thành thành viên BestClub. Gửi yêu cầu báo giá để đặt hàng.',
        '구글 로그인으로 가입하면 베스트클럽 회원으로 연결되고, 견적 문의로 주문할 수 있습니다.',
        'Sign in with Google to join BestClub, and place orders through a quote request.'
      ),
    },
  ];

  const chips = [
    L('Bình chữa cháy', '소화기', 'Extinguishers'),
    L('Vòi chữa cháy', '소방호스', 'Fire hoses'),
    L('Đầu báo cháy', '화재감지기', 'Fire detectors'),
    L('Mũ & đồ bảo hộ', '안전모·보호구', 'Helmets & PPE'),
    L('Mặt nạ phòng độc', '호흡보호구', 'Respirators'),
    L('Thiết bị chống rơi ngã', '추락방지 장비', 'Fall protection'),
    L('Máy đo khí', '가스 측정기', 'Gas detectors'),
    L('Drone & camera nhiệt', '소방 드론·열화상', 'Fire drones & thermal'),
    L('Bộ ứng phó thiên tai', '재난 대비 키트', 'Disaster kits'),
    L('Tài liệu đào tạo an toàn', '안전 교육자재', 'Safety training materials'),
  ];

  return (
    <section id="sun-vietnam" className="py-16 bg-navy-900 border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* 소개 */}
        <div className="max-w-3xl space-y-3">
          <span className="inline-flex items-center gap-2 text-xs font-bold tracking-widest text-red-300 bg-red-500/10 border border-red-500/30 rounded-full px-3 py-1">
            SUN VIETNAM · {L('Sun Việt Nam', '썬베트남', 'Sun Vietnam')}
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight break-keep">
            {L('Từ đào tạo an toàn đến thiết bị PCCC', '안전 교육부터 소방 장비까지, 썬베트남', 'From safety training to fire equipment')}
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed break-keep">
            {L(
              'SUN VIETNAM là đại lý chính thức tại Việt Nam của SUNMEDI, doanh nghiệp Hàn Quốc sản xuất vật tư đào tạo an toàn – y tế và vật tư PCCC. Do BEST winner VN vận hành tại Hà Nội và là cửa hàng thành viên của BestClub.',
              '썬베트남은 보건안전 교육자재와 소방자재를 만드는 한국 기업 썬메디(SUNMEDI)의 베트남 공식 에이전트입니다. 베스트위너 VN이 하노이에서 운영하며, 베스트클럽 가맹점으로 연동되어 있습니다.',
              'SUN VIETNAM is the official Vietnam agent of SUNMEDI, a Korean maker of health-and-safety training supplies and fire equipment. It is run by BEST winner VN in Hanoi and is a BestClub member store.'
            )}
          </p>
        </div>

        {/* 정보 카드 */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl border border-navy-800 bg-navy-950/70 p-5 hover:border-red-500/40 transition-colors">
              <span className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                <c.icon className="w-5 h-5 text-red-300" />
              </span>
              <h3 className="mt-4 font-bold text-white break-keep">{c.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed break-keep">{c.desc}</p>
            </div>
          ))}
        </div>

        {/* 취급 품목 */}
        <ul className="flex flex-wrap gap-2">
          {chips.map((c) => (
            <li key={c} className="text-xs font-semibold text-slate-200 bg-navy-950 border border-navy-700 rounded-full px-3 py-1.5">
              {c}
            </li>
          ))}
        </ul>

        {/* 링크 배너 */}
        <div className="relative overflow-hidden rounded-3xl border border-red-500/30 bg-navy-950">
          <picture>
            <source media="(max-width: 640px)" srcSet="/images/sunvietnam/banner-m.webp" />
            <img
              src="/images/sunvietnam/banner.webp"
              alt={L('Thiết bị PCCC và vật tư an toàn SUN VIETNAM', '썬베트남 소방 장비와 안전 자재', 'SUN VIETNAM fire equipment and safety supplies')}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover object-right"
            />
          </picture>
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/10 sm:to-transparent" />
          <div className="relative p-6 sm:p-10 lg:p-14 min-h-[19rem] flex flex-col justify-center max-w-xl space-y-4">
            <img src="/images/sunvietnam/logo.png" alt="SUN VIETNAM" width="48" height="48" className="rounded-lg bg-white p-1" />
            <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight break-keep">
              {L('Vật tư PCCC & an toàn, đặt ngay tại SUN VIETNAM', '소방·안전 자재, 썬베트남에서 바로 확인하세요', 'Fire & safety supplies, right at SUN VIETNAM')}
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed break-keep">
              {L(
                'Xem danh mục sản phẩm và gửi yêu cầu báo giá.',
                '제품 카탈로그를 보고 견적을 문의하세요. 한국어와 베트남어로 이용할 수 있습니다.',
                'Browse the product catalog and request a quote.'
              )}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <a
                href={SUN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-red-600 hover:bg-red-500 text-white font-black px-6 py-3.5 rounded-xl shadow-lg transition-colors"
              >
                {L('Truy cập SUN VIETNAM', '썬베트남 바로가기', 'Open SUN VIETNAM')}
                <ExternalLink className="w-4 h-4 ml-2" />
              </a>
              <a
                href={SUN_SHOP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center border border-white/30 hover:border-white/70 text-white font-bold px-6 py-3.5 rounded-xl backdrop-blur-sm transition-colors"
              >
                <ShoppingBag className="w-4 h-4 mr-2" />
                {L('Xem tất cả sản phẩm', '전체 상품 보기', 'See all products')}
              </a>
            </div>
            {!isVi && !isKo && (
              <p className="text-[11px] text-slate-400">The SUN VIETNAM site is available in Korean and Vietnamese.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
