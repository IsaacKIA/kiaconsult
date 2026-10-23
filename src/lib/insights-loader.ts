import fs from "fs";
import path from "path";
import matter from "gray-matter";

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
      const blocks = rest.split(/\n\s*\n/);

      for (const block of blocks) {
        const trimmed = block.trim();
        if (!trimmed) continue;
        if (trimmed.startsWith(">")) {
          pullQuote = trimmed
            .replace(/^>\s*/, "")
            .replace(/^["“]/, "")
            .replace(/["”]$/, "")
            .trim();
        } else {
          paragraphs.push(trimmed);
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

  // Preserve featured-first and date ordering
  articles.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return 0;
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
