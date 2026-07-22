/** Figma 8824:40361 — card: g2_review_customer */

const BASE = "/assets/why-us/g2";

export const whyUsG2Assets = {
  g2Icon: `${BASE}/g2-icon.svg`,
  g2Logo: `${BASE}/g2-logo.png`,
  starsSmall: `${BASE}/stars-small.svg`,
  starFull: `${BASE}/star-full.svg`,
  quoteSmall: `${BASE}/quote-small.svg`,
  quoteLarge: `${BASE}/quote-large.svg`,
  quoteClose: `${BASE}/quote-close.svg`,
  logoGliderMark: `${BASE}/logo-glider-mark.svg`,
  logoGliderText: `${BASE}/logo-glider-text.svg`,
  logoSeclore: `${BASE}/logo-seclore.svg`,
  decorEllipse1: `${BASE}/decor-ellipse-1.svg`,
  decorEllipse2: `${BASE}/decor-ellipse-2.svg`,
} as const;

/** Soft blue wash — Figma card background */
export const WHY_US_G2_BG =
  "linear-gradient(-1deg, rgba(226, 240, 255, 0.6) 0%, rgba(255, 255, 255, 0.6) 54%), #ffffff";

export type WhyUsG2TextSegment = {
  text: string;
  emphasis?: boolean;
};

export type WhyUsG2Review = {
  id: string;
  name: string;
  role: string;
  segments: WhyUsG2TextSegment[];
  company?: "glider" | "seclore";
  companyAlt?: string;
};

export const whyUsG2Content = {
  heading: "Pioneering end-to-end cloud management",
  rankHighlight: "Ranked #1",
  rankRest:
    " in User Satisfaction based on 100% genuine customer reviews for Cloud Management",
  cta: {
    label: "Read all reviews on G2",
    href: "https://www.g2.com/products/cloudkeeper/reviews",
  },
} as const;

export const whyUsG2Reviews: WhyUsG2Review[] = [
  {
    id: "aakash",
    name: "Aakash Sharma,",
    role: "Lead CloudOps",
    company: "seclore",
    companyAlt: "Seclore",
    segments: [
      {
        text: "CloudKeeper is a game-changer for cloud cost management.\nIt is ",
      },
      { text: "essential for controlling cloud spend", emphasis: true },
      {
        text: " and making the most out of the infrastructure. It’s become a ",
      },
      {
        text: "vital part of our cost management toolkit.",
        emphasis: true,
      },
    ],
  },
  {
    id: "sunny",
    name: "Sunny Chhatija,",
    role: "Engineering Manager",
    segments: [
      { text: "I would consider it as a " },
      { text: "one-stop solution ", emphasis: true },
      {
        text: "for my cloud spending/ reservations/ saving recommendations and optimisation efforts. ",
      },
      { text: "Their Tuner tool has been a great addition ", emphasis: true },
      {
        text: "to our account, helping us with real-time saving opportunities.",
      },
    ],
  },
  {
    id: "nikhil",
    name: "Nikhil,",
    role: "DevOps - Technical Lead",
    company: "glider",
    companyAlt: "Glider",
    segments: [
      {
        text: "We have been using CloudKeeper for quite some time and are happy to say that ",
      },
      {
        text: "we no longer worry much about our AWS costs because CloudKeeper handles it for us. ",
        emphasis: true,
      },
      {
        text: "Their support team is very responsive, and the platform is very user-friendly. Overall, ",
      },
      { text: "we are very satisfied with CloudKeeper!", emphasis: true },
    ],
  },
];
