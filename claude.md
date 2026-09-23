# CLAUDE.md — AI Engineer Portfolio Knowledge Base & Instructions

Comprehensive project guide, architecture documentation, design system tokens, content management protocols, and strict engineering rules for the **Anees Ur Rehman** portfolio codebase.

---

## 1. Project Overview & Identity

- **Owner:** Anees Ur Rehman
- **Title / Role:** Full-Stack & AI Engineer
- **Credentials:** 
  - Master's Degree in Artificial Intelligence
  - Bachelor's Degree in Computer Science
  - 2+ Years of Software & AI Production Engineering
- **Location:** Paris, France
- **Domain:** [https://araneeskhan.vercel.app](https://araneeskhan.vercel.app)
- **Repository:** `araneeskhan/portfolio` (GitHub: [https://github.com/araneeskhan](https://github.com/araneeskhan))
- **Primary Focus:** High-performance, production-grade web applications, React Native mobile apps, and distributed AI/ML systems with fluid 60fps animations, accessible interaction patterns, and academic research credibility.

---

## 2. Tech Stack & Dependencies

| Layer | Technology | Version | Purpose |
| :--- | :--- | :--- | :--- |
| **Framework** | Next.js (Pages Router) | `16.2.4` | Server-Side Static Generation (SSG), routing, Turbopack builds |
| **UI Library** | React & React DOM | `19.0.0` | Modern React with React 19 concurrent features |
| **Language** | TypeScript | `^5.8.2` | Strict type checking, interface definitions |
| **Styling** | Tailwind CSS | `^3.4.17` | Utility-first CSS with dark mode and custom CSS variables |
| **PostCSS / AutoPrefixer** | PostCSS, Autoprefixer | `^8.5.3`, `^10.4.21` | CSS transformations and vendor prefixing |
| **Animations** | Motion (`motion`) | `^12.42.2` | Fluid scroll interpolation, springs, layout transitions (`motion/react`) |
| **Content Engine** | `next-mdx-remote` & `gray-matter` | `^6.0.0`, `^4.0.3` | Dynamic Markdown/MDX parsing with YAML frontmatter |
| **Form Management** | `@formspree/react` | `^3.0.0` | Headless contact form submission handling |
| **Analytics** | `@vercel/analytics` | `^2.0.1` | Zero-config web analytics on Vercel deployment |
| **Code Quality** | ESLint & Prettier | `^9.0.0`, `^3.8.3` | Linting with `eslint-config-next` and code formatting |

---

## 3. Essential Commands & Development Workflow

All commands must be run from the repository root:

```bash
# Start local development server (Turbopack enabled)
npm run dev

# Run production build (TypeScript checks + SSG static page generation)
npm run build

# Start production server locally after build
npm start

# Lint and automatically fix formatting/style issues
npm run lint

# Deploy alias (triggers next build)
npm run deploy
```

### Environment Variables
Local development uses `.env.local`:
```env
NEXT_PUBLIC_FORMSPREE_KEY=your_formspree_id_here
```

---

## 4. Directory & Architecture Map

```text
portfolio/
├── content/                    # MDX dynamic content repository
│   ├── projects/              # Project case studies (*.mdx)
│   └── research/              # Academic publications & research papers (*.mdx)
├── public/                    # Static public assets
│   ├── assets/                # Resume PDF, headshot, project showcase images
│   ├── favicon.ico
│   └── robots.txt
├── scripts/                   # Internal build & migration utilities
├── src/
│   ├── components/            # Reusable UI sections & widgets
│   │   ├── motion/            # Framer Motion specialized animations
│   │   │   ├── CustomCursor.tsx       # Physics-based custom mouse follower
│   │   │   ├── HorizontalArchive.tsx  # Drag/scroll horizontal project carousel
│   │   │   ├── ImageLightbox.tsx      # Fullscreen gallery lightbox modal
│   │   │   ├── MagneticButton.tsx     # Cursor magnetic pull effect on buttons
│   │   │   ├── Marquee.tsx            # Infinite marquee ribbon for skills/domains
│   │   │   ├── Reveal.tsx             # Scroll reveal stagger wrappers
│   │   │   └── ScrollProgress.tsx     # Viewport top scroll indicator
│   │   ├── About.tsx          # Word-by-word scroll opacity text & focus areas
│   │   ├── Achievements.tsx   # Hackathons & leadership cards
│   │   ├── Certifications.tsx # Professional certificates with verification links
│   │   ├── Contact.tsx        # Formspree contact form & status cards
│   │   ├── ErrorBoundary.tsx  # React component crash isolation
│   │   ├── FloatingBackToTop.tsx # Smooth back-to-top floating control
│   │   ├── Footer.tsx         # Bottom navigation, copyright, and socials
│   │   ├── Hero.tsx           # Dynamic typewriter hero, 3D avatar & metrics
│   │   ├── Layout.tsx         # Meta tags, SEO, navbar and footer container
│   │   ├── Navbar.tsx         # Dynamic blur glass header with section spy
│   │   ├── Projects.tsx       # Featured projects showcase & archive section
│   │   ├── Research.tsx       # Academic publication catalog with DOI badges
│   │   ├── SectionHeader.tsx  # Standardized section headings with badge
│   │   ├── Skills.tsx         # Categorized skills matrix with proficiency
│   │   └── ThemeToggle.tsx    # Light/Dark mode toggle with local storage
│   ├── config/
│   │   └── personal.ts        # Central source of truth for personal data & links
│   ├── data/
│   │   └── types.ts           # Core TypeScript interfaces (ContentItem, Screenshot, etc.)
│   ├── lib/
│   │   ├── ScrollContext.tsx  # Centralized Framer Motion scroll tracker context
│   │   ├── content.ts         # Image resolution and cover helpers
│   │   └── mdx.ts             # MDX parsing, frontmatter parsing, SSG sanitization
│   ├── pages/
│   │   ├── _app.tsx           # Global app wrapper with ScrollProvider & theme
│   │   ├── _document.tsx      # HTML document structure, fonts & meta
│   │   ├── 404.tsx            # Custom branded 404 error page
│   │   ├── index.tsx          # Homepage rendering all core components
│   │   ├── resume.tsx         # Responsive resume viewer with PDF fallback
│   │   ├── sitemap.xml.ts     # Dynamic XML sitemap generator for SEO
│   │   ├── case-studies/      # Specialized deep-dive case study pages
│   │   │   └── campus-sports-sphere.tsx
│   │   ├── projects/
│   │   │   └── [id].tsx       # Dynamic project detail page (MDXRemote)
│   │   └── research/
│   │       └── [id].tsx       # Dynamic research paper detail page (MDXRemote)
│   └── styles/
│       └── globals.css        # Tailwind directives, CSS variables, glassmorphism
├── tailwind.config.js         # Custom palette, typography, keyframes & animations
├── tsconfig.json              # TypeScript configuration with @/* path alias
├── package.json               # Dependencies and scripts
└── claude.md                  # This AI knowledge base file
```

---

## 5. Content Management System (MDX)

Content is decoupled from component logic and stored as `.mdx` files under `content/`.

### TypeScript Schema (`src/data/types.ts`)
```typescript
export interface Screenshot {
  path: string;
  type: "mobile" | "web";
  alt?: string;
}

export interface ItemMetric {
  label: string;
  value: string;
}

export interface Contributor {
  name: string;
  linkedinUrl: string;
}

export interface ContentItem {
  title: string;
  coverImage: string | string[];
  description: string;
  shortDescription?: string;
  category?: string;
  status?: string;
  role?: string;
  year?: string;
  featured?: boolean;
  liveUrl?: string;
  videoPath?: string;
  videoAspectRatio?: string;
  technologies: string[];
  features: string[];
  highlights?: string[];
  metrics?: ItemMetric[];
  githubUrl?: string;
  caseStudyUrl?: string;
  paperUrl?: string;
  doi?: string;               // e.g., "10.5281/zenodo.21813119"
  publisher?: string;         // e.g., "Zenodo"
  descriptionUrl?: string;
  appVideoUrl?: string;
  webVideoUrl?: string;
  contributors?: Contributor[];
  screenshots?: Screenshot[];
}
```

### Creating a New Project (`content/projects/<slug>.mdx`)
```markdown
---
title: "Project Name"
coverImage: "/assets/projects/project-cover.png"
shortDescription: "A concise 1-2 sentence executive overview."
category: "AI & Full-Stack"
status: "Production Ready"
role: "Full-Stack & AI Engineer"
year: "2025"
featured: true
liveUrl: "https://example.com"
githubUrl: "https://github.com/araneeskhan/example"
caseStudyUrl: "/case-studies/example"
technologies:
  - "Next.js"
  - "Python"
  - "PyTorch"
  - "Tailwind CSS"
features:
  - "Real-time AI inference pipeline with sub-100ms response times."
  - "End-to-end type safety across client and server."
highlights:
  - "Architected scalable microservice backend on AWS."
metrics:
  - label: "Accuracy"
    value: "98.4%"
  - label: "Daily Users"
    value: "10K+"
contributors:
  - name: "Collaborator Name"
    linkedinUrl: "https://linkedin.com/in/collaborator"
screenshots:
  - path: "/assets/projects/screen-1.png"
    type: "web"
    alt: "Dashboard view"
---

## Overview
Detailed case study body written in GitHub Flavored Markdown. Supports headings, lists, code blocks, and standard Markdown syntax rendered via `next-mdx-remote`.
```

### Creating a New Research Paper (`content/research/<slug>.mdx`)
```markdown
---
title: "Research Paper Title: Investigation & Findings"
coverImage: "/assets/research/paper-cover.png"
shortDescription: "Abstract summary of the core methodology and empirical results."
category: "Distributed AI"
status: "Peer Reviewed / Preprint"
year: "2024"
doi: "10.5281/zenodo.xxxxxxx"
publisher: "Zenodo"
paperUrl: "https://doi.org/10.5281/zenodo.xxxxxxx"
technologies:
  - "PyTorch"
  - "Federated Learning"
  - "Differential Privacy"
features:
  - "Novel consensus aggregation algorithm resisting Byzantine attacks."
  - "Tested on distributed edge device clusters across 500 nodes."
highlights:
  - "Reduced communication overhead by 42% compared to standard FedAvg."
metrics:
  - label: "Efficiency"
    value: "+42%"
  - label: "Privacy Budget"
    value: "epsilon=1.2"
---

Detailed paper background, mathematical formulas, experimental setup, and conclusions.
```

---

## 6. Critical Engineering Guidelines & Gotchas

### Rule 1: Next.js SSG Undefined Serialization Constraint
> [!CAUTION]
> In Next.js Pages Router, `getStaticProps` **strictly throws a build error** if any property of the returned props object is `undefined`:
> `Error: Error serializing .paper.featured returned from getStaticProps. Reason: undefined cannot be serialized as JSON.`
- **Enforcement:** `src/lib/mdx.ts` uses fallback null coalescing (`?? null`) and sanitizes objects via `JSON.parse(JSON.stringify(rawPost))` before returning from `getPostBySlug` or `getAllPosts`.
- **Action:** Never return raw un-sanitized objects containing possible `undefined` values from `getStaticProps`.

### Rule 2: Strict Optional Chaining for MDX Metadata
> [!IMPORTANT]
> MDX frontmatter fields are optional in practice. A new or draft project might omit `technologies`, `features`, `highlights`, `metrics`, `contributors`, or `screenshots`.
- **Enforcement:** Always use optional chaining and length validation:
  ```tsx
  // CORRECT
  {project.technologies?.map((tech) => (
    <span key={tech}>{tech}</span>
  ))}

  // WRONG - will throw runtime crash if technologies is undefined
  {project.technologies.map((tech) => ...)}
  ```

### Rule 3: Consolidated Scroll Tracking & CPU Performance
> [!TIP]
> Do **not** bind raw `window.addEventListener('scroll')` across multiple components.
- The root `_app.tsx` wraps the app in `<ScrollProvider>` from `src/lib/ScrollContext.tsx`.
- Use `const { scrollY, scrollYProgress } = useGlobalScroll();` to consume scroll updates.
- For element-specific parallax (e.g. `About.tsx` or `Hero.tsx`), use Framer Motion's targeted hook:
  ```tsx
  const { scrollYProgress } = useScroll({
    target: elementRef,
    offset: ['start end', 'end start'],
  });
  ```

### Rule 4: Framer Motion v12+ Import Standards
- Always import from `motion/react` (the official React 19 / Motion v12 entry point), **not** legacy `framer-motion`:
  ```tsx
  import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
  ```
- Animate only composite-friendly, hardware-accelerated properties: `transform` (`x`, `y`, `scale`, `rotate`) and `opacity`. Avoid animating layout-triggering properties (`width`, `height`, `margin`, `top`).

### Rule 5: Path Aliases
- Always use the `@/*` alias which maps to `./src/*`:
  ```tsx
  import personal from '@/config/personal';
  import Layout from '@/components/Layout';
  import { getAllPosts } from '@/lib/mdx';
  ```

---

## 7. Design System & Theming Tokens

### Color Palette (`tailwind.config.js`)
- **Canvas (Neutrals):**
  - Light mode: Canvas 50 (`#fafafa`) to 200 (`#e0e0e4`)
  - Dark mode: Canvas 950 (`#06060a`), 900 (`#121216`), DEFAULT (`#08090b`)
- **Accent (Primary Indigo):**
  - Default: `#6366f1` (Tailwind `accent-500`)
  - Light tints: `accent-50` to `accent-400`
  - Deep shades: `accent-600` to `accent-900`
- **Accent 2 (Secondary Purple):**
  - `accent2-400` (`#c084fc`), `accent2-500` (`#a855f7`), `accent2-600` (`#9333ea`)
- **Gold (Legacy Highlights / Accents):**
  - `gold-400` (`#d8af45`), `gold-500` (`#d4af37`), `gold-gradient`

### Typography
- **Sans:** Inter (`var(--font-inter)`) — clean, readable body copy
- **Display:** Sora (`var(--font-sora)`) — bold, modern headings and titles
- **Mono:** JetBrains Mono (`var(--font-jetbrains)`) — metrics, code, timestamps, and eyebrows

### Reusable Utility Classes (`src/styles/globals.css`)
- `.section-shell`: Standard vertical padding (`py-24 md:py-32`) and overflow handling.
- `.section-container`: Max-width wrapper (`max-w-7xl px-5 sm:px-8 lg:px-12 mx-auto`).
- `.section-border-top`: Subtle gradient border dividing major sections.
- `.surface-card`: Glassmorphism 2.0 container with backdrop blur and responsive border opacity.
- `.surface-card-hover`: Card with 3D hover elevation and accent shadow glow.
- `.btn-primary`: High-contrast pill button with gradient hover fill and shadow.
- `.btn-secondary`: Subtle bordered pill button with soft accent color hover.
- `.text-gradient`: Gradient text masked with `accent` to `accent2`.
- `.eyebrow`: Capsule badge for section headers and tags.

---

## 8. Branding & Copywriting Standards

When creating, refactoring, or updating any text across the portfolio:
1. **Title Alignment:** The canonical professional title is **"Full-Stack & AI Engineer"**. Do not demote to "Junior Developer" or "Frontend Developer".
2. **Academic AI Credentials:** Highlight the **Master's in Artificial Intelligence** when describing background, research, or complex algorithms.
3. **Product-Minded Tone:** Describe projects through the lens of business value, architectural robustness, reliability, and user experience.
4. **Concrete Metrics:** Emphasize measurable achievements (e.g. latency reductions, accuracy percentages, active users, load times).

---

## 9. Pre-Commit / Pre-Push Checklist

Before pushing changes to GitHub or deploying:
- [ ] Run `npm run build` locally and ensure it exits with code `0`.
- [ ] Verify zero TypeScript errors (`tsc` passes).
- [ ] Verify Next.js SSG prerenders all 18+ routes without serialization errors.
- [ ] Ensure any newly added `.mdx` files include required frontmatter (`title`, `description`, etc.).
- [ ] Check responsive layout on both mobile (< 640px) and desktop (> 1024px) viewports.
- [ ] Confirm dark mode and light mode contrast passes WCAG AA readability standards.
