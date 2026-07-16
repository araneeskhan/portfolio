import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import SectionHeader from '@/components/SectionHeader';

const focusAreas = [
  {
    title: 'Frontend Systems',
    description: 'Responsive interfaces, typed components, polished states, and accessible interaction patterns.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Backend & APIs',
    description: 'REST services, auth flows, relational and document databases, and deployable server architecture.',
    gradient: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Mobile Products',
    description: 'React Native apps with clear navigation, persistent state, and production-minded user journeys.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'AI Integration',
    description: 'ML workflows, NLP features, deterministic automation, and intelligent product experiences.',
    gradient: 'from-orange-500 to-amber-500',
  },
];

/* Word-by-word scroll reveal paragraph */
const ScrollRevealText = ({ text, className }: { text: string; className?: string }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.9', 'start 0.3'],
  });

  const words = text.split(' ');

  return (
    <p ref={containerRef} className={className}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        return <ScrollWord key={i} word={word} range={[start, end]} progress={scrollYProgress} />;
      })}
    </p>
  );
};

const ScrollWord = ({
  word,
  range,
  progress,
}: {
  word: string;
  range: [number, number];
  progress: ReturnType<typeof useScroll>['scrollYProgress'];
}) => {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [4, 0]);

  return (
    <motion.span
      style={{ opacity, y }}
      className="mr-[0.3em] inline-block transition-colors duration-200"
    >
      {word}
    </motion.span>
  );
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineScale = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={sectionRef} id="about" className="section-shell section-border-top">
      <div className="section-container">
        <SectionHeader
          label="About"
          title="Engineering clean, useful digital products."
        />

        {/* Main text - scroll reveals */}
        <div className="mx-auto max-w-4xl">
          <ScrollRevealText
            text="I am a full-stack developer focused on building responsive, user-friendly web and mobile applications. My work is shaped by a practical curiosity: understanding the problem deeply, designing a maintainable system around it, and shipping an experience people can use without friction."
            className="font-display text-2xl font-medium leading-relaxed text-canvas-950 dark:text-white sm:text-3xl md:text-4xl md:leading-snug"
          />

          <div className="my-12 flex items-center gap-6">
            <motion.div
              className="h-px flex-1 bg-gradient-to-r from-accent-500/40 to-transparent"
              style={{ scaleX: lineScale, transformOrigin: 'left' }}
            />
            <motion.span
              className="text-xs font-semibold uppercase tracking-widest text-canvas-400 dark:text-canvas-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              My Stack
            </motion.span>
            <motion.div
              className="h-px flex-1 bg-gradient-to-l from-accent2-500/40 to-transparent"
              style={{ scaleX: lineScale, transformOrigin: 'right' }}
            />
          </div>

          <ScrollRevealText
            text="My core stack includes React, Next.js, React Native, Node.js, Python, and modern database systems. I am especially interested in products where strong engineering and intelligent automation meet to create experiences that feel effortless."
            className="font-display text-xl font-medium leading-relaxed text-canvas-700 dark:text-canvas-200 sm:text-2xl md:text-3xl md:leading-snug"
          />
        </div>

        {/* Focus areas — appearing on scroll with gradient underlines */}
        <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-0 md:grid-cols-2">
          {focusAreas.map((area, i) => (
            <motion.div
              key={area.title}
              className="group relative border-b border-canvas-200/20 py-8 dark:border-white/5 md:px-8"
              initial={{ opacity: 0, x: i % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Number */}
              <span className="font-mono text-xs font-medium text-canvas-300 dark:text-canvas-600">
                0{i + 1}
              </span>

              <h3 className="mt-3 font-display text-xl font-bold text-canvas-950 dark:text-white">
                {area.title}
              </h3>
              <p className="mt-2 font-display text-sm leading-relaxed text-canvas-500 dark:text-canvas-400">
                {area.description}
              </p>

              {/* Animated gradient underline on hover */}
              <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r ${area.gradient} transition-all duration-700 group-hover:w-full`} />
            </motion.div>
          ))}
        </div>

        {/* Credentials line */}
        <motion.div
          className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {[
            { val: '2+', label: 'Years Experience' },
            { val: 'AI', label: "Master's Degree" },
            { val: 'CS', label: "Bachelor's Degree" },
          ].map((cred, i) => (
            <motion.div
              key={cred.label}
              className="flex items-center gap-3"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.1, duration: 0.5 }}
            >
              <span className="font-display text-3xl font-bold text-canvas-950 dark:text-white sm:text-4xl">
                {cred.val}
              </span>
              <span className="text-left text-xs font-medium uppercase tracking-wider text-canvas-400 dark:text-canvas-500">
                {cred.label}
              </span>
              {i < 2 && (
                <span className="ml-5 hidden h-8 w-px bg-canvas-200/40 dark:bg-white/10 sm:block" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
