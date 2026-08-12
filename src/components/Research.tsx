import Link from 'next/link';
import { motion } from 'motion/react';
import { researchData, type ResearchPaper } from '@/data/research';

type PaperWithId = ResearchPaper & { id: string };

const Research = () => {
  const papers = Object.entries(researchData).map(([id, paper]) => ({ id, ...paper }));
  const archived = papers.filter((p) => p.doi).length;

  return (
    <section
      id="research"
      className="section-border-top relative pb-32 pt-24 md:pt-40 bg-white dark:bg-canvas-950"
    >
      <div className="section-container relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_2fr] gap-12 lg:gap-24">
          {/* Masthead */}
          <div className="lg:sticky lg:top-40 lg:h-fit">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-accent-500 dark:text-accent-400 mb-6">
              Publications
            </h2>
            <h3 className="font-display text-2xl font-black tracking-tight text-canvas-950 dark:text-white md:text-5xl lg:text-6xl lg:leading-[1.1]">
              Academic
              <br />
              Research
            </h3>
            <p className="mt-8 font-display text-lg leading-relaxed text-canvas-600 dark:text-canvas-400 max-w-sm">
              Independent research papers spanning security, retrieval-augmented generation, and
              distributed AI architectures.
            </p>

            <dl className="mt-10 flex gap-10 border-t border-canvas-200/70 pt-6 dark:border-white/10">
              <div>
                <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas-500 dark:text-canvas-400">
                  Papers
                </dt>
                <dd className="mt-1.5 font-mono text-lg text-canvas-950 dark:text-white tabular-nums">
                  {String(papers.length).padStart(2, '0')}
                </dd>
              </div>
              {archived > 0 && (
                <div>
                  <dt className="font-mono text-[10px] uppercase tracking-[0.18em] text-canvas-500 dark:text-canvas-400">
                    With DOI
                  </dt>
                  <dd className="mt-1.5 font-mono text-lg text-canvas-950 dark:text-white tabular-nums">
                    {String(archived).padStart(2, '0')}
                  </dd>
                </div>
              )}
            </dl>
          </div>

          {/* Index of publications */}
          <ol className="border-t border-canvas-200/70 dark:border-white/10">
            {papers.map((paper, index) => (
              <PublicationRow key={paper.id} paper={paper} index={index} />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

const PublicationRow = ({ paper, index }: { paper: PaperWithId; index: number }) => (
  <motion.li
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
    className="group relative border-b border-canvas-200/70 dark:border-white/10"
  >
    {/* Rule that draws itself under the hovered entry */}
    <span
      aria-hidden
      className="pointer-events-none absolute -bottom-px left-0 h-px w-full origin-left scale-x-0 bg-canvas-950 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 dark:bg-white"
    />

    <div className="grid gap-x-8 gap-y-4 py-9 md:grid-cols-[2.5rem_1fr] md:py-11">
      <span className="hidden pt-1 font-mono text-xs text-canvas-400 tabular-nums dark:text-canvas-600 md:block">
        {String(index + 1).padStart(2, '0')}
      </span>

      <div>
        {/* Running head */}
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[10px] uppercase tracking-[0.18em] text-canvas-500 dark:text-canvas-400">
          <span className="text-canvas-500 dark:text-canvas-400 md:hidden">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-accent-600 dark:text-accent-400">{paper.category}</span>
          <Rule className="hidden sm:block" />
          <span className="hidden sm:inline">{paper.status}</span>
          <Rule />
          <span className="tabular-nums">{paper.year}</span>
        </div>

        <h4 className="mt-4 max-w-2xl font-display text-xl font-black leading-snug tracking-tight text-canvas-950 transition-colors duration-300 group-hover:text-accent-600 dark:text-white dark:group-hover:text-accent-400 md:text-2xl lg:text-[1.75rem] lg:leading-[1.25]">
          {paper.title}
        </h4>

        <p className="mt-4 max-w-2xl font-display text-base leading-relaxed text-canvas-600 dark:text-canvas-400 md:text-lg">
          {paper.shortDescription ?? paper.description}
        </p>

        {/* Methods — set as a keyword line, the way a paper prints them */}
        <p className="mt-5 max-w-2xl font-mono text-[11px] leading-relaxed text-canvas-500 dark:text-canvas-400">
          {paper.technologies.slice(0, 5).join('  ·  ')}
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          {paper.doi ? (
            <a
              href={`https://doi.org/${paper.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 inline-flex items-center gap-2 border-b border-canvas-300 pb-0.5 font-mono text-[11px] text-canvas-500 transition-colors hover:border-accent-500 hover:text-accent-600 dark:border-white/20 dark:text-canvas-400 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <span className="font-bold uppercase tracking-[0.14em]">
                {paper.publisher ?? 'DOI'}
              </span>
              <span>{paper.doi}</span>
            </a>
          ) : (
            <span />
          )}

          <span className="inline-flex items-center gap-2.5 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-canvas-950 dark:text-white">
            Read paper
            <i className="fas fa-arrow-right text-[11px] transition-transform duration-300 group-hover:translate-x-1.5" />
          </span>
        </div>
      </div>
    </div>

    {/* Whole entry is the link; the DOI anchor above sits on top of it */}
    <Link
      href={`/research/${paper.id}`}
      className="absolute inset-0"
      aria-label={`Read ${paper.title}`}
    />
  </motion.li>
);

const Rule = ({ className = '' }: { className?: string }) => (
  <span aria-hidden className={`h-2.5 w-px bg-canvas-200 dark:bg-white/15 ${className}`} />
);

export default Research;
