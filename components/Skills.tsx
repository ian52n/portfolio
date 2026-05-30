import { skillGroups } from "@/data/skills";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Toolbox"
      title="Skills & technologies"
      intro="The stack I reach for, grouped by domain and ordered strongest-first."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border bg-[var(--color-line)] sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g) => (
          <div key={g.category} className="bg-[var(--color-surface)] p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              {g.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md bg-[var(--color-raise)] px-2.5 py-1 text-sm text-[var(--color-ink-soft)]"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
