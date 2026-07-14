import { motion } from 'motion/react';

interface MarqueeProps {
  items: string[];
  speed?: number;
  direction?: 'left' | 'right';
  className?: string;
}

/**
 * Infinite horizontal scroll marquee. Duplicates items for seamless loop.
 */
export default function Marquee({
  items,
  speed = 30,
  direction = 'left',
  className = '',
}: MarqueeProps) {
  const content = [...items, ...items]; // Duplicate for seamless loop

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[rgb(var(--background))] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[rgb(var(--background))] to-transparent" />

      <div
        className="marquee-track"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: direction === 'right' ? 'reverse' : 'normal',
        }}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className="mx-6 whitespace-nowrap font-display text-4xl font-bold text-canvas-200/40 transition-colors duration-300 hover:text-canvas-400 dark:text-white/[0.06] dark:hover:text-white/20 sm:mx-10 sm:text-5xl md:text-6xl"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
