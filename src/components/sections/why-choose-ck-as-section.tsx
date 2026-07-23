"use client";

import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState, type MouseEvent } from "react";

import { CtaButton } from "@/components/home/primary-button";
import { CountUp } from "@/components/motion/count-up";
import {
  DecoCubeExpertise,
  DecoCylinderG2,
  DecoPrismCertified,
} from "@/components/sections/why-choose-ck-as-deco-svgs";
import {
  WHY_CHOOSE_CK_AS_SECTION_BG,
  defaultWhyChooseCkAsContent,
  type WhyChooseCkAsCard,
  type WhyChooseCkAsContent,
  type WhyChooseCkAsDeco,
} from "@/config/why-choose-ck-as-section";
import { cn } from "@/lib/utils";

const easeSmooth = [0.16, 1, 0.3, 1] as const;

const sectionVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.06,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: easeSmooth },
  },
};

const cardReveal = {
  hidden: { opacity: 0, y: 36, scale: 0.97 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.8, ease: easeSmooth },
  },
};

export type WhyChooseCkAsSectionProps = Partial<WhyChooseCkAsContent> & {
  className?: string;
  id?: string;
  background?: string;
  headingId?: string;
};

function CardValue({ card }: { card: WhyChooseCkAsCard }) {
  if ("valueDisplay" in card) {
    return (
      <p className="flex items-center gap-1 text-[36px] font-semibold leading-[52px] tracking-[-2px] text-black">
        <span>{card.valueDisplay}</span>
        {"suffix" in card && card.suffix ? <span>{card.suffix}</span> : null}
      </p>
    );
  }

  return (
    <p
      className="flex items-center gap-1 text-[36px] font-semibold leading-[52px] tracking-[-2px] text-black"
      aria-live="polite"
    >
      <CountUp target={card.value} suffix={card.suffix} />
    </p>
  );
}

function CardLabel({ card }: { card: WhyChooseCkAsCard }) {
  if ("labelLine1" in card) {
    return (
      <p className="pl-0.5 text-xl leading-[1.3] tracking-[-0.3125px] text-[#253746]">
        {card.labelLine1}
        <br />
        {card.labelLine2}
      </p>
    );
  }

  return (
    <p className="max-w-[183px] pl-0.5 text-xl leading-[1.3] tracking-[-0.3125px] text-[#253746]">
      {card.label}
    </p>
  );
}

function CardDeco({
  deco,
  className,
  reduceMotion,
  hovered,
}: {
  deco: WhyChooseCkAsDeco;
  className?: string;
  reduceMotion: boolean;
  hovered: boolean;
}) {
  const decoClass = cn("size-full max-w-none", className);

  if (deco === "cube") {
    return (
      <DecoCubeExpertise
        className={decoClass}
        reduceMotion={reduceMotion}
        hovered={hovered}
      />
    );
  }
  if (deco === "prism") {
    return (
      <DecoPrismCertified
        className={decoClass}
        reduceMotion={reduceMotion}
        hovered={hovered}
      />
    );
  }
  return (
    <DecoCylinderG2
      className={decoClass}
      reduceMotion={reduceMotion}
      hovered={hovered}
    />
  );
}

function WhyChooseStatCard({
  card,
  reduceMotion,
}: {
  card: WhyChooseCkAsCard;
  reduceMotion: boolean;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 160, damping: 22, mass: 0.4 });
  const springY = useSpring(rawY, { stiffness: 160, damping: 22, mass: 0.4 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [4.5, -4.5]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-5.5, 5.5]);
  const decoX = useTransform(springX, [-0.5, 0.5], [-6, 6]);
  const decoY = useTransform(springY, [-0.5, 0.5], [-5, 5]);
  const sheenX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const sheenY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const sheen = useMotionTemplate`radial-gradient(420px circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.45), transparent 55%)`;

  const onMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rawX.set(px);
    rawY.set(py);
  };

  const onLeave = () => {
    setHovered(false);
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.li
      className="relative h-[180px] list-none [perspective:900px] sm:h-[210px] xl:h-[242px]"
      variants={reduceMotion ? undefined : cardReveal}
    >
      <motion.div
        ref={cardRef}
        className="relative size-full overflow-hidden rounded-[10px]"
        style={
          reduceMotion
            ? { backgroundColor: card.bg }
            : {
                backgroundColor: card.bg,
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
              }
        }
        onMouseEnter={() => {
          if (!reduceMotion) setHovered(true);
        }}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {!reduceMotion ? (
          <motion.div
            className="pointer-events-none absolute inset-0 z-[1]"
            style={{ background: sheen }}
            animate={{ opacity: hovered ? 0.65 : 0 }}
            transition={{ duration: 0.35 }}
            aria-hidden
          />
        ) : null}

        <div className="relative z-10 flex h-full max-w-[240px] -translate-y-[15px] flex-col justify-center gap-[5px] pl-[30px] pr-[50px]">
          <CardValue card={card} />
          <CardLabel card={card} />
        </div>

        <motion.div
          className={cn(
            "pointer-events-none absolute z-[2] overflow-visible",
            card.illustrationClass.replace(/opacity-\S+/g, "").trim(),
          )}
          style={reduceMotion ? undefined : { x: decoX, y: decoY }}
          aria-hidden
        >
          <CardDeco
            deco={card.deco}
            reduceMotion={reduceMotion}
            hovered={hovered}
          />
        </motion.div>
      </motion.div>
    </motion.li>
  );
}

/**
 * Shared “Why choose CloudKeeper as…” stats + badges + CTA section.
 * Pass heading / cards / badges / cta to customize per page.
 */
export function WhyChooseCkAsSection({
  headingLine1 = defaultWhyChooseCkAsContent.headingLine1,
  headingLine2 = defaultWhyChooseCkAsContent.headingLine2,
  badges = defaultWhyChooseCkAsContent.badges,
  cards = defaultWhyChooseCkAsContent.cards,
  cta = defaultWhyChooseCkAsContent.cta,
  className,
  id = "why-choose",
  background = WHY_CHOOSE_CK_AS_SECTION_BG,
  headingId = "why-choose-heading",
}: WhyChooseCkAsSectionProps) {
  const reduceMotion = useReducedMotion() === true;

  return (
    <section
      id={id}
      className={cn("font-sans", className)}
      style={{ background }}
      aria-labelledby={headingId}
    >
      <motion.div
        className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[50px] px-5 py-16 sm:px-8 lg:px-20 lg:py-20"
        variants={reduceMotion ? undefined : sectionVariants}
        initial={reduceMotion ? false : "hidden"}
        whileInView={reduceMotion ? undefined : "show"}
        viewport={{ once: true, amount: 0.25 }}
      >
        <motion.div
          className="flex w-full flex-col items-start justify-between gap-8 lg:flex-row lg:items-end"
          variants={reduceMotion ? undefined : fadeUp}
        >
          <h2
            id={headingId}
            className="text-[clamp(1.75rem,3vw,2.5rem)] font-normal leading-[1.5] tracking-[-0.2px] text-black"
          >
            {headingLine1}
            <br />
            {headingLine2}
          </h2>

          <div className="flex flex-wrap items-center justify-start gap-8 sm:gap-[50px] lg:gap-[74px] lg:justify-center">
            {badges.map((badge, i) => (
              <motion.img
                key={badge.id}
                src={badge.src}
                alt={badge.alt}
                width={badge.width}
                height={badge.height}
                className={cn(
                  "object-contain object-left lg:object-center",
                  badge.id === "aws" ? "size-[82px]" : "h-[49px] w-[200px]",
                )}
                decoding="async"
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  ease: easeSmooth,
                  delay: 0.15 + i * 0.1,
                }}
              />
            ))}
          </div>
        </motion.div>

        <motion.ul
          className="grid w-full grid-cols-1 gap-5 md:grid-cols-3"
          variants={
            reduceMotion
              ? undefined
              : {
                  hidden: {},
                  show: {
                    transition: { staggerChildren: 0.14, delayChildren: 0.08 },
                  },
                }
          }
        >
          {cards.map((card) => (
            <WhyChooseStatCard
              key={card.id}
              card={card}
              reduceMotion={reduceMotion}
            />
          ))}
        </motion.ul>

        <motion.div variants={reduceMotion ? undefined : fadeUp}>
          <CtaButton href={cta.href} className="h-[52px]">
            {cta.label}
          </CtaButton>
        </motion.div>
      </motion.div>
    </section>
  );
}
