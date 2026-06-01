import { tracks } from "@/data/profile";
import { trackIcon } from "./icons";

/** Three specialty cards, ordered iOS-first. */
export function Tracks() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-[var(--color-line)] sm:grid-cols-3">
        {tracks.map((t) => {
          const Icon = trackIcon[t.id];
          return (
            <div
              key={t.id}
              className="flex flex-col bg-[var(--color-surface)] p-6 sm:p-7"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)]">
                  <Icon width={18} height={18} />
                </span>
              </div>
              <h3 className="mt-4 text-base font-semibold text-[var(--color-ink)]">
                {t.label}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--color-ink-soft)]">
                {t.headline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">
                {t.blurb}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {t.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-[var(--color-raise)] px-2 py-1 font-mono text-[11px] text-[var(--color-ink-soft)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
