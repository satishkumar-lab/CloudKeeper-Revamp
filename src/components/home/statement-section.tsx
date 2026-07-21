"use client";

import { useRef, Fragment } from "react";

import { homeAssets } from "@/config/home-assets";
import { useScrollWordOpacity } from "@/hooks/use-scroll-word-opacity";
import { cn } from "@/lib/utils";

const ANIMATED_WORDS = [
  "Unlike",
  "traditional",
  "providers",
  "with",
  "a",
  "fragmented",
  "approach,",
  "we",
  "combine",
  "AI-led",
  "platforms,",
  "automation,",
  "and",
  "human",
  "expertise",
  "to",
  "deliver",
  "continuous,",
  "measurable",
  "cost",
  "savings",
  "-",
] as const;

/** 3 lines — break after line 1 (index 6) and line 2 (index 14) */
const LINE_BREAKS = new Set([6, 14]);

function AnimatedWord({ word, opacity }: { word: string; opacity: number }) {
  const lift = (1 - opacity) * 4;

  return (
    <span
      className="inline-block text-black will-change-[opacity,transform]"
      style={{
        opacity,
        transform: `translateY(${lift}px)`,
      }}
    >
      {word}
    </span>
  );
}

/** Figma 8294:8753 — 3rd section / Card statement home (1440×240) */
export function StatementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const opacities = useScrollWordOpacity(sectionRef, ANIMATED_WORDS.length);

  return (
    <section
      ref={sectionRef}
      id="statement"
      className="relative w-full max-w-none overflow-hidden font-sans"
      aria-label="CloudKeeper differentiator"
    >
      <div className="relative min-h-[240px] w-full max-w-none">
        <img
          src={homeAssets.statementCardBg}
          alt=""
          width={1440}
          height={240}
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          aria-hidden
        />

        <div className="relative flex min-h-[240px] w-full max-w-none items-center py-10 pl-4 sm:pl-6 lg:py-[53px]">
          <p className="m-0 w-full max-w-none pr-[50px] text-right text-[clamp(1.125rem,2.5vw,2rem)] leading-[1.4] tracking-[-0.2px] text-black lg:text-[32px]">
            {ANIMATED_WORDS.map((word, index) => (
              <Fragment key={`${word}-${index}`}>
                <AnimatedWord word={word} opacity={opacities[index] ?? 0.5} />
                {index < ANIMATED_WORDS.length - 1 ? " " : null}
                {LINE_BREAKS.has(index) ? <br /> : null}
              </Fragment>
            ))}{" "}
            <span className={cn("statement-gradient-text inline-block")}>
              seamlessly and at scale.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
