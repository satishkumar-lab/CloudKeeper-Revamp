"use client";

import { useReducedMotion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type CSSProperties,
  type PointerEvent as ReactPointerEvent,
  type ReactNode,
} from "react";

import { cn } from "@/lib/utils";

type GridSize = {
  cols: number;
  rows: number;
  cellW: number;
  cellH: number;
};

type PointerPosition = {
  x: number;
  y: number;
};

type InteractiveGridSectionProps = {
  children: ReactNode;
  cellSize?: number;
} & Omit<ComponentPropsWithoutRef<"section">, "children" | "onPointerMove" | "onPointerLeave">;

function cellTint(col: number, cols: number) {
  const ratio = cols <= 1 ? 0.5 : col / (cols - 1);

  if (ratio < 0.5) {
    const t = ratio * 2;
    return {
      r: Math.round(23 + (154 - 23) * t),
      g: Math.round(165 + (75 - 165) * t),
      b: Math.round(251 + (255 - 251) * t),
    };
  }

  const t = (ratio - 0.5) * 2;
  return {
    r: Math.round(154 + (237 - 154) * t),
    g: Math.round(75 + (0 - 75) * t),
    b: Math.round(255 + (130 - 255) * t),
  };
}

function highlightFromPointer(
  col: number,
  row: number,
  pointer: PointerPosition,
  cellW: number,
  cellH: number,
) {
  const cx = (col + 0.5) * cellW;
  const cy = (row + 0.5) * cellH;
  const dist = Math.hypot(pointer.x - cx, pointer.y - cy);
  const radius = Math.min(cellW, cellH) * 3.6;

  if (dist >= radius) return 0;

  const t = 1 - dist / radius;
  return Math.pow(t, 1.35);
}

function cellBackground(
  col: number,
  cols: number,
  strength: number,
): CSSProperties {
  if (strength <= 0) return { backgroundColor: "transparent" };

  const { r, g, b } = cellTint(col, cols);
  const mix = 0.42;
  const pr = Math.round(r + (255 - r) * mix);
  const pg = Math.round(g + (255 - g) * mix);
  const pb = Math.round(b + (255 - b) * mix);
  const alpha = Math.min(1, strength * 1.08);

  return {
    backgroundColor: `rgba(${pr}, ${pg}, ${pb}, ${alpha})`,
  };
}

export function InteractiveGridSection({
  children,
  className,
  cellSize = 52,
  ...sectionProps
}: InteractiveGridSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const [gridSize, setGridSize] = useState<GridSize>({
    cols: 0,
    rows: 0,
    cellW: cellSize,
    cellH: cellSize,
  });
  const [pointer, setPointer] = useState<PointerPosition | null>(null);
  const [staticCells, setStaticCells] = useState<ReadonlySet<number>>(() => new Set());
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const updateGrid = () => {
      const { width, height } = node.getBoundingClientRect();
      const cols = Math.max(1, Math.ceil(width / cellSize));
      const rows = Math.max(1, Math.ceil(height / cellSize));
      setGridSize({
        cols,
        rows,
        cellW: width / cols,
        cellH: height / rows,
      });

      const total = cols * rows;
      const accents = new Set<number>();
      const accentCount = Math.max(3, Math.floor(total * 0.03));

      while (accents.size < accentCount) {
        accents.add(Math.floor(Math.random() * total));
      }

      setStaticCells(accents);
    };

    updateGrid();
    const observer = new ResizeObserver(updateGrid);
    observer.observe(node);

    return () => observer.disconnect();
  }, [cellSize]);

  const { cols, rows, cellW, cellH } = gridSize;
  const totalCells = cols * rows;

  const cellStyles = useMemo(() => {
    if (totalCells === 0) return [] as CSSProperties[];

    return Array.from({ length: totalCells }, (_, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);

      let strength = staticCells.has(index) ? 0.04 : 0;

      if (!prefersReducedMotion && pointer) {
        strength = Math.max(
          strength,
          highlightFromPointer(col, row, pointer, cellW, cellH),
        );
      }

      return cellBackground(col, cols, strength);
    });
  }, [cellH, cellW, cols, pointer, prefersReducedMotion, staticCells, totalCells]);

  const onPointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      if (prefersReducedMotion || cols === 0 || rows === 0) return;

      const rect = event.currentTarget.getBoundingClientRect();
      setPointer({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    },
    [cols, prefersReducedMotion, rows],
  );

  const onPointerLeave = useCallback(() => {
    setPointer(null);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={cn("relative isolate overflow-hidden bg-white", className)}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      {...sectionProps}
    >
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(118deg, #f5faff 0%, #ffffff 42%, #fff9fd 68%, #fdf5ff 100%)",
        }}
      />

      {totalCells > 0 ? (
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div
            className="grid h-full w-full"
            style={{
              gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
              gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
            }}
          >
            {cellStyles.map((style, index) => (
              <div
                key={index}
                className="border border-[#eef2f7]/70 transition-[background-color] duration-150 ease-out"
                style={style}
              />
            ))}
          </div>
        </div>
      ) : null}

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 74% 88% at 50% 50%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.55) 45%, rgba(255,255,255,0.12) 74%, transparent 100%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, transparent 16%, transparent 84%, rgba(255,255,255,0.35) 100%)",
        }}
      />

      <div className="relative z-10">{children}</div>
    </section>
  );
}
