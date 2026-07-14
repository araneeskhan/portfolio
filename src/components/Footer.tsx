import Link from 'next/link';
import { motion } from 'motion/react';
import personal from '@/config/personal';

const quickLinks = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Contact', href: '/#contact' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-border-top relative overflow-hidden">
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0">
        <div className="glow-orb left-1/2 bottom-0 h-[300px] w-[300px] -translate-x-1/2 bg-accent-500/[0.03]" />
      </div>

      <div className="section-container py-16">
        {/* Large CTA section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl font-bold text-canvas-950 dark:text-white sm:text-4xl md:text-5xl">
            Let&apos;s create something
            <br />
            <span className="text-gradient">remarkable together.</span>
          </h2>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/#contact" className="btn-primary">
              <span>Start a Project</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </Link>
            <a
              href={`mailto:${personal.email}`}
              className="btn-secondary"
            >
              <span>Email Me</span>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
              </svg>
            </a>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="divider" />

        {/* Footer grid */}
        <div className="mt-12 grid gap-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr]">
          {/* Brand */}
          <div>
            <Link href="/" className="group inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-canvas-950 text-sm font-bold text-white dark:bg-white dark:text-canvas-950">
                AR
              </span>
              <span className="font-display text-lg font-bold text-canvas-950 dark:text-white">
                {personal.name}
              </span>
            </Link>
            <p className="font-display mt-5 max-w-md leading-relaxed text-canvas-500 dark:text-canvas-400">
              {personal.title} building polished web, mobile, and AI-powered product experiences.
            </p>
            <div className="mt-6 flex gap-3">
              <SocialLink href={personal.linkedin} icon="fa-linkedin" label="LinkedIn" />
              <SocialLink href={personal.github} icon="fa-github" label="GitHub" />
            </div>
          </div>

          {/* Navigation */}
          <nav>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-canvas-400 dark:text-canvas-500">
              Navigation
            </h3>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="font-display text-sm font-medium text-canvas-600 transition-colors duration-300 hover:text-accent-500 dark:text-canvas-400 dark:hover:text-accent-400"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          {/* Contact info */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-canvas-400 dark:text-canvas-500">
              Contact
            </h3>
            <a
              href={`mailto:${personal.email}`}
              className="mt-5 block break-all font-display font-semibold text-canvas-950 transition-colors duration-300 hover:text-accent-500 dark:text-white dark:hover:text-accent-400"
            >
              {personal.email}
            </a>
            <p className="mt-3 text-sm text-canvas-500 dark:text-canvas-400">{personal.location}</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-4 border-t border-canvas-200/10 pt-6 dark:border-white/5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-sm text-canvas-400 dark:text-canvas-500">
            &copy; {currentYear} {personal.name}. All rights reserved.
          </p>
          <motion.button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-canvas-200/20 text-canvas-500 transition-colors duration-300 hover:border-accent-500/30 hover:text-accent-500 dark:border-white/5 dark:text-canvas-400 dark:hover:border-accent-400/30 dark:hover:text-accent-400"
            aria-label="Back to top"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>
            </svg>
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }: { href: string; icon: string; label: string }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.95 }}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-canvas-200/20 text-canvas-500 transition-colors duration-300 hover:border-accent-500/30 hover:text-accent-500 dark:border-white/5 dark:text-canvas-400 dark:hover:border-accent-400/30 dark:hover:text-accent-400"
    aria-label={label}
  >
    <i className={`fab ${icon}`} />
  </motion.a>
);

export default Footer;
