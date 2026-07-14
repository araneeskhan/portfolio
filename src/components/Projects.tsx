import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { projectsData, type Project } from '@/data/projects';
import SectionHeader from '@/components/SectionHeader';

type ProjectWithId = Project & { id: string };

const getCoverImage = (project: Project) =>
  Array.isArray(project.coverImage) ? project.coverImage[0] : project.coverImage;

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const projects = Object.entries(projectsData).map(([id, project]) => ({ id, ...project }));
  const featuredProjects = projects.filter((p) => p.featured);
  const archiveProjects = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-border-top relative pb-24 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb right-0 bottom-0 h-[500px] w-[500px] bg-accent-500/[0.04]" />
      </div>

      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <SectionHeader
            align="left"
            label="Selected Work"
            title="Projects with product shape, architecture, and visual polish."
            description="A curated set of builds across healthcare, university operations, document automation, commerce, fintech, and AI tooling."
          />
          <motion.div
            className="surface-card mb-14 grid grid-cols-3 gap-0 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Signal value={featuredProjects.length.toString()} label="Featured" />
            <Signal value={projects.length.toString()} label="Total Builds" />
            <Signal value="Web + Mobile" label="Surface Area" />
          </motion.div>
        </div>

        {/* Featured: alternating full-width cards with parallax */}
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <FeaturedProjectCard
              key={project.id}
              project={project}
              index={index}
              onPreview={setSelectedImage}
            />
          ))}
        </div>

        {/* Archive - Now handled by HorizontalArchive below */}
      </div>

      <HorizontalArchive projects={archiveProjects} onPreview={setSelectedImage} />

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
              className="relative w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.92, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: 30 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                type="button"
                className="absolute right-0 top-[-3rem] flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Close"
              >
                Close
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
              <div className="relative flex max-h-[86vh] items-center justify-center rounded-2xl border border-white/5 bg-canvas-950 p-2">
                <Image src={selectedImage} alt="Project preview" width={1400} height={900} className="max-h-[82vh] rounded-xl object-contain" />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const HorizontalArchive = ({ projects, onPreview }: { projects: ProjectWithId[], onPreview: (img: string) => void }) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative mt-16 h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden py-20">
        
        <div className="absolute top-12 w-full px-5 text-center sm:px-8 z-50 pointer-events-none">
          <p className="eyebrow mb-4 inline-flex bg-canvas-50/80 backdrop-blur-md dark:bg-canvas-950/80">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
            Archive
          </p>
          <h3 className="font-display text-4xl font-bold tracking-tight text-canvas-950 dark:text-white md:text-5xl lg:text-6xl">
            More shipped builds
          </h3>
          <p className="mt-3 font-display text-sm font-medium text-canvas-500 dark:text-canvas-400">
            Keep scrolling to spread the deck
          </p>
        </div>

        <div className="relative mt-24 flex w-full max-w-sm items-center justify-center">
          {projects.map((project, index) => {
            const center = (projects.length - 1) / 2;
            const offset = index - center;
            
            // Fix Framer Motion string interpolation by matching initial and target string structures perfectly
            const initialX = `calc(0vw + 0px)`;
            const targetX = `calc(${offset * 14}vw + ${offset * 35}px)`;
            
            const initialY = `0rem`;
            const targetY = `${Math.abs(offset) * 2.5}rem`;
            
            const x = useTransform(smoothProgress, [0, 1], [initialX, targetX]);
            const y = useTransform(smoothProgress, [0, 1], [initialY, targetY]);
            const rotate = useTransform(smoothProgress, [0, 1], [0, offset * 7]);

            return (
              <motion.div
                key={project.id}
                style={{
                  x,
                  y,
                  rotate,
                  zIndex: Math.round(20 - Math.abs(offset)),
                }}
                whileHover={{
                  scale: 1.08,
                  rotate: 0,
                  y: -20,
                  zIndex: 50,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  mass: 0.8
                }}
                className="absolute w-[85vw] sm:w-[380px] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] will-change-transform dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] cursor-pointer"
              >
                {/* Wrap in a div to prevent the inner card from breaking the layout */}
                <div className="h-full w-full rounded-2xl bg-canvas-50 dark:bg-canvas-950">
                  <ArchiveProjectCard project={project} index={index} onPreview={onPreview} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Signal = ({ value, label }: { value: string; label: string }) => (
  <div className="border-r border-canvas-200/20 p-5 last:border-r-0 dark:border-white/5">
    <p className="font-display text-xl font-bold text-canvas-950 dark:text-white">{value}</p>
    <p className="mt-1 text-xs font-medium uppercase tracking-wider text-canvas-400 dark:text-canvas-500">{label}</p>
  </div>
);

/* Featured project — full-width with scroll-linked parallax image */
const FeaturedProjectCard = ({
  project,
  index,
  onPreview,
}: {
  project: ProjectWithId;
  index: number;
  onPreview: (img: string) => void;
}) => {
  const cover = getCoverImage(project);
  const cardRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const imgScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1.05, 1.15]);

  return (
    <motion.article
      ref={cardRef}
      className="group overflow-hidden rounded-2xl border border-canvas-200/15 bg-white/30 backdrop-blur-sm dark:border-white/5 dark:bg-white/[0.015]"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:grid-flow-dense' : ''}`}>
        {/* Image with parallax */}
        <button
          type="button"
          onClick={() => onPreview(cover)}
          className={`relative block h-[300px] w-full overflow-hidden text-left md:h-[400px] lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
          aria-label={`Preview ${project.title}`}
        >
          <motion.div className="absolute inset-0" style={{ y: imgY, scale: imgScale }}>
            <Image
              src={cover}
              alt={`${project.title} cover`}
              fill
              className="object-cover transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/50 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-canvas-950/10" />

          {/* Badges */}
          <div className="absolute left-5 top-5 flex flex-wrap gap-2">
            {project.category && (
              <span className="rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-canvas-950 backdrop-blur-sm">
                {project.category}
              </span>
            )}
            {project.status && (
              <span className="rounded-full bg-emerald-400/90 px-3 py-1.5 text-xs font-semibold text-emerald-950 backdrop-blur-sm">
                {project.status}
              </span>
            )}
          </div>
        </button>

        {/* Content */}
        <div className={`flex flex-col justify-center p-6 md:p-10 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          <p className="text-sm font-medium text-canvas-400 dark:text-canvas-500">
            {project.role} {project.year ? `/ ${project.year}` : ''}
          </p>
          <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-canvas-950 dark:text-white md:text-3xl">
            {project.title}
          </h3>
          <p className="mt-4 font-display leading-relaxed text-canvas-500 dark:text-canvas-300">
            {project.shortDescription ?? project.description}
          </p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-6">
              {project.metrics.slice(0, 3).map((m) => (
                <div key={m.label}>
                  <p className="font-display text-xl font-bold text-canvas-950 dark:text-white">{m.value}</p>
                  <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">{m.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Tags */}
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full border border-canvas-200/20 bg-canvas-50/40 px-2.5 py-1 font-display text-xs font-medium text-canvas-500 dark:border-white/5 dark:bg-white/[0.02] dark:text-canvas-400">
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={`/projects/${project.id}`} className="btn-primary font-display px-5 py-2.5 text-xs">
              <span>View Details</span>
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </Link>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary font-display px-5 py-2.5 text-xs">
              <span>Source</span>
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/* Archive card with hover lift */
const ArchiveProjectCard = ({
  project,
  index,
  onPreview,
}: {
  project: ProjectWithId;
  index: number;
  onPreview: (img: string) => void;
}) => {
  const cover = getCoverImage(project);

  return (
    <motion.article
      className="group overflow-hidden rounded-2xl border border-canvas-200/15 bg-white/30 backdrop-blur-sm transition-all duration-500 hover:border-accent-500/20 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.015]"
    >
      <button
        type="button"
        onClick={() => onPreview(cover)}
        className="relative block h-44 w-full overflow-hidden text-left"
        aria-label={`Preview ${project.title}`}
      >
        <Image src={cover} alt={`${project.title} cover`} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" sizes="(max-width: 768px) 100vw, 25vw" />
      </button>

      <div className="p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent-500 dark:text-accent-400">{project.category}</span>
          {project.year && <span className="text-xs font-medium text-canvas-400 dark:text-canvas-500">{project.year}</span>}
        </div>
        <h3 className="font-display text-base font-bold text-canvas-950 dark:text-white">{project.title}</h3>
        <p className="mt-2 min-h-[4.5rem] font-display text-sm leading-relaxed text-canvas-500 dark:text-canvas-400">{project.shortDescription ?? project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full bg-canvas-100/60 px-2.5 py-1 font-display text-xs font-medium text-canvas-500 dark:bg-white/[0.04] dark:text-canvas-400">{tech}</span>
          ))}
        </div>

        <div className="mt-5 flex gap-2">
          <Link href={`/projects/${project.id}`} className="btn-primary font-display flex-1 px-4 py-2.5 text-xs"><span>Details</span></Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full border border-canvas-200/30 text-canvas-500 transition-all duration-300 hover:border-accent-500/30 hover:text-accent-500 dark:border-white/5 dark:text-canvas-400" aria-label={`View ${project.title} source`}>
            <i className="fab fa-github" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
