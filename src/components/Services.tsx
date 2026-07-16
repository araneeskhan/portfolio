import Link from 'next/link';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

const services = [
  {
    title: 'Full-Stack Web Development',
    description: 'End-to-end React and Next.js applications connected to robust Node.js APIs and production-ready data layers.',
    tags: ['React', 'Next.js', 'Node.js', 'TypeScript'],
    gradient: 'from-blue-500 to-cyan-500',
    bgTint: 'bg-blue-500/[0.03] dark:bg-blue-500/[0.03]',
  },
  {
    title: 'Mobile App Development',
    description: 'Cross-platform React Native apps with smooth navigation, persistent state, backend integration, and clean mobile UX.',
    tags: ['React Native', 'Expo', 'Firebase', 'Zustand'],
    gradient: 'from-emerald-500 to-teal-500',
    bgTint: 'bg-emerald-500/[0.03] dark:bg-emerald-500/[0.03]',
  },
  {
    title: 'AI & ML Integration',
    description: 'Intelligent product features powered by Python services, NLP pipelines, recommendation logic, and practical ML workflows.',
    tags: ['Python', 'TensorFlow', 'Flask', 'NLP'],
    gradient: 'from-violet-500 to-purple-500',
    bgTint: 'bg-violet-500/[0.03] dark:bg-violet-500/[0.03]',
  },
  {
    title: 'Backend & API Development',
    description: 'Scalable REST APIs, auth, validation, database architecture, and deployable server-side services.',
    tags: ['Express.js', 'MongoDB', 'MySQL', 'Supabase'],
    gradient: 'from-orange-500 to-amber-500',
    bgTint: 'bg-orange-500/[0.03] dark:bg-orange-500/[0.03]',
  },
  {
    title: 'UI/UX to Code',
    description: 'Precise implementation of responsive, accessible interfaces with strong visual hierarchy and reliable states.',
    tags: ['Tailwind CSS', 'Motion', 'Responsive', 'A11y'],
    gradient: 'from-pink-500 to-rose-500',
    bgTint: 'bg-pink-500/[0.03] dark:bg-pink-500/[0.03]',
  },
];

/* Each card in the sticky stack */
const ServiceCard = ({
  service,
  index,
  total,
}: {
  service: (typeof services)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'start start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

  return (
    <div
      ref={cardRef}
      className="sticky"
      style={{ top: `${120 + index * 30}px` }}
    >
      <motion.div
        style={{ scale, opacity }}
        className={`relative overflow-hidden rounded-2xl border border-canvas-200/40 bg-white/90 p-8 shadow-elevated backdrop-blur-3xl transition-shadow duration-500 hover:shadow-glow dark:border-white/10 dark:bg-canvas-950/90 md:p-10`}
      >
        {/* Subtle color tint overlay */}
        <div className={`pointer-events-none absolute inset-0 ${service.bgTint}`} />

        <div className="relative z-10">
          {/* Number */}
          <div className="flex items-start justify-between">
            <span className="font-mono text-sm font-bold text-canvas-400 dark:text-canvas-500">
              0{index + 1}
            </span>
            <span className="text-xs font-bold uppercase tracking-wider text-canvas-400 dark:text-canvas-500">
              Service
            </span>
          </div>

          <h3 className="mt-6 font-display text-2xl font-bold text-canvas-950 dark:text-white md:text-3xl">
            {service.title}
          </h3>
          <p className="mt-4 max-w-2xl font-display text-base font-medium leading-relaxed text-canvas-600 dark:text-canvas-300 md:text-lg">
            {service.description}
          </p>

          {/* Tags */}
          <div className="mt-6 flex flex-wrap gap-2">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-canvas-200/40 bg-white/80 px-3.5 py-1.5 font-display text-[13px] font-bold text-canvas-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-canvas-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r ${service.gradient}`} />
      </motion.div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="section-border-top relative pb-32 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb right-0 top-1/4 h-[400px] w-[400px] bg-accent-500/[0.04]" />
      </div>

      <div className="section-container">
        <SectionHeader
          label="Services"
          title="Focused execution from product idea to shipped interface."
          description="I cover the important product layers: experience, frontend, backend, mobile, and intelligent automation."
        />

        {/* Sticky card stack */}
        <div className="relative mx-auto max-w-4xl space-y-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              service={service}
              index={index}
              total={services.length}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="relative z-10 mx-auto mt-16 max-w-4xl overflow-hidden rounded-2xl bg-canvas-950 p-8 text-white dark:bg-white dark:text-canvas-950 md:p-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="absolute -right-12 -top-12 h-48 w-48 rounded-full bg-accent-500/20 blur-3xl" />
          <div className="absolute -left-8 -bottom-8 h-32 w-32 rounded-full bg-accent2-500/15 blur-3xl" />

          <div className="relative">
            <h3 className="font-display text-2xl font-bold md:text-3xl">Have a project in mind?</h3>
            <p className="mt-4 max-w-xl font-display font-medium leading-relaxed text-canvas-300 dark:text-canvas-600">
              Share the goals, constraints, and timeline. I&apos;ll help shape the technical direction
              and build a product that feels complete.
            </p>
            <Link
              href="/#contact"
              className="mt-6 inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-3.5 text-sm font-bold text-canvas-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl dark:bg-canvas-950 dark:text-white"
            >
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
