"use client";

import Link from "next/link";
import { useState } from "react";

import {
  capabilitiesAssets,
  capabilitiesPillsByTab,
  capabilitiesTabs,
  capabilityIconLayouts,
  type CapabilitiesTabId,
  type CapabilityIconLayoutId,
  type CapabilityPill,
} from "@/config/capabilities-section";
import { cn } from "@/lib/utils";

const SECTION_BG =
  "linear-gradient(89.99999999999999deg, rgba(245, 254, 255, 0.6) 0%, rgba(255, 250, 253, 0.6) 48.077%, rgba(255, 255, 255, 0.6) 85.577%), linear-gradient(90deg, rgb(248, 246, 255) 0%, rgb(248, 246, 255) 100%), linear-gradient(90deg, rgba(41, 20, 61, 0.05) 0%, rgba(41, 20, 61, 0.05) 100%)";

function CapabilityTab({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      role="tab"
      aria-selected={active}
      onClick={onClick}
      className={cn(
        "px-2.5 pb-1.5 pt-2.5 text-xl capitalize leading-8 tracking-[-0.5px] transition-colors",
        active
          ? "border-b-2 border-[#3c7abd] text-[#242828]"
          : "text-[#828282] hover:text-[#242828]",
      )}
    >
      {label}
    </button>
  );
}

function CapabilityPillIcon({ layoutId, icon }: { layoutId: CapabilityIconLayoutId; icon: string }) {
  const layout = capabilityIconLayouts[layoutId];

  if (layoutId === "genai") {
    return (
      <span className={cn("relative shrink-0", layout.container)}>
        <span className={layout.bleed}>
          <span className={layout.image}>
            <img
              src={icon}
              alt=""
              className="block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </span>
        </span>
      </span>
    );
  }

  return (
    <span className={cn("relative shrink-0", layout.container)}>
      <span className={layout.fill}>
        <span className={layout.image}>
          <img
            src={icon}
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            decoding="async"
            aria-hidden
          />
        </span>
      </span>
    </span>
  );
}

/** Figma 8300:8904 — two-layer capability pill */
function CapabilityPillChip({ pill }: { pill: CapabilityPill }) {
  const icon = <CapabilityPillIcon layoutId={pill.iconLayout} icon={pill.icon} />;

  return (
    <Link
      href={pill.href}
      className={cn(
        "absolute max-w-[380px] rounded-[100px] bg-white p-1",
        "shadow-[0px_4px_6px_rgba(0,0,0,0.05)] transition-transform duration-200 hover:scale-[1.02]",
        pill.positionClassName,
      )}
    >
      <span
        className={cn(
          "inline-flex items-center gap-[13px] rounded-[1000px] px-5",
          pill.pyClassName,
        )}
        style={{ backgroundImage: pill.gradient }}
      >
        {pill.iconPosition === "start" ? icon : null}
        <span className="whitespace-nowrap text-base leading-4 tracking-[-0.16px] text-black">
          {pill.label}
        </span>
        {pill.iconPosition === "end" ? icon : null}
      </span>
    </Link>
  );
}

function CapabilitiesIllustration({ pills }: { pills: readonly CapabilityPill[] }) {
  return (
    <div className="relative h-[581px] w-full shrink-0">
      {/* Figma 8298:8778 — Illustration Container 1260×602, offset left 66px top 10px */}
      <div className="flex justify-center pt-[10px] lg:justify-start lg:pl-[66px]">
        <div className="relative h-[602px] w-[1260px] shrink-0 origin-top scale-[min(1,calc((100vw-48px)/1260))] lg:scale-100">
        {/* Blue glow — 8298:8779 */}
        <div
          className="pointer-events-none absolute left-[31.71%] top-[calc(50%-3px)] aspect-[323.59/371.95] w-[17.15%] -translate-y-1/2"
          aria-hidden
        >
          <div className="size-full rotate-180">
            <div className="size-full rounded-bl-[36px] rounded-br-[36px] rounded-tl-[156px] rounded-tr-[36px] bg-[#17a5fb] opacity-[0.12] blur-[45px] shadow-[0px_1.811px_1.811px_rgba(0,0,0,0.25)]" />
          </div>
        </div>

        {/* Orange glow — 8298:8780 */}
        <div
          className="pointer-events-none absolute left-[56.37%] top-[calc(50%+116px)] aspect-[323.59/371.95] w-[12.65%] -translate-y-1/2"
          aria-hidden
        >
          <div className="size-full rotate-180">
            <div className="size-full rounded-[52px] bg-[#ff9507] opacity-[0.12] blur-[65px] shadow-[0px_2.613px_2.613px_rgba(0,0,0,0.25)]" />
          </div>
        </div>

        {/* Background gradient circles — 8298:8781 */}
        <div className="pointer-events-none absolute bottom-0 left-1/2 top-0 w-[1024px] -translate-x-1/2">
          <div className="absolute left-[-23.93px] top-[-63.66px] size-[1072.2px]">
            <div className="absolute left-1/2 top-1/2 size-[912.863px] -translate-x-1/2 -translate-y-1/2 rounded-full border-8 border-[#f4f1ff]" />
            <div className="absolute left-1/2 top-1/2 size-[744.581px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#dedede]" />
            <div className="absolute left-1/2 top-1/2 size-[383.518px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#dedede]" />
            <div className="absolute left-1/2 top-1/2 size-[596.369px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#dedede]" />
          </div>

          {/* Center logo — 8298:8786 */}
          <div className="absolute left-[calc(50%+0.52px)] top-[calc(50%+140.64px)] flex size-[142.279px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[87px] bg-white/10 shadow-[0px_6px_26px_rgba(0,0,0,0.09)]">
            <img
              src={capabilitiesAssets.centerLogo}
              alt="CloudKeeper"
              width={84}
              height={52}
              className="h-[52.381px] w-[84.315px] object-contain"
              decoding="async"
            />
          </div>
        </div>

          {pills.map((pill) => (
            <CapabilityPillChip key={pill.label} pill={pill} />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Figma 8298:8762 — card: capabilities_cloud lifecycle */
export function CapabilitiesSection() {
  const [activeTab, setActiveTab] = useState<CapabilitiesTabId>("useCase");
  const pills = capabilitiesPillsByTab[activeTab];

  return (
    <section
      id="capabilities"
      className="relative overflow-hidden font-sans"
      style={{ backgroundImage: SECTION_BG }}
      aria-labelledby="capabilities-heading"
    >
      <div
        className="pointer-events-none absolute -left-[200px] -top-[200px] size-[460px] rounded-[230px] opacity-10 blur-[50px]"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgb(255, 224, 130) 0%, rgb(244, 143, 177) 34.68%, rgb(179, 136, 255) 77.31%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[748px] -right-[200px] size-[460px] rounded-[230px] opacity-20 blur-[50px]"
        style={{
          backgroundImage:
            "linear-gradient(110deg, rgb(255, 224, 130) 0%, rgb(244, 143, 177) 34.68%, rgb(179, 136, 255) 77.31%)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[30px] px-6 pt-[60px] pb-[40px]">
        <div className="flex w-full max-w-[1260px] flex-col items-center">
          <h2
            id="capabilities-heading"
            className="max-w-[1198px] text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-1.2px] text-black lg:text-[40px]"
          >
            Proven Capabilities across the Cloud Lifecycle
          </h2>

          <div
            className="flex h-[60px] items-center justify-center gap-5"
            role="tablist"
            aria-label="Capability categories"
          >
            {capabilitiesTabs.map((tab) => (
              <CapabilityTab
                key={tab.id}
                label={tab.label}
                active={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
              />
            ))}
          </div>
        </div>

        <CapabilitiesIllustration pills={pills} />
      </div>
    </section>
  );
}
