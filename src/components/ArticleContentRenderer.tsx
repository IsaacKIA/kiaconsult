import React from "react";
import Link from "next/link";
import { CheckCircle2, Scale, ChevronRight } from "lucide-react";

interface SectionProps {
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
}

/**
 * Safely parses inline markdown (links, bold, italic, code) into React elements.
 */
export function renderInlineMarkdown(text: string): React.ReactNode {
  const tokens: React.ReactNode[] = [];
  const regex = /(\[[^\]]+\]\([^)]+\)|\*\*.*?\*\*|\*[^*]+\*|`[^`]+`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("[") && token.includes("](") && token.endsWith(")")) {
      const splitIdx = token.indexOf("](");
      const label = token.slice(1, splitIdx);
      const href = token.slice(splitIdx + 2, -1);
      const isInternal = href.startsWith("/");
      if (isInternal) {
        tokens.push(
          <Link
            key={match.index}
            href={href}
            className="font-semibold text-gold-deep underline decoration-gold-500/50 underline-offset-4 hover:text-ink hover:decoration-gold-deep transition-colors"
          >
            {label}
          </Link>
        );
      } else {
        tokens.push(
          <a
            key={match.index}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-gold-deep underline decoration-gold-500/50 underline-offset-4 hover:text-ink transition-colors"
          >
            {label}
          </a>
        );
      }
    } else if (token.startsWith("**") && token.endsWith("**")) {
      tokens.push(
        <strong key={match.index} className="font-semibold text-ink">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith("*") && token.endsWith("*")) {
      tokens.push(
        <em key={match.index} className="italic text-ink/90">
          {token.slice(1, -1)}
        </em>
      );
    } else if (token.startsWith("`") && token.endsWith("`")) {
      tokens.push(
        <code
          key={match.index}
          className="px-1.5 py-0.5 rounded bg-mist text-gold-deep font-mono text-xs border border-line"
        >
          {token.slice(1, -1)}
        </code>
      );
    }
    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    tokens.push(text.slice(lastIndex));
  }

  return tokens.length > 0 ? tokens : text;
}

export default function ArticleContentRenderer({
  section,
  sectionId,
}: {
  section: SectionProps;
  sectionId?: string;
}) {
  return (
    <section
      id={sectionId}
      className="space-y-6 pt-10 border-t border-line/50 first:border-0 first:pt-2 scroll-mt-24"
    >
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
        {section.heading}
      </h2>

      <div className="space-y-5 text-base sm:text-lg leading-relaxed text-ink/85">
        {section.paragraphs.map((block, idx) => {
          const trimmed = block.trim();
          if (!trimmed || /^---+$/.test(trimmed)) return null;

          // 1. Fenced code / structure block (``` ... ```)
          if (trimmed.startsWith("```")) {
            const rawCode = trimmed
              .replace(/^```[a-zA-Z0-9_-]*\n?/, "")
              .replace(/\n?```$/, "");
            return (
              <pre
                key={idx}
                className="my-6 p-5 rounded-2xl bg-ink text-paper/90 font-mono text-xs sm:text-sm leading-relaxed overflow-x-auto border border-gold-500/30 shadow-md"
              >
                <code>{rawCode}</code>
              </pre>
            );
          }

          // 2. Inline Pull Quote (> ...)
          if (trimmed.startsWith(">")) {
            const quoteText = trimmed
              .replace(/^>\s*/, "")
              .replace(/^["“]/, "")
              .replace(/["”]$/, "")
              .trim();
            return (
              <figure key={idx} className="my-8 quote-premium py-6 px-8 rounded-2xl shadow-xl">
                <blockquote className="font-display text-xl sm:text-2xl font-semibold italic !text-white leading-relaxed">
                  &ldquo;{quoteText}&rdquo;
                </blockquote>
              </figure>
            );
          }

          // 3. Subheading block (### Heading)
          if (trimmed.startsWith("### ")) {
            const subTitle = trimmed.replace("### ", "").trim();
            const isCitation = /citation|statutory|legal reference/i.test(subTitle);
            return (
              <div
                key={idx}
                className="pt-5 pb-1 border-l-4 border-gold-500 pl-4 bg-gradient-to-r from-gold-500/[0.06] to-transparent rounded-r-xl"
              >
                {isCitation && (
                  <div className="inline-flex items-center gap-1.5 text-gold-deep text-[11px] font-mono font-bold uppercase tracking-wider mb-1">
                    <Scale className="w-3.5 h-3.5" />
                    Statutory Reference
                  </div>
                )}
                <h3 className="font-display text-lg sm:text-xl font-bold text-ink tracking-tight">
                  {renderInlineMarkdown(subTitle)}
                </h3>
              </div>
            );
          }

          const rawLines = trimmed.split("\n").filter((l) => l.trim().length > 0);
          const lines = rawLines.map((l) => l.trim());

          // 4. Checklist with decimal codes (- **1.01** or 1.01)
          const decimalItems = lines.filter((l) =>
            /^[-*]?\s*\*\*([0-9.]+)\*\*\s*(.*)$/.test(l)
          );

          if (decimalItems.length > 0 && decimalItems.length === lines.length) {
            return (
              <div key={idx} className="my-6 grid gap-3.5 sm:grid-cols-2">
                {lines.map((line, itemIdx) => {
                  const match = line.match(/^[-*]?\s*\*\*([0-9.]+)\*\*\s*(.*)$/);
                  if (!match) return null;
                  const code = match[1];
                  const rawDesc = match[2];

                  return (
                    <div
                      key={itemIdx}
                      className="group flex items-start gap-3.5 p-4 rounded-xl border border-line bg-paper/70 hover:border-gold-500/50 hover:bg-white hover:shadow-md transition-all duration-200"
                    >
                      <div className="shrink-0 flex items-center justify-center px-2.5 py-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-deep font-mono text-xs font-bold">
                        {code}
                      </div>
                      <div className="text-xs sm:text-sm text-ink/85 leading-relaxed pt-0.5">
                        {renderInlineMarkdown(rawDesc)}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          // 5. Checklist with checkmarks (- ✓ or ✓)
          const checkItems = lines.filter((l) => /^[-*]?\s*[✓✔]\s*(.*)$/.test(l));
          if (checkItems.length > 0 && checkItems.length === lines.length) {
            return (
              <div key={idx} className="my-5 grid gap-3 sm:grid-cols-2">
                {lines.map((line, itemIdx) => {
                  const text = line.replace(/^[-*]?\s*[✓✔]\s*/, "");
                  return (
                    <div
                      key={itemIdx}
                      className="flex items-start gap-3 p-4 rounded-xl border border-gold-500/25 bg-gold-500/[0.04] hover:border-gold-500/45 hover:bg-white transition-all shadow-2xs"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-normal text-ink/85 leading-relaxed">
                        {renderInlineMarkdown(text)}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          }

          // 6. Numbered list items (supports nested sub-bullets inside any step)
          if (/^[0-9]+\.\s+/.test(lines[0])) {
            const parsedSteps: {
              num: string;
              title?: string;
              body: string;
              subItems: string[];
            }[] = [];

            for (const rawLine of rawLines) {
              const t = rawLine.trim();
              const numMatch = t.match(/^([0-9]+)\.\s+(.*)$/);
              if (numMatch) {
                const num = numMatch[1];
                const content = numMatch[2];
                const boldMatch = content.match(/^\*\*(.*?)\*\*(.*)$/);
                if (boldMatch) {
                  parsedSteps.push({
                    num,
                    title: boldMatch[1].replace(/[:\-–—\s]+$/, ""),
                    body: boldMatch[2].replace(/^[:\-–—\s]+/, ""),
                    subItems: [],
                  });
                } else {
                  parsedSteps.push({
                    num,
                    body: content,
                    subItems: [],
                  });
                }
              } else if (/^[-*]\s+/.test(t) && parsedSteps.length > 0) {
                parsedSteps[parsedSteps.length - 1].subItems.push(
                  t.replace(/^[-*]\s+/, "")
                );
              }
            }

            return (
              <div key={idx} className="my-6 space-y-3.5">
                {parsedSteps.map((step, itemIdx) => (
                  <div
                    key={itemIdx}
                    className="flex items-start gap-4 p-5 rounded-2xl border border-line bg-paper/60 hover:border-gold-500/40 hover:bg-white transition-all shadow-xs"
                  >
                    <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-ink text-gold-400 border border-gold-500/30 font-mono text-xs font-bold mt-0.5">
                      {step.num}
                    </div>
                    <div className="flex-1 space-y-2">
                      {step.title ? (
                        <>
                          <h4 className="font-display text-base sm:text-lg font-bold text-ink leading-snug">
                            {step.title}
                          </h4>
                          {step.body && (
                            <p className="text-xs sm:text-sm text-ink/80 leading-relaxed">
                              {renderInlineMarkdown(step.body)}
                            </p>
                          )}
                        </>
                      ) : (
                        <p className="text-sm sm:text-base text-ink/85 leading-relaxed">
                          {renderInlineMarkdown(step.body)}
                        </p>
                      )}

                      {step.subItems.length > 0 && (
                        <ul className="mt-2.5 grid gap-2 pt-2 border-t border-line/60">
                          {step.subItems.map((sub, sIdx) => (
                            <li
                              key={sIdx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-ink/85 bg-gold-500/[0.05] border border-gold-500/20 rounded-lg px-3 py-2"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-gold-deep shrink-0 mt-0.5" />
                              <span>{renderInlineMarkdown(sub)}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            );
          }

          // 7. Standard bullet list (- or *) — upgrades "- **Label:** Value" into scannable cards
          const bulletItems = lines.filter((l) => /^[-*]\s+(.*)$/.test(l));
          if (bulletItems.length > 0 && bulletItems.length === lines.length) {
            const boldKeyItems = lines.filter((l) =>
              /^[-*]\s+\*\*([^*]+)\*\*\s*(.*)$/.test(l)
            );
            const isStructuredKeyList =
              boldKeyItems.length >= Math.ceil(lines.length * 0.7);

            if (isStructuredKeyList) {
              return (
                <div key={idx} className="my-4 space-y-2.5">
                  {lines.map((line, itemIdx) => {
                    const text = line.replace(/^[-*]\s+/, "");
                    return (
                      <div
                        key={itemIdx}
                        className="flex items-start gap-3 p-3.5 rounded-xl border border-line/80 bg-paper/60 hover:border-gold-500/35 hover:bg-white transition-all text-xs sm:text-sm text-ink/85 leading-relaxed"
                      >
                        <span className="w-2 h-2 rounded-full bg-gold-deep shrink-0 mt-1.5" />
                        <div className="flex-1">{renderInlineMarkdown(text)}</div>
                      </div>
                    );
                  })}
                </div>
              );
            }

            return (
              <ul key={idx} className="my-4 space-y-2.5 pl-1">
                {lines.map((line, itemIdx) => {
                  const text = line.replace(/^[-*]\s+/, "");
                  return (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-sm sm:text-base text-ink/85 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep shrink-0 mt-2.5" />
                      <span>{renderInlineMarkdown(text)}</span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          // 8. Standard paragraph with inline formatting
          return (
            <p key={idx} className="leading-relaxed">
              {renderInlineMarkdown(trimmed)}
            </p>
          );
        })}

        {/* Fallback Pull Quote Box if passed via section.pullQuote */}
        {section.pullQuote && (
          <figure className="my-8 quote-premium py-6 px-8 rounded-2xl shadow-xl">
            <blockquote className="font-display text-xl sm:text-2xl font-semibold italic !text-white leading-relaxed">
              &ldquo;{section.pullQuote}&rdquo;
            </blockquote>
          </figure>
        )}
      </div>
    </section>
  );
}
