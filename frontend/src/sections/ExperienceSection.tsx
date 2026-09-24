'use client';

import React from 'react';
import { EXPERIENCES } from '@/lib/data';
import { TechBadge } from '@/components/TechBadge';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building, ExternalLink } from 'lucide-react';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
              04 • Production Experience
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Professional Engineering Timeline
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Commercial enterprise track record delivering mission-critical microservices, insurance solutions, and automated workflows.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-4 sm:pl-8 border-l border-slate-800 space-y-12">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Indicator Dot */}
              <div
                className={`absolute -left-[21px] sm:-left-[37px] top-1.5 w-4 h-4 rounded-full border-2 bg-[#060910] transition-colors ${
                  exp.isCurrent
                    ? 'border-sky-400 ring-4 ring-sky-950'
                    : 'border-slate-600 group-hover:border-slate-400'
                }`}
              >
                {exp.isCurrent && (
                  <span className="absolute inset-1 rounded-full bg-sky-400 animate-ping opacity-75" />
                )}
              </div>

              {/* Card Container */}
              <div className="glass-surface p-6 sm:p-8 rounded-2xl border border-slate-800 bg-[#0b0f1d]/90 hover:border-slate-700 transition-colors shadow-xl">
                {/* Header Info */}
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-4 pb-4 border-b border-slate-800/80">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="text-lg sm:text-xl font-bold text-slate-100">{exp.role}</span>
                      {exp.isCurrent && (
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/60 font-medium">
                          Active Role
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-sky-400 font-semibold">
                        <Building className="w-3.5 h-3.5" />
                        {exp.company}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                      {exp.companyUrl && (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1 text-slate-500 hover:text-slate-300 transition-colors"
                        >
                          <span>icptechnologies.lk</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800 self-start lg:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-sky-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Summary */}
                {exp.summary && (
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-medium bg-slate-900/40 p-3.5 rounded-xl border border-slate-800/60">
                    {exp.summary}
                  </p>
                )}

                {/* Technical Responsibilities & Contributions */}
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    Key Technical Contributions &amp; Systems Worked On:
                  </h4>
                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0 mt-0.5" />
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Deployed */}
                <div className="pt-4 border-t border-slate-800/80">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-2">
                    Technologies Deployed:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <TechBadge key={tech} name={tech} variant="default" size="sm" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
