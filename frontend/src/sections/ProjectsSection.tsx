'use client';

import React, { useState } from 'react';
import { PROJECTS } from '@/lib/data';
import { Project } from '@/types/portfolio';
import { ProjectCard } from '@/components/ProjectCard';
import { ProjectModal } from '@/components/ProjectModal';
import { Layers, Terminal, Sparkles } from 'lucide-react';

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { label: 'All Projects', value: 'all' },
    { label: 'Enterprise ERP & FinTech', value: 'Enterprise ERP / FinTech' },
    { label: 'Enterprise Software', value: 'Enterprise Software' },
    { label: 'HRMS & Workflow', value: 'Enterprise Systems' },
    { label: 'Retail & POS', value: 'Retail / POS' },
    { label: 'Distributed Systems', value: 'Distributed Systems' },
  ];

  const filteredProjects =
    activeFilter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5" />
                05 • Featured Systems
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Enterprise Software Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Real-world systems engineered for high availability, ACID transactional consistency, automated document rendering, and robust microservices.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 bg-slate-900/60 p-1 rounded-xl border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                type="button"
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeFilter === cat.value
                    ? 'bg-sky-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenDetails={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Project Technical Modal */}
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
