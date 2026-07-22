import { SOLUTIONS_AZ_HEADING_GRADIENT } from "@/config/solutions-az";

/** Figma 8200:169791 — one-stop / savings-visibility section */
export const azOneStopAssets = {
  bullet: "/assets/solutions/az/one-stop/bullet-pink.svg",
  linkArrow: "/assets/solutions/az/one-stop/link-arrow.svg",
  titleRule: "/assets/solutions/az/one-stop/title-rule.svg",
  cardRule: "/assets/solutions/az/one-stop/card-rule.svg",
  bannerPattern: "/assets/solutions/az/one-stop/banner-pattern.jpg",
  spark1: "/assets/solutions/az/one-stop/spark-1.svg",
  spark2: "/assets/solutions/az/one-stop/spark-2.svg",
  sparkA: "/assets/solutions/az/one-stop/spark-a.svg",
  sparkB: "/assets/solutions/az/one-stop/spark-b.svg",
  deco: "/assets/solutions/az/hero-deco.png",
} as const;

export const AZ_ONE_STOP_DARK_BG =
  "radial-gradient(circle at 50% 50%, rgba(3,33,81,1) 0%, rgba(2,17,41,1) 50%, rgba(1,8,20,1) 75%, rgba(0,4,10,1) 87.5%, rgba(0,0,0,1) 100%)";

export const AZ_ONE_STOP_ACCENT_GRADIENT = SOLUTIONS_AZ_HEADING_GRADIENT;

export const azOneStopContent = {
  darkBanner: {
    titleBefore: "Your ",
    titleHighlight: "one-stop solution",
    titleAfter: " addressing the A to Z of cloud cost optimization",
    bodyBefore:
      "A comprehensive solution helping your business with everything needed to optimize the cloud costs effectively right from significant cloud cost savings & visibility to unlimited cloud support & cloud cost optimization services, ",
    bodyBold: "all at no commitment or cost.",
  },
  intro: {
    headingBefore: "Enjoy savings, visibility, and expert support - ",
    headingHighlight: "all in one place!",
    body: "In addition to ensuring savings, we provide comprehensive cloud cost visibility and proactive support acting as a cloud cost management vertical for your business.",
  },
  cards: [
    {
      id: "platform-suite",
      title: "Access to Platform Suite",
      bullets: [
        "End-to-end cloud management for guaranteed results.",
        "Savings, Visibility, Optimization & Governance – all in one.",
        "Gen-AI Powered FinOps for smarter, faster decisions.",
      ],
      linkLabel: "View Details",
      href: "#",
    },
    {
      id: "cloud-support",
      title: "Unlimited Cloud Support",
      bullets: [
        "Cloud cost optimization consulting by a designated solution architect.",
        "Customized Well-Architected Reviews by certified experts.",
        "Ensure ongoing cost-efficient cloud operations.",
      ],
      linkLabel: "View Details",
      href: "#",
    },
  ],
  offer: {
    before: "Experience these unmatched offerings at",
    highlight: "No Commitment!",
  },
  cta: {
    label: "Get started now",
    href: "/#contact",
  },
} as const;
