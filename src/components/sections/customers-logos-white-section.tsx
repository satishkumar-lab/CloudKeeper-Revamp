"use client";

import {
  CustomersLogosSection,
  type CustomersLogosSectionProps,
} from "@/components/sections/customers-logos-section";

export type CustomersLogosWhiteSectionProps = Omit<
  CustomersLogosSectionProps,
  "backgroundSrc"
>;

/** Customer logos on a white background. */
export function CustomersLogosWhiteSection(
  props: CustomersLogosWhiteSectionProps = {},
) {
  return <CustomersLogosSection {...props} />;
}
