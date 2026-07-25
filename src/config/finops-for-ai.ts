import type { CardOverlappingContent } from "@/config/card-overlapping-section";
import type { LightBannerCtaContent } from "@/config/light-banner-cta-section";
import { routes } from "@/config/routes";

/** Figma 8141:134927 — FinOps for AI */

export const finopsForAiAssets = {
  /** Same ribbon deco as Why Us / AZ / PPA+ heroes */
  heroDeco: "/assets/solutions/az/hero-deco.png",
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  icons: {
    visibility: "/assets/finops-for-ai/hero/icon-visibility.svg",
    attribution: "/assets/finops-for-ai/hero/icon-attribution.svg",
    compare: "/assets/finops-for-ai/hero/icon-compare.svg",
    multicloud: "/assets/finops-for-ai/hero/icon-multicloud.svg",
  },
  challenges: {
    warning: "/assets/finops-for-ai/challenges/icon-warning.svg",
    sparkA: "/assets/finops-for-ai/challenges/spark-a.svg",
    sparkB: "/assets/finops-for-ai/challenges/spark-b.svg",
    sparkC: "/assets/finops-for-ai/challenges/spark-c.svg",
  },
  phases: {
    bannerBg: "/assets/finops-for-ai/phases/banner-bg.jpg",
    headset: "/assets/finops-for-ai/phases/icon-headset.svg",
    sparkA: "/assets/finops-for-ai/phases/spark-a.svg",
    sparkB: "/assets/finops-for-ai/phases/spark-b.svg",
  },
  solutions: {
    modelComparison: "/assets/finops-for-ai/solutions/model-comparison.png",
    visibility: "/assets/finops-for-ai/solutions/visibility.png",
    infrastructure: "/assets/finops-for-ai/solutions/infrastructure.png",
    genaiLaunchpad: "/assets/finops-for-ai/solutions/genai-launchpad.png",
    claudeAccess: "/assets/finops-for-ai/solutions/claude-access.png",
    bullet: "/assets/finops-for-ai/solutions/ic-bullet-pink.svg",
    tagStars: "/assets/finops-for-ai/solutions/ic-stars.svg",
    claude: {
      symbol: "/assets/finops-for-ai/solutions/claude/symbol.svg",
      anthropic: "/assets/finops-for-ai/solutions/claude/anthropic.png",
      gears: "/assets/finops-for-ai/solutions/claude/gears.svg",
      sessions: "/assets/finops-for-ai/solutions/claude/sessions-icon.svg",
      costArrow: "/assets/finops-for-ai/solutions/claude/cost-arrow.svg",
    },
  },
  whyCk: {
    deco: "/assets/finops-for-ai/why-ck/deco-ribbon.png",
    expertise: "/assets/finops-for-ai/why-ck/icon-expertise.svg",
    multicloud: "/assets/finops-for-ai/why-ck/icon-multicloud.svg",
    reusable: "/assets/finops-for-ai/why-ck/icon-reusable.svg",
    enterprise: "/assets/finops-for-ai/why-ck/icon-enterprise.svg",
    anthropicLogo: "/assets/finops-for-ai/why-ck/logo-anthropic.png",
    awsBadge: "/assets/finops-for-ai/why-ck/badge-aws-clean.png",
  },
} as const;

/** Figma heading gradient — blue → purple → pink (same as Why Us) */
export const FINOPS_FOR_AI_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

/** Figma 21:8986 — card:unused_resources (same as Why Us) */
export const FINOPS_FOR_AI_STAT_CARD = {
  width: 271,
  height: 213,
  hoverBleed: 12,
} as const;

export type FinopsForAiHeroCard = {
  /** Multi-line card body — Figma uses two lines */
  lines: readonly string[];
  icon: string;
  iconWidth: number;
  iconHeight: number;
  /** Desktop vertical offset — Figma 8141:134945 */
  offsetY: number;
};

export const finopsForAiMeta = {
  title: "FinOps for AI | CloudKeeper",
  description:
    "Control AI costs and scale with confidence. Optimize AI workloads and the cloud services that power them.",
} as const;

/** Figma 8141:134929 — Header_com (same layout as Why Us hero + breadcrumbs + CTA) */
export const finopsForAiHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "FinOps for AI" },
  ],
  headingPrefix: "FinOps for AI: ",
  headingGradient: "Control Costs. Scale with Confidence",
  subtitle:
    "We optimize your entire stack - AI workloads + cloud services that power them.",
  cta: {
    label: "Talk to our Experts",
    href: "#contact",
  },
  cards: [
    {
      lines: [
        "Visibility and optimization across",
        "AI workloads & infrastructure",
      ],
      icon: finopsForAiAssets.icons.visibility,
      iconWidth: 30,
      iconHeight: 30,
      offsetY: 0,
    },
    {
      lines: [
        "Cost attribution across teams,",
        "containers, and workloads",
      ],
      icon: finopsForAiAssets.icons.attribution,
      iconWidth: 32,
      iconHeight: 32,
      offsetY: 49.5,
    },
    {
      lines: [
        "Compare models by cost,",
        "performance, and workload fit",
      ],
      icon: finopsForAiAssets.icons.compare,
      iconWidth: 29,
      iconHeight: 28,
      offsetY: 0,
    },
    {
      lines: [
        "Built for Bedrock, SageMaker,",
        "EKS, ECS, and multi-cloud AI",
      ],
      icon: finopsForAiAssets.icons.multicloud,
      iconWidth: 34,
      iconHeight: 34,
      offsetY: 39.5,
    },
  ] as const satisfies readonly FinopsForAiHeroCard[],
} as const;

/** Figma 8141:134972 — The Cost Challenges of Scaling AI */
export type FinopsForAiChallenge = {
  title: string;
  body: string;
};

export const finopsForAiChallenges = {
  heading: "The Cost Challenges of Scaling AI",
  subtitle:
    "AI adoption is accelerating - but costs are becoming harder to predict and optimize. We consistently see the same set of challenges across our customer environments.",
  items: [
    {
      title: "Dynamic Pricing Complexities",
      body: "Token-based AI pricing is highly variable, making costs unpredictable and difficult to forecast.",
    },
    {
      title: "GPU Inefficiencies",
      body: "Idle and over-provisioned GPU resources drive unnecessary spend and infra wastage.",
    },
    {
      title: "Limited Cost Visibility",
      body: "Lack of granular insights across models, tokens, containers and workloads limits cost transparency.",
    },
    {
      title: "AI Infrastructure Complexity",
      body: "Managing AI costs across GPUs, containers, and cloud environments is increasingly complex.",
    },
    {
      title: "Uncontrolled Experimentation",
      body: "Rapid AI iteration without guardrails leads to escalating and unmanaged costs.",
    },
    {
      title: "Fragmented AI Environments",
      body: "AI workloads across clouds lack unified visibility, governance, and cost control.",
    },
  ] as const satisfies readonly FinopsForAiChallenge[],
} as const;

/** Figma 8141:134985 — FinOps for AI - Across Every Phase of Adoption */
export type FinopsForAiPhaseCard = {
  number: string;
  title: string;
  body: string;
};

export const finopsForAiPhases = {
  heading: "FinOps for AI - Across Every Phase of Adoption",
  subtitle:
    "From initial builds to large-scale deployments, CloudKeeper helps you control, optimize, and govern AI costs at every step.",
  cards: [
    {
      number: "01",
      title: "Build Right",
      body: "Design AI workloads with cost efficiency built in from the start.",
    },
    {
      number: "02",
      title: "Choose Right",
      body: "Select models based on cost, performance, and use-case fit.",
    },
    {
      number: "03",
      title: "Scale Right",
      body: "Continuously optimize tokens, GPUs, and workloads at scale.",
    },
  ] as const satisfies readonly FinopsForAiPhaseCard[],
  support: {
    title: "FinOps Expertise and Support:",
    body: "Continuous guidance to optimize costs, enforce governance, and scale efficiently",
  },
  cta: {
    label: "Book a Free Consultation",
    href: "#contact",
  },
} as const;

/**
 * Figma 8141:135042 — Our Full-stack Solution for FinOps for AI
 * Same sticky card-overlap pattern as Platform Suite.
 */
export const finopsForAiSolutions: CardOverlappingContent = {
  headingLine1: "Our Full-stack Solution for FinOps for AI",
  headingLine2: "",
  subtitleBefore:
    "A structured set of capabilities to help you optimize models, GPUs, infrastructure, and workloads through a unified FinOps approach.",
  subtitleAccent: "",
  subtitleAfter: "",
  cards: [
    {
      id: "model-comparison",
      tag: "Our New Offering",
      tagVariant: "featured",
      title: "AI Model Comparison & Intelligence Platform",
      bullets: [
        "Token cost comparison across leading models",
        "Cost vs performance benchmarking",
        "Use-case-based model recommendations",
        "Scenario-based cost estimation",
      ],
      number: "01",
      visual: finopsForAiAssets.solutions.modelComparison,
    },
    {
      id: "visibility",
      title: "AI Visibility & Intelligence Platform",
      bullets: [
        "Usage analytics and spend tracking",
        "Performance monitoring across models",
        "Cost allocation and reporting",
        "Optimization recommendations",
      ],
      number: "02",
      visual: finopsForAiAssets.solutions.visibility,
    },
    {
      id: "infrastructure",
      tag: "Launching Soon",
      tagVariant: "featured",
      title: "AI Infrastructure & Usage Optimization",
      bullets: [
        "Bedrock invocation and token-level cost visibility",
        "GPU utilization, rightsizing, and idle resource optimization",
        "AI workload cost attribution across EKS and ECS",
        "RI, Savings Plan, and Spot optimization for AI workloads",
      ],
      number: "03",
      visual: finopsForAiAssets.solutions.infrastructure,
    },
    {
      id: "genai-launchpad",
      title: "GenAI Readiness and Launchpad",
      bullets: [
        "Rapid PoC development with reusable frameworks",
        "Cost-aware architecture and model selection",
        "Cloud-native deployment across AWS and GCP",
        "Built-in cost optimization from Day 1",
      ],
      number: "04",
      visual: finopsForAiAssets.solutions.genaiLaunchpad,
    },
    {
      id: "claude-access",
      title: "Claude Model Access & Cost Governance",
      bullets: [
        "Authorized access to Claude via Amazon Bedrock",
        "Simplified procurement and unified billing",
        "Token usage tracking and cost optimization",
        "Enterprise-grade governance and compliance",
      ],
      number: "05",
      visual: finopsForAiAssets.solutions.claudeAccess,
    },
  ],
};

/**
 * Figma 8141:136175 — Why CloudKeeper?
 */
export type FinopsForAiCapability = {
  title: string;
  body: string;
  icon: string;
};

export const finopsForAiWhyCk = {
  heading: "Why CloudKeeper?",
  journey: {
    title: "Our Journey",
    body: "CloudKeeper has spent over 15 years mastering cloud cost optimization, delivering guaranteed savings at scale. With a dedicated AI Center of Excellence and innovations like LensGPT, our AI for FinOps platform, we're now extending that expertise into AI infrastructure, workload optimization, and FinOps for AI. With businesses increasingly adopting AI, we bring the same proven discipline to help you control costs and scale with confidence.",
  },
  capabilities: {
    title: "Our Capabilities",
    items: [
      {
        title: "Deep Cloud & AI Expertise",
        body: "150+ certified architects and a dedicated AI team delivering secure, production-grade AI workloads at scale.",
        icon: finopsForAiAssets.whyCk.expertise,
      },
      {
        title: "Multi-Cloud Capability",
        body: "Deep expertise across AWS, Google Cloud and Azure for flexible, optimized AI infrastructure and workloads.",
        icon: finopsForAiAssets.whyCk.multicloud,
      },
      {
        title: "Reusable AI Frameworks",
        body: "Pre-built prompt chains, evaluation scripts, and UI components to accelerate GenAI development.",
        icon: finopsForAiAssets.whyCk.reusable,
      },
      {
        title: "Enterprise-Ready by Design",
        body: "Secure, compliant, and scalable architectures built for enterprise environments.",
        icon: finopsForAiAssets.whyCk.enterprise,
      },
    ] as const satisfies readonly FinopsForAiCapability[],
  },
  partners: [
    {
      id: "anthropic",
      kind: "anthropic" as const,
      label: "Authorised Reseller of\nAnthropic's Claude AI Models.",
      logo: finopsForAiAssets.whyCk.anthropicLogo,
    },
    {
      id: "aws",
      kind: "aws" as const,
      label: "Certified AWS AI\nServices Provider",
      logo: finopsForAiAssets.whyCk.awsBadge,
    },
  ],
} as const;

/** Figma 8141:136176 — Banner-CTA copy for this page */
export const finopsForAiLightBannerCtaContent = {
  heading: "Build and Scale AI with Cost Confidence",
  body: [
    "Move from experimentation to production with complete cost visibility and control.",
  ],
  cta: {
    label: "Get a Free Assessment",
    href: "#contact",
  },
} as const satisfies LightBannerCtaContent;
