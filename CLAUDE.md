# CLAUDE.md

Instructions for AI assistants working in this repository.

## Project & Persona
- **Canonical Title:** Always use "Full-Stack & AI Engineer" and emphasize the Master's in Artificial Intelligence, because branding must remain uniform across all pages and metadata.
- **Title Guardrail:** Never demote the title to "Junior Developer" or "Frontend Developer", because canonical branding must remain "Full-Stack & AI Engineer".
- **Tone:** Describe projects through business value, reliability, and UX, because hiring teams evaluate real-world product impact over generic buzzwords.
- **Personal Information:** Read all personal data (name, email, location, socials, resume path) from `src/config/personal.ts` and never hardcode it, because that file is the single source of truth.
- **Metrics & Numbers:** Never invent or estimate metrics. Use only numbers already in the MDX or given by me. If missing, leave a TODO comment, because unverified claims undermine academic and professional credibility.

## Workflow & Scope
- **Ask Before Adding Dependencies:** Never install new npm packages without explicit confirmation, because unapproved dependencies bloat the client bundle and increase maintenance overhead.
- **Keep Changes Scoped:** Make only the edits required for the specific task and avoid unrelated refactoring, because unrequested modifications risk regressions in working features.
- **No Automated Test Suites:** No unit or integration test suite exists in this repo; `npm run build` and `npx eslint .` serve as the sole automated verification checks.
- **Environment Variables:** `NEXT_PUBLIC_FORMSPREE_ID` in `.env.local` is required for the contact form (the file is gitignored).

## Commands
- `npm run dev` — Start local development server (Turbopack enabled).
- `npm run build` — Run production build; verifies TypeScript types and ensures all routes prerender without errors.
- `npm run lint` — Run ESLint with auto-fix directly via `eslint . --fix` (Next.js 16 removed `next lint`); note that this auto-fixes and may touch unrelated files.
- `npm start` — Run production server locally after a build.

## Key Folders
- `content/` — Markdown case studies (`projects/*.mdx`) and publications (`research/*.mdx`).
- `src/components/` — UI sections and interactive animation primitives (`motion/`).
- `src/config/` — App metadata and personal information (`personal.ts`).
- `src/data/` — TypeScript interfaces; see `src/data/types.ts` for data contracts.
- `src/lib/` — Shared utilities (`mdx.ts`, `ScrollContext.tsx`, `content.ts`).
- `src/pages/` — Pages Router routes; dynamic endpoints for `projects/[id]` and `research/[id]`.

## Content Management
When adding a project or paper, read docs/content-guide.md first.

## Engineering Rules (Every rule has a one-clause reason)
1. **No Undefined in SSG:** Never return `undefined` from `getStaticProps` (use `?? null` or sanitize with `JSON.parse(JSON.stringify())`), because Next.js JSON serialization throws a build error on undefined values.
2. **Strict Optional Chaining on MDX Data:** Always use optional chaining when accessing frontmatter arrays (e.g., `item.technologies?.map(...)`), because frontmatter fields are optional and unhandled missing keys trigger runtime crashes.
3. **Global Scroll Context:** Consume `useGlobalScroll()` from `@/lib/ScrollContext` instead of attaching raw `window.addEventListener('scroll')` listeners, because centralized tracking avoids duplicate listeners and CPU thrashing.
4. **Element Parallax:** For element-level parallax, use `useScroll({ target, offset })` from `motion/react` instead of the global scroll context, because targeted listeners restrict calculations to the visible viewport element.
5. **Motion Imports:** Always import animation utilities from `motion/react`, because the repo standardizes on the `motion` package, and mixing in framer-motion can bundle two copies.
6. **Hardware-Accelerated Animation:** Animate only transform (`x`, `y`, `scale`, `rotate`) and `opacity` properties, because animating layout triggers (`width`, `height`, `margin`) degrades framerates below 60fps.
7. **Path Aliasing:** Always use `@/*` to reference modules in `./src/*`, because relative path ladders (`../../..`) make imports brittle during refactors.
8. **Design System & Tokens:** Refer to `tailwind.config.js` for color tokens (`canvas`, `accent`, `accent2`, `gold`) and `src/styles/globals.css` for utility classes (`.surface-card`, `.btn-primary`, `.text-gradient`), because styling tokens must not be duplicated or redefined ad-hoc.

## Verification Checklist
Run these commands before finishing any task:
1. Run `npx eslint .` (read-only, no auto-fix) and confirm it exits with code 0.
2. Run `npm run build` and confirm TypeScript compilation passes and all routes prerender without errors.

*Note for AI:* Visual layout, mobile responsiveness (< 640px), and dark/light color contrast cannot be verified automatically via CLI; flag them for human review rather than claiming they were verified.
