/** Figma 8251:20843 — card: thought leadership */
export const thoughtLeadershipAssets = {
  iconBlogParts: [
    "/assets/home/thought-leadership/blog-part-0.svg",
    "/assets/home/thought-leadership/blog-part-1.svg",
    "/assets/home/thought-leadership/blog-part-2.svg",
    "/assets/home/thought-leadership/blog-part-3.svg",
    "/assets/home/thought-leadership/blog-part-4.svg",
    "/assets/home/thought-leadership/blog-part-5.svg",
  ] as const,
  iconWhitepaper: "/assets/home/thought-leadership/icon-whitepaper.svg",
  iconReports: "/assets/home/thought-leadership/icon-reports.svg",
  viewAllArrow: "/assets/home/thought-leadership/view-all-arrow.svg",
  cardArrow: "/assets/home/thought-leadership/card-arrow.svg",
  newsletterPattern: "/assets/home/thought-leadership/newsletter-pattern.png",
} as const;

export const THOUGHT_LEADERSHIP_BG =
  "radial-gradient(circle at 50% 50%, rgba(3,33,81,1) 0%, rgba(2,17,41,1) 50%, rgba(1,8,20,1) 75%, rgba(0,4,10,1) 87.5%, rgba(0,0,0,1) 100%)";

export const THOUGHT_LEADERSHIP_GLOW_TOP =
  "radial-gradient(circle, rgba(120,87,255,1) 0%, rgba(91,73,210,1) 17.8%, rgba(62,58,166,1) 35.6%, rgba(33,44,121,1) 53.4%, rgba(19,37,98,1) 62.3%, rgba(4,30,76,1) 71.2%)";

export const THOUGHT_LEADERSHIP_GLOW_BOTTOM =
  "radial-gradient(circle, rgba(255,160,87,1) 0%, rgba(192,125,79,1) 22.3%, rgba(129,91,71,1) 44.7%, rgba(97,74,68,1) 55.8%, rgba(65,57,64,1) 67%, rgba(34,40,60,1) 78.2%, rgba(18,32,58,1) 83.8%, rgba(2,23,56,1) 89.4%)";

export const NEWSLETTER_BG =
  "linear-gradient(90deg, rgb(12, 50, 116) 16.774%, rgb(4, 72, 104) 100%)";

export type ThoughtLeadershipTag = "Blog" | "Whitepaper" | "Reports";

export type ThoughtLeadershipItem = {
  id: string;
  tag: ThoughtLeadershipTag;
  date: string;
  title: string;
  href?: string;
};

export const thoughtLeadershipContent = {
  heading: "Thought Leadership",
  subtitle:
    "In-depth, research-led content from our certified FinOps & cloud experts",
  viewAllHref: "#",
  newsletter: {
    title: "Subscribe to our newsletter",
    subtitle: "Be the first to know the latest FinOps insights and news, do it now!",
    emailPlaceholder: "Business Email",
    submitLabel: "Subscribe now",
  },
} as const;

export const thoughtLeadershipItems: readonly ThoughtLeadershipItem[] = [
  {
    id: "agentic-ai",
    tag: "Blog",
    date: "Dec 2025",
    title:
      "From Generative AI to Agentic AI for FinOps: The Leap Towards Autonomous Intelligence",
    href: "#",
  },
  {
    id: "ri-management",
    tag: "Whitepaper",
    date: "Jan 2026",
    title:
      "Overcoming Challenges in RI Management through AI-driven Automated Solution",
    href: "#",
  },
  {
    id: "finops-landscape",
    tag: "Reports",
    date: "Feb 2026",
    title: "Navigating the FinOps Landscape: A Comprehensive Market Analysis",
    href: "#",
  },
] as const;

export const thoughtLeadershipTagStyles: Record<
  ThoughtLeadershipTag,
  { bg: string; icon: "blog" | "whitepaper" | "reports" }
> = {
  Blog: { bg: "#78f8ff", icon: "blog" },
  Whitepaper: { bg: "#ffb19f", icon: "whitepaper" },
  Reports: { bg: "#ceffe5", icon: "reports" },
};
