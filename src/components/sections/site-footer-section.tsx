import { SiteFooter, type SiteFooterProps } from "@/components/home/site-footer";

export type SiteFooterSectionProps = SiteFooterProps;

export function SiteFooterSection(props: SiteFooterSectionProps = {}) {
  return <SiteFooter {...props} />;
}

export { SiteFooter, type SiteFooterProps } from "@/components/home/site-footer";
