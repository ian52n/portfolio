import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
});

const siteUrl = "https://ian.ai-editor.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s · ${profile.name}`,
  },
  description: profile.tagline,
  keywords: [
    "Ian Norris",
    "AI engineer",
    "LLM engineer",
    "applied AI",
    "iOS engineer",
    "Swift developer",
    "full-stack developer",
    "SwiftUI",
    "React Native",
    "portfolio",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
    url: siteUrl,
    siteName: `${profile.name} · Portfolio`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description: profile.tagline,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
