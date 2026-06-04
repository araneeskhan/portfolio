import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Analytics } from '@vercel/analytics/react';
import FloatingBackToTop from '@/components/FloatingBackToTop';
import personal from '@/config/personal';
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
      // Disable smooth scroll so Next.js's built-in scroll reset will be instant —
      // but do NOT call scrollTo here, that causes the current page to visually
      // scroll up before the new page has even loaded (the "rescroll" effect).
      document.documentElement.style.scrollBehavior = 'auto';
    };
    const onComplete = () => {
      // New page is now rendered. Jump to top instantly then restore smooth scroll.
      window.scrollTo(0, 0);
      document.documentElement.style.scrollBehavior = '';
    };
    const onError = () => {
      document.documentElement.style.scrollBehavior = '';
    };

    router.events.on('routeChangeStart', onStart);
    router.events.on('routeChangeComplete', onComplete);
    router.events.on('routeChangeError', onError);
    return () => {
      router.events.off('routeChangeStart', onStart);
      router.events.off('routeChangeComplete', onComplete);
      router.events.off('routeChangeError', onError);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <title>{`${personal.name} | ${personal.title}`}</title>
        <meta name="description" content={personal.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />

        {/* Early connection to Font Awesome CDN — reduces blocking time */}
        <link rel="preconnect" href="https://cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={personal.siteUrl} />
        <meta property="og:title" content={`${personal.name} | ${personal.title}`} />
        <meta property="og:description" content={personal.description} />
        <meta property="og:image" content={`${personal.siteUrl}/assets/profile-pic.jpeg`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.name} | ${personal.title}`} />
        <meta name="twitter:description" content={personal.description} />
        <meta name="twitter:image" content={`${personal.siteUrl}/assets/profile-pic.jpeg`} />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: personal.name,
              jobTitle: personal.title,
              url: personal.siteUrl,
              email: personal.email,
              image: `${personal.siteUrl}/assets/profile-pic.jpeg`,
              sameAs: [personal.linkedin, personal.github],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Paris',
                addressCountry: 'FR',
              },
              knowsAbout: [
                'React', 'Next.js', 'Node.js', 'TypeScript',
                'React Native', 'Python', 'TensorFlow', 'Firebase',
                'MongoDB', 'Express.js',
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
      <FloatingBackToTop />
      <Analytics />
    </>
  );
}