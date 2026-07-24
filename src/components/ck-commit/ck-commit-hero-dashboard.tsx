"use client";

import {
  animate,
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { ckCommitAssets } from "@/config/ck-commit";
import { cn } from "@/lib/utils";

type CompareMode = "before" | "after";

const easeOut = [0.22, 1, 0.36, 1] as const;
const easeSmooth = [0.16, 1, 0.3, 1] as const;

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeSmooth },
  },
};

const METRICS = [
  {
    label: "Coverage",
    before: 18.2,
    after: 30.7,
    decimals: 1,
    arc: ckCommitAssets.metricArc1,
    rotate: "rotate-[1.68deg]",
    arcClass: "right-[-8%] top-[-30%] h-[100px] w-[105px]",
  },
  {
    label: "Utilisation",
    before: 72,
    after: 100,
    decimals: 0,
    arc: ckCommitAssets.metricArc2,
    rotate: "rotate-[-37.2deg]",
    arcClass: "right-[-12%] top-[-55%] h-[100px] w-[103px]",
  },
  {
    label: "Discount",
    before: 28,
    after: 50,
    decimals: 0,
    arc: ckCommitAssets.metricArc3,
    rotate: "rotate-[-20.79deg]",
    arcClass: "right-[-8%] top-[-48%] h-[100px] w-[103px]",
  },
  {
    label: "Net Savings",
    before: 6.4,
    after: 15.04,
    decimals: 2,
    arc: ckCommitAssets.metricArc4,
    rotate: "rotate-[-6.94deg]",
    arcClass: "right-[-10%] top-[-28%] h-[116px] w-[119px]",
  },
] as const;

const Y_LABELS = ["8k", "6k", "4k", "2k", "0"] as const;
const X_LABELS = ["0", "2k", "4k", "6k", "8k"] as const;

/** Continuous count — no fade, ticks from previous → next */
function CountingNumber({
  value,
  decimals = 0,
  duration = 0.9,
  reduceMotion,
  className,
  prefix = "",
  suffix = "",
  padStart,
}: {
  value: number;
  decimals?: number;
  duration?: number;
  reduceMotion: boolean;
  className?: string;
  prefix?: string;
  suffix?: string;
  padStart?: number;
}) {
  const valueRef = useRef(value);
  const [display, setDisplay] = useState(value);

  useEffect(() => {
    if (reduceMotion) {
      valueRef.current = value;
      setDisplay(value);
      return;
    }

    const from = valueRef.current;
    const controls = animate(from, value, {
      duration,
      ease: easeOut,
      onUpdate: (latest) => {
        valueRef.current = latest;
        setDisplay(latest);
      },
    });

    return () => controls.stop();
  }, [value, duration, reduceMotion]);

  const raw = display.toFixed(decimals);
  const formatted =
    padStart != null ? raw.padStart(padStart + (decimals > 0 ? decimals + 1 : 0), "0") : raw;

  return (
    <span className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}

function CommitChart({
  mode,
  reduceMotion,
}: {
  mode: CompareMode;
  reduceMotion: boolean;
}) {
  const isAfter = mode === "after";

  // 0 = Before (band low), 1 = After (band high / profit)
  const progress = useMotionValue(isAfter ? 1 : 0);

  useEffect(() => {
    if (reduceMotion) {
      progress.set(isAfter ? 1 : 0);
      return;
    }
    const controls = animate(progress, isAfter ? 1 : 0, {
      type: "spring",
      stiffness: 120,
      damping: 18,
      mass: 0.85,
    });
    return () => controls.stop();
  }, [isAfter, progress, reduceMotion]);

  const waveY = useTransform(progress, [0, 1], [26, 0]);
  const waveScaleY = useTransform(progress, [0, 1], [0.92, 1]);
  const bandTop = useTransform(progress, [0, 1], [188, 112]);
  const bandHeight = useTransform(progress, [0, 1], [36, 112]);
  const solidTop = useTransform(progress, [0, 1], [188, 106]);
  const dashATop = useTransform(progress, [0, 1], [200, 139]);
  const dashBTop = useTransform(progress, [0, 1], [212, 155]);
  const dashOpacity = useTransform(progress, [0, 0.35, 1], [0, 0.35, 1]);

  return (
    <div className="mx-auto flex w-full max-w-[1059px] flex-col items-center gap-5">
      <div className="relative h-[224px] w-full overflow-hidden">
        <div
          className="absolute bottom-0 left-[10px] top-0 z-[1] flex w-11 flex-col items-end justify-between text-right text-[11px] font-medium leading-[22.8px] text-[#94a3b8]"
          aria-hidden
        >
          {Y_LABELS.map((label) => (
            <span key={label}>{label}</span>
          ))}
        </div>

        <div className="absolute left-[67px] top-0 z-[1] flex h-[224px] w-[min(992px,calc(100%-67px))] flex-col justify-between opacity-80">
          {Y_LABELS.map((label) => (
            <div
              key={label}
              className="w-full border-t border-dashed border-[#d5dee8]"
            />
          ))}
        </div>
        <div className="absolute left-[67px] top-0 z-[1] flex h-[224px] w-[min(992px,calc(100%-67px))] justify-between opacity-80">
          {X_LABELS.map((label) => (
            <div
              key={label}
              className="h-full border-l border-dashed border-[#d5dee8]"
            />
          ))}
        </div>

        {/* Instance band — continuous slide up (profit) / down */}
        <motion.div
          className="absolute left-[66.79px] z-[3] w-[min(992px,calc(100%-67px))] border-t border-red-500 bg-gradient-to-b from-[rgba(255,231,231,0.84)] from-[33%] to-[rgba(255,247,247,0.7)]"
          style={{ top: bandTop, height: bandHeight }}
          aria-hidden
        />
        <motion.div
          className="absolute left-[66px] z-[4] h-0 w-[min(992px,calc(100%-67px))] border-t border-red-500"
          style={{ top: solidTop }}
          aria-hidden
        />
        <motion.div
          className="absolute left-[68px] z-[5] h-0 w-[min(992px,calc(100%-67px))] border-t border-dashed border-red-500"
          style={{ top: dashATop, opacity: dashOpacity }}
          aria-hidden
        />
        <motion.div
          className="absolute left-[68px] z-[5] h-0 w-[min(992px,calc(100%-67px))] border-t border-dashed border-red-500"
          style={{ top: dashBTop, opacity: dashOpacity }}
          aria-hidden
        />

        {/* Zigzag — springs up on Optimised (profit), settles down on Sub-Optimised */}
        <motion.div
          className="absolute left-[68px] top-0 z-[2] h-[202px] w-[min(991px,calc(100%-68px))]"
          style={{
            y: waveY,
            scaleY: waveScaleY,
            transformOrigin: "bottom center",
          }}
        >
          <Image
            src={ckCommitAssets.chartWaveAfter}
            alt=""
            width={993}
            height={227}
            className="h-full w-full object-fill object-top"
            unoptimized
            priority
          />
        </motion.div>

        <div
          className="absolute left-[67px] top-[calc(50%+125px)] z-[1] flex w-[min(990px,calc(100%-67px))] -translate-y-1/2 justify-between text-[11px] font-medium leading-[22.8px] text-[#94a3b8]"
          aria-hidden
        >
          {X_LABELS.map((label) => (
            <span key={label} className="w-0 -translate-x-1/2 text-center">
              {label}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-8 text-[13px] font-medium leading-5 text-[#64748b]">
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-[2px] bg-[#e05a5a]" />
          Instance count
        </div>
        <div className="flex items-center gap-1.5">
          <span className="size-2.5 rounded-[2px] bg-[#7dd3fc]" />
          Committed capacity
        </div>
      </div>
    </div>
  );
}

/** Figma 8141:116251 — hero-banner-commit */
export function CkCommitHeroDashboard({ className }: { className?: string }) {
  const [mode, setMode] = useState<CompareMode>("after");
  const reduceMotion = useReducedMotion() === true;
  const isAfter = mode === "after";

  return (
    <motion.div
      className={cn(
        "relative w-full max-w-[1140px] overflow-hidden rounded-t-[20px] border border-b-0 border-[#e6ecf1] bg-white shadow-[0px_6px_16.5px_0px_rgba(44,157,231,0.11)]",
        className,
      )}
      variants={reduceMotion ? undefined : sectionVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="relative grid h-auto min-h-[76px] grid-cols-1 items-center border-b border-[rgba(226,232,240,0.6)] px-4 py-3 sm:grid-cols-[1fr_auto_1fr] sm:px-0"
        style={{
          backgroundImage:
            "linear-gradient(176.19deg, rgb(254, 242, 242) 0%, rgb(239, 246, 255) 100%)",
        }}
        variants={reduceMotion ? undefined : fadeUp}
      >
        <div className="flex flex-col items-center gap-0.5 text-center sm:pl-[12%]">
          <span
            className={cn(
              "text-sm font-medium leading-tight tracking-[-0.2px] transition-colors duration-300",
              !isAfter ? "text-[#e80584]" : "text-[#f2a3cf]",
            )}
          >
            Before
          </span>
          <span
            className={cn(
              "text-lg font-medium leading-snug tracking-[-0.3px] sm:text-xl",
              !isAfter ? "text-black" : "text-[#94a3b8]",
            )}
          >
            Sub-Optimised Savings
          </span>
        </div>

        <div className="relative mx-auto flex flex-col items-center gap-1.5 px-8 py-2 sm:py-0">
          <div
            className="pointer-events-none absolute inset-y-3 left-0 hidden w-px bg-gradient-to-b from-transparent via-[#cad5e2] to-transparent sm:block"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute inset-y-3 right-0 hidden w-px bg-gradient-to-b from-transparent via-[#cad5e2] to-transparent sm:block"
            aria-hidden
          />
          <div className="relative">
            <button
              type="button"
              role="switch"
              aria-checked={isAfter}
              aria-label="Compare before and after savings"
              onClick={() => setMode(isAfter ? "before" : "after")}
              className={cn(
                "relative flex h-6 w-[52px] shrink-0 items-center rounded-full p-[1.5px] transition-colors duration-300",
                isAfter
                  ? "bg-gradient-to-br from-[#2b7fff] to-[#00b8db]"
                  : "bg-[#cbced4]",
              )}
            >
              <motion.span
                className="size-[21px] rounded-full bg-white shadow"
                animate={{ x: isAfter ? 28 : 0 }}
                transition={
                  reduceMotion
                    ? { duration: 0 }
                    : { type: "spring", stiffness: 480, damping: 32 }
                }
              />
            </button>
            {/* Pointer to the right of the toggle, tipped slightly down — clears COMPARE */}
            <motion.div
              className="pointer-events-none absolute left-[calc(100%+2px)] top-3 z-10 hidden drop-shadow-[0px_4px_2.5px_rgba(169,40,109,0.29)] sm:block"
              aria-hidden
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -3, 0], rotate: [0, -6, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 1.8,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatDelay: 1.2,
                    }
              }
            >
              <Image
                src={ckCommitAssets.pointer}
                alt=""
                width={31}
                height={30}
                className="size-[30px]"
                unoptimized
              />
            </motion.div>
          </div>
          <span className="text-[11px] font-medium uppercase tracking-[0.5px] text-[#94a3b8]">
            Compare
          </span>
        </div>

        <div className="flex flex-col items-center gap-0.5 text-center sm:pr-[12%]">
          <span
            className={cn(
              "text-sm font-medium leading-tight tracking-[-0.2px] transition-colors duration-300",
              isAfter ? "text-[#e80584]" : "text-[#f2a3cf]",
            )}
          >
            After
          </span>
          <span
            className={cn(
              "text-lg leading-snug tracking-[-0.3px] sm:text-xl",
              isAfter
                ? "font-semibold text-black"
                : "font-medium text-[#94a3b8]",
            )}
          >
            Optimised Savings
          </span>
        </div>
      </motion.div>

      <motion.div
        className="mx-auto mt-5 flex w-full max-w-[1059px] flex-col gap-4 px-4 sm:mt-6 sm:px-5 lg:flex-row lg:gap-4"
        variants={
          reduceMotion
            ? undefined
            : {
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.05 },
                },
              }
        }
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            className="relative h-[103px] flex-1 overflow-hidden rounded-[8px] border border-[#e6ecf1] bg-[#fafcfe] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
            variants={reduceMotion ? undefined : cardReveal}
          >
            <div
              className={cn(
                "pointer-events-none absolute transition-opacity duration-500",
                isAfter ? "opacity-30" : "opacity-[0.15]",
                metric.arcClass,
                metric.rotate,
              )}
              aria-hidden
            >
              <Image
                src={metric.arc}
                alt=""
                width={119}
                height={116}
                className="h-full w-full object-contain"
                unoptimized
              />
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
              <p className="text-[13px] font-medium leading-none text-[#64748b]">
                {metric.label}
              </p>
              <CountingNumber
                value={isAfter ? metric.after : metric.before}
                decimals={metric.decimals}
                reduceMotion={reduceMotion}
                suffix="%"
                className="text-2xl font-semibold leading-none tracking-[-0.5px] text-[#0f172a] tabular-nums"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="mt-7 px-2 sm:mt-8 sm:px-5"
        variants={reduceMotion ? undefined : fadeUp}
      >
        <CommitChart mode={mode} reduceMotion={reduceMotion} />
      </motion.div>

      <motion.div
        className="mx-auto mt-5 grid w-full max-w-[991px] gap-[19px] px-4 pb-8 sm:mt-6 sm:grid-cols-2 sm:px-5"
        variants={
          reduceMotion
            ? undefined
            : {
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.1, delayChildren: 0.04 },
                },
              }
        }
      >
        <motion.div
          className="flex h-[46px] items-center justify-center gap-2.5 rounded-lg border-l-2 border-[#17a5fb] bg-[#f9f9f9] px-3"
          variants={reduceMotion ? undefined : fadeUp}
        >
          <span className="relative size-[44px] shrink-0">
            <Image
              src={ckCommitAssets.iconPercent}
              alt=""
              width={19}
              height={19}
              className="absolute left-1/2 top-1/2 size-[19px] -translate-x-1/2 -translate-y-1/2"
              unoptimized
            />
          </span>
          <p className="text-center text-base font-medium leading-snug text-[#334155] sm:text-lg">
            Effective Saving Rates:{" "}
            <CountingNumber
              value={isAfter ? 25.5 : 12}
              decimals={1}
              reduceMotion={reduceMotion}
              suffix="%"
              className="font-semibold text-black tabular-nums"
            />
          </p>
        </motion.div>
        <motion.div
          className="flex h-[46px] items-center justify-center gap-2.5 rounded-lg border-l-2 border-[#17a5fb] bg-[#f9f9f9] px-3"
          variants={reduceMotion ? undefined : fadeUp}
        >
          <span className="relative size-[38px] shrink-0">
            <Image
              src={ckCommitAssets.iconSavings}
              alt=""
              width={38}
              height={38}
              className="size-[38px] object-contain"
              unoptimized
            />
          </span>
          <p className="text-center text-base font-medium leading-snug text-[#334155] sm:text-lg">
            Typical Net Savings:{" "}
            <span className="font-semibold text-black tabular-nums">
              <CountingNumber
                value={isAfter ? 5 : 2}
                decimals={0}
                reduceMotion={reduceMotion}
                padStart={2}
                suffix="%"
              />{" "}
              <span className="text-sm font-medium">to</span>{" "}
              <CountingNumber
                value={isAfter ? 25 : 12}
                decimals={0}
                reduceMotion={reduceMotion}
                suffix="%"
              />
            </span>
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
