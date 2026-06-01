"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectMedia } from "@/data/projects";
import { PlayIcon, GalleryIcon, CloseIcon, ChevronLeft, ChevronRight } from "./icons";

export function MediaViewer({ media, title }: { media: ProjectMedia; title: string }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const count = media.slides.length;
  const hasVideo = media.slides.some((s) => s.type === "video");

  const go = useCallback(
    (dir: number) => setIndex((i) => (i + dir + count) % count),
    [count]
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
      else if (e.key === "ArrowRight") go(1);
      else if (e.key === "ArrowLeft") go(-1);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, go]);

  const openAt = (i: number) => {
    setIndex(i);
    setOpen(true);
  };

  const slide = media.slides[index];

  return (
    <>
      {/* Card thumbnail */}
      <button
        type="button"
        onClick={() => openAt(0)}
        aria-label={`Open ${title} ${hasVideo ? "demo" : "screenshots"}`}
        className="group/media relative mb-5 block h-44 w-full overflow-hidden rounded-xl border bg-[var(--color-raise)]"
      >
        <Image
          src={media.poster}
          alt={`${title} preview`}
          fill
          sizes="(max-width: 640px) 100vw, 360px"
          className="object-cover object-top transition-transform duration-500 group-hover/media:scale-[1.03]"
        />
        <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
        {hasVideo && (
          <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-[var(--color-ink)] shadow-lg transition-transform group-hover/media:scale-110">
            <PlayIcon width={20} height={20} className="ml-0.5" />
          </span>
        )}
        <span className="absolute bottom-2.5 left-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/65 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
          {hasVideo ? <PlayIcon width={12} height={12} /> : <GalleryIcon width={12} height={12} />}
          {media.label}
        </span>
      </button>

      {/* Lightbox */}
      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${title} media`}
          className="fixed inset-0 z-[100] flex flex-col bg-black/90 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          {/* Top bar */}
          <div className="flex items-center justify-between px-5 py-4 text-white/80">
            <span className="font-mono text-xs">
              {title} · {index + 1}/{count}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="rounded-full p-2 transition-colors hover:bg-white/10 hover:text-white"
            >
              <CloseIcon width={22} height={22} />
            </button>
          </div>

          {/* Stage */}
          <div
            className="relative flex flex-1 items-center justify-center px-4 pb-2"
            onClick={(e) => e.stopPropagation()}
          >
            {count > 1 && (
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous"
                className="absolute left-2 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:left-5"
              >
                <ChevronLeft width={24} height={24} />
              </button>
            )}

            <div className="relative flex h-full max-h-[78vh] w-full max-w-4xl items-center justify-center">
              {slide.type === "video" ? (
                <video
                  key={slide.src}
                  src={slide.src}
                  poster={slide.poster}
                  controls
                  autoPlay
                  muted
                  playsInline
                  loop
                  className="max-h-[78vh] w-auto rounded-lg shadow-2xl"
                />
              ) : (
                // Plain img: slides vary in aspect ratio (portrait phone shots
                // and small landscape web shots), and these JP/PNGs are already
                // optimized — object-contain + max-* never upscales past native.
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={slide.src}
                  src={slide.src}
                  alt={slide.caption ?? `${title} screenshot ${index + 1}`}
                  className="max-h-[78vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
                />
              )}
            </div>

            {count > 1 && (
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next"
                className="absolute right-2 z-10 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 sm:right-5"
              >
                <ChevronRight width={24} height={24} />
              </button>
            )}
          </div>

          {/* Caption + dots */}
          <div className="px-5 pb-6 pt-2 text-center" onClick={(e) => e.stopPropagation()}>
            {slide.caption && (
              <p className="mx-auto mb-3 max-w-xl text-sm text-white/80">{slide.caption}</p>
            )}
            {count > 1 && (
              <div className="flex items-center justify-center gap-1.5">
                {media.slides.map((s, i) => (
                  <button
                    key={s.src}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`Go to item ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === index ? "w-5 bg-white" : "w-1.5 bg-white/40 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
