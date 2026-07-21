import { homeAssets } from "@/config/home-assets";

export const navLinks = [
  { label: "Why Us?", href: "#why-us", hasDropdown: false },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Platforms", href: "#platforms", hasDropdown: true },
  { label: "Capabilities", href: "#capabilities", hasDropdown: true },
  { label: "Insights", href: "#insights", hasDropdown: true },
  { label: "Success Stories", href: "#testimonials", hasDropdown: false },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
  { label: "Company", href: "#company", hasDropdown: true },
] as const;

/** Desktop chip positions from Figma node 8286:8440 (nested pointer groups) */
export const heroServices = [
  {
    label: "Usage\nOptimization",
    icon: homeAssets.icons.usage,
    side: "left" as const,
    left: 51,
    top: 210,
    iconWidth: 30,
    iconHeight: 30,
    revealIndex: 1,
  },
  {
    label: "Cloud Cost\nVisibility & Analytics",
    icon: homeAssets.icons.visibility,
    side: "left" as const,
    left: 110,
    top: 370,
    iconWidth: 30,
    iconHeight: 30,
    revealIndex: 5,
  },
  {
    label: "24 x 7 Unlimited\nCloud Support",
    icon: homeAssets.icons.support,
    side: "left" as const,
    left: 355,
    top: 506,
    iconWidth: 20,
    iconHeight: 22.223,
    iconBgRadius: "rounded-[6px]" as const,
    revealIndex: 7,
  },
  {
    label: "Multi-Cloud\nGovernance",
    icon: homeAssets.icons.multicloud,
    side: "right" as const,
    left: 315,
    top: 0,
    iconWidth: 21,
    iconHeight: 22,
    iconBgRadius: "rounded-[6px]" as const,
    revealIndex: 2,
  },
  {
    label: "Kubernetes\nCost Management",
    icon: homeAssets.icons.kubernetes,
    side: "right" as const,
    left: 265,
    top: 237,
    iconWidth: 25.607,
    iconHeight: 24.7,
    revealIndex: 3,
  },
  {
    label: "Rate & Commitment\nOptimization",
    icon: homeAssets.icons.commit,
    side: "right" as const,
    left: 0,
    top: 338,
    iconWidth: 28.607,
    iconHeight: 22.138,
    revealIndex: 4,
  },
  {
    label: "FinOps for AI",
    icon: homeAssets.icons.ai,
    side: "right" as const,
    left: 75,
    top: 483,
    iconWidth: 22.696,
    iconHeight: 22.694,
    revealIndex: 6,
  },
];

export const clientLogos = [
  "UpGrad",
  "Swiggy",
  "Meesho",
  "Razorpay",
  "Freshworks",
  "ShareChat",
  "Lenskart",
  "Nykaa",
  "Delhivery",
  "Ola",
];

export const statsCards = [
  {
    value: "15",
    suffix: "+",
    label: "Years of\nCloud Expertise",
    bg: "#e2fdff",
    illustration: homeAssets.statExpertise,
    illustrationWidth: "134px",
    illustrationHeight: "118px",
    illustrationLeft: "177px",
    illustrationTop: "188.7px",
    illustrationInsetBottom: "-19.3%",
    illustrationOpacity: 1,
  },
  {
    value: "20",
    suffix: "%",
    label: "Average Cloud Savings Delivered",
    bg: "#fff4e0",
    illustration: homeAssets.statSavings,
    illustrationWidth: "134px",
    illustrationHeight: "131px",
    illustrationLeft: "175px",
    illustrationTop: "200.7px",
    illustrationOpacity: 0.12,
  },
  {
    value: "150",
    suffix: "+",
    label: "Certified Engineers & Architects",
    bg: "#e9eeff",
    illustration: homeAssets.statCertified,
    illustrationWidth: "103.804px",
    illustrationHeight: "142.983px",
    illustrationLeft: "203.23px",
    illustrationTop: "188px",
    illustrationOpacity: 1,
  },
  {
    value: "400",
    suffix: "+",
    label: "Global\nCustomers",
    bg: "#ffecf0",
    illustration: homeAssets.statCustomers,
    illustrationWidth: "134.689px",
    illustrationHeight: "158.358px",
    illustrationLeft: "170.57px",
    illustrationTop: "183.27px",
    illustrationOpacity: 1,
  },
];

export const uniqueCards = [
  {
    title: "CloudKeeper AZ",
    description:
      "Guaranteed discounts on the entire cloud bill with zero lock-ins or commitments.",
    exploreHref: "#",
  },
  {
    title: "CloudKeeper EDP+",
    description: "Maximize AWS EDP value with our additional benefits.",
    exploreHref: "#",
    featured: true,
  },
  {
    title: "CloudKeeper PPA+",
    description: "Maximize AWS PPA value with our additional benefits.",
    exploreHref: "#",
  },
];

export const platformTabs = [
  { id: "lens", label: "CloudKeeper Lens", active: true },
  { id: "tuner", label: "CloudKeeper Tuner", active: false },
  { id: "commit", label: "CloudKeeper Commit", active: false },
  { id: "lensgpt", label: "CloudKeeper LensGPT", active: false },
];

export const capabilitiesUseCase = [
  "AWS PPA Contract Negotiation",
  "Cloud Migration",
  "Cloud Modernization",
  "Generative AI Launchpad",
  "Well-Architected Reviews",
  "Kubernetes Management",
];

export const capabilitiesServices = [
  "FinOps Consulting & Support",
  "24×7 Personalized Cloud Support",
  "CloudKeeper Prism",
  "Rate & Commitment Optimization",
  "Cost Anomaly Detection",
  "Cloud Cost Visibility",
];

export const testimonials = [
  {
    quote:
      "Cost savings kicked in immediately and were reflected in the next month's bill. A second set of savings came in the longer term is due to the team, process and the tools that highlighted the areas we might look in to save money.",
    name: "Steven Thurlow",
    role: "CEO",
    company: "UpGrad",
    image: homeAssets.testimonialSteven,
  },
];

export const thoughtLeadershipItems = [
  {
    tag: "Blog" as const,
    date: "Dec 2025",
    title:
      "From Generative AI to Agentic AI for FinOps: The Leap Towards Autonomous Intelligence",
  },
  {
    tag: "Whitepaper" as const,
    date: "Jan 2026",
    title:
      "Overcoming Challenges in RI Management through AI-driven Automated Solution",
  },
  {
    tag: "Reports" as const,
    date: "Feb 2026",
    title: "Navigating the FinOps Landscape: A Comprehensive Market Analysis",
  },
];

export const pressLogos = [
  "Forbes",
  "TechCrunch",
  "Economic Times",
  "YourStory",
  "Business Insider",
  "CNBC",
];

export const certificationBadges = [
  "CDP",
  "CSRD",
  "ISO",
  "B-Corp",
  "ESOS",
  "SFDR",
  "SBTi",
  "TCFD",
];

export const footerColumns = {
  solutions: ["CloudKeeper AZ", "CloudKeeper PPA+"],
  platform: [
    "Overview",
    "CloudKeeper Commit",
    "CloudKeeper Tuner (AWS, GCP, Kubernetes)",
    "CloudKeeper Lens (AWS, GCP, GPT)",
    "FinOps for AI",
  ],
  useCase: [
    "AWS PPA Contract Negotiation",
    "Cloud Migration",
    "Generative AI Launchpad",
    "Cost Anomaly Detection",
  ],
  services: [
    "FinOps Consulting & Support",
    "24x7 Personalized Cloud Support",
    "CloudKeeper Prism",
  ],
  industries: [
    "SaaS & ISVs",
    "Retail & E-commerce",
    "FinTech",
    "Healthcare",
    "Education",
    "Media & Entertainment",
  ],
  insights: [
    "Blog",
    "WhitePapers",
    "Podcasts",
    "On-Demand Webinars",
    "Expert Interview",
    "Glossary",
    "Reports",
  ],
  company: [
    "Why CloudKeeper?",
    "About Us",
    "Our Team",
    "Careers",
    "Newsroom",
    "Alliances (AWS, Google Cloud)",
  ],
};