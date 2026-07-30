import { useEffect, useMemo, useState, useRef } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from "motion/react";
import Layout from "@/components/Layout";
import { researchData, type ResearchPaper } from "@/data/research";
import { getCoverImage } from "@/lib/content";

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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });
  const heroY = useTransform(smoothProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(smoothProgress, [0, 1], [1, 0.95]);

  const gallery = useMemo(() => paper?.screenshots ?? [], [paper]);

  const nextImage = () => {
    if (!gallery.length) return;
    const nextIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(gallery[nextIndex].path);
  };

  const prevImage = () => {
    if (!gallery.length) return;
    const previousIndex = currentImageIndex === 0 ? gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
    setSelectedImage(gallery[previousIndex].path);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedImage(null);
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImage, currentImageIndex]);

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

  const cover = getCoverImage(paper);

  const openGallery = (image: string) => {
    const index = gallery.findIndex((item) => item.path === image);
    setCurrentImageIndex(index >= 0 ? index : 0);
    setSelectedImage(image);
  };

  return (
    <Layout title={`${paper.title} | Research`} description={paper.shortDescription ?? paper.description}>
      <article ref={containerRef} className="relative min-h-screen bg-canvas-50 dark:bg-canvas-950 selection:bg-accent-500/30">

        {/* Immersive Cinematic Hero */}
        <section ref={heroRef} className="relative flex min-h-[95vh] flex-col justify-center overflow-hidden pt-32 pb-20">
          <motion.div style={{ y: heroY, opacity: heroOpacity, scale: heroScale }} className="absolute inset-0 pointer-events-none">
            {/* Massive Blurred Backdrop */}
            <div className="absolute inset-[-10%] z-0">
              <Image src={cover} alt="Background blur" fill className="object-cover opacity-20 blur-[100px] dark:opacity-30 saturate-200" priority sizes="100vw" />
            </div>
            {/* Deep Gradients */}
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-canvas-50/50 via-canvas-50/80 to-canvas-50 dark:from-canvas-950/50 dark:via-canvas-950/80 dark:to-canvas-950" />
            <div className="absolute bottom-0 h-1/2 w-full bg-gradient-to-t from-canvas-50 dark:from-canvas-950" />
          </motion.div>

          <div className="section-container relative z-20 mx-auto max-w-6xl">
            {/* Breadcrumb */}
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} className="mb-10 flex items-center gap-4">
              <Link href="/#research" className="group flex h-10 w-10 items-center justify-center rounded-full border border-canvas-200/50 bg-white/50 text-canvas-600 backdrop-blur-md transition-all hover:border-canvas-300 hover:bg-white hover:text-canvas-950 dark:border-white/10 dark:bg-canvas-900/50 dark:text-canvas-400 dark:hover:border-white/20 dark:hover:bg-canvas-800 dark:hover:text-white">
                <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-0.5"></i>
              </Link>
              <div className="flex items-center gap-3">
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-canvas-500 dark:text-canvas-400">Research</span>
                <span className="h-1 w-1 rounded-full bg-canvas-300 dark:bg-canvas-600"></span>
                <span className="font-display text-[10px] font-bold uppercase tracking-[0.2em] text-accent-500 dark:text-accent-400">{paper.category}</span>
              </div>
            </motion.div>

            {/* Title Block */}
            <div className="max-w-4xl">
              <motion.h1 initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }} animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-display text-5xl font-black tracking-tight text-canvas-950 dark:text-white md:text-7xl lg:text-[5.5rem] lg:leading-[1.05]">
                {paper.title}
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }} className="mt-8 max-w-2xl font-display text-xl leading-relaxed text-canvas-600 dark:text-canvas-300 md:text-2xl font-light">
                {paper.shortDescription ?? paper.description}
              </motion.p>
            </div>

            {/* Hero Image */}
            <motion.div initial={{ opacity: 0, y: 40, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }} className="mt-16 sm:mt-24">
              <button type="button" onClick={() => openGallery(cover)} className="group relative block aspect-[16/10] w-full overflow-hidden rounded-3xl border border-white/20 bg-canvas-200/50 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.15)] ring-1 ring-black/5 backdrop-blur-2xl transition-transform duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.25)] dark:border-white/10 dark:bg-white/5 dark:shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)] dark:ring-white/10 lg:aspect-[21/9]">
                <Image src={cover} alt={`${paper.title} showcase`} fill className="object-cover transition-transform duration-1000 group-hover:scale-105" sizes="100vw" priority />
                <div className="absolute inset-0 bg-canvas-950/0 transition-colors duration-500 group-hover:bg-canvas-950/20" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-canvas-950 shadow-2xl backdrop-blur-md transition-transform duration-300 group-hover:scale-110">
                    <i className="fas fa-expand text-xl"></i>
                  </span>
                </div>
              </button>
            </motion.div>
          </div>
        </section>

        {/* Floating Action Bar */}
        <div className="fixed bottom-6 left-0 right-0 z-40 flex justify-center pointer-events-none lg:bottom-10">
          <motion.div initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.8, duration: 0.8, type: 'spring', damping: 25 }} className="pointer-events-auto flex w-[95vw] max-w-fit flex-wrap items-center justify-center gap-2 rounded-[2rem] border border-canvas-200/50 bg-white/80 p-2 shadow-elevated backdrop-blur-2xl dark:border-white/10 dark:bg-canvas-900/80">
            {paper.liveUrl && (
              <a href={paper.liveUrl} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-2 rounded-full bg-canvas-950 px-6 py-3 font-display text-sm font-bold text-white transition-all hover:bg-canvas-800 dark:bg-white dark:text-canvas-950 dark:hover:bg-canvas-100">
                <span>Read Paper</span>
                <i className="fas fa-arrow-up-right-from-square text-sm"></i>
              </a>
            )}
          </motion.div>
        </div>

        {/* Content Layout */}
        <section className="relative z-20 pb-32 pt-10">
          <div className="section-container mx-auto max-w-6xl">

            {/* Bento Box: Overview & Meta */}
            <div className="grid gap-6 lg:grid-cols-3">

              {/* Large Overview Card */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6 }} className="relative overflow-hidden rounded-[2rem] border border-canvas-200/40 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-canvas-900/50 lg:col-span-2 lg:p-12">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent-500/10 blur-3xl" />
                <h2 className="font-display text-xl font-bold text-canvas-950 dark:text-white">Abstract</h2>
                <p className="mt-6 font-display text-lg leading-loose text-canvas-600 dark:text-canvas-300 lg:text-xl">
                  {paper.description}
                </p>
              </motion.div>

              {/* Meta Stats Stack */}
              <div className="flex flex-col gap-6">
                <BentoStat label="Role" value={paper.role ?? "Researcher"} delay={0.1} />
                <BentoStat label="Year" value={paper.year ?? "2026"} delay={0.2} />
                <BentoStat label="Domain" value={paper.category ?? "Research"} delay={0.3} />
              </div>
            </div>

            {/* Bento Box: Highlights & Focus Areas */}
            <div className="mt-6 grid gap-6 lg:grid-cols-12">

              {/* Features (Span 7) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: 0.1 }} className="rounded-[2rem] border border-canvas-200/40 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-canvas-900/50 lg:col-span-7 lg:p-10">
                <h2 className="mb-8 font-display text-xl font-bold text-canvas-950 dark:text-white">Key Contributions</h2>
                <div className="flex flex-col gap-4">
                  {paper.features.map((feature, i) => (
                    <motion.div key={i} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 + 0.2 }} className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-colors hover:border-canvas-200/50 hover:bg-canvas-50 dark:hover:border-white/5 dark:hover:bg-white/[0.02]">
                      <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-accent-500/10 text-[10px] text-accent-600 dark:bg-accent-500/20 dark:text-accent-400">
                        <i className="fas fa-check"></i>
                      </span>
                      <p className="font-display text-sm font-medium leading-relaxed text-canvas-700 dark:text-canvas-300">
                        {feature}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Methods & Tools (Span 5) */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-col rounded-[2rem] border border-canvas-200/40 bg-canvas-950 p-8 shadow-xl dark:border-white/10 dark:bg-canvas-900 lg:col-span-5 lg:p-10 text-white">
                <h2 className="mb-8 font-display text-xl font-bold">Findings</h2>

                {paper.metrics && (
                  <div className="mb-10 grid grid-cols-2 gap-4">
                    {paper.metrics.map((metric, i) => (
                      <div key={i} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <p className="font-display text-xl font-black leading-tight text-white break-words xl:text-2xl">{metric.value}</p>
                        <p className="mt-2 font-display text-[10px] font-bold uppercase tracking-widest text-canvas-400">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-auto flex flex-wrap gap-2">
                  {paper.technologies.map((tech, i) => (
                    <motion.span key={tech} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 + 0.3 }} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 font-display text-xs font-bold text-canvas-300 transition-colors hover:bg-white/10 hover:text-white">
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Fullscreen Lightbox Overlay */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 z-50 flex items-center justify-center bg-canvas-950/95 backdrop-blur-xl" onClick={() => setSelectedImage(null)}>
              <button type="button" onClick={() => setSelectedImage(null)} className="absolute right-6 top-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20">
                <i className="fas fa-times text-xl"></i>
              </button>

              <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} transition={{ type: "spring", damping: 25, stiffness: 300 }} className="relative flex h-full max-h-[90vh] w-full max-w-[90vw] items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                <Image src={selectedImage} alt="Enlarged screenshot" width={1920} height={1080} className="max-h-full max-w-full rounded-lg object-contain drop-shadow-2xl" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Layout>
  );
}

const BentoStat = ({ label, value, delay, children }: { label: string; value?: string, delay: number, children?: React.ReactNode }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.5, delay }} className="flex flex-1 flex-col justify-center rounded-[2rem] border border-canvas-200/40 bg-white p-8 shadow-sm dark:border-white/5 dark:bg-canvas-900/50">
    <p className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-canvas-400">{label}</p>
    {value && <p className="mt-2 font-display text-2xl font-black tracking-tight text-canvas-950 dark:text-white">{value}</p>}
    {children}
  </motion.div>
);
