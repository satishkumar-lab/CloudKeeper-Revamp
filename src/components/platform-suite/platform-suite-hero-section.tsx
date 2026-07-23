"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  PLATFORM_SUITE_HEADING_GRADIENT,
  platformSuiteAssets,
  platformSuiteHero,
} from "@/config/platform-suite";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function Breadcrumbs({ reduceMotion }: { reduceMotion: boolean }) {
  const items = platformSuiteHero.breadcrumbs;

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
                  src={platformSuiteAssets.breadcrumbChevron}
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
        "pointer-events-none absolute z-0 hidden opacity-40 sm:block",
        className,
      )}
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
      animate={
        reduceMotion
          ? { opacity: 0.4 }
          : {
              opacity: 0.4,
              scale: 1,
              y: [0, -floatY, 0],
            }
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
          src={platformSuiteAssets.heroDeco}
          alt=""
          width={208}
          height={199}
          className="h-auto w-[208px] max-w-none object-contain"
          priority
        />
      </div>
    </motion.div>
  );
}

/** Figma 147:42713 — Platform Suite hero (updated) */
export function PlatformSuiteHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white from-[31%] via-white via-[60%] to-[#f3faff] to-[108%] font-sans"
      aria-labelledby="platform-suite-hero-heading"
    >
      {/* Right deco — 20% smaller, lower, nudged left vs AZ default */}
      <HeroDeco
        className="right-[-70px] top-[calc(12px+20%)] scale-[0.8] lg:right-[-40px] lg:top-[calc(20px+20%)]"
        rotateClass="rotate-[30deg]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={12}
      />
      <HeroDeco
        className="bottom-[-40px] left-[-140px] lg:bottom-[-24px] lg:left-[-110px]"
        rotateClass="rotate-[124deg]"
        reduceMotion={reduceMotion}
        delay={0.5}
        floatY={8}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-10 sm:px-8 lg:min-h-[541px] lg:px-10 lg:pb-[66px] lg:pt-10">
        <Breadcrumbs reduceMotion={reduceMotion} />

        <div className="mx-auto mt-10 flex max-w-[1228px] flex-col items-center gap-[50px] lg:mt-[40px] lg:gap-[60px]">
          <div className="flex w-full flex-col items-center gap-[50px]">
            <div className="flex w-full flex-col items-center gap-3.5">
              <motion.span
                className="rounded-full border-[0.7px] border-[rgba(247,159,207,0.4)] bg-white px-3 py-[3px] text-sm capitalize leading-[27px] tracking-[0.1px] text-[#e80584]"
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: easeSmooth }}
              >
                {platformSuiteHero.pageTag}
              </motion.span>

              <h1
                id="platform-suite-hero-heading"
                className="flex w-full flex-col items-center text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.3] tracking-[-0.5px] lg:text-[44px]"
              >
                <motion.span
                  className="text-black"
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: easeSmooth, delay: 0.08 }}
                >
                  {platformSuiteHero.headingLine1}
                </motion.span>
                <motion.span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: PLATFORM_SUITE_HEADING_GRADIENT }}
                  initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, ease: easeSmooth, delay: 0.18 }}
                >
                  {platformSuiteHero.headingGradient}
                </motion.span>
              </h1>
            </div>

            <ul className="mx-auto flex w-full max-w-[1080px] flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
              {platformSuiteHero.stats.map((stat, index) => (
                <motion.li
                  key={stat.label}
                  className={cn(
                    "flex w-full flex-col items-center gap-2.5 py-1.5 text-center text-black sm:w-[360px] sm:shrink-0",
                    index < platformSuiteHero.stats.length - 1 &&
                      "sm:border-r-[0.7px] sm:border-[#ffbee1]",
                  )}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: easeSmooth,
                    delay: reduceMotion ? 0 : 0.32 + index * 0.1,
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
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.65,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : 0.62,
            }}
          >
            <CtaButton href={platformSuiteHero.cta.href}>
              {platformSuiteHero.cta.label}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
