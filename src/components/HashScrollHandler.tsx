"use client";

import { useEffect } from "react";

/**
 * Ensures smooth, reliable client-side scrolling to target section hashes
 * even after async hydration and image layout rendering.
 */
export default function HashScrollHandler() {
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (!hash) return;

      // Try locating the element by exact id or alias
      const element =
        document.getElementById(hash) ||
        document.querySelector(`[data-anchor="${hash}"]`) ||
        document.querySelector(`a[name="${hash}"]`);

      if (element) {
        setTimeout(() => {
          const yOffset = -90; // offset for sticky header
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 100);
      }
    };

    // Run on initial mount
    handleHash();

    // Listen to hash changes
    window.addEventListener("hashchange", handleHash);
    return () => window.removeEventListener("hashchange", handleHash);
  }, []);

  return null;
}
