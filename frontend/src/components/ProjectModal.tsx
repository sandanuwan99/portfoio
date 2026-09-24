'use client';

import React, { useEffect } from 'react';
import { Project } from '@/types/portfolio';
import { X, ExternalLink, Database, Layers, CheckCircle2, ShieldAlert, Cpu } from 'lucide-react';
import { TechBadge } from './TechBadge';
import { GithubIcon } from './BrandIcons';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] bg-[#0c101c] border border-slate-700/80 rounded-2xl shadow-2xl flex flex-col overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#090d17]/95 backdrop-blur z-10">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 uppercase">
                {project.category}
              </span>
              <span className="text-xs text-slate-500 font-mono">Production Enterprise System</span>
            </div>
            <h2 id="modal-project-title" className="text-lg md:text-xl font-bold text-slate-100">
              {project.title}
            </h2>
          </div>

          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-lg transition-colors"
                title="View GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-lg transition-colors"
                title="Open Live"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
            <button
              onClick={onClose}
              type="button"
              aria-label="Close dialog"
              className="p-2 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 rounded-lg transition-colors ml-2"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Modal Body */}
        <div className="overflow-y-auto p-6 md:p-8 space-y-8 text-slate-300 text-sm leading-relaxed">
          {/* Executive Summary */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2">System Overview</h3>
            <p className="text-slate-200 text-base leading-relaxed bg-slate-900/60 border border-slate-800/80 p-4 rounded-xl">
              {project.summary}
            </p>
          </div>

          {/* Technologies */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2.5">
              Production Technology Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechBadge key={tech} name={tech} variant="accent" size="md" />
              ))}
            </div>
          </div>

          {/* Grid: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-rose-900/30 bg-rose-950/10 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-rose-400 font-semibold">
                <ShieldAlert className="w-4 h-4" />
                <h4>The Engineering Problem</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{project.problem}</p>
            </div>

            <div className="border border-emerald-900/30 bg-emerald-950/10 p-5 rounded-xl">
              <div className="flex items-center gap-2 mb-2 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <h4>Architectural Solution</h4>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Architecture Topology */}
          <div className="border border-slate-800 bg-[#070a12] p-5 rounded-xl">
            <div className="flex items-center gap-2 mb-3 text-sky-400 font-semibold">
              <Layers className="w-4 h-4" />
              <h4>Layered System Architecture</h4>
            </div>
            <p className="font-mono text-xs md:text-sm text-sky-200/90 bg-slate-900/90 p-4 rounded-lg border border-slate-800/80 leading-loose">
              {project.architecture}
            </p>
          </div>

          {/* My Engineering Contributions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
              My Engineering Contributions
            </h3>
            <div className="bg-slate-900/40 border border-slate-800/80 p-5 rounded-xl">
              <p className="text-slate-200">{project.myContribution}</p>
            </div>
          </div>

          {/* Engineering Challenges & Solutions */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-3">
              Engineering Challenges Encountered &amp; Resolved
            </h3>
            <ul className="space-y-2.5">
              {project.engineeringChallenges.map((challenge, idx) => (
                <li key={idx} className="flex items-start gap-3 bg-slate-900/30 border border-slate-800/60 p-3.5 rounded-lg">
                  <span className="flex-shrink-0 font-mono text-xs text-sky-400 mt-0.5 px-1.5 py-0.5 rounded bg-sky-950/60 border border-sky-800/40">
                    CH-{idx + 1}
                  </span>
                  <span className="text-slate-300">{challenge}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Database Design & Stored Procedures */}
          <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-indigo-400 font-semibold">
              <Database className="w-4 h-4" />
              <h4>Database Design (Microsoft SQL Server)</h4>
            </div>
            <p className="text-slate-300">{project.databaseDesign.description}</p>
            {project.databaseDesign.schemaHighlights.length > 0 && (
              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1.5">Core Schema Tables &amp; Keys:</span>
                <div className="space-y-1">
                  {project.databaseDesign.schemaHighlights.map((tbl, i) => (
                    <div key={i} className="font-mono text-xs bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800/80 text-indigo-300">
                      {tbl}
                    </div>
                  ))}
                </div>
              </div>
            )}
            {project.databaseDesign.storedProcedures && project.databaseDesign.storedProcedures.length > 0 && (
              <div className="mt-3">
                <span className="text-xs font-mono text-slate-400 block mb-1.5">Optimized Stored Procedures:</span>
                <div className="space-y-1">
                  {project.databaseDesign.storedProcedures.map((sp, i) => (
                    <div key={i} className="font-mono text-xs bg-slate-950/80 px-3 py-1.5 rounded border border-slate-800/80 text-amber-300/90">
                      ⚡ {sp}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* API Design & Endpoints */}
          <div className="border border-slate-800 bg-slate-900/30 p-5 rounded-xl space-y-3">
            <div className="flex items-center gap-2 text-sky-400 font-semibold">
              <Cpu className="w-4 h-4" />
              <h4>REST API Contract Design</h4>
            </div>
            <p className="text-slate-300">{project.apiDesign.pattern}</p>
            <div className="space-y-1.5">
              {project.apiDesign.endpoints.map((ep, i) => (
                <div key={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-xs bg-slate-950/80 px-3 py-2 rounded border border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span
                      className={`px-1.5 py-0.5 rounded text-[10px] font-bold ${
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

          {/* Testing & Deployment */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-slate-800 bg-slate-900/30 p-4 rounded-xl">
              <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">Automated Testing</h5>
              <p className="text-slate-300 text-xs leading-relaxed">{project.testingStrategy}</p>
            </div>
            <div className="border border-slate-800 bg-slate-900/30 p-4 rounded-xl">
              <h5 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2">CI/CD &amp; Deployment</h5>
              <p className="text-slate-300 text-xs leading-relaxed">{project.deploymentStrategy}</p>
            </div>
          </div>

          {/* Key Learnings */}
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-400 font-mono mb-2.5">Key Learnings</h3>
            <div className="grid grid-cols-1 gap-2">
              {project.keyLearnings.map((learning, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-3 rounded-lg border border-slate-800/60">
                  <span className="text-emerald-400 font-bold">✓</span>
                  <span>{learning}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3 border-t border-slate-800 bg-[#090d17] flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="px-4 py-1.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors font-mono"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}
