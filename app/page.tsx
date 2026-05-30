import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { Tracks } from "@/components/Tracks";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { profile } from "@/data/profile";
import { getRepoStars } from "@/lib/github";

export default async function Home() {
  const stars = await getRepoStars();

  // Structured data so recruiters' tools / search engines understand the page.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: "https://ian.ai-editor.app",
    email: `mailto:${profile.email}`,
    jobTitle: profile.title,
    sameAs: [profile.github],
    knowsAbout: ["iOS development", "Swift", "Full-stack development", "Data science", "LLMs"],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <div className="pb-12">
          <Stats />
        </div>
        <div className="pb-8">
          <Tracks />
        </div>
        <div id="work" className="scroll-mt-20 py-20 sm:py-24">
          <Projects stars={stars} />
        </div>
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
