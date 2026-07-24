"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { Table } from "@/components/table";
import { ckCommitCompare, CK_COMMIT_SECTION_BG_SOFT } from "@/config/ck-commit";

const easeOut = [0.16, 1, 0.3, 1] as const;

const sectionReveal: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.04 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: easeOut },
  },
};

/** Figma 8141:116428 — Why choose CloudKeeper Commit */
export function CkCommitCompareSection() {
  const reduceMotion = useReducedMotion() === true;
  const { columns, rows } = ckCommitCompare;

  const tableRows = rows.map((row) => ({
    id: row.metric,
    metric: row.metric,
    metricIcon: row.icon,
    middle: row.traditional,
    highlight: row.commit,
  }));

  return (
    <section
      className="relative overflow-x-hidden bg-white font-sans"
      style={{ backgroundImage: CK_COMMIT_SECTION_BG_SOFT }}
      aria-labelledby="ck-commit-compare-heading"
    >
      <div className="relative z-10 mx-auto flex w-full min-w-0 max-w-[1240px] flex-col items-center gap-5 px-5 pb-[42px] pt-6 sm:gap-6 sm:px-8 lg:px-10 lg:pb-[50px] lg:pt-8">
        <motion.div
          className="flex w-full max-w-[1048px] flex-col items-center gap-1.5 text-center"
          initial={reduceMotion ? "visible" : "hidden"}
          whileInView="visible"
          viewport={{ once: true, amount: 0.55 }}
          variants={reduceMotion ? undefined : sectionReveal}
        >
          <motion.h2
            id="ck-commit-compare-heading"
            className="text-[clamp(1.625rem,3.2vw,2.25rem)] font-normal leading-[1.35] text-black"
            variants={reduceMotion ? undefined : fadeUp}
          >
            {ckCommitCompare.heading}
          </motion.h2>
          <motion.p
            className="w-full max-w-[1048px] text-center text-lg leading-[1.5] tracking-[-0.3px] text-black"
            variants={reduceMotion ? undefined : fadeUp}
          >
            {ckCommitCompare.body}
          </motion.p>
        </motion.div>

        <Table
          labels={{
            metric: columns.metric,
            middle: columns.traditional,
            highlight: columns.commit,
          }}
          rows={tableRows}
          animate={!reduceMotion}
        />
      </div>
    </section>
  );
}
