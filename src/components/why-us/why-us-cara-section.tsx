"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import {
  whyUsCaraAssets,
  whyUsCaraBenefits,
  whyUsCaraContent,
  whyUsCaraTiers,
} from "@/config/why-us-cara";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const STAGE_W = 1360;
const STAGE_H = 484;

/** Figma pointer positions inside 1360×484 wrapper-features */
const POINTER_POS = [
  { left: 590.22, top: 26.18 },
  { left: 641.22, top: 90.06 },
  { left: 683.22, top: 152.94 },
  { left: 693.22, top: 215.82 },
  { left: 684.22, top: 277.7 },
  { left: 643.22, top: 340.58 },
  { left: 588.22, top: 402.46 },
] as const;

function CaraBenefitCard({
  icon,
  text,
  index,
  reduceMotion,
  isLast,
}: {
  icon: string;
  text: string;
  index: number;
  reduceMotion: boolean;
  isLast?: boolean;
}) {
  return (
    <motion.div
      className={cn(
        "flex min-h-[154px] flex-1 flex-col items-center gap-5 border-b border-[#d9d9d9] px-5 py-5 sm:border-b-0",
        !isLast && "sm:border-r sm:border-[#d9d9d9]",
      )}
      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.08 + index * 0.06,
      }}
    >
      <div className="flex h-11 w-11 shrink-0 items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={icon}
          alt=""
          width={44}
          height={44}
          className="h-11 w-11 object-contain"
          decoding="async"
        />
      </div>
      <p className="max-w-[230px] text-center text-sm font-normal leading-[1.5] text-black">
        {text}
      </p>
    </motion.div>
  );
}

/** Keeps Figma px coords intact while fitting any desktop width */
function useStageScale(designWidth: number) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useLayoutEffect(() => {
    const host = hostRef.current;
    if (!host) return;
    const update = () => {
      const w = host.clientWidth;
      if (w > 0) setScale(Math.min(1, w / designWidth));
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(host);
    return () => ro.disconnect();
  }, [designWidth]);

  return { hostRef, scale };
}

/** Figma 8824:39848 — CARA Framework pyramid + benefit strip */
export function WhyUsCaraSection() {
  const reduceMotion = useReducedMotion() === true;
  const { hostRef, scale } = useStageScale(STAGE_W);
  const {
    headingBefore,
    headingBold,
    bodyBefore,
    bodyBold,
    bodyAfter,
    savingsLabel,
    frameworkLabel,
  } = whyUsCaraContent;

  return (
    <section
      className="relative overflow-x-clip bg-white font-sans"
      aria-labelledby="why-us-cara-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] pt-[60px] lg:gap-[60px]">
        <motion.header
          className="flex w-full max-w-[1230px] flex-col items-center gap-2.5 px-5 text-center text-black sm:px-8 lg:px-10"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: easeSmooth }}
        >
          <h2
            id="why-us-cara-heading"
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5]"
          >
            {headingBefore}
            <span className="font-semibold">{headingBold}</span>
          </h2>
          <p className="max-w-[1097px] text-base leading-[1.5] sm:text-lg">
            {bodyBefore}
            <strong className="font-semibold">{bodyBold}</strong>
            {bodyAfter}
          </p>
        </motion.header>

        {/* —— Mobile / tablet —— */}
        <div className="flex w-full flex-col items-center gap-8 px-5 sm:px-8 lg:hidden">
          <motion.div
            className="relative w-full max-w-[320px]"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: easeSmooth }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={whyUsCaraAssets.pyramid}
              alt=""
              className="h-auto w-full"
              decoding="async"
            />
            <p className="mt-3 text-center text-sm font-medium text-black">
              {frameworkLabel}
            </p>
          </motion.div>

          <ul className="flex w-full max-w-[560px] flex-col gap-5">
            {whyUsCaraTiers.map((tier, i) => (
              <motion.li
                key={tier.id}
                className="flex items-center gap-3"
                initial={reduceMotion ? false : { opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: reduceMotion ? 0 : 0.45,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : 0.05 * i,
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={whyUsCaraAssets.legend(tier.legend)}
                  alt=""
                  width={38}
                  height={10}
                  className="h-2.5 w-[38px] shrink-0"
                  decoding="async"
                />
                <span className="text-sm leading-[1.5] text-black sm:text-base">
                  {tier.label}
                </span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* —— Desktop: vector layout (scaled to fit) —— */}
        <div
          ref={hostRef}
          className="relative mx-auto hidden w-full max-w-[1360px] lg:block"
          style={{ height: STAGE_H * scale }}
        >
          {/* Scale shell — keep separate from Framer transforms */}
          <div
            className="absolute left-0 top-0 origin-top-left"
            style={{
              width: STAGE_W,
              height: STAGE_H,
              transform: `scale(${scale})`,
            }}
          >
            <motion.div
              className="relative size-full"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: reduceMotion ? 0 : 0.75,
                ease: easeSmooth,
              }}
            >
            {/* Pyramid */}
            <motion.div
              className="absolute left-[242px] top-[7px] h-[427px] w-[292px]"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: easeSmooth, delay: 0.05 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyUsCaraAssets.pyramid}
                alt=""
                className="size-full object-fill"
                decoding="async"
              />
            </motion.div>

            {/* Left curved arrow */}
            <motion.div
              className="absolute left-[261px] top-[74px] h-[276px] w-[192px]"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: easeSmooth, delay: 0.22 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyUsCaraAssets.arrowLeft}
                alt=""
                className="size-full object-contain"
                decoding="async"
              />
            </motion.div>

            {/* Right curved arrow */}
            <motion.div
              className="absolute left-[474px] top-[77px] flex h-[281px] w-[205px] items-center justify-center"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: easeSmooth, delay: 0.28 }}
            >
              <div className="h-[255px] w-[120px] rotate-[158deg]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={whyUsCaraAssets.arrowRight}
                  alt=""
                  className="size-full object-contain"
                  decoding="async"
                />
              </div>
            </motion.div>

            {/*
              C.A.R.A. Framework — single line along left arc (Figma ~-65°).
              Positioned left of pyramid so it never hits tier labels.
            */}
            <motion.p
              className="pointer-events-none absolute left-[200px] top-[200px] origin-left -rotate-[65deg] whitespace-nowrap text-sm font-normal leading-none text-black"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, ease: easeSmooth, delay: 0.38 }}
            >
              {frameworkLabel}
            </motion.p>

            {/* Tier labels */}
            {whyUsCaraTiers.map((tier, i) => {
              const pos = POINTER_POS[i];
              return (
                <motion.div
                  key={tier.id}
                  className="absolute flex h-[20px] items-center gap-6"
                  style={{ left: pos.left, top: pos.top - 4 }}
                  initial={reduceMotion ? false : { opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: easeSmooth,
                    delay: reduceMotion ? 0 : 0.32 + i * 0.06,
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={whyUsCaraAssets.legend(tier.legend)}
                    alt=""
                    width={38}
                    height={10}
                    className="h-2.5 w-[38px] shrink-0"
                    decoding="async"
                  />
                  <span className="whitespace-nowrap text-base leading-none text-black">
                    {tier.label}
                  </span>
                </motion.div>
              );
            })}

            {/* Increase in savings — text beside the rail (not overlapping dots) */}
            <motion.div
              className="absolute left-[1280px] top-[17px] h-[423px] w-[56px]"
              aria-hidden
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: easeSmooth, delay: 0.5 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyUsCaraAssets.savingsRail}
                alt=""
                className="absolute left-0 top-0 h-full w-[10px] object-fill"
                decoding="async"
              />
              <span
                className="absolute left-[18px] top-1/2 text-[20px] font-medium leading-none text-[#e80584]"
                style={{
                  writingMode: "vertical-rl",
                  transform: "translateY(-50%) rotate(180deg)",
                }}
              >
                {savingsLabel}
              </span>
            </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Benefit strip — edge-to-edge */}
      <div className="mt-[50px] w-full border-y border-[#dcdfe3] bg-[#edf9ff] lg:mt-[60px]">
        <div className="mx-auto flex w-full flex-col sm:flex-row">
          {whyUsCaraBenefits.map((b, i) => (
            <CaraBenefitCard
              key={b.id}
              icon={b.icon}
              text={b.text}
              index={i}
              reduceMotion={reduceMotion}
              isLast={i === whyUsCaraBenefits.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
