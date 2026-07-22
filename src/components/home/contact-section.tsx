import {
  ContactSectionInteractive,
  type ContactSectionInteractiveProps,
} from "@/components/home/contact-section-interactive";

export type ContactSectionProps = ContactSectionInteractiveProps;

/** Figma 8251:21161 — Outcomes CTA */
export function ContactSection(props: ContactSectionProps = {}) {
  return <ContactSectionInteractive {...props} />;
}
