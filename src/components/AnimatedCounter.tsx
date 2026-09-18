"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string; // e.g. "50,000+", "$255M", "220,000 tCO₂e"
  className?: string;
  duration?: number; // ms
}

function parseNumber(value: string): { prefix: string; number: number; suffix: string } {
  // Strip commas, extract leading non-numeric chars, trailing non-numeric chars
  const cleaned = value.replace(/,/g, "");
  const match = cleaned.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/);
  if (!match) return { prefix: "", number: 0, suffix: value };
  return {
    prefix: match[1],
    number: parseFloat(match[2]),
    suffix: match[3],
  };
}

function formatNumber(n: number, originalValue: string): string {
  // Match original formatting (commas for thousands if original had them)
  if (originalValue.includes(",")) {
    return Math.round(n).toLocaleString("en-US");
  }
  if (originalValue.includes(".")) {
    // Keep one decimal place
    return n.toFixed(1);
  }
  return Math.round(n).toString();
}

export default function AnimatedCounter({
  value,
  className = "",
  duration = 1800,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);
  const frameRef = useRef<number | null>(null);

  const { prefix, number: targetNumber, suffix } = parseNumber(value);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.disconnect();

          // Animate
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out expo
            const eased = 1 - Math.pow(1 - progress, 4);
            const current = targetNumber * eased;
            setDisplayValue(formatNumber(current, value));

            if (progress < 1) {
              frameRef.current = requestAnimationFrame(animate);
            } else {
              setDisplayValue(formatNumber(targetNumber, value));
            }
          };
          frameRef.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [targetNumber, duration, hasAnimated, value]);

  return (
    <span ref={ref} className={`counter-animate ${className}`} aria-label={value}>
      {prefix}
      {hasAnimated ? displayValue : "0"}
      {suffix}
    </span>
  );
}
