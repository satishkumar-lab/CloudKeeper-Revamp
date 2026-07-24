"use client";

import { StatsPartnerBadges } from "@/components/home/stats-partner-badges";
import { CountUp } from "@/components/motion/count-up";
import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import {
  defaultWhyChooseFourCardsFiveLogosContent,
  type WhyChooseFourCardsFiveLogosCard,
  type WhyChooseFourCardsFiveLogosContent,
} from "@/config/why-choose-four-cards-five-logos";
import { cn } from "@/lib/utils";

export type WhyChooseFourCardsFiveLogosSectionProps =
  Partial<WhyChooseFourCardsFiveLogosContent> & {
    className?: string;
    id?: string;
    headingId?: string;
  };

function StatCard({ card }: { card: WhyChooseFourCardsFiveLogosCard }) {
  return (
    <div
      className="relative h-[305px] overflow-hidden rounded-[10px]"
      style={{ backgroundColor: card.bg }}
    >
      <div className="absolute left-0 top-[calc(50%-41.53px)] flex w-[240px] -translate-y-1/2 flex-col gap-5 pl-[30px] pr-[50px]">
        <p
          className="stat-card-value flex items-center gap-1 text-[36px] font-semibold leading-[52px] tracking-[-2px] text-black"
          aria-live="polite"
        >
          <CountUp
            target={Number.parseInt(card.value, 10)}
            suffix={card.suffix}
          />
        </p>
        <p className="whitespace-pre-line pl-0.5 text-xl leading-[1.3] tracking-[-0.3125px] text-[#253746]">
          {card.label}
        </p>
      </div>
      {card.illustrationInsetBottom ? (
        <div
          className="pointer-events-none absolute"
          style={{
            width: card.illustrationWidth,
            height: card.illustrationHeight,
            left: card.illustrationLeft,
            top: card.illustrationTop,
            opacity: card.illustrationOpacity,
          }}
          aria-hidden
        >
          <div
            className="absolute inset-x-0 top-0"
            style={{ bottom: card.illustrationInsetBottom }}
          >
            <img
              src={card.illustration}
              alt=""
              className="block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </div>
        </div>
      ) : (
        <img
          src={card.illustration}
          alt=""
          className="pointer-events-none absolute max-w-none"
          style={{
            width: card.illustrationWidth,
            height: card.illustrationHeight,
            left: card.illustrationLeft,
            top: card.illustrationTop,
            opacity: card.illustrationOpacity,
          }}
          decoding="async"
          aria-hidden
        />
      )}
    </div>
  );
}

/**
 * **Variant 2 — 4 cards + 5 logos** (AWS, GCP, Azure, ISO, SOC2).
 * Same layout as Home / AZ `StatsSection`.
 */
export function WhyChooseFourCardsFiveLogosSection({
  headingLine1 = defaultWhyChooseFourCardsFiveLogosContent.headingLine1,
  headingLine2 = defaultWhyChooseFourCardsFiveLogosContent.headingLine2,
  cards = defaultWhyChooseFourCardsFiveLogosContent.cards,
  className,
  id = "why-us",
  headingId = "stats-heading",
}: WhyChooseFourCardsFiveLogosSectionProps = {}) {
  return (
    <section
      id={id}
      className={cn("bg-white font-sans", className)}
      aria-labelledby={headingId}
    >
      <ScrollRevealGroup className="mx-auto flex w-full max-w-[1440px] flex-col gap-[50px] px-5 pb-20 pt-24 sm:px-8 lg:px-[80px] lg:pb-[80px] lg:pt-[140px]">
        <ScrollRevealItem className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <h2
            id={headingId}
            className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-0.2px] text-black lg:whitespace-nowrap lg:text-[40px]"
          >
            {headingLine1}
            <br />
            {headingLine2}
          </h2>

          <StatsPartnerBadges />
        </ScrollRevealItem>

        <ScrollRevealGroup className="flex flex-col gap-5 lg:flex-row lg:gap-[20px]">
          {cards.map((card) => (
            <ScrollRevealItem
              key={card.label}
              className="relative min-w-0 flex-1"
            >
              <StatCard card={card} />
            </ScrollRevealItem>
          ))}
        </ScrollRevealGroup>
      </ScrollRevealGroup>
    </section>
  );
}
