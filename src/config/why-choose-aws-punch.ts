import {
  solutionsPpaPlusAssets,
  solutionsPpaPlusStats,
} from "@/config/solutions-ppa-plus";

/**
 * Variant 3 — 4 cards (2×2) + AWS Premier “punch” badge panel.
 * Default copy matches PPA+ `PpaPlusStatsSection`.
 */
export type WhyChooseAwsPunchCard = {
  id: string;
  value: string;
  suffix: string;
  label: string;
  bg: string;
  illustration: string;
  illustrationClass: string;
};

export type WhyChooseAwsPunchContent = {
  headingLines: string[];
  cards: WhyChooseAwsPunchCard[];
  partner: {
    awsBadgeSrc: string;
    competencies: string[];
    body: string;
  };
  cta: { label: string; href: string };
};

export const defaultWhyChooseAwsPunchContent: WhyChooseAwsPunchContent = {
  headingLines: [...solutionsPpaPlusStats.headingLines],
  cards: solutionsPpaPlusStats.cards.map((card) => ({ ...card })),
  partner: {
    awsBadgeSrc: solutionsPpaPlusAssets.stats.awsBadge,
    competencies: [...solutionsPpaPlusStats.partner.competencies],
    body: solutionsPpaPlusStats.partner.body,
  },
  cta: { ...solutionsPpaPlusStats.cta },
};
