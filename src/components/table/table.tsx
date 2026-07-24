"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const HEADER_GRAD =
  "linear-gradient(90deg, rgba(23, 165, 251, 0.07) 0%, rgba(214, 71, 148, 0.07) 50%, rgba(0, 195, 137, 0.07) 100%)";

const ROW_H = "min-h-[56px]";
const HEAD_H = "min-h-[52px]";

const popSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 26,
  mass: 0.8,
};

const tableReveal: Variants = {
  hidden: { opacity: 0, y: 36, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: easeOut,
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const tableShell: Variants = tableReveal;

const colReveal = (from: "left" | "right" | "center"): Variants => ({
  hidden: {
    opacity: 0,
    x: from === "left" ? -28 : from === "right" ? 36 : 0,
    y: from === "center" ? 18 : 0,
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
});

const rowsReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.12 },
  },
};

const rowCell: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.42, ease: easeOut },
  },
};

const iconPop: Variants = {
  hidden: { opacity: 0, scale: 0.45, rotate: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: popSpring,
  },
};

export type TableRow = {
  id: string;
  metric: string;
  metricIcon?: string;
  middle: string;
  highlight: string;
};

export type TableColumnLabels = {
  metric: string;
  middle: string;
  highlight: string;
};

export type TableProps = {
  labels: TableColumnLabels;
  rows: readonly TableRow[];
  animate?: boolean;
  className?: string;
  highlightFloat?: boolean;
};

function MetricIcon({ src }: { src: string }) {
  return (
    <motion.span
      className="relative flex size-7 shrink-0 items-center justify-center rounded-md border border-[#17a5fb]/25 bg-[radial-gradient(circle_at_center,#fff_0%,#eff9ff_100%)]"
      aria-hidden
      variants={iconPop}
    >
      <Image
        src={src}
        alt=""
        width={16}
        height={16}
        className="size-4 object-contain"
        unoptimized
      />
    </motion.span>
  );
}

/** Three-column comparison table with highlighted Commit-style column. */
export function Table({
  labels,
  rows,
  animate = true,
  className,
  highlightFloat = true,
}: TableProps) {
  const reduceMotion = useReducedMotion() === true;
  const shouldAnimate = animate && !reduceMotion;

  const shellProps = shouldAnimate
    ? {
        initial: "hidden" as const,
        whileInView: "visible" as const,
        viewport: { once: true, amount: 0.2, margin: "0px 0px -8% 0px" },
        variants: tableShell,
      }
    : {};

  return (
    <motion.div
      className={cn(
        "w-full min-w-0 max-w-full rounded-xl bg-[rgba(255,190,225,0.06)] p-2 sm:p-2.5",
        className,
      )}
      {...shellProps}
    >
      <div className="w-full min-w-0 max-w-full overflow-x-auto overscroll-x-contain">
        <div className="flex w-full min-w-[820px] max-w-full items-stretch overflow-visible rounded-xl border border-[#c9e8ff] bg-white lg:min-w-0">
          {/* Metric */}
          <motion.div
            className="w-[30%] min-w-0 shrink-0 border-r border-[#e8f3fb] sm:w-[28%]"
            variants={shouldAnimate ? colReveal("left") : undefined}
          >
            <div
              className={cn(
                "flex items-center border-b border-[#e8f3fb] px-4 text-base font-medium text-black sm:px-5 sm:text-[17px] lg:text-lg",
                HEAD_H,
              )}
              style={{ backgroundImage: HEADER_GRAD }}
            >
              {labels.metric}
            </div>
            <motion.div variants={shouldAnimate ? rowsReveal : undefined}>
              {rows.map((row, index) => (
                <motion.div
                  key={row.id}
                  variants={shouldAnimate ? rowCell : undefined}
                  className={cn(
                    "flex items-center px-4 py-2 text-[14px] leading-[1.35] text-black sm:px-5 sm:text-[15px]",
                    ROW_H,
                    index < rows.length - 1 && "border-b border-[#e8f3fb]",
                  )}
                >
                  <div className="flex items-center gap-3">
                    {row.metricIcon ? <MetricIcon src={row.metricIcon} /> : null}
                    <span className="font-medium leading-snug">{row.metric}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Middle column */}
          <motion.div
            className="min-w-0 flex-1 border-r border-[#e8f3fb]"
            variants={shouldAnimate ? colReveal("center") : undefined}
          >
            <div
              className={cn(
                "flex items-center border-b border-[#e8f3fb] px-4 text-base font-medium text-black sm:px-5 sm:text-[17px] lg:text-lg",
                HEAD_H,
              )}
              style={{ backgroundImage: HEADER_GRAD }}
            >
              {labels.middle}
            </div>
            <motion.div variants={shouldAnimate ? rowsReveal : undefined}>
              {rows.map((row, index) => (
                <motion.div
                  key={row.id}
                  variants={shouldAnimate ? rowCell : undefined}
                  className={cn(
                    "flex items-center px-4 py-2 text-[14px] leading-[1.35] text-black sm:px-5 sm:text-[15px]",
                    ROW_H,
                    index < rows.length - 1 && "border-b border-[#e8f3fb]",
                  )}
                >
                  {row.middle}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Highlight column */}
          <motion.div
            className="relative z-10 w-[40%] min-w-0 shrink-0 self-stretch py-1 sm:w-[38%]"
            variants={shouldAnimate ? colReveal("right") : undefined}
          >
            <motion.div
              className="h-full will-change-transform"
              animate={
                shouldAnimate && highlightFloat ? { y: [0, -3, 0] } : undefined
              }
              transition={
                shouldAnimate && highlightFloat
                  ? {
                      duration: 4.2,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: 0.9,
                    }
                  : undefined
              }
            >
              <div className="flex h-full flex-col overflow-hidden rounded-[12px] border border-[#e80584] bg-white shadow-[0_10px_28px_rgba(232,5,132,0.2)]">
                <div
                  className={cn(
                    "flex items-center bg-[#e80584] px-4 sm:px-5",
                    HEAD_H,
                  )}
                >
                  <p className="text-base font-semibold leading-snug tracking-[-0.3px] text-white sm:text-[17px] lg:text-lg">
                    {labels.highlight}
                  </p>
                </div>
                <motion.div variants={shouldAnimate ? rowsReveal : undefined}>
                  {rows.map((row, index) => (
                    <motion.div
                      key={row.id}
                      variants={shouldAnimate ? rowCell : undefined}
                      className={cn(
                        "flex items-center px-4 py-2 text-[14px] leading-[1.35] text-black sm:px-5 sm:text-[15px]",
                        ROW_H,
                        index < rows.length - 1 && "border-b border-[#f6e6ef]",
                      )}
                    >
                      {row.highlight}
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
