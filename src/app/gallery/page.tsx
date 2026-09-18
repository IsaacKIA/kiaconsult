import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MediaGallery from "@/components/MediaGallery";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";
import { Camera, Award, Globe, Mic, Download, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Executive Media & Photographic Archive | KIA–Start Up Consult Ltd",
  description:
    "Explore verified photographic documentation of CEO Isaac Agya Koomson and KIA–Start Up Consult across international economic forums, UNDP partnerships, national television broadcasts, and continental enterprise summits.",
};

const STATS = [
  { label: "High-Level Keynotes Delivered", value: "45+" },
  { label: "Institutional & Multilateral Delegations", value: "28" },
  { label: "National Broadcast Broadcasts", value: "15+" },
  { label: "Youth & Founders Convened", value: "12,000+" },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#070809] text-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-20 overflow-hidden border-b border-gold-500/30 gold-aurora-bg">
        {/* Enhanced multi-layer background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.28),_rgba(201,162,39,0.14)_45%,_transparent_72%)] pointer-events-none" />
        <div className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.18),_transparent_70%)] blur-3xl pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        <div className="container-kia relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-6 shadow-[0_0_20px_rgba(255,215,0,0.2)] animate-fade-up">
              <Camera className="w-3.5 h-3.5" />
              <span>EXECUTIVE MEDIA &amp; DIPLOMATIC ARCHIVE</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[3.8rem] font-display font-bold text-white tracking-tight leading-[1.06] animate-fade-up delay-100">
              Ground-Level Leadership. <br />
              <span className="shimmer-text-vibrant">Continental Institutional Reach.</span>
            </h1>

            <p className="mt-7 text-base sm:text-xl text-white/88 leading-relaxed max-w-2xl font-normal animate-fade-up delay-200">
              Photographic documentation of CEO Isaac Agya Koomson and KIA–Start Up Consult Ltd
              convening leaders across African Economic Transformation Forums, UNDP multilateral
              dialogues, national television studios, and grassroots venture hubs.
            </p>

            {/* Quick stats strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10 pt-8 border-t border-gold-500/20 animate-fade-up delay-400">
              {STATS.map((s, idx) => (
                <div key={idx} className="gold-glass-card stat-card-glow shimmer-on-hover p-5 rounded-2xl border border-gold-500/30">
                  <div className="text-2xl sm:text-3xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-solar to-gold-400 counter-animate">
                    {s.value}
                  </div>
                  <div className="text-xs font-semibold text-white/82 mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Gallery Section */}
      <section className="py-16 sm:py-24 bg-[#070809]">
        <div className="container-kia">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-mono text-gold-400 uppercase tracking-[0.18em] font-bold block mb-2">
                CURATED VISUAL RECORD
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-bold text-white leading-tight">
                Summits, Broadcasts &amp; Strategic Engagements
              </h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mt-4" />
            </div>
            <p className="text-xs text-white/65 max-w-sm font-medium">
              Click any photograph to launch high-resolution cinema lightbox with contextual
              field briefing notes.
            </p>
          </div>

          {/* Interactive Media Gallery with Filter Tabs & Lightbox */}
          <MediaGallery />
        </div>
      </section>

      {/* Media & Press Booking CTA */}
      <section className="py-16 border-t border-gold-500/20 bg-black/80">
        <div className="container-kia">
          <div className="rounded-2xl gold-glass-card border border-gold-500/30 p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="max-w-xl">
              <span className="text-xs font-mono text-gold-300 uppercase tracking-wider font-extrabold block mb-2">
                KEYNOTE SPEAKER &amp; INSTITUTIONAL DELEGATION
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                Book Isaac Agya Koomson for Global Conferences &amp; Institutional Summits
              </h3>
              <p className="text-sm text-white/85 mt-3 leading-relaxed font-normal">
                Available for keynote presentations, ministerial panels, and executive strategy sessions
                on African economic development, AfCFTA trade architecture, and venture building.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <a
                href={buildWhatsAppLink(
                  "Hello KIA Team, I would like to inquire about booking CEO Isaac Agya Koomson for an upcoming conference/speaking engagement."
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] hover:scale-[1.03] active:scale-[0.98] text-black font-extrabold text-sm transition-all shadow-[0_0_24px_rgba(255,215,0,0.45)]"
              >
                <Mic className="w-4 h-4" />
                <span>Request Speaking Engagement</span>
              </a>

              <Link
                href="/about"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-black/60 hover:bg-gold-500/15 text-gold-300 hover:text-white font-bold text-sm border-2 border-gold-500/40 transition-all duration-300 shadow-md"
              >
                <span>Read CEO Executive Profile</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
