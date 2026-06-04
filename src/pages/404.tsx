import Link from "next/link";
import Layout from "../components/Layout";

const quickLinks = [
  { label: "About", href: "/#about", icon: "fa-user" },
  { label: "Projects", href: "/#projects", icon: "fa-folder-open" },
  { label: "Services", href: "/#services", icon: "fa-briefcase" },
  { label: "Contact", href: "/#contact", icon: "fa-envelope" },
];

export default function Custom404() {
  return (
    <Layout title="404 — Page Not Found | Anees Ur Rehman">
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 px-4">
        {/* Background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-blue-400 to-blue-600 dark:from-blue-600 dark:to-blue-900 rounded-full blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gradient-to-br from-purple-400 to-purple-600 dark:from-purple-600 dark:to-purple-900 rounded-full blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          {/* Big 404 */}
          <div className="relative mb-6">
            <h1 className="text-[10rem] md:text-[14rem] font-black leading-none bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 dark:from-blue-400 dark:via-purple-400 dark:to-blue-400 bg-clip-text text-transparent select-none">
              404
            </h1>
            {/* Floating icon over the zero */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 mt-4">
                <i className="fas fa-map-signs text-3xl md:text-4xl text-blue-600 dark:text-blue-400"></i>
              </div>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Lost in the void?
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-10 max-w-md mx-auto leading-relaxed">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Here are some helpful links to get you back on track.
          </p>

          {/* Quick nav */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group flex flex-col items-center gap-2 p-4 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/30 dark:to-purple-900/30 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${link.icon} text-blue-600 dark:text-blue-400`}></i>
                </div>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          {/* Back home CTA */}
          <Link
            href="/"
            className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/40"
          >
            <span className="relative z-10 flex items-center gap-2">
              <i className="fas fa-home"></i>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Link>
        </div>
      </div>
    </Layout>
  );
}
