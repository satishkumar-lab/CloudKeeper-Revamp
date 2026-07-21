"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { PrimaryButton } from "@/components/home/primary-button";
import { homeAssets } from "@/config/home-assets";
import { heroServices } from "@/config/home-content";
import { cn } from "@/lib/utils";

function ServiceChip({
  label,
  icon,
  iconWidth = 30,
  iconHeight = 30,
  iconBgRadius = "rounded-[9px]",
  revealIndex,
  className,
  style,
}: {
  label: string;
  icon: string;
  iconWidth?: number;
  iconHeight?: number;
  iconBgRadius?: "rounded-[6px]" | "rounded-[9px]";
  revealIndex?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <div
      style={style}
      data-reveal={revealIndex}
      className={cn(
        "hero-service-chip absolute flex h-14 w-max shrink-0 items-center gap-2.5 rounded-[6px] bg-white py-1.5 pl-2 pr-[11px] font-sans shadow-[0_4px_15.95px_rgba(0,0,0,0.1)]",
        className,
      )}
    >
      <div
        className={cn(
          "relative flex size-11 shrink-0 items-center justify-center bg-[#f4fbff]",
          iconBgRadius,
        )}
      >
        <Image
          src={icon}
          alt=""
          width={Math.round(iconWidth)}
          height={Math.round(iconHeight)}
          className="shrink-0 object-contain"
          style={{ width: iconWidth, height: iconHeight }}
        />
      </div>
      <p className="shrink-0 whitespace-pre text-sm font-normal leading-[18px] tracking-[-0.042px] text-black">
        {label}
      </p>
    </div>
  );
}

function OrbitDot({
  radius,
  angleDeg,
  size,
  src,
  glowInset,
}: {
  radius: number;
  angleDeg: number;
  size: 13 | 6;
  src: string;
  glowInset: string;
}) {
  const sizeClass = size === 13 ? "size-[13px]" : "size-[6px]";

  return (
    <div
      className="absolute left-1/2 top-1/2 size-0 -translate-x-1/2 -translate-y-1/2"
      style={{ transform: `rotate(${angleDeg}deg)` }}
      aria-hidden
    >
      <div
        className={cn(
          "absolute left-0 -translate-x-1/2 -translate-y-1/2 bg-white shadow-[-3.358px_3.358px_2.099px_rgba(48,207,255,0.21)]",
          sizeClass,
        )}
        style={{ top: -radius }}
      >
        <div className={cn("absolute", glowInset)}>
          <Image src={src} alt="" width={size} height={size} className="size-full object-contain" />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  const innerRadius = 311.142;
  const outerRadius = 480.598;
  const innerDotAngle = -73.15;
  const outerDotAngle = 173.85;
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) {
      setVisible(true);
      return;
    }

    const frame = requestAnimationFrame(() => setVisible(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative isolate flex w-full flex-col items-center overflow-hidden bg-white pt-[60px] pb-5 font-sans lg:pb-5">
      {/* Desktop: fixed 1440px Figma artboard (node 8286:8440) */}
      <div className="relative mx-auto hidden w-[1440px] max-w-full lg:block">
        {/* Background glows — Figma bg-colors layer (1440×659 clip, 979px image @ 60%) */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[1] h-[659px] overflow-hidden"
          aria-hidden
        >
          <Image
            src={homeAssets.bgColors}
            alt=""
            width={1440}
            height={979}
            className="absolute left-0 top-0 h-[979px] w-full max-w-[1440px] object-cover opacity-60"
            priority
          />
        </div>

        {/* Foreground content — single orbit container like cloudkeeper.com */}
        <div
          className={cn(
            "hero-orbit-container relative z-[2] h-[671px] w-full overflow-visible",
            visible && "is-visible",
          )}
        >
          {/* Orbit rings */}
          <div className="pointer-events-none absolute left-1/2 top-[-25px] h-[671px] w-[988px] -translate-x-1/2">
            {/* Big outer solid ring — pop-in only, no rotation */}
            <div className="hero-ring hero-ring--solid flex size-[987.998px] items-center justify-center">
              <div className="rotate-[1.53deg]">
                <Image
                  src={homeAssets.orbitRing}
                  alt=""
                  width={963}
                  height={963}
                  className="size-[962.596px] object-contain"
                  aria-hidden
                />
              </div>
            </div>

            {/* Inner dashed ring — scale-in then slow 60s rotation */}
            <div className="hero-ring hero-ring--dashed z-[1] size-[622.284px]">
              <Image
                src={homeAssets.orbitInner}
                alt=""
                width={623}
                height={623}
                className="size-full object-contain"
                aria-hidden
              />
            </div>

            {/* Dots fixed on ring paths (dashed pattern rotates beneath them) */}
            <div className="absolute left-1/2 top-[calc(50%-203.5px)] z-[2] size-0 -translate-x-1/2 -translate-y-1/2">
              <OrbitDot
                radius={innerRadius}
                angleDeg={innerDotAngle}
                size={13}
                src={homeAssets.orbitDotLarge}
                glowInset="inset-[-12.92%]"
              />
              <OrbitDot
                radius={outerRadius}
                angleDeg={outerDotAngle}
                size={6}
                src={homeAssets.orbitDotSmall}
                glowInset="inset-[-27.99%]"
              />
            </div>
          </div>

          {/* Service chips — Figma nested pointer groups (live-site layout) */}
          <div className="absolute left-[74px] top-[15px] z-[3]">
            <div className="absolute left-0 top-0 h-[611px] w-[431px]">
              {heroServices
                .filter((service) => service.side === "left")
                .map((service) => (
                  <ServiceChip
                    key={service.label}
                    label={service.label}
                    icon={service.icon}
                    iconWidth={service.iconWidth}
                    iconHeight={service.iconHeight}
                    iconBgRadius={service.iconBgRadius}
                    revealIndex={service.revealIndex}
                    style={{ left: service.left, top: service.top }}
                  />
                ))}
            </div>
            <div className="absolute left-[769px] top-[25px]">
              {heroServices
                .filter((service) => service.side === "right")
                .map((service) => (
                  <ServiceChip
                    key={service.label}
                    label={service.label}
                    icon={service.icon}
                    iconWidth={service.iconWidth}
                    iconHeight={service.iconHeight}
                    iconBgRadius={service.iconBgRadius}
                    revealIndex={service.revealIndex}
                    style={{ left: service.left, top: service.top }}
                  />
                ))}
            </div>
          </div>

          {/* Center headline block */}
          <div className="absolute left-1/2 top-[50px] z-[4] flex w-max max-w-[calc(100%-48px)] -translate-x-1/2 flex-col items-center text-center">
            <div className="flex w-full flex-col items-center gap-2.5">
              <div className="flex flex-nowrap items-center justify-center gap-2.5">
                <span className="shrink-0 whitespace-nowrap text-[44px] font-normal leading-none text-black">
                  The
                </span>
                <span className="relative shrink-0 border-[1.2px] border-[#ffbee1] px-2 py-1.5">
                  <span
                    className="whitespace-nowrap bg-clip-text text-[44px] font-normal leading-none text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0325ab 0%, #ed0082 82.175%)",
                    }}
                  >
                    Only Outcome-Driven
                  </span>
                  <span className="absolute -left-[2.5px] -top-[2.7px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -bottom-[2.3px] -left-[2.5px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -right-[2.5px] -top-[2.7px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -bottom-[2.3px] -right-[2.5px] size-1.5 rounded-[5px] bg-[#e80584]" />
                </span>
              </div>
              <h1 className="whitespace-nowrap text-[44px] font-normal leading-none tracking-[-0.5px] text-black">
                AI & Cloud Cost Optimization Partner
              </h1>
            </div>

            <p className="mt-[10px] whitespace-nowrap text-[20px] font-normal leading-[1.5] text-black">
              Delivering guaranteed, ongoing cloud cost savings -{" "}
              <strong className="font-semibold">end-to-end!</strong>
            </p>

            <PrimaryButton href="#contact" className="mt-[30px]">
              Talk to an expert
            </PrimaryButton>
          </div>
        </div>
      </div>

      {/* Mobile / tablet stacked layout */}
      <div className="relative z-[4] w-full px-5 pb-16 pt-6 font-sans sm:px-8 lg:hidden">
        <div className="mx-auto flex max-w-[722px] flex-col items-center gap-8 text-center">
          <div className="flex flex-col items-center gap-5">
            <div className="flex w-full flex-col items-center gap-2.5">
              <div className="flex flex-nowrap items-center justify-center gap-2.5 text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-none text-black">
                <span className="shrink-0">The</span>
                <span className="relative shrink-0 border-[1.2px] border-[#ffbee1] px-2 py-1.5">
                  <span
                    className="whitespace-nowrap bg-clip-text font-normal text-transparent"
                    style={{
                      backgroundImage:
                        "linear-gradient(90deg, #0325ab 0%, #ed0082 82.175%)",
                    }}
                  >
                    Only Outcome-Driven
                  </span>
                  <span className="absolute -left-[2.5px] -top-[2.7px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -bottom-[2.3px] -left-[2.5px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -right-[2.5px] -top-[2.7px] size-1.5 rounded-[5px] bg-[#e80584]" />
                  <span className="absolute -bottom-[2.3px] -right-[2.5px] size-1.5 rounded-[5px] bg-[#e80584]" />
                </span>
              </div>
              <h1 className="text-center text-[clamp(1.75rem,4vw,2.75rem)] font-normal leading-none tracking-[-0.5px] text-black">
                AI & Cloud Cost Optimization Partner
              </h1>
            </div>
          </div>
          <p className="max-w-xl text-base font-normal leading-[1.5] text-black sm:text-[20px]">
            Delivering guaranteed, ongoing cloud cost savings -{" "}
            <strong className="font-semibold">end-to-end!</strong>
          </p>
          <PrimaryButton href="#contact">Talk to an expert</PrimaryButton>
        </div>

        <div className="mx-auto mt-10 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-2">
          {heroServices.map((service) => (
            <div
              key={service.label}
              className="flex h-14 w-max shrink-0 items-center gap-2.5 rounded-[6px] bg-white py-1.5 pl-2 pr-[11px] shadow-[0_4px_15.95px_rgba(0,0,0,0.1)]"
            >
              <div
                className={cn(
                  "flex size-11 shrink-0 items-center justify-center bg-[#f4fbff]",
                  service.iconBgRadius ?? "rounded-[9px]",
                )}
              >
                <Image
                  src={service.icon}
                  alt=""
                  width={Math.round(service.iconWidth ?? 30)}
                  height={Math.round(service.iconHeight ?? 30)}
                  className="shrink-0 object-contain"
                  style={{
                    width: service.iconWidth ?? 30,
                    height: service.iconHeight ?? 30,
                  }}
                />
              </div>
              <p className="shrink-0 whitespace-pre text-sm font-normal leading-[18px] tracking-[-0.042px] text-black">
                {service.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
