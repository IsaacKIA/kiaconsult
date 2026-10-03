import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  TrendingUp,
  AlertCircle,
  CheckCircle2,
  Layers,
  Sparkles,
  ShieldCheck,
  Globe2,
  Coins,
  Briefcase,
  Users2,
  Leaf,
  ChevronRight,
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import AnimatedCounter from "@/components/AnimatedCounter";
import StickySectionNav, { type NavSectionItem } from "@/components/StickySectionNav";
import HashScrollHandler from "@/components/HashScrollHandler";
import { platforms, whatsappMessages, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strategic Impact Platforms | HopeFusion, Adwuma, Nkabom",
  description:
    "Explore KIA's five flagship economic architecture platforms: HopeFusion Africa, Adwuma Enterprise Pipeline, Nkabom Business Advance, Nuru Women Enterprise, and Asase Green Enterprise.",
  alternates: {
    canonical: `${siteConfig.url}/platforms`,
  },
  openGraph: {
    title: "Strategic Impact Platforms — KIA–Start Up Consult",
    description:
      "Explore KIA's five flagship economic architecture platforms: HopeFusion Africa, Adwuma Enterprise Pipeline, Nkabom Business Advance, Nuru Women Enterprise, and Asase Green Enterprise.",
    url: `${siteConfig.url}/platforms`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/kia-og-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "KIA Strategic Impact Platforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Impact Platforms — KIA–Start Up Consult",
    description:
      "Explore KIA's five flagship economic architecture platforms driving capital, enterprise, and job creation in Africa.",
    images: [`${siteConfig.url}/images/kia-og-banner.jpg`],
  },
};

const CONTINENTAL_SUMMARY_STATS = [
  { value: "5", label: "Sovereign Impact Platforms", sub: "Active Architecture" },
  { value: "$255M+", label: "Capital Mobilization Target", sub: "Blended Facilities" },
  { value: "50,000+", label: "Enterprises Scaled & Supported", sub: "Pan-African Pipeline" },
  { value: "112,000+", label: "Dignified Jobs Created", sub: "Target by 2030" },
];

const PLATFORM_ICONS: Record<string, React.ElementType> = {
  "hopefusion-africa": Coins,
  "adwuma-enterprise-pipeline": Briefcase,
  "nkabom-business-advance": Layers,
  "nuru-women-enterprise": Users2,
  "asase-green-enterprise": Leaf,
};

const PLATFORM_PHASES = [
  { step: "01", title: "Ingestion & Audit", desc: "Rigorous diagnostic screening and formal compliance structuring." },
  { step: "02", title: "Capital & Tech Infusion", desc: "Deployment of catalytic blended funding and digital systems." },
  { step: "03", title: "Pan-African Scaling", desc: "Integration into corporate supply chains and AfCFTA corridors." },
];

const PLATFORM_NAV_SECTIONS: NavSectionItem[] = [
  { id: "hopefusion", label: "HopeFusion Africa™", shortLabel: "HopeFusion" },
  { id: "adwuma", label: "Adwuma Enterprise Pipeline™", shortLabel: "Adwuma" },
  { id: "nkabom", label: "Nkabom Business Advance™", shortLabel: "Nkabom" },
  { id: "nuru", label: "Nuru Women Enterprise™", shortLabel: "Nuru" },
  { id: "asase", label: "Asase Green Enterprise™", shortLabel: "Asase" },
  { id: "matrix", label: "Portfolio Matrix", shortLabel: "Matrix" },
  { id: "deployment", label: "Co-Design & Deployment", shortLabel: "Deploy" },
];

export default function PlatformsPage() {
  return (
    <>
      {/* ─── Client Hash Auto-Scroller & Sticky Fast Section Navigator ─────── */}
      <HashScrollHandler />
      <StickySectionNav title="Platform Navigator" sections={PLATFORM_NAV_SECTIONS} />

      {/* ─── 1. ELITE HERO SECTION ────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-20 text-paper md:py-32">
        {/* Glow & grid backgrounds */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[550px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.25),_rgba(201,162,39,0.12)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-6 animate-fade-up">
            <Globe2 className="w-3.5 h-3.5 text-gold-400" />
            <span>SOVEREIGN ARCHITECTURAL VEHICLES</span>
          </div>

          <h1 className="animate-fade-up delay-100 max-w-5xl font-display text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-[4rem] text-white leading-[1.08] tracking-tight">
            Strategic Platforms —{" "}
            <span className="shimmer-text-vibrant">Not Ordinary Projects.</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-6 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-white/92 font-normal">
            Five institutional vehicles engineered to overcome the systemic bottlenecks of African
            markets: de-risking private capital, structuring youth employment pipelines, modernizing
            informal SMEs, advancing women enterprise, and accelerating climate resilience across 24 nations.
          </p>

          {/* Master Continental Target Strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-8 border-t border-gold-500/25 animate-fade-up delay-300">
            {CONTINENTAL_SUMMARY_STATS.map((stat) => (
              <div
                key={stat.label}
                className="gold-glass-card stat-card-glow shimmer-on-hover p-4 sm:p-5 rounded-2xl border border-gold-500/30 text-center"
              >
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fff1a8] via-[#ffd700] to-[#f59e0b] whitespace-nowrap counter-animate">
                  <AnimatedCounter value={stat.value} duration={1600} />
                </span>
                <span className="block text-xs sm:text-sm font-semibold text-white/95 mt-1 leading-tight">
                  {stat.label}
                </span>
                <span className="block text-[10px] font-mono text-gold-300/80 mt-1 uppercase tracking-wider">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>

          {/* Interactive Platform Anchor Navigator */}
          <nav
            className="animate-fade-up delay-400 mt-10 flex flex-wrap gap-2 sm:gap-3"
            aria-label="Platform navigation"
          >
            {platforms.map((p) => {
              const IconComp = PLATFORM_ICONS[p.id] || Sparkles;
              const shortId = p.id.split("-")[0];
              return (
                <a
                  key={p.id}
                  href={`#${shortId}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-black/70 hover:bg-gold-500/20 px-4 py-2 text-xs font-mono font-bold text-gold-300 hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:scale-105"
                >
                  <IconComp className="w-3.5 h-3.5 text-gold-400 group-hover:text-white transition-colors" />
                  <span>{p.name.replace("™", "")}</span>
                </a>
              );
            })}
          </nav>
        </div>
      </section>

      {/* ─── 2. DETAILED PLATFORM DOSSIERS ─────────────────────────────────── */}
      <div className="divide-y divide-line">
        {platforms.map((platform, i) => {
          const IconComponent = PLATFORM_ICONS[platform.id] || Sparkles;
          const isOdd = i % 2 === 1;
          const shortId = platform.id.split("-")[0];

          return (
            <section
              key={platform.id}
              id={platform.id}
              data-anchor={shortId}
              className={`scroll-mt-28 py-20 md:py-28 relative ${
                isOdd ? "bg-[#fbfbf8]" : "bg-white"
              }`}
            >
              {/* Dual anchor so #hopefusion and #hopefusion-africa both work */}
              <span id={shortId} className="absolute -top-28 pointer-events-none opacity-0" aria-hidden="true" />

              <div className="container-kia">
                {/* Platform Header Ribbon */}
                <div className="section-reveal flex flex-col md:flex-row md:items-center justify-between gap-4 mb-10 pb-6 border-b border-gold-500/20">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-600/10 border border-gold-500/40 flex items-center justify-center text-gold-deep shadow-sm">
                      <IconComponent className="w-6 h-6 text-gold-deep" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gold-deep px-2.5 py-0.5 rounded-full bg-gold-500/15 border border-gold-500/30">
                          Platform 0{i + 1}
                        </span>
                        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-wider text-ink/65">
                          Continental Deployment
                        </span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-extrabold text-ink mt-1">
                        <Link href={`/platforms/${platform.id}`} className="hover:text-gold-deep transition-colors">
                          {platform.name}
                        </Link>
                      </h2>
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/30 text-xs font-mono font-bold text-gold-deep self-start md:self-auto">
                    <ShieldCheck className="w-3.5 h-3.5 text-gold-deep" />
                    <span>{platform.tagline}</span>
                  </div>
                </div>

                {/* 2-Column Balanced Architecture */}
                <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
                  {/* Left Column: Briefing, Strategic Solution, and Methodology */}
                  <div
                    className={`section-reveal lg:col-span-6 space-y-6 ${
                      isOdd ? "lg:order-2" : ""
                    }`}
                  >
                    {/* The Systemic Bottleneck (Market Deficit) */}
                    <div className="rounded-2xl border border-red-500/20 bg-gradient-to-br from-red-500/[0.04] to-transparent p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-red-700 mb-2">
                        <AlertCircle className="w-4 h-4 text-red-600" />
                        <span>The Systemic Market Bottleneck</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-ink/90 font-medium">
                        {platform.problem}
                      </p>
                    </div>

                    {/* KIA Strategic Architecture & Impact Focus */}
                    <div className="rounded-2xl border border-gold-500/35 bg-gradient-to-br from-gold-500/12 via-gold-500/5 to-transparent p-5 sm:p-6 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-2">
                        <TrendingUp className="w-4 h-4 text-gold-deep" />
                        <span>KIA Strategic Architecture &amp; Impact Mandate</span>
                      </div>
                      <p className="text-sm sm:text-base leading-relaxed text-ink/92 font-semibold">
                        {platform.impactFocus}
                      </p>
                    </div>

                    {/* 3-Phase Execution Architecture */}
                    <div className="rounded-2xl border border-line bg-mist/40 p-5 sm:p-6">
                      <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/75 mb-4">
                        Operational Execution Architecture
                      </h3>
                      <div className="space-y-3.5">
                        {PLATFORM_PHASES.map((p) => (
                          <div key={p.step} className="flex items-start gap-3">
                            <span className="font-mono text-xs font-extrabold px-2 py-0.5 rounded bg-gold-500/20 text-gold-deep border border-gold-500/30 shrink-0 mt-0.5">
                              {p.step}
                            </span>
                            <div>
                              <strong className="text-xs sm:text-sm font-bold text-ink block">
                                {p.title}
                              </strong>
                              <span className="text-xs text-ink/75 leading-relaxed block mt-0.5">
                                {p.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Call to Action */}
                    <div className="pt-2 flex flex-wrap items-center gap-3">
                      <Link
                        href={`/platforms/${platform.id}`}
                        className="btn-magnetic inline-flex items-center gap-1.5 text-xs font-black text-black bg-gradient-to-r from-gold via-gold-solar to-gold-deep px-5 py-2.5 rounded-full shadow-[0_0_18px_rgba(255,215,0,0.35)] hover:scale-105 transition-all"
                      >
                        <span>Access Dedicated Prospectus</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <WhatsAppCTA
                        message={whatsappMessages.platform(platform.name)}
                        className="btn-magnetic"
                      >
                        Partner on {platform.name}
                      </WhatsAppCTA>
                    </div>
                  </div>

                  {/* Right Column: Visual Verification Showcase & Elegant Metric Deck */}
                  <div
                    className={`section-reveal section-reveal-delay-2 lg:col-span-6 space-y-6 ${
                      isOdd ? "lg:order-1" : ""
                    }`}
                  >
                    {/* Cinematic Photographic Artifact */}
                    {platform.image && (
                      <div className="p-[2px] rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gold-400/60 via-gold-500/25 to-gold-600/60 shadow-xl overflow-hidden group">
                        <div className="relative aspect-16/9 w-full overflow-hidden rounded-[14px] sm:rounded-[22px] bg-black">
                          <Image
                            src={platform.image}
                            alt={`${platform.name} in action — African economic transformation initiative`}
                            fill
                            sizes="(max-width: 1024px) 100vw, 580px"
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                          <div className="absolute bottom-4 left-5 right-5 flex items-center justify-between gap-3">
                            <div>
                              <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow">
                                Verified Institutional Deployment
                              </span>
                              <p className="mt-1 text-sm sm:text-base font-bold text-white leading-snug">
                                {platform.name}
                              </p>
                            </div>
                            <span className="text-[10px] font-mono text-gold-300 bg-black/60 px-2 py-1 rounded border border-gold-500/30 backdrop-blur-sm hidden sm:inline-block">
                              24 African Nations
                            </span>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Elite 2x2 Metric Target Deck — Spacious, High-Contrast & Impossible to Squish */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-ink/75 px-1">
                        <span>Target Performance Indicators</span>
                        <span className="text-gold-deep">Auditable Metrics</span>
                      </div>

                      <div className="grid grid-cols-2 gap-3 sm:gap-4">
                        {platform.targets.map((t, ti) => (
                          <div
                            key={t.label}
                            className="rounded-2xl border border-gold-500/30 bg-white p-4 sm:p-5 text-center stat-card-glow shimmer-on-hover shadow-sm hover:shadow-md relative overflow-hidden transition-all duration-300 group"
                            style={{ transitionDelay: `${ti * 60}ms` }}
                          >
                            {/* Gold top hairline accent */}
                            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

                            <span className="block font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gold-deep via-gold-solar to-gold-400 whitespace-nowrap counter-animate">
                              <AnimatedCounter value={t.value} duration={1600} />
                            </span>

                            <span className="text-xs sm:text-xs text-ink/80 font-bold leading-snug block mt-2 uppercase tracking-wide">
                              {t.label}
                            </span>

                            <div className="mt-2.5 pt-2 border-t border-line/60 flex items-center justify-center gap-1 text-[10px] font-mono text-gold-deep font-semibold">
                              <CheckCircle2 className="w-3 h-3 text-gold-deep" />
                              <span>2026–2030 Ambition</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* ─── 3. CONTINENTAL MATRIX COMPARISON ───────────────────────────────── */}
      <section id="matrix" className="scroll-mt-28 py-20 md:py-28 bg-[#0a0c10] text-paper border-t border-gold-500/25 relative overflow-hidden">
        <div className="container-kia relative z-10">
          <div className="max-w-2xl mb-12 section-reveal">
            <div className="section-badge section-badge-gold-dark mb-3">
              INSTITUTIONAL PORTFOLIO MATRIX
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white leading-tight">
              Five Coordinated Engines for African Growth
            </h2>
            <div className="section-divider-gold mt-4 mb-4" />
            <p className="text-sm sm:text-base text-white/85 leading-relaxed">
              How KIA's platforms connect at the macro and micro levels to deliver end-to-end sovereign transformation.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-gold-500/30 gold-glass-card shadow-2xl">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="border-b border-gold-500/30 bg-black/60 text-gold-300 font-mono uppercase text-[11px] tracking-wider">
                <tr>
                  <th className="p-4 sm:p-5">Platform</th>
                  <th className="p-4 sm:p-5">Strategic Mandate</th>
                  <th className="p-4 sm:p-5">Primary Beneficiaries</th>
                  <th className="p-4 sm:p-5">Key Metric Ambition</th>
                  <th className="p-4 sm:p-5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/10 text-white/88">
                {platforms.map((p) => (
                  <tr key={p.id} className="hover:bg-gold-500/[0.06] transition-colors">
                    <td className="p-4 sm:p-5 font-bold text-white whitespace-nowrap">
                      {p.name}
                    </td>
                    <td className="p-4 sm:p-5 font-mono text-gold-300/90 text-xs">
                      {p.tagline}
                    </td>
                    <td className="p-4 sm:p-5 text-white/80">
                      {p.id === "hopefusion-africa" && "Startups, Growth SMEs & Blended Funds"}
                      {p.id === "adwuma-enterprise-pipeline" && "Youth, TVET Graduates & Digital Innovators"}
                      {p.id === "nkabom-business-advance" && "Established SMEs & Regional Value Chains"}
                      {p.id === "nuru-women-enterprise" && "Female Founders & Women-Owned Cooperatives"}
                      {p.id === "asase-green-enterprise" && "Agri-Tech, Climate Tech & Green Businesses"}
                    </td>
                    <td className="p-4 sm:p-5 font-bold text-gold-300 whitespace-nowrap">
                      {p.targets[0]?.value} {p.targets[0]?.label}
                    </td>
                    <td className="p-4 sm:p-5 whitespace-nowrap">
                      <a
                        href={`#${p.id}`}
                        className="text-xs font-bold text-gold-400 hover:text-white hover:underline inline-flex items-center gap-1"
                      >
                        <span>Inspect Specs</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 4. INSTITUTIONAL CO-DESIGN & DEPLOYMENT ─────────────────────── */}
      <section id="deployment" className="scroll-mt-28 relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-24 text-paper md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.25) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-kia relative z-10 flex flex-col items-start gap-6 section-reveal">
          <div className="section-badge section-badge-gold-dark">
            INSTITUTIONAL CO-DESIGN &amp; DEPLOYMENT
          </div>
          <h2 className="max-w-3xl font-display text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight">
            Partner with KIA to architect or co-fund continental platforms.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-white/92 font-normal">
            We collaborate with development finance institutions (DFIs), national ministries,
            impact investors, and bilateral partners to deploy these vehicles with rigorous
            monitoring, local governance, and auditable outcomes across 24 African nations.
          </p>
          <div className="flex flex-wrap gap-4 pt-3">
            <WhatsAppCTA
              message={whatsappMessages.institutional}
              size="lg"
              className="btn-magnetic pulse-gold-action"
            >
              Discuss Institutional Deployment
            </WhatsAppCTA>
            <Link
              href="/contact"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full border-2 border-gold-400/60 bg-black/60 px-7 py-3.5 text-sm font-bold text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
            >
              <span>Submit a Structured Enquiry</span>
              <ArrowRight className="h-4 w-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

