"use client";

import { motion } from "framer-motion";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import {
  CERT_BADGE_GAP,
  CERT_BADGE_HEIGHT,
  CERT_BADGE_SLOT_WIDTH,
  CERT_CAROUSEL_ARROW_INSET,
  CERT_CAROUSEL_TRANSITION,
  certificationBadges,
  certificationsAssets,
  certificationsContent,
  getCertTrackOffset,
  getVisibleCertBadgeCount,
  type CertificationBadgeItem,
} from "@/config/certifications-section";

const BADGE_COUNT = certificationBadges.length;

function CarouselChevron({ direction }: { direction: "prev" | "next" }) {
  return (
    <svg
      viewBox="0 0 7 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-[10px] shrink-0 ${direction === "next" ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        d="M5.83333 10.8333L0.833333 5.83333L5.83333 0.833333"
        stroke="currentColor"
        strokeWidth="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CarouselArrow({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="group relative z-10 flex size-[42px] shrink-0 items-center justify-center rounded-full border-[1.3px] border-solid border-[#17a5fb] bg-white text-[#17a5fb] transition-colors duration-200 hover:bg-[#17a5fb] hover:text-white"
    >
      <CarouselChevron direction={direction} />
    </button>
  );
}

function BadgeSlot({
  width,
  children,
}: {
  width: number;
  children: ReactNode;
}) {
  return (
    <div
      className="flex h-[120px] shrink-0 flex-col items-center justify-center"
      style={{ width, minWidth: width, maxWidth: width }}
    >
      {children}
    </div>
  );
}

/** Figma 8306:9201 — Gartner Peer Insights (167.123 × 68px) */
function GartnerBadge({ label }: { label: string }) {
  return (
    <img
      src={certificationsAssets.gartner}
      alt={label}
      width={167}
      height={68}
      className="h-[68px] w-[167px] object-contain object-center"
      decoding="async"
    />
  );
}

/** Figma 8306:9210 — G2 ratings (149.7px slot) */
function G2RatingsBadge({ label }: { label: string }) {
  return (
    <div className="relative h-[93.82px] w-[99.7px] shrink-0">
      <img
        src={certificationsAssets.g2Icon}
        alt=""
        width={55}
        height={55}
        className="absolute left-[22.54px] top-0 size-[54.619px]"
        decoding="async"
        aria-hidden
      />
      <div className="absolute left-0 top-[67.96px] flex w-[99.7px] flex-col items-center gap-[7.593px]">
        <div className="flex items-center gap-[2.112px]">
          {certificationsAssets.g2Stars.map((star, index) => (
            <img
              key={star}
              src={star}
              alt=""
              width={18}
              height={19}
              className="h-[19.011px] w-[18.25px]"
              decoding="async"
              aria-hidden={index > 0}
            />
          ))}
        </div>
        <p className="text-center text-[16.391px] font-medium leading-[16.408px] tracking-[-0.0983px] text-black">
          4.8
        </p>
      </div>
      <span className="sr-only">{label}</span>
    </div>
  );
}

/** Figma 8306:9236 — AWS Premier badge (106.227 × 106.226) */
function AwsCertBadge({ label }: { label: string }) {
  return (
    <div className="relative size-[106.227px] shrink-0">
      <img
        src={certificationsAssets.aws.bg}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={certificationsAssets.aws.border}
        alt=""
        className="absolute inset-0 size-full"
        decoding="async"
        aria-hidden
      />
      <img
        src={certificationsAssets.aws.logo}
        alt={label}
        width={80}
        height={66}
        className="absolute left-[13.5px] top-[16.37px] h-[66.128px] w-[80.166px]"
        decoding="async"
      />
    </div>
  );
}

/** Figma 8306:9270 — Google Cloud Partner (169.696 × 52) */
function GcpCertBadge({ label }: { label: string }) {
  return (
    <img
      src={certificationsAssets.gcp}
      alt={label}
      width={170}
      height={52}
      className="h-[52px] w-[169.696px] object-contain object-center"
      decoding="async"
    />
  );
}

/** Figma 8306:9294 — Microsoft Solutions Partner */
function AzureCertBadge({ label }: { label: string }) {
  return (
    <div className="relative inline-grid shrink-0 grid-cols-[max-content] grid-rows-[max-content] leading-none">
      <img
        src={certificationsAssets.azure.mark}
        alt=""
        width={36}
        height={36}
        className="col-start-1 row-start-1 ml-0 mt-[1.29px] h-[35.627px] w-[35.603px]"
        decoding="async"
        aria-hidden
      />
      <div className="col-start-1 row-start-1 ml-[45.93px] mt-0 inline-grid grid-cols-[max-content] grid-rows-[max-content]">
        <img
          src={certificationsAssets.azure.textTop}
          alt=""
          width={100}
          height={19}
          className="col-start-1 row-start-1 ml-[0.08px] mt-0 h-[19.429px] w-[100.292px]"
          decoding="async"
          aria-hidden
        />
        <img
          src={certificationsAssets.azure.textBottom}
          alt={label}
          width={121}
          height={12}
          className="col-start-1 row-start-1 ml-0 mt-[25.15px] h-[11.769px] w-[121.313px]"
          decoding="async"
        />
      </div>
    </div>
  );
}

/** Figma 8306:9403 — G2 Winter 2026 Leader */
function G2Winter2026Badge() {
  return (
    <div className="relative h-[120px] w-[170px] shrink-0 overflow-hidden">
      <div className="absolute inset-[0.46%_20.02%_0.63%_19.33%]">
        <img
          src={certificationsAssets.g2Winter2026Bg}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <div className="absolute inset-[20.14%_20.76%_1.77%_20.03%]">
        <img
          src={certificationsAssets.g2Winter2026Inner}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <div className="absolute inset-[67.85%_20.76%_1.77%_20.05%]">
        <img
          src={certificationsAssets.g2Winter2026Band}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <div className="absolute inset-[73.32%_20.77%_1.77%_20.05%]">
        <img
          src={certificationsAssets.g2Winter2026Text}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <p className="absolute inset-x-[33%] top-[46.59%] text-center text-[18px] font-extrabold leading-none tracking-[0.18px] text-black">
        Leader
      </p>
      <div className="absolute inset-[1.47%_33.95%_80.82%_20.05%]">
        <img
          src={certificationsAssets.g2Winter2026G2}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <p className="absolute inset-x-[24%] top-[10%] text-center text-[9px] font-semibold leading-none tracking-[0.09px] text-black">
        WINTER 2026
      </p>
      <div className="absolute inset-[1.52%_20.77%_80.82%_66.76%]">
        <img
          src={certificationsAssets.g2Winter2026Star}
          alt=""
          className="absolute inset-0 size-full max-w-none"
          decoding="async"
          aria-hidden
        />
      </div>
      <span className="sr-only">G2 Winter 2026 Leader</span>
    </div>
  );
}

function CertificationBadge({ item }: { item: CertificationBadgeItem }) {
  const slotWidth = item.slotWidth ?? CERT_BADGE_SLOT_WIDTH;

  switch (item.type) {
    case "gartner":
      return (
        <BadgeSlot width={slotWidth}>
          <GartnerBadge label={item.label} />
        </BadgeSlot>
      );
    case "g2":
      return (
        <BadgeSlot width={slotWidth}>
          <G2RatingsBadge label={item.label} />
        </BadgeSlot>
      );
    case "aws":
      return (
        <BadgeSlot width={slotWidth}>
          <AwsCertBadge label={item.label} />
        </BadgeSlot>
      );
    case "gcp":
      return (
        <BadgeSlot width={slotWidth}>
          <GcpCertBadge label={item.label} />
        </BadgeSlot>
      );
    case "azure":
      return (
        <BadgeSlot width={slotWidth}>
          <AzureCertBadge label={item.label} />
        </BadgeSlot>
      );
    case "gpwt":
      return (
        <BadgeSlot width={slotWidth}>
          <img
            src={certificationsAssets.gpwt}
            alt={item.label}
            width={69}
            height={118}
            className="h-[118.317px] w-[69.471px] object-contain"
            decoding="async"
          />
        </BadgeSlot>
      );
    case "g2-winter-2026":
      return <G2Winter2026Badge />;
    case "g2-winter-2027":
      return (
        <BadgeSlot width={slotWidth}>
          <div className="relative h-[120px] w-[170px] overflow-hidden">
            <img
              src={certificationsAssets.g2Winter2027Medal}
              alt={item.label}
              width={104}
              height={120}
              className="absolute left-[32.56px] top-[-0.21px] h-[120px] w-[104.28px] object-cover"
              decoding="async"
            />
          </div>
        </BadgeSlot>
      );
    case "aicpa-soc2":
      return (
        <BadgeSlot width={slotWidth}>
          <div className="relative h-[120px] w-[170px] overflow-hidden">
            <img
              src={certificationsAssets.aicpaSoc2}
              alt={item.label}
              width={116}
              height={116}
              className="absolute left-[32.56px] top-[-0.21px] size-[116px] object-contain"
              decoding="async"
            />
          </div>
        </BadgeSlot>
      );
    case "iso-27001":
      return (
        <BadgeSlot width={slotWidth}>
          <div className="relative h-[120px] w-[170px] overflow-hidden">
            <img
              src={certificationsAssets.iso27001}
              alt={item.label}
              width={114}
              height={114}
              className="absolute inset-[-0.17%_13.53%_5.17%_19.15%] max-w-none object-contain"
              decoding="async"
            />
          </div>
        </BadgeSlot>
      );
    case "iso-27001-2019":
      return (
        <BadgeSlot width={slotWidth}>
          <div className="relative h-[120px] w-[170px] overflow-hidden">
            <img
              src={certificationsAssets.iso270012019}
              alt={item.label}
              width={114}
              height={114}
              className="absolute inset-[-0.17%_13.53%_5.17%_19.15%] max-w-none object-contain"
              decoding="async"
            />
          </div>
        </BadgeSlot>
      );
    default:
      return null;
  }
}

/** Figma 8306:10260 — Compliant with the World's Top Standards */
export function CertificationsSection() {
  const { heading } = certificationsContent;
  const viewportRef = useRef<HTMLDivElement>(null);
  const [visibleCount, setVisibleCount] = useState(1);
  const loopItems = useMemo(
    () => [
      ...certificationBadges,
      ...certificationBadges,
      ...certificationBadges,
    ],
    [],
  );
  const [trackIndex, setTrackIndex] = useState(BADGE_COUNT);
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const scrollOffset = getCertTrackOffset(loopItems, trackIndex);
  const pageStep = visibleCount;

  useLayoutEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const measure = () => {
      setVisibleCount(
        getVisibleCertBadgeCount(
          viewport.clientWidth,
          certificationBadges,
        ),
      );
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  const goNext = useCallback(() => {
    setTrackIndex((index) => index + pageStep);
  }, [pageStep]);

  const goPrev = useCallback(() => {
    setTrackIndex((index) => index - pageStep);
  }, [pageStep]);

  const handleAnimationComplete = useCallback(() => {
    if (!transitionEnabled) return;

    if (trackIndex >= BADGE_COUNT * 2) {
      setTransitionEnabled(false);
      setTrackIndex((index) => index - BADGE_COUNT);
      return;
    }

    if (trackIndex < BADGE_COUNT) {
      setTransitionEnabled(false);
      setTrackIndex((index) => index + BADGE_COUNT);
    }
  }, [trackIndex, transitionEnabled]);

  useEffect(() => {
    if (transitionEnabled) return;

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => setTransitionEnabled(true));
    });

    return () => cancelAnimationFrame(frame);
  }, [transitionEnabled, trackIndex]);

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-white font-sans"
      aria-labelledby="certifications-heading"
    >
      <div
        className="pointer-events-none absolute left-0 top-0 z-[2] hidden h-[177px] w-[136px] overflow-hidden lg:block"
        aria-hidden
      >
        <div className="absolute left-[-74.69px] top-[-49.71px] flex size-[253.55px] rotate-[82.82deg] items-center justify-center">
          <img
            src={certificationsAssets.decorativeShape}
            alt=""
            className="h-[225.8px] w-[236.18px] max-w-none object-cover opacity-30"
            decoding="async"
          />
        </div>
      </div>

      <div className="relative z-[1] mx-auto flex w-full max-w-[1440px] flex-col items-center px-6 pb-[130px] pt-[100px] lg:px-[116px]">
        <h2
          id="certifications-heading"
          className="max-w-[1208px] text-center text-[clamp(1.75rem,3vw,2.5rem)] leading-[1.5] tracking-[-1px] text-black lg:text-[40px]"
        >
          {heading}
        </h2>

        <div className="relative mt-[59px] w-full max-w-[1208px]">
          <div
            className="relative"
            style={{
              marginLeft: CERT_CAROUSEL_ARROW_INSET,
              marginRight: CERT_CAROUSEL_ARROW_INSET,
            }}
          >
            <div
              ref={viewportRef}
              className="relative h-[120px] w-full overflow-hidden"
            >
              <div
                className="pointer-events-none absolute inset-y-0 left-0 z-[2] hidden w-[100px] bg-gradient-to-r from-white from-[62%] to-transparent opacity-50 lg:block"
                aria-hidden
              />
              <div
                className="pointer-events-none absolute inset-y-0 right-0 z-[2] hidden w-[100px] bg-gradient-to-l from-white from-[38%] to-transparent opacity-50 lg:block"
                aria-hidden
              />

              <motion.div
                className="flex will-change-transform items-center"
                initial={false}
                style={{ gap: CERT_BADGE_GAP, height: CERT_BADGE_HEIGHT }}
                animate={{ x: -scrollOffset }}
                transition={
                  transitionEnabled
                    ? CERT_CAROUSEL_TRANSITION
                    : { duration: 0 }
                }
                onAnimationComplete={handleAnimationComplete}
              >
                {loopItems.map((item, index) => (
                  <CertificationBadge
                    key={`${item.id}-${index}`}
                    item={item}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="absolute left-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <CarouselArrow
              direction="prev"
              label="Previous certifications"
              onClick={goPrev}
            />
          </div>

          <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 lg:block">
            <CarouselArrow
              direction="next"
              label="Next certifications"
              onClick={goNext}
            />
          </div>

          <div className="mt-6 flex justify-center gap-4 lg:hidden">
            <CarouselArrow
              direction="prev"
              label="Previous certifications"
              onClick={goPrev}
            />
            <CarouselArrow
              direction="next"
              label="Next certifications"
              onClick={goNext}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
