/** Shared overlapping / sticky card stack section content. */

export type CardOverlappingTagVariant = "default" | "featured";

export type CardOverlappingCard = {
  id: string;
  /** Omit to hide the pill (FinOps cards 2 / 4 / 5). */
  tag?: string;
  /** `featured` = gradient text + stars (Our New Offering / Launching Soon). */
  tagVariant?: CardOverlappingTagVariant;
  title: string;
  /** Paragraph body — used when `bullets` is absent (Platform Suite). */
  description?: string;
  /** Bullet list body — preferred when present (FinOps for AI). */
  bullets?: string[];
  number: string;
  visual: string;
  /** How the visual fills its frame. Default `contain`. */
  visualFit?: "contain" | "cover";
  /** Extra zoom for visuals with baked-in padding (e.g. 1.35). */
  visualScale?: number;
};

export type CardOverlappingContent = {
  headingLine1: string;
  /** Optional second line; omit / empty → single-line heading. */
  headingLine2?: string;
  subtitleBefore: string;
  subtitleAccent: string;
  subtitleAfter: string;
  cards: CardOverlappingCard[];
};

export const CARD_OVERLAPPING_SECTION_BG =
  "linear-gradient(180deg, #f6fcff 0%, #ffffff 100%), #ffffff";

/** Default copy — CloudKeeper 3-phase path (Platform Suite / reusable). */
export const defaultCardOverlappingContent: CardOverlappingContent = {
  headingLine1: "The CloudKeeper’s 3-phase proven path to",
  headingLine2: "Sustainable Cloud Optimization",
  subtitleBefore: "Your ",
  subtitleAccent: "Always-On Engine ",
  subtitleAfter: "for everything you need to control your cloud",
  cards: [
    {
      id: "assess",
      tag: "Assess",
      title: "Lens + Check",
      description:
        "Spot immediate cost savings and architecture gaps with real-time visibility and expert reviews.",
      number: "01",
      visual: "/assets/platform-suite/phases/assess.png",
    },
    {
      id: "act",
      tag: "Act",
      title: "Tuner + Commit",
      description:
        "Automatically optimize workloads, right-size resources, and maximize Reserved Instance/Savings Plan efficiency.",
      number: "02",
      visual: "/assets/platform-suite/phases/act.png",
    },
    {
      id: "sustain",
      tag: "Sustain",
      title: "GenAI + Expert",
      description:
        "Maintain continuous savings, enforce policies, and get 24x7 expert guidance for long-term efficiency.",
      number: "03",
      visual: "/assets/platform-suite/phases/sustain.png",
    },
  ],
};
