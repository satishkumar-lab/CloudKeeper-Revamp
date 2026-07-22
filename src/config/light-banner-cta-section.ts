/** Figma 8774:138759 — Light Banner CTA (reusable across solution pages) */

export const lightBannerCtaAssets = {
  bannerBg: "/assets/light-banner-cta/banner-bg.png",
} as const;

export type LightBannerCtaContent = {
  heading: string;
  /** One string per line — rendered as stacked blocks */
  body: readonly string[];
  cta: {
    label: string;
    href: string;
    /** Open CTA in a new tab (external links) */
    external?: boolean;
  };
};

/** Default / PPA+ — Need Help with AWS Contract Negotiation */
export const ppaPlusLightBannerCtaContent = {
  heading: "Need Help with AWS Contract Negotiation?",
  body: [
    "If you’re looking for expert support in negotiating AWS PPA/EDP deal, we do that too.",
    "From planning to negotiation, our AWS experts ensure you secure a better AWS PPA/EDP deal.",
  ],
  cta: {
    label: "Learn More",
    href: "https://www.cloudkeeper.com/aws-ppa-contract-negotiation",
    external: true,
  },
} as const satisfies LightBannerCtaContent;

/** @deprecated Use `ppaPlusLightBannerCtaContent` */
export const defaultLightBannerCtaContent = ppaPlusLightBannerCtaContent;
