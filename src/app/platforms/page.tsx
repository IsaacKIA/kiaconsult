import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ImpactDashboard from "@/components/ImpactDashboard";
import { platforms, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Strategic Impact Platforms",
  description:
    "HopeFusion Africa, Adwuma Enterprise Pipeline, Nkabom Business Advance, Nuru Women Enterprise, and Asase Green Enterprise — KIA's strategic impact platforms.",
};

export default function PlatformsPage() {
  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-20 text-paper md:py-28">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.22),_rgba(201,162,39,0.10)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-5 animate-fade-up">
            STRATEGIC ARCHITECTURE PLATFORMS
          </div>
          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-4xl font-bold sm:text-5xl md:text-6xl text-white leading-[1.08] tracking-tight">
            Strategic Platforms —{" "}
            <span className="shimmer-text-vibrant">Not Ordinary Projects.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
            Five institutional platforms engineered to de-risk investment, catalyze youth
            employment, modernize SMEs, empower women-led ventures, and accelerate climate
            resilience at continental scale.
          </p>

          {/* Quick jump nav */}
          <nav
            className="animate-fade-up delay-300 mt-10 flex flex-wrap gap-2.5"
            aria-label="Platform navigation"
          >
            {platforms.map((p) => (
              <a
                key={p.id}
                href={`#${p.id}`}
                className="rounded-full border border-gold-500/30 bg-black/60 px-4 py-2 text-xs font-mono font-bold text-gold-300 transition-all hover:border-gold-400 hover:text-white hover:shadow-[0_0_16px_rgba(255,215,0,0.3)] hover:scale-105"
              >
                {p.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* ─── 2. PLATFORMS LIST ────────────────────────────────────────────── */}
      {platforms.map((platform, i) => (
        <section
          key={platform.id}
          id={platform.id}
          className={`scroll-mt-24 border-b border-line py-20 ${
            i % 2 === 1 ? "bg-mist/40" : "bg-paper"
          }`}
        >
          <div className="container-kia">
            {/* Platform header */}
            <div className="section-reveal flex flex-wrap items-center gap-3 mb-6">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep">
                {platform.tagline}
              </span>
              <span className="rounded-full border border-gold-500/40 bg-gold-500/15 px-3 py-0.5 text-[10px] font-mono font-extrabold uppercase tracking-wide text-gold-deep">
                Active Architecture
              </span>
            </div>
            <h2 className="section-reveal font-display text-3xl font-bold text-ink sm:text-4xl mb-10 leading-snug">
              {platform.name}
            </h2>

            <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
              {/* Left: Problem, focus, CTA */}
              <div
                className={`section-reveal lg:col-span-6 space-y-7 ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div>
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-ink/75 mb-3">
                    The Systemic Bottleneck
                  </h3>
                  <p className="text-base leading-relaxed text-ink/85 font-normal">
                    {platform.problem}
                  </p>
                </div>

                <div className="rounded-xl border border-gold-500/30 bg-gold-500/10 p-5">
                  <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-2">
                    Impact Focus &amp; Strategy
                  </h3>
                  <p className="text-sm leading-relaxed text-ink/90 font-medium">
                    {platform.impactFocus}
                  </p>
                </div>

                {/* All 4 targets as metric cards */}
                <div className="grid grid-cols-2 gap-3.5">
                  {platform.targets.map((t, ti) => (
                    <div
                      key={t.label}
                      className="rounded-xl border border-gold-500/25 bg-white p-4 text-center stat-card-glow shimmer-on-hover shadow-sm"
                      style={{ transitionDelay: `${ti * 60}ms` }}
                    >
                      <span className="block font-display text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gold-deep via-gold-solar to-gold-400 counter-animate">
                        {t.value}
                      </span>
                      <span className="text-xs text-ink/78 font-semibold leading-snug block mt-1.5">
                        {t.label}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <WhatsAppCTA message={whatsappMessages.platform(platform.name)} className="btn-magnetic">
                    Explore Collaboration on {platform.name}
                  </WhatsAppCTA>
                </div>
              </div>

              {/* Right: Image + Impact Dashboard */}
              <div
                className={`section-reveal section-reveal-delay-2 lg:col-span-6 space-y-6 ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                {platform.image && (
                  <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-2xl">
                    <div className="img-reveal relative aspect-16/9 overflow-hidden rounded-2xl border border-gold-500/20 bg-mist">
                      <Image
                        src={platform.image}
                        alt={platform.name}
                        fill
                        sizes="(max-width: 1024px) 100vw, 550px"
                        className="object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="gradient-ink-up absolute inset-0" />
                      <div className="absolute bottom-4 left-5 right-5">
                        <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow">
                          {platform.tagline}
                        </span>
                        <p className="mt-1.5 text-sm font-bold text-white leading-snug">
                          {platform.name} in Action
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="rounded-2xl border border-gold-500/25 bg-white p-6 shadow-md">
                  <ImpactDashboard items={platform.targets} />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ─── 3. CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-24 text-paper md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.22) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-kia relative z-10 flex flex-col items-start gap-6 section-reveal">
          <div className="section-badge section-badge-gold-dark">
            PLATFORM CO-DESIGN
          </div>
          <h2 className="max-w-2xl font-display text-3xl font-bold text-white md:text-5xl leading-tight">
            Partner with KIA to deploy or co-fund these platforms.
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
            We work alongside development finance institutions, national governments, impact
            investors, and foundations to deploy these platforms with localized governance and
            rigorous KPIs.
          </p>
          <div className="flex flex-wrap gap-4 pt-2">
            <WhatsAppCTA message={whatsappMessages.institutional} size="lg" className="btn-magnetic pulse-gold-action">
              Discuss Institutional Deployment
            </WhatsAppCTA>
            <a
              href="/contact"
              className="btn-magnetic inline-flex items-center gap-2 rounded-full border-2 border-gold-400/60 bg-black/60 px-7 py-3.5 text-sm font-bold text-gold-300 hover:text-white hover:bg-gold-500/20 transition-all duration-300 shadow-[0_0_20px_rgba(255,215,0,0.15)]"
            >
              <span>Submit an Enquiry</span>
              <ArrowRight className="h-4 w-4 text-gold-400" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
