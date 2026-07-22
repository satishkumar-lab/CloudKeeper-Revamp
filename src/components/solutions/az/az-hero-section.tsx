"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  SOLUTIONS_AZ_HEADING_GRADIENT,
  solutionsAzAssets,
  solutionsAzHero,
} from "@/config/solutions-az";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function Breadcrumbs({ reduceMotion }: { reduceMotion: boolean }) {
  const items = solutionsAzHero.breadcrumbs;

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
                  src={solutionsAzAssets.breadcrumbChevron}
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
          src={solutionsAzAssets.heroDeco}
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

/** Figma 8200:169675 — Hero-Banner-Inner pages */
export function AzHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-hidden bg-gradient-to-b from-white via-white to-[#f3faff] font-sans"
      aria-labelledby="az-hero-heading"
    >
      {/* Figma 8200:169700 — top-right ribbon */}
      <HeroDeco
        className="right-[-120px] top-[12px] lg:right-[-90px] lg:top-[20px]"
        rotateClass="rotate-[30deg]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={12}
      />
      {/* Figma 8200:169701 — bottom-left ribbon */}
      <HeroDeco
        className="bottom-[-40px] left-[-140px] lg:bottom-[-24px] lg:left-[-110px]"
        rotateClass="rotate-[124deg]"
        reduceMotion={reduceMotion}
        delay={0.5}
        floatY={8}
      />

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-5 pb-16 pt-10 sm:px-8 lg:min-h-[526px] lg:px-10 lg:pb-[72px] lg:pt-10">
        <Breadcrumbs reduceMotion={reduceMotion} />

        <div className="mx-auto mt-10 flex max-w-[1223px] flex-col items-center gap-[50px] lg:mt-[52px] lg:gap-[60px]">
          <div className="flex w-full flex-col items-center gap-[50px]">
            <h1
              id="az-hero-heading"
              className="flex w-full flex-col items-center gap-1 text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-[1.25] tracking-[-0.5px] lg:gap-0 lg:leading-[1.3]"
            >
              <motion.span
                className="text-black"
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeSmooth, delay: 0.08 }}
              >
                {solutionsAzHero.headingLine1}
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: SOLUTIONS_AZ_HEADING_GRADIENT }}
                initial={reduceMotion ? false : { opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeSmooth, delay: 0.18 }}
              >
                {solutionsAzHero.headingGradient}
              </motion.span>
            </h1>

            <ul className="mx-auto flex w-full max-w-[1223px] flex-col items-center gap-6 sm:flex-row sm:items-stretch sm:justify-center sm:gap-0">
              {solutionsAzHero.highlights.map((item, index) => (
                <motion.li
                  key={item.lines[0]}
                  className={cn(
                    "flex w-full items-center justify-center py-1.5 text-center text-black sm:w-[360px] sm:shrink-0",
                    index < solutionsAzHero.highlights.length - 1 &&
                      "sm:border-r sm:border-[#ffbee1]",
                  )}
                  initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    ease: easeSmooth,
                    delay: reduceMotion ? 0 : 0.32 + index * 0.1,
                  }}
                >
                  <p className="w-full max-w-[279px] text-base leading-[1.5] sm:text-[20px]">
                    {item.lines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
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
            <CtaButton href={solutionsAzHero.cta.href}>
              {solutionsAzHero.cta.label}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
