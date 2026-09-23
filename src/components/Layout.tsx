import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';
import ErrorBoundary from './ErrorBoundary';
import personal from '@/config/personal';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
}

const Layout = ({ 
  children, 
  title = '',
  description = '',
  canonicalPath = '',
  ogImage,
  ogType = 'website',
}: LayoutProps) => {
  const pageTitle = title
    ? (title.includes(personal.name) ? title : `${title} | ${personal.name}`)
    : `${personal.name} | ${personal.title}`;
  const pageDesc = description || personal.description;
  const canonicalUrl = `${personal.siteUrl}${canonicalPath}`;
  const image = ogImage 
    ? (ogImage.startsWith('http') ? ogImage : `${personal.siteUrl}${ogImage}`)
    : `${personal.siteUrl}/assets/profile-pic.jpeg`;

  return (
    <>
      <Head>
        <title key="title">{pageTitle}</title>
        <meta key="description" name="description" content={pageDesc} />
        {canonicalPath !== undefined && <link key="canonical" rel="canonical" href={canonicalUrl} />}

        <meta key="og:type" property="og:type" content={ogType} />
        <meta key="og:url" property="og:url" content={canonicalUrl} />
        <meta key="og:title" property="og:title" content={pageTitle} />
        <meta key="og:description" property="og:description" content={pageDesc} />
        <meta key="og:image" property="og:image" content={image} />

        <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
        <meta key="twitter:title" name="twitter:title" content={pageTitle} />
        <meta key="twitter:description" name="twitter:description" content={pageDesc} />
        <meta key="twitter:image" name="twitter:image" content={image} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-grow">
          <ErrorBoundary>{children}</ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;