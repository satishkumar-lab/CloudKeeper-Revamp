"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { CSSProperties } from "react";

import { CtaButton } from "@/components/home/primary-button";
import {
  customersLogosAssets,
  defaultCustomersLogosContent,
  type CustomerLogo,
  type CustomersLogosContent,
} from "@/config/customers-logos-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Nav "Success Stories" destination — no dedicated case-studies route yet. */
const SUCCESS_STORIES_HREF = "/#testimonials";

export type CustomersLogosSectionProps = {
  heading?: string;
  rows?: CustomersLogosContent["rows"];
  className?: string;
  id?: string;
  /** Caps logo render height — smaller reads more polished in dense grids */
  logoMaxHeight?: number;
  /** When false, hides the success-stories CTA under the logo grid. Default true. */
  showCta?: boolean;
  ctaHref?: string;
  ctaLabel?: string;
  /**
   * `grid` — static rows (default, AZ / PPA+ / Why Us).
   * `marquee` — infinite horizontal scroll like home logo row.
   */
  variant?: "grid" | "marquee";
  /**
   * Soft blue wash background (PPA+/AZ asset).
   * Pass `true` for default `/assets/customers/bg.png`, a custom src, or omit for white.
   */
  backgroundSrc?: string | true;
  /** Overrides inner stack spacing (gap / py). Merged after defaults. */
  contentClassName?: string;
};

function LogoImage({
  logo,
  logoMaxHeight,
}: {
  logo: CustomerLogo;
  logoMaxHeight: number;
}) {
  const height = Math.min(logo.height, logoMaxHeight);
  const width = Math.round(logo.width * (height / logo.height));

  return (
    <img
      src={logo.src}
      alt={logo.name}
      width={width}
      height={height}
      className="object-contain object-center"
      style={{ width, height, maxWidth: "none" }}
      decoding="async"
    />
  );
}

function LogoCell({
  logo,
  index,
  reduceMotion,
  logoMaxHeight,
}: {
  logo: CustomerLogo;
  index: number;
  reduceMotion: boolean;
  logoMaxHeight: number;
}) {
  return (
    <motion.li
      className="relative flex min-w-0 flex-1 items-center justify-center"
      style={{ height: Math.max(logoMaxHeight + 16, 48) }}
      initial={reduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : 0.06 + index * 0.05,
      }}
    >
      <LogoImage logo={logo} logoMaxHeight={logoMaxHeight} />
    </motion.li>
  );
}

/** Infinite logo strip — same pause-on-hover pattern as home `LogoRowSection`. */
function LogoMarqueeRow({
  logos,
  logoMaxHeight,
  direction,
  durationSec,
  reduceMotion,
}: {
  logos: readonly CustomerLogo[];
  logoMaxHeight: number;
  direction: "left" | "right";
  durationSec: number;
  reduceMotion: boolean;
}) {
  const loop = [...logos, ...logos];

  return (
    <div
      className="group/marquee relative w-full overflow-hidden"
      style={{
        height: Math.max(logoMaxHeight + 24, 56),
        // Fade to transparent so section BG shows through (no color mismatch)
        maskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
      }}
    >
      <div className="absolute left-0 top-1/2 w-max -translate-y-1/2">
        <div
          className={cn(
            "logo-marquee-track flex w-max items-center gap-10 sm:gap-14 lg:gap-16",
            !reduceMotion && "motion-reduce:animate-none",
          )}
          style={
            reduceMotion
              ? undefined
              : ({
                  animation: `marquee ${durationSec}s linear infinite${
                    direction === "right" ? " reverse" : ""
                  }`,
                } satisfies CSSProperties)
          }
        >
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-2"
              aria-hidden={i >= logos.length}
            >
              <LogoImage logo={logo} logoMaxHeight={logoMaxHeight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Shared customer logos section (Figma card: customer logo).
 * Pass `heading` / `rows` to customize per page; defaults to the AZ logo set.
 * Use `variant="marquee"` for home-style infinite scroll.
 */
export function CustomersLogosSection({
  heading = defaultCustomersLogosContent.heading,
  rows = defaultCustomersLogosContent.rows,
  className,
  id = "customers-logos",
  logoMaxHeight = 48,
  showCta = true,
  ctaHref = SUCCESS_STORIES_HREF,
  ctaLabel = "See all success stories",
  variant = "grid",
  backgroundSrc,
  contentClassName,
}: CustomersLogosSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const headingId = `${id}-heading`;
  const isMarquee = variant === "marquee";
  const bgSrc =
    backgroundSrc === true
      ? customersLogosAssets.bg
      : backgroundSrc || undefined;
  const hasBg = Boolean(bgSrc);

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden font-sans",
        !hasBg && "bg-white",
        className,
      )}
      aria-labelledby={headingId}
    >
      {bgSrc ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <Image
            src={bgSrc}
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ) : null}

      <div
        className={cn(
          "relative z-10 mx-auto flex w-full flex-col items-center gap-[40px] py-[50px]",
          isMarquee
            ? "max-w-[1440px] px-0"
            : "max-w-[1280px] px-5 sm:px-8 lg:px-0",
          contentClassName,
        )}
      >
        <motion.h2
          id={headingId}
          className={cn(
            "text-center text-[32px] font-normal leading-[1.5] text-black",
            isMarquee && "px-5 sm:px-8",
          )}
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
        >
          {heading}
        </motion.h2>

        {isMarquee ? (
          <LogoMarqueeRow
            logos={rows.flat()}
            logoMaxHeight={logoMaxHeight}
            direction="left"
            durationSec={40}
            reduceMotion={reduceMotion}
          />
        ) : (
          <div className="flex w-full flex-col gap-8 lg:gap-10">
            {rows.map((row, rowIndex) => (
              <ul
                key={`row-${rowIndex}`}
                className="flex w-full flex-col gap-[30px] sm:flex-row sm:items-center sm:gap-[30px]"
              >
                {row.map((logoItem, logoIndex) => (
                  <LogoCell
                    key={logoItem.name}
                    logo={logoItem}
                    index={rowIndex * 6 + logoIndex}
                    reduceMotion={reduceMotion}
                    logoMaxHeight={logoMaxHeight}
                  />
                ))}
              </ul>
            ))}
          </div>
        )}

        {showCta ? (
          <motion.div
            className={cn(
              "flex w-full justify-center pt-2",
              isMarquee && "px-5 sm:px-8",
            )}
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.1 }}
          >
            <CtaButton href={ctaHref}>{ctaLabel}</CtaButton>
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}
