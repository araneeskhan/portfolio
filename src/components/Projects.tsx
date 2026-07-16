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
    stiffness: 80,
    damping: 24,
    restDelta: 0.001
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <section ref={containerRef} className="relative mt-16 h-[300vh]">
      <style>{`
        .archive-stack {
          --spread-x: 12vw;
          --spread-px: 0px;
          --spread-y: 0rem;
          --spread-y-dir: 8rem;
          --rot: 4deg;
          --scale: 0.8;
        }
        @media (min-width: 768px) {
          .archive-stack {
            --spread-x: 14vw;
            --spread-px: 35px;
            --spread-y: 2.5rem;
            --spread-y-dir: 0rem;
            --rot: 7deg;
            --scale: 1;
          }
        }
      `}</style>
      <div className="archive-stack sticky top-0 flex h-[100dvh] flex-col items-center justify-center py-20">
        
        <div className="absolute top-4 md:top-12 w-full px-5 text-center sm:px-8 z-10 pointer-events-none">
          <div className="inline-block rounded-3xl bg-canvas-50/70 px-6 py-4 backdrop-blur-xl dark:bg-canvas-950/70 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10">
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
        </div>

        <motion.div className="relative mt-40 md:mt-24 flex w-full max-w-sm items-center justify-center transition-transform duration-500" style={{ transform: 'scale(var(--scale))', zIndex: useTransform(smoothProgress, [0, 0.15, 1], [0, 20, 20]) }}>
          {projects.map((project, index) => {
            const center = (projects.length - 1) / 2;
            const offset = index - center;
            
            // Fix Framer Motion string interpolation by matching initial and target string structures perfectly
            const initialX = `calc(var(--spread-x) * 0 + var(--spread-px) * 0)`;
            const targetX = `calc(var(--spread-x) * ${offset} + var(--spread-px) * ${offset})`;
            
            const initialY = `calc(var(--spread-y) * 0 + var(--spread-y-dir) * 0)`;
            const targetY = `calc(var(--spread-y) * ${Math.abs(offset)} + var(--spread-y-dir) * ${offset})`;
            
            const initialRotate = `calc(var(--rot) * 0)`;
            const targetRotate = `calc(var(--rot) * ${offset})`;

            const x = useTransform(smoothProgress, [0, 1], [initialX, targetX]);
            const y = useTransform(smoothProgress, [0, 1], [initialY, targetY]);
            const rotate = useTransform(smoothProgress, [0, 1], [initialRotate, targetRotate]);

            return (
              <motion.div
                key={project.id}
                onClick={() => setActiveCard(activeCard === index ? null : index)}
                style={{
                  x,
                  y,
                  rotate,
                  zIndex: activeCard === index ? 100 : Math.round(20 - Math.abs(offset)),
                }}
                whileHover={{
                  scale: 1.05,
                  rotate: 0,
                  y: -16,
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
        </motion.div>
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

  const smoothProgress = useSpring(scrollYProgress, { stiffness: 80, damping: 24, restDelta: 0.001 });
  const imgY = useTransform(smoothProgress, [0, 1], ["-10%", "10%"]);
  const imgScale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: index * 0.1 + 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.article
      ref={cardRef}
      className="group overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.15)] dark:bg-canvas-900 dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-100px' }}
      variants={containerVariants}
    >
      <div className={`grid lg:grid-cols-2`}>
        {/* Image Half */}
        <button
          type="button"
          onClick={() => onPreview(cover)}
          className={`relative block h-[300px] w-full overflow-hidden text-left md:h-[400px] lg:h-full cursor-zoom-in bg-canvas-100 dark:bg-canvas-950 ${index % 2 === 1 ? 'lg:col-start-2 lg:row-start-1' : ''}`}
          aria-label={`Preview ${project.title}`}
        >
          <motion.div className="absolute inset-[-10%] h-[120%] w-[120%]" style={{ y: imgY, scale: imgScale }}>
            <Image
              src={cover}
              alt={`${project.title} cover`}
              fill
              className="object-cover transition-transform duration-1000 ease-in-out group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority={index === 0}
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-canvas-950/0 transition-colors duration-500 group-hover:bg-canvas-950/10" />

          {/* Badges on Image */}
          <div className="absolute left-6 top-6 flex flex-wrap gap-2">
            {project.category && (
              <span className="font-display rounded-full bg-canvas-950/40 px-4 py-1.5 text-xs font-bold tracking-wide text-white backdrop-blur-md dark:bg-black/50">
                {project.category}
              </span>
            )}
            {project.status && (
              <span className="font-display rounded-full border border-emerald-400/30 bg-emerald-500/20 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-300 backdrop-blur-md">
                {project.status}
              </span>
            )}
          </div>
        </button>

        {/* Content Half */}
        <div className={`relative flex flex-col justify-center bg-white p-6 dark:bg-canvas-900 md:p-10 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
          
          <motion.p variants={itemVariants} className="font-display text-[11px] font-bold tracking-[0.15em] uppercase text-blue-500 dark:text-blue-400">
            {project.role} {project.year ? `• ${project.year}` : ''}
          </motion.p>
          
          <motion.h3 variants={itemVariants} className="mt-3 font-display text-3xl font-black tracking-tight text-canvas-950 dark:text-white md:text-4xl lg:text-[2.5rem] lg:leading-tight">
            {project.title}
          </motion.h3>
          
          <motion.p variants={itemVariants} className="mt-4 font-display text-[15px] leading-relaxed text-canvas-500 dark:text-canvas-400">
            {project.shortDescription ?? project.description}
          </motion.p>

          {/* Metrics */}
          {project.metrics && project.metrics.length > 0 && (
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-8">
              {project.metrics.slice(0, 3).map((m) => (
                <div key={m.label} className="flex flex-col">
                  <span className="font-display text-2xl font-black text-canvas-950 dark:text-white lg:text-3xl">{m.value}</span>
                  <span className="font-display mt-1.5 text-[10px] font-bold uppercase tracking-widest text-canvas-400">{m.label}</span>
                </div>
              ))}
            </motion.div>
          )}

          {/* Tags */}
          <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-2">
            {project.technologies.slice(0, 5).map((tech) => (
              <span key={tech} className="rounded-full bg-canvas-50 px-3.5 py-1.5 font-display text-[11px] font-bold text-canvas-600 dark:bg-white/[0.05] dark:text-canvas-300">
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Actions */}
          <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center gap-4">
            {project.caseStudyUrl && (
              <Link href={project.caseStudyUrl} className="flex items-center gap-2 rounded-full bg-blue-500 px-5 py-2.5 font-display text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98]">
                <span>Case Study</span>
                <i className="fas fa-microscope"></i>
              </Link>
            )}
            <Link href={`/projects/${project.id}`} className="flex items-center gap-2 rounded-full bg-canvas-950 px-5 py-2.5 font-display text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-canvas-950">
              <span>View Details</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
            </Link>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-display text-sm font-bold text-canvas-700 transition-colors hover:text-canvas-950 dark:text-canvas-300 dark:hover:text-white">
              <span>Source</span>
              <i className="fab fa-github text-lg" />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};/* Archive card with hover lift */
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
      className="group overflow-hidden rounded-[2rem] bg-white p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:bg-canvas-900 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
    >
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined' && window.innerWidth < 768) return;
          onPreview(cover);
        }}
        className="relative block h-56 w-full overflow-hidden rounded-2xl md:cursor-zoom-in bg-canvas-50 dark:bg-canvas-950"
        aria-label={`Preview ${project.title}`}
      >
        <Image 
          src={cover} 
          alt={`${project.title} cover`} 
          fill 
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
          sizes="(max-width: 768px) 100vw, 25vw" 
        />
        <div className="absolute inset-0 bg-canvas-950/0 transition-colors duration-500 group-hover:bg-canvas-950/10" />
      </button>

      <div className="p-3 pt-6 pb-2">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-500 dark:text-blue-400">{project.category}</span>
          {project.year && <span className="font-display text-[13px] font-bold text-canvas-400 dark:text-canvas-500">{project.year}</span>}
        </div>
        
        <h3 className="font-display text-2xl font-black text-canvas-950 dark:text-white">{project.title}</h3>
        <p className="mt-3 min-h-[4.5rem] font-display text-[15px] leading-relaxed text-canvas-500 dark:text-canvas-400">{project.shortDescription ?? project.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-canvas-200/50 bg-canvas-50 px-4 py-1.5 font-display text-xs font-bold text-canvas-600 dark:border-white/5 dark:bg-white/[0.05] dark:text-canvas-300">{tech}</span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href={`/projects/${project.id}`} className="flex flex-1 items-center justify-center rounded-full bg-canvas-950 py-3.5 font-display text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-canvas-950">
            Details
          </Link>
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-canvas-200/60 text-canvas-700 transition-all hover:bg-canvas-50 hover:text-canvas-950 dark:border-white/10 dark:text-canvas-300 dark:hover:bg-white/10 dark:hover:text-white" aria-label={`View ${project.title} source`}>
            <i className="fab fa-github text-[1.1rem]" />
          </a>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
