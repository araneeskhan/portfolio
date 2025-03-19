'use client';  // Add this at the very top

import { useState, useEffect } from 'react';
import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when pathname changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 hover:opacity-90 transition-opacity">
            Anees Ur Rehman
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLinks />
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button - Clean icon style */}
          <div className="flex items-center space-x-6 md:hidden">
            <ThemeToggle />
            <button 
              className="text-gray-800 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <i className="fas fa-times text-2xl"></i>
              ) : (
                <i className="fas fa-bars text-2xl"></i>
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4">
            <div className="flex flex-col space-y-4">
              <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Updated NavLinks component with proper typing and pathname-based active detection
const NavLinks = ({ 
  mobile = false, 
  setIsMenuOpen = () => {} 
}: { 
  mobile?: boolean; 
  setIsMenuOpen?: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();
  
  const links = [
    { name: 'About', href: '/#about' },
    { name: 'Skills', href: '/#skills' }, 
    { name: 'Projects', href: '/#projects' },
    { name: 'Achievements', href: '/#achievements' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Updated active link detection using pathname
  const isActive = (href: string) => {
    if (pathname === '/') {
      // On homepage, check for section matches
      const section = href.split('#')[1];
      return pathname === '/' && section && pathname.includes(section);
    }
    return href.startsWith(pathname);
  };

  return (
    <>
      {links.map((link, index) => (
        <Link
          key={link.name}
          href={link.href}
          className={`font-medium transition-colors duration-200 
            ${mobile ? 'block text-center py-3 hover:bg-gray-100 dark:hover:bg-gray-700 rounded' : ''}
            ${isActive(link.href) 
              ? 'text-blue-600 dark:text-blue-400' 
              : 'text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400'}`}
          onClick={() => mobile && setIsMenuOpen(false)}
          style={mobile ? { animationDelay: `${index * 0.1}s` } : {}}
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;
