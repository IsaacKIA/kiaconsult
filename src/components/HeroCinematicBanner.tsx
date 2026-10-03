"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Maximize2,
  X,
  Volume2,
  Calendar,
  MapPin,
  Users,
  ShieldCheck,
  TrendingUp,
  Globe2,
  Award,
} from "lucide-react";

export interface HeroSlide {
  id: string;
  image: string;
  badge: string;
  badgeType: "live" | "keynote" | "broadcast" | "summit" | "impact";
  title: string;
  event: string;
  theme: string;
  location: string;
  year: string;
  audience: string;
  statHighlight: {
    value: string;
    label: string;
  };
  accentColor: string;
  quote: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: "aetf-stage",
    image: "/images/aetf-ai-conference-stage.jpg",
    badge: "CONTINENTAL STAGE KEYNOTE",
    badgeType: "summit",
    title: "AETF.Ai Continental Summit",
    event: "Africa Education Technology & AI Conference",
    theme: "AI for Africa: Unlocking Opportunities for Innovation & Sovereign Growth",
    location: "Accra International Conference Centre",
    year: "2025",
    audience: "1,200+ Ministers, Investors & Builders",
    statHighlight: {
      value: "14 Nations",
      label: "Multilateral Delegation",
    },
    accentColor: "#38bdf8", // Cyan / AI tech glow
    quote:
      "Transforming African potential into sovereign economic value requires deep institutional architecture, not isolated pilot projects.",
  },
  {
    id: "gdiw-keynote",
    image: "/images/gdiw-keynote-podium.jpg",
    badge: "NATIONAL POLICY PODIUM",
    badgeType: "keynote",
    title: "Ghana Digital Innovation Week",
    event: "National Innovation & Digital Transformation Keynote",
    theme: "Catalysing Change: Enterprise Innovation at the Centre of Development",
    location: "Grand Arena, Accra",
    year: "2025",
    audience: "Ecosystem Leaders & Tech Pioneers",
    statHighlight: {
      value: "320+ SMEs",
      label: "Targeted for Capital Linkage",
    },
    accentColor: "#ffd700", // Imperial Gold
    quote:
      "When we formalize high-growth enterprises and syndicate cross-border capital, Africa becomes an economic powerhouse.",
  },
  {
    id: "tv-broadcast",
    image: "/images/tv-studio-interview.jpg",
    badge: "NATIONAL PRIME BROADCAST",
    badgeType: "broadcast",
    title: "Business Tech Guide Television",
    event: "National Television Strategic Broadcast",
    theme: "Demystifying Enterprise Formalization, Blended Capital & Continental Scale",
    location: "National Broadcast Studios",
    year: "2025",
    audience: "350,000+ Broadcast Viewers",
    statHighlight: {
      value: "350K+ Reach",
      label: "Pan-African Viewership",
    },
    accentColor: "#f43f5e", // Rose / Broadcast Live
    quote:
      "Bridging the disconnect between raw talent and institutional balance sheets is the defining mission of our generation.",
  },
  {
    id: "executive-panel",
    image: "/images/executive-panel-discussion.jpg",
    badge: "EXECUTIVE ROUNDTABLE",
    badgeType: "live",
    title: "High-Stakes Capital Syndication",
    event: "Executive Governance & Sovereign Development Summit",
    theme: "Deploying Blended Capital Across AfCFTA Cross-Border Trade Corridors",
    location: "Executive Dialogue Council",
    year: "2025",
    audience: "Institutional Allocators & DFIs",
    statHighlight: {
      value: "$2.5M+",
      label: "Syndicated Pipeline Focus",
    },
    accentColor: "#10b981", // Emerald Capital
    quote:
      "Capital without institutional governance dissipates; governance with syndicated capital creates enduring sovereign equity.",
  },
  {
    id: "workshop-audience",
    image: "/images/workshop-speaker-audience.jpg",
    badge: "HUMAN CAPITAL ACCELERATOR",
    badgeType: "impact",
    title: "Adwuma Enterprise Masterclass",
    event: "Pan-African Enterprise & Human Capital Acceleration",
    theme: "Scaling Next-Generation African Founders Into Bankable Global Enterprises",
    location: "Enterprise Innovation Hub",
    year: "2025",
    audience: "High-Growth Founders & Operators",
    statHighlight: {
      value: "4,500+",
      label: "Founders & Leaders Mobilized",
    },
    accentColor: "#f59e0b", // Solar Amber
    quote:
      "Empowering African founders with institutional discipline transforms grassroots passion into continental scale.",
  },
];

const PROOF_METRICS = [
  { value: "$2.5M+", label: "Capital Syndication Pipeline", note: "Active Q3 2026 Facility" },
  { value: "4,500+", label: "Founders & Leaders Trained", note: "Across 24 Nations" },
  { value: "320+", label: "Enterprises Formalized", note: "Institutional Grade" },
  { value: "12 Corridors", label: "AfCFTA Trade Linkages", note: "Cross-Border Ready" },
];

const SLIDE_DURATION_MS = 6500;

export default function HeroCinematicBanner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Touch tracking for mobile swipe
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);

  const activeSlide = HERO_SLIDES[currentIndex];

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
    setProgress(0);
  }, []);

  const handleSelectSlide = (idx: number) => {
    setCurrentIndex(idx);
    setProgress(0);
  };

  // Timer loop for smooth progress and auto-advance
  useEffect(() => {
    if (!isPlaying || lightboxOpen) return;

    const intervalTime = 50;
    const step = (intervalTime / SLIDE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          handleNext();
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, lightboxOpen, handleNext]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxOpen) {
        if (e.key === "Escape") setLightboxOpen(false);
        if (e.key === "ArrowRight") handleNext();
        if (e.key === "ArrowLeft") handlePrev();
        return;
      }
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, handleNext, handlePrev]);

  // Touch swipe handling
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const diff = touchStartXRef.current - touchEndXRef.current;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  return (
    <>
      <section
        className="relative overflow-hidden border-b border-gold-500/30 gold-aurora-bg text-paper pt-10 pb-16 md:pt-16 md:pb-24"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        aria-label="Continental Leadership & Flagship Banner"
      >
        {/* Dynamic ambient color radiance tuned to active slide */}
        <div
          className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[750px] transition-all duration-1000 blur-3xl opacity-75"
          style={{
            background: `radial-gradient(ellipse at top, ${activeSlide.accentColor}33, rgba(201,162,39,0.14) 40%, transparent 75%)`,
          }}
        />

        {/* Ambient floating flares */}
        <div className="pointer-events-none absolute -left-48 top-1/4 w-[520px] h-[520px] bg-[radial-gradient(circle,_rgba(245,158,11,0.22),_transparent_70%)] blur-3xl" />
        <div className="pointer-events-none absolute -right-48 top-1/3 w-[520px] h-[520px] bg-[radial-gradient(circle,_rgba(255,215,0,0.24),_transparent_70%)] blur-3xl" />

        {/* Architectural grid overlay */}
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          {/* ─── LIVE STATUS PILL ─── */}
          <div className="flex justify-center mb-6 animate-fade-down">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full bg-black/75 border-2 border-gold-400/60 text-gold-300 text-[11px] sm:text-xs font-mono font-bold shadow-[0_0_28px_rgba(255,215,0,0.35)] hover:shadow-[0_0_36px_rgba(255,215,0,0.6)] transition-all cursor-default">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-90"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-gold-400"></span>
              </span>
              <span className="tracking-wide">
                ACTIVE PIPELINE: 24 NATIONS ENGAGED · Q3 2026 CAPITAL WINDOW OPEN
              </span>
            </div>
          </div>

          {/* ─── MAIN HEADLINE & NARRATIVE ─── */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
            <h1 className="font-display text-3xl sm:text-5xl lg:text-[4.25rem] xl:text-[4.75rem] font-bold tracking-tight text-white leading-[1.06] animate-fade-up">
              Building the Systems Behind{" "}
              <span className="shimmer-text-vibrant block sm:inline">
                Africa&rsquo;s Next Economy.
              </span>
            </h1>

            <p className="mt-5 text-sm sm:text-lg md:text-xl text-white/92 max-w-3xl mx-auto leading-relaxed font-normal animate-fade-up delay-200">
              KIA–Start Up Consult Ltd designs, formalizes, and deploys the institutional economic
              architecture that connects skills, enterprise engines, syndicated capital, and
              continental markets.
            </p>

            {/* High-Impact CTAs */}
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 animate-fade-up delay-400">
              <a
                href="https://wa.me/233241332246?text=Hello%20KIA%E2%80%93Start%20Up%20Consult%2C%20I%20would%20like%20to%20schedule%20an%20Institutional%20Briefing%20with%20Isaac%20Agya%20Koomson."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ripple btn-magnetic pulse-gold-action inline-flex items-center justify-center gap-2.5 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#fff3a8] via-[#ffd700] to-[#c9a227] text-black font-extrabold text-xs sm:text-sm md:text-base shadow-[0_0_40px_rgba(255,215,0,0.55)] hover:shadow-[0_0_65px_rgba(255,215,0,0.9)] transition-all transform hover:scale-105 hover:-translate-y-0.5"
              >
                <Sparkles className="w-4 h-4 text-black shrink-0" />
                <span>Schedule Institutional Briefing</span>
              </a>

              <Link
                href="/services"
                className="btn-ripple btn-magnetic inline-flex items-center gap-2 rounded-full border-2 border-gold-400/60 bg-black/70 hover:bg-gold-500/20 px-6 sm:px-7 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-gold-300 hover:text-white transition-all duration-300 shadow-[0_0_24px_rgba(255,215,0,0.15)] hover:shadow-[0_0_36px_rgba(255,215,0,0.3)]"
              >
                <span>Explore Strategic Practices</span>
                <ArrowRight className="h-4 w-4 text-gold-400" />
              </Link>

              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-4 sm:px-5 py-3.5 sm:py-4 text-xs sm:text-sm font-semibold text-white/90 hover:text-white transition-all backdrop-blur-md"
                title="Inspect real conference stage photography in high definition"
              >
                <Maximize2 className="h-4 w-4 text-gold-400" />
                <span className="hidden sm:inline">Inspect Stage Photography</span>
                <span className="sm:hidden">Inspect Photo</span>
              </button>
            </div>
          </div>

          {/* ─── THE SHOWSTOPPING REAL ANIMATED HERO STAGE ─── */}
          <div className="relative max-w-6xl mx-auto animate-fade-up delay-500">
            {/* Outer golden aura frame */}
            <div className="relative rounded-2xl md:rounded-3xl p-[2px] sm:p-[3px] bg-gradient-to-b from-[#ffd700] via-[#c9a227]/40 to-[#ffd700]/70 shadow-[0_0_60px_rgba(255,215,0,0.35)] transition-all duration-700">
              {/* Light sweep gleam effect across top border */}
              <div
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl md:rounded-3xl"
                aria-hidden="true"
              >
                <div className="absolute top-0 -left-full w-full h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent animate-[lightSweep_7s_ease-in-out_infinite]" />
              </div>

              {/* Main Showcase Viewport */}
              <div
                className="relative aspect-[16/10] sm:aspect-[16/9] md:aspect-[21/10] lg:aspect-[2/1] w-full overflow-hidden rounded-[14px] sm:rounded-[22px] bg-black select-none group cursor-pointer"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onClick={() => setLightboxOpen(true)}
              >
                {/* ── REAL STAGE PHOTOS WITH BUTTERY SMOOTH CROSSFADE & KEN BURNS ── */}
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                      }`}
                      aria-hidden={!isActive}
                    >
                      <div className="relative w-full h-full overflow-hidden">
                        <Image
                          src={slide.image}
                          alt={`${slide.title} — ${slide.event}`}
                          fill
                          priority={idx === 0}
                          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
                          className={`object-cover object-center transition-transform duration-700 ${
                            isActive ? "animate-kenburns" : ""
                          }`}
                        />
                      </div>
                    </div>
                  );
                })}

                {/* ── CINEMATIC VIGNETTE & CONTRAST GRADIENTS ── */}
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-black/80 via-transparent to-black/60 hidden sm:block" />
                <div className="pointer-events-none absolute inset-0 z-20 shadow-[inset_0_0_80px_rgba(0,0,0,0.85)]" />

                {/* ── TOP OVERLAY: LIVE KEYNOTE EQUALIZER & CATEGORY BADGE ── */}
                <div className="absolute top-3 sm:top-5 inset-x-3 sm:inset-x-6 z-30 flex items-center justify-between gap-3 pointer-events-none">
                  {/* Left: Event category pill */}
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/50 text-gold-300 text-[10px] sm:text-xs font-mono font-bold tracking-wider uppercase shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    <span
                      className="w-2 h-2 rounded-full animate-ping shrink-0"
                      style={{ backgroundColor: activeSlide.accentColor }}
                    />
                    <span>{activeSlide.badge}</span>
                  </div>

                  {/* Right: Live stage audio wave & speaker tag */}
                  <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] sm:text-xs font-mono shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                    <Volume2 className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span className="font-semibold hidden xs:inline text-white/90">
                      Isaac Agya Koomson
                    </span>
                    <span className="text-white/40 hidden xs:inline">|</span>
                    {/* Animated sound wave bars */}
                    <div className="flex items-end gap-1 h-3.5">
                      <span className="w-[3px] bg-gold-400 rounded-full soundwave-bar-1" />
                      <span className="w-[3px] bg-gold-400 rounded-full soundwave-bar-2" />
                      <span className="w-[3px] bg-gold-400 rounded-full soundwave-bar-3" />
                      <span className="w-[3px] bg-gold-400 rounded-full soundwave-bar-4" />
                      <span className="w-[3px] bg-gold-400 rounded-full soundwave-bar-5" />
                    </div>
                  </div>
                </div>

                {/* ── FLOATING CORNER BADGE: AfCFTA CORRIDOR / CONTINENTAL FOOTPRINT ── */}
                <div className="hidden md:flex absolute top-16 right-6 z-30 items-center gap-2.5 px-3.5 py-2 rounded-xl bg-black/75 backdrop-blur-md border border-gold-500/40 text-white text-xs shadow-2xl">
                  <Globe2 className="w-4 h-4 text-gold-400 shrink-0 animate-spin-slow" />
                  <div>
                    <p className="text-[10px] text-gold-300 font-mono font-bold uppercase tracking-wider">
                      AfCFTA Corridor Linkage
                    </p>
                    <p className="text-xs font-semibold text-white/95">
                      Accra · Lagos · Nairobi · Kigali
                    </p>
                  </div>
                </div>

                {/* ── BOTTOM HUD PANEL: TITLE, THEME & REAL-TIME STAT ── */}
                <div className="absolute bottom-3 sm:bottom-6 inset-x-3 sm:inset-x-6 z-30 pointer-events-none">
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-4 items-end">
                    {/* Left & Middle: Event Details */}
                    <div className="md:col-span-8 space-y-1 sm:space-y-2">
                      <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono text-gold-300 font-semibold drop-shadow-md">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="w-3 h-3 text-gold-400" />
                          {activeSlide.location}
                        </span>
                        <span>•</span>
                        <span className="inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3 text-gold-400" />
                          {activeSlide.year}
                        </span>
                        <span className="hidden sm:inline">•</span>
                        <span className="hidden sm:inline-flex items-center gap-1 text-white/80">
                          <Users className="w-3 h-3 text-gold-400" />
                          {activeSlide.audience}
                        </span>
                      </div>

                      <h2 className="font-display text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]">
                        {activeSlide.title}
                      </h2>

                      <p className="text-xs sm:text-sm md:text-base text-white/90 line-clamp-2 drop-shadow-md max-w-2xl font-medium">
                        &ldquo;{activeSlide.quote}&rdquo;
                      </p>
                    </div>

                    {/* Right: Floating Verified Stat Pill */}
                    <div className="md:col-span-4 flex md:justify-end">
                      <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-black/85 backdrop-blur-md border border-gold-400/60 shadow-[0_0_30px_rgba(255,215,0,0.3)]">
                        <div className="p-2 rounded-lg bg-gold-500/20 text-gold-300 shrink-0">
                          <Award className="w-5 h-5" />
                        </div>
                        <div>
                          <div className="text-base sm:text-xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fff3a8] via-[#ffd700] to-[#f59e0b]">
                            {activeSlide.statHighlight.value}
                          </div>
                          <div className="text-[10px] sm:text-xs font-semibold text-white/80">
                            {activeSlide.statHighlight.label}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── HOVER HINT ON DESKTOP ── */}
                <div className="pointer-events-none absolute inset-0 z-25 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="px-4 py-2 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/70 text-gold-300 text-xs font-semibold shadow-2xl flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Click anywhere to inspect full-size image</span>
                  </div>
                </div>

                {/* ── ARROW NAVIGATION BUTTONS ── */}
                <div
                  className="absolute inset-y-0 inset-x-2 sm:inset-x-4 z-30 flex items-center justify-between pointer-events-none"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handlePrev();
                    }}
                    aria-label="Previous slide"
                    className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black/90 border border-gold-400/50 hover:border-gold-300 text-gold-300 hover:text-white flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleNext();
                    }}
                    aria-label="Next slide"
                    className="pointer-events-auto w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/70 hover:bg-black/90 border border-gold-400/50 hover:border-gold-300 text-gold-300 hover:text-white flex items-center justify-center backdrop-blur-md shadow-[0_0_20px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:scale-95"
                  >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                  </button>
                </div>
              </div>
            </div>

            {/* ─── INTERACTIVE SLIDE CONTROLLER & PROGRESS TRACK ─── */}
            <div className="mt-4 sm:mt-6 flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Left: Play / Pause & Slide Counter */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full border border-gold-500/40 bg-black/60 hover:bg-gold-500/20 text-gold-300 flex items-center justify-center transition-all hover:scale-105"
                  title={isPlaying ? "Pause autoplay" : "Start autoplay"}
                  aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <span className="text-xs font-mono font-bold text-gold-300/90">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(HERO_SLIDES.length).padStart(2, "0")}
                </span>
                <span className="text-xs text-white/50 hidden sm:inline">•</span>
                <span className="text-xs text-white/70 hidden sm:inline">
                  Real Keynote & Leadership Photography
                </span>
              </div>

              {/* Center / Right: Interactive Thumbnails & Progress Bars */}
              <div className="grid grid-cols-5 gap-1.5 sm:gap-2.5 w-full md:w-auto">
                {HERO_SLIDES.map((slide, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={slide.id}
                      onClick={() => handleSelectSlide(idx)}
                      className={`relative text-left p-2 sm:p-2.5 rounded-xl border transition-all duration-300 group overflow-hidden ${
                        isActive
                          ? "bg-black/90 border-gold-400 shadow-[0_0_20px_rgba(255,215,0,0.35)] scale-[1.02]"
                          : "bg-black/50 border-white/10 hover:border-gold-500/40 hover:bg-black/70 opacity-70 hover:opacity-100"
                      }`}
                      aria-label={`Jump to slide ${idx + 1}: ${slide.title}`}
                    >
                      {/* Active Progress Bar Strip */}
                      {isActive && (
                        <div
                          className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-gold-400 to-[#fff3a8] transition-all duration-100 ease-linear rounded-full"
                          style={{ width: `${progress}%` }}
                        />
                      )}

                      <div className="flex items-center gap-2">
                        {/* Mini square thumbnail */}
                        <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden shrink-0 border border-white/20">
                          <Image
                            src={slide.image}
                            alt={`${slide.title} thumbnail — Isaac Agya Koomson at ${slide.location}, ${slide.year}`}
                            fill
                            sizes="32px"
                            className="object-cover"
                          />
                        </div>

                        {/* Title text */}
                        <div className="hidden lg:block">
                          <p
                            className={`text-[11px] font-bold truncate max-w-[130px] ${
                              isActive ? "text-gold-300" : "text-white/80 group-hover:text-white"
                            }`}
                          >
                            {slide.title}
                          </p>
                          <p className="text-[9px] text-white/50 truncate max-w-[130px]">
                            {slide.year} · {slide.location.split(",")[0]}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ─── INTEGRATED PROOF METRICS BAR ─── */}
            <div className="mt-8 sm:mt-10 grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-gold-500/20 text-center">
              {PROOF_METRICS.map((stat) => (
                <div
                  key={stat.label}
                  className="gold-glass-card stat-card-glow shimmer-on-hover p-4 sm:p-5 rounded-2xl border border-gold-500/30 group"
                >
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#fff1a8] via-[#ffd700] to-[#f59e0b] group-hover:from-[#ffe566] group-hover:to-[#ffd700] transition-all duration-300 counter-animate">
                    {stat.value}
                  </span>
                  <span className="block text-xs sm:text-sm font-semibold text-white/90 mt-1 leading-snug">
                    {stat.label}
                  </span>
                  <span className="block text-[10px] sm:text-xs text-gold-300/80 mt-0.5">
                    {stat.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FULLSCREEN LIGHTBOX FOR HIGH-DEFINITION STAGE PHOTOGRAPHY ─── */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 sm:p-8 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="High Definition Stage Image Lightbox"
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxOpen(false)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white hover:text-gold-300 transition-all border border-white/20 shadow-2xl"
            aria-label="Close image viewer"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-gold-500/20 text-gold-300 hover:text-white transition-all border border-gold-400/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-black/70 hover:bg-gold-500/20 text-gold-300 hover:text-white transition-all border border-gold-400/50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Lightbox Content Container */}
          <div className="relative max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] max-h-[70vh] rounded-2xl overflow-hidden border-2 border-gold-400/60 shadow-[0_0_80px_rgba(255,215,0,0.3)]">
              <Image
                src={activeSlide.image}
                alt={activeSlide.title}
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-contain bg-black"
                priority
              />
            </div>

            {/* Lightbox caption & institutional context */}
            <div className="mt-4 sm:mt-6 w-full text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-black/60 border border-gold-500/30">
              <div>
                <span className="inline-block px-3 py-1 rounded-full bg-gold-400/20 border border-gold-400/40 text-gold-300 text-xs font-mono font-bold mb-1">
                  {activeSlide.badge} · {activeSlide.year}
                </span>
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white">
                  {activeSlide.title}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 max-w-2xl mt-0.5">
                  {activeSlide.theme} — {activeSlide.location}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-3">
                <a
                  href="/gallery"
                  className="px-5 py-2.5 rounded-full bg-gold-400 text-black font-bold text-xs sm:text-sm hover:bg-gold-300 transition-colors"
                >
                  View Full Media Archive
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
