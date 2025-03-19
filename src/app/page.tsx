// src/app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Navbar = dynamic(() => import('@/components/Navbar'), { 
  ssr: false,
  loading: () => <div className="h-16"></div>
});

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Prevent theme flickering on page load
    const savedTheme = localStorage.getItem('theme') || 
      (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    
    document.documentElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    setMounted(true);
  }, []);

  // Prevent rendering until client-side
  if (!mounted) {
    return <div className="min-h-screen bg-white dark:bg-gray-900"></div>;
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  );
}