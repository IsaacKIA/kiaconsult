import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Clock, Calendar, User, Share2, MessageCircle, CheckCircle, HelpCircle } from "lucide-react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { whatsappMessages, siteConfig } from "@/lib/site-config";
import {
  insightArticles,
  getArticleBySlug,
  getRelatedArticles,
  type InsightArticle,
} from "@/lib/insights-data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightArticles.map((art) => ({
    slug: art.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const articleUrl = `${siteConfig.url}/insights/${article.slug}`;
  const ogImage = `${siteConfig.url}${article.heroImage}`;

  return {
    title: `${article.title} — KIA Insights`,
    description: article.excerpt,
    keywords: article.tags,
    authors: [{ name: article.author.name, url: articleUrl }],
    alternates: {
      canonical: articleUrl,
    },
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      url: articleUrl,
      siteName: siteConfig.name,
      publishedTime: article.publishedAt,
      authors: [article.author.name],
      tags: article.tags,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: [ogImage],
    },
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const related = getRelatedArticles(slug);
  const waArticleMessage = whatsappMessages.article(article.title);

  const articleUrl = `${siteConfig.url}/insights/${article.slug}`;

  // Article JSON-LD for rich results
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${articleUrl}#article`,
    headline: article.title,
    description: article.excerpt,
    url: articleUrl,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/about#isaac-agya-koomson`,
      name: article.author.name,
      jobTitle: article.author.role,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/kia-logo.jpg`,
      },
    },
    image: {
      "@type": "ImageObject",
      url: `${siteConfig.url}${article.heroImage}`,
      caption: article.heroCaption ?? article.title,
    },
    articleSection: article.category,
    keywords: article.tags.join(", "),
    about: {
      "@type": "Thing",
      name: article.category,
    },
    isPartOf: {
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
    },
  };

  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Insights",
        item: `${siteConfig.url}/insights`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: articleUrl,
      },
    ],
  };

  const faqSchema =
    article.content.faqs && article.content.faqs.length > 0
      ? {
          "@type": "FAQPage",
          mainEntity: article.content.faqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.answer,
            },
          })),
        }
      : null;

  const jsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [articleSchema, breadcrumbSchema, ...(faqSchema ? [faqSchema] : [])],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdGraph) }}
      />
      <article className="py-16 md:py-24">
        <div className="container-kia max-w-4xl">
          {/* Back link */}
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-ink/60 hover:text-gold-deep transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to All Insights
          </Link>

          {/* Article Header Metadata */}
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-gold/15 px-3 py-1 font-semibold uppercase tracking-wider text-gold-deep">
                {article.category}
              </span>
              <span className="text-ink/40">•</span>
              <span className="flex items-center gap-1.5 text-ink/60">
                <Calendar className="h-3.5 w-3.5 text-gold-deep" />
                {article.publishedAt}
              </span>
              <span className="text-ink/40">•</span>
              <span className="flex items-center gap-1.5 text-ink/60">
                <Clock className="h-3.5 w-3.5 text-gold-deep" />
                {article.readingTime}
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight text-ink">
              {article.title}
            </h1>

            <p className="text-lg sm:text-xl leading-relaxed text-ink/70 font-display italic">
              {article.excerpt}
            </p>

            {/* Author Byline */}
            <div className="flex items-center justify-between border-y border-line py-4">
              <div className="flex items-center gap-3">
                {article.author.avatar ? (
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-line bg-mist">
                    <Image
                      src={article.author.avatar}
                      alt={article.author.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="h-12 w-12 rounded-full bg-mist flex items-center justify-center border border-line text-gold-deep font-bold">
                    KIA
                  </div>
                )}
                <div>
                  <p className="text-sm font-semibold text-ink">{article.author.name}</p>
                  <p className="text-xs text-ink/60">{article.author.role}</p>
                </div>
              </div>

              {/* Quick WhatsApp trigger referencing article */}
              <div className="hidden sm:block">
                <WhatsAppCTA message={waArticleMessage} size="sm">
                  Discuss on WhatsApp
                </WhatsAppCTA>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="my-10 space-y-2">
            <div className="p-[2px] rounded-2xl bg-gradient-to-br from-gold-400/50 via-gold-500/20 to-gold-600/50 shadow-2xl">
              <div className="relative aspect-16/9 overflow-hidden rounded-2xl border border-gold-500/20 bg-mist">
                <Image
                  src={article.heroImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            {article.heroCaption && (
              <p className="text-xs text-center text-ink/50 italic pt-1">
                {article.heroCaption}
              </p>
            )}
          </div>

          {/* Body Content */}
          <div className="space-y-8 text-base sm:text-lg leading-relaxed text-ink/80">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:mr-2.5 first-letter:float-left first-letter:text-gold-deep">
              {article.content.intro}
            </p>

            {article.content.sections.map((section) => (
              <div key={section.heading} className="space-y-4 pt-6">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  {section.heading}
                </h2>
                {section.paragraphs.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}

                {section.pullQuote && (
                  <figure className="my-8 quote-premium py-5 px-7 rounded-2xl">
                    <blockquote className="font-display text-xl sm:text-2xl font-semibold italic text-white leading-relaxed">
                      &ldquo;{section.pullQuote}&rdquo;
                    </blockquote>
                  </figure>
                )}
              </div>
            ))}

            {/* Strategic Takeaways Box */}
            <div className="my-10 rounded-2xl border border-gold-500/35 bg-gold-500/10 p-8 space-y-4 shadow-md">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep block">
                Executive Strategic Takeaways
              </span>
              <ul className="space-y-3 text-sm sm:text-base text-ink/90 font-medium">
                {article.content.takeaways.map((takeaway, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-gold-deep shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Frequently Asked Questions / Google People Also Ask Box */}
            {article.content.faqs && article.content.faqs.length > 0 && (
              <div className="my-12 space-y-6 pt-4 border-t border-line/60">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-gold/15 text-gold-deep">
                    <HelpCircle className="h-6 w-6" />
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep block">
                      Frequently Asked Questions
                    </span>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                      People Also Ask
                    </h2>
                  </div>
                </div>

                <div className="space-y-4">
                  {article.content.faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-line/80 bg-paper/60 p-6 sm:p-7 space-y-2.5 transition-all hover:border-gold-500/40 shadow-sm"
                    >
                      <h3 className="font-display text-base sm:text-lg font-bold text-ink flex items-start gap-3">
                        <span className="text-gold-deep font-mono text-sm shrink-0">
                          Q{i + 1}.
                        </span>
                        <span>{faq.question}</span>
                      </h3>
                      <p className="text-sm sm:text-base text-ink/80 leading-relaxed pl-7">
                        {faq.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* In-Article Contextual Conversion Box (Per Directive §26) */}
            <div className="my-12 rounded-2xl border border-gold-500/35 gold-aurora-bg p-8 md:p-10 text-paper space-y-4 relative overflow-hidden shadow-2xl">
              <div className="pointer-events-none absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,_rgba(255,215,0,0.18),_transparent_70%)] rounded-full blur-2xl" />
              <div className="relative z-10 flex items-center gap-3 text-gold-300">
                <MessageCircle className="h-6 w-6 text-gold-400" />
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-300">
                  Direct Strategic Engagement
                </span>
              </div>
              <h3 className="relative z-10 font-display text-2xl sm:text-3xl font-bold text-white leading-snug">
                Have a question or looking to implement this strategy?
              </h3>
              <p className="relative z-10 text-sm sm:text-base text-white/85 leading-relaxed max-w-xl">
                Our partners and sector specialists are available for direct discussion on WhatsApp. Every conversation is tailored to your business or institutional context.
              </p>
              <div className="relative z-10 pt-2">
                <WhatsAppCTA message={waArticleMessage} size="md" className="btn-magnetic pulse-gold-action">
                  Discuss This Topic With KIA on WhatsApp
                </WhatsAppCTA>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-6 border-t border-line">
              <span className="text-xs font-semibold uppercase tracking-wider text-ink/50 mr-2 font-mono">
                Topics:
              </span>
              {article.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gold-500/25 bg-gold-500/10 px-3 py-1 text-xs text-gold-deep font-bold"
                >
                  #{t}
                </span>
              ))}
            </div>
          </div>

          {/* Related Articles Section */}
          {related.length > 0 && (
            <div className="mt-20 pt-12 border-t border-line space-y-8">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-gold-deep block">
                Related Analyses
              </span>
              <div className="grid gap-6 sm:grid-cols-2">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/insights/${rel.slug}`}
                    className="group rounded-2xl border border-gold-500/25 bg-paper p-6 transition-all hover:border-gold-400/80 hover:shadow-xl stat-card-glow shimmer-on-hover flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gold-deep px-2.5 py-0.5 rounded-full bg-gold-500/10 border border-gold-500/25">
                        {rel.category}
                      </span>
                      <h4 className="mt-3 font-display text-lg font-bold text-ink group-hover:text-gold-deep transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                      <p className="mt-2 text-xs text-ink/75 line-clamp-2 leading-relaxed">
                        {rel.excerpt}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-ink group-hover:text-gold-deep">
                      <span>Read insight</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
