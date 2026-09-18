"use client";

import { useEffect, useRef, useState } from "react";

interface Hub {
  id: string;
  name: string;
  country: string;
  x: number; // 0 to 100% relative coordinates
  y: number;
  pipeline: string;
  sectors: string[];
  status: "Active Hub" | "Expansion Zone" | "Capital Gateway";
}

const HUBS: Hub[] = [
  { id: "accra", name: "Accra", country: "Ghana", x: 28, y: 52, pipeline: "$28M+ Active", sectors: ["Agri-Processing", "Green Energy", "AfCFTA Logistics"], status: "Capital Gateway" },
  { id: "lagos", name: "Lagos", country: "Nigeria", x: 38, y: 53, pipeline: "$45M+ Pipeline", sectors: ["Fintech", "Manufacturing", "Tech Hubs"], status: "Active Hub" },
  { id: "nairobi", name: "Nairobi", country: "Kenya", x: 74, y: 55, pipeline: "$35M+ Ecosystem", sectors: ["Climate Tech", "Agritech", "Venture Building"], status: "Active Hub" },
  { id: "kigali", name: "Kigali", country: "Rwanda", x: 67, y: 60, pipeline: "$18M+ Facility", sectors: ["Policy Innovation", "Digital Infrastructure"], status: "Active Hub" },
  { id: "joburg", name: "Johannesburg", country: "South Africa", x: 63, y: 84, pipeline: "$60M+ Institutional", sectors: ["Sovereign Wealth", "Industrial Capital"], status: "Capital Gateway" },
  { id: "cairo", name: "Cairo", country: "Egypt", x: 64, y: 22, pipeline: "$22M+ Corridors", sectors: ["North-South Trade", "Clean Energy"], status: "Expansion Zone" },
  { id: "dakar", name: "Dakar", country: "Senegal", x: 14, y: 44, pipeline: "$15M+ Cross-Border", sectors: ["Maritime Trade", "Youth Enterprise"], status: "Active Hub" },
  { id: "addis", name: "Addis Ababa", country: "Ethiopia", x: 77, y: 44, pipeline: "$20M+ Strategic", sectors: ["Industrial Parks", "Aviation Logistics"], status: "Expansion Zone" },
  { id: "abidjan", name: "Abidjan", country: "Côte d'Ivoire", x: 24, y: 54, pipeline: "$19M+ Value Chains", sectors: ["Cocoa Processing", "Agri-Finance"], status: "Active Hub" },
];

const CONNECTIONS: [string, string][] = [
  ["accra", "lagos"],
  ["accra", "abidjan"],
  ["abidjan", "dakar"],
  ["lagos", "nairobi"],
  ["nairobi", "kigali"],
  ["kigali", "joburg"],
  ["nairobi", "addis"],
  ["addis", "cairo"],
  ["accra", "kigali"],
  ["lagos", "joburg"],
];

export default function AfricanNetworkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeHub, setActiveHub] = useState<Hub | null>(HUBS[0]);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = 800;
    let height = 500;

    const setupCanvas = () => {
      if (!canvas.parentElement) return;
      const rect = canvas.parentElement.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    setupCanvas();
    window.addEventListener("resize", setupCanvas);

    // Particle flow data
    const particles: Array<{
      from: Hub;
      to: Hub;
      progress: number;
      speed: number;
      size: number;
    }> = [];

    CONNECTIONS.forEach(([fromId, toId]) => {
      const from = HUBS.find((h) => h.id === fromId);
      const to = HUBS.find((h) => h.id === toId);
      if (from && to) {
        particles.push({
          from,
          to,
          progress: Math.random(),
          speed: 0.003 + Math.random() * 0.004,
          size: 2.2 + Math.random() * 2,
        });
        particles.push({
          from: to,
          to: from,
          progress: Math.random(),
          speed: 0.002 + Math.random() * 0.003,
          size: 1.8 + Math.random() * 1.8,
        });
      }
    });

    let pulseAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      pulseAngle += 0.035;

      // Draw faint geometric grid
      ctx.strokeStyle = "rgba(255, 215, 0, 0.04)";
      ctx.lineWidth = 1;
      const gridSize = 45;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw trade and capital connections
      CONNECTIONS.forEach(([fromId, toId]) => {
        const from = HUBS.find((h) => h.id === fromId);
        const to = HUBS.find((h) => h.id === toId);
        if (!from || !to) return;

        const x1 = (from.x / 100) * width;
        const y1 = (from.y / 100) * height;
        const x2 = (to.x / 100) * width;
        const y2 = (to.y / 100) * height;

        const isSelected =
          activeHub && (activeHub.id === from.id || activeHub.id === to.id);

        const grad = ctx.createLinearGradient(x1, y1, x2, y2);
        if (isSelected) {
          grad.addColorStop(0, "rgba(255, 215, 0, 0.7)");
          grad.addColorStop(0.5, "rgba(255, 240, 150, 0.95)");
          grad.addColorStop(1, "rgba(255, 215, 0, 0.7)");
          ctx.lineWidth = 2.5;
        } else {
          grad.addColorStop(0, "rgba(255, 215, 0, 0.12)");
          grad.addColorStop(0.5, "rgba(201, 162, 39, 0.28)");
          grad.addColorStop(1, "rgba(255, 215, 0, 0.12)");
          ctx.lineWidth = 1.2;
        }

        ctx.strokeStyle = grad;
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
      });

      // Animate flowing capital/trade light pulses
      particles.forEach((p) => {
        p.progress += p.speed;
        if (p.progress > 1) p.progress = 0;

        const x1 = (p.from.x / 100) * width;
        const y1 = (p.from.y / 100) * height;
        const x2 = (p.to.x / 100) * width;
        const y2 = (p.to.y / 100) * height;

        const currentX = x1 + (x2 - x1) * p.progress;
        const currentY = y1 + (y2 - y1) * p.progress;

        ctx.fillStyle = "rgba(255, 235, 120, 0.95)";
        ctx.shadowColor = "#ffd700";
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(currentX, currentY, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw hubs
      HUBS.forEach((hub) => {
        const x = (hub.x / 100) * width;
        const y = (hub.y / 100) * height;
        const isSelected = activeHub?.id === hub.id;

        // Concentric pulse waves
        const pulseSize = 14 + Math.sin(pulseAngle + hub.x) * 5;
        ctx.strokeStyle = isSelected
          ? "rgba(255, 215, 0, 0.85)"
          : "rgba(212, 175, 55, 0.3)";
        ctx.lineWidth = isSelected ? 2.5 : 1.2;
        ctx.beginPath();
        ctx.arc(x, y, pulseSize, 0, Math.PI * 2);
        ctx.stroke();

        if (isSelected) {
          // Extra outer glowing halo for active node
          ctx.strokeStyle = "rgba(255, 215, 0, 0.35)";
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(x, y, pulseSize + 8, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Node center
        ctx.fillStyle = isSelected ? "#fff2a1" : "#d4af37";
        ctx.shadowColor = "#ffd700";
        ctx.shadowBlur = isSelected ? 18 : 8;
        ctx.beginPath();
        ctx.arc(x, y, isSelected ? 7 : 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0;

        // City label with high-contrast text rendering
        ctx.font = isSelected
          ? "700 12px Inter, sans-serif"
          : "600 11px Inter, sans-serif";
        ctx.fillStyle = isSelected ? "#ffffff" : "rgba(255, 255, 255, 0.88)";
        ctx.textAlign = "center";
        ctx.fillText(hub.name, x, y + 22);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", setupCanvas);
    };
  }, [activeHub]);

  return (
    <div className="relative w-full h-[480px] lg:h-[580px] rounded-2xl overflow-hidden gold-glass-card border border-gold-500/20">
      {/* Top Header Bar */}
      <div className="absolute top-0 inset-x-0 z-20 px-4 py-3 bg-gradient-to-b from-black/80 to-transparent flex items-center justify-between border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
          </span>
          <span className="text-[11px] font-mono tracking-widest text-gold-400 font-semibold uppercase">
            LIVE CONTINENTAL CAPITAL & ENTERPRISE MESH
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-3 text-xs text-white/60">
          <span className="text-white/40">● 9 Regional Hubs</span>
          <span className="text-white/40">● 24 Bilateral Corridors</span>
          <span className="text-gold-400/90 font-mono font-medium">$262M+ Ecosystem Flow</span>
        </div>
      </div>

      {/* Canvas rendering */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-crosshair"
        onClick={(e) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const clickX = ((e.clientX - rect.left) / rect.width) * 100;
          const clickY = ((e.clientY - rect.top) / rect.height) * 100;

          // Find closest hub
          let closest: Hub | null = null;
          let minDist = 999;
          HUBS.forEach((hub) => {
            const dist = Math.hypot(hub.x - clickX, hub.y - clickY);
            if (dist < minDist) {
              minDist = dist;
              closest = hub;
            }
          });
          if (closest && minDist < 12) {
            setActiveHub(closest);
          }
        }}
      />

      {/* Hub Quick-Select Strip on Bottom */}
      <div className="absolute bottom-0 inset-x-0 z-20 p-3 sm:p-4 bg-gradient-to-t from-black via-black/90 to-transparent border-t border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 scrollbar-none">
          {HUBS.map((h) => (
            <button
              key={h.id}
              onClick={() => setActiveHub(h)}
              className={`px-2.5 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all ${
                activeHub?.id === h.id
                  ? "bg-gold-500 text-ink font-bold shadow-[0_0_12px_rgba(255,215,0,0.5)] scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>

        {/* Selected Hub Quick Stats Card */}
        {activeHub && (
          <div className="flex items-center justify-between sm:justify-end gap-4 text-xs">
            <div>
              <span className="text-white/40 block text-[10px] uppercase font-mono tracking-wider">
                {activeHub.country} · {activeHub.status}
              </span>
              <span className="text-gold-400 font-semibold font-mono">{activeHub.pipeline}</span>
            </div>
            <div className="hidden md:flex gap-1.5">
              {activeHub.sectors.map((s, i) => (
                <span
                  key={i}
                  className="px-2 py-0.5 rounded bg-white/5 text-[10px] text-white/80 border border-white/10"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
