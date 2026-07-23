"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  DARK_BANNER_CTA_BG,
  darkCtaBannerAssets,
  defaultDarkCtaBannerContent,
} from "@/config/dark-cta-banner-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type DarkCtaBannerSectionProps = {
  heading?: string;
  /** Supporting line under the heading */
  subtext?: string;
  ctaLabel?: string;
  ctaHref?: string;
  ctaExternal?: boolean;
  className?: string;
  id?: string;
};

/**
 * Shared dark CTA banner (Figma: Banner-CTA - Section).
 * Left copy + right outline CTA on dark navy.
 */
export function DarkCtaBannerSection({
  heading = defaultDarkCtaBannerContent.heading,
  subtext = defaultDarkCtaBannerContent.subtext,
  ctaLabel = defaultDarkCtaBannerContent.ctaLabel,
  ctaHref = defaultDarkCtaBannerContent.ctaHref,
  ctaExternal,
  className,
  id = "dark-cta-banner",
}: DarkCtaBannerSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const headingId = `${id}-heading`;
  const isExternal =
    ctaExternal === true || /^https?:\/\//.test(ctaHref);

  return (
    <section
      id={id}
      className={cn(
        "relative overflow-hidden border border-[#081326] font-sans",
        className,
      )}
      style={{ backgroundImage: DARK_BANNER_CTA_BG }}
      aria-labelledby={headingId}
    >
      <div
        className="pointer-events-none absolute -right-8 -top-48 z-0 h-[453px] w-[452px] rounded-full opacity-30 blur-[50px]"
        style={{
          background:
            "radial-gradient(circle, rgba(120,87,255,0.7) 0%, rgba(4,30,76,0.5) 70%, transparent 100%)",
        }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-[8%] top-full z-0 hidden -translate-y-[40%] opacity-40 lg:block"
        aria-hidden
      >
        <div className="rotate-30">
          <Image
            src={darkCtaBannerAssets.deco}
            alt=""
            width={374}
            height={364}
            className="h-[280px] w-[290px] max-w-none object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-5 py-14 sm:px-8 lg:min-h-[247px] lg:px-[112px] lg:py-16">
        <div className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <motion.div
            className="flex max-w-[640px] flex-col gap-1.5"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
          >
            <h2
              id={headingId}
              className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] tracking-[-0.2px] text-white"
            >
              {heading}
            </h2>
            <p className="text-lg font-normal leading-[1.5] text-white">
              {subtext}
            </p>
          </motion.div>

          <motion.div
            className="shrink-0"
            initial={reduceMotion ? false : { opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: easeSmooth, delay: 0.08 }}
          >
            <CtaButton
              href={ctaHref}
              variant="outlineDark"
              className="h-[52px] px-[29px]"
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {ctaLabel}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Preferred short alias for the dark CTA banner section */
export const DarkCtaBanner = DarkCtaBannerSection;
