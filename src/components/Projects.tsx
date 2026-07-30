import { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { projectsData, type Project } from '@/data/projects';
import SectionHeader from '@/components/SectionHeader';
import HorizontalArchive from '@/components/motion/HorizontalArchive';
import ImageLightbox from '@/components/motion/ImageLightbox';
import { getCoverImage } from '@/lib/content';

type ProjectWithId = Project & { id: string };

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
      </div>

      <HorizontalArchive items={archiveProjects} basePath="/projects" onPreview={setSelectedImage} />

      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
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
          <motion.div
            initial={{ y: "-10%", scale: 1.1 }}
            className="absolute inset-[-10%] h-[120%] w-[120%]"
            style={{ y: imgY, scale: imgScale, willChange: 'transform' }}
          >
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
              <span className="font-display rounded-full bg-canvas-950/70 px-4 py-1.5 text-xs font-bold tracking-wide text-white dark:bg-black/70">
                {project.category}
              </span>
            )}
            {project.status && (
              <span className="font-display rounded-full border border-emerald-400/30 bg-emerald-500/40 px-4 py-1.5 text-xs font-bold tracking-wide text-emerald-200">
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
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-display text-sm font-bold text-canvas-700 transition-colors hover:text-canvas-950 dark:text-canvas-300 dark:hover:text-white">
                <span>Source</span>
                <i className="fab fa-github text-lg" />
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
};

export default Projects;
