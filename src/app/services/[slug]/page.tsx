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
  Clock,
  Briefcase,
  FileCheck2,
  TrendingUp,
  HelpCircle,
  Building2,
  Share2,
} from "lucide-react";
import { servicesDetailData, type ServiceDetail } from "@/lib/services-detail-data";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import WhatsAppCTA from "@/components/WhatsAppCTA";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(servicesDetailData).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicesDetailData[slug];

  if (!service) {
    return {
      title: "Service Practice | KIA–Start Up Consult Ltd",
    };
  }

  const url = `${siteConfig.url}/services/${slug}`;

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: `${siteConfig.url}${service.heroImage}`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [`${siteConfig.url}${service.heroImage}`],
    },
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = servicesDetailData[slug];

  if (!service) {
    notFound();
  }

  const allServices = Object.values(servicesDetailData);
  const otherServices = allServices.filter((s) => s.slug !== slug);

  // Structured Data Schema for Google Rich Results
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.legalName,
      url: siteConfig.url,
      logo: `${siteConfig.url}/images/kia-logo.jpg`,
    },
    areaServed: {
      "@type": "Continent",
      name: "Africa",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: service.title,
      itemListElement: service.pillars.map((p, idx) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.title,
          description: p.description,
        },
        position: idx + 1,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ─── 1. BREADCRUMBS & HERO SECTION ─────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 bg-gradient-to-b from-[#08090c] via-[#0f1218] to-[#08090c] pt-28 pb-16 md:pt-36 md:pb-24 text-white">
        {/* Subtle Ambient Radial Gradients */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.2),_rgba(201,162,39,0.08)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 text-xs font-mono text-white/60 mb-6">
            <Link href="/" className="hover:text-gold-300 transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
            <Link href="/services" className="hover:text-gold-300 transition-colors">
              Services
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-gold-500/60" />
            <span className="text-gold-300 font-bold truncate max-w-[200px] sm:max-w-none">
              {service.shortTitle}
            </span>
          </nav>

          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-mono font-bold shadow-[0_0_15px_rgba(255,215,0,0.18)]">
                <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                <span>PRACTICE PILLAR {service.number} · STRATEGIC ADVISORY</span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
                {service.title}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-gold-200/90 leading-relaxed max-w-2xl">
                {service.tagline}
              </p>

              <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-2xl">
                {service.diagnostic.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href={buildWhatsAppLink(service.ctaMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-sm shadow-[0_0_24px_rgba(255,215,0,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all pulse-gold-action"
                >
                  <span>Engage Practice Lead via WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold text-sm border border-white/15 transition-all"
                >
                  <PhoneCall className="w-4 h-4 text-gold-400" />
                  <span>Book Consultation</span>
                </Link>
              </div>

              {/* Impact KPI Strip */}
              <div className="grid grid-cols-3 gap-3 pt-6 border-t border-gold-500/20 max-w-xl">
                {service.impactStats.map((stat) => (
                  <div key={stat.label}>
                    <span className="block font-mono text-2xl sm:text-3xl font-black text-gold-300 drop-shadow-[0_0_12px_rgba(255,215,0,0.4)]">
                      {stat.value}
                    </span>
                    <span className="block text-xs font-bold text-white mt-0.5">{stat.label}</span>
                    <span className="block text-[10px] text-white/60">{stat.subtext}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Hero Graphic Card */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden border-2 border-gold-500/40 shadow-[0_20px_50px_rgba(0,0,0,0.8),_0_0_35px_rgba(255,215,0,0.2)] aspect-[4/3] bg-black group">
                <Image
                  src={service.heroImage}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-gold-500/30">
                  <div className="flex items-center justify-between text-xs text-white">
                    <span className="font-mono text-gold-300 font-bold">
                      KIA Architecture · Practice {service.number}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-gold-500/20 text-gold-300 text-[10px] font-bold border border-gold-400/40">
                      Active Practice
                    </span>
                  </div>
                  <p className="text-xs text-white/80 mt-1 line-clamp-2">
                    Executive oversight by Isaac Agya Koomson & Senior Sector Principals.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. DIAGNOSTIC: THE AFRICAN SYSTEMIC CHALLENGE ──────────────────── */}
      <section className="container-kia py-16 md:py-24 border-b border-line">
        <div className="max-w-4xl mx-auto">
          <div className="section-badge section-badge-gold mb-4">THE STRATEGIC GAP</div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight mb-4">
            {service.diagnostic.headline}
          </h2>
          <div className="section-divider-gold mb-6" />
          <p className="text-base sm:text-lg text-ink/85 leading-relaxed mb-8">
            {service.diagnostic.description}
          </p>

          <div className="rounded-2xl border border-line bg-gradient-to-b from-[#f8f8f5] to-white p-6 sm:p-8">
            <h3 className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep mb-4">
              Structural Failure Points We Eliminate:
            </h3>
            <div className="grid gap-3 sm:grid-cols-2">
              {service.diagnostic.bottlenecks.map((bottleneck, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-line/80 shadow-sm"
                >
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-red-500/10 text-red-600 font-bold text-xs shrink-0 mt-0.5">
                    ✕
                  </span>
                  <span className="text-xs sm:text-sm text-ink/90 leading-snug">{bottleneck}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. CORE INTERVENTION PILLARS ──────────────────────────────────── */}
      <section className="bg-gradient-to-b from-[#090b10] via-[#10141e] to-[#090b10] py-20 text-white relative overflow-hidden">
        <div className="pointer-events-none absolute top-1/4 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.1),_transparent_70%)]" />

        <div className="container-kia relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-mono font-bold mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>CORE ARCHITECTURE</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              Three Pillars of Practice Execution
            </h2>
            <div className="section-divider-gold mt-4 mb-4" />
            <p className="text-base text-white/80 leading-relaxed">
              Every mandate under this practice is executed through our verified three-pillar
              operational framework, ensuring institutional compliance and tangible commercial yield.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {service.pillars.map((pillar, idx) => (
              <div
                key={pillar.title}
                className="rounded-2xl bg-[#0e121a] p-7 sm:p-8 border border-gold-500/25 hover:border-gold-400/60 transition-all duration-300 shadow-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-deep">
                      0{idx + 1}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-[10px] font-mono font-bold text-gold-300">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-200 transition-colors mb-3">
                    {pillar.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  <div className="space-y-2.5 border-t border-white/10 pt-5">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-2.5 text-xs text-white/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 4. PHASED EXECUTION METHODOLOGY ───────────────────────────────── */}
      <section className="container-kia py-20 md:py-28 border-b border-line">
        <div className="max-w-3xl mb-14">
          <div className="section-badge section-badge-gold mb-3">EXECUTION CADENCE</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            How We Implement: Phased Methodology
          </h2>
          <div className="section-divider-gold mt-4 mb-4" />
          <p className="text-base text-ink/80 leading-relaxed">
            From initial diagnostic auditing to final commercial deployment and capital scaling,
            our process follows a disciplined, milestone-governed cadence.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.methodology.map((m) => (
            <div
              key={m.phase}
              className="p-7 rounded-2xl border border-line bg-gradient-to-b from-[#fafaf7] to-white hover:border-gold-500/50 hover:shadow-lg transition-all"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep bg-gold-500/10 px-2.5 py-1 rounded">
                  {m.phase}
                </span>
                <span className="font-mono text-xs text-ink/60 font-semibold">{m.duration}</span>
              </div>

              <h3 className="font-display text-lg font-bold text-ink mb-2">{m.title}</h3>
              <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mb-5">{m.focus}</p>

              <div className="border-t border-line/80 pt-4">
                <span className="block text-[11px] font-mono uppercase tracking-wider text-ink/60 font-bold mb-2">
                  Key Deliverables:
                </span>
                <ul className="space-y-1.5 text-xs text-ink/85">
                  {m.deliverables.map((deliv, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                      <span>{deliv}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 5. INSTITUTIONAL DELIVERABLES CHECKLIST ───────────────────────── */}
      <section className="bg-gradient-to-br from-[#0c0f17] via-[#090b10] to-[#121620] py-20 text-white relative overflow-hidden">
        <div className="container-kia relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-xs font-mono font-bold mb-3">
                <FileCheck2 className="w-3.5 h-3.5" />
                <span>TANGIBLE ASSETS PRODUCED</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
                Mandate Deliverables &amp; Output Checklist
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 mb-4" />
              <p className="text-sm sm:text-base text-gold-100/80 max-w-2xl mx-auto">
                When you engage KIA, you do not receive abstract theoretical presentations. You receive
                audited, bankable, and legally enforceable assets.
              </p>
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              {service.deliverablesChecklist.map((deliv, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-4 rounded-xl bg-black/60 border border-gold-500/25 hover:border-gold-400/60 transition-colors shadow-sm"
                >
                  <CheckCircle2 className="w-5 h-5 text-gold-300 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gold-100/90 font-medium leading-relaxed">
                    {deliv}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-gold-500/20 via-gold-500/10 to-transparent border border-gold-400/40 flex flex-wrap items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-xl font-bold text-white mb-1">
                  Ready to Initiate a Mandate in {service.shortTitle}?
                </h3>
                <p className="text-xs sm:text-sm text-gold-200/80">
                  Connect with CEO Isaac Agya Koomson and our senior transaction team.
                </p>
              </div>
              <a
                href={buildWhatsAppLink(service.ctaMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-magnetic inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-black text-xs shadow-[0_0_20px_rgba(255,215,0,0.45)] hover:scale-105 transition-all"
              >
                <span>Schedule WhatsApp Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. WHO THIS IS ENGINEERED FOR ─────────────────────────────────── */}
      <section className="container-kia py-20 border-b border-line">
        <div className="max-w-3xl mb-12">
          <div className="section-badge section-badge-gold mb-3">TARGET PROFILES</div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Engineered For Three Core Cohorts
          </h2>
          <div className="section-divider-gold mt-4 mb-4" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {service.targetAudience.map((t) => (
            <div
              key={t.title}
              className="p-7 rounded-2xl border border-line bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider text-gold-deep block mb-2">
                  Client Profile
                </span>
                <h3 className="font-display text-xl font-bold text-ink mb-3">{t.title}</h3>
                <p className="text-xs sm:text-sm text-ink/75 leading-relaxed mb-4">{t.profile}</p>
              </div>
              <div className="border-t border-line/80 pt-4">
                <span className="text-[11px] font-mono uppercase tracking-wider text-gold-deep font-bold block mb-1">
                  Strategic Value:
                </span>
                <p className="text-xs text-ink/90 font-medium leading-relaxed">{t.benefit}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 7. BRIDGE TO COMPANION FLAGSHIP PLATFORM ──────────────────────── */}
      <section className="container-kia py-16">
        <div className="rounded-3xl border-2 border-gold-500/40 bg-gradient-to-r from-[#0c0e14] via-[#121622] to-[#0c0e14] p-8 sm:p-12 text-white relative overflow-hidden shadow-2xl">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8 space-y-3">
              <span className="inline-block px-3 py-1 rounded-full bg-gold-500/15 border border-gold-400/30 text-gold-300 text-[10px] font-mono font-bold tracking-wider">
                COMPANION CONTINENTAL PLATFORM
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Operated Under {service.relatedPlatform.name}
              </h3>
              <p className="text-sm text-gold-100/80 max-w-xl">
                {service.relatedPlatform.tagline} Discover how this advisory service directly links
                to our syndicated continental execution platform.
              </p>
            </div>
            <div className="md:col-span-4 md:text-right">
              <Link
                href={service.relatedPlatform.href}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-xs shadow-[0_0_20px_rgba(255,215,0,0.4)] hover:scale-105 transition-all"
              >
                <span>View Platform Prospectus</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 8. PRACTICE FREQUENTLY ASKED QUESTIONS ───────────────────────── */}
      <section className="bg-gradient-to-b from-[#fafaf7] to-white py-20 border-t border-line">
        <div className="container-kia max-w-4xl">
          <div className="text-center mb-12">
            <div className="section-badge section-badge-gold mb-3">FAQ</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink">
              Frequently Asked Questions
            </h2>
            <div className="section-divider-gold mt-4 mb-4 mx-auto" />
            <p className="text-sm text-ink/70">
              Clear answers to the most common institutional inquiries regarding this practice.
            </p>
          </div>

          <div className="space-y-4">
            {service.faqs.map((faq, i) => (
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

      {/* ─── 9. BROWSE OTHER STRATEGIC PRACTICES ───────────────────────────── */}
      <section className="container-kia py-20 border-t border-line">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
          <div>
            <div className="section-badge section-badge-gold mb-2">PORTFOLIO OVERVIEW</div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
              Explore Our Other 5 Strategic Practices
            </h2>
          </div>
          <Link
            href="/services"
            className="text-xs font-bold text-gold-deep hover:text-gold-600 transition-colors inline-flex items-center gap-1.5"
          >
            <span>View All Services Directory</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {otherServices.slice(0, 3).map((other) => (
            <Link
              key={other.slug}
              href={`/services/${other.slug}`}
              className="p-6 rounded-2xl border border-line bg-white hover:border-gold-500/50 hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div>
                <span className="font-mono text-xs font-bold text-gold-deep block mb-1">
                  Pillar {other.number}
                </span>
                <h3 className="font-display text-lg font-bold text-ink group-hover:text-gold-deep transition-colors mb-2">
                  {other.title}
                </h3>
                <p className="text-xs text-ink/70 line-clamp-2 leading-relaxed">
                  {other.diagnostic.headline}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-line/60 flex items-center justify-between text-xs font-bold text-gold-deep">
                <span>Explore Practice</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── 10. GLOBAL CALL TO ACTION ─────────────────────────────────────── */}
      <section className="py-20 px-6 text-center bg-obsidian">
        <WhatsAppCTA
          message={`Hi Kia-Start Up Consult, I'm interested in ${service.title} and would like to learn more.`}
          size="lg"
          className="mx-auto"
        >
          Get Expert Advice — Chat on WhatsApp
        </WhatsAppCTA>
      </section>
    </>
  );
}
