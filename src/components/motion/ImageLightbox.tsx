import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';

interface ImageLightboxProps {
  image: string | null;
  onClose: () => void;
  alt?: string;
  caption?: string;
  width?: number;
  height?: number;
  onPrevious?: () => void;
  onNext?: () => void;
}

const ImageLightbox = ({ image, onClose, alt = 'Enlarged preview', caption, width = 1400, height = 900, onPrevious, onNext }: ImageLightboxProps) => {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef({ onClose, onPrevious, onNext });
  const isOpen = Boolean(image);

  useEffect(() => { actionsRef.current = { onClose, onPrevious, onNext }; }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    if (!isOpen) return;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        actionsRef.current.onClose();
      }
      if (e.key === 'ArrowLeft' && actionsRef.current.onPrevious) {
        e.preventDefault();
        actionsRef.current.onPrevious();
      }
      if (e.key === 'ArrowRight' && actionsRef.current.onNext) {
        e.preventDefault();
        actionsRef.current.onNext();
      }
      if (e.key === 'Tab') {
        const buttons = Array.from(dialogRef.current?.querySelectorAll<HTMLButtonElement>('button') ?? []);
        const first = buttons[0];
        const last = buttons[buttons.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    closeBtnRef.current?.focus();

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      trigger?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {image && (
        <motion.div
          ref={dialogRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-black/90 px-4 pb-4 pt-20 font-sans backdrop-blur-xl"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
            <button
              ref={closeBtnRef}
              type="button"
              className="fixed right-4 top-4 flex min-h-11 items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white transition-colors hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-accent-400"
              onClick={(event) => { event.stopPropagation(); onClose(); }}
              aria-label="Close preview"
            >
              Close
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            </button>
          <motion.div
            className="relative w-full max-w-6xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.92, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative flex items-center justify-center rounded-2xl border border-white/5 bg-canvas-950 p-2">
              <Image src={image} alt={alt} width={width} height={height} sizes="90vw" className={`h-auto w-auto max-w-full rounded-xl object-contain ${caption ? 'max-h-[calc(100svh-240px)]' : 'max-h-[calc(100svh-160px)]'}`} />
            </div>
            {(onPrevious || onNext) && <div className="mt-3 flex justify-center gap-3">
              {onPrevious && <button type="button" onClick={onPrevious} className="min-h-11 rounded-full bg-white/10 px-5 text-sm text-white hover:bg-white/20" aria-label="Previous image">← Previous</button>}
              {onNext && <button type="button" onClick={onNext} className="min-h-11 rounded-full bg-white/10 px-5 text-sm text-white hover:bg-white/20" aria-label="Next image">Next →</button>}
            </div>}
            {caption && <p className="mt-3 text-center text-sm text-white">{caption}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ImageLightbox;
