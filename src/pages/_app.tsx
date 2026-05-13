import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import 'aos/dist/aos.css';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    import('aos').then((aos) => {
      aos.init({
        duration: 600,
        once: true,
        mirror: false,
        easing: 'ease-out-cubic',
        offset: 100,
      });
    });
  }, []);

  useEffect(() => {
    const onStart = () => {
      // Disable smooth-scroll before navigation so the jump to top is instant
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
    };
    const onComplete = () => {
      // Re-enable smooth-scroll for anchor links on the new page
      document.documentElement.style.scrollBehavior = '';
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);
    router.events.on('routeChangeError', onComplete);
    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
      router.events.off('routeChangeError', onComplete);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>Anees Ur Rehman | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer specializing in React, Next.js, React Native, and AI/ML. Based in Paris, France. Available for freelance opportunities." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://araneeskhan.vercel.app" />
        <meta property="og:title" content="Anees Ur Rehman | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in React, Next.js, React Native, and AI/ML. Based in Paris, France. Available for freelance opportunities." />
        <meta property="og:image" content="https://araneeskhan.vercel.app/assets/profile-pic.jpeg" />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Anees Ur Rehman | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer specializing in React, Next.js, React Native, and AI/ML. Based in Paris, France." />
        <meta name="twitter:image" content="https://araneeskhan.vercel.app/assets/profile-pic.jpeg" />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Anees Ur Rehman",
              jobTitle: "Full-Stack Developer",
              url: "https://araneeskhan.vercel.app",
              email: "aneesurrehman1358@gmail.com",
              image: "https://araneeskhan.vercel.app/assets/profile-pic.jpeg",
              sameAs: [
                "https://linkedin.com/in/araneeskhan",
                "https://github.com/araneeskhan",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Paris",
                addressCountry: "FR",
              },
              knowsAbout: [
                "React", "Next.js", "Node.js", "TypeScript",
                "React Native", "Python", "TensorFlow", "Firebase",
                "MongoDB", "Express.js",
              ],
            }),
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </Head>
      <Component {...pageProps} />
      <Analytics /> {/* place outside Component so it persists across pages */}
    </>
  );
}