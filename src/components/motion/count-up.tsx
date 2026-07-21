"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

type CountUpProps = {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

function easeOutCubic(t: number) {
  return 1 - (1 - t) ** 3;
}

/** Scroll-triggered number counter — matches cloudkeeper.com trust-stats */
export function CountUp({
  target,
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setValue(target);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  useEffect(() => {
    if (!started) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / (duration * 1000), 1);
      setValue(Math.round(easeOutCubic(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [duration, started, target]);

  return (
    <span
      ref={ref}
      className={cn("inline-flex items-center gap-1", started && "is-visible", className)}
    >
      <span>{value}</span>
      {suffix ? <span>{suffix}</span> : null}
    </span>
  );
}
