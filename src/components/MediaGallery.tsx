"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
  category: "Conference" | "Institutional" | "Mentorship" | "Media";
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/aetf-ai-conference-stage.jpg",
    alt: "Isaac Agya Koomson on stage at AETF.Ai Conference 2025",
    caption: "AETF.Ai Conference 2025 — Keynote Address on AI for Africa",
    category: "Conference",
  },
  {
    src: "/images/aetf-ai-panel-speaker.jpg",
    alt: "Speaking at AETF.Ai Panel on AI & Sustainable Development",
    caption: "AETF.Ai — AI & Sustainable Development Panel",
    category: "Conference",
  },
  {
    src: "/images/aetf-ai-panel-discussion.jpg",
    alt: "Panel discussion at AETF.Ai Conference",
    caption: "AETF.Ai — Expert Panel Discussion",
    category: "Conference",
  },
  {
    src: "/images/gdiw-keynote-podium.jpg",
    alt: "Keynote at Ghana Digital Innovation Week",
    caption: "Ghana Digital Innovation Week — Keynote Address",
    category: "Conference",
  },
  {
    src: "/images/gdiw-keynote-speaking.jpg",
    alt: "Presenting at Ghana Digital Innovation Week",
    caption: "GDIW — Innovation & Digital Transformation Presentation",
    category: "Conference",
  },
  {
    src: "/images/undp-partnership-meeting.jpg",
    alt: "Engagement at UNDP Financing for Development Summit",
    caption: "UNDP — Financing for Development Institutional Engagement",
    category: "Institutional",
  },
  {
    src: "/images/executive-panel-discussion.jpg",
    alt: "Executive roundtable and panel discussion",
    caption: "Executive Leadership Roundtable",
    category: "Conference",
  },
  {
    src: "/images/exhibition-networking.jpg",
    alt: "Exhibition networking and stakeholder engagement",
    caption: "Stakeholder Networking & Exhibition",
    category: "Institutional",
  },
  {
    src: "/images/mentorship-consulting.jpg",
    alt: "One-on-one mentorship and consulting session",
    caption: "Enterprise Advisory & Mentorship Session",
    category: "Mentorship",
  },
  {
    src: "/images/tv-studio-interview.jpg",
    alt: "Business Tech Guide TV broadcast interview",
    caption: "Business Tech Guide — Broadcast Media Feature",
    category: "Media",
  },
  {
    src: "/images/workshop-speaker-audience.jpg",
    alt: "Workshop with engaged audience",
    caption: "Enterprise Workshop — Community Engagement",
    category: "Mentorship",
  },
  {
    src: "/images/workshop-youth-engagement.jpg",
    alt: "Youth entrepreneurship workshop engagement",
    caption: "Youth Enterprise Training — Adwuma Pipeline",
    category: "Mentorship",
  },
];

type Category = "All" | GalleryImage["category"];
const categories: Category[] = ["All", "Conference", "Institutional", "Mentorship", "Media"];

export default function MediaGallery() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  const nextImage = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % filtered.length));

  return (
    <div>
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2.5 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-5 py-2 text-xs font-mono font-bold transition-all duration-300 ${
              activeCategory === cat
                ? "bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black shadow-[0_0_20px_rgba(255,215,0,0.45)] scale-105"
                : "border border-gold-500/30 bg-black/60 text-white/85 hover:border-gold-400 hover:text-white hover:bg-gold-500/15"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filtered.map((img, i) => (
          <div
            key={img.src}
            className="masonry-item"
          >
            <button
              className="group relative w-full overflow-hidden rounded-2xl border-2 border-gold-500/25 hover:border-gold-400/80 shadow-lg hover:shadow-[0_0_28px_rgba(255,215,0,0.25)] card-lift section-reveal cursor-zoom-in block"
              onClick={() => setLightboxIndex(i)}
              aria-label={`View: ${img.caption}`}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="relative w-full" style={{ paddingBottom: i % 3 === 0 ? "75%" : "66%" }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-107"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/35 to-transparent opacity-75 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-all duration-300">
                  <span className="inline-block rounded-full bg-gradient-to-r from-gold to-gold-deep px-2.5 py-0.5 text-[9px] font-extrabold uppercase tracking-wider text-black shadow mb-1.5">
                    {img.category}
                  </span>
                  <p className="text-xs font-bold text-white leading-snug line-clamp-2">
                    {img.caption}
                  </p>
                </div>
              </div>
            </button>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <div className="relative max-w-5xl w-full mx-4" onClick={(e) => e.stopPropagation()}>
            {/* Close */}
            <button
              className="absolute -top-12 right-0 text-white/70 hover:text-white z-10"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <X className="h-7 w-7" />
            </button>

            {/* Nav Prev */}
            <button
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-white hover:bg-gold hover:text-ink transition-colors"
              onClick={prevImage}
              aria-label="Previous image"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            {/* Image */}
            <div className="relative overflow-hidden rounded-xl" style={{ maxHeight: "80vh" }}>
              <Image
                src={filtered[lightboxIndex].src}
                alt={filtered[lightboxIndex].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 glass-dark">
                <span className="text-[10px] font-bold uppercase tracking-wider text-gold">
                  {filtered[lightboxIndex].category}
                </span>
                <p className="text-sm font-medium text-paper mt-0.5">
                  {filtered[lightboxIndex].caption}
                </p>
                <p className="text-xs text-paper/50 mt-1">
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </div>

            {/* Nav Next */}
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/80 text-white hover:bg-gold hover:text-ink transition-colors"
              onClick={nextImage}
              aria-label="Next image"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
