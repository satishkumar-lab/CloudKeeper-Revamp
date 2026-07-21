/** Figma 8306:12854 — Footer desktop */
export const FOOTER_NEWSLETTER_BG =
  "linear-gradient(90deg, #e2f0ff 0%, #ffe9f5 100%)";

export const footerAssets = {
  logo: "/assets/home/footer/ck-logo-footer.svg",
  linkedin: "/assets/home/footer/linkedin.svg",
  socialX: "/assets/home/footer/social-x.svg",
  youtube: "/assets/home/footer/youtube.svg",
  medium: "/assets/home/footer/medium.svg",
  gcpPartner: "/assets/home/footer/gcp-partner.svg",
  iso27001: "/assets/home/footer/iso-27001.svg",
  aicpaSoc2: "/assets/home/footer/aicpa-soc2.svg",
  gpwt: "/assets/home/footer/gpwt.svg",
  newsletterShape: "/assets/home/footer/newsletter-shape.png",
  copyright: "/assets/home/footer/copyright.svg",
  aws: {
    bg: "/assets/home/certifications/aws-bg.svg",
    border: "/assets/home/certifications/aws-border.svg",
    logo: "/assets/home/badges/aws-logo.svg",
  },
} as const;

export const footerContent = {
  copyright: "2026 CloudKeeper. All rights reserved.",
  newsletter: {
    line1: "Be the first to know the",
    line2: "Latest FinOps insights and news!",
    emailPlaceholder: "Business Email",
    submitLabel: "Subscribe now",
  },
} as const;

export type FooterLink = { label: string; href: string };

export type FooterGroup = {
  title: string;
  titleMuted?: boolean;
  links: readonly FooterLink[];
};

export const footerSocialLinks = [
  { id: "linkedin", label: "LinkedIn", href: "#", icon: footerAssets.linkedin },
  { id: "x", label: "X", href: "#", icon: footerAssets.socialX },
  { id: "youtube", label: "YouTube", href: "#", icon: footerAssets.youtube },
  { id: "medium", label: "Medium", href: "#", icon: footerAssets.medium },
] as const;

export const footerLegalLinks: readonly FooterLink[] = [
  { label: "Privacy Policy", href: "#" },
  { label: "Responsible Disclosure", href: "#" },
];

/** Column 1 — Solutions + Platform Suite + Industries (row 2) */
export const footerCol1Top: readonly FooterGroup[] = [
  {
    title: "Solutions",
    links: [
      { label: "CloudKeeper AZ", href: "#" },
      { label: "CloudKeeper PPA+", href: "#" },
    ],
  },
  {
    title: "Platform Suite",
    links: [
      { label: "Overview", href: "#" },
      { label: "CloudKeeper Commit", href: "#" },
      { label: "CloudKeeper Tuner - AWS", href: "#" },
      { label: "CloudKeeper Tuner - GCP", href: "#" },
      { label: "CloudKeeper Tuner - Kubernetes", href: "#" },
      { label: "CloudKeeper Lens", href: "#" },
      { label: "CloudKeeper Lens - AWS", href: "#" },
      { label: "CloudKeeper Lens - GCP", href: "#" },
      { label: "CloudKeeper LensGPT", href: "#" },
      { label: "FinOps for AI", href: "#" },
    ],
  },
];

export const footerIndustries: FooterGroup = {
  title: "Industries",
  links: [
    { label: "SaaS & ISVs", href: "#" },
    { label: "Retail & E-commerce", href: "#" },
    { label: "FinTech", href: "#" },
    { label: "Healthcare", href: "#" },
    { label: "Education", href: "#" },
    { label: "Media & Entertainment", href: "#" },
  ],
};

/** Column 2 — Capabilities + Insights (row 2) */
export const footerCapabilities: FooterGroup = {
  title: "Capabilities",
  links: [],
};

export const footerByUseCase: FooterGroup = {
  title: "By Use case",
  titleMuted: true,
  links: [
    { label: "AWS PPA Contract Negotiation", href: "#" },
    { label: "Cloud Migration", href: "#" },
    { label: "Cloud Modernization", href: "#" },
    { label: "Well-Architected Reviews - AWS", href: "#" },
    { label: "Well-Architected Reviews - GCP", href: "#" },
    { label: "Generative AI Launchpad", href: "#" },
    { label: "Kubernetes Management", href: "#" },
    { label: "Cloud Unit Economics", href: "#" },
    { label: "Cost Anomaly Detection", href: "#" },
    { label: "Cloud Analytics and Reporting", href: "#" },
  ],
};

export const footerInsights: FooterGroup = {
  title: "Insights",
  links: [
    { label: "Blog", href: "#" },
    { label: "WhitePapers", href: "#" },
    { label: "Podcasts", href: "#" },
    { label: "On-Demand Webinars", href: "#" },
    { label: "Expert Interview", href: "#" },
    { label: "Glossary", href: "#" },
    { label: "Reports", href: "#" },
  ],
};

/** Column 3 — By Services + Company (row 2) */
export const footerByServices: FooterGroup = {
  title: "By Services",
  titleMuted: true,
  links: [
    { label: "FinOps Consulting & Support", href: "#" },
    { label: "24×7 Personalized Cloud Support", href: "#" },
    { label: "Partner-Led Support", href: "#" },
    { label: "Solution Architect as a Service", href: "#" },
    { label: "Architecture Guidance", href: "#" },
    { label: "CloudKeeper Prism", href: "#" },
  ],
};

export const footerCompany: FooterGroup = {
  title: "Company",
  links: [
    { label: "Why CloudKeeper?", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Newsroom", href: "#" },
    { label: "Alliances - AWS", href: "#" },
    { label: "Alliances - Google Cloud", href: "#" },
  ],
};

/** Column 4 — By Programs + social/badges (row 2) */
export const footerByPrograms: FooterGroup = {
  title: "By Programs",
  titleMuted: true,
  links: [
    { label: "ISV Accelerator", href: "#" },
    { label: "Private Equity", href: "#" },
    { label: "AWS Migration Acceleration", href: "#" },
    { label: "AWS Graviton", href: "#" },
  ],
};
