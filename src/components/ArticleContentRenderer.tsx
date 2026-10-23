import React from "react";
import { CheckCircle2, ShieldCheck, FileCheck, ArrowRight } from "lucide-react";

interface SectionProps {
  heading: string;
  paragraphs: string[];
  pullQuote?: string;
}

/**
 * Safely parses inline markdown (bold, italic, code) into React elements.
 */
export function renderInlineMarkdown(text: string): React.ReactNode {
  // Regex to split on **bold**, *italic*, `code`
  const tokens: React.ReactNode[] = [];
  const regex = /(\*\*.*?\*\*|\*.*?\*|`.*?`)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push(text.slice(lastIndex, match.index));
    }
    const token = match[0];
    if (token.startsWith("**") && token.endsWith("**")) {
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

export default function ArticleContentRenderer({ section }: { section: SectionProps }) {
  return (
    <div className="space-y-6 pt-8 border-t border-line/40 first:border-0 first:pt-2">
      <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-ink leading-tight tracking-tight">
        {section.heading}
      </h2>

      <div className="space-y-5 text-base sm:text-lg leading-relaxed text-ink/85">
        {section.paragraphs.map((block, idx) => {
          const trimmed = block.trim();
          if (!trimmed) return null;

          // 1. Subheading block (### Heading)
          if (trimmed.startsWith("### ")) {
            const subTitle = trimmed.replace("### ", "").trim();
            return (
              <div key={idx} className="pt-6 pb-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/25 text-gold-deep text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Audit Category
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink tracking-tight">
                  {subTitle}
                </h3>
              </div>
            );
          }

          const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);

          // 2. Checklist with decimal codes (- **1.01** or 1.01)
          const decimalItems = lines.filter((l) =>
            /^[-*]?\s*\*\*([0-9.]+)\*\*\s*(.*)$/.test(l)
          );

          if (decimalItems.length > 0 && decimalItems.length === lines.length) {
            return (
              <div key={idx} className="my-6 grid gap-3 sm:grid-cols-2">
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
                      <div className="shrink-0 flex items-center justify-center px-2 py-1 rounded-md bg-gold-500/15 border border-gold-500/30 text-gold-deep font-mono text-xs font-bold">
                        {code}
                      </div>
                      <div className="text-xs sm:text-sm text-ink/80 leading-relaxed pt-0.5">
                        {renderInlineMarkdown(rawDesc)}
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          // 3. Checklist with checkmarks (- ✓ or ✓)
          const checkItems = lines.filter((l) => /^[-*]?\s*[✓✔]\s*(.*)$/.test(l));
          if (checkItems.length > 0 && checkItems.length === lines.length) {
            return (
              <div key={idx} className="my-6 grid gap-2.5 sm:grid-cols-2">
                {lines.map((line, itemIdx) => {
                  const text = line.replace(/^[-*]?\s*[✓✔]\s*/, "");
                  return (
                    <div
                      key={itemIdx}
                      className="flex items-start gap-3 p-3.5 rounded-xl border border-gold-500/20 bg-gold-500/5 hover:border-gold-500/40 transition-colors"
                    >
                      <CheckCircle2 className="w-4 h-4 text-gold-deep shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-ink/85 leading-snug">
                        {renderInlineMarkdown(text)}
                      </span>
                    </div>
                  );
                })}
              </div>
            );
          }

          // 4. Numbered list items (1. **Title:** text)
          const numberedItems = lines.filter((l) => /^[0-9]+\.\s+\*\*(.*?)\*\*(.*)$/.test(l));
          if (numberedItems.length > 0 && numberedItems.length === lines.length) {
            return (
              <div key={idx} className="my-6 space-y-3">
                {lines.map((line, itemIdx) => {
                  const match = line.match(/^([0-9]+)\.\s+\*\*(.*?)\*\*(.*)$/);
                  if (!match) return null;
                  const num = match[1];
                  const title = match[2];
                  const rest = match[3];

                  return (
                    <div
                      key={itemIdx}
                      className="flex items-start gap-4 p-5 rounded-2xl border border-line bg-paper/60 hover:border-gold-500/40 hover:bg-white transition-all shadow-xs"
                    >
                      <div className="shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-ink text-white font-mono text-xs font-bold">
                        {num}
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-display text-base sm:text-lg font-bold text-ink">
                          {title}
                        </h4>
                        <p className="text-xs sm:text-sm text-ink/75 leading-relaxed">
                          {renderInlineMarkdown(rest.replace(/^[:\-–—\s]+/, ""))}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            );
          }

          // 5. Standard bullet list (- or *)
          const bulletItems = lines.filter((l) => /^[-*]\s+(.*)$/.test(l));
          if (bulletItems.length > 0 && bulletItems.length === lines.length) {
            return (
              <ul key={idx} className="my-4 space-y-2 pl-2">
                {lines.map((line, itemIdx) => {
                  const text = line.replace(/^[-*]\s+/, "");
                  return (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm sm:text-base text-ink/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-deep shrink-0 mt-2.5" />
                      <span>{renderInlineMarkdown(text)}</span>
                    </li>
                  );
                })}
              </ul>
            );
          }

          // 6. Standard paragraph with inline formatting
          return (
            <p key={idx} className="leading-relaxed">
              {renderInlineMarkdown(trimmed)}
            </p>
          );
        })}

        {/* Pull Quote Box */}
        {section.pullQuote && (
          <figure className="my-8 quote-premium py-6 px-8 rounded-2xl shadow-xl">
            <blockquote className="font-display text-xl sm:text-2xl font-semibold italic !text-white leading-relaxed">
              &ldquo;{section.pullQuote}&rdquo;
            </blockquote>
          </figure>
        )}
      </div>
    </div>
  );
}
