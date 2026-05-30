import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-3 px-6 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-[var(--color-muted)]">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
