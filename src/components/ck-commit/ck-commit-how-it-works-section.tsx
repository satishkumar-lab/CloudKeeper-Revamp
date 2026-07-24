"use client";

import Image from "next/image";
import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import { ckCommitHowItWorks } from "@/config/ck-commit";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

const softSpring = {
  type: "spring" as const,
  stiffness: 260,
  damping: 28,
  mass: 0.9,
};

const popSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 24,
  mass: 0.75,
};

/** Live site `.content-display` — blue → pink wash */
const PANEL_COL_BG =
  "linear-gradient(90deg, rgb(226, 240, 255) 0%, rgb(255, 233, 245) 100%)";

/** Active tab bottom accent — blue → pink */
const ACTIVE_TAB_ACCENT =
  "linear-gradient(90deg, #17a5fb 0%, #d64794 100%)";

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const navReveal: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeOut },
  },
};

const tabsReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.12 },
  },
};

const tabItemReveal: Variants = {
  hidden: { opacity: 0, x: -18, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

const panelShellReveal: Variants = {
  hidden: { opacity: 0, x: 40, scale: 0.985 },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

const ctaReveal: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: popSpring,
  },
};

/**
 * How does CloudKeeper Commit work?
 * Frame inspired by live site; motion via Framer Motion.
 */
export function CkCommitHowItWorksSection({
  className,
  id = "commit-how-it-works",
}: {
  className?: string;
  id?: string;
} = {}) {
  const reduceMotion = useReducedMotion() === true;
  const { heading, steps, cta } = ckCommitHowItWorks;
  const [activeStepId, setActiveStepId] = useState<
    (typeof steps)[number]["id"]
  >(steps[0]?.id ?? "signup");
  const [direction, setDirection] = useState(0);

  const activeIndex = steps.findIndex((step) => step.id === activeStepId);
  const activeStep = steps[activeIndex] ?? steps[0];
  const headingId = `${id}-heading`;

  function selectStep(nextId: (typeof steps)[number]["id"]) {
    const nextIndex = steps.findIndex((step) => step.id === nextId);
    setDirection(nextIndex > activeIndex ? 1 : -1);
    setActiveStepId(nextId);
  }

  const panelVariants: Variants = reduceMotion
    ? {
        enter: { opacity: 1, x: 0, scale: 1 },
        center: { opacity: 1, x: 0, scale: 1 },
        exit: { opacity: 1, x: 0, scale: 1 },
      }
    : {
        enter: {
          opacity: 0,
          x: direction >= 0 ? 32 : -32,
          scale: 0.985,
        },
        center: {
          opacity: 1,
          x: 0,
          scale: 1,
          transition: {
            opacity: { duration: 0.35, ease: easeOut },
            x: softSpring,
            scale: softSpring,
          },
        },
        exit: {
          opacity: 0,
          x: direction >= 0 ? -24 : 24,
          scale: 0.99,
          transition: { duration: 0.26, ease: easeOut },
        },
      };

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden bg-white font-sans", className)}
      aria-labelledby={headingId}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-5 py-14 sm:px-8 lg:px-[100px] lg:py-[70px]">
        <motion.h2
          id={headingId}
          className="mb-10 text-center text-[clamp(1.75rem,3.4vw,2.625rem)] font-normal leading-[55px] tracking-[-0.2px] text-[#253746]"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.75, ease: easeOut }}
        >
          {heading}
        </motion.h2>

        <motion.div
          className="mb-[50px] flex w-full max-w-[1240px] flex-col gap-4 lg:h-[558px] lg:flex-row lg:items-stretch lg:gap-0"
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.2, margin: "0px 0px -6% 0px" }}
          variants={reduceMotion ? undefined : sectionReveal}
        >
          {/* Left nav */}
          <motion.div
            className="flex w-full shrink-0 flex-col gap-[19px] rounded-[16px] bg-[#f3f8ff] p-5 sm:p-6 lg:h-full lg:w-[400px] lg:p-[30px]"
            role="tablist"
            aria-label="CloudKeeper Commit steps"
            variants={reduceMotion ? undefined : navReveal}
          >
            <motion.div
              className="flex w-full flex-col gap-[19px]"
              variants={reduceMotion ? undefined : tabsReveal}
            >
              {steps.map((step) => {
                const isActive = step.id === activeStepId;

                return (
                  <motion.button
                    key={step.id}
                    type="button"
                    role="tab"
                    id={`${id}-tab-${step.id}`}
                    aria-selected={isActive}
                    aria-controls={`${id}-panel`}
                    onClick={() => selectStep(step.id)}
                    variants={reduceMotion ? undefined : tabItemReveal}
                    initial={false}
                    animate={
                      reduceMotion
                        ? undefined
                        : {
                            backgroundColor: isActive
                              ? "#ffffff"
                              : "rgba(255,255,255,0)",
                          }
                    }
                    whileHover={
                      reduceMotion || isActive ? undefined : { x: 4 }
                    }
                    whileTap={reduceMotion ? undefined : { scale: 0.985 }}
                    transition={softSpring}
                    className={cn(
                      "relative w-full overflow-hidden text-left",
                      isActive
                        ? "rounded-t-[6px] rounded-b-[4px] bg-white px-5 pb-[29px] pt-5"
                        : "flex min-h-[94px] items-center rounded-[6px] px-5 py-5 hover:bg-white/60",
                    )}
                  >
                    <div
                      className={cn(
                        "relative z-[1] flex w-full flex-col",
                        isActive && "gap-2",
                      )}
                    >
                      <span className="text-lg leading-[1.5] tracking-[-0.3px] text-black sm:text-xl">
                        {step.title}
                      </span>

                      <AnimatePresence initial={false} mode="wait">
                        {isActive ? (
                          <motion.p
                            key={`${step.id}-desc`}
                            initial={
                              reduceMotion
                                ? false
                                : { opacity: 0, height: 0, y: -4 }
                            }
                            animate={{ opacity: 1, height: "auto", y: 0 }}
                            exit={
                              reduceMotion
                                ? undefined
                                : { opacity: 0, height: 0, y: -4 }
                            }
                            transition={{ duration: 0.32, ease: easeOut }}
                            className="overflow-hidden text-sm font-light leading-[1.5] text-black"
                          >
                            {step.description}
                          </motion.p>
                        ) : null}
                      </AnimatePresence>
                    </div>

                    <AnimatePresence initial={false}>
                      {isActive ? (
                        <motion.span
                          key={`${step.id}-accent`}
                          className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-1 origin-left rounded-b-[4px]"
                          style={{ backgroundImage: ACTIVE_TAB_ACCENT }}
                          initial={
                            reduceMotion ? false : { scaleX: 0, opacity: 0 }
                          }
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={
                            reduceMotion
                              ? undefined
                              : { scaleX: 0, opacity: 0 }
                          }
                          transition={{ duration: 0.4, ease: easeOut }}
                          aria-hidden
                        />
                      ) : null}
                    </AnimatePresence>
                  </motion.button>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right panel */}
          <motion.div
            className="relative flex min-h-[320px] flex-1 items-center justify-center overflow-hidden rounded-[16px] p-5 sm:p-8 lg:h-full lg:w-[840px] lg:shrink-0 lg:p-10"
            style={{ backgroundImage: PANEL_COL_BG }}
            role="tabpanel"
            id={`${id}-panel`}
            aria-labelledby={`${id}-tab-${activeStep?.id}`}
            variants={reduceMotion ? undefined : panelShellReveal}
          >
            <AnimatePresence mode="wait" custom={direction} initial={false}>
              {activeStep ? (
                <motion.div
                  key={activeStep.id}
                  custom={direction}
                  variants={panelVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="relative w-full max-w-[760px] will-change-transform"
                >
                  <Image
                    src={activeStep.panel}
                    alt={activeStep.panelAlt}
                    width={1520}
                    height={948}
                    sizes="(max-width: 1024px) 100vw, 760px"
                    quality={100}
                    priority={activeStep.id === steps[0]?.id}
                    className="h-auto w-full object-contain"
                    style={{
                      boxShadow:
                        "-9.06px 10.87px 39.85px 0px rgba(0, 0, 0, 0.04)",
                    }}
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.65 }}
          variants={reduceMotion ? undefined : ctaReveal}
        >
          <CtaButton href={cta.href} className="h-[52px]">
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
