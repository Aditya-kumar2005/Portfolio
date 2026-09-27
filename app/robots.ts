import type { MetadataRoute } from 'next';
export default function robots(): MetadataRoute.Robots { return { rules:{ userAgent:'*', allow:'/' }, sitemap:'https://aditya-portfolio-9sox.vercel.app/sitemap.xml' }; }
