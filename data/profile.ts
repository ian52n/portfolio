/**
 * Core personal data for the portfolio.
 * Sourced from Ian Norris's master profile.
 */

export type Track = "ai" | "ios" | "fullstack" | "data";

export interface TrackInfo {
  id: Track;
  label: string;
  /** Short headline shown on the track card. */
  headline: string;
  /** One- or two-sentence pitch for this specialty. */
  blurb: string;
  /** Representative tools/skills for the track. */
  stack: string[];
}

export interface Stat {
  value: string;
  label: string;
}

export const profile = {
  name: "Ian Norris",
  /** Primary positioning — AI + iOS lead per the chosen strategy. */
  title: "AI & iOS Engineer",
  /** Secondary framing that keeps full-stack in view. */
  subtitle: "AI · iOS · Full-Stack",
  tagline:
    "I build AI features that ship to real users — not demos. I've shipped a generative-AI app to the App Store and built the LLM pipelines and full-stack systems that power it.",

  // --- Contact / links -----------------------------------------------------
  email: "ian52n@gmail.com",
  phone: "941-725-8110",
  location: "Flagstaff, AZ",
  domain: "ian.ai-editor.app",
  github: "https://github.com/ian52n",
  githubHandle: "ian52n",
  linkedin: "https://www.linkedin.com/in/ian-norris1",
  resumeUrl: "/Ian-Norris-AI-Resume.pdf",
  /** Track-specific resumes, ordered by priority (AI first). Data Science stays
   *  available for occasional data roles even though it's no longer a track card. */
  resumes: [
    { label: "AI Engineer", track: "ai", file: "/Ian-Norris-AI-Resume.pdf" },
    { label: "iOS", track: "ios", file: "/Ian-Norris-iOS-Resume.pdf" },
    { label: "Full-Stack", track: "fullstack", file: "/Ian-Norris-FullStack-Resume.pdf" },
    { label: "Data Science", track: "data", file: "/Ian-Norris-DataScientist-Resume.pdf" },
  ],

  // --- Bio -----------------------------------------------------------------
  summary:
    "I'm an AI and iOS engineer who ships. As founder of AI Editor LLC, I designed, built, and published AI Photo Editing — a generative-AI photo editor — to the App Store as sole engineer in under three months, now 800+ users with a zero crash rate across every production release. My AI work runs deeper than API calls: a server-side Claude pipeline in Trace that turns a dropped pin into a written run, and a 5-person team I led that lifted an LLM evaluation system from 50% to 96% accuracy. I also work across the stack — at AssetMark (financial services) I built end-to-end features in React/TypeScript, .NET Core, and PostgreSQL for a platform serving 10,000+ users — all on a research-grade quantitative foundation: an M.S. in Mathematics (4.0 GPA).",

  availability: "Open to AI, iOS, and full-stack roles",

  stats: [
    { value: "800+", label: "users on my shipped iOS app" },
    { value: "0", label: "crashes in production" },
    { value: "10K+", label: "users served at AssetMark" },
    { value: "4.0", label: "GPA · M.S. Mathematics" },
  ] satisfies Stat[],
} as const;

export const tracks: TrackInfo[] = [
  {
    id: "ai",
    label: "AI Engineering",
    headline: "Applied AI that ships to real users",
    blurb:
      "A generative-AI photo editor live on the App Store, plus Trace's server-side Claude pipeline that turns a dropped pin into a written run. Led a 5-person team that lifted an LLM evaluation system from 50% to 96% accuracy — on an M.S. Mathematics (4.0) foundation.",
    stack: ["Claude API", "OpenAI API", "Prompt engineering", "LLM evaluation", "PyTorch", "Cloudflare Workers"],
  },
  {
    id: "ios",
    label: "iOS Development",
    headline: "Shipped to the App Store, not just a demo",
    blurb:
      "Sole engineer behind a published SwiftUI app: 800+ users, zero crash rate, sub-6s cold start, on-device image processing, and an offline-first cache. Comfortable from concept to App Store Connect.",
    stack: ["Swift", "SwiftUI", "UIKit", "Swift Concurrency", "Instruments", "App Store Connect"],
  },
  {
    id: "fullstack",
    label: "Full-Stack",
    headline: "From the UI down to the database",
    blurb:
      "React/TypeScript frontends on .NET Core and PostgreSQL backends, serving 10,000+ users in production. RBAC, REST APIs, and 85% test coverage.",
    stack: ["React", "TypeScript", ".NET Core", "Entity Framework", "PostgreSQL"],
  },
];