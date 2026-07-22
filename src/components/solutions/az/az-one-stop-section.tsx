"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  AZ_ONE_STOP_ACCENT_GRADIENT,
  AZ_ONE_STOP_DARK_BG,
  azOneStopAssets,
  azOneStopContent,
  type OneStopSectionContent,
} from "@/config/solutions-az-one-stop";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const cardHoverTransition = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.7,
};

function FeatureCard({
  title,
  bullets,
  linkLabel,
  href,
  index,
  reduceMotion,
}: {
  title: string;
  bullets: readonly string[];
  linkLabel: string;
  href: string;
  index: number;
  reduceMotion: boolean;
}) {
  return (
    <motion.div
      className="w-full max-w-[390px]"
      initial={reduceMotion ? false : { opacity: 0, y: 36, x: 28 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.18 + index * 0.14,
      }}
    >
      <motion.article
        className="group/card flex w-full flex-col gap-4 rounded-[12px] border border-transparent bg-white px-[30px] py-[25px] shadow-[0px_10px_28px_rgba(29,140,242,0.14)] will-change-transform"
        initial={false}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -6,
                borderColor: "#17a5fb",
                boxShadow: "0px 18px 42px rgba(29, 140, 242, 0.22)",
              }
        }
        whileTap={reduceMotion ? undefined : { scale: 0.99, y: -2 }}
        transition={cardHoverTransition}
      >
        <div className="w-full">
          <h3 className="text-2xl font-normal leading-[1.5] text-black">
            {title}
          </h3>
          <div className="relative mt-3 h-px w-full max-w-[330px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={azOneStopAssets.titleRule}
              alt=""
              className="absolute inset-0 h-px w-full object-cover"
            />
          </div>
        </div>

        <ul className="mt-2.5 flex flex-col gap-[18px]">
          {bullets.map((bullet, bulletIndex) => (
            <motion.li
              key={bullet}
              className="flex items-start gap-5"
              initial={reduceMotion ? false : { opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : 0.38 + index * 0.14 + bulletIndex * 0.07,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={azOneStopAssets.bullet}
                alt=""
                width={14}
                height={14}
                className="mt-1 size-[14px] shrink-0"
              />
              <p className="min-w-0 flex-1 text-base leading-[1.5] text-black">
                {bullet}
              </p>
            </motion.li>
          ))}
        </ul>

        <div className="mt-2.5 flex flex-col gap-4 pl-[33px]">
          <div className="relative h-px w-full">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={azOneStopAssets.cardRule}
              alt=""
              className="absolute inset-0 h-px w-full object-cover"
            />
          </div>
          <Link
            href={href}
            className="group/details inline-flex w-fit items-center gap-1.5 text-base font-medium tracking-[-0.048px] text-[#17a5fb] transition-colors duration-300 ease-out hover:text-[#0e95ea] active:text-[#0866b8]"
          >
            <span className="transition-colors duration-300 ease-out">
              {linkLabel}
            </span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={azOneStopAssets.linkArrow}
              alt=""
              width={16}
              height={16}
              className="size-4 object-contain transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/details:translate-x-1.5 group-active/details:translate-x-2"
            />
          </Link>
        </div>
      </motion.article>
    </motion.div>
  );
}

function OfferSparkles() {
  return (
    <div className="relative size-[45px] shrink-0" aria-hidden>
      <Image
        src={azOneStopAssets.spark1}
        alt=""
        width={30}
        height={29}
        className="absolute left-[11px] top-[10px] h-[29px] w-[30px]"
      />
      <Image
        src={azOneStopAssets.spark2}
        alt=""
        width={13}
        height={13}
        className="absolute left-[30px] top-[32px] size-[13px]"
      />
      <Image
        src={azOneStopAssets.sparkA}
        alt=""
        width={16}
        height={20}
        className="absolute left-0 top-[10px] h-[20px] w-4 -scale-y-100 rotate-180"
      />
      <Image
        src={azOneStopAssets.sparkB}
        alt=""
        width={16}
        height={20}
        className="absolute left-[29px] top-0 h-[20px] w-4 -scale-y-100 rotate-180"
      />
    </div>
  );
}

type AzOneStopSectionProps = {
  content?: OneStopSectionContent;
  /** PPA+ Figma hides the dark intro banner */
  showDarkBanner?: boolean;
  /** PPA+ Figma hides the offer strip */
  showOffer?: boolean;
};

/** Figma 8200:169791 — one-stop solution + feature cards (shared with PPA+) */
export function AzOneStopSection({
  content = azOneStopContent,
  showDarkBanner = true,
  showOffer = true,
}: AzOneStopSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const { darkBanner, intro, cards, offer, cta } = content;

  return (
    <section className="font-sans" aria-labelledby="az-one-stop-heading">
      {showDarkBanner ? (
        <motion.div
          className="relative overflow-hidden"
          style={{ backgroundImage: AZ_ONE_STOP_DARK_BG }}
          initial={reduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: easeSmooth }}
        >
          <div
            className="pointer-events-none absolute bottom-[-110px] right-[-60px] z-0 hidden opacity-40 sm:block lg:right-[-20px]"
            aria-hidden
          >
            <div className="rotate-[30deg]">
              <Image
                src={azOneStopAssets.deco}
                alt=""
                width={220}
                height={210}
                className="h-[210px] w-[220px] max-w-none object-contain"
              />
            </div>
          </div>

          <div className="relative z-10 mx-auto flex min-h-[247px] w-full max-w-[1440px] flex-col items-center justify-center gap-[25px] px-5 py-12 text-center sm:px-8 lg:px-10">
            <motion.h2
              id="az-one-stop-heading"
              className="whitespace-nowrap text-[clamp(1.125rem,2.5vw,2.25rem)] font-normal leading-none text-white"
              initial={reduceMotion ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeSmooth, delay: 0.08 }}
            >
              {darkBanner.titleBefore}
              <span className="font-medium">{darkBanner.titleHighlight}</span>
              {darkBanner.titleAfter}
            </motion.h2>
            <motion.p
              className="max-w-[1071px] text-base leading-[1.5] text-white sm:text-lg"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeSmooth, delay: 0.16 }}
            >
              {darkBanner.bodyBefore}
              <span className="font-semibold tracking-[-0.054px]">
                {darkBanner.bodyBold}
              </span>
            </motion.p>
          </div>
        </motion.div>
      ) : null}

      <div className="relative bg-white">
        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-5 pb-[60px] pt-12 sm:px-8 lg:flex-row lg:items-center lg:gap-10 lg:px-20 lg:pt-20">
          <motion.div
            className="flex min-w-0 flex-1 flex-col gap-6 lg:pt-[27px]"
            initial={reduceMotion ? false : { opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: easeSmooth }}
          >
            <h3
              id={showDarkBanner ? undefined : "az-one-stop-heading"}
              className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.2px] text-black"
            >
              {intro.headingBefore}
              <span className="font-medium">{intro.headingHighlight}</span>
              {intro.headingAfter}
            </h3>
            <p className="text-base leading-[1.5] text-[#253746] sm:text-lg">
              {intro.body}
            </p>
          </motion.div>

          <div className="flex w-full flex-col items-stretch gap-5 sm:flex-row sm:justify-center lg:w-auto lg:shrink-0">
            {cards.map((card, index) => (
              <FeatureCard
                key={card.id}
                {...card}
                index={index}
                reduceMotion={reduceMotion}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 pb-[60px] sm:px-8 lg:px-20">
          {showOffer ? (
            <motion.div
              className="w-full"
              initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.7, ease: easeSmooth, delay: 0.1 }}
            >
              <motion.div
                className="relative flex min-h-[88px] w-full items-center justify-center overflow-hidden rounded-[14px] border border-[#ebe7ff] px-5 py-5 sm:px-10"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(248,246,255,0.95) 0%, rgba(244,251,255,0.95) 55%, rgba(255,246,251,0.9) 100%)",
                }}
                initial={false}
                whileHover={
                  reduceMotion
                    ? undefined
                    : {
                        borderColor: "rgba(23, 165, 251, 0.35)",
                        boxShadow: "0 12px 32px rgba(29, 140, 242, 0.08)",
                      }
                }
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <Image
                  src={azOneStopAssets.bannerPattern}
                  alt=""
                  fill
                  className="pointer-events-none object-cover opacity-[0.08]"
                />
                <div className="relative flex flex-wrap items-center justify-center gap-4 sm:gap-8">
                  <OfferSparkles />
                  <p className="flex flex-wrap items-baseline justify-center gap-x-2.5 gap-y-1 text-center">
                    <span className="text-[clamp(1.125rem,2.2vw,1.75rem)] font-normal leading-[1.4] tracking-[-0.01em] text-[#253746]/85">
                      {offer.before}
                    </span>
                    <span
                      className="bg-clip-text text-[clamp(1.35rem,2.6vw,2.125rem)] font-semibold leading-[1.2] tracking-[-0.03em] text-transparent"
                      style={{ backgroundImage: AZ_ONE_STOP_ACCENT_GRADIENT }}
                    >
                      {offer.highlight}
                    </span>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ) : null}

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.65,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : 0.2,
            }}
          >
            <CtaButton href={cta.href}>{cta.label}</CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
