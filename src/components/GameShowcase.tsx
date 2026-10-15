import Image, { getImageProps } from 'next/image';
import Link from 'next/link';
import type { ContentItem } from '@/data/types';
import Reveal from '@/components/motion/Reveal';
import { getCoverImage } from '@/lib/content';

export type ProductProject = ContentItem & { id: string };

export function StoreLink({ project, className = '' }: { project: ContentItem; className?: string }) {
  if (!project.storeUrl) return null;
  return (
    <a href={project.storeUrl} target="_blank" rel="noopener noreferrer" className={`btn-primary min-h-12 ${className}`}>
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"><path d="m4 3 16 9-16 9V3Z" /><path d="m4 3 10 9L4 21M14 12l3-2M14 12l3 2" /></svg>
      <span>Download on Google Play</span>
    </a>
  );
}

export function ProductCover({ project, priority = false, compact = false }: { project: ContentItem; priority?: boolean; compact?: boolean }) {
  return (
    <Image
      src={getCoverImage(project)}
      alt={`${project.title} — official Google Play promotional artwork`}
      width={project.coverWidth ?? 1600}
      height={project.coverHeight ?? 900}
      sizes="(max-width: 640px) calc(100vw - 40px), (max-width: 1280px) calc(100vw - 96px), 1184px"
      className={`block h-auto w-full ${compact ? 'max-h-[420px] object-contain' : ''}`}
      priority={priority}
    />
  );
}

export function ProductIdentity({ project }: { project: ContentItem }) {
  return (
    <div className="flex min-w-0 items-center gap-4">
      {project.iconImage && <Image src={project.iconImage} alt={`${project.title} app icon`} width={64} height={64} sizes="64px" className="h-16 w-16 shrink-0 rounded-2xl" />}
      <div className="min-w-0">
        <p className="font-mono text-[10px] font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">{project.category}</p>
        <p className="mt-1 text-sm font-semibold text-canvas-700 dark:text-canvas-200">{project.status}</p>
      </div>
    </div>
  );
}

export function ShowcaseArtwork({ project }: { project: ContentItem }) {
  const cover = project.showcaseCover;
  if (!cover) return <ProductCover project={project} compact />;
  const { props: desktop } = getImageProps({
    src: cover.desktop,
    alt: cover.alt,
    width: cover.width,
    height: cover.height,
    sizes: '(max-width: 1280px) calc(100vw - 96px), 1184px',
  });

  return (
    <picture className="block aspect-square sm:aspect-[3/1]">
      <source media="(min-width: 640px)" srcSet={desktop.srcSet} sizes={desktop.sizes} width={cover.width} height={cover.height} />
      <Image src={cover.mobile} alt={cover.alt} width={cover.mobileWidth} height={cover.mobileHeight} sizes="calc(100vw - 40px)" className="block h-full w-full object-cover" loading="eager" />
    </picture>
  );
}

export default function GameShowcase({ project }: { project: ProductProject }) {
  return (
    <section id={project.id} aria-labelledby={`${project.id}-title`} className="section-border-top py-16 font-sans md:py-24">
      <div className="section-container">
        <Reveal as="div" direction="fade" className="mb-6 flex flex-wrap items-center justify-between gap-3">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.16em] text-canvas-600 dark:text-canvas-300">Independent game · Available now</p>
          <p className="text-sm text-canvas-600 dark:text-canvas-300">{project.platform} · Simulation &amp; strategy</p>
        </Reveal>
        <Reveal as="div" direction="fade">
          <article className="overflow-hidden rounded-[2rem] border border-canvas-200 bg-white shadow-elevated dark:border-white/10 dark:bg-canvas-900">
            <div className="bg-canvas-100 dark:bg-canvas-950"><ShowcaseArtwork project={project} /></div>
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-start">
                <div className="min-w-0">
                  <ProductIdentity project={project} />
                  <h2 id={`${project.id}-title`} className="mt-5 font-display text-2xl font-bold leading-tight tracking-tight text-canvas-950 dark:text-white sm:text-3xl lg:text-4xl">{project.title}</h2>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-canvas-600 dark:text-canvas-300">{project.shortDescription}</p>
                </div>
                <div className="flex flex-col gap-3 lg:pt-1">
                  <StoreLink project={project} className="w-full" />
                  <Link href={`/projects/${project.id}`} className="btn-secondary min-h-12 w-full"><span>View Case Study</span><span aria-hidden="true">↗</span></Link>
                </div>
              </div>
              <ul aria-label="Technology" className="mt-5 flex flex-wrap gap-2">
                {project.technologies?.map((tech) => <li key={tech} className="rounded-full bg-canvas-100 px-3 py-1.5 text-xs font-medium text-canvas-700 dark:bg-white/5 dark:text-canvas-300">{tech}</li>)}
              </ul>
              <p className="mt-6 text-xs text-canvas-500 dark:text-canvas-400">{project.showcaseCover?.caption ?? 'Official Google Play promotional artwork.'}</p>
            </div>
          </article>
        </Reveal>
      </div>
    </section>
  );
}
