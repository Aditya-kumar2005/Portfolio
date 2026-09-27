import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight, ArrowUpRight, Github, Linkedin, Mail, ShieldCheck,
  FileCheck, Layers, GitPullRequestArrow, ScanSearch, Award, MapPin
} from "lucide-react";
import PageShell from "@/components/PageShell";
import { projects } from "@/data/projects";
import { journey } from "@/data/journey";
import { certifications } from "@/data/certifications";

const flagshipFeatures = [
  { icon: FileCheck, title: "Document Sanitation", text: "SHA-256 integrity checks and controlled extraction before any content enters the pipeline.", tag: "SHA-256 CHECKS" },
  { icon: ScanSearch, title: "Hybrid Dense Vector", text: "Local embeddings via FastEmbed/ONNX indexed into Qdrant for evidence-grounded retrieval.", tag: "QDRANT + FASTEMBED" },
  { icon: ShieldCheck, title: "Grounded Tool / Role", text: "Allowlisted tools and role-based access constrain what any workflow step can touch.", tag: "RBAC + JWT ROLES" },
  { icon: GitPullRequestArrow, title: "Human-in-the-Loop", text: "A validation layer and human approval gate stand before any consequential output.", tag: "AUDIT LOG + APPROVAL" },
];

const stackLanes = [
  { title: "Backend Systems", dot: "#ff3b5c", items: ["Java", "Spring Boot", "Spring Security", "REST APIs"] },
  { title: "Frontend Systems", dot: "#7cc7ff", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { title: "Data & Infra", dot: "#f6c76a", items: ["PostgreSQL", "MySQL", "Redis", "Qdrant", "Docker"] },
  { title: "Practical Security", dot: "#c8b6ff", items: ["JWT", "Argon2", "RBAC", "Audit Logging"] },
];

export default function Home() {
  return (
    <PageShell>
      <main>
        {/* HERO */}
        <section className="grid-bg border-b border-[#182129]">
          <div className="container-main grid items-center gap-14 py-16 lg:grid-cols-[1.05fr_.95fr] lg:py-24">
            <div className="max-w-[680px]">
              <span className="pill-badge"><span className="pill-dot" />Available to be hired</span>
              <h1 className="display-title mt-7">
                Hi, I&apos;m <span className="text-[#ff3b5c]">Aditya Kumar</span> — a Java Full-Stack Developer × AI Systems Engineer.
              </h1>
              <p className="body-copy mt-6 max-w-[600px] text-[16px]">
                BCA candidate & engineer based in Kanpur, India. Specialising in secure Java Spring Boot backends, React/Next.js interfaces, and deterministic RAG pipelines for confidential document workflows.
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/#architecture" className="btn-primary">Explore Flagship Architecture <ArrowRight size={15} /></Link>
                <Link href="/#projects" className="btn-secondary">View Verified Portfolio</Link>
              </div>
            </div>

            <div className="device-mock">
              <div className="flex items-center justify-between">
                <div className="device-avatar">AK</div>
                <span className="status">Live</span>
              </div>
              <p className="mt-6 text-[15px] font-semibold">Aditya Kumar</p>
              <p className="mt-1 text-[12.5px] text-[#89969c]">Systems architect &amp; AI specialist</p>
              <div className="mt-5 flex flex-wrap gap-2">
                <span className="device-tag">Java Enterprise</span>
                <span className="device-tag">Full-Stack Core</span>
              </div>
              <div className="mt-7 flex items-center justify-between border-t border-[#182129] pt-5 text-[10.5px] text-[#65737a]">
                <span>Ready For Hire</span>
                <span>Zero-Overhead Specialist</span>
              </div>
            </div>
          </div>
        </section>

        {/* WHO I AM + TRAJECTORY */}
        <section id="journey" className="section-pad border-b border-[#182129]">
          <div className="container-main grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
            <div className="who-panel">
              <p className="eyebrow">Who I Am</p>
              <p className="mt-6 text-[15px] leading-8 text-[#c8d0d3]">
                I&apos;m a Java Full-Stack Developer and AI Engineer building web applications, REST APIs,
                database-driven systems, secure backend services and practical AI systems — grounded in
                real implementation, not unsupported claims.
              </p>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-[13px] font-semibold text-[#ff3b5c]">
                Get in touch <ArrowUpRight size={14} />
              </Link>
            </div>

            <div className="traj-panel">
              <p className="eyebrow">Engineering Trajectory</p>
              <div className="mt-6">
                {journey.map((j) => (
                  <div key={j.year} className="traj-row">
                    <span className="traj-year">{j.year}</span>
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-[14px] font-semibold">{j.title}</h3>
                        <span className="tag">{j.tag}</span>
                      </div>
                      <p className="mt-1.5 text-[13px] leading-6 text-[#89969c]">{j.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FLAGSHIP ARCHITECTURE */}
        <section id="architecture" className="section-pad border-b border-[#182129] bg-[#0a0e13]">
          <div className="container-main">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Flagship Project Deep Dive · AI Engineering</p>
                <h2 className="section-title mt-5 max-w-2xl">Sovereign On-Premise Agentic AI Workbench</h2>
                <p className="body-copy mt-4 max-w-2xl">
                  A sovereign, on-premise agentic AI workbench designed for confidential government and industrial documents.
                </p>
              </div>
              <div className="flex shrink-0 gap-2">
                <span className="status">Ongoing</span>
                <span className="tag">V1 In Progress</span>
              </div>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {flagshipFeatures.map((f) => (
                <div key={f.title} className="bento-card">
                  <f.icon size={18} className="text-[#ff3b5c]" />
                  <h3 className="mt-5 text-[14px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[12.5px] leading-6 text-[#89969c]">{f.text}</p>
                  <p className="bento-tag">{f.tag}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 grid gap-6 lg:grid-cols-[.85fr_1.15fr]">
              <div className="who-panel">
                <p className="mono text-[10px] uppercase tracking-[.14em] text-[#65737a]">Why sovereign agent architecture?</p>
                <p className="mt-5 text-[14px] leading-7 text-[#a5b1b5]">
                  Confidential documents need useful AI-assisted retrieval without exposing content to external
                  model providers. Local embeddings, tenant-filtered retrieval, allowlisted tools, a validation
                  layer and a human approval gate keep every consequential step reviewable and auditable.
                </p>
                <Link href="/ai-engineering" className="mt-6 inline-flex items-center gap-2 text-[13px] font-semibold text-[#ff3b5c]">
                  See the full engineering breakdown <ArrowRight size={14} />
                </Link>
              </div>

              <div className="term">
                <div className="term-bar">
                  <span className="term-dot" /><span className="term-dot" /><span className="term-dot" />
                  <span className="term-path">app/api/query/route.ts</span>
                </div>
                <pre className="term-body"><code>{`export async function POST(req: Request) {
  const { docId, question } = await req.json();

  // 1. tenant-filtered vector retrieval
  const evidence = await retrieve(docId, question);

  // 2. allowlisted tool + workflow gateway
  const draft = await workflow.run("answer", evidence);

  // 3. validation before consequential output
  const checked = await validate(draft, evidence);

  // 4. human approval gate + audit log
  await audit.log({ docId, checked, status: "pending_approval" });

  return Response.json({ status: "pending_approval", citations: evidence.length });
}`}</code></pre>
              </div>
            </div>
          </div>
        </section>

        {/* VERIFIED PROJECTS */}
        <section id="projects" className="section-pad border-b border-[#182129]">
          <div className="container-main">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="eyebrow">Selected Work · Real, Ongoing Projects</p>
                <h2 className="section-title mt-5 max-w-2xl">Verified Projects &amp; Repositories</h2>
              </div>
              <div className="flex gap-2">
                <span className="tag">{projects.length} Projects</span>
                <Link href="https://github.com/Aditya-kumar2005" target="_blank" rel="noreferrer" className="tag hover:text-white">GitHub Verified</Link>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="card group flex min-h-[220px] flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="project-index">{p.number}</span>
                    <span className={`status ${p.status.toLowerCase()}`}>{p.status}</span>
                  </div>
                  <p className="mono mt-6 text-[9px] uppercase tracking-[.12em] text-[#65737a]">{p.category}</p>
                  <h3 className="mt-2 text-[16px] font-semibold leading-snug tracking-[-.02em]">{p.title}</h3>
                  <p className="mt-3 text-[12.5px] leading-6 text-[#89969c]">{p.shortDescription}</p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {p.technologies.slice(0, 3).map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* TECH STACK LANES */}
        <section id="stack" className="section-pad border-b border-[#182129] bg-[#0a0e13]">
          <div className="container-main">
            <p className="eyebrow">Full-Stack Technology Lanes</p>
            <h2 className="section-title mt-5 max-w-2xl">Organized across the entire architecture, not skill bars.</h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stackLanes.map((lane) => (
                <div key={lane.title} className="card p-6">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full" style={{ background: lane.dot }} />
                    <h3 className="text-[13px] font-semibold uppercase tracking-[.06em]">{lane.title}</h3>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {lane.items.map((i) => <span key={i} className="tag">{i}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CREDENTIALS */}
        <section id="credentials" className="section-pad border-b border-[#182129]">
          <div className="container-main">
            <p className="eyebrow">Credentials &amp; Domain Verification</p>
            <h2 className="section-title mt-5 max-w-2xl">Formal coursework backing the engineering practice.</h2>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {certifications.map((c) => (
                <div key={c.credentialId} className="cert-card">
                  <div className="flex items-center justify-between">
                    <Award size={16} className="text-[#ff3b5c]" />
                    <span className="status">Active</span>
                  </div>
                  <h3 className="mt-5 text-[14px] font-semibold leading-snug">{c.title}</h3>
                  <p className="mt-2 text-[12px] text-[#65737a]">{c.issuer} · {c.date}</p>
                  <p className="mono mt-3 text-[10px] text-[#455158]">ID: {c.credentialId}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section-pad">
          <div className="container-main">
            <p className="eyebrow">Make Something · Say Hello</p>
            <h2 className="section-title mt-5 max-w-2xl">Let&apos;s build deterministic systems together.</h2>
            <p className="body-copy mt-4 max-w-2xl">
              Whether it&apos;s an internship, a full-stack build or a practical AI system, I&apos;m actively looking for
              Java backend, full-stack and AI engineering opportunities.
            </p>

            <div className="mt-12 grid gap-6 lg:grid-cols-[.75fr_1.25fr]">
              <div className="who-panel flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 text-[#ff3b5c]" />
                  <div>
                    <p className="text-[13px] font-semibold">Location</p>
                    <p className="text-[12.5px] text-[#89969c]">Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={16} className="mt-0.5 text-[#ff3b5c]" />
                  <div>
                    <p className="text-[13px] font-semibold">Email</p>
                    <a href="mailto:nanuadityakumar@gmail.com" className="text-[12.5px] text-[#89969c] hover:text-white">nanuadityakumar@gmail.com</a>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Link href="https://github.com/Aditya-kumar2005" target="_blank" rel="noreferrer" className="btn-secondary"><Github size={14} /> GitHub</Link>
                  <Link href="https://www.linkedin.com/in/aditya-kumar-b4874235b/" target="_blank" rel="noreferrer" className="btn-secondary"><Linkedin size={14} /> LinkedIn</Link>
                </div>
              </div>

              <form className="who-panel grid gap-5" action="mailto:nanuadityakumar@gmail.com" method="post" encType="text/plain">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div className="form-field">
                    <label htmlFor="name">Your Name</label>
                    <input id="name" name="name" type="text" required />
                  </div>
                  <div className="form-field">
                    <label htmlFor="email">Your Email</label>
                    <input id="email" name="email" type="email" required />
                  </div>
                </div>
                <div className="form-field">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required />
                </div>
                <button type="submit" className="btn-primary justify-center">Submit Message <ArrowUpRight size={15} /></button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
