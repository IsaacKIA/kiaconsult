"use client";

import { useState, useEffect } from "react";
import { ChevronDown, ArrowUp, Compass } from "lucide-react";

export interface NavSectionItem {
  id: string;
  label: string;
  shortLabel?: string;
  badge?: string;
}

interface StickySectionNavProps {
  title?: string;
  sections: NavSectionItem[];
}

export default function StickySectionNav({
  title = "Page Navigator",
  sections,
}: StickySectionNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id || "");
  const [isScrolledPastHero, setIsScrolledPastHero] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky nav after scrolling 350px
      const scrollY = window.scrollY;
      setIsScrolledPastHero(scrollY > 350);

      // Find active section
      const scrollPosition = scrollY + 180;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveId(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90; // offset for sticky header + subnav
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isScrolledPastHero) return null;

  const currentSection = sections.find((s) => s.id === activeId) || sections[0];

  return (
    <div className="fixed top-16 sm:top-20 inset-x-0 z-40 transition-all duration-300 animate-fade-down">
      <div className="container-kia">
        <div className="mx-auto max-w-5xl rounded-2xl border border-gold-500/35 bg-black/85 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.6)] px-3 py-2 sm:px-4 sm:py-2.5 flex items-center justify-between gap-3 text-white">
          {/* Left: Quick Label / Current Section */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider text-gold-300 hidden md:inline">
              {title}:
            </span>
            <span className="text-xs font-bold text-white max-w-[140px] sm:max-w-[180px] truncate md:hidden">
              {currentSection.shortLabel || currentSection.label}
            </span>
          </div>

          {/* Desktop Pills Strip */}
          <div className="hidden md:flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
            {sections.map((item, idx) => {
              const isActive = activeId === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold transition-all duration-200 shrink-0 ${
                    isActive
                      ? "bg-gradient-to-r from-gold via-gold-solar to-gold-400 text-black shadow-[0_0_15px_rgba(255,215,0,0.4)] scale-105"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className={isActive ? "text-black/80" : "text-gold-400/80"}>
                    0{idx + 1}
                  </span>
                  <span>{item.shortLabel || item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile Dropdown Trigger */}
          <div className="relative md:hidden flex-1 flex justify-end">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/15 text-xs font-mono font-bold text-gold-300"
            >
              <span>Jump to Section</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  mobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {mobileMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-64 rounded-2xl border border-gold-500/30 bg-[#0c0e14] p-2 shadow-2xl z-50">
                <div className="text-[10px] font-mono text-gold-400/80 uppercase px-3 py-1.5 font-bold border-b border-white/10">
                  Select Destination
                </div>
                <div className="max-h-60 overflow-y-auto py-1 space-y-1">
                  {sections.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-colors ${
                        activeId === item.id
                          ? "bg-gold-500/20 text-gold-300 font-bold"
                          : "text-white/80 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-gold-400 text-[10px]">
                          0{idx + 1}
                        </span>
                        <span>{item.label}</span>
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Right: Quick Back to Top */}
          <button
            onClick={scrollToTop}
            title="Scroll to top of page"
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-white/20 bg-white/5 hover:bg-gold-500/20 text-gold-300 flex items-center justify-center transition-all hover:scale-110 shrink-0"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
