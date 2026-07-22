"use client";

import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
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
};

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
  const height = Math.min(logo.height, logoMaxHeight);
  const width = Math.round(logo.width * (height / logo.height));

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
      <img
        src={logo.src}
        alt={logo.name}
        width={width}
        height={height}
        className="object-contain object-center"
        style={{ width, height, maxWidth: "90%" }}
        decoding="async"
      />
    </motion.li>
  );
}

/**
 * Shared customer logos grid (Figma card: customer logo).
 * Pass `heading` / `rows` to customize per page; defaults to the AZ logo set.
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
}: CustomersLogosSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn(
        "relative w-full overflow-hidden bg-white font-sans",
        className,
      )}
      aria-labelledby={headingId}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center gap-[40px] px-5 py-[50px] sm:px-8 lg:px-0">
        <motion.h2
          id={headingId}
          className="text-center text-[32px] font-normal leading-[1.5] text-black"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: easeSmooth }}
        >
          {heading}
        </motion.h2>

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

        {showCta ? (
          <motion.div
            className="flex w-full justify-center pt-2"
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
