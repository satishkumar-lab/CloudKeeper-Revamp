import {
  ThoughtLeadershipSection,
  type ThoughtLeadershipSectionProps,
} from "@/components/home/thought-leadership-section";

export type RelatedResourcesSectionProps = ThoughtLeadershipSectionProps;

/**
 * Related resources / thought leadership cards section.
 * Wraps the homepage thought leadership implementation with config defaults.
 */
export function RelatedResourcesSection(props: RelatedResourcesSectionProps = {}) {
  return <ThoughtLeadershipSection {...props} />;
}

export {
  ThoughtLeadershipSection,
  type ThoughtLeadershipSectionProps,
} from "@/components/home/thought-leadership-section";
