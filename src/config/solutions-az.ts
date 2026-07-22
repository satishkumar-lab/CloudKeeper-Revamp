import { routes } from "@/config/routes";

/** Figma TXWXQ7pjvZhQQ5hydi40Ab — CloudKeeper-AZ / Hero-Banner-Inner pages (8200:169675) */
export const solutionsAzAssets = {
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  heroDeco: "/assets/solutions/az/hero-deco.png",
} as const;

/** Figma heading gradient — blue → purple → pink */
export const SOLUTIONS_AZ_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

export const solutionsAzHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "CloudKeeper AZ" },
  ],
  headingLine1: "Yes, we contractually guarantee cloud",
  headingGradient: "cost savings from Day 1!",
  highlights: [
    {
      lines: [
        "Run everything on-demand at",
        "commitment-based pricing",
      ],
    },
    {
      lines: [
        "Instant discounts on compute,",
        "database & CDN costs at no",
      ],
    },
    {
      lines: [
        "Access to top-tier support for",
        "AWS & GCP at a discounted",
      ],
    },
  ],
  cta: {
    label: "Let's get started",
    href: "/#contact",
  },
} as const;

export const solutionsAzMeta = {
  title: "CloudKeeper AZ",
  description:
    "Guaranteed cloud cost savings from Day 1 — on-demand pricing, instant discounts, and top-tier support with zero commitment.",
} as const;
