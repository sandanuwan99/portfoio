'use client';

import React, { useState } from 'react';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { Mail, Download, ExternalLink, GitFork, Star, Terminal, BookMarked, FileText } from 'lucide-react';
import { CvModal } from '@/components/CvModal';
import { GithubIcon, LinkedinIcon } from '@/components/BrandIcons';

export function ConnectSection() {
  const [cvModalOpen, setCvModalOpen] = useState(false);

  const featuredRepos = [
    {
      name: 'enterprise-insurance-erp-backend',
      description: 'Spring Boot multi-tiered backend microservices for automated insurance quotation, policy underwriting, claims lifecycle, and PDF/Excel generation.',
      language: 'Java',
      languageColor: 'bg-amber-400',
      stars: 14,
      forks: 4,
      topics: ['spring-boot', 'sql-server', 'openpdf', 'apache-poi', 'microservices'],
      url: 'https://github.com/sandanuwan99',
    },
    {
      name: 'cloud-native-hotel-management',
      description: 'Distributed microservices architecture combining React Micro Frontends with decoupled Java 21 Spring Boot services for reservations and billing.',
      language: 'Java',
      languageColor: 'bg-amber-400',
      stars: 19,
      forks: 6,
      topics: ['java-21', 'micro-frontends', 'docker', 'github-actions'],
      url: 'https://github.com/sandanuwan99',
    },
    {
      name: 'org-connect-hrms-platform',
      description: 'Automated human resource platform digitizing internal workflows, attendance aggregation, and tiered payroll calculation engine.',
      language: 'TypeScript',
      languageColor: 'bg-blue-400',
      stars: 11,
      forks: 3,
      topics: ['nextjs', 'typescript', 'spring-boot', 'hrms'],
      url: 'https://github.com/sandanuwan99',
    },
    {
      name: 'spring-boot-enterprise-patterns',
      description: 'Reference architecture demonstrating Clean Layered Architecture, DTO mapping, RFC 7807 error envelopes, and Microsoft SQL Server indexing.',
      language: 'Java',
      languageColor: 'bg-amber-400',
      stars: 27,
      forks: 8,
      topics: ['clean-architecture', 'spring-security', 'jpa-optimizations', 't-sql'],
      url: 'https://github.com/sandanuwan99',
    },
  ];

  return (
    <>
      <section id="connect" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
        <div className="max-w-7xl mx-auto space-y-14">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5" />
                  09 • Engineering Presence
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
                Let&apos;s Connect
              </h2>
              <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
                Explore my open engineering repositories, professional network, or download my verified technical resume.
              </p>
            </div>

            {/* Quick Profile Links Bar */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>github.com/{DEVELOPER_PROFILE.githubUsername}</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
              </a>

              <a
                href={DEVELOPER_PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-sky-950/50 border border-sky-800/60 text-sky-300 hover:border-sky-600 hover:bg-sky-900/60 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>linkedin.com/in/{DEVELOPER_PROFILE.linkedinUsername}</span>
                <ExternalLink className="w-3.5 h-3.5 text-sky-500" />
              </a>

              <button
                onClick={() => setCvModalOpen(true)}
                type="button"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-medium rounded-lg bg-slate-900 border border-slate-700 text-slate-200 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <FileText className="w-4 h-4 text-sky-400" />
                <span>Inspect CV</span>
              </button>

              <a
                href={DEVELOPER_PROFILE.cvUrl}
                download="Janitha_Sandanuwan_CV.pdf"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold rounded-lg bg-sky-400 text-slate-950 hover:bg-sky-300 transition-colors shadow-sm"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </div>

          {/* Featured Repository Cards */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
                <BookMarked className="w-4 h-4 text-sky-400" />
                <span>Curated Engineering Repositories</span>
              </h3>
              <a
                href={DEVELOPER_PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono text-sky-400 hover:underline flex items-center gap-1"
              >
                <span>View GitHub Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredRepos.map((repo) => (
                <div
                  key={repo.name}
                  className="glass-surface p-6 rounded-2xl border border-slate-800 bg-[#0c101e]/80 hover:border-slate-700 transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <a
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base font-bold text-sky-400 hover:text-sky-300 font-mono flex items-center gap-1.5 transition-colors"
                      >
                        <span>{repo.name}</span>
                        <ExternalLink className="w-3.5 h-3.5 opacity-60" />
                      </a>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded border border-slate-800 text-slate-400">
                        Public
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {repo.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {repo.topics.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-slate-800/80 text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className={`w-2.5 h-2.5 rounded-full ${repo.languageColor}`} />
                      <span>{repo.language}</span>
                    </div>

                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-amber-400" />
                        <span>{repo.stars}</span>
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork className="w-3.5 h-3.5 text-slate-400" />
                        <span>{repo.forks}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CvModal isOpen={cvModalOpen} onClose={() => setCvModalOpen(false)} />
    </>
  );
}
