import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";
import SectionReveal from "@/components/SectionReveal";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import HashScrollHandler from "@/components/HashScrollHandler";
import { siteConfig } from "@/lib/site-config";

/* ─── Self-hosted fonts via next/font (zero render-blocking) ─────────────── */
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["500", "600", "700", "800"],
});

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
    "business consultant Ghana",
    "enterprise development Africa",
    "AfCFTA trade advisory",
    "blended finance Africa",
    "youth employment Ghana",
    "economic architecture Africa",
    "SME growth Ghana",
    "capital syndication Africa",
    "Isaac Agya Koomson",
    "KIA Start Up Consult",
    "HopeFusion Africa",
    "Adwuma Enterprise Pipeline",
    "enterprise consultant Accra",
    "startup advisory West Africa",
    "UNDP Ghana enterprise",
    "investment readiness Africa",
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
    images: [
      {
        url: `${siteConfig.url}/images/kia-og-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "KIA–Start Up Consult Ltd — Building the Systems Behind Africa's Next Economy",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.legalName} — ${siteConfig.tagline}`,
    description:
      "Building the systems behind Africa's next economy. Enterprise, capital, and growth architecture for founders, DFIs and governments.",
    creator: "@kiastartupconsult",
    images: [`${siteConfig.url}/images/kia-og-banner.jpg`],
  },
  alternates: {
    canonical: siteConfig.url,
  },
  verification: {
    google: "ABYN-qEa5KzqlZ7RPLGkU5NBnwaBafHruc4yRnq5EW0",
    other: {
      "msvalidate.01": "522580722D78A032ED816855A17288DD",
    },
  },
  category: "Economic Architecture & Venture Consulting",
};

/* ─── JSON-LD Structured Data ────────────────────────────────────────────── */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteConfig.url}/#organization`,
  name: siteConfig.legalName,
  alternateName: [siteConfig.name, "KIA Consult", "KIA Start Up"],
  url: siteConfig.url,
  logo: {
    "@type": "ImageObject",
    url: `${siteConfig.url}/images/kia-logo.jpg`,
    width: 400,
    height: 400,
  },
  description:
    "Economic architecture platform connecting skills, enterprise, capital, technology and sustainable growth across Africa. Serving founders, DFIs, governments and institutions across 24 nations.",
  foundingDate: "2020",
  areaServed: [
    "Ghana",
    "Nigeria",
    "Kenya",
    "Rwanda",
    "South Africa",
    "West Africa",
    "East Africa",
    "Sub-Saharan Africa",
  ],
  knowsAbout: [
    "Enterprise Development",
    "Startup Advisory",
    "Capital Syndication",
    "Blended Finance",
    "AfCFTA Trade",
    "SME Growth",
    "Youth Entrepreneurship",
    "Digital Transformation",
    "Economic Architecture",
    "Investment Readiness",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ajumako, Opposite Hope For Future Generation",
    addressLocality: "Ajumako",
    addressRegion: "Central Region",
    addressCountry: "GH",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "GH",
    },
    {
      "@type": "ContactPoint",
      telephone: siteConfig.phoneIntl,
      contactType: "customer service",
      availableLanguage: "English",
      areaServed: "GB",
    },
  ],
  sameAs: [
    siteConfig.social.instagram,
    "https://www.linkedin.com/company/kia-start-up-consult",
    "https://wa.me/233241332246",
  ],
  founder: {
    "@type": "Person",
    "@id": `${siteConfig.url}/about#isaac-agya-koomson`,
    name: "Isaac Agya Koomson",
    jobTitle: "Founder & Chief Executive Officer",
    description:
      "Keynote speaker at AETF.Ai 2025, Ghana Digital Innovation Week, UNDP Financing for Development Dialogue, and Business Tech Guide national television.",
    worksFor: { "@type": "Organization", name: siteConfig.legalName },
    knowsAbout: [
      "Economic Architecture",
      "Enterprise Development",
      "Capital Syndication",
      "AfCFTA Trade",
      "Blended Finance",
      "Youth Employment",
    ],
    hasCredential: [
      {
        "@type": "EducationalOccupationalCredential",
        name: "AETF.Ai Conference 2025 — Keynote Speaker",
        credentialCategory: "Public Speaking",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "Ghana Digital Innovation Week — Keynote Speaker",
        credentialCategory: "Public Speaking",
      },
      {
        "@type": "EducationalOccupationalCredential",
        name: "UNDP Financing for Development Dialogue — Institutional Speaker",
        credentialCategory: "Public Speaking",
      },
    ],
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteConfig.url}/#local-business`,
  name: siteConfig.legalName,
  url: siteConfig.url,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  description:
    "Premier economic architecture and enterprise advisory firm in Ghana, serving startups, SMEs, development institutions and governments across 24 African nations.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Ajumako, Opposite Hope For Future Generation",
    addressLocality: "Ajumako",
    addressRegion: "Central Region",
    addressCountry: "GH",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "5.3745",
    longitude: "-1.0148",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "GHS, USD, GBP",
  areaServed: ["Ghana", "Nigeria", "Kenya", "West Africa", "Sub-Saharan Africa"],
  serviceType: [
    "Enterprise Advisory",
    "Startup Consulting",
    "Capital Syndication",
    "SME Advisory",
    "AfCFTA Trade Advisory",
    "Digital Transformation",
    "Youth Enterprise Programs",
    "Institutional Economic Design",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "KIA Strategic Advisory Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Creation & Venture Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SME Growth & Competitiveness Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Capital & Financial Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital & Technology Transformation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AfCFTA Trade & Sector Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ecosystem Development & Institutional Support" } },
    ],
  },
  parentOrganization: { "@id": `${siteConfig.url}/#organization` },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  url: siteConfig.url,
  name: siteConfig.legalName,
  description: siteConfig.tagline,
  publisher: { "@id": `${siteConfig.url}/#organization` },
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
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
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
        <HashScrollHandler />
      </body>
    </html>
  );
}

