import type { Metadata } from "next";
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
  HelpCircle,
  ExternalLink,
  Users,
  Award,
  Zap,
} from "lucide-react";
import BusinessRegistrationLeadSection from "@/components/BusinessRegistrationLeadSection";
import FAQAccordion from "@/components/FAQAccordion";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { siteConfig, buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Business Registration in Ghana & Annual Filing | KIA–Start Up Consult",
  description:
    "Launch your business in Ghana hassle-free with Kia-Start Up Consult’s Business Registration & Annual Filing service. Expert guidance, fast registration, stress-free compliance. Get started today!",
  keywords: [
    "business registration in ghana",
    "Business Registration and Annual Filing",
    "register business in ghana",
    "ORC ghana company registration",
    "annual filings ghana",
    "yearly renewals ghana",
    "register business in ghana for foreigners",
    "diaspora business setup ghana",
    "GIPC registration ghana",
    "companies act 2019 ghana",
    "business registration renewal ghana",
  ],
  alternates: {
    canonical: `${siteConfig.url}/services/business-registration-ghana`,
  },
  openGraph: {
    title: "Business Registration in Ghana & Annual Filing | KIA–Start Up Consult",
    description:
      "Launch your business in Ghana hassle-free with Kia-Start Up Consult’s Business Registration & Annual Filing service. Fast registration, yearly renewals, GIPC advisory, and 100% remote compliance for diaspora & foreigners.",
    url: `${siteConfig.url}/services/business-registration-ghana`,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}/images/business-registration-ghana.jpg`,
        width: 1200,
        height: 630,
        alt: "Business Registration and Annual Filing in Ghana — KIA–Start Up Consult",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Business Registration in Ghana & Annual Filing | KIA–Start Up Consult",
    description:
      "Launch your business in Ghana hassle-free with Kia-Start Up Consult’s Business Registration & Annual Filing service. Expert guidance, fast registration, stress-free compliance.",
    images: [`${siteConfig.url}/images/business-registration-ghana.jpg`],
  },
};

const COMPARISON_DATA = [
  {
    feature: "Remote Process (Zero Travel)",
    kia: "100% Remote (Passports/Notarization handled digitally)",
    goro: "Requires physical appearance or informal courier",
    lawFirm: "Often requires physical power of attorney or in-person meetings",
  },
  {
    feature: "Turnaround Time",
    kia: "5–10 Business Days (Direct ORC expedited liaison)",
    goro: "Unpredictable (Weeks to months, frequent stalls)",
    lawFirm: "4–8 Weeks (Extensive legal review cycles)",
  },
  {
    feature: "Pricing Transparency",
    kia: "Flat all-inclusive fee (Official registry + advisory)",
    goro: "Hidden fees, recurring demands for 'speed money'",
    lawFirm: "$2,500 – $5,000+ plus disbursements",
  },
  {
    feature: "Ongoing Compliance & Renewals",
    kia: "Automated Annual Filing Shield & Good Standing updates",
    goro: "Zero follow-up; client left with compounding default fines",
    lawFirm: "Expensive annual retainer ($1,500+/year)",
  },
  {
    feature: "GIPC & Diaspora Advisory",
    kia: "Specialized equity structuring & dual-citizenship optimization",
    goro: "No understanding of GIPC Act 865",
    lawFirm: "Competent but billed on hourly rates",
  },
];

const FAQS_SCHEMA = [
  {
    question: "Can a foreigner or diaspora citizen register a business in Ghana remotely?",
    answer:
      "Yes. Under Ghana's Companies Act 2019 (Act 992), foreign nationals and diaspora entrepreneurs can incorporate a Ghanaian business without flying to Accra. KIA–Start Up Consult manages remote name reservation, non-resident TIN applications, statutory documentation, and official Certificate of Incorporation dispatch.",
  },
  {
    question: "What is the difference between Business Registration and Annual Filing in Ghana?",
    answer:
      "Business Registration is the initial statutory incorporation of your entity with the Office of the Registrar of Companies (ORC). Annual Filing (or Yearly Renewal) is the mandatory annual submission of financial statements, beneficial ownership disclosures, and statutory renewal fees required by law every 12 months to avoid compounding late penalties and company strike-off.",
  },
  {
    question: "What happens if I miss my annual business renewal or filing in Ghana?",
    answer:
      "The ORC levies compounding late filing penalties ranging from GHS 600 to GHS 1,000+ per month of default. If default persists, the Registrar exercises statutory powers to strike the company off the national register, resulting in frozen corporate bank accounts and forfeiture of the business name.",
  },
  {
    question: "What are the GIPC minimum capital requirements for foreign investors in Ghana?",
    answer:
      "Under the GIPC Act 865, a 100% foreign-owned enterprise requires a minimum foreign equity capital of $500,000. In a joint venture where a Ghanaian citizen owns at least 10% equity, the foreign minimum is reduced to $200,000. General trading entities require $1,000,000 plus the mandatory employment of at least 20 skilled Ghanaians. Dual citizens with verified Ghanaian citizenship can qualify under indigenous domestic rules.",
  },
  {
    question: "What statutory officers are mandatory for a Ghanaian company under Act 992?",
    answer:
      "Every Ghanaian private limited company must appoint at least two directors (one of whom must be permanently resident in Ghana), a qualified Company Secretary, and an independent certified auditor licensed by the Institute of Chartered Accountants Ghana (ICAG).",
  },
  {
    question: "How long does it take to register a business in Ghana with KIA–Start Up Consult?",
    answer:
      "With all client identification and company details verified, incorporation typically takes 5 to 10 working days, including official name reservation, ORC certificate issuance, and GRA tax registration.",
  },
];

export default function BusinessRegistrationLandingPage() {
  return (
    <>
      {/* ─── Structured SEO Schema (Service & FAQPage) ────────────────────── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Service",
                name: "Business Registration and Annual Filing in Ghana",
                provider: {
                  "@type": "Organization",
                  name: siteConfig.name,
                  url: siteConfig.url,
                  logo: `${siteConfig.url}${siteConfig.logoImage}`,
                  telephone: siteConfig.phone,
                  email: siteConfig.email,
                  address: {
                    "@type": "PostalAddress",
                    addressCountry: "GH",
                    streetAddress: siteConfig.address,
                  },
                },
                description:
                  "Comprehensive business registration, yearly renewals, and annual returns filing in Ghana for local founders, diaspora entrepreneurs, and foreign investors.",
                areaServed: {
                  "@type": "Country",
                  name: "Ghana",
                },
                serviceType: "Corporate Incorporation & Regulatory Compliance",
              },
              {
                "@type": "FAQPage",
                mainEntity: FAQS_SCHEMA.map((f) => ({
                  "@type": "Question",
                  name: f.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: f.answer,
                  },
                })),
              },
            ],
          }),
        }}
      />

      <main className="min-h-screen bg-[#07080a] text-white">
        {/* ─── 1. HERO SECTION ─────────────────────────────────────────────── */}
        <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden border-b border-gold-500/30 gold-aurora-bg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[650px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.26),_rgba(201,162,39,0.12)_45%,_transparent_72%)] pointer-events-none" />
          <div className="absolute -left-32 top-1/3 w-[500px] h-[500px] bg-[radial-gradient(circle,_rgba(245,158,11,0.15),_transparent_70%)] blur-3xl pointer-events-none" />

          <div className="container-kia relative z-10">
            <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold shadow-[0_0_20px_rgba(255,215,0,0.2)] animate-fade-up">
                  <FileCheck2 className="w-4 h-4 text-gold-400" />
                  <span>PREMIER CORPORATE REGISTRY DESK · ACCRA, GHANA</span>
                </div>

                <h1 className="font-display text-3xl sm:text-5xl lg:text-[3.6rem] font-extrabold text-white leading-[1.08] tracking-tight animate-fade-up delay-100">
                  Business Registration in Ghana &amp;{" "}
                  <span className="shimmer-text-vibrant">Annual Filing</span>
                </h1>

                <p className="text-base sm:text-xl text-white/90 leading-relaxed max-w-2xl font-normal animate-fade-up delay-200">
                  Launch your business in Ghana hassle-free with KIA–Start Up Consult’s{" "}
                  <strong className="text-gold-300 font-semibold">
                    Business Registration &amp; Annual Filing
                  </strong>{" "}
                  service. Expert guidance, fast registration, stress-free compliance. Get started
                  today!
                </p>

                {/* Key value chips */}
                <div className="flex flex-wrap gap-2.5 pt-2 animate-fade-up delay-300">
                  {[
                    "✦ Business Registration",
                    "✦ Yearly Renewals",
                    "✦ Annual Filings",
                    "✦ 100% Remote Incorporation",
                    "✦ Foreign & Diaspora Specialists",
                  ].map((chip) => (
                    <span
                      key={chip}
                      className="px-3 py-1 rounded-full bg-white/10 border border-gold-500/25 text-xs font-mono font-semibold text-gold-300"
                    >
                      {chip}
                    </span>
                  ))}
                </div>

                {/* Direct Action CTAs */}
                <div className="flex flex-wrap items-center gap-4 pt-4 animate-fade-up delay-400">
                  <a
                    href="#registration-filing"
                    className="btn-ripple btn-pulse inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-sm shadow-[0_0_30px_rgba(255,215,0,0.5)] hover:scale-105 transition-all"
                  >
                    <span>Get Instant Formation Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href={buildWhatsAppLink(
                      whatsappMessages.businessRegistration(
                        "Diaspora / International Founder",
                        "New Business Registration & Annual Filing"
                      )
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-4 rounded-full border border-gold-400/50 bg-black/60 hover:bg-gold-500/20 text-white font-bold text-sm transition-all"
                  >
                    <span>Chat on WhatsApp</span>
                    <ExternalLink className="w-3.5 h-3.5 text-gold-400" />
                  </a>
                </div>
              </div>

              {/* Right: Visual Proof & Official Flyer */}
              <div className="lg:col-span-5 animate-fade-up delay-300">
                <div className="relative rounded-3xl overflow-hidden border-2 border-gold-500/40 p-[2px] bg-gradient-to-b from-gold-400/60 via-gold-500/20 to-gold-600/60 shadow-[0_20px_60px_rgba(0,0,0,0.9),_0_0_40px_rgba(255,215,0,0.25)]">
                  <div className="relative aspect-4/3 rounded-[22px] overflow-hidden bg-black">
                    <Image
                      src="/images/business-registration-ghana.jpg"
                      alt="Official Ghana Business Registration and Yearly Renewal Certificate"
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 500px"
                      className="object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-gold-500/30 text-gold-300 px-2.5 py-0.5 rounded border border-gold-500/40">
                        Official Legal Registration
                      </span>
                      <p className="text-sm font-semibold mt-1">
                        Compliant Under Act 992 &amp; Act 152
                      </p>
                      <p className="text-xs text-white/70">
                        Registration of Business Names · Private Limited Companies
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 2. WHY CHOOSE KIA VS GORO BOYS VS LAW FIRMS ─────────────────── */}
        <section className="py-20 md:py-28 border-b border-white/10 bg-[#0c0d12]">
          <div className="container-kia">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-2">
                COMPARATIVE MARKET ANALYSIS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                How KIA Compares: Fast, Transparent &amp; Institutional
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mt-4 mb-4" />
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Why hundreds of diaspora founders and multinational companies choose KIA–Start Up
                Consult over risky street agents and overpriced traditional law practices.
              </p>
            </div>

            <div className="overflow-x-auto rounded-2xl border border-gold-500/30 bg-black/60 shadow-2xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-gold-500/30 bg-gradient-to-r from-gold-500/15 via-gold-500/5 to-transparent text-gold-300 font-mono uppercase tracking-wider text-xs">
                    <th className="p-4 sm:p-5">Strategic Dimension</th>
                    <th className="p-4 sm:p-5 text-gold-400 font-bold bg-gold-500/10">
                      ★ KIA–Start Up Consult
                    </th>
                    <th className="p-4 sm:p-5 text-white/60">Informal Fixers ('Goro Boys')</th>
                    <th className="p-4 sm:p-5 text-white/60">Traditional Corporate Law Firms</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-white/85">
                  {COMPARISON_DATA.map((row) => (
                    <tr key={row.feature} className="hover:bg-white/5 transition-colors">
                      <td className="p-4 sm:p-5 font-bold text-white font-mono text-xs">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-5 font-semibold text-gold-200 bg-gold-500/[0.06]">
                        {row.kia}
                      </td>
                      <td className="p-4 sm:p-5 text-red-300/80">{row.goro}</td>
                      <td className="p-4 sm:p-5 text-white/70">{row.lawFirm}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ─── 3. THE INTERACTIVE LEAD GENERATION & FILING SECTION ─────────── */}
        <BusinessRegistrationLeadSection />

        {/* ─── 4. DETAILED BREAKDOWN OF THE THREE CORE PILLARS ────────────── */}
        <section className="py-20 md:py-28 bg-[#090a0f] border-b border-white/10">
          <div className="container-kia">
            <div className="max-w-3xl mb-16">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-2">
                DETAILED SERVICE PORTFOLIO
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                Complete Lifecycle Corporate Legal Support in Ghana
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mt-4 mb-4" />
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                From your initial company name clearance to 10-year statutory good standing, we
                protect your business entity at every stage.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="gold-glass-card p-8 rounded-2xl border border-gold-500/30">
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                  01
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-3">
                  Business Registration
                </h3>
                <p className="text-xs text-gold-300 font-mono font-semibold mt-1">
                  Fast Turnkey Incorporation
                </p>
                <p className="text-xs text-white/80 mt-4 leading-relaxed">
                  We handle end-to-end incorporation with the Office of the Registrar of Companies
                  (ORC), drafting tailored Company Regulations and securing tax registration with
                  the Ghana Revenue Authority (GRA).
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-gold-400 font-bold block mb-1">
                    Delivered Assets:
                  </span>
                  <p className="text-xs text-white/70">
                    Certificate of Incorporation, Registered Constitution/Regulations, Company Tax
                    Identification Number (TIN), Official Beneficial Ownership Register.
                  </p>
                </div>
              </div>

              <div className="gold-glass-card p-8 rounded-2xl border border-gold-500/30">
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                  02
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-3">Yearly Renewals</h3>
                <p className="text-xs text-gold-300 font-mono font-semibold mt-1">
                  Name Protection &amp; Penalty Shield
                </p>
                <p className="text-xs text-white/80 mt-4 leading-relaxed">
                  Avoid compounding late penalties (GHS 600–1,000/mo) and prevent your business name
                  from being seized or struck off. We process your annual renewal certificate and
                  district operating permits (BOP).
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-gold-400 font-bold block mb-1">
                    Delivered Assets:
                  </span>
                  <p className="text-xs text-white/70">
                    Official Certificate of Renewal, Penalty Clearance Receipt, Municipal Business
                    Operating Permit (BOP) validation.
                  </p>
                </div>
              </div>

              <div className="gold-glass-card p-8 rounded-2xl border border-gold-500/30">
                <span className="font-display text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                  03
                </span>
                <h3 className="font-display text-xl font-bold text-white mt-3">Annual Filings</h3>
                <p className="text-xs text-gold-300 font-mono font-semibold mt-1">
                  Companies Act 2019 Returns
                </p>
                <p className="text-xs text-white/80 mt-4 leading-relaxed">
                  Prepare and submit mandatory annual statutory returns accompanied by certified
                  financial statements, beneficial ownership updates, and GRA corporate tax clearance
                  documentation.
                </p>
                <div className="mt-6 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-gold-400 font-bold block mb-1">
                    Delivered Assets:
                  </span>
                  <p className="text-xs text-white/70">
                    ORC Stamped Annual Return Filing, Registry Good Standing Letter, Bank KYC
                    Re-authorization Pack.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─── 5. FREQUENTLY ASKED QUESTIONS ──────────────────────────────── */}
        <section className="py-20 md:py-28 bg-[#07080a] border-b border-white/10">
          <div className="container-kia">
            <div className="max-w-3xl mb-14">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-widest font-bold block mb-2">
                CLEAR STATUTORY ANSWERS
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-bold text-white leading-tight">
                Frequently Asked Questions on Ghana Business Registration
              </h2>
              <div className="w-20 h-0.5 bg-gradient-to-r from-gold-400 to-transparent mt-4 mb-4" />
              <p className="text-sm sm:text-base text-white/80 leading-relaxed">
                Direct, transparent guidance on regulatory costs, residency mandates, GIPC minimums,
                and renewal timelines.
              </p>
            </div>

            <div className="grid gap-4 max-w-4xl">
              {FAQS_SCHEMA.map((faq, i) => (
                <div
                  key={i}
                  className="gold-glass-card rounded-2xl p-6 sm:p-7 border border-gold-500/25 space-y-2.5"
                >
                  <h3 className="font-display text-base sm:text-lg font-bold text-white flex items-start gap-3">
                    <span className="text-gold-400 font-mono text-sm shrink-0">0{i + 1}.</span>
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 leading-relaxed pl-7">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ─── 6. FINAL DIRECT CALL TO ACTION ─────────────────────────────── */}
        <section className="relative py-20 overflow-hidden border-t border-gold-500/30 gold-aurora-bg">
          <div className="container-kia text-center max-w-3xl relative z-10">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-300 block mb-3">
              READY TO LAUNCH?
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Protect Your Company Name &amp; Start Operating in Ghana Today.
            </h2>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed mb-8">
              Speak directly with Isaac Agya Koomson and our Accra regulatory advisory partners.
              Fast, transparent, and completely stress-free.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <a
                href={buildWhatsAppLink(
                  whatsappMessages.businessRegistration(
                    "Diaspora / International Founder",
                    "Business Registration, Yearly Renewals & Annual Filing"
                  )
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple btn-pulse inline-flex items-center gap-2 px-9 py-4 rounded-full bg-gradient-to-r from-gold via-gold-solar to-gold-deep text-black font-extrabold text-sm sm:text-base shadow-[0_0_40px_rgba(255,215,0,0.6)] hover:scale-105 transition-all"
              >
                <span>Chat with Advisory Desk on WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/insights/business-registration-ghana-guide-foreigners-diaspora"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold-400/50 bg-black/60 hover:bg-gold-500/20 text-white font-bold text-sm transition-all"
              >
                <span>Read Full 2026 Guide</span>
                <ArrowRight className="w-4 h-4 text-gold-400" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
