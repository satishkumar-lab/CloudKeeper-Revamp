"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import {
  solutionsPpaPlusAssets,
  solutionsPpaPlusWhatIsPpa,
} from "@/config/solutions-ppa-plus";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Figma 8200:166804 — What is the AWS PPA */
export function PpaPlusWhatIsPpaSection() {
  const reduceMotion = useReducedMotion() === true;
  const { heading, body, factorsLabel, factors } = solutionsPpaPlusWhatIsPpa;

  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      aria-labelledby="ppa-plus-what-is-heading"
    >
      <div
        className="pointer-events-none absolute bottom-0 -right-[100px] z-0 hidden lg:block"
        aria-hidden
      >
        <div className="translate-y-[80%] rotate-[68.69deg]">
          <Image
            src={solutionsPpaPlusAssets.whatIsPpa.bgDeco}
            alt=""
            width={632}
            height={729}
            className="h-auto w-[min(632px,55vw)] max-w-none object-contain opacity-30"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-12 px-5 py-16 sm:px-8 lg:gap-[50px] lg:px-[110px] lg:py-20">
        <div className="flex w-full max-w-[1280px] flex-col items-center gap-2.5 text-center">
          <motion.h2
            id="ppa-plus-what-is-heading"
            className="w-full text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5] text-black"
            initial={reduceMotion ? false : { opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
          >
            {heading}
          </motion.h2>
          <motion.p
            className="max-w-[1138px] text-base leading-[1.5] text-black sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.06 }}
          >
            {body}
          </motion.p>
        </div>

        <div className="flex w-full max-w-[1280px] flex-col items-center gap-12 lg:gap-[50px]">
          <motion.div
            className="flex w-full max-w-[808px] items-center justify-center gap-2.5"
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: easeSmooth, delay: 0.1 }}
          >
            <div
              className="h-0.5 w-10 shrink-0 bg-gradient-to-r from-transparent to-[#d9d9d9] sm:w-[100px]"
              aria-hidden
            />
            <p className="shrink-0 text-center text-base leading-[1.5] text-black sm:text-xl">
              {factorsLabel}
            </p>
            <div
              className="h-0.5 w-10 shrink-0 bg-gradient-to-r from-[#d9d9d9] to-transparent sm:w-[100px]"
              aria-hidden
            />
          </motion.div>

          <ul className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
            {factors.map((factor, index) => (
              <motion.li
                key={factor.id}
                className={cn(
                  "flex items-start justify-center py-2.5",
                  index > 0 && "lg:border-l lg:border-[#e6ecf1] lg:pl-[30px]",
                )}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{
                  duration: 0.7,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : 0.14 + index * 0.1,
                }}
              >
                <motion.div
                  className="flex w-full flex-col items-start gap-[30px] pl-0 sm:pl-5 lg:pl-5"
                  whileHover={
                    reduceMotion
                      ? undefined
                      : {
                          y: -4,
                          transition: {
                            type: "spring",
                            stiffness: 320,
                            damping: 22,
                          },
                        }
                  }
                >
                  <div className="relative size-[46px] shrink-0">
                    <Image
                      src={factor.icon}
                      alt=""
                      width={46}
                      height={46}
                      unoptimized
                      className="size-full object-contain"
                    />
                  </div>
                  <p className="text-base leading-[1.5] text-black">
                    {factor.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </motion.div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
