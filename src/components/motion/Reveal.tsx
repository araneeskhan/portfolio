import { motion, useReducedMotion, type Variants } from 'motion/react';
import { useSyncExternalStore, type ElementType, type ReactNode } from 'react';

const subscribeNoop = () => () => {};
const getIsClient = () => true;
const getServerSnapshot = () => false;

type Direction = 'up' | 'down' | 'left' | 'right' | 'zoom' | 'fade';

interface RevealProps {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  as?: ElementType;
  once?: boolean;
}

const offset = 20;

const buildVariants = (direction: Direction, duration: number): Variants => {
  const transition = { duration, ease: [0.22, 1, 0.36, 1] as const };

  switch (direction) {
    case 'up':
      return {
        hidden: { opacity: 0, y: offset },
        visible: { opacity: 1, y: 0, transition },
      };
    case 'down':
      return {
        hidden: { opacity: 0, y: -offset },
        visible: { opacity: 1, y: 0, transition },
      };
    case 'left':
      return {
        hidden: { opacity: 0, x: -offset },
        visible: { opacity: 1, x: 0, transition },
      };
    case 'right':
      return {
        hidden: { opacity: 0, x: offset },
        visible: { opacity: 1, x: 0, transition },
      };
    case 'zoom':
      return {
        hidden: { opacity: 0, scale: 0.94 },
        visible: { opacity: 1, scale: 1, transition },
      };
    case 'fade':
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition },
      };
  }
};

/**
 * Scroll-triggered reveal. Respects prefers-reduced-motion automatically
 * via framer-motion's reducedMotion setting in the MotionConfig provider.
 */
export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className,
  as = 'div',
  once = true,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  // Keep the first client render identical to SSR, then apply the user's preference.
  const mounted = useSyncExternalStore(subscribeNoop, getIsClient, getServerSnapshot);
  const reducedMotion = mounted && prefersReducedMotion;
  const MotionTag = motion[as as keyof typeof motion] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      initial={reducedMotion ? false : 'hidden'}
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      variants={buildVariants(reducedMotion ? 'fade' : direction, reducedMotion ? 0 : duration)}
      transition={{ delay: reducedMotion ? 0 : delay }}
    >
      {children}
    </MotionTag>
  );
}
