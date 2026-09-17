export const logoRowAssets = {
  g2BadgeBg: "/assets/home/logos/g2-badge-bg.svg",
  g2Logo: "/assets/home/logos/g2-logo.svg",
  starFull: "/assets/home/logos/star-full.svg",
  starHalf: "/assets/home/logos/star-half.svg",
  marqueeFadeLeft: "/assets/home/logos/marquee-fade-left.svg",
} as const;

export type LogoMarqueeItem = {
  name: string;
  src: string;
  width: number;
  height: number;
};

const src = (file: string) => `/assets/home/logos/marquee/${file}`;

/** Wordmarks share a cap-height; ultra-wide ones (MoneySmart) are width-capped. Marks are larger. */
export const LOGO_MARQUEE_HEIGHT = 24;
export const LOGO_MARQUEE_MAX_WIDTH = 120;
export const LOGO_MARQUEE_MARK_HEIGHT = 52;
export const LOGO_MARQUEE_GAP_PX = 64;

export function fittedMarqueeLogoSize(logo: Pick<LogoMarqueeItem, "width" | "height">) {
  const isMark = logo.height / logo.width >= 0.85;
  const targetH = isMark ? LOGO_MARQUEE_MARK_HEIGHT : LOGO_MARQUEE_HEIGHT;
  const maxW = isMark ? LOGO_MARQUEE_MARK_HEIGHT : LOGO_MARQUEE_MAX_WIDTH;
  const scale = Math.min(targetH / logo.height, maxW / logo.width);
  return {
    width: Math.max(1, Math.round(logo.width * scale)),
    height: Math.max(1, Math.round(logo.height * scale)),
  };
}

/** Intrinsic asset sizes (Figma leaf). Render via fittedMarqueeLogoSize. */
export const logoMarqueeItems: readonly LogoMarqueeItem[] = [
  { name: "eLocal", src: src("elocal.svg"), width: 87, height: 24 },
  { name: "Airmeet", src: src("airmeet.svg"), width: 86, height: 20 },
  { name: "Wishpond", src: src("wishpond.svg"), width: 108, height: 24 },
  { name: "Hypercare", src: src("hypercare.svg"), width: 105, height: 19 },
  { name: "Zepto", src: src("zepto.svg"), width: 66, height: 22 },
  { name: "MoneySmart", src: src("moneysmart.svg"), width: 122, height: 12 },
  { name: "Country Delight", src: src("country-delight-src.png"), width: 53, height: 53 },
  { name: "Qoria", src: src("qoria.svg"), width: 87, height: 21 },
  { name: "Connect & Heal", src: src("connect-heal.svg"), width: 122, height: 26 },
  { name: "CSE", src: src("cse.svg"), width: 62, height: 31 },
  { name: "Radix", src: src("radix.svg"), width: 82, height: 21 },
  { name: "Singula", src: src("singula.svg"), width: 57, height: 25 },
  { name: "Attain Partners", src: src("attain.svg"), width: 105, height: 14 },
  { name: "Sciforma", src: src("sciforma.svg"), width: 102, height: 20 },
  { name: "Prodigal", src: src("prodigal.svg"), width: 104, height: 27 },
  { name: "Xoxoday", src: src("xoxoday.svg"), width: 104, height: 26 },
  { name: "DigitalReef", src: src("digitalreef.svg"), width: 76, height: 34 },
  { name: "Pepperfry", src: src("pepperfry.svg"), width: 105, height: 22 },
  { name: "Bajaj Capital", src: src("bajaj-src.png"), width: 114, height: 16 },
] as const;
