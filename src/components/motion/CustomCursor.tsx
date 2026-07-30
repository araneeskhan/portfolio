import { useEffect, useState, useSyncExternalStore } from 'react';
import { motion, useMotionValue, useSpring } from 'motion/react';

// No real external subscription needed — touch capability doesn't change at runtime.
const subscribeNoop = () => () => {};
const getIsTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;
const getServerSnapshot = () => false;

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  // Starts visible: the mouse may already be inside the window when this mounts.
  const [isVisible, setIsVisible] = useState(true);
  // Reads browser-only capability without a hydration mismatch or a setState-in-effect cascade.
  const isTouchDevice = useSyncExternalStore(subscribeNoop, getIsTouchDevice, getServerSnapshot);

  // Raw mouse coordinates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Use raw motion values for zero-latency 1:1 native mouse tracking
  // We bypass the spring physics entirely so the cursor feels completely weightless.

  useEffect(() => {
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Event delegation to detect hovering over interactive elements globally
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      if (isInteractive) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest('a, button, [role="button"], input, textarea, select, [data-cursor="hover"]');
      if (isInteractive) {
        setIsHovered(false);
      }
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  // Don't render anything on mobile/tablets
  if (isTouchDevice) return null;

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        className="absolute left-0 top-0 flex items-center justify-center rounded-full bg-canvas-950 dark:bg-white shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:shadow-[0_0_10px_rgba(255,255,255,0.2)]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
        animate={{
          width: isHovered ? 14 : 10,
          height: isHovered ? 14 : 10,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 25 }}
      />
    </motion.div>
  );
}
