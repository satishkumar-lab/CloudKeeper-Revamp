"use client";

import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  FINOPS_FOR_AI_HEADING_GRADIENT,
  finopsForAiAssets,
  finopsForAiChallenges,
  type FinopsForAiChallenge,
} from "@/config/finops-for-ai";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;
const hoverEase = "cubic-bezier(0.22, 1, 0.36, 1)";

/**
 * Soft brand wash — blue → purple → pink at very low opacity
 * (same stops as heading text, kept light for readable hover)
 */
const HOVER_WASH =
  "linear-gradient(90deg, rgba(23, 165, 251, 0.05) 0%, rgba(154, 75, 255, 0.04) 50%, rgba(237, 0, 130, 0.045) 100%)";

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.04,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeSmooth },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

/**
 * Figma jSO4ysCovRJzCsRsg77Ewd — card: reasons section
 * Property 1=Main → Property 1=Variant3 (hover)
 */
function ChallengeItem({
  item,
  index,
  reduceMotion,
}: {
  item: FinopsForAiChallenge;
  index: number;
  reduceMotion: boolean;
}) {
  const isLeft = index % 2 === 0;
  const isTopTwoRows = index < 4;
  const isLast = index === 5;

  return (
    <motion.article
      className={cn(
        "group/challenge relative flex flex-col gap-2.5 overflow-hidden bg-white px-5 py-10",
        !isLast && "border-b-[0.7px] border-[#d9d9d9]",
        isLeft && "lg:border-r-[0.7px] lg:border-[#d9d9d9]",
        isTopTwoRows ? "lg:border-b-[0.7px]" : "lg:border-b-0",
      )}
      variants={reduceMotion ? undefined : cardReveal}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -3,
              transition: { type: "spring", stiffness: 360, damping: 28 },
            }
      }
    >
      {/* Hover wash — light brand tint */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 z-0",
          "opacity-0 transition-opacity duration-300",
          !reduceMotion && "group-hover/challenge:opacity-100",
        )}
        style={{
          backgroundImage: HOVER_WASH,
          transitionTimingFunction: hoverEase,
        }}
        aria-hidden
      />

      {/* Bottom accent bar — brand heading gradient */}
      <div
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-1",
          "origin-left scale-x-0",
          "transition-transform duration-300",
          !reduceMotion && "group-hover/challenge:scale-x-100",
        )}
        style={{
          backgroundImage: FINOPS_FOR_AI_HEADING_GRADIENT,
          transitionTimingFunction: hoverEase,
        }}
        aria-hidden
      />

      {/* Sparkles — Figma Variant3 cluster (blue / peach / pink) */}
      <div
        className="pointer-events-none absolute right-6 top-6 z-[2] h-[48px] w-[36px]"
        aria-hidden
      >
        <span
          className={cn(
            "absolute right-[18px] top-[2px] inline-flex origin-center",
            "scale-50 opacity-0 transition-[opacity,transform] duration-300 delay-75",
            !reduceMotion &&
              "group-hover/challenge:scale-100 group-hover/challenge:opacity-100 group-hover/challenge:animate-[ck-sparkle_1.5s_ease-in-out_0.25s_infinite]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        >
          <img
            src={finopsForAiAssets.challenges.sparkA}
            alt=""
            width={7}
            height={8}
            className="h-[8px] w-[7px] -scale-y-100 rotate-180 object-contain"
            decoding="async"
          />
        </span>

        <span
          className={cn(
            "absolute right-[2px] top-0 inline-flex origin-center",
            "scale-50 opacity-0 transition-[opacity,transform] duration-300 delay-100",
            !reduceMotion &&
              "group-hover/challenge:scale-100 group-hover/challenge:opacity-100 group-hover/challenge:animate-[ck-sparkle_1.7s_ease-in-out_0.5s_infinite]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        >
          <img
            src={finopsForAiAssets.challenges.sparkB}
            alt=""
            width={8}
            height={9}
            className="h-[9px] w-2 -scale-x-100 object-contain"
            decoding="async"
          />
        </span>

        <span
          className={cn(
            "absolute right-0 top-[14px] inline-flex origin-center",
            "scale-50 opacity-0 transition-[opacity,transform] duration-[350ms] delay-150",
            !reduceMotion &&
              "group-hover/challenge:scale-100 group-hover/challenge:opacity-100 group-hover/challenge:animate-[ck-sparkle_1.9s_ease-in-out_infinite]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        >
          <img
            src={finopsForAiAssets.challenges.sparkC}
            alt=""
            width={15}
            height={19}
            className="h-[19px] w-[15px] -scale-x-100 object-contain"
            decoding="async"
          />
        </span>
      </div>

      <div className="relative z-[1] flex h-[30px] items-center gap-2.5">
        <span
          className={cn(
            "flex size-6 shrink-0 items-center justify-center rounded-full bg-[#fff7fa] p-1.5",
            "transition-colors duration-300",
            !reduceMotion && "group-hover/challenge:bg-white",
          )}
          style={{ transitionTimingFunction: hoverEase }}
          aria-hidden
        >
          <img
            src={finopsForAiAssets.challenges.warning}
            alt=""
            width={14}
            height={13}
            className="block size-[14px] object-contain"
            decoding="async"
          />
        </span>
        <h3 className="min-w-0 flex-1 text-lg font-medium leading-[30px] text-black">
          {item.title}
        </h3>
      </div>

      <p className="relative z-[1] pl-[34px] text-base font-normal leading-[21px] text-black">
        {item.body}
      </p>
    </motion.article>
  );
}

/** Figma 8141:134972 — The Cost Challenges of Scaling AI */
export function FinopsForAiChallengesSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, subtitle, items } = finopsForAiChallenges;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white from-[75%] to-[#f7fcff] font-sans"
      aria-labelledby="finops-for-ai-challenges-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-5 py-[70px] sm:px-8 lg:px-[90px]"
        variants={reduceMotion ? undefined : sectionReveal}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div
          className="flex w-full max-w-[1260px] flex-col items-center gap-2.5 text-center"
          variants={reduceMotion ? undefined : fadeUp}
        >
          <h2
            id="finops-for-ai-challenges-heading"
            className="w-full text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] text-black"
          >
            {heading}
          </h2>
          <p className="max-w-[1100px] text-base leading-[1.5] text-black sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <motion.div
          className="grid w-full max-w-[1260px] grid-cols-1 lg:grid-cols-2"
          variants={reduceMotion ? undefined : gridReveal}
        >
          {items.map((item, index) => (
            <ChallengeItem
              key={item.title}
              item={item}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
