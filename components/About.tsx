import { profile } from "@/data/profile";
import { experience, education } from "@/data/experience";
import { Section } from "./Section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title={`A bit about ${profile.name.split(" ")[0]}`}>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        {/* Summary */}
        <div className="text-base leading-relaxed text-[var(--color-ink-soft)]">
          <p>{profile.summary}</p>

          <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 text-sm">
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                Location
              </dt>
              <dd className="mt-1 text-[var(--color-ink)]">{profile.location}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                Focus
              </dt>
              <dd className="mt-1 text-[var(--color-ink)]">{profile.subtitle}</dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                Email
              </dt>
              <dd className="mt-1">
                <a
                  href={`mailto:${profile.email}`}
                  className="text-[var(--color-accent)] hover:underline"
                >
                  {profile.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="font-mono text-xs uppercase tracking-wider text-[var(--color-muted)]">
                GitHub
              </dt>
              <dd className="mt-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-accent)] hover:underline"
                >
                  @{profile.githubHandle}
                </a>
              </dd>
            </div>
          </dl>
        </div>

        {/* Experience + Education timeline */}
        <div className="space-y-10">
          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Experience
            </h3>
            <ol className="space-y-6 border-l pl-5">
              {experience.map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.42rem] top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-canvas)]" />
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    {e.role}
                  </p>
                  <p className="text-sm text-[var(--color-ink-soft)]">
                    {e.org}
                    {e.location ? ` · ${e.location}` : ""}
                  </p>
                  <p className="font-mono text-xs text-[var(--color-muted)]">
                    {e.period}
                  </p>
                  {e.bullets.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {e.bullets.map((b) => (
                        <li
                          key={b}
                          className="text-sm leading-relaxed text-[var(--color-muted)]"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
              Education
            </h3>
            <ol className="space-y-6 border-l pl-5">
              {education.map((e, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[1.42rem] top-1.5 h-2 w-2 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-canvas)]" />
                  <p className="text-sm font-semibold text-[var(--color-ink)]">
                    {e.degree}
                  </p>
                  <p className="text-sm text-[var(--color-ink-soft)]">
                    {e.school}
                    {e.location ? ` · ${e.location}` : ""}
                  </p>
                  <p className="font-mono text-xs text-[var(--color-muted)]">
                    {e.period}
                  </p>
                  {e.details && e.details.length > 0 && (
                    <ul className="mt-2 space-y-1">
                      {e.details.map((d) => (
                        <li
                          key={d}
                          className="text-sm leading-relaxed text-[var(--color-muted)]"
                        >
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  );
}
