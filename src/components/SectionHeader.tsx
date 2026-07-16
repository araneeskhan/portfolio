import { motion } from 'motion/react';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: 'center' | 'left';
}

export default function SectionHeader({
  label,
  title,
  description,
  align = 'center',
}: SectionHeaderProps) {
  const isCentered = align === 'center';

  return (
    <div className={`${isCentered ? 'mx-auto text-center' : ''} mb-16 max-w-3xl`}>
      <motion.p
        className="eyebrow"
        initial={{ opacity: 0, y: 16, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-accent-500" />
        {label}
      </motion.p>

      <motion.h2
        className="mt-5 font-display text-3xl font-bold tracking-tight text-canvas-950 dark:text-white sm:text-4xl md:text-[2.8rem] md:leading-tight"
        initial={{ opacity: 0, y: 24, filter: 'blur(4px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      >
        {title}
      </motion.h2>

      {isCentered && (
        <motion.div
          className="mx-auto mt-6 h-px w-20 bg-gradient-to-r from-transparent via-accent-500/50 to-transparent"
          initial={{ opacity: 0, scaleX: 0.3 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.16 }}
        />
      )}

      {description && (
        <motion.p
          className={`mt-5 font-display text-base leading-relaxed text-canvas-500 dark:text-canvas-300 md:text-lg ${
            isCentered ? 'mx-auto max-w-2xl' : ''
          }`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
