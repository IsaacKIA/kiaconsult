import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SectionReveal from "@/components/SectionReveal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import { siteConfig } from "@/lib/site-config";

/* ─── Rich SEO Metadata ──────────────────────────────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    template: `%s — ${siteConfig.name}`,
  },
  description:
    "KIA–Start Up Consult designs and implements the practical systems that connect skills, enterprise, capital, technology, and sustainable growth across Africa. Serving founders, DFIs, governments, and institutions across 24 nations.",
  keywords: [
    "African startup consulting",
    "business advisory Ghana",
    "enterprise development Africa",
    "AfCFTA trade",
    "blended finance Africa",
    "youth employment Ghana",
    "economic architecture",
    "SME growth Africa",
    "capital syndication",
    "Isaac Agya Koomson",
    "KIA Start Up Consult",
    "HopeFusion Capital",
    "Adwuma Enterprise Pipeline",
  ],
  authors: [{ name: "Isaac Agya Koomson", url: siteConfig.url }],
  creator: "KIA–Start Up Consult Ltd",
  publisher: "KIA–Start Up Consult Ltd",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    description:
      "An economic architecture platform for youth employment, entrepreneurship, and sustainable growth in Africa. Building systems that connect skills, enterprise, capital, and continental markets.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    description:
      "Building the systems behind Africa's next economy. Enterprise, capital, and growth architecture for founders, DFIs and governments.",
    creator: "@kiastartupconsult",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

/* ─── JSON-LD Structured Data ────────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/images/kia-logo.jpg`,
  description:
    "Economic architecture platform connecting skills, enterprise, capital, technology and sustainable growth across Africa.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ajumako, Opposite Hope For Future Generation",
    addressCountry: "GH",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: siteConfig.phone,
    contactType: "customer service",
    availableLanguage: "English",
  },
  sameAs: [siteConfig.social.instagram],
  founder: {
    "@type": "Person",
    name: "Isaac Agya Koomson",
    jobTitle: "Chief Executive Officer",
    worksFor: { "@type": "Organization", name: siteConfig.legalName },
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  url: siteConfig.url,
  name: siteConfig.legalName,
  description: siteConfig.tagline,
  potentialAction: {
    "@type": "SearchAction",
    target: `${siteConfig.url}/insights?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="antialiased" suppressHydrationWarning>
        {/* Gold scroll progress bar — sits above everything */}
        <ScrollProgressBar />

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppFloatingButton />
        <SectionReveal />
      </body>
    </html>
  );
}
