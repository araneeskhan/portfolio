import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

interface Certification {
  name: string;
  issuer: string;
  description: string;
  gradient: string;
  bgTint: string;
}

const certifications: Certification[] = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services / Coursera',
    gradient: 'from-orange-500 to-amber-500',
    bgTint: 'bg-orange-500/[0.03] dark:bg-orange-500/[0.03]',
    description: 'Cloud fundamentals, core AWS services, security, architecture, pricing, and support models.',
  },
  {
    name: 'TensorFlow Developer',
    issuer: 'Google / Coursera',
    gradient: 'from-red-500 to-rose-500',
    bgTint: 'bg-red-500/[0.03] dark:bg-red-500/[0.03]',
    description: 'Neural networks, image classification, NLP, model training, and time-series forecasting.',
  },
  {
    name: 'Flower Framework',
    issuer: 'Flower Labs',
    gradient: 'from-pink-500 to-fuchsia-500',
    bgTint: 'bg-pink-500/[0.03] dark:bg-pink-500/[0.03]',
    description: 'Federated learning for privacy-aware and decentralized machine learning systems.',
  },
  {
    name: 'React.js',
    issuer: 'Meta / Coursera',
    gradient: 'from-cyan-500 to-blue-500',
    bgTint: 'bg-cyan-500/[0.03] dark:bg-cyan-500/[0.03]',
    description: 'Component architecture, hooks, dynamic interfaces, state patterns, and performance thinking.',
  },
  {
    name: 'React Native',
    issuer: 'Meta / Coursera',
    gradient: 'from-blue-500 to-indigo-500',
    bgTint: 'bg-blue-500/[0.03] dark:bg-blue-500/[0.03]',
    description: 'Cross-platform mobile UI, navigation, native-feeling flows, and mobile application structure.',
  },
  {
    name: 'Python',
    issuer: 'Python Institute / Coursera',
    gradient: 'from-emerald-500 to-teal-500',
    bgTint: 'bg-emerald-500/[0.03] dark:bg-emerald-500/[0.03]',
    description: 'Core programming, data structures, object-oriented design, scripting, and automation.',
  },
];

const workshopTopics = [
  'Cloud Architecture',
  'Huawei Cloud Services',
  'Cloud Deployment',
  'Infrastructure Design',
  'Resource Management',
];

/* Sticky stacking certification card */
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
        className={`relative overflow-hidden rounded-2xl border border-canvas-200/40 bg-white/90 p-6 shadow-elevated backdrop-blur-3xl transition-shadow duration-500 hover:shadow-glow dark:border-white/10 dark:bg-canvas-950/90 md:p-8`}
      >
        <div className={`pointer-events-none absolute inset-0 ${cert.bgTint}`} />

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-canvas-400 dark:text-canvas-500">
                Certificate — 0{index + 1}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold text-canvas-950 dark:text-white md:text-2xl">
                {cert.name}
              </h3>
              <p className="mt-2 font-display text-sm font-bold text-accent-500 dark:text-accent-400">
                {cert.issuer}
              </p>
            </div>
            <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${cert.gradient} text-white shadow-lg`}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          </div>

          <p className="mt-4 max-w-2xl font-display font-medium leading-relaxed text-canvas-600 dark:text-canvas-300">
            {cert.description}
          </p>
        </div>

        {/* Bottom gradient line */}
        <div className={`absolute bottom-0 left-0 h-[4px] w-full bg-gradient-to-r ${cert.gradient}`} />
      </motion.div>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="section-border-top relative pb-32 pt-24 md:pt-32">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb left-0 top-1/3 h-[400px] w-[400px] bg-accent2-500/[0.04]" />
      </div>

      <div className="section-container">
        <SectionHeader
          label="Credentials"
          title="Validated learning across cloud, AI, and product engineering."
          description="Certifications and hands-on workshops that support the product work shown throughout the portfolio."
        />

        {/* Sticky stacking cards */}
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
