import Image from "next/image";

import { PrimaryButton } from "@/components/home/primary-button";
import { SectionContainer } from "@/components/home/section-container";
import { homeAssets } from "@/config/home-assets";

export function LensCtaSection() {
  return (
    <SectionContainer className="py-16 lg:py-20">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#150d30] via-[#1a1240] to-[#150d30] px-6 py-12 sm:px-10 sm:py-16 lg:px-16">
        <div className="pointer-events-none absolute -right-20 -top-20 size-80 rounded-full bg-[#17a5fb]/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-20 size-80 rounded-full bg-[#e80584]/15 blur-3xl" />

        <div className="relative z-[1] grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#17a5fb]">
              CloudKeeper Lens
            </p>
            <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.5px] text-white">
              See your cloud spend like never before
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-white/75">
              Unified visibility across AWS, GCP, and Azure with AI-powered recommendations to cut
              waste and maximize ROI.
            </p>
            <div className="mt-8">
              <PrimaryButton href="#contact">Try CloudKeeper Lens</PrimaryButton>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md overflow-hidden rounded-xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
              <Image
                src={homeAssets.platformDashboard}
                alt="CloudKeeper Lens dashboard"
                width={900}
                height={520}
                className="h-auto w-full rounded-lg"
              />
              <button
                type="button"
                className="absolute left-1/2 top-1/2 flex size-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#17a5fb] shadow-lg"
                aria-label="Play demo video"
              >
                <Image src={homeAssets.playIcon} alt="" width={24} height={24} className="size-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
