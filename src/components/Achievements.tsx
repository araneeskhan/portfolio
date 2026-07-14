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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
              className="surface-card overflow-hidden"
              initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <button
                  type="button"
                  className="group relative min-h-[320px] overflow-hidden text-left sm:min-h-[430px]"
                  onClick={() => setSelectedImage(achievement.image)}
                  aria-label={`Preview ${achievement.title}`}
                >
                  <Image
                    src={achievement.image}
                    alt={achievement.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/60 via-canvas-950/10 to-transparent" />
                  <span className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-sm font-semibold text-canvas-950 backdrop-blur-sm">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                    </svg>
                    Preview
                  </span>
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
                    <span className="font-display rounded-full border border-canvas-200/30 bg-canvas-50/50 px-3 py-1.5 text-sm font-medium text-canvas-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-300">
                      {achievement.category}
                    </span>
                    <span className="font-display rounded-full border border-canvas-200/30 bg-canvas-50/50 px-3 py-1.5 text-sm font-medium text-canvas-600 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-300">
                      {achievement.date}
                    </span>
                  </div>
                  <p className="font-display mt-6 leading-relaxed text-canvas-500 dark:text-canvas-300">
                    {achievement.description}
                  </p>
                  <div className="mt-8 grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-canvas-200/20 bg-canvas-50/40 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                      <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">
                        Recognition
                      </p>
                      <p className="mt-2 font-display text-lg font-bold text-canvas-950 dark:text-white">
                        Winner
                      </p>
                    </div>
                    <div className="rounded-xl border border-canvas-200/20 bg-canvas-50/40 p-4 dark:border-white/5 dark:bg-white/[0.02]">
                      <p className="font-display text-[10px] font-semibold uppercase tracking-wider text-canvas-400">
                        Project
                      </p>
                      <p className="mt-2 font-display text-lg font-bold text-canvas-950 dark:text-white">
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
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
            >
              <button
                type="button"
                className="absolute right-0 top-[-3rem] text-sm font-medium text-white/70 transition-colors hover:text-white"
                onClick={() => setSelectedImage(null)}
                aria-label="Close achievement preview"
              >
                Close
              </button>
              <div className="relative flex max-h-[86vh] items-center justify-center rounded-2xl border border-white/5 bg-canvas-950 p-2">
                <Image
                  src={selectedImage}
                  alt="Achievement full view"
                  width={1200}
                  height={800}
                  className="max-h-[82vh] rounded-xl object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Achievements;
