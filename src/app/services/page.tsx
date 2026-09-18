import type { Metadata } from "next";
import Image from "next/image";
import { Check, ArrowRight, Search, Pencil, Rocket } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { services, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Six strategic service pillars: enterprise creation, SME growth, capital advisory, digital transformation, sector-specific advisory, and ecosystem development.",
};

const processSteps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Diagnosis",
    body: "We begin with a thorough assessment of your enterprise stage, sector context, bottlenecks, and goals — building a clear picture before any intervention.",
  },
  {
    icon: Pencil,
    step: "02",
    title: "Architecture Design",
    body: "We design a bespoke roadmap — selecting the right combination from our six service pillars to address your specific challenges and growth trajectory.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Execution & Measurement",
    body: "We implement alongside your team, tracking measurable KPIs at every stage — from business registration to capital raise, from digital adoption to market entry.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* ─── 1. HERO ──────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-20 md:py-28 text-paper">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.22),_rgba(201,162,39,0.10)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-5 animate-fade-up">
            STRATEGIC SERVICE PORTFOLIO
          </div>
          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-4xl font-bold text-white sm:text-5xl md:text-6xl leading-[1.08] tracking-tight">
            Integrated Enterprise &amp;{" "}
            <span className="shimmer-text-vibrant">Economic Systems Solutions.</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/90">
            KIA–Start Up Consult delivers structured, end-to-end services that support
            enterprise creation, growth, capital access, digital transformation, and
            ecosystem development — organized into six coordinated strategic solution pillars.
          </p>
        </div>
      </section>

      {/* ─── 2. HOW WE WORK ───────────────────────────────────────────────── */}
      <section className="border-b border-gold-500/20 bg-gradient-to-b from-[#0a0c10] to-[#12151c] py-20 text-paper md:py-24 relative overflow-hidden">
        <div className="container-kia relative z-10">
          <div className="max-w-xl section-reveal">
            <div className="section-badge section-badge-gold-dark mb-3">OUR METHODOLOGY</div>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-4xl leading-snug">
              How we architect progress with you.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {processSteps.map((step, i) => (
              <div
                key={step.step}
                className="section-reveal relative rounded-2xl gold-glass-card p-8 border border-gold-500/25 group hover:border-gold-400/60 stat-card-glow shimmer-on-hover transition-all duration-300"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-display text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-deep counter-animate">
                    {step.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gold-500/15 border border-gold-500/30 text-gold-300 group-hover:scale-110 group-hover:border-gold-400 transition-transform">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-300 transition-colors">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/85">{step.body}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="hidden md:block absolute -right-3.5 top-1/2 -translate-y-1/2 h-6 w-6 text-gold-400/40 z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 3. SERVICES LIST ─────────────────────────────────────────────── */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`scroll-mt-24 border-b border-line py-20 ${
            i % 2 === 1 ? "bg-mist/40" : "bg-paper"
          }`}
        >
          <div className="container-kia grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* On even rows: content left, image right. On odd rows: image left, content right */}
            <div
              className={`section-reveal lg:col-span-7 space-y-6 ${
                i % 2 === 1 ? "lg:order-2" : ""
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gold-deep to-gold-solar">
                  {service.number}
                </span>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25">
                  Strategic Pillar {service.number}
                </span>
              </div>

              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-snug">
                {service.title}
              </h2>

              <p className="text-base leading-relaxed text-ink/85 font-normal">
                {service.problem}
              </p>

              <div>
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep mb-4">
                  Key Capabilities &amp; Advisory Scope
                </h3>
                <ul className="grid gap-3 sm:grid-cols-2 text-sm text-ink/90 font-medium">
                  {service.approach.map((item, j) => (
                    <li
                      key={item}
                      className="section-reveal flex items-start gap-2.5 p-3 rounded-xl bg-gold-500/[0.06] border border-gold-500/20 shimmer-on-hover hover:border-gold-500/40 hover:bg-gold-500/[0.12] transition-all"
                      style={{ transitionDelay: `${j * 60}ms` }}
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold-deep"
                        aria-hidden="true"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border-l-4 border-l-gold-500 border border-gold-500/30 bg-gradient-to-r from-gold-500/12 via-gold-500/6 to-transparent p-5 text-sm text-ink/90 shadow-sm">
                <p className="leading-relaxed">
                  <strong className="font-bold text-ink">Primary Outcome Focus: </strong>
                  {service.outcome}
                </p>
              </div>

              <div className="pt-2">
                <WhatsAppCTA message={service.ctaMessage} className="btn-magnetic">
                  Discuss This Pillar With KIA
                </WhatsAppCTA>
              </div>
            </div>

            {/* Image column */}
            <div
              className={`section-reveal section-reveal-delay-2 lg:col-span-5 ${
                i % 2 === 1 ? "lg:order-1" : ""
              }`}
            >
              {service.image ? (
                <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-2xl">
                  <div className="img-reveal relative aspect-4/3 overflow-hidden rounded-2xl border border-gold-500/20 bg-mist">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 450px"
                      className="object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="gradient-ink-up absolute inset-0" />
                    <div className="absolute bottom-4 left-5 right-5 text-xs font-semibold text-paper">
                      <span className="rounded-full bg-gradient-to-r from-gold to-gold-deep px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow">
                        KIA Strategic Practice
                      </span>
                      <p className="mt-1.5 text-sm font-bold leading-snug">{service.title}</p>
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
        </section>
      ))}

      {/* ─── 4. CTA ───────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-t border-gold-500/30 gold-aurora-bg py-24 text-paper md:py-32">
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-[700px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,215,0,0.22) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="container-kia relative z-10 flex flex-col items-start gap-6 section-reveal">
          <div className="section-badge section-badge-gold-dark">
            CUSTOM ARCHITECTURE
          </div>
          <h2 className="max-w-2xl font-display text-3xl font-bold md:text-5xl leading-tight text-white">
            Need a tailored enterprise or institutional solution?
          </h2>
          <p className="max-w-xl text-base sm:text-lg leading-relaxed text-white/90">
            Our advisory team can assess your organization&rsquo;s current stage and design an
            integrated roadmap across these six pillars.
          </p>
          <WhatsAppCTA message={whatsappMessages.general} size="lg" className="btn-magnetic pulse-gold-action">
            Schedule a Discovery Session on WhatsApp
          </WhatsAppCTA>
        </div>
      </section>
    </>
  );
}
