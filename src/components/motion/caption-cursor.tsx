"use client";

import { useEffect, useRef, useState } from "react";

import { cn } from "@/lib/utils";

function lerp(start: number, end: number, amount: number) {
  return start + (end - start) * amount;
}

function resolveCaption(target: EventTarget | null): string | null {
  if (!(target instanceof Element)) return null;

  const labeled = target.closest("[data-cursor-label]") as HTMLElement | null;
  if (labeled?.dataset.cursorLabel) {
    return labeled.dataset.cursorLabel;
  }

  const interactive = target.closest(
    "a, button, [role='button'], input[type='submit']",
  ) as HTMLElement | null;

  if (!interactive) return null;

  const kind = interactive.dataset.cursor;
  if (kind === "watch") return "watch here";
  if (kind === "read") return "read here";
  if (kind === "click") return "click here";

  if (
    interactive.matches('[aria-label*="Play"], [aria-label*="play"], [data-cursor="watch"]')
  ) {
    return "watch here";
  }

  if (interactive.matches("article a, [data-cursor='read']")) {
    return "read here";
  }

  return "click here";
}

/** Cute caption near cursor on CTAs — keeps default arrow cursor */
export function CaptionCursor() {
  const pillRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: 0, y: 0 });
  const smooth = useRef({ x: 0, y: 0 });
  const [enabled, setEnabled] = useState(false);
  const [caption, setCaption] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!mq.matches) return;

    setEnabled(true);

    const onMove = (event: MouseEvent) => {
      pos.current = { x: event.clientX, y: event.clientY };
      const next = resolveCaption(event.target);
      setCaption(next);
      setVisible(!!next);
    };

    let frame = 0;

    const tick = () => {
      smooth.current.x = lerp(smooth.current.x, pos.current.x, 0.18);
      smooth.current.y = lerp(smooth.current.y, pos.current.y, 0.18);

      if (pillRef.current) {
        pillRef.current.style.transform = `translate3d(${smooth.current.x + 18}px, ${smooth.current.y + 18}px, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={pillRef}
      aria-hidden
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9998] -translate-y-1/2 rounded-full px-3 py-1.5 font-sans text-[11px] font-medium tracking-[0.02em] text-[#1d3e69] shadow-[0_4px_14px_rgba(29,62,105,0.12)] transition-[opacity,transform] duration-200 ease-out will-change-transform",
        "border border-[#f8c792]/80 bg-[#fff8f0]",
        visible && caption ? "scale-100 opacity-100" : "scale-95 opacity-0",
      )}
    >
      {caption ?? "click here"}
      <span className="ml-1 inline-block opacity-70">✦</span>
    </div>
  );
}
