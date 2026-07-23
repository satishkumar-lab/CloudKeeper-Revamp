import { defaultCardOverlappingContent } from "@/config/card-overlapping-section";
import { defaultCloudKeeperAdvantageContent } from "@/config/cloudkeeper-advantage-section";
import { routes } from "@/config/routes";
import {
  platformsAssets,
  type PlatformTab,
} from "@/config/platforms-section";
import { defaultWhyChooseCkAsContent } from "@/config/why-choose-ck-as-section";

/** Figma TXWXQ7pjvZhQQ5hydi40Ab — New_Platform suite (147:28323) */
export const platformSuiteAssets = {
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  heroDeco: "/assets/platform-suite/hero-deco.png",
  valueAdds: {
    check: "/assets/platform-suite/value-adds/check.svg",
    expert: "/assets/platform-suite/value-adds/expert.svg",
    genAi: "/assets/platform-suite/value-adds/gen-ai.svg",
    glowA: "/assets/platform-suite/value-adds/glow-a.svg",
    glowB: "/assets/platform-suite/value-adds/glow-b.svg",
  },
  deployment: {
    saas: "/assets/platform-suite/deployment/saas.svg",
    hosted: "/assets/platform-suite/deployment/hosted.svg",
  },
} as const;

/** Figma heading gradient — blue → purple → pink */
export const PLATFORM_SUITE_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

export const platformSuiteHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "Platform Suite" },
  ],
  pageTag: "CloudKeeper Platform Suite",
  headingLine1: "From Visibility to ROI: Exclusive All-in-One",
  headingGradient: "FinOps Suite for Guaranteed Results",
  stats: [
    { value: "$120M+", label: "Total savings delivered" },
    { value: "400+", label: "Happy customers" },
    { value: "100%", label: "G2 Satisfaction Score" },
  ],
  cta: {
    label: "Take the complete suite tour",
    href: "#contact",
  },
} as const;

/** Figma 202:21074 — Tabs-carasoul-platforms (3 tabs, no LensGPT) */
export const platformSuiteTabsIntro = {
  heading: "The platform suite that pays for itself… many times over!",
  subtitle:
    "The CloudKeeper platform suite goes far beyond providing tools. It’s a powerful blend of best-in-class automated FinOps platforms that provide visibility while optimizing your cloud costs and architecture, along with unlimited 24x7 support & expert services.",
} as const;

export const platformSuiteTabsContent: readonly PlatformTab[] = [
  {
    id: "lens",
    label: "CloudKeeper Lens",
    icon: platformsAssets.tabLensIcon,
    category: "Visibility & Governance",
    headline:
      "Real‑time cost analytics, hourly trends, budgets, tagging, and anomaly detection - secure access to resource level details.",
    exploreHref: "#contact",
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
    exploreHref: "#contact",
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
    exploreHref: "#contact",
    featureTags: [
      "Commitment management",
      "Rate optimization",
      "Coverage analysis",
    ],
    dashboard: platformsAssets.dashboardLens,
    slides: 4,
  },
] as const;

export const platformSuiteValueAdds = {
  headingLine1: "With our Platform Suite, you also gain access to a set of",
  headingLine2: "powerful value-adds for end-to-end smarter cloud management.",
  cards: [
    {
      id: "check",
      eyebrow: "Streamline, Ensure Cost-Efficienty",
      title: "CloudKeeper Check",
      description:
        "Unlimited Personalized Architecture Reviews with remediation plans delivered by certified experts.",
      icon: platformSuiteAssets.valueAdds.check,
    },
    {
      id: "expert",
      eyebrow: "Unlimited 24x7 Services",
      title: "CloudKeeper Expert",
      description:
        "Access to certified architects, FinOps practitioners, and pre-committed consulting hours included.",
      icon: platformSuiteAssets.valueAdds.expert,
    },
    {
      id: "gen-ai",
      eyebrow: "Real-time guidance",
      title: "CloudKeeper Gen AI",
      description:
        "Interactive AI agents that answer spend questions, suggest optimizations, and provide real-time guidance.",
      icon: platformSuiteAssets.valueAdds.genAi,
    },
  ],
} as const;

/** Figma 202:21003 — Flexible Deployment Options */
export const platformSuiteDeployment = {
  heading: "Flexible Deployment Options",
  subtitle:
    "Choose between SaaS or Private deployment to match your infrastructure preferences and security requirements.",
  options: [
    {
      id: "saas",
      label: "SaaS",
      description:
        "The products are hosted in Cloudkeeper’s infrastructure, available to users over the internet",
      icon: platformSuiteAssets.deployment.saas,
      variant: "filled" as const,
    },
    {
      id: "hosted",
      label: "Hosted",
      description:
        "The products are hosted in the customers’ own cloud, available to users over the corporate intranet.",
      note: "Cloudkeeper provides expert managed services for set-up, support, and performing ongoing upgrades of products in customers’ cloud.",
      icon: platformSuiteAssets.deployment.hosted,
      variant: "outline" as const,
    },
  ],
  cta: {
    label: "Book a demo",
    href: "#contact",
  },
} as const;

/** Platform Suite overlapping cards — same defaults, page-specific id via props. */
export const platformSuitePhases = defaultCardOverlappingContent;

/** Platform Suite why-choose — shared section defaults. */
export const platformSuiteWhyChoose = defaultWhyChooseCkAsContent;

/** Platform Suite — The CloudKeeper Advantage. */
export const platformSuiteAdvantage = defaultCloudKeeperAdvantageContent;

export const platformSuiteCustomersLogosHeading =
  "Discover how CloudKeeper drives success for businesses across all industries.";

export const platformSuiteMeta = {
  title: "Platform Suite",
  description:
    "From visibility to ROI — CloudKeeper’s all-in-one FinOps Platform Suite for guaranteed results.",
} as const;
