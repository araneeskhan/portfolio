# Project Overview: AI Engineer Portfolio

This is a modern, high-performance developer portfolio built for an AI & Full-Stack Engineer. It showcases projects, research papers, skills, and professional experience with sophisticated animations and a highly optimized architecture.

## Tech Stack
- **Framework:** Next.js (Pages Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Motion (Framer Motion)
- **Content Management:** MDX (Markdown + JSX) via `next-mdx-remote` and `gray-matter`

## Architecture & Data Flow
- **MDX Content System:** All dynamic content (projects and research papers) is stored in the `content/projects/` and `content/research/` directories as `.mdx` files. Do **not** hardcode data into TypeScript dictionaries.
- **Data Fetching:** Pages use `getStaticPaths` and `getStaticProps` to fetch MDX content at build time. The `src/lib/mdx.ts` utility parses the Markdown.
- **Serialization Rule:** Next.js `getStaticProps` strictly forbids `undefined` values. The `src/lib/mdx.ts` parser safely scrubs all `undefined` values (mapping them to `null` or omitting them) before sending data to the client.

## Core Architectural Patterns
- **Global Scroll Tracking:** Avoid binding `window.addEventListener('scroll')` in individual components. The application is wrapped in a `ScrollProvider` (`src/lib/ScrollContext.tsx`) which utilizes Framer Motion's `useScroll`. Consume global scroll values via context to prevent CPU thrashing.
- **Strict Type Safety:** Always use optional chaining (`?.`) when rendering arrays or properties from MDX frontmatter (e.g., `project.technologies?.map(...)`), as specific frontmatter fields might be omitted in certain Markdown files.
- **Animations:** Favor hardware-accelerated transforms (`y`, `x`, `scale`, `opacity`) over animating layout properties (`height`, `width`, `margin`) to maintain smooth 60fps framerates. Use `useSpring` and `useTransform` for scroll-linked animations.

## Styling Conventions
- **Theming:** The project heavily uses a custom color palette (`canvas`, `accent`, `accent2`). Always include dark mode variants using the `dark:` Tailwind prefix.
- **CSS Variables:** Global styles and variables are defined in `src/styles/globals.css`.

## Development Guidelines
- Always prioritize accessibility and semantic HTML (`<article>`, `<section>`, `<aside>`).
- Maintain the "Full-Stack & AI Engineer" branding across all copy and metadata.
- Run `npm run build` to verify type safety and MDX serialization before finalizing changes.
