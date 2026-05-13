import Layout from "@/components/Layout";
import Link from "next/link";

export default function Resume() {
  return (
    <Layout
      title="Resume | Anees Ur Rehman"
      description="View the online resume of Anees Ur Rehman, Full-Stack Developer based in Paris."
    >
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-24 pb-12">
        {/* Toolbar */}
        <div className="container mx-auto px-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4 max-w-5xl mx-auto">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group font-medium"
            >
              <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform"></i>
              Back to Portfolio
            </Link>

            <div className="flex gap-3">
              <a
                href="/assets/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300 font-medium text-sm"
              >
                <i className="fas fa-external-link-alt mr-2"></i>
                Open in Tab
              </a>
              <a
                href="/assets/Resume.pdf"
                download="AneesUrRehman_Resume.pdf"
                className="inline-flex items-center px-5 py-2.5 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/40 font-medium text-sm"
              >
                <i className="fas fa-download mr-2"></i>
                Download PDF
              </a>
            </div>
          </div>
        </div>

        {/* PDF viewer — desktop */}
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="hidden md:block rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <iframe
              src="/assets/Resume.pdf#toolbar=0&navpanes=0&scrollbar=1"
              className="w-full"
              style={{ height: "90vh" }}
              title="Anees Ur Rehman Resume"
            />
          </div>

          {/* Mobile fallback — browsers can't reliably embed PDFs on mobile */}
          <div className="md:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-200 dark:border-gray-700 text-center">
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-2xl">
                <i className="fas fa-file-pdf text-4xl text-blue-600 dark:text-blue-400"></i>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                AneesUrRehman_Resume.pdf
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm leading-relaxed">
                PDF preview isn&apos;t available on mobile. Open in your browser or download directly.
              </p>
              <div className="flex flex-col gap-3">
                <a
                  href="/assets/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-xl text-center"
                >
                  <i className="fas fa-external-link-alt mr-2"></i>
                  Open in Browser
                </a>
                <a
                  href="/assets/Resume.pdf"
                  download="AneesUrRehman_Resume.pdf"
                  className="w-full py-3 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium rounded-xl text-center"
                >
                  <i className="fas fa-download mr-2"></i>
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
