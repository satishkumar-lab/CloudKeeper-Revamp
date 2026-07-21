"use client";

import Image from "next/image";
import Link from "next/link";

import { SectionContainer } from "@/components/home/section-container";
import { homeAssets } from "@/config/home-assets";
import { uniqueCards } from "@/config/home-content";
import { cn } from "@/lib/utils";

export function UniqueSection() {
  return (
    <SectionContainer id="solutions" className="bg-[#fafafa] py-16 lg:py-20">
      <div className="mb-10 text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.12em] text-[#e80584]">
          We&apos;re Truly UNIQUE
        </p>
        <h2 className="text-[clamp(1.75rem,3vw,2.5rem)] leading-tight tracking-[-0.5px] text-[#253746]">
          Outcome-driven cloud cost optimization
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {uniqueCards.map((card) => (
          <article
            key={card.title}
            className={cn(
              "group relative flex flex-col rounded-2xl border bg-white p-8 transition-shadow hover:shadow-lg",
              card.featured
                ? "border-[#17a5fb] shadow-[0_8px_32px_rgba(23,165,251,0.15)]"
                : "border-[#e5e5e5]",
            )}
          >
            {card.featured && (
              <span className="absolute -top-3 left-6 rounded-full bg-[#17a5fb] px-3 py-1 text-xs font-semibold text-white">
                Most Popular
              </span>
            )}
            <h3 className="text-xl font-semibold tracking-[-0.02em] text-[#253746]">{card.title}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[#828282]">{card.description}</p>
            <Link
              href={card.exploreHref}
              className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[#17a5fb] hover:underline"
            >
              Explore
              <Image src={homeAssets.linkArrow} alt="" width={16} height={16} className="size-4" />
            </Link>
          </article>
        ))}
      </div>
    </SectionContainer>
  );
}
