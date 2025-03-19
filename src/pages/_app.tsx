import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';
import dynamic from 'next/dynamic';

// Fix the dynamic import of AOS
const AOS = dynamic(
  () => import('aos').then((aos) => {
    return function AOSComponent() {
      return null;
    };
  }),
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      require('aos/dist/aos.css');
      
      // Initialize AOS
      import('aos').then((aos) => {
        aos.init({
          duration: 800,
          once: false,
          mirror: true,
        });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <title>Anees Ur Rehman | Frontend Developer</title>
        <meta name="description" content="Portfolio of Anees Ur Rehman, Frontend Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#111827" media="(prefers-color-scheme: dark)" />
        <link rel="icon" href="/favicon.ico" />
        <link 
          rel="stylesheet" 
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" 
          integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" 
          crossOrigin="anonymous" 
          referrerPolicy="no-referrer" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}