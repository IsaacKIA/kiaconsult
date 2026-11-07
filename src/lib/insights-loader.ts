import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { insightArticlesMeta } from "./insights-meta";

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: {
    name: string;
    role: string;
    avatar?: string;
  };
  publishedAt: string;
  readingTime: string;
  heroImage: string;
  heroCaption?: string;
  tags: string[];
  featured?: boolean;
  content: {
    intro: string;
    sections: {
      heading: string;
      paragraphs: string[];
      pullQuote?: string;
    }[];
    takeaways: string[];
    faqs?: {
      question: string;
      answer: string;
    }[];
  };
  relatedSlugs: string[];
}

export type InsightMeta = Omit<InsightArticle, "content">;

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

const INSIGHTS_DIR = path.join(process.cwd(), "content", "insights");

/**
 * Parses raw markdown with frontmatter into a fully-typed InsightArticle.
 */
export function parseInsightMarkdown(fileContent: string, fileSlug: string): InsightArticle {
  const { data, content } = matter(fileContent);
  const lines = content.trim().split("\n");

  // Locate the first ## heading
  const firstHeadingIdx = lines.findIndex((l) => /^##\s+/.test(l));
  let intro = "";
  let bodyAfterIntro = "";

  if (firstHeadingIdx !== -1) {
    intro = lines.slice(0, firstHeadingIdx).join("\n").trim();
    bodyAfterIntro = lines.slice(firstHeadingIdx).join("\n").trim();
  } else {
    intro = content.trim();
  }

  // Parse sections
  const sections: { heading: string; paragraphs: string[]; pullQuote?: string }[] = [];
  if (bodyAfterIntro) {
    const rawSections = bodyAfterIntro.split(/^##\s+/m).filter(Boolean);
    for (const raw of rawSections) {
      const sectionLines = raw.trim().split("\n");
      const heading = sectionLines[0].trim();
      const rest = sectionLines.slice(1).join("\n").trim();

      let pullQuote: string | undefined;
      const paragraphs: string[] = [];
      const rawLines = rest.split("\n");

      let i = 0;
      while (i < rawLines.length) {
        const line = rawLines[i];
        const trimmed = line.trim();

        // Skip empty lines and horizontal rules
        if (!trimmed || /^---+$/.test(trimmed)) {
          i++;
          continue;
        }

        // 1. Fenced code block (``` ... ```)
        if (trimmed.startsWith("```")) {
          const codeLines: string[] = [line];
          i++;
          while (i < rawLines.length && !rawLines[i].trim().startsWith("```")) {
            codeLines.push(rawLines[i]);
            i++;
          }
          if (i < rawLines.length) {
            codeLines.push(rawLines[i]);
            i++;
          }
          paragraphs.push(codeLines.join("\n"));
          continue;
        }

        // 2. Subheading (### ...)
        if (trimmed.startsWith("### ")) {
          paragraphs.push(trimmed);
          i++;
          continue;
        }

        // 3. Blockquote / Pull quote (> ...)
        if (trimmed.startsWith(">")) {
          const quoteLines: string[] = [];
          while (i < rawLines.length && rawLines[i].trim().startsWith(">")) {
            quoteLines.push(
              rawLines[i]
                .trim()
                .replace(/^>\s*/, "")
                .replace(/^["“]/, "")
                .replace(/["”]$/, "")
                .trim()
            );
            i++;
          }
          const cleanQuote = quoteLines.join(" ").trim();
          if (cleanQuote) {
            // Keep inline quote marker so renderer places it in exact reading flow
            paragraphs.push(`> ${cleanQuote}`);
          }
          continue;
        }

        // 4. Numbered list block (1. ... plus any indented sub-bullets)
        if (/^[0-9]+\.\s+/.test(trimmed)) {
          const numBlockLines: string[] = [];
          while (i < rawLines.length) {
            const cur = rawLines[i];
            const curTrim = cur.trim();
            if (!curTrim) {
              // Look ahead: if next non-empty line is another numbered item or indented sub-bullet, continue
              let nextIdx = i + 1;
              while (nextIdx < rawLines.length && !rawLines[nextIdx].trim()) nextIdx++;
              if (
                nextIdx < rawLines.length &&
                (/^[0-9]+\.\s+/.test(rawLines[nextIdx].trim()) ||
                  /^\s{2,}[-*]\s+/.test(rawLines[nextIdx]))
              ) {
                i = nextIdx;
                continue;
              }
              break;
            }
            if (/^[0-9]+\.\s+/.test(curTrim)) {
              numBlockLines.push(curTrim);
              i++;
            } else if (/^[-*]\s+/.test(curTrim) && numBlockLines.length > 0) {
              // Sub-bullet belonging to the current numbered item
              numBlockLines.push(`  ${curTrim}`);
              i++;
            } else {
              break;
            }
          }
          paragraphs.push(numBlockLines.join("\n"));
          continue;
        }

        // 5. Checkmark list block (- ✓ or ✓)
        if (/^[-*]?\s*[✓✔]\s+/.test(trimmed)) {
          const checkLines: string[] = [];
          while (i < rawLines.length && /^[-*]?\s*[✓✔]\s+/.test(rawLines[i].trim())) {
            checkLines.push(rawLines[i].trim());
            i++;
          }
          paragraphs.push(checkLines.join("\n"));
          continue;
        }

        // 6. Decimal audit code list block (- **1.01** ...)
        if (/^[-*]?\s*\*\*([0-9.]+)\*\*\s+/.test(trimmed)) {
          const decLines: string[] = [];
          while (i < rawLines.length && /^[-*]?\s*\*\*([0-9.]+)\*\*\s+/.test(rawLines[i].trim())) {
            decLines.push(rawLines[i].trim());
            i++;
          }
          paragraphs.push(decLines.join("\n"));
          continue;
        }

        // 7. Standard bullet list block (- ... or * ...)
        if (/^[-*]\s+/.test(trimmed)) {
          const bulletLines: string[] = [];
          while (
            i < rawLines.length &&
            /^[-*]\s+/.test(rawLines[i].trim()) &&
            !/^[-*]?\s*[✓✔]\s+/.test(rawLines[i].trim()) &&
            !/^[-*]?\s*\*\*([0-9.]+)\*\*\s+/.test(rawLines[i].trim())
          ) {
            bulletLines.push(rawLines[i].trim());
            i++;
          }
          paragraphs.push(bulletLines.join("\n"));
          continue;
        }

        // 8. Standard prose paragraph (collect until blank line or special block start)
        const proseLines: string[] = [];
        while (i < rawLines.length) {
          const curTrim = rawLines[i].trim();
          if (
            !curTrim ||
            /^---+$/.test(curTrim) ||
            curTrim.startsWith("### ") ||
            curTrim.startsWith("```") ||
            curTrim.startsWith(">") ||
            /^[0-9]+\.\s+/.test(curTrim) ||
            /^[-*]?\s*[✓✔]\s+/.test(curTrim) ||
            /^[-*]?\s*\*\*([0-9.]+)\*\*\s+/.test(curTrim) ||
            /^[-*]\s+/.test(curTrim)
          ) {
            break;
          }
          proseLines.push(curTrim);
          i++;
        }
        if (proseLines.length > 0) {
          paragraphs.push(proseLines.join(" "));
        }
      }

      sections.push({
        heading,
        paragraphs,
        ...(pullQuote ? { pullQuote } : {}),
      });
    }
  }

  return {
    slug: (data.slug as string) || fileSlug,
    title: (data.title as string) || "",
    excerpt: (data.excerpt as string) || "",
    category: (data.category as string) || "General",
    author: data.author || {
      name: "Isaac Agya Koomson",
      role: "Chief Executive Officer, KIA–Start Up Consult Ltd",
    },
    publishedAt: (data.publishedAt as string) || "",
    readingTime: (data.readingTime as string) || "5 min read",
    heroImage: (data.heroImage as string) || "/images/advisory-consultation.jpg",
    heroCaption: data.heroCaption as string | undefined,
    tags: Array.isArray(data.tags) ? data.tags : [],
    featured: Boolean(data.featured),
    relatedSlugs: Array.isArray(data.relatedSlugs) ? data.relatedSlugs : [],
    content: {
      intro,
      sections,
      takeaways: Array.isArray(data.takeaways) ? data.takeaways : [],
      faqs: Array.isArray(data.faqs) ? data.faqs : [],
    },
  };
}

let cachedArticles: InsightArticle[] | null = null;

/**
 * Returns all articles loaded and parsed from content/insights/*.md.
 */
export function getAllInsights(): InsightArticle[] {
  if (cachedArticles && process.env.NODE_ENV === "production") {
    return cachedArticles;
  }

  if (!fs.existsSync(INSIGHTS_DIR)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(INSIGHTS_DIR)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_") && file !== "README.md");

  const articles: InsightArticle[] = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(INSIGHTS_DIR, fileName);
    const fileContent = fs.readFileSync(fullPath, "utf8");
    return parseInsightMarkdown(fileContent, slug);
  });

  // Sort strictly newest-first using the canonical editorial order in insightArticlesMeta,
  // falling back to publishedAt descending for any unindexed markdown files.
  const metaOrderMap = new Map<string, number>(
    insightArticlesMeta.map((m, idx) => [m.slug, idx])
  );
  const parseDate = (s: string): number => {
    if (!s) return 0;
    const d = new Date(s);
    return isNaN(d.getTime()) ? 0 : d.getTime();
  };

  articles.sort((a, b) => {
    const idxA = metaOrderMap.get(a.slug);
    const idxB = metaOrderMap.get(b.slug);
    if (idxA !== undefined && idxB !== undefined) {
      return idxA - idxB;
    }
    if (idxA !== undefined) return -1;
    if (idxB !== undefined) return 1;
    return parseDate(b.publishedAt) - parseDate(a.publishedAt);
  });

  if (process.env.NODE_ENV === "production") {
    cachedArticles = articles;
  }

  return articles;
}

/**
 * Returns lightweight metadata for all articles (ideal for listings and cards).
 */
export function getAllInsightsMeta(): InsightMeta[] {
  return getAllInsights().map((article) => {
    const { content: _unused, ...meta } = article;
    return meta;
  });
}

/**
 * Retrieves a single insight article by slug.
 */
export function getInsightBySlug(slug: string): InsightArticle | null {
  const articles = getAllInsights();
  return articles.find((art) => art.slug === slug) || null;
}

/**
 * Returns related articles for a given slug.
 */
export function getRelatedInsights(slug: string): InsightArticle[] {
  const current = getInsightBySlug(slug);
  if (!current) return [];

  const all = getAllInsights();
  const directMatches = current.relatedSlugs
    .map((s) => all.find((art) => art.slug === s))
    .filter((art): art is InsightArticle => Boolean(art));

  if (directMatches.length >= 2) {
    return directMatches.slice(0, 2);
  }

  // Fallback to same category
  const fallback = all.filter(
    (art) => art.slug !== slug && art.category === current.category && !directMatches.includes(art)
  );

  return [...directMatches, ...fallback].slice(0, 2);
}

/**
 * Returns the primary featured article.
 */
export function getFeaturedInsight(): InsightArticle | null {
  const articles = getAllInsights();
  return articles.find((a) => a.featured) || articles[0] || null;
}
