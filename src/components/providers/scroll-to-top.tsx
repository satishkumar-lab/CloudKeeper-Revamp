"use client";

import { useLenis } from "lenis/react";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect } from "react";

/** Disable browser scroll restoration and always land at the top on load / route change. */
export function ScrollToTop() {
  const pathname = usePathname();
  const lenis = useLenis();

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const jumpToTop = () => {
      lenis?.scrollTo(0, { immediate: true });
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    jumpToTop();
    const raf = window.requestAnimationFrame(jumpToTop);
    const timeout = window.setTimeout(jumpToTop, 0);

    return () => {
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
    };
  }, [pathname, lenis]);

  return null;
}
