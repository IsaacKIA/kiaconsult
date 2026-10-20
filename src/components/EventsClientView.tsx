"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  Users,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
  Layers,
  Building,
  Briefcase,
  ChevronRight,
  ExternalLink,
  MessageSquare,
  HelpCircle,
  FileCheck,
  ShieldCheck,
} from "lucide-react";
import {
  allEvents,
  corporateTrainingTracks,
  type EventItem,
  type TrainingTrack,
} from "@/lib/events-data";
import { buildWhatsAppLink, siteConfig } from "@/lib/site-config";

type FilterTab = "all" | "upcoming" | "past" | "corporate";

export default function EventsClientView() {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedTrack, setSelectedTrack] = useState<string>(corporateTrainingTracks[0].id);

  const upcomingEvents = allEvents.filter((e) => e.status === "upcoming");
  const pastEvents = allEvents.filter((e) => e.status === "past");

  const filteredEvents =
    activeTab === "upcoming"
      ? upcomingEvents
      : activeTab === "past"
      ? pastEvents
      : activeTab === "all"
      ? allEvents
      : [];

  const activeTrackObj =
    corporateTrainingTracks.find((t) => t.id === selectedTrack) || corporateTrainingTracks[0];

  return (
    <div className="space-y-16 sm:space-y-24">
      {/* ─── FILTER TABS STRIP ─── */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 p-1.5 sm:p-2 rounded-2xl bg-black/60 border border-gold-500/30 max-w-2xl mx-auto shadow-2xl backdrop-blur-md">
        {[
          { id: "all", label: "All Programs", count: allEvents.length },
          { id: "upcoming", label: "Upcoming Cohorts", count: upcomingEvents.length, highlight: true },
          { id: "corporate", label: "In-House Training Tracks", count: corporateTrainingTracks.length },
          { id: "past", label: "Past Summits & Recaps", count: pastEvents.length },
        ].map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as FilterTab)}
              className={`flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black shadow-[0_0_20px_rgba(255,215,0,0.45)] scale-105"
                  : "text-white/80 hover:text-white hover:bg-gold-500/15"
              }`}
            >
              <span>{tab.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                  isActive
                    ? "bg-black/80 text-gold-300 font-extrabold"
                    : tab.highlight
                    ? "bg-gold-500/30 text-gold-300"
                    : "bg-white/10 text-white/70"
                }`}
              >
                {tab.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* ─── SECTION 1: UPCOMING & FEATURED EVENTS ─── */}
      {(activeTab === "all" || activeTab === "upcoming") && (
        <section id="upcoming" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/20 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-gold-400 animate-ping" />
                <span>OPEN REGISTRATION WINDOW</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Upcoming Executive Masterclasses &amp; Cohorts
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm">
              All cohorts are capped to preserve high-touch execution rigor and personalized venture auditing.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((evt, idx) => (
              <div
                key={evt.id}
                className="gold-glass-card group flex flex-col rounded-3xl border border-gold-500/30 hover:border-gold-400 overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-[0_0_35px_rgba(255,215,0,0.25)]"
              >
                {/* Event Image Banner */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 400px"
                    className="object-cover transition-transform duration-700 group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/60 text-gold-300 text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse" />
                      {evt.badge}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-white/80 bg-black/70 px-2 py-1 rounded backdrop-blur-md">
                      {evt.venueType}
                    </span>
                  </div>

                  {/* Date & Location Overlay */}
                  <div className="absolute bottom-3 inset-x-4">
                    <div className="flex items-center gap-3 text-xs font-mono text-gold-300 font-semibold">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-gold-400" />
                        {evt.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Event Content Body */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
                      <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                      <span className="truncate">{evt.location}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                      {evt.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {evt.excerpt}
                    </p>

                    {/* Target Audience Pill */}
                    <div className="p-3 rounded-xl bg-gold-500/10 border border-gold-500/20">
                      <p className="text-[10px] uppercase font-mono font-bold text-gold-400 mb-1">
                        Ideal For
                      </p>
                      <p className="text-xs text-white/90 font-medium leading-relaxed">
                        {evt.audience}
                      </p>
                    </div>

                    {/* Highlights bullet points */}
                    <div className="space-y-2 pt-1">
                      <p className="text-[11px] font-mono text-white/60 uppercase font-bold tracking-wider">
                        Curriculum Highlights:
                      </p>
                      <ul className="space-y-1.5 text-xs text-white/85">
                        {evt.highlights.slice(0, 3).map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                            <span className="leading-tight">{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer & Actions */}
                  <div className="pt-4 border-t border-gold-500/20 space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-white/60">{evt.seats}</span>
                      {evt.fee && <span className="text-gold-300 font-bold">{evt.fee}</span>}
                    </div>

                    <a
                      href={buildWhatsAppLink(evt.whatsappPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] hover:scale-[1.02] active:scale-[0.98] text-black font-extrabold text-xs sm:text-sm transition-all shadow-[0_0_20px_rgba(255,215,0,0.35)]"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Reserve Seat via WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── SECTION 2: BESPOKE CORPORATE & INSTITUTIONAL TRAINING TRACKS ─── */}
      {(activeTab === "all" || activeTab === "corporate") && (
        <section id="corporate" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-3">
                <Building className="w-3.5 h-3.5 text-gold-400" />
                <span>ENTERPRISE &amp; MINISTERIAL CAPACITY BUILDING</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                In-House &amp; Institutional Training Tracks
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-white/70 max-w-sm">
              Custom curricula tailored for commercial banks, ministries, TVET colleges, and donor programs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Track Selector */}
            <div className="lg:col-span-5 space-y-3">
              {corporateTrainingTracks.map((track, i) => {
                const isSelected = track.id === selectedTrack;
                return (
                  <button
                    key={track.id}
                    onClick={() => setSelectedTrack(track.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-start gap-4 ${
                      isSelected
                        ? "gold-glass-card border-gold-400 shadow-[0_0_30px_rgba(255,215,0,0.25)] scale-[1.02]"
                        : "bg-black/50 border-white/10 hover:border-gold-500/40 hover:bg-black/70 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 font-mono font-extrabold text-sm ${
                        isSelected
                          ? "bg-gradient-to-r from-gold to-gold-deep text-black shadow"
                          : "bg-white/10 text-white/70"
                      }`}
                    >
                      0{i + 1}
                    </div>

                    <div className="flex-1">
                      <h4
                        className={`font-display text-base font-bold leading-snug ${
                          isSelected ? "text-gold-300" : "text-white"
                        }`}
                      >
                        {track.title}
                      </h4>
                      <p className="text-xs text-white/60 mt-1 line-clamp-1">{track.targetGroup}</p>
                    </div>

                    <ChevronRight
                      className={`w-5 h-5 shrink-0 transition-transform ${
                        isSelected ? "text-gold-400 translate-x-1" : "text-white/30"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Column: Active Track Curriculum Detail */}
            <div className="lg:col-span-7 gold-glass-card rounded-3xl border border-gold-500/40 p-6 sm:p-9 shadow-2xl space-y-7">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-gold-500/20">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-gold-400 font-extrabold block">
                    Curriculum Blueprint
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white mt-1">
                    {activeTrackObj.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/30 text-gold-300 text-xs font-mono font-bold">
                    {activeTrackObj.duration}
                  </span>
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-sm text-white/88 leading-relaxed font-normal">
                  {activeTrackObj.overview}
                </p>

                <div className="p-3.5 rounded-xl bg-black/60 border border-gold-500/20 text-xs text-white/80">
                  <span className="font-mono font-bold text-gold-400 uppercase mr-2">Delivery:</span>
                  <span>{activeTrackObj.deliveryMode}</span>
                  <span className="mx-2 text-white/30">•</span>
                  <span className="font-mono font-bold text-gold-400 uppercase mr-2">Target Group:</span>
                  <span>{activeTrackObj.targetGroup}</span>
                </div>
              </div>

              {/* Modules breakdown */}
              <div className="space-y-3">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gold-300 font-extrabold">
                  Core Instructional Modules
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeTrackObj.modules.map((mod, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-black/40 border border-white/10 hover:border-gold-500/40 text-xs text-white/90 leading-relaxed transition-colors flex items-start gap-2"
                    >
                      <span className="font-mono font-bold text-gold-400 shrink-0">M0{idx + 1}</span>
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Measurable outcomes */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-gold-300 font-extrabold">
                  Measurable Enterprise Outcomes
                </h4>
                <ul className="space-y-2 text-xs text-white/85">
                  {activeTrackObj.outcomes.map((out, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Commission Training CTA */}
              <div className="pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/60">
                  <span>Customizable syllabus for institutional cohorts of 10 to 500+ participants.</span>
                </div>

                <a
                  href={buildWhatsAppLink(
                    `Hello KIA Team, our organization is interested in commissioning bespoke training on: "${activeTrackObj.title}". Please send institutional pricing and scheduling options.`
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] text-black font-extrabold text-xs sm:text-sm hover:scale-105 transition-all shadow-[0_0_20px_rgba(255,215,0,0.4)]"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Request In-House Proposal</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ─── SECTION 3: PAST CONTINENTAL SUMMITS & VISUAL RECAPS ─── */}
      {(activeTab === "all" || activeTab === "past") && (
        <section id="summits" className="space-y-8 scroll-mt-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-500/15 border border-gold-500/40 text-gold-300 text-xs font-mono font-bold mb-3">
                <Award className="w-3.5 h-3.5 text-gold-400" />
                <span>CONTINENTAL RECORD &amp; DIPLOMATIC ARCHIVE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-display font-bold text-white tracking-tight">
                Summits, Policy Dialogues &amp; Delegations
              </h2>
            </div>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 hover:text-white transition-colors"
            >
              <span>Explore 17-Photo Executive Gallery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pastEvents.map((evt) => (
              <div
                key={evt.id}
                className="gold-glass-card rounded-3xl border border-gold-500/30 overflow-hidden shadow-2xl flex flex-col group hover:border-gold-400/80 transition-all duration-300"
              >
                {/* Photo showcase */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <Image
                    src={evt.image}
                    alt={evt.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent" />

                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-gold-400/50 text-gold-300 text-[10px] font-mono font-bold uppercase">
                      {evt.badge}
                    </span>
                    <span className="text-[10px] font-mono text-white/80 bg-black/60 px-2.5 py-1 rounded backdrop-blur-md">
                      {evt.date}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center gap-2 text-xs font-mono text-white/80">
                    <MapPin className="w-3.5 h-3.5 text-gold-400 shrink-0" />
                    <span>{evt.location}</span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-3">
                    <h3 className="text-xl font-display font-bold text-white group-hover:text-gold-300 transition-colors leading-snug">
                      {evt.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-normal">
                      {evt.description}
                    </p>

                    <div className="space-y-1.5 pt-2">
                      <p className="text-[11px] font-mono text-gold-400 uppercase font-bold">
                        Key Convening Highlights:
                      </p>
                      <ul className="space-y-1 text-xs text-white/80">
                        {evt.highlights.map((hl, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-gold-400 shrink-0">•</span>
                            <span>{hl}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions & Links */}
                  <div className="pt-4 border-t border-gold-500/20 flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      {evt.galleryLink && (
                        <Link
                          href={evt.galleryLink}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-gold-300 hover:text-white transition-colors"
                        >
                          <span>View Summit Photos</span>
                          <ExternalLink className="w-3 h-3" />
                        </Link>
                      )}
                      {evt.insightSlug && (
                        <Link
                          href={`/insights/${evt.insightSlug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-white/80 hover:text-gold-300 transition-colors"
                        >
                          <span>Read Strategic Insight</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>

                    <a
                      href={buildWhatsAppLink(evt.whatsappPrompt)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg bg-black/60 hover:bg-gold-500/20 text-gold-300 hover:text-white border border-gold-500/40 text-xs font-bold transition-all"
                    >
                      Enquire Collaboration
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ─── SECTION 4: BOOK ISAAC AGYA KOOMSON AS KEYNOTE SPEAKER ─── */}
      <section className="rounded-3xl gold-glass-card border border-gold-500/40 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle,_rgba(255,215,0,0.15),_transparent_70%)] pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-gold-300 font-extrabold block">
              GLOBAL FORUMS · MINISTERIAL PANELS · CONFERENCES
            </span>
            <h3 className="text-2xl sm:text-4xl font-display font-bold text-white leading-snug">
              Invite Isaac Agya Koomson as a Keynote Speaker or Executive Moderator
            </h3>
            <p className="text-sm sm:text-base text-white/85 leading-relaxed font-normal max-w-2xl">
              Isaac Agya Koomson is available for high-level institutional summits, central bank forums, and corporate conferences on AfCFTA trade architecture, African sovereign enterprise growth, fintech rails, and blended capital syndication.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <a
              href={buildWhatsAppLink(
                "Hello KIA Team, I would like to enquire about inviting Isaac Agya Koomson as a Keynote Speaker / Panelist for an upcoming conference."
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-[#ffe570] via-[#ffd700] to-[#c9a227] hover:scale-[1.03] text-black font-extrabold text-sm transition-all shadow-[0_0_24px_rgba(255,215,0,0.45)]"
            >
              <Award className="w-4 h-4" />
              <span>Book Speaking Engagement</span>
            </a>

            <Link
              href="/gallery"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-black/60 hover:bg-gold-500/20 text-gold-300 hover:text-white font-bold text-sm border-2 border-gold-500/40 transition-all"
            >
              <span>Inspect Stage Visual Archive</span>
              <ArrowRight className="w-4 h-4 text-gold-400" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
