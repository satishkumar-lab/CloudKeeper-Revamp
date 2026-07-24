import { DARK_BANNER_CTA_BG } from "@/config/dark-cta-banner-section";
import { routes } from "@/config/routes";

/** Figma 8141:116195 — Platforms-Commit hero / CTA_Banner_Commit */

export const ckCommitAssets = {
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  heroDecoAbstract: "/assets/ck-commit/hero-deco-abstract.png",
  heroBlobA: "/assets/ck-commit/hero-blob-a.svg",
  heroBlobB: "/assets/ck-commit/hero-blob-b.svg",
  pricingPie: "/assets/ck-commit/pricing-pie.svg",
  pricingDeco: "/assets/ck-commit/pricing-deco.png",
  chartWaveAfter: "/assets/ck-commit/chart-wave-after.svg",
  chartWaveBefore: "/assets/ck-commit/chart-wave-before.svg",
  metricArc1: "/assets/ck-commit/metric-arc-1.svg",
  metricArc2: "/assets/ck-commit/metric-arc-2.svg",
  metricArc3: "/assets/ck-commit/metric-arc-3.svg",
  metricArc4: "/assets/ck-commit/metric-arc-4.svg",
  iconPercent: "/assets/ck-commit/icon-percent.svg",
  iconSavings: "/assets/ck-commit/icon-savings.svg",
  pointer: "/assets/ck-commit/pointer.svg",
  solves: {
    realtime: "/assets/ck-commit/solves-realtime.svg",
    realtimeMuted: "/assets/ck-commit/solves-realtime-muted.svg",
    dynamic: "/assets/ck-commit/solves-dynamic.svg",
    lowRisk: "/assets/ck-commit/solves-lowrisk.svg",
    holistic: "/assets/ck-commit/solves-holistic.svg",
    discount: "/assets/ck-commit/solves-discount.svg",
    execution: "/assets/ck-commit/solves-execution.svg",
  },
  compare: {
    guaranteed: "/assets/ck-commit/compare/metric-1.svg",
    average: "/assets/ck-commit/compare/metric-2.svg",
    time: "/assets/ck-commit/compare/metric-3.svg",
    utilization: "/assets/ck-commit/compare/metric-4.svg",
    overCommit: "/assets/ck-commit/compare/metric-5.svg",
    unused: "/assets/ck-commit/compare/metric-6.svg",
    financial: "/assets/ck-commit/compare/metric-7.svg",
    operational: "/assets/ck-commit/compare/metric-8.svg",
    scalability: "/assets/ck-commit/compare/metric-9.svg",
    pricing: "/assets/ck-commit/compare/metric-10.svg",
  },
  supportCheck: "/assets/ck-commit/support-check.svg",
  howItWorks: {
    panel1: "/assets/ck-commit/how-it-works/panel-signup.webp",
    panel2: "/assets/ck-commit/how-it-works/panel-onboarding.webp",
    panel3: "/assets/ck-commit/how-it-works/panel-savings.webp",
    panel4: "/assets/ck-commit/how-it-works/panel-realize.webp",
  },
} as const;

/** Same radial family as shared dark CTA banners */
export const CK_COMMIT_PRICING_BANNER_BG = DARK_BANNER_CTA_BG;

/** Figma heading gradient — blue → purple → pink */
export const CK_COMMIT_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

/** Section wash — #f4f9fd → white (support section) */
export const CK_COMMIT_SECTION_BG =
  "linear-gradient(180deg, #f4f9fd 0%, #ffffff 100%)";

/** Same gradient at 50% opacity (compare section) */
export const CK_COMMIT_SECTION_BG_SOFT =
  "linear-gradient(180deg, rgba(244, 249, 253, 0.5) 0%, rgba(255, 255, 255, 0.5) 100%)";

/** Same gradient at 40% opacity (support section) */
export const CK_COMMIT_SECTION_BG_SOFT_40 =
  "linear-gradient(180deg, rgba(244, 249, 253, 0.4) 0%, rgba(255, 255, 255, 0.4) 100%)";

export type CkCommitPointerPart = {
  text: string;
  bold?: boolean;
};

export const ckCommitHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "CloudKeeper Commit" },
  ],
  pageTag: "CloudKeeper Commit",
  headingLine1: "Zero-touch, AI-driven Platform for AWS",
  headingGradient: "RI & Savings Plan Optimization",
  pointers: [
    {
      parts: [
        { text: "Instant, guaranteed savings\nof " },
        { text: "30-45% from Day 1", bold: true },
      ] satisfies CkCommitPointerPart[],
    },
    {
      parts: [
        { text: "Continuous, AI-driven optimization\nacross " },
        { text: "Compute & Databases", bold: true },
      ] satisfies CkCommitPointerPart[],
    },
    {
      parts: [
        { text: "Reduced risk with incremental,\n" },
        { text: "flexible commitments", bold: true },
      ] satisfies CkCommitPointerPart[],
    },
    {
      parts: [
        { text: "Outcome-based Model:" },
        { text: " We don't get paid if you don't save", bold: true },
      ] satisfies CkCommitPointerPart[],
    },
  ],
  cta: {
    label: "Sign up now",
    href: "#contact",
  },
} as const;

export const ckCommitCustomersLogosHeading =
  "Our CloudKeeper Commit Customers";

/** Figma 8141:116413 — How CloudKeeper Commit Solves It */
export const ckCommitSolves = {
  heading: "How CloudKeeper Commit Solves It",
  body: "CloudKeeper Commit uses AI/ML-driven, continuous algorithms to optimize your entire commitment layer for Compute and Databases, adapting automatically as workloads evolve.",
  cards: [
    {
      id: "realtime",
      titleLines: ["Real-Time Usage", "Intelligence"],
      description: "Continuously monitors cloud usage in near real-time",
      icon: ckCommitAssets.solves.realtime,
      iconMuted: ckCommitAssets.solves.realtimeMuted,
    },
    {
      id: "dynamic",
      titleLines: ["Dynamic Commitment Recalculation"],
      description: "Recalculates commitments continuously as usage patterns shift",
      icon: ckCommitAssets.solves.dynamic,
    },
    {
      id: "low-risk",
      titleLines: ["Low-Risk, Incremental Optimization"],
      description: "Increases coverage gradually to avoid over-commitment risk",
      icon: ckCommitAssets.solves.lowRisk,
    },
    {
      id: "holistic",
      titleLines: ["Holistic Coverage", "Optimization"],
      description: "Optimizes across Compute and Databases in one commitment layer",
      icon: ckCommitAssets.solves.holistic,
    },
    {
      id: "discount",
      titleLines: ["Smart Discount &", "Balancing"],
      description: "Balances RI and Savings Plans for the highest effective discount",
      icon: ckCommitAssets.solves.discount,
    },
    {
      id: "execution",
      titleLines: ["Automated AWS", "Execution"],
      description: "Executes purchases and modifications in AWS with zero manual effort",
      icon: ckCommitAssets.solves.execution,
    },
  ],
} as const;

/** Figma 8141:116428 — Why choose CloudKeeper Commit comparison */
export const ckCommitCompare = {
  heading: "Why choose CloudKeeper Commit",
  body: "CloudKeeper Commit delivers savings that actually show up on your bill - not just assumptions. By continuously aligning commitments to real usage, it ensures savings are immediate, measurable, and sustainable - even as environments change.",
  columns: {
    metric: "Metric",
    traditional: "Traditional RI / SP Management",
    commit: "CloudKeeper Commit",
  },
  rows: [
    {
      metric: "Guaranteed Savings",
      icon: ckCommitAssets.compare.guaranteed,
      traditional: "Based on assumptions",
      commit: "Guaranteed, bill-visible savings",
    },
    {
      metric: "Average Savings",
      icon: ckCommitAssets.compare.average,
      traditional: "Inconsistent, unpredictable",
      commit: "Guaranteed average savings of 30-45% on Compute and Database",
    },
    {
      metric: "Time to Savings",
      icon: ckCommitAssets.compare.time,
      traditional: "Delayed, months to realize",
      commit: "Instant — from Day One",
    },
    {
      metric: "Commitment Utilization",
      icon: ckCommitAssets.compare.utilization,
      traditional: "Often underutilized",
      commit: "High, consistent utilization",
    },
    {
      metric: "Over-Commitment Risk",
      icon: ckCommitAssets.compare.overCommit,
      traditional: "High",
      commit: "Minimal",
    },
    {
      metric: "Unused Capacity",
      icon: ckCommitAssets.compare.unused,
      traditional: "High",
      commit: "Reduced to near-zero",
    },
    {
      metric: "Financial Risk",
      icon: ckCommitAssets.compare.financial,
      traditional: "High in changing workloads",
      commit: "Low, dynamically managed",
    },
    {
      metric: "Operational Effort",
      icon: ckCommitAssets.compare.operational,
      traditional: "Manual tracking & planning",
      commit: "Zero-touch automation",
    },
    {
      metric: "Scalability",
      icon: ckCommitAssets.compare.scalability,
      traditional: "Difficult at scale",
      commit: "Effortless, enterprise-ready",
    },
    {
      metric: "Pricing",
      icon: ckCommitAssets.compare.pricing,
      traditional: "Upfront payment",
      commit: "Outcome-based pricing - pay only on realized savings",
    },
  ],
} as const;

/** Figma 8141:116580 — Unlimited Cloud Support */
export const ckCommitSupport = {
  heading: "Get access to Unlimited Cloud Support",
  body: "Your platform savings are backed by expert human support, ensuring guaranteed outcomes and continuous optimization.",
  items: [
    "24*7 Support & Designated Account Manager",
    "Periodic AWS Well-Architected Reviews by certified experts",
    "Actionable cost optimization recommendations",
    "Ongoing guidance to ensure cost-efficient cloud operations",
  ],
  taglineBefore: "CloudKeeper has not just automated commitments - ",
  taglineEmphasis: "we've mastered optimization at scale.",
  cta: {
    label: "Sign up now",
    href: "#contact",
  },
} as const;

/** Figma 8141:116633 — CTA_Banner_Commit */
export const ckCommitPricingBanner = {
  tag: "Outcome-based Pricing",
  heading: "Pay only when you save.",
  headingEmphasis: " No platform fee.",
  body: "We just take a small percentage of the total AWS cost savings you achieve through our platform, which means we only get paid when you save money. There is no additional cost or subscription fees.",
  yourSavingsLabel: "Your Savings",
  ourShareLabel: "Our Share",
  pieAlt: "Pie chart showing most savings stay with you, and a small share for CloudKeeper",
} as const;

/** Live site — How does CloudKeeper Commit work? */
export const ckCommitHowItWorks = {
  heading: "How does CloudKeeper Commit work?",
  steps: [
    {
      id: "signup",
      title: "Sign Up",
      description: "The entire onboarding takes less than 5 minutes.",
      panel: ckCommitAssets.howItWorks.panel1,
      panelAlt: "CloudKeeper Commit sign up to view potential savings",
    },
    {
      id: "onboarding",
      title: "Quick Account onboarding",
      description:
        "Very quick and easy onboarding process that takes less than 5 minutes.",
      panel: ckCommitAssets.howItWorks.panel2,
      panelAlt: "CloudKeeper Commit AWS account onboarding preview",
    },
    {
      id: "savings",
      title: "Potential Savings Insights",
      description:
        "Get insights into the potential savings you'll achieve with CloudKeeper Commit.",
      panel: ckCommitAssets.howItWorks.panel3,
      panelAlt: "CloudKeeper Commit potential savings insights dashboard",
    },
    {
      id: "realize",
      title: "Realise Savings with us",
      description: "Enable CloudKeeper Commit to maximize your savings.",
      panel: ckCommitAssets.howItWorks.panel4,
      panelAlt: "CloudKeeper Commit savings delivered dashboard",
    },
  ],
  cta: {
    label: "Watch CloudKeeper Commit Demo",
    href: "#contact",
  },
} as const;

export const ckCommitMeta = {
  title: "CloudKeeper Commit",
  description:
    "Zero-touch, AI-driven platform for AWS RI & Savings Plan optimization — pay only when you save.",
} as const;
