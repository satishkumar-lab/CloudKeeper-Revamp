import { routes } from "@/config/routes";

/** Shared “Why choose CloudKeeper as…” section content. */

export type WhyChooseCkAsBadge = {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type WhyChooseCkAsDeco = "cube" | "prism" | "cylinder";

export type WhyChooseCkAsCountCard = {
  id: string;
  value: number;
  suffix?: string;
  label: string;
  bg: string;
  deco: WhyChooseCkAsDeco;
  illustrationClass: string;
};

export type WhyChooseCkAsDisplayCard = {
  id: string;
  valueDisplay: string;
  suffix?: string;
  labelLine1: string;
  labelLine2: string;
  bg: string;
  deco: WhyChooseCkAsDeco;
  illustrationClass: string;
};

export type WhyChooseCkAsCard =
  | WhyChooseCkAsCountCard
  | WhyChooseCkAsDisplayCard;

export type WhyChooseCkAsContent = {
  headingLine1: string;
  headingLine2: string;
  badges: WhyChooseCkAsBadge[];
  cards: WhyChooseCkAsCard[];
  cta: { label: string; href: string };
};

export const WHY_CHOOSE_CK_AS_SECTION_BG =
  "linear-gradient(0deg, #FFF 79.77%, #F7FCFF 98.35%)";

/** Default copy — Why choose CloudKeeper as your partner. */
export const defaultWhyChooseCkAsContent: WhyChooseCkAsContent = {
  headingLine1: "Why choose CloudKeeper as",
  headingLine2: "your Cloud Cost Optimization Partner?",
  badges: [
    {
      id: "aws",
      src: "/assets/platform-suite/why-choose/aws-badge.svg",
      alt: "AWS Partner Premier Tier Services",
      width: 82,
      height: 82,
    },
    {
      id: "gcp",
      src: "/assets/platform-suite/why-choose/gcp-badge.svg",
      alt: "Google Cloud Partner",
      width: 200,
      height: 49,
    },
  ],
  cards: [
    {
      id: "expertise",
      value: 15,
      suffix: "+",
      label: "Years of AWS expertise",
      bg: "#e2fdff",
      deco: "cube",
      illustrationClass: "right-0 bottom-[-28px] h-[118px] w-[134px] opacity-20",
    },
    {
      id: "certified",
      value: 150,
      suffix: "+",
      label: "Certified cloud professionals",
      bg: "#fff4e0",
      deco: "prism",
      illustrationClass: "right-0 bottom-[-32px] h-[131px] w-[134px] opacity-20",
    },
    {
      id: "g2",
      valueDisplay: "4.7",
      labelLine1: "Out of 5 stars",
      labelLine2: "on G2",
      bg: "#e9eeff",
      deco: "cylinder",
      illustrationClass: "right-0 bottom-[-36px] h-[143px] w-[104px] opacity-20",
    },
  ],
  cta: {
    label: "Visit our page",
    href: routes.whyUs,
  },
};
