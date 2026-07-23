"use client";

import { motion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

const soft = {
  type: "tween" as const,
  duration: 0.55,
  ease: [0.22, 1, 0.36, 1] as const,
};

type DecoProps = {
  className?: string;
  reduceMotion: boolean;
  hovered: boolean;
};

function decoAnimate(hovered: boolean, reduceMotion: boolean) {
  if (reduceMotion) return "rest" as const;
  return hovered ? ("hover" as const) : ("rest" as const);
}

/** Cube — 3 faces drift apart slightly (depth, not pop). */
export function DecoCubeExpertise({
  className,
  reduceMotion,
  hovered,
}: DecoProps) {
  const uid = "wc-cube";
  const animate = decoAnimate(hovered, reduceMotion);

  const wrap: Variants = {
    rest: { opacity: 0.22 },
    hover: { opacity: 0.42 },
  };
  const faceL: Variants = {
    rest: { x: 0, y: 0 },
    hover: { x: -4, y: 2 },
  };
  const faceR: Variants = {
    rest: { x: 0, y: 0 },
    hover: { x: 4, y: 2 },
  };
  const faceT: Variants = {
    rest: { x: 0, y: 0 },
    hover: { x: 0, y: -3 },
  };

  return (
    <motion.svg
      className={cn(className, "overflow-visible")}
      width="134"
      height="141"
      viewBox="0 0 134 140.773"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      style={{ overflow: "visible" }}
      aria-hidden
      initial="rest"
      animate={animate}
      variants={wrap}
      transition={soft}
    >
      <motion.path
        d="M0.16196 24.0254L0 115.983L66.9328 140.773L67.0948 48.8109L0.16196 24.0254Z"
        fill={`url(#${uid}-0)`}
        initial="rest"
        animate={animate}
        variants={faceL}
        transition={soft}
      />
      <motion.path
        d="M67.0916 48.778L66.9297 140.74L133.764 116.331L133.926 24.3691L67.0916 48.778Z"
        fill={`url(#${uid}-1)`}
        initial="rest"
        animate={animate}
        variants={faceR}
        transition={{ ...soft, delay: hovered ? 0.04 : 0 }}
      />
      <motion.path
        d="M67.1323 0.0214844L0.179688 24.4757L67.0454 49.2385L133.998 24.7843L67.1323 0.0214844Z"
        fill={`url(#${uid}-2)`}
        initial="rest"
        animate={animate}
        variants={faceT}
        transition={{ ...soft, delay: hovered ? 0.08 : 0 }}
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="12.8117"
          y1="70.1412"
          x2="213.144"
          y2="159.796"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.72" stopColor="#056262" />
          <stop offset="1" stopColor="#0A151D" />
        </linearGradient>
        <linearGradient
          id={`${uid}-1`}
          x1="225.085"
          y1="99.6284"
          x2="4.91062"
          y2="76.7709"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.46" stopColor="#00757D" />
          <stop offset="1" stopColor="#0A403A" />
        </linearGradient>
        <linearGradient
          id={`${uid}-2`}
          x1="44.0154"
          y1="31.1242"
          x2="241.665"
          y2="-11.0403"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.72" stopColor="#056262" />
          <stop offset="1" stopColor="#0A151D" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Prism — faces slide on opposing axes. */
export function DecoPrismCertified({
  className,
  reduceMotion,
  hovered,
}: DecoProps) {
  const uid = "wc-prism";
  const animate = decoAnimate(hovered, reduceMotion);

  const wrap: Variants = {
    rest: { opacity: 0.22 },
    hover: { opacity: 0.42 },
  };
  const faceA: Variants = {
    rest: { x: 0, y: 0 },
    hover: { x: 3, y: -2 },
  };
  const faceB: Variants = {
    rest: { x: 0, y: 0 },
    hover: { x: -4, y: 2 },
  };

  return (
    <motion.svg
      className={cn(className, "overflow-visible")}
      width="134"
      height="131"
      viewBox="0 0 134 131"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      style={{ overflow: "visible" }}
      aria-hidden
      initial="rest"
      animate={animate}
      variants={wrap}
      transition={soft}
    >
      <motion.path
        d="M90.6181 29.3652L134 116.952L46.3867 131L90.6181 29.3652Z"
        fill={`url(#${uid}-0)`}
        initial="rest"
        animate={animate}
        variants={faceA}
        transition={soft}
      />
      <motion.path
        d="M46.3868 131L0 101.638L44.2282 0L90.6182 29.3656L46.3868 131Z"
        fill={`url(#${uid}-1)`}
        initial="rest"
        animate={animate}
        variants={faceB}
        transition={{ ...soft, delay: hovered ? 0.05 : 0 }}
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="174.549"
          y1="169.261"
          x2="-14.1752"
          y2="51.0315"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.63" stopColor="#00757D" />
          <stop offset="1" stopColor="#0A403A" />
        </linearGradient>
        <linearGradient
          id={`${uid}-1`}
          x1="19.9078"
          y1="52.1192"
          x2="135.622"
          y2="97.5556"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.72" stopColor="#056262" />
          <stop offset="1" stopColor="#0A151D" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}

/** Cylinder — lid lifts, body settles (parallax). */
export function DecoCylinderG2({
  className,
  reduceMotion,
  hovered,
}: DecoProps) {
  const uid = "wc-cyl";
  const animate = decoAnimate(hovered, reduceMotion);

  const wrap: Variants = {
    rest: { opacity: 0.22 },
    hover: { opacity: 0.42 },
  };
  const body: Variants = {
    rest: { y: 0 },
    hover: { y: 3 },
  };
  const lid: Variants = {
    rest: { y: 0 },
    hover: { y: -3 },
  };

  return (
    <motion.svg
      className={cn(className, "overflow-visible")}
      width="104"
      height="143"
      viewBox="0 0 103.804 142.983"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      overflow="visible"
      style={{ overflow: "visible" }}
      aria-hidden
      initial="rest"
      animate={animate}
      variants={wrap}
      transition={soft}
    >
      <motion.path
        d="M103.804 17.1906L0.222716 16.9805L1.42745e-05 125.827C-0.0209954 135.244 23.1526 142.925 51.7551 142.984C80.3576 143.042 103.561 135.454 103.582 126.037C103.582 126.025 103.582 126.016 103.582 126.004L103.804 17.1906Z"
        fill={`url(#${uid}-0)`}
        initial="rest"
        animate={animate}
        variants={body}
        transition={soft}
      />
      <motion.path
        d="M52.045 0.000339718C23.4425 -0.0584872 0.239478 7.53019 0.222671 16.9467C0.201661 26.3632 23.3753 34.0443 51.982 34.1032C80.5845 34.162 103.788 26.5733 103.809 17.1568C103.821 7.74029 80.6517 0.0591667 52.045 0.000339718Z"
        fill={`url(#${uid}-1)`}
        initial="rest"
        animate={animate}
        variants={lid}
        transition={{ ...soft, delay: hovered ? 0.06 : 0 }}
      />
      <defs>
        <linearGradient
          id={`${uid}-0`}
          x1="-1.72783"
          y1="79.9266"
          x2="110.501"
          y2="80.142"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.31" stopColor="#63C9D5" />
          <stop offset="0.72" stopColor="#056262" />
          <stop offset="1" stopColor="#0A151D" />
        </linearGradient>
        <linearGradient
          id={`${uid}-1`}
          x1="37.1699"
          y1="35.8934"
          x2="103.647"
          y2="-48.505"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#44E8C5" />
          <stop offset="0.72" stopColor="#056262" />
          <stop offset="1" stopColor="#0A151D" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
}
