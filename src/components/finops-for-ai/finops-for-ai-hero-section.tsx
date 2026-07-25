"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  FINOPS_FOR_AI_HEADING_GRADIENT,
  FINOPS_FOR_AI_STAT_CARD,
  finopsForAiAssets,
  finopsForAiHero,
  type FinopsForAiHeroCard,
} from "@/config/finops-for-ai";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;
const hoverEase = "cubic-bezier(0.22, 1, 0.36, 1)";

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
          src={finopsForAiAssets.heroDeco}
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

function Breadcrumbs({ reduceMotion }: { reduceMotion: boolean }) {
  const items = finopsForAiHero.breadcrumbs;

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
                  src={finopsForAiAssets.breadcrumbChevron}
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
                className="text-sm font-medium leading-5 text-[#4398d7] transition-colors hover:text-[#17a5fb]"
              >
                {item.label}
              </Link>
            ) : (
              <span
                className="text-sm font-medium leading-5 text-[#777]"
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

/**
 * Same card chrome as Why Us (Figma 21:8986 — card:unused_resources).
 * FinOps for AI uses icon + body copy (no big stat value).
 */
function FeatureCard({
  card,
  index,
  reduceMotion,
}: {
  card: FinopsForAiHeroCard;
  index: number;
  reduceMotion: boolean;
}) {
  const { width, height, hoverBleed } = FINOPS_FOR_AI_STAT_CARD;

  return (
    <motion.article
      className="group/stat relative shrink-0 overflow-visible"
      style={{
        width: width + hoverBleed * 2,
        height: height + hoverBleed * 2,
        padding: hoverBleed,
      }}
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.28 + index * 0.08,
      }}
    >
      <div className="relative size-full overflow-visible">
        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-[5px] border border-solid border-[#ffbee1]",
            "left-[4px] top-[1px] h-[208px] w-[265px]",
            "transition-[left,top,width,height,border-radius,box-shadow] duration-300",
            "group-hover/stat:left-[-10px] group-hover/stat:top-[-9px]",
            "group-hover/stat:h-[213px] group-hover/stat:w-[270px] group-hover/stat:rounded-[8px]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        />

        <div
          aria-hidden
          className={cn(
            "pointer-events-none absolute rounded-[5px] border border-solid border-[rgba(23,158,255,0.6)]",
            "left-[2px] top-[1px] h-[211px] w-[267px]",
            "transition-[left,top,width,height,border-radius] duration-300",
            "group-hover/stat:left-[9px] group-hover/stat:top-[10px]",
            "group-hover/stat:h-[212px] group-hover/stat:w-[271px] group-hover/stat:rounded-[8px]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        />

        <div
          className={cn(
            "relative z-10 flex flex-col items-start overflow-hidden",
            "h-[213px] w-[271px] rounded-[6px] border border-[#f1f1f1] bg-white",
            "gap-[30px] px-[30px] py-10 text-black",
            "shadow-[0px_2px_12px_0px_rgba(41,41,41,0.05)]",
            "transition-[border-radius,border-color,background,box-shadow,color,filter] duration-300",
            "group-hover/stat:rounded-[11px] group-hover/stat:border-transparent",
            "group-hover/stat:bg-gradient-to-b group-hover/stat:from-white group-hover/stat:from-[69%] group-hover/stat:to-[#fff2f9]",
            "group-hover/stat:text-[#e80584]",
            "group-hover/stat:shadow-[-1px_5px_4px_0px_rgba(0,0,0,0.06)]",
            "group-hover/stat:drop-shadow-[0px_4px_2px_rgba(0,0,0,0.25)]",
          )}
          style={{ transitionTimingFunction: hoverEase }}
        >
          <div className="relative flex size-[46px] shrink-0 items-center justify-center overflow-visible">
            <img
              src={card.icon}
              alt=""
              width={card.iconWidth}
              height={card.iconHeight}
              className="block max-h-[46px] max-w-[46px] object-contain object-center"
              style={{
                width: card.iconWidth,
                height: card.iconHeight,
              }}
              decoding="async"
            />
          </div>

          <p className="w-full text-base font-normal leading-7 tracking-[-0.3px] text-inherit">
            {card.lines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

/** Figma 8141:134929 — Header_com (Why Us staggered 4-card hero pattern) */
export function FinopsForAiHeroSection() {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      className="relative overflow-x-clip overflow-y-visible bg-gradient-to-b from-white via-white to-[#f3faff] font-sans"
      aria-labelledby="finops-for-ai-hero-heading"
    >
      <HeroDeco
        className="right-[-100px] top-[200px] lg:right-[-80px] lg:top-[220px]"
        rotateClass="-rotate-[30deg]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={12}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col px-5 pb-16 pt-[52px] sm:px-8 lg:min-h-[694px] lg:px-[46px] lg:pb-20 lg:pt-[52px]">
        <Breadcrumbs reduceMotion={reduceMotion} />

        <div className="mx-auto flex w-full max-w-[1229px] flex-col items-center gap-[60px] pt-10 lg:pt-[67px]">
          <div className="flex w-full max-w-[996px] flex-col items-center gap-0 text-center">
            <h1
              id="finops-for-ai-hero-heading"
              className="w-full text-[clamp(1.5rem,3.2vw,2.75rem)] font-normal leading-[1.5] tracking-[-0.5px]"
            >
              <motion.span
                className="text-black"
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeSmooth, delay: 0.08 }}
              >
                {finopsForAiHero.headingPrefix}
              </motion.span>
              <motion.span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: FINOPS_FOR_AI_HEADING_GRADIENT }}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, ease: easeSmooth, delay: 0.18 }}
              >
                {finopsForAiHero.headingGradient}
              </motion.span>
            </h1>

            <motion.p
              className="max-w-[723px] text-lg leading-[1.5] text-black sm:text-xl"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: easeSmooth, delay: 0.24 }}
            >
              {finopsForAiHero.subtitle}
            </motion.p>
          </div>

          <div className="flex w-full flex-col items-center gap-[60px]">
            <ul className="flex w-full max-w-[1229px] flex-col items-center gap-4 overflow-visible sm:flex-row sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-8 lg:h-[263px] lg:flex-nowrap lg:items-start lg:justify-between lg:gap-0">
              {finopsForAiHero.cards.map((card, index) => (
                <li
                  key={card.lines[0]}
                  className={cn(
                    "flex shrink-0 justify-center overflow-visible",
                    card.offsetY === 49.5 && "lg:mt-[49.5px]",
                    card.offsetY === 39.5 && "lg:mt-[39.5px]",
                  )}
                >
                  <FeatureCard
                    card={card}
                    index={index}
                    reduceMotion={reduceMotion}
                  />
                </li>
              ))}
            </ul>

            <motion.div
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : 0.55,
              }}
            >
              <CtaButton href={finopsForAiHero.cta.href} className="h-[52px]">
                {finopsForAiHero.cta.label}
              </CtaButton>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
