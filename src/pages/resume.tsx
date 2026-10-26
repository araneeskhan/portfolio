import Layout from "@/components/Layout";
import Link from "next/link";
import { useSyncExternalStore } from "react";
import personal from "@/config/personal";

const desktopQuery = "(min-width: 768px)";
function subscribe(callback: () => void) {
  const media = window.matchMedia(desktopQuery);
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}
const getSnapshot = () => window.matchMedia(desktopQuery).matches;
const getServerSnapshot = () => false;

export default function Resume() {
  const showPreview = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return (
    <Layout title="Resume" description={`Resume of ${personal.name}, ${personal.title} based in ${personal.location}.`} canonicalPath="/resume">
      <div className="min-h-[100svh] bg-[rgb(var(--background))] pb-12 pt-24 sm:pt-28">
        <div className="section-container">
          <div className="mx-auto max-w-5xl">
            <Link href="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-canvas-600 dark:text-canvas-300"><span aria-hidden="true">←</span> Back to Portfolio</Link>
            <header className="my-6">
              <p className="eyebrow">Resume</p>
              <h1 className="mt-4 break-words font-display text-3xl font-bold tracking-tight text-canvas-950 dark:text-white sm:text-4xl">{personal.name}</h1>
              <p className="mt-2 text-lg font-semibold text-accent-600 dark:text-accent-300">{personal.title}</p>
              <p className="mt-2 text-canvas-600 dark:text-canvas-300">Master’s student in Artificial Intelligence · {personal.location}</p>
            </header>
            <div className="mb-6 grid gap-3 sm:flex sm:flex-wrap">
              <a href={personal.resumePath} download={personal.resumeFileName} className="btn-primary min-h-12"><span>Download PDF</span></a>
              <a href={personal.resumePath} target="_blank" rel="noopener noreferrer" className="btn-secondary min-h-12">Open full resume <span aria-hidden="true">↗</span></a>
            </div>
            {showPreview ? (
              <div className="overflow-hidden rounded-2xl border border-canvas-200 bg-white dark:border-white/10">
                <iframe src={`${personal.resumePath}#toolbar=0&navpanes=0&scrollbar=1`} className="h-[85svh] min-h-[500px] w-full" title={`${personal.name} resume`} loading="lazy" />
              </div>
            ) : (
              <section aria-label="Resume highlights" className="space-y-6">
                <article className="surface-card p-5 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-accent-600 dark:text-accent-300">Published mobile game</p>
                  <h2 className="mt-3 font-display text-2xl font-bold leading-tight">Business Empire: Underworld</h2>
                  <p className="mt-3 leading-7 text-canvas-600 dark:text-canvas-300">Built and published an Android business simulation and strategy game on Google Play, with connected gameplay systems, offline earnings, and cloud saves.</p>
                  <p className="mt-3 text-sm leading-6 text-canvas-600 dark:text-canvas-300">React Native · Expo · TypeScript · Zustand · Supabase</p>
                  <Link href="/projects/business-empire-underworld" className="mt-5 inline-flex min-h-11 items-center gap-2 font-semibold text-accent-600 dark:text-accent-300">Explore the project <span aria-hidden="true">→</span></Link>
                </article>
                <article className="surface-card p-5 sm:p-8">
                  <h2 className="font-display text-xl font-bold">Engineering &amp; research</h2>
                  <p className="mt-3 leading-7 text-canvas-600 dark:text-canvas-300">Full-stack web and mobile development with React, Next.js, React Native, and Node.js. Research interests include AI for software engineering, large language models, and secure software systems.</p>
                  <p className="mt-3 text-sm leading-6 text-canvas-600 dark:text-canvas-300">This overview highlights selected work. Open or download the PDF above for the complete resume, education, experience, and publications.</p>
                </article>
                <a href={`mailto:${personal.email}`} className="inline-flex min-h-11 max-w-full items-center break-all text-sm font-semibold text-accent-600 dark:text-accent-300">{personal.email}</a>
              </section>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
