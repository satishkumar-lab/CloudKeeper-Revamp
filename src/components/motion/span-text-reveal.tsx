"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type SpanTextRevealProps = {
  children: string;
  direction?: "ltr" | "rtl";
  className?: string;
  startDelay?: number;
  step?: number;
};

/** Character stagger reveal — matches cloudkeeper.com span-text-reveal */
export function SpanTextReveal({
  children,
  direction = "rtl",
  className,
  startDelay = 0,
  step = 0.09,
}: SpanTextRevealProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setActive(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const chars = [...children];

  return (
    <span
      ref={ref}
      className={cn(
        "span-text-reveal",
        direction === "rtl" ? "span-text-reveal--rtl" : "span-text-reveal--ltr",
        active && "is-active",
        className,
      )}
      style={
        {
          "--str-count": chars.length,
          "--str-reveal-start-delay": `${startDelay}s`,
          "--str-reveal-step": `${step}s`,
        } as React.CSSProperties
      }
    >
      {chars.map((char, index) => (
        <span key={`${char}-${index}`} style={{ "--i": index } as React.CSSProperties}>
          {char === " " ? "\u00a0" : char}
        </span>
      ))}
    </span>
  );
}