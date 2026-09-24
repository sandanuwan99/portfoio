'use client';

import React from 'react';
import { Project } from '@/types/portfolio';
import { TechBadge } from './TechBadge';
import { ArrowUpRight, Database, Layers, CheckCircle2, ShieldAlert } from 'lucide-react';
import Link from 'next/link';

interface ProjectCardProps {
  project: Project;
  onOpenDetails: (project: Project) => void;
}

export function ProjectCard({ project, onOpenDetails }: ProjectCardProps) {
  return (
    <div className="glass-surface glass-surface-hover rounded-xl p-6 md:p-8 flex flex-col justify-between border border-slate-800 bg-[#0b0f1d]/90 relative overflow-hidden group">
      {/* Top Meta */}
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 bg-sky-950/70 border border-sky-800/60 px-2.5 py-0.5 rounded">
              {project.category}
            </span>
            <span className="text-xs text-slate-500 font-mono">
              PROJECT 0{project.orderIndex}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenDetails(project)}
              type="button"
              className="text-xs font-mono text-slate-400 hover:text-sky-300 flex items-center gap-1 transition-colors px-2.5 py-1 rounded bg-slate-900 border border-slate-800 hover:border-sky-800/60"
            >
              <span>Quick View</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <Link
              href={`/projects/${project.slug}`}
              className="text-xs font-mono text-sky-400 hover:text-sky-300 flex items-center gap-1 transition-colors px-2.5 py-1 rounded bg-sky-950/60 border border-sky-800/60 hover:border-sky-600"
            >
              <span>Case Study</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Project Header */}
        <h3 className="text-xl md:text-2xl font-bold text-slate-100 group-hover:text-sky-300 transition-colors mb-2">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-slate-400 mb-5">{project.subtitle}</p>

        {/* Problem & Solution Split View */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-rose-950/20 border border-rose-900/30 p-3.5 rounded-lg text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 text-rose-400 font-mono font-medium mb-1">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>Core Problem</span>
            </div>
            <p className="text-slate-300 line-clamp-3">{project.problem}</p>
          </div>

          <div className="bg-emerald-950/20 border border-emerald-900/30 p-3.5 rounded-lg text-xs leading-relaxed">
            <div className="flex items-center gap-1.5 text-emerald-400 font-mono font-medium mb-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>Engineered Solution</span>
            </div>
            <p className="text-slate-300 line-clamp-3">{project.solution}</p>
          </div>
        </div>

        {/* Architecture snippet */}
        <div className="bg-[#070a12] border border-slate-800/80 p-3.5 rounded-lg mb-6">
          <div className="flex items-center gap-2 mb-1.5 text-sky-400 text-xs font-mono">
            <Layers className="w-3.5 h-3.5" />
            <span>Architecture Flow:</span>
          </div>
          <p className="font-mono text-xs text-slate-400 line-clamp-2">{project.architecture}</p>
        </div>

        {/* Engineering Highlights */}
        <div className="mb-6">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Database className="w-3.5 h-3.5 text-indigo-400" />
            <span>Key Engineering Challenges</span>
          </div>
          <ul className="space-y-1.5">
            {project.engineeringChallenges.slice(0, 2).map((item, idx) => (
              <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                <span className="text-sky-400 font-bold">•</span>
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Tech Stack Chips & Action */}
      <div className="pt-4 border-t border-slate-800/80">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.technologies.slice(0, 8).map((tech) => (
            <TechBadge key={tech} name={tech} variant="default" size="sm" />
          ))}
          {project.technologies.length > 8 && (
            <span className="text-xs text-slate-500 font-mono self-center">
              +{project.technologies.length - 8} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
          <span>Production Enterprise Ready</span>
          <button
            onClick={() => onOpenDetails(project)}
            type="button"
            className="text-sky-400 hover:text-sky-300 underline font-medium cursor-pointer"
          >
            Read Technical Spec →
          </button>
        </div>
      </div>
    </div>
  );
}
