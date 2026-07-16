import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import Image from 'next/image';
import SectionHeader from '@/components/SectionHeader';

interface Certification {
  name: string;
  issuer: string;
  description: string;
  gradient: string;
  bgTint: string;
  link: string;
  image: string;
}

const certifications: Certification[] = [
  {
    name: 'Intro to Machine Learning',
    issuer: 'Kaggle',
    gradient: 'from-sky-400 to-cyan-500',
    bgTint: 'bg-sky-500/[0.03] dark:bg-sky-500/[0.03]',
    link: 'https://www.kaggle.com/learn/certification/araneeskhan/intro-to-machine-learning',
    image: '/assets/certificates/Intro to Machine Learning.png',
    description: 'Developed and evaluated predictive machine learning models using Scikit-Learn and Pandas. Built workflows encompassing exploratory data analysis, feature selection, and data splitting for validation. Covered the mechanics of overfitting and underfitting using Decision Tree Regressors, optimized hyperparameters through validation metrics (MAE), and implemented Random Forest Regressors to engineer robust ensemble models for predictive competitions.',
  },
  {
    name: 'Python',
    issuer: 'Kaggle',
    gradient: 'from-yellow-400 to-amber-500',
    bgTint: 'bg-yellow-500/[0.03] dark:bg-yellow-500/[0.03]',
    link: 'https://www.kaggle.com/learn/certification/araneeskhan/python',
    image: '/assets/certificates/Python.png',
    description: 'Completed a comprehensive, hands-on programming track covering core Python syntax, variable management, and data structures. Developed functional proficiency in control flow, loops, list comprehensions, and dictionary structures. Gained practical experience troubleshooting algorithmic logic, debugging runtime exceptions, and utilizing modular external libraries to build programmatic workflows.',
  },
];

const workshopTopics = [
  'Cloud Architecture',
  'Huawei Cloud Services',
  'Cloud Deployment',
  'Infrastructure Design',
  'Resource Management',
];

/* Certification card with certificate image */
const CertCard = ({
  cert,
  index,
}: {
  cert: Certification;
  index: number;
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
        className="group relative overflow-hidden rounded-[2rem] bg-white p-3.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-12px_rgba(0,0,0,0.15)] dark:bg-canvas-900 dark:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
      >
        {/* Certificate Image */}
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          className="relative block overflow-hidden rounded-2xl"
        >
          <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-2xl">
            <Image
              src={cert.image}
              alt={`${cert.name} — Kaggle Certificate`}
              fill
              className="object-cover object-left transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 768px) 100vw, 768px"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-canvas-950/0 transition-all duration-500 group-hover:bg-canvas-950/20">
              <span className="flex items-center gap-2 rounded-full bg-white/90 px-5 py-2.5 font-display text-sm font-bold text-canvas-950 opacity-0 shadow-xl backdrop-blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 translate-y-3">
                View Certificate
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </span>
            </div>
          </div>
        </a>

        {/* Card content */}
        <div className="p-4 pt-5 pb-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex flex-col">
              <span className="font-display text-[10px] font-bold uppercase tracking-[0.1em] text-canvas-400 dark:text-canvas-500">
                Certificate — 0{index + 1}
              </span>
              <h3 className="mt-2 font-display text-2xl font-black text-canvas-950 dark:text-white md:text-3xl">
                {cert.name}
              </h3>
              <p className="mt-1.5 font-display text-[13px] font-bold uppercase tracking-[0.05em] text-canvas-500">
                {cert.issuer}
              </p>
            </div>
            <div className={`mt-2 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <p className="mt-4 font-display text-[15px] leading-relaxed text-canvas-600 dark:text-canvas-400">
            {cert.description}
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/badge inline-flex items-center gap-2 rounded-full bg-canvas-950 px-5 py-2 font-display text-xs font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-canvas-950"
            >
              Verified
              <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover/badge:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-border-top relative z-20 pb-32 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb left-0 top-1/3 h-[400px] w-[400px] bg-accent2-500/[0.04]" />
      </div>

      <div className="section-container">
        <SectionHeader
          label="Credentials"
          title="Validated learning across cloud, AI, and product engineering."
          description="Certifications and hands-on workshops that support the product work shown throughout the portfolio."
        />

        {/* Certification cards */}
        <div className="relative mx-auto max-w-3xl space-y-6">
          {certifications.map((cert, index) => (
            <CertCard key={cert.name} cert={cert} index={index} />
          ))}
        </div>

        {/* Workshop section */}
        <div className="relative z-10 mx-auto mt-16 max-w-4xl">
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <motion.div
              className="rounded-2xl bg-canvas-950 p-6 text-white shadow-xl dark:bg-white dark:text-canvas-950"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-xs font-bold uppercase tracking-widest text-accent-400 dark:text-accent-600">
                Hands-On Learning
              </p>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight md:text-2xl">
                Huawei Cloud Services Workshop
              </h3>
              <p className="mt-4 font-display font-medium leading-relaxed text-canvas-300 dark:text-canvas-600">
                Practical workshop at COMSATS University covering cloud platforms, scalable
                infrastructure, resource management, and deployment workflows.
              </p>
            </motion.div>

            <motion.div
              className="surface-card border-canvas-200/40 p-6 shadow-md dark:border-white/10"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-sm font-bold text-canvas-500 dark:text-canvas-400">Workshop Topics</p>
                  <h4 className="mt-1 font-display text-lg font-bold text-canvas-950 dark:text-white">
                    Practical cloud execution
                  </h4>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent-500 to-accent2-500 text-white shadow-lg">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 10h-1.26A8 8 0 109 20h9a5 5 0 000-10z" />
                  </svg>
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {workshopTopics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-canvas-200/40 bg-canvas-100/60 px-3.5 py-1.5 font-display text-sm font-bold text-canvas-700 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-canvas-300"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
