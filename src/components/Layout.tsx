import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Head from 'next/head';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
}

const Layout = ({ 
  children, 
  title = 'Anees Ur Rehman | Frontend Developer',
  description = 'Portfolio of Anees Ur Rehman, Frontend Developer specializing in creating responsive and user-friendly web experiences.'
}: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;