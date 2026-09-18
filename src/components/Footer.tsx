"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import {
  ArrowUpRight,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  ChevronRight,
} from "lucide-react";
import { siteConfig, whatsappMessages, buildWhatsAppLink } from "@/lib/site-config";
import WhatsAppCTA from "./WhatsAppCTA";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTop, setShowTop] = useState(false);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    // Sends user to WhatsApp with their email pre-filled
    const msg = encodeURIComponent(
      `Hello KIA–Start Up Consult, I would like to receive strategic intelligence and platform updates. My email: ${email}`
    );
    window.open(`https://wa.me/${siteConfig.whatsappNumber}?text=${msg}`, "_blank");
    setSubscribed(true);
    setEmail("");
  };

  return (
    <>
      {/* Back-to-Top Button */}
      <button
        onClick={scrollToTop}
        className={`back-to-top ${showTop ? "visible" : ""}`}
        aria-label="Back to top"
      >
        <ArrowUp className="w-4 h-4" />
      </button>

      <footer
        className="border-t border-gold-500/30 bg-[#070809] text-paper relative overflow-hidden"
        role="contentinfo"
      >
        {/* Background ambient gold glow */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-80 bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.14),_transparent_70%)]" />
        <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,215,0,0.06),_transparent_70%)]" />

        {/* ─── Newsletter / Intelligence Strip ─── */}
        <div className="border-b border-white/8 relative z-10">
          <div className="container-kia py-12">
            <div className="grid gap-8 lg:grid-cols-2 items-center">
              <div>
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-gold-400 mb-2">
                  CONTINENTAL ADVISORY DESK
                </p>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-white leading-snug">
                  Receive Strategic Intelligence &amp; Platform Updates
                </h3>
                <p className="mt-2 text-sm text-paper/65 max-w-sm leading-relaxed">
                  Bilateral pipeline updates, capital windows, and platform allocation notices from
                  KIA — directly to you.
                </p>
              </div>

              <div className="space-y-3">
                {subscribed ? (
                  <div className="rounded-xl border border-gold/40 bg-gold/10 px-5 py-4 text-center">
                    <p className="text-sm font-bold text-gold-400">
                      ✓ You&rsquo;re connected! Check WhatsApp to confirm.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubscribe}
                    className="flex gap-2"
                    aria-label="Advisory desk subscription"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address..."
                      required
                      className="flex-1 rounded-xl border border-white/15 bg-white/7 px-4 py-2.5 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold/50 focus:bg-white/10 transition-all duration-200"
                    />
                    <button
                      type="submit"
                      className="btn-ripple shrink-0 rounded-xl bg-gradient-to-r from-gold-deep to-gold px-5 py-2.5 text-xs font-extrabold text-black hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all duration-300"
                    >
                      Subscribe via WhatsApp
                    </button>
                  </form>
                )}
                <div className="flex items-center gap-3">
                  <WhatsAppCTA message={whatsappMessages.general} size="sm" className="btn-pulse">
                    Chat With an Advisor
                  </WhatsAppCTA>
                  <Link
                    href="/insights"
                    className="inline-flex items-center gap-1.5 rounded-full border border-gold-500/25 bg-white/5 px-4 py-2 text-xs font-medium text-white/80 hover:border-gold-400 hover:text-gold-400 transition-all duration-200"
                  >
                    Read KIA Insights
                    <ArrowUpRight className="h-3.5 w-3.5 text-gold-400" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Main Footer Grid ─── */}
        <div className="container-kia py-16 md:py-20 relative z-10">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Brand Column */}
            <div className="lg:col-span-2 space-y-6">
              <Link href="/" className="inline-block group" aria-label="KIA–Start Up Consult Home">
                <div className="relative h-12 w-44 overflow-hidden rounded-lg bg-white p-1.5 shadow-sm group-hover:shadow-gold-subtle transition-all duration-300">
                  <Image
                    src={siteConfig.logoImage}
                    alt="KIA–Start Up Consult Ltd"
                    fill
                    sizes="180px"
                    className="object-contain"
                  />
                </div>
              </Link>

              <p className="max-w-sm text-sm leading-relaxed text-paper/60">
                An Economic Architecture Platform for Youth Employment, Entrepreneurship, and
                Sustainable Growth in Africa.
              </p>

              <p className="text-xs font-bold uppercase tracking-widest text-gold shimmer-text-slow">
                {siteConfig.tagline}
              </p>

              {/* Social icons */}
              <div className="flex items-center gap-3 pt-1">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-line-dark bg-ink-soft text-paper/50 transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                  aria-label="KIA on Instagram"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" strokeWidth={0} />
                  </svg>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com/company/kiastartupconsult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-line-dark bg-ink-soft text-paper/50 transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                  aria-label="KIA on LinkedIn"
                >
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>

                {/* Twitter / X */}
                <a
                  href="https://twitter.com/kiastartupconsult"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-line-dark bg-ink-soft text-paper/50 transition-all duration-300 hover:border-gold hover:text-gold hover:bg-gold/10 hover:shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                  aria-label="KIA on X (Twitter)"
                >
                  <svg
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Solution Pillars */}
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Services
              </span>
              <ul className="space-y-2.5 text-xs text-paper/60">
                {[
                  { href: "/services#enterprise-creation", label: "01 — Enterprise Creation" },
                  { href: "/services#sme-growth", label: "02 — SME Growth & Competitiveness" },
                  { href: "/services#capital-advisory", label: "03 — Capital & Financial Advisory" },
                  { href: "/services#digital-transformation", label: "04 — Digital & AI Transformation" },
                  { href: "/services#sector-advisory", label: "05 — Sector-Specific Advisory" },
                  { href: "/services#ecosystem-development", label: "06 — Ecosystem & Institutions" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 hover:text-paper transition-colors duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-gold/0 group-hover:text-gold/60 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strategic Platforms */}
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Impact Platforms
              </span>
              <ul className="space-y-2.5 text-xs text-paper/60">
                {[
                  { href: "/platforms#hopefusion-africa", label: "HopeFusion Africa™" },
                  { href: "/platforms#adwuma-enterprise-pipeline", label: "Adwuma Enterprise Pipeline™" },
                  { href: "/platforms#nkabom-business-advance", label: "Nkabom Business Advance™" },
                  { href: "/platforms#nuru-women-enterprise", label: "Nuru Women Enterprise™" },
                  { href: "/platforms#asase-green-enterprise", label: "Asase Green Enterprise™" },
                ].map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="group flex items-center gap-1.5 hover:text-paper transition-colors duration-200"
                    >
                      <ChevronRight className="w-3 h-3 text-gold/0 group-hover:text-gold/60 transition-all" />
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-1 border-t border-white/8 mt-1">
                  <Link
                    href="/insights"
                    className="flex items-center gap-1 text-gold hover:underline"
                  >
                    KIA Insights
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-5">
              <span className="text-xs font-bold uppercase tracking-widest text-gold">
                Headquarters
              </span>
              <ul className="space-y-3.5 text-xs text-paper/60">
                <li className="flex items-start gap-2.5">
                  <MapPin className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>{siteConfig.address}</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <span>
                    {siteConfig.phone}
                    <br />
                    {siteConfig.phoneIntl}
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="hover:text-paper transition-colors break-all"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              </ul>

              {/* "Built for Africa" box */}
              <div className="mt-6 rounded-xl border border-gold/20 bg-gradient-to-br from-gold/10 to-gold/5 p-4 text-center">
                <p className="text-[10px] font-bold uppercase tracking-widest text-gold/70 mb-1">
                  Built for Africa
                </p>
                <p className="text-xs text-paper/50 leading-tight">
                  Connecting skills, enterprise, capital &amp; sustainable growth.
                </p>
              </div>
            </div>
          </div>

          {/* ─── Gold shimmer divider ─── */}
          <div className="mt-14 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          {/* Bottom Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-paper/35">
            <p>
              © {currentYear} {siteConfig.legalName}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-paper transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-paper transition-colors">
                Terms of Engagement
              </Link>
              <Link href="/sitemap.xml" className="hover:text-paper transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
