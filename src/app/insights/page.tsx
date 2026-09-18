"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, ArrowRight, BookOpen, Clock, Tag, Sparkles } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { whatsappMessages } from "@/lib/site-config";
import { insightArticles, insightCategories, getFeaturedArticle } from "@/lib/insights-data";

export default function InsightsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Insights");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const featured = getFeaturedArticle();

  const filteredArticles = insightArticles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All Insights" || article.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !q ||
      article.title.toLowerCase().includes(q) ||
      article.excerpt.toLowerCase().includes(q) ||
      article.tags.some((t) => t.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* ─── 1. CINEMATIC HERO ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden gold-aurora-bg text-paper pt-16 pb-20 md:pt-24 md:pb-28 border-b border-gold-500/30">
        {/* Radial glow layers */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[500px] bg-[radial-gradient(ellipse_at_top,_rgba(255,215,0,0.22),_rgba(201,162,39,0.10)_45%,_transparent_75%)]" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <div className="container-kia relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-400 text-xs font-mono font-bold mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              EDITORIAL THOUGHT LEADERSHIP
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.04] tracking-tight animate-fade-up">
              KIA{" "}
              <span className="shimmer-text-vibrant">Insights</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-xl leading-relaxed text-white/80 animate-fade-up delay-200">
              Practical thinking on economic transformation, enterprise architecture, capital access,
              digital modernization, and sustainable growth grounded in African realities.
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap items-center gap-6 animate-fade-up delay-300">
              {[
                { value: `${insightArticles.length}+`, label: "Publications" },
                { value: insightCategories.length - 1 + "", label: "Categories" },
                { value: "Weekly", label: "New Insights" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gold-400">{s.value}</span>
                  <span className="text-xs text-white/60 font-medium mt-0.5">{s.label}</span>
                </div>
              ))}
            </div>

            {/* Search bar */}
            <div className="mt-8 max-w-lg animate-fade-up delay-400">
              <div className="relative flex items-center rounded-2xl border border-gold-500/40 bg-white/8 backdrop-blur-sm px-4 py-3 shadow-[0_0_20px_rgba(255,215,0,0.1)] focus-within:border-gold-400/70 focus-within:shadow-[0_0_28px_rgba(255,215,0,0.2)] transition-all duration-300">
                <Search className="h-4 w-4 text-gold-400 shrink-0" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter insights by keyword or topic..."
                  className="w-full bg-transparent px-3 text-sm text-white placeholder:text-white/40 outline-none"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery("")}
                    className="text-xs text-white/50 hover:text-white font-medium transition-colors px-2"
                  >
                    Clear
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 2. CATEGORY PILL FILTER (sticky) ──────────────────────────────── */}
      <section className="border-b border-gold-500/20 bg-paper/98 backdrop-blur-xl py-3.5 sticky top-[64px] z-20 shadow-sm">
        <div className="container-kia flex items-center gap-2.5 overflow-x-auto no-scrollbar py-0.5">
          {insightCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-mono font-bold whitespace-nowrap transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black shadow-[0_0_16px_rgba(255,215,0,0.45)] scale-105"
                  : "border border-gold-500/25 bg-white text-ink/80 hover:border-gold-400 hover:text-ink hover:bg-gold-500/10 shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ─── 3. FEATURED COVER STORY (magazine style) ───────────────────────── */}
      {selectedCategory === "All Insights" && !searchQuery && (
        <section className="border-b border-line bg-paper py-16 md:py-20">
          <div className="container-kia">
            <div className="flex items-center gap-3 mb-8">
              <span className="section-badge section-badge-gold">Featured Analysis</span>
              <div className="h-px flex-1 bg-gradient-to-r from-gold/30 to-transparent" />
            </div>

            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-2xl">
              <div className="group grid gap-0 lg:grid-cols-12 rounded-2xl bg-white border border-gold-500/20 overflow-hidden transition-all duration-500">
                {/* Text side */}
                <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-center">
                  <div className="flex items-center gap-3 text-xs text-ink/55">
                    <span className="rounded-full bg-gold-500/15 px-3 py-1 font-bold uppercase tracking-wider text-gold-deep border border-gold-500/30 font-mono text-[10px]">
                      {featured.category}
                    </span>
                    <span>{featured.publishedAt}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 font-mono">
                      <Clock className="h-3 w-3 text-gold-deep" />
                      {featured.readingTime}
                    </span>
                  </div>

                  <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-ink group-hover:text-gold-deep transition-colors duration-300 leading-tight">
                    <Link href={`/insights/${featured.slug}`}>{featured.title}</Link>
                  </h2>

                  <p className="text-base leading-relaxed text-ink/80">
                    {featured.excerpt}
                  </p>

                  <div className="flex items-center justify-between pt-5 border-t border-line">
                    <div className="flex items-center gap-3">
                      {featured.author.avatar && (
                        <div className="relative h-10 w-10 rounded-full overflow-hidden border-2 border-gold-400/50 shadow-sm">
                          <Image
                            src={featured.author.avatar}
                            alt={featured.author.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <p className="text-xs font-bold text-ink">{featured.author.name}</p>
                        <p className="text-[11px] text-ink/55">{featured.author.role}</p>
                      </div>
                    </div>
                    <Link
                      href={`/insights/${featured.slug}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-ink to-ink-soft px-5 py-2.5 text-xs font-bold text-paper transition-all duration-300 hover:bg-gold-deep hover:text-ink group/btn btn-magnetic shadow-md"
                    >
                      Read Full Story
                      <ArrowRight className="h-3.5 w-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Image side */}
                <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-0 overflow-hidden">
                  <Image
                    src={featured.heroImage}
                    alt={featured.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent lg:bg-gradient-to-l pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── 4. ARTICLES GRID ────────────────────────────────────────────────── */}
      <section className="container-kia py-16 md:py-20">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-2xl font-bold text-ink">
            {selectedCategory === "All Insights"
              ? "All Publications"
              : `Category: ${selectedCategory}`}
          </h2>
          <span className="text-xs text-ink/45 bg-mist px-3 py-1.5 rounded-full font-medium">
            {filteredArticles.length} {filteredArticles.length === 1 ? "article" : "articles"}
          </span>
        </div>

        {filteredArticles.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-gold/30 bg-gold/[0.03] p-16 text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-6 w-6 text-gold-deep" />
            </div>
            <h3 className="font-display text-lg font-bold text-ink">No articles match your search</h3>
            <p className="text-xs text-ink/55 mt-2 max-w-sm mx-auto leading-relaxed">
              Try switching categories or clearing your search term to see more insights.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("All Insights");
                setSearchQuery("");
              }}
              className="mt-5 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-paper hover:bg-gold-deep hover:text-ink transition-all duration-300"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredArticles.map((article, i) => (
              <article
                key={article.slug}
                className="insight-card-premium stat-card-glow group flex flex-col justify-between overflow-hidden rounded-2xl"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <div>
                  <div className="card-image-wrapper relative aspect-16/10 overflow-hidden bg-mist">
                    <Image
                      src={article.heroImage}
                      alt={article.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover"
                    />
                    {/* Category badge overlay */}
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider text-gold-400 border border-gold-500/30">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between text-xs text-ink/75 mb-3 font-mono font-semibold">
                      <span>{article.publishedAt}</span>
                      <span className="flex items-center gap-1 text-gold-deep font-bold">
                        <Clock className="h-3.5 w-3.5" />
                        {article.readingTime}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-bold text-ink group-hover:text-gold-deep transition-colors duration-300 line-clamp-2 leading-snug">
                      <Link href={`/insights/${article.slug}`}>{article.title}</Link>
                    </h3>

                    <p className="mt-2.5 text-xs leading-relaxed text-ink/85 font-normal line-clamp-3">
                      {article.excerpt}
                    </p>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {article.tags.slice(0, 2).map((t) => (
                        <span
                          key={t}
                          className="inline-flex items-center gap-1 rounded-full bg-gold-500/10 border border-gold-500/25 px-2.5 py-0.5 text-[10px] text-gold-deep font-bold"
                        >
                          <Tag className="w-2.5 h-2.5" />
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-line/60 flex items-center justify-between">
                  <span className="text-xs text-ink/75 font-semibold">{article.author.name}</span>
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group/link text-xs font-bold text-gold-deep hover:text-gold-600 inline-flex items-center gap-1 transition-all"
                  >
                    Read article
                    <ArrowRight className="h-3.5 w-3.5 group-hover/link:translate-x-0.5 transition-transform" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* ─── 5. EDITORIAL CONTRIBUTION CTA ─────────────────────────────────── */}
      <section className="border-t border-line bg-gradient-to-b from-[#f8f8f5] to-white py-16 md:py-20">
        <div className="container-kia">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-14 h-14 rounded-2xl bg-gold/12 border border-gold/25 flex items-center justify-center mx-auto mb-5">
              <Sparkles className="w-6 h-6 text-gold-deep" />
            </div>
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-ink leading-snug">
              Discuss Any Topic Directly With KIA Advisory
            </h3>
            <p className="text-sm sm:text-base text-ink/65 mt-3 max-w-xl mx-auto leading-relaxed">
              Have questions about one of our analyses or want to explore how it applies to your
              firm? Our advisory team is one message away.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <WhatsAppCTA message={whatsappMessages.general} size="sm" className="btn-magnetic">
                Start a Conversation on WhatsApp
              </WhatsAppCTA>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-paper px-5 py-2.5 text-xs font-bold text-ink hover:border-gold hover:text-gold-deep hover:bg-gold-500/10 transition-all duration-300 btn-magnetic shadow-xs"
              >
                Submit a Formal Enquiry
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
