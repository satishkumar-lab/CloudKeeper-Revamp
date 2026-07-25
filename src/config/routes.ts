/** Canonical marketing routes used across nav, footer, and page CTAs */
export const routes = {
  home: "/",
  whyUs: "/why-us",
  platformSuite: "/platform-suite",
  platforms: {
    commit: "/platform-suite/cloudkeeper-commit",
    tunerAws: "/platform-suite/cloudkeeper-tuner-aws",
    finopsForAi: "/platform-suite/finops-for-ai",
  },
  solutions: {
    az: "/solutions/cloudkeeper-az",
    ppaPlus: "/solutions/cloudkeeper-ppa-plus",
  },
} as const;
