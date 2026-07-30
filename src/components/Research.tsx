import Link from 'next/link';
import { motion } from 'motion/react';
import { researchData, type ResearchPaper } from '@/data/research';

type PaperWithId = ResearchPaper & { id: string };

const Research = () => {
  const papers = Object.entries(researchData).map(([id, paper]) => ({ id, ...paper }));

  return (
    <section
      id="research"
      className="section-border-top relative pb-32 pt-24 md:pt-40 bg-white dark:bg-canvas-950"
    >
      <div className="section-container relative z-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2.5fr] gap-12 lg:gap-24">
          {/* Sticky Header Section */}
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
          </div>

          {/* Scrolling Publications List */}
          <div className="flex flex-col">
            {papers.map((paper, index) => (
              <PublicationRow key={paper.id} paper={paper} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PublicationRow = ({ paper, index }: { paper: PaperWithId; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative rounded-[2rem] border border-canvas-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:scale-[1.01] hover:border-canvas-300 hover:shadow-xl dark:border-white/10 dark:bg-canvas-900/30 dark:hover:border-white/20 dark:hover:bg-canvas-900/60 md:px-10 md:py-8 mb-6"
  >
    <Link
      href={`/research/${paper.id}`}
      className="flex flex-col gap-5"
      aria-label={`Read more about ${paper.title}`}
    >
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2 gap-4">
        <h4 className="font-display text-lg font-black tracking-tight text-canvas-950 transition-colors duration-300 line-clamp-2 group-hover:text-accent-500 dark:text-white dark:group-hover:text-accent-400 md:text-xl lg:text-2xl lg:leading-[1.25]">
          {paper.title}
        </h4>
        <div className="shrink-0 font-mono text-sm font-medium text-canvas-400 dark:text-canvas-500">
          {String(index + 1).padStart(2, '0')}{' '}
          <span className="mx-2 text-canvas-300 dark:text-canvas-700">//</span> {paper.year}
        </div>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500 dark:text-accent-400">
          {paper.category}
        </span>
        <span className="h-px w-8 bg-canvas-200 dark:bg-canvas-800"></span>
        <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-canvas-400">
          {paper.status}
        </span>
      </div>

      <p className="max-w-3xl line-clamp-2 font-display text-lg leading-relaxed text-canvas-600 dark:text-canvas-400 md:text-xl">
        {paper.shortDescription ?? paper.description}
      </p>

      <div className="mt-5 flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {paper.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-canvas-200/50 bg-canvas-50 px-4 py-1.5 font-display text-[10px] font-bold uppercase tracking-widest text-canvas-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-400"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-canvas-200 text-canvas-950 transition-all duration-300 group-hover:border-accent-500 group-hover:bg-accent-500 group-hover:text-white dark:border-white/10 dark:text-white dark:group-hover:border-accent-400 dark:group-hover:bg-accent-400 dark:group-hover:text-canvas-950">
          <i className="fas fa-arrow-right text-[16px] transition-transform duration-300 group-hover:-rotate-45"></i>
        </div>
      </div>
    </Link>
  </motion.article>
);

export default Research;
