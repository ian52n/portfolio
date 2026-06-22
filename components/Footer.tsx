import { profile } from "@/data/profile";
import { GitHubIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <a
          href="https://github.com/ian52n/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink)]"
        >
          <GitHubIcon width={14} height={14} />
          Source
        </a>
      </div>
    </footer>
  );
}
