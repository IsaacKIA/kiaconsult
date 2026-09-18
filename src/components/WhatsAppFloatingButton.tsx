"use client";

import { useState } from "react";
import { MessageCircle, Sparkles } from "lucide-react";
import { buildWhatsAppLink, whatsappMessages } from "@/lib/site-config";
import WhatsAppChatbot from "./WhatsAppChatbot";

export default function WhatsAppFloatingButton() {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  return (
    <>
      <aside
        aria-label="Executive Direct Channels"
        className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5"
      >
        {/* Sleek Guidance Pill */}
        <button
          onClick={() => setChatbotOpen(true)}
          className="hidden sm:flex items-center gap-2 rounded-full border border-gold-500/30 bg-ink/90 text-paper px-3.5 py-1.5 text-xs font-medium shadow-xl backdrop-blur-md transition-all hover:scale-105 hover:border-gold-400 group"
          aria-label="Open guided onboarding assistant"
        >
          <Sparkles className="h-3.5 w-3.5 text-gold-400 group-hover:rotate-12 transition-transform" />
          <span className="text-white/90">Institutional Guide</span>
        </button>

        {/* Master WhatsApp Action Button with Pulsing Gold Aura */}
        <div className="relative group">
          <span className="absolute -inset-1 rounded-full bg-gold-400/30 blur-sm group-hover:bg-gold-400/50 transition-all animate-pulse" />
          <a
            href={buildWhatsAppLink(whatsappMessages.general)}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat with KIA–Start Up Consult on WhatsApp"
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl transition-all duration-300 hover:scale-110 focus-visible:scale-110 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/40"
          >
            <MessageCircle className="h-7 w-7" aria-hidden="true" fill="currentColor" />
          </a>

          {/* Accessible Luxury Tooltip */}
          <div className="pointer-events-none absolute right-full top-1/2 -translate-y-1/2 mr-3 hidden sm:group-hover:block transition-opacity duration-200">
            <div className="whitespace-nowrap rounded-xl bg-ink border border-gold-500/30 px-3.5 py-2 text-xs font-medium text-paper shadow-2xl">
              <span className="text-gold-400 font-bold block text-[10px] uppercase font-mono">
                DIRECT EXECUTIVE CHANNEL
              </span>
              <span>Chat with Isaac & Partners on WhatsApp</span>
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-ink" />
            </div>
          </div>
        </div>
      </aside>

      <WhatsAppChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </>
  );
}
