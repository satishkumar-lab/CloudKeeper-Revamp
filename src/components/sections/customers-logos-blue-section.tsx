"use client";

import {
  CustomersLogosSection,
  type CustomersLogosSectionProps,
} from "@/components/sections/customers-logos-section";
import { cn } from "@/lib/utils";

export type CustomersLogosBlueSectionProps = Omit<
  CustomersLogosSectionProps,
  "backgroundSrc"
>;

/**
 * Customer logos on the soft blue wash background
 * (`/assets/customers/bg.png` — same as Platform Suite).
 * Tighter than the white variant: −40px section padding, smaller
 * heading → logos → CTA gaps.
 */
export function CustomersLogosBlueSection({
  contentClassName,
  ...props
}: CustomersLogosBlueSectionProps = {}) {
  return (
    <CustomersLogosSection
      {...props}
      backgroundSrc
      contentClassName={cn(
        // py 50 → 30 (−40 total height); gap 40 → 20 (heading / logos / CTA)
        "gap-5 py-[30px]",
        contentClassName,
      )}
    />
  );
}
