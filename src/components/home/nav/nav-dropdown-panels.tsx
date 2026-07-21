"use client";

import Link from "next/link";

import type { NavMegaMenu, NavMenuLink, NavSubPill } from "@/config/nav-menus";
import { navDropdownAssets } from "@/config/nav-assets";
import { cn } from "@/lib/utils";

/** Figma link arrow — slides right + turns blue on hover */
function LinkArrow({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "size-4 shrink-0 text-[#1d3e69] transition-all duration-200 ease-out",
        className,
      )}
      aria-hidden
    >
      <path
        d="M7.37079 8.1688L1.2682 8.16879C1.09251 8.1688 0.950776 8.11089 0.842951 7.99513C0.735182 7.87932 0.68124 7.73361 0.681258 7.55793C0.681269 7.38223 0.739172 7.23649 0.854966 7.1207C0.970704 7.00496 1.11645 6.94706 1.29214 6.94704L7.37079 6.94704L3.52582 3.10207C3.40364 2.9799 3.34232 2.8364 3.34184 2.67158C3.34136 2.50677 3.40185 2.36362 3.52331 2.24216C3.64477 2.12071 3.78874 2.05938 3.95524 2.05819C4.12174 2.05699 4.26607 2.11748 4.38824 2.23965L9.2753 7.12671C9.39748 7.24889 9.45855 7.39261 9.45858 7.55793C9.45855 7.7232 9.39748 7.86696 9.2753 7.98913L4.38822 12.8762C4.26604 12.9984 4.12253 13.0597 3.95775 13.0601C3.79292 13.0607 3.64975 13.0002 3.52833 12.8787C3.40684 12.7573 3.34555 12.6133 3.34434 12.4467C3.34314 12.2803 3.40362 12.136 3.5258 12.0138L7.37079 8.1688Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NewBadge({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={navDropdownAssets.tagNew}
      alt="New"
      className={cn("h-[14px] w-[25px] shrink-0", className)}
    />
  );
}

function GradientNewBadge({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex h-[14px] items-center justify-center rounded-2xl px-1 py-0.5",
        className,
      )}
      style={{
        backgroundImage:
          "linear-gradient(90deg, #17a5fb 0%, #9a4bff 50%, #ed0082 100%)",
      }}
    >
      <NewBadge className="h-[7px] w-[25px]" />
    </span>
  );
}

function SubLinkPill({
  pill,
  onNavigate,
}: {
  pill: NavSubPill;
  onNavigate?: () => void;
}) {
  return (
    <Link
      href={pill.href}
      onClick={onNavigate}
      className={cn(
        "group/pill inline-flex h-[28px] items-center gap-2 rounded-[4px] pl-[7px] pr-1.5 text-xs font-medium text-[#1d3e69] transition-colors hover:text-[#17a5fb]",
        pill.variant === "purple" ? "bg-[#f5f2ff]" : "bg-[#f2f8ff]",
      )}
    >
      {pill.label}
      <LinkArrow className="group-hover/pill:translate-x-1 group-hover/pill:text-[#17a5fb]" />
      {pill.isNew && !pill.label.includes("Kubernetes") && <NewBadge />}
    </Link>
  );
}

function MenuTitle({
  item,
  onNavigate,
  className,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
  className?: string;
}) {
  const showArrow = Boolean(item.href && !item.muted);

  const content = (
    <span className="inline-flex items-center gap-1.5">
      {item.label}
      {showArrow && (
        <LinkArrow className="group-hover/menu-link:translate-x-1 group-hover/menu-link:text-[#17a5fb]" />
      )}
      {item.isNew && !item.href && <NewBadge className="relative -top-2" />}
    </span>
  );

  const titleClass = cn(
    "group/menu-link text-sm font-medium leading-[22px] tracking-[-0.042px] transition-colors",
    item.muted ? "text-[#4d4d4f]" : "text-[#1d3e69] hover:text-[#17a5fb]",
    className,
  );

  if (item.href) {
    return (
      <Link href={item.href} onClick={onNavigate} className={titleClass}>
        {content}
      </Link>
    );
  }

  return <span className={titleClass}>{content}</span>;
}

function MenuIconBox({ src, alt = "" }: { src: string; alt?: string }) {
  return (
    <div className="flex h-12 w-11 shrink-0 items-center justify-center overflow-hidden rounded-[6px] bg-[#f2f8ff]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="h-auto max-h-6 w-auto max-w-[26px] object-contain"
      />
    </div>
  );
}

function MenuLinkBlock({
  item,
  withIcon,
  onNavigate,
}: {
  item: NavMenuLink;
  withIcon?: boolean;
  onNavigate?: () => void;
}) {
  return (
    <div className={cn("flex gap-[15px]", withIcon ? "items-center" : "items-start")}>
      {withIcon && item.icon && <MenuIconBox src={item.icon} alt="" />}

      <div className="min-w-0 flex-1">
        <MenuTitle item={item} onNavigate={onNavigate} />
        {item.description && (
          <p className="mt-1.5 text-xs leading-4 text-[#828282]">{item.description}</p>
        )}
        {item.children && item.children.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2.5">
            {item.children.map((pill) => (
              <SubLinkPill key={pill.label} pill={pill} onNavigate={onNavigate} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function ExploreArrow({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex size-[22px] shrink-0 items-center justify-center text-[#17a5fb]",
        className,
      )}
      aria-hidden
    >
      <svg
        viewBox="0 0 10.136 10.146"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="size-[10px] transition-transform duration-200 ease-out group-hover/explore:translate-x-0.5 group-hover/explore:-translate-y-0.5"
      >
        <path
          d="M8.71328 2.43023L1.20524 9.93825C1.06035 10.0832 0.895692 10.1523 0.711288 10.1458C0.526884 10.1391 0.362226 10.0634 0.217341 9.91853C0.0724469 9.77361 0 9.60565 0 9.41465C0 9.22374 0.0724469 9.05578 0.217341 8.91087L7.70562 1.42258H1.3633C1.16177 1.42258 0.992845 1.3548 0.856514 1.21926C0.720184 1.08373 0.652014 0.915779 0.652014 0.715432C0.652014 0.515086 0.720184 0.345762 0.856514 0.207459C0.992845 0.0691467 1.16177 0 1.3633 0H9.42457C9.6261 0 9.79501 0.0681604 9.93138 0.204491C10.0677 0.340821 10.1359 0.509757 10.1359 0.711288V8.77259C10.1359 8.97412 10.068 9.14303 9.93252 9.27931C9.797 9.41569 9.62904 9.48388 9.42874 9.48388C9.22835 9.48388 9.05906 9.41569 8.92069 9.27931C8.78242 9.14303 8.71328 8.97412 8.71328 8.77259V2.43023Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

function PlatformMenuCard({
  item,
  onNavigate,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
}) {
  const hasChildren = Boolean(item.children?.length);
  const descClass = cn(
    "text-[#828282] leading-4",
    item.muted ? "text-[13px]" : "text-xs",
  );

  return (
    <div className={cn("flex flex-col", hasChildren && "gap-[15px]")}>
      <div className={cn("flex flex-col", hasChildren ? "gap-[3px]" : "gap-1.5")}>
        <div className="relative w-fit max-w-full">
          <MenuTitle item={item} onNavigate={onNavigate} />
          {item.isNew && item.href && (
            <GradientNewBadge className="absolute -top-2.5 left-[101px]" />
          )}
        </div>
        {item.description && <p className={descClass}>{item.description}</p>}
      </div>

      {item.children && (
        <div className="relative flex flex-wrap items-center gap-2.5">
          {item.children.map((pill) => (
            <SubLinkPill key={pill.label} pill={pill} onNavigate={onNavigate} />
          ))}
          {item.children.some((pill) => pill.isNew) && (
            <GradientNewBadge className="absolute left-[132px] top-8" />
          )}
        </div>
      )}
    </div>
  );
}

function PlatformsPromo({ onNavigate }: { onNavigate?: () => void }) {
  return (
    <div
      className="relative flex w-[344px] shrink-0 flex-col justify-center border-l border-[#e5e5e5] px-10"
      style={{
        backgroundImage:
          "linear-gradient(156.53deg, rgba(255,255,255,0) 73.84%, rgba(255,224,241,0.7) 102.14%), linear-gradient(90deg, #f6fcff 0%, #f6fcff 100%)",
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex size-12 items-center justify-center rounded-full bg-[#fbedf4]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={navDropdownAssets.iconWhatsNew}
            alt=""
            className="size-7 object-contain"
          />
        </div>
        <p className="max-w-[241px] text-base leading-[25px] text-[#1d3e69]">
          <span className="font-medium">See </span>
          <span className="text-[#e80584]">Whats New</span>
          <span className="font-medium"> with CloudKeeper Platform Suite</span>
        </p>
        <Link
          href="#"
          onClick={onNavigate}
          className="group/explore inline-flex h-[38px] w-fit items-center gap-[5px] rounded-[32px] border border-[#17a5fb] px-[21px] text-base font-medium text-[#17a5fb] shadow-[0_8px_32px_rgba(67,152,215,0.4)] transition-colors hover:bg-[#f4fbff]"
        >
          Explore Now
          <ExploreArrow />
        </Link>
      </div>
    </div>
  );
}

function InsightsPromo() {
  return (
    <div
      className="flex w-[344px] shrink-0 flex-col justify-center border-l border-[#e5e5e5] px-8"
      style={{
        backgroundImage:
          "linear-gradient(154.65deg, rgba(255,255,255,0) 73.84%, rgba(255,224,241,0.7) 102.14%), linear-gradient(90deg, #f6fcff 0%, #f6fcff 100%)",
      }}
    >
      <div className="mx-auto flex w-[276px] flex-col gap-[15px]">
        <div className="h-[138px] overflow-hidden rounded-[6px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={navDropdownAssets.insightsBanner}
            alt=""
            className="size-full object-cover"
          />
        </div>
        <Link
          href="#"
          className="group/download inline-flex h-[38px] w-fit items-center gap-[5px] rounded-[32px] border border-[#17a5fb] px-[21px] text-base font-medium text-[#17a5fb] shadow-[0_8px_32px_rgba(67,152,215,0.4)] transition-colors hover:bg-[#f4fbff]"
        >
          Download Now
          <LinkArrow className="group-hover/download:translate-x-1 group-hover/download:text-[#17a5fb]" />
        </Link>
      </div>
    </div>
  );
}

/** Figma node 8274:8245 — per-icon intrinsic sizes (no stretch) */
const INSIGHTS_ICON_SIZES: Record<string, { width: number; height: number }> = {
  Blog: { width: 24, height: 18.783 },
  "Expert Interview": { width: 28.1, height: 20.281 },
  Glossary: { width: 19.234, height: 25.441 },
  Reports: { width: 28, height: 28 },
  Whitepapers: { width: 17.026, height: 24 },
  Podcasts: { width: 21, height: 21 },
  "On-demand Webinars": { width: 28, height: 28 },
};

function InsightsMenuIcon({ src, label }: { src: string; label: string }) {
  const size = INSIGHTS_ICON_SIZES[label] ?? { width: 28, height: 28 };

  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-[6px] bg-[#f2f8ff]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={size.width}
        height={size.height}
        className="block max-w-none shrink-0 object-contain"
        style={{ width: size.width, height: size.height }}
      />
    </div>
  );
}

function InsightsMenuRow({
  item,
  onNavigate,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
}) {
  if (!item.icon) {
    return <MenuTitle item={item} onNavigate={onNavigate} />;
  }

  return (
    <div className="flex items-center gap-[15px]">
      <InsightsMenuIcon src={item.icon} label={item.label} />
      <MenuTitle item={item} onNavigate={onNavigate} />
    </div>
  );
}

function PlatformsPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const section = menu.sections[0];
  const items = section.items ?? [];

  return (
    <div className="flex min-h-[318px]">
      <div className="relative flex-1 px-[39px] pb-10 pt-[39px]">
        <div className="mb-[25px] flex items-center gap-5">
          <div className="flex size-6 items-center justify-center rounded-[6px] bg-[#ffecf6]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={section.titleIcon}
              alt=""
              className="size-4 object-contain"
            />
          </div>
          <h3 className="text-base font-semibold tracking-[-0.064px] text-black">
            {section.title}
          </h3>
        </div>

        <div className="grid w-full max-w-[812px] grid-cols-3 gap-x-5 gap-y-[25px] pl-11">
          {items.map((item) => (
            <div
              key={item.label}
              className="min-w-0"
              style={{
                gridColumn: item.gridColumn,
                gridRow: item.gridRow,
              }}
            >
              <PlatformMenuCard item={item} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
      <PlatformsPromo onNavigate={onNavigate} />
    </div>
  );
}

function SolutionsPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const items = menu.sections[0]?.items ?? [];

  return (
    <div className="flex flex-col gap-[30px] p-10">
      {items.map((item) => (
        <MenuLinkBlock key={item.label} item={item} withIcon onNavigate={onNavigate} />
      ))}
    </div>
  );
}

function CapabilitiesSectionHeader({
  title,
  icon,
}: {
  title: string;
  icon?: string;
}) {
  return (
    <div className="flex h-[30px] items-center gap-5">
      {icon && (
        <div className="flex size-6 shrink-0 items-center justify-center rounded-[6px] bg-[#ffecf6]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={icon} alt="" className="size-4 object-contain" />
        </div>
      )}
      <h3 className="font-sans text-[clamp(14px,1.1vw,16px)] font-semibold tracking-[-0.064px] text-black">
        {title}
      </h3>
    </div>
  );
}

const capabilityLinkText =
  "text-[clamp(12px,0.95vw,14px)] leading-[22px] whitespace-nowrap";

function CapabilityLinkRow({
  item,
  onNavigate,
  className,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("relative flex h-8 items-center", className)}>
      <MenuTitle
        item={item}
        onNavigate={onNavigate}
        className={capabilityLinkText}
      />
      {item.isNew && item.href && (
        <GradientNewBadge className="ml-1.5 shrink-0" />
      )}
    </div>
  );
}

function CapabilityMutedGroup({
  item,
  onNavigate,
  className,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
  className?: string;
}) {
  return (
    <div className={cn("flex w-full max-w-[315px] flex-col gap-2.5", className)}>
      <span className="font-sans text-[clamp(12px,0.95vw,14px)] font-medium leading-[22px] tracking-[-0.042px] text-[#4d4d4f]">
        {item.label}
      </span>
      {item.children && (
        <div className="flex flex-wrap items-center gap-[11px]">
          {item.children.map((pill) => (
            <SubLinkPill key={pill.label} pill={pill} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

function CapabilityColumn({
  items,
  onNavigate,
  indent,
}: {
  items: NavMenuLink[];
  onNavigate?: () => void;
  indent?: string;
}) {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item) => (
        <li key={item.label}>
          {item.children?.length ? (
            <CapabilityMutedGroup
              item={item}
              onNavigate={onNavigate}
              className={indent}
            />
          ) : (
            <CapabilityLinkRow
              item={item}
              onNavigate={onNavigate}
              className={indent}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

function CapabilitiesPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const [useCase, services, programs] = menu.sections;

  return (
    <div className="w-full p-[clamp(24px,3vw,40px)] font-sans">
      {/* Top row: By Use Case | divider | By Services — Figma layout */}
      <div className="relative flex w-full items-start gap-[clamp(24px,3vw,40px)] pb-[25px]">
        {useCase && (
          <div className="flex min-w-0 flex-1 flex-col">
            <CapabilitiesSectionHeader
              title={useCase.title ?? ""}
              icon={useCase.titleIcon}
            />
            <div className="flex gap-5 pt-2.5">
              <div className="w-[min(315px,52%)] shrink-0">
                <CapabilityColumn
                  items={useCase.columns?.[0] ?? []}
                  onNavigate={onNavigate}
                  indent="pl-[43px]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <CapabilityColumn
                  items={useCase.columns?.[1] ?? []}
                  onNavigate={onNavigate}
                />
              </div>
            </div>
          </div>
        )}

        {services && (
          <div className="flex min-w-0 flex-1 flex-col">
            <CapabilitiesSectionHeader
              title={services.title ?? ""}
              icon={services.titleIcon}
            />
            <div className="flex gap-[30px] pt-2.5">
              <div className="w-[min(315px,52%)] shrink-0">
                <CapabilityColumn
                  items={services.columns?.[0] ?? []}
                  onNavigate={onNavigate}
                  indent="pl-[45px]"
                />
              </div>
              <div className="min-w-0 flex-1">
                <CapabilityColumn
                  items={services.columns?.[1] ?? []}
                  onNavigate={onNavigate}
                />
              </div>
            </div>
          </div>
        )}

        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[304px] w-px -translate-x-1/2 bg-[#e5e5e5]"
          aria-hidden
        />
      </div>

      {/* By Programs — Figma horizontal row */}
      {programs && (
        <div className="border-t border-[#e5e5e5] pt-5">
          <div className="flex flex-col gap-[15px]">
            <CapabilitiesSectionHeader
              title={programs.title ?? ""}
              icon={programs.titleIcon}
            />
            <div className="flex w-full items-center gap-[25px]">
              {programs.items?.map((item, index) => (
                <div
                  key={item.label}
                  className={cn(
                    "flex min-w-0 items-center",
                    index === 0 && "w-[25.75%] shrink-0 pl-[45px]",
                    index === 1 && "w-[25.5%] shrink-0",
                    index === 2 && "w-[22.83%] shrink-0",
                    index === 3 && "min-w-0 flex-1",
                  )}
                >
                  <CapabilityLinkRow item={item} onNavigate={onNavigate} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function InsightsPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const items = menu.sections[0]?.items ?? [];

  return (
    <div className="flex min-h-[348px]">
      <div className="px-[39px] pb-10 pt-[39px]">
        <div className="grid w-[596px] grid-cols-2 gap-x-10 gap-y-[25px]">
          {items.map((item) => (
            <div
              key={item.label}
              style={{
                gridColumn: item.gridColumn,
                gridRow: item.gridRow,
              }}
            >
              <InsightsMenuRow item={item} onNavigate={onNavigate} />
            </div>
          ))}
        </div>
      </div>
      <InsightsPromo />
    </div>
  );
}

/** Figma node 8274:8719 — per-icon intrinsic sizes (no stretch) */
const COMPANY_ICON_SIZES: Record<string, { width: number; height: number }> = {
  "About Us": { width: 24, height: 24 },
  Careers: { width: 23, height: 19.414 },
  "Our Team": { width: 26.118, height: 17.507 },
  Newsroom: { width: 20, height: 24.714 },
  Alliances: { width: 22, height: 22 },
};

function CompanyMenuIcon({ src, label }: { src: string; label: string }) {
  const size = COMPANY_ICON_SIZES[label] ?? { width: 24, height: 24 };

  return (
    <div className="flex size-12 shrink-0 items-center justify-center rounded-[6px] bg-[#f2f8ff]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        width={size.width}
        height={size.height}
        className="block max-w-none shrink-0 object-contain"
        style={{ width: size.width, height: size.height }}
      />
    </div>
  );
}

function CompanyLinkRow({
  item,
  onNavigate,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
}) {
  if (!item.icon) {
    return <MenuTitle item={item} onNavigate={onNavigate} />;
  }

  return (
    <div className="flex items-center gap-[15px]">
      <CompanyMenuIcon src={item.icon} label={item.label} />
      <MenuTitle item={item} onNavigate={onNavigate} />
    </div>
  );
}

function CompanyAlliancesBlock({
  item,
  onNavigate,
}: {
  item: NavMenuLink;
  onNavigate?: () => void;
}) {
  return (
    <div className="flex flex-col gap-[5px]">
      <div className="flex items-center gap-[13px]">
        {item.icon && <CompanyMenuIcon src={item.icon} label={item.label} />}
        <MenuTitle item={item} onNavigate={onNavigate} />
      </div>
      {item.children && (
        <div className="flex items-center gap-2.5 pl-[59px]">
          {item.children.map((pill) => (
            <SubLinkPill key={pill.label} pill={pill} onNavigate={onNavigate} />
          ))}
        </div>
      )}
    </div>
  );
}

function CompanyPanel({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const columns = menu.sections[0]?.columns ?? [];

  return (
    <div className="p-10">
      <div className="flex gap-10">
        {columns.map((column, index) => (
          <ul key={index} className="flex w-[280px] shrink-0 flex-col gap-[25px]">
            {column.map((item) => (
              <li key={item.label}>
                {item.muted && item.children?.length ? (
                  <CompanyAlliancesBlock item={item} onNavigate={onNavigate} />
                ) : (
                  <CompanyLinkRow item={item} onNavigate={onNavigate} />
                )}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}

type NavDropdownPanelProps = {
  menu: NavMegaMenu;
  onNavigate?: () => void;
  className?: string;
};

export function NavDropdownPanel({ menu, onNavigate, className }: NavDropdownPanelProps) {
  return (
    <div
      role="region"
      aria-label={`${menu.id} menu`}
      className={cn(
        "overflow-hidden rounded-lg border border-[#e9ebf1] bg-white shadow-[0_9px_28.7px_3px_rgba(0,0,0,0.08)]",
        menu.panelClassName,
        className,
      )}
    >
      {menu.layout === "platforms" && (
        <PlatformsPanel menu={menu} onNavigate={onNavigate} />
      )}
      {menu.layout === "solutions" && (
        <SolutionsPanel menu={menu} onNavigate={onNavigate} />
      )}
      {menu.layout === "capabilities" && (
        <CapabilitiesPanel menu={menu} onNavigate={onNavigate} />
      )}
      {menu.layout === "insights" && (
        <InsightsPanel menu={menu} onNavigate={onNavigate} />
      )}
      {menu.layout === "company" && (
        <CompanyPanel menu={menu} onNavigate={onNavigate} />
      )}
    </div>
  );
}

/** Compact mobile accordion body */
export function NavMobileMenuBody({
  menu,
  onNavigate,
}: {
  menu: NavMegaMenu;
  onNavigate?: () => void;
}) {
  const flatItems =
    menu.sections.flatMap((section) => [
      ...(section.items ?? []),
      ...(section.columns?.flat() ?? []),
    ]) ?? [];

  return (
    <div className="border-t border-[#ececec] bg-[#fafafa] px-2 py-3">
      {menu.sections[0]?.title && (
        <p className="mb-2 px-2 text-sm font-semibold text-black">
          {menu.sections[0].title}
        </p>
      )}
      <ul className="space-y-1">
        {flatItems.map((item) => (
          <li key={item.label}>
            <div className="px-2 py-2">
              <MenuTitle item={item} onNavigate={onNavigate} />
              {item.description && (
                <p className="mt-1 text-xs text-[#828282]">{item.description}</p>
              )}
              {item.children && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {item.children.map((pill) => (
                    <SubLinkPill key={pill.label} pill={pill} onNavigate={onNavigate} />
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
