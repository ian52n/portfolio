# Ian Norris — Portfolio

Personal portfolio site. Built with **Next.js (App Router) + Tailwind CSS v4**, deployed on **Vercel** at [ai-editor.app](https://ai-editor.app).

iOS-first positioning, with full-stack and data-science work alongside.

## Develop

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
```

## Where the content lives

All copy is data-driven — edit these files, not the components:

| File | What it controls |
|------|------------------|
| `data/profile.ts` | Name, contact, tagline, summary, the three specialty tracks |
| `data/projects.ts` | Project cards (description, tech, highlights, links, track tags) |
| `data/skills.ts` | Skill groups |
| `data/experience.ts` | Work history + education timeline |

Fields marked `FROM MASTER PROFILE` are placeholders awaiting real content.

### Adding a resume PDF

Drop `Ian-Norris-Resume.pdf` into `public/` and the "Resume" button in the
contact section will serve it (path set in `profile.resumeUrl`).

## Structure

```
app/
  layout.tsx              # fonts, metadata, SEO
  page.tsx                # section composition + JSON-LD
  globals.css             # design tokens (light + dark), Tailwind theme
  opengraph-image.tsx     # dynamic social share image
  icon.svg                # favicon
  robots.ts / sitemap.ts  # SEO
components/                # Nav, Hero, Tracks, Projects, About, Skills, Contact, Footer
data/                      # all editable content
```

## Deploy

Push to GitHub and import into Vercel (zero config), or run `vercel` from this
directory. Point the `ai-editor.app` domain at the project in Vercel's domain
settings.
