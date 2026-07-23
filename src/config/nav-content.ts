import type { NavMenuId } from "@/config/nav-menus";
import { routes } from "@/config/routes";

export type NavLinkItem = {
  label: string;
  href: string;
  hasDropdown: boolean;
  menuId?: NavMenuId;
};

export const navLinks: NavLinkItem[] = [
  { label: "Why Us?", href: routes.whyUs, hasDropdown: false },
  {
    label: "Solutions",
    href: "/#solutions",
    hasDropdown: true,
    menuId: "solutions",
  },
  {
    label: "Platforms",
    href: routes.platformSuite,
    hasDropdown: true,
    menuId: "platforms",
  },
  {
    label: "Capabilities",
    href: "/#capabilities",
    hasDropdown: true,
    menuId: "capabilities",
  },
  { label: "Insights", href: "/#insights", hasDropdown: true, menuId: "insights" },
  { label: "Success Stories", href: "/#testimonials", hasDropdown: false },
  { label: "Pricing", href: "/#pricing", hasDropdown: false },
  { label: "Company", href: "/#company", hasDropdown: true, menuId: "company" },
];

export const promoContent = {
  liveLabel: "is Live",
  headline: "Find your cloud savings in",
  headlineHighlight: "under 5 minutes",
  reward: "Get a",
  rewardHighlight: "$100",
  rewardSuffix: "reward on signup",
  ctaLabel: "Launch the Mission",
  ctaHref: "https://hubs.ly/Q04h4kYN0",
} as const;
