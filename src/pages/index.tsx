import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import ErrorBoundary from '@/components/ErrorBoundary';
import Marquee from '@/components/motion/Marquee';

const techMarquee = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'React Native',
  'Python', 'TensorFlow', 'MongoDB', 'Firebase', 'AWS',
  'Docker', 'Tailwind CSS', 'Supabase', 'Express.js',
];

const projectMarquee = [
  'Web Applications', 'Mobile Apps', 'AI Products', 'REST APIs',
  'Design Systems', 'Full-Stack', 'Cloud Architecture', 'UI/UX',
];

export default function Home() {
  return (
    <main className="grain">
      <Navbar />
      <ErrorBoundary><Hero /></ErrorBoundary>

      {/* Tech marquee */}
      <div className="section-border-top py-8">
        <Marquee items={techMarquee} speed={35} />
      </div>

      <ErrorBoundary><About /></ErrorBoundary>
      <ErrorBoundary><Services /></ErrorBoundary>

      {/* Project types marquee */}
      <div className="section-border-top py-8">
        <Marquee items={projectMarquee} speed={40} direction="right" />
      </div>

      <ErrorBoundary><Skills /></ErrorBoundary>
      <ErrorBoundary><Projects /></ErrorBoundary>
      <ErrorBoundary><Achievements /></ErrorBoundary>
      <ErrorBoundary><Certifications /></ErrorBoundary>
      <ErrorBoundary><Contact /></ErrorBoundary>
      <Footer />
    </main>
  );
}
