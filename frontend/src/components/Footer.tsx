'use client';

import React from 'react';
import { DEVELOPER_PROFILE } from '@/lib/data';
import { Mail, ArrowUp, Terminal, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800 bg-[#060910] text-slate-400 py-14 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Identity */}
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-2 text-slate-100">
              <div className="w-6 h-6 rounded bg-sky-950 border border-sky-800 flex items-center justify-center text-sky-400 font-mono text-xs">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-bold text-base tracking-tight">{DEVELOPER_PROFILE.name}</span>
            </div>
            <p className="text-xs font-mono text-sky-400">
              {DEVELOPER_PROFILE.role}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed max-w-md">
              Building reliable, scalable software systems with Java, Spring Boot, Next.js, and Microsoft SQL Server. Focused on clean architecture, enterprise ERPs, and automated reporting pipelines.
            </p>
            <div className="flex items-center gap-2 pt-1 text-[11px] font-mono text-emerald-400">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Enterprise Clean Architecture &amp; Production Verified</span>
            </div>
          </div>

          {/* Col 2: Core Stack */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">Core Stack</h4>
            <ul className="space-y-1.5 text-xs font-mono text-slate-400">
              <li>Java 17 / 21 &amp; Spring Boot</li>
              <li>Next.js &amp; TypeScript</li>
              <li>Microsoft SQL Server</li>
              <li>Spring Security &amp; Data JPA</li>
              <li>Azure DevOps &amp; Docker</li>
              <li>Apache POI &amp; OpenPDF</li>
            </ul>
          </div>

          {/* Col 3: Navigation & Direct Channels */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-300 mb-3">Connect &amp; Links</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a
                  href={DEVELOPER_PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  <span>GitHub (@{DEVELOPER_PROFILE.githubUsername})</span>
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${DEVELOPER_PROFILE.email}`}
                  className="flex items-center gap-2 text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>{DEVELOPER_PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={DEVELOPER_PROFILE.cvUrl}
                  download="Janitha_Sandanuwan_CV.pdf"
                  className="inline-block text-xs font-mono text-sky-400 hover:underline pt-1"
                >
                  Download Official CV (PDF) ↓
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div className="flex flex-wrap items-center gap-2">
            <span>© {currentYear} {DEVELOPER_PROFILE.name}. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <span>Java • Spring Boot • Next.js • SQL Server</span>
          </div>

          <button
            onClick={scrollToTop}
            type="button"
            className="flex items-center gap-1.5 text-slate-400 hover:text-slate-200 transition-colors bg-slate-900 border border-slate-800 px-3 py-1.5 rounded-lg"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
