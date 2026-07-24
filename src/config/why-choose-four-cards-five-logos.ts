import { homeAssets } from "@/config/home-assets";
import { statsCards } from "@/config/home-content";

/**
 * Variant 2 — 4 stat cards + 5 partner logos (AWS, GCP, Azure, ISO, SOC2).
 * Default copy matches Home / AZ `StatsSection`.
 */
export type WhyChooseFourCardsFiveLogosCard = {
  value: string;
  suffix: string;
  label: string;
  bg: string;
  illustration: string;
  illustrationWidth: string;
  illustrationHeight: string;
  illustrationLeft: string;
  illustrationTop: string;
  illustrationInsetBottom?: string;
  illustrationOpacity: number;
};

export type WhyChooseFourCardsFiveLogosContent = {
  headingLine1: string;
  headingLine2: string;
  cards: WhyChooseFourCardsFiveLogosCard[];
};

export const defaultWhyChooseFourCardsFiveLogosContent: WhyChooseFourCardsFiveLogosContent =
  {
    headingLine1: "Built for Scale.",
    headingLine2: "Proven in the Real World.",
    cards: statsCards.map((card) => ({
      value: card.value,
      suffix: card.suffix,
      label: card.label,
      bg: card.bg,
      illustration: card.illustration,
      illustrationWidth: card.illustrationWidth,
      illustrationHeight: card.illustrationHeight,
      illustrationLeft: card.illustrationLeft,
      illustrationTop: card.illustrationTop,
      illustrationInsetBottom:
        "illustrationInsetBottom" in card
          ? card.illustrationInsetBottom
          : undefined,
      illustrationOpacity: card.illustrationOpacity,
    })),
  };

/** Re-export home illustration paths for callers that customize cards. */
export const whyChooseFourCardsFiveLogosAssets = {
  expertise: homeAssets.statExpertise,
  savings: homeAssets.statSavings,
  certified: homeAssets.statCertified,
  customers: homeAssets.statCustomers,
} as const;
