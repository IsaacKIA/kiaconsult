import type { Metadata } from "next";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  Globe,
  Sparkles,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { siteConfig, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact KIA–Start Up Consult | Start an Institutional Engagement",
  description:
    "Start an engagement with KIA–Start Up Consult. Reach out via WhatsApp or submit a structured project enquiry. Advisory services across 24 African nations.",
};

const channels = [
  {
    icon: MessageSquare,
    title: "WhatsApp (Primary)",
    detail: "Real-time response from our advisory team",
    highlight: true,
  },
  {
    icon: Mail,
    title: "Official Email",
    detail: siteConfig.email,
    link: `mailto:${siteConfig.email}`,
    highlight: false,
  },
  {
    icon: Phone,
    title: "Telephone",
    detail: `${siteConfig.phone} · ${siteConfig.phoneIntl}`,
    highlight: false,
  },
  {
    icon: MapPin,
    title: "Headquarters",
    detail: siteConfig.address,
    highlight: false,
  },
  {
    icon: Clock,
    title: "Advisory Hours",
    detail: "Mon–Fri 08:30–17:30 GMT · WhatsApp: Daily",
    highlight: false,
  },
  {
    icon: Globe,
    title: "Continental Coverage",
    detail: "Serving 24 nations across Africa",
    highlight: false,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ─── 1. CINEMATIC HERO ─────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg py-24 md:py-36 text-paper">
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.28),_rgba(201,162,39,0.14)_45%,_transparent_72%)]" />
        <div className="pointer-events-none absolute -left-40 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.18),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 w-[400px] h-[400px] bg-[radial-gradient(circle,_rgba(255,215,0,0.14),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-7 animate-fade-up shadow-[0_0_20px_rgba(255,215,0,0.2)]">
            <Sparkles className="w-3.5 h-3.5" />
            ENGAGEMENT CONCIERGE
          </div>
          <h1 className="animate-fade-up delay-100 max-w-4xl font-display text-4xl font-bold sm:text-5xl md:text-[3.8rem] lg:text-[4.5rem] text-white leading-[1.06] tracking-tight">
            What Would You Like to{" "}
            <span className="shimmer-text-vibrant">Build With KIA?</span>
          </h1>
          <p className="animate-fade-up delay-200 mt-7 max-w-2xl text-base sm:text-xl leading-relaxed text-white/88">
            Tell us where you are and what you aim to achieve. Whether you are scaling an SME,
            incubating a startup, structuring capital, or developing a regional institutional
            pipeline, our advisory team will guide you to the right solution.
          </p>
        </div>
      </section>

      {/* ─── 2. MAIN SPLIT: CHANNELS + FORM ──────────────────────────────── */}
      <section className="container-kia py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">

          {/* Left Column: Channel Cards */}
          <div className="lg:col-span-5 space-y-5">
            {/* WhatsApp Primary CTA — standout card */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-gold-500/50 bg-gradient-to-br from-gold-500/18 via-gold-500/8 to-white p-7 shadow-[0_0_40px_rgba(255,215,0,0.18)] shimmer-on-hover">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />
              <div className="flex items-center gap-2.5 text-gold-deep mb-4">
                <div className="w-8 h-8 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider">
                  Primary Real-Time Channel
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-ink mb-2">
                WhatsApp is Our Fastest Line
              </h2>
              <p className="text-sm leading-relaxed text-ink/80 font-normal mb-5">
                Our partners and advisors prioritize real-time conversations. Reach out directly
                to discuss your business or institutional project.
              </p>
              <WhatsAppCTA message={whatsappMessages.general} size="md">
                Chat on WhatsApp Now
              </WhatsAppCTA>
            </div>

            {/* Contact Details Grid */}
            <div className="rounded-2xl border border-gold-500/25 bg-white p-6 shadow-md space-y-4">
              <h3 className="font-display text-lg font-bold text-ink border-b border-line pb-3">
                Headquarters & Communications
              </h3>
              <ul className="space-y-4 text-sm text-ink/80">
                {channels.slice(1).map((ch) => {
                  const Icon = ch.icon;
                  return (
                    <li key={ch.title} className="flex items-start gap-3.5 group">
                      <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 group-hover:border-gold/40 transition-all duration-200">
                        <Icon className="h-4 w-4 text-gold-deep" />
                      </div>
                      <div>
                        <span className="font-bold text-ink text-xs uppercase tracking-wide block mb-0.5">
                          {ch.title}
                        </span>
                        {ch.link ? (
                          <a href={ch.link} className="text-xs text-gold-deep font-bold hover:underline">
                            {ch.detail}
                          </a>
                        ) : (
                          <p className="text-xs text-ink/75 font-medium leading-relaxed">{ch.detail}</p>
                        )}
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Confidentiality badge */}
            <div className="flex items-start gap-3.5 rounded-2xl border border-gold-500/30 bg-gold-500/[0.07] p-5">
              <ShieldCheck className="h-5 w-5 text-gold-deep shrink-0 mt-0.5" />
              <p className="text-xs text-ink/82 font-medium leading-relaxed">
                All project submissions and founder discussions are treated under strict
                commercial confidentiality.
              </p>
            </div>
          </div>

          {/* Right Column: Structured Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl border border-gold-500/30 bg-white p-8 sm:p-10 shadow-[0_8px_48px_rgba(0,0,0,0.08),_0_0_24px_rgba(201,162,39,0.08)] overflow-hidden shimmer-on-hover">
              {/* Gold top accent bar */}
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />

              <div className="mb-7">
                <div className="section-badge section-badge-gold mb-3">
                  STRUCTURED REQUEST
                </div>
                <h2 className="font-display text-2xl font-bold text-ink leading-snug">
                  Select Your Inquiry Type
                </h2>
                <div className="section-divider-gold mt-4" />
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
