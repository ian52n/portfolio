import type { Track } from "./profile";

export type MediaSlide =
  | { type: "video"; src: string; poster: string; caption?: string }
  | { type: "image"; src: string; caption?: string };

export interface ProjectMedia {
  /** Thumbnail shown on the card. */
  poster: string;
  /** Affordance label, e.g. "Watch 30s demo" or "9 screenshots". */
  label: string;
  /** Frames the card thumbnail correctly. */
  aspect: "portrait" | "landscape";
  /** Ordered slides shown in the lightbox. */
  slides: MediaSlide[];
}

export interface Project {
  id: string;
  name: string;
  /** Short one-liner under the title. */
  tagline: string;
  /** 1–3 sentence description. */
  description: string;
  /** Which job tracks this project supports (drives filtering). */
  tracks: Track[];
  /** Tech stack chips. */
  tech: string[];
  /** Punchy bullet highlights. */
  highlights: string[];
  repoUrl: string;
  liveUrl?: string;
  /** Private repos show a non-clickable "Private repo" indicator (no 404 link). */
  isPrivate?: boolean;
  /** Optional screenshots / demo video. */
  media?: ProjectMedia;
  /** Featured projects render larger / first. */
  featured?: boolean;
  /** Year or range for ordering/context. */
  period?: string;
}

export const projects: Project[] = [
  {
    id: "trace",
    name: "Trace",
    tagline: "An AI-native travel app for runners — runs as destinations, not routes.",
    description:
      "An app where every entry is a run with a story — a curated, Atlas Obscura-voice feed of iconic and hidden runs worldwide, plus a 'generate me a local run' feature: drop a pin, pick a distance and a vibe, and a Cloudflare Worker stitches a real walking loop through nearby POIs (Google Places + Directions) and has Claude write it up. I built it in two stacks: a native SwiftUI version and a cross-platform React Native (Expo) version running on iOS and Android — both implementing the same product spec.",
    tracks: ["ios", "fullstack", "data"],
    tech: [
      "Swift",
      "SwiftUI",
      "React Native",
      "Expo",
      "TypeScript",
      "Cloudflare Workers",
      "Claude API",
      "Google Maps APIs",
    ],
    highlights: [
      "Built in two frameworks from one product spec — native SwiftUI for iOS, and React Native (Expo) running natively across iOS and Android",
      "Server-side generation pipeline keeps API keys off-device and produces identical results on every platform",
      "Local-first state: bundled JSON for curated runs, AsyncStorage for saved + generated runs — no accounts, no server state",
    ],
    repoUrl: "https://github.com/ian52n/trace",
    media: {
      poster: "/media/trace/demo-poster.jpg",
      label: "Watch demo",
      aspect: "portrait",
      slides: [
        {
          type: "video",
          src: "/media/trace/demo.mp4",
          poster: "/media/trace/demo-poster.jpg",
          caption: "Product demo — discover a run, generate one from a pin, and read the result.",
        },
        { type: "image", src: "/media/trace/discover.jpg", caption: "The curated atlas of runs." },
        { type: "image", src: "/media/trace/generate.jpg", caption: "Drop a pin, pick a distance and a vibe." },
        { type: "image", src: "/media/trace/detail-generated.jpg", caption: "A generated run, written by Claude." },
      ],
    },
    featured: true,
    period: "2026",
  },
  {
    id: "ai-photo-editing",
    name: "AI Photo Editor",
    tagline: "A generative-AI photo editor, shipped solo to the App Store.",
    description:
      "An iOS app for editing photos with generative AI — built as the founding product of AI Editor LLC. I took it from concept to App Store publication as sole engineer in under three months. It now has 800+ users and a zero crash rate across every production release.",
    tracks: ["ios"],
    tech: ["Swift", "SwiftUI", "Swift Concurrency", "DeepAI API", "On-device ML", "CI/CD"],
    highlights: [
      "800+ users · zero crash rate · sub-6s cold start · ≤500 MB peak memory",
      "Offline-first with on-device image processing and caching; AI features via the DeepAI API",
      "Profiled and fixed performance bottlenecks with Xcode Instruments; full unit + UI test suite and an App Store CI/CD pipeline",
    ],
    repoUrl: "https://github.com/ian52n/ai_photo_editing",
    liveUrl: "https://ai-editor.app",
    isPrivate: true,
    media: {
      poster: "/media/ai-photo/02-edit-prompt.jpg",
      label: "7 screenshots",
      aspect: "portrait",
      slides: [
        { type: "image", src: "/media/ai-photo/02-edit-prompt.jpg", caption: "Describe an edit in plain language." },
        { type: "image", src: "/media/ai-photo/03-result.jpg", caption: "The result — a new outfit, generated on request." },
        { type: "image", src: "/media/ai-photo/09-share.jpg", caption: "Share or save straight to Photos." },
        { type: "image", src: "/media/ai-photo/04-ai-mode.jpg", caption: "Pick how hard the AI works: Standard, Genius, Super Genius." },
        { type: "image", src: "/media/ai-photo/05-prompt-enhancer.jpg", caption: "One-tap style presets." },
        { type: "image", src: "/media/ai-photo/06-upscale.jpg", caption: "AI upscaling — Real-ESRNET or fast Lanczos." },
        { type: "image", src: "/media/ai-photo/07-quick-actions.jpg", caption: "Quick actions: share, save, auto-save." },
      ],
    },
    featured: true,
    period: "2025",
  },
  {
    id: "sair-competition",
    name: "SAIR Math Distillation Challenge",
    tagline: "Engineering LLM 'cheat sheets' for Terence Tao's math reasoning competition.",
    description:
      "An entry in the SAIR Foundation Mathematics Distillation Challenge (organized by Terence Tao and Damek Davis). The task: build a ≤10 KB plain-text instruction sheet that helps a small open model correctly decide equational implications over magmas, drawn from the 22M-pair Equational Theories Project.",
    tracks: ["data"],
    tech: ["Python", "Jupyter", "LLM eval", "Ollama", "Prompt engineering"],
    highlights: [
      "Data-driven strategy: exploited structural priors (≈63% FALSE base rate, ~32% singleton laws) to push accuracy",
      "Iterated against a 300-problem benchmark, targeting the hard subset where most teams plateau",
      "Stage 2 extends the work to machine-verifiable Lean 4 certificates",
    ],
    repoUrl: "https://github.com/ian52n/sair-competition",
    featured: true,
    period: "2026",
  },
  {
    id: "user-group",
    name: "User Group Management System",
    tagline: "Full-stack RBAC admin tool — .NET 8 API + React/TypeScript frontend.",
    description:
      "A full-stack web application for managing user groups, permissions, and custom attributes within an organization. RESTful .NET 8 backend, modern React + TypeScript frontend, PostgreSQL storage, and clean architecture with maintainable testing patterns.",
    tracks: ["fullstack"],
    tech: ["C#", ".NET 8", "React", "TypeScript", "PostgreSQL", "REST"],
    highlights: [
      "End-to-end CRUD: search groups, manage read/write/delete/execute permissions, configure attributes",
      "Clean-architecture backend with a minimal, maintainable test suite",
    ],
    repoUrl: "https://github.com/ian52n/user-group",
    isPrivate: true,
    media: {
      poster: "/media/user-group/ug-overview.png",
      label: "3 screenshots",
      aspect: "landscape",
      slides: [
        { type: "image", src: "/media/user-group/ug-overview.png", caption: "Group list with permissions and custom attributes, searchable and paginated." },
        { type: "image", src: "/media/user-group/ug-permissions.png", caption: "Granular read / write / delete / execute permissions per group." },
        { type: "image", src: "/media/user-group/ug-attributes.png", caption: "Configurable custom attributes per group." },
      ],
    },
    period: "2025",
  },
  {
    id: "todo-ai-model",
    name: "Todo AI — Calendar Assistant",
    tagline: "Natural-language calendar management that compiles chat into SQL.",
    description:
      "An AI calendar assistant that turns natural-language requests into CRUD operations on a PostgreSQL store. A Streamlit chat UI sits over an LLM-driven pipeline that generates and runs SQL against calendar entries.",
    tracks: ["fullstack", "data"],
    tech: ["Python", "Streamlit", "Ollama", "OpenAI API", "PostgreSQL", "Docker"],
    highlights: [
      "NL → SQL pipeline with separate query-processing and SQL-generation stages",
      "Containerized with docker-compose for a one-command local stack",
    ],
    repoUrl: "https://github.com/ian52n/todo-ai-model",
    period: "2025",
  },
  {
    id: "vpn-frontend",
    name: "P2P VPN",
    tagline: "A peer-to-peer VPN where every user can also be an exit node.",
    description:
      "A WireGuard-based VPN (an AI Editor LLC project) where users connect as clients or serve as exit nodes for others. A native Android client in Kotlin pairs with Go backend services; the tunnel implements the WireGuard handshake with dynamic key exchange and forwards both TCP and UDP traffic.",
    tracks: ["fullstack"],
    tech: ["Kotlin", "Android", "Go", "WireGuard", "BoringTun", "Networking"],
    highlights: [
      "Exit node runs via BoringTun with no root required; client uses the WireGuard Android library",
      "Verified end-to-end: HTTPS browsing and DNS resolution work through the peer tunnel",
    ],
    repoUrl: "https://github.com/ian52n/vpn-frontend",
    period: "2026",
  },
];
