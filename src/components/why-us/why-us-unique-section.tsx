"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import {
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import { CtaButton } from "@/components/home/primary-button";
import {
  WHY_US_UNIQUE_HUB_BORDER,
  WHY_US_UNIQUE_PRODUCT_GRADIENT,
  whyUsUniqueAssets,
  whyUsUniqueCards,
  whyUsUniqueContent,
  type WhyUsUniqueCard,
} from "@/config/why-us-unique";
import { cn } from "@/lib/utils";

const CARD_W = 350;
const STAGE_W = 1230;
/** Stage ends at bottom of product cards (CTA sits 40px below) */
const STAGE_H = 647;

/** Soft cinematic ease — matches AZ / hero entrance */
const easeSmooth = [0.16, 1, 0.3, 1] as const;

/** Snappy-but-smooth spring for card hover (AZ one-stop family) */
const hoverSpring = {
  type: "spring" as const,
  stiffness: 380,
  damping: 32,
  mass: 0.7,
};

/** Soft dim/restore for spokes — high damping = no bounce/jerk */
const spokeSpring = {
  type: "spring" as const,
  stiffness: 180,
  damping: 28,
  mass: 0.9,
};

/**
 * Choreography (desktop): header → hub → spokes grow outward → cards land → CTA
 * Delays are relative to each block entering the viewport.
 */
const CHOREO = {
  hub: 0.12,
  spoke: 0.32,
  spokeStagger: 0.07,
  spokeDraw: 0.72,
  card: 0.58,
  cardStagger: 0.07,
  cta: 0.95,
} as const;

type Pt = { x: number; y: number };
type Connector = { id: string; from: Pt; to: Pt };

function UniquePointerCard({
  card,
  className,
  reduceMotion,
  index = 0,
  onHoverChange,
}: {
  card: WhyUsUniqueCard;
  className?: string;
  reduceMotion?: boolean;
  index?: number;
  onHoverChange?: (hovered: boolean) => void;
}) {
  return (
    <motion.div
      className={cn("w-full max-w-[350px]", className)}
      initial={reduceMotion ? false : { opacity: 0, y: 22, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.12, margin: "0px 0px -40px 0px" }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : CHOREO.card + index * CHOREO.cardStagger,
      }}
    >
      <motion.article
        className={cn(
          "group/tile flex w-full flex-col overflow-hidden rounded-[20px] bg-white will-change-transform",
          "border-[0.7px] border-[#d9eefd]",
          "outline-none focus-visible:border-[#77dcff]",
        )}
        initial={false}
        whileHover={
          reduceMotion
            ? undefined
            : {
                y: -5,
                scale: 1.012,
                borderColor: "#77dcff",
              }
        }
        whileTap={reduceMotion ? undefined : { y: -2, scale: 0.995 }}
        transition={hoverSpring}
        onHoverStart={() => onHoverChange?.(true)}
        onHoverEnd={() => onHoverChange?.(false)}
      >
        <div className="bg-[#f2f9ff] px-2 py-[15px] text-center text-lg font-normal leading-[1.5] text-black transition-colors duration-500 ease-out group-hover/tile:bg-[#eaf6ff]">
          CloudKeeper{" "}
          <span
            className="bg-clip-text font-semibold tracking-[-0.054px] text-transparent"
            style={{ backgroundImage: WHY_US_UNIQUE_PRODUCT_GRADIENT }}
          >
            {card.product}
          </span>
        </div>

        <div className="flex h-8 items-center justify-center border-b border-[#f2f2f2] bg-white px-2 transition-colors duration-500 ease-out group-hover/tile:bg-[#fff7fa]">
          <p className="text-center text-sm font-medium leading-none text-black">
            {card.subtitle}
          </p>
        </div>

        <ul className="flex flex-col gap-[22px] bg-white px-[15px] pb-[18px] pt-5">
          {card.points.map((point, pi) => (
            <motion.li
              key={point}
              className="flex items-start gap-3"
              initial={reduceMotion ? false : { opacity: 0, x: -4 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{
                duration: reduceMotion ? 0 : 0.45,
                ease: easeSmooth,
                delay: reduceMotion
                  ? 0
                  : CHOREO.card + index * CHOREO.cardStagger + 0.12 + pi * 0.04,
              }}
            >
              <span
                className="mt-1.5 size-1.5 shrink-0 rounded-full bg-[#ffbee1] transition-transform duration-500 ease-out group-hover/tile:scale-125"
                aria-hidden
              />
              <span className="text-sm font-normal leading-[1.5] text-black">
                {point}
              </span>
            </motion.li>
          ))}
        </ul>

        <div className="flex h-5 items-center justify-center bg-[#fff7fa] transition-colors duration-500 ease-out group-hover/tile:bg-[#ffeff6]">
          <p className="text-center text-xs font-normal leading-none text-black">
            {whyUsUniqueContent.vendorsLabel}
          </p>
        </div>

        <div className="flex h-[50px] overflow-hidden rounded-b-[9px] bg-[#f9f9f9]">
          {card.vendorCells.map((n) => (
            <div key={n} className="relative h-[50px] flex-1">
              <Image
                src={whyUsUniqueAssets.vendorCell(n)}
                alt=""
                fill
                className="object-contain object-center transition-transform duration-500 ease-out group-hover/tile:scale-[1.03]"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </motion.article>
    </motion.div>
  );
}

/** Figma 22:14874 — 285×158 hub with cyan→magenta border */
function UniqueHub({
  className,
  reduceMotion,
}: {
  className?: string;
  reduceMotion?: boolean;
}) {
  return (
    <motion.div
      className={cn("relative h-[158px] w-[285px]", className)}
      initial={reduceMotion ? false : { opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{
        duration: reduceMotion ? 0 : 0.85,
        ease: easeSmooth,
        delay: reduceMotion ? 0 : CHOREO.hub,
      }}
    >
      <motion.div
        className="group/hub h-full will-change-transform"
        initial={false}
        whileHover={reduceMotion ? undefined : { scale: 1.025 }}
        transition={hoverSpring}
      >
        <div
          className={cn(
            "h-full rounded-[24px] p-[2px]",
            "shadow-[0_0_20px_rgba(23,165,251,0.16)]",
            "transition-shadow duration-700 ease-out",
            "group-hover/hub:shadow-[0_0_40px_rgba(23,165,251,0.3),0_0_18px_rgba(232,5,132,0.12)]",
            !reduceMotion && "unique-hub-glow",
          )}
          style={{ backgroundImage: WHY_US_UNIQUE_HUB_BORDER }}
        >
          {!reduceMotion && (
            <style>{`
              @keyframes unique-hub-breathe {
                0%, 100% { box-shadow: 0 0 16px rgba(23,165,251,0.14); }
                50% { box-shadow: 0 0 28px rgba(23,165,251,0.26), 0 0 12px rgba(232,5,132,0.08); }
              }
              .unique-hub-glow {
                animation: unique-hub-breathe 4.5s ease-in-out infinite;
              }
              @media (prefers-reduced-motion: reduce) {
                .unique-hub-glow { animation: none; }
              }
            `}</style>
          )}
          <div className="flex h-full flex-col items-center justify-center rounded-[22px] bg-white px-4 py-3">
            <p className="max-w-[200px] text-center text-[17px] font-normal leading-[1.35] text-black">
              {whyUsUniqueContent.hubLabel}
            </p>
            <div className="mt-2.5 flex h-[62px] w-full max-w-[248px] items-center justify-center rounded-[17px] bg-[#eff8ff] px-5">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={whyUsUniqueAssets.hubLogo}
                alt="CloudKeeper"
                width={170}
                height={36}
                className="h-9 w-[170px] object-contain"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Blinker({
  x,
  y,
  active,
  reduceMotion,
  appearDelay,
}: Pt & { active?: boolean; reduceMotion?: boolean; appearDelay: number }) {
  return (
    /* Entrance once; active only tweaks opacity (no delay re-fire) */
    <motion.g
      initial={reduceMotion ? false : { opacity: 0, scale: 0.35 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={
        reduceMotion
          ? { duration: 0 }
          : {
              duration: 0.45,
              ease: easeSmooth,
              delay: appearDelay,
            }
      }
      style={{ transformOrigin: `${x}px ${y}px` }}
    >
      <g
        style={{
          opacity: active ? 1 : 0.72,
          transition: reduceMotion
            ? undefined
            : "opacity 0.45s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <circle
          cx={x}
          cy={y}
          r={7}
          fill="#E80584"
          className={!reduceMotion ? "unique-blinker-halo" : undefined}
          style={{
            transformOrigin: `${x}px ${y}px`,
            opacity: reduceMotion ? 0.2 : undefined,
          }}
        />
        <circle
          cx={x}
          cy={y}
          r={3.5}
          fill="#E80584"
          className={!reduceMotion ? "unique-blinker-core" : undefined}
          style={{ opacity: reduceMotion ? 0.75 : undefined }}
        />
      </g>
    </motion.g>
  );
}

function MeasuredConnectors({
  connectors,
  reduceMotion,
  activeId,
}: {
  connectors: Connector[];
  reduceMotion: boolean;
  activeId: string | null;
}) {
  // After entrance finishes, measure updates retarget without replaying draw delay
  const [entranceDone, setEntranceDone] = useState(reduceMotion);

  useLayoutEffect(() => {
    if (reduceMotion) {
      setEntranceDone(true);
      return;
    }
    const ms =
      (CHOREO.spoke + 4 * CHOREO.spokeStagger + CHOREO.spokeDraw) * 1000 + 80;
    const t = window.setTimeout(() => setEntranceDone(true), ms);
    return () => window.clearTimeout(t);
  }, [reduceMotion]);

  if (!connectors.length) return null;

  return (
    <svg
      className="pointer-events-none absolute inset-0 z-[5] h-full w-full overflow-visible"
      viewBox={`0 0 ${STAGE_W} ${STAGE_H}`}
      preserveAspectRatio="xMidYMid meet"
      fill="none"
      aria-hidden
    >
      <style>{`
        @keyframes unique-blinker-soft {
          0%, 100% { opacity: 0.14; }
          50% { opacity: 0.28; }
        }
        @keyframes unique-blinker-core {
          0%, 100% { opacity: 0.55; }
          50% { opacity: 0.88; }
        }
        .unique-blinker-halo {
          animation: unique-blinker-soft 2.8s ease-in-out infinite;
        }
        .unique-blinker-core {
          animation: unique-blinker-core 2.8s ease-in-out infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .unique-blinker-halo,
          .unique-blinker-core { animation: none; }
        }
      `}</style>
      {connectors.map(({ id, from, to }, i) => {
        const active = activeId === id;
        const dimmed = activeId != null && !active;
        const drawDelay = entranceDone
          ? 0
          : CHOREO.spoke + i * CHOREO.spokeStagger;
        const drawDuration = entranceDone ? 0.35 : CHOREO.spokeDraw;
        const tipDelay = entranceDone
          ? 0
          : drawDelay + CHOREO.spokeDraw * 0.85;

        return (
          <motion.g
            key={id}
            initial={false}
            animate={{ opacity: dimmed ? 0.22 : 1 }}
            transition={reduceMotion ? { duration: 0 } : spokeSpring}
          >
            {/* Grow from hub → card (keeps dotted dash intact) */}
            <motion.line
              x1={from.x}
              y1={from.y}
              strokeLinecap="round"
              strokeDasharray="5 3"
              initial={
                reduceMotion || entranceDone
                  ? false
                  : { x2: from.x, y2: from.y, opacity: 0 }
              }
              animate={{
                x2: to.x,
                y2: to.y,
                opacity: 1,
                stroke: active ? "#E80584" : "#FFBEE1",
                strokeWidth: active ? 2.15 : 1.5,
              }}
              transition={{
                x2: {
                  duration: reduceMotion ? 0 : drawDuration,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : drawDelay,
                },
                y2: {
                  duration: reduceMotion ? 0 : drawDuration,
                  ease: easeSmooth,
                  delay: reduceMotion ? 0 : drawDelay,
                },
                opacity: {
                  duration: reduceMotion ? 0 : entranceDone ? 0.2 : 0.35,
                  delay: reduceMotion ? 0 : drawDelay,
                },
                stroke: {
                  duration: reduceMotion ? 0 : 0.4,
                  ease: easeSmooth,
                },
                strokeWidth: {
                  duration: reduceMotion ? 0 : 0.4,
                  ease: easeSmooth,
                },
              }}
            />
            <Blinker
              {...from}
              active={active}
              reduceMotion={reduceMotion}
              appearDelay={reduceMotion || entranceDone ? 0 : drawDelay}
            />
            {/* Tip: entrance once, then hover only changes r/opacity */}
            <motion.g
              initial={
                reduceMotion || entranceDone
                  ? false
                  : { scale: 0, opacity: 0 }
              }
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: reduceMotion ? 0 : entranceDone ? 0.2 : 0.4,
                ease: easeSmooth,
                delay: reduceMotion ? 0 : tipDelay,
              }}
              style={{ transformOrigin: `${to.x}px ${to.y}px` }}
            >
              <motion.circle
                cx={to.x}
                cy={to.y}
                fill="#E80584"
                initial={false}
                animate={{
                  r: active ? 3.4 : 2.5,
                  fillOpacity: active ? 0.85 : 0.42,
                }}
                transition={reduceMotion ? { duration: 0 } : spokeSpring}
              />
            </motion.g>
          </motion.g>
        );
      })}
    </svg>
  );
}

function relBox(stage: DOMRect, el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return {
    left: r.left - stage.left,
    top: r.top - stage.top,
    right: r.right - stage.left,
    bottom: r.bottom - stage.top,
    width: r.width,
    height: r.height,
    cx: (r.left + r.right) / 2 - stage.left,
    cy: (r.top + r.bottom) / 2 - stage.top,
  };
}

/** Figma spoke anchors — hub edges → card facing edges */
function buildConnectors(
  hub: ReturnType<typeof relBox>,
  cards: Record<string, ReturnType<typeof relBox>>,
): Connector[] {
  const lens = cards.lens;
  const auto = cards.auto;
  const az = cards["az-ppa"];
  const tuner = cards.tuner;
  const partner = cards.partner;
  if (!lens || !auto || !az || !tuner || !partner) return [];

  const clampY = (card: ReturnType<typeof relBox>, y: number) =>
    Math.min(Math.max(y, card.top + 56), card.bottom - 56);

  return [
    {
      id: "lens",
      from: { x: hub.left, y: hub.cy },
      to: { x: lens.right, y: clampY(lens, hub.cy) },
    },
    {
      id: "auto",
      from: { x: hub.right, y: hub.cy },
      to: { x: auto.left, y: clampY(auto, hub.cy) },
    },
    {
      id: "az-ppa",
      from: { x: hub.left + hub.width * 0.2, y: hub.bottom },
      to: { x: az.right - 20, y: az.top },
    },
    {
      id: "tuner",
      from: { x: hub.cx, y: hub.bottom },
      to: { x: tuner.cx, y: tuner.top },
    },
    {
      id: "partner",
      from: { x: hub.right - hub.width * 0.2, y: hub.bottom },
      to: { x: partner.left + 20, y: partner.top },
    },
  ];
}

/** Hardcoded Figma fallbacks if measure races before layout settles */
const FALLBACK_CONNECTORS: Connector[] = [
  { id: "lens", from: { x: 472, y: 151 }, to: { x: 350, y: 151 } },
  { id: "auto", from: { x: 757, y: 151 }, to: { x: 880, y: 151 } },
  { id: "az-ppa", from: { x: 529, y: 230 }, to: { x: 330, y: 343 } },
  { id: "tuner", from: { x: 614.5, y: 230 }, to: { x: 615, y: 343 } },
  { id: "partner", from: { x: 700, y: 230 }, to: { x: 900, y: 343 } },
];

/** Figma 22:14866 — hub + 5 cards + measured pink dotted spokes */
export function WhyUsUniqueSection() {
  const reduceMotion = useReducedMotion() === true;
  const {
    heading,
    bodyBefore,
    bodyBold1,
    bodyMid,
    bodyBold2,
    cta,
  } = whyUsUniqueContent;

  const stageRef = useRef<HTMLDivElement>(null);
  const hubAnchorRef = useRef<HTMLDivElement | null>(null);
  const cardAnchorRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const [connectors, setConnectors] = useState<Connector[]>(FALLBACK_CONNECTORS);
  const [activeId, setActiveId] = useState<string | null>(null);

  const measure = useCallback(() => {
    const stageEl = stageRef.current;
    const hubEl = hubAnchorRef.current;
    if (!stageEl || !hubEl) return;
    const stage = stageEl.getBoundingClientRect();
    if (stage.width < 10) return;

    const sx = STAGE_W / stage.width;
    const sy = STAGE_H / stage.height;
    const scaleBox = (b: ReturnType<typeof relBox>) => ({
      left: b.left * sx,
      top: b.top * sy,
      right: b.right * sx,
      bottom: b.bottom * sy,
      width: b.width * sx,
      height: b.height * sy,
      cx: b.cx * sx,
      cy: b.cy * sy,
    });

    const cards: Record<string, ReturnType<typeof relBox>> = {};
    for (const card of whyUsUniqueCards) {
      const el = cardAnchorRefs.current[card.id];
      if (el) cards[card.id] = scaleBox(relBox(stage, el));
    }

    const next = buildConnectors(scaleBox(relBox(stage, hubEl)), cards);
    if (next.length === 5) setConnectors(next);
  }, []);

  useLayoutEffect(() => {
    measure();
    const stageEl = stageRef.current;
    if (!stageEl) return;
    const ro = new ResizeObserver(() => measure());
    ro.observe(stageEl);
    window.addEventListener("resize", measure);
    const t1 = window.setTimeout(measure, 80);
    const t2 = window.setTimeout(measure, 400);
    const t3 = window.setTimeout(measure, 900);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      window.clearTimeout(t3);
    };
  }, [measure]);

  return (
    <section
      className="relative overflow-x-clip bg-white py-[70px] font-sans"
      aria-labelledby="why-us-unique-heading"
    >
      <motion.div
        className="pointer-events-none absolute left-0 top-0 hidden opacity-80 sm:block"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, x: -12 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeSmooth }}
      >
        <Image
          src={whyUsUniqueAssets.abstractsLeft}
          alt=""
          width={193}
          height={195}
          className="h-auto w-[140px] lg:w-[193px]"
        />
      </motion.div>
      <motion.div
        className="pointer-events-none absolute bottom-0 right-0 hidden opacity-80 sm:block"
        aria-hidden
        initial={reduceMotion ? false : { opacity: 0, x: 12 }}
        whileInView={{ opacity: 0.8, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: easeSmooth, delay: 0.1 }}
      >
        <Image
          src={whyUsUniqueAssets.abstractsRight}
          alt=""
          width={252}
          height={125}
          className="h-auto w-[160px] lg:w-[252px]"
        />
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1230px] flex-col items-center gap-[50px] px-5 sm:px-8 lg:px-0">
        <motion.header
          className="flex w-full flex-col items-center gap-2.5 text-center text-black"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: reduceMotion ? 0 : 0.75, ease: easeSmooth }}
        >
          <h2
            id="why-us-unique-heading"
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5]"
          >
            {heading}
          </h2>
          <motion.p
            className="max-w-[1102px] text-base leading-[1.5] tracking-[-0.054px] sm:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: reduceMotion ? 0 : 0.7,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : 0.08,
            }}
          >
            {bodyBefore}
            <strong className="font-semibold">{bodyBold1}</strong>
            {bodyMid}
            <strong className="font-semibold">{bodyBold2}</strong>
          </motion.p>
        </motion.header>

        <div className="flex w-full flex-col items-center gap-10 lg:hidden">
          <UniqueHub reduceMotion={reduceMotion} />
          {whyUsUniqueCards.map((card, i) => (
            <UniquePointerCard
              key={card.id}
              card={card}
              reduceMotion={reduceMotion}
              index={i}
            />
          ))}
          <CtaButton href={cta.href}>{cta.label}</CtaButton>
        </div>

        <div className="hidden w-full max-w-[1230px] flex-col items-center lg:flex">
          <div
            ref={stageRef}
            className="relative h-[647px] w-full overflow-visible"
          >
            <MeasuredConnectors
              connectors={connectors}
              reduceMotion={reduceMotion}
              activeId={activeId}
            />

            {/* Transform-free anchors keep spoke math stable during Framer hover */}
            <div
              ref={hubAnchorRef}
              className="absolute left-[472px] top-[72px] z-[1] h-[158px] w-[285px]"
            >
              <UniqueHub reduceMotion={reduceMotion} />
            </div>

            {whyUsUniqueCards.map((card, i) => (
              <div
                key={card.id}
                ref={(el) => {
                  cardAnchorRefs.current[card.id] = el;
                }}
                className="absolute z-20"
                style={{
                  left: card.desktop.left,
                  top: card.desktop.top,
                  width: CARD_W,
                }}
              >
                <UniquePointerCard
                  card={card}
                  className="max-w-none"
                  reduceMotion={reduceMotion}
                  index={i}
                  onHoverChange={(hovered) =>
                    setActiveId(hovered ? card.id : null)
                  }
                />
              </div>
            ))}
          </div>

          <motion.div
            className="mt-10"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: reduceMotion ? 0 : 0.65,
              ease: easeSmooth,
              delay: reduceMotion ? 0 : CHOREO.cta,
            }}
          >
            <CtaButton href={cta.href}>{cta.label}</CtaButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
