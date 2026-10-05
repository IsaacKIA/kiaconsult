import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ChevronRight,
  Layers,
  PhoneCall,
  Coins,
  Globe2,
  TrendingUp,
  FileCheck2,
  HelpCircle,
  Users2,
  Briefcase,
  Building2,
  Calendar,
} from "lucide-react";
import { platformsDetailData, type PlatformDetail } from "@/lib/platforms-detail-data";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import WhatsAppCTA from "@/components/WhatsAppCTA";

interface PlatformPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(platformsDetailData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
  const { slug } = await params;
  const platform = platformsDetailData[slug];

  if (!platform) {
    return {
      title: "Impact Platform | KIA–Start Up Consult Ltd",
    };
  }

  const url = `${siteConfig.url}/platforms/${slug}`;

  return {
    title: platform.metaTitle,
    description: platform.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: platform.metaTitle,
      description: platform.metaDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${platform.heroImage}`,
          width: 1200,
          height: 630,
          alt: platform.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: platform.metaTitle,
      description: platform.metaDescription,
      images: [`${siteConfig.url}${platform.heroImage}`],
    },
  };
}

export default async function PlatformDetailPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  const platform = platformsDetailData[slug];

  if (!platform) {
    notFound();
  }

  const allPlatforms = Object.values(platformsDetailData);
  const otherPlatforms = allPlatforms.filter((p) => p.slug !== slug);

  // Structured Data Schema for Google Rich Results (Service, BreadcrumbList & FAQPage)
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "GovernmentService",
        "@id": `${siteConfig.url}/platforms/${slug}#platform`,
        name: platform.name,
        description: platform.metaDescription,
        provider: {
          "@type": "Organization",
          name: siteConfig.legalName,
          url: siteConfig.url,
          logo: `${siteConfig.url}/images/kia-logo.jpg`,
        },
        serviceType: "Economic Architecture & Blended Finance Platform",
        areaServed: [
          { "@type": "Country", name: "Ghana" },
          { "@type": "Continent", name: "Africa" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Platforms",
            item: `${siteConfig.url}/platforms`,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: platform.name,
            item: `${siteConfig.url}/platforms/${slug}`,
          },
        ],
      },
      ...(platform.faqs && platform.faqs.length > 0
        ? [
            {
              "@type": "FAQPage",
              mainEntity: platform.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── 1. BREADCRUMBS & ELITE HERO SECTION ───────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 bg-gradient-to-b from-[#06080b] via-[#0d1017] to-[#07090d] pt-28 pb-16 md:pt-36 md:pb-24 text-white">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.22),_rgba(201,162,39,0.1)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
            <Link href="/platforms" className="hover:text-gold-300 transition-colors">
              Platforms
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
            <span className="text-gold-300 font-bold truncate max-w-[200px] sm:max-w-none">
              {platform.name}
            </span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-mono font-bold shadow-[0_0_15px_rgba(255,215,0,0.18)]">
                <Globe2 className="w-3.5 h-3.5 text-gold-400" />
                <span>{platform.badge}</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                {platform.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-gold-200/90 leading-relaxed max-w-2xl">
                {platform.tagline}
              </p>

              {/* AU Agenda 2063 Mandate Quote */}
              <div className="p-4 rounded-xl bg-black/60 border-l-4 border-gold-400 border-r border-t border-b border-gold-500/20 max-w-2xl">
                <span className="block text-[11px] font-mono font-bold text-gold-400 uppercase tracking-widest mb-1">
                  Continental Policy Mandate
                </span>
                <p className="text-xs sm:text-sm text-white/90 leading-relaxed italic">
                  "{platform.mandate}"
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {platform.executiveSummary}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={buildWhatsAppLink(platform.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-sm shadow-[0_0_24px_rgba(255,215,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all pulse-gold-action"
                >
                  <span>Book Executive Briefing with CEO</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
                >
                  <Briefcase className="w-4 h-4 text-gold-400" />
                  <span>Request Institutional Prospectus</span>
                </Link>
              </div>
            </div>

            {/* Right Column: Hero Visual Graphic */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_35px_rgba(255,215,0,0.2)] aspect-[4/3] bg-black group">
                <Image
                  src={platform.heroImage}
                  alt={platform.name}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-gold-500/35">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-gold-300 font-bold">
                      Flagship Continental Platform
                    </span>
                    <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 text-[10px] font-bold border border-gold-400/40">
                      Active Facility
                    </span>
                  </div>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Operated under the 7-Layer Systems Architecture of KIA–Start Up Consult Ltd.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Target Metrics Banner */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-8 border-t border-gold-500/20">
            {platform.targets.map((tgt) => (
              <div
                key={tgt.label}
                className="p-5 rounded-2xl bg-black/50 border border-gold-500/25 hover:border-gold-400/60 transition-colors shadow-inner"
              >
                <span className="block font-mono text-2xl sm:text-3xl font-black text-gold-300 drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
                  {tgt.value}
                </span>
                <span className="block text-xs font-bold text-white mt-1 uppercase tracking-wider font-mono">
                  {tgt.label}
                </span>
                <p className="text-[11px] text-white/65 mt-1 leading-snug">{tgt.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. SYSTEMIC DIAGNOSTIC GAP ─────────────────────────────────────── */}
      <section className="container-kia py-16 md:py-24 border-b border-line">
        <div className="max-w-4xl mx-auto">
          <div className="section-badge section-badge-gold mb-3">SYSTEMIC DIAGNOSIS</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">
            {platform.diagnostic.headline}
          </h2>
          <div className="section-divider-gold mb-6" />
          <p className="text-base sm:text-lg text-ink/85 leading-relaxed mb-8">
            {platform.diagnostic.description}
          </p>

          <div className="rounded-2xl border border-line bg-gradient-to-b from-[#f8f8f5] to-white p-6 sm:p-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep mb-4">
              Structural Failure Points Addressed by {platform.name}:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {platform.diagnostic.systemicFailurePoints.map((pt, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-line/80 shadow-sm"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-600 font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="text-xs sm:text-sm text-ink/90 leading-snug">{pt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. THREE-PHASE ARCHITECTURAL ENGINE ───────────────────────────── */}
      <section className="bg-gradient-to-b from-[#080a0e] via-[#10141f] to-[#080a0e] py-20 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/3 left-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.1),_transparent_70%)]" />

        <div className="container-kia relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-mono font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>EXECUTION ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Three-Phase Deployment Architecture
            </h2>
            <div className="section-divider-gold mt-4 mb-4" />
            <p className="text-base text-white/80 leading-relaxed">
              How capital, enterprise governance, and technology converge to create durable,
              compounding economic yield across Africa.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {platform.threePhaseArchitecture.map((phase) => (
              <div
                key={phase.phase}
                className="rounded-2xl bg-[#0d1017] p-7 sm:p-8 border border-gold-500/30 hover:border-gold-400/70 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-300 bg-gold-500/15 px-3 py-1 rounded border border-gold-500/30">
                      {phase.phase}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-2">
                    {phase.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {phase.focus}
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-5">
                    {phase.activities.map((act, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-white/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-gold-500/20">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-gold-400 font-bold mb-1">
                    Phase Milestone:
                  </span>
                  <p className="text-xs font-bold text-gold-100">{phase.milestone}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. THREE STRATEGIC INTERVENTION PILLARS ──────────────────────── */}
      <section className="container-kia py-20 md:py-28 border-b border-line">
        <div className="max-w-3xl mb-14">
          <div className="section-badge section-badge-gold mb-3">PLATFORM PILLARS</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Key Operational Pillars of {platform.name}
          </h2>
          <div className="section-divider-gold mt-4 mb-4" />
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {platform.pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-8 rounded-2xl border border-line bg-gradient-to-b from-[#fafaf7] to-white hover:border-gold-500/50 hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <h3 className="font-display text-xl font-bold text-ink mb-1">{pillar.title}</h3>
                <p className="text-xs font-mono font-semibold text-gold-deep mb-5">
                  {pillar.subtitle}
                </p>

                <div className="space-y-3 border-t border-line/80 pt-5">
                  {pillar.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-ink/85">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep mt-1.5 shrink-0" />
                      <span className="leading-relaxed">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. ESG & IMPACT GOVERNANCE ────────────────────────────────────── */}
      <section className="bg-gradient-to-br from-[#0c0f17] via-[#090b10] to-[#121620] py-20 text-white relative overflow-hidden">
        <div className="container-kia relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-mono font-bold mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>RIGOROUS ACCOUNTABILITY</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                ESG Standards &amp; Impact Governance
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base text-gold-100/80 max-w-2xl mx-auto">
                Every dollar deployed and every enterprise structured adheres to international
                Environmental, Social, and Governance benchmarks.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {platform.governanceAndEsg.map((esg) => (
                <div
                  key={esg.esgPillar}
                  className="p-6 rounded-2xl bg-black/60 border border-gold-500/25 hover:border-gold-400/60 transition-colors shadow-sm"
                >
                  <span className="block font-mono text-xs font-bold text-gold-400 uppercase tracking-widest mb-2">
                    {esg.esgPillar}
                  </span>
                  <p className="text-xs sm:text-sm text-white/90 leading-relaxed mb-4">
                    {esg.commitment}
                  </p>
                  <div className="pt-3 border-t border-white/10">
                    <span className="block text-[10px] font-mono text-gold-300/80 uppercase">
                      Framework Alignment:
                    </span>
                    <span className="text-xs font-bold text-gold-100">{esg.framework}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. INSTITUTIONAL CO-INVESTMENT & PARTNERSHIP ───────────────────── */}
      <section className="container-kia py-20 border-b border-line">
        <div className="max-w-3xl mb-12">
          <div className="section-badge section-badge-gold mb-3">CO-INVESTMENT ARCHITECTURE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Institutional Partner &amp; Co-Investment Matrix
          </h2>
          <div className="section-divider-gold mt-4 mb-4" />
          <p className="text-base text-ink/80 leading-relaxed">
            We partner with multilateral institutions, commercial banks, and diaspora syndicates to
            scale {platform.name}.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {platform.partnerCoInvestment.map((partner) => (
            <div
              key={partner.partnerType}
              className="p-7 rounded-2xl border border-line bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep block mb-1">
                  Partner Cohort
                </span>
                <h3 className="font-display text-lg font-bold text-ink mb-2">
                  {partner.partnerType}
                </h3>
                <p className="text-xs font-mono font-semibold text-ink/65 mb-4">{partner.role}</p>
              </div>
              <div className="border-t border-line/80 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold-deep font-bold block mb-1">
                  Value Proposition:
                </span>
                <p className="text-xs text-ink/90 font-medium leading-relaxed">
                  {partner.valueProposition}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. FREQUENTLY ASKED QUESTIONS ─────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#fafaf7] to-white py-20 border-t border-line">
        <div className="container-kia max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-badge section-badge-gold mb-3">FAQ</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              Platform Frequently Asked Questions
            </h2>
            <div className="section-divider-gold mt-4 mb-4 mx-auto" />
          </div>

          <div className="space-y-4">
            {platform.faqs.map((faq, i) => (
              <div
                key={i}
                className="rounded-2xl border border-line bg-white p-6 sm:p-7 shadow-sm transition-all"
              >
                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-2.5 flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-gold-deep shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-xs sm:text-sm text-ink/80 leading-relaxed pl-8">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. BROWSE OTHER FLAGSHIP PLATFORMS ─────────────────────────────── */}
      <section className="container-kia py-20 border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-badge section-badge-gold mb-2">PORTFOLIO OVERVIEW</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Explore Our Other Continental Platforms
            </h2>
          </div>
          <Link
            href="/platforms"
            className="text-xs font-bold text-gold-deep hover:text-gold-600 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View All Platforms Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {otherPlatforms.map((other) => (
            <Link
              key={other.slug}
              href={`/platforms/${other.slug}`}
              className="p-6 rounded-2xl border border-line bg-white hover:border-gold-500/50 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-[10px] font-bold text-gold-deep uppercase block mb-1">
                  Continental Platform
                </span>
                <h3 className="font-display text-base font-bold text-ink group-hover:text-gold-deep transition-colors mb-2">
                  {other.name}
                </h3>
                <p className="text-xs text-ink/70 line-clamp-2 leading-relaxed">{other.tagline}</p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-bold text-gold-deep">
                <span>View Prospectus</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 9. GLOBAL CALL TO ACTION ──────────────────────────────────────── */}
      <section className="py-20 px-6 text-center bg-obsidian">
        <WhatsAppCTA
          message={`Hi Kia-Start Up Consult, I'm interested in the ${platform!.name} platform and would like to learn more.`}
          size="lg"
          className="mx-auto"
        >
          Get Expert Advice — Chat on WhatsApp
        </WhatsAppCTA>
      </section>
    </>
  );
}
