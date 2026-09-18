"use client";

import { useState } from "react";
import { economicArchitectureLayers, buildWhatsAppLink } from "@/lib/site-config";
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers } from "lucide-react";

interface LayerMeta {
  deliverables: string[];
  metric: string;
  metricLabel: string;
  associatedPlatform: string;
}

const LAYER_DETAILS: Record<string, LayerMeta> = {
  policy: {
    deliverables: [
      "National Agenda 2063 program translation & localization",
      "SME regulatory compliance & tax formalization roadmaps",
      "AfCFTA cross-border trade readiness frameworks",
    ],
    metric: "100%",
    metricLabel: "Policy Alignment with Continental AU Targets",
    associatedPlatform: "Institutional Advisory & Multilateral Vehicles",
  },
  skills: {
    deliverables: [
      "Industry-verified vocational & digital competencies",
      "Executive mentorship & enterprise leadership acceleration",
      "Youth & female entrepreneur technical capacity building",
    ],
    metric: "4,500+",
    metricLabel: "Entrepreneurs & Leaders Trained",
    associatedPlatform: "Adwuma Enterprise Pipeline™",
  },
  enterprise: {
    deliverables: [
      "Bankable financial modeling & corporate governance structures",
      "Statutory registration, audit & investor-ready data rooms",
      "Operational standard operating procedures (SOPs)",
    ],
    metric: "320+",
    metricLabel: "Structured & Formalized Enterprises",
    associatedPlatform: "Adwuma Venture Incubation",
  },
  capital: {
    deliverables: [
      "De-risked SME underwriting & blended finance structures",
      "Direct syndication with angels, DFIs & commercial credit",
      "Micro-equity & performance-linked growth instruments",
    ],
    metric: "$2.5M+",
    metricLabel: "Catalyzed Capital for African SMEs",
    associatedPlatform: "HopeFusion Capital Platform",
  },
  technology: {
    deliverables: [
      "ERP, digital inventory & cross-border payment integration",
      "Pragmatic applied AI workflows for operational efficiency",
      "E-commerce & supply chain transparency portals",
    ],
    metric: "3.4x",
    metricLabel: "Average Productivity Multiplier",
    associatedPlatform: "Nuru Digital & Clean Technology Facility",
  },
  markets: {
    deliverables: [
      "AfCFTA corridor logistics & customs tariff clearing",
      "Corporate procurement supplier integration pipelines",
      "Standardized regional aggregation & cold-chain distribution",
    ],
    metric: "12 Corridors",
    metricLabel: "Active Pan-African Trade Routes",
    associatedPlatform: "Nkabom Market Linkage Network",
  },
  growth: {
    deliverables: [
      "Sustainable living-wage jobs & youth employment generation",
      "Community wealth retention & local GDP expansion",
      "Climate-resilient enterprise infrastructure & ESG compliance",
    ],
    metric: "8,500+",
    metricLabel: "Direct & Indirect Livelihoods Supported",
    associatedPlatform: "Asase Enterprise & Community Holdings",
  },
};

export default function EconomicArchitecture() {
  const [activeKey, setActiveKey] = useState<string>("policy");
  const layers = economicArchitectureLayers;
  const activeLayer = layers.find((l) => l.key === activeKey) || layers[0];
  const activeMeta = LAYER_DETAILS[activeKey] || LAYER_DETAILS.policy;

  return (
    <div className="w-full gold-glass-card rounded-2xl border border-gold-500/20 p-6 md:p-8 lg:p-10 shadow-2xl">
      {/* Header bar inside component */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/10">
        <div>
          <span className="text-[11px] font-mono tracking-widest text-gold-400 font-semibold uppercase block mb-1">
            KIA PROPRIETARY METHODOLOGY
          </span>
          <h3 className="text-xl sm:text-2xl font-display font-semibold text-white">
            The 7-Layer Systems Architecture Engine
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs text-white/60">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse" />
          <span>Interactive Systems Flow — Click any layer</span>
        </div>
      </div>

      {/* Grid: 7 Layers Pipeline (Left) & Inspector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: 7 Connected Layers (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col space-y-2 relative">
          {/* Vertical connection line */}
          <div className="absolute left-[1.65rem] top-4 bottom-4 w-0.5 bg-gradient-to-b from-gold-400 via-gold-500/40 to-gold-400/10 pointer-events-none hidden sm:block" />

          {layers.map((layer, idx) => {
            const isSelected = activeKey === layer.key;
            return (
              <button
                key={layer.key}
                onClick={() => setActiveKey(layer.key)}
                className={`relative group flex items-center gap-4 p-3.5 sm:p-4 rounded-xl text-left transition-all duration-300 w-full shimmer-on-hover ${
                  isSelected
                    ? "bg-gradient-to-r from-[#ffd700] via-[#e5a910] to-[#c9a227] text-black shadow-[0_0_24px_rgba(255,215,0,0.4)] scale-[1.02] z-10 font-bold"
                    : "bg-black/60 hover:bg-gold-500/15 text-white/90 hover:text-white border border-white/10 hover:border-gold-400/80 shadow-sm"
                }`}
              >
                {/* Node indicator */}
                <div
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-bold shrink-0 transition-all ${
                    isSelected
                      ? "bg-black text-gold-300 shadow-inner scale-110"
                      : "bg-white/10 text-white/80 group-hover:bg-gold-500 group-hover:text-black"
                  }`}
                >
                  {String(idx + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={`text-sm truncate transition-colors ${
                        isSelected ? "text-black font-extrabold" : "text-white group-hover:text-gold-300 font-bold"
                      }`}
                    >
                      {layer.label}
                    </p>
                    {isSelected && (
                      <span className="text-[10px] uppercase font-mono tracking-wider text-black font-extrabold hidden sm:inline">
                        Active Layer →
                      </span>
                    )}
                  </div>
                  <p
                    className={`text-xs truncate mt-0.5 transition-colors ${
                      isSelected ? "text-black/85 font-medium" : "text-white/75 group-hover:text-gold-200"
                    }`}
                  >
                    {layer.subtitle}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right: Active Layer Inspector (7 Cols) */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#121620] via-[#0d1017] to-[#07090c] border border-gold-500/35 rounded-2xl p-6 sm:p-8 flex flex-col justify-between min-h-[460px] relative overflow-hidden shadow-2xl">
          {/* Top glowing gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent pointer-events-none" />

          {/* Subtle gold radial backdrop */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-[radial-gradient(circle,_rgba(255,215,0,0.14),_transparent_70%)] rounded-full blur-2xl pointer-events-none" />

          <div className="space-y-6 relative z-10">
            {/* Layer Tag */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="px-3.5 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold shadow-[0_0_12px_rgba(255,215,0,0.2)]">
                LAYER {layers.findIndex((l) => l.key === activeKey) + 1} OF 07: {activeLayer.label.toUpperCase()}
              </span>
              <span className="text-xs text-white/80 font-mono">
                Platform: <strong className="text-gold-300 font-bold">{activeMeta.associatedPlatform}</strong>
              </span>
            </div>

            {/* Title & Subtitle */}
            <div>
              <h4 className="text-2xl sm:text-3xl font-display font-bold text-white leading-snug">
                {activeLayer.label} — <span className="text-gold-300">{activeLayer.subtitle}</span>
              </h4>
              <p className="text-sm sm:text-base text-white/90 leading-relaxed mt-3">
                {activeLayer.description}
              </p>
            </div>

            {/* Institutional Deliverables */}
            <div className="pt-2">
              <span className="text-xs font-mono text-gold-400 uppercase tracking-wider block mb-3 font-bold">
                Operational Deliverables & Capabilities
              </span>
              <div className="space-y-2.5">
                {activeMeta.deliverables.map((item, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-white/95">
                    <CheckCircle2 className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Verified Yield Metric */}
            <div className="p-4 rounded-xl bg-gold-500/[0.08] border border-gold-500/30 flex items-center justify-between stat-card-glow shimmer-on-hover">
              <div>
                <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest block font-bold">
                  Measured Continental Yield
                </span>
                <span className="text-xs text-white/95 font-semibold">{activeMeta.metricLabel}</span>
              </div>
              <span className="text-2xl sm:text-3xl font-extrabold font-mono text-gold-300 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] counter-animate">
                {activeMeta.metric}
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-6 mt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 relative z-10">
            <span className="text-xs text-white/80 font-medium">
              Integrate Layer {layers.findIndex((l) => l.key === activeKey) + 1} into your enterprise or program pipeline
            </span>
            <a
              href={buildWhatsAppLink(
                `Hello Isaac & KIA Team, I would like to consult on Layer ${layers.findIndex((l) => l.key === activeKey) + 1} (${activeLayer.label}: ${activeLayer.subtitle}) for my organization.`
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] hover:scale-[1.03] active:scale-[0.98] text-black font-extrabold text-xs transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)] shrink-0 btn-magnetic pulse-gold-action"
            >
              <span>Consult on This Layer</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
