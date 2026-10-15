import { useCallback, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import Layout from '@/components/Layout';
import Reveal from '@/components/motion/Reveal';
import ImageLightbox from '@/components/motion/ImageLightbox';
import { ShowcaseArtwork, ProductIdentity, StoreLink, type ProductProject } from '@/components/GameShowcase';

export default function ProductCaseStudy({ project, mdxSource }: { project: ProductProject; mdxSource: MDXRemoteSerializeResult | null }) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const closePreview = useCallback(() => setSelectedIndex(null), []);
  const gallery = project.screenshots ?? [];
  const selected = selectedIndex === null ? null : gallery[selectedIndex];
  const movePreview = (direction: number) => setSelectedIndex((index) => index === null ? null : (index + direction + gallery.length) % gallery.length);

  return (
    <Layout title={project.title} description={project.shortDescription} canonicalPath={`/projects/${project.id}`} ogImage={project.socialImage} ogImageWidth={project.socialImage ? 1200 : undefined} ogImageHeight={project.socialImage ? 630 : undefined} ogType="article">
      <article className="product-case-study bg-canvas-50 pb-20 pt-24 font-sans dark:bg-canvas-950 sm:pt-28">
        <div className="section-container">
          <header className="mb-6">
            <Link href={`/#${project.id}`} className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-canvas-600 hover:text-accent-600 dark:text-canvas-300 dark:hover:text-accent-300"><span aria-hidden="true">←</span> Back to Game</Link>
            <Reveal as="div" direction="fade" className="mt-3">
              <ProductIdentity project={project} />
              <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-tight tracking-tight text-canvas-950 dark:text-white sm:text-4xl lg:text-5xl">{project.title}</h1>
              <div className="mt-4 flex flex-col justify-between gap-6 lg:flex-row lg:items-start">
                <p className="max-w-2xl text-base leading-relaxed text-canvas-600 dark:text-canvas-300 sm:text-lg">{project.shortDescription}</p>
                <StoreLink project={project} className="w-full shrink-0 sm:w-auto" />
              </div>
            </Reveal>
          </header>

          <Reveal as="div" direction="fade" className="overflow-hidden rounded-2xl border border-canvas-200 bg-canvas-100 dark:border-white/10 dark:bg-canvas-900">
            <ShowcaseArtwork project={project} />
          </Reveal>
          <p className="mt-3 text-xs text-canvas-500 dark:text-canvas-400">{project.showcaseCover?.caption ?? 'Official Google Play promotional artwork.'}</p>

          <dl className="mt-10 grid gap-6 border-y border-canvas-200 py-7 dark:border-white/10 sm:grid-cols-2 lg:grid-cols-[0.6fr_1fr_0.8fr_1.4fr]">
            {project.platform && <Fact label="Platform" value={project.platform} />}
            {project.role && <Fact label="Role" value={project.role} />}
            {project.releasedAt && <Fact label="Released" value={project.releasedAt} />}
            {!!project.technologies?.length && <Fact label="Technology" value={project.technologies.join(' · ')} />}
          </dl>

          <div className="mx-auto mt-12 max-w-3xl">
            <Reveal as="div" direction="fade" className="product-prose">
              {mdxSource ? <MDXRemote {...mdxSource} /> : <p>{project.description}</p>}
            </Reveal>
          </div>

          {!!gallery.length && (
            <section aria-labelledby="product-visuals" className="mt-16 border-t border-canvas-200 pt-10 dark:border-white/10">
              <h2 id="product-visuals" className="font-display text-2xl font-bold text-canvas-950 dark:text-white">A closer look</h2>
              <p className="mt-3 text-sm leading-relaxed text-canvas-600 dark:text-canvas-300">The custom cover and complete Google Play promotional gallery. Select any image to enlarge it.</p>
              <div className="mt-7 columns-1 gap-7 sm:columns-2 lg:columns-3">
                {gallery.map((shot, index) => (
                  <Reveal key={shot.path} as="div" direction="fade" delay={(index % 3) * 0.06} className={`mb-7 break-inside-avoid ${shot.path === project.showcaseCover?.desktop ? '[column-span:all]' : ''}`}>
                    <figure>
                      <button type="button" onClick={() => setSelectedIndex(index)} aria-label={`Enlarge ${shot.alt ?? `image ${index + 1}`}`} className="block w-full overflow-hidden rounded-2xl border border-canvas-200 dark:border-white/10">
                        <Image src={shot.path} alt={shot.alt ?? `${project.title} image ${index + 1}`} width={shot.width ?? 800} height={shot.height ?? (shot.type === 'mobile' ? 1200 : 600)} sizes={shot.path === project.showcaseCover?.desktop ? '(max-width: 1280px) calc(100vw - 96px), 1184px' : '(max-width: 640px) calc(100vw - 40px), (max-width: 1024px) 45vw, 370px'} className="h-auto w-full" />
                      </button>
                      <figcaption className="mt-3 text-sm leading-relaxed text-canvas-600 dark:text-canvas-300">{shot.caption ?? shot.alt}</figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </section>
          )}

          <Reveal as="div" direction="fade" className="mt-16 border-t border-canvas-200 pt-10 dark:border-white/10">
            <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
              <div>
                <h2 className="font-display text-2xl font-bold text-canvas-950 dark:text-white">Build your empire.</h2>
                <p className="mt-2 text-canvas-600 dark:text-canvas-300">Available for Android on Google Play.</p>
              </div>
              <StoreLink project={project} className="w-full sm:w-auto" />
            </div>
            <Link href="/#projects" className="mt-6 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-accent-600 dark:text-accent-300"><span aria-hidden="true">←</span> Back to Projects</Link>
          </Reveal>
        </div>
      </article>
      <ImageLightbox image={selected?.path ?? null} alt={selected?.alt} caption={selected?.caption} width={selected?.width} height={selected?.height} onClose={closePreview} onPrevious={gallery.length > 1 ? () => movePreview(-1) : undefined} onNext={gallery.length > 1 ? () => movePreview(1) : undefined} />
    </Layout>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return <div><dt className="font-mono text-[10px] font-semibold uppercase tracking-widest text-canvas-500 dark:text-canvas-400">{label}</dt><dd className="mt-2 text-sm font-medium leading-relaxed text-canvas-800 dark:text-canvas-200">{value}</dd></div>;
}
