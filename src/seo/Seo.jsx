import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { DEFAULT_IMAGE, SITE_URL, resolveSeo } from './routes';

function setMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.head.querySelector('link[rel="canonical"]');
  if (!href) {
    if (el) el.remove();
    return;
  }
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

// 한국어 화면일 때의 페이지 제목
const KO_TITLES = {
  '/': 'BEST winner Vn Group | 주거·인프라 통합 솔루션',
  '/about': '회사 소개 | BEST winner Vn Group',
  '/business': '핵심 사업 분야 | BEST winner Vn Group',
  '/business/elevator': '가정용 엘리베이터 BEST Home 350 | BEST winner Elevator Vn',
  '/business/interior': '고급 인테리어 설계·시공 | BEST winner Interior Vn',
  '/business/parking': 'AI 스마트 주차(LPR) | BEST winner AI Smart Parking Vn',
  '/business/firefighting': 'QCVN/TCVN 인증 소방자재·시스템 | BEST winner Firefighting Vn',
  '/business/waterproofing': '열대 기후 전문 방수 | BEST winner Waterproofing Vn',
  '/business/energy': '3D PVT 태양광 에너지 | BEST winner Solar Energy Vn',
  '/business/digital-agency': '디지털 에이전시 - 마케팅·웹 | BEST winner Vn Group',
  '/business/agency': '디지털 에이전시 - 마케팅·웹 | BEST winner Vn Group',
  '/services': 'BEST AI 경영관리 1.0 (SaaS) | BEST winner Vn Group',
  '/services/ai-management': 'BEST AI 경영관리 1.0 (SaaS) | BEST winner Vn Group',
  '/services/products': 'BEST Mall 쇼핑몰 | BEST winner Vn Group',
  '/services/merchant-products': 'BestClub 가맹점 상품 | BEST winner Vn Group',
  '/events': '이벤트·쿠폰·바우처 | BEST winner Vn Group',
  '/services/events': '이벤트·쿠폰·바우처 | BEST winner Vn Group',
  '/megazine': 'BEST MEGAZINE - 하노이 생활 매거진 | BEST winner Vn Group',
  '/calculator': '엘리베이터 온라인 견적 | BEST winner Elevator Vn',
  '/contact': '문의·하노이 쇼룸 | BEST winner Vn Group',
};

/** 화면 이동 시 페이지별 제목·설명·대표 주소·공유 정보를 갱신한다 (구글 JS 렌더링 대응). */
export default function Seo({ lang = 'vi' }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  useEffect(() => {
    const seo = resolveSeo(pathname);
    document.title = lang === 'ko'
      ? (KO_TITLES[seo.path] || (seo.notFound ? '페이지를 찾을 수 없습니다 | BEST winner Vn Group' : seo.title))
      : seo.title;
    if (seo.description) {
      setMeta('name', 'description', seo.description);
      setMeta('property', 'og:description', seo.description);
      setMeta('name', 'twitter:description', seo.description);
    }
    setMeta('property', 'og:title', seo.title);
    setMeta('name', 'twitter:title', seo.title);
    setMeta('property', 'og:url', seo.canonical || SITE_URL + (seo.notFound ? '/' : seo.path));
    setMeta('property', 'og:image', SITE_URL + DEFAULT_IMAGE);
    setMeta('name', 'robots', seo.index ? 'index, follow' : 'noindex, follow');
    setCanonical(seo.canonical);
  }, [pathname, lang]);
  return null;
}
