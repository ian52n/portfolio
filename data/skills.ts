export interface SkillGroup {
  category: string;
  /** Ordered strongest-first. */
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    skills: ["Swift", "Python", "TypeScript", "C#", "Go", "Kotlin", "C++", "Julia", "SQL"],
  },
  {
    category: "iOS & Apple",
    skills: ["SwiftUI", "UIKit", "iOS SDK", "Swift Concurrency", "MapKit", "Core Location", "Xcode Instruments", "App Store Connect"],
  },
  {
    category: "Cross-Platform Mobile",
    skills: ["React Native", "Expo", "React Navigation", "react-native-maps", "AsyncStorage", "Android", "Gradle"],
  },
  {
    category: "Web & Backend",
    skills: ["React", ".NET Core", "ASP.NET MVC", "Entity Framework", "Node.js", "REST APIs", "PostgreSQL", "Cloudflare Workers", "Kafka"],
  },
  {
    category: "AI & Data Science",
    skills: ["LLM integration", "LLM evaluation", "Prompt engineering", "Claude API", "OpenAI API", "PyTorch", "NumPy / Pandas", "On-device ML", "NLP"],
  },
  {
    category: "Practices & Tooling",
    skills: ["Git", "Docker", "CI/CD", "GitHub Actions", "AWS", "Linux", "Unit & UI testing", "Agile / Scrum"],
  },
];
