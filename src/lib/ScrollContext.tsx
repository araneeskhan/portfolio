import { createContext, useContext, ReactNode } from 'react';
import { useScroll, MotionValue } from 'motion/react';

interface ScrollContextType {
  scrollY: MotionValue<number>;
  scrollYProgress: MotionValue<number>;
}

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  // framer-motion's useScroll without a target inherently tracks the window 
  // and is highly optimized (it only adds one global listener under the hood).
  const { scrollY, scrollYProgress } = useScroll();

  return (
    <ScrollContext.Provider value={{ scrollY, scrollYProgress }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useGlobalScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error('useGlobalScroll must be used within a ScrollProvider');
  }
  return context;
};
