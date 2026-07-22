export type NavSubPill = {
  label: string;
  href: string;
  variant?: "default" | "purple";
  isNew?: boolean;
};

export type NavMenuLink = {
  label: string;
  href?: string;
  description?: string;
  /** Muted title style without link arrow */
  muted?: boolean;
  isNew?: boolean;
  icon?: string;
  children?: NavSubPill[];
  /** Platforms mega-menu grid placement (Figma 3×2) */
  gridColumn?: 1 | 2 | 3;
  gridRow?: 1 | 2 | 3 | 4;
};

export type NavMenuSection = {
  title?: string;
  titleIcon?: string;
  columns?: NavMenuLink[][];
  items?: NavMenuLink[];
};

export type NavMegaMenu = {
  id: NavMenuId;
  layout: "platforms" | "solutions" | "capabilities" | "insights" | "company";
  /** Wide menus center on viewport; narrow menus center under nav label */
  dropdownAlign?: "center" | "trigger";
  panelClassName?: string;
  sections: NavMenuSection[];
  promo?: {
    type: "platforms" | "insights";
    href?: string;
  };
};

export type NavMenuId =
  | "solutions"
  | "platforms"
  | "capabilities"
  | "insights"
  | "company";

import { navDropdownAssets } from "@/config/nav-assets";
import { routes } from "@/config/routes";

const LOREM = "Lörem ipsum maudeffekten aplan ut.";
const A = navDropdownAssets;

export const navMegaMenus: Record<NavMenuId, NavMegaMenu> = {
  solutions: {
    id: "solutions",
    layout: "solutions",
    dropdownAlign: "trigger",
    panelClassName: "w-[400px]",
    sections: [
      {
        items: [
          {
            label: "CloudKeeper AZ",
            href: routes.solutions.az,
            description: LOREM,
            icon: "/assets/home/nav/dropdown/icon-az.svg",
          },
          {
            label: "CloudKeeper PPA+",
            href: "#",
            description: LOREM,
            icon: "/assets/home/nav/dropdown/icon-ppa.svg",
          },
        ],
      },
    ],
  },

  platforms: {
    id: "platforms",
    layout: "platforms",
    panelClassName: "w-[min(100%,1280px)] min-h-[318px]",
    promo: { type: "platforms", href: "#" },
    sections: [
      {
        title: "Platform Suite",
        titleIcon: A.iconPlatform,
        items: [
          {
            label: "Overview",
            href: "#",
            description: LOREM,
            gridColumn: 1,
            gridRow: 1,
          },
          {
            label: "CloudKeeper Commit",
            href: "#",
            description: "Rate Optimization",
            gridColumn: 2,
            gridRow: 1,
          },
          {
            label: "FinOps for AI",
            href: "#",
            description: "AI cost optimization",
            isNew: true,
            gridColumn: 3,
            gridRow: 1,
          },
          {
            label: "CloudKeeper Tuner",
            description: "Usage Optimization",
            muted: true,
            gridColumn: 1,
            gridRow: 2,
            children: [
              { label: "AWS", href: "#" },
              { label: "Google Cloud", href: "#" },
              {
                label: "Kubernetes Tuner",
                href: "#",
                variant: "purple",
                isNew: true,
              },
            ],
          },
          {
            label: "CloudKeeper Lens",
            description: "Usage Optimization",
            muted: true,
            gridColumn: 2,
            gridRow: 2,
            children: [
              { label: "AWS", href: "#" },
              { label: "Google Cloud", href: "#" },
            ],
          },
          {
            label: "CloudKeeper LensGPT",
            href: "#",
            description: "Agentic AI FinOps Platform",
            gridColumn: 3,
            gridRow: 2,
          },
        ],
      },
    ],
  },

  capabilities: {
    id: "capabilities",
    layout: "capabilities",
    panelClassName: "w-[min(100%,1200px)]",
    sections: [
      {
        title: "By Use Case",
        titleIcon: A.iconUseCase,
        columns: [
          [
            { label: "Rate Optimization", href: "#" },
            { label: "Cloud Migration", href: "#" },
            { label: "AWS PPA+ Contract Negotiation", href: "#" },
            {
              label: "Well-Architected Review",
              muted: true,
              children: [
                { label: "AWS", href: "#" },
                { label: "Google Cloud", href: "#" },
              ],
            },
          ],
          [
            { label: "Cloud Modernization", href: "#" },
            { label: "Generative AI Launchpad", href: "#" },
            { label: "Kubernetes Management", href: "#" },
            { label: "Cloud Unit Economics", href: "#", isNew: true },
            { label: "Cost Anomaly Detection", href: "#" },
            { label: "Cloud Analytics and Reporting", href: "#" },
          ],
        ],
      },
      {
        title: "By Services",
        titleIcon: A.iconServices,
        columns: [
          [
            { label: "Partner-Led Support", href: "#" },
            { label: "24×7 Cloud Support", href: "#" },
            { label: "FinOps Consulting & Support", href: "#" },
            { label: "AWS Foundational Technical Review", href: "#" },
          ],
          [
            { label: "DevOps Services", href: "#" },
            { label: "Architecture Guidance", href: "#" },
            { label: "Solution Architect as a Service", href: "#" },
            {
              label: "Workload Rightsizing & Scheduling",
              href: "#",
            },
          ],
        ],
      },
      {
        title: "By Programs",
        titleIcon: A.iconPrograms,
        items: [
          { label: "ISV Accelerator", href: "#" },
          { label: "Private Equity", href: "#" },
          { label: "AWS Graviton", href: "#" },
          { label: "AWS Migration Acceleration", href: "#" },
        ],
      },
    ],
  },

  insights: {
    id: "insights",
    layout: "insights",
    panelClassName: "w-[min(100%,1020px)]",
    promo: { type: "insights" },
    sections: [
      {
        items: [
          { label: "Blog", href: "#", icon: A.iconBlog, gridColumn: 1, gridRow: 1 },
          {
            label: "Whitepapers",
            href: "#",
            icon: A.iconWhitepapers,
            gridColumn: 2,
            gridRow: 1,
          },
          {
            label: "Expert Interview",
            href: "#",
            icon: A.iconExpertInterview,
            gridColumn: 1,
            gridRow: 2,
          },
          { label: "Podcasts", href: "#", icon: A.iconPodcasts, gridColumn: 2, gridRow: 2 },
          { label: "Glossary", href: "#", icon: A.iconGlossary, gridColumn: 1, gridRow: 3 },
          { label: "Reports", href: "#", icon: A.iconReports, gridColumn: 2, gridRow: 3 },
          {
            label: "On-demand Webinars",
            href: "#",
            icon: A.iconWebinars,
            gridColumn: 1,
            gridRow: 4,
          },
        ],
      },
    ],
  },

  company: {
    id: "company",
    layout: "company",
    dropdownAlign: "trigger",
    panelClassName: "w-[680px]",
    sections: [
      {
        columns: [
          [
            { label: "About Us", href: "#", icon: A.iconAbout },
            { label: "Careers", href: "#", icon: A.iconCareers },
            { label: "Our Team", href: "#", icon: A.iconTeam },
          ],
          [
            { label: "Newsroom", href: "#", icon: A.iconNewsroom },
            {
              label: "Alliances",
              muted: true,
              icon: A.iconAlliances,
              children: [
                { label: "AWS", href: "#" },
                { label: "Google Cloud", href: "#" },
              ],
            },
          ],
        ],
      },
    ],
  },
};

export function getMenuById(id: NavMenuId) {
  return navMegaMenus[id];
}
