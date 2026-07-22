import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import SectionHeader from '@/components/SectionHeader';

interface ServiceItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  accentColor: string;
  glowBg: string;
  badgeBorder: string;
  activeTabGradient: string;
  tags: string[];
  deliverables: string[];
  icon: (props: { className?: string }) => React.ReactNode;
  previewType: 'code' | 'mobile' | 'ai' | 'api' | 'design';
}

const services: ServiceItem[] = [
  {
    id: 'web-dev',
    number: '01',
    title: 'Full-Stack Web Development',
    subtitle: 'High-Performance Next.js & React Architectures',
    description:
      'Engineering robust end-to-end web applications with modern Next.js App Router, SSR/SSG caching strategies, type-safe APIs, and responsive design systems built for scale.',
    accentColor: 'text-blue-500 dark:text-blue-400',
    glowBg: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    badgeBorder: 'border-blue-500/30 text-blue-600 dark:text-blue-400 bg-blue-500/10',
    activeTabGradient: 'from-blue-500 to-cyan-500',
    tags: ['React 19', 'Next.js 15', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Motion'],
    deliverables: [
      'Production-Ready Next.js App Architecture',
      'Pixel-Perfect Responsive UI & Dark Mode',
      'Full TypeScript End-to-End Safety',
      'SEO & Lighthouse Core Web Vitals > 95+',
    ],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <path d="M6 8l3 3-3 3" />
        <line x1="12" y1="14" x2="15" y2="14" />
      </svg>
    ),
    previewType: 'code',
  },
  {
    id: 'mobile-dev',
    number: '02',
    title: 'Mobile App Development',
    subtitle: 'Native-Quality Cross-Platform iOS & Android',
    description:
      'Crafting fluid React Native & Expo applications with offline-first state management, smooth 60fps gesture physics, native feature integration, and app store deployment readiness.',
    accentColor: 'text-emerald-500 dark:text-emerald-400',
    glowBg: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    badgeBorder: 'border-emerald-500/30 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10',
    activeTabGradient: 'from-emerald-500 to-teal-500',
    tags: ['React Native', 'Expo', 'Zustand', 'Firebase', 'NativeWind', 'Reanimated'],
    deliverables: [
      'Cross-Platform iOS & Android Builds',
      'Offline-First Data & Storage Pipeline',
      'Fluid Touch Gestures & Haptics',
      'Automated App Store Build Pipeline',
    ],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="3" ry="3" />
        <line x1="12" y1="18" x2="12.01" y2="18" strokeWidth="3" />
      </svg>
    ),
    previewType: 'mobile',
  },
  {
    id: 'ai-ml',
    number: '03',
    title: 'AI & Machine Learning Integration',
    subtitle: 'Intelligent Models & Production Data Pipelines',
    description:
      'Designing multivariate machine learning pipelines, NLP feature extraction, gradient boosting models with XGBoost, and integrating intelligent microservices into user applications.',
    accentColor: 'text-violet-500 dark:text-violet-400',
    glowBg: 'from-violet-500/20 via-purple-500/10 to-transparent',
    badgeBorder: 'border-violet-500/30 text-violet-600 dark:text-violet-400 bg-violet-500/10',
    activeTabGradient: 'from-violet-500 to-purple-500',
    tags: ['Python', 'Scikit-Learn', 'XGBoost', 'TensorFlow', 'FastAPI', 'Pandas'],
    deliverables: [
      'Scikit-Learn Pipelines (Zero Data Leakage)',
      'High-Performance XGBoost & Ensembles',
      'K-Fold Cross Validation & Hyperparameter Tuning',
      'Python Microservice Endpoint Integration',
    ],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path d="M12 6a6 6 0 100 12 6 6 0 000-12z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
      </svg>
    ),
    previewType: 'ai',
  },
  {
    id: 'backend-api',
    number: '04',
    title: 'Backend & API Architecture',
    subtitle: 'Scalable Systems, Auth & Database Engineering',
    description:
      'Designing high-throughput RESTful APIs, relational & document database schemas, authentication layers (JWT/OAuth), and resilient backend architectures with low latency.',
    accentColor: 'text-amber-500 dark:text-amber-400',
    glowBg: 'from-amber-500/20 via-orange-500/10 to-transparent',
    badgeBorder: 'border-amber-500/30 text-amber-600 dark:text-amber-400 bg-amber-500/10',
    activeTabGradient: 'from-amber-500 to-orange-500',
    tags: ['Node.js', 'Express', 'NestJS', 'Supabase', 'PostgreSQL', 'MongoDB', 'Redis'],
    deliverables: [
      'REST & GraphQL API Endpoints',
      'Relational & Document Schema Optimization',
      'JWT/OAuth2 Secure Auth Flows',
      'OpenAPI / Swagger API Documentation',
    ],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    previewType: 'api',
  },
  {
    id: 'ui-ux',
    number: '05',
    title: 'UI/UX Engineering & Design Systems',
    subtitle: 'Design Tokens & Micro-Animation Physics',
    description:
      'Transforming Figma designs into reusable component libraries with standardized design tokens, accessible ARIA attributes, smooth layout transitions, and high-fidelity micro-interactions.',
    accentColor: 'text-pink-500 dark:text-pink-400',
    glowBg: 'from-pink-500/20 via-rose-500/10 to-transparent',
    badgeBorder: 'border-pink-500/30 text-pink-600 dark:text-pink-400 bg-pink-500/10',
    activeTabGradient: 'from-pink-500 to-rose-500',
    tags: ['Tailwind CSS', 'Motion / Framer', 'Figma', 'CSS Tokens', 'Radix UI', 'Storybook'],
    deliverables: [
      'Tokenized Tailored Color & Font Systems',
      'WCAG AA Compliant Component Architecture',
      'Smooth Layout Animations & Micro-Interactions',
      'Interactive Storybook Component Specs',
    ],
    icon: (props) => (
      <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    previewType: 'design',
  },
];

/* Interactive Live Preview Mockup Components */
const CodePreviewMockup = () => (
  <div className="overflow-hidden rounded-xl border border-canvas-200/60 bg-canvas-950 font-mono text-xs shadow-2xl dark:border-white/10">
    <div className="flex items-center justify-between border-b border-white/10 bg-canvas-900/80 px-4 py-2.5">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-rose-500/80" />
        <span className="h-3 w-3 rounded-full bg-amber-500/80" />
        <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
        <span className="ml-2 text-[11px] text-canvas-400">service-route.ts — Next.js 15</span>
      </div>
      <div className="flex items-center gap-2 text-[10px]">
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-400 font-medium">Lighthouse: 100</span>
      </div>
    </div>
    <div className="p-4 leading-relaxed text-canvas-300">
      <p className="text-canvas-500">// Server-side cached API route</p>
      <p className="mt-1">
        <span className="text-purple-400">export async function</span> <span className="text-blue-400">GET</span>() &#123;
      </p>
      <p className="pl-4 text-canvas-400">
        <span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> <span className="text-yellow-300">fetchServiceData</span>();
      </p>
      <p className="pl-4">
        <span className="text-purple-400">return</span> Response.<span className="text-blue-400">json</span>(&#123;
      </p>
      <p className="pl-8 text-emerald-400">status: <span className="text-amber-300">&apos;success&apos;</span>,</p>
      <p className="pl-8 text-emerald-400">latency: <span className="text-cyan-300">&apos;18ms&apos;</span>,</p>
      <p className="pl-8 text-emerald-400">optimized: <span className="text-purple-300">true</span></p>
      <p className="pl-4">&#125;);</p>
      <p>&#125;</p>
    </div>
  </div>
);

const MobilePreviewMockup = () => {
  const [activeToggle, setActiveToggle] = useState(true);
  return (
    <div className="mx-auto max-w-[280px] overflow-hidden rounded-[2.2rem] border-[5px] border-canvas-800 bg-canvas-950 p-3 shadow-2xl dark:border-canvas-700">
      <div className="mx-auto mb-2 h-4 w-24 rounded-full bg-canvas-800" />
      <div className="rounded-2xl border border-white/10 bg-canvas-900 p-4 text-white">
        <div className="flex items-center justify-between text-xs">
          <span className="font-bold">Portfolio App</span>
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
        </div>
        <div className="mt-4 rounded-xl bg-white/5 p-3 text-left">
          <p className="text-[11px] text-canvas-400">Device Status</p>
          <p className="mt-1 font-display text-sm font-bold text-emerald-400">60 FPS Smooth Navigation</p>
        </div>
        <div className="mt-3 flex items-center justify-between rounded-xl bg-white/5 p-3">
          <span className="text-xs text-canvas-300">Sync Pipeline</span>
          <button
            type="button"
            onClick={() => setActiveToggle(!activeToggle)}
            className={`h-5 w-9 rounded-full p-0.5 transition-colors duration-300 ${activeToggle ? 'bg-emerald-500' : 'bg-canvas-700'}`}
          >
            <div className={`h-4 w-4 rounded-full bg-white transition-transform duration-300 ${activeToggle ? 'translate-x-4' : 'translate-x-0'}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

const AiPreviewMockup = () => (
  <div className="rounded-xl border border-canvas-200/60 bg-canvas-950 p-4 font-mono text-xs text-white shadow-2xl dark:border-white/10">
    <div className="flex items-center justify-between border-b border-white/10 pb-3">
      <span className="font-bold text-violet-400">XGBoost & Scikit-Learn Pipeline</span>
      <span className="rounded-full bg-violet-500/20 px-2.5 py-0.5 text-[10px] text-violet-300 font-semibold">Val Accuracy: 98.6%</span>
    </div>
    <div className="mt-3 space-y-2">
      <div className="flex items-center justify-between rounded bg-white/5 p-2 text-[11px]">
        <span className="text-canvas-300">Imputation & Preprocessing</span>
        <span className="text-emerald-400 font-bold">✓ Zero Leakage</span>
      </div>
      <div className="flex items-center justify-between rounded bg-white/5 p-2 text-[11px]">
        <span className="text-canvas-300">K-Fold Cross-Validation</span>
        <span className="text-cyan-400 font-bold">5 Folds (MAE: 0.012)</span>
      </div>
      <div className="flex items-center justify-between rounded bg-white/5 p-2 text-[11px]">
        <span className="text-canvas-300">Gradient Boost Early Stop</span>
        <span className="text-amber-400 font-bold">Iteration 142 Best</span>
      </div>
    </div>
  </div>
);

const ApiPreviewMockup = () => (
  <div className="rounded-xl border border-canvas-200/60 bg-canvas-950 p-4 font-mono text-xs shadow-2xl dark:border-white/10">
    <div className="flex items-center justify-between border-b border-white/10 pb-2.5 text-[11px]">
      <div className="flex items-center gap-2">
        <span className="rounded bg-emerald-500/20 px-2 py-0.5 font-bold text-emerald-400">POST</span>
        <span className="text-canvas-300">/api/v1/auth/verify</span>
      </div>
      <span className="text-emerald-400 font-bold">200 OK (22ms)</span>
    </div>
    <div className="mt-3 leading-relaxed text-canvas-300 text-[11px]">
      <p className="text-canvas-500">&#123;</p>
      <p className="pl-4"><span className="text-amber-300">&quot;authenticated&quot;</span>: <span className="text-purple-400">true</span>,</p>
      <p className="pl-4"><span className="text-amber-300">&quot;role&quot;</span>: <span className="text-emerald-400">&quot;admin&quot;</span>,</p>
      <p className="pl-4"><span className="text-amber-300">&quot;token_type&quot;</span>: <span className="text-emerald-400">&quot;Bearer JWT&quot;</span>,</p>
      <p className="pl-4"><span className="text-amber-300">&quot;expires_in&quot;</span>: <span className="text-cyan-400">86400</span></p>
      <p className="text-canvas-500">&#125;</p>
    </div>
  </div>
);

const DesignPreviewMockup = () => {
  const [blurVal, setBlurVal] = useState(16);
  return (
    <div className="rounded-xl border border-canvas-200/60 bg-canvas-950 p-4 shadow-2xl dark:border-white/10">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <span className="font-display text-xs font-bold text-pink-400">Design Token Studio</span>
        <span className="text-[10px] text-canvas-400 font-mono">Framer Physics</span>
      </div>
      <div className="mt-4 flex flex-col items-center justify-center p-4">
        <div
          style={{ backdropFilter: `blur(${blurVal}px)` }}
          className="rounded-2xl border border-white/20 bg-white/10 p-5 text-center shadow-2xl transition-all duration-300"
        >
          <span className="font-display text-xs font-bold text-white">Glassmorphism Token</span>
          <p className="mt-1 font-mono text-[10px] text-pink-300">backdrop-blur-[{blurVal}px]</p>
        </div>
        <div className="mt-4 flex w-full items-center justify-between gap-3 text-[11px] text-canvas-400">
          <span>Blur Token</span>
          <input
            type="range"
            min="4"
            max="32"
            value={blurVal}
            onChange={(e) => setBlurVal(Number(e.target.value))}
            className="h-1.5 accent-pink-500 cursor-pointer"
          />
          <span className="w-6 text-right font-mono">{blurVal}px</span>
        </div>
      </div>
    </div>
  );
};

const MockupRenderer = ({ type }: { type: ServiceItem['previewType'] }) => {
  switch (type) {
    case 'code':
      return <CodePreviewMockup />;
    case 'mobile':
      return <MobilePreviewMockup />;
    case 'ai':
      return <AiPreviewMockup />;
    case 'api':
      return <ApiPreviewMockup />;
    case 'design':
      return <DesignPreviewMockup />;
  }
};

const Services = () => {
  const [activeServiceId, setActiveServiceId] = useState<string>(services[0].id);
  const activeService = services.find((s) => s.id === activeServiceId) || services[0];

  return (
    <section id="services" className="section-border-top relative pb-32 pt-24 md:pt-32">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb right-0 top-1/4 h-[500px] w-[500px] bg-accent-500/[0.04]" />
        <div className="glow-orb left-0 bottom-1/4 h-[400px] w-[400px] bg-accent2-500/[0.03]" />
      </div>

      <div className="section-container relative z-10">
        <SectionHeader
          label="Services & Domain Mastery"
          title="Focused execution from concept to shipped product."
          description="Crafting resilient digital products across web frontend, mobile applications, intelligent AI pipelines, backend microservices, and design systems."
        />

        {/* Desktop & Tablet Split View Showcase */}
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          {/* Left Column: Domain Selector Cards */}
          <div className="space-y-3">
            {services.map((service) => {
              const isActive = service.id === activeServiceId;
              const IconComponent = service.icon;

              return (
                <motion.button
                  key={service.id}
                  type="button"
                  onClick={() => setActiveServiceId(service.id)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.99 }}
                  className={`group relative flex w-full items-center justify-between rounded-2xl border p-4 text-left transition-all duration-300 md:p-5 ${
                    isActive
                      ? 'border-canvas-300 bg-white shadow-xl dark:border-white/20 dark:bg-canvas-900'
                      : 'border-canvas-200/40 bg-white/50 hover:border-canvas-300 hover:bg-white dark:border-white/5 dark:bg-canvas-950/60 dark:hover:border-white/10 dark:hover:bg-canvas-900/60'
                  }`}
                >
                  {/* Left Active Glow Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeGlowBar"
                      className={`absolute left-0 top-3 bottom-3 w-1.5 rounded-r-full bg-gradient-to-b ${service.activeTabGradient}`}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-4 pl-2">
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 ${
                        isActive
                          ? `${service.badgeBorder}`
                          : 'bg-canvas-100 text-canvas-500 dark:bg-white/[0.06] dark:text-canvas-400 group-hover:text-canvas-950 dark:group-hover:text-white'
                      }`}
                    >
                      <IconComponent className="h-5 w-5" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-[11px] font-bold text-canvas-400">
                          {service.number}
                        </span>
                        <h3 className={`font-display text-base font-bold transition-colors ${isActive ? 'text-canvas-950 dark:text-white' : 'text-canvas-700 dark:text-canvas-300'}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="mt-0.5 line-clamp-1 font-display text-xs font-medium text-canvas-500 dark:text-canvas-400">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 pl-2">
                    <svg
                      className={`h-4 w-4 transition-transform duration-300 ${isActive ? 'translate-x-1 text-canvas-950 dark:text-white' : 'text-canvas-400 opacity-40 group-hover:opacity-100'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right Column: Active Service Detailed Workspace */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeService.id}
                initial={{ opacity: 0, y: 15, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -15, scale: 0.98 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-3xl border border-canvas-200/60 bg-white p-6 shadow-elevated dark:border-white/10 dark:bg-canvas-900 md:p-8"
              >
                {/* Accent Background Glow */}
                <div className={`pointer-events-none absolute -right-10 -top-10 h-64 w-64 rounded-full bg-gradient-to-br ${activeService.glowBg} blur-3xl opacity-60`} />

                {/* Service Header Badge & Number */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${activeService.badgeBorder}`}>
                    {activeService.subtitle}
                  </span>
                  <span className="font-mono text-xs font-bold text-canvas-400">
                    SERVICE // {activeService.number}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-2xl font-black text-canvas-950 dark:text-white md:text-3xl">
                  {activeService.title}
                </h3>

                <p className="mt-3 font-display text-sm font-medium leading-relaxed text-canvas-600 dark:text-canvas-300 md:text-base">
                  {activeService.description}
                </p>

                {/* Live Bespoke Mockup Container */}
                <div className="mt-6">
                  <div className="mb-2 flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-canvas-400">
                    <span>Live Architecture Mockup</span>
                    <span className="flex items-center gap-1 text-emerald-500">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Active Preview
                    </span>
                  </div>
                  <MockupRenderer type={activeService.previewType} />
                </div>

                {/* Key Deliverables Section */}
                <div className="mt-7">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-canvas-400 dark:text-canvas-500">
                    Key Deliverables & Standards
                  </h4>
                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    {activeService.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2.5 rounded-xl border border-canvas-200/40 bg-canvas-50/60 p-2.5 text-xs font-bold text-canvas-800 dark:border-white/5 dark:bg-white/[0.03] dark:text-canvas-200"
                      >
                        <div className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r ${activeService.activeTabGradient} text-white`}>
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </div>
                        <span className="line-clamp-1">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Stack Tags */}
                <div className="mt-7 pt-5 border-t border-canvas-200/40 dark:border-white/10">
                  <h4 className="font-display text-xs font-bold uppercase tracking-wider text-canvas-400 dark:text-canvas-500">
                    Core Technical Arsenal
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {activeService.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-lg border border-canvas-200/60 bg-white px-3 py-1 font-display text-xs font-bold text-canvas-800 shadow-sm dark:border-white/10 dark:bg-white/[0.06] dark:text-canvas-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Modern Glassmorphic CTA Banner */}
        <motion.div
          className="relative z-10 mx-auto mt-20 max-w-5xl overflow-hidden rounded-3xl border border-white/20 bg-canvas-950 p-8 text-white shadow-2xl dark:border-white/10 dark:bg-canvas-900 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glowing Accents */}
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-accent-500/25 blur-3xl" />
          <div className="pointer-events-none absolute -left-12 -bottom-12 h-56 w-56 rounded-full bg-accent2-500/20 blur-3xl" />

          <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-accent-300 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-accent-400 animate-ping" />
                Available for New Projects
              </span>
              <h3 className="mt-4 font-display text-2xl font-black tracking-tight text-white md:text-3xl lg:text-4xl">
                Ready to build something exceptional?
              </h3>
              <p className="mt-3 font-display text-sm font-medium leading-relaxed text-canvas-300 md:text-base">
                Whether you need a full-stack Next.js web platform, an offline-first mobile app, or an intelligent machine learning pipeline, let&apos;s shape your technical vision into reality.
              </p>
            </div>

            <div className="shrink-0">
              <Link
                href="/#contact"
                className="group relative inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 font-display text-sm font-bold text-canvas-950 shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-canvas-50 hover:shadow-accent-500/25 dark:bg-white dark:text-canvas-950"
              >
                Start a Conversation
                <svg
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
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
