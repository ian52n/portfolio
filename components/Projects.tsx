"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import type { Track } from "@/data/profile";
import { ProjectCard } from "./ProjectCard";

type Filter = "all" | Track;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ios", label: "iOS" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "data", label: "Data Science" },
];

export function Projects() {
  const [active, setActive] = useState<Filter>("all");

  const shown = useMemo(() => {
    const list =
      active === "all"
        ? projects
        : projects.filter((p) => p.tracks.includes(active));
    return [...list].sort((a, b) => a.priority - b.priority);
  }, [active]);

  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <header className="mb-10 max-w-2xl">
        <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
          Selected work
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
          Projects
        </h2>
        <p className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
          Shipping products across mobile, web, and applied AI. Filter by the
          kind of work you care about.
        </p>
      </header>

      <div
        role="tablist"
        aria-label="Filter projects"
        className="mb-8 flex flex-wrap gap-2"
      >
        {filters.map((f) => {
          const isActive = active === f.id;
          return (
            <button
              key={f.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => setActive(f.id)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                isActive
                  ? "border-[var(--color-ink)] bg-[var(--color-ink)] text-[var(--color-canvas)]"
                  : "bg-[var(--color-surface)] text-[var(--color-ink-soft)] hover:bg-[var(--color-raise)]"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {shown.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}
