"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Send, ArrowRight, Bot, CheckCircle2, RotateCcw } from "lucide-react";
import { siteConfig, buildWhatsAppLink } from "@/lib/site-config";

interface WhatsAppChatbotProps {
  isOpen: boolean;
  onClose: () => void;
}

const guidedChoices = [
  { id: "startup", label: "🚀 Start a Business", category: "Venture Creation & Business Planning" },
  { id: "sme", label: "📈 Grow My SME", category: "SME Productivity & Modernization" },
  { id: "funding", label: "💰 Explore Funding / HopeFusion", category: "Investment & Capital Readiness" },
  { id: "digital", label: "🤖 Digital & AI Transformation", category: "Enterprise Technology & AI" },
  { id: "youth", label: "👥 Youth / Adwuma Pipeline", category: "Youth Entrepreneurship Pipeline" },
  { id: "women", label: "👩‍💼 Women Enterprise (Nuru)", category: "Women-Led Enterprise Growth" },
  { id: "climate", label: "🌿 Green Business (Asase)", category: "Climate & Green Sustainable Enterprise" },
  { id: "partnership", label: "🏛️ Institutional Partnership", category: "Development Agency / Ministry Partnership" },
  { id: "direct", label: "💬 Speak Directly with an Advisor", category: "Direct Strategic Inquiry" },
];

export default function WhatsAppChatbot({ isOpen, onClose }: WhatsAppChatbotProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [organization, setOrganization] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");

  if (!isOpen) return null;

  const currentChoice = guidedChoices.find((c) => c.id === selectedChoice);

  function resetChat() {
    setSelectedChoice(null);
    setName("");
    setOrganization("");
    setLocation("");
    setDescription("");
  }

  function handleContinueWhatsApp() {
    let message = `Hello KIA–Start Up Consult, I used your website guided assistant.`;
    if (currentChoice) {
      message += ` I am inquiring about: ${currentChoice.category}.`;
    }
    if (name.trim()) message += ` My name is ${name.trim()}.`;
    if (organization.trim()) message += ` Organization/Business: ${organization.trim()}.`;
    if (location.trim()) message += ` Location: ${location.trim()}.`;
    if (description.trim()) message += ` Details: ${description.trim()}`;

    const link = buildWhatsAppLink(message, siteConfig.whatsappNumber);
    window.open(link, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end sm:p-6 bg-black/50 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="chatbot-header-title"
    >
      <div
        className="w-full sm:max-w-md max-h-[85vh] sm:rounded-2xl rounded-t-2xl border border-line bg-paper shadow-2xl flex flex-col overflow-hidden transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header with Master Logo */}
        <div className="bg-ink p-4 text-paper flex items-center justify-between border-b border-line-dark">
          <div className="flex items-center gap-3">
            <div className="relative h-9 w-24 overflow-hidden rounded bg-white p-1">
              <Image
                src={siteConfig.logoImage}
                alt="KIA–Start Up Consult"
                fill
                sizes="96px"
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h3 id="chatbot-header-title" className="text-xs font-semibold text-paper tracking-wide">
                KIA Onboarding Assistant
              </h3>
              <p className="text-[11px] text-paper/70 flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Automated Assistant • WhatsApp Gateway
              </p>
            </div>
          </div>
          <div className="flex items-center gap-1">
            {selectedChoice && (
              <button
                onClick={resetChat}
                title="Restart conversation"
                className="p-1.5 rounded-lg text-paper/70 hover:bg-ink-soft hover:text-gold transition-colors"
                aria-label="Restart conversation"
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-paper/70 hover:bg-ink-soft hover:text-paper transition-colors"
              aria-label="Close assistant"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Conversation Body */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-sm bg-mist/30">
          {/* Assistant Greeting */}
          <div className="flex items-start gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0 border border-gold/30">
              <Bot className="h-4 w-4 text-gold-deep" />
            </div>
            <div className="rounded-2xl rounded-tl-sm bg-paper border border-line p-3.5 shadow-xs max-w-[85%] text-ink">
              <p className="font-medium text-ink">
                Hello! Welcome to KIA–Start Up Consult.
              </p>
              <p className="mt-1 text-ink/70 text-xs leading-relaxed">
                I am an automated assistant designed to help guide you to the right strategic solution. What would you like to build, grow, or explore with KIA today?
              </p>
            </div>
          </div>

          {/* Step 1: Guided Choices */}
          {!selectedChoice ? (
            <div className="pl-9 space-y-1.5 animate-in fade-in slide-in-from-bottom-2 duration-300">
              <span className="text-[11px] uppercase font-semibold tracking-wider text-ink/40">
                Select an area of interest:
              </span>
              <div className="grid gap-1.5">
                {guidedChoices.map((choice) => (
                  <button
                    key={choice.id}
                    onClick={() => setSelectedChoice(choice.id)}
                    className="flex items-center justify-between text-left p-2.5 rounded-xl border border-line bg-paper hover:border-gold hover:bg-mist transition-all text-xs font-medium text-ink"
                  >
                    <span>{choice.label}</span>
                    <ArrowRight className="h-3.5 w-3.5 text-gold-deep shrink-0" />
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <>
              {/* User Selected Category */}
              <div className="flex justify-end">
                <div className="rounded-2xl rounded-tr-sm bg-gold/15 border border-gold/30 p-3 max-w-[85%] text-xs font-semibold text-ink">
                  {currentChoice?.label}
                </div>
              </div>

              {/* Assistant Next Response */}
              <div className="flex items-start gap-2.5">
                <div className="h-7 w-7 rounded-full bg-gold/20 flex items-center justify-center shrink-0 border border-gold/30">
                  <Bot className="h-4 w-4 text-gold-deep" />
                </div>
                <div className="rounded-2xl rounded-tl-sm bg-paper border border-line p-3.5 shadow-xs max-w-[85%] text-xs text-ink space-y-2">
                  <p>
                    Excellent choice. For <span className="font-semibold">{currentChoice?.category}</span>, our team can tailor the right engagement framework.
                  </p>
                  <p className="text-ink/60">
                    To make your WhatsApp conversation as immediate and productive as possible, you can optionally share a few quick details below:
                  </p>
                </div>
              </div>

              {/* Progressive Intake Form */}
              <div className="pl-9 space-y-2.5 bg-paper rounded-xl border border-line p-3 text-xs">
                <div>
                  <label htmlFor="cb-name" className="font-medium text-ink block mb-1">
                    Your Name <span className="text-ink/40">(optional)</span>
                  </label>
                  <input
                    id="cb-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Kwame Mensah"
                    className="w-full rounded-lg border border-line px-3 py-1.5 text-xs text-ink outline-none focus:border-gold-deep"
                  />
                </div>

                <div>
                  <label htmlFor="cb-org" className="font-medium text-ink block mb-1">
                    Business / Organization <span className="text-ink/40">(optional)</span>
                  </label>
                  <input
                    id="cb-org"
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. Agrowest Farms Ltd"
                    className="w-full rounded-lg border border-line px-3 py-1.5 text-xs text-ink outline-none focus:border-gold-deep"
                  />
                </div>

                <div>
                  <label htmlFor="cb-loc" className="font-medium text-ink block mb-1">
                    Location <span className="text-ink/40">(e.g. Accra, Kumasi, International)</span>
                  </label>
                  <input
                    id="cb-loc"
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Accra, Ghana"
                    className="w-full rounded-lg border border-line px-3 py-1.5 text-xs text-ink outline-none focus:border-gold-deep"
                  />
                </div>

                <div>
                  <label htmlFor="cb-desc" className="font-medium text-ink block mb-1">
                    Brief summary of your need <span className="text-ink/40">(optional)</span>
                  </label>
                  <textarea
                    id="cb-desc"
                    rows={2}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Tell us what you're seeking to achieve..."
                    className="w-full rounded-lg border border-line px-3 py-1.5 text-xs text-ink outline-none focus:border-gold-deep"
                  />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Bottom CTA Action Bar */}
        <div className="p-4 border-t border-line bg-paper">
          {selectedChoice ? (
            <button
              onClick={handleContinueWhatsApp}
              className="w-full flex items-center justify-center gap-2 rounded-xl bg-ink px-4 py-3 text-sm font-semibold text-paper transition-all hover:bg-gold hover:text-ink shadow-md"
            >
              <span>Continue on WhatsApp</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <p className="text-[11px] text-center text-ink/50">
              Select any option above to begin your customized WhatsApp intake.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
