# KIA Insights Content Management

This directory contains all long-form thought leadership and analysis articles published on **KIA Insights** (`/insights`).

Each article is a standalone Markdown (`.md`) file with YAML frontmatter. Adding or editing an article here immediately updates the website, sitemaps, search index, and metadata with zero code changes required.

---

## 🚀 How to Publish a New Insight

1. Create a new `.md` file in this directory: `content/insights/your-article-slug.md`.
2. Name the file with lowercase kebab-case (e.g., `venture-debt-ghana-smes-2026.md`).
3. Fill out the YAML frontmatter at the top of the file (see template below).
4. Write your article body in standard Markdown.
5. Commit and push to GitHub. Next.js statically builds the new page automatically!

---

## 📝 Article Template

```markdown
---
slug: your-article-slug
title: "Your Compelling Headline: Subtitle with High-Impact Keyword"
excerpt: "A concise 2-3 sentence executive summary that appears on card previews and meta descriptions."
category: "Capital & Investment" # Choose from allowed categories below
author:
  name: "Isaac Agya Koomson"
  role: "Chief Executive Officer, KIA–Start Up Consult Ltd"
  avatar: "/images/aetf-ai-panel-speaker.jpg"
publishedAt: "June 2026"
readingTime: "8 min read"
heroImage: "/images/advisory-consultation.jpg"
heroCaption: "A descriptive caption explaining the context or strategic significance of the visual."
tags:
  - "Primary Topic"
  - "African Enterprise"
  - "Strategic Advisory"
featured: false # Set to true to highlight at top of /insights
relatedSlugs:
  - "complete-guide-formalizing-informal-enterprise-ghana"
  - "how-ghanaian-startups-prepare-institutional-funding-2026"
takeaways:
  - "Key takeaway point 1 for the executive strategic box."
  - "Key takeaway point 2."
  - "Key takeaway point 3."
faqs:
  - question: "Common search question matching Google People Also Ask?"
    answer: "Clear, direct, authoritative answer providing immediate value."
---

Opening introductory paragraph. The first sentence should deliver immediate gravitas. In the website reader, the first letter is automatically styled with an executive golden drop cap.

## First Strategic Section Headline

First paragraph explaining the premise, backed by data, institutional insights, or African market context.

Second paragraph detailing practical implementation.

> "A standout memorable insight or quote from the section to be rendered in the cinematic gold pullquote card."

## Second Strategic Section Headline

Additional content detailing execution, pitfalls to avoid, and strategic framework.

## Direct Engagement / Next Steps

Practical summary connecting the strategic insight to actionable advisory support.
```

---

## 🏷️ Allowed Categories

- `Policy & Economic Development`
- `Entrepreneurship`
- `AI & Technology`
- `SME Growth`
- `Capital & Investment`
- `Youth Employment`
- `Women & Enterprise`
- `Climate & Green Economy`
- `Africa Business`

---

## 💡 Best Practices for High Google Rankings (SEO)

1. **Title**: Keep under 70 characters when possible, or lead with high-volume search intent keywords.
2. **Headings**: Use `## Heading` for main sections. Headings should answer search intent (e.g., "Why Now: The Structural Inflection Point").
3. **FAQs**: Include 3–5 FAQs in the frontmatter. These automatically render as rich Schema.org `FAQPage` microdata for Google SERP snippet takeovers.
4. **Takeaways**: Provide 4–8 bullet points under `takeaways`. They render in the dedicated "Executive Strategic Takeaways" styled block.
