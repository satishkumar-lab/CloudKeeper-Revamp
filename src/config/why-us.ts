/** Figma TXWXQ7pjvZhQQ5hydi40Ab — Why CloudKeeper (22:14157) */

export const whyUsAssets = {
  /** Same ribbon deco used on AZ / PPA+ heroes */
  heroDeco: "/assets/solutions/az/hero-deco.png",
  icons: {
    cloudCost: "/assets/why-us/hero/icon-cloud-cost.svg",
    costReduction: "/assets/why-us/hero/icon-cost-reduction.svg",
    g2Satisfaction: "/assets/why-us/hero/icon-g2-satisfaction.svg",
    successStories: "/assets/why-us/hero/icon-success-stories.svg",
  },
} as const;

/** Figma heading gradient — blue → purple → pink */
export const WHY_US_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

export type WhyUsStatCard = {
  value: string;
  label: string;
  icon: string;
  /** Intrinsic icon size from SVG viewBox — keep aspect ratio */
  iconWidth: number;
  iconHeight: number;
  /** Desktop vertical offset in px — Figma 22:14178 */
  offsetY: number;
};

/** Figma 21:8986 — card:unused_resources (fixed size for all variants) */
export const WHY_US_STAT_CARD = {
  width: 271,
  height: 213,
  /** Space for Variant2 accent borders that fan outside the card */
  hoverBleed: 12,
} as const;

/** Figma 22:14170 — hero-why ck */
export const whyUsHero = {
  headingLine1: "Wondering what makes CloudKeeper a favourite among",
  headingGradient: "DevOps Heads, CTOs, CFOs, and CEOs?",
  cards: [
    {
      value: "$120+ million",
      label: "Cloud cost savings delivered",
      icon: whyUsAssets.icons.cloudCost,
      iconWidth: 42.45,
      iconHeight: 31.48,
      offsetY: 0,
    },
    {
      value: "20%",
      label: "Average cost reduction",
      icon: whyUsAssets.icons.costReduction,
      iconWidth: 45.4,
      iconHeight: 26.2,
      offsetY: 49.5,
    },
    {
      value: "99%",
      label: "Satisfaction score on G2",
      icon: whyUsAssets.icons.g2Satisfaction,
      iconWidth: 34.6,
      iconHeight: 29.52,
      offsetY: 0,
    },
    {
      value: "400+",
      label: "Success Stories",
      icon: whyUsAssets.icons.successStories,
      iconWidth: 31.7,
      iconHeight: 29.68,
      offsetY: 39.5,
    },
  ] as const satisfies readonly WhyUsStatCard[],
} as const;

/** Figma 99:9969 — Banner-CTA - Section (dark) */
export const whyUsDarkBannerCta = {
  heading: "They accomplished it!",
  body: "Are you ready to take your cloud journey to new heights?",
  cta: {
    label: "Check the Report",
    href: "#",
  },
} as const;

export const whyUsCustomersLogosHeading = "Trusted by 400+ Global Customers";

export const whyUsMeta = {
  title: "Why Us? | CloudKeeper",
  description:
    "Wondering what makes CloudKeeper a favourite among DevOps Heads, CTOs, CFOs, and CEOs?",
} as const;
