import { profile } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";
import { ResumeMenu } from "./ResumeMenu";

export function Contact() {
  const showLinkedIn = !profile.linkedin.startsWith("FROM MASTER");
  // Lowercase only the first letter so it reads "I'm open to…" while keeping
  // acronyms like AI and iOS intact.
  const availability =
    profile.availability.charAt(0).toLowerCase() + profile.availability.slice(1);

  return (
    <section id="contact" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto w-full max-w-5xl px-6">
        <div className="overflow-hidden rounded-3xl border bg-[var(--color-surface)] p-8 sm:p-14">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-accent)]">
            Contact
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--color-ink)] sm:text-4xl">
            Let&apos;s build something.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
            I&apos;m {availability}. The fastest way to
            reach me is email — happy to share more work, a resume, or hop on a
            call.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-5 py-2.5 text-sm font-medium text-[var(--color-canvas)] transition-opacity hover:opacity-90"
            >
              <MailIcon width={16} height={16} />
              {profile.email}
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
            {showLinkedIn && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-raise)]"
              >
                <LinkedInIcon width={16} height={16} />
                LinkedIn
              </a>
            )}
            <ResumeMenu />
          </div>
        </div>
      </div>
    </section>
  );
}
