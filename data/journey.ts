export type JourneyEntry = {
  year: string;
  title: string;
  description: string;
  tag: string;
};

export const journey: JourneyEntry[] = [
  { year: '2024', title: 'Java Foundations & Core Systems', description: 'Core Java, OOP, debugging, console applications and a Java Swing ATM simulator.', tag: 'Core Java' },
  { year: '2025', title: 'Full-Stack Enterprise & Applied AI', description: 'Spring Boot, REST APIs, React, persistence, authentication and introductory AI learning.', tag: 'Spring + React' },
  { year: '2026', title: 'Production Systems & Agentic RAG', description: 'Full-stack systems alongside secure RAG, tenant isolation, workflow control and auditability.', tag: 'RAG + Security' },
  { year: 'Now', title: 'Enterprise Security & AI Governance', description: 'Retrieval, tools, validation, human approval and full-stack engineering, together.', tag: 'Agentic AI' },
];
