export const siteConfig = {
  name: "CloudKeeper",
  tagline: "Enterprise cloud cost intelligence",
  description:
    "CloudKeeper helps enterprises govern, optimize, and scale cloud spend with clarity — without slowing engineering velocity.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3001",
} as const;

export type SiteConfig = typeof siteConfig;
