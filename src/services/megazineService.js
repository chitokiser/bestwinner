import { db, fetchCollection, addDocument, updateDocument, deleteDocument } from '../lib/firebase';
import { INITIAL_ARTICLES, INITIAL_BEST_PICKS, DEFAULT_CATEGORIES } from '../data/megazineInitialData';

const LOCAL_STORAGE_ARTICLES_KEY = 'best_megazine_articles_db_v1';

export const CATEGORY_THUMBNAILS = {
  TODAY: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
  BUSINESS: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  LIFE: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  NEWS: 'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
  HANOI: 'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  VIETNAM: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  KOREA: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  COMMUNITY: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
  BEST_PICK: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80'
};

export const UNIQUE_IMAGE_POOL = [
  'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1506521781263-d8422e82f27a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1527661591475-527312dd65f5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1541888946425-d0fbb186a5b3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1528127269322-539801943592?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80'
];

export function getDefaultThumbnail(category) {
  const catKey = (category || 'NEWS').toUpperCase();
  return CATEGORY_THUMBNAILS[catKey] || CATEGORY_THUMBNAILS.BUSINESS;
}

export function ensureArticleThumbnail(article) {
  if (!article) return article;
  if (!article.thumbnail || typeof article.thumbnail !== 'string' || article.thumbnail.trim() === '') {
    return {
      ...article,
      thumbnail: getDefaultThumbnail(article.category)
    };
  }
  return article;
}

export function ensureUniqueArticleImages(articles) {
  if (!Array.isArray(articles)) return [];
  const usedImages = new Set();
  
  return articles.map((article, idx) => {
    let img = article.thumbnail;
    
    // If image is missing, empty, OR already used by another article:
    if (!img || typeof img !== 'string' || img.trim() === '' || usedImages.has(img)) {
      let poolIndex = idx % UNIQUE_IMAGE_POOL.length;
      let candidate = UNIQUE_IMAGE_POOL[poolIndex];

      let attempts = 0;
      while (usedImages.has(candidate) && attempts < UNIQUE_IMAGE_POOL.length) {
        poolIndex = (poolIndex + 1) % UNIQUE_IMAGE_POOL.length;
        candidate = UNIQUE_IMAGE_POOL[poolIndex];
        attempts++;
      }

      img = candidate;
    }

    usedImages.add(img);
    return {
      ...article,
      thumbnail: img
    };
  });
}

export function deduplicateArticles(list) {
  if (!Array.isArray(list)) return [];
  const seenIds = new Set();
  const seenTitles = new Set();
  const result = [];

  for (const art of list) {
    if (!art || !art.title) continue;
    const idStr = String(art.id);
    const normTitle = art.title.replace(/\s+/g, '').toLowerCase();

    if (seenIds.has(idStr) || seenTitles.has(normTitle)) {
      continue; // Skip duplicate!
    }

    seenIds.add(idStr);
    seenTitles.add(normTitle);
    result.push(art);
  }

  return result;
}

/**
 * Get all stored articles from Firebase or LocalStorage fallback
 */
export async function getArticles() {
  let list = [];
  try {
    const firebaseDocs = await fetchCollection('articles');
    if (firebaseDocs && firebaseDocs.length > 0) {
      list = firebaseDocs;
    }
  } catch (err) {
    console.warn('[MegazineService] Firebase fetch error, using local storage fallback:', err);
  }

  if (list.length === 0 && typeof window !== 'undefined') {
    const raw = localStorage.getItem(LOCAL_STORAGE_ARTICLES_KEY);
    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length >= INITIAL_ARTICLES.length) {
          list = parsed;
        } else if (Array.isArray(parsed)) {
          // Merge missing initial seed articles into local storage
          const existingIds = new Set(parsed.map(a => String(a.id)));
          const missingSeeds = INITIAL_ARTICLES.filter(a => !existingIds.has(String(a.id)));
          list = [...parsed, ...missingSeeds];
        }
      } catch (e) {
        console.error('[MegazineService] JSON parse error:', e);
      }
    }
  }

  if (list.length === 0) {
    list = [...INITIAL_ARTICLES];
  }

  // Deduplicate articles AND guarantee every single article has a UNIQUE image
  const deduplicated = deduplicateArticles(list);
  const processedList = ensureUniqueArticleImages(deduplicated);

  // Sync back to local storage
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(processedList));
  }

  return processedList.sort((a, b) => new Date(b.publishedAt || b.createdAt) - new Date(a.publishedAt || a.createdAt));
}

/**
 * Get article by ID
 */
export async function getArticleById(id) {
  const articles = await getArticles();
  return articles.find(a => String(a.id) === String(id)) || null;
}

/**
 * Save new or updated article
 */
export async function saveArticle(articleData) {
  const isNew = !articleData.id;
  const id = articleData.id || `art-${Date.now()}`;
  const now = new Date().toISOString();

  const articleToSave = ensureArticleThumbnail({
    ...articleData,
    id,
    updatedAt: now,
    createdAt: articleData.createdAt || now,
    publishedAt: articleData.publishedAt || now,
    status: articleData.status || 'published',
    viewCount: articleData.viewCount || 0,
    shareCount: articleData.shareCount || 0
  });

  // 1. Try Firebase
  try {
    if (isNew) {
      await addDocument('articles', articleToSave);
    } else {
      await updateDocument('articles', id, articleToSave);
    }
  } catch (err) {
    console.warn('[MegazineService] Firebase save failed:', err);
  }

  // 2. Sync LocalStorage
  if (typeof window !== 'undefined') {
    const articles = await getArticles();
    const existingIndex = articles.findIndex(a => String(a.id) === String(id));
    let updatedList = [];
    if (existingIndex >= 0) {
      updatedList = [...articles];
      updatedList[existingIndex] = articleToSave;
    } else {
      updatedList = [articleToSave, ...articles];
    }
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(updatedList));
  }

  return articleToSave;
}

/**
 * Update Article Status (draft -> review -> approved -> published -> rejected)
 */
export async function updateArticleStatus(id, newStatus) {
  const article = await getArticleById(id);
  if (!article) return null;
  article.status = newStatus;
  article.updatedAt = new Date().toISOString();
  return await saveArticle(article);
}

/**
 * Delete Article
 */
export async function removeArticle(idOrTitle) {
  try {
    await deleteDocument('articles', idOrTitle);
  } catch (e) {
    console.warn('[MegazineService] Firebase delete error:', e);
  }

  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(LOCAL_STORAGE_ARTICLES_KEY);
    if (raw) {
      try {
        const articles = JSON.parse(raw);
        const targetStr = String(idOrTitle).trim();
        const normTarget = targetStr.replace(/\s+/g, '').toLowerCase();
        
        const filtered = articles.filter(a => {
          const normId = String(a.id || '').replace(/\s+/g, '').toLowerCase();
          const normTitle = String(a.title || '').replace(/\s+/g, '').toLowerCase();
          return normId !== normTarget && normTitle !== normTarget && String(a.id) !== targetStr;
        });
        localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(filtered));
      } catch (err) {}
    }
  }
  return true;
}

/**
 * Check duplicate article in recent 7 days
 */
export function checkIsDuplicate(newTitle, existingArticles) {
  if (!newTitle || !existingArticles) return false;
  const normalizedNew = newTitle.replace(/\s+/g, '').toLowerCase();
  
  return existingArticles.some(art => {
    const normalizedExisting = (art.title || '').replace(/\s+/g, '').toLowerCase();
    if (normalizedNew === normalizedExisting) return true;
    if (normalizedNew.length > 10 && normalizedExisting.includes(normalizedNew)) return true;
    return false;
  });
}

// AI 자동 기사 생성·예약 발행 기능은 API 비용 절감을 위해 제거함 (2026-10-21).
// BEST MEGAZINE 기사는 베스트클럽 웹진(kcaWebzineService)에서 가져옴.
