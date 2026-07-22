"use client";

import { useEffect, useState } from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { Maximize2, Minimize2, X } from "lucide-react";

import { Dialog, DialogOverlay, DialogPortal, DialogTitle } from "@/components/ui/dialog";
import { getYouTubeEmbedUrl } from "@/lib/youtube";
import { cn } from "@/lib/utils";

type VideoPlayerModalProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  videoHref: string;
  title: string;
};

type PlayerSize = "default" | "large";

export function VideoPlayerModal({
  open,
  onOpenChange,
  videoHref,
  title,
}: VideoPlayerModalProps) {
  const [size, setSize] = useState<PlayerSize>("default");
  const embedUrl = getYouTubeEmbedUrl(videoHref, open);

  useEffect(() => {
    if (!open) {
      setSize("default");
    }
  }, [open]);

  const toggleSize = () => {
    setSize((current) => (current === "default" ? "large" : "default"));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogPortal>
        <DialogOverlay className="bg-black/75 backdrop-blur-sm" />
        <DialogPrimitive.Content
          data-slot="dialog-content"
          className={cn(
            "data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
            "fixed left-1/2 top-1/2 z-50 w-full -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-[#0b0b0f] shadow-2xl ring-1 ring-white/10 outline-none duration-200",
            "transition-[max-width] ease-out",
            size === "large"
              ? "max-w-[min(96vw,1280px)]"
              : "max-w-[min(92vw,720px)]",
          )}
          aria-describedby={undefined}
        >
          <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3 sm:px-5">
            <DialogTitle className="truncate pr-2 text-sm font-medium leading-snug text-white sm:text-base">
              {title}
            </DialogTitle>

            <div className="flex shrink-0 items-center gap-1">
              <button
                type="button"
                onClick={toggleSize}
                className="inline-flex size-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17a5fb]/50"
                aria-label={size === "large" ? "Make video smaller" : "Make video larger"}
              >
                {size === "large" ? (
                  <Minimize2 className="size-[18px]" aria-hidden />
                ) : (
                  <Maximize2 className="size-[18px]" aria-hidden />
                )}
              </button>

              <button
                type="button"
                onClick={() => onOpenChange(false)}
                className="inline-flex size-9 items-center justify-center rounded-lg text-white/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#17a5fb]/50"
                aria-label="Close video player"
              >
                <X className="size-[18px]" aria-hidden />
              </button>
            </div>
          </div>

          <div className="relative aspect-video w-full bg-black">
            {open && embedUrl ? (
              <iframe
                key={embedUrl}
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 h-full w-full border-0"
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center px-6 text-center text-sm text-white/70">
                Video could not be loaded.
              </div>
            )}
          </div>
        </DialogPrimitive.Content>
      </DialogPortal>
    </Dialog>
  );
}
