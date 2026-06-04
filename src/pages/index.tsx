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

export default function Home() {
  return (
    <main>
      <Navbar />
      <ErrorBoundary><Hero /></ErrorBoundary>
      <ErrorBoundary><About /></ErrorBoundary>
      <ErrorBoundary><Services /></ErrorBoundary>
      <ErrorBoundary><Skills /></ErrorBoundary>
      <ErrorBoundary><Projects /></ErrorBoundary>
      <ErrorBoundary><Achievements /></ErrorBoundary>
      <ErrorBoundary><Certifications /></ErrorBoundary>
      <ErrorBoundary><Contact /></ErrorBoundary>
      <Footer />
    </main>
  );
}
