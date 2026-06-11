# Portfolio Website

Personal portfolio built with Next.js, TypeScript, and CSS Modules.

## Project Structure

```
portfolio/
├── public/                  # Static assets (served as-is)
│   ├── images/              # Profile photo, project screenshots
│   ├── icons/               # Favicon, social icons
│   └── resume/              # PDF resume download
│
├── src/
│   ├── app/                 # Next.js App Router (pages & layout)
│   │   ├── layout.tsx       # Root layout (nav, footer, metadata)
│   │   ├── page.tsx         # Home page (all sections)
│   │   └── globals.css      # Global styles & CSS variables
│   │
│   ├── components/
│   │   ├── layout/          # Header, Footer, Navigation
│   │   ├── sections/        # Hero, About, Skills, Projects, Contact
│   │   └── ui/              # Reusable UI (Button, Card, Badge, etc.)
│   │
│   ├── data/                # Content as data (easy to edit)
│   │   ├── profile.ts       # Name, bio, social links
│   │   ├── projects.ts      # Project list
│   │   └── skills.ts        # Skills & tools
│   │
│   ├── lib/                 # Utilities & helpers
│   │   └── constants.ts     # Site-wide constants
│   │
│   ├── hooks/               # Custom React hooks
│   │   └── useScrollSpy.ts  # Active nav section on scroll
│   │
│   └── types/               # TypeScript interfaces
│       └── index.ts
│
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Customization Checklist

1. Edit `src/data/profile.ts` — your name, bio, social links
2. Edit `src/data/projects.ts` — your projects
3. Edit `src/data/skills.ts` — your skills
4. Add images to `public/images/`
5. Add resume PDF to `public/resume/`
6. Update metadata in `src/app/layout.tsx`

## Page Sections (Home)

| Section   | Component              | Purpose                          |
|-----------|------------------------|----------------------------------|
| Hero      | `sections/Hero`        | Name, title, CTA buttons         |
| About     | `sections/About`       | Bio, photo, experience summary   |
| Skills    | `sections/Skills`      | Tech stack & tools               |
| Projects  | `sections/Projects`    | Featured work with links         |
| Contact   | `sections/Contact`     | Email, social links, form        |
