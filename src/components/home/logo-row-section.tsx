"use client";

import {
  fittedMarqueeLogoSize,
  logoMarqueeItems,
  logoRowAssets,
  LOGO_MARQUEE_GAP_PX,
  type LogoMarqueeItem,
} from "@/config/logo-row";
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
        "flex h-[52px] shrink-0 items-center gap-[13px] border-r border-solid border-[#c9e4ff] pr-[60px]",
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

function MarqueeLogo({ logo }: { logo: LogoMarqueeItem }) {
  const { width, height } = fittedMarqueeLogoSize(logo);

  return (
    <img
      src={logo.src}
      alt={logo.name}
      width={width}
      height={height}
      className="max-w-none shrink-0 bg-transparent object-contain object-center"
      style={{ width, height }}
      decoding="async"
    />
  );
}

function LogoMarquee({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "group/marquee relative h-[52px] min-w-0 flex-1 overflow-hidden bg-transparent",
        className,
      )}
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 4%, black 96%, transparent 100%)",
      }}
    >
      {/* Inner flex is vertically centered; only the track translates on X */}
      <div className="absolute inset-y-0 left-0 flex items-center">
        <div
          className="logo-marquee-track flex w-max items-center bg-transparent animate-[marquee_32s_linear_infinite] motion-reduce:animate-none"
          style={{ gap: LOGO_MARQUEE_GAP_PX, paddingRight: LOGO_MARQUEE_GAP_PX }}
        >
          {logoMarqueeItems.map((logo) => (
            <MarqueeLogo key={`a-${logo.name}`} logo={logo} />
          ))}
          {logoMarqueeItems.map((logo) => (
            <span key={`b-${logo.name}`} aria-hidden className="contents">
              <MarqueeLogo logo={logo} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LogoRowSection() {
  return (
    <section className="bg-white font-sans" aria-label="Trusted by customers">
      {/* Desktop — Figma logo-row 8251:20338 (1439×151) */}
      <ScrollRevealGroup className="mx-auto hidden w-full max-w-[1440px] items-center justify-between px-20 pt-5 pb-10 lg:flex">
        <ScrollRevealItem>
          <G2TrustBadge />
        </ScrollRevealItem>
        <ScrollRevealItem className="min-w-0 flex-1">
          <LogoMarquee />
        </ScrollRevealItem>
      </ScrollRevealGroup>

      {/* Mobile / tablet */}
      <ScrollRevealGroup className="flex flex-col items-center gap-4 px-5 pt-5 pb-10 sm:px-8 lg:hidden">
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
