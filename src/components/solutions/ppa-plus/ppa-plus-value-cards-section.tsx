"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { solutionsPpaPlusValueCards } from "@/config/solutions-ppa-plus";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Figma absolute positions inside the 1211×354 asset row */
const CARD_LAYOUT = [
  { leftClass: "lg:left-0", widthClass: "lg:w-[348px]", width: 348 },
  { leftClass: "lg:left-[424px]", widthClass: "lg:w-[344px]", width: 344 },
  { leftClass: "lg:left-[844px]", widthClass: "lg:w-[347px]", width: 347 },
] as const;

/** Enter from outside → snap into interlocking chain */
const ENTER_FROM = [
  { x: -64, y: 20, rotate: -5 },
  { x: 0, y: 48, rotate: 0 },
  { x: 64, y: 20, rotate: 5 },
] as const;

/** Soft alternating float — mirror loop avoids mid-cycle jerk */
const FLOAT = [
  { y: 7, duration: 3.4, delay: 0 },
  { y: -6, duration: 3.8, delay: 0.45 },
  { y: 7, duration: 3.6, delay: 0.2 },
] as const;

/** Figma 8200:166733 — circular value cards (updated) */
export function PpaPlusValueCardsSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, body, cards } = solutionsPpaPlusValueCards;

  return (
    <section
      className="bg-gradient-to-b from-white from-[63%] to-[#f7fcff] to-[100%] font-sans"
      aria-labelledby="ppa-plus-value-cards-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 py-16 sm:px-8 lg:gap-[70px] lg:px-[90px] lg:py-20">
        <div className="flex w-full max-w-[1260px] flex-col items-center gap-2.5 text-center">
          <motion.h2
            id="ppa-plus-value-cards-heading"
            className="w-full text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5] text-black"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="w-full text-base leading-[1.5] text-black sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.06 }}
          >
            {body.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </motion.p>
        </div>

        <ul className="relative flex w-full max-w-[1211px] flex-col items-center gap-8 lg:h-[354px] lg:block">
          {cards.map((card, index) => {
            const layout = CARD_LAYOUT[index];
            const enter = ENTER_FROM[index];
            const float = FLOAT[index];
            const enterDelay = reduceMotion ? 0 : 0.1 + index * 0.16;

            return (
              <motion.li
                key={card.id}
                className={cn(
                  "relative flex aspect-square w-full max-w-[348px] items-center justify-center",
                  "lg:absolute lg:top-0 lg:aspect-auto lg:h-[351px] lg:max-w-none",
                  layout.leftClass,
                  layout.widthClass,
                )}
                initial={
                  reduceMotion
                    ? false
                    : {
                        opacity: 0,
                        x: enter.x,
                        y: enter.y,
                        scale: 0.86,
                        rotate: enter.rotate,
                      }
                }
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  scale: 1,
                  rotate: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: reduceMotion ? 0 : 0.9,
                  ease: easeSmooth,
                  delay: enterDelay,
                }}
              >
                <motion.div
                  className="relative flex size-full items-center justify-center will-change-transform"
                  animate={
                    reduceMotion ? undefined : { y: [0, -float.y] }
                  }
                  transition={
                    reduceMotion
                      ? undefined
                      : {
                          duration: float.duration,
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatType: "mirror",
                          delay: enterDelay + 0.95 + float.delay,
                        }
                  }
                >
                  <motion.div
                    className="relative flex size-full items-center justify-center"
                    whileHover={
                      reduceMotion
                        ? undefined
                        : {
                            scale: 1.04,
                            transition: {
                              type: "spring",
                              stiffness: 340,
                              damping: 24,
                            },
                          }
                    }
                  >
                  <motion.div
                    className="pointer-events-none absolute inset-0"
                    aria-hidden
                    initial={reduceMotion ? false : { opacity: 0.4 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      ease: easeSmooth,
                      delay: enterDelay + 0.05,
                    }}
                  >
                    <Image
                      src={card.circle}
                      alt=""
                      width={layout.width}
                      height={351}
                      unoptimized
                      className="size-full object-contain drop-shadow-[0_8px_24px_rgba(23,165,251,0.08)]"
                    />
                  </motion.div>

                  <motion.div
                    className="relative z-10 flex w-full max-w-[270px] flex-col items-center gap-[22px] px-5 text-center sm:px-6"
                    initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.55,
                      ease: easeSmooth,
                      delay: enterDelay + 0.32,
                    }}
                  >
                    <h3 className="text-xl font-medium leading-[1.5] text-black sm:text-2xl">
                      {card.titleLines.map((line) => (
                        <span key={line} className="block">
                          {line}
                        </span>
                      ))}
                    </h3>
                    <p className="text-sm leading-[1.5] text-black sm:text-base">
                      {card.body}
                    </p>
                  </motion.div>
                  </motion.div>
                </motion.div>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
