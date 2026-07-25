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
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

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
  /** Pink hollow bullet used when cards have `bullets`. */
  bulletIcon?: string;
  /** Stars icon for `tagVariant: "featured"`. */
  tagStarsIcon?: string;
  /** Optional per-card custom visual (return null to use default image). */
  renderVisual?: (card: CardOverlappingCard) => ReactNode;
};

const FEATURED_TAG_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

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

/** Sticky header (announcement + nav) height — keeps pin below SiteHeader. */
function useStickyHeaderOffset() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header) return;

    const sync = () => {
      setOffset(Math.ceil(header.getBoundingClientRect().height));
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(header);
    window.addEventListener("resize", sync, { passive: true });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", sync);
    };
  }, []);

  return offset;
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

function CardTag({
  tag,
  variant = "default",
  starsIcon,
}: {
  tag: string;
  variant?: CardOverlappingCard["tagVariant"];
  starsIcon?: string;
}) {
  if (variant === "featured") {
    return (
      <span
        className="inline-flex rounded-[22px] p-px"
        style={{ backgroundImage: FEATURED_TAG_GRADIENT }}
      >
        <span className="inline-flex items-center justify-center gap-1 rounded-[21px] bg-white py-3 pl-2.5 pr-1.5">
          <span
            className="bg-clip-text text-sm capitalize leading-none tracking-[-0.5px] text-transparent"
            style={{ backgroundImage: FEATURED_TAG_GRADIENT }}
          >
            {tag}
          </span>
          {starsIcon ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={starsIcon}
              alt=""
              width={16}
              height={15}
              className="size-4 shrink-0 object-contain"
            />
          ) : null}
        </span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center justify-center rounded-[22px] border-[0.6px] border-[#17a5fb] px-3.5 py-1 text-sm capitalize leading-[1.4] text-[#17a5fb]">
      {tag}
    </span>
  );
}

function PhaseCardArticle({
  card,
  bulletIcon,
  tagStarsIcon,
  renderVisual,
}: {
  card: CardOverlappingCard;
  bulletIcon?: string;
  tagStarsIcon?: string;
  renderVisual?: (card: CardOverlappingCard) => ReactNode;
}) {
  const bullets = card.bullets?.filter(Boolean) ?? [];
  const hasBullets = bullets.length > 0;
  const customVisual = renderVisual?.(card);

  return (
    <article className="flex h-full flex-col gap-6 bg-white p-6 sm:p-8 lg:flex-row lg:items-center lg:gap-0 lg:p-10 xl:p-[42px]">
      <div className="flex min-h-0 flex-1 flex-col justify-between gap-8 lg:min-h-[300px] lg:pr-6">
        <div className="flex flex-col items-start gap-5 lg:gap-6">
          {card.tag ? (
            <CardTag
              tag={card.tag}
              variant={card.tagVariant}
              starsIcon={tagStarsIcon}
            />
          ) : null}
          <div className="flex max-w-[541px] flex-col gap-2.5">
            <h3 className="text-[clamp(1.375rem,2.2vw,1.875rem)] font-medium leading-[1.3] text-black">
              {card.title}
            </h3>
            {hasBullets ? (
              <ul className="flex flex-col gap-2.5">
                {bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-center gap-5 text-base leading-[1.5] text-black"
                  >
                    {bulletIcon ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={bulletIcon}
                        alt=""
                        width={14}
                        height={14}
                        className="size-3.5 shrink-0 object-contain"
                      />
                    ) : (
                      <span
                        className="size-3.5 shrink-0 rounded-full border border-[#e80584]"
                        aria-hidden
                      />
                    )}
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            ) : card.description ? (
              <p className="text-base leading-[1.5] text-black">
                {card.description}
              </p>
            ) : null}
          </div>
        </div>
        <p
          className="text-[30px] font-extralight leading-[1.5] tracking-[-0.5px] text-black/40"
          aria-hidden
        >
          {card.number}
        </p>
      </div>

      <div className="relative h-[200px] w-full shrink-0 overflow-hidden rounded-[20px] sm:h-[260px] lg:h-[300px] lg:w-[520px] xl:h-[318px] xl:w-[560px]">
        {customVisual ? (
          customVisual
        ) : (
          <Image
            src={card.visual}
            alt=""
            fill
            className={cn(
              "object-center",
              card.visualFit === "cover" ? "object-cover" : "object-contain",
            )}
            style={
              card.visualScale && card.visualScale !== 1
                ? { transform: `scale(${card.visualScale})` }
                : undefined
            }
            sizes="(max-width: 1024px) 100vw, 560px"
          />
        )}
      </div>
    </article>
  );
}

function OverlapCard({
  card,
  index,
  progress,
  total,
  bulletIcon,
  tagStarsIcon,
  renderVisual,
}: {
  card: CardOverlappingCard;
  index: number;
  progress: MotionValue<number>;
  total: number;
  bulletIcon?: string;
  tagStarsIcon?: string;
  renderVisual?: (card: CardOverlappingCard) => ReactNode;
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
        <PhaseCardArticle
          card={card}
          bulletIcon={bulletIcon}
          tagStarsIcon={tagStarsIcon}
          renderVisual={renderVisual}
        />
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
  bulletIcon,
  tagStarsIcon,
  renderVisual,
}: CardOverlappingSectionProps) {
  const reduceMotion = useReducedMotion() === true;
  const isLgUp = useIsLgUp();
  const pinEnabled = isLgUp && !reduceMotion;
  const headerOffset = useStickyHeaderOffset();

  const trackRef = useRef<HTMLDivElement>(null);
  const progress = usePinProgress(trackRef, pinEnabled);

  /** Scroll distance per card — tighter than 100vh so stack feels snappier. */
  const trackHeight = `${Math.max(cards.length, 2) * 70}vh`;
  const hasHeadingLine2 = Boolean(headingLine2?.trim());

  const headingBlock = (
    <motion.div
      className="flex w-full max-w-[1280px] flex-col items-center gap-2.5 text-center"
      initial={reduceMotion ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      <h2
        id={headingId}
        className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.3] tracking-[-0.2px] text-black"
      >
        {headingLine1}
        {hasHeadingLine2 ? (
          <>
            <br />
            {headingLine2}
          </>
        ) : null}
      </h2>
      <p className="max-w-[1138px] text-base leading-[1.5] text-black sm:text-lg">
        {subtitleBefore}
        {subtitleAccent ? (
          <span className="text-[#e80584]">{subtitleAccent}</span>
        ) : null}
        {subtitleAfter}
      </p>
    </motion.div>
  );

  return (
    <section
      id={id}
      className={cn("relative py-10 font-sans", className)}
      style={{ background }}
      aria-labelledby={headingId}
    >
      {!pinEnabled ? (
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-10 px-5 sm:px-8 lg:gap-12 lg:px-[90px]">
          {headingBlock}
          <ul className="flex w-full max-w-[1260px] flex-col gap-10 lg:gap-12">
            {cards.map((card) => (
              <li
                key={card.id}
                className="overflow-hidden rounded-[24px] border border-solid border-[#e6ecf1] bg-white lg:rounded-[28px]"
              >
                <PhaseCardArticle
                  card={card}
                  bulletIcon={bulletIcon}
                  tagStarsIcon={tagStarsIcon}
                  renderVisual={renderVisual}
                />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div ref={trackRef} className="relative" style={{ height: trackHeight }}>
          {/*
            Pin below sticky SiteHeader (announcement + nav).
            Height = remaining viewport so content centers without huge bottom gap
            and without sliding under the nav.
          */}
          <div
            className="sticky flex flex-col justify-center py-10"
            style={{
              top: headerOffset,
              height: `calc(100svh - ${headerOffset}px)`,
            }}
          >
            <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-8 px-5 sm:px-8 lg:px-[90px]">
              {headingBlock}

              <div className="relative w-full max-w-[1260px] overflow-hidden rounded-[24px] lg:rounded-[28px]">
                <div className="invisible pointer-events-none" aria-hidden>
                  <div className="m-px overflow-hidden rounded-[24px] border border-solid border-transparent lg:rounded-[28px]">
                    <PhaseCardArticle
                      card={cards[0]}
                      bulletIcon={bulletIcon}
                      tagStarsIcon={tagStarsIcon}
                      renderVisual={renderVisual}
                    />
                  </div>
                </div>

                {cards.map((card, index) => (
                  <OverlapCard
                    key={card.id}
                    card={card}
                    index={index}
                    total={cards.length}
                    progress={progress}
                    bulletIcon={bulletIcon}
                    tagStarsIcon={tagStarsIcon}
                    renderVisual={renderVisual}
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
