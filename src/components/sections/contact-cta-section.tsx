import {
  ContactSection,
  type ContactSectionProps,
} from "@/components/home/contact-section";

export type ContactCtaSectionProps = ContactSectionProps;

/** Outcomes CTA — "Stop paying for cloud tools. Start paying for outcomes." */
export function ContactCtaSection(props: ContactCtaSectionProps = {}) {
  return <ContactSection {...props} />;
}

export { ContactSection, type ContactSectionProps } from "@/components/home/contact-section";
