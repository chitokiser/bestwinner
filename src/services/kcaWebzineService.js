import { fetchCollection } from '../lib/firebase';
import { WEBZINE_20_ARTICLES } from '../data/kcaWebzineSeed';

/**
 * BEST MEGAZINE 기사 = 베스트클럽 웹진(kca_webzine) 기사
 * - 저장소 webzine_articles + 내장 기사 (같은 id 는 저장소가 우선, deleted 표시는 숨김)
 * - 기사 수정·삭제는 베스트클럽 웹진에서 수퍼어드민이 함
 */
function toIso(v) {
  if (!v) return null;
  if (typeof v.toDate === 'function') return v.toDate().toISOString();
  if (typeof v.seconds === 'number') return new Date(v.seconds * 1000).toISOString();
  const d = new Date(v);
  return isNaN(d) ? null : d.toISOString();
}

function fromDateStr(s) {
  const m = String(s || '').match(/(\d{4})\D+(\d{1,2})\D+(\d{1,2})/);
  return m ? new Date(Number(m[1]), Number(m[2]) - 1, Number(m[3])).toISOString() : null;
}

function toMegazineArticle(a) {
  return {
    ...a,
    source: 'kca',
    thumbnail: a.thumbnailUrl || a.thumbnail || '',
    publishedAt: toIso(a.createdAt) || fromDateStr(a.dateStr) || null,
    edition: 'BEST MEGAZINE',
    status: 'published',
    tags: Array.isArray(a.tags) ? a.tags : [a.category, a.merchantInfo?.name].filter(Boolean),
  };
}

export async function getKcaWebzineArticles() {
  const docs = await fetchCollection('webzine_articles');
  const stored = new Set(docs.map((d) => d.id));
  const live = docs.filter((d) => d.deleted !== true);
  const presets = WEBZINE_20_ARTICLES.filter((a) => !stored.has(a.id));
  const list = [...live, ...presets].map(toMegazineArticle);
  // 저장소 기사(최신순) 먼저, 내장 기사는 원래 순서 유지
  return list.sort((a, b) => {
    const ta = live.some((x) => x.id === a.id) ? new Date(a.publishedAt || 0).getTime() : -1;
    const tb = live.some((x) => x.id === b.id) ? new Date(b.publishedAt || 0).getTime() : -1;
    return tb - ta;
  });
}
