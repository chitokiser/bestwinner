// vite build 후 실행: 페이지별 검색엔진용 HTML, sitemap.xml, robots.txt, 404.html 생성.
// - 각 라우트마다 dist/<경로>.html 과 dist/<경로>/index.html 을 만들어 제목·설명·대표 주소(canonical)를 미리 넣는다
//   (JS 실행 전에도 구글·SNS 미리보기가 페이지별 정보를 읽을 수 있도록).
// - 구글 서치 콘솔 HTML 태그 인증: 환경변수 VITE_GOOGLE_SITE_VERIFICATION 에 content 값을 넣으면 모든 페이지에 삽입.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { DEFAULT_IMAGE, SEO_ROUTES, SITE_URL, resolveSeo } from '../src/seo/routes.js';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = path.join(root, 'dist');
const template = readFileSync(path.join(dist, 'index.html'), 'utf8');
const verification = (process.env.VITE_GOOGLE_SITE_VERIFICATION || process.env.GOOGLE_SITE_VERIFICATION || '').trim();

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

function replaceTag(html, re, replacement) {
  if (!re.test(html)) throw new Error(`index.html 에서 태그를 찾지 못함: ${re}`);
  return html.replace(re, replacement);
}

function render(seo) {
  let html = template;
  const t = esc(seo.title);
  const d = esc(seo.description);
  const url = seo.canonical || SITE_URL + (seo.notFound ? '/' : seo.path);
  html = replaceTag(html, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`);
  html = replaceTag(html, /<meta name="title" content="[^"]*" \/>/, `<meta name="title" content="${t}" />`);
  html = replaceTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${t}" />`);
  html = replaceTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${t}" />`);
  if (seo.description) {
    html = replaceTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${d}" />`);
    html = replaceTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${d}" />`);
    html = replaceTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${d}" />`);
  }
  html = replaceTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${esc(url)}" />`);
  html = replaceTag(html, /<meta name="robots" content="[^"]*" \/>/, `<meta name="robots" content="${seo.index ? 'index, follow' : 'noindex, follow'}" />`);
  html = seo.canonical
    ? replaceTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${esc(seo.canonical)}" />`)
    : replaceTag(html, /\s*<link rel="canonical" href="[^"]*" \/>/, '');
  if (verification) {
    html = html.replace('</title>', `</title>\n    <meta name="google-site-verification" content="${esc(verification)}" />`);
  }
  return html;
}

function write(rel, content) {
  const file = path.join(dist, rel);
  mkdirSync(path.dirname(file), { recursive: true });
  writeFileSync(file, content, 'utf8');
}

// 1) 페이지별 HTML
let pages = 0;
for (const route of SEO_ROUTES) {
  const html = render(resolveSeo(route.path));
  if (route.path === '/') {
    write('index.html', html);
  } else {
    // /about → about.html (Netlify 가 슬래시 리다이렉트 없이 제공), /about/ → about/index.html
    write(`${route.path.slice(1)}.html`, html);
    write(path.join(route.path.slice(1), 'index.html'), html);
  }
  pages++;
}

// 2) 없는 주소 → 404 상태 + 검색 제외 (Netlify 가 dist/404.html 사용)
write('404.html', render(resolveSeo('/__not_found__')));

// 3) sitemap.xml — 검색 허용 + 대표 주소인 페이지만
const today = new Date().toISOString().slice(0, 10);
const indexed = SEO_ROUTES.filter((r) => !r.canonical && r.index !== false);
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
  ...indexed.map((r) =>
    [
      '  <url>',
      `    <loc>${SITE_URL}${r.path}</loc>`,
      `    <lastmod>${today}</lastmod>`,
      `    <changefreq>${r.changefreq || 'monthly'}</changefreq>`,
      `    <priority>${(r.priority ?? 0.5).toFixed(1)}</priority>`,
      ...(r.path === '/' ? ['    <image:image>', `      <image:loc>${SITE_URL}${DEFAULT_IMAGE}</image:loc>`, '    </image:image>'] : []),
      '  </url>',
    ].join('\n'),
  ),
  '</urlset>',
  '',
].join('\n');
write('sitemap.xml', sitemap);

// 4) robots.txt
const disallow = SEO_ROUTES.filter((r) => r.index === false).map((r) => `Disallow: ${r.path}`);
write('robots.txt', ['User-agent: *', 'Allow: /', ...disallow, '', `Sitemap: ${SITE_URL}/sitemap.xml`, ''].join('\n'));

console.log(`[seo-build] 페이지 ${pages}개, sitemap URL ${indexed.length}개, robots.txt, 404.html 생성${verification ? ' (구글 인증 태그 포함)' : ''}`);
