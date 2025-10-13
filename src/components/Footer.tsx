import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 border-t border-gray-200 dark:border-gray-800">
      {/* Animated background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link href="/" className="group inline-block mb-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:to-blue-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 transition-all duration-300">
                Anees Ur Rehman
              </h3>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              Full Stack Developer specializing in creating responsive and
              user-friendly experiences.
            </p>

            {/* Social Links */}
            <div className="flex space-x-3">
              <a
                href="https://linkedin.com/in/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-lg group-hover:text-white transition-colors"></i>
              </a>
              <a
                href="https://github.com/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-11 h-11 flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-900 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-lg group-hover:text-white transition-colors"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-link text-blue-600 dark:text-blue-400 mr-2 text-sm"></i>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { name: "About", href: "/#about", icon: "fa-user" },
                { name: "Skills", href: "/#skills", icon: "fa-code" },
                {
                  name: "Projects",
                  href: "/#projects",
                  icon: "fa-folder-open",
                },
                {
                  name: "Achievements",
                  href: "/#achievements",
                  icon: "fa-trophy",
                },
                { name: "Contact", href: "/#contact", icon: "fa-envelope" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                  >
                    <i
                      className={`fas ${link.icon} w-5 text-sm mr-2 group-hover:translate-x-1 transition-transform`}
                    ></i>
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.name}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-address-book text-blue-600 dark:text-blue-400 mr-2 text-sm"></i>
              Contact Info
            </h3>
            <ul className="space-y-4">
              <li className="group">
                <div className="flex items-start">
                  <div className="w-9 h-9 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-envelope text-blue-600 dark:text-blue-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                      Email
                    </p>
                    <a
                      href="mailto:aneesurrehman1358@gmail.com"
                      className="text-sm text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      aneesurrehman1358@gmail.com
                    </a>
                  </div>
                </div>
              </li>
              <li className="group">
                <div className="flex items-start">
                  <div className="w-9 h-9 flex items-center justify-center bg-purple-100 dark:bg-purple-900/30 rounded-lg mr-3 flex-shrink-0 group-hover:scale-110 transition-transform">
                    <i className="fas fa-map-marker-alt text-purple-600 dark:text-purple-400 text-sm"></i>
                  </div>
                  <div>
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-1">
                      Location
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Paris, France
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          {/* Newsletter/CTA Section */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <i className="fas fa-rocket text-blue-600 dark:text-blue-400 mr-2 text-sm"></i>
              Let's Work Together
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              Have a project in mind? Let's create something amazing together!
            </p>
            <Link
              href="/#contact"
              className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10 flex items-center">
                <i className="fas fa-paper-plane mr-2"></i>
                Get In Touch
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center md:text-left">
              &copy; {currentYear}{" "}
              <span className="font-semibold text-gray-900 dark:text-white">
                Anees Ur Rehman
              </span>
            </p>
          </div>
        </div>

        {/* Back to Top Button */}
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group w-12 h-12 flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
            aria-label="Back to top"
          >
            <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
          </button>
        </div>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
