import { profile } from "@/data/profile";
import { GitHubIcon, MailIcon, ArrowUpRight } from "./icons";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      {/* Soft accent wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[480px] bg-gradient-to-b from-[var(--color-accent-soft)] to-transparent"
      />
      <div className="mx-auto w-full max-w-5xl px-6 pb-20 sm:pb-28">
        <div className="animate-rise">
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.08] tracking-tight text-[var(--color-ink)] sm:text-6xl">
            {profile.name}.
            <br />
            <span className="text-[var(--color-muted)]">{profile.subtitle}.</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[var(--color-ink-soft)]">
            {profile.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-canvas)] transition-opacity hover:opacity-90"
            >
              View my work
              <ArrowUpRight width={16} height={16} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full border bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-raise)]"
            >
              <MailIcon width={16} height={16} />
              Email me
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-raise)]"
            >
              <GitHubIcon width={16} height={16} />
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
