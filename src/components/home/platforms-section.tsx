"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

import { CtaButton } from "@/components/home/primary-button";
import {
  ScrollRevealGroup,
  ScrollRevealItem,
} from "@/components/motion/scroll-reveal-group";
import {
  platformAddons,
  platformTabIconLayout,
  platformTabsContent,
  platformsAssets,
  type PlatformTabId,
} from "@/config/platforms-section";
import { cn } from "@/lib/utils";

const TAB_GRADIENT =
  "linear-gradient(90deg, rgb(23, 165, 251) 0%, rgb(154, 75, 255) 50%, rgb(237, 0, 130) 100%)";

/** How long each tab stays before auto-advancing */
const TAB_AUTO_DURATION_MS = 12000;

function PlatformTabIcon({ tabId, icon }: { tabId: PlatformTabId; icon: string }) {
  const layout = platformTabIconLayout[tabId];

  return (
    <span className="relative size-[46px] shrink-0 overflow-hidden rounded-[30px]">
      <span className={layout.wrapper}>
        {layout.bleed ? (
          <span className={layout.bleed}>
            <img
              src={icon}
              alt=""
              className="block size-full max-w-none"
              decoding="async"
              aria-hidden
            />
          </span>
        ) : (
          <img
            src={icon}
            alt=""
            className="absolute inset-0 block size-full max-w-none"
            decoding="async"
            aria-hidden
          />
        )}
      </span>
    </span>
  );
}

function PlatformTabButton({
  tabId,
  label,
  icon,
  active,
  progress,
  autoPlay,
  onClick,
}: {
  tabId: PlatformTabId;
  label: string;
  icon: string;
  active: boolean;
  /** 0–1 fill amount for the active tab progress line */
  progress: number;
  autoPlay: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="relative flex w-full min-w-0 flex-1 basis-0 flex-col items-stretch gap-2.5 bg-white p-5 text-left"
      aria-selected={active}
      role="tab"
    >
      <span className="flex w-full flex-col gap-2.5">
        <span className="flex items-center gap-[13px]">
          <PlatformTabIcon tabId={tabId} icon={icon} />
          <span
            className={cn(
              "text-xl font-medium leading-normal tracking-[-0.4px] transition-colors duration-300",
              active ? "text-[#253746]" : "text-[#b3b3b3]",
            )}
          >
            {label}
          </span>
        </span>

        {/* Progress line — full equal tab width */}
        <span
          className={cn(
            "relative h-1 w-full overflow-hidden rounded-full",
            active ? "bg-[#eef2f6]" : "bg-transparent",
          )}
          aria-hidden
        >
          {active ? (
            <span
              className="absolute inset-y-0 left-0 h-full origin-left rounded-full"
              style={{
                width: "100%",
                background: TAB_GRADIENT,
                transform: `scaleX(${autoPlay ? progress : 1})`,
              }}
            />
          ) : null}
        </span>
      </span>
    </button>
  );
}

function FeatureTags({ tags }: { tags: readonly string[] }) {
  const firstRow = tags.slice(0, 2);
  const secondRow = tags.slice(2);

  return (
    <div className="flex flex-col gap-3">
      {firstRow.length > 0 ? (
        <div className="flex flex-wrap gap-3">
          {firstRow.map((tag) => (
            <span
              key={tag}
              className="inline-flex h-[40px] items-center rounded-md border-[0.7px] border-[#d9d9d9] px-[13px] py-[11px] text-sm leading-[1.34] tracking-[-0.07px] text-black"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
      {secondRow.map((tag) => (
        <span
          key={tag}
          className="inline-flex h-[40px] w-fit items-center rounded-md border-[0.7px] border-[#d9d9d9] px-[13px] py-[11px] text-sm leading-[1.34] tracking-[-0.07px] text-black"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

function DashboardPreview({
  dashboard,
  label,
  slides,
  activeSlide,
  onSelectSlide,
}: {
  dashboard: string;
  label: string;
  slides: number;
  activeSlide: number;
  onSelectSlide: (index: number) => void;
}) {
  return (
    <div className="relative flex h-[483px] min-w-0 flex-1 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-[rgba(226,240,255,0.8)] to-[rgba(255,233,245,0.8)] p-[50px]">
      <img
        src={dashboard}
        alt={`${label} product dashboard preview`}
        width={661}
        height={362}
        className="pointer-events-none max-h-[362px] w-full max-w-[661px] object-contain object-center"
        decoding="async"
      />

      {/* Figma 8297:8895 — dot pagination */}
      <div className="absolute bottom-[21px] left-1/2 -translate-x-1/2">
        <SlideDots total={slides} activeIndex={activeSlide} onSelect={onSelectSlide} />
      </div>
    </div>
  );
}

function SlideDots({
  total,
  activeIndex,
  onSelect,
}: {
  total: number;
  activeIndex: number;
  onSelect: (index: number) => void;
}) {
  return (
    <div className="flex h-7 items-center justify-center gap-1 rounded-[160px] px-3">
      {Array.from({ length: total }, (_, index) => {
        const active = index === activeIndex;
        return (
          <button
            key={index}
            type="button"
            onClick={() => onSelect(index)}
            className={cn(
              "flex h-1.5 items-center justify-center px-1",
              active ? "w-5" : "w-3.5",
            )}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={active ? "true" : undefined}
          >
            <span
              className={cn(
                "block h-1.5 rounded-[160px]",
                active ? "w-5 bg-[#17a5fb]" : "size-1.5 bg-[#a0d1f1]/60",
              )}
            />
          </button>
        );
      })}
    </div>
  );
}

function ValueAddonsBar() {
  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-[#e4ecf4] bg-[#f8f6ff]">
      <img
        src={platformsAssets.addonBg}
        alt=""
        className="pointer-events-none absolute inset-0 size-full object-cover opacity-[0.08]"
        decoding="async"
        aria-hidden
      />

      <div className="relative z-[1] flex flex-col divide-y divide-[#e4ecf4] lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)_minmax(0,1.5fr)] lg:divide-x lg:divide-y-0">
        <div className="flex min-h-[88px] items-center px-5 py-4 sm:px-6 lg:px-8 lg:py-5">
          <p className="text-[15px] font-semibold leading-[1.45] tracking-[-0.02em] text-[#253746] sm:text-base">
            Exclusive value add-ons
            <span className="mt-0.5 block text-sm font-normal text-[#64748b]">
              at no cost
            </span>
          </p>
        </div>

        {platformAddons.map((addon) => (
          <Link
            key={addon.line2}
            href={addon.href}
            className="group/addon flex min-h-[88px] items-center gap-4 px-5 py-4 transition-colors duration-200 hover:bg-white/60 sm:gap-5 sm:px-6 lg:px-7 lg:py-5"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#17a5fb]/25 bg-white shadow-[0_1px_2px_rgba(23,165,251,0.08)]">
              <span className="relative size-10">
                <img
                  src={addon.icon}
                  alt=""
                  className={cn("block max-w-none", addon.iconClassName)}
                  decoding="async"
                  aria-hidden
                />
              </span>
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[11px] font-medium uppercase tracking-[0.06em] text-[#64748b] sm:text-xs">
                {addon.line1}
              </span>
              <span className="mt-1 flex items-center gap-2 text-base font-semibold leading-tight tracking-[-0.02em] text-[#1d3e69] sm:text-lg">
                {addon.line2}
                <img
                  src={addon.arrow}
                  alt=""
                  width={10}
                  height={10}
                  className="size-[9px] shrink-0 opacity-70 transition-all duration-200 group-hover/addon:translate-x-0.5 group-hover/addon:opacity-100"
                  decoding="async"
                  aria-hidden
                />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/** Figma 8251:20839 — Tabs-carasoul-platforms */
export function PlatformsSection() {
  const [activeTabId, setActiveTabId] = useState<PlatformTabId>("lens");
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [sectionInView, setSectionInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  const activeTab =
    platformTabsContent.find((tab) => tab.id === activeTabId) ?? platformTabsContent[0];

  const goToTab = useCallback((id: PlatformTabId) => {
    setActiveTabId(id);
    setActiveSlide(0);
    progressRef.current = 0;
    setProgress(0);
    lastTsRef.current = null;
  }, []);

  const goToNextTab = useCallback(() => {
    const currentIndex = platformTabsContent.findIndex((tab) => tab.id === activeTabId);
    const nextIndex = (currentIndex + 1) % platformTabsContent.length;
    goToTab(platformTabsContent[nextIndex].id);
  }, [activeTabId, goToTab]);

  // Respect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setAutoPlay(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  // Only auto-advance while section is visible
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => setSectionInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Smooth progress fill → next tab
  useEffect(() => {
    if (!autoPlay || !sectionInView) {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTsRef.current = null;
      return;
    }

    const tick = (ts: number) => {
      if (lastTsRef.current == null) lastTsRef.current = ts;

      if (!isPaused) {
        const delta = ts - lastTsRef.current;
        lastTsRef.current = ts;
        const next = Math.min(1, progressRef.current + delta / TAB_AUTO_DURATION_MS);
        progressRef.current = next;
        setProgress(next);

        if (next >= 1) {
          goToNextTab();
          return;
        }
      } else {
        lastTsRef.current = ts;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      lastTsRef.current = null;
    };
  }, [activeTabId, autoPlay, goToNextTab, isPaused, sectionInView]);

  return (
    <section
      ref={sectionRef}
      id="platforms"
      className="bg-white font-sans"
      aria-labelledby="platforms-heading"
    >
      <div className="mx-auto w-full max-w-[1440px] px-5 py-16 sm:px-8 lg:px-[90px] lg:py-[90px]">
        <ScrollRevealGroup className="mx-auto flex max-w-[1260px] flex-col items-center gap-[30px]">
          <ScrollRevealItem className="flex max-w-[1170px] flex-col items-center gap-5 text-center text-black">
            <h2
              id="platforms-heading"
              className="w-full text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-1px] lg:text-[40px]"
            >
              Our All-in-One FinOps Platform Suite
            </h2>
            <p className="w-full text-lg leading-[30px] tracking-[-0.3px]">
              Complete visibility, intelligent optimization, and measurable ROI - in one
              unified platform, backed by unlimited support by cloud experts
            </p>
          </ScrollRevealItem>

          <ScrollRevealItem className="flex w-full flex-col gap-10 rounded-xl">
            <div
              className="flex w-full flex-col gap-10"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onFocusCapture={() => setIsPaused(true)}
              onBlurCapture={(event) => {
                if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                  setIsPaused(false);
                }
              }}
            >
              {/* Tab bar — Figma 2987:24276 */}
              <div
                className="flex w-full flex-col items-stretch justify-center sm:flex-row"
                role="tablist"
                aria-label="Platform products"
              >
                {platformTabsContent.map((tab) => (
                  <PlatformTabButton
                    key={tab.id}
                    tabId={tab.id}
                    label={tab.label}
                    icon={tab.icon}
                    active={tab.id === activeTabId}
                    progress={progress}
                    autoPlay={autoPlay}
                    onClick={() => goToTab(tab.id)}
                  />
                ))}
              </div>

              {/* Content card row — Figma 8297:8720 */}
              <div className="flex flex-col items-stretch lg:flex-row lg:items-center">
                {/* Left panel — fixed width; headlines are always 3 lines */}
                <div className="flex h-[483px] w-full shrink-0 flex-col overflow-hidden rounded-2xl bg-[#f3f8ff] p-[30px] lg:w-[520px]">
                  <div className="flex w-full max-w-[440px] flex-col gap-20">
                    <div className="flex flex-col gap-5">
                      <div className="flex flex-col gap-5">
                        <p className="py-2 text-sm font-light uppercase leading-7 text-black">
                          {activeTab.category}
                        </p>
                        <h3 className="whitespace-pre-line text-2xl leading-[39.2px] tracking-[-0.56px] text-black">
                          {activeTab.headline}
                        </h3>
                      </div>

                      <CtaButton href={activeTab.exploreHref}>Explore Now</CtaButton>
                    </div>

                    <FeatureTags tags={activeTab.featureTags} />
                  </div>
                </div>

                <DashboardPreview
                  dashboard={activeTab.dashboard}
                  label={activeTab.label}
                  slides={activeTab.slides}
                  activeSlide={activeSlide}
                  onSelectSlide={setActiveSlide}
                />
              </div>
            </div>
          </ScrollRevealItem>

          <ScrollRevealItem className="w-full">
            <ValueAddonsBar />
          </ScrollRevealItem>
        </ScrollRevealGroup>
      </div>
    </section>
  );
}
