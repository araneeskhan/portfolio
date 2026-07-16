import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { MotionConfig } from 'motion/react';
import { Analytics } from '@vercel/analytics/react';
import FloatingBackToTop from '@/components/FloatingBackToTop';
import ScrollProgress from '@/components/motion/ScrollProgress';
import CustomCursor from '@/components/motion/CustomCursor';
import personal from '@/config/personal';
import { fontClass } from '@/styles/fonts';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();



  useEffect(() => {
    const onStart = () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
    const onComplete = () => {
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
        <meta name="theme-color" content="#f6f5f2" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#08090b" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content={personal.siteUrl} />
        <meta property="og:title" content={`${personal.name} | ${personal.title}`} />
        <meta property="og:description" content={personal.description} />
        <meta property="og:image" content={`${personal.siteUrl}/assets/profile-pic.jpeg`} />
        <meta property="og:image:width" content="800" />
        <meta property="og:image:height" content="800" />
        <meta property="og:locale" content="en_US" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.name} | ${personal.title}`} />
        <meta name="twitter:description" content={personal.description} />
        <meta name="twitter:image" content={`${personal.siteUrl}/assets/profile-pic.jpeg`} />

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
                'React',
                'Next.js',
                'Node.js',
                'TypeScript',
                'React Native',
                'Python',
                'TensorFlow',
                'Firebase',
                'MongoDB',
                'Express.js',
              ],
            }),
          }}
        />
      </Head>
      <div className={fontClass}>
        <MotionConfig reducedMotion="user">
          <ScrollProgress />
          <CustomCursor />
          <Component {...pageProps} />
          <FloatingBackToTop />
        </MotionConfig>
        <Analytics />
      </div>
    </>
  );
}
