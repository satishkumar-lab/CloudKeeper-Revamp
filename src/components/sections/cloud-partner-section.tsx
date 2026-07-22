"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import {
  cloudPartnerAssets,
  defaultCloudPartnerContent,
} from "@/config/cloud-partner-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

export type CloudPartnerSectionProps = {
  heading?: string;
  subheading?: string;
  backgroundSrc?: string;
  className?: string;
  id?: string;
};

/** Figma AWS badge — 73.243 × 78.666 */
function AwsPartnerBadge() {
  return (
    <div
      className="relative h-[78.666px] w-[73.243px] shrink-0 overflow-hidden rounded-[5.859px]"
      aria-label="AWS Partner Premier Tier Services"
    >
      <img
        src={cloudPartnerAssets.aws.bg}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={cloudPartnerAssets.aws.border}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={cloudPartnerAssets.aws.logo}
        alt=""
        width={55}
        height={46}
        className="absolute left-[9.29px] top-[11.27px] h-[45.5px] w-[55.161px]"
        decoding="async"
        aria-hidden
      />
    </div>
  );
}

/** Figma GCP badge — 191.51 × 46.264 */
function GcpPartnerBadge() {
  return (
    <img
      src={cloudPartnerAssets.gcp}
      alt="Google Cloud Partner"
      width={192}
      height={46}
      className="h-[46.264px] w-[191.51px] shrink-0 object-contain object-center"
      decoding="async"
    />
  );
}

/** Figma Microsoft Solutions Partner */
function AzurePartnerBadge() {
  return (
    <div
      className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] leading-none"
      aria-label="Microsoft Solutions Partner"
    >
      <img
        src={cloudPartnerAssets.azure.mark}
        alt=""
        width={38}
        height={38}
        className="col-start-1 row-start-1 ml-0 mt-[1.37px] h-[37.852px] w-[37.833px]"
        decoding="async"
        aria-hidden
      />
      <div className="col-start-1 row-start-1 ml-[48.81px] mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content]">
        <img
          src={cloudPartnerAssets.azure.textTop}
          alt=""
          width={107}
          height={21}
          className="col-start-1 row-start-1 ml-[0.09px] h-[20.647px] w-[106.623px]"
          decoding="async"
          aria-hidden
        />
        <img
          src={cloudPartnerAssets.azure.textBottom}
          alt=""
          width={129}
          height={13}
          className="col-start-1 row-start-1 mt-[26.72px] h-[12.502px] w-[128.972px]"
          decoding="async"
          aria-hidden
        />
      </div>
    </div>
  );
}

function BadgeHover({ children }: { children: ReactNode }) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <motion.div
      whileHover={reduceMotion ? undefined : { scale: 1.04, y: -2 }}
      transition={{ duration: 0.35, ease: easeSmooth }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Shared Cloud Partner Advantage section (Figma 8695:126306).
 * Pass `heading` / `subheading` to customize per page.
 */
export function CloudPartnerSection({
  heading = defaultCloudPartnerContent.heading,
  subheading = defaultCloudPartnerContent.subheading,
  backgroundSrc = cloudPartnerAssets.bg,
  className,
  id = "cloud-partner",
}: CloudPartnerSectionProps = {}) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      className={cn("relative w-full overflow-hidden font-sans", className)}
      aria-labelledby={headingId}
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <Image
          src={backgroundSrc}
          alt=""
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <ScrollRevealGroup className="relative z-10 mx-auto flex w-full max-w-[1270px] flex-col items-center gap-[30px] px-5 py-[29px] sm:px-8 lg:px-0">
        <ScrollRevealItem className="flex w-full flex-col items-center gap-[5px] text-center">
          <h2
            id={headingId}
            className="w-full text-[40px] font-normal leading-[1.5] tracking-[-0.2px] text-black"
          >
            {heading}
          </h2>
          <p className="w-full text-[18px] font-normal leading-[1.5] text-black">
            {subheading}
          </p>
        </ScrollRevealItem>

        <ScrollRevealItem className="flex h-[103px] w-full flex-wrap items-center justify-center gap-[50px]">
          <BadgeHover>
            <AwsPartnerBadge />
          </BadgeHover>
          <BadgeHover>
            <GcpPartnerBadge />
          </BadgeHover>
          <BadgeHover>
            <AzurePartnerBadge />
          </BadgeHover>
        </ScrollRevealItem>
      </ScrollRevealGroup>
    </section>
  );
}
