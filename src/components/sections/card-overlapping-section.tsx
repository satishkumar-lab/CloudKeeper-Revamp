"use client";

import Image from "next/image";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState, type RefObject } from "react";

import {
  CARD_OVERLAPPING_SECTION_BG,
  defaultCardOverlappingContent,
  type CardOverlappingCard,
  type CardOverlappingContent,
} from "@/config/card-overlapping-section";
import { cn } from "@/lib/utils";

export type CardOverlappingSectionProps = Partial<CardOverlappingContent> & {
  className?: string;
  id?: string;
  background?: string;
  headingId?: string;
};

function useIsLgUp() {
  const [isLgUp, setIsLgUp] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLgUp(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return isLgUp;
}

/** Pin-track progress 0→1 while the sticky stage is locked (Lenis-safe). */
function usePinProgress(
  trackRef: RefObject<HTMLDivElement | null>,
  enabled: boolean,
) {
  const progress = useMotionValue(0);
  const lenis = useLenis();

  useEffect(() => {
    if (!enabled) {
      progress.set(0);
      return;
    }

    const update = () => {
      const track = trackRef.current;
      if (!track) return;

      const rect = track.getBoundingClientRect();
      const viewH = window.innerHeight;
      const scrollable = Math.max(rect.height - viewH, 1);
      const raw = -rect.top / scrollable;
      progress.set(Math.max(0, Math.min(1, raw)));
    };

    update();
    const unsub = lenis?.on("scroll", update);
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update, { passive: true });

    return () => {
      unsub?.();
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [enabled, lenis, progress, trackRef]);

  return progress;
}

function PhaseCardArticle({ card }: { card: CardOverlappingCard }) {
  return (
    <article className="flex h-full flex-col gap-8 bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-0 lg:p-[50px]">
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-10 lg:min-h-[338px] lg:pr-6">
        <div className="flex flex-col items-start gap-[30px]">
          <span className="inline-flex items-center justify-center rounded-[22px] border-[0.6px] border-[#17a5fb] px-3.5 py-1 text-sm capitalize leading-[1.4] text-[#17a5fb]">
            {card.tag}
          </span>
          <div className="flex max-w-[515px] flex-col gap-2.5">
            <h3 className="text-[clamp(1.5rem,2.5vw,1.875rem)] font-medium leading-[1.3] text-black">
              {card.title}
            </h3>
            <p className="text-base leading-[1.5] text-black">
              {card.description}
            </p>
          </div>
        </div>
        <p
          className="text-[30px] font-extralight leading-[1.5] tracking-[-0.5px] text-black/40"
          aria-hidden
        >
          {card.number}
        </p>
      </div>

      <div className="relative h-[220px] w-full shrink-0 overflow-hidden rounded-[20px] bg-[#fbfbfb] sm:h-[280px] lg:h-[338px] lg:w-[580px]">
        <Image
          src={card.visual}
          alt=""
          fill
          className="object-contain object-center"
          sizes="(max-width: 1024px) 100vw, 580px"
        />
      </div>
    </article>
  );
}

function OverlapCard({
  card,
  index,
  progress,
  total,
}: {
  card: CardOverlappingCard;
  index: number;
  progress: MotionValue<number>;
  total: number;
}) {
  const steps = Math.max(total - 1, 1);
  const enterStart = index === 0 ? 0 : (index - 1) / steps;
  const enterEnd = index === 0 ? 0 : index / steps;
  const exitEnd = index >= total - 1 ? 1 : (index + 1) / steps;
  const isFirst = index === 0;
  const isLast = index >= total - 1;

  const y = useTransform(
    progress,
    isFirst ? [0, 1] : [enterStart, enterEnd],
    isFirst ? ["0%", "0%"] : ["100%", "0%"],
  );

  const scale = useTransform(
    progress,
    isLast
      ? [0, 1]
      : isFirst
        ? [0, 1 / steps]
        : [enterStart, enterEnd, exitEnd],
    isLast ? [1, 1] : isFirst ? [1, 0.97] : [1, 1, 0.97],
  );

  return (
    <motion.div
      className="absolute inset-[1px] origin-center will-change-transform"
      style={{ y, scale, zIndex: index + 1 }}
    >
      <div className="size-full overflow-hidden rounded-[24px] border border-solid border-[#e6ecf1] bg-white lg:rounded-[28px]">
        <PhaseCardArticle card={card} />
      </div>
    </motion.div>
  );
}

/**
 * Shared sticky overlapping cards section (desktop pin + slide-up stack).
 * Pass heading / cards to customize per page; defaults to the 3-phase path.
 */
export function CardOverlappingSection({
  headingLine1 = defaultCardOverlappingContent.headingLine1,
  headingLine2 = defaultCardOverlappingContent.headingLine2,
  subtitleBefore = defaultCardOverlappingContent.subtitleBefore,
  subtitleAccent = defaultCardOverlappingContent.subtitleAccent,
  subtitleAfter = defaultCardOverlappingContent.subtitleAfter,
  cards = defaultCardOverlappingContent.cards,
  className,
  id = "card-overlapping",
  background = CARD_OVERLAPPING_SECTION_BG,
  headingId = "card-overlapping-heading",
}: CardOverlappingSectionProps) {
  const reduceMotion = useReducedMotion() === true;
  const isLgUp = useIsLgUp();
  const pinEnabled = isLgUp && !reduceMotion;

  const trackRef = useRef<HTMLDivElement>(null);
  const progress = usePinProgress(trackRef, pinEnabled);

  const trackHeight = `${Math.max(cards.length, 2) * 100}vh`;

  const headingBlock = (
    <div className="flex w-full max-w-[1280px] flex-col items-center gap-2.5 text-center">
      <h2
        id={headingId}
        className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.2px] text-black"
      >
        {headingLine1}
        <br />
        {headingLine2}
      </h2>
      <p className="max-w-[1138px] text-base leading-[1.5] text-black sm:text-lg">
        {subtitleBefore}
        <span className="text-[#e80584]">{subtitleAccent}</span>
        {subtitleAfter}
      </p>
    </div>
  );

  return (
    <section
      id={id}
      className={cn("relative font-sans", className)}
      style={{ background }}
      aria-labelledby={headingId}
    >
      {!pinEnabled ? (
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[60px] px-5 py-16 sm:px-8 lg:px-[90px] lg:py-20">
          {headingBlock}
          <ul className="flex w-full max-w-[1260px] flex-col gap-[60px]">
            {cards.map((card) => (
              <li
                key={card.id}
                className="overflow-hidden rounded-[24px] border border-solid border-[#e6ecf1] bg-white lg:rounded-[28px]"
              >
                <PhaseCardArticle card={card} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div ref={trackRef} className="relative" style={{ height: trackHeight }}>
          <div className="sticky top-0 flex min-h-screen flex-col justify-center pt-16">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 py-10 sm:px-8 lg:gap-[60px] lg:px-[90px]">
              {headingBlock}

              <div className="relative w-full max-w-[1260px] overflow-hidden rounded-[24px] lg:rounded-[28px]">
                <div className="invisible pointer-events-none" aria-hidden>
                  <div className="m-px overflow-hidden rounded-[24px] border border-solid border-transparent lg:rounded-[28px]">
                    <PhaseCardArticle card={cards[0]} />
                  </div>
                </div>

                {cards.map((card, index) => (
                  <OverlapCard
                    key={card.id}
                    card={card}
                    index={index}
                    total={cards.length}
                    progress={progress}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
