import Image from 'next/image';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

const allSkills = [
  { name: 'HTML', icon: '/assets/skills/html.png' },
  { name: 'CSS', icon: '/assets/skills/css.jpg' },
  { name: 'Tailwind CSS', icon: '/assets/skills/tailwind.svg' },
  { name: 'JavaScript', icon: '/assets/skills/javascript.svg' },
  { name: 'TypeScript', icon: '/assets/skills/typescript.svg' },
  { name: 'React', icon: '/assets/skills/react.svg' },
  { name: 'React Native', icon: '/assets/skills/reactnative.png' },
  { name: 'Next.js', icon: '/assets/skills/nextjs.svg' },
  { name: 'Node.js', icon: '/assets/skills/nodejs.png' },
  { name: 'Express.js', icon: '/assets/skills/expressjs.png' },
  { name: 'MongoDB', icon: '/assets/skills/mongodb.svg' },
  { name: 'MySQL', icon: '/assets/skills/mysql.svg' },
  { name: 'Firebase', icon: '/assets/skills/firebase.svg' },
  { name: 'Supabase', icon: '/assets/skills/supabase.png' },
  { name: 'Python', icon: '/assets/skills/python.svg' },
  { name: 'Java', icon: '/assets/skills/java.png' },
  { name: 'TensorFlow', icon: '/assets/skills/tensorflow.png' },
  { name: 'Flower', icon: '/assets/skills/flower.png' },
  { name: 'NLP', icon: '/assets/skills/nlp.svg' },
  { name: 'Neural Networks', icon: '/assets/skills/neuralnetwork.svg' },
  { name: 'GitHub', icon: '/assets/skills/github.png' },
  { name: 'AWS', icon: '/assets/skills/aws.svg' },
  { name: 'Docker', icon: '/assets/skills/docker.svg' },
];

/* Split into 3 rows for different scroll speeds */
const row1 = allSkills.slice(0, 8);
const row2 = allSkills.slice(8, 16);
const row3 = allSkills.slice(16);

const ScrollRow = ({
  skills,
  xRange,
  size = 'lg',
  opacity = 1,
}: {
  skills: typeof allSkills;
  xRange: [number, number];
  size?: 'lg' | 'md' | 'sm';
  opacity?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], xRange);

  const sizeClasses = {
    lg: 'h-20 w-20 rounded-2xl',
    md: 'h-16 w-16 rounded-xl',
    sm: 'h-14 w-14 rounded-xl',
  };

  const imgSizes = { lg: 40, md: 32, sm: 28 };
  const duplicated = [...skills, ...skills, ...skills];

  return (
    <div ref={ref} className="overflow-hidden py-2">
      <motion.div className="flex gap-5" style={{ x }}>
        {duplicated.map((skill, i) => (
          <motion.div
            key={`${skill.name}-${i}`}
            className={`group relative flex shrink-0 ${sizeClasses[size]} items-center justify-center border border-canvas-200/20 bg-white/50 backdrop-blur-sm transition-all duration-500 hover:border-accent-500/30 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.03] dark:hover:border-accent-400/20`}
            style={{ opacity }}
            whileHover={{ scale: 1.2, rotate: 5, y: -4 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={imgSizes[size]}
              height={imgSizes[size]}
              className={`h-${imgSizes[size] / 4} w-${imgSizes[size] / 4} object-contain`}
              style={{ width: imgSizes[size], height: imgSizes[size] }}
            />

            {/* Tooltip */}
            <div className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-canvas-950 px-3 py-1.5 text-[11px] font-semibold text-white opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100 dark:bg-white dark:text-canvas-950">
              {skill.name}
              <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-canvas-950 dark:border-t-white" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="skills" className="section-shell section-border-top overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb left-1/4 top-0 h-[400px] w-[400px] bg-accent2-500/[0.04]" />
        <div className="glow-orb right-1/4 bottom-0 h-[300px] w-[300px] bg-accent-500/[0.03]" style={{ animationDelay: '5s' }} />
      </div>

      <div className="section-container mb-12">
        <SectionHeader
          label="Skills"
          title="A practical stack for modern product engineering."
          description="The tools I use daily across frontend, backend, mobile, AI, and platform work — moving with you as you scroll."
        />
      </div>

      {/* Three rows of scroll-driven floating icons */}
      <div className="space-y-4">
        <ScrollRow skills={row1} xRange={[100, -400]} size="lg" />
        <ScrollRow skills={row2} xRange={[-300, 200]} size="md" opacity={0.8} />
        <ScrollRow skills={row3} xRange={[50, -250]} size="sm" opacity={0.6} />
      </div>

      {/* Stats at the bottom */}
      <div className="section-container mt-16">
        <motion.div
          className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {[
            { value: '23+', label: 'Technologies' },
            { value: '6+', label: 'Frameworks' },
            { value: '8', label: 'Projects' },
            { value: '24+', label: 'Months' },
          ].map((stat) => (
            <div key={stat.label} className="surface-card p-5 text-center">
              <p className="font-display text-2xl font-bold text-canvas-950 dark:text-white">{stat.value}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-canvas-400 dark:text-canvas-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
