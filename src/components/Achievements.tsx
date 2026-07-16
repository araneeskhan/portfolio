import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

const achievements = [
  {
    id: 1,
    image: '/assets/achievement-1.jpg',
    position: '1st Position',
    title: 'Career Expo 2024',
    category: 'Hybrid Category',
    description:
      'Secured first position in the Hybrid category for "Campus Sports Sphere", a web and mobile sports management system for university operations.',
    date: '2024',
    recognition: 'Winner',
    project: 'Hybrid App',
  },
  {
    id: 2,
    image: '/assets/certificates/fyp.jpeg',
    position: 'FYP Recognition',
    title: 'Career Expo Fall \'24',
    category: 'Final Year Project',
    description:
      'Recognized at the COMSATS Industrial Connect Career Expo Fall 2024 for outstanding Final Year Project presentation and technical execution.',
    date: '2024',
    recognition: 'Certified',
    project: 'Final Year Project',
  },
];

/* Sticky stacking achievement card — mirrors the Certifications pattern */
const AchievementCard = ({
  achievement,
  index,
  onPreview,
}: {
  achievement: typeof achievements[0];
  index: number;
  onPreview: (a: typeof achievements[0]) => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.88, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.3, 1]);
  const rotateX = useTransform(scrollYProgress, [0, 1], [8, 0]);

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${110 + index * 28}px` }}
    >
      <motion.div
        style={{ scale, opacity, rotateX }}
        className="group relative overflow-hidden rounded-[2rem] bg-white shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:bg-canvas-900 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
      >
        <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
          {/* Image side */}
          <button
            type="button"
            className="relative min-h-[280px] overflow-hidden text-left sm:min-h-[380px] cursor-zoom-in"
            onClick={() => onPreview(achievement)}
            aria-label={`Preview ${achievement.title}`}
          >
            <motion.div
              layoutId={`achievement-image-${achievement.id}`}
              className="absolute inset-0 h-full w-full overflow-hidden"
            >
              <div className="relative h-full w-full transition-transform duration-700 ease-in-out group-hover:scale-105 will-change-transform">
                <Image
                  src={achievement.image}
                  alt={achievement.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  priority
                />
              </div>
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/80 via-canvas-950/10 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-80" />

            {/* Preview Badge */}
            <motion.span
              className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 font-display text-sm font-bold text-canvas-950 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl"
              initial={false}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.svg
                width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="transition-transform duration-500 group-hover:scale-110"
              >
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </motion.svg>
              Preview
            </motion.span>
          </button>

          {/* Content side */}
          <div className="flex flex-col justify-center p-6 md:p-10">
            <p className="eyebrow w-fit">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              {achievement.position}
            </p>
            <h3 className="mt-6 font-display text-2xl font-bold tracking-tight text-canvas-950 dark:text-white md:text-3xl">
              {achievement.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="font-display rounded-full border border-canvas-200/30 bg-canvas-50/50 px-3 py-1.5 text-sm font-medium text-canvas-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-300 transition-colors duration-300 group-hover:border-accent-500/30">
                {achievement.category}
              </span>
              <span className="font-display rounded-full border border-canvas-200/30 bg-canvas-50/50 px-3 py-1.5 text-sm font-medium text-canvas-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-300 transition-colors duration-300 group-hover:border-accent-500/30">
                {achievement.date}
              </span>
            </div>
            <p className="font-display mt-6 leading-relaxed text-canvas-500 dark:text-canvas-300">
              {achievement.description}
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-canvas-200/20 bg-canvas-50/40 p-4 transition-colors duration-300 group-hover:bg-canvas-100/50 dark:border-white/5 dark:bg-white/[0.02] dark:group-hover:bg-white/[0.04]">
                <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">
                  Recognition
                </p>
                <p className="mt-2 font-display text-lg font-bold text-canvas-950 dark:text-white transition-colors duration-300 group-hover:text-accent-500 dark:group-hover:text-accent-400">
                  {achievement.recognition}
                </p>
              </div>
              <div className="rounded-xl border border-canvas-200/20 bg-canvas-50/40 p-4 transition-colors duration-300 group-hover:bg-canvas-100/50 dark:border-white/5 dark:bg-white/[0.02] dark:group-hover:bg-white/[0.04]">
                <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">
                  Project
                </p>
                <p className="mt-2 font-display text-lg font-bold text-canvas-950 dark:text-white transition-colors duration-300 group-hover:text-accent-500 dark:group-hover:text-accent-400">
                  {achievement.project}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  return (
    <section
      id="achievements"
      className="section-border-top relative pb-32 pt-24 md:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb right-0 top-1/4 h-[400px] w-[400px] bg-accent-500/[0.04]" />
      </div>

      <div className="section-container">
        <SectionHeader
          label="Achievements"
          title="Recognized work with real product depth."
          description="Milestones that reflect execution, presentation, and technical delivery."
        />

        {/* Sticky stacking cards */}
        <div className="relative mx-auto max-w-5xl space-y-6">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              achievement={achievement}
              index={index}
              onPreview={setSelectedAchievement}
            />
          ))}
        </div>
      </div>

      {/* Lightbox with Shared Element Transition */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-canvas-950/90 p-4 sm:p-8 backdrop-blur-xl"
            onClick={() => setSelectedAchievement(null)}
          >
            <motion.div
              className="relative w-full max-w-7xl flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.button
                type="button"
                className="absolute right-0 top-[-3rem] flex items-center gap-2 font-display text-sm font-medium text-white/50 transition-colors hover:text-white z-10"
                onClick={() => setSelectedAchievement(null)}
                aria-label="Close preview"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.2 }}
              >
                Close
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </motion.button>

              {/* The magical shared element */}
              <motion.div
                layoutId={`achievement-image-${selectedAchievement.id}`}
                className="relative flex w-full max-h-[86vh] items-center justify-center overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10"
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
              >
                <Image
                  src={selectedAchievement.image}
                  alt={selectedAchievement.title}
                  width={1920}
                  height={1080}
                  className="max-h-[86vh] w-auto rounded-xl object-contain"
                  priority
                />
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
