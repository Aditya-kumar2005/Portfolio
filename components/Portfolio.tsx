"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowDownRight, ArrowRight, Bot, CheckCircle2, ChevronRight, CircleDot,
  Code2, Database, ExternalLink, Github, Layers3, Linkedin, LockKeyhole,
  Mail, Menu, Network, Orbit, Server, ShieldCheck, Sparkles, Terminal,
  X, Zap
} from "lucide-react";
import { useState } from "react";

type Status = "Ongoing" | "Completed" | "Experimental" | "Learning";
type Project = {
  number: string; title: string; category: string; status: Status; date: string;
  description: string; technologies: string[]; problem: string; solution: string;
  decisions: string[]; github?: string; live?: string; featured?: boolean;
};
type Node = { name: string; tech: string; purpose: string; security: string; group: string };

const projects: Project[] = [
  {
    number: "01", title: "Sovereign On-Premise Agentic AI Workbench", category: "PRIVATE RAG / AGENTIC AI", status: "Ongoing", date: "Aug 26, 2026 — Present", featured: true,
    description: "A sovereign, on-premise agentic AI workbench for confidential government and industrial documents.",
    problem: "Confidential documents need useful AI-assisted retrieval and workflows without automatic exposure to external model providers.",
    solution: "A private RAG workflow with tenant-isolated retrieval, controlled tools, validation, human approval, reports and auditability.",
    decisions: ["Local embeddings and local LLM capability", "Deterministic multi-step workflows", "Allowlisted tools and explicit validation", "Human approval for controlled outputs"],
    technologies: ["Next.js", "TypeScript", "FastAPI", "PostgreSQL", "Redis", "Qdrant", "Celery", "FastEmbed/ONNX", "Ollama", "Docker", "JWT", "Argon2"]
  },
  { number: "02", title: "FreeFlix", category: "FULL-STACK MEDIA PLATFORM", status: "Ongoing", date: "Jan 2026 — Present", description: "A media streaming platform being developed with a React frontend and Spring Boot backend.", problem: "Build a media platform with clear separation between interface, APIs and persistent data.", solution: "React UI with Spring Boot REST APIs, authentication, CRUD operations and MySQL persistence.", decisions: ["REST-first backend design", "Spring Data JPA persistence", "Authentication-aware application flows"], technologies: ["Java", "Spring Boot", "Spring Data JPA", "Spring Security", "React", "MySQL", "REST APIs"] },
  { number: "03", title: "Department Management System", category: "SECURE BACKEND API", status: "Ongoing", date: "Apr 2026 — Present", description: "Department, employee and user management APIs with role-based access control.", problem: "Organize department and employee data while separating access by user role.", solution: "Spring Boot API design using Spring Security, JPA/Hibernate, MySQL and RBAC.", decisions: ["Role-based access control", "JPA/Hibernate for relational mapping", "Separate user and department concerns"], technologies: ["Java", "Spring Boot", "Spring Security", "JPA/Hibernate", "MySQL", "REST APIs"] },
  { number: "04", title: "Hospital Management System", category: "CORE JAVA", status: "Completed", date: "2024", description: "A console-based hospital management system built during Java development practice.", problem: "Practice modelling a domain with structured console flows and input validation.", solution: "A Core Java application focused on problem solving, validation and debugging.", decisions: ["Modular Java design", "Validation-driven flows", "Debugging as an implementation practice"], technologies: ["Java", "OOP", "Console UI"] },
  { number: "05", title: "AI Voice Assistant", category: "EXPERIMENTAL", status: "Experimental", date: "Learning project", description: "An AI and speech integration learning direction referenced in the engineering journey.", problem: "Explore speech and AI integration patterns.", solution: "Document this project with verified implementation details before publishing it as a full case study.", decisions: ["Keep claims limited to verified work", "Use this as an experimental learning entry"], technologies: ["AI Integration", "Speech", "Python"] },
  { number: "06", title: "Inventory Management System", category: "LEARNING", status: "Learning", date: "Details to verify", description: "A project entry awaiting verified architecture and implementation details.", problem: "Add only verified problem context before publishing.", solution: "Replace this learning card with a factual project story when implementation is documented.", decisions: ["No fabricated project details"], technologies: ["To be verified"] },
  { number: "07", title: "Fees Management System", category: "LEARNING", status: "Learning", date: "Details to verify", description: "A project entry awaiting verified architecture and implementation details.", problem: "Add only verified problem context before publishing.", solution: "Replace this learning card with a factual project story when implementation is documented.", decisions: ["No fabricated project details"], technologies: ["To be verified"] },
  { number: "08", title: "Simple Banking System", category: "LEARNING", status: "Learning", date: "Details to verify", description: "A project entry awaiting verified architecture and implementation details.", problem: "Add only verified problem context before publishing.", solution: "Replace this learning card with a factual project story when implementation is documented.", decisions: ["No fabricated project details"], technologies: ["To be verified"] },
];

const nodes: Node[] = [
  { group: "INGESTION", name: "Document Upload", tech: "Secure file ingestion", purpose: "Receives documents for controlled processing.", security: "SHA-256 file checks and controlled intake boundaries." },
  { group: "INGESTION", name: "OCR / Extraction", tech: "Document parsing", purpose: "Extracts text and useful structure from source documents.", security: "Keeps processing inside the defined application boundary." },
  { group: "INGESTION", name: "Chunking", tech: "Retrieval preparation", purpose: "Breaks extracted content into retrieval-ready units.", security: "Preserves source context for evidence-grounded answers." },
  { group: "RETRIEVAL", name: "Local Embedding", tech: "FastEmbed / ONNX", purpose: "Creates local vector representations of document content.", security: "Avoids automatically sending content to a remote embedding provider." },
  { group: "RETRIEVAL", name: "Qdrant", tech: "Vector database", purpose: "Stores and searches vector representations for relevant context.", security: "Supports tenant-isolated retrieval design." },
  { group: "RETRIEVAL", name: "RAG Retrieval", tech: "Evidence retrieval", purpose: "Finds relevant chunks to ground model responses in available evidence.", security: "Prompt-injection-aware retrieval is a design concern." },
  { group: "ORCHESTRATION", name: "Workflow Engine", tech: "Deterministic workflows", purpose: "Coordinates explicit multi-step processing rather than unconstrained execution.", security: "Uses controlled state transitions and defined workflow steps." },
  { group: "ORCHESTRATION", name: "Tool Gateway", tech: "Allowlisted tools", purpose: "Exposes only explicitly permitted operations to the workflow.", security: "Reduces uncontrolled tool execution through an allowlist boundary." },
  { group: "GOVERNANCE", name: "Validation", tech: "Policy checks", purpose: "Checks generated or derived outputs before consequential use.", security: "Separates generation from approval and validation." },
  { group: "GOVERNANCE", name: "Human Approval", tech: "Review gate", purpose: "Provides a deliberate decision point for controlled outputs.", security: "Keeps a human in the loop where the workflow requires it." },
  { group: "GOVERNANCE", name: "Audit Log", tech: "Structured auditability", purpose: "Records relevant workflow events for traceability.", security: "Supports investigation and operational accountability." },
];

const journey = [
  ["2024", "Java foundations", "Core Java, OOP, desktop applications and console systems established the foundation for backend engineering."],
  ["2025", "Full-stack + AI", "Spring Boot, React, REST APIs, databases and early AI integrations expanded the application-building stack."],
  ["2026", "Production-minded systems", "Security, RBAC, data layers, background processing, Docker and API architecture became stronger engineering themes."],
  ["NOW", "Agentic AI + RAG", "The current direction combines full-stack engineering with private RAG, deterministic workflows and governed AI systems."],
];

const aiLayers = [
  ["LLMs", "Model capability and local runtime considerations."], ["Prompt Engineering", "Instructions designed for controlled, task-focused interactions."],
  ["RAG", "Evidence retrieval that grounds output in known documents."], ["Embeddings", "Vector representations that enable semantic retrieval."],
  ["Vector Database", "Qdrant for retrieval-oriented vector storage."], ["Agents", "Goal-directed systems constrained by clear workflows."],
  ["Tools", "Allowlisted operations accessed through a controlled gateway."], ["Workflows", "Deterministic stages instead of unrestricted execution."],
  ["Validation", "Checks between generation and consequential output."], ["Production AI", "Security, observability, approval, auditability and operation."],
];

const credentials = [
  ["AI for Business Professionals", "HP LIFE", "Dec 2025", "cb014fb5-e2c4-434a-b583-523ccb342f55"],
  ["Introduction to Generative AI", "Certificate", "Oct 2025", "WBYUI6BK7IJK"],
  ["Introduction to Large Language Models", "Certificate", "Oct 2025", "FESVHYV5051B"],
  ["Introduction to Responsible AI", "Certificate", "", "RVA8QVUCSTAL"],
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  return <motion.div className={className} initial={reduce ? false : { opacity: 0, y: 18 }} whileInView={reduce ? {} : { opacity: 1, y: 0 }} viewport={{ once: true, amount: .12 }} transition={{ duration: .55, ease: "easeOut" }}>{children}</motion.div>;
}

function Status({ value }: { value: Status }) {
  const dot: Record<Status, string> = { Ongoing: "bg-cyan-300", Completed: "bg-blue-300", Experimental: "bg-orange-300", Learning: "bg-violet-300" };
  return <span className="status-pill"><span className={`h-1.5 w-1.5 rounded-full ${dot[value]}`} />{value}</span>;
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <Reveal>
    <div className="section-kicker"><span className="kicker-dot" />{eyebrow}</div>
    <h2 className="section-title">{title}</h2>
    {copy && <p className="section-copy">{copy}</p>}
  </Reveal>;
}

export default function Portfolio() {
  const [open, setOpen] = useState(false);
  const [activeNode, setActiveNode] = useState(3);
  const [activeJourney, setActiveJourney] = useState(0);
  const [activeAI, setActiveAI] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const selected = nodes[activeNode];
  const nav = [["Journey", "#journey"], ["Projects", "#projects"], ["AI Lab", "#ai"], ["Stack", "#stack"], ["Contact", "#contact"]];

  return <main className="min-h-screen overflow-x-hidden bg-[#070A12] text-slate-100">
    <div className="ambient ambient-one" /><div className="ambient ambient-two" /><div className="pointer-events-none fixed inset-0 grid-bg opacity-60" />

    <header className="sticky top-0 z-50 border-b border-white/[.07] bg-[#070A12]/80 backdrop-blur-2xl">
      <nav className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-5 sm:px-8" aria-label="Main navigation">
        <a href="#top" className="flex items-center gap-3" aria-label="Aditya Kumar home">
          <span className="brand-mark"><span>AK</span></span><span className="hidden text-sm font-bold tracking-tight sm:block">Aditya Kumar</span>
        </a>
        <div className="hidden items-center gap-7 lg:flex">{nav.map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}</div>
        <a href="#contact" className="hidden primary-mini sm:inline-flex"><Sparkles size={13} /> Open to opportunities</a>
        <button className="icon-btn lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>{open ? <X size={18} /> : <Menu size={18} />}</button>
      </nav>
      {open && <div className="mobile-nav lg:hidden">{nav.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}<ChevronRight size={15} /></a>)}</div>}
    </header>

    <section id="top" className="relative mx-auto max-w-[1280px] px-5 pb-20 pt-16 sm:px-8 lg:pb-28 lg:pt-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.08fr_.92fr] lg:gap-16">
        <Reveal>
          <div className="eyebrow"><span className="live-dot" />Java Full-Stack Developer <span className="text-slate-600">×</span> AI Engineer</div>
          <h1 className="hero-title">I build <span className="gradient-text">secure software</span> and practical AI systems.</h1>
          <p className="hero-copy">I’m Aditya Kumar — a developer focused on Java/Spring Boot, React, REST APIs, databases, RAG and agentic AI. I care about systems that are useful, controlled and explainable.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row"><a href="#projects" className="btn-primary">Explore systems <ArrowDownRight size={17} /></a><a href="#journey" className="btn-secondary">Engineering journey <ArrowRight size={17} /></a></div>
          <div className="mt-8 flex flex-wrap gap-3"><span className="meta-chip"><CircleDot size={13} /> Kanpur, India</span><span className="meta-chip"><Code2 size={13} /> Java + AI</span><span className="meta-chip"><Zap size={13} /> Building continuously</span></div>
        </Reveal>
        <Reveal className="relative">
          <div className="dashboard-card hero-console">
            <div className="console-top"><div className="flex gap-1.5"><i /><i /><i /></div><span className="mono text-[9px] uppercase tracking-[.16em] text-slate-500">aditya.engineering / overview</span><span className="text-cyan-300"><Sparkles size={15} /></span></div>
            <div className="p-5 sm:p-6">
              <div className="mb-6 flex items-end justify-between"><div><p className="mono text-[9px] uppercase tracking-[.18em] text-slate-500">Current focus</p><p className="mt-2 text-lg font-bold">Sovereign AI Workbench</p></div><span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-2.5 py-1 mono text-[9px] uppercase tracking-[.12em] text-cyan-200">active</span></div>
              <div className="space-y-2">{[["01", "Ingest", "documents"], ["02", "Retrieve", "Qdrant + RAG"], ["03", "Orchestrate", "controlled tools"], ["04", "Validate", "policy + human"], ["05", "Audit", "traceable output"]].map(([n, a, b]) => <div key={n} className="pipeline-row"><span className="mono text-[9px] text-cyan-300">{n}</span><span className="font-semibold">{a}</span><span className="ml-auto text-[11px] text-slate-500">{b}</span></div>)}</div>
              <div className="mt-5 grid grid-cols-3 gap-2"><div className="metric"><Server size={14} /><span>API</span><b>FastAPI</b></div><div className="metric"><Database size={14} /><span>Data</span><b>Postgres</b></div><div className="metric"><ShieldCheck size={14} /><span>Guard</span><b>RBAC</b></div></div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="relative border-y border-white/[.07] bg-white/[.018]"><div className="mx-auto flex max-w-[1280px] gap-2 overflow-x-auto px-5 py-4 sm:px-8">{["Java", "Spring Boot", "Spring Security", "React", "Next.js", "PostgreSQL", "RAG", "Agentic AI", "Docker"].map((x, i) => <span key={x} className={`tech-chip ${i === 6 || i === 7 ? "tech-chip-accent" : ""}`}>{x}</span>)}</div></section>

    <section id="journey" className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="01 / ENGINEERING JOURNEY" title="From Java foundations to governed AI systems." copy="A practical progression shaped by projects, backend engineering, security and AI experimentation." />
      <div className="mt-12 grid gap-6 lg:grid-cols-[.72fr_1.28fr]">
        <div className="timeline-list">{journey.map(([year, title], i) => <button key={year} onClick={() => setActiveJourney(i)} className={`timeline-item ${activeJourney === i ? "active" : ""}`}><span className="timeline-year">{year}</span><span><b>{title}</b><small>{i === 3 ? "Current direction" : "Engineering stage"}</small></span><ChevronRight size={16} /></button>)}</div>
        <Reveal className="dashboard-card journey-card"><div className="flex items-center justify-between"><span className="mono text-[10px] uppercase tracking-[.16em] text-cyan-300">{journey[activeJourney][0]}</span><Layers3 size={18} className="text-violet-300" /></div><h3 className="mt-6 text-3xl font-extrabold tracking-[-.04em]">{journey[activeJourney][1]}</h3><p className="mt-5 max-w-2xl text-base leading-8 text-slate-400">{journey[activeJourney][2]}</p><div className="mt-9 grid gap-3 sm:grid-cols-3"><div className="mini-stat"><span>Mode</span><b>Hands-on</b></div><div className="mini-stat"><span>Direction</span><b>{activeJourney === 3 ? "AI systems" : "Full-stack"}</b></div><div className="mini-stat"><span>Mindset</span><b>Build + learn</b></div></div></Reveal>
      </div>
    </section>

    <section id="projects" className="relative border-y border-white/[.07] bg-white/[.018] px-5 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-[1280px]"><SectionHeading eyebrow="02 / SELECTED SYSTEMS" title="Projects presented like engineering case studies." copy="The flagship work gets the deepest treatment; smaller projects remain concise and factual." />
        <Featured project={projects[0]} activeNode={activeNode} setActiveNode={setActiveNode} selected={selected} />
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{projects.slice(1).map(project => <ProjectCard key={project.number} project={project} onSelect={setActiveProject} />)}</div>
      </div>
    </section>

    <section id="ai" className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow="03 / AI ENGINEERING LAB" title="AI is a system, not just a model call." copy="The portfolio explains how model capability connects to retrieval, tools, workflows, validation and governance." />
      <div className="mt-12 grid gap-5 lg:grid-cols-[.72fr_1.28fr]"><div className="lab-list">{aiLayers.map(([title], i) => <button key={title} onClick={() => setActiveAI(i)} className={activeAI === i ? "active" : ""}><span>{String(i + 1).padStart(2, "0")}</span><b>{title}</b><ChevronRight size={15} /></button>)}</div><Reveal className="dashboard-card lab-detail"><div className="lab-icon"><Bot size={23} /></div><span className="mono mt-6 text-[10px] uppercase tracking-[.16em] text-cyan-300">Layer {String(activeAI + 1).padStart(2, "0")}</span><h3 className="mt-4 text-4xl font-extrabold tracking-[-.05em]">{aiLayers[activeAI][0]}</h3><p className="mt-5 max-w-xl text-lg leading-8 text-slate-400">{aiLayers[activeAI][1]}</p><div className="mt-9 flex flex-wrap gap-2">{["Controlled", "Evidence-aware", "Composable", "Observable"].map(x => <span key={x} className="tag">{x}</span>)}</div></Reveal></div>
    </section>

    <section id="stack" className="relative border-y border-white/[.07] bg-white/[.018] px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto max-w-[1280px]"><SectionHeading eyebrow="04 / ENGINEERING STACK" title="Tools grouped by responsibility." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">{[[Server,"Backend","Java · Spring Boot · FastAPI · REST"],[Code2,"Frontend","React · Next.js · TypeScript · Tailwind"],[Database,"Data + Infra","PostgreSQL · MySQL · Redis · Qdrant · Docker"],[LockKeyhole,"Security","JWT · Argon2 · RBAC · validation · audit"]].map(([Icon,title,text],i)=>{const I=Icon as typeof Server;return <Reveal key={title as string} className="stack-card"><div className="stack-number">0{i+1}</div><div className="stack-icon"><I size={18}/></div><h3>{title as string}</h3><p>{text as string}</p></Reveal>})}</div></div></section>

    <section className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-32"><SectionHeading eyebrow="05 / FLAGSHIP CASE STUDY" title="A clear lens for secure agentic AI." /><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-5">{[["01","Problem","Confidential documents need useful AI-assisted retrieval without automatic exposure."],["02","Constraints","On-premise capability, access control, tenant-aware retrieval and human review."],["03","Architecture","Ingestion, retrieval, orchestration and governance form distinct layers."],["04","Security","RBAC, JWT, Argon2, allowlisted tools, validation, SHA-256 and audit logging."],["05","Next","Improve retrieval quality, observability and human decision paths as implementation evolves."]].map(([n,t,x])=><Reveal key={n} className="case-card"><span>{n}</span><h3>{t}</h3><p>{x}</p></Reveal>)}</div></section>

    <section className="relative border-y border-white/[.07] bg-white/[.018] px-5 py-24 sm:px-8 lg:py-32"><div className="mx-auto grid max-w-[1280px] gap-6 lg:grid-cols-[.9fr_1.1fr]"><Reveal><SectionHeading eyebrow="06 / CREDENTIALS + CODE" title="Proof of learning, without invented metrics." copy="Credentials and repositories are presented directly so visitors can verify the work." /><a href="https://github.com/Aditya-kumar2005" target="_blank" rel="noreferrer" className="btn-secondary mt-8 inline-flex">Open GitHub <Github size={16}/></a></Reveal><Reveal className="dashboard-card p-6 sm:p-8"><div className="flex items-center justify-between"><span className="mono text-[10px] uppercase tracking-[.16em] text-cyan-300">Credentials</span><CheckCircle2 size={17} className="text-cyan-300" /></div><div className="mt-6 space-y-1">{credentials.map(([name,issuer,date,id])=><div key={name} className="credential"><div><h3>{name}</h3><p>{issuer} · {date || "Credential"}</p></div><span className="credential-id">{id}</span></div>)}</div></Reveal></div></section>

    <section id="contact" className="relative mx-auto max-w-[1280px] px-5 py-24 sm:px-8 lg:py-32"><Reveal className="contact-card"><div className="relative z-10 max-w-3xl"><div className="section-kicker"><span className="kicker-dot" />07 / CONTACT</div><h2 className="mt-5 text-4xl font-extrabold tracking-[-.05em] sm:text-6xl">Let’s build something useful.</h2><p className="mt-5 max-w-2xl text-lg leading-8 text-slate-400">Interested in Java backend, full-stack or practical AI engineering opportunities? I’m open to conversations around projects, internships and software engineering.</p></div><div className="relative z-10 mt-8 flex flex-col gap-3 sm:flex-row"><a className="btn-primary" href="mailto:nanuadityakumar@gmail.com"><Mail size={17}/> Contact me</a><a className="btn-secondary" href="https://www.linkedin.com/in/aditya-kumar-b4874235b/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn</a><a className="btn-secondary" href="https://github.com/Aditya-kumar2005" target="_blank" rel="noreferrer"><Github size={17}/> GitHub</a></div></Reveal></section>

    <footer className="border-t border-white/[.07]"><div className="mx-auto flex max-w-[1280px] flex-col gap-3 px-5 py-8 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-8"><span>© {new Date().getFullYear()} Aditya Kumar</span><span className="mono text-[9px] uppercase tracking-[.16em]">Java full-stack × AI engineering</span></div></footer>

    {activeProject && <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />}
  </main>;
}

function Featured({ project, activeNode, setActiveNode, selected }: { project: Project; activeNode: number; setActiveNode: (n: number) => void; selected: Node }) {
  const groups = ["INGESTION", "RETRIEVAL", "ORCHESTRATION", "GOVERNANCE"];
  return <Reveal className="mt-12 dashboard-card overflow-hidden"><div className="grid gap-8 p-6 lg:grid-cols-[.9fr_1.1fr] lg:p-9"><div><div className="flex flex-wrap items-center gap-3"><span className="mono text-[10px] uppercase tracking-[.15em] text-cyan-300">{project.number} / {project.category}</span><Status value={project.status}/></div><h3 className="mt-5 text-3xl font-extrabold tracking-[-.045em] sm:text-4xl">{project.title}</h3><p className="mt-4 text-base leading-7 text-slate-400">{project.description}</p><p className="mt-4 mono text-[9px] uppercase tracking-[.14em] text-slate-500">{project.date}</p><div className="mt-7 grid gap-3 sm:grid-cols-2">{[[ShieldCheck,"Private by design","Local processing and controlled boundaries."],[Network,"Evidence-grounded","Retrieval and citations as product concerns."],[LockKeyhole,"Controlled actions","RBAC, approvals and allowlisted tools."],[Terminal,"Auditable workflow","Validation, reporting and structured logs."]].map(([Icon,title,text])=>{const I=Icon as typeof ShieldCheck;return <div key={title as string} className="feature-tile"><I size={17}/><div><b>{title as string}</b><p>{text as string}</p></div></div>})}</div></div><div className="arch-panel"><div className="flex items-center justify-between"><span className="mono text-[9px] uppercase tracking-[.15em] text-slate-500">Interactive architecture</span><span className="mono text-[9px] uppercase tracking-[.15em] text-cyan-300">select node</span></div><div className="mt-5 space-y-4">{groups.map(group=><div key={group}><p className="mb-2 mono text-[8px] tracking-[.16em] text-slate-600">{group}</p><div className="flex flex-wrap gap-1.5">{nodes.map((node,i)=>node.group===group&&<button key={node.name} onClick={()=>setActiveNode(i)} className={`node-btn ${activeNode===i?"active":""}`}>{node.name}</button>)}</div></div>)}</div><motion.div key={selected.name} initial={{opacity:0,y:7}} animate={{opacity:1,y:0}} className="node-detail"><div className="flex items-start justify-between gap-3"><div><b>{selected.name}</b><p className="mono mt-1 text-[8px] uppercase tracking-[.12em] text-slate-500">{selected.tech}</p></div><Orbit size={17} className="text-violet-300"/></div><p className="mt-3 text-sm leading-6 text-slate-400">{selected.purpose}</p><p className="mt-3 border-l border-cyan-300/60 pl-3 text-xs leading-5 text-slate-500">{selected.security}</p></motion.div></div></div></Reveal>;
}

function ProjectCard({ project, onSelect }: { project: Project; onSelect: (project: Project) => void }) {
  return <motion.article whileHover={{y:-5}} transition={{duration:.2}} className="project-card"><div className="flex items-start justify-between gap-3"><span className="mono text-[9px] uppercase tracking-[.14em] text-cyan-300">{project.number} / {project.category}</span><Status value={project.status}/></div><h3>{project.title}</h3><p>{project.description}</p><div className="mt-5 flex flex-wrap gap-1.5">{project.technologies.slice(0,4).map(t=><span key={t} className="tag">{t}</span>)}</div><button onClick={()=>onSelect(project)} className="mt-auto flex items-center gap-2 pt-7 text-xs font-bold text-slate-200 transition hover:text-cyan-300">View engineering notes <ArrowRight size={14}/></button></motion.article>;
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return <div className="modal-backdrop" role="dialog" aria-modal="true" aria-label={project.title} onMouseDown={e=>{if(e.target===e.currentTarget)onClose()}}><motion.div initial={{opacity:0,y:18,scale:.98}} animate={{opacity:1,y:0,scale:1}} className="modal-card"><button onClick={onClose} className="icon-btn absolute right-4 top-4" aria-label="Close"><X size={17}/></button><span className="mono text-[9px] uppercase tracking-[.16em] text-cyan-300">{project.number} / {project.category}</span><div className="mt-3 flex flex-wrap items-center gap-3"><h2 className="pr-10 text-2xl font-extrabold tracking-[-.04em]">{project.title}</h2><Status value={project.status}/></div><p className="mt-3 text-sm leading-6 text-slate-400">{project.description}</p><div className="mt-7 grid gap-5 sm:grid-cols-2"><div><h3 className="modal-label">Problem</h3><p>{project.problem}</p></div><div><h3 className="modal-label">Solution</h3><p>{project.solution}</p></div></div><div className="mt-6"><h3 className="modal-label">Engineering decisions</h3><ul className="mt-3 space-y-2">{project.decisions.map(d=><li key={d}><CheckCircle2 size={14}/>{d}</li>)}</ul></div><div className="mt-6 flex flex-wrap gap-1.5">{project.technologies.map(t=><span key={t} className="tag">{t}</span>)}</div></motion.div></div>;
}
