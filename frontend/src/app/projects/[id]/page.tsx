import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, DEVELOPER_PROFILE } from '@/lib/data';
import { TechBadge } from '@/components/TechBadge';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import Link from 'next/link';
import {
  ArrowLeft,
  ExternalLink,
  ShieldAlert,
  CheckCircle2,
  Layers,
  Database,
  Cpu,
  Terminal,
  Activity,
  Award,
} from 'lucide-react';
import { GithubIcon } from '@/components/BrandIcons';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({
    id: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.slug === id || p.id === id);

  if (!project) {
    return {
      title: 'Project Not Found | Janitha Sandanuwan',
    };
  }

  return {
    title: `${project.title} | Technical Case Study | Janitha Sandanuwan`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.slug === id || p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors p-1 -ml-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Return to Featured Systems</span>
          </Link>
        </div>

        {/* Project Header */}
        <header className="space-y-4 pb-8 border-b border-slate-800">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-xs font-mono px-3 py-1 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 uppercase">
              {project.category}
            </span>
            <span className="text-xs font-mono text-slate-500">
              Commercial Enterprise Case Study
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-100 tracking-tight leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-3xl">
            {project.subtitle}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-slate-900 border border-slate-700 text-slate-200 hover:border-slate-500 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View Repository</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium bg-sky-950/60 border border-sky-800/60 text-sky-300 hover:border-sky-600 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live System Demo</span>
              </a>
            )}
          </div>
        </header>

        {/* Executive Overview */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Project Overview
          </h2>
          <p className="text-sm sm:text-base text-slate-200 leading-relaxed bg-[#0d1222] p-5 sm:p-6 rounded-2xl border border-slate-800">
            {project.summary}
          </p>
        </section>

        {/* Technology Stack Grid */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Technology Stack &amp; Infrastructure
          </h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} variant="accent" size="md" />
            ))}
          </div>
        </section>

        {/* Problem vs Solution Split */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-rose-900/30 bg-rose-950/10 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
              <ShieldAlert className="w-4 h-4" />
              <h3>The Engineering Problem</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="border border-emerald-900/30 bg-emerald-950/10 p-6 rounded-2xl space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <CheckCircle2 className="w-4 h-4" />
              <h3>The Architectural Solution</h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </section>

        {/* Business Requirements */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Business Requirements &amp; Constraints
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {project.businessRequirements.map((req, i) => (
              <div
                key={i}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs text-slate-300 leading-relaxed"
              >
                <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                <span>{req}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Visual Architecture Flow Diagram */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sky-400 font-semibold">
            <Layers className="w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Layered System Architecture
            </h2>
          </div>

          <div className="glass-surface p-6 rounded-2xl border border-slate-800 bg-[#090d18] space-y-4">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <span className="text-sky-400 font-bold">1. PRESENTATION</span>
              <span className="text-slate-300">Next.js App Router / React 19 Client Components</span>
            </div>
            <div className="text-center font-mono text-slate-600">↓ HTTP/2 JSON REST Requests</div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <span className="text-blue-400 font-bold">2. API CONTROLLER</span>
              <span className="text-slate-300">Spring Boot @RestController + Jakarta Validation (@Valid DTOs)</span>
            </div>
            <div className="text-center font-mono text-slate-600">↓ Validated Commands / Queries</div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <span className="text-emerald-400 font-bold">3. SERVICE LAYER</span>
              <span className="text-slate-300">Declarative Transactions (@Transactional) + Domain Rules + Mappers</span>
            </div>
            <div className="text-center font-mono text-slate-600">↓ Persistence Operations</div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <span className="text-amber-400 font-bold">4. REPOSITORY</span>
              <span className="text-slate-300">Spring Data JPA / Hibernate ORM &amp; Stored Procedure Proxies</span>
            </div>
            <div className="text-center font-mono text-slate-600">↓ TDS Protocol / Execution Plans</div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 p-4 rounded-xl bg-slate-900 border border-slate-800 font-mono text-xs">
              <span className="text-rose-400 font-bold">5. DATABASE</span>
              <span className="text-slate-300">Microsoft SQL Server 2022 (Clustered &amp; Non-Clustered Indexes)</span>
            </div>
          </div>
        </section>

        {/* Database Design */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold">
            <Database className="w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              Database Design (Microsoft SQL Server)
            </h2>
          </div>

          <div className="glass-surface p-6 rounded-2xl border border-slate-800 bg-[#090d18] space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.databaseDesign.description}
            </p>

            <div>
              <span className="text-xs font-mono text-slate-400 block mb-2">Relational Table Schemas:</span>
              <div className="space-y-1.5">
                {project.databaseDesign.schemaHighlights.map((tbl, i) => (
                  <div key={i} className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 text-indigo-300">
                    {tbl}
                  </div>
                ))}
              </div>
            </div>

            {project.databaseDesign.storedProcedures && (
              <div className="pt-2">
                <span className="text-xs font-mono text-slate-400 block mb-2">High-Performance Stored Procedures:</span>
                <div className="space-y-1.5">
                  {project.databaseDesign.storedProcedures.map((sp, i) => (
                    <div key={i} className="font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800 text-amber-300">
                      ⚡ {sp}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* API Design & Contracts */}
        <section className="space-y-4">
          <div className="flex items-center gap-2 text-sky-400 font-semibold">
            <Cpu className="w-4 h-4" />
            <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
              REST API Contract Design
            </h2>
          </div>

          <div className="glass-surface p-6 rounded-2xl border border-slate-800 bg-[#090d18] space-y-4">
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.apiDesign.pattern}
            </p>

            <div className="space-y-2">
              {project.apiDesign.endpoints.map((ep, i) => (
                <div
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs bg-slate-950 p-3 rounded-lg border border-slate-800"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                        ep.method === 'GET'
                          ? 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                          : ep.method === 'POST'
                          ? 'bg-sky-950 text-sky-400 border border-sky-800'
                          : ep.method === 'PATCH'
                          ? 'bg-amber-950 text-amber-400 border border-amber-800'
                          : 'bg-rose-950 text-rose-400 border border-rose-800'
                      }`}
                    >
                      {ep.method}
                    </span>
                    <span className="text-slate-200">{ep.path}</span>
                  </div>
                  <span className="text-slate-400 font-sans text-xs">{ep.description}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* My Engineering Responsibilities */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            My Engineering Responsibilities &amp; Delivery
          </h2>
          <div className="glass-surface p-6 rounded-2xl border border-slate-800 bg-[#090d18] text-xs sm:text-sm text-slate-300 leading-relaxed">
            {project.myContribution}
          </div>
        </section>

        {/* Challenges & Solutions */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Engineering Challenges Encountered &amp; How I Solved Them
          </h2>
          <div className="space-y-3">
            {project.engineeringChallenges.map((c, i) => (
              <div key={i} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 flex items-start gap-3">
                <span className="font-mono text-xs text-sky-400 px-2 py-0.5 rounded bg-sky-950 border border-sky-800 flex-shrink-0 mt-0.5">
                  CH-0{i + 1}
                </span>
                <span className="text-xs sm:text-sm text-slate-300">{c}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Testing & Deployment */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border border-slate-800 bg-slate-900/30 p-6 rounded-2xl space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              Automated Testing Strategy
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.testingStrategy}
            </p>
          </div>

          <div className="border border-slate-800 bg-slate-900/30 p-6 rounded-2xl space-y-2">
            <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400">
              CI/CD Pipeline &amp; Deployment
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {project.deploymentStrategy}
            </p>
          </div>
        </section>

        {/* Key Learnings */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Key Engineering Learnings
          </h2>
          <div className="space-y-2">
            {project.keyLearnings.map((learning, idx) => (
              <div
                key={idx}
                className="flex items-start gap-2.5 p-3.5 rounded-xl bg-slate-900/40 border border-slate-800 text-xs sm:text-sm text-slate-300"
              >
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{learning}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom Navigation */}
        <div className="pt-8 border-t border-slate-800 flex items-center justify-between">
          <Link
            href="/#projects"
            className="text-xs font-mono text-sky-400 hover:text-sky-300 transition-colors"
          >
            ← Back to All Projects
          </Link>
          <a
            href={DEVELOPER_PROFILE.cvUrl}
            download="Janitha_Sandanuwan_CV.pdf"
            className="text-xs font-mono text-slate-400 hover:text-white transition-colors"
          >
            Download Janitha&apos;s CV (PDF) ↓
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
}
