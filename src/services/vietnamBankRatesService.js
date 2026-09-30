/**
 * Vietnam Bank Deposit Rates & Interest Calculator Service
 */

export const VIETNAM_BANK_RATES = [
  {
    id: 'shinhan-vn',
    name: '신한베트남은행 (Shinhan Bank Vietnam)',
    logo: '🏦',
    rate1M: 3.2,
    rate6M: 4.8,
    rate12M: 5.6,
    badge: '교민 추천 1위',
    isKoreanBank: true,
    desc: '한국어 예적금 상담 & 모바일 뱅킹 완비'
  },
  {
    id: 'woori-vn',
    name: '우리베트남은행 (Woori Bank Vietnam)',
    logo: '🏦',
    rate1M: 3.1,
    rate6M: 4.7,
    rate12M: 5.5,
    badge: '모바일 특가',
    isKoreanBank: true,
    desc: '모바일 예금 가입 시 0.2%p 우대 금리 제공'
  },
  {
    id: 'vcb',
    name: 'Vietcombank (비엣콤뱅크)',
    logo: '🏛️',
    rate1M: 2.8,
    rate6M: 4.2,
    rate12M: 5.0,
    badge: '국영 국립은행',
    isKoreanBank: false,
    desc: '베트남 최대 국영 은행'
  },
  {
    id: 'bidv',
    name: 'BIDV (베트남 투자개발은행)',
    logo: '🏛️',
    rate1M: 3.0,
    rate6M: 4.4,
    rate12M: 5.2,
    badge: '국영 자산 1위',
    isKoreanBank: false,
    desc: '하노이 전역 최대 지점망 보유'
  }
];

export function calculateInterest(depositAmountVnd, annualRatePercent, monthsCount) {
  const principal = Number(depositAmountVnd) || 0;
  const rate = Number(annualRatePercent) / 100 || 0;
  const months = Number(monthsCount) || 12;

  const grossInterest = principal * rate * (months / 12);
  const netInterest = grossInterest; // Vietnam deposit interest for individuals is non-taxable (0% tax)
  const totalPayout = principal + netInterest;

  return {
    principal,
    grossInterest: Math.round(grossInterest),
    netInterest: Math.round(netInterest),
    totalPayout: Math.round(totalPayout)
  };
}
