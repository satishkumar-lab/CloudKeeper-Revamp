/** Figma Banner-CTA - Section (dark) — reusable across internal pages */

export const DARK_BANNER_CTA_BG =
  "radial-gradient(circle at 50% 50%, rgba(3,33,81,1) 0%, rgba(2,17,41,1) 50%, rgba(1,8,20,1) 75%, rgba(0,4,10,1) 87.5%, rgba(0,0,0,1) 100%)";

export const darkCtaBannerAssets = {
  deco: "/assets/solutions/az/hero-deco.png",
} as const;

export type DarkCtaBannerContent = {
  heading: string;
  subtext: string;
  ctaLabel: string;
  ctaHref: string;
  /** Open CTA in a new tab (external links) */
  ctaExternal?: boolean;
};

/** Default — Why Us / screenshot copy */
export const defaultDarkCtaBannerContent = {
  heading: "They accomplished it!",
  subtext: "Are you ready to take your cloud journey to new heights?",
  ctaLabel: "Check the Report",
  ctaHref: "#",
} as const satisfies DarkCtaBannerContent;
