"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  finopsForAiAssets,
  finopsForAiPhases,
  type FinopsForAiPhaseCard,
} from "@/config/finops-for-ai";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const cardHover = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.7,
};

function PhaseCard({
  card,
  index,
  reduceMotion,
}: {
  card: FinopsForAiPhaseCard;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="w-full"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.65,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.08 + index * 0.1,
      }}
    >
      <motion.article
        className={cn(
          "group/phase flex h-full min-h-[185px] w-full flex-col gap-[30px] overflow-hidden rounded-lg border border-[#f0f0f0] bg-white px-[30px] pt-[30px] pb-[35px]",
          "will-change-transform",
        )}
        initial={false}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                borderColor: "#17a5fb",
                boxShadow: "0px 14px 32px rgba(29, 140, 242, 0.16)",
              }
        }
        transition={cardHover}
      >
        <div className="flex w-full items-center justify-between border-b border-dashed border-[#c8c3c3] pb-[25px]">
          <h3 className="text-2xl font-medium leading-8 tracking-[-0.3px] text-black">
            {card.title}
          </h3>
          <span
            className="text-[30px] font-extralight leading-[1.5] tracking-[-0.5px] text-black/40 transition-colors duration-300 group-hover/phase:text-[#17a5fb]"
            aria-hidden
          >
            {card.number}
          </span>
        </div>
        <p className="text-base font-normal leading-[1.5] text-black">
          {card.body}
        </p>
      </motion.article>
    </motion.div>
  );
}

/** Figma 8141:134985 — Across Every Phase of Adoption */
export function FinopsForAiPhasesSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, subtitle, cards, support, cta } = finopsForAiPhases;

  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      aria-labelledby="finops-for-ai-phases-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-5 py-14 sm:px-8 lg:px-[90px] lg:py-14">
        <motion.div
          className="flex w-full max-w-[1280px] flex-col items-center gap-2.5 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
        >
          <h2
            id="finops-for-ai-phases-heading"
            className="w-full text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] tracking-[-0.5px] text-black"
          >
            {heading}
          </h2>
          <p className="w-full text-base leading-[1.5] text-black sm:text-lg">
            {subtitle}
          </p>
        </motion.div>

        <div className="flex w-full max-w-[1280px] flex-col items-center gap-[50px]">
          <div className="flex w-full flex-col gap-[30px]">
            <div className="grid w-full grid-cols-1 gap-[30px] md:grid-cols-3">
              {cards.map((card, index) => (
                <PhaseCard
                  key={card.number}
                  card={card}
                  index={index}
                  reduceMotion={reduceMotion}
                />
              ))}
            </div>

            <motion.div
              className="relative flex min-h-[69px] w-full items-center justify-center overflow-hidden rounded-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 0.65,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : 0.2,
              }}
            >
              <div className="pointer-events-none absolute inset-0 bg-[#f8f6ff]" aria-hidden />
              <Image
                src={finopsForAiAssets.phases.bannerBg}
                alt=""
                fill
                sizes="1280px"
                className="pointer-events-none object-cover opacity-[0.12]"
                aria-hidden
              />

              <div className="relative z-[1] flex w-full flex-col items-center gap-3 px-5 py-4 sm:flex-row sm:justify-center sm:gap-3 lg:gap-10 lg:px-12">
                <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-3">
                  <span
                    className="flex size-10 shrink-0 items-center justify-center rounded-md"
                    aria-hidden
                  >
                    <img
                      src={finopsForAiAssets.phases.headset}
                      alt=""
                      width={26}
                      height={26}
                      className="block size-[26px] object-contain"
                      decoding="async"
                    />
                  </span>
                  <p className="flex flex-col items-center gap-1 text-center sm:flex-row sm:items-center sm:gap-1 sm:text-left">
                    <span className="text-xl font-medium leading-[1.5] text-black sm:text-2xl">
                      {support.title}
                    </span>
                    <span className="text-base leading-6 tracking-[0.1px] text-black sm:text-lg">
                      {support.body}
                    </span>
                  </p>
                </div>

                <div
                  className="pointer-events-none absolute right-6 top-3 hidden h-[31px] w-6 sm:block lg:right-12"
                  aria-hidden
                >
                  <img
                    src={finopsForAiAssets.phases.sparkA}
                    alt=""
                    width={20}
                    height={24}
                    className="absolute bottom-0 right-0 h-6 w-5 -scale-y-100 rotate-180 object-contain opacity-90"
                  />
                  <img
                    src={finopsForAiAssets.phases.sparkB}
                    alt=""
                    width={12}
                    height={15}
                    className="absolute right-0 top-0 h-[15px] w-3 -scale-y-100 rotate-180 object-contain opacity-90"
                  />
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.6,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : 0.12,
            }}
          >
            <CtaButton href={cta.href} className="h-[52px]">
              {cta.label}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
