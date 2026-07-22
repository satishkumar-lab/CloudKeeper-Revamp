"use client";

import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import {
  INDUSTRY_RECOGNITION_BG,
  industryRecognitionAssets,
  industryRecognitionContent,
  industryRecognitionItems,
  type IndustryRecognitionItem,
} from "@/config/industry-recognition-section";
import { cn } from "@/lib/utils";

export type IndustryRecognitionSectionProps = {
  heading?: string;
  className?: string;
};

/** Figma 2439:18118 — logo slot */
const LOGO_SLOT =
  "relative flex h-[60.809px] w-full shrink-0 flex-col items-start py-[10px]";

function RecognitionLogo({ type }: { type: IndustryRecognitionItem["logoType"] }) {
  if (type === "idc") {
    return (
      <div className="flex w-[300px] shrink-0 flex-col items-start overflow-clip pb-[14px]">
        <div className={LOGO_SLOT}>
          <div className="absolute inset-[30.87%_64%_15.55%_0]">
            <img
              src={industryRecognitionAssets.logoIdc}
              alt="IDC"
              width={108}
              height={33}
              className="absolute inset-0 block size-full max-w-none"
              decoding="async"
            />
          </div>
        </div>
      </div>
    );
  }

  if (type === "everest") {
    return (
      <div className="flex w-[300px] shrink-0 flex-col items-start overflow-clip pb-[14px]">
        <div className={LOGO_SLOT}>
          <div className="absolute inset-[18.86%_64.52%_9.91%_0.09%]">
            <img
              src={industryRecognitionAssets.logoEverestIcon}
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </div>
          <div className="absolute inset-[55.71%_38.91%_-0.56%_38.2%]">
            <div className="absolute left-0 top-0 h-[20.976px] w-[12.95px]">
              <img
                src={industryRecognitionAssets.logoEverestG}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                decoding="async"
                aria-hidden
              />
            </div>
            <div className="absolute left-[23.54px] top-[5.9px] h-[14.981px] w-[10.93px]">
              <img
                src={industryRecognitionAssets.logoEverestV}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                decoding="async"
                aria-hidden
              />
            </div>
            <div className="absolute left-[16.46px] top-[5.93px] h-[14.705px] w-[6.634px]">
              <img
                src={industryRecognitionAssets.logoEverestO}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                decoding="async"
                aria-hidden
              />
            </div>
            <div className="absolute left-[37.13px] top-[6.14px] h-[14.731px] w-[9.798px]">
              <img
                src={industryRecognitionAssets.logoEverestR}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                decoding="async"
                aria-hidden
              />
            </div>
            <div className="absolute left-[50.54px] top-[5.89px] h-[21.382px] w-[10.47px]">
              <img
                src={industryRecognitionAssets.logoEverestE}
                alt=""
                className="absolute inset-0 block size-full max-w-none"
                decoding="async"
                aria-hidden
              />
            </div>
            <div
              className="absolute left-[61.68px] top-[3.67px] flex size-[7px] items-center justify-center rounded-[100px] border-[0.4px] border-solid border-[#6c6d6f] p-[3px]"
              aria-hidden
            >
              <span className="w-full text-center text-[4px] leading-none tracking-[-0.08px] text-[#5a5c5e]">
                R
              </span>
            </div>
          </div>
          <span className="sr-only">Everest Group</span>
        </div>
      </div>
    );
  }

  if (type === "gartner") {
    return (
      <div className="flex w-[320px] shrink-0 flex-col items-start overflow-clip pb-[14px]">
        <div className={LOGO_SLOT}>
          <img
            src={industryRecognitionAssets.logoGartner}
            alt="Gartner"
            width={118}
            height={67}
            className="absolute left-0 top-[calc(50%+3.71px)] h-[66.608px] w-[117.543px] max-w-none -translate-y-1/2"
            decoding="async"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-[320px] shrink-0 flex-col items-start overflow-clip pb-[14px]">
      <div className={LOGO_SLOT}>
        <div className="absolute left-0 top-[calc(50%+4.86px)] h-[36.91px] w-[254.153px] -translate-y-1/2 overflow-clip">
          <div className="absolute inset-[0_80.13%_-0.02%_0]">
            <img
              src={industryRecognitionAssets.logoIsgMark}
              alt=""
              className="absolute inset-0 block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </div>
          <div className="absolute inset-[39.99%_-0.01%_5.12%_23.89%]">
            <img
              src={industryRecognitionAssets.logoIsgText}
              alt="ISG Provider Lens"
              className="absolute inset-0 block size-full max-w-none"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RecognitionCard({
  item,
  bordered,
  className = "",
}: {
  item: IndustryRecognitionItem;
  bordered?: boolean;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex h-[255px] shrink-0 flex-col px-[30px] py-[20px] ${className}${
        bordered ? " border-r border-[#d9dfe0]" : ""
      }`}
      style={{ borderRightWidth: bordered ? "0.7px" : undefined }}
    >
      {/* Figma 2439:18159 — gradient expands from bottom line to full card on hover */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-px w-full bg-gradient-to-b from-[#ebf4ff] to-[#fffaf7] transition-[height] duration-200 ease-out group-hover:h-[255px]"
        aria-hidden
      />
      <div className="relative z-[1] flex flex-col items-center gap-2.5">
        <RecognitionLogo type={item.logoType} />
        <p className="w-full pt-[14px] text-base leading-[1.5] tracking-[-0.08px] text-black">
          {item.description}
        </p>
      </div>
    </article>
  );
}

function RecognitionGrid({
  bordered,
  cardClassName,
}: {
  bordered?: boolean;
  cardClassName?: string;
}) {
  return (
    <>
      {industryRecognitionItems.map((item, index) => (
        <RecognitionCard
          key={item.id}
          item={item}
          bordered={bordered && index < industryRecognitionItems.length - 1}
          className={cardClassName}
        />
      ))}
    </>
  );
}

/** Figma 8309:9151 — Recognized by the best (1440×603) */
export function IndustryRecognitionSection({
  heading = industryRecognitionContent.heading,
  className,
}: IndustryRecognitionSectionProps = {}) {
  return (
    <section
      id="recognition"
      className={cn("relative overflow-hidden font-sans lg:h-[565px]", className)}
      style={{ background: INDUSTRY_RECOGNITION_BG }}
      aria-labelledby="industry-recognition-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-[8px] hidden h-[190px] w-[175px] overflow-hidden opacity-30 lg:block"
        aria-hidden
      >
        <div className="absolute left-[-176px] top-[-109px] flex size-[412px] -scale-y-100 rotate-[140deg] items-center justify-center">
          <img
            src={industryRecognitionAssets.abstractShape}
            alt=""
            className="size-[298px] max-w-none object-cover"
            decoding="async"
          />
        </div>
      </div>

      <div
        className="pointer-events-none absolute right-0 top-[70px] hidden h-[188px] w-[242px] overflow-hidden opacity-30 lg:block"
        aria-hidden
      >
        <div className="absolute left-[-10px] top-[-97px] flex size-[401px] rotate-[30deg] items-center justify-center">
          <img
            src={industryRecognitionAssets.abstractShape}
            alt=""
            className="size-[298px] max-w-none object-cover"
            decoding="async"
          />
        </div>
      </div>

      <ScrollRevealGroup className="relative z-[1] mx-auto w-full max-w-[1440px] px-6 pb-0 pt-12 lg:h-[565px] lg:px-0 lg:pt-0">
        <ScrollRevealItem>
          <h2
            id="industry-recognition-heading"
            className="mx-auto max-w-[767px] text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.3] tracking-[-1px] text-black lg:absolute lg:left-1/2 lg:top-[158px] lg:w-[767px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:text-[40px]"
          >
            {heading}
          </h2>
        </ScrollRevealItem>

        {/* Mobile / tablet grid */}
        <ScrollRevealItem className="mt-[50px] lg:hidden">
          <div
            className="border-y border-[#d9dfe0]"
            style={{ borderTopWidth: "0.7px", borderBottomWidth: "0.7px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <RecognitionGrid bordered />
            </div>
          </div>
        </ScrollRevealItem>
      </ScrollRevealGroup>

      {/* Desktop grid — full viewport width, no side gaps */}
      <ScrollRevealGroup className="absolute inset-x-0 top-[310px] z-[1] hidden w-full lg:block">
        <ScrollRevealItem>
          <div
            className="flex h-[255px] w-full border-y border-[#d9dfe0]"
            style={{ borderTopWidth: "0.7px", borderBottomWidth: "0.7px" }}
          >
            <RecognitionGrid bordered cardClassName="min-w-0 flex-1" />
          </div>
        </ScrollRevealItem>
      </ScrollRevealGroup>
    </section>
  );
}
