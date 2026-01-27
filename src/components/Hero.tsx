import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRole, setCurrentRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const fullText = "Anees Ur Rehman";
  const roles = ["Full-Stack Developer", "Software Engineer"];
  const typingSpeed = 150;
  const typingRef = useRef<NodeJS.Timeout | null>(null);

  // Name typing effect
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

  // Role typing effect
  useEffect(() => {
    const role = roles[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (currentRole.length < role.length) {
            setCurrentRole(role.substring(0, currentRole.length + 1));
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (currentRole.length > 0) {
            setCurrentRole(currentRole.substring(0, currentRole.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentRole, isDeleting, currentRoleIndex]);

  return (
    <section
      id="home"
      className="min-h-screen pt-28 pb-20 md:pt-36 md:pb-28 relative overflow-hidden flex items-center"
    >
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-24 left-1/2 w-96 h-96 bg-gradient-to-br from-pink-400 to-pink-600 dark:from-pink-600 dark:to-pink-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-[0.02]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Text Content */}
          <div
            className="md:w-1/2 order-2 md:order-1 space-y-6"
            data-aos="fade-right"
          >
            {/* Greeting badge */}
            <div className="inline-flex items-center px-4 py-2 bg-blue-50 dark:bg-blue-900/30 rounded-full border border-blue-200 dark:border-blue-800">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></span>
              <p className="text-blue-600 dark:text-blue-400 font-medium text-sm"></p>
            </div>

            {/* Main heading with typing effect */}
            <div>
              <p className="text-gray-600 dark:text-gray-400 font-medium mb-2 text-lg">
                Salut, I'm
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                    {displayText}
                  </span>
                  <span className="absolute right-[-4px] top-0 h-full w-[3px] bg-blue-600 dark:bg-blue-400 animate-blink"></span>
                </span>
              </h1>
            </div>

            {/* Dynamic role with typing effect */}
            <div className="h-12 flex items-center">
              <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300">
                <span className="font-semibold text-purple-600 dark:text-purple-400">
                  {currentRole}
                </span>
                <span className="animate-blink">|</span>
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl">
              Building digital experiences that make a difference. Specialized
              in creating responsive, scalable, and user-friendly web
              applications.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/portfolio/assets/Resume.pdf"
                download="Anees_Ur_Rehman_Resume.pdf"
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/50"
              >
                <span className="relative z-10 flex items-center">
                  <i className="fas fa-download mr-2"></i>
                  Download Resume
                </span>
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </a>

              <Link
                href="#contact"
                className="group px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-xl border-2 border-gray-300 dark:border-gray-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <span className="flex items-center">
                  <i className="fas fa-paper-plane mr-2 text-blue-600 dark:text-blue-400"></i>
                  Contact Me
                </span>
              </Link>
            </div>

            {/* Social Links with enhanced styling */}
            <div className="pt-8 flex items-center gap-4">
              <span className="text-gray-600 dark:text-gray-400 font-medium">
                Connect with me:
              </span>
              <div className="flex gap-3">
                <a
                  href="https://linkedin.com/in/araneeskhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <i className="fab fa-linkedin text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"></i>
                </a>
                <a
                  href="https://github.com/araneeskhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <i className="fab fa-github text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Profile Image with enhanced effects */}
          <div
            className="md:w-1/2 flex justify-center order-1 md:order-2"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Animated background rings */}
              <div className="absolute inset-0 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full opacity-20 blur-2xl animate-pulse-slow"></div>
                <div className="absolute inset-[-10px] border-2 border-blue-500/30 dark:border-blue-400/30 rounded-full animate-spin-slow"></div>
                <div className="absolute inset-[-20px] border-2 border-purple-500/20 dark:border-purple-400/20 rounded-full animate-spin-reverse-slow"></div>
              </div>

              {/* Profile image container */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl hover:scale-100 transition-transform duration-500 group">
                <Image
                  src="/portfolio/assets/profile-pic.jpg"
                  alt="Anees profile picture"
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-500"
                  priority
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 animate-float">
                <span className="text-sm font-bold text-gray-900 dark:text-white">
                  ✨ Innovative
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a
          href="#about"
          className="flex flex-col items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
        >
          <span className="text-xs mb-2 opacity-0 group-hover:opacity-100 transition-opacity">
            Scroll Down
          </span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-current rounded-full animate-scroll-indicator"></div>
          </div>
        </a>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }

        @keyframes blink {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse-slow {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes scroll-indicator {
          0% {
            transform: translateY(0);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(12px);
            opacity: 0;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-blink {
          animation: blink 1s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 25s linear infinite;
        }

        .animate-scroll-indicator {
          animation: scroll-indicator 2s ease-in-out infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              currentColor 1px,
              transparent 1px
            ),
            linear-gradient(to bottom, currentColor 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
