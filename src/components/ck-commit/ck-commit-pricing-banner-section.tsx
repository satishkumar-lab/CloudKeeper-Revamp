"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  CK_COMMIT_PRICING_BANNER_BG,
  ckCommitAssets,
  ckCommitPricingBanner,
} from "@/config/ck-commit";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const popSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 22,
  mass: 0.85,
};

const contentReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.06 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeSmooth },
  },
};

const tagReveal: Variants = {
  hidden: { opacity: 0, y: 14, scale: 0.94 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: popSpring,
  },
};

const chartReveal: Variants = {
  hidden: { opacity: 0, scale: 0.72, rotate: -18, x: 28 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    x: 0,
    transition: {
      opacity: { duration: 0.45, ease: easeSmooth },
      scale: { ...popSpring, stiffness: 220 },
      rotate: { duration: 0.9, ease: easeSmooth },
      x: { duration: 0.75, ease: easeSmooth },
    },
  },
};

/** Figma 8141:116633 — CTA_Banner_Commit (Outcome-based Pricing) */
export function CkCommitPricingBannerSection({
  className,
  id = "commit-pricing-banner",
}: {
  className?: string;
  id?: string;
} = {}) {
  const reduceMotion = useReducedMotion() === true;
  const content = ckCommitPricingBanner;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden font-sans", className)}
      style={{ backgroundImage: CK_COMMIT_PRICING_BANNER_BG }}
      aria-labelledby={headingId}
    >
      {/* Soft glow behind pie */}
      <motion.div
        className="pointer-events-none absolute right-[8%] top-1/2 z-0 hidden h-[280px] w-[280px] -translate-y-1/2 rounded-full blur-[70px] lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(47,205,255,0.35) 0%, rgba(232,5,132,0.18) 45%, transparent 70%)",
        }}
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, scale: 0.8 }}
        whileInView={
          reduceMotion
            ? { opacity: 0.4 }
            : { opacity: [0.28, 0.48, 0.28], scale: [0.92, 1.06, 0.92] }
        }
        viewport={{ once: true, amount: 0.3 }}
        transition={
          reduceMotion
            ? { duration: 0.4 }
            : { duration: 4.5, ease: "easeInOut", repeat: Infinity }
        }
      />

      {/* Bottom-center abstract deco */}
      <motion.div
        className="pointer-events-none absolute bottom-[-120px] left-1/2 z-0 hidden -translate-x-[10%] translate-y-[10%] opacity-40 lg:block"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 0.4 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeSmooth, delay: 0.2 }}
      >
        <div className="rotate-30">
          <Image
            src={ckCommitAssets.pricingDeco}
            alt=""
            width={374}
            height={364}
            className="h-[280px] w-[290px] max-w-none object-contain"
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[337px] w-full max-w-[1440px] items-center justify-center px-5 py-10 sm:px-8 lg:px-10 xl:px-[100px]">
        <div className="mx-auto flex w-full max-w-[1237px] flex-col items-center gap-10 lg:flex-row lg:items-center lg:justify-between lg:gap-[60px] xl:gap-[94px]">
          <motion.div
            className="flex w-full max-w-[883px] flex-col items-start gap-[30px]"
            initial={reduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={reduceMotion ? undefined : contentReveal}
          >
            <motion.span
              className="inline-flex h-[45px] items-center rounded-full border-[0.7px] border-[#17a5fb] px-[13px] text-lg font-medium capitalize leading-[27px] text-[#17a5fb]"
              variants={reduceMotion ? undefined : tagReveal}
            >
              {content.tag}
            </motion.span>

            <motion.div
              className="flex w-full flex-col gap-5 text-white"
              variants={reduceMotion ? undefined : contentReveal}
            >
              <motion.h2
                id={headingId}
                className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.1] tracking-[-0.2px]"
                variants={reduceMotion ? undefined : fadeUp}
              >
                {content.heading}
                <span className="font-medium">{content.headingEmphasis}</span>
              </motion.h2>
              <motion.p
                className="max-w-[820px] text-lg leading-[1.5] tracking-[-0.3px] text-white"
                variants={reduceMotion ? undefined : fadeUp}
              >
                {content.body}
              </motion.p>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative shrink-0"
            initial={reduceMotion ? "visible" : "hidden"}
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            variants={reduceMotion ? undefined : chartReveal}
          >
            <motion.div
              className="relative h-[220px] w-[236px] will-change-transform sm:h-[260px] sm:w-[278px]"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -4, 0], rotate: [0, 0.6, 0] }
              }
              transition={
                reduceMotion
                  ? undefined
                  : {
                      duration: 5.5,
                      ease: "easeInOut",
                      repeat: Infinity,
                      delay: 1.1,
                    }
              }
              whileHover={
                reduceMotion
                  ? undefined
                  : { scale: 1.03, rotate: 1, transition: popSpring }
              }
            >
              <Image
                src={ckCommitAssets.pricingPie}
                alt={content.pieAlt}
                width={278}
                height={260}
                className="h-full w-full object-contain drop-shadow-[0_18px_40px_rgba(232,5,132,0.28)]"
              />

              <motion.p
                className="pointer-events-none absolute left-[29%] top-[58%] text-lg leading-[30px] text-white"
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : 0.55,
                }}
              >
                {content.yourSavingsLabel}
              </motion.p>

              <motion.p
                className="pointer-events-none absolute right-0 top-[-6%] text-lg leading-[30px] text-white sm:right-0 sm:top-0 lg:right-0 lg:top-[-8%]"
                initial={reduceMotion ? false : { opacity: 0, y: -8, x: 8 }}
                whileInView={{ opacity: 1, y: 0, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.55,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : 0.7,
                }}
              >
                {content.ourShareLabel}
              </motion.p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
