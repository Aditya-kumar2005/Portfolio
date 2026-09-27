import type { MetadataRoute } from 'next';
import { projects } from '@/data/projects';

const base = 'https://aditya-portfolio-9sox.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ['/', '/about', '/portfolio', '/ai-engineering', '/tech-stack', '/testimonials', '/contact'];
  const projectRoutes = projects.map((p) => `/projects/${p.slug}`);
  return [...staticRoutes, ...projectRoutes].map((url) => ({ url: base + url, lastModified: new Date() }));
}
