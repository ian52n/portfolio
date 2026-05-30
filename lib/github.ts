import { projects } from "@/data/projects";

/** Extracts "owner/repo" from a GitHub URL. */
function parseRepoSlug(url: string): string | null {
  const m = url.match(/github\.com\/([^/]+\/[^/]+?)(?:\.git)?(?:\/|$)/);
  return m ? m[1] : null;
}

/**
 * Fetches live star counts for each project's repo, keyed by project id.
 * Runs server-side at build/ISR time (revalidated hourly). Failures degrade
 * gracefully to 0 so the page never breaks on a network/API hiccup.
 */
export async function getRepoStars(): Promise<Record<string, number>> {
  const entries = await Promise.all(
    projects.map(async (p) => {
      const slug = parseRepoSlug(p.repoUrl);
      if (!slug) return [p.id, 0] as const;
      try {
        const res = await fetch(`https://api.github.com/repos/${slug}`, {
          headers: { Accept: "application/vnd.github+json" },
          next: { revalidate: 3600 },
        });
        if (!res.ok) return [p.id, 0] as const;
        const data = (await res.json()) as { stargazers_count?: number };
        return [p.id, data.stargazers_count ?? 0] as const;
      } catch {
        return [p.id, 0] as const;
      }
    })
  );
  return Object.fromEntries(entries);
}
