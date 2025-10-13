"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg border-b border-gray-200/50 dark:border-gray-800/50 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo with gradient effect */}
            <Link
              href="/"
              className="group relative text-2xl font-bold transition-all duration-300"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                Anees Ur Rehman
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 group-hover:w-full transition-all duration-300"></div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              <NavLinks />
              <div className="ml-4 pl-4 border-l border-gray-300 dark:border-gray-700">
                <ThemeToggle />
              </div>
            </div>

            {/* Mobile Menu Controls */}
            <div className="flex items-center space-x-4 md:hidden">
              <ThemeToggle />
              <button
                className="relative w-10 h-10 flex items-center justify-center text-gray-800 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-all duration-300"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <div className="relative w-6 h-5 flex flex-col justify-between">
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`w-full h-0.5 bg-current transform transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
      ></div>

      {/* Mobile Menu Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white dark:bg-gray-900 z-50 md:hidden transform transition-transform duration-300 ease-out shadow-2xl ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile menu header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-800">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <i className="fas fa-times text-xl text-gray-700 dark:text-gray-300"></i>
            </button>
          </div>

          {/* Mobile menu links */}
          <div className="flex-1 overflow-y-auto py-6">
            <NavLinks mobile setIsMenuOpen={setIsMenuOpen} />
          </div>

          {/* Mobile menu footer */}
          <div className="p-6 border-t border-gray-200 dark:border-gray-800">
            <div className="flex space-x-4 justify-center">
              <a
                href="https://linkedin.com/in/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-white rounded-full transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const NavLinks = ({
  mobile = false,
  setIsMenuOpen = () => {},
}: {
  mobile?: boolean;
  setIsMenuOpen?: (isOpen: boolean) => void;
}) => {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("");

  const links = [
    { name: "About", href: "/#about", icon: "fa-user" },
    { name: "Skills", href: "/#skills", icon: "fa-code" },
    { name: "Projects", href: "/#projects", icon: "fa-folder-open" },
    { name: "Achievements", href: "/#achievements", icon: "fa-trophy" },
    { name: "Contact", href: "/#contact", icon: "fa-envelope" },
  ];

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const sections = links
        .map((link) => link.href.split("#")[1])
        .filter(Boolean);
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    const section = href.split("#")[1];
    return section === activeSection;
  };

  if (mobile) {
    return (
      <div className="space-y-2 px-4">
        {links.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            className={`group flex items-center space-x-4 px-4 py-4 rounded-xl font-medium transition-all duration-300 ${
              isActive(link.href)
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            }`}
            onClick={() => setIsMenuOpen(false)}
            style={{
              animation: "slideInRight 0.3s ease-out",
              animationDelay: `${index * 0.05}s`,
              animationFillMode: "both",
            }}
          >
            <i
              className={`fas ${link.icon} text-lg w-5 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-blue-600 dark:text-blue-400"
              }`}
            ></i>
            <span className="flex-1">{link.name}</span>
            {isActive(link.href) && (
              <i className="fas fa-chevron-right text-sm"></i>
            )}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className={`relative px-4 py-2 font-medium transition-all duration-300 rounded-lg group ${
            isActive(link.href)
              ? "text-blue-600 dark:text-blue-400"
              : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
          }`}
        >
          <span className="relative z-10">{link.name}</span>
          {isActive(link.href) ? (
            <div className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-lg"></div>
          ) : (
            <div className="absolute inset-0 bg-gray-100 dark:bg-gray-800 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          )}
          <div
            className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 transition-all duration-300 ${
              isActive(link.href) ? "w-3/4" : "w-0 group-hover:w-3/4"
            }`}
          ></div>
        </Link>
      ))}
    </>
  );
};

export default Navbar;
