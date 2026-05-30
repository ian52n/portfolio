import type { ReactNode } from "react";

interface SectionProps {
  id: string;
  eyebrow?: string;
  title?: string;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
}

/** Standard section shell with consistent spacing and an optional header. */
export function Section({ id, eyebrow, title, intro, children, className }: SectionProps) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className ?? ""}`}>
      <div className="mx-auto w-full max-w-5xl px-6">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-2xl">
            {eyebrow && (
              <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
                {title}
              </h2>
            )}
            {intro && (
              <div className="mt-4 text-base leading-relaxed text-[var(--color-muted)]">
                {intro}
              </div>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
