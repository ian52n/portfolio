/**
 * Core personal data for the portfolio.
 * Sourced from Ian Norris's master profile.
 */

export type Track = "ios" | "fullstack" | "data";

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
  /** Primary positioning — iOS-first per the chosen strategy. */
  title: "iOS Engineer",
  /** Secondary framing that keeps full-stack + data in view. */
  subtitle: "iOS · Full-Stack · Data Science",
  tagline:
    "I build and ship AI-native products end to end — from an App Store-published SwiftUI app to the full-stack systems and ML behind them.",

  // --- Contact / links -----------------------------------------------------
  email: "ian52n@gmail.com",
  phone: "941-725-8110",
  location: "Flagstaff, AZ",
  domain: "ian.ai-editor.app",
  github: "https://github.com/ian52n",
  githubHandle: "ian52n",
  linkedin: "https://www.linkedin.com/in/ian-norris1",
  resumeUrl: "/Ian-Norris-iOS-Resume.pdf",
  /** Track-specific resumes, ordered by priority (iOS first). */
  resumes: [
    { label: "iOS", track: "ios", file: "/Ian-Norris-iOS-Resume.pdf" },
    { label: "Full-Stack", track: "fullstack", file: "/Ian-Norris-FullStack-Resume.pdf" },
    { label: "Data Science", track: "data", file: "/Ian-Norris-DataScientist-Resume.pdf" },
  ],

  // --- Bio -----------------------------------------------------------------
  summary:
    "I'm an iOS engineer who ships. As founder of AI Editor LLC, I designed, built, and published AI Photo Editor to the App Store as sole engineer in under three months — now 800+ users with a zero crash rate across every production release. I also work across the stack: at AssetMark (financial services) I built end-to-end features in React/TypeScript, .NET Core, and PostgreSQL for a platform serving 10,000+ users. Underneath it all is a research-grade quantitative background — an M.S. in Mathematics (4.0 GPA) and a team I led that lifted an LLM evaluation system from 50% to 96% accuracy.",

  availability: "Open to iOS, full-stack, and data roles",

  stats: [
    { value: "800+", label: "users on my shipped iOS app" },
    { value: "0", label: "crashes in production" },
    { value: "10K+", label: "users served at AssetMark" },
    { value: "4.0", label: "GPA · M.S. Mathematics" },
  ] satisfies Stat[],
} as const;

export const tracks: TrackInfo[] = [
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
      "React/TypeScript frontends on .NET Core and PostgreSQL backends, serving 10,000+ users in production. RBAC, REST APIs, Kafka event streaming, and 85% test coverage.",
    stack: ["React", "TypeScript", ".NET Core", "Entity Framework", "PostgreSQL", "Kafka"],
  },
  {
    id: "data",
    label: "Data Science",
    headline: "Mathematics, models, and measurable accuracy",
    blurb:
      "M.S. Mathematics (4.0). Led a 5-person team that raised an LLM evaluation system from 50% to 96% accuracy, plus ML forecasting, HPC numerics, and a published research paper.",
    stack: ["Python", "PyTorch", "NumPy", "Pandas", "LLM evaluation", "HPC"],
  },
];
