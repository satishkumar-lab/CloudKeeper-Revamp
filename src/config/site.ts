export const siteConfig = {
  name: "CloudKeeper",
  tagline: "Enterprise cloud cost intelligence",
  description:
    "CloudKeeper helps enterprises govern, optimize, and scale cloud spend with clarity — without slowing engineering velocity.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001",
  links: {
    twitter: "https://twitter.com/cloudkeeper",
    linkedin: "https://www.linkedin.com/company/cloudkeeper",
    github: "https://github.com/cloudkeeper",
  },
} as const;

export type SiteConfig = typeof siteConfig;
