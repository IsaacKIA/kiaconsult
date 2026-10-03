"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FileCheck2,
  RefreshCw,
  FileText,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Globe2,
  Sparkles,
  Building2,
  AlertTriangle,
  Clock,
  HelpCircle,
  ExternalLink,
} from "lucide-react";
import { siteConfig, buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

const REGISTRATION_PACKAGES = [
  {
    icon: Building2,
    badge: "FOUNDATION",
    title: "Business Registration",
    subtitle: "Incorporate with Complete Legal & Structural Integrity",
    description:
      "Full turnkey incorporation through Ghana's Office of the Registrar of Companies (ORC). We handle name reservation, statutory regulations, non-resident TINs, company secretary nomination, and official Certificate of Incorporation delivery.",
    features: [
      "Company Limited by Shares (Private Ltd)",
      "Sole Proprietorship & Registered Business Names",
      "External Company Branch (Foreign Corporate Entity)",
      "GIPC Foreign Equity Structuring ($200K / $500K / Exemptions)",
      "Non-Resident Director & Shareholder Documentation",
      "GRA Tax Identification & SSNIT Employer Setup",
    ],
    highlight: "100% Remote Formation — No Flight to Accra Required",
  },
  {
    icon: RefreshCw,
    badge: "MAINTENANCE",
    title: "Yearly Renewals",
    subtitle: "Protect Your Business Name & Avoid Compounding Fines",
    description:
      "Under Ghanaian law, registered business names and company licenses expire annually. We audit your statutory status, calculate outstanding obligations, clear compounding default penalties, and secure official ORC renewals.",
    features: [
      "Business Name Yearly Renewal Processing",
      "Compounding Penalty Audit & Registry Relief",
      "Official Certificate of Renewal Dispatch",
      "Metropolitan / District Assembly Operating Permits (BOP)",
      "Protection Against Involuntary Name Forfeiture",
      "Annual Good Standing Verification for Commercial Banks",
    ],
    highlight: "Avoid GHS 600–1,000/mo ORC Default Fines",
  },
  {
    icon: FileText,
    badge: "COMPLIANCE",
    title: "Annual Filings",
    subtitle: "Companies Act 2019 (Act 992) Statutory Returns",
    description:
      "Every Ghanaian company must file mandatory Annual Returns with the Registrar of Companies. We prepare, balance, and submit your statutory returns, beneficial ownership declarations, and GRA tax compliance packages.",
    features: [
      "Mandatory Annual Returns Preparation & Lodgement",
      "Beneficial Ownership (BO) Register Updates",
      "Audited Financial Statement Submission",
      "GRA Tax Clearance Certificate (TCC) Facilitation",
      "Corporate Governance & Minutes Documentation",
      "Prevention of Company Strike-Off & Account Freezing",
    ],
    highlight: "Guaranteed Registry Good Standing Every Year",
  },
];

const TARGET_PROFILES = [
  { id: "diaspora", label: "African Diaspora (US/UK/EU/Global)" },
  { id: "foreign", label: "Foreign Investor / International MNC" },
  { id: "local", label: "Ghanaian Founder / Growing SME" },
];

const SERVICE_OPTIONS = [
  { id: "new-registration", label: "New Business Registration / Incorporation" },
  { id: "yearly-renewal", label: "Yearly Renewal & Penalty Clearance" },
  { id: "annual-filing", label: "Annual Filing & Statutory Returns (Act 992)" },
  { id: "gipc-banking", label: "GIPC Registration & Corporate Bank Account Setup" },
];

export default function BusinessRegistrationLeadSection() {
  const [selectedProfile, setSelectedProfile] = useState(TARGET_PROFILES[0].label);
  const [selectedService, setSelectedService] = useState(SERVICE_OPTIONS[0].label);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [proposedBusinessName, setProposedBusinessName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const waText = whatsappMessages.businessRegistration(
      selectedProfile,
      selectedService,
      fullName || undefined,
      proposedBusinessName || undefined
    );
    const link = buildWhatsAppLink(waText);
    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      id="registration-filing"
      className="relative overflow-hidden py-20 md:py-28 bg-[#08090c] text-white border-y border-gold-500/30 scroll-mt-28"
    >
      {/* Background radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-[600px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.22),_rgba(201,162,39,0.1)_45%,_transparent_72%)]" />
      <div className="pointer-events-none absolute -left-40 top-1/2 w-96 h-96 bg-[radial-gradient(circle,_rgba(245,158,11,0.12),_transparent_70%)] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container-kia relative z-10">
        {/* Top Header Badge & Narrative */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-6 shadow-[0_0_20px_rgba(255,215,0,0.2)] animate-fade-up">
            <FileCheck2 className="w-4 h-4 text-gold-400" />
            <span>ORC STATUTORY COMPLIANCE &amp; FORMATION DESK</span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.08] tracking-tight">
            Launch Your Business in Ghana Hassle-Free:{" "}
            <span className="shimmer-text-vibrant block sm:inline">
              Registration, Renewals &amp; Annual Filing
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-6 mb-6" />

          <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto font-normal">
            Launch your business in Ghana hassle-free with KIA–Start Up Consult’s{" "}
            <strong className="text-gold-300 font-semibold">
              Business Registration &amp; Annual Filing
            </strong>{" "}
            service. Expert guidance, fast registration, and 100% stress-free compliance tailored for{" "}
            <span className="text-white underline decoration-gold-400/50 underline-offset-4">
              Diaspora founders, foreign investors, and domestic entrepreneurs
            </span>
            .
          </p>
        </div>

        {/* 3 Core Pillar Services Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-16">
          {REGISTRATION_PACKAGES.map((pkg, idx) => {
            const Icon = pkg.icon;
            return (
              <div
                key={pkg.title}
                className="gold-glass-card rounded-2xl p-7 sm:p-8 flex flex-col justify-between border border-gold-500/35 hover:border-gold-400/70 transition-all duration-300 shadow-[0_12px_40px_rgba(0,0,0,0.6)] group relative overflow-hidden"
              >
                {/* Top corner badge */}
                <div className="absolute top-0 right-0 rounded-bl-xl bg-gold-500/20 border-b border-l border-gold-500/30 px-3 py-1 text-[10px] font-mono font-bold tracking-wider text-gold-300">
                  {pkg.badge}
                </div>

                <div>
                  <div className="w-12 h-12 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-gold-500/25 transition-all">
                    <Icon className="w-6 h-6 text-gold-400" />
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white group-hover:text-gold-300 transition-colors">
                    {pkg.title}
                  </h3>
                  <p className="text-xs font-mono font-semibold text-gold-400/90 mt-1">
                    {pkg.subtitle}
                  </p>
                  <p className="text-sm text-white/80 mt-4 leading-relaxed">
                    {pkg.description}
                  </p>

                  <div className="my-6 border-t border-white/10" />

                  <ul className="space-y-2.5 text-xs text-white/85">
                    {pkg.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/10">
                  <div className="inline-block rounded-lg bg-black/60 border border-gold-500/25 px-3 py-1.5 text-[11px] font-mono font-bold text-gold-300 mb-4">
                    ✦ {pkg.highlight}
                  </div>

                  <a
                    href={buildWhatsAppLink(
                      whatsappMessages.businessRegistration(
                        "Interested Founder",
                        pkg.title
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full btn-ripple inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-xs py-3 hover:shadow-[0_0_20px_rgba(255,215,0,0.5)] transition-all"
                  >
                    <span>Start {pkg.title}</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ─── LEAD CAPTURE INTAKE CONCIERGE ─── */}
        <div className="rounded-3xl border-2 border-gold-500/40 bg-gradient-to-br from-[#12141c] via-[#0d0f15] to-[#141209] p-7 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.8),_0_0_35px_rgba(255,215,0,0.18)]">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Certificate Graphic & Value Prop */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-mono font-bold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>OFFICIAL STATUTORY ASSISTANCE</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white leading-tight">
                Get an Instant Formation &amp; Compliance Plan in 60 Seconds
              </h3>

              <p className="text-sm text-white/85 leading-relaxed">
                Whether you need to incorporate a new entity from the United States, regularize
                a lapsed business name in Accra, or file annual returns under Companies Act 2019
                (Act 992), our corporate team handles every step from submission to certificate
                issuance.
              </p>

              {/* Embedded Flyer/Certificate Mock */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl aspect-[4/3] bg-black">
                <Image
                  src="/images/business-registration-ghana.jpg"
                  alt="KIA Business Registration & Yearly Renewal Service in Ghana"
                  fill
                  sizes="(max-width: 1024px) 100vw, 450px"
                  className="object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] text-white/90">
                  <span className="font-mono font-bold text-gold-300">
                    ORC Ghana · Act 992 &amp; Act 152
                  </span>
                  <span className="bg-black/80 px-2 py-0.5 rounded text-[10px] text-gold-400 font-bold border border-gold-500/30">
                    Turnkey Service
                  </span>
                </div>
              </div>

              {/* Direct Phone / Contact Bar */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
                  className="inline-flex items-center gap-2 text-xs font-bold text-white bg-white/10 hover:bg-white/20 px-4 py-2.5 rounded-full border border-white/15 transition-colors"
                >
                  <PhoneCall className="w-3.5 h-3.5 text-gold-400" />
                  <span>Call Desk: {siteConfig.phone}</span>
                </a>
                <Link
                  href="/insights/business-registration-ghana-guide-foreigners-diaspora"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-400 hover:text-gold-300 underline underline-offset-4"
                >
                  <span>Read Full 2026 Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Interactive 3-Step Lead Generation Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-gold-500/30 bg-black/70 p-6 sm:p-8 backdrop-blur-xl space-y-6 shadow-inner"
              >
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-2">
                    1. Select Your Profile:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {TARGET_PROFILES.map((p) => {
                      const active = selectedProfile === p.label;
                      return (
                        <button
                          type="button"
                          key={p.id}
                          onClick={() => setSelectedProfile(p.label)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                            active
                              ? "bg-gold-500/20 text-gold-300 border-gold-400 shadow-[0_0_12px_rgba(255,215,0,0.2)]"
                              : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {p.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-gold-400 mb-2">
                    2. Select Primary Need:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {SERVICE_OPTIONS.map((opt) => {
                      const active = selectedService === opt.label;
                      return (
                        <button
                          type="button"
                          key={opt.id}
                          onClick={() => setSelectedService(opt.label)}
                          className={`px-3 py-2.5 rounded-xl text-xs font-bold text-left transition-all border ${
                            active
                              ? "bg-gold-500/20 text-gold-300 border-gold-400 shadow-[0_0_12px_rgba(255,215,0,0.2)]"
                              : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10 hover:text-white"
                          }`}
                        >
                          {opt.label}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 mb-1.5">
                      Your Full Name:
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Kwesi Mensah / Sarah Jenkins"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono font-bold text-white/80 mb-1.5">
                      WhatsApp / Phone Number:
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+233 24 ... or +1 404 ..."
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-white/80 mb-1.5">
                    Proposed Business Name or Current Company Name:
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sovereign Agro-Ventures Ltd (or leave blank if undecided)"
                    value={proposedBusinessName}
                    onChange={(e) => setProposedBusinessName(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/35 outline-none focus:border-gold-400 focus:bg-white/10 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-ripple w-full flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-gold via-gold-solar to-gold-deep py-4 text-black text-sm sm:text-base font-extrabold shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:shadow-[0_0_50px_rgba(255,215,0,0.8)] transition-all transform hover:scale-[1.01]"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Launch Registration &amp; Filing Inquiry Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-center text-white/60">
                  Instant response from our Accra regulatory compliance partners. No spam, strict
                  commercial privacy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
