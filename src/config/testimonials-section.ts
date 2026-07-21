/** Figma 8301:8979 — Testimonials */
export const testimonialsAssets = {
  quoteMark: "/assets/home/testimonials/quote-mark.svg",
  companyLogoSingula: "/assets/home/testimonials/company-logo-singula.png",
  companyLogoUpgrad: "/assets/home/testimonials/company-logo-upgrad.png",
  playIcon: "/assets/home/testimonials/play-icon.svg",
  playLabelArrow: "/assets/home/testimonials/play-label-arrow.svg",
  arrowPrev: "/assets/home/testimonials/arrow-chevron-prev.svg",
  arrowNext: "/assets/home/testimonials/arrow-chevron.svg",
  authorLine: "/assets/home/testimonials/author-line.png",
  dividerTop: "/assets/home/testimonials/divider-line-top.png",
  dividerBottom: "/assets/home/testimonials/divider-line-bottom.png",
  bgBubble: "/assets/home/testimonials/bg-bubble.png",
} as const;

const PHOTO_FRAME_GRADIENT =
  "radial-gradient(circle at 50% 47%, rgb(255,255,255) 0%, rgb(255,233,245) 100%)";

export type TestimonialItem = {
  id: string;
  companyLogo?: string;
  /** Max rendered logo height in px — Figma 8301:8985 slot is 64px */
  companyLogoMaxHeight?: number;
  companyLogoAlt: string;
  quote: string;
  name: string;
  role: string;
  photo: string;
  /** Figma per-portrait crop inside the 279×308 frame */
  photoImageClassName?: string;
  videoHref?: string;
};

export const testimonialsContent: readonly TestimonialItem[] = [
  {
    id: "steven",
    companyLogo: testimonialsAssets.companyLogoSingula,
    companyLogoMaxHeight: 48,
    companyLogoAlt: "singula decisions",
    quote:
      "Cost savings kicked in immediately and were reflected in the next month’s bill. A second set of savings came in the longer term is due to the team, process and the tools that highlighted the areas we might look in to save money.",
    name: "Steven Thurlow",
    role: "CEO",
    photo: "/assets/home/testimonials/photo-steven.png",
    videoHref: "#",
  },
  {
    id: "story-2",
    companyLogo: testimonialsAssets.companyLogoUpgrad,
    companyLogoMaxHeight: 28,
    companyLogoAlt: "upGrad",
    quote:
      "After onboarding in just 1-2 days, you get recommendations by Cloudkeeper about the gaps & leakage you have in your AWS account, underutilized resources, data transfer leakage, RI utilization & alert mechanisms which helps in further savings.",
    name: "Dipesh Garg",
    role: "DevOps Lead",
    photo: "/assets/home/testimonials/photo-dipesh.png",
    photoImageClassName:
      "absolute max-w-none h-[146.36%] w-[158.11%] left-[-24.9%] top-[-13.54%]",
    videoHref: "#",
  },
  {
    id: "story-3",
    companyLogo: testimonialsAssets.companyLogoUpgrad,
    companyLogoMaxHeight: 28,
    companyLogoAlt: "upGrad",
    quote:
      "After onboarding in just 1-2 days, you get recommendations by Cloudkeeper about the gaps & leakage you have in your AWS account, underutilized resources, data transfer leakage, RI utilization & alert mechanisms which helps in further savings.",
    name: "Prateek Baheti",
    role: "Technology Executive",
    photo: "/assets/home/testimonials/photo-prateek.png",
    photoImageClassName:
      "absolute max-w-none h-[105.82%] w-[131.15%] left-[-8.2%] top-0",
    videoHref: "#",
  },
] as const;

export { PHOTO_FRAME_GRADIENT };
