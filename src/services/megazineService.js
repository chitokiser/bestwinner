import { db, fetchCollection, addDocument, updateDocument, deleteDocument } from '../lib/firebase';
import { INITIAL_ARTICLES, INITIAL_BEST_PICKS, DEFAULT_CATEGORIES } from '../data/megazineInitialData';
import { AIProviderFactory } from './aiProviderService';

const LOCAL_STORAGE_ARTICLES_KEY = 'best_megazine_articles_db_v1';
const LOCAL_STORAGE_SETTINGS_KEY = 'best_megazine_settings_v1';

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

export const DEFAULT_SCHEDULE_TIMES = {
  MORNING: '07:00',
  BUSINESS: '11:00',
  LIFE: '14:00',
  NOW: '18:00',
  MEGAZINE: '21:00'
};

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

  // Ensure every article has a valid thumbnail
  const processedList = list.map(ensureArticleThumbnail);

  // Sync back to local storage if any article was missing a thumbnail
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
export async function removeArticle(id) {
  try {
    await deleteDocument('articles', id);
  } catch (e) {
    console.warn('[MegazineService] Firebase delete error:', e);
  }

  if (typeof window !== 'undefined') {
    const articles = await getArticles();
    const filtered = articles.filter(a => String(a.id) !== String(id));
    localStorage.setItem(LOCAL_STORAGE_ARTICLES_KEY, JSON.stringify(filtered));
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

/**
 * Trigger Automated AI Article Pipeline Job
 */
export async function triggerAiArticleJob({ jobType, category, topic, providerName = 'gemini' }) {
  console.log(`[AI Pipeline] Executing ${jobType} generation pipeline...`);
  
  const existingArticles = await getArticles();
  
  // Step 1: Duplicate check
  if (topic && checkIsDuplicate(topic, existingArticles)) {
    console.warn(`[AI Pipeline] Duplicate topic detected for: ${topic}`);
    return { success: false, reason: 'Duplicate article detected' };
  }

  // Step 2: AI Provider Selection & Generation
  const provider = AIProviderFactory.getProvider(providerName);
  const rawArticle = await provider.generateArticle({ jobType, topic, category });

  // Step 3: Fact Checking
  const factCheckResult = await provider.factCheck(rawArticle);

  // Step 4: Build complete article record
  const newArticle = {
    ...rawArticle,
    id: `art-ai-${Date.now()}`,
    edition: jobType || 'BEST MEGAZINE',
    category: category || rawArticle.category || 'TODAY',
    status: 'published', // LEVEL 2 auto-publish
    publishedAt: new Date().toISOString(),
    factChecked: factCheckResult.passed,
    factCheckNotes: factCheckResult.notes,
    viewCount: Math.floor(Math.random() * 50) + 10,
    shareCount: Math.floor(Math.random() * 15) + 2
  };

  // Step 5: Save to Database
  const saved = await saveArticle(newArticle);
  return { success: true, article: saved };
}

/**
 * Settings Management (Schedule times, prompts, etc.)
 */
export function getMegazineSettings() {
  if (typeof window !== 'undefined') {
    const raw = localStorage.getItem(LOCAL_STORAGE_SETTINGS_KEY);
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {}
    }
  }
  return {
    schedules: DEFAULT_SCHEDULE_TIMES,
    level: 'LEVEL2', // Level 1: Review needed, Level 2: Auto publish, Level 3: Policy strictly reviewed
    activeProvider: 'gemini'
  };
}

export function saveMegazineSettings(settings) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(LOCAL_STORAGE_SETTINGS_KEY, JSON.stringify(settings));
  }
  return settings;
}

const LAST_AUTO_PUBLISH_KEY = 'best_megazine_last_auto_publish_v1';

/**
 * Automated Article Schedule Checker & Auto-Publisher
 * Checks current time against scheduled slots (07:00, 11:00, 14:00, 18:00, 21:00)
 * and automatically triggers AI pipeline to publish new articles.
 */
export async function checkAndAutoPublishArticles() {
  if (typeof window === 'undefined') return { publishedCount: 0 };
  
  const settings = getMegazineSettings();
  const schedules = settings.schedules || DEFAULT_SCHEDULE_TIMES;
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];
  const currentHourMinute = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  
  let lastAutoLogs = {};
  try {
    lastAutoLogs = JSON.parse(localStorage.getItem(LAST_AUTO_PUBLISH_KEY) || '{}');
  } catch (e) {}
  
  const articles = await getArticles();
  
  const scheduleSlots = [
    { key: 'MORNING', time: schedules.MORNING || '07:00', jobType: 'BEST MORNING', category: 'TODAY', topic: '하노이 날씨, 환율, 교통 및 아침 데일리 브리핑' },
    { key: 'BUSINESS', time: schedules.BUSINESS || '11:00', jobType: 'BEST BUSINESS', category: 'BUSINESS', topic: '베트남 비자, 노동법, 법인 세무 및 사업자 정책 가이드' },
    { key: 'LIFE', time: schedules.LIFE || '14:00', jobType: 'BEST LIFE', category: 'LIFE', topic: '하노이 의료, 거주 행정, K-식문화 및 교민 라이프' },
    { key: 'NOW', time: schedules.NOW || '18:00', jobType: 'BEST NOW', category: 'HANOI', topic: '하노이 미딩, 서호, 하동 실시간 시사 및 도로 안내' },
    { key: 'MEGAZINE', time: schedules.MEGAZINE || '21:00', jobType: 'BEST MEGAZINE', category: 'TODAY', topic: '하노이 교민 심층 리포트 및 베트남 종합 매거진' }
  ];

  let publishedCount = 0;

  for (const slot of scheduleSlots) {
    const slotLogKey = `${todayStr}_${slot.key}`;
    
    // Check if slot time has arrived today AND hasn't been auto-published yet today
    if (currentHourMinute >= slot.time && !lastAutoLogs[slotLogKey]) {
      // Check if an article for this edition exists today
      const alreadyHasArticleToday = articles.some(a => {
        const pubDate = (a.publishedAt || a.createdAt || '').split('T')[0];
        return pubDate === todayStr && a.edition === slot.jobType;
      });

      if (!alreadyHasArticleToday) {
        console.log(`[Auto Schedule] Auto-publishing ${slot.jobType} for ${todayStr}...`);
        try {
          const res = await triggerAiArticleJob({
            jobType: slot.jobType,
            category: slot.category,
            topic: slot.topic,
            providerName: settings.activeProvider || 'gemini'
          });
          if (res?.success) {
            publishedCount++;
            lastAutoLogs[slotLogKey] = new Date().toISOString();
          }
        } catch (err) {
          console.warn(`[Auto Schedule] Failed publishing ${slot.jobType}:`, err);
        }
      } else {
        lastAutoLogs[slotLogKey] = new Date().toISOString();
      }
    }
  }

  // Force guarantee: If no article exists for TODAY date at all, trigger today's morning edition
  const hasAnyTodayArticle = articles.some(a => {
    const pubDate = (a.publishedAt || a.createdAt || '').split('T')[0];
    return pubDate === todayStr;
  });

  if (!hasAnyTodayArticle && publishedCount === 0) {
    const forceKey = `${todayStr}_FORCE_TODAY`;
    if (!lastAutoLogs[forceKey]) {
      console.log(`[Auto Schedule] No articles for today (${todayStr}). Auto publishing today's edition...`);
      try {
        const res = await triggerAiArticleJob({
          jobType: 'BEST MORNING',
          category: 'TODAY',
          topic: `[${todayStr}] 하노이 최신 교민 데일리 헤드라인 리포트`,
          providerName: settings.activeProvider || 'gemini'
        });
        if (res?.success) {
          publishedCount++;
          lastAutoLogs[forceKey] = new Date().toISOString();
        }
      } catch (err) {
        console.warn('[Auto Schedule] Force publish failed:', err);
      }
    }
  }

  localStorage.setItem(LAST_AUTO_PUBLISH_KEY, JSON.stringify(lastAutoLogs));
  return { publishedCount };
}
