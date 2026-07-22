/** Figma 8200:169865 — Banner-CTA (CloudKeeper Prism) */
export const azPrismBannerAssets = {
  deco: "/assets/solutions/az/hero-deco.png",
} as const;

export const AZ_PRISM_BANNER_BG =
  "radial-gradient(circle at 50% 50%, rgba(3,33,81,1) 0%, rgba(2,17,41,1) 50%, rgba(1,8,20,1) 75%, rgba(0,4,10,1) 87.5%, rgba(0,0,0,1) 100%)";

/** Figma gradient on “CloudKeeper Prism” */
export const AZ_PRISM_NAME_GRADIENT =
  "linear-gradient(87.64deg, rgb(23, 150, 255) 2.86%, rgb(0, 204, 255) 40.68%, rgb(237, 0, 130) 85.51%)";

export type PrismBannerContent = {
  headingLine1Before: string;
  brand: string;
  headingLine2: string;
  body: string;
  cta: {
    label: string;
    href: string;
  };
};

export const azPrismBannerContent: PrismBannerContent = {
  headingLine1Before: "Get free access to ",
  brand: "CloudKeeper Prism",
  headingLine2: "for Centralized Identity & Access Management",
  body: "Single Sign-On across cloud, SaaS & on‑prem with enterprise‑grade security; supports different identity providers, multiple times.",
  cta: {
    label: "Explore CloudKeeper Prism",
    href: "#",
  },
};

/** Figma 8200:166795 — PPA+ Prism banner (same UI as AZ) */
export const ppaPlusPrismBannerContent: PrismBannerContent = {
  headingLine1Before: "Get free access to ",
  brand: "CloudKeeper Prism",
  headingLine2: "for Centralized Identity and Access Management",
  body: "Single Sign-On across cloud, SaaS & on‑prem with enterprise‑grade security; supports different identity providers, multiple times.",
  cta: {
    label: "Explore CloudKeeper Prism",
    href: "#",
  },
};
