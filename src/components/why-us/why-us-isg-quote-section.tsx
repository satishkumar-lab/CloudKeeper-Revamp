"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  WHY_US_ISG_QUOTE_BG,
  whyUsIsgQuoteAssets,
  whyUsIsgQuoteContent,
} from "@/config/why-us-isg-quote";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function QuoteMark({
  className,
  flip,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute select-none",
        flip && "rotate-180",
        className,
      )}
      aria-hidden
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={whyUsIsgQuoteAssets.quote}
        alt=""
        width={48}
        height={40}
        className="h-8 w-10 opacity-90 sm:h-10 sm:w-12"
        decoding="async"
      />
    </span>
  );
}

/** Figma 58:15496 — ISG Research mid-page quote strip */
export function WhyUsIsgQuoteSection() {
  const reduceMotion = useReducedMotion() === true;
  const { quoteBefore, quoteAfter, logoAlt, cta } = whyUsIsgQuoteContent;

  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{ backgroundImage: WHY_US_ISG_QUOTE_BG }}
      aria-label="ISG Research recognition"
    >
      {/* Abstract decor — Figma bottom-right, rotated */}
      <motion.div
        className="pointer-events-none absolute -right-8 bottom-[-40%] hidden h-[360px] w-[370px] opacity-40 sm:block lg:-right-6 lg:bottom-[-55%] lg:h-[420px] lg:w-[430px]"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
        whileInView={
          reduceMotion
            ? { opacity: 0.4 }
            : { opacity: 0.4, scale: 1, y: [0, -12, 0] }
        }
        viewport={{ once: true }}
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                opacity: { duration: 1, ease: easeSmooth },
                scale: { duration: 1, ease: easeSmooth },
                y: {
                  duration: 5.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "mirror",
                  delay: 0.8,
                },
              }
        }
      >
        <div className="size-full rotate-[30deg]">
          <Image
            src={whyUsIsgQuoteAssets.decor}
            alt=""
            width={430}
            height={420}
            className="size-full max-w-none object-contain"
          />
        </div>
      </motion.div>

      <div className="relative z-10 mx-auto flex min-h-[260px] w-full max-w-[1230px] flex-col items-center justify-end gap-10 px-5 pb-9 pt-[76px] sm:min-h-[320px] sm:px-8 sm:pb-11 sm:pt-[92px] lg:px-0 lg:pb-[52px] lg:pt-[80px]">
        <motion.blockquote
          className="relative max-w-[1071px] text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: easeSmooth,
          }}
        >
          <QuoteMark className="-left-1 -top-3 sm:-left-6 sm:-top-4 lg:-left-10" />
          <QuoteMark
            flip
            className="-bottom-2 -right-1 sm:-bottom-3 sm:-right-6 lg:-right-10"
          />

          <p className="text-[clamp(1.25rem,2.8vw,2rem)] font-normal leading-[1.5] text-white">
            {quoteBefore}{" "}
            <span className="mx-1.5 inline-flex translate-y-[-0.08em] align-middle sm:mx-2.5">
              <Image
                src={whyUsIsgQuoteAssets.logo}
                alt={logoAlt}
                width={280}
                height={60}
                className="h-[38px] w-auto object-contain object-left mix-blend-screen sm:h-[50px] lg:h-[58px]"
                priority={false}
              />
            </span>{" "}
            {quoteAfter}
          </p>
        </motion.blockquote>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: easeSmooth,
            delay: reduceMotion ? 0 : 0.12,
          }}
        >
          <CtaButton
            href={cta.href}
            variant="outlineDark"
            className="h-[52px]"
          >
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
