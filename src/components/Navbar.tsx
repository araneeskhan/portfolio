'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'motion/react';
import ThemeToggle from './ThemeToggle';
import personal from '@/config/personal';

const links = [
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Certifications', href: '/#certifications' },
  { name: 'Contact', href: '/#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 top-0 z-50 w-full transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        {/* Glass background */}
        <div
          className={`absolute inset-0 border-b transition-all duration-500 ${
            isScrolled
              ? 'border-canvas-200/20 bg-white/80 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-canvas-950/80'
              : 'border-transparent bg-transparent backdrop-blur-none'
          }`}
        />

        <div className="section-container relative">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="group inline-flex items-center gap-3">
              <motion.span
                whileHover={{ scale: 1.05, rotate: -3 }}
                whileTap={{ scale: 0.95 }}
                className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-canvas-950 font-display text-sm font-bold text-white dark:bg-white dark:text-canvas-950 shadow-md"
              >
                <span className="text-gradient bg-none dark:bg-none dark:text-canvas-950">AR</span>
                <div
                  className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(99,102,241,0.3), rgba(168,85,247,0.3))',
                  }}
                />
              </motion.span>
              <motion.span
                className="hidden font-display text-base font-bold tracking-tight text-canvas-950 dark:text-white sm:inline"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {personal.name}
              </motion.span>
            </Link>

            {/* Desktop nav — pill container */}
            <motion.div
              className={`hidden items-center gap-1 rounded-full border p-1 backdrop-blur-xl transition-all duration-500 md:flex ${
                isScrolled
                  ? 'border-transparent bg-transparent'
                  : 'border-canvas-200/30 bg-white/60 dark:border-white/10 dark:bg-white/[0.05]'
              }`}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <NavLinks isScrolled={isScrolled} />
            </motion.div>

            {/* Right side */}
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <ThemeToggle />
              <Link
                href="/resume"
                className="btn-secondary hidden px-4 py-2 font-display text-xs font-bold lg:inline-flex"
              >
                <span>Resume</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </Link>
              <Link
                href="/#contact"
                className="btn-primary hidden px-4 py-2 font-display text-xs font-bold shadow-md lg:inline-flex"
              >
                <span>Let&apos;s Talk</span>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>

              {/* Mobile menu button */}
              <motion.button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-xl text-canvas-950 transition-colors hover:text-accent-500 dark:text-white dark:hover:text-accent-400 md:hidden"
                onClick={() => setIsMenuOpen((v) => !v)}
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
                whileTap={{ scale: 0.9 }}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={isMenuOpen ? 'close' : 'menu'}
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {isMenuOpen ? (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    ) : (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <line x1="3" y1="12" x2="15" y2="12" />
                        <line x1="3" y1="18" x2="21" y2="18" />
                      </svg>
                    )}
                  </motion.div>
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-canvas-950/60 backdrop-blur-sm md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed right-0 top-0 z-50 flex h-full w-80 max-w-[86vw] flex-col bg-white/95 backdrop-blur-2xl dark:bg-canvas-950/95 md:hidden"
          >
            <div className="flex items-center justify-between border-b border-canvas-200/20 p-6 dark:border-white/10">
              <span className="font-display text-lg font-bold text-canvas-950 dark:text-white">
                Menu
              </span>
              <motion.button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                whileTap={{ scale: 0.9 }}
                className="flex h-10 w-10 items-center justify-center rounded-xl text-canvas-950 hover:bg-canvas-200/50 dark:text-white dark:hover:bg-white/10"
                aria-label="Close menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </motion.button>
            </div>

            <div className="flex-1 space-y-2 overflow-y-auto p-5">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    href={link.href}
                    className="flex items-center gap-4 rounded-xl px-4 py-4 font-display text-lg font-medium text-canvas-800 transition-colors hover:bg-canvas-100/80 hover:text-canvas-950 dark:text-canvas-200 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 + links.length * 0.06, duration: 0.5 }}
              >
                <Link
                  href="/resume"
                  className="flex items-center gap-4 rounded-xl px-4 py-4 font-display text-lg font-medium text-canvas-800 transition-colors hover:bg-canvas-100/80 hover:text-canvas-950 dark:text-canvas-200 dark:hover:bg-white/10 dark:hover:text-white"
                >
                  Resume
                </Link>
              </motion.div>
            </div>

            <div className="border-t border-canvas-200/20 p-5 dark:border-white/10">
              <Link
                href="/#contact"
                className="btn-primary w-full py-4 text-sm font-bold shadow-md"
              >
                <span>Start a Project</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </Link>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

const NavLinks = ({ isScrolled }: { isScrolled: boolean }) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 120;
      for (const link of links) {
        const sectionId = link.href.split('#')[1];
        const element = document.getElementById(sectionId);
        if (!element) continue;
        const sectionTop = element.offsetTop;
        const sectionBottom = sectionTop + element.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(sectionId);
          return;
        }
      }
      setActiveSection('');
    };
    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    return () => window.removeEventListener('scroll', updateActiveSection);
  }, []);

  return (
    <>
      {links.map((link) => {
        const sectionId = link.href.split('#')[1];
        const isActive = sectionId === activeSection;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={`group relative rounded-full px-4 py-2 text-[14px] font-display font-medium transition-colors duration-300 ${
              isActive
                ? 'text-canvas-950 dark:text-white'
                : isScrolled
                  ? 'text-canvas-600 hover:text-canvas-950 dark:text-canvas-300 dark:hover:text-white'
                  : 'text-canvas-700 hover:text-canvas-950 dark:text-canvas-200 dark:hover:text-white'
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className={`absolute inset-0 rounded-full ${
                  isScrolled
                    ? 'bg-canvas-100 dark:bg-white/10'
                    : 'bg-canvas-100/80 dark:bg-white/20'
                }`}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </>
  );
};

export default Navbar;
