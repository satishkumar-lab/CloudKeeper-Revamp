import { routes } from "@/config/routes";

/** Figma TXWXQ7pjvZhQQ5hydi40Ab — New_PPA+ / Hero-Banner-Inner pages (8594:103140) */
export const solutionsPpaPlusAssets = {
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  heroDeco: "/assets/solutions/az/hero-deco.png",
  valueCards: {
    discounts: "/assets/solutions/ppa-plus/value-cards/circle-discounts.svg",
    commitments: "/assets/solutions/ppa-plus/value-cards/circle-commitments.svg",
    support: "/assets/solutions/ppa-plus/value-cards/circle-support.svg",
  },
  whatIsPpa: {
    bgDeco: "/assets/solutions/ppa-plus/what-is-ppa/bg-deco.png",
    spend: "/assets/solutions/ppa-plus/what-is-ppa/icon-spend.svg",
    marketplace: "/assets/solutions/ppa-plus/what-is-ppa/icon-marketplace.svg",
    prepay: "/assets/solutions/ppa-plus/what-is-ppa/icon-prepay.svg",
    users: "/assets/solutions/ppa-plus/what-is-ppa/icon-users.svg",
  },
  videoExplainer: {
    thumbnail: "/assets/solutions/ppa-plus/video-explainer/thumbnail.png",
    playIcon: "/assets/solutions/ppa-plus/video-explainer/play-icon.svg",
  },
  stats: {
    awsBadge: "/assets/solutions/ppa-plus/stats/aws-partner-badge.png",
  },
} as const;

/** Figma heading gradient — blue → purple → pink */
export const SOLUTIONS_PPA_PLUS_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

export const solutionsPpaPlusHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "CloudKeeper PPA+" },
  ],
  headingLine1: "AWS PPA has impressive benefits",
  headingGradient: "and we make it even better!",
  highlights: [
    {
      lines: ["Additional Discounts on", "AWS PPA/EDP"],
    },
    {
      lines: ["Lower Annual", "Commitments"],
    },
    {
      lines: ["Discounted Price on AWS", "Support and more!"],
    },
  ],
  cta: {
    label: "Let's get started",
    href: "/#contact",
  },
} as const;

/** Figma 8200:166733 — Get the best AWS PPA deal / circular value cards */
export const solutionsPpaPlusValueCards = {
  heading: "Get the best AWS PPA deal with CloudKeeper PPA+",
  body: [
    "Make the most out of the AWS Private Pricing Agreement with CloudKeeper (an AWS Premier Partner) by your side. CloudKeeper PPA+",
    "(formerly CloudKeeper EDP+) is a comprehensive solution that delivers greater benefits and added value beyond the standard AWS PPA/EDP.",
  ],
  cards: [
    {
      id: "discounts",
      titleLines: ["Additional AWS EDP", "Discounts"],
      body: "Save more with additional AWS PPA/EDP discounts for your committed usage.",
      circle: solutionsPpaPlusAssets.valueCards.discounts,
    },
    {
      id: "commitments",
      titleLines: ["Lower Annual", "Commitments"],
      body: "Get AWS PPA/EDP Discounts at a lower annual spend commitment.",
      circle: solutionsPpaPlusAssets.valueCards.commitments,
    },
    {
      id: "support",
      titleLines: ["Discounted Price on", "AWS Support"],
      body: "Partner-led enterprise support at a lower cost as compared to direct AWS Support.",
      circle: solutionsPpaPlusAssets.valueCards.support,
    },
  ],
} as const;

/** Figma 8200:166804 — What is the AWS PPA / discount factors */
export const solutionsPpaPlusWhatIsPpa = {
  heading: "What is the AWS Private Pricing Agreement (PPA)?",
  body: "AWS Private Pricing Agreement or AWS Enterprise Discount Program (AWS EDP) offers discounted usage pricing for organizations that commit to a higher volume and longer-term usage. The size of the discount scales in proportion to the committed volume and term length.",
  factorsLabel: "There are even more factors affecting the AWS PPA discounts:",
  factors: [
    {
      id: "spend",
      icon: solutionsPpaPlusAssets.whatIsPpa.spend,
      lines: [
        "The dollar value of the annual",
        "AWS spend for the previous year.",
      ],
    },
    {
      id: "marketplace",
      icon: solutionsPpaPlusAssets.whatIsPpa.marketplace,
      lines: [
        "Spend on the AWS Marketplace",
        "towards third-party listings.",
      ],
    },
    {
      id: "prepay",
      icon: solutionsPpaPlusAssets.whatIsPpa.prepay,
      lines: [
        "Partial or full prepayment for",
        "the various services availed.",
      ],
    },
    {
      id: "users",
      icon: solutionsPpaPlusAssets.whatIsPpa.users,
      lines: [
        "Additional AWS cloud users in",
        "immediate association, i.e., a subsidiary.",
      ],
    },
  ],
} as const;

/** Figma 8200:166839 — AWS PPA/EDP video explainer */
export const solutionsPpaPlusVideoExplainer = {
  heading: "AWS PPA/EDP Explained, from AWS re:Invent 2023",
  videoHref: "https://www.youtube.com/watch?v=hcE4EUlBmRo",
  cta: {
    label: "Read more about AWS PPA/EDP",
    href: "https://www.cloudkeeper.com/insights/blog/considerations-aws-edp-lightning-theatre-session-aws-reinvent-2023",
  },
} as const;

/** Figma 8200:166987 — Why choose CloudKeeper / stats + AWS partner */
export const solutionsPpaPlusStats = {
  headingLines: [
    "Why choose CloudKeeper as",
    "your Cloud Cost Optimization Partner?",
  ],
  cards: [
    {
      id: "expertise",
      value: "15",
      suffix: "+",
      label: "Years of Cloud Expertise",
      bg: "#e2fdff",
      illustration: "/assets/home/stat-expertise.svg",
      illustrationClass:
        "bottom-[-3px] right-[-2px] h-[77.5px] w-[88px]",
    },
    {
      id: "savings",
      value: "20",
      suffix: "%",
      label: "Average Cloud Savings Delivered",
      bg: "#fff4e0",
      illustration: "/assets/home/stat-savings.svg",
      illustrationClass:
        "bottom-[-22px] right-[-6px] h-[99px] w-[101px] opacity-[0.12]",
    },
    {
      id: "customers",
      value: "400",
      suffix: "+",
      label: "Global Customers",
      bg: "#ffecf0",
      illustration: "/assets/home/stat-customers.svg",
      illustrationClass:
        "bottom-[-27px] right-[-2px] h-[104px] w-[89px]",
    },
    {
      id: "certified",
      value: "150",
      suffix: "+",
      label: "Certified Engineers & Architects",
      bg: "#e9eeff",
      illustration: "/assets/home/stat-certified.svg",
      illustrationClass:
        "bottom-[-39px] right-0 h-[116px] w-[84px]",
    },
  ],
  partner: {
    competencies: [
      "Well - Architected Partner",
      "Solution Provider",
      "MSP Partner",
      "Migration Partner",
      "DevOps Competency",
    ],
    body: "Highest tier partner with 100+ certifications & expertise in designing, migrating, & managing workloads on the AWS cloud.",
  },
  cta: {
    label: "Talk to our experts",
    href: "/#contact",
  },
} as const;

export const solutionsPpaPlusMeta = {
  title: "CloudKeeper PPA+",
  description:
    "Get the best AWS PPA deal with CloudKeeper PPA+ — additional discounts, lower annual commitments, and discounted AWS support.",
} as const;
