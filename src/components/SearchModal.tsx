"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Search, X, ArrowRight, BookOpen, Layers, Briefcase } from "lucide-react";
import { services, platforms } from "@/lib/site-config";
import { insightArticles } from "@/lib/insights-data";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");

  // Keyboard shortcut listener (Cmd/Ctrl + K and Escape)
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchedServices = services.filter(
    (s) =>
      s.title.toLowerCase().includes(q) ||
      s.problem.toLowerCase().includes(q) ||
      s.approach.some((a) => a.toLowerCase().includes(q))
  );

  const matchedPlatforms = platforms.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      p.problem.toLowerCase().includes(q)
  );

  const matchedArticles = insightArticles.filter(
    (a) =>
      a.title.toLowerCase().includes(q) ||
      a.excerpt.toLowerCase().includes(q) ||
      a.category.toLowerCase().includes(q) ||
      a.tags.some((t) => t.toLowerCase().includes(q))
  );

  const totalResults =
    matchedServices.length + matchedPlatforms.length + matchedArticles.length;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 pt-16 backdrop-blur-sm sm:pt-24"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="search-modal-title"
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-2xl border border-line bg-paper shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="relative flex items-center border-b border-line px-5 py-4">
          <Search className="h-5 w-5 text-gold-deep" aria-hidden="true" />
          <input
            type="text"
            placeholder="Search services, impact platforms, insights, or topics..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent px-3 text-base text-ink placeholder:text-ink/40 outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery("")}
              className="mr-2 text-xs font-medium uppercase tracking-wider text-ink/50 hover:text-ink"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="rounded-lg p-1 text-ink/60 hover:bg-mist hover:text-ink"
            aria-label="Close search"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 space-y-6">
          {q && totalResults === 0 && (
            <div className="py-12 text-center">
              <p className="font-display text-lg font-medium text-ink">
                No matching results found for &ldquo;{query}&rdquo;
              </p>
              <p className="mt-2 text-sm text-ink/60">
                Try searching for keywords like &ldquo;SME&rdquo;, &ldquo;Capital&rdquo;,
                &ldquo;HopeFusion&rdquo;, &ldquo;AI&rdquo;, or &ldquo;Adwuma&rdquo;.
              </p>
            </div>
          )}

          {/* Quick Suggestions when empty */}
          {!q && (
            <div className="space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                Suggested Explorations
              </span>
              <div className="grid gap-2 sm:grid-cols-2">
                <Link
                  href="/services#capital-advisory"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm font-medium text-ink transition-colors hover:bg-mist"
                >
                  <Briefcase className="h-4 w-4 text-gold-deep" />
                  Capital & Financial Advisory
                </Link>
                <Link
                  href="/platforms#hopefusion-africa"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm font-medium text-ink transition-colors hover:bg-mist"
                >
                  <Layers className="h-4 w-4 text-gold-deep" />
                  HopeFusion Africa™ Platform
                </Link>
                <Link
                  href="/services#digital-transformation"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm font-medium text-ink transition-colors hover:bg-mist"
                >
                  <Briefcase className="h-4 w-4 text-gold-deep" />
                  Digital & AI Transformation
                </Link>
                <Link
                  href="/insights"
                  onClick={onClose}
                  className="flex items-center gap-3 rounded-xl border border-line p-3 text-sm font-medium text-ink transition-colors hover:bg-mist"
                >
                  <BookOpen className="h-4 w-4 text-gold-deep" />
                  KIA Insights Publication
                </Link>
              </div>
            </div>
          )}

          {/* Matched Services */}
          {matchedServices.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                Services ({matchedServices.length})
              </span>
              <div className="mt-2 divide-y divide-line">
                {matchedServices.map((service) => (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3 transition-colors hover:text-gold-deep"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover:text-gold-deep">
                        {service.number} — {service.title}
                      </p>
                      <p className="text-xs text-ink/60 line-clamp-1">{service.problem}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/40 group-hover:text-gold-deep group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Platforms */}
          {matchedPlatforms.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                Impact Platforms ({matchedPlatforms.length})
              </span>
              <div className="mt-2 divide-y divide-line">
                {matchedPlatforms.map((platform) => (
                  <Link
                    key={platform.id}
                    href={`/platforms#${platform.id}`}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3 transition-colors hover:text-gold-deep"
                  >
                    <div>
                      <p className="text-sm font-semibold text-ink group-hover:text-gold-deep">
                        {platform.name}
                      </p>
                      <p className="text-xs text-gold-deep">{platform.tagline}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/40 group-hover:text-gold-deep group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Matched Insights */}
          {matchedArticles.length > 0 && (
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-gold-deep">
                Insights & Articles ({matchedArticles.length})
              </span>
              <div className="mt-2 divide-y divide-line">
                {matchedArticles.map((article) => (
                  <Link
                    key={article.slug}
                    href={`/insights/${article.slug}`}
                    onClick={onClose}
                    className="group flex items-center justify-between py-3 transition-colors hover:text-gold-deep"
                  >
                    <div>
                      <span className="text-[11px] uppercase tracking-wider text-gold-deep">
                        {article.category}
                      </span>
                      <p className="text-sm font-semibold text-ink group-hover:text-gold-deep">
                        {article.title}
                      </p>
                      <p className="text-xs text-ink/60 line-clamp-1">{article.excerpt}</p>
                    </div>
                    <ArrowRight className="h-4 w-4 shrink-0 text-ink/40 group-hover:text-gold-deep group-hover:translate-x-1 transition-transform" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="border-t border-line bg-mist/50 px-5 py-3 text-xs text-ink/50 flex justify-between items-center">
          <span>Press ESC or click outside to exit</span>
          <span className="hidden sm:inline">KIA–Start Up Consult Ltd</span>
        </div>
      </div>
    </div>
  );
}
