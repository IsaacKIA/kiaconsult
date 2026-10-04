"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

/**
 * SectionReveal — High-reliability reveal controller for elements with "section-reveal".
 *
 * Solves the Next.js App Router client-side navigation timing bug where sections below
 * the initial hero banner remain unrevealed (opacity: 0) on first visit until refreshed.
 *
 * Robust mechanisms included:
 * 1. IntersectionObserver with zero threshold and generous vertical rootMargins.
 * 2. MutationObserver listening to document.body to instantly detect any newly mounted
 *    .section-reveal DOM nodes (e.g. after Next.js page transitions or client filter tabs).
 * 3. Immediate viewport bounds evaluation (getBoundingClientRect) for elements already visible.
 * 4. Staggered post-navigation scans (0ms, 60ms, 150ms, 350ms, 700ms, 1200ms) to sync
 *    with React 19 concurrent transition / streaming commits.
 * 5. Passive scroll/resize fallback listeners so scrolling instantly reveals visible nodes.
 * 6. Safety fail-safe auto-reveal to guarantee content is never permanently hidden.
 */
export default function SectionReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Helper: Safely reveal an element and disconnect from observer
    const reveal = (el: HTMLElement) => {
      if (!el.classList.contains("revealed")) {
        el.classList.add("revealed");
      }
      observerRef.current?.unobserve(el);
    };

    // Helper: Test if element is currently in or approaching the viewport
    const isInOrNearViewport = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight || 800;
      // Triggers if top is within viewport + 120px ahead of scroll, and bottom hasn't scrolled far past top
      return rect.top <= vh + 120 && rect.bottom >= -100;
    };

    // Initialize IntersectionObserver
    observerRef.current?.disconnect();
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target as HTMLElement);
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "80px 0px 80px 0px",
      }
    );

    // Scan all unrevealed elements across the current DOM
    const scanElements = () => {
      const unrevealed = document.querySelectorAll<HTMLElement>(".section-reveal:not(.revealed)");
      unrevealed.forEach((el) => {
        if (isInOrNearViewport(el)) {
          reveal(el);
        } else {
          observerRef.current?.observe(el);
        }
      });
    };

    // Re-trigger animate-fade-up elements on page entry
    const retriggerFadeUps = () => {
      document.querySelectorAll<HTMLElement>(".animate-fade-up").forEach((el) => {
        el.style.animation = "none";
        void el.offsetHeight; // force reflow
        el.style.animation = "";
      });
    };

    // 1. Immediate scan & fade-up re-trigger
    scanElements();
    retriggerFadeUps();

    // 2. MutationObserver: Catch elements added as React completes streaming or page transitions
    mutationObserverRef.current?.disconnect();
    mutationObserverRef.current = new MutationObserver(() => {
      scanElements();
    });

    if (document.body) {
      mutationObserverRef.current.observe(document.body, {
        childList: true,
        subtree: true,
      });
    }

    // 3. Passive scroll & resize fallback handler
    let scrollRaf: number | null = null;
    const handleScrollFallback = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = null;
        scanElements();
      });
    };

    window.addEventListener("scroll", handleScrollFallback, { passive: true });
    window.addEventListener("resize", handleScrollFallback, { passive: true });
    window.addEventListener("orientationchange", handleScrollFallback, { passive: true });

    // 4. Staggered scans to bridge Next.js client-side navigation commit points
    const timeouts = [
      setTimeout(scanElements, 50),
      setTimeout(scanElements, 150),
      setTimeout(scanElements, 350),
      setTimeout(scanElements, 700),
      setTimeout(scanElements, 1200),
      // Fail-safe: After 2.5s, reveal any unrevealed element within 1.5 screenfuls
      setTimeout(() => {
        const vh = window.innerHeight || 800;
        document.querySelectorAll<HTMLElement>(".section-reveal:not(.revealed)").forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top <= vh * 1.5) {
            reveal(el);
          }
        });
      }, 2500),
    ];

    return () => {
      timeouts.forEach(clearTimeout);
      if (scrollRaf) cancelAnimationFrame(scrollRaf);
      window.removeEventListener("scroll", handleScrollFallback);
      window.removeEventListener("resize", handleScrollFallback);
      window.removeEventListener("orientationchange", handleScrollFallback);
      mutationObserverRef.current?.disconnect();
      observerRef.current?.disconnect();
    };
  }, [pathname]);

  return null;
}
