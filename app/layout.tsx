import type { Metadata } from "next";
import { JetBrains_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = "https://aditya-portfolio-9sox.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "Aditya Kumar — Java Full-Stack Developer & AI Engineer",
    template: "%s",
  },
  description:
    "Portfolio of Aditya Kumar, a Java Full-Stack Developer building secure web applications, RAG systems and practical AI workflows.",
  keywords: [
    "Aditya Kumar", "Java Full-Stack Developer", "AI Engineer", "Spring Boot Developer",
    "RAG Engineer", "Kanpur developer portfolio", "Next.js developer",
  ],
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Aditya Kumar — Java Full-Stack Developer & AI Engineer",
    description: "Java, Spring Boot, full-stack engineering and practical AI systems.",
    type: "website",
    url: SITE_URL,
    siteName: "Aditya Kumar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aditya Kumar — Java Full-Stack Developer & AI Engineer",
    description: "Java, Spring Boot, full-stack engineering and practical AI systems.",
  },
  robots: { index: true, follow: true },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aditya Kumar",
  jobTitle: "Java Full-Stack Developer & AI Engineer",
  url: SITE_URL,
  email: "mailto:nanuadityakumar@gmail.com",
  address: { "@type": "PostalAddress", addressLocality: "Kanpur", addressRegion: "Uttar Pradesh", addressCountry: "IN" },
  sameAs: [
    "https://github.com/Aditya-kumar2005",
    "https://www.linkedin.com/in/aditya-kumar-b4874235b/",
  ],
  knowsAbout: [
    "Java", "Spring Boot", "React", "Next.js", "TypeScript", "REST APIs",
    "PostgreSQL", "Retrieval-Augmented Generation", "Agentic AI", "Docker",
  ],
  description:
    "BCA candidate and Java Full-Stack Developer building web applications, REST APIs, database-driven systems, secure backend services and practical AI systems.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={`${manrope.variable} ${mono.variable}`}>{children}</body>
    </html>
  );
}
