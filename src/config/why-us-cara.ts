/** Figma 8824:39848 — card: C.A.R.A. Framework */

const BASE = "/assets/why-us/cara";

export const whyUsCaraAssets = {
  infographic: `${BASE}/infographic.png`,
  pyramid: `${BASE}/pyramid.svg`,
  arrowLeft: `${BASE}/arrow-left.svg`,
  arrowRight: `${BASE}/arrow-right.svg`,
  savingsRail: `${BASE}/savings-rail.svg`,
  legend: (i: number) => `${BASE}/legends/${i}.svg`,
  icons: {
    cost: `${BASE}/icons/cost.svg?v=3`,
    ongoing: `${BASE}/icons/ongoing.svg?v=3`,
    native: `${BASE}/icons/native.svg?v=3`,
    raas: `${BASE}/icons/raas.svg?v=3`,
    adapt: `${BASE}/icons/adapt.svg?v=3`,
  },
} as const;

export const whyUsCaraContent = {
  headingBefore: "Our Unique Approach: ",
  headingBold: "CARA Framework",
  bodyBefore:
    "Maximizing ROI from your cloud investment isn’t a one-time task—it’s a dynamic, ongoing journey. Thus, our team leverages the ",
  bodyBold: "Continuous Assess Review Act (CARA) ",
  bodyAfter:
    "Framework that combines high-impact optimizations with continuous performance tracking.",
  savingsLabel: "Increase in savings",
  frameworkLabel: "C.A.R.A. Framework",
} as const;

/** Top → bottom (matches Figma pointer stack visually from peak to base) */
export const whyUsCaraTiers = [
  {
    id: "private-pricing",
    label: "Private Pricing & Enterprise Discount Agreements",
    legend: 6,
  },
  {
    id: "savings-plan",
    label: "Automated Savings Plan / Reserved Instances",
    legend: 5,
  },
  {
    id: "storage",
    label: "Data Storage Optimization (RDS, Redshift, Dynamodb)",
    legend: 4,
  },
  {
    id: "services",
    label: "Services Optimisation (K8S, EC2, ECS, EKS, RDS + 50 others)",
    legend: 3,
  },
  {
    id: "unused",
    label: "Unused resources - auto shutdown",
    legend: 2,
  },
  {
    id: "zombie",
    label: "Zombie Resource Management",
    legend: 1,
  },
  {
    id: "billing",
    label: "Billing Discount",
    legend: 0,
  },
] as const;

export const whyUsCaraBenefits = [
  {
    id: "cost",
    icon: whyUsCaraAssets.icons.cost,
    text: "Average 20% cost reduction within the first 90 days",
  },
  {
    id: "ongoing",
    icon: whyUsCaraAssets.icons.ongoing,
    text: "Ensures ongoing improvements",
  },
  {
    id: "native",
    icon: whyUsCaraAssets.icons.native,
    text: "Tailored for the unique needs of Digital Native Businesses",
  },
  {
    id: "raas",
    icon: whyUsCaraAssets.icons.raas,
    text: "Results-as-a-Service approach for measurable outcomes",
  },
  {
    id: "adapt",
    icon: whyUsCaraAssets.icons.adapt,
    text: "Adapts to your business priorities and existing flow of work",
  },
] as const;
