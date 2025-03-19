import Link from 'next/link';
import Layout from '../components/Layout';

export default function Custom404() {
  return (
    <Layout title="Page Not Found | Anees Ur Rehman">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 py-24 text-center">
        <h1 className="text-6xl font-bold text-blue-600 dark:text-blue-400 mb-4">404</h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">Page Not Found</h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-md mb-8">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        <Link 
          href="/"
          className="btn-primary"
        >
          Back to Home
        </Link>
      </div>
    </Layout>
  );
}