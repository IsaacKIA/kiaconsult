import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  ChevronRight,
  Play,
  Camera,
  Star,
  Zap,
  Globe,
  TrendingUp,
  Award,
} from "lucide-react";
import HeroCinematicBanner from "@/components/HeroCinematicBanner";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import EconomicArchitecture from "@/components/EconomicArchitecture";
import ImpactDashboard from "@/components/ImpactDashboard";
import FAQAccordion from "@/components/FAQAccordion";
import AfricanNetworkCanvas from "@/components/AfricanNetworkCanvas";
import CapitalSimulator from "@/components/CapitalSimulator";
import StickySectionNav, { type NavSectionItem } from "@/components/StickySectionNav";
import {
  nationalImpactTargets,
  platforms,
  services,
  siteConfig,
  whatsappMessages,
} from "@/lib/site-config";
import { insightArticles } from "@/lib/insights-data";
import { faqItems } from "@/lib/site-config";

export const metadata: Metadata = {
  title: `${siteConfig.legalName} — ${siteConfig.tagline}`,
  description:
    "KIA–Start Up Consult Ltd designs and implements institutional economic architecture that connects skills, enterprise, capital, technology and sustainable growth across Africa. Serving 24 nations.",
  alternates: {
    canonical: siteConfig.url,
  },
};

const tickerItems = [
  "AETF.Ai Conference 2025 Keynote",
  "Ghana Digital Innovation Week Podium",
  "UNDP Financing for Development Dialogue",
  "National Entrepreneurship & Innovation (NEIP)",
  "Business Tech Guide Television Broadcast",
  "African Union Agenda 2063 Alignment",
  "AfCFTA Cross-Border Trade Acceleration",
  "Enterprise Creation → Capital Syndication → Growth",
];

const HOME_NAV_SECTIONS: NavSectionItem[] = [
  { id: "challenge", label: "Strategic Challenge", shortLabel: "Challenge" },
  { id: "corridors", label: "24-Nation Corridors", shortLabel: "Corridors" },
  { id: "architecture", label: "7-Layer Framework", shortLabel: "Architecture" },
  { id: "simulator", label: "Capital Simulator", shortLabel: "Simulator" },
  { id: "practices", label: "6 Practices", shortLabel: "Practices" },
  { id: "platforms", label: "Impact Vehicles", shortLabel: "Platforms" },
  { id: "impact", label: "Impact Targets", shortLabel: "Impact" },
  { id: "media", label: "Executive Media", shortLabel: "Media" },
  { id: "insights", label: "Publications", shortLabel: "Insights" },
  { id: "faq", label: "FAQ", shortLabel: "FAQ" },
];

export default function Home() {
  const featuredArticles = insightArticles.slice(0, 3);

  return (
    <>
      {/* Sticky Quick Section Navigator — lets users locate and jump to any section in < 2 seconds */}
      <StickySectionNav title="Explore Home" sections={HOME_NAV_SECTIONS} />

      {/* ─── 1. EXTRAORDINARY REAL ANIMATED HERO BANNER ────────────────────── */}
      <div id="hero">
        <HeroCinematicBanner />
      </div>

      {/* ─── 2. CONTINENTAL TICKER STRIP (FLOATING AMBIENT BANNER) ──────── */}
      <section className="relative z-20 border-y-2 border-gold-500/50 bg-gradient-to-r from-[#07080a] via-[#1a1708] to-[#07080a] py-4.5 overflow-hidden shadow-[0_0_30px_rgba(255,215,0,0.2)]">
        {/* Subtle gold glow line */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-gold-400 to-transparent opacity-80" />
        <div className="ticker-track">
          {[...tickerItems, ...tickerItems].map((item, i) => (
            <div key={i} className="flex items-center shrink-0 group/ticker cursor-pointer">
              <span className="px-8 text-xs sm:text-sm font-mono font-extrabold uppercase tracking-widest text-[#ffd700] group-hover/ticker:text-white group-hover/ticker:scale-105 transition-all duration-300 whitespace-nowrap drop-shadow-[0_0_8px_rgba(255,215,0,0.5)]">
                {item}
              </span>
              <span className="text-[#ffd700] text-sm font-black animate-pulse drop-shadow-[0_0_6px_rgba(255,215,0,0.8)]">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── 3. CORE STORY: THE ARCHITECTURAL GAP & CEO ───────────────────── */}
      <section id="challenge" className="container-kia py-20 md:py-28 relative overflow-hidden scroll-mt-28">
        {/* Ambient background auras */}
        <div className="pointer-events-none absolute top-1/2 -translate-y-1/2 -left-32 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(255,215,0,0.07),_transparent_70%)]" />
        <div className="pointer-events-none absolute top-1/4 right-0 w-64 h-64 bg-[radial-gradient(circle,_rgba(201,162,39,0.06),_transparent_70%)]" />

        <div className="grid gap-12 lg:grid-cols-12 items-center relative z-10">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-6 space-y-7">
            <div className="section-badge section-badge-gold">
              <ShieldCheck className="w-3.5 h-3.5" />
              THE STRATEGIC CHALLENGE
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.1] text-ink">
              Africa does not lack ambition.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c9a227] via-[#eab308] to-[#ffd700]">
                It lacks interconnected systems
              </span>{" "}
              that turn potential into sovereign economic value.
            </h2>

            {/* Gold accent quote */}
            <blockquote className="border-l-4 border-gold-500 pl-5 bg-gradient-to-r from-gold-500/8 to-transparent py-3 pr-4 rounded-r-xl">
              <p className="text-base sm:text-lg text-ink/90 leading-relaxed italic font-medium">
                "Fragmented ecosystems, isolated donor projects, and unbankable enterprise structures
                keep transformative ideas from scaling into lasting prosperity."
              </p>
              <cite className="block mt-2 text-xs font-bold text-gold-deep not-italic">
                — Isaac Agya Koomson, Founder & CEO
              </cite>
            </blockquote>

            <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
              KIA–Start Up Consult Ltd was founded on a singular conviction: Africa&rsquo;s economic
              ascension requires institutional architecture — connecting technical skills, corporate
              governance, blended capital, pragmatic technology, and AfCFTA cross-border market
              access.
            </p>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-bold text-gold-deep hover:text-gold-600 transition-colors group"
            >
              <span>Read CEO Isaac Agya Koomson&rsquo;s Institutional Profile</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Right Column: Image with premium frame */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              {/* Gold gradient border frame */}
              <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/60 via-gold-500/25 to-gold-600/60">
                <div className="relative aspect-4/3 overflow-hidden rounded-[14px] bg-black">
                  <Image
                    src="/images/gdiw-keynote-speaking.jpg"
                    alt="Isaac Agya Koomson delivering keynote at Ghana Digital Innovation Week"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                  {/* Bottom label */}
                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-gold-400 to-amber-500 text-black text-[10px] font-extrabold uppercase font-mono tracking-wider shadow-lg">
                      <Star className="w-3 h-3" />
                      Keynote Address
                    </span>
                    <h4 className="text-xl font-display font-semibold mt-3 text-white leading-snug">
                      Ghana Digital Innovation Week Keynote
                    </h4>
                    <p className="text-xs text-white/90 mt-1.5 line-clamp-2">
                      Catalysing systemic change and institutional enterprise architecture across sovereign African markets.
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-ink border border-gold-500/50 rounded-2xl px-4 py-3 shadow-xl">
                <p className="text-[10px] font-mono font-bold uppercase text-gold-400 tracking-wider">
                  24 Nations
                </p>
                <p className="text-white font-bold text-sm">Active Engagement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. TRUST / CREDENTIALS BAR ──────────────────────────────────── */}
      <section className="border-y border-line bg-gradient-to-r from-mist/80 via-white to-mist/80 py-10">
        <div className="container-kia">
          <p className="text-center text-[11px] font-mono uppercase tracking-[0.18em] text-ink/70 font-bold mb-8">
            Recognized & Engaged By
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 md:gap-8">
            {[
              { icon: Globe, label: "UNDP", sub: "Financing for Development" },
              { icon: Award, label: "AETF.Ai 2025", sub: "Keynote Speaker" },
              { icon: TrendingUp, label: "AfCFTA", sub: "Trade Acceleration" },
              { icon: Zap, label: "NEIP Ghana", sub: "Innovation Partner" },
              { icon: Star, label: "AU Agenda 2063", sub: "Alignment Partner" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.label}
                  className="flex flex-col items-center gap-2.5 text-center group px-5 py-4 rounded-2xl border border-transparent hover:border-gold-500/30 hover:bg-gold-500/[0.04] hover:shadow-[0_4px_20px_rgba(201,162,39,0.1)] transition-all duration-300 cursor-default"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500/15 to-gold-600/10 border border-gold/25 flex items-center justify-center group-hover:from-gold-500/25 group-hover:border-gold/45 group-hover:shadow-[0_0_16px_rgba(255,215,0,0.2)] transition-all duration-300">
                    <Icon className="w-5 h-5 text-gold-deep" />
                  </div>
                  <p className="text-xs font-bold text-ink group-hover:text-gold-deep transition-colors">
                    {item.label}
                  </p>
                  <p className="text-[11px] text-ink/80 font-medium">{item.sub}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── 4B. PAN-AFRICAN CORRIDOR ARCHITECTURE MAP ───────────────────── */}
      <section id="corridors" className="container-kia py-20 md:py-28 relative scroll-mt-28">
        <div className="max-w-3xl mb-12">
          <div className="section-badge section-badge-gold mb-4">
            CONTINENTAL CORRIDOR ARCHITECTURE
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-ink leading-tight">
            Connecting 24 Sovereign African Nations &amp; AfCFTA Trade Corridors
          </h2>
          <div className="section-divider-gold mt-5 mb-5" />
          <p className="text-base text-ink/85 leading-relaxed">
            Interact with our active institutional hubs across Accra, Lagos, Nairobi, Kigali, and Johannesburg to explore live capital pipelines, sectoral value chains, and cross-border commercial corridors.
          </p>
        </div>

        <div className="rounded-2xl p-[2px] bg-gradient-to-b from-gold-400/50 via-gold-500/15 to-gold-400/40 shadow-[0_0_50px_rgba(255,215,0,0.22)]">
          <div className="rounded-[14px] overflow-hidden">
            <AfricanNetworkCanvas />
          </div>
        </div>
      </section>

      {/* ─── 5. 7-LAYER SYSTEMS ARCHITECTURE ENGINE ──────────────────────── */}
      <section id="architecture" className="border-y border-gold-500/30 gold-aurora-bg py-20 md:py-28 text-white relative overflow-hidden scroll-mt-28">
        {/* Extra depth layers */}
        <div className="pointer-events-none absolute right-0 top-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.12),_transparent_70%)]" />
        <div className="container-kia relative z-10">
          <div className="max-w-3xl mb-14">
            <div className="section-badge section-badge-gold-dark mb-4">
              PROPRIETARY FRAMEWORK
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              The 7-Layer Economic Systems Architecture
            </h2>
            <div className="section-divider-gold mt-5 mb-5" />
            <p className="text-base text-white/92 leading-relaxed max-w-2xl">
              Explore how high-level national policy translates down into formalized enterprise,
              syndicated private capital, and durable continental employment.
            </p>
          </div>

          <EconomicArchitecture />
        </div>
      </section>

      {/* ─── 6. INTERACTIVE CAPITAL & ENTERPRISE SIMULATOR ────────────────── */}
      <section id="simulator" className="container-kia py-20 md:py-28 relative scroll-mt-28">
        <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,215,0,0.06),_transparent_70%)]" />
        <div className="max-w-3xl mb-12 relative z-10">
          <div className="section-badge section-badge-gold mb-4">
            DECISION ENGINE &amp; MODELING TOOL
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
            Interactive African Capital &amp; Enterprise Simulator
          </h2>
          <div className="section-divider-gold mt-5 mb-5" />
          <p className="text-base text-ink/85 leading-relaxed">
            Select your institutional profile, target sector, and capital commitment to project
            employment yield, value-chain multipliers, and receive a customized execution roadmap.
          </p>
        </div>

        <CapitalSimulator />
      </section>

      {/* ─── 7. SIX STRATEGIC SOLUTION PRACTICES ─────────────────────────── */}
      <section id="practices" className="border-t border-line bg-gradient-to-b from-[#f8f8f5] to-white py-20 md:py-28 scroll-mt-28">
        <div className="container-kia">
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-badge section-badge-gold mb-3">INSTITUTIONAL PRACTICES</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
                Six Pillars, One Coordinated Engine
              </h2>
              <div className="section-divider-gold mt-4" />
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-bold text-gold-deep hover:text-gold-600 transition-colors"
            >
              <span>View All 6 Practices</span>
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="gold-card-light group flex flex-col justify-between rounded-2xl overflow-hidden relative border-gradient-gold-animated"
              >
                {/* Top gradient accent bar */}
                <div className="h-1 w-full bg-gradient-to-r from-gold-300 via-gold-500 to-gold-700" />

                <div className="p-7">
                  <div className="flex items-center justify-between mb-5">
                    <span className="font-display text-4xl font-black text-transparent bg-clip-text bg-gradient-to-br from-[#ffd700] to-[#c9a227] opacity-60">
                      {service.number}
                    </span>
                    <span className="text-[11px] text-gold-deep uppercase tracking-wider font-bold font-mono px-2.5 py-1 rounded-full bg-gold-500/10 border border-gold-500/25">
                      Pillar {service.number}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-ink group-hover:text-gold-deep transition-colors duration-300 leading-snug">
                    <Link href={`/services/${service.id}`}>
                      {service.title}
                    </Link>
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/85 line-clamp-3">
                    {service.problem}
                  </p>
                </div>

                <div className="p-7 pt-0 space-y-4">
                  <div className="bg-gold-500/8 border-l-4 border-gold-500 p-4 rounded-r-xl">
                    <p className="text-xs text-ink/90 leading-snug font-medium">
                      <strong className="text-ink font-bold">Outcome:</strong> {service.outcome}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-line/60">
                    <Link
                      href={`/services/${service.id}`}
                      className="text-xs font-bold text-ink hover:text-gold-deep inline-flex items-center gap-1 group/link"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="h-3.5 w-3.5 text-gold-deep group-hover/link:translate-x-0.5 transition-transform" />
                    </Link>
                    <WhatsAppCTA message={service.ctaMessage} size="sm" variant="outline">
                      Consult
                    </WhatsAppCTA>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 8. PROPRIETARY IMPACT PLATFORMS ─────────────────────────────── */}
      <section id="platforms" className="border-y border-gold-500/30 gold-aurora-bg py-20 md:py-28 text-paper relative overflow-hidden scroll-mt-28">
        <div className="pointer-events-none absolute left-0 bottom-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.1),_transparent_70%)]" />
        <div className="container-kia relative z-10">
          <div className="max-w-2xl mb-14">
            <div className="section-badge section-badge-gold-dark mb-4">FLAGSHIP VEHICLES</div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-paper leading-tight">
              Proprietary Economic Platforms
            </h2>
            <div className="section-divider-gold mt-5 mb-5" />
            <p className="text-base text-white/92 leading-relaxed">
              Institutional infrastructure engineered to move capital, de-risk venture investments,
              and build regional supply chains.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platforms.map((platform) => (
              <div
                key={platform.id}
                className="gold-glass-card group flex flex-col justify-between rounded-2xl p-7 hover:border-gold-400/80 transition-all duration-300"
              >
                <div>
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors duration-300 leading-snug">
                    <Link href={`/platforms/${platform.id}`}>
                      {platform.name}
                    </Link>
                  </h3>
                  <p className="mt-1 text-xs font-extrabold uppercase tracking-wide text-gold-400 font-mono">
                    {platform.tagline}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-white/88">
                    {platform.problem}
                  </p>

                  <div className="mt-6 grid grid-cols-2 gap-3 rounded-xl bg-black/80 p-4 border border-gold-500/30 group-hover:border-gold-500/60 transition-colors">
                    {platform.targets.slice(0, 2).map((t) => (
                      <div key={t.label}>
                        <span className="block font-display text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500">
                          {t.value}
                        </span>
                        <span className="text-xs text-white/85 leading-tight block mt-0.5 font-medium">
                          {t.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link
                    href={`/platforms/${platform.id}`}
                    className="group/link inline-flex items-center gap-1.5 text-xs font-extrabold text-gold-400 group-hover/link:text-gold-200 transition-colors"
                  >
                    <span>Dedicated Prospectus</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-1 transition-transform text-gold-400" />
                  </Link>
                  <WhatsAppCTA
                    message={whatsappMessages.platform(platform.name)}
                    size="sm"
                    variant="outline"
                  >
                    Inquire
                  </WhatsAppCTA>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 9. IMPACT DASHBOARD ─────────────────────────────────────────── */}
      <section id="impact" className="container-kia py-20 md:py-28 scroll-mt-28">
        <ImpactDashboard
          heading="Pan-African Impact Milestones & Targets"
          timeframe="2026–2041 Continental Ambition"
          items={nationalImpactTargets}
        />
      </section>

      {/* ─── 10. EXECUTIVE MEDIA SHOWCASE ────────────────────────────────── */}
      <section id="media" className="border-y border-line bg-gradient-to-b from-[#f5f5f2] to-white py-20 md:py-28 scroll-mt-28">
        <div className="container-kia">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <div className="section-badge section-badge-gold mb-3">EXECUTIVE DIPLOMATIC ARCHIVE</div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
                On the Stage. In the Studio. At the Multilateral Table.
              </h2>
              <div className="section-divider-gold mt-4 mb-4" />
              <p className="text-sm sm:text-base text-ink/85 max-w-2xl">
                Isaac Agya Koomson convenes ministers, sovereign investors, and grassroots founders
                across Ghana and the continent.
              </p>
            </div>
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-ink via-ink-soft to-ink hover:from-gold-deep hover:to-gold text-paper text-xs font-bold transition-all duration-300 shadow-md shrink-0 border border-gold-500/30"
            >
              <Camera className="w-4 h-4 text-gold-400 group-hover:text-ink transition-colors" />
              <span>View Full Media Archive (29 Photos)</span>
            </Link>
          </div>

          {/* 3 Featured Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                src: "/images/undp-partnership-meeting.jpg",
                alt: "UNDP Partnership Dialogue",
                badge: "Multilateral Engagement",
                title: "UNDP Financing for Development",
              },
              {
                src: "/images/tv-studio-interview.jpg",
                alt: "Business Tech Guide Broadcast",
                badge: "Television Broadcast",
                title: "Business Tech Guide Studio Interview",
              },
              {
                src: "/images/gdiw-keynote-podium.jpg",
                alt: "Ghana Digital Innovation Week Keynote",
                badge: "National Keynote",
                title: "Ghana Digital Innovation Week Podium",
              },
            ].map((img) => (
              <Link
                key={img.title}
                href="/gallery"
                className="group relative rounded-2xl overflow-hidden border-2 border-gold-500/25 shadow-lg aspect-4/3 block hover:border-gold-500/60 transition-all duration-300"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-600 group-hover:scale-107"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300" />
                <div className="absolute bottom-4 left-4 right-4 text-white translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-[10px] font-mono text-gold-400 uppercase font-extrabold px-2 py-0.5 rounded bg-gold-500/25 border border-gold-500/40">
                    {img.badge}
                  </span>
                  <p className="text-sm font-semibold mt-2 leading-snug">{img.title}</p>
                </div>
                {/* Hover overlay arrow */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-black" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 11. KIA INSIGHTS INTELLIGENCE ───────────────────────────────── */}
      <section id="insights" className="py-20 md:py-28 container-kia scroll-mt-28">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div>
            <div className="section-badge section-badge-gold mb-3">EXECUTIVE INTELLIGENCE</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Strategic Publications &amp; Analysis
            </h2>
            <div className="section-divider-gold mt-4" />
          </div>
          <Link
            href="/insights"
            className="group inline-flex items-center gap-2 text-sm font-bold text-gold-deep hover:text-gold-600 transition-colors"
          >
            <span>Read All Insights</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {featuredArticles.map((art, i) => (
            <article
              key={art.slug}
              className="insight-card-premium group flex flex-col justify-between overflow-hidden rounded-2xl"
            >
              <div>
                <div className="card-image-wrapper relative aspect-16/10 overflow-hidden bg-mist">
                  <Image
                    src={art.heroImage}
                    alt={art.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  {/* Category overlay badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gold-400 border border-gold-500/30">
                      {art.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-ink/75 mb-3 font-mono font-semibold">
                    <span>{art.publishedAt}</span>
                    <span>{art.readingTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-ink group-hover:text-gold-deep transition-colors duration-300 line-clamp-2 leading-snug">
                    <Link href={`/insights/${art.slug}`}>{art.title}</Link>
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-ink/85 line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-line/60 flex items-center justify-between">
                <span className="text-xs text-ink/75 font-semibold">{art.author.name}</span>
                <Link
                  href={`/insights/${art.slug}`}
                  className="group/link text-xs font-bold text-gold-deep hover:underline inline-flex items-center gap-1"
                >
                  <span>Read publication</span>
                  <ArrowRight className="h-3 w-3 group-hover/link:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ─── 12. FAQ ACCORDION ───────────────────────────────────────────── */}
      <section id="faq" className="border-t border-line bg-gradient-to-b from-[#f8f8f5] to-white py-20 md:py-28 scroll-mt-28">
        {/* FAQPage JSON-LD — enables Google FAQ rich snippets directly in SERP */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
        <div className="container-kia">
          <div className="max-w-2xl mb-14">
            <div className="section-badge section-badge-gold mb-3">GOVERNANCE &amp; ENGAGEMENT</div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight">
              Frequently Asked Questions
            </h2>
            <div className="section-divider-gold mt-5 mb-5" />
            <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
              Clear guidance on our institutional engagement frameworks, SME onboarding, and
              bilateral advisory structures.
            </p>
          </div>
          <FAQAccordion />
        </div>
      </section>

      {/* ─── 13. MASTER INSTITUTIONAL CONVERSION CTA ─────────────────────── */}
      <section id="contact-cta" className="relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-28 text-paper md:py-36 scroll-mt-28">
        {/* Multi-layer radial glows */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[1000px] bg-[radial-gradient(circle,_rgba(255,215,0,0.30)_0%,_rgba(201,162,39,0.15)_50%,_transparent_75%)]" />
        <div className="pointer-events-none absolute left-0 bottom-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.12),_transparent_70%)]" />
        <div className="pointer-events-none absolute right-0 top-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(201,162,39,0.15),_transparent_70%)]" />

        <div className="container-kia relative z-10 flex flex-col items-start gap-8">
          <div className="section-badge section-badge-gold-dark">
            BEGIN AN INSTITUTIONAL ENGAGEMENT
          </div>
          <h2 className="max-w-4xl font-display text-3xl sm:text-5xl lg:text-[3.5rem] font-bold text-white leading-[1.06]">
            Let&rsquo;s architect something{" "}
            <span className="shimmer-text-vibrant">transformative</span> for Africa.
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed text-white/92">
            Whether you are scaling an enterprise, deploying catalytic capital, or designing a
            regional economic initiative — connect directly with Isaac Agya Koomson and our
            executive advisory partners today.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="https://wa.me/233241332246?text=Hello%20KIA%E2%80%93Start%20Up%20Consult%2C%20I%20would%20like%20to%20start%20a%20conversation%20regarding%20an%20institutional%20or%20enterprise%20engagement."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ripple btn-pulse inline-flex items-center justify-center gap-2.5 px-9 py-4 rounded-full bg-gradient-to-r from-[#fff3a8] via-[#ffd700] to-[#c9a227] text-black font-extrabold text-sm sm:text-base shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:shadow-[0_0_60px_rgba(255,215,0,0.9)] transition-all transform hover:scale-105"
            >
              <span>Start a Conversation on WhatsApp</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="btn-ripple inline-flex items-center gap-2.5 rounded-full border-2 border-gold-400/60 bg-black/60 hover:bg-gold-500/18 px-7 py-4 text-sm font-bold text-gold-300 hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
            >
              <span>Submit Formal RFP / Inquiry</span>
              <ArrowRight className="h-4 w-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
