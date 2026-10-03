import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { insightArticles } from "@/lib/insights-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1 },
    { path: "/services/business-registration-ghana", priority: 0.95 },
    { path: "/services", priority: 0.9 },
    { path: "/platforms", priority: 0.9 },
    { path: "/about", priority: 0.85 },
    { path: "/insights", priority: 0.85 },
    { path: "/contact", priority: 0.8 },
    { path: "/gallery", priority: 0.6 },
  ];

  const articleRoutes: MetadataRoute.Sitemap = insightArticles.map((a) => ({
    url: `${siteConfig.url}/insights/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    ...staticRoutes.map(({ path, priority }) => ({
      url: `${siteConfig.url}${path}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority,
    })),
    ...articleRoutes,
  ];
}
