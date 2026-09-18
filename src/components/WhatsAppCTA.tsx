import { MessageCircle } from "lucide-react";
import { buildWhatsAppLink } from "@/lib/site-config";

interface WhatsAppCTAProps {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantClasses: Record<NonNullable<WhatsAppCTAProps["variant"]>, string> = {
  solid:
    "bg-gradient-to-r from-[#fff3a8] via-[#ffd700] to-[#c9a227] text-black font-extrabold shadow-[0_0_28px_rgba(255,215,0,0.4)] hover:shadow-[0_0_44px_rgba(255,215,0,0.7)] hover:scale-[1.04] active:scale-[0.98] border border-[#fff4a3]/60",
  outline:
    "border-2 border-gold-deep/50 text-ink bg-transparent hover:bg-ink hover:text-gold hover:border-ink font-bold shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-[0.98]",
  ghost:
    "text-ink font-bold hover:text-gold-deep underline underline-offset-4 decoration-gold-deep decoration-2 transition-colors",
};

const sizeClasses: Record<NonNullable<WhatsAppCTAProps["size"]>, string> = {
  sm: "px-4 py-2 text-xs sm:text-sm",
  md: "px-6 py-3 text-sm md:text-base",
  lg: "px-8 py-4 text-base md:text-lg",
};

/**
 * The one place every WhatsApp CTA on the site routes through.
 * Directive §5: no hardcoded wa.me links scattered across pages.
 */
export default function WhatsAppCTA({
  message,
  children,
  variant = "solid",
  size = "md",
  className = "",
}: WhatsAppCTAProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`btn-ripple btn-magnetic inline-flex items-center justify-center gap-2.5 rounded-full font-medium tracking-tight transition-all duration-300 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      {children}
    </a>
  );
}
