"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import { CountUp } from "@/components/motion/count-up";
import {
  defaultWhyChooseAwsPunchContent,
  type WhyChooseAwsPunchContent,
} from "@/config/why-choose-aws-punch";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type WhyChooseAwsPunchSectionProps =
  Partial<WhyChooseAwsPunchContent> & {
    className?: string;
    id?: string;
    headingId?: string;
  };

/**
 * **Variant 3 — 4 cards + AWS Premier punch badge** panel.
 * Same layout as PPA+ `PpaPlusStatsSection`.
 */
export function WhyChooseAwsPunchSection({
  headingLines = defaultWhyChooseAwsPunchContent.headingLines,
  cards = defaultWhyChooseAwsPunchContent.cards,
  partner = defaultWhyChooseAwsPunchContent.partner,
  cta = defaultWhyChooseAwsPunchContent.cta,
  className,
  id = "why-choose-aws-punch",
  headingId = "why-choose-aws-punch-heading",
}: WhyChooseAwsPunchSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      id={id}
      className={cn("bg-white font-sans", className)}
      aria-labelledby={headingId}
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-16 sm:px-8 lg:gap-10 lg:px-[100px] lg:py-[70px]">
        <motion.h2
          id={headingId}
          className="w-full text-center text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] text-black"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
        >
          {headingLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </motion.h2>

        <div className="flex w-full flex-col items-stretch gap-[15px] lg:flex-row">
          <motion.ul
            className="grid w-full grid-cols-1 gap-[15px] sm:grid-cols-2 lg:w-[649px] lg:shrink-0"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: easeSmooth, delay: 0.06 }}
          >
            {cards.map((card, index) => (
              <li key={card.id}>
                <motion.div
                  className="relative h-[191.5px] overflow-hidden rounded-[10px] pb-2.5 pl-[30px] pr-2.5 pt-[30px]"
                  style={{ backgroundColor: card.bg }}
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
                  <div className="relative z-10 flex w-[214px] flex-col gap-5">
                    <p
                      className="flex items-center gap-1 text-[36px] font-semibold leading-[52px] tracking-[-2px] text-black"
                      aria-live="polite"
                    >
                      <CountUp
                        target={Number.parseInt(card.value, 10)}
                        suffix={card.suffix}
                      />
                    </p>
                    <p
                      className={cn(
                        "pl-0.5 text-lg leading-[1.5] tracking-[-0.3125px] text-[#253746]",
                        index === 3 && "text-xl leading-[1.3]",
                      )}
                    >
                      {card.label}
                    </p>
                  </div>

                  <div
                    className={cn(
                      "pointer-events-none absolute",
                      card.illustrationClass,
                    )}
                    aria-hidden
                  >
                    <img
                      src={card.illustration}
                      alt=""
                      className="block size-full max-w-none"
                      decoding="async"
                    />
                  </div>
                </motion.div>
              </li>
            ))}
          </motion.ul>

          <motion.aside
            className="flex min-h-[398px] flex-1 flex-col items-center gap-[45px] rounded-[10px] border-[0.4px] border-[rgba(240,240,240,0.7)] bg-[#fbfbfb] px-[30px] py-[50px]"
            initial={reduceMotion ? false : { opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.75, ease: easeSmooth, delay: 0.12 }}
          >
            <div className="flex w-full flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-center sm:gap-[9px] sm:pl-8">
              <div className="relative size-[190px] shrink-0">
                <Image
                  src={partner.awsBadgeSrc}
                  alt="AWS Partner Premier Tier Services"
                  width={190}
                  height={190}
                  className="size-full object-contain"
                />
              </div>

              <ul className="flex w-full max-w-[301px] flex-col gap-[25px] capitalize">
                {partner.competencies.map((item) => (
                  <li key={item} className="flex items-center gap-0">
                    <span
                      className="flex w-[30px] shrink-0 justify-center text-xl leading-[26px] text-[#f90]"
                      aria-hidden
                    >
                      •
                    </span>
                    <span className="text-lg font-medium leading-[26px] text-black">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="w-full text-lg leading-[1.5] text-black">
              {partner.body}
            </p>
          </motion.aside>
        </div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: easeSmooth, delay: 0.16 }}
        >
          <CtaButton href={cta.href} className="h-[52px]">
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
