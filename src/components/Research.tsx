import { useState } from 'react';
import { researchData } from '@/data/research';
import HorizontalArchive from '@/components/motion/HorizontalArchive';
import ImageLightbox from '@/components/motion/ImageLightbox';

const Research = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const papers = Object.entries(researchData).map(([id, paper]) => ({ id, ...paper }));

  return (
    <section className="section-border-top relative">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="glow-orb left-0 top-1/3 h-[400px] w-[400px] bg-accent2-500/[0.04]" />
      </div>

      <HorizontalArchive
        id="research"
        items={papers}
        basePath="/research"
        onPreview={setSelectedImage}
        eyebrow="Publications"
        title="Academic Research"
      />

      <ImageLightbox image={selectedImage} onClose={() => setSelectedImage(null)} />
    </section>
  );
};

export default Research;
