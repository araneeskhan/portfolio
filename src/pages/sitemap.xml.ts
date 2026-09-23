import { GetServerSideProps } from 'next';
import { getPostSlugs } from '@/lib/mdx';
import personal from '@/config/personal';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const base = personal.siteUrl;
    const now = new Date().toISOString().split('T')[0];

    const staticPaths = ['', '/resume', '/case-studies/campus-sports-sphere'];
    const projectPaths = getPostSlugs('projects').map((slug) => `/projects/${slug.replace(/\.mdx$/, '')}`);
    const researchPaths = getPostSlugs('research').map((slug) => `/research/${slug.replace(/\.mdx$/, '')}`);
    const all = [...staticPaths, ...projectPaths, ...researchPaths];

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (path) => `  <url>
    <loc>${base}${path}</loc>
    <lastmod>${now}</lastmod>
    <changefreq>${path === '' ? 'weekly' : 'monthly'}</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

    res.setHeader('Content-Type', 'text/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');
    res.write(sitemap);
    res.end();
  } catch {
    res.statusCode = 500;
    res.end();
  }

  return { props: {} };
};

export default function SitemapPage() {
  return null;
}
