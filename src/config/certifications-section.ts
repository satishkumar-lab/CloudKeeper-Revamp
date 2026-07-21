/** Figma 8306:10260 — Certifications carousel */
export const CERT_BADGE_HEIGHT = 120;
export const CERT_BADGE_GAP = 40;
export const CERT_BADGE_SLOT_WIDTH = 170;
export const CERT_CAROUSEL_ARROW_INSET = 52;
export const CERT_CAROUSEL_TRANSITION = {
  duration: 3,
  ease: [0.25, 1, 0.35, 1] as const,
};

export type CertificationBadgeType =
  | "gartner"
  | "g2"
  | "aws"
  | "gcp"
  | "azure"
  | "gpwt"
  | "g2-winter-2026"
  | "g2-winter-2027"
  | "aicpa-soc2"
  | "iso-27001"
  | "iso-27001-2019";

export type CertificationBadgeItem = {
  id: string;
  type: CertificationBadgeType;
  label: string;
  slotWidth?: number;
};

export function getCertBadgeWidth(item: CertificationBadgeItem) {
  return item.slotWidth ?? CERT_BADGE_SLOT_WIDTH;
}

export function getCertTrackOffset(
  items: readonly CertificationBadgeItem[],
  index: number,
) {
  return items
    .slice(0, index)
    .reduce((sum, item) => sum + getCertBadgeWidth(item) + CERT_BADGE_GAP, 0);
}

/** How many badges fit in the visible carousel viewport (one full row). */
export function getVisibleCertBadgeCount(
  viewportWidth: number,
  items: readonly CertificationBadgeItem[],
) {
  if (viewportWidth <= 0) return 1;

  let used = 0;
  let count = 0;

  for (const item of items) {
    const badgeWidth = getCertBadgeWidth(item);
    const next = used + (count > 0 ? CERT_BADGE_GAP : 0) + badgeWidth;
    if (count > 0 && next > viewportWidth) break;
    used = next;
    count++;
  }

  return Math.max(1, count);
}

export const certificationsAssets = {
  decorativeShape: "/assets/home/certifications/decorative-shape.png",
  gartner: "/assets/home/certifications/gartner-rect.png",
  g2Icon: "/assets/home/certifications/g2-icon.svg",
  g2Stars: [
    "/assets/home/certifications/g2-star-1.svg",
    "/assets/home/certifications/g2-star-2.svg",
    "/assets/home/certifications/g2-star-3.svg",
    "/assets/home/certifications/g2-star-4.svg",
    "/assets/home/certifications/g2-star-5.svg",
  ] as const,
  aws: {
    bg: "/assets/home/certifications/aws-bg.svg",
    border: "/assets/home/certifications/aws-border.svg",
    logo: "/assets/home/badges/aws-logo.svg",
  },
  gcp: "/assets/home/certifications/gcp-logo.svg",
  azure: {
    mark: "/assets/home/certifications/azure-mark.svg",
    textTop: "/assets/home/certifications/azure-text-top.svg",
    textBottom: "/assets/home/certifications/azure-text-bottom.svg",
  },
  gpwt: "/assets/home/certifications/gpwt-badge.svg",
  g2Winter2026Bg: "/assets/home/certifications/g2-winter-2026-bg.svg",
  g2Winter2026Inner: "/assets/home/certifications/g2-winter-2026-inner.svg",
  g2Winter2026Band: "/assets/home/certifications/g2-winter-2026-band.svg",
  g2Winter2026Text: "/assets/home/certifications/g2-winter-2026-text.svg",
  g2Winter2026G2: "/assets/home/certifications/g2-winter-2026-g2.svg",
  g2Winter2026Star: "/assets/home/certifications/g2-winter-2026-star.svg",
  g2Winter2027Medal: "/assets/home/certifications/g2-winter-2027-medal.png",
  aicpaSoc2: "/assets/home/certifications/aicpa-soc2.svg",
  iso27001: "/assets/home/certifications/iso-27001.svg",
  iso270012019: "/assets/home/certifications/iso-27001.svg",
} as const;

export const certificationsContent = {
  heading: "Compliant with the World's Top Standards",
} as const;

/** Figma slot widths from BadgeRailsScroll node 8306:9200 */
export const certificationBadges: readonly CertificationBadgeItem[] = [
  {
    id: "gartner-peer-insights",
    type: "gartner",
    label: "Gartner Peer Insights",
    slotWidth: 170,
  },
  {
    id: "g2-ratings",
    type: "g2",
    label: "G2 — 4.8 star rating",
    slotWidth: 150,
  },
  {
    id: "aws-premier-partner",
    type: "aws",
    label: "AWS Premier Tier Services Partner",
    slotWidth: 170,
  },
  {
    id: "google-cloud-partner",
    type: "gcp",
    label: "Google Cloud Partner",
    slotWidth: 170,
  },
  {
    id: "microsoft-solutions-partner",
    type: "azure",
    label: "Microsoft Solutions Partner",
    slotWidth: 170,
  },
  {
    id: "great-place-to-work",
    type: "gpwt",
    label: "Great Place To Work Certified",
    slotWidth: 170,
  },
  {
    id: "g2-winter-2026-leader",
    type: "g2-winter-2026",
    label: "G2 Winter 2026 Leader",
    slotWidth: 170,
  },
  {
    id: "g2-winter-2027",
    type: "g2-winter-2027",
    label: "G2 Winter 2027",
    slotWidth: 170,
  },
  {
    id: "aicpa-soc2",
    type: "aicpa-soc2",
    label: "AICPA SOC 2",
    slotWidth: 170,
  },
  {
    id: "iso-27001",
    type: "iso-27001",
    label: "ISO 27001",
    slotWidth: 170,
  },
  {
    id: "iso-27001-2019",
    type: "iso-27001-2019",
    label: "ISO 27001:2019",
    slotWidth: 170,
  },
];
