"use client";

import { useEffect, useRef } from "react";

/**
 * SectionReveal — attaches an IntersectionObserver to all elements with
 * class "section-reveal" within the document, adding "revealed" when they
 * enter the viewport. Mount once at layout level.
 */
export default function SectionReveal() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observerRef.current?.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    const observe = () => {
      document.querySelectorAll(".section-reveal").forEach((el) => {
        observerRef.current?.observe(el);
      });
    };

    observe();

    // Re-scan after short delay to catch late-rendered elements
    const t = setTimeout(observe, 500);

    return () => {
      clearTimeout(t);
      observerRef.current?.disconnect();
    };
  }, []);

  return null;
}
