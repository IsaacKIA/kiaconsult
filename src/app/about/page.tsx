import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  Users,
  Layers,
  Award,
  Building2 as Building,
  Tv2,
  Handshake,
  GraduationCap,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import MediaGallery from "@/components/MediaGallery";
import StickySectionNav, { type NavSectionItem } from "@/components/StickySectionNav";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About KIA–Start Up Consult | Economic Architecture for Africa",
  description:
    "KIA–Start Up Consult Ltd is an African economic development and enterprise-building institution at the intersection of policy, capital, and execution. Serving 24 nations under Founder Isaac Agya Koomson.",
  alternates: {
    canonical: `${siteConfig.url}/about`,
  },
  openGraph: {
    title: "About KIA–Start Up Consult | Economic Architecture for Africa",
    description:
      "An African economic development and enterprise-building institution connecting policy, capital, and execution across 24 nations.",
    url: `${siteConfig.url}/about`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/kia-og-banner.jpg`,
        width: 1200,
        height: 630,
        alt: "About KIA–Start Up Consult — Isaac Agya Koomson",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About KIA–Start Up Consult | Economic Architecture for Africa",
    description:
      "Economic development and enterprise-building institution connecting policy, capital, and execution across 24 nations.",
    images: [`${siteConfig.url}/images/kia-og-banner.jpg`],
  },
};

const ABOUT_NAV_SECTIONS: NavSectionItem[] = [
  { id: "vision", label: "Founder's Vision", shortLabel: "Vision" },
  { id: "timeline", label: "Impact Timeline", shortLabel: "Timeline" },
  { id: "model", label: "Operating Model", shortLabel: "Model" },
  { id: "values", label: "Core Values", shortLabel: "Values" },
  { id: "alignment", label: "Strategic Alignment", shortLabel: "Alignment" },
  { id: "board", label: "Advisory Board", shortLabel: "Board" },
  { id: "gallery", label: "Field Gallery", shortLabel: "Gallery" },
];

const values = [
  {
    icon: Users,
    title: "Empowerment & Inclusion",
    body: "We strengthen the capacity of youth, women, and underserved entrepreneurs to participate meaningfully in high-value economic growth.",
    color: "from-blue-500/20 to-blue-600/10",
    accent: "text-blue-600",
  },
  {
    icon: TrendingUp,
    title: "Impact & Accountability",
    body: "We prioritize measurable, auditable outcomes supported by clear performance indicators and transparent reporting.",
    color: "from-emerald-500/20 to-emerald-600/10",
    accent: "text-emerald-600",
  },
  {
    icon: Handshake,
    title: "Partnership & Localization",
    body: "We collaborate with governments, development agencies, private sector actors, and communities to localize global frameworks effectively.",
    color: "from-gold-500/20 to-gold-600/10",
    accent: "text-gold-deep",
  },
  {
    icon: Layers,
    title: "Integrity & Governance",
    body: "We operate with ethical discipline, institutional accountability, and responsible financial and operational stewardship.",
    color: "from-purple-500/20 to-purple-600/10",
    accent: "text-purple-600",
  },
  {
    icon: Globe,
    title: "Innovation & Systems Thinking",
    body: "We apply integrated, technology-enabled, and data-informed approaches to overcome complex economic bottlenecks.",
    color: "from-orange-500/20 to-orange-600/10",
    accent: "text-orange-600",
  },
];

const advisors = [
  { name: "Dr. Benjamin Acheampong", focus: "Development Finance", initial: "A" },
  { name: "Madam Hanne Nuutinen", focus: "International Policy", initial: "H" },
  { name: "Dr. Eric Ekow Ghansah", focus: "Enterprise Development", initial: "E" },
  { name: "Mr. Tarik Amiar", focus: "Regional Strategy", initial: "T" },
  { name: "Madam Faustina Esi Yankson", focus: "Women Enterprise", initial: "F" },
  { name: "Mr. Rene Moerman", focus: "European Partnerships", initial: "R" },
  { name: "Mr. Emmanuel K.O Larbi", focus: "Ghana Operations", initial: "E" },
  { name: "Mr. CA Varun Deep Singh", focus: "Financial Advisory", initial: "V" },
  { name: "Mr. Remy Takang Arrey", focus: "West Africa", initial: "R" },
];

const alignment = [
  "United Nations Development Programme (UNDP)",
  "United Nations Industrial Development Organization (UNIDO)",
  "United Nations Environment Programme (UNEP) / UNEA",
  "United Nations Convention to Combat Desertification (UNCCD)",
  "United Nations Conference on Trade and Development (UNCTAD)",
  "African Union (Agenda 2063 Priorities)",
  "World Bank Group & IFC",
  "National Entrepreneurship & Innovation Programme (NEIP, Ghana)",
  "Bilateral Development Cooperation Agencies (e.g. GIZ)",
];

const milestones = [
  {
    year: "2021",
    title: "KIA–Start Up Consult Founded",
    body: "Established in Ghana with a singular mission: to design practical economic architecture that transforms potential into prosperity.",
    icon: Sparkles,
  },
  {
    year: "2022",
    title: "International Advisory Board Constituted",
    body: "Nine distinguished advisors from international finance, policy, academia, and enterprise development joined the governance board.",
    icon: Users,
  },
  {
    year: "2023",
    title: "Ghana Digital Innovation Week",
    body: "Isaac Agya Koomson keynotes Ghana Digital Innovation Week, presenting on Innovation & Digital Transformation at Ghana's development agenda.",
    icon: Zap,
  },
  {
    year: "2024",
    title: "UNDP Financing for Development",
    body: "Strategic institutional engagement at the UNDP Financing for Development Summit, positioning KIA as a credible global development partner.",
    icon: Globe,
  },
  {
    year: "2025",
    title: "AETF.Ai Continental Stage",
    body: "KIA represents Africa's enterprise development agenda at the AETF.Ai Conference — AI for Africa & Sustainable Development.",
    icon: Award,
  },
];

const operatingModel = [
  {
    icon: Users,
    number: "01",
    title: "Enterprise Level",
    body: "Supporting individual businesses, young founders, and established SMEs through business restructuring, investment preparation, financial modeling, and hands-on advisory.",
  },
  {
    icon: Building,
    number: "02",
    title: "Institutional Level",
    body: "Partnering with universities, TVET institutions, ministries, and bilateral agencies to co-design executable employment pipelines, curriculum commercialization, and incubation centers.",
  },
  {
    icon: Globe,
    number: "03",
    title: "Ecosystem Level",
    body: "Building coordinated national systems — aggregating capital pools via HopeFusion Africa™, linking SME supply to AfCFTA regional markets, and reducing systemic friction.",
  },
];

export default function AboutPage() {
  return (
    <>
      <StickySectionNav title="About KIA" sections={ABOUT_NAV_SECTIONS} />

      {/* ─── 1. CINEMATIC HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-24 md:py-36 text-paper">
        {/* Multi-layer radial glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.28),_rgba(201,162,39,0.14)_45%,_transparent_72%)]" />
        <div className="pointer-events-none absolute -left-32 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.18),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(255,215,0,0.14),_transparent_70%)] blur-3xl" />
        {/* Grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-7 animate-fade-up shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <ShieldCheck className="w-3.5 h-3.5" />
            INSTITUTIONAL IDENTITY
          </div>
          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-4xl font-bold sm:text-5xl md:text-[3.8rem] lg:text-[4.5rem] text-white leading-[1.06] tracking-tight">
            An Economic Architecture Platform for{" "}
            <span className="shimmer-text-vibrant">Africa&rsquo;s Next Generation.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-7 max-w-2xl text-base sm:text-xl leading-relaxed text-white/88">
            KIA–Start Up Consult Ltd is an African economic development and enterprise-building
            institution positioned at the intersection of policy, capital, and execution.
            Rather than producing theoretical reports, we design and construct practical
            systems that translate national strategies into measurable, sovereign economic outcomes.
          </p>

          {/* Quick proof stats */}
          <div className="mt-12 flex flex-wrap items-center gap-6 animate-fade-up delay-400">
            {[
              { value: "24", label: "Nations Engaged" },
              { value: "4,500+", label: "Founders Trained" },
              { value: "$2.5M+", label: "Capital Mobilized" },
              { value: "5+", label: "Years of Impact" },
            ].map((s) => (
              <div
                key={s.label}
                className="gold-glass-card stat-card-glow rounded-xl px-5 py-3.5 border border-gold-500/30 flex flex-col min-w-[100px]"
              >
                <span className="font-display text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 counter-animate">
                  {s.value}
                </span>
                <span className="text-xs text-white/75 font-medium mt-0.5 leading-snug">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 2. CEO VISION ────────────────────────────────────────────────── */}
      <section id="vision" className="scroll-mt-28 container-kia py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          {/* Portrait */}
          <div className="lg:col-span-5 section-reveal">
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/60 via-gold-500/25 to-gold-600/60 shadow-[0_0_50px_rgba(255,215,0,0.18)]">
              <div className="img-reveal relative aspect-[4/5] overflow-hidden rounded-[14px] bg-black">
                <Image
                  src="/images/aetf-ai-panel-speaker.jpg"
                  alt="Isaac Agya Koomson, CEO of KIA–Start Up Consult Ltd"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                  priority
                />
                <div className="gradient-ink-up absolute inset-0" />
                <div className="absolute bottom-5 left-5 right-5">
                  <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-black shadow">
                    Chief Executive Officer
                  </span>
                  <p className="text-base font-bold text-white mt-2 leading-tight">Isaac Agya Koomson</p>
                  <p className="text-xs text-gold-300 font-medium">Founder & Principal Economic Architect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-7 space-y-7 section-reveal section-reveal-delay-2">
            <div className="section-badge section-badge-gold">
              CEO VISION & PHILOSOPHY
            </div>
            <blockquote className="font-display text-2xl sm:text-3xl font-bold leading-snug text-ink border-l-4 border-gold-500 pl-6 bg-gradient-to-r from-gold-500/[0.07] to-transparent py-4 pr-5 rounded-r-xl">
              &ldquo;Africa is not a continent of problems to be solved. It is a continent of
              systems waiting to be built correctly.&rdquo;
            </blockquote>
            <p className="text-base sm:text-lg leading-relaxed text-ink/85 font-normal">
              With the youngest median population in the world and unmatched entrepreneurial drive,
              Africa possesses all the foundational assets required to become the primary engine of
              inclusive global growth. Yet across our continent, talent remains uncoordinated, capital
              is misdirected, and SMEs struggle in perpetual informality.
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-ink/85 font-normal">
              KIA–Start Up Consult was founded on a singular conviction: lasting prosperity requires an
              integrated economic architecture. We connect policy to skills, skills to enterprise,
              enterprises to capital, SMEs to digital productivity, and climate ambition to investable
              green reality.
            </p>

            {/* Media proof badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              <div className="flex items-center gap-2 rounded-full bg-gold-500/12 border border-gold-500/30 px-4 py-2 text-xs font-semibold text-ink hover:bg-gold-500/20 hover:border-gold-500/50 transition-all duration-200">
                <Tv2 className="h-4 w-4 text-gold-deep" />
                <span>Business Tech Guide Feature</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gold-500/12 border border-gold-500/30 px-4 py-2 text-xs font-semibold text-ink hover:bg-gold-500/20 hover:border-gold-500/50 transition-all duration-200">
                <Globe className="h-4 w-4 text-gold-deep" />
                <span>UNDP Dialogue Partner</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-gold-500/12 border border-gold-500/30 px-4 py-2 text-xs font-semibold text-ink hover:bg-gold-500/20 hover:border-gold-500/50 transition-all duration-200">
                <GraduationCap className="h-4 w-4 text-gold-deep" />
                <span>AETF.Ai Continental Speaker</span>
              </div>
            </div>

            <div className="pt-2">
              <WhatsAppCTA message={whatsappMessages.general} size="sm">
                Connect Directly with Leadership
              </WhatsAppCTA>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 3. PREMIUM MILESTONES TIMELINE ───────────────────────────────── */}
      <section id="timeline" className="scroll-mt-28 border-y border-gold-500/30 gold-aurora-bg py-20 text-paper md:py-28 overflow-hidden relative">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.2),_transparent_60%)]" />
        <div className="container-kia relative z-10">
          <div className="section-reveal max-w-xl mb-14">
            <div className="section-badge section-badge-gold-dark mb-4">
              INSTITUTIONAL JOURNEY
            </div>
            <h2 className="font-display text-3xl font-bold text-white md:text-4xl leading-tight">
              Key Milestones
            </h2>
            <div className="section-divider-gold mt-5" />
          </div>
          <div className="relative">
            {/* Animated vertical gold line */}
            <div className="timeline-line hidden sm:block" />
            <div className="flex flex-col gap-0">
              {milestones.map((m, i) => {
                const Icon = m.icon;
                return (
                  <div
                    key={m.year}
                    className="section-reveal flex gap-6 sm:gap-10 pb-10 last:pb-0"
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {/* Year dot */}
                    <div className="hidden sm:flex flex-col items-center shrink-0">
                      <div className="timeline-dot">
                        <span className="text-sm font-bold text-gold-400">{m.year}</span>
                      </div>
                    </div>
                    <div className="flex-1 gold-glass-card shimmer-on-hover rounded-2xl p-7 group hover:border-gold-400/70 transition-all duration-300">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <span className="sm:hidden text-xs font-bold text-gold-400 mb-2 block font-mono">{m.year}</span>
                          <h3 className="font-display text-lg font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                            {m.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/80">{m.body}</p>
                        </div>
                        <div className="hidden sm:flex shrink-0 w-10 h-10 rounded-xl bg-gold-500/20 border border-gold-500/35 items-center justify-center group-hover:bg-gold-500/35 transition-colors">
                          <Icon className="w-5 h-5 text-gold-400" />
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. THREE-TIER OPERATING MODEL ───────────────────────────────── */}
      <section id="model" className="scroll-mt-28 border-b border-line bg-gradient-to-b from-white to-[#f8f8f5] py-20 md:py-28">
        <div className="container-kia">
          <div className="section-reveal max-w-xl mb-14">
            <div className="section-badge section-badge-gold mb-4">HOW WE OPERATE</div>
            <h2 className="font-display text-3xl font-semibold text-ink md:text-4xl leading-tight">
              Three levels, one unified architecture.
            </h2>
            <div className="section-divider-gold mt-5" />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {operatingModel.map((tier, i) => (
              <div
                key={tier.title}
                className="section-reveal gold-card-light shimmer-on-hover rounded-2xl overflow-hidden"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                {/* Gold accent top bar */}
                <div className="h-1 w-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700" />
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-gold-400 to-gold-deep opacity-60">
                      {tier.number}
                    </span>
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/15 border border-gold/25 text-gold-deep">
                      <tier.icon className="h-5 w-5" />
                    </div>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink leading-snug">{tier.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/80">{tier.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. VALUES ────────────────────────────────────────────────────── */}
      <section id="values" className="scroll-mt-28 container-kia py-20 md:py-28">
        <div className="section-reveal mb-14">
          <div className="section-badge section-badge-gold mb-4">OUR FOUNDATION</div>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-ink md:text-4xl leading-tight">
            Core Operating Values
          </h2>
          <div className="section-divider-gold mt-5" />
        </div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="section-reveal value-card-premium rounded-2xl p-7"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${v.color} mb-5`}>
                <v.icon className={`h-6 w-6 ${v.accent}`} />
              </div>
              <h3 className="font-display text-lg font-semibold text-ink leading-snug">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/78">{v.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 6. STRATEGIC ALIGNMENT ───────────────────────────────────────── */}
      <section id="alignment" className="scroll-mt-28 border-y border-gold-500/30 gold-aurora-bg py-20 text-paper md:py-28 overflow-hidden relative">
        <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,215,0,0.15),_transparent_70%)]" />
        <div className="pointer-events-none absolute left-0 bottom-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(245,158,11,0.12),_transparent_70%)]" />
        <div className="container-kia relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 space-y-7 section-reveal">
              <div className="section-badge section-badge-gold-dark">
                GLOBAL & REGIONAL ALIGNMENT
              </div>
              <h2 className="font-display text-3xl font-bold text-white md:text-4xl leading-tight">
                Aligned with global development frameworks.
              </h2>
              <p className="text-base leading-relaxed text-white/85">
                Our programs are purposefully structured to support the Sustainable Development
                Goals (SDGs), the African Union Agenda 2063, and national transformation strategies.
              </p>
              <ul className="grid gap-2.5 sm:grid-cols-2 text-xs text-white/85 pt-2">
                {alignment.map((item, i) => (
                  <li
                    key={item}
                    className="section-reveal flex items-start gap-2.5 rounded-xl glass-obsidian p-3.5 hover:border-gold-500/50 transition-all duration-200"
                    style={{ transitionDelay: `${i * 55}ms` }}
                  >
                    <CheckCircle2 className="h-4 w-4 text-gold-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-6 section-reveal section-reveal-delay-2">
              <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-2xl">
                <div className="img-reveal relative aspect-[4/3] overflow-hidden rounded-[14px] bg-black">
                  <Image
                    src="/images/undp-partnership-meeting.jpg"
                    alt="Strategic engagement at the UNDP Financing for Development desk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 550px"
                    className="object-cover"
                  />
                  <div className="gradient-ink-up absolute inset-0" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black shadow">
                      Institutional Engagement
                    </span>
                    <p className="mt-2 text-sm font-semibold text-white leading-snug">
                      United Nations Development Programme (UNDP) Financing for Development Summit
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 7. ADVISORY BOARD ────────────────────────────────────────────── */}
      <section id="board" className="scroll-mt-28 container-kia py-20 md:py-28">
        <div className="section-reveal mb-14">
          <div className="section-badge section-badge-gold mb-4">GOVERNANCE & GUIDANCE</div>
          <h2 className="mt-2 max-w-xl font-display text-3xl font-bold text-ink md:text-4xl leading-tight">
            International Advisory Board
          </h2>
          <div className="section-divider-gold mt-5 mb-5" />
          <p className="max-w-xl text-base text-ink/78">
            Guided by experienced leaders spanning international finance, enterprise
            development, academia, and policy.
          </p>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advisors.map((advisor, i) => (
            <li
              key={advisor.name}
              className="section-reveal advisor-card shimmer-on-hover flex items-center gap-4 rounded-2xl p-5"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Avatar initial with gold gradient */}
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-gold-300/30 via-gold-400/20 to-gold-500/10 border-2 border-gold/30">
                <span className="text-lg font-extrabold text-gold-deep font-display">
                  {advisor.initial}
                </span>
              </div>
              <div>
                <p className="text-sm font-semibold text-ink leading-snug">{advisor.name}</p>
                <p className="text-xs text-ink/65 mt-1 flex items-center gap-1.5 font-medium">
                  <Award className="h-3 w-3 text-gold-deep shrink-0" />
                  {advisor.focus}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ─── 8. IN THE FIELD GALLERY ──────────────────────────────────────── */}
      <section id="gallery" className="scroll-mt-28 border-y border-line bg-gradient-to-b from-[#f8f8f5] to-white py-20 md:py-28">
        <div className="container-kia">
          <div className="max-w-2xl mb-12 section-reveal">
            <div className="section-badge section-badge-gold mb-4">VISUAL EVIDENCE</div>
            <h2 className="mt-2 font-display text-3xl font-bold text-ink md:text-4xl leading-tight">
              KIA in action — documented proof.
            </h2>
            <div className="section-divider-gold mt-5" />
          </div>
          <MediaGallery />
        </div>
      </section>

      {/* ─── 9. PARTNERSHIP CTA — GOLD AURORA ────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-28 text-paper md:py-36">
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[900px] bg-[radial-gradient(circle,_rgba(255,215,0,0.25)_0%,_rgba(201,162,39,0.12)_50%,_transparent_75%)]" />
        <div className="pointer-events-none absolute left-0 bottom-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,215,0,0.1),_transparent_70%)]" />
        <div className="container-kia relative z-10 flex flex-col items-start gap-8 section-reveal">
          <div className="section-badge section-badge-gold-dark">
            INSTITUTIONAL COLLABORATION
          </div>
          <h2 className="max-w-3xl font-display text-3xl sm:text-5xl font-bold text-white leading-[1.06]">
            Let&rsquo;s build scalable economic systems{" "}
            <span className="shimmer-text-vibrant">together.</span>
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/88">
            Partner with KIA–Start Up Consult to deploy impactful enterprise pipelines, blended
            capital facilities, or youth employment programs in your jurisdiction.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <WhatsAppCTA message={whatsappMessages.partnership} size="lg">
              Discuss Partnership on WhatsApp
            </WhatsAppCTA>
            <Link
              href="/contact"
              className="btn-ripple inline-flex items-center gap-2.5 rounded-full border-2 border-gold-400/60 bg-black/60 hover:bg-gold-500/18 px-7 py-4 text-sm font-bold text-gold-300 hover:text-white transition-all duration-300"
            >
              Send a Formal Enquiry
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
