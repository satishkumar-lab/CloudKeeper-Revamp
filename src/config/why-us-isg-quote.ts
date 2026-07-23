/** Figma 58:15496 — Card: Testimonials (ISG Research quote strip) */

const BASE = "/assets/why-us/isg-quote";

export const whyUsIsgQuoteAssets = {
  logo: `${BASE}/isg-logo.png`,
  quote: `${BASE}/quote.svg`,
  decor: `${BASE}/decor-right.png`,
} as const;

/** Same radial family as DarkCtaBanner / Figma card bg */
export const WHY_US_ISG_QUOTE_BG =
  "radial-gradient(circle at 50% 50%, rgba(3,33,81,1) 0%, rgba(2,17,41,1) 50%, rgba(1,8,20,1) 75%, rgba(0,4,10,1) 87.5%, rgba(0,0,0,1) 100%)";

export const whyUsIsgQuoteContent = {
  /** Spoken as: “The ISG Research stated that…” — logo replaces the name visually */
  quoteBefore: "The",
  quoteAfter:
    "stated that CloudKeeper has proven capabilities and scale in providing FinOps solutions using a combination of platform and cost optimization services.",
  logoAlt: "ISG Research",
  cta: {
    label: "Check the Report",
    href: "#",
  },
} as const;
