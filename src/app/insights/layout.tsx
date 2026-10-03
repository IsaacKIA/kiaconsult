import type { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Insights & Economic Architecture Perspectives",
  description:
    "Original analysis, policy frameworks, and enterprise scaling strategies from Isaac Agya Koomson and the KIA advisory practice.",
  alternates: {
    canonical: `${siteConfig.url}/insights`,
  },
  openGraph: {
    title: "Insights & Perspectives — KIA–Start Up Consult",
    description:
      "Original analysis, policy frameworks, and enterprise scaling strategies from Isaac Agya Koomson and the KIA advisory practice.",
    url: `${siteConfig.url}/insights`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/kia-og-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "KIA Insights & Economic Architecture Perspectives",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Insights & Perspectives — KIA–Start Up Consult",
    description:
      "Original analysis, policy frameworks, and enterprise scaling strategies from Isaac Agya Koomson.",
    images: [`${siteConfig.url}/images/kia-og-banner.jpg`],
  },
};

export default function InsightsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
