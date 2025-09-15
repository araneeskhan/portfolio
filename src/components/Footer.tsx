import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      {/* Background decoration - more subtle for footer */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 dark:opacity-5">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-900 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 -left-24 w-80 h-80 bg-purple-200 dark:bg-purple-900 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Anees Ur Rehman
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Full Stack Developer specializing in creating responsive and
              user-friendly Experiences.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin text-xl"></i>
              </a>
              <a
                href="https://github.com/araneeskhan"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-xl"></i>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/#about"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#skills"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  href="/#projects"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/#achievements"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Achievements
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <i className="fas fa-envelope text-blue-600 dark:text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-400">
                  aneesurrehman1358@gmail.com
                </span>
              </li>
              <li className="flex items-start">
                <i className="fas fa-map-marker-alt text-blue-600 dark:text-blue-400 mt-1 mr-3"></i>
                <span className="text-gray-600 dark:text-gray-400">
                  Paris, France
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">
            &copy; {currentYear} Anees Ur Rehman. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
