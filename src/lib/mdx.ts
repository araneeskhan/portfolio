import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { ContentItem } from '@/data/types';

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(type: 'projects' | 'research') {
  const dirPath = path.join(contentDirectory, type);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter((file) => file.endsWith('.mdx'));
}

export function getPostBySlug(type: 'projects' | 'research', slug: string): ContentItem & { id: string } {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, type, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);

  const rawPost = {
    id: realSlug,
    title: data.title || '',
    coverImage: data.coverImage || '',
    description: content,
    shortDescription: data.shortDescription ?? null,
    category: data.category ?? null,
    status: data.status ?? null,
    role: data.role ?? null,
    year: data.year ?? null,
    featured: data.featured ?? null,
    liveUrl: data.liveUrl ?? null,
    videoPath: data.videoPath ?? null,
    videoAspectRatio: data.videoAspectRatio ?? null,
    technologies: data.technologies || [],
    features: data.features || [],
    highlights: data.highlights || [],
    metrics: data.metrics || [],
    githubUrl: data.githubUrl ?? null,
    caseStudyUrl: data.caseStudyUrl ?? null,
    paperUrl: data.paperUrl ?? null,
    doi: data.doi ?? null,
    publisher: data.publisher ?? null,
    descriptionUrl: data.descriptionUrl ?? null,
    appVideoUrl: data.appVideoUrl ?? null,
    webVideoUrl: data.webVideoUrl ?? null,
    contributors: data.contributors || [],
    screenshots: data.screenshots || []
  };

  // Next.js `getStaticProps` throws an error if any property is `undefined`.
  // The ?? null above handles most fields, but we should strictly strip any remaining undefined.
  return JSON.parse(JSON.stringify(rawPost));
}

export function getAllPosts(type: 'projects' | 'research'): (ContentItem & { id: string })[] {
  const slugs = getPostSlugs(type);
  const posts = slugs
    .map((slug) => getPostBySlug(type, slug))
    // We could add sorting here based on year if needed
    .sort((a, b) => {
      if (!a.year || !b.year) return 0;
      return parseInt(b.year) - parseInt(a.year);
    });
  return posts;
}
