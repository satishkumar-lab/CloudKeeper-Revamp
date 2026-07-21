"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState, type ReactNode } from "react";

import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { fadeUp, staggerContainer } from "@/lib/animations/variants";
import { cn } from "@/lib/utils";

type ScrollRevealGroupProps = {
  children: ReactNode;
  className?: string;
  threshold?: number;
};

export function ScrollRevealGroup({
  children,
  className,
  threshold = 0.1,
}: ScrollRevealGroupProps) {
  const [target, setTarget] = useState<HTMLDivElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isVisible = useScrollReveal(target, {
    disabled: prefersReducedMotion === true,
    threshold,
  });

  const animate =
    prefersReducedMotion === true || isVisible ? "visible" : "hidden";

  return (
    <motion.div
      ref={setTarget}
      className={cn(className)}
      initial="hidden"
      animate={animate}
      variants={
        prefersReducedMotion === true
          ? { hidden: {}, visible: {} }
          : staggerContainer
      }
    >
      {children}
    </motion.div>
  );
}

type ScrollRevealItemProps = {
  children: ReactNode;
  className?: string;
};

export function ScrollRevealItem({ children, className }: ScrollRevealItemProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      variants={
        prefersReducedMotion === true ? { hidden: {}, visible: {} } : fadeUp
      }
    >
      {children}
    </motion.div>
  );
}
