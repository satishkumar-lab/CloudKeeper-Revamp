import { routes } from "@/config/routes";

/** Figma 8271:7786 — Card animation: CloudCost */
export const solutionsAssets = {
  azIcon1: "/assets/home/solutions/az-icon-1.svg",
  azIcon2: "/assets/home/solutions/az-icon-2.svg",
  azIcon3: "/assets/home/solutions/az-icon-3.svg",
  azIcon4: "/assets/home/solutions/az-icon-4.svg",
  ppaIcon: "/assets/home/solutions/ppa-icon.svg",
  exploreArrow: "/assets/home/solutions/explore-arrow.svg",
  addonEllipse1: "/assets/home/solutions/addon-ellipse-1.svg",
  addonEllipse2: "/assets/home/solutions/addon-ellipse-2.svg",
  addonSpark1: "/assets/home/solutions/addon-spark-1.svg",
  addonSpark2: "/assets/home/solutions/addon-spark-2.svg",
  supportIcon: "/assets/home/solutions/support-icon.svg",
  unlockIcon: "/assets/home/solutions/unlock-icon.svg",
} as const;

export const solutionCards = [
  {
    id: "az",
    title: "CloudKeeper AZ",
    description:
      "Guaranteed discounts on the entire cloud bill with zero lock-ins or commitments.",
    exploreHref: routes.solutions.az,
    icon: "az" as const,
  },
  {
    id: "ppa",
    title: "CloudKeeper PPA+",
    description: "Maximize AWS PPA value with our\nadditional benefits.",
    exploreHref: routes.solutions.ppaPlus,
    icon: "ppa" as const,
  },
] as const;

export const solutionAddons = [
  {
    label: "Unlimited 24×7 cloud support",
    icon: solutionsAssets.supportIcon,
    iconRounded: "6px",
  },
  {
    label: "Access to CloudKeeper's FinOps Platform Suite",
    icon: solutionsAssets.unlockIcon,
    iconRounded: "36px",
  },
] as const;
