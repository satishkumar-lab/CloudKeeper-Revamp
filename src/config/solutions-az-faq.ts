/** Figma 8200:170072 — card: FAQ's */

export const azFaqAssets = {
  bgDeco: "/assets/solutions/az/faq/bg-deco.png",
} as const;

export type AzFaqItem = {
  id: string;
  question: string;
  answer: string;
};

export const azFaqContent = {
  heading: "Frequently Asked Questions",
  items: [
    {
      id: "platforms",
      question: "What cloud platforms do you support?",
      answer:
        "We provide solutions and services for the leading cloud platforms - Amazon Web Services(AWS) and Google Cloud Platforms.",
    },
    {
      id: "guaranteed",
      question:
        "Is the cloud savings guaranteed? Is it on my entire cloud bill?",
      answer:
        "Yes, the discount is 100% guaranteed. Our team will review your cloud bills for the past three months and provide you with a guaranteed discount percentage. The guaranteed cloud cost savings are delivered on various services of AWS including EC2 instances and GCP.",
    },
    {
      id: "catch",
      question:
        "I understand the value proposition offered by CloudKeeper. Is there any catch to this?",
      answer:
        "There is no catch! With over 15+ years of experience and working across 400+ global clients, we understand the nitty gritty of the cloud ecosystem. We work with cloud service providers directly and do a 3-year usage commitment for cloud instances. In turn, we offer our customers 1-year savings plan pricing for all their on-demand usage. We own all the risks and there is no upfront payment required and users can save on their compute usage across any region.",
    },
    {
      id: "monetarily",
      question: "How does CloudKeeper benefit monetarily with this solution?",
      answer:
        "We stand to benefit on two fronts: a pure play pricing arbitrage between the 3-year commitments we give to cloud service providers and the 1-year RI pricing we offer to customers like you; and volume-pricing discounts that we get from cloud service providers and offer reduced pricing to customers for those specific services.",
    },
    {
      id: "timeline",
      question:
        "How long does it take to achieve the savings after I get onboarded CloudKeeper AZ?",
      answer:
        "Instantaneous - since there is no upfront payment and you start saving from Day 1.",
    },
    {
      id: "secure",
      question: "Is my cloud account secure with CloudKeeper?",
      answer:
        "Absolutely, yes! You continue to control everything and CloudKeeper doesn't require any kind of access to your cloud account - including root credentials, PEM files or any passwords.",
    },
    {
      id: "servers",
      question: "Are the discounts applicable across servers?",
      answer:
        "Yes, it is applicable for all the servers, including the servers that are spun only during peak traffic (auto-scaled) or only during business hours.",
    },
    {
      id: "extras",
      question:
        "Does CloudKeeper AZ offer software and services without additional charges?",
      answer:
        "Absolutely! CloudKeeper AZ provides CloudKeeper Lens, 24*7 Personalized Cloud Support & Guidance, AWS Well-Architected Reviews, and Google Well-Architected Reviews; all on top of the guaranteed cloud cost savings, with no extra costs or commitments required.",
    },
  ] as const satisfies readonly AzFaqItem[],
} as const;
