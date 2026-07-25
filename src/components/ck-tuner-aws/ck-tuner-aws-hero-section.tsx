"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  CK_TUNER_AWS_HEADING_GRADIENT,
  ckTunerAwsAssets,
  ckTunerAwsHero,
} from "@/config/ck-tuner-aws";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function Breadcrumbs({ reduceMotion }: { reduceMotion: boolean }) {
  const items = ckTunerAwsHero.breadcrumbs;

  return (
    <motion.nav
      aria-label="Breadcrumb"
      className="flex items-center gap-1.5"
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: easeSmooth }}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <div key={item.label} className="flex items-center gap-1.5">
            {index > 0 ? (
              <span
                className="relative flex h-2 w-1 shrink-0 items-center justify-center"
                aria-hidden
              >
                <Image
                  src={ckTunerAwsAssets.breadcrumbChevron}
                  alt=""
                  width={8}
                  height={4}
                  className="h-1 w-2 -rotate-90 object-contain"
                />
              </span>
            ) : null}

            {"href" in item && item.href && !isLast ? (
              <Link
                href={item.href}
                className="text-sm font-medium leading-5 text-[#17a5fb] transition-colors hover:text-[#0e95ea]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-sm font-medium leading-5 text-[#828282]"
                aria-current={isLast ? "page" : undefined}
              >
                {item.label}
              </span>
            )}
          </div>
        );
      })}
    </motion.nav>
  );
}

function HeroDeco({
  className,
  rotateClass,
  reduceMotion,
  delay = 0,
  floatY = 10,
}: {
  className?: string;
  rotateClass: string;
  reduceMotion: boolean;
  delay?: number;
  floatY?: number;
}) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute z-0 hidden opacity-30 sm:block",
        className,
      )}
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={
        reduceMotion
          ? { opacity: 0.3 }
          : { opacity: 0.3, scale: 1, y: [0, -floatY, 0] }
      }
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 1, ease: easeSmooth, delay },
              scale: { duration: 1, ease: easeSmooth, delay },
              y: {
                duration: 6,
                ease: "easeInOut",
                repeat: Infinity,
                delay: delay + 0.8,
              },
            }
      }
    >
      <div className={cn("origin-center", rotateClass)}>
        <Image
          src={ckTunerAwsAssets.heroDeco}
          alt=""
          width={208}
          height={199}
          className="h-auto w-[182px] max-w-none object-contain lg:w-[208px]"
          priority
        />
      </div>
    </motion.div>
  );
}

/** Figma 396:36100 — CK Tuner - AWS main banner */
export function CkTunerAwsHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white from-[75%] to-[#f3faff] font-sans"
      aria-labelledby="ck-tuner-aws-hero-heading"
    >
      <HeroDeco
        className="right-[-120px] top-[80px] lg:right-[-90px] lg:top-[100px]"
        rotateClass="rotate-[30deg]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={12}
      />
      <HeroDeco
        className="bottom-[-60px] left-[-140px] lg:bottom-[-40px] lg:left-[-110px]"
        rotateClass="rotate-[124deg]"
        reduceMotion={reduceMotion}
        delay={0.5}
        floatY={8}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-12 pt-10 sm:px-8 lg:px-10 lg:pb-16 lg:pt-10">
        <Breadcrumbs reduceMotion={reduceMotion} />

        <div className="mx-auto mt-10 flex max-w-[1274px] flex-col items-center gap-[50px] lg:mt-[40px] lg:gap-[60px]">
          <div className="flex w-full flex-col items-center gap-[50px]">
            <div className="flex w-full flex-col items-center gap-3.5">
              <motion.span
                className="rounded-full border-[0.7px] border-[rgba(247,159,207,0.4)] bg-white px-3 py-2 text-sm capitalize leading-[27px] tracking-[0.1px] text-[#e80584]"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeSmooth }}
              >
                {ckTunerAwsHero.pageTag}
              </motion.span>

              <h1
                id="ck-tuner-aws-hero-heading"
                className="flex w-full flex-col items-center text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal tracking-[-0.5px] lg:text-[44px]"
              >
                <motion.span
                  className="leading-[1.3] text-black"
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    ease: easeSmooth,
                    delay: 0.08,
                  }}
                >
                  {ckTunerAwsHero.headingLine1}
                </motion.span>
                <motion.span
                  className="bg-clip-text leading-[1.3] text-transparent"
                  style={{ backgroundImage: CK_TUNER_AWS_HEADING_GRADIENT }}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.75,
                    ease: easeSmooth,
                    delay: 0.18,
                  }}
                >
                  {ckTunerAwsHero.headingGradient}
                </motion.span>
              </h1>
            </div>

            <ul className="mx-auto flex w-full max-w-[1080px] flex-col items-stretch gap-6 py-1.5 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
              {ckTunerAwsHero.stats.map((stat, index) => (
                <motion.li
                  key={stat.label}
                  className={cn(
                    "flex flex-1 flex-col items-center text-center text-black",
                    index < ckTunerAwsHero.stats.length - 1 &&
                      "sm:border-r sm:border-[#ffbee1]",
                  )}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: easeSmooth,
                    delay: reduceMotion ? 0 : 0.28 + index * 0.08,
                  }}
                >
                  <p className="text-2xl font-medium leading-[1.5]">
                    {stat.value}
                  </p>
                  <p className="max-w-[279px] text-base leading-[26px]">
                    {stat.label}
                  </p>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={
                reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }
              }
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.65,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : 0.52,
              }}
            >
              <CtaButton href={ckTunerAwsHero.cta.href}>
                {ckTunerAwsHero.cta.label}
              </CtaButton>
            </motion.div>
          </div>

          <motion.div
            className="relative w-full max-w-[1274px]"
            initial={reduceMotion ? false : { opacity: 0, y: 36, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.9,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : 0.62,
            }}
          >
            {/* Soft glow behind diagram — Figma atmosphere */}
            <div
              className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b8e4ff] opacity-40 blur-[80px]"
              aria-hidden
            />
            <Image
              src={ckTunerAwsAssets.heroDiagram}
              alt={ckTunerAwsHero.diagramAlt}
              width={2548}
              height={936}
              className="relative z-10 h-auto w-full object-contain"
              priority
              sizes="(max-width: 1274px) 100vw, 1274px"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
