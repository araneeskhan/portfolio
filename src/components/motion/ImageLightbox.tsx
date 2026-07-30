import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxProps {
  image: string | null;
  onClose: () => void;
}

const ImageLightbox = ({ image, onClose }: ImageLightboxProps) => (
  <AnimatePresence>
    {image && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-xl"
        onClick={onClose}
      >
        <motion.div
          className="relative w-full max-w-6xl"
          onClick={(e) => e.stopPropagation()}
          initial={{ scale: 0.92, opacity: 0, y: 30 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.92, opacity: 0, y: 30 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <button
            type="button"
            className="absolute right-0 top-[-3rem] flex items-center gap-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
            onClick={onClose}
            aria-label="Close"
          >
            Close
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
          <div className="relative flex max-h-[86vh] items-center justify-center rounded-2xl border border-white/5 bg-canvas-950 p-2">
            <Image src={image} alt="Preview" width={1400} height={900} className="max-h-[82vh] rounded-xl object-contain" />
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

export default ImageLightbox;
