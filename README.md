# Portfolio — Anees Ur Rehman

Personal portfolio site built with Next.js, TypeScript, and Tailwind CSS. Showcases shipped products, academic research papers, achievements, and certifications.

**Live:** [araneeskhan.vercel.app](https://araneeskhan.vercel.app)

## Stack

- [Next.js](https://nextjs.org) (Pages Router) + [React 19](https://react.dev)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Motion](https://motion.dev) (Framer Motion) for animation
- [Formspree](https://formspree.io) for the contact form
- [Vercel Analytics](https://vercel.com/analytics)
- Deployed on [Vercel](https://vercel.com)

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command         | Description                    |
| --------------- | ------------------------------ |
| `npm run dev`   | Start the local dev server     |
| `npm run build` | Production build               |
| `npm run start` | Serve the production build     |
| `npm run lint`  | Lint and auto-fix               |

## Project structure

```
src/
  components/       UI sections (Hero, Projects, Research, Achievements, ...)
  components/motion/ Reusable scroll/animation building blocks
  data/              Content as data (projects.ts, research.ts, types.ts)
  pages/             Routes — home, /projects/[id], /research/[id], case studies
  styles/            Global CSS and design tokens
  config/            Site-wide personal/config values
```

Projects and research papers are data-driven: adding a new entry to `src/data/projects.ts` or `src/data/research.ts` is enough to get a homepage card and a detail page at `/projects/[id]` or `/research/[id]` — no new components needed.

## License

Personal project — content and code are not licensed for reuse.
