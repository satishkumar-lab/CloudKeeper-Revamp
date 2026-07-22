/** Figma 22:14866 — What makes us truly unique? (hub + 5 cards + dotted connectors) */

const BASE = "/assets/why-us/unique";

export const whyUsUniqueAssets = {
  abstractsLeft: `${BASE}/decor/abstracts-left.png`,
  abstractsRight: `${BASE}/decor/abstracts-right.png`,
  hubLogo: `${BASE}/hub/logo-wordmark.svg`,
  hubFallback: `${BASE}/hub/static-fallback.png`,
  /** Same Lottie as production why-cloudkeeper (hub + dotted connectors) */
  hubLottie: `${BASE}/hub/one-roof.lottie`,
  vendorCell: (n: number) => `${BASE}/vendors-cells/${n}.png`,
} as const;

/** Figma product-name gradient — blue → purple → pink */
export const WHY_US_UNIQUE_PRODUCT_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

/** Hub gradient border — cyan → magenta (Figma logo-pulsating-ck) */
export const WHY_US_UNIQUE_HUB_BORDER =
  "linear-gradient(135deg, #37e0ff 0%, #9a4bff 45%, #ed0082 100%)";

export type WhyUsUniqueCard = {
  id: string;
  product: string;
  subtitle: string;
  points: readonly string[];
  vendorCells: readonly [number, number, number];
  /** Desktop absolute position inside 1230×718 stage */
  desktop: { left?: number; right?: number; top: number };
};

export const whyUsUniqueContent = {
  /** Figma 22:14913 — full Regular weight (no partial bold) */
  heading: "What makes us truly unique?",
  bodyBefore: "Why ",
  bodyBold1: "juggle between multiple providers when one partner can do it all?",
  bodyMid:
    " From rate optimization to usage optimization, granular visibility to cloud management services - we’re the only partner with ",
  bodyBold2: "end-to-end cloud optimization capabilities.",
  hubLabel: "All your cloud needs, under one roof",
  vendorsLabel: "Vendors In this landscape",
  cta: {
    label: "Go beyond ordinary optimization",
    href: "#",
  },
} as const;

/** Figma card order + positions (insights-card-wrapper 1230×718) */
export const whyUsUniqueCards: readonly WhyUsUniqueCard[] = [
  {
    id: "lens",
    product: "Lens",
    subtitle: "Cloud Visibility & Recommendation",
    points: [
      "Optimize spend, allocation & chargebacks.",
      "Tagging & right-sizing guidance.",
      "Multi-cloud & hybrid cloud visibility",
    ],
    vendorCells: [1, 2, 3],
    desktop: { left: 0, top: 0 },
  },
  {
    id: "auto",
    product: "Auto",
    subtitle: "Savings & RI Management",
    points: [
      "Automated SP/RI optimization.",
      "Flexible coverage & precise prediction.",
      "Pay only when you save.",
    ],
    vendorCells: [4, 5, 6],
    desktop: { left: 880, top: 0 },
  },
  {
    id: "az-ppa",
    product: "AZ/PPA+",
    subtitle: "Cloud Reseller",
    points: [
      "Access to volume-based pricing.",
      "Flexible, better payment terms.",
      "Access to partner programs & incentives.",
    ],
    vendorCells: [7, 8, 9],
    desktop: { left: 0, top: 343 },
  },
  {
    id: "tuner",
    product: "Tuner",
    subtitle: "Usage Optimization Platforms",
    points: [
      "Identify & fix cloud inefficiencies.",
      "End-to-end automated process.",
      "Usage insights & expert recommendations.",
    ],
    vendorCells: [10, 11, 12],
    desktop: { left: 440, top: 343 },
  },
  {
    id: "partner",
    product: "Partner Led Support",
    subtitle: "MSPs and FinOps Consulting Companies",
    points: [
      "FinOps consulting & support.",
      "Well-Architected Reviews.",
      "Architectural consulting & migration support.",
    ],
    vendorCells: [13, 14, 15],
    desktop: { left: 880, top: 343 },
  },
] as const;
