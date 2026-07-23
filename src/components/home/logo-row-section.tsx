"use client";

import { logoRowAssets } from "@/config/logo-row";
import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import { cn } from "@/lib/utils";

/** Figma 8251:20339 — G2 trust block */
function G2TrustBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-[13px] border-r border-solid border-[#c9e4ff] pr-[60px]",
        className,
      )}
    >
      <div className="relative size-[52px] shrink-0">
        <img
          src={logoRowAssets.g2BadgeBg}
          alt=""
          className="absolute inset-0 size-full"
          width={52}
          height={52}
          decoding="async"
        />
        <img
          src={logoRowAssets.g2Logo}
          alt=""
          className="absolute left-4 top-4 h-[20.591px] w-[19.995px]"
          width={20}
          height={21}
          decoding="async"
        />
      </div>

      <div className="flex flex-col gap-1">
        <div className="relative h-4 w-[120px]">
          <div className="flex h-4 w-[88px] items-start gap-0.5">
            {Array.from({ length: 4 }).map((_, i) => (
              <img
                key={`star-${i}`}
                src={logoRowAssets.starFull}
                alt=""
                width={16}
                height={16}
                className="size-4 shrink-0"
                decoding="async"
              />
            ))}
            <img
              src={logoRowAssets.starHalf}
              alt=""
              width={16}
              height={16}
              className="size-4 shrink-0"
              decoding="async"
            />
          </div>
          <span className="absolute left-[95px] top-px text-[14px] font-medium leading-[15.6px] tracking-[-1px] text-black">
            4.8
          </span>
        </div>
        <p className="whitespace-nowrap text-[14px] font-medium leading-[18.968px] tracking-[-0.084px] text-black">
          400+ happy customers
        </p>
      </div>
    </div>
  );
}

/** Figma 8251:20364 — logo-scroll-colored */
function LogoMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group/marquee relative h-[61px] w-[1018px] shrink-0 overflow-hidden",
        className,
      )}
    >
      <div className="logo-marquee-track absolute left-0 top-1/2 flex w-max -translate-y-1/2 animate-[marquee_12s_linear_infinite] motion-reduce:animate-none">
        <img
          src={logoRowAssets.marqueeStrip}
          alt=""
          width={1018}
          height={61}
          className="h-[61px] w-[1018px] shrink-0 object-cover object-left"
          decoding="async"
        />
        <img
          src={logoRowAssets.marqueeStrip}
          alt=""
          width={1018}
          height={61}
          className="h-[61px] w-[1018px] shrink-0 object-cover object-left"
          decoding="async"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function LogoRowSection() {
  return (
    <section className="bg-white font-sans" aria-label="Trusted by customers">
      {/* Desktop — Figma logo-row 8251:20338 (1439×151) */}
      <ScrollRevealGroup className="mx-auto hidden w-full max-w-[1440px] items-center justify-between px-20 py-10 lg:flex">
        <ScrollRevealItem>
          <G2TrustBadge />
        </ScrollRevealItem>
        <ScrollRevealItem>
          <LogoMarquee />
        </ScrollRevealItem>
      </ScrollRevealGroup>

      {/* Mobile / tablet */}
      <ScrollRevealGroup className="flex flex-col gap-4 px-5 py-10 sm:px-8 lg:hidden">
        <ScrollRevealItem className="flex justify-center">
          <G2TrustBadge className="border-r-0 pr-0" />
        </ScrollRevealItem>
        <ScrollRevealItem className="w-full overflow-hidden">
          <LogoMarquee className="mx-auto max-w-full" />
        </ScrollRevealItem>
      </ScrollRevealGroup>
    </section>
  );
}
