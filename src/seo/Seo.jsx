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

/** 화면 이동 시 페이지별 제목·설명·대표 주소·공유 정보를 갱신한다 (구글 JS 렌더링 대응). */
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const seo = resolveSeo(pathname);
    document.title = seo.title;
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
  }, [pathname]);
  return null;
}
