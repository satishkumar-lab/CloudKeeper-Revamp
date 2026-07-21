/** Figma 2439:18118 — MediaLogos component set (Website Redesign 2026) */
export const industryRecognitionAssets = {
  abstractShape: "/assets/home/industry-recognition/abstract-shape.png",
  logoIdc: "/assets/home/industry-recognition/logo-idc.svg",
  logoGartner: "/assets/home/industry-recognition/logo-gartner.svg",
  logoEverestIcon: "/assets/home/industry-recognition/logo-everest-icon.svg",
  logoEverestE: "/assets/home/industry-recognition/logo-everest-e.svg",
  logoEverestV: "/assets/home/industry-recognition/logo-everest-v.svg",
  logoEverestG: "/assets/home/industry-recognition/logo-everest-g.svg",
  logoEverestR: "/assets/home/industry-recognition/logo-everest-r.svg",
  logoEverestO: "/assets/home/industry-recognition/logo-everest-o.svg",
  logoIsgMark: "/assets/home/industry-recognition/logo-isg-mark.svg",
  logoIsgText: "/assets/home/industry-recognition/logo-isg-text.svg",
} as const;

export const INDUSTRY_RECOGNITION_BG =
  "linear-gradient(204deg, rgb(255, 255, 255) 37.79%, rgba(233, 244, 255, 0.4) 121.43%)";

export type IndustryRecognitionItem = {
  id: string;
  logoType: "idc" | "everest" | "gartner" | "isg";
  description: string;
};

export const industryRecognitionContent = {
  heading:
    "Recognized by the best in the industry for end-to-end cloud cost optimization",
} as const;

export const industryRecognitionItems: readonly IndustryRecognitionItem[] = [
  {
    id: "idc",
    logoType: "idc",
    description:
      "Major Player in MarketScape’s Worldwide FinOps Cloud Cost Optimization Assessment.",
  },
  {
    id: "everest",
    logoType: "everest",
    description:
      "Major Player in FinOps Cost Management Products PEAK Matrix Assessment 2025.",
  },
  {
    id: "gartner",
    logoType: "gartner",
    description:
      "Notable Vendor in Magic Quadrant for Public Cloud IT Transformation Services - Midmarket Global.",
  },
  {
    id: "isg",
    logoType: "isg",
    description: "Product Challenger in APAC for AWS Ecosystem Partners 2025.",
  },
] as const;
