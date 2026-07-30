import { useState } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { motion } from "motion/react";
import Layout from "@/components/Layout";
import { researchData, type ResearchPaper } from "@/data/research";
import personal from "@/config/personal";

type PaperWithId = ResearchPaper & { id: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(researchData).map((id) => ({
    params: { id },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const paper = researchData[id] ?? null;
  return { props: { paper: paper ? { id, ...paper } : null } };
};

interface Props {
  paper: PaperWithId | null;
}

export default function ResearchDetails({ paper }: Props) {
  if (!paper) {
    return (
      <Layout title="Paper Not Found">
        <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center dark:bg-canvas-950">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-500 dark:text-accent-400">404</p>
          <h1 className="mt-3 font-display text-4xl font-black text-canvas-950 dark:text-white md:text-6xl">Paper not found</h1>
          <Link href="/#research" className="btn-primary mt-8">
            <i className="fas fa-arrow-left"></i><span>Back to Research</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const citation = `${personal.name}. "${paper.title}." ${paper.year}. ${personal.siteUrl}/research/${paper.id}`;

  return (
    <Layout title={`${paper.title} | Research`} description={paper.shortDescription ?? paper.description}>
      <article className="min-h-screen bg-white pt-32 pb-32 dark:bg-canvas-950 selection:bg-accent-500/30 selection:text-white">
        
        {/* Header Section */}
        <header className="mx-auto max-w-7xl px-6 md:px-12 lg:px-24">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-12">
            <Link href="/#research" className="group inline-flex items-center gap-4 font-display text-xs font-bold uppercase tracking-widest text-canvas-500 transition-colors hover:text-canvas-950 dark:text-canvas-400 dark:hover:text-white">
              <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
              Back to Archive
            </Link>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="border-b border-canvas-200/60 pb-12 dark:border-white/10 md:pb-16">
            <h1 className="font-display text-2xl font-black tracking-tight text-canvas-950 dark:text-white md:text-4xl lg:text-5xl lg:leading-[1.15]">
              {paper.title}
            </h1>
          </motion.div>
        </header>

        {/* Content Section (Split Layout) */}
        <section className="mx-auto max-w-7xl px-6 pt-16 md:px-12 lg:px-24">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1fr_2.5fr] lg:gap-24">
            
            {/* Left Sidebar (Meta info) */}
            <motion.aside initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-col gap-12 lg:sticky lg:top-32 lg:h-fit">
              <div>
                <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-canvas-400">Publication Year</p>
                <p className="font-mono text-xl font-medium text-canvas-950 dark:text-white">{paper.year}</p>
              </div>

              <div>
                <p className="mb-3 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-canvas-400">Category</p>
                <p className="font-display text-sm font-bold tracking-wider text-accent-600 dark:text-accent-400">{paper.category}</p>
                <p className="mt-1 font-display text-sm text-canvas-600 dark:text-canvas-300">{paper.status}</p>
              </div>

              {paper.technologies.length > 0 && (
                <div>
                  <p className="mb-4 font-display text-[10px] font-bold uppercase tracking-[0.2em] text-canvas-400">Methodology</p>
                  <div className="flex flex-col gap-3">
                    {paper.technologies.map(tech => (
                      <span key={tech} className="font-display text-sm font-medium text-canvas-700 dark:text-canvas-300">
                        — {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {paper.liveUrl && (
                <div className="pt-8 border-t border-canvas-200/60 dark:border-white/10">
                  <a href={paper.liveUrl} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between rounded-full border border-canvas-200 p-2 pr-6 transition-colors hover:border-canvas-950 dark:border-white/10 dark:hover:border-white">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-canvas-100 text-canvas-950 transition-colors group-hover:bg-canvas-950 group-hover:text-white dark:bg-white/10 dark:text-white dark:group-hover:bg-white dark:group-hover:text-canvas-950">
                      <i className="fas fa-arrow-right -rotate-45 text-sm transition-transform group-hover:rotate-0"></i>
                    </div>
                    <span className="font-display text-xs font-bold uppercase tracking-widest text-canvas-950 dark:text-white">
                      Read Full Document
                    </span>
                  </a>
                </div>
              )}
            </motion.aside>

            {/* Right Main Content */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="flex flex-col gap-20">
              
              {/* Abstract */}
              <section>
                <h2 className="mb-8 font-display text-2xl font-black text-canvas-950 dark:text-white md:text-3xl">Abstract</h2>
                <div className="prose prose-lg dark:prose-invert max-w-none text-canvas-700 dark:text-canvas-300">
                  <p className="text-xl leading-relaxed md:text-2xl md:leading-[1.7] font-display">
                    {paper.description}
                  </p>
                </div>
              </section>

              {/* Contributions & Findings */}
              {(paper.features.length > 0 || (paper.highlights?.length ?? 0) > 0) && (
                <div className="grid gap-16 md:grid-cols-2">
                  {paper.features.length > 0 && (
                    <section>
                      <h2 className="mb-8 font-display text-xl font-bold text-canvas-950 dark:text-white pb-4 border-b border-canvas-200/60 dark:border-white/10">
                        Key Contributions
                      </h2>
                      <ul className="flex flex-col gap-6">
                        {paper.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-4 text-canvas-700 dark:text-canvas-300 font-display text-lg">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-canvas-950 dark:bg-white" />
                            <span className="leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}

                  {paper.highlights && paper.highlights.length > 0 && (
                    <section>
                      <h2 className="mb-8 font-display text-xl font-bold text-canvas-950 dark:text-white pb-4 border-b border-canvas-200/60 dark:border-white/10">
                        Notable Findings
                      </h2>
                      <ul className="flex flex-col gap-6">
                        {paper.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-4 text-canvas-700 dark:text-canvas-300 font-display text-lg">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-500" />
                            <span className="leading-relaxed">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </section>
                  )}
                </div>
              )}

              {/* Metrics */}
              {paper.metrics && paper.metrics.length > 0 && (
                <section>
                  <h2 className="mb-8 font-display text-xl font-bold text-canvas-950 dark:text-white pb-4 border-b border-canvas-200/60 dark:border-white/10">
                    Research Impact
                  </h2>
                  <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
                    {paper.metrics.map((metric, i) => (
                      <div key={i} className="flex flex-col gap-2">
                        <span className="font-display text-4xl font-black text-canvas-950 dark:text-white">{metric.value}</span>
                        <span className="font-display text-[10px] font-bold uppercase tracking-widest text-canvas-400">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Citation */}
              <section className="mt-8">
                <CitationBlock citation={citation} />
              </section>

            </motion.div>
          </div>
        </section>
      </article>
    </Layout>
  );
}

const CitationBlock = ({ citation }: { citation: string }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(citation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="rounded border border-canvas-200 bg-canvas-50 p-6 dark:border-white/10 dark:bg-canvas-900/50 md:p-8">
      <div className="mb-6 flex items-center justify-between">
         <h3 className="font-display text-xs font-bold uppercase tracking-widest text-canvas-950 dark:text-white">
           Academic Citation
         </h3>
         <button
           type="button"
           onClick={handleCopy}
           className="flex shrink-0 items-center gap-2 font-display text-[10px] font-bold uppercase tracking-widest text-accent-600 transition-colors hover:text-accent-700 dark:text-accent-400 dark:hover:text-accent-300"
         >
           <i className={`fas ${copied ? 'fa-check' : 'fa-copy'}`}></i>
           {copied ? 'Copied' : 'Copy Citation'}
         </button>
      </div>
      <p className="font-mono text-sm leading-relaxed text-canvas-700 selection:bg-accent-500/30 selection:text-canvas-950 dark:text-canvas-400 dark:selection:text-white">
        {citation}
      </p>
    </div>
  );
};
