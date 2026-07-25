"use client";

import Image from "next/image";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import {
  finopsForAiAssets,
  finopsForAiWhyCk,
  type FinopsForAiCapability,
} from "@/config/finops-for-ai";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const hoverSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
  mass: 0.65,
};

const PARTNER_LOGO_BG =
  "linear-gradient(90deg, rgba(226, 240, 255, 0.6) 0%, rgba(255, 233, 245, 0.6) 100%), linear-gradient(#f8f8f8, #f8f8f8)";

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
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

const fadeUpSoft: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const ruleReveal: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.75, ease: easeSmooth, delay: 0.08 },
  },
};

const capabilityReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeSmooth },
  },
};

const partnerFromLeft: Variants = {
  hidden: { opacity: 0, x: -56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeSmooth },
  },
};

const partnerFromRight: Variants = {
  hidden: { opacity: 0, x: 56 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.75, ease: easeSmooth, delay: 0.08 },
  },
};

function SectionRule({ className }: { className?: string }) {
  return (
    <motion.div
      className={cn("h-px min-w-0 flex-1 origin-left bg-[#e6ecf1]", className)}
      variants={ruleReveal}
      aria-hidden
    />
  );
}

function CapabilityItem({
  item,
  index,
  reduceMotion,
}: {
  item: FinopsForAiCapability;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="flex items-start gap-5"
      variants={reduceMotion ? undefined : capabilityReveal}
      transition={{
        delay: reduceMotion ? 0 : index * 0.07,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.icon}
        alt=""
        width={40}
        height={40}
        className="mt-0.5 size-10 shrink-0 object-contain"
      />
      <div className="flex min-w-0 flex-1 flex-col gap-2">
        <h4 className="text-xl font-medium leading-normal text-black">
          {item.title}
        </h4>
        <p className="text-base leading-[1.5] text-black">{item.body}</p>
      </div>
    </motion.div>
  );
}

/** Figma 8141:136175 — Why CloudKeeper? */
export function FinopsForAiWhyCkSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, journey, capabilities, partners } = finopsForAiWhyCk;

  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      aria-labelledby="finops-for-ai-why-ck-heading"
    >
      {/* Decorative ribbon — Figma upper-right, low opacity */}
      <motion.div
        className="pointer-events-none absolute -right-[132px] top-24 hidden h-[280px] w-[280px] opacity-20 lg:block xl:-right-[60px] xl:top-36"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, rotate: 40, scale: 0.92 }}
        whileInView={
          reduceMotion
            ? undefined
            : { opacity: 0.2, rotate: 50.97, scale: 1 }
        }
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1.1, ease: easeSmooth, delay: 0.2 }}
      >
        <Image
          src={finopsForAiAssets.whyCk.deco}
          alt=""
          fill
          className="object-contain"
          sizes="280px"
        />
      </motion.div>

      <motion.div
        className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-[50px] px-5 pt-0 pb-14 sm:px-8 lg:px-[90px] lg:pb-20 xl:px-[180px]"
        variants={reduceMotion ? undefined : sectionReveal}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "visible"}
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.h2
          id="finops-for-ai-why-ck-heading"
          className="w-full text-center text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] text-black"
          variants={reduceMotion ? undefined : fadeUp}
        >
          {heading}
        </motion.h2>

        <div className="flex w-full flex-col gap-[60px]">
          {/* Our Journey */}
          <motion.div
            className="flex w-full flex-col gap-[30px]"
            variants={reduceMotion ? undefined : fadeUp}
          >
            <div className="flex w-full items-center gap-4">
              <h3 className="shrink-0 text-2xl font-medium capitalize leading-5 text-black">
                {journey.title}
              </h3>
              <SectionRule />
            </div>
            <p className="max-w-[1080px] text-base leading-[1.5] tracking-[0.1px] text-black">
              {journey.body}
            </p>
          </motion.div>

          {/* Our Capabilities + partners */}
          <div className="flex w-full flex-col gap-[50px]">
            <motion.div
              className="flex w-full flex-col gap-10"
              variants={reduceMotion ? undefined : fadeUpSoft}
            >
              <div className="flex w-full items-center gap-4">
                <h3 className="shrink-0 text-2xl font-medium capitalize leading-5 text-black">
                  {capabilities.title}
                </h3>
                <SectionRule />
              </div>

              <motion.div
                className="grid w-full grid-cols-1 gap-10 md:grid-cols-2"
                variants={
                  reduceMotion
                    ? undefined
                    : {
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.09,
                            delayChildren: 0.04,
                          },
                        },
                      }
                }
              >
                {capabilities.items.map((item, index) => (
                  <CapabilityItem
                    key={item.title}
                    item={item}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                ))}
              </motion.div>
            </motion.div>

            {/* Partner cards — Figma 4403:82303 */}
            <motion.div
              className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-10 lg:pl-[52px]"
              initial={reduceMotion ? false : "hidden"}
              whileInView={reduceMotion ? undefined : "visible"}
              viewport={{ once: true, amount: 0.35 }}
              variants={
                reduceMotion
                  ? undefined
                  : {
                      hidden: {},
                      visible: {
                        transition: {
                          staggerChildren: 0.14,
                          delayChildren: 0.04,
                        },
                      },
                    }
              }
            >
              {partners.map((partner, index) => {
                const fromLeft = index % 2 === 0;
                return (
                  <motion.div
                    key={partner.id}
                    className="w-full"
                    variants={
                      reduceMotion
                        ? undefined
                        : fromLeft
                          ? partnerFromLeft
                          : partnerFromRight
                    }
                  >
                    <motion.article
                      className="flex h-auto min-h-[148px] w-full items-stretch rounded-2xl border border-[#e6ecf1] bg-white p-2.5 shadow-[0px_3.3px_25px_rgba(0,0,0,0.04)] will-change-transform sm:h-[160px] sm:min-h-0"
                      initial={false}
                      whileHover={
                        reduceMotion
                          ? undefined
                          : {
                              y: -5,
                              boxShadow: "0px 12px 32px rgba(0, 0, 0, 0.08)",
                            }
                      }
                      transition={hoverSpring}
                    >
                      <div
                        className="flex w-[40%] max-w-[262px] shrink-0 items-center justify-center self-stretch rounded-[10px] px-2.5 py-5 sm:w-[255px]"
                        style={{ background: PARTNER_LOGO_BG }}
                      >
                        {partner.kind === "anthropic" ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={partner.logo}
                            alt="Anthropic"
                            width={237}
                            height={46}
                            className="h-9 w-auto max-w-[min(100%,237px)] object-contain sm:h-[46px]"
                          />
                        ) : (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img
                            src={partner.logo}
                            alt="AWS Partner AI Services Competency"
                            width={115}
                            height={116}
                            className="h-[100px] w-auto max-w-[115px] object-contain sm:h-[116px]"
                          />
                        )}
                      </div>
                      <div className="flex min-w-0 flex-1 items-center pl-5 sm:pl-6">
                        <p className="whitespace-pre-line text-[15px] leading-[1.5] text-black sm:text-base">
                          {partner.label}
                        </p>
                      </div>
                    </motion.article>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
