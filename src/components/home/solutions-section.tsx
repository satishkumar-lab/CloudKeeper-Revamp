"use client";

import Link from "next/link";

import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import {
  solutionAddons,
  solutionCards,
  solutionsAssets,
} from "@/config/solutions-section";

function AzIcon() {
  return (
    <div className="relative size-[64px] shrink-0">
      <div className="absolute left-[calc(50%-0.05px)] top-[calc(50%-0.65px)] contents -translate-x-1/2 -translate-y-1/2">
        <div className="absolute left-[calc(50%+0.7px)] top-[calc(50%-1.58px)] size-[30.03px] -translate-x-1/2 -translate-y-1/2">
          <img
            src={solutionsAssets.azIcon1}
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            decoding="async"
            aria-hidden
          />
        </div>
        <div className="absolute left-[calc(50%-0.05px)] top-[calc(50%-0.84px)] h-[52.002px] w-[52.001px] -translate-x-1/2 -translate-y-1/2">
          <img
            src={solutionsAssets.azIcon2}
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            decoding="async"
            aria-hidden
          />
        </div>
        <div className="absolute left-[calc(50%-10.68px)] top-[calc(50%+22.59px)] h-[8.286px] w-[4.436px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[-11.62%_-21.69%_-11.62%_-21.72%]">
            <img
              src={solutionsAssets.azIcon3}
              alt=""
              className="block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </div>
        </div>
        <div className="absolute left-[calc(50%+10.74px)] top-[calc(50%-23.99px)] h-[8.104px] w-[4.524px] -translate-x-1/2 -translate-y-1/2">
          <div className="absolute inset-[-11.88%_-21.3%_-11.88%_-21.26%]">
            <img
              src={solutionsAssets.azIcon4}
              alt=""
              className="block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function PpaIcon() {
  return (
    <div className="relative size-[64px] shrink-0">
      <img
        src={solutionsAssets.ppaIcon}
        alt=""
        width={46}
        height={46}
        className="absolute inset-[12.82%_14.06%_15%_13.76%] size-[72%] max-w-none"
        decoding="async"
        aria-hidden
      />
    </div>
  );
}

function ExploreLink({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 text-base font-medium leading-[22px] tracking-[-0.048px] text-[#17a5fb] transition-colors duration-200 ease-out group-hover/card:text-[#1298eb]"
    >
      Explore More
      <img
        src={solutionsAssets.exploreArrow}
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0 transition-transform duration-200 ease-out group-hover/card:translate-x-1"
        decoding="async"
        aria-hidden
      />
    </Link>
  );
}

function SolutionCard({
  title,
  description,
  exploreHref,
  icon,
}: (typeof solutionCards)[number]) {
  return (
    <article className="group/card flex flex-col gap-[30px] rounded-[22px] border border-transparent bg-white px-[50px] pb-[50px] pt-[50px] shadow-[0px_8px_24px_0px_rgba(29,140,242,0.16)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-[#17a5fb] hover:shadow-none">
      <div className="flex flex-col gap-[60px]">
        <div className="flex flex-col gap-[50px]">
          {icon === "az" ? <AzIcon /> : <PpaIcon />}
          <div className="flex max-w-[520px] flex-col gap-[15px] text-black">
            <h3 className="text-[32px] leading-10 tracking-[-0.16px]">{title}</h3>
            <p className="whitespace-pre-line text-xl leading-8">{description}</p>
          </div>
        </div>
        <div className="pl-0.5">
          <ExploreLink href={exploreHref} />
        </div>
      </div>
    </article>
  );
}

function AddonsBar() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 rounded-[22px] border border-[#f0f0f0] bg-white px-5 py-4 lg:flex-row lg:gap-[30px] lg:px-8">
      <div className="flex items-center gap-[19px]">
        <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] leading-none">
          <img
            src={solutionsAssets.addonEllipse1}
            alt=""
            width={24}
            height={23}
            className="col-start-1 row-start-1 ml-[8.86px] mt-[7.71px] h-[23.272px] w-6"
            decoding="async"
            aria-hidden
          />
          <img
            src={solutionsAssets.addonEllipse2}
            alt=""
            width={11}
            height={10}
            className="col-start-1 row-start-1 ml-[24.68px] mt-[25.95px] h-[10.279px] w-[10.6px]"
            decoding="async"
            aria-hidden
          />
          <img
            src={solutionsAssets.addonSpark1}
            alt=""
            width={13}
            height={16}
            className="col-start-1 row-start-1 ml-0 mt-[8.28px] h-4 w-[13px] -scale-y-100 rotate-180"
            decoding="async"
            aria-hidden
          />
          <img
            src={solutionsAssets.addonSpark2}
            alt=""
            width={13}
            height={16}
            className="col-start-1 row-start-1 ml-[23.48px] mt-0 h-4 w-[13px] -scale-y-100 rotate-180"
            decoding="async"
            aria-hidden
          />
        </div>
        <p className="whitespace-nowrap text-xl font-medium leading-[1.5] tracking-[-0.5px] text-black">
          Exclusive Value Add-ons:
        </p>
      </div>

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-[30px]">
        {solutionAddons.map((addon) => (
          <div key={addon.label} className="flex items-center gap-[9px]">
            <div
              className="flex size-10 shrink-0 items-center justify-center"
              style={{ borderRadius: addon.iconRounded }}
            >
              <img
                src={addon.icon}
                alt=""
                width={29}
                height={29}
                className="size-[25.452px] max-w-none object-contain"
                decoding="async"
                aria-hidden
              />
            </div>
            <p className="text-xl leading-6 tracking-[-1px] text-black">{addon.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Figma 8271:7786 — Cloud Cost Optimisation Solutions */
export function SolutionsSection() {
  return (
    <section
      id="solutions"
      className="bg-white font-sans"
      aria-labelledby="solutions-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-16 sm:px-8 lg:px-[110px] lg:pb-[62px] lg:pt-20">
        <ScrollRevealGroup className="mx-auto max-w-[1220px]">
          <ScrollRevealItem>
            <h2
              id="solutions-heading"
              className="text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.3] tracking-[-0.5px] text-black lg:text-[40px]"
            >
              Cloud Cost Optimisation Solutions Built for Scale
            </h2>
          </ScrollRevealItem>

          <ScrollRevealItem className="mt-10 grid gap-7 lg:grid-cols-2">
            {solutionCards.map((card) => (
              <SolutionCard key={card.id} {...card} />
            ))}
          </ScrollRevealItem>

          <ScrollRevealItem className="mt-10">
            <AddonsBar />
          </ScrollRevealItem>
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
