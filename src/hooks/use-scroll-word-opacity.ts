"use client";

import { useReducedMotion } from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useState, type RefObject } from "react";

const BASE_OPACITY = 0.5;
const REVEAL_EASE = 2.4;

function easeOut(progress: number) {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;
  return 1 - (1 - progress) ** REVEAL_EASE;
}

/** Word-by-word scroll opacity for the statement section. */
export function useScrollWordOpacity(
  sectionRef: RefObject<HTMLElement | null>,
  wordCount: number,
) {
  const lenis = useLenis();
  const prefersReducedMotion = useReducedMotion();
  const [opacities, setOpacities] = useState<number[]>(() =>
    Array.from({ length: wordCount }, () => BASE_OPACITY),
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      setOpacities(Array.from({ length: wordCount }, () => 1));
      return;
    }

    const update = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const viewHeight = window.innerHeight;
      const enterAt = viewHeight * 0.82;

      if (rect.top > enterAt) {
        setOpacities(Array.from({ length: wordCount }, () => BASE_OPACITY));
        return;
      }

      if (rect.bottom < viewHeight * 0.25) {
        setOpacities(Array.from({ length: wordCount }, () => 1));
        return;
      }

      const scrollSpan = Math.max(rect.height + viewHeight * 0.6, viewHeight * 0.45);
      const scrolled = enterAt - rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / scrollSpan));
      const segment = 1 / wordCount;

      setOpacities(
        Array.from({ length: wordCount }, (_, index) => {
          const local = (progress - index * segment) / segment;
          return BASE_OPACITY + easeOut(local) * (1 - BASE_OPACITY);
        }),
      );
    };

    update();
    const unsubscribeLenis = lenis?.on("scroll", update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      unsubscribeLenis?.();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [lenis, prefersReducedMotion, sectionRef, wordCount]);

  return opacities;
}
