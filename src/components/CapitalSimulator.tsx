"use client";

import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/site-config";
import {
  TrendingUp,
  Users,
  Building2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  Layers,
  Sparkles,
} from "lucide-react";

interface SectorOption {
  id: string;
  name: string;
  multiplier: number;
  jobsPerMillion: number;
  carbonFactor: string;
  recommendedPlatform: string;
  description: string;
}

const SECTORS: SectorOption[] = [
  {
    id: "agri",
    name: "Agribusiness & Processing",
    multiplier: 4.2,
    jobsPerMillion: 380,
    carbonFactor: "High Soil Regeneration",
    recommendedPlatform: "Asase Agricultural Capital & Value Chains",
    description: "Cold-chain infrastructure, grain processing hubs, and export off-taker networks.",
  },
  {
    id: "climate",
    name: "Climate Tech & Green Transition",
    multiplier: 3.8,
    jobsPerMillion: 290,
    carbonFactor: "Direct CO2 Abatement (8.4k t/yr)",
    recommendedPlatform: "Nuru Clean Energy Acceleration Facility",
    description: "Distributed solar mini-grids, clean cooling, and circular waste-to-energy assets.",
  },
  {
    id: "tech",
    name: "Youth Tech, AI & Digital Ecosystem",
    multiplier: 5.1,
    jobsPerMillion: 460,
    carbonFactor: "Low-Footprint High-Knowledge Yield",
    recommendedPlatform: "Adwuma Digital Workforce & Venture Studio",
    description: "Engineering academies, remote talent pipelines, and cross-border digital services.",
  },
  {
    id: "trade",
    name: "AfCFTA Trade & Light Manufacturing",
    multiplier: 3.6,
    jobsPerMillion: 340,
    carbonFactor: "Corridor Logistics Optimization",
    recommendedPlatform: "Nkabom Cross-Border Trade Corridor",
    description: "Regional aggregation centers, standardized packaging, and tariff-free transit pipelines.",
  },
];

const ROLES = [
  { id: "investor", label: "Institutional Investor / Sovereign Fund" },
  { id: "enterprise", label: "Growing African Enterprise / SME" },
  { id: "development", label: "Development Agency / Multilateral (e.g. UNDP, AfDB)" },
  { id: "diaspora", label: "Diaspora Capital Partner" },
];

export default function CapitalSimulator() {
  const [selectedRole, setSelectedRole] = useState(ROLES[0].id);
  const [selectedSector, setSelectedSector] = useState(SECTORS[0].id);
  const [capitalMillions, setCapitalMillions] = useState(2.5); // $2.5M default

  const currentSector = SECTORS.find((s) => s.id === selectedSector) || SECTORS[0];
  const currentRole = ROLES.find((r) => r.id === selectedRole)?.label || "Institutional Partner";

  // Calculations
  const directJobs = Math.round(capitalMillions * currentSector.jobsPerMillion);
  const indirectJobs = Math.round(directJobs * 2.8);
  const totalGdpYield = (capitalMillions * currentSector.multiplier).toFixed(1);
  const valueMultiplier = currentSector.multiplier.toFixed(1);

  const formatCapital = (val: number) => {
    if (val < 1) return `$${Math.round(val * 1000)}k`;
    return `$${val.toFixed(1)}M`;
  };

  const waMessage = `Hello KIA–Start Up Consult, I used your African Capital & Enterprise Simulator as a ${currentRole}.
- Sector: ${currentSector.name}
- Target Capital Commitment: ${formatCapital(capitalMillions)}
- Projected Total Jobs: ${(directJobs + indirectJobs).toLocaleString()}
- Recommended Platform: ${currentSector.recommendedPlatform}

I would like to schedule an Executive Briefing with Isaac Agya Koomson and the advisory team.`;

  return (
    <div className="w-full rounded-2xl bg-gradient-to-b from-[#0b0e15] to-[#07090d] border border-gold-500/30 overflow-hidden shadow-2xl backdrop-blur-xl">
      {/* Top Banner */}
      <div className="p-6 md:p-8 bg-gradient-to-r from-[#0d1017] via-[#121622] to-[#080a0e] border-b border-gold-500/20">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-500/15 border border-gold-400/40 text-gold-300 text-xs font-mono font-bold mb-3 shadow-[0_0_15px_rgba(255,215,0,0.15)]">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              INTERACTIVE AFRICAN ENTERPRISE &amp; CAPITAL SIMULATOR
            </div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
              Model Your Economic Yield &amp; Platform Architecture
            </h3>
            <p className="text-gold-100/85 text-sm mt-1 max-w-2xl leading-relaxed">
              Simulate job creation multipliers, ecosystem GDP yields, and identify the optimal
              KIA execution platform tailored to your capital scale.
            </p>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-4 py-2 rounded-xl bg-black/60 border border-gold-500/30 text-xs text-gold-200">
            <ShieldCheck className="w-4 h-4 text-gold-400" />
            <span>AfCFTA &amp; ESG Impact Grounded Model</span>
          </div>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Parameters (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          {/* 1. Select Institutional Role */}
          <div>
            <label className="block text-xs font-mono text-gold-300 uppercase tracking-wider mb-2.5 font-bold">
              1. Select Your Institutional Role
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ROLES.map((role) => (
                <button
                  key={role.id}
                  onClick={() => setSelectedRole(role.id)}
                  className={`p-3 text-left rounded-xl text-xs transition-all duration-200 ${
                    selectedRole === role.id
                      ? "bg-gradient-to-r from-[#ffe566] via-[#ffd700] to-[#c9a227] text-black font-black shadow-[0_0_24px_rgba(255,215,0,0.55)] border border-[#ffe566]"
                      : "bg-[#0d111a] text-gold-200 hover:text-gold-100 hover:bg-gold-500/15 hover:border-gold-400 border border-gold-500/25 font-semibold shadow-sm"
                  }`}
                >
                  {role.label}
                </button>
              ))}
            </div>
          </div>

          {/* 2. Select Sector */}
          <div>
            <label className="block text-xs font-mono text-gold-300 uppercase tracking-wider mb-2.5 font-bold">
              2. Target High-Growth Sector
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SECTORS.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`p-3.5 text-left rounded-xl transition-all duration-200 border group ${
                    selectedSector === sector.id
                      ? "bg-gradient-to-br from-gold-500/25 via-[#141824] to-[#0c0f17] border-2 border-gold-400 shadow-[0_0_28px_rgba(255,215,0,0.35)]"
                      : "bg-[#0d111a] border border-gold-500/20 hover:border-gold-400/80 hover:bg-gold-500/10 hover:shadow-[0_0_20px_rgba(255,215,0,0.2)]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-bold text-xs transition-colors ${
                        selectedSector === sector.id
                          ? "text-gold-100"
                          : "text-gold-200 group-hover:text-gold-100"
                      }`}
                    >
                      {sector.name}
                    </span>
                    <span
                      className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded transition-colors ${
                        selectedSector === sector.id
                          ? "text-black bg-gradient-to-r from-gold-200 to-gold shadow-[0_0_10px_rgba(255,215,0,0.4)]"
                          : "text-gold-300 bg-gold-500/15 border border-gold-500/40 group-hover:border-gold-300"
                      }`}
                    >
                      {sector.multiplier}x Multiplier
                    </span>
                  </div>
                  <p
                    className={`text-xs leading-relaxed line-clamp-2 transition-colors ${
                      selectedSector === sector.id
                        ? "text-gold-200 font-medium"
                        : "text-gold-100/80 group-hover:text-gold-100"
                    }`}
                  >
                    {sector.description}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* 3. Capital Scale Slider */}
          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="text-xs font-mono text-gold-300 uppercase tracking-wider font-bold">
                3. Capital Deployment Scale
              </label>
              <span className="text-xl font-bold font-mono text-gold-200 bg-[#07090e] px-3.5 py-1 rounded-lg border border-gold-400/50 shadow-[0_0_18px_rgba(255,215,0,0.25)]">
                {formatCapital(capitalMillions)}
              </span>
            </div>

            <input
              type="range"
              min="0.1"
              max="25"
              step="0.1"
              value={capitalMillions}
              onChange={(e) => setCapitalMillions(parseFloat(e.target.value))}
              className="w-full h-2.5 bg-black/60 rounded-lg appearance-none cursor-pointer range-slider-gold border border-gold-500/30"
            />

            {/* Scale Presets */}
            <div className="flex flex-wrap justify-between items-center gap-2 mt-3 text-xs font-mono">
              {[
                { val: 0.25, label: "$250k (Seed Hub)" },
                { val: 1.0, label: "$1.0M (SME Scaling)" },
                { val: 5.0, label: "$5.0M (Regional Corridor)" },
                { val: 20.0, label: "$20.0M+ (Sovereign Facility)" },
              ].map((preset) => (
                <button
                  key={preset.val}
                  onClick={() => setCapitalMillions(preset.val)}
                  className={`px-2.5 py-1 rounded-md text-xs font-semibold transition-all ${
                    capitalMillions === preset.val
                      ? "bg-gradient-to-r from-gold-300 to-gold text-black font-bold shadow-[0_0_12px_rgba(255,215,0,0.4)]"
                      : "bg-[#0d111a] border border-gold-500/30 text-gold-200 hover:border-gold-300 hover:text-white hover:bg-gold-500/20 hover:shadow-[0_0_12px_rgba(255,215,0,0.25)]"
                  }`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Dynamic Projections (5 Cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-[#121622] via-[#0d1017] to-[#07090c] border border-gold-400/40 relative shadow-2xl overflow-hidden">
          {/* Top glowing gold accent line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent pointer-events-none" />

          <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
            <span className="px-3 py-1 rounded-full bg-gradient-to-r from-[#ffe566] via-[#ffd700] to-[#c9a227] text-black text-[10px] font-black uppercase tracking-wider font-mono shadow-[0_0_14px_rgba(255,215,0,0.6)]">
              Live Projection
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <span className="text-xs font-mono text-gold-300 uppercase tracking-widest block mb-1 font-bold">
                Projected Total Employment Yield
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl sm:text-4xl font-display font-black text-gold-200 tracking-tight counter-animate drop-shadow-[0_0_16px_rgba(255,215,0,0.45)]">
                  {(directJobs + indirectJobs).toLocaleString()}
                </span>
                <span className="text-xs text-gold-300 font-mono font-bold">Verified Livelihoods</span>
              </div>
              <div className="flex gap-3 text-xs text-gold-300 mt-1">
                <span>
                  Direct:{" "}
                  <strong className="text-gold-100 font-bold counter-animate">
                    {directJobs.toLocaleString()}
                  </strong>
                </span>
                <span className="text-gold-500">•</span>
                <span>
                  Indirect Supply Chain:{" "}
                  <strong className="text-gold-100 font-bold counter-animate">
                    {indirectJobs.toLocaleString()}
                  </strong>
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gold-500/30">
              <div>
                <span className="text-xs font-mono text-gold-300 uppercase tracking-widest block font-bold">
                  Total GDP Multiplier
                </span>
                <span className="text-xl font-black font-mono text-gold-200 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)] counter-animate">
                  {valueMultiplier}x
                </span>
                <span className="text-xs text-gold-300/85 block mt-0.5 font-medium">
                  Est. ${totalGdpYield}M Direct Impact
                </span>
              </div>
              <div>
                <span className="text-xs font-mono text-gold-300 uppercase tracking-widest block font-bold">
                  ESG &amp; Climate Yield
                </span>
                <span className="text-xs font-bold text-gold-200 block mt-1 leading-snug">
                  {currentSector.carbonFactor}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gold-500/10 border border-gold-400/35 shimmer-on-hover stat-card-glow">
              <span className="text-xs font-mono text-gold-300 uppercase tracking-widest block mb-1 font-black">
                Recommended Strategic Vehicle
              </span>
              <p className="text-sm font-bold text-gold-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-gold-400 flex-shrink-0" />
                {currentSector.recommendedPlatform}
              </p>
              <p className="text-xs text-gold-200/80 mt-1 leading-relaxed">
                Structured under KIA–Start Up Consult&apos;s 7-Layer Economic Architecture.
              </p>
            </div>
          </div>

          {/* Direct Action Link */}
          <div className="mt-6 pt-4 border-t border-gold-500/30">
            <a
              href={buildWhatsAppLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#ffe566] via-[#ffd700] to-[#c9a227] hover:scale-[1.02] active:scale-[0.98] text-black font-black text-sm transition-all shadow-[0_0_25px_rgba(255,215,0,0.5)] btn-magnetic pulse-gold-action"
            >
              <span>Schedule Institutional Briefing with CEO</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <span className="block text-center text-xs text-gold-300/90 mt-2.5 font-mono">
              Direct encrypted channel to Isaac Agya Koomson &amp; Executive Partners
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
