"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavDropdownPanel,
  NavMobileMenuBody,
} from "@/components/home/nav/nav-dropdown-panels";
import { navAssets } from "@/config/nav-assets";
import { navLinks, promoContent, type NavLinkItem } from "@/config/nav-content";
import { getMenuById, type NavMenuId } from "@/config/nav-menus";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

/** Highlight the nav tab that owns the current route. */
function isNavRouteActive(item: NavLinkItem, pathname: string): boolean {
  if (item.menuId === "solutions") {
    return (
      pathname === routes.solutions.az ||
      pathname === routes.solutions.ppaPlus ||
      pathname.startsWith("/solutions/")
    );
  }

  if (item.menuId === "platforms") {
    return (
      pathname === routes.platformSuite || pathname.startsWith("/platform-suite")
    );
  }

  const pathOnly = item.href.split("#")[0] ?? item.href;
  if (!pathOnly || pathOnly === "/") return false;

  return pathname === pathOnly || pathname.startsWith(`${pathOnly}/`);
}

function NavChevron({ open, className }: { open?: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 8 4.57924"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn(
        "mt-px h-[5px] w-[8px] shrink-0 text-[#777777] transition-all duration-200 group-hover:text-[#17a5fb]",
        open && "rotate-180",
        className,
      )}
      aria-hidden
    >
      <path
        d="M4.01617 3.20769L7.02994 0.189808C7.08265 0.136781 7.14533 0.0946995 7.21437 0.0659842C7.2834 0.0372688 7.35744 0.0224859 7.43221 0.0224859C7.50698 0.0224859 7.58101 0.0372688 7.65005 0.0659842C7.71908 0.0946995 7.78176 0.136781 7.83448 0.189808C7.94053 0.297247 8 0.442139 8 0.593107C8 0.744074 7.94053 0.888965 7.83448 0.996405L4.42015 4.41347C4.31651 4.51672 4.17705 4.57605 4.03078 4.57911C3.88452 4.58218 3.7427 4.52875 3.63482 4.42993L0.196487 1.00052C0.137486 0.949341 0.089634 0.88658 0.0559004 0.816134C0.0221669 0.745689 0.00327181 0.669062 0.00038851 0.591009C-0.00249479 0.512956 0.0106951 0.435144 0.0391392 0.362401C0.0675833 0.289659 0.110675 0.223538 0.165739 0.168144C0.220803 0.11275 0.286665 0.0692654 0.359236 0.0403876C0.431808 0.0115097 0.50954 -0.00214422 0.587608 0.000273048C0.665677 0.00269032 0.742416 0.0211268 0.813061 0.0544391C0.883707 0.0877515 0.946752 0.135229 0.998284 0.193923L4.01617 3.20769Z"
        fill="currentColor"
      />
    </svg>
  );
}

function NavIcon({
  src,
  alt = "",
  className,
}: {
  src: string;
  alt?: string;
  className?: string;
}) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} className={cn("block max-w-none object-contain", className)} />
  );
}

export function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div
      className="relative flex h-12 items-center justify-center px-4 lg:px-[75px]"
      style={{
        backgroundColor: "#150d30",
        backgroundImage:
          "radial-gradient(ellipse 80% 120% at 60% 50%, rgba(200,0,232,0.13) 0%, rgba(0,102,255,0) 70%)",
      }}
    >
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 lg:gap-x-8">
        <div className="flex items-center gap-2.5">
          <NavIcon
            src={navAssets.missionLogo}
            alt="Mission Possible"
            className="h-[34px] w-[117px] object-contain object-left"
          />
          <span className="font-[family-name:var(--font-roboto-condensed)] text-[17px] font-light italic tracking-tight text-white uppercase">
            {promoContent.liveLabel}
          </span>
          <span className="size-3 shrink-0 rounded-full bg-[#e80584]" aria-hidden />
        </div>

        <p className="hidden text-[15px] leading-normal text-white sm:block">
          {promoContent.headline}{" "}
          <strong className="font-semibold">{promoContent.headlineHighlight}</strong>
        </p>

        <span className="hidden h-6 w-px shrink-0 bg-white/30 lg:block" aria-hidden />

        <p className="hidden text-[15px] leading-normal text-white lg:block">
          <span aria-hidden>🎁 </span>
          {promoContent.reward}{" "}
          <strong className="font-semibold">{promoContent.rewardHighlight}</strong>{" "}
          {promoContent.rewardSuffix}
        </p>

        <Link
          href={promoContent.ctaHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex h-[30px] shrink-0 items-center gap-1.5 rounded-2xl border border-[#17a5fb] px-4 text-sm font-medium text-white transition-colors hover:bg-white/5"
        >
          {promoContent.ctaLabel}
          <NavIcon src={navAssets.launchArrow} alt="" className="size-4" />
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setVisible(false)}
        className="absolute top-1/2 right-4 -translate-y-1/2 text-white/80 transition-colors hover:text-white lg:right-5"
        aria-label="Dismiss announcement"
      >
        <X className="size-5" strokeWidth={1.75} />
      </button>
    </div>
  );
}

function NavItem({
  label,
  href,
  hasDropdown,
  menuId,
  isOpen,
  isActive,
  isCurrentPage,
  onToggle,
  onNavigate,
  className,
  buttonRef,
}: NavLinkItem & {
  isOpen?: boolean;
  isActive?: boolean;
  isCurrentPage?: boolean;
  onToggle?: () => void;
  onNavigate?: () => void;
  className?: string;
  buttonRef?: (el: HTMLButtonElement | null) => void;
}) {
  const sharedClass = cn(
    "group relative flex min-w-[100px] flex-col items-center px-2 text-[15px] font-medium tracking-[-0.02em] transition-colors",
    isActive ? "text-[#17a5fb]" : "text-black hover:text-[#17a5fb]",
    className,
  );

  const inner = (
    <>
      <span className="flex items-center justify-center gap-1 py-8">
        {label}
        {hasDropdown && (
          <NavChevron
            open={isOpen}
            className={isActive ? "text-[#17a5fb]" : undefined}
          />
        )}
      </span>
      <span
        className={cn(
          "h-1 w-full rounded-[3px] bg-[#17a5fb] transition-opacity",
          isCurrentPage ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
    </>
  );

  if (hasDropdown && menuId && onToggle) {
    return (
      <button
        ref={buttonRef}
        type="button"
        onClick={onToggle}
        className={sharedClass}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-current={isCurrentPage ? "page" : undefined}
      >
        {inner}
      </button>
    );
  }

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={sharedClass}
      aria-current={isCurrentPage ? "page" : undefined}
    >
      {inner}
    </Link>
  );
}

function ContactButton({ className }: { className?: string }) {
  return (
    <Link
      href="/#contact"
      className={cn(
        "inline-flex h-[38px] items-center justify-center rounded-[22px] bg-[#17a5fb] px-5 text-sm font-medium tracking-[-0.02em] text-white transition-colors hover:bg-[#1298eb]",
        className,
      )}
    >
      Contact us
    </Link>
  );
}

export function PrimaryNav() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<NavMenuId | null>(null);
  const [openMenu, setOpenMenu] = useState<NavMenuId | null>(null);
  const [dropdownLeft, setDropdownLeft] = useState<number | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const navTriggerRefs = useRef<Partial<Record<NavMenuId, HTMLButtonElement>>>({});

  const closeMenu = useCallback(() => setOpenMenu(null), []);

  const toggleMenu = useCallback((menuId: NavMenuId) => {
    setOpenMenu((current) => (current === menuId ? null : menuId));
  }, []);

  const activeMenu = openMenu ? getMenuById(openMenu) : null;

  useLayoutEffect(() => {
    if (!openMenu || !activeMenu || !headerRef.current) {
      setDropdownLeft(null);
      return;
    }

    if (activeMenu.dropdownAlign !== "trigger") {
      setDropdownLeft(null);
      return;
    }

    const updatePosition = () => {
      const trigger = navTriggerRefs.current[openMenu];
      const header = headerRef.current;
      if (!trigger || !header) return;

      const headerRect = header.getBoundingClientRect();
      const triggerRect = trigger.getBoundingClientRect();
      const centerX = triggerRect.left + triggerRect.width / 2 - headerRect.left;
      setDropdownLeft(centerX);
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    return () => window.removeEventListener("resize", updatePosition);
  }, [openMenu, activeMenu]);

  useEffect(() => {
    if (!openMenu) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };

    const onPointerDown = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [openMenu, closeMenu]);

  return (
    <div ref={headerRef} className="relative border-b border-[#e5e5e5] bg-white">
      <div className="mx-auto flex h-[84px] max-w-[1440px] items-center justify-between gap-4 px-5 lg:px-[30px]">
        <Link href="/" className="shrink-0" aria-label="CloudKeeper home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={navAssets.logo}
            alt="CloudKeeper"
            width={185}
            height={40}
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden flex-1 items-center justify-center xl:flex" aria-label="Primary">
          {navLinks.map((item) => {
            const routeActive = isNavRouteActive(item, pathname);
            return (
              <NavItem
                key={item.label}
                {...item}
                isOpen={item.menuId === openMenu}
                isActive={routeActive || item.menuId === openMenu}
                isCurrentPage={routeActive}
                onToggle={item.menuId ? () => toggleMenu(item.menuId!) : undefined}
                buttonRef={
                  item.menuId
                    ? (el) => {
                        if (el) navTriggerRefs.current[item.menuId!] = el;
                      }
                    : undefined
                }
              />
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-4 xl:flex">
          <button
            type="button"
            className="flex size-11 items-center justify-center rounded-full transition-colors hover:bg-[#f4fbff]"
            aria-label="Search"
          >
            <NavIcon src={navAssets.searchIcon} alt="" className="size-11" />
          </button>
          <ContactButton />
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="xl:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(100%,20rem)] overflow-y-auto">
            <SheetHeader>
              <SheetTitle className="text-left">Menu</SheetTitle>
            </SheetHeader>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Mobile">
              {navLinks.map((item) => {
                const routeActive = isNavRouteActive(item, pathname);

                if (item.menuId) {
                  const expanded = mobileExpanded === item.menuId;
                  const menu = getMenuById(item.menuId);

                  return (
                    <div key={item.label}>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileExpanded((current) =>
                            current === item.menuId ? null : item.menuId!,
                          )
                        }
                        className={cn(
                          "flex w-full items-center justify-between py-3 text-[15px] font-medium transition-colors hover:text-[#17a5fb]",
                          routeActive ? "text-[#17a5fb]" : "text-black",
                        )}
                        aria-expanded={expanded}
                        aria-current={routeActive ? "page" : undefined}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 transition-transform",
                            routeActive ? "text-[#17a5fb]" : "text-[#777777]",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                      {expanded && (
                        <NavMobileMenuBody
                          menu={menu}
                          onNavigate={() => setMobileOpen(false)}
                        />
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "py-3 text-[15px] font-medium transition-colors hover:text-[#17a5fb]",
                      routeActive ? "text-[#17a5fb]" : "text-black",
                    )}
                    aria-current={routeActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <ContactButton className="mt-4 w-full" />
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {activeMenu && (
        <div className="absolute inset-x-0 top-full z-50 hidden px-5 pb-6 pt-4 xl:block">
          <div
            className={cn(
              dropdownLeft != null && "absolute -translate-x-1/2",
              dropdownLeft == null && "flex justify-center",
            )}
            style={dropdownLeft != null ? { left: dropdownLeft } : undefined}
          >
            <NavDropdownPanel menu={activeMenu} onNavigate={closeMenu} />
          </div>
        </div>
      )}
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white">
      <AnnouncementBar />
      <PrimaryNav />
    </header>
  );
}
