"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import {
  scrollRevealVariants,
  type ScrollRevealVariant,
} from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  variant?: ScrollRevealVariant;
  delay?: number;
  /** Mount = hero-style entrance; scroll = reveal when section enters viewport */
  when?: "scroll" | "mount";
};

export function ScrollReveal({
  children,
  className,
  variant = "up",
  delay = 0,
  when = "scroll",
}: ScrollRevealProps) {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const [mountVisible, setMountVisible] = useState(false);

  const scrollVisible = useScrollReveal(target, {
    disabled: prefersReducedMotion === true || when === "mount",
    threshold: 0.1,
  });

  useEffect(() => {
    if (when !== "mount" || prefersReducedMotion) {
      if (when === "mount" && prefersReducedMotion) setMountVisible(true);
      return;
    }

    const timer = window.setTimeout(() => setMountVisible(true), Math.max(delay, 0) * 1000);
    return () => window.clearTimeout(timer);
  }, [delay, prefersReducedMotion, when]);

  const isVisible =
    prefersReducedMotion === true
      ? true
      : when === "mount"
        ? mountVisible
        : scrollVisible;

  const variants =
    prefersReducedMotion === true
      ? { hidden: {}, visible: {} }
      : scrollRevealVariants[variant];

  return (
    <motion.div
      ref={setTarget}
      className={cn("w-full", className)}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
