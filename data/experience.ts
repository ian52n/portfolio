/** Work history and education, sourced from the master profile. */

export interface ExperienceItem {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  location?: string;
  period: string;
  details?: string[];
}

export const experience: ExperienceItem[] = [
  {
    role: "Lead Engineer & Founder",
    org: "AI Editor LLC",
    location: "Remote",
    period: "2025 – Present",
    bullets: [
      "Designed, built, and shipped AI Photo Editing (iOS) to the App Store as sole engineer in under three months — 800+ users, zero crash rate, sub-6s cold start.",
      "Building a peer-to-peer VPN with a native Android (Kotlin) client and Go backend services.",
    ],
  },
  {
    role: "Full-Stack Engineer",
    org: "AssetMark",
    location: "Concord, CA · Financial services",
    period: "2025",
    bullets: [
      "Built end-to-end features across React/TypeScript, .NET Core (C#) with Entity Framework, and PostgreSQL for a platform serving 10,000+ users, at 85% unit-test coverage.",
      "Designed a scalable RBAC permission schema and shipped a legacy-integration layer (iframe + postMessage) bridging ASP.NET and new .NET Core/React apps; used Kafka for inter-service event streaming.",
    ],
  },
  {
    role: "Software Engineer",
    org: "Practice Defenders",
    location: "Remote · Electronic health records",
    period: "2025",
    bullets: [
      "Built API integrations and automation pipelines across external EHR systems, focused on reliability and consistent data handling across distributed services.",
    ],
  },
  {
    role: "Software Developer (Volunteer)",
    org: "AESOP Afghanistan",
    location: "Remote",
    period: "2023 – 2024",
    bullets: [
      "Built Python backend services and API-driven workflows (Google APIs); refactored legacy systems and introduced automated testing.",
    ],
  },
  {
    role: "Graduate Teaching Assistant",
    org: "Northern Arizona University",
    location: "Flagstaff, AZ · Mathematics",
    period: "2024 – 2026",
    bullets: [
      "Taught and mentored undergraduate mathematics students, and mentored student teams in the DataFest data-science competition.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    degree: "M.S. Mathematics, With Distinction",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ",
    period: "May 2026 · GPA 4.0",
  },
  {
    degree: "B.S. Mathematics",
    school: "Northern Arizona University",
    location: "Flagstaff, AZ",
    period: "GPA 3.8",
    details: [
      "Published: “Biased weak polyform achievement games,” DMTCS, 2014.",
    ],
  },
];
