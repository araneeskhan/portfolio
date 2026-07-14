import { useEffect, useMemo, useState, useRef } from "react";
import type { ReactNode } from "react";
import type { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import Layout from "@/components/Layout";
import { projectsData, type Project } from "@/data/projects";

type ProjectWithId = Project & { id: string };

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(projectsData).map((id) => ({
    params: { id },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string;
  const project = projectsData[id] ?? null;

  return { props: { project: project ? { id, ...project } : null } };
};

interface Props {
  project: ProjectWithId | null;
}

const getCoverImage = (project: Project) =>
  Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage;

export default function ProjectDetails({ project }: Props) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const gallery = useMemo(() => project?.screenshots ?? [], [project]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  if (!project) {
    return (
      <Layout title="Project Not Found">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-white dark:bg-canvas-950">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-accent-500 dark:text-accent-400">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl md:text-6xl font-black text-canvas-950 dark:text-white">
            Project not found
          </h1>
          <p className="mt-4 max-w-md text-canvas-600 dark:text-canvas-400">
            This project does not exist or has been moved.
          </p>
          <Link
            href="/#projects"
            className="btn-primary mt-8"
          >
            <i className="fas fa-arrow-left"></i>
            <span>Back to Projects</span>
          </Link>
        </div>
      </Layout>
    );
  }

  const cover = getCoverImage(project);

  const openGallery = (image: string) => {
    const index = gallery.findIndex((item) => item.path === image);
    setCurrentImageIndex(index >= 0 ? index : 0);
    setSelectedImage(image);
  };

  const nextImage = () => {
    if (!gallery.length) return;
    const nextIndex = (currentImageIndex + 1) % gallery.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(gallery[nextIndex].path);
  };

  const prevImage = () => {
    if (!gallery.length) return;
    const previousIndex =
      currentImageIndex === 0 ? gallery.length - 1 : currentImageIndex - 1;
    setCurrentImageIndex(previousIndex);
    setSelectedImage(gallery[previousIndex].path);
  };

  return (
    <Layout
      title={`${project.title} | Project Details`}
      description={project.shortDescription ?? project.description}
    >
      <article className="relative overflow-hidden bg-white dark:bg-canvas-950">
        
        {/* Glow Effects */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="glow-orb left-0 top-0 h-[500px] w-[500px] bg-accent-500/[0.05]" />
          <div className="glow-orb right-0 top-1/4 h-[400px] w-[400px] bg-accent2-500/[0.04]" />
        </div>

        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[82vh] overflow-hidden pt-28">
          <motion.div style={{ y: heroY, opacity: heroOpacity }} className="absolute inset-0">
            <Image
              src={cover}
              alt={`${project.title} cover`}
              fill
              priority
              className="object-cover opacity-20 dark:opacity-20"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-white/40 dark:from-canvas-950 dark:via-canvas-950/80 dark:to-canvas-950/40"></div>
          </motion.div>

          <div className="section-container relative z-10 pb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Link
                href="/#projects"
                className="group inline-flex items-center gap-2 text-sm font-bold text-canvas-600 transition-colors hover:text-accent-600 dark:text-canvas-400 dark:hover:text-accent-400"
              >
                <i className="fas fa-arrow-left transition-transform group-hover:-translate-x-1"></i>
                Back to Projects
              </Link>
            </motion.div>

            <div className="mt-10 grid gap-10 items-end lg:grid-cols-[1.05fr_0.95fr]">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <div className="flex flex-wrap items-center gap-3">
                  {project.category && (
                    <span className="rounded-full bg-accent-500/10 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-accent-600 dark:bg-accent-500/20 dark:text-accent-400">
                      {project.category}
                    </span>
                  )}
                  {project.status && (
                    <span className="rounded-full bg-canvas-100 px-4 py-2 font-display text-xs font-bold uppercase tracking-widest text-canvas-700 dark:bg-white/10 dark:text-canvas-300">
                      {project.status}
                    </span>
                  )}
                </div>

                <h1 className="mt-6 max-w-4xl font-display text-5xl font-bold tracking-tight text-canvas-950 dark:text-white md:text-7xl">
                  {project.title}
                </h1>
                <p className="mt-5 max-w-2xl font-display text-lg leading-relaxed text-canvas-600 dark:text-canvas-300 md:text-xl">
                  {project.shortDescription ?? project.description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary font-display"
                  >
                    <span>Source Code</span>
                    <i className="fab fa-github"></i>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary font-display"
                    >
                      <span>Live Demo</span>
                      <i className="fas fa-arrow-up-right-from-square"></i>
                    </a>
                  )}
                  {project.caseStudyUrl && (
                    <Link
                      href={project.caseStudyUrl}
                      className="btn-secondary font-display"
                    >
                      <span>Case Study</span>
                      <i className="fas fa-microscope"></i>
                    </Link>
                  )}
                </div>
              </motion.div>

              <motion.button
                type="button"
                onClick={() => openGallery(cover)}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="group relative min-h-[420px] overflow-hidden rounded-3xl shadow-glow ring-1 ring-canvas-200/50 dark:ring-white/10"
                aria-label={`Open ${project.title} image preview`}
              >
                <Image
                  src={cover}
                  alt={`${project.title} product preview`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-4">
                  <span className="font-display text-sm font-bold text-white">
                    Click to preview gallery
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-md transition-colors group-hover:bg-white group-hover:text-canvas-950">
                    <i className="fas fa-expand"></i>
                  </span>
                </div>
              </motion.button>
            </div>
          </div>
        </section>

        {/* Meta Bar */}
        <section className="border-y border-canvas-200/50 bg-canvas-50/50 py-6 dark:border-white/5 dark:bg-white/[0.02] backdrop-blur-sm">
          <div className="section-container">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              <MetaTile label="Role" value={project.role ?? "Developer"} delay={0.1} />
              <MetaTile label="Year" value={project.year ?? "Recent"} delay={0.2} />
              <MetaTile label="Type" value={project.category ?? "Project"} delay={0.3} />
              <MetaTile
                label="Stack"
                value={`${project.technologies.length} technologies`}
                delay={0.4}
              />
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-container py-20 relative z-10">
          <div className="grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-10">
              <InfoPanel title="Project Overview" icon="fa-circle-info" delay={0.1}>
                <p className="font-display text-lg leading-relaxed text-canvas-600 dark:text-canvas-300">
                  {project.description}
                </p>
              </InfoPanel>

              {project.highlights && (
                <InfoPanel title="Engineering Highlights" icon="fa-screwdriver-wrench" delay={0.2}>
                  <motion.div 
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="grid gap-4 md:grid-cols-3"
                  >
                    {project.highlights.map((highlight) => (
                      <motion.div
                        variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                        key={highlight}
                        className="group rounded-2xl border border-canvas-200/40 bg-canvas-50 p-5 transition-all hover:border-accent-500/30 hover:bg-white dark:border-white/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                      >
                        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 text-accent-600 transition-transform duration-300 group-hover:scale-110 group-hover:bg-accent-500/20 dark:bg-accent-500/20 dark:text-accent-400">
                          <i className="fas fa-check"></i>
                        </div>
                        <p className="font-display text-sm font-semibold leading-relaxed text-canvas-800 dark:text-canvas-200">
                          {highlight}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </InfoPanel>
              )}

              <InfoPanel title="Key Features" icon="fa-star" delay={0.3}>
                  <motion.div 
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="grid gap-3 md:grid-cols-2"
                  >
                    {project.features.map((feature) => (
                      <motion.div
                        variants={{ hidden: { opacity: 0, x: -20 }, show: { opacity: 1, x: 0 } }}
                        key={feature}
                        className="group flex gap-3 rounded-2xl border border-canvas-200/40 bg-canvas-50 p-4 transition-colors hover:border-emerald-500/30 hover:bg-white dark:border-white/5 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]"
                      >
                        <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-600 transition-transform duration-300 group-hover:scale-110 dark:text-emerald-400">
                          <i className="fas fa-check"></i>
                        </span>
                        <p className="font-display text-sm leading-relaxed text-canvas-700 dark:text-canvas-300">
                          {feature}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
              </InfoPanel>

              {gallery.length > 0 && (
                <InfoPanel title="Product Gallery" icon="fa-images" delay={0.4}>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                    {gallery.map((screenshot, index) => (
                      <button
                        key={`${screenshot.path}-${index}`}
                        type="button"
                        onClick={() => openGallery(screenshot.path)}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-canvas-200/40 bg-canvas-100 dark:border-white/5 dark:bg-canvas-900"
                        aria-label={`Open screenshot ${index + 1}`}
                      >
                        <Image
                          src={screenshot.path}
                          alt={screenshot.alt ?? `${project.title} screenshot ${index + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-canvas-950/0 transition-colors group-hover:bg-canvas-950/20"></div>
                      </button>
                    ))}
                  </div>
                </InfoPanel>
              )}
            </div>

            <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
              {project.metrics && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="rounded-3xl bg-canvas-950 p-6 text-white shadow-xl dark:border dark:border-white/10 dark:bg-canvas-950/80 dark:backdrop-blur-xl"
                >
                  <h2 className="font-display text-lg font-bold">Project Signals</h2>
                  <motion.div 
                    variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
                    initial="hidden" whileInView="show" viewport={{ once: true }}
                    className="mt-5 grid gap-3"
                  >
                    {project.metrics.map((metric) => (
                      <motion.div
                        variants={{ hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } }}
                        key={metric.label}
                        className="rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10"
                      >
                        <p className="font-display text-2xl font-bold">{metric.value}</p>
                        <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-canvas-400">
                          {metric.label}
                        </p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="surface-card p-6"
              >
                <h2 className="font-display text-lg font-bold text-canvas-950 dark:text-white">
                  Technology Stack
                </h2>
                <motion.div 
                  variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05 } } }}
                  initial="hidden" whileInView="show" viewport={{ once: true }}
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
                      whileHover={{ scale: 1.05 }}
                      key={tech}
                      className="rounded-full border border-canvas-200/40 bg-white/50 px-3.5 py-1.5 font-display text-[13px] font-bold text-canvas-700 shadow-sm backdrop-blur-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-canvas-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </aside>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                className="relative w-full max-w-7xl"
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ duration: 0.3 }}
                onClick={(event) => event.stopPropagation()}
              >
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="absolute right-0 top-[-3rem] flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                  aria-label="Close gallery"
                >
                  Close
                  <i className="fas fa-times"></i>
                </button>

                {gallery.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevImage}
                      className="absolute -left-12 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/50 hover:text-white hidden md:flex"
                      aria-label="Previous screenshot"
                    >
                      <i className="fas fa-chevron-left text-2xl"></i>
                    </button>
                    <button
                      type="button"
                      onClick={nextImage}
                      className="absolute -right-12 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full text-white/50 hover:text-white hidden md:flex"
                      aria-label="Next screenshot"
                    >
                      <i className="fas fa-chevron-right text-2xl"></i>
                    </button>
                  </>
                )}

                <div className="relative flex max-h-[86vh] items-center justify-center rounded-2xl border border-white/5 bg-canvas-950 p-2">
                  <Image
                    src={selectedImage}
                    alt={`${project.title} enlarged screenshot`}
                    width={1400}
                    height={900}
                    className="max-h-[82vh] w-auto rounded-xl object-contain"
                  />
                </div>
                
                {gallery.length > 1 && (
                   <div className="mt-4 flex justify-center gap-4 md:hidden">
                    <button onClick={prevImage} className="text-white/70 hover:text-white"><i className="fas fa-chevron-left text-2xl"></i></button>
                    <button onClick={nextImage} className="text-white/70 hover:text-white"><i className="fas fa-chevron-right text-2xl"></i></button>
                   </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </article>
    </Layout>
  );
}

const MetaTile = ({ label, value, delay }: { label: string; value: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="rounded-2xl border border-canvas-200/40 bg-white/50 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.02]"
  >
    <p className="text-xs font-bold uppercase tracking-widest text-canvas-500 dark:text-canvas-400">
      {label}
    </p>
    <p className="mt-2 font-display text-base font-bold text-canvas-950 dark:text-white">
      {value}
    </p>
  </motion.div>
);

const InfoPanel = ({
  title,
  icon,
  children,
  delay
}: {
  title: string;
  icon: string;
  children: ReactNode;
  delay: number;
}) => (
  <motion.section
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay }}
    className="surface-card p-6 md:p-8"
  >
    <h2 className="mb-6 flex items-center gap-3 font-display text-2xl font-bold text-canvas-950 dark:text-white">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-500 to-accent2-500 text-white shadow-lg">
        <i className={`fas ${icon}`}></i>
      </span>
      {title}
    </h2>
    {children}
  </motion.section>
);
