import { GetServerSideProps } from 'next';
import { projectsData } from '@/data/projects';
import personal from '@/config/personal';

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const base = personal.siteUrl;

  const staticPaths = ['', '/resume', '/case-studies/campus-sports-sphere'];
  const projectPaths = Object.keys(projectsData).map((id) => `/projects/${id}`);
  const all = [...staticPaths, ...projectPaths];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${all
  .map(
    (path) => `  <url>
    <loc>${base}${path}</loc>
    <changefreq>monthly</changefreq>
    <priority>${path === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  res.setHeader('Content-Type', 'text/xml; charset=utf-8');
  res.write(sitemap);
  res.end();

  return { props: {} };
};

export default function SitemapPage() {
  return null;
}
