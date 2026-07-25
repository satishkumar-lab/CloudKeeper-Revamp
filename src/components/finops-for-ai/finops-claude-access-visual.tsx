/**
 * Figma 9182:82823 — Claude Model Access visual (rebuilt to fill card frame).
 * Composition matches design; scaled to edge-to-edge vs flat PNG with inset padding.
 */

import { finopsForAiAssets } from "@/config/finops-for-ai";

const assets = finopsForAiAssets.solutions.claude;

const BAR_HEIGHTS = [45, 72, 50, 88, 62, 100, 78] as const;

function ModelTag({
  label,
  rotate = 0,
}: {
  label: string;
  rotate?: number;
}) {
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full border border-[rgba(217,119,6,0.25)] bg-white px-2.5 py-1 shadow-sm"
      style={rotate ? { transform: `rotate(${rotate}deg)` } : undefined}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={assets.anthropic}
        alt=""
        width={16}
        height={16}
        className="size-4 shrink-0 rounded-full object-cover"
      />
      <span className="whitespace-nowrap text-[11px] font-medium leading-none text-[#d97706] sm:text-xs">
        {label}
      </span>
    </span>
  );
}

export function FinopsClaudeAccessVisual() {
  return (
    <div className="relative size-full overflow-hidden rounded-[20px] bg-[#fbfbfb]">
      {/* White canvas — fills most of the frame (Figma inset was too padded in PNG) */}
      <div className="absolute inset-[5%_3%] overflow-hidden rounded-[12px] bg-white shadow-[0px_4px_48px_rgba(0,0,0,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.symbol}
          alt=""
          className="absolute left-1/2 top-[14%] h-[42%] w-auto max-w-[40%] -translate-x-1/2 object-contain"
        />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.gears}
          alt=""
          className="absolute left-[30%] top-[48%] size-8 object-contain opacity-80 sm:size-9"
        />

        <div className="absolute inset-x-[6%] bottom-[8%] flex flex-wrap items-center justify-center gap-x-2 gap-y-2.5">
          <ModelTag label="Claude Opus 4.6" />
          <ModelTag label="Claude Sonnet 4.6" rotate={-5} />
          <ModelTag label="Claude Opus 4.5" />
          <ModelTag label="Claude 4.5 Haiku" rotate={4} />
        </div>
      </div>

      {/* Active sessions — floats over left edge */}
      <div className="absolute left-[1.5%] top-[36%] z-10 flex items-center gap-2.5 rounded-[10px] border border-[#e2e8f0] bg-white px-3 py-2 shadow-[0px_10px_20px_rgba(0,0,0,0.08)]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={assets.sessions}
          alt=""
          width={28}
          height={28}
          className="size-7 shrink-0 object-contain"
        />
        <div className="flex flex-col gap-0.5">
          <p className="text-base font-medium leading-none text-black">146</p>
          <p className="text-[10px] leading-none text-[#777]">Active sessions</p>
        </div>
      </div>

      {/* Cost Optimization — floats over right edge */}
      <div className="absolute right-[1.5%] top-[24%] z-10 w-[132px] rotate-3 rounded-[8px] border border-[#e2e8f0] bg-white px-3 py-2.5 shadow-[0px_12px_22px_rgba(0,0,0,0.1)]">
        <div className="mb-1.5 flex items-center justify-between gap-1">
          <p className="text-[7px] font-semibold leading-none text-[#45556c]">
            Cost Optimization
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={assets.costArrow}
            alt=""
            width={12}
            height={7}
            className="h-1.5 w-3 object-contain"
          />
        </div>
        <div className="mb-1.5 flex h-10 items-end justify-center gap-1.5">
          {BAR_HEIGHTS.map((h, i) => (
            <span
              key={i}
              className="w-2.5 rounded-t-[3px] bg-gradient-to-t from-[#2b7fff] to-[#51a2ff]"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="flex items-center justify-between text-[6px] leading-none text-[#62748e]">
          <span>-32% costs</span>
          <span>This month</span>
        </div>
      </div>
    </div>
  );
}
