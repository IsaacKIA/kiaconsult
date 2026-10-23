import { insightArticlesMeta, type InsightMeta } from "./insights-meta";
import type { InsightArticle } from "./insights-loader";

export type { InsightArticle, InsightMeta };

export const insightCategories = [
  "All Insights",
  "Policy & Economic Development",
  "Entrepreneurship",
  "AI & Technology",
  "SME Growth",
  "Capital & Investment",
  "Youth Employment",
  "Women & Enterprise",
  "Climate & Green Economy",
  "Africa Business",
] as const;

/**
 * Lightweight metadata of all insights. Safe for client components (search index, filters, card previews).
 * For full article body and sections, server components should use `getInsightBySlug` from `@/lib/insights-loader`.
 */
export const insightArticles: InsightMeta[] = insightArticlesMeta;

export function getFeaturedArticle(): InsightMeta {
  return insightArticles.find((a) => a.featured) || insightArticles[0];
}

export function getArticleBySlug(slug: string): InsightMeta | undefined {
  return insightArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(slug: string): InsightMeta[] {
  const current = getArticleBySlug(slug);
  if (!current) return [];

  const direct = current.relatedSlugs
    .map((s) => getArticleBySlug(s))
    .filter((a): a is InsightMeta => Boolean(a));

  if (direct.length >= 2) return direct.slice(0, 2);

  const fallback = insightArticles.filter(
    (a) => a.slug !== slug && a.category === current.category && !direct.includes(a)
  );

  return [...direct, ...fallback].slice(0, 2);
}
