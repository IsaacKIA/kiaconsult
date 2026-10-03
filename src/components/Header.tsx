"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  ChevronDown,
  Menu,
  X,
  Search,
  MessageSquareCode,
  ArrowRight,
  Briefcase,
  TrendingUp,
  Coins,
  Cpu,
  Globe2,
  Building,
  Layers,
  Sparkles,
  Camera,
  ArrowUpRight,
} from "lucide-react";
import { navigation, siteConfig, whatsappMessages, buildWhatsAppLink } from "@/lib/site-config";
import WhatsAppCTA from "./WhatsAppCTA";
import SearchModal from "./SearchModal";
import WhatsAppChatbot from "./WhatsAppChatbot";

const SERVICE_ITEMS = [
  {
    icon: Briefcase,
    title: "Enterprise Creation & Venture Development",
    desc: "From concept to structured, bankable enterprise entities.",
    href: "/services#enterprise-creation",
  },
  {
    icon: TrendingUp,
    title: "SME Growth & Competitiveness Advisory",
    desc: "Scale operational capacity, governance, and market share.",
    href: "/services#sme-growth",
  },
  {
    icon: Coins,
    title: "Capital & Financial Advisory",
    desc: "Investment readiness, valuation, and capital syndication.",
    href: "/services#capital-advisory",
  },
  {
    icon: Cpu,
    title: "Digital & Technology Transformation",
    desc: "Applied enterprise software, automation, and AI workflows.",
    href: "/services#digital-transformation",
  },
  {
    icon: Globe2,
    title: "Sector-Specific Advisory",
    desc: "Agribusiness, green energy, AfCFTA trade, and manufacturing.",
    href: "/services#sector-advisory",
  },
  {
    icon: Building,
    title: "Ecosystem Development & Institutional Support",
    desc: "Programs for DFIs, TVETs, ministries, and donor agencies.",
    href: "/services#ecosystem-development",
  },
];

const PLATFORM_PREVIEWS = [
  {
    name: "HopeFusion Capital Platform",
    tagline: "Blended finance & capital syndication for African ventures",
    stat: "$2.5M+ Catalyzed",
    href: "/platforms#hopefusion",
  },
  {
    name: "Adwuma Enterprise Pipeline™",
    tagline: "Scalable youth employment & high-growth venture engine",
    stat: "4,500+ Trained",
    href: "/platforms#adwuma",
  },
  {
    name: "Nkabom Market Linkages",
    tagline: "AfCFTA cross-border trade & corporate procurement corridors",
    stat: "12 Corridors",
    href: "/platforms#nkabom",
  },
  {
    name: "Asase Agri-Holdings",
    tagline: "Food sovereignty, post-harvest & rural economic assets",
    stat: "340+ Metric Tonnes",
    href: "/platforms#asase",
  },
];

/** Nav link with animated gold underline slide-in on hover/active */
function NavLink({
  href,
  active,
  children,
  onClick,
}: {
  href: string;
  active: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative py-2 text-sm font-medium transition-colors duration-200 ${
        active ? "text-gold-deep font-semibold" : "text-ink hover:text-gold-deep"
      }`}
    >
      {children}
      {/* animated underline */}
      <span
        className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-gold-deep to-gold transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesMegaOpen, setServicesMegaOpen] = useState(false);
  const [platformsMegaOpen, setPlatformsMegaOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  // Scroll-shrink effect
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile & dropdowns on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesMegaOpen(false);
    setPlatformsMegaOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile nav is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "h-[64px] bg-paper/98 backdrop-blur-2xl border-b border-gold-500/30 shadow-lg shadow-black/[0.08]"
            : "h-20 bg-paper/95 backdrop-blur-md border-b border-line"
        }`}
      >
        <div className="container-kia flex h-full items-center justify-between">
          {/* Master Brand Logo Asset */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0"
            onClick={closeMobile}
            aria-label="KIA–Start Up Consult Home"
          >
            <div
              className={`relative overflow-hidden transition-all duration-300 ${
                scrolled ? "h-8 w-28 sm:w-32" : "h-11 w-32 sm:w-40"
              }`}
            >
              <Image
                src={siteConfig.logoImage}
                alt="KIA–Start Up Consult Ltd"
                fill
                sizes="(max-width: 640px) 130px, 160px"
                className="object-contain object-left transition-transform duration-300 group-hover:scale-[1.03]"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation with Mega-Menus */}
          <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary navigation">
            <NavLink href="/" active={pathname === "/"}>
              Home
            </NavLink>

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesMegaOpen(true)}
              onMouseLeave={() => setServicesMegaOpen(false)}
            >
              <Link
                href="/services"
                className={`group relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith("/services")
                    ? "text-gold-deep font-semibold"
                    : "text-ink hover:text-gold-deep"
                }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    servicesMegaOpen ? "rotate-180 text-gold-deep" : "text-ink/50"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-gold-deep to-gold transition-all duration-300 ${
                    pathname.startsWith("/services") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-[660px] pt-3 transition-all duration-250 ${
                  servicesMegaOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="rounded-2xl border border-gold-deep/25 bg-paper p-5 shadow-2xl shadow-black/15 ring-1 ring-gold-500/15">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-line">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep">
                      Strategic Advisory &amp; Systems Practices
                    </span>
                    <Link
                      href="/services"
                      className="text-xs font-bold text-ink/75 hover:text-gold-deep flex items-center gap-1 transition-colors"
                    >
                      View All Services <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    {SERVICE_ITEMS.map((s, i) => {
                      const Icon = s.icon;
                      return (
                        <Link
                          key={i}
                          href={s.href}
                          className="group p-3 rounded-xl hover:bg-gold/[0.08] transition-all duration-200 flex gap-3 items-start border border-transparent hover:border-gold/25"
                        >
                          <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors duration-200 ring-1 ring-gold/20 group-hover:ring-gold/40">
                            <Icon className="w-4 h-4 text-gold-deep" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-ink group-hover:text-gold-deep leading-tight transition-colors duration-200">
                              {s.title}
                            </p>
                            <p className="text-[11px] text-ink/75 mt-0.5 line-clamp-1">{s.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  {/* Bottom banner */}
                  <div className="mt-3 pt-3 border-t border-line flex items-center justify-between bg-gold/[0.08] p-3 rounded-xl border border-gold-deep/20">
                    <span className="text-xs text-ink font-medium">
                      🇬🇭 Starting a business in Ghana? Fast remote formation &amp; annual compliance:
                    </span>
                    <Link
                      href="/services/business-registration-ghana"
                      className="text-xs font-bold text-gold-deep hover:underline flex items-center gap-1 shrink-0"
                    >
                      Business Registration Desk →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Platforms Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setPlatformsMegaOpen(true)}
              onMouseLeave={() => setPlatformsMegaOpen(false)}
            >
              <Link
                href="/platforms"
                className={`group relative flex items-center gap-1.5 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname.startsWith("/platforms")
                    ? "text-gold-deep font-semibold"
                    : "text-ink hover:text-gold-deep"
                }`}
              >
                <span>Platforms</span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    platformsMegaOpen ? "rotate-180 text-gold-deep" : "text-ink/50"
                  }`}
                />
                <span
                  className={`absolute bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-gold-deep to-gold transition-all duration-300 ${
                    pathname.startsWith("/platforms") ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>

              {/* Mega Dropdown Panel */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full w-[540px] pt-3 transition-all duration-250 ${
                  platformsMegaOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0 pointer-events-none"
                }`}
              >
                <div className="rounded-2xl border border-gold-deep/25 bg-paper p-5 shadow-2xl shadow-black/15 ring-1 ring-gold-500/15">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-line">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-gold-deep">
                      Proprietary Economic Platforms
                    </span>
                    <Link
                      href="/platforms"
                      className="text-xs font-bold text-ink/75 hover:text-gold-deep flex items-center gap-1 transition-colors"
                    >
                      Platform Catalog <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  <div className="space-y-2">
                    {PLATFORM_PREVIEWS.map((p, i) => (
                      <Link
                        key={i}
                        href={p.href}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-gold/[0.08] transition-all duration-200 border border-transparent hover:border-gold/25"
                      >
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gold/15 flex items-center justify-center shrink-0 group-hover:bg-gold/30 transition-colors duration-200 ring-1 ring-gold/20 group-hover:ring-gold/40">
                            <Layers className="w-4 h-4 text-gold-deep" />
                          </div>
                          <div>
                            <p className="text-xs font-bold text-ink group-hover:text-gold-deep leading-tight transition-colors duration-200">
                              {p.name}
                            </p>
                            <p className="text-[11px] text-ink/75 mt-0.5">{p.tagline}</p>
                          </div>
                        </div>
                        <span className="shrink-0 text-xs font-mono font-bold text-gold-deep bg-gold/15 px-2.5 py-0.5 rounded border border-gold-500/25">
                          {p.stat}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <NavLink href="/about" active={pathname === "/about"}>
              About
            </NavLink>

            <NavLink href="/gallery" active={pathname === "/gallery"}>
              <span className="flex items-center gap-1.5">
                <Camera className="w-3.5 h-3.5 text-gold-deep" />
                Gallery
              </span>
            </NavLink>

            <NavLink href="/insights" active={pathname.startsWith("/insights")}>
              Insights
            </NavLink>

            <NavLink href="/contact" active={pathname === "/contact"}>
              Contact
            </NavLink>
          </nav>

          {/* Quick Actions Right Side */}
          <div className="hidden items-center gap-2.5 sm:flex">
            <button
              onClick={() => setSearchOpen(true)}
              className="group flex items-center gap-2 rounded-full border border-gold-500/35 bg-gold-500/[0.07] hover:bg-gold-500/15 hover:border-gold-500/60 px-3.5 py-1.5 text-xs text-ink font-semibold transition-all duration-200 shadow-sm"
              aria-label="Quick find any section or page"
            >
              <Search className="h-3.5 w-3.5 text-gold-deep" />
              <span className="hidden md:inline">Quick Find</span>
              <kbd className="hidden rounded bg-black/10 px-1.5 py-0.5 text-[10px] font-mono text-ink/70 md:inline group-hover:bg-gold/20 transition-colors">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setChatbotOpen(true)}
              className="hidden lg:flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 text-xs font-medium text-ink hover:bg-gold/25 hover:border-gold/70 transition-all duration-200"
              aria-label="Open guided onboarding assistant"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold-deep" />
              <span>Guide Me</span>
            </button>

            <WhatsAppCTA message={whatsappMessages.general} size="sm">
              Talk to KIA
            </WhatsAppCTA>
          </div>

          {/* Mobile hamburger & search */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-gold hover:bg-gold/5 transition-all duration-200"
              aria-label="Search"
            >
              <Search className="h-4 w-4 text-gold-deep" />
            </button>
            <button
              className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink hover:border-gold hover:bg-gold/5 transition-all duration-200"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? (
                <X className="h-5 w-5 text-gold-deep" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer — full-viewport overlay */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden animate-fade-in"
            onClick={closeMobile}
            aria-hidden="true"
          />

          {/* Drawer */}
          <nav
            className="fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm bg-paper shadow-2xl lg:hidden flex flex-col animate-slide-right"
            aria-label="Primary mobile navigation"
          >
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-line">
              <div className="relative h-9 w-32 overflow-hidden">
                <Image
                  src={siteConfig.logoImage}
                  alt="KIA–Start Up Consult"
                  fill
                  sizes="130px"
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={closeMobile}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line hover:border-gold hover:bg-gold/5 transition-all"
                aria-label="Close menu"
              >
                <X className="h-4 w-4 text-gold-deep" />
              </button>
            </div>

            {/* Quick Section Finder CTA in mobile drawer */}
            <div className="px-4 pt-3 pb-1">
              <button
                onClick={() => {
                  closeMobile();
                  setSearchOpen(true);
                }}
                className="w-full flex items-center justify-between gap-2.5 rounded-xl border border-gold-500/40 bg-gold-500/10 px-3.5 py-2.5 text-xs font-bold text-ink hover:bg-gold-500/20 transition-all shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Search className="h-4 w-4 text-gold-deep" />
                  <span>Locate Any Page or Section</span>
                </div>
                <span className="text-[10px] font-mono uppercase bg-gold-500/20 text-gold-deep px-2 py-0.5 rounded font-extrabold">
                  Instant
                </span>
              </button>
            </div>

            {/* Nav links */}
            <div className="flex-1 overflow-y-auto px-4 py-3 space-y-1">
              {navigation.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className={`flex items-center justify-between w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                      pathname === item.href || pathname.startsWith(item.href + "/")
                        ? "bg-gold/15 text-gold-deep font-semibold border border-gold/30"
                        : "text-ink hover:bg-mist/60"
                    }`}
                    onClick={closeMobile}
                  >
                    <span>{item.label}</span>
                    {pathname === item.href || pathname.startsWith(item.href + "/") ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep" />
                    ) : (
                      <ArrowRight className="w-3.5 h-3.5 text-ink/30" />
                    )}
                  </Link>
                  {item.children && (
                    <div className="mt-1 mb-2 pl-4 space-y-0.5">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-ink/65 hover:text-gold-deep hover:bg-gold/[0.06] transition-all duration-200"
                          onClick={closeMobile}
                        >
                          <span className="w-1 h-1 rounded-full bg-gold-deep/50 shrink-0" />
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom CTAs */}
            <div className="p-4 border-t border-line space-y-2.5 bg-mist/30">
              <button
                onClick={() => {
                  closeMobile();
                  setChatbotOpen(true);
                }}
                className="flex w-full items-center justify-center gap-2 rounded-xl border border-gold/40 bg-gold/10 py-3 text-sm font-medium text-ink hover:bg-gold/20 transition-all duration-200"
              >
                <Sparkles className="h-4 w-4 text-gold-deep" />
                Guided Onboarding Assistant
              </button>
              <WhatsAppCTA message={whatsappMessages.general} className="w-full">
                Start a Conversation
              </WhatsAppCTA>
            </div>
          </nav>
        </>
      )}

      {/* Global Search and Chatbot Modals */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <WhatsAppChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </>
  );
}
