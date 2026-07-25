import { routes } from "@/config/routes";

/** CK Tuner - AWS — page meta, hero, and shared section copy */

export const ckTunerAwsAssets = {
  breadcrumbChevron: "/assets/solutions/az/breadcrumb-chevron.svg",
  heroDeco: "/assets/ck-commit/hero-deco-abstract.png",
  heroDiagram: "/assets/ck-tuner-aws/hero/diagram.png",
} as const;

/** Figma heading gradient — blue → purple → pink */
export const CK_TUNER_AWS_HEADING_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

export const ckTunerAwsMeta = {
  title: "CK Tuner - AWS | CloudKeeper",
  description:
    "An automated AWS usage optimization and recommendation platform — real-time insights across 50+ AWS services.",
} as const;

/** Figma 396:36100 — Tuner AWS hero */
export const ckTunerAwsHero = {
  breadcrumbs: [
    { label: "Home", href: routes.home },
    { label: "CloudKeeper Tuner for AWS" },
  ],
  pageTag: "CloudKeeper Tuner",
  headingLine1: "An Automated AWS Usage",
  headingGradient: "Optimization & Recommendation Platform",
  stats: [
    { value: "50+", label: "AWS Services included" },
    { value: "150+", label: "Different recommendations" },
    { value: "10%", label: "Average savings delivered" },
  ],
  diagramAlt:
    "CloudKeeper Tuner flow — AWS accounts feed cost and usage data into Tuner, which produces rightsizing and cleanup recommendations across AWS services",
  cta: {
    label: "Sign up now",
    href: "#contact",
  },
} as const;

export const ckTunerAwsCustomersLogosHeading =
  "CloudKeeper Tuner Customers";

/** Figma Banner-CTA — Upgrade Your AWS Console (dark) */
export const ckTunerAwsDarkCtaBannerContent = {
  heading: "Upgrade Your AWS Console to Genius Mode with Tuner Extension!",
  subtext:
    "Get real-time & impactful recommendations tailored for your resources within your AWS console instantly.",
  ctaLabel: "Get started",
  ctaHref: `${routes.platforms.tunerAws}#contact`,
} as const;
