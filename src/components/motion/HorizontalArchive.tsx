import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, type MotionValue } from 'motion/react';
import type { ContentItem } from '@/data/types';
import { getCoverImage } from '@/lib/content';

type ItemWithId = ContentItem & { id: string };

interface HorizontalArchiveProps {
  items: ItemWithId[];
  onPreview: (img: string) => void;
  title?: string;
  eyebrow?: string;
  id?: string;
  /** Route prefix for the "Details" link, e.g. "/projects" or "/research" */
  basePath: string;
}

const HorizontalArchive = ({
  items,
  onPreview,
  title = 'More shipped builds',
  eyebrow = 'Archive',
  id,
  basePath,
}: HorizontalArchiveProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    restDelta: 0.001,
  });

  const [activeCard, setActiveCard] = useState<number | null>(null);

  if (items.length === 0) return null;

  return (
    <section id={id} ref={containerRef} className="relative mt-16 h-[300vh]">
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
          <div className="inline-block rounded-3xl bg-canvas-50/95 px-6 py-4 dark:bg-canvas-950/95 shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/10">
            <p className="eyebrow mb-4 inline-flex bg-canvas-50/95 dark:bg-canvas-950/95">
              <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
              {eyebrow}
            </p>
            <h3 className="font-display text-4xl font-bold tracking-tight text-canvas-950 dark:text-white md:text-5xl lg:text-6xl">
              {title}
            </h3>
            <p className="mt-3 font-display text-sm font-medium text-canvas-500 dark:text-canvas-400">
              Keep scrolling to spread the deck
            </p>
          </div>
        </div>

        <motion.div className="relative z-20 mt-40 md:mt-24 flex w-full max-w-sm items-center justify-center transition-transform duration-500" style={{ transform: 'scale(var(--scale))' }}>
          {items.map((item, index) => (
            <StackedCard
              key={item.id}
              item={item}
              index={index}
              total={items.length}
              smoothProgress={smoothProgress}
              isActive={activeCard === index}
              onActivate={() => setActiveCard(activeCard === index ? null : index)}
              basePath={basePath}
              onPreview={onPreview}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const StackedCard = ({
  item,
  index,
  total,
  smoothProgress,
  isActive,
  onActivate,
  basePath,
  onPreview,
}: {
  item: ItemWithId;
  index: number;
  total: number;
  smoothProgress: MotionValue<number>;
  isActive: boolean;
  onActivate: () => void;
  basePath: string;
  onPreview: (img: string) => void;
}) => {
  const center = (total - 1) / 2;
  const offset = index - center;

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
      onClick={onActivate}
      initial={{ x: initialX, y: initialY, rotate: initialRotate }}
      style={{
        x,
        y,
        rotate,
        zIndex: isActive ? 100 : Math.round(20 - Math.abs(offset)),
        willChange: 'transform',
      }}
      whileHover={{
        scale: 1.05,
        rotate: 0,
        y: -16,
        zIndex: 50,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 20,
        mass: 0.8,
      }}
      className="absolute w-[85vw] sm:w-[380px] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] will-change-transform dark:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.7)] cursor-pointer"
    >
      <div className="h-full w-full rounded-2xl bg-canvas-50 dark:bg-canvas-950">
        <ArchiveItemCard item={item} basePath={basePath} onPreview={onPreview} />
      </div>
    </motion.div>
  );
};

const ArchiveItemCard = ({
  item,
  basePath,
  onPreview,
}: {
  item: ItemWithId;
  basePath: string;
  onPreview: (img: string) => void;
}) => {
  const cover = getCoverImage(item);

  return (
    <motion.article className="group overflow-hidden rounded-[2rem] bg-white p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:bg-canvas-900 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]">
      <button
        type="button"
        onClick={() => {
          if (typeof window !== 'undefined' && window.innerWidth < 768) return;
          onPreview(cover);
        }}
        className="relative block h-56 w-full overflow-hidden rounded-2xl md:cursor-zoom-in bg-canvas-50 dark:bg-canvas-950"
        aria-label={`Preview ${item.title}`}
      >
        <Image
          src={cover}
          alt={`${item.title} cover`}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 25vw"
        />
        <div className="absolute inset-0 bg-canvas-950/0 transition-colors duration-500 group-hover:bg-canvas-950/10" />
      </button>

      <div className="p-3 pt-6 pb-2">
        <div className="mb-4 flex items-center justify-between gap-3">
          <span className="font-display text-xs font-bold uppercase tracking-[0.1em] text-blue-500 dark:text-blue-400">{item.category}</span>
          {item.year && <span className="font-display text-[13px] font-bold text-canvas-400 dark:text-canvas-500">{item.year}</span>}
        </div>

        <h3 className="font-display text-2xl font-black text-canvas-950 dark:text-white">{item.title}</h3>
        <p className="mt-3 min-h-[4.5rem] font-display text-[15px] leading-relaxed text-canvas-500 dark:text-canvas-400">{item.shortDescription ?? item.description}</p>

        <div className="mt-5 flex flex-wrap gap-2">
          {item.technologies.slice(0, 3).map((tech) => (
            <span key={tech} className="rounded-full border border-canvas-200/50 bg-canvas-50 px-4 py-1.5 font-display text-xs font-bold text-canvas-600 dark:border-white/5 dark:bg-white/[0.05] dark:text-canvas-300">{tech}</span>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <Link href={`${basePath}/${item.id}`} className="flex flex-1 items-center justify-center rounded-full bg-canvas-950 py-3.5 font-display text-sm font-bold text-white transition-transform hover:scale-[1.02] active:scale-[0.98] dark:bg-white dark:text-canvas-950">
            Details
          </Link>
          {item.githubUrl && (
            <a href={item.githubUrl} target="_blank" rel="noopener noreferrer" className="flex h-12 w-12 items-center justify-center rounded-full border border-canvas-200/60 text-canvas-700 transition-all hover:bg-canvas-50 hover:text-canvas-950 dark:border-white/10 dark:text-canvas-300 dark:hover:bg-white/10 dark:hover:text-white" aria-label={`View ${item.title} source`}>
              <i className="fab fa-github text-[1.1rem]" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default HorizontalArchive;
