import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Anees Ur Rehman';
  const typingSpeed = 150; // milliseconds per character
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let i = 0;
    typingRef.current = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayText(fullText.substring(0, i));
        i++;
      } else {
        if (typingRef.current) clearInterval(typingRef.current);
      }
    }, typingSpeed);

    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
    };
  }, []);

  return (
    <section id="home" className="pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-30 dark:opacity-10">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-1/2 order-2 md:order-1" data-aos="fade-right">
            <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              <span className="relative">
                {displayText}
                <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-blue-600 dark:bg-blue-400 "></span>
              </span>
            </h1>
            <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 ">
              Full-Stack Developer
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href="/assets/Resume.pdf"  // Updated path to match the public directory structure
                download="Anees_Ur_Rehman_Resume.pdf"  // Added download attribute
                className="btn-secondary hover:scale-105 transition-transform animate-pulse"
              >
                Download Resume
              </a>
              <Link href="#contact" className="btn-primary hover:scale-105 transition-transform">
                <i className="fas fa-paper-plane mr-2"></i> Contact Info
              </Link>
            </div>
            
            <div className="mt-10 flex items-center gap-6">
              <a href="https://linkedin.com/in/araneeskhan" target="_blank" rel="noopener noreferrer" 
                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-125">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://github.com/araneeskhan" target="_blank" rel="noopener noreferrer"
                 className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors hover:scale-125">
                <i className="fab fa-github text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center order-1 md:order-2" data-aos="fade-left" data-aos-delay="200">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-xl animate-pulse-slow"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl hover:scale-105 transition-transform duration-300">
                <Image 
                  src="/assets/profile-pic.png"
                  alt="Anees profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <i className="fas fa-chevron-down text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;