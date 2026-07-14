import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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
  },
];

const Achievements = () => {
  const [selectedAchievement, setSelectedAchievement] = useState<typeof achievements[0] | null>(null);

  return (
    <section
      id="achievements"
      className="section-shell section-border-top"
    >
      <div className="section-container">
        <SectionHeader
          label="Achievements"
          title="Recognized work with real product depth."
          description="Milestones that reflect execution, presentation, and technical delivery."
        />

        <div className="mx-auto max-w-6xl">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.id}
              className="surface-card overflow-hidden group"
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <button
                  type="button"
                  className="relative min-h-[320px] overflow-hidden text-left sm:min-h-[430px] cursor-zoom-in"
                  onClick={() => setSelectedAchievement(achievement)}
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
                  
                  {/* Animated Preview Badge */}
                  <motion.span 
                    className="absolute bottom-6 left-6 flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-canvas-950 shadow-xl backdrop-blur-md transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl"
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
                        Winner
                      </p>
                    </div>
                    <div className="rounded-xl border border-canvas-200/20 bg-canvas-50/40 p-4 transition-colors duration-300 group-hover:bg-canvas-100/50 dark:border-white/5 dark:bg-white/[0.02] dark:group-hover:bg-white/[0.04]">
                      <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">
                        Project
                      </p>
                      <p className="mt-2 font-display text-lg font-bold text-canvas-950 dark:text-white transition-colors duration-300 group-hover:text-accent-500 dark:group-hover:text-accent-400">
                        Hybrid App
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
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
                className="absolute right-0 top-[-3rem] flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white z-10"
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
