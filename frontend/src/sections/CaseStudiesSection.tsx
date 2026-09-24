'use client';

import React from 'react';
import { CASE_STUDIES } from '@/lib/data';
import { CaseStudyCard } from '@/components/CaseStudyCard';
import { Search } from 'lucide-react';

export function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5" />
              07 • Production Problem Solving
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Engineering Case Studies
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Real technical challenges investigated and resolved in production systems. Each case study documents the end-to-end diagnostic workflow from root-cause identification to architectural remediation.
          </p>
        </div>

        {/* Case Study Cards Container */}
        <div className="space-y-8">
          {CASE_STUDIES.map((caseStudy) => (
            <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
          ))}
        </div>
      </div>
    </section>
  );
}
