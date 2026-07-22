/** Shared Cloud Partner Advantage section — reusable across product pages. */

export const cloudPartnerAssets = {
  bg: "/assets/cloud-partner/bg.png",
  aws: {
    bg: "/assets/cloud-partner/aws-bg.svg",
    border: "/assets/cloud-partner/aws-border.svg",
    logo: "/assets/cloud-partner/aws-logo.svg",
  },
  gcp: "/assets/cloud-partner/gcp.svg",
  azure: {
    mark: "/assets/cloud-partner/azure-mark.svg",
    textTop: "/assets/cloud-partner/azure-text-top.svg",
    textBottom: "/assets/cloud-partner/azure-text-bottom.svg",
  },
} as const;

export type CloudPartnerContent = {
  heading: string;
  subheading: string;
};

export const defaultCloudPartnerContent = {
  heading: "Cloud Partner Advantage",
  subheading:
    "We have direct access to the best pricing tiers, support channels, and negotiation pathways.",
} as const satisfies CloudPartnerContent;
