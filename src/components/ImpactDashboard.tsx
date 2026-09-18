"use client";

import AnimatedCounter from "./AnimatedCounter";
import { TrendingUp } from "lucide-react";

interface ImpactItem {
  value: string;
  label: string;
}

interface ImpactDashboardProps {
  heading?: string;
  timeframe?: string;
  items: ImpactItem[];
}

export default function ImpactDashboard({
  heading,
  timeframe,
  items,
}: ImpactDashboardProps) {
  return (
    <div>
      {(heading || timeframe) && (
        <div className="mb-12">
          {timeframe && (
            <div className="section-badge section-badge-gold mb-4 inline-flex items-center gap-1.5">
              <TrendingUp className="w-3.5 h-3.5" />
              {timeframe}
            </div>
          )}
          {heading && (
            <h2 className="mt-3 font-display text-3xl font-bold text-ink md:text-4xl leading-tight">
              {heading}
            </h2>
          )}
          <div className="section-divider-gold mt-5" />
        </div>
      )}
      <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
        {items.map((item, i) => (
          <div
            key={item.label}
            className="section-reveal stat-card-glow rounded-2xl border border-gold-500/25 bg-white p-6 text-center shadow-md relative overflow-hidden shimmer-on-hover"
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Gold top accent */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-gold-300 via-gold-500 to-gold-300" />
            <div className="font-display text-2xl font-extrabold sm:text-3xl text-transparent bg-clip-text bg-gradient-to-br from-[#c9a227] via-[#ffd700] to-[#8f6d00] counter-animate">
              <AnimatedCounter
                value={item.value}
                duration={1600}
              />
            </div>
            <p className="mt-3 text-[11px] leading-snug text-ink/75 font-bold uppercase tracking-wider">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
