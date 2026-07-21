/**
 * Homepage rollout phases — flip flags to enable each batch.
 *
 * Phase 1: Navigation (promo strip + primary nav) + Hero
 * Phase 2: Logo marquee + Statement band + Stats / trust badges
 * Phase 3: We're Truly UNIQUE + Platform tabs carousel
 * Phase 4: Capabilities (cloud lifecycle) + Testimonials
 * Phase 5: Thought leadership + Lens CTA + PR logos + Certifications
 * Phase 6: Contact CTA band + Full footer
 */
export const HOME_PHASES = {
  phase1: true,
  phase2: true,
  phase3: true,
  phase4: true,
  phase5: true,
  phase6: true,
} as const;

export type HomePhase = keyof typeof HOME_PHASES;
