import Layout from "@/components/Layout";
import Link from "next/link";

const resumePath = "/assets/Resume.pdf";

export default function Resume() {
  return (
    <Layout
      title="Resume | Anees Ur Rehman"
      description="View the online resume of Anees Ur Rehman, Full-Stack Developer based in Paris."
    >
      <div className="min-h-screen bg-slate-50 pt-28 pb-12 dark:bg-slate-950">
        <div className="section-container">
          <div className="mx-auto mb-6 flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/" className="btn-secondary w-fit">
              <i className="fas fa-arrow-left" />
              Back to Portfolio
            </Link>

            <div className="flex flex-wrap gap-3">
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <i className="fas fa-external-link-alt" />
                Open in Tab
              </a>
              <a
                href={resumePath}
                download="AneesUrRehman_Resume.pdf"
                className="btn-primary"
              >
                <i className="fas fa-download" />
                Download PDF
              </a>
            </div>
          </div>

          <div className="mx-auto max-w-5xl">
            <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-200/70 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none md:block">
              <iframe
                src={`${resumePath}#toolbar=0&navpanes=0&scrollbar=1`}
                className="w-full"
                style={{ height: "88vh" }}
                title="Anees Ur Rehman Resume"
              />
            </div>

            <div className="md:hidden">
              <div className="surface-card p-8 text-center">
                <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                  <i className="fas fa-file-pdf text-2xl" />
                </div>
                <h1 className="text-2xl font-black text-slate-950 dark:text-white">
                  AneesUrRehman_Resume.pdf
                </h1>
                <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
                  PDF preview can be unreliable on mobile. Open the file in a
                  browser tab or download it directly.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <a
                    href={resumePath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary w-full"
                  >
                    <i className="fas fa-external-link-alt" />
                    Open in Browser
                  </a>
                  <a
                    href={resumePath}
                    download="AneesUrRehman_Resume.pdf"
                    className="btn-secondary w-full"
                  >
                    <i className="fas fa-download" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
