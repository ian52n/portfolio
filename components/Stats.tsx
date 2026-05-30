import { profile } from "@/data/profile";

/** Credibility strip — concrete numbers recruiters scan for. */
export function Stats() {
  return (
    <div className="mx-auto w-full max-w-5xl px-6">
      <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border bg-[var(--color-line)] sm:grid-cols-4">
        {profile.stats.map((s) => (
          <div key={s.label} className="bg-[var(--color-surface)] p-6 text-center">
            <dt className="sr-only">{s.label}</dt>
            <dd>
              <span className="block text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {s.value}
              </span>
              <span className="mt-1 block text-xs leading-snug text-[var(--color-muted)]">
                {s.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
