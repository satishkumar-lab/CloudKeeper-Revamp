/** Figma 8251:20839 — Tabs-carasoul-platforms */
export const platformsAssets = {
  tabLensIcon: "/assets/home/platforms/tab-lens-icon.svg",
  tabTunerIcon: "/assets/home/platforms/tab-tuner-icon.svg",
  tabCommitIcon: "/assets/home/platforms/tab-commit-icon.svg",
  tabLensgptIcon: "/assets/home/platforms/tab-lensgpt-icon.svg",
  exploreArrow: "/assets/home/platforms/explore-arrow.svg",
  addonBg: "/assets/home/platforms/addon-bg.webp",
  addonSupportIcon: "/assets/home/platforms/addon-support-icon.svg",
  addonCheckIcon: "/assets/home/platforms/addon-check-icon.svg",
  addonArrow1: "/assets/home/platforms/addon-arrow-1.svg",
  addonArrow2: "/assets/home/platforms/addon-arrow-2.svg",
  dashboardLens: "/assets/home/platforms/dashboard-lens.webp",
} as const;

export type PlatformTabId = "lens" | "tuner" | "commit" | "lensgpt";

/** Figma 8251:20839 — per-tab icon frame in 46×46 container */
export const platformTabIconLayout: Record<
  PlatformTabId,
  { wrapper: string; bleed?: string }
> = {
  lens: {
    wrapper: "absolute inset-[29.65%_20.9%_29.63%_20.92%]",
    bleed: "absolute inset-[-3.47%_-2.43%]",
  },
  tuner: {
    wrapper: "absolute inset-[18.57%_19.75%]",
  },
  commit: {
    wrapper: "absolute inset-[25.28%_17.93%_25.35%_16.8%]",
  },
  lensgpt: {
    wrapper:
      "absolute left-1/2 top-1/2 size-[30.711px] -translate-x-1/2 -translate-y-1/2",
  },
};

export type PlatformTab = {
  id: PlatformTabId;
  label: string;
  icon: string;
  category: string;
  headline: string;
  exploreHref: string;
  featureTags: readonly string[];
  dashboard: string;
  slides: number;
};

export const platformTabsContent: readonly PlatformTab[] = [
  {
    id: "lens",
    label: "CloudKeeper Lens",
    icon: platformsAssets.tabLensIcon,
    category: "Visibility & Governance",
    headline:
      "Complete visibility into your cloud spend with real-time dashboards and intelligent analytics.",
    exploreHref: "#",
    featureTags: [
      "Intelligent analytics",
      "Cloud spend visibility",
      "Real-time breakup trends",
    ],
    dashboard: platformsAssets.dashboardLens,
    slides: 4,
  },
  {
    id: "tuner",
    label: "CloudKeeper Tuner",
    icon: platformsAssets.tabTunerIcon,
    category: "Usage Optimization",
    headline:
      "Optimize cloud usage and eliminate waste with intelligent, automated recommendations.",
    exploreHref: "#",
    featureTags: [
      "Usage optimization",
      "Rightsizing recommendations",
      "Idle resource detection",
    ],
    dashboard: platformsAssets.dashboardLens,
    slides: 4,
  },
  {
    id: "commit",
    label: "CloudKeeper Commit",
    icon: platformsAssets.tabCommitIcon,
    category: "Rate Optimization",
    headline:
      "Maximize savings from Reserved Instances, Savings Plans, and commitment strategies.",
    exploreHref: "#",
    featureTags: [
      "Commitment management",
      "Rate optimization",
      "Coverage analysis",
    ],
    dashboard: platformsAssets.dashboardLens,
    slides: 4,
  },
  {
    id: "lensgpt",
    label: "CloudKeeper LensGPT",
    icon: platformsAssets.tabLensgptIcon,
    category: "Agentic AI FinOps",
    headline:
      "Agentic AI platform for autonomous cloud cost optimization and intelligent FinOps workflows.",
    exploreHref: "#",
    featureTags: [
      "Agentic AI",
      "Natural language insights",
      "Autonomous optimization",
    ],
    dashboard: platformsAssets.dashboardLens,
    slides: 4,
  },
] as const;

export const platformAddons = [
  {
    icon: platformsAssets.addonSupportIcon,
    iconClassName: "absolute left-[6.57px] top-[6.57px] size-[25.452px]",
    line1: "Unlimited 24×7 Cloud Support",
    line2: "with CloudKeeper Expert",
    arrow: platformsAssets.addonArrow1,
    href: "#",
  },
  {
    icon: platformsAssets.addonCheckIcon,
    iconClassName: "absolute left-[6.4px] top-[6.4px] size-[25.796px]",
    line1: "Architecture Reviews",
    line2: "with CloudKeeper Check",
    arrow: platformsAssets.addonArrow2,
    href: "#",
  },
] as const;
