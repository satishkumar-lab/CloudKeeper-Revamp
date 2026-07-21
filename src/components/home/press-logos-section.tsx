"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import {
  PRESS_CARD_GAP,
  PRESS_CARD_HEIGHT,
  PRESS_CARD_HOVER_BORDER_GRADIENT,
  PRESS_CARD_WIDTH_OFFSET,
  PRESS_CAROUSEL_TRANSITION,
  PRESS_LOGOS_BG,
  PRESS_VISIBLE_CARDS,
  pressLogoItems,
  pressLogosAssets,
  pressLogosContent,
  type PressLogoItem,
} from "@/config/press-logos-section";
import { cn } from "@/lib/utils";

const PRESS_ITEM_COUNT = pressLogoItems.length;

function PressLogo({ item }: { item: PressLogoItem }) {
  return (
    <div className="flex h-[87px] w-full max-w-[331px] items-center">
      <img
        src={item.logoSrc}
        alt={item.publication}
        width={item.logoWidth}
        height={item.logoHeight}
        className={
          item.logoClassName ??
          "max-h-[87px] max-w-[331px] object-contain object-left"
        }
        style={
          item.logoClassName
            ? undefined
            : { width: item.logoWidth, height: item.logoHeight }
        }
        decoding="async"
      />
    </div>
  );
}

function PressCard({ item, width }: { item: PressLogoItem; width: number }) {
  return (
    <div
      className="group/card relative shrink-0 transition-[box-shadow] duration-200 hover:shadow-[0px_10px_25px_rgba(0,59,121,0.07)]"
      style={{ width, height: PRESS_CARD_HEIGHT }}
    >
      <div
        className="absolute inset-0 rounded-[10px] opacity-0 transition-opacity duration-200 group-hover/card:opacity-100"
        style={{ background: PRESS_CARD_HOVER_BORDER_GRADIENT }}
        aria-hidden
      />
      <article className="absolute inset-px flex flex-col rounded-[9px] bg-white">
        <Link
          href={item.href}
          className="absolute right-[34px] top-[16px] flex size-4 items-center justify-center"
          aria-label={`Read article on ${item.publication}`}
        >
          <span className="relative size-4 shrink-0">
            <span className="absolute inset-[12%] flex items-center justify-center">
              <span className="transition-transform duration-200 ease-out group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5">
                <img
                  src={pressLogosAssets.iconExternal}
                  alt=""
                  width={16}
                  height={16}
                  className="size-4 object-contain"
                  decoding="async"
                  aria-hidden
                />
              </span>
            </span>
          </span>
        </Link>

        <div className="flex flex-col gap-[30px] px-[40px] pt-[16px]">
          <PressLogo item={item} />
          <p className="text-xl leading-[1.5] tracking-[-0.5px] text-black">
            {item.headline}
          </p>
        </div>
      </article>
    </div>
  );
}

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
      className="group flex size-[42px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-solid border-[#17a5fb] bg-white text-[#17a5fb] transition-colors duration-200 hover:bg-[#17a5fb] hover:text-white"
    >
      <CarouselChevron direction={direction} />
    </button>
  );
}

/** Figma 8251:21159 — CloudKeeper in the Spotlight */
export function PressLogosSection() {
  const { heading, viewAllHref } = pressLogosContent;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const loopItems = useMemo(
    () => [...pressLogoItems, ...pressLogoItems, ...pressLogoItems],
    [],
  );
  const [trackIndex, setTrackIndex] = useState(PRESS_ITEM_COUNT);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const cardStep = cardWidth > 0 ? cardWidth + PRESS_CARD_GAP : 0;
  const scrollOffset = trackIndex * cardStep;
  const pageStep = PRESS_VISIBLE_CARDS;
  const maxPageIndex = Math.max(0, PRESS_ITEM_COUNT - PRESS_VISIBLE_CARDS);
  const dotCount = Math.floor(maxPageIndex / pageStep) + 1;
  const activeDot = Math.min(
    dotCount - 1,
    Math.round((trackIndex - PRESS_ITEM_COUNT) / pageStep),
  );

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      const width = viewport.clientWidth;
      const nextCardWidth =
        (width - PRESS_CARD_GAP * (PRESS_VISIBLE_CARDS - 1)) /
          PRESS_VISIBLE_CARDS -
        PRESS_CARD_WIDTH_OFFSET;
      setCardWidth(nextCardWidth);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setTrackIndex((index) => index + pageStep);
  }, [pageStep]);

  const goPrev = useCallback(() => {
    setTrackIndex((index) => index - pageStep);
  }, [pageStep]);

  const goToPage = useCallback((page: number) => {
    setTrackIndex(PRESS_ITEM_COUNT + page * pageStep);
  }, [pageStep]);

  const handleAnimationComplete = useCallback(() => {
    if (!transitionEnabled) return;

    if (trackIndex >= PRESS_ITEM_COUNT * 2) {
      setTransitionEnabled(false);
      setTrackIndex((index) => index - PRESS_ITEM_COUNT);
      return;
    }

    if (trackIndex < PRESS_ITEM_COUNT) {
      setTransitionEnabled(false);
      setTrackIndex((index) => index + PRESS_ITEM_COUNT);
    }
  }, [trackIndex, transitionEnabled]);

  useEffect(() => {
    if (transitionEnabled) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled, trackIndex]);

  return (
    <section
      id="press"
      className="relative overflow-hidden font-sans"
      style={{ background: PRESS_LOGOS_BG }}
      aria-labelledby="press-logos-heading"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 px-6 pb-[70px] pt-16 lg:gap-[40px] lg:px-10 lg:pt-20">
        <div className="flex items-center justify-between gap-6">
          <h2
            id="press-logos-heading"
            className="text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-1px] text-black"
          >
            {heading}
          </h2>
          <Link
            href={viewAllHref}
            data-cursor-label="read here"
            className="group/view-all inline-flex shrink-0 items-center gap-1.5 text-base font-medium tracking-[-0.048px] text-[#17a5fb] transition-colors duration-200 hover:text-[#0e95ea]"
          >
            <span className="underline-offset-[6px] group-hover/view-all:underline">
              View All
            </span>
            <img
              src={pressLogosAssets.arrowViewAll}
              alt=""
              width={16}
              height={16}
              className="size-4 transition-transform duration-200 ease-out group-hover/view-all:translate-x-1"
              decoding="async"
              aria-hidden
            />
          </Link>
        </div>

        <div
          ref={viewportRef}
          className="relative w-full overflow-hidden"
          style={{ height: PRESS_CARD_HEIGHT + 3 }}
        >
          <motion.div
            className="flex will-change-transform"
            initial={false}
            style={{ gap: PRESS_CARD_GAP }}
            animate={{ x: cardStep > 0 ? -scrollOffset : 0 }}
            transition={
              transitionEnabled ? PRESS_CAROUSEL_TRANSITION : { duration: 0 }
            }
            onAnimationComplete={handleAnimationComplete}
          >
            {loopItems.map((item, index) => (
              <PressCard
                key={`${item.id}-${index}`}
                item={item}
                width={cardWidth || 1}
              />
            ))}
          </motion.div>
        </div>

        <div className="relative flex h-[50px] items-center justify-center">
          <div className="flex items-center gap-1 px-3">
            {Array.from({ length: dotCount }, (_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeDot ? "true" : undefined}
                onClick={() => goToPage(index)}
                className={cn(
                  "rounded-full transition-all duration-200",
                  index === activeDot
                    ? "h-1.5 w-5 bg-[#17a5fb]"
                    : "size-1.5 bg-[#a0d1f1] opacity-60",
                )}
              />
            ))}
          </div>

          <div className="absolute right-0 flex items-center gap-4">
            <CarouselArrow
              direction="prev"
              label="Previous press stories"
              onClick={goPrev}
            />
            <CarouselArrow
              direction="next"
              label="Next press stories"
              onClick={goNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
