import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import personal from '@/config/personal';
import MagneticButton from './motion/MagneticButton';

const roles = ['Full-Stack Developer', 'Software Engineer', 'AI Product Builder'];

const metrics = [
  { value: 24, suffix: '+', label: 'Months Building' },
  { value: 8, suffix: '', label: 'Projects Shipped' },
  { value: 100, suffix: '%', label: 'Delivery Focus' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const SplitText = ({ text, className, delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: '100%', rotateX: 20 }}
            animate={{ y: 0, rotateX: 0 }}
            transition={{
              duration: 0.8,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && '\u00A0'}
        </span>
      ))}
    </span>
  );
};

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [counts, setCounts] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 24 });
  const imageY = useTransform(smooth, [0, 1], [0, 150]);
  const imageScale = useTransform(smooth, [0, 1], [1, 0.85]);
  const imageRotate = useTransform(smooth, [0, 1], [0, -5]);
  const textY = useTransform(smooth, [0, 1], [0, -80]);
  const opacity = useTransform(smooth, [0, 0.6], [1, 0]);
  const metricsY = useTransform(smooth, [0, 1], [0, 50]);

  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = window.setTimeout(
      () => {
        if (!isDeleting && currentRole.length < role.length) {
          setCurrentRole(role.substring(0, currentRole.length + 1));
          return;
        }
        if (!isDeleting) {
          window.setTimeout(() => setIsDeleting(true), 1400);
          return;
        }
        if (currentRole.length > 0) {
          setCurrentRole(currentRole.substring(0, currentRole.length - 1));
          return;
        }
        setIsDeleting(false);
        setCurrentRoleIndex((v) => (v + 1) % roles.length);
      },
      isDeleting ? 35 : 70
    );
    return () => window.clearTimeout(timeout);
  }, [currentRole, currentRoleIndex, isDeleting]);

  return (
    <section ref={sectionRef} id="home" className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-50 dark:opacity-20" />
        <div className="glow-orb -left-32 top-10 h-[500px] w-[500px] bg-accent-500/[0.07] dark:bg-accent-500/[0.05]" />
        <div className="glow-orb -right-32 top-32 h-[400px] w-[400px] bg-accent2-500/[0.06] dark:bg-accent2-500/[0.04]" style={{ animationDelay: '5s' }} />
        <div className="glow-orb left-1/3 bottom-0 h-[350px] w-[350px] bg-accent-400/[0.04]" style={{ animationDelay: '10s' }} />
      </div>

      <div className="section-container">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Left: Text */}
          <motion.div
            className="order-2 max-w-3xl lg:order-1"
            variants={container}
            initial="hidden"
            animate="visible"
            style={{ y: textY, opacity }}
          >

            <motion.p variants={item} className="mt-8 text-sm font-medium uppercase tracking-[0.2em] text-canvas-400 dark:text-canvas-500">
              Hello, I&apos;m
            </motion.p>

            <motion.h1 variants={item} className="mt-4 font-display text-[clamp(2.8rem,7vw,5.5rem)] font-bold leading-[1.05] tracking-tighter text-canvas-950 dark:text-white">
              <SplitText text={personal.name} delay={0.4} />
            </motion.h1>

            <motion.div variants={item} className="mt-4 flex items-center gap-3">
              <div className="h-px w-8 bg-gradient-to-r from-accent-500 to-accent2-500" />
              <span className="font-display text-xl font-semibold text-gradient sm:text-2xl">
                {currentRole}
                <span className="ml-0.5 animate-blink text-accent-500">|</span>
              </span>
            </motion.div>

            <motion.p variants={item} className="mt-6 max-w-xl font-display text-lg leading-relaxed text-canvas-500 dark:text-canvas-300">
              I design and build polished web, mobile, and AI-powered products with
              production-minded architecture, sharp interfaces, and clear user flows.
            </motion.p>

            {/* CTAs — now includes View Resume */}
            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <MagneticButton href={personal.resumePath} download={personal.resumeFileName} className="btn-primary font-display">
                <span>Download Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="/resume" className="btn-secondary font-display">
                <span>View Resume</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
                </svg>
              </MagneticButton>
              <MagneticButton href="#projects" className="btn-secondary font-display">
                <span>View Projects</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </MagneticButton>
            </motion.div>

            {/* Metrics */}
            <motion.div
              variants={item}
              className="mt-12 grid max-w-xl grid-cols-3 gap-4"
              style={{ y: metricsY }}
              onViewportEnter={() => setCounts(true)}
            >
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="group relative overflow-hidden rounded-2xl border border-canvas-200/30 bg-white/50 p-4 backdrop-blur-sm transition-all duration-500 hover:border-accent-500/20 hover:shadow-glow dark:border-white/5 dark:bg-white/[0.02] dark:hover:border-accent-400/20"
                >
                  <p className="font-display text-2xl font-bold text-canvas-950 dark:text-white sm:text-3xl">
                    {counts ? <AnimatedValue value={metric.value} suffix={metric.suffix} /> : `0${metric.suffix}`}
                  </p>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wider text-canvas-400 dark:text-canvas-500">
                    {metric.label}
                  </p>
                  <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-accent-500/[0.03] to-accent2-500/[0.03] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Clean circular profile — NO floating cards */}
          <motion.div
            className="order-1 flex justify-center lg:order-2"
            initial={{ opacity: 0, scale: 0.8, filter: 'blur(20px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ y: imageY, scale: imageScale, rotate: imageRotate }}
          >
            <div className="relative">
              {/* Animated gradient ring */}
              <motion.div
                className="absolute -inset-4 z-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 0deg, #6366f1, #a855f7, #ec4899, #6366f1)',
                  padding: '3px',
                }}
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                <div className="h-full w-full rounded-full bg-[rgb(var(--background))]" />
              </motion.div>

              {/* Outer glow */}
              <div className="absolute -inset-12 z-0 rounded-full bg-gradient-to-br from-accent-500/20 via-accent2-500/15 to-transparent blur-3xl" />

              {/* Profile image — circular, clean */}
              <div className="relative z-10 h-[320px] w-[320px] overflow-hidden rounded-full border-4 border-white/20 shadow-2xl sm:h-[380px] sm:w-[380px] lg:h-[420px] lg:w-[420px]">
                <Image
                  src="/assets/profile-pic.jpeg"
                  alt={`${personal.name} profile`}
                  fill
                  className="object-cover"
                  priority
                  quality={90}
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-canvas-950/20 via-transparent to-transparent" />
              </div>

              {/* Decorative floating dots */}
              <motion.div
                className="absolute -right-2 bottom-1/4 z-0 h-3 w-3 rounded-full bg-accent-500/40"
                animate={{ y: [0, -15, 0], scale: [1, 1.3, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.div
                className="absolute -left-3 top-1/3 z-0 h-2 w-2 rounded-full bg-accent2-500/40"
                animate={{ y: [0, 10, 0], scale: [1, 1.5, 1] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              />
              <motion.div
                className="absolute right-8 -top-2 z-0 h-2 w-2 rounded-full bg-pink-500/30"
                animate={{ y: [0, 8, 0], x: [0, -5, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="pointer-events-none absolute bottom-10 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-canvas-400 dark:text-canvas-500">
          Scroll
        </span>
        <div className="flex h-10 w-5 justify-center rounded-full border border-canvas-300/30 pt-2 dark:border-white/10">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="h-1.5 w-1 rounded-full bg-gradient-to-b from-accent-500 to-accent2-500"
          />
        </div>
      </motion.div>
    </section>
  );
};

const AnimatedValue = ({ value, suffix }: { value: number; suffix: string }) => {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1600;
    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [value]);
  return <span>{display}{suffix}</span>;
};

export default Hero;
