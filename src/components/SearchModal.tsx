"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Search,
  X,
  ArrowRight,
  BookOpen,
  Layers,
  Briefcase,
  Compass,
  FileText,
  Sparkles,
  ChevronRight,
  Calculator,
  Camera,
  Mail,
  HelpCircle,
  TrendingUp,
  Globe2,
  Users,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { services, platforms } from "@/lib/site-config";
import { insightArticles } from "@/lib/insights-data";

export interface SearchItem {
  id: string;
  title: string;
  category: "page" | "section" | "service" | "platform" | "insight";
  href: string;
  description: string;
  keywords: string[];
  badge?: string;
  iconName?: string;
}

const STATIC_INDEX: SearchItem[] = [
  // ─── PAGES ───
  {
    id: "page-home",
    title: "Home — Economic Architecture for Africa",
    category: "page",
    href: "/",
    description: "Main institutional landing page, 7-layer architecture, continental vision.",
    keywords: ["home", "main", "landing", "architecture", "kia", "isaac", "africa", "start up"],
    badge: "Main Page",
  },
  {
    id: "page-about",
    title: "About KIA — Mandate & Leadership",
    category: "page",
    href: "/about",
    description: "Founding genesis, CEO Isaac Agya Koomson, 24-nation reach, governance & board.",
    keywords: ["about", "story", "mission", "mandate", "ceo", "isaac", "team", "board", "leadership"],
    badge: "Corporate",
  },
  {
    id: "page-services",
    title: "Strategic Advisory Services",
    category: "page",
    href: "/services",
    description: "Six core advisory pillars from enterprise creation to capital syndication.",
    keywords: ["services", "practices", "consulting", "advisory", "sme", "capital", "ventures"],
    badge: "Practices",
  },
  {
    id: "page-business-registration",
    title: "Business Registration in Ghana & Annual Filing",
    category: "page",
    href: "/services/business-registration-ghana",
    description: "Launch your business in Ghana hassle-free. Fast ORC registration, yearly renewals, and 100% remote compliance for diaspora & foreigners.",
    keywords: [
      "business registration in ghana",
      "business registration and annual filing",
      "register business in ghana",
      "yearly renewals",
      "orc",
      "incorporation",
      "diaspora",
      "foreigners",
    ],
    badge: "Specialized Desk",
  },
  {
    id: "page-platforms",
    title: "Proprietary Impact Platforms",
    category: "page",
    href: "/platforms",
    description: "HopeFusion Africa, Adwuma Pipeline, Nkabom Market Linkages, and Asase Green.",
    keywords: ["platforms", "vehicles", "hopefusion", "adwuma", "nkabom", "asase", "funds", "capital"],
    badge: "Flagship",
  },
  {
    id: "page-gallery",
    title: "Executive Media & Photographic Archive",
    category: "page",
    href: "/gallery",
    description: "29 verified photo archives of keynote addresses, UNDP forums, and television broadcasts.",
    keywords: ["gallery", "media", "photos", "stage", "keynote", "aetf", "gdiw", "tv", "broadcast"],
    badge: "Visual Archive",
  },
  {
    id: "page-insights",
    title: "KIA Insights & Intelligence Publications",
    category: "page",
    href: "/insights",
    description: "Macroeconomic analysis, African venture capital trends, and AfCFTA policy briefs.",
    keywords: ["insights", "articles", "intelligence", "research", "reports", "publications", "blog"],
    badge: "Publications",
  },
  {
    id: "page-contact",
    title: "Contact & Institutional Concierge",
    category: "page",
    href: "/contact",
    description: "Direct WhatsApp desk, structured inquiry form, Accra headquarters, advisory booking.",
    keywords: ["contact", "whatsapp", "reach", "email", "office", "accra", "hire", "consult", "form"],
    badge: "Desk",
  },

  // ─── DEEP SECTIONS (HOME) ───
  {
    id: "section-home-simulator",
    title: "Interactive African Capital Simulator",
    category: "section",
    href: "/#simulator",
    description: "Model project employment yield, SME catalytic ratio, and value-chain multipliers.",
    keywords: ["simulator", "calculator", "capital", "yield", "model", "investment", "roi", "jobs"],
    badge: "Interactive Tool",
  },
  {
    id: "section-home-corridors",
    title: "24-Nation Continental Map & AfCFTA Corridors",
    category: "section",
    href: "/#corridors",
    description: "Interactive visual map connecting sovereign African hubs and commercial trade corridors.",
    keywords: ["map", "corridors", "afcfta", "countries", "nations", "continental", "ghana", "nigeria", "kenya"],
    badge: "Home Section",
  },
  {
    id: "section-home-architecture",
    title: "7-Layer Economic Systems Framework",
    category: "section",
    href: "/#architecture",
    description: "Proprietary methodology bridging high-level sovereign policy down to grassroots SME scale.",
    keywords: ["7-layer", "framework", "architecture", "system", "layers", "proprietary", "methodology"],
    badge: "Home Section",
  },
  {
    id: "section-home-faq",
    title: "Frequently Asked Questions (FAQ)",
    category: "section",
    href: "/#faq",
    description: "Detailed institutional answers on advisory engagement, pricing models, and eligibility.",
    keywords: ["faq", "questions", "answers", "cost", "eligibility", "help", "timeline", "criteria"],
    badge: "Home Section",
  },
  {
    id: "section-home-business-registration",
    title: "Business Registration & Yearly Renewals Concierge",
    category: "section",
    href: "/#registration-filing",
    description: "Launch your business in Ghana hassle-free. Fast ORC registration, yearly renewals, and 100% remote compliance for diaspora & foreigners.",
    keywords: [
      "business registration in ghana",
      "business registration and annual filing",
      "yearly renewals",
      "annual filings",
      "orc",
      "registration",
      "compliance",
      "ghana card",
      "gipc",
    ],
    badge: "Home Section",
  },
  {
    id: "section-home-media",
    title: "Executive Media Archive Highlights",
    category: "section",
    href: "/#media",
    description: "Featured photography across continental summits, UNDP meetings, and TV broadcasts.",
    keywords: ["media", "summit", "keynote", "aetf", "undp", "press"],
    badge: "Home Section",
  },

  // ─── DEEP SECTIONS (ABOUT) ───
  {
    id: "section-about-vision",
    title: "CEO Isaac Agya Koomson — Vision & Profile",
    category: "section",
    href: "/about#vision",
    description: "Executive profile of Founder & CEO Isaac Agya Koomson, architectural philosophy.",
    keywords: ["isaac", "agya", "koomson", "ceo", "founder", "biography", "profile", "vision"],
    badge: "About Section",
  },
  {
    id: "section-about-timeline",
    title: "Institutional Milestones Timeline (2021–2025)",
    category: "section",
    href: "/about#timeline",
    description: "Track record of continental progress from foundation to international stages.",
    keywords: ["timeline", "history", "milestones", "years", "2021", "2023", "2025", "track record"],
    badge: "About Section",
  },
  {
    id: "section-about-model",
    title: "Three-Level Operating Model",
    category: "section",
    href: "/about#model",
    description: "Enterprise level, Institutional level, and Continental Ecosystem level coordination.",
    keywords: ["model", "operating", "enterprise level", "institutional", "ecosystem"],
    badge: "About Section",
  },
  {
    id: "section-about-board",
    title: "International Advisory Board & Governance",
    category: "section",
    href: "/about#board",
    description: "Nine global advisors across development finance, European policy, and venture scale.",
    keywords: ["board", "advisors", "governance", "acheampong", "nuutinen", "ghansah", "amiar"],
    badge: "About Section",
  },

  // ─── DEEP SECTIONS (SERVICES) ───
  {
    id: "section-service-methodology",
    title: "Advisory Engagement Methodology",
    category: "section",
    href: "/services#methodology",
    description: "3-phase structured approach: Diagnosis & Discovery → Architecture Design → Co-Execution.",
    keywords: ["methodology", "process", "steps", "discovery", "diagnosis", "roadmap", "timeline"],
    badge: "Services Section",
  },

  // ─── DEEP SECTIONS (CONTACT) ───
  {
    id: "section-contact-channels",
    title: "Direct WhatsApp Advisory Desk",
    category: "section",
    href: "/contact#channels",
    description: "Instant real-time communications channel for entrepreneurs and institutional partners.",
    keywords: ["whatsapp", "chat", "direct", "quick", "real-time", "number", "desk"],
    badge: "Contact Section",
  },
  {
    id: "section-contact-form",
    title: "Structured Project Inquiry Form",
    category: "section",
    href: "/contact#form",
    description: "Submit custom project specs, RFP details, or sovereign advisory requirements.",
    keywords: ["form", "inquiry", "rfp", "submit", "request", "proposal", "booking"],
    badge: "Contact Section",
  },

  // ─── DEEP SECTIONS (GALLERY) ───
  {
    id: "section-gallery-archive",
    title: "Curated Photographic Archive",
    category: "section",
    href: "/gallery#archive",
    description: "Filterable gallery of high-resolution field and diplomatic photography.",
    keywords: ["archive", "filter", "gallery", "photos", "lightbox", "events"],
    badge: "Gallery Section",
  },
  {
    id: "section-gallery-booking",
    title: "Keynote Speaking & Delegation Booking",
    category: "section",
    href: "/gallery#booking",
    description: "Inquire about engaging Isaac Agya Koomson for conferences and sovereign panels.",
    keywords: ["booking", "speaker", "keynote", "invitation", "delegate", "conference"],
    badge: "Gallery Section",
  },
];

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FilterTab = "all" | "page" | "section" | "service" | "platform" | "insight";

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Compile full searchable index
  const fullIndex = useMemo<SearchItem[]>(() => {
    const list: SearchItem[] = [...STATIC_INDEX];

    // Add Services
    services.forEach((s) => {
      list.push({
        id: `service-${s.id}`,
        title: `${s.number} — ${s.title}`,
        category: "service",
        href: `/services#${s.id}`,
        description: s.problem,
        keywords: [s.title.toLowerCase(), s.problem.toLowerCase(), ...s.approach.map((a) => a.toLowerCase())],
        badge: `Pillar ${s.number}`,
      });
    });

    // Add Platforms
    platforms.forEach((p) => {
      list.push({
        id: `platform-${p.id}`,
        title: p.name,
        category: "platform",
        href: `/platforms#${p.id}`,
        description: `${p.tagline} — ${p.problem}`,
        keywords: [p.name.toLowerCase(), p.tagline.toLowerCase(), p.problem.toLowerCase()],
        badge: "Platform Vehicle",
      });
    });

    // Add Insights
    insightArticles.forEach((a) => {
      list.push({
        id: `insight-${a.slug}`,
        title: a.title,
        category: "insight",
        href: `/insights/${a.slug}`,
        description: a.excerpt,
        keywords: [a.title.toLowerCase(), a.category.toLowerCase(), ...a.tags.map((t) => t.toLowerCase())],
        badge: a.category,
      });
    });

    return list;
  }, []);

  // Filter items based on query & active tab
  const filteredItems = useMemo(() => {
    const q = query.toLowerCase().trim();
    return fullIndex.filter((item) => {
      // Tab filter
      if (activeTab !== "all" && item.category !== activeTab) {
        return false;
      }

      // Query filter
      if (!q) return true;

      const titleMatch = item.title.toLowerCase().includes(q);
      const descMatch = item.description.toLowerCase().includes(q);
      const kwMatch = item.keywords.some((k) => k.includes(q));
      const badgeMatch = item.badge?.toLowerCase().includes(q);

      return titleMatch || descMatch || kwMatch || badgeMatch;
    });
  }, [fullIndex, query, activeTab]);

  // Reset selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(0);
  }, [filteredItems]);

  // Auto-focus input on open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery("");
      setActiveTab("all");
    }
  }, [isOpen]);

  // Keyboard navigation: arrows, enter, escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      } else if (isOpen) {
        if (e.key === "ArrowDown") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev < filteredItems.length - 1 ? prev + 1 : 0));
        } else if (e.key === "ArrowUp") {
          e.preventDefault();
          setSelectedIndex((prev) => (prev > 0 ? prev - 1 : filteredItems.length - 1));
        } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
          e.preventDefault();
          handleNavigate(filteredItems[selectedIndex].href);
        }
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, filteredItems, selectedIndex]);

  // Scroll active item into view
  useEffect(() => {
    if (listRef.current) {
      const activeEl = listRef.current.querySelector(`[data-index="${selectedIndex}"]`);
      if (activeEl) {
        activeEl.scrollIntoView({ block: "nearest" });
      }
    }
  }, [selectedIndex]);

  const handleNavigate = (href: string) => {
    onClose();
    router.push(href);
  };

  if (!isOpen) return null;

  const getCategoryIcon = (category: SearchItem["category"]) => {
    switch (category) {
      case "page":
        return <Compass className="w-4 h-4 text-gold-400" />;
      case "section":
        return <Zap className="w-4 h-4 text-gold-300" />;
      case "service":
        return <Briefcase className="w-4 h-4 text-blue-400" />;
      case "platform":
        return <Layers className="w-4 h-4 text-emerald-400" />;
      case "insight":
        return <BookOpen className="w-4 h-4 text-purple-400" />;
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/75 p-3 pt-12 backdrop-blur-md sm:p-4 sm:pt-20 animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Universal Site Search & Section Locator"
    >
      <div
        className="w-full max-w-3xl overflow-hidden rounded-2xl sm:rounded-3xl border border-gold-500/40 bg-[#0c0d11] text-white shadow-[0_24px_80px_rgba(0,0,0,0.85),_0_0_35px_rgba(255,215,0,0.22)] transition-all animate-fade-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Search Input Bar */}
        <div className="relative flex items-center border-b border-gold-500/20 px-5 py-4 bg-gradient-to-r from-black/80 via-[#15171e]/90 to-black/80">
          <Search className="h-5 w-5 text-gold-400 shrink-0" aria-hidden="true" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Locate any page, section, service, or insight in seconds..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent px-3.5 text-base sm:text-lg text-white placeholder:text-white/40 outline-none font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="mr-2 text-xs font-mono font-bold uppercase tracking-wider text-white/50 hover:text-gold-300 transition-colors"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-xl p-1.5 text-white/60 hover:bg-white/10 hover:text-white transition-colors"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Quick Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar border-b border-white/10 px-4 py-2 bg-black/40">
          {(
            [
              { key: "all", label: "All Items" },
              { key: "page", label: "Pages" },
              { key: "section", label: "Page Sections" },
              { key: "service", label: "Services" },
              { key: "platform", label: "Platforms" },
              { key: "insight", label: "Insights" },
            ] as const
          ).map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-3 py-1 rounded-full text-xs font-mono font-bold transition-all shrink-0 ${
                  isActive
                    ? "bg-gradient-to-r from-gold-400 to-amber-500 text-black shadow-[0_0_12px_rgba(255,215,0,0.3)]"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="max-h-[58vh] overflow-y-auto p-3 sm:p-4 space-y-1.5 divide-y divide-white/5"
        >
          {filteredItems.length === 0 ? (
            <div className="py-14 text-center">
              <Compass className="w-8 h-8 text-gold-400/50 mx-auto mb-3 animate-pulse" />
              <p className="font-display text-lg font-medium text-white">
                No matching section or topic found for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-2 text-xs text-white/60 max-w-sm mx-auto">
                Try searching for keywords like &ldquo;Simulator&rdquo;, &ldquo;Isaac&rdquo;, &ldquo;AfCFTA&rdquo;, &ldquo;Capital&rdquo;, or &ldquo;WhatsApp&rdquo;.
              </p>
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === selectedIndex;
              return (
                <div
                  key={item.id}
                  data-index={index}
                  onClick={() => handleNavigate(item.href)}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`group flex items-start justify-between gap-3 p-3.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? "bg-gold-500/15 border border-gold-500/50 shadow-[0_0_16px_rgba(255,215,0,0.12)] translate-x-1"
                      : "hover:bg-white/5 border border-transparent"
                  }`}
                >
                  <div className="flex items-start gap-3 min-w-0">
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isSelected
                          ? "bg-gold-400/25 border border-gold-400/50"
                          : "bg-white/5 border border-white/10"
                      }`}
                    >
                      {getCategoryIcon(item.category)}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-bold text-white group-hover:text-gold-300 transition-colors truncate">
                          {item.title}
                        </span>
                        {item.badge && (
                          <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-gold-300 border border-gold-500/20 shrink-0">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/70 line-clamp-1 mt-1 font-normal">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0 self-center">
                    <span
                      className={`text-[11px] font-mono font-bold hidden sm:inline transition-opacity ${
                        isSelected ? "text-gold-300 opacity-100" : "opacity-0"
                      }`}
                    >
                      Jump →
                    </span>
                    <ArrowRight
                      className={`h-4 w-4 transition-transform duration-200 ${
                        isSelected
                          ? "text-gold-400 translate-x-1"
                          : "text-white/30 group-hover:text-gold-300"
                      }`}
                    />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Quick Suggestion Strip when empty */}
        {!query && (
          <div className="border-t border-white/10 bg-black/60 px-5 py-3">
            <div className="flex items-center justify-between text-xs text-white/50 mb-2">
              <span className="font-mono uppercase font-bold text-[10px] tracking-wider text-gold-400">
                Instant Jump Destinations:
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                { label: "🇬🇭 Business Registration", href: "/services/business-registration-ghana" },
                { label: "⚡ Capital Simulator", href: "/#simulator" },
                { label: "👤 CEO Isaac Agya Koomson", href: "/about#vision" },
                { label: "🚀 Adwuma Youth Engine", href: "/platforms#adwuma" },
                { label: "🌍 AfCFTA Advisory", href: "/services#sector-advisory" },
                { label: "💬 WhatsApp Desk", href: "/contact#channels" },
                { label: "❓ FAQ", href: "/#faq" },
              ].map((chip) => (
                <button
                  key={chip.label}
                  onClick={() => handleNavigate(chip.href)}
                  className="px-2.5 py-1 rounded-lg bg-white/5 hover:bg-gold-500/20 border border-white/10 hover:border-gold-500/40 text-xs text-white/80 hover:text-white transition-all font-medium"
                >
                  {chip.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Footer shortcuts info */}
        <div className="border-t border-gold-500/20 bg-black/90 px-5 py-3 text-xs text-white/50 flex justify-between items-center font-mono">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/80">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/80">↓</kbd>
              <span className="hidden sm:inline">Navigate</span>
            </span>
            <span className="flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/80">↵</kbd>
              <span>Jump to Section</span>
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-white/80">ESC</kbd>
              <span>Close</span>
            </span>
          </div>
          <span className="text-gold-400/80 font-bold hidden md:inline">
            {filteredItems.length} destinations indexed
          </span>
        </div>
      </div>
    </div>
  );
}
