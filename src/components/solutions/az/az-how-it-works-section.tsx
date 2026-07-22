"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  azHowItWorksAssets,
  azHowItWorksContent,
  type AzHowItWorksStep,
} from "@/config/solutions-az-how-it-works";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function StepItem({
  step,
  index,
  reduceMotion,
}: {
  step: AzHowItWorksStep;
  index: number;
  reduceMotion: boolean;
}) {
  const baseDelay = reduceMotion ? 0 : index * 0.18;

  return (
    <motion.li
      className="relative flex items-center gap-10"
      initial={reduceMotion ? false : { opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35, margin: "0px 0px -6% 0px" }}
      transition={{
        duration: 0.95,
        ease: easeSmooth,
        delay: baseDelay,
      }}
    >
      <motion.div
        className="relative z-10 flex size-[60px] shrink-0 items-center justify-center rounded-bl-[34px] rounded-tl-[34px] rounded-tr-[34px] border-2 border-[#17a5fb] bg-white text-xl leading-[1.5] text-black shadow-[0px_6px_16.5px_rgba(44,157,231,0.11)]"
        initial={reduceMotion ? false : { scale: 0.55, rotate: -8, opacity: 0 }}
        whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                type: "spring",
                stiffness: 160,
                damping: 18,
                mass: 1.1,
                delay: baseDelay + 0.12,
              }
        }
      >
        <motion.span
          initial={reduceMotion ? false : { scale: 0.7, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 16,
            mass: 1,
            delay: baseDelay + 0.28,
          }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      <motion.div
        className="flex min-w-0 flex-1 flex-col gap-[5px]"
        initial={reduceMotion ? false : { opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{
          duration: 0.9,
          ease: easeSmooth,
          delay: baseDelay + 0.22,
        }}
      >
        <h3 className="text-xl font-normal leading-[1.5] text-black sm:text-2xl">
          {step.title}
        </h3>
        <p className="max-w-[730px] text-base leading-[1.5] text-black">
          {step.parts.map((part) =>
            part.accent ? (
              <motion.span
                key={part.text}
                className="inline-block text-[#e80584]"
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.7,
                  ease: easeSmooth,
                  delay: baseDelay + 0.48,
                }}
              >
                {part.text}
              </motion.span>
            ) : (
              <span key={part.text}>{part.text}</span>
            ),
          )}
        </p>
      </motion.div>
    </motion.li>
  );
}

/** Figma 8677:125186 — How does it work? stepper (rewamped) */
export function AzHowItWorksSection() {
  const { heading, subheading, steps, cta } = azHowItWorksContent;
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      aria-labelledby="az-how-it-works-heading"
    >
      <div
        className="pointer-events-none absolute -right-[15%] -top-[35%] hidden h-[720px] w-[600px] opacity-30 lg:block"
        aria-hidden
      >
        <Image
          src={azHowItWorksAssets.bgDeco}
          alt=""
          fill
          className="object-contain object-top"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
        <motion.div
          className="flex w-full max-w-[591px] flex-col items-center gap-[10px] text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.55 }}
          transition={{ duration: 0.9, ease: easeSmooth }}
        >
          <h2
            id="az-how-it-works-heading"
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.5] tracking-[-0.2px] text-black"
          >
            {heading}
          </h2>
          <p className="text-base leading-[1.5] text-black sm:text-lg">
            {subheading}
          </p>
        </motion.div>

        <ol className="relative flex w-full max-w-[830px] flex-col gap-[60px]">
          <motion.div
            className="pointer-events-none absolute bottom-[30px] left-[30px] top-[30px] origin-top w-px border-l border-dashed border-[#d6d6d6]"
            aria-hidden
            initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: reduceMotion ? 0 : 2.4,
              ease: easeSmooth,
              delay: 0.25,
            }}
          />

          {steps.map((step, index) => (
            <StepItem
              key={step.number}
              step={step}
              index={index}
              reduceMotion={reduceMotion}
            />
          ))}
        </ol>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            type: "spring",
            stiffness: 140,
            damping: 20,
            mass: 1,
            delay: reduceMotion ? 0 : 0.2,
          }}
        >
          <CtaButton href={cta.href} className="h-[52px]">
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
