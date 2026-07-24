"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  CK_COMMIT_SECTION_BG_SOFT_40,
  ckCommitAssets,
  ckCommitSupport,
} from "@/config/ck-commit";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const cardSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 26,
  mass: 0.85,
};

const popSpring = {
  type: "spring" as const,
  stiffness: 420,
  damping: 22,
  mass: 0.7,
};

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.05,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const panelReveal: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
};

const cardReveal = (index: number): Variants => ({
  hidden: {
    opacity: 0,
    y: 36,
    x: index % 2 === 0 ? -22 : 22,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: { duration: 0.65, ease: easeOut },
  },
});

const taglineReveal: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

const gradientReveal: Variants = {
  hidden: { opacity: 0, x: 16, clipPath: "inset(0 100% 0 0 round 2px)" },
  visible: {
    opacity: 1,
    x: 0,
    clipPath: "inset(0 0% 0 0 round 2px)",
    transition: { duration: 0.8, ease: easeOut, delay: 0.12 },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 18, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: popSpring,
  },
};

const TAGLINE_GRADIENT =
  "linear-gradient(100deg, rgb(23, 165, 251) 1%, rgb(154, 75, 255) 46%, rgb(237, 0, 130) 91%)";

const cardInner: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 },
  },
};

const iconPop: Variants = {
  hidden: { opacity: 0, scale: 0.35, rotate: -20 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: popSpring,
  },
};

const textSlide: Variants = {
  hidden: { opacity: 0, x: 10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.48, ease: easeOut },
  },
};

function SupportFeatureCard({
  item,
  index,
  reduceMotion,
}: {
  item: string;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      variants={reduceMotion ? undefined : cardReveal(index)}
      whileHover={
        reduceMotion
          ? undefined
          : {
              y: -4,
              boxShadow: "0 12px 28px rgba(23, 165, 251, 0.12)",
            }
      }
      transition={reduceMotion ? undefined : { y: cardSpring, boxShadow: { duration: 0.3 } }}
      className="will-change-transform"
    >
      <motion.div
        variants={reduceMotion ? undefined : cardInner}
        className="flex items-center gap-3.5 rounded-md bg-white px-5 py-[26px]"
      >
        <motion.span className="relative size-6 shrink-0" aria-hidden variants={reduceMotion ? undefined : iconPop}>
          <Image
            src={ckCommitAssets.supportCheck}
            alt=""
            width={24}
            height={24}
            className="size-6 object-contain"
            unoptimized
          />
        </motion.span>
        <motion.p
          className="text-base leading-6 text-black"
          variants={reduceMotion ? undefined : textSlide}
        >
          {item}
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

/** Figma 8141:116580 — Get access to Unlimited Cloud Support */
export function CkCommitSupportSection({
  className,
  id = "commit-support",
}: {
  className?: string;
  id?: string;
} = {}) {
  const reduceMotion = useReducedMotion() === true;
  const content = ckCommitSupport;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("relative bg-white font-sans", className)}
      style={{ backgroundImage: CK_COMMIT_SECTION_BG_SOFT_40 }}
      aria-labelledby={headingId}
    >
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-[1240px] flex-col items-center gap-10 px-5 py-11 sm:px-8 lg:gap-10 lg:px-10 lg:pb-[50px] lg:pt-[60px]"
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
        variants={reduceMotion ? undefined : sectionReveal}
      >
        <motion.div
          className="flex w-full max-w-[1146px] flex-col items-center gap-10"
          variants={reduceMotion ? undefined : sectionReveal}
        >
          <motion.div
            className="flex w-full flex-col items-center gap-1.5 text-center text-black"
            variants={reduceMotion ? undefined : fadeUp}
          >
            <motion.h2
              id={headingId}
              className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5]"
              variants={reduceMotion ? undefined : fadeUp}
            >
              {content.heading}
            </motion.h2>
            <motion.p
              className="w-full max-w-[1146px] text-lg leading-[1.5] tracking-[-0.3px] lg:whitespace-nowrap"
              variants={reduceMotion ? undefined : fadeUp}
            >
              {content.body}
            </motion.p>
          </motion.div>

          <motion.div
            className="w-full max-w-[1146px] rounded-md bg-[rgba(23,165,251,0.06)] p-4"
            variants={reduceMotion ? undefined : panelReveal}
          >
            <motion.div
              className="grid grid-cols-1 gap-4 sm:grid-cols-2"
              variants={reduceMotion ? undefined : gridReveal}
            >
              {content.items.map((item, index) => (
                <SupportFeatureCard
                  key={item}
                  item={item}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex w-full flex-col items-center gap-10"
          variants={reduceMotion ? undefined : sectionReveal}
        >
          <motion.p
            className="max-w-[900px] text-center text-xl font-semibold leading-[26px] text-[#253746]"
            variants={reduceMotion ? undefined : taglineReveal}
          >
            <span>{content.taglineBefore}</span>
            <motion.span
              className="inline bg-clip-text italic text-transparent"
              style={{ backgroundImage: TAGLINE_GRADIENT }}
              variants={reduceMotion ? undefined : gradientReveal}
            >
              {content.taglineEmphasis}
            </motion.span>
          </motion.p>

          <motion.div variants={reduceMotion ? undefined : ctaReveal}>
            <CtaButton href={content.cta.href} className="h-[52px]">
              {content.cta.label}
            </CtaButton>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
