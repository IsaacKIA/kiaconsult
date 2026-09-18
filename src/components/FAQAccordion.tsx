"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { faqItems, FaqItem } from "@/lib/site-config";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { whatsappMessages } from "@/lib/site-config";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "General", "Startups", "SMEs", "Capital", "Partnership"];

  const filteredFaqs =
    filter === "All" ? faqItems : faqItems.filter((item) => item.category === filter);

  function toggle(idx: number) {
    setOpenIndex(openIndex === idx ? null : idx);
  }

  return (
    <div className="w-full">
      {/* Category filter pills */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setFilter(cat);
              setOpenIndex(0);
            }}
            className={`rounded-full px-4 py-2 text-xs font-mono font-bold transition-all duration-300 ${
              filter === cat
                ? "bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black shadow-[0_0_16px_rgba(255,215,0,0.4)] scale-105"
                : "border border-gold-500/25 bg-white text-ink/80 hover:border-gold-400 hover:text-ink hover:bg-gold-500/10 shadow-xs"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion list */}
      <div className="divide-y divide-line rounded-2xl border border-gold-500/25 bg-white shadow-lg overflow-hidden">
        {filteredFaqs.map((faq, i) => {
          const isOpen = openIndex === i;
          return (
            <div
              key={faq.question}
              className={`transition-all duration-300 ${
                isOpen ? "bg-gold-500/[0.04] border-l-4 border-l-gold-500" : "hover:bg-mist/30"
              }`}
            >
              <button
                onClick={() => toggle(i)}
                className="flex w-full items-center justify-between p-6 text-left transition-colors group"
                aria-expanded={isOpen}
              >
                <span className={`font-display text-base sm:text-lg font-bold transition-colors ${
                  isOpen ? "text-gold-deep" : "text-ink group-hover:text-gold-deep"
                }`}>
                  {faq.question}
                </span>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                    isOpen
                      ? "rotate-180 bg-gold-500/25 text-gold-deep border border-gold-500/40 scale-110"
                      : "bg-mist text-ink/70 group-hover:bg-gold-500/15 group-hover:text-gold-deep"
                  }`}
                >
                  <ChevronDown className="h-4 w-4" />
                </span>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 text-sm sm:text-base leading-relaxed text-ink/85 animate-in fade-in duration-200">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Still have questions banner */}
      <div className="mt-8 rounded-2xl border border-gold-500/30 bg-gradient-to-r from-mist/90 via-white to-gold-500/10 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-md">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center shrink-0">
            <HelpCircle className="h-6 w-6 text-gold-deep" />
          </div>
          <div>
            <h4 className="text-base font-bold text-ink">Have a specific question not covered here?</h4>
            <p className="text-xs sm:text-sm text-ink/75 font-medium">Our advisory team is available on WhatsApp for direct answers.</p>
          </div>
        </div>
        <WhatsAppCTA message={whatsappMessages.general} size="sm" className="btn-magnetic">
          Ask KIA on WhatsApp
        </WhatsAppCTA>
      </div>
    </div>
  );
}
