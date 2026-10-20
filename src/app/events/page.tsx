import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import StickySectionNav, { type NavSectionItem } from "@/components/StickySectionNav";
import EventsClientView from "@/components/EventsClientView";
import { Calendar, Award, Building, Sparkles, GraduationCap, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Masterclasses, Summits & Trainings | KIA–Start Up Consult Ltd",
  description:
    "Explore upcoming executive masterclasses, SME formalization bootcamps, corporate capacity-building tracks, and photographic recaps of continental summits convened by CEO Isaac Agya Koomson and KIA–Start Up Consult.",
  alternates: {
    canonical: `${siteConfig.url}/events`,
  },
  openGraph: {
    title: "Executive Masterclasses, Summits & Trainings | KIA–Start Up Consult Ltd",
    description:
      "Transforming potential into prosperity through executive masterclasses, AfCFTA export training, institutional bootcamps, and continental summit delegations.",
    url: `${siteConfig.url}/events`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/3i-africa-summit-executive-delegation.jpg`,
        width: 1200,
        height: 630,
        alt: "KIA Events, Executive Masterclasses and Continental Summits",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Executive Masterclasses, Summits & Trainings | KIA–Start Up Consult Ltd",
    description:
      "Executive masterclasses, AfCFTA export training, institutional bootcamps, and continental summit delegations.",
    images: [`${siteConfig.url}/images/3i-africa-summit-executive-delegation.jpg`],
  },
};

const STATS = [
  { label: "Founders & Leaders Trained", value: "14,000+" },
  { label: "High-Level Summits & Keynotes", value: "50+" },
  { label: "Modular Institutional Tracks", value: "4" },
  { label: "Executive Program Satisfaction", value: "98%" },
];

const EVENTS_NAV_SECTIONS: NavSectionItem[] = [
  { id: "overview", label: "Executive Overview", shortLabel: "Overview" },
  { id: "upcoming", label: "Upcoming Cohorts", shortLabel: "Cohorts" },
  { id: "corporate", label: "In-House Tracks", shortLabel: "In-House" },
  { id: "summits", label: "Summit Recaps", shortLabel: "Summits" },
];

export default function EventsPage() {
  return (
    <main className="min-h-screen bg-[#070809] text-white">
      {/* Sticky Quick Navigator */}
      <StickySectionNav title="Events &amp; Trainings" sections={EVENTS_NAV_SECTIONS} />

      {/* Hero Section */}
      <section
        id="overview"
        className="relative pt-24 pb-20 overflow-hidden border-b border-gold-500/30 gold-aurora-bg scroll-mt-28"
      >
        {/* Multi-layer atmospheric ambient glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[620px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.28),_rgba(201,162,39,0.14)_45%,_transparent_72%)] pointer-events-none" />
        <div className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.2),_transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute -right-32 bottom-0 w-[450px] h-[450px] bg-[radial-gradient(circle,_rgba(255,215,0,0.18),_transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-kia relative z-10">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-6 shadow-[0_0_20px_rgba(255,215,0,0.2)] animate-fade-up">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>EXECUTIVE CONVENINGS &amp; CAPACITY BUILDING</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[4rem] font-display font-bold text-white tracking-tight leading-[1.06] animate-fade-up delay-100">
              Where Sovereign Policy Meets{" "}
              <span className="shimmer-text-vibrant block sm:inline">Execution Rigor.</span>
            </h1>

            <p className="mt-7 text-base sm:text-xl text-white/88 leading-relaxed max-w-3xl font-normal animate-fade-up delay-200">
              KIA–Start Up Consult convenes high-stakes economic masterclasses, founder accelerators,
              and institutional capacity-building programs across Ghana and continental AfCFTA corridors.
              Explore upcoming cohorts, commission custom in-house corporate workshops, or review verified
              summit proceedings.
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gold-500/20 animate-fade-up delay-400">
              {STATS.map((s, idx) => (
                <div
                  key={idx}
                  className="gold-glass-card stat-card-glow shimmer-on-hover p-5 rounded-2xl border border-gold-500/30"
                >
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-solar to-gold-400 counter-animate">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-white/82 mt-1.5 leading-tight">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Catalog & In-House Blueprint */}
      <section className="py-16 sm:py-24 bg-[#070809]">
        <div className="container-kia">
          <EventsClientView />
        </div>
      </section>

      {/* Institutional Booking Consultation */}
      <section className="py-20 border-t border-gold-500/20 bg-black/80">
        <div className="container-kia">
          <div className="rounded-3xl gold-glass-card border border-gold-500/40 p-8 sm:p-14 text-center max-w-4xl mx-auto space-y-6 shadow-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-gold-300 font-extrabold">
              BESPOKE INSTITUTIONAL ENGAGEMENTS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-bold text-white leading-tight">
              Need a Custom Training Program for Your Organization or Cohort?
            </h2>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              We partner with commercial financial institutions, TVET secretariats, donor-funded facilities,
              and trade associations to design and deliver accredited, outcome-audited enterprise development curricula.
            </p>
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink(
                  "Hello KIA Team, I would like to schedule a consultation to discuss bespoke institutional training for our organization."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black font-extrabold text-sm hover:scale-105 transition-all shadow-[0_0_25px_rgba(255,215,0,0.45)]"
              >
                Schedule Consultation via WhatsApp
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-black/60 hover:bg-gold-500/20 text-gold-300 hover:text-white border-2 border-gold-500/40 font-bold text-sm transition-all"
              >
                Submit Formal Request
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
