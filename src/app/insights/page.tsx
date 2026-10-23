import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";
import { getAllInsightsMeta, insightCategories } from "@/lib/insights-loader";
import InsightsDirectoryClient from "@/components/InsightsDirectoryClient";

export const metadata: Metadata = {
  title: "KIA Insights — Economic Intelligence & African Enterprise Strategy",
  description:
    "Thought leadership and actionable intelligence on SME growth, capital access, policy frameworks, technology adoption, and enterprise building across African markets.",
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "KIA Insights — Economic Intelligence & African Enterprise Strategy",
    description:
      "Thought leadership and actionable intelligence on SME growth, capital access, policy frameworks, technology adoption, and enterprise building across African markets.",
    type: "website",
    url: `${siteConfig.url}/insights`,
    siteName: siteConfig.name,
  },
};

export default function InsightsPage() {
  const articles = getAllInsightsMeta();
  return <InsightsDirectoryClient articles={articles} categories={[...insightCategories]} />;
}
