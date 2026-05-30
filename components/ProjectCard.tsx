import type { Project } from "@/data/projects";
import { GitHubIcon, ArrowUpRight, StarIcon } from "./icons";

const trackLabel: Record<string, string> = {
  ios: "iOS",
  fullstack: "Full-Stack",
  data: "Data Science",
};

export function ProjectCard({
  project,
  stars,
}: {
  project: Project;
  stars?: number;
}) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border bg-[var(--color-surface)] p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)]">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {project.tracks.map((t) => (
            <span
              key={t}
              className="rounded-full bg-[var(--color-accent-soft)] px-2.5 py-0.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[var(--color-accent-ink)]"
            >
              {trackLabel[t]}
            </span>
          ))}
        </div>
        {project.period && (
          <span className="shrink-0 font-mono text-xs text-[var(--color-muted)]">
            {project.period}
          </span>
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-[var(--color-ink)]">
        {project.name}
      </h3>
      <p className="mt-1 text-sm font-medium text-[var(--color-ink-soft)]">
        {project.tagline}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
        {project.description}
      </p>

      {project.highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink-soft)]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-accent)]" />
              {h}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-md bg-[var(--color-raise)] px-2 py-1 font-mono text-[11px] text-[var(--color-ink-soft)]"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t pt-4">
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
        >
          <GitHubIcon width={16} height={16} />
          Code
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent)]"
          >
            <ArrowUpRight width={16} height={16} />
            Live
          </a>
        )}
        {typeof stars === "number" && stars > 0 && (
          <a
            href={`${project.repoUrl}/stargazers`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${stars} GitHub ${stars === 1 ? "star" : "stars"}`}
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-accent)]"
          >
            <StarIcon className="text-amber-500" />
            {stars}
          </a>
        )}
      </div>
    </article>
  );
}
