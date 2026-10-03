"use client";

import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp, ShieldCheck } from "lucide-react";

interface ImpactItem {
  value: string;
  label: string;
}

interface ImpactDashboardProps {
  heading?: string;
  timeframe?: string;
  items: ImpactItem[];
  variant?: "light" | "dark";
}

export default function ImpactDashboard({
  heading,
  timeframe,
  items,
  variant = "light",
}: ImpactDashboardProps) {
  // Determine appropriate grid columns based on item count to avoid squishing
  const gridColsClass =
    items.length <= 3
      ? "grid-cols-1 sm:grid-cols-3"
      : items.length === 4
      ? "grid-cols-2 sm:grid-cols-2 md:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6";

  const isDark = variant === "dark";

  return (
    <div className="w-full">
      {(heading || timeframe) && (
        <div className="mb-10 sm:mb-12">
          {timeframe && (
            <div className={`section-badge mb-4 inline-flex items-center gap-1.5 ${isDark ? "section-badge-gold-dark" : "section-badge-gold"}`}>
              <TrendingUp className="w-3.5 h-3.5" />
              {timeframe}
            </div>
          )}
          {heading && (
            <h2 className={`mt-3 font-display text-2xl sm:text-3xl md:text-4xl font-bold leading-tight ${isDark ? "text-white" : "text-ink"}`}>
              {heading}
            </h2>
          )}
          <div className="section-divider-gold mt-4 mb-2" />
        </div>
      )}

      <div className={`grid ${gridColsClass} gap-3 sm:gap-4 lg:gap-5`}>
        {items.map((item, i) => (
          <div
            key={item.label}
            className={`section-reveal stat-card-glow rounded-2xl p-4 sm:p-5 md:p-6 text-center relative overflow-hidden shimmer-on-hover transition-all duration-300 group ${
              isDark
                ? "border border-gold-500/30 bg-black/60 shadow-[0_0_25px_rgba(0,0,0,0.6)]"
                : "border border-gold-500/25 bg-white shadow-sm hover:shadow-md"
            }`}
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            {/* Gold top accent hairline */}
            <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />
            
            <div className="font-display text-xl sm:text-2xl lg:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#d4af37] via-[#ffd700] to-[#b38600] whitespace-nowrap counter-animate">
              <AnimatedCounter value={item.value} duration={1600} />
            </div>

            <p className={`mt-2 text-[10px] sm:text-xs leading-snug font-bold uppercase tracking-wider line-clamp-2 ${isDark ? "text-white/80" : "text-ink/80"}`}>
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

