import { statsBadgeAssets } from "@/config/stats-badges";

/** Figma 8251:20546 — AWS Partner badge (48×48) */
export function AwsPartnerBadge() {
  return (
    <div className="relative size-[48px] shrink-0">
      <img
        src={statsBadgeAssets.aws.bg}
        alt=""
        width={48}
        height={48}
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={statsBadgeAssets.aws.border}
        alt=""
        width={48}
        height={48}
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={statsBadgeAssets.aws.logo}
        alt=""
        width={36}
        height={30}
        className="absolute left-[6.09px] top-[7.38px] h-[29.803px] w-[36.129px]"
        decoding="async"
        aria-hidden
      />
    </div>
  );
}

/** Figma 8251:20578 — Google Cloud Partner (131.676×32.379) */
export function GcpPartnerBadge() {
  return (
    <div className="relative h-[32.379px] w-[131.676px] shrink-0">
      <img
        src={statsBadgeAssets.gcp}
        alt="Google Cloud Partner"
        width={132}
        height={32}
        className="absolute inset-0 size-full object-cover object-left"
        decoding="async"
      />
    </div>
  );
}

/** Figma 8251:20579 — Microsoft Solutions Partner */
export function AzurePartnerBadge() {
  return (
    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] leading-none">
      <img
        src={statsBadgeAssets.azure.mark}
        alt=""
        width={29}
        height={29}
        className="col-start-1 row-start-1 ml-0 mt-[1.03px] h-[28.546px] w-[28.526px]"
        decoding="async"
        aria-hidden
      />
      <div className="col-start-1 row-start-1 ml-[36.8px] mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content]">
        <img
          src={statsBadgeAssets.azure.textTop}
          alt=""
          width={80}
          height={16}
          className="col-start-1 row-start-1 ml-[0.07px] mt-0 h-[15.568px] w-[80.361px]"
          decoding="async"
          aria-hidden
        />
        <img
          src={statsBadgeAssets.azure.textBottom}
          alt=""
          width={97}
          height={10}
          className="col-start-1 row-start-1 ml-0 mt-[20.15px] h-[9.43px] w-[97.202px]"
          decoding="async"
          aria-hidden
        />
      </div>
    </div>
  );
}

/** Figma 8251:20616 — ISO 27001 + SOC 2 (145.675×64.202) */
function Soc2IsoBadge() {
  return (
    <div className="relative h-[64.202px] w-[145.675px] shrink-0 overflow-hidden">
      <img
        src={statsBadgeAssets.soc2}
        alt="ISO 27001 and AICPA SOC 2"
        width={180}
        height={101}
        className="absolute left-[-11.6%] top-[-30.41%] h-[157.89%] w-[123.71%] max-w-none"
        decoding="async"
      />
    </div>
  );
}

/** Figma 8251:20545 / 3775:19268 — partner badge row */
export function StatsPartnerBadges() {
  return (
    <div
      className="flex max-w-full shrink-0 items-center gap-[29.349px] overflow-x-auto"
      aria-label="AWS, Google Cloud, Microsoft, ISO 27001, and SOC 2 partner badges"
    >
      <div className="flex h-[62px] items-center gap-[23.797px] border-r border-[#d9effe] pr-[22px]">
        <AwsPartnerBadge />
        <GcpPartnerBadge />
        <div className="flex h-[62px] items-center">
          <AzurePartnerBadge />
        </div>
      </div>
      <Soc2IsoBadge />
    </div>
  );
}
