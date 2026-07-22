"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  WHY_US_HEADING_GRADIENT,
  WHY_US_STAT_CARD,
  whyUsAssets,
  whyUsHero,
  type WhyUsStatCard,
} from "@/config/why-us";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;
const hoverEase = "cubic-bezier(0.22, 1, 0.36, 1)";

function HeroDeco({
  className,
  rotateClass,
  reduceMotion,
  delay = 0,
  floatY = 10,
}: {
  className?: string;
  rotateClass: string;
  reduceMotion: boolean;
  delay?: number;
  floatY?: number;
}) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute z-0 hidden opacity-30 sm:block",
        className,
      )}
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={
        reduceMotion
          ? { opacity: 0.3 }
          : { opacity: 0.3, scale: 1, y: [0, -floatY, 0] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 1, ease: easeSmooth, delay },
              scale: { duration: 1, ease: easeSmooth, delay },
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay + 0.8,
              },
            }
      }
    >
      <div className={cn("origin-center", rotateClass)}>
        <Image
          src={whyUsAssets.heroDeco}
          alt=""
          width={208}
          height={199}
          className="h-auto w-[208px] max-w-none object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}

/**
 * Figma 21:8986 — card:unused_resources
 * Default 21:8987 → hover Variant2 21:8995
 * Fixed 271×213; icons keep intrinsic aspect ratio inside 46×46 slot
 */
function StatCard({
  card,
  index,
  reduceMotion,
}: {
  card: WhyUsStatCard;
  index: number;
  reduceMotion: boolean;
}) {
  const { width, height, hoverBleed } = WHY_US_STAT_CARD;

  return (
    <motion.article
      className="group/stat relative shrink-0 overflow-visible"
      style={{
        width: width + hoverBleed * 2,
        height: height + hoverBleed * 2,
        padding: hoverBleed,
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.28 + index * 0.08,
      }}
    >
      <div className="relative size-full overflow-visible">
        {/* Pink accent — Default aligned → Variant2 fan top-left */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-[5px] border border-solid border-[#ffbee1]",
            "left-[4px] top-[1px] h-[208px] w-[265px]",
            "transition-[left,top,width,height,border-radius,box-shadow] duration-300",
            "group-hover/stat:left-[-10px] group-hover/stat:top-[-9px]",
            "group-hover/stat:h-[213px] group-hover/stat:w-[270px] group-hover/stat:rounded-[8px]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        />

        {/* Blue accent — Default aligned → Variant2 fan bottom-right */}
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-[5px] border border-solid border-[rgba(23,158,255,0.6)]",
            "left-[2px] top-[1px] h-[211px] w-[267px]",
            "transition-[left,top,width,height,border-radius] duration-300",
            "group-hover/stat:left-[9px] group-hover/stat:top-[10px]",
            "group-hover/stat:h-[212px] group-hover/stat:w-[271px] group-hover/stat:rounded-[8px]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        />

        {/* Main card face */}
        <div
          className={cn(
            "relative z-10 flex flex-col items-start overflow-hidden",
            "h-[213px] w-[271px] rounded-[6px] border border-[#f1f1f1] bg-white",
            "px-[30px] py-10 text-black",
            "shadow-[0px_2px_12px_0px_rgba(41,41,41,0.05)]",
            "transition-[border-radius,border-color,background,box-shadow,color,filter] duration-300",
            "group-hover/stat:rounded-[11px] group-hover/stat:border-transparent",
            "group-hover/stat:bg-gradient-to-b group-hover/stat:from-white group-hover/stat:from-[69%] group-hover/stat:to-[#fff2f9]",
            "group-hover/stat:text-[#e80584]",
            "group-hover/stat:shadow-[-1px_5px_4px_0px_rgba(0,0,0,0.06)]",
            "group-hover/stat:drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        >
          {/* 46×46 icon slot — glyph keeps natural W×H (Figma ic-large-*) */}
          <div className="relative flex size-[46px] shrink-0 items-center justify-center overflow-visible">
            <img
              src={card.icon}
              alt=""
              width={card.iconWidth}
              height={card.iconHeight}
              className="block max-h-[46px] max-w-[46px] object-contain object-center"
              style={{
                width: card.iconWidth,
                height: card.iconHeight,
              }}
              decoding="async"
            />
          </div>

          {/* Icon → text: 20px · value → label: 6px */}
          <div className="mt-5 flex w-full flex-col gap-1.5">
            <p className="text-2xl font-medium leading-[1.5] text-inherit">
              {card.value}
            </p>
            <p className="text-base font-normal leading-[1.5] text-inherit">
              {card.label}
            </p>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/** Figma 22:14170 — hero-why ck */
export function WhyUsHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-x-clip overflow-y-visible bg-gradient-to-b from-white via-white to-[#f3faff] font-sans"
      aria-labelledby="why-us-hero-heading"
    >
      <HeroDeco
        className="right-[-100px] top-[200px] lg:right-[-80px] lg:top-[220px]"
        rotateClass="-rotate-[30deg]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={12}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 pb-16 pt-[70px] sm:px-8 lg:min-h-[587px] lg:px-10 lg:pb-20">
        <div className="mx-auto flex w-full max-w-[1230px] flex-col items-center gap-[34px]">
          <h1
            id="why-us-hero-heading"
            className="flex w-full max-w-[1117px] flex-col items-center text-center text-[clamp(1.5rem,3.5vw,2.75rem)] font-normal leading-[1.5] tracking-[-0.5px]"
          >
            <motion.span
              className="text-black"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeSmooth, delay: 0.08 }}
            >
              {whyUsHero.headingLine1}
            </motion.span>
            <motion.span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: WHY_US_HEADING_GRADIENT }}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: easeSmooth, delay: 0.18 }}
            >
              {whyUsHero.headingGradient}
            </motion.span>
          </h1>

          {/* Figma 22:14178 — 4 cards @ 271×213, staggered Y */}
          <ul className="flex w-full max-w-[1228px] flex-col items-center gap-4 overflow-visible sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-8 lg:h-[287px] lg:flex-nowrap lg:items-start lg:justify-between lg:gap-0">
            {whyUsHero.cards.map((card, index) => (
              <li
                key={card.label}
                className={cn(
                  "flex shrink-0 justify-center overflow-visible",
                  card.offsetY === 49.5 && "lg:mt-[49.5px]",
                  card.offsetY === 39.5 && "lg:mt-[39.5px]",
                )}
              >
                <StatCard
                  card={card}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
