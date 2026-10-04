import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { insightArticles } from "@/lib/insights-data";
import { servicesDetailData } from "@/lib/services-detail-data";
import { platformsDetailData } from "@/lib/platforms-detail-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "", priority: 1.0 },
    { path: "/services/business-registration-ghana", priority: 0.95 },
    { path: "/services", priority: 0.9 },
    { path: "/platforms", priority: 0.9 },
    { path: "/about", priority: 0.85 },
    { path: "/gallery", priority: 0.85 },
    { path: "/insights", priority: 0.85 },
    { path: "/contact", priority: 0.8 },
    { path: "/privacy", priority: 0.3 },
    { path: "/terms", priority: 0.3 },
  ];

  const serviceRoutes: MetadataRoute.Sitemap = Object.keys(servicesDetailData).map((slug) => ({
    url: `${siteConfig.url}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

  const platformRoutes: MetadataRoute.Sitemap = Object.keys(platformsDetailData).map((slug) => ({
    url: `${siteConfig.url}/platforms/${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.9,
  }));

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
    ...serviceRoutes,
    ...platformRoutes,
    ...articleRoutes,
  ];
}
