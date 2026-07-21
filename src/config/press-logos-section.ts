/** Figma 8251:21159 — card: PR logos */
export const PRESS_LOGOS_BG =
  "linear-gradient(90deg, rgba(226, 240, 255, 0.6) 0%, rgba(255, 233, 245, 0.6) 100%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)";

export const pressLogosAssets = {
  arrowNext: "/assets/home/press-logos/arrow-next.svg",
  arrowPrev: "/assets/home/press-logos/arrow-prev.svg",
  arrowViewAll: "/assets/home/press-logos/arrow-view-all.svg",
  iconExternal: "/assets/home/press-logos/icon-external.svg",
} as const;

export type PressLogoItem = {
  id: string;
  publication: string;
  logoSrc: string;
  logoWidth: number;
  logoHeight: number;
  logoClassName?: string;
  headline: string;
  href: string;
};

export const pressLogosContent = {
  heading: "CloudKeeper in the Spotlight",
  viewAllHref: "#",
} as const;

export const pressLogoItems: readonly PressLogoItem[] = [
  {
    id: "business-insider",
    publication: "Business Insider",
    logoSrc: "/assets/home/press-logos/logo-business-insider.png",
    logoWidth: 227,
    logoHeight: 30,
    headline:
      "CloudKeeper Achieves AWS AI Services Competency, Reinforcing Its Role In Scalable AI Adoption",
    href: "#",
  },
  {
    id: "itvoice",
    publication: "ITVoice",
    logoSrc: "/assets/home/press-logos/logo-itvoice.png",
    logoWidth: 102,
    logoHeight: 36,
    headline:
      "CloudKeeper Certified as a Great Place to Work for the Second Consecutive Year",
    href: "#",
  },
  {
    id: "techcircle",
    publication: "TechCircle",
    logoSrc: "/assets/home/press-logos/logo-techcircle.png",
    logoWidth: 112,
    logoHeight: 37,
    headline:
      "CloudKeeper Accelerates Global Momentum in 2025 with New Leadership and New Platform Suite",
    href: "#",
  },
  {
    id: "express-computer",
    publication: "Express Computer",
    logoSrc: "/assets/home/press-logos/logo-express-computer.png",
    logoWidth: 109,
    logoHeight: 36,
    logoClassName: "h-[36px] w-[109px] object-cover object-left",
    headline:
      "High-tech and digital native businesses need a strategic approach to manage multi-cloud cost",
    href: "#",
  },
  {
    id: "apple-news",
    publication: "Apple News",
    logoSrc: "/assets/home/press-logos/logo-apple-news.png",
    logoWidth: 142,
    logoHeight: 36,
    headline:
      "Burn Cloud Costs, Not Cash: How the 30-Day Challenge Is Making AWS Leaner in 2025",
    href: "#",
  },
  {
    id: "ceo-weekly",
    publication: "CEO Weekly",
    logoSrc: "/assets/home/press-logos/logo-ceo-weekly.png",
    logoWidth: 109,
    logoHeight: 36,
    logoClassName: "h-[36px] w-[109px] object-cover object-left",
    headline:
      "Unlock Hidden Cloud Savings with CloudKeeper's 30-Day Cloud Fitness Challenge",
    href: "#",
  },
  {
    id: "benzinga",
    publication: "Benzinga",
    logoSrc: "/assets/home/press-logos/logo-benzinga.svg",
    logoWidth: 191,
    logoHeight: 26,
    headline:
      "CloudKeeper named a Major Contender in Everest Group FinOps Cost Management Products PEAK Matrix® Assessment 2025",
    href: "#",
  },
  {
    id: "msn",
    publication: "MSN",
    logoSrc: "/assets/home/press-logos/logo-msn.svg",
    logoWidth: 110,
    logoHeight: 42,
    headline:
      "CloudKeeper appoints former AWS and Google Cloud leader Deepak Singh as Senior Advisor",
    href: "#",
  },
] as const;

export const PRESS_CARD_HOVER_BORDER_GRADIENT =
  "linear-gradient(135deg, #17a5fb 0%, #9a4bff 50%, #ed0082 100%)";

/** Figma card row — exactly 3 cards fit viewport width */
export const PRESS_VISIBLE_CARDS = 3;
export const PRESS_CARD_HEIGHT = 267;
export const PRESS_CARD_WIDTH_OFFSET = 4;
export const PRESS_CARD_GAP = 20;

/** Matches certifications carousel — 3s smooth page slide */
export const PRESS_CAROUSEL_TRANSITION = {
  duration: 3,
  ease: [0.25, 1, 0.35, 1] as const,
};
