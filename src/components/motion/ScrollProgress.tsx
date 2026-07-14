import { motion, useScroll, useSpring } from 'motion/react';

/**
 * Thin gradient reading-progress bar fixed to the top of the viewport.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 24,
    mass: 0.3,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[60] h-[2px] w-full origin-left bg-gradient-to-r from-accent-500 via-accent2-500 to-accent-400"
      aria-hidden="true"
    />
  );
}
