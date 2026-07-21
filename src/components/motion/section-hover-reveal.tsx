"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionHoverRevealProps = {
  children: ReactNode;
  className?: string;
  /** Show immediately (hero on load) */
  immediate?: boolean;
};

function useFinePointer() {
  const [fine, setFine] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => setFine(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return fine;
}

export function SectionHoverReveal({
  children,
  className,
  immediate = false,
}: SectionHoverRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(immediate);
  const prefersReducedMotion = useReducedMotion();
  const finePointer = useFinePointer();

  useEffect(() => {
    if (immediate) setActive(true);
  }, [immediate]);

  useEffect(() => {
    if (finePointer || prefersReducedMotion) return;

    const root = rootRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, [finePointer, prefersReducedMotion]);

  const handleMouseEnter = () => {
    if (finePointer && !prefersReducedMotion) {
      setActive(true);
    }
  };

  const isVisible = prefersReducedMotion === true || active;

  return (
    <motion.div
      ref={rootRef}
      onMouseEnter={handleMouseEnter}
      className={cn("w-full", className)}
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0.58,
        y: isVisible ? 0 : 8,
      }}
      transition={{
        duration: 0.55,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
