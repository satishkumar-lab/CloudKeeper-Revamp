"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useState } from "react";

import { CtaButton } from "@/components/home/primary-button";
import {
  WHY_US_G2_BG,
  whyUsG2Assets,
  whyUsG2Content,
  whyUsG2Reviews,
  type WhyUsG2Review,
  type WhyUsG2TextSegment,
} from "@/config/why-us-g2";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Featured card width — sides scale down from this (Lens coverflow pattern) */
const FEATURED_CARD_W = 590;
/** ~310/590 — matches Figma small card width when featured is scaled */
const SIDE_SCALE = 0.525;
/** Distance from stage center to side-card centers */
const SIDE_X = 435;

type CoverflowOffset = -1 | 0 | 1;

/** Shortest circular distance in {-1,0,1} for a 3-up coverflow */
function coverflowOffset(
  itemIndex: number,
  activeIndex: number,
  total: number,
): CoverflowOffset {
  let diff = (itemIndex - activeIndex) % total;
  if (diff < 0) diff += total;
  if (diff > total / 2) diff -= total;
  return diff as CoverflowOffset;
}

/**
 * On next, the card that was left wraps to right (offset 1).
 * On prev, the card that was right wraps to left (offset -1).
 * Those jumps skip tweening so the card doesn't fly across the center.
 */
function isWrappingSlot(offset: CoverflowOffset, direction: number) {
  if (direction === 0) return false;
  return (
    (direction > 0 && offset === 1) || (direction < 0 && offset === -1)
  );
}

const COVERFLOW_SLOT = {
  "-1": { x: -SIDE_X, scale: SIDE_SCALE, y: 28, zIndex: 1 },
  "0": { x: 0, scale: 1, y: 0, zIndex: 10 },
  "1": { x: SIDE_X, scale: SIDE_SCALE, y: 28, zIndex: 1 },
} as const;

function ReviewBody({ segments }: { segments: WhyUsG2TextSegment[] }) {
  return (
    <p className="whitespace-pre-wrap text-base font-light leading-7 text-black">
      {segments.map((segment, i) =>
        segment.emphasis ? (
          <span key={i} className="font-medium text-black">
            {segment.text}
          </span>
        ) : (
          <span key={i}>{segment.text}</span>
        ),
      )}
    </p>
  );
}

function G2Stars() {
  return (
    <div className="flex items-start gap-[5px]" aria-hidden>
      {Array.from({ length: 5 }).map((_, i) => (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          key={i}
          src={whyUsG2Assets.starFull}
          alt=""
          width={20}
          height={19}
          className="h-[19px] w-5 object-contain"
          decoding="async"
        />
      ))}
    </div>
  );
}

function CompanyLogo({
  company,
  alt,
}: {
  company?: WhyUsG2Review["company"];
  alt?: string;
}) {
  if (!company) return null;

  if (company === "seclore") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={whyUsG2Assets.logoSeclore}
        alt={alt ?? "Seclore"}
        width={151}
        height={17}
        className="h-4 w-[151px] object-contain object-right"
        decoding="async"
      />
    );
  }

  return (
    <span
      className="inline-flex h-5 items-end gap-1"
      role="img"
      aria-label={alt ?? "Glider"}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={whyUsG2Assets.logoGliderText}
        alt=""
        width={36}
        height={5}
        className="mb-0.5 h-[6px] w-9 object-contain object-left"
        decoding="async"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={whyUsG2Assets.logoGliderMark}
        alt=""
        width={18}
        height={19}
        className="h-5 w-5 object-contain"
        decoding="async"
      />
    </span>
  );
}

function CarouselChevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "size-[10px] shrink-0",
        direction === "next" && "rotate-180",
      )}
      aria-hidden
    >
      <path
        d="M5.83333 10.8333L0.833333 5.83333L5.83333 0.833333"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function NavArrow({
  direction,
  onClick,
  label,
  className,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className={cn(
        "flex size-[42px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-solid border-[#17a5fb] bg-white text-[#17a5fb] transition-colors duration-200 hover:bg-[#17a5fb] hover:text-white",
        className,
      )}
    >
      <CarouselChevron direction={direction} />
    </button>
  );
}

function FeaturedReviewCard({
  review,
  className,
}: {
  review: WhyUsG2Review;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "relative flex h-full min-h-[360px] w-full max-w-[590px] flex-col overflow-hidden rounded-[10px] border-[0.5px] border-solid border-[#dcdfe3] bg-gradient-to-b from-white from-[87%] to-[#f1fafe] shadow-[-2px_8px_23px_0px_rgba(0,0,0,0.06)] sm:min-h-[403px]",
        className,
      )}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={whyUsG2Assets.quoteLarge}
        alt=""
        width={40}
        height={33}
        className="pointer-events-none absolute left-[26px] top-[25px] h-[33px] w-10"
        decoding="async"
        aria-hidden
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={whyUsG2Assets.quoteClose}
        alt=""
        width={40}
        height={30}
        className="pointer-events-none absolute bottom-8 right-[30px] h-[30px] w-10 -scale-y-100"
        decoding="async"
        aria-hidden
      />

      <div className="relative z-10 flex flex-1 flex-col gap-5 px-6 pb-8 pt-[72px] sm:px-16 sm:pt-[81px]">
        <div className="flex flex-col gap-[15px]">
          <div className="flex items-center gap-[15px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={whyUsG2Assets.g2Icon}
              alt=""
              width={32}
              height={32}
              className="size-[34px] object-contain"
              decoding="async"
            />
            <span className="h-8 w-px bg-[#d9d9d9]" aria-hidden />
            <G2Stars />
          </div>
          <ReviewBody segments={review.segments} />
        </div>

        <div className="mt-auto flex items-end justify-between gap-4 pt-2">
          <div>
            <p className="text-lg font-medium leading-[27px] text-[#e80584]">
              {review.name}
            </p>
            <p className="text-base font-normal leading-[27px] text-black">
              {review.role}
            </p>
          </div>
          <CompanyLogo company={review.company} alt={review.companyAlt} />
        </div>
      </div>
    </article>
  );
}

/** Figma 8824:40361 — G2 customer reviews carousel (Lens-style coverflow) */
export function WhyUsG2Section() {
  const reduceMotion = useReducedMotion() === true;
  const total = whyUsG2Reviews.length;
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const go = useCallback(
    (delta: number) => {
      setDirection(delta);
      setIndex((current) => (current + delta + total) % total);
    },
    [total],
  );

  const featured = whyUsG2Reviews[index]!;
  const { heading, rankHighlight, rankRest, cta } = whyUsG2Content;

  return (
    <section
      className="relative overflow-hidden font-sans"
      style={{ backgroundImage: WHY_US_G2_BG }}
      aria-labelledby="why-us-g2-heading"
    >
      {/* Abstract decor — top-left */}
      <div
        className="pointer-events-none absolute left-0 top-0 h-[195px] w-[193px] opacity-20"
        aria-hidden
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={whyUsG2Assets.decorEllipse1}
          alt=""
          className="absolute left-[-23px] top-[49px] size-[113px] max-w-none"
          decoding="async"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={whyUsG2Assets.decorEllipse2}
          alt=""
          className="absolute left-[41px] top-[4px] size-[73px] max-w-none mix-blend-multiply"
          decoding="async"
        />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-14 sm:gap-[50px] sm:px-8 sm:py-16 lg:px-10 lg:py-20">
        <motion.div
          className="flex max-w-[783px] flex-col items-center gap-2.5 text-center"
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{
            duration: reduceMotion ? 0 : 0.7,
            ease: easeSmooth,
          }}
        >
          <h2
            id="why-us-g2-heading"
            className="text-[clamp(1.75rem,3.2vw,2.5rem)] font-normal leading-[1.5] text-black"
          >
            {heading}
          </h2>
          <p className="text-base font-normal leading-9 text-black sm:text-lg">
            <span className="font-medium text-[#e80584]">{rankHighlight}</span>
            {rankRest}
          </p>
        </motion.div>

        {/* Desktop — 3-card coverflow (Lens Customer Speaks pattern) */}
        <motion.div
          className="relative hidden w-full max-w-[1296px] lg:block"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{
            duration: reduceMotion ? 0 : 0.75,
            ease: easeSmooth,
            delay: reduceMotion ? 0 : 0.08,
          }}
        >
          <div
            className="relative mx-auto h-[404px] w-full max-w-[1180px]"
            aria-live="polite"
            aria-atomic="true"
          >
            {whyUsG2Reviews.map((review, itemIndex) => {
              const offset = coverflowOffset(itemIndex, index, total);
              const slot =
                COVERFLOW_SLOT[String(offset) as keyof typeof COVERFLOW_SLOT];
              const wrapped = isWrappingSlot(offset, direction);
              const isCenter = offset === 0;
              const duration = reduceMotion || wrapped ? 0 : 0.5;

              return (
                <motion.div
                  key={review.id}
                  className="absolute left-1/2 top-0 will-change-transform"
                  style={{
                    width: FEATURED_CARD_W,
                    marginLeft: -FEATURED_CARD_W / 2,
                  }}
                  initial={false}
                  animate={{
                    x: slot.x,
                    y: slot.y,
                    scale: slot.scale,
                    zIndex: slot.zIndex,
                  }}
                  transition={{
                    duration,
                    ease: easeSmooth,
                  }}
                  aria-hidden={!isCenter}
                >
                  <FeaturedReviewCard
                    review={review}
                    className={cn(
                      "pointer-events-none shadow-[1px_2px_9px_0px_rgba(0,0,0,0.1)]",
                      isCenter &&
                        "pointer-events-auto shadow-[-2px_8px_23px_0px_rgba(0,0,0,0.06)]",
                    )}
                  />
                </motion.div>
              );
            })}
          </div>

          <NavArrow
            direction="prev"
            label="Previous review"
            onClick={() => go(-1)}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 lg:-left-2 xl:-left-4"
          />
          <NavArrow
            direction="next"
            label="Next review"
            onClick={() => go(1)}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 lg:-right-2 xl:-right-4"
          />
        </motion.div>

        {/* Mobile / tablet — single featured card */}
        <motion.div
          className="relative flex w-full max-w-[590px] flex-col items-center gap-5 lg:hidden"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.65,
            ease: easeSmooth,
          }}
        >
          <AnimatePresence mode="wait" initial={false} custom={direction}>
            <motion.div
              key={featured.id}
              className="w-full"
              custom={direction}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, x: direction > 0 ? 28 : -28 }
              }
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction > 0 ? -28 : 28 }}
              transition={{
                duration: reduceMotion ? 0 : 0.35,
                ease: easeSmooth,
              }}
            >
              <FeaturedReviewCard review={featured} />
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center gap-4">
            <NavArrow
              direction="prev"
              label="Previous review"
              onClick={() => go(-1)}
            />
            <NavArrow
              direction="next"
              label="Next review"
              onClick={() => go(1)}
            />
          </div>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: reduceMotion ? 0 : 0.6,
            ease: easeSmooth,
            delay: reduceMotion ? 0 : 0.1,
          }}
        >
          <CtaButton
            href={cta.href}
            variant="solid"
            className="h-[52px]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {cta.label}
          </CtaButton>
        </motion.div>
      </div>
    </section>
  );
}
