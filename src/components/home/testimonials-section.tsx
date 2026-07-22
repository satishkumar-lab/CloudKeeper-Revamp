"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

import {
  PHOTO_FRAME_GRADIENT,
  testimonialsAssets,
  testimonialsContent,
  type TestimonialItem,
} from "@/config/testimonials-section";
import { SpanTextReveal } from "@/components/motion/span-text-reveal";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { cn } from "@/lib/utils";

export type TestimonialsSectionProps = {
  className?: string;
  id?: string;
};

/** Equal vertical line length above/below carousel controls */
const CAROUSEL_DIVIDER_LENGTH = 300;

const revealEase = [0.22, 1, 0.36, 1] as const;

const slideVariants = {
  enter: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? 28 : -28,
  }),
  center: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: revealEase },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction > 0 ? -28 : 28,
    transition: { duration: 0.35, ease: revealEase },
  }),
};

function CarouselChevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-[10px] shrink-0 ${direction === "next" ? "rotate-180" : ""}`}
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

function CarouselArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group flex size-[43px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-solid border-[#17a5fb] bg-white text-[#17a5fb] transition-colors duration-200 hover:bg-[#17a5fb] hover:text-white"
    >
      <CarouselChevron direction={direction} />
    </button>
  );
}

function CarouselVerticalDivider() {
  return (
    <div
      className="flex w-0 shrink-0 items-center justify-center"
      style={{ height: CAROUSEL_DIVIDER_LENGTH }}
      aria-hidden
    >
      <div className="-rotate-90 shrink-0">
        <img
          src={testimonialsAssets.dividerTop}
          alt=""
          className="block h-px max-w-none"
          style={{ width: CAROUSEL_DIVIDER_LENGTH }}
          decoding="async"
        />
      </div>
    </div>
  );
}

function CompanyLogo({ item }: { item: TestimonialItem }) {
  const logoMaxHeight = item.companyLogoMaxHeight ?? 48;

  if (item.companyLogo) {
    return (
      <div className="flex h-[64px] w-full items-center">
        <img
          src={item.companyLogo}
          alt={item.companyLogoAlt}
          className="w-auto max-w-full object-contain object-left"
          style={{ maxHeight: logoMaxHeight, height: "auto" }}
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div className="flex h-[64px] w-full items-center">
      <p className="text-xl font-medium tracking-[-0.4px] text-[#253746]">
        {item.companyLogoAlt}
      </p>
    </div>
  );
}

/** Figma 8251:4579 — Steven author block */
function AuthorBlock({ name, role }: { name: string; role: string }) {
  return (
    <div className="relative flex w-full max-w-[524px] flex-col items-end gap-px py-1.5">
      <div className="relative flex w-full items-center justify-end gap-5">
        <div className="relative h-px min-w-0 flex-1">
          <img
            src={testimonialsAssets.authorLine}
            alt=""
            className="block h-px w-full max-w-[316px] object-cover object-left"
            decoding="async"
            aria-hidden
          />
        </div>
        <p className="relative z-10 shrink-0 bg-white pl-1 text-right text-[26px] font-medium leading-[1.5] tracking-[-0.5px] text-[#17a5fb]">
          <SpanTextReveal key={name} direction="rtl">
            {name}
          </SpanTextReveal>
        </p>
      </div>
      <p className="relative z-10 w-full bg-white text-right text-[22px] leading-[1.5] text-[#253746]">
        {role}
      </p>
    </div>
  );
}

/** Figma 8301:9020 — rotated portrait frame */
function TestimonialPortrait({ item }: { item: TestimonialItem }) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="relative size-[364px] shrink-0 overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="relative size-[292px] rotate-[-46deg] overflow-hidden rounded-[80px]"
          style={{ background: PHOTO_FRAME_GRADIENT }}
        >
          <div className="absolute left-[calc(50%-10px)] top-[calc(50%+20px)] flex h-[415px] w-[415px] -translate-x-1/2 -translate-y-1/2 items-center justify-center">
            <div className="rotate-[46deg]">
              <div className="relative h-[308px] w-[279px] overflow-hidden">
                <img
                  src={item.photo}
                  alt={item.name}
                  className={
                    item.photoImageClassName ??
                    "absolute inset-0 size-full object-cover object-bottom"
                  }
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-[241px] top-0 h-[368px] w-[123px] bg-gradient-to-r from-transparent to-white"
        aria-hidden
      />

      {item.videoHref ? (
        <motion.div
          className="absolute bottom-[60px] right-[51px]"
          whileHover={
            prefersReducedMotion ? undefined : { scale: 1.06 }
          }
          whileTap={prefersReducedMotion ? undefined : { scale: 0.96 }}
          transition={{ duration: 0.25, ease: revealEase }}
        >
          <Link
            href={item.videoHref}
            className="flex size-[62px] items-center justify-center rounded-[33px] bg-gradient-to-r from-[#3c7abd] to-[#ed0082] shadow-[inset_0px_2.385px_4.77px_rgba(0,0,0,0.05)]"
            aria-label={`Play ${item.name} video`}
          >
            <img
              src={testimonialsAssets.playIcon}
              alt=""
              className="size-[24px]"
              decoding="async"
              aria-hidden
            />
          </Link>
        </motion.div>
      ) : null}

      <div className="absolute bottom-[36px] right-[-12px] flex items-end gap-1">
        <span className="text-base uppercase tracking-[-0.5px] text-[#828282]">
          Play
        </span>
        <img
          src={testimonialsAssets.playLabelArrow}
          alt=""
          className="mb-1 h-[71px] w-[51px] -scale-x-100 rotate-[165deg]"
          decoding="async"
          aria-hidden
        />
      </div>
    </div>
  );
}

function TestimonialCopy({
  item,
  direction,
  quoteClassName,
}: {
  item: TestimonialItem;
  direction: number;
  quoteClassName: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div className="flex w-full flex-col gap-5">
        <CompanyLogo item={item} />
        <blockquote className={quoteClassName}>&ldquo;{item.quote}&rdquo;</blockquote>
        <AuthorBlock name={item.name} role={item.role} />
      </div>
    );
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={item.id}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
        className="flex w-full flex-col gap-5"
      >
        <CompanyLogo item={item} />
        <blockquote className={quoteClassName}>&ldquo;{item.quote}&rdquo;</blockquote>
        <AuthorBlock name={item.name} role={item.role} />
      </motion.div>
    </AnimatePresence>
  );
}

function TestimonialPortraitSlide({
  item,
  direction,
}: {
  item: TestimonialItem;
  direction: number;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <TestimonialPortrait item={item} />;
  }

  return (
    <AnimatePresence mode="wait" custom={direction}>
      <motion.div
        key={item.id}
        custom={direction}
        variants={slideVariants}
        initial="enter"
        animate="center"
        exit="exit"
      >
        <TestimonialPortrait item={item} />
      </motion.div>
    </AnimatePresence>
  );
}

/** Figma 8301:8979 — Testimonials */
export function TestimonialsSection({
  className,
  id = "testimonials",
}: TestimonialsSectionProps = {}) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [sectionEl, setSectionEl] = useState<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useScrollReveal(sectionEl, {
    disabled: prefersReducedMotion === true,
    threshold: 0.18,
  });

  const total = testimonialsContent.length;
  const item = testimonialsContent[index];

  if (!item) return null;

  const goPrev = () => {
    setDirection(-1);
    setIndex((i) => (i === 0 ? total - 1 : i - 1));
  };
  const goNext = () => {
    setDirection(1);
    setIndex((i) => (i === total - 1 ? 0 : i + 1));
  };

  const sectionVisible = prefersReducedMotion === true || inView;

  return (
    <section
      ref={setSectionEl}
      id={id}
      className={cn("relative overflow-hidden bg-white font-sans", className)}
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Customer success stories
      </h2>

      {/* Quote mark — 8301:9037 */}
      <motion.img
        src={testimonialsAssets.quoteMark}
        alt=""
        className="pointer-events-none absolute left-[58px] top-[27px] hidden h-[72px] w-[86px] lg:block"
        decoding="async"
        aria-hidden
        initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
        animate={
          sectionVisible
            ? { opacity: 1, y: 0 }
            : prefersReducedMotion
              ? undefined
              : { opacity: 0, y: 12 }
        }
        transition={{ duration: 0.6, ease: revealEase, delay: 0.05 }}
      />

      {/* Decorative bubble — 8301:9038 */}
      <img
        src={testimonialsAssets.bgBubble}
        alt=""
        className="pointer-events-none absolute left-[827px] top-[-611px] hidden w-[642px] rotate-[-52deg] opacity-30 lg:block"
        decoding="async"
        aria-hidden
      />

      <div className="relative mx-auto min-h-[763px] w-full max-w-[1440px] px-6 py-6 lg:px-0 lg:py-0">
        {/* Desktop — Figma absolute layout */}
        <div className="relative hidden min-h-[763px] lg:block">
          {/* Quote — 8301:8984 */}
          <motion.div
            className="absolute left-[115px] top-[152px] flex w-[524px] flex-col"
            initial={prefersReducedMotion ? false : { opacity: 0, x: -36 }}
            animate={
              sectionVisible
                ? { opacity: 1, x: 0 }
                : prefersReducedMotion
                  ? undefined
                  : { opacity: 0, x: -36 }
            }
            transition={{ duration: 0.7, ease: revealEase }}
          >
            <TestimonialCopy
              item={item}
              direction={direction}
              quoteClassName="text-[28px] leading-[1.7] text-black"
            />
          </motion.div>

          {/* Center carousel — equal dividers + balanced arrows */}
          <motion.div
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.92 }}
            animate={
              sectionVisible
                ? { opacity: 1, scale: 1 }
                : prefersReducedMotion
                  ? undefined
                  : { opacity: 0, scale: 0.92 }
            }
            transition={{ duration: 0.55, ease: revealEase, delay: 0.12 }}
          >
            <CarouselVerticalDivider />
            <div className="relative z-10 flex flex-col gap-5 bg-white py-1">
              <CarouselArrow
                direction="prev"
                onClick={goPrev}
                label="Previous story"
              />
              <CarouselArrow
                direction="next"
                onClick={goNext}
                label="Next story"
              />
            </div>
            <CarouselVerticalDivider />
          </motion.div>

          {/* Portrait — 8301:9009 */}
          <motion.div
            className="absolute left-[890px] top-[189px]"
            initial={prefersReducedMotion ? false : { opacity: 0, x: 36 }}
            animate={
              sectionVisible
                ? { opacity: 1, x: 0 }
                : prefersReducedMotion
                  ? undefined
                  : { opacity: 0, x: 36 }
            }
            transition={{ duration: 0.7, ease: revealEase, delay: 0.08 }}
          >
            <TestimonialPortraitSlide item={item} direction={direction} />
          </motion.div>
        </div>

        {/* Mobile / tablet stack */}
        <div className="flex flex-col items-center gap-10 lg:hidden">
          <img
            src={testimonialsAssets.quoteMark}
            alt=""
            className="h-14 w-auto self-start opacity-90"
            decoding="async"
            aria-hidden
          />
          <div className="w-full max-w-[524px]">
            <TestimonialCopy
              item={item}
              direction={direction}
              quoteClassName="text-xl leading-[1.7] text-black sm:text-2xl"
            />
          </div>
          <TestimonialPortraitSlide item={item} direction={direction} />
          <div className="flex gap-5">
            <CarouselArrow
              direction="prev"
              onClick={goPrev}
              label="Previous story"
            />
            <CarouselArrow
              direction="next"
              onClick={goNext}
              label="Next story"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
