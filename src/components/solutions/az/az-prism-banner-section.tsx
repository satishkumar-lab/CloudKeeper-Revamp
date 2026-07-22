"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

import { CtaButton } from "@/components/home/primary-button";
import {
  AZ_PRISM_BANNER_BG,
  AZ_PRISM_NAME_GRADIENT,
  azPrismBannerAssets,
  azPrismBannerContent,
  type PrismBannerContent,
} from "@/config/solutions-az-prism-banner";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

function BannerDeco({
  className,
  rotateClass,
  sizeClass,
  reduceMotion,
  delay = 0,
  floatY = 10,
}: {
  className?: string;
  rotateClass: string;
  sizeClass: string;
  reduceMotion: boolean;
  delay?: number;
  floatY?: number;
}) {
  return (
    <motion.div
      className={cn(
        "pointer-events-none absolute z-0 hidden opacity-20 sm:block",
        className,
      )}
      aria-hidden
      initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
      whileInView={
        reduceMotion
          ? { opacity: 0.2 }
          : { opacity: 0.2, scale: 1, y: [0, -floatY] }
      }
      viewport={{ once: true }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              opacity: { duration: 0.9, ease: easeSmooth, delay },
              scale: { duration: 0.9, ease: easeSmooth, delay },
              y: {
                duration: 3.6,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
                delay: delay + 0.9,
              },
            }
      }
    >
      <div className={rotateClass}>
        <Image
          src={azPrismBannerAssets.deco}
          alt=""
          width={320}
          height={290}
          className={cn("max-w-none object-contain", sizeClass)}
        />
      </div>
    </motion.div>
  );
}

type AzPrismBannerSectionProps = {
  content?: PrismBannerContent;
};

/** Figma 8200:169865 — Banner-CTA Prism section (shared with PPA+) */
export function AzPrismBannerSection({
  content = azPrismBannerContent,
}: AzPrismBannerSectionProps = {}) {
  const reduceMotion = useReducedMotion() === true;
  const { headingLine1Before, brand, headingLine2, body, cta } = content;

  return (
    <section
      className="relative overflow-hidden border border-[#081326] font-sans"
      style={{ backgroundImage: AZ_PRISM_BANNER_BG }}
      aria-labelledby="az-prism-banner-heading"
    >
      <div
        className="pointer-events-none absolute -right-16 -top-24 z-0 h-[320px] w-[320px] rounded-full opacity-50 blur-[80px]"
        style={{
          background:
            "radial-gradient(circle, rgba(120,87,255,0.45) 0%, rgba(23,165,251,0.18) 42%, transparent 70%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 top-8 z-0 h-[180px] w-[180px] rounded-full opacity-40 blur-[50px]"
        style={{
          background:
            "radial-gradient(circle, rgba(237,0,130,0.22) 0%, transparent 68%)",
        }}
        aria-hidden
      />

      <BannerDeco
        className="bottom-[-120px] left-[-180px] lg:left-[-120px]"
        rotateClass="rotate-[30deg]"
        sizeClass="h-[280px] w-[300px]"
        reduceMotion={reduceMotion}
        delay={0.2}
        floatY={8}
      />
      <BannerDeco
        className="right-[-160px] top-[-140px] lg:right-[-100px]"
        rotateClass="rotate-[-145deg]"
        sizeClass="h-[220px] w-[250px]"
        reduceMotion={reduceMotion}
        delay={0.35}
        floatY={6}
      />

      <div className="relative z-10 mx-auto flex min-h-[340px] w-full max-w-[1440px] flex-col items-center justify-center gap-10 px-5 py-12 text-center sm:px-8 lg:px-10">
        <motion.div
          className="flex w-full max-w-[1100px] flex-col items-center gap-5"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.75, ease: easeSmooth }}
        >
          <h2
            id="az-prism-banner-heading"
            className="text-[clamp(1.5rem,3.2vw,2.5rem)] font-normal leading-[1.3] text-white"
          >
            {headingLine1Before}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: AZ_PRISM_NAME_GRADIENT }}
            >
              {brand}
            </span>
            <br />
            {headingLine2}
          </h2>
          <p className="w-full whitespace-nowrap text-[clamp(0.7rem,1.35vw,1.125rem)] font-normal leading-none text-white/95">
            {body}
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.65,
            ease: easeSmooth,
            delay: reduceMotion ? 0 : 0.18,
          }}
        >
          <CtaButton href={cta.href} variant="outlineDark" className="h-[52px]">
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
