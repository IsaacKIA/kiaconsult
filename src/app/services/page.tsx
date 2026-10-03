import type { Metadata } from "next";
import Image from "next/image";
import {
  Check,
  ArrowRight,
  Search,
  Pencil,
  Rocket,
  Target,
  Zap,
  Globe2,
  TrendingUp,
  Cpu,
  Leaf,
  Building2,
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import StickySectionNav, { type NavSectionItem } from "@/components/StickySectionNav";
import HashScrollHandler from "@/components/HashScrollHandler";
import { services, whatsappMessages, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strategic Advisory Services | Enterprise, Capital & AfCFTA Trade",
  description:
    "Six strategic service pillars: enterprise creation, SME growth, capital advisory, digital transformation, AfCFTA trade advisory, and ecosystem architecture across Africa.",
  alternates: {
    canonical: `${siteConfig.url}/services`,
  },
  openGraph: {
    title: "Strategic Advisory Services — KIA–Start Up Consult",
    description:
      "Six strategic service pillars: enterprise creation, SME growth, capital advisory, digital transformation, AfCFTA trade advisory, and ecosystem architecture across Africa.",
    url: `${siteConfig.url}/services`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/kia-og-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "KIA Strategic Advisory Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Strategic Advisory Services — KIA–Start Up Consult",
    description:
      "Six strategic service pillars: enterprise creation, SME growth, capital advisory, digital transformation, AfCFTA trade advisory, and ecosystem architecture across Africa.",
    images: [`${siteConfig.url}/images/kia-og-banner.jpg`],
  },
};

/* ─── Static Data ─────────────────────────────────────────────────── */

const SERVICE_ICONS = [Target, TrendingUp, Globe2, Cpu, Leaf, Building2];

const SERVICE_COLORS = [
  { bg: "from-amber-500/20 to-amber-600/10", accent: "text-amber-500", border: "border-amber-500/30" },
  { bg: "from-emerald-500/20 to-emerald-600/10", accent: "text-emerald-500", border: "border-emerald-500/30" },
  { bg: "from-blue-500/20 to-blue-600/10", accent: "text-blue-400", border: "border-blue-500/30" },
  { bg: "from-violet-500/20 to-violet-600/10", accent: "text-violet-400", border: "border-violet-500/30" },
  { bg: "from-rose-500/20 to-rose-600/10", accent: "text-rose-400", border: "border-rose-500/30" },
  { bg: "from-cyan-500/20 to-cyan-600/10", accent: "text-cyan-400", border: "border-cyan-500/30" },
];

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Diagnosis",
    body: "We begin with a thorough assessment of your enterprise stage, sector context, bottlenecks, and goals — building a clear picture before any intervention.",
    time: "Week 1–2",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Architecture Design",
    body: "We design a bespoke roadmap — selecting the right combination from our six service pillars to address your specific challenges and growth trajectory.",
    time: "Week 2–3",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution & Measurement",
    body: "We implement alongside your team, tracking measurable KPIs at every stage — from business registration to capital raise, from digital adoption to market entry.",
    time: "Week 3+",
  },
];

const HERO_STATS = [
  { value: "6", label: "Strategic Pillars", sub: "Coordinated Solutions" },
  { value: "24", label: "Nations Served", sub: "Pan-African Reach" },
  { value: "4,500+", label: "Enterprises Built", sub: "Verified Impact" },
  { value: "$2.5M+", label: "Capital Mobilized", sub: "Direct Facilitation" },
];

const NAV_SECTIONS: NavSectionItem[] = [
  { id: "methodology", label: "Methodology", shortLabel: "Method" },
  { id: "enterprise-creation", label: "Enterprise Creation", shortLabel: "01 Enterprise" },
  { id: "sme-growth", label: "SME Growth", shortLabel: "02 SME" },
  { id: "capital-advisory", label: "Capital Advisory", shortLabel: "03 Capital" },
  { id: "digital-transformation", label: "Digital Transformation", shortLabel: "04 Digital" },
  { id: "sector-advisory", label: "Sector Advisory", shortLabel: "05 Sector" },
  { id: "ecosystem-development", label: "Ecosystem Dev", shortLabel: "06 Ecosystem" },
];

const MATRIX_ROWS = [
  { title: "Enterprise Creation", checks: [true, false, true, false] },
  { title: "SME Growth Advisory", checks: [false, true, false, false] },
  { title: "Capital & Financial Advisory", checks: [true, true, false, true] },
  { title: "Digital Transformation", checks: [true, true, true, false] },
  { title: "Sector-Specific Advisory", checks: [false, true, true, false] },
  { title: "Ecosystem Development", checks: [false, false, true, true] },
];

const GUARANTEE_PILLARS = [
  { label: "Bespoke to Your Stage", body: "No one-size solution. We match interventions to your exact enterprise context." },
  { label: "Measurable KPIs Throughout", body: "Every engagement has defined, auditable milestones." },
  { label: "Pan-African Execution", body: "Field presence across 24 nations — not just advisory." },
];

export default function ServicesPage() {
  return (
    <>
      <HashScrollHandler />
      <StickySectionNav title="Service Pillars" sections={NAV_SECTIONS} />

      {/* ─── 1. CINEMATIC HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-24 md:py-32 text-paper">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.28),_rgba(201,162,39,0.14)_45%,_transparent_72%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.16),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-7 animate-fade-up shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <Zap className="w-3.5 h-3.5" />
            STRATEGIC SERVICE PORTFOLIO
          </div>

          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-4xl font-bold text-white sm:text-5xl md:text-[3.8rem] lg:text-[4.5rem] leading-[1.06] tracking-tight">
            Integrated Enterprise &amp;{" "}
            <span className="shimmer-text-vibrant">Economic Systems Solutions.</span>
          </h1>

          <p className="animate-fade-up delay-200 mt-7 max-w-2xl text-base sm:text-xl leading-relaxed text-white/88">
            KIA–Start Up Consult delivers structured, end-to-end services that support
            enterprise creation, growth, capital access, digital transformation, and
            ecosystem development — organized into six coordinated strategic pillars.
          </p>

          <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4 animate-fade-up delay-300">
            {HERO_STATS.map((s) => (
              <div key={s.label} className="gold-glass-card stat-card-glow rounded-2xl p-5 border border-gold-500/30 flex flex-col">
                <span className="font-display text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 counter-animate">{s.value}</span>
                <span className="text-xs text-white/85 font-semibold mt-1.5 leading-snug">{s.label}</span>
                <span className="text-[10px] text-white/50 font-mono mt-0.5">{s.sub}</span>
              </div>
            ))}
          </div>

          <div className="mt-14 animate-fade-up delay-400">
            <p className="text-xs font-mono font-bold uppercase tracking-wider text-gold-400/80 mb-4">
              Jump to Service Pillar →
            </p>
            <div className="flex flex-wrap gap-2">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold-500/30 bg-white/5 backdrop-blur-sm text-xs font-mono font-bold text-gold-300 hover:bg-gold-500/20 hover:border-gold-400/60 hover:text-white transition-all duration-200"
                >
                  <span className="text-gold-500/70">{s.number}</span>
                  {s.title.split("&")[0].trim()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. METHODOLOGY ─────────────────────────────────────────────────── */}
      <section
        id="methodology"
        className="scroll-mt-24 border-b border-gold-500/20 bg-gradient-to-b from-[#0a0c10] to-[#12151c] py-24 text-paper md:py-28 relative overflow-hidden"
      >
        <div className="pointer-events-none absolute right-0 top-0 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,215,0,0.07),_transparent_70%)]" />
        <div className="container-kia relative z-10">
          <div className="flex items-center gap-4 mb-3 section-reveal">
            <div className="section-badge section-badge-gold-dark">OUR METHODOLOGY</div>
            <div className="h-px flex-1 max-w-xs bg-gradient-to-r from-gold-500/30 to-transparent" />
          </div>
          <div className="grid gap-4 lg:grid-cols-12 mb-14 section-reveal">
            <h2 className="lg:col-span-6 font-display text-3xl font-bold text-white sm:text-4xl leading-snug">
              How we architect progress with you.
            </h2>
            <p className="lg:col-span-6 lg:self-end text-base text-white/70 leading-relaxed">
              Every KIA engagement follows a disciplined three-phase process — ensuring your resources
              are invested in exactly the right interventions at exactly the right time.
            </p>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[3.5rem] left-[calc(16.67%+1px)] right-[calc(16.67%+1px)] h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent z-0" />
            <div className="grid gap-6 md:grid-cols-3 relative z-10">
              {processSteps.map((step, i) => (
                <div
                  key={step.step}
                  className="section-reveal relative rounded-2xl gold-glass-card p-8 border border-gold-500/25 group hover:border-gold-400/60 stat-card-glow shimmer-on-hover transition-all duration-300"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold-500/25 to-gold-500/10 border border-gold-500/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon className="h-6 w-6 text-gold-300" />
                    </div>
                    <span className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300/60 to-gold-deep/40">
                      {step.step}
                    </span>
                  </div>
                  <div className="mb-3 inline-block px-2.5 py-0.5 rounded-full border border-gold-500/25 bg-gold-500/10 text-[10px] font-mono font-bold text-gold-400">
                    {step.time}
                  </div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-white/80">{step.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 section-reveal">
            <div className="rounded-2xl border border-gold-500/25 bg-white/[0.03] p-6 sm:p-8 grid sm:grid-cols-3 gap-6 sm:gap-0 sm:divide-x sm:divide-gold-500/20">
              {GUARANTEE_PILLARS.map((p, i) => (
                <div key={p.label} className={`${i > 0 ? "sm:pl-8" : ""} ${i < 2 ? "sm:pr-8" : ""}`}>
                  <div className="w-2 h-2 rounded-full bg-gold-400 mb-3" />
                  <h4 className="text-sm font-bold text-white mb-2">{p.label}</h4>
                  <p className="text-xs text-white/65 leading-relaxed">{p.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICE DEEP DIVES ──────────────────────────────────────────── */}
      {services.map((service, i) => {
        const Icon = SERVICE_ICONS[i] || Target;
        const color = SERVICE_COLORS[i] || SERVICE_COLORS[0];
        const isEven = i % 2 === 0;

        return (
          <section
            key={service.id}
            id={service.id}
            className={`scroll-mt-24 border-b border-line relative overflow-hidden ${
              isEven ? "bg-paper" : "bg-gradient-to-b from-[#f8f8f5] to-[#f4f4ef]"
            }`}
          >
            <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(201,162,39,0.04),_transparent_70%)]" />
            <div className="container-kia py-20 md:py-28 relative z-10">

              {/* Pillar header */}
              <div className="section-reveal flex items-center gap-4 mb-12">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color.bg} border ${color.border} shrink-0`}>
                  <Icon className={`h-6 w-6 ${color.accent}`} />
                </div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-deep to-gold-solar">
                    {service.number}
                  </span>
                  <div className="h-8 w-px bg-gold-500/30" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25">
                    Strategic Pillar {service.number}
                  </span>
                </div>
              </div>

              {/* Content + Image grid */}
              <div className="grid gap-14 lg:grid-cols-12 lg:items-start">

                {/* Content */}
                <div className={`section-reveal space-y-8 lg:col-span-7 ${!isEven ? "lg:order-2" : ""}`}>
                  <div>
                    <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-snug">
                      {service.title}
                    </h2>
                    <div className="w-14 h-0.5 bg-gradient-to-r from-gold-500 to-transparent mt-4" />
                  </div>

                  {/* Problem card */}
                  <div className="rounded-2xl border-l-4 border-l-gold-500 border border-gold-500/25 bg-gradient-to-r from-gold-500/[0.07] via-gold-500/[0.03] to-transparent p-6">
                    <p className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-2">
                      The Challenge We Solve
                    </p>
                    <p className="text-base leading-relaxed text-ink/85 font-medium">{service.problem}</p>
                  </div>

                  {/* Capabilities */}
                  <div>
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-5">
                      Key Capabilities &amp; Advisory Scope
                    </h3>
                    <ul className="grid gap-2.5 sm:grid-cols-2">
                      {service.approach.map((item, j) => (
                        <li
                          key={item}
                          className="section-reveal flex items-start gap-2.5 p-3.5 rounded-xl bg-gradient-to-r from-gold-500/[0.07] to-transparent border border-gold-500/20 shimmer-on-hover hover:border-gold-500/45 hover:from-gold-500/[0.13] transition-all duration-200"
                          style={{ transitionDelay: `${j * 50}ms` }}
                        >
                          <div className="mt-0.5 w-5 h-5 rounded-full bg-gold-500/20 border border-gold-500/35 flex items-center justify-center shrink-0">
                            <Check className="h-3 w-3 text-gold-deep" />
                          </div>
                          <span className="text-sm text-ink/90 font-medium leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Outcome */}
                  <div className="rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 via-gold-500/5 to-transparent p-6 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/35 flex items-center justify-center shrink-0 mt-0.5">
                      <Target className="h-5 w-5 text-gold-deep" />
                    </div>
                    <div>
                      <p className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-2">
                        Primary Outcome Focus
                      </p>
                      <p className="text-sm leading-relaxed text-ink/88 font-medium">{service.outcome}</p>
                    </div>
                  </div>

                  <WhatsAppCTA message={service.ctaMessage} className="btn-magnetic">
                    Discuss This Pillar With KIA
                  </WhatsAppCTA>
                </div>

                {/* Image */}
                <div className={`section-reveal section-reveal-delay-2 lg:col-span-5 ${!isEven ? "lg:order-1" : ""}`}>
                  {service.image ? (
                    <div className="sticky top-28">
                      <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
                        <div className="img-reveal relative aspect-4/3 overflow-hidden rounded-2xl border border-gold-500/20 bg-mist">
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 450px"
                            className="object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="gradient-ink-up absolute inset-0" />
                          <div className="absolute bottom-4 left-5 right-5">
                            <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow">
                              KIA Strategic Practice
                            </span>
                            <p className="mt-2 text-sm font-bold leading-snug text-white">{service.title}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta strip */}
                      <div className="mt-4 rounded-xl border border-gold-500/25 bg-white p-4 flex items-center justify-between shadow-sm">
                        <div className="text-center flex-1">
                          <p className="font-display text-lg font-black text-gold-deep">{service.number}/06</p>
                          <p className="text-[10px] font-mono text-ink/50 uppercase tracking-wider">Pillar</p>
                        </div>
                        <div className="h-8 w-px bg-line" />
                        <div className="text-center flex-1">
                          <p className="text-xs font-bold text-ink">Pan-African</p>
                          <p className="text-[10px] font-mono text-ink/50 uppercase tracking-wider">Delivery</p>
                        </div>
                        <div className="h-8 w-px bg-line" />
                        <div className="text-center flex-1">
                          <p className="text-xs font-bold text-ink">24 Nations</p>
                          <p className="text-[10px] font-mono text-ink/50 uppercase tracking-wider">Coverage</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="aspect-4/3 rounded-2xl border border-dashed border-gold-500/30 bg-mist/50 flex items-center justify-center p-8 text-center text-xs text-ink/70">
                      Pillar Architecture Visual
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center pb-3 pointer-events-none">
              <span className="text-[10px] font-mono text-ink/20 uppercase tracking-[0.2em]">
                Pillar {service.number} of 06
              </span>
            </div>
          </section>
        );
      })}

      {/* ─── 4. SERVICES COMPARISON MATRIX ────────────────────────────────── */}
      <section className="border-b border-gold-500/20 bg-gradient-to-b from-[#0a0c10] to-[#0d1018] py-20 text-paper md:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_rgba(255,215,0,0.06),_transparent_70%)]" />
        <div className="container-kia relative z-10">
          <div className="section-reveal max-w-xl mb-14">
            <div className="section-badge section-badge-gold-dark mb-4">SERVICE MATRIX</div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl leading-tight">
              Which pillars apply to your mission?
            </h2>
            <p className="mt-4 text-sm text-white/70 leading-relaxed">
              Most KIA clients engage two to four pillars simultaneously. Our advisory team designs
              the optimal combination for your unique stage and goal.
            </p>
          </div>

          <div className="section-reveal overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-sm">
              <thead>
                <tr className="border-b border-gold-500/25">
                  <th className="text-left py-3 pr-6 text-xs font-mono font-bold uppercase tracking-wider text-gold-400/80 w-[220px]">
                    Service Pillar
                  </th>
                  {["Startup", "SME", "Institution", "Investor"].map((h) => (
                    <th key={h} className="py-3 px-4 text-xs font-mono font-bold uppercase tracking-wider text-gold-400/80 text-center">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {MATRIX_ROWS.map((row, i) => (
                  <tr key={row.title} className="border-b border-white/5 group hover:bg-white/[0.03] transition-colors">
                    <td className="py-4 pr-6 font-semibold text-white/85 text-sm">
                      <span className="text-gold-500/60 font-mono text-xs mr-2">0{i + 1}</span>
                      {row.title}
                    </td>
                    {row.checks.map((checked, j) => (
                      <td key={j} className="py-4 px-4 text-center">
                        {checked ? (
                          <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gold-500/20 border border-gold-500/40 mx-auto">
                            <Check className="h-3.5 w-3.5 text-gold-400" />
                          </span>
                        ) : (
                          <span className="inline-block w-4 h-0.5 bg-white/15 rounded-full mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ─── 5. CTA ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-24 text-paper md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.22) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-kia relative z-10 flex flex-col items-start gap-6 section-reveal">
          <div className="section-badge section-badge-gold-dark">CUSTOM ARCHITECTURE</div>
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-5xl leading-tight text-white">
            Need a tailored enterprise or institutional solution?
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
            Our advisory team can assess your organization&rsquo;s current stage and design an
            integrated roadmap across these six pillars — at no obligation to you.
          </p>
          <div className="flex flex-wrap gap-4">
            <WhatsAppCTA message={whatsappMessages.general} size="lg" className="btn-magnetic pulse-gold-action">
              Schedule a Discovery Session on WhatsApp
            </WhatsAppCTA>
            <a
              href="/contact"
              className="btn-ripple inline-flex items-center gap-2.5 rounded-full border-2 border-gold-400/60 bg-black/60 hover:bg-gold-500/18 px-7 py-4 text-sm font-bold text-gold-300 hover:text-white transition-all duration-300"
            >
              Submit a Formal Enquiry
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
