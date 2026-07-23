/** Shared “The CloudKeeper Advantage” feature grid section. */

export const cloudKeeperAdvantageAssets = {
  deco: "/assets/cloudkeeper-advantage/deco.png",
  icons: {
    outcomes: "/assets/cloudkeeper-advantage/icon-outcomes.svg",
    impact: "/assets/cloudkeeper-advantage/icon-impact.svg",
    pricing: "/assets/cloudkeeper-advantage/icon-pricing.svg",
    support: "/assets/cloudkeeper-advantage/icon-support.svg",
  },
} as const;

export type CloudKeeperAdvantageItem = {
  id: string;
  icon: string;
  lines: readonly [string, string];
};

export type CloudKeeperAdvantageContent = {
  heading: string;
  subtitle: string;
  items: CloudKeeperAdvantageItem[];
  cta: { label: string; href: string };
};

export const CLOUDKEEPER_ADVANTAGE_SECTION_BG = "#fdfbfb";

/** Default — Figma 461:106638 (Platform Suite). */
export const defaultCloudKeeperAdvantageContent: CloudKeeperAdvantageContent = {
  heading: "The CloudKeeper Advantage",
  subtitle:
    "CloudKeeper Commit uses AI/ML-driven, continuous algorithms to optimize your entire commitment layer for",
  items: [
    {
      id: "outcomes",
      icon: cloudKeeperAdvantageAssets.icons.outcomes,
      lines: ["Guaranteed outcomes", "backed by expertise"],
    },
    {
      id: "impact",
      icon: cloudKeeperAdvantageAssets.icons.impact,
      lines: ["Fast, Sustained Impact", "in 30–90 days"],
    },
    {
      id: "pricing",
      icon: cloudKeeperAdvantageAssets.icons.pricing,
      lines: ["Results-based", "pricing model"],
    },
    {
      id: "support",
      icon: cloudKeeperAdvantageAssets.icons.support,
      lines: ["Automation + AI", "+ 24x7 certified support"],
    },
  ],
  cta: {
    label: "Sign up now",
    href: "#contact",
  },
};
