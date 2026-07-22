/** Figma 8200:169969 — card: how it works stepper */
export const azHowItWorksAssets = {
  dashLine: "/assets/solutions/az/how-it-works/dash-line.svg",
  bgDeco: "/assets/solutions/az/how-it-works/bg-deco.png",
} as const;

export type AzHowItWorksTextPart = {
  text: string;
  accent?: boolean;
};

export type AzHowItWorksStep = {
  number: string;
  title: string;
  parts: readonly AzHowItWorksTextPart[];
};

export const azHowItWorksContent = {
  heading: "How does it work?",
  subheading:
    "Your transition to CloudKeeper AZ takes only a few minutes to complete.",
  steps: [
    {
      number: "1",
      title: "Initial Analysis",
      parts: [
        { text: "Share your cloud usage details with " },
        { text: "our team", accent: true },
        { text: " for analysis." },
      ],
    },
    {
      number: "2",
      title: "Confirmation of savings",
      parts: [
        { text: "We will confirm the " },
        { text: "guaranteed cloud cost savings", accent: true },
        {
          text: " that CloudKeeper AZ can offer on various AWS and Azure services.",
        },
      ],
    },
    {
      number: "3",
      title: "Billing Setup Via CloudKeeper",
      parts: [
        { text: "Transfer your billing to CloudKeeper's organization account " },
        {
          text: "without sharing any access or credentials.",
          accent: true,
        },
      ],
    },
    {
      number: "4",
      title: "Savings Achieved",
      parts: [
        { text: "Experience " },
        { text: "instant cloud cost savings", accent: true },
        {
          text: " as soon as you are onboarded with CloudKeeper AZ.",
        },
      ],
    },
  ] as const satisfies readonly AzHowItWorksStep[],
  cta: {
    label: "Get started now",
    href: "/#contact",
  },
} as const;
