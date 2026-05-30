"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/profile";
import { GitHubIcon } from "./icons";

const links = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b bg-[var(--color-canvas)]/80 backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="font-mono text-sm font-medium tracking-tight text-[var(--color-ink)]"
        >
          {profile.name.toLowerCase().replace(/\s+/g, ".")}
        </a>

        <div className="flex items-center gap-1">
          <ul className="hidden items-center gap-1 sm:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="ml-1 rounded-md p-2 text-[var(--color-ink-soft)] transition-colors hover:text-[var(--color-ink)]"
          >
            <GitHubIcon width={18} height={18} />
          </a>
          <a
            href="#contact"
            className="ml-1 rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-[var(--color-canvas)] transition-opacity hover:opacity-90"
          >
            Get in touch
          </a>
        </div>
      </nav>
    </header>
  );
}
