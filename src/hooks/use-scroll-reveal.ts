"use client";

import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

type UseScrollRevealOptions = {
  /** Skip intersection checks and show immediately */
  disabled?: boolean;
  /** Fraction of element that must be visible (0–1) */
  threshold?: number;
  /** Only trigger once */
  once?: boolean;
};

function isInViewport(el: HTMLElement, threshold: number) {
  const rect = el.getBoundingClientRect();
  const viewHeight = window.innerHeight || document.documentElement.clientHeight;

  if (rect.bottom <= 0 || rect.top >= viewHeight) {
    return false;
  }

  const visibleHeight = Math.min(rect.bottom, viewHeight) - Math.max(rect.top, 0);
  const visibleRatio = visibleHeight / Math.max(rect.height, 1);

  return visibleRatio >= threshold && rect.top <= viewHeight * 0.92;
}

/** Lenis-safe scroll reveal trigger (Framer whileInView misses Lenis scroll) */
export function useScrollReveal(
  element: HTMLElement | null,
  {
    disabled = false,
    threshold = 0.12,
    once = true,
  }: UseScrollRevealOptions = {},
) {
  const [isVisible, setIsVisible] = useState(disabled);
  const lenis = useLenis();

  useEffect(() => {
    if (disabled) {
      setIsVisible(true);
      return;
    }

    if (!element) return;

    let revealed = false;

    const reveal = () => {
      if (revealed) return;
      if (isInViewport(element, threshold)) {
        revealed = true;
        setIsVisible(true);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            revealed = true;
            setIsVisible(true);
            if (once) observer.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );

    observer.observe(element);
    reveal();

    const unsubscribeLenis = lenis?.on("scroll", reveal);
    window.addEventListener("scroll", reveal, { passive: true });
    window.addEventListener("resize", reveal, { passive: true });

    return () => {
      observer.disconnect();
      unsubscribeLenis?.();
      window.removeEventListener("scroll", reveal);
      window.removeEventListener("resize", reveal);
    };
  }, [disabled, element, lenis, once, threshold]);

  return isVisible;
}
