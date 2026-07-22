"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  lightBannerCtaAssets,
  ppaPlusLightBannerCtaContent,
  type LightBannerCtaContent,
} from "@/config/light-banner-cta-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type LightBannerCtaSectionProps = {
  heading?: string;
  body?: LightBannerCtaContent["body"];
  cta?: LightBannerCtaContent["cta"];
  backgroundSrc?: string;
  className?: string;
  id?: string;
};

/**
 * Shared light banner CTA (Figma: Light -Banner-CTA - Section).
 * Pass heading / body / cta to customize per page.
 */
export function LightBannerCtaSection({
  heading = ppaPlusLightBannerCtaContent.heading,
  body = ppaPlusLightBannerCtaContent.body,
  cta = ppaPlusLightBannerCtaContent.cta,
  backgroundSrc = lightBannerCtaAssets.bannerBg,
  className,
  id = "light-banner-cta",
}: LightBannerCtaSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const headingId = `${id}-heading`;
  const isExternal = cta.external === true || /^https?:\/\//.test(cta.href);

  return (
    <section
      id={id}
      className={cn("relative overflow-hidden font-sans", className)}
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <Image
          src={backgroundSrc}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority={false}
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] items-center px-5 py-14 sm:px-8 lg:min-h-[233px] lg:px-[105px] lg:py-[61px]">
        <div className="flex w-full max-w-[1230px] flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <motion.div
            className="flex w-full max-w-[1062px] flex-col gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.7, ease: easeSmooth }}
          >
            <h2
              id={headingId}
              className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.1] text-black lg:leading-[44px]"
            >
              {heading}
            </h2>
            <p className="max-w-[1062px] text-base leading-[1.5] text-black sm:text-lg">
              {body.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
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
              href={cta.href}
              variant="outline"
              className="h-[52px] px-[29px]"
              {...(isExternal
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {cta.label}
            </CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
