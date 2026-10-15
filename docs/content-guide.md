# Content Guide: Project & Research MDX Templates

> **CRITICAL RULE:** All values in the templates below are illustrative placeholders. Never copy placeholder numbers, metrics, or claims into real files. If real metrics do not exist, completely delete the `metrics` block.

---

## Frontmatter Field Rules (based on `src/data/types.ts` & `src/lib/mdx.ts`)

### Required Frontmatter Fields
* `title` (string) — Display title of the project or paper.
* `coverImage` (string or string[]) — Absolute path to image in `/public` (e.g. `/assets/projects/cover.png`).
* `technologies` (string[]) — List of technologies/tools used.
* `features` (string[]) — Key capabilities or contribution bullet points.

*Note on `description`:* In `src/data/types.ts`, `description` is a required string, but in MDX it is **not** in the frontmatter. `src/lib/mdx.ts` automatically assigns the Markdown body text below `---` as `description`.

### Optional Frontmatter Fields
* `shortDescription` (string) — 1–2 sentence teaser used for cards, metadata, and subtitle. (UI falls back to body if omitted).
* `category` (string) — e.g., "AI & Full-Stack", "Distributed AI", "Mobile".
* `status` (string) — e.g., "Production", "Published".
* `role` (string) — e.g., "Full-Stack & AI Engineer".
* `year` (string) — e.g., "2025".
* `featured` (boolean) — `true` pins item to featured sections.
* `liveUrl` (string) — Production URL.
* `storeUrl` (string) — App store destination; rendered as "Download on Google Play" for the Android product layout, separately from `liveUrl`.
* `homepageSection` (`"standalone"`) — Gives a product its own homepage showcase. It is excluded from Featured Projects and Archive; omitted values retain the existing placement.
* `projectLayout` (`"product"`) — Uses a compact product header and clear banner on the existing `/projects/<slug>` route. Omitted values retain the existing detail template.
* `iconImage`, `socialImage` (string) — Local app icon and social-sharing cover paths.
* `showcaseCover` (object) — Optional standalone-card artwork: `desktop`, `width`, `height`, `mobile`, `mobileWidth`, `mobileHeight`, `alt`, and `caption`. Use a 3:1 desktop composition and square mobile composition; `<picture>` selects the optimized asset. Keep `coverImage` for the existing detail/gallery artwork, and identify adapted promotional art truthfully in the caption.
* `coverWidth`, `coverHeight` (number) — True cover dimensions used to reserve space and preserve proportions.
* `platform`, `releasedAt` (string) — Product facts; include only verified values. A store update date is not a release date.
* `githubUrl` (string) — GitHub repository link.
* `caseStudyUrl` (string) — Link to internal deep-dive case study page.
* `paperUrl` (string) — External link to published paper.
* `doi` (string) — Digital Object Identifier (e.g., `10.5281/zenodo.xxxxxxx`).
* `publisher` (string) — e.g., "Zenodo", "IEEE".
* `highlights` (string[]) — Notable findings or milestones.
* `metrics` (array of `{ label: string, value: string }`) — Real, verified metrics only. **Omit if none exist.**
* `contributors` (array of `{ name: string, linkedinUrl: string }`)
* `screenshots` (array of `{ path: string, type: "web" | "mobile", alt?: string, width?: number, height?: number, caption?: string }`) — Use true dimensions when known; existing projects retain their fallback dimensions. Captions must identify promotional artwork explicitly rather than describing it as an in-game capture.

---

## 1. Project Template (`content/projects/<slug>.mdx`)

```markdown
---
title: "Project Name"
coverImage: "/assets/projects/placeholder-cover.png"
shortDescription: "A concise 1-2 sentence executive overview."
category: "AI & Full-Stack"
status: "Production Ready"
role: "Full-Stack & AI Engineer"
year: "2025"
featured: false
liveUrl: "https://example.com"
githubUrl: "https://github.com/araneeskhan/example"
caseStudyUrl: "/case-studies/example"
technologies:
  - "Next.js"
  - "Python"
  - "PyTorch"
features:
  - "Core feature or architecture highlight."
  - "Second feature highlight."
highlights:
  - "Notable milestone or technical outcome."
# metrics: (DELETE THIS BLOCK IF NO VERIFIED METRICS EXIST)
#   - label: "Metric Name"
#     value: "Value"
---

## Overview
Detailed case study body written in GitHub Flavored Markdown. This body becomes `item.description`.
```

---

## 2. Research Paper Template (`content/research/<slug>.mdx`)

```markdown
---
title: "Research Paper Title"
coverImage: "/assets/research/placeholder-cover.png"
shortDescription: "Abstract summary of the methodology and results."
category: "Distributed AI"
status: "Preprint"
year: "2024"
doi: "10.5281/zenodo.xxxxxxx"
publisher: "Zenodo"
paperUrl: "https://doi.org/10.5281/zenodo.xxxxxxx"
technologies:
  - "PyTorch"
  - "Federated Learning"
features:
  - "Key theoretical or empirical contribution."
highlights:
  - "Notable empirical finding."
# metrics: (DELETE THIS BLOCK IF NO VERIFIED METRICS EXIST)
#   - label: "Metric Name"
#     value: "Value"
---

Detailed paper background, formulation, experimental setup, and conclusions. This body becomes `paper.description`.
```
