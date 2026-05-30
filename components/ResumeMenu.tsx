"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/profile";
import { ArrowUpRight } from "./icons";

/** Dropdown that offers the three track-specific resume PDFs. */
export function ResumeMenu() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="inline-flex items-center gap-2 rounded-full border bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-raise)]"
      >
        <ArrowUpRight width={16} height={16} />
        Resume
        <svg
          width={14}
          height={14}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute bottom-full left-0 z-10 mb-2 w-56 overflow-hidden rounded-xl border bg-[var(--color-surface)] p-1 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.3)]"
        >
          {profile.resumes.map((r) => (
            <a
              key={r.track}
              href={r.file}
              target="_blank"
              rel="noopener noreferrer"
              role="menuitem"
              className="flex items-center justify-between gap-3 rounded-lg px-3 py-2.5 text-sm text-[var(--color-ink)] transition-colors hover:bg-[var(--color-raise)]"
              onClick={() => setOpen(false)}
            >
              <span>
                <span className="font-medium">{r.label}</span>
                <span className="block text-xs text-[var(--color-muted)]">
                  Résumé · PDF
                </span>
              </span>
              <ArrowUpRight width={15} height={15} className="text-[var(--color-muted)]" />
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
