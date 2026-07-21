/** Figma 8298:8762 / pill ref 8299:8877 */
export const capabilitiesAssets = {
  centerLogo: "/assets/home/capabilities/center-logo.svg",
  iconPpa: "/assets/home/capabilities/icon-ppa.svg",
  iconMigration: "/assets/home/capabilities/icon-migration.svg",
  iconModernization: "/assets/home/capabilities/icon-modernization.svg",
  iconKubernetes: "/assets/home/capabilities/icon-kubernetes.svg",
  iconGenAi: "/assets/home/capabilities/icon-genai.svg",
  iconWellArchitected: "/assets/home/capabilities/icon-well-architected.svg",
} as const;

export type CapabilitiesTabId = "useCase" | "services";

export type CapabilityIconLayoutId =
  | "ppa"
  | "migration"
  | "modernization"
  | "kubernetes"
  | "genai"
  | "wellArchitected";

/** Figma 8300:8904 — two-layer pill gradient helper */
export function capabilityPillGradient(angleDeg: number): string {
  return `linear-gradient(${angleDeg}deg, rgb(255, 255, 255) 45.467%, rgb(200, 197, 248) 172.13%), linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(255, 255, 255) 100%)`;
}

/** Figma per-pill icon frame — 8300:8890 family */
export const capabilityIconLayouts: Record<
  CapabilityIconLayoutId,
  { container: string; fill?: string; image?: string; bleed?: string }
> = {
  ppa: {
    container: "flex size-[28.242px] shrink-0 flex-col items-start overflow-clip",
    fill: "flex size-[28.242px] flex-col items-center justify-center overflow-clip px-[1.605px]",
    image: "relative h-[28.242px] w-[25.033px]",
  },
  migration: {
    container: "size-8",
    fill: "flex size-8 flex-col items-center justify-center overflow-clip py-[4.61px]",
    image: "relative h-[22.78px] w-8",
  },
  modernization: {
    container: "size-[23.719px]",
    fill: "flex size-[23.719px] items-center justify-center overflow-clip",
    image: "relative size-[23.719px]",
  },
  kubernetes: {
    container: "size-[28.141px]",
    fill: "flex size-[28.141px] items-center justify-center overflow-clip px-[0.313px]",
    image: "relative h-[28.141px] w-[27.515px]",
  },
  genai: {
    container: "relative size-8",
    bleed: "absolute inset-[4.75px]",
    image: "absolute inset-[-0.24%_-0.24%_-2.44%_-2.45%]",
  },
  wellArchitected: {
    container: "flex size-8 items-center justify-center",
    fill: "flex size-[26.031px] items-center justify-center overflow-clip",
    image: "relative size-[26.031px]",
  },
};

export type CapabilityPill = {
  label: string;
  icon: string;
  href: string;
  iconPosition: "start" | "end";
  iconLayout: CapabilityIconLayoutId;
  positionClassName: string;
  gradient: string;
  pyClassName: string;
};

export const capabilitiesTabs: readonly {
  id: CapabilitiesTabId;
  label: string;
}[] = [
  { id: "useCase", label: "By Use Case" },
  { id: "services", label: "By Services" },
] as const;

const PILL_GRADIENT_DEFAULT = capabilityPillGradient(-68);

/** Figma 8298 — By Use Case pills */
export const capabilitiesUseCasePills: readonly CapabilityPill[] = [
  {
    label: "AWS PPA Contract Negotiation",
    icon: capabilitiesAssets.iconPpa,
    href: "#",
    iconPosition: "start",
    iconLayout: "ppa",
    positionClassName: "left-[192.59px] top-[46.35px]",
    gradient: capabilityPillGradient(-61.65),
    pyClassName: "py-2",
  },
  {
    label: "Cloud Migration",
    icon: capabilitiesAssets.iconMigration,
    href: "#",
    iconPosition: "start",
    iconLayout: "migration",
    positionClassName: "left-[352.59px] bottom-[353.86px]",
    gradient: capabilityPillGradient(-73.02),
    pyClassName: "py-2",
  },
  {
    label: "Cloud Modernization",
    icon: capabilitiesAssets.iconModernization,
    href: "#",
    iconPosition: "start",
    iconLayout: "modernization",
    positionClassName: "left-[60.59px] bottom-[180.58px]",
    gradient: capabilityPillGradient(-70.86),
    pyClassName: "py-2.5",
  },
  {
    label: "Kubernetes Management",
    icon: capabilitiesAssets.iconKubernetes,
    href: "#",
    iconPosition: "end",
    iconLayout: "kubernetes",
    positionClassName: "left-[818.69px] top-[70.65px]",
    gradient: capabilityPillGradient(-68.07),
    pyClassName: "py-2.5",
  },
  {
    label: "Generative AI Launchpad",
    icon: capabilitiesAssets.iconGenAi,
    href: "#",
    iconPosition: "end",
    iconLayout: "genai",
    positionClassName: "right-[39.83px] bottom-[359.31px]",
    gradient: capabilityPillGradient(-67.56),
    pyClassName: "py-2",
  },
  {
    label: "Well-Architected Reviews",
    icon: capabilitiesAssets.iconWellArchitected,
    href: "#",
    iconPosition: "end",
    iconLayout: "wellArchitected",
    positionClassName: "right-[19.83px] bottom-[169.31px]",
    gradient: capabilityPillGradient(-67.41),
    pyClassName: "py-2",
  },
] as const;

/** By Services — same layout, alternate labels */
export const capabilitiesServicesPills: readonly CapabilityPill[] = [
  {
    label: "FinOps Consulting & Support",
    icon: capabilitiesAssets.iconPpa,
    href: "#",
    iconPosition: "start",
    iconLayout: "ppa",
    positionClassName: "left-[192.59px] top-[46.35px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2",
  },
  {
    label: "24×7 Personalized Cloud Support",
    icon: capabilitiesAssets.iconMigration,
    href: "#",
    iconPosition: "start",
    iconLayout: "migration",
    positionClassName: "left-[352.59px] bottom-[353.86px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2",
  },
  {
    label: "CloudKeeper Prism",
    icon: capabilitiesAssets.iconModernization,
    href: "#",
    iconPosition: "start",
    iconLayout: "modernization",
    positionClassName: "left-[60.59px] bottom-[180.58px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2.5",
  },
  {
    label: "Rate & Commitment Optimization",
    icon: capabilitiesAssets.iconKubernetes,
    href: "#",
    iconPosition: "end",
    iconLayout: "kubernetes",
    positionClassName: "left-[818.69px] top-[70.65px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2.5",
  },
  {
    label: "Cost Anomaly Detection",
    icon: capabilitiesAssets.iconGenAi,
    href: "#",
    iconPosition: "end",
    iconLayout: "genai",
    positionClassName: "right-[39.83px] bottom-[359.31px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2",
  },
  {
    label: "Cloud Cost Visibility",
    icon: capabilitiesAssets.iconWellArchitected,
    href: "#",
    iconPosition: "end",
    iconLayout: "wellArchitected",
    positionClassName: "right-[19.83px] bottom-[169.31px]",
    gradient: PILL_GRADIENT_DEFAULT,
    pyClassName: "py-2",
  },
] as const;

export const capabilitiesPillsByTab: Record<
  CapabilitiesTabId,
  readonly CapabilityPill[]
> = {
  useCase: capabilitiesUseCasePills,
  services: capabilitiesServicesPills,
};
