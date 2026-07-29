import Link from 'next/link';
import { motion } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  icon: (props: { className?: string }) => React.ReactNode;
}

const services: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Full-Stack Web Development',
    subtitle: 'High-Performance Next.js & React Architectures',
    description:
      'Engineering robust end-to-end web applications with modern Next.js App Router, SSR/SSG caching strategies, type-safe APIs, and responsive design systems built for scale.',
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    id: 'mobile-dev',
    number: '02',
    title: 'Mobile App Development',
    subtitle: 'Native-Quality Cross-Platform iOS & Android',
    description:
      'Crafting fluid React Native & Expo applications with offline-first state management, smooth 60fps gesture physics, and native feature integration.',
    tags: ['React Native', 'Expo', 'Zustand', 'Firebase'],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    id: 'ai-ml',
    number: '03',
    title: 'AI & Machine Learning Integration',
    subtitle: 'Intelligent Models & Production Data Pipelines',
    description:
      'Designing multivariate machine learning pipelines, NLP feature extraction, gradient boosting models, and integrating intelligent microservices into user applications.',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'TensorFlow'],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
  },
  {
    id: 'backend-api',
    number: '04',
    title: 'Backend & API Architecture',
    subtitle: 'Scalable Systems, Auth & Database Engineering',
    description:
      'Designing high-throughput RESTful APIs, relational & document database schemas, authentication layers, and resilient backend architectures with low latency.',
    tags: ['Node.js', 'PostgreSQL', 'MongoDB', 'Redis'],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
  },
  {
    id: 'ui-ux',
    number: '05',
    title: 'UI/UX Engineering & Design Systems',
    subtitle: 'Design Tokens & Micro-Animation Physics',
    description:
      'Transforming Figma designs into reusable component libraries with standardized design tokens, accessible ARIA attributes, and smooth layout transitions.',
    tags: ['Figma', 'CSS Tokens', 'Radix UI', 'Storybook'],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
];

const Services = () => {
  return (
    <section id="services" className="section-border-top relative pb-32 pt-24 md:pt-32 bg-white dark:bg-canvas-950">
      <div className="section-container relative z-10">
        <SectionHeader
          label="Services & Expertise"
          title="Focused execution from concept to shipped product."
          description="Crafting resilient digital products across web frontend, mobile applications, intelligent AI pipelines, backend microservices, and design systems."
        />

        {/* Elegant Bento Grid Layout */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            const isFeatured = index === 0;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group flex flex-col justify-between rounded-[2rem] border border-canvas-200/50 bg-canvas-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-canvas-300 dark:border-white/5 dark:bg-canvas-900/50 dark:hover:border-white/10 dark:hover:bg-canvas-900 ${
                  isFeatured ? 'xl:col-span-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-canvas-950 shadow-sm dark:bg-canvas-800 dark:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="font-mono text-sm font-bold text-canvas-400">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-8 font-display text-2xl font-bold tracking-tight text-canvas-950 dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 font-display text-sm font-bold text-canvas-500 dark:text-canvas-400">
                    {service.subtitle}
                  </p>
                  
                  <p className={`mt-4 font-display text-canvas-600 dark:text-canvas-300 leading-relaxed ${isFeatured ? 'text-lg max-w-xl' : 'text-base'}`}>
                    {service.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-canvas-200 bg-white px-3 py-1 font-display text-[11px] font-bold tracking-wider text-canvas-700 shadow-sm dark:border-white/10 dark:bg-canvas-950 dark:text-canvas-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Clean CTA Banner */}
        <motion.div
          className="relative mt-20 overflow-hidden rounded-[2.5rem] bg-canvas-950 p-10 text-white shadow-2xl dark:bg-white md:p-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative flex flex-col items-start justify-between gap-10 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-xs font-bold uppercase tracking-widest text-canvas-300 dark:bg-canvas-950/5 dark:text-canvas-600">
                <span className="h-2 w-2 rounded-full bg-emerald-400 dark:bg-emerald-500 animate-pulse" />
                Available for New Projects
              </span>
              <h3 className="mt-6 font-display text-3xl font-black tracking-tight text-white dark:text-canvas-950 md:text-4xl lg:text-5xl">
                Ready to build something exceptional?
              </h3>
              <p className="mt-4 max-w-xl font-display text-base font-medium leading-relaxed text-canvas-300 dark:text-canvas-700 md:text-lg">
                Whether you need a full-stack Next.js web platform, an offline-first mobile app, or an intelligent machine learning pipeline, let&apos;s shape your technical vision into reality.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-5 font-display text-base font-bold text-canvas-950 shadow-xl transition-all duration-300 hover:scale-[1.02] hover:bg-canvas-50 dark:bg-canvas-950 dark:text-white dark:hover:bg-canvas-900"
              >
                Start a Conversation
                <svg
                  className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
