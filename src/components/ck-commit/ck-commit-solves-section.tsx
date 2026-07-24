"use client";

import { useState } from "react";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";

import { ckCommitSolves } from "@/config/ck-commit";
import { cn } from "@/lib/utils";

const easeOut = [0.16, 1, 0.3, 1] as const;

/** Figma Flip_cardd — fixed height so hover never reflows the grid */
const CARD_H = 220;
const PAD_TOP = 40;
const PAD_BOTTOM = 30;
const ICON_BOX = 46;
const ICON_SIZE = 28;
const ICON_TOP_IDLE = CARD_H - PAD_BOTTOM - ICON_BOX;
const ICON_TOP_ACTIVE = PAD_TOP;
const ICON_TRAVEL = ICON_TOP_ACTIVE - ICON_TOP_IDLE;

const iconSpring = {
  type: "spring" as const,
  stiffness: 280,
  damping: 28,
  mass: 0.85,
};

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.04,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

const gridReveal: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.06,
    },
  },
};

const cardReveal: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, ease: easeOut },
  },
};

type SolvesCard = (typeof ckCommitSolves.cards)[number];

function SolvesIcon({
  src,
  active,
  reduceMotion,
}: {
  src: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  return (
    <motion.span
      className="block"
      style={{
        width: ICON_SIZE,
        height: ICON_SIZE,
        backgroundColor: active ? "#179eff" : "#000000",
        WebkitMaskImage: `url(${src})`,
        maskImage: `url(${src})`,
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
      }}
      initial={false}
      animate={{
        backgroundColor: active ? "#179eff" : "#000000",
        scale: active ? 1 : 0.96,
      }}
      transition={
        reduceMotion
          ? { duration: 0.15 }
          : {
              backgroundColor: { duration: 0.35, ease: easeOut },
              scale: { ...iconSpring, stiffness: 320 },
            }
      }
      aria-hidden
    />
  );
}

function SolvesCardItem({
  card,
  active,
  onActivate,
  reduceMotion,
}: {
  card: SolvesCard;
  active: boolean;
  onActivate: () => void;
  reduceMotion: boolean;
}) {
  return (
    <motion.li variants={reduceMotion ? undefined : cardReveal}>
      <motion.div
        className="relative overflow-hidden rounded-lg border px-[30px] outline-none will-change-transform"
        style={{
          height: CARD_H,
          paddingTop: PAD_TOP,
          paddingBottom: PAD_BOTTOM,
        }}
        onMouseEnter={onActivate}
        onFocus={onActivate}
        tabIndex={0}
        initial={false}
        animate={
          reduceMotion
            ? {
                borderColor: active ? "#179eff" : "#f0f0f0",
                backgroundColor: active ? "#ffffff" : "#fbfbfb",
              }
            : {
                borderColor: active ? "#179eff" : "#f0f0f0",
                backgroundColor: active ? "#ffffff" : "#fbfbfb",
                y: active ? -3 : 0,
                boxShadow: active
                  ? "0 10px 28px rgba(23, 158, 255, 0.10)"
                  : "0 0 0 rgba(23, 158, 255, 0)",
              }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : {
                y: iconSpring,
                borderColor: { duration: 0.35, ease: easeOut },
                backgroundColor: { duration: 0.35, ease: easeOut },
                boxShadow: { duration: 0.4, ease: easeOut },
              }
        }
      >
        <div className="relative z-10 flex items-start pr-[54px] pb-2.5">
          <h3 className="min-w-0 flex-1 text-xl font-medium leading-[1.6] tracking-[-0.3px] text-black">
            {card.titleLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <motion.span
            className="pointer-events-none absolute inset-x-0 bottom-0 border-b border-dashed border-[#179eff]"
            style={{ transformOrigin: "left center" }}
            initial={false}
            animate={{
              scaleX: active ? 1 : 0,
              opacity: active ? 1 : 0,
            }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 0.4, ease: easeOut, delay: active ? 0.06 : 0 }
            }
            aria-hidden
          />
        </div>

        <motion.p
          className={cn(
            "relative z-10 mt-[30px] max-w-full text-base leading-[1.5] text-black",
            !active && "pointer-events-none",
          )}
          initial={false}
          animate={
            reduceMotion
              ? { opacity: active ? 1 : 0 }
              : {
                  opacity: active ? 1 : 0,
                  y: active ? 0 : 10,
                }
          }
          transition={
            reduceMotion
              ? { duration: 0.15 }
              : {
                  opacity: {
                    duration: 0.4,
                    ease: easeOut,
                    delay: active ? 0.16 : 0,
                  },
                  y: {
                    duration: 0.45,
                    ease: easeOut,
                    delay: active ? 0.12 : 0,
                  },
                }
          }
          aria-hidden={!active}
        >
          {card.description}
        </motion.p>

        <motion.div
          className="pointer-events-none absolute right-[30px] z-20 flex size-[46px] items-center justify-center will-change-transform"
          style={{ top: ICON_TOP_IDLE }}
          initial={false}
          animate={
            reduceMotion
              ? { y: active ? ICON_TRAVEL : 0 }
              : {
                  y: active ? ICON_TRAVEL : 0,
                  rotate: active ? 0 : -4,
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  y: iconSpring,
                  rotate: { duration: 0.45, ease: easeOut },
                }
          }
          aria-hidden
        >
          <SolvesIcon
            src={card.icon}
            active={active}
            reduceMotion={reduceMotion}
          />
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

/** Figma 8141:116413 — How CloudKeeper Commit Solves It */
export function CkCommitSolvesSection() {
  const reduceMotion = useReducedMotion() === true;
  const [activeId, setActiveId] = useState<string>(ckCommitSolves.cards[0].id);

  return (
    <section
      className="bg-white font-sans"
      aria-labelledby="ck-commit-solves-heading"
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] px-5 pb-[60px] pt-16 sm:px-8 lg:px-20 lg:pt-20"
        initial={reduceMotion ? "visible" : "hidden"}
        whileInView="visible"
        viewport={{ once: true, amount: 0.18, margin: "0px 0px -8% 0px" }}
        variants={reduceMotion ? undefined : sectionReveal}
      >
        <motion.div
          className="flex w-full max-w-[1280px] flex-col items-center gap-[5px] text-center"
          variants={reduceMotion ? undefined : sectionReveal}
        >
          <motion.h2
            id="ck-commit-solves-heading"
            className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-normal leading-[1.5] text-black"
            variants={reduceMotion ? undefined : fadeUp}
          >
            {ckCommitSolves.heading}
          </motion.h2>
          <motion.p
            className="max-w-[882px] text-lg leading-[1.5] text-black"
            variants={reduceMotion ? undefined : fadeUp}
          >
            {ckCommitSolves.body}
          </motion.p>
        </motion.div>

        <motion.ul
          className="grid w-full max-w-[1280px] grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-3"
          variants={reduceMotion ? undefined : gridReveal}
        >
          {ckCommitSolves.cards.map((card) => (
            <SolvesCardItem
              key={card.id}
              card={card}
              active={activeId === card.id}
              onActivate={() => setActiveId(card.id)}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}
