'use client';

import React, { useState } from 'react';
import { CaseStudy } from '@/types/portfolio';
import { ChevronDown, ChevronUp, Code2, AlertTriangle, Search, CheckCircle, Award } from 'lucide-react';
import { CodeBlock } from './CodeBlock';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="glass-surface rounded-2xl border border-slate-800 bg-[#0c101d] overflow-hidden transition-all duration-300 hover:border-slate-700/80">
      {/* Header Bar */}
      <div className="p-6 md:p-7 border-b border-slate-800/80">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs px-2.5 py-0.5 rounded bg-sky-950/80 text-sky-400 border border-sky-800/60 font-semibold">
              CASE STUDY {caseStudy.number}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[11px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            type="button"
            className="flex items-center gap-1.5 text-xs font-mono text-sky-400 hover:text-sky-300 px-3 py-1.5 rounded-lg bg-sky-950/40 border border-sky-800/40 hover:border-sky-700 transition-colors"
          >
            <span>{isExpanded ? 'Collapse Deep Dive' : 'Inspect Technical Breakdown'}</span>
            {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
        </div>

        <h3 className="text-lg md:text-xl font-bold text-slate-100 mb-1">{caseStudy.title}</h3>
        <p className="text-xs md:text-sm text-slate-400 font-medium">{caseStudy.subtitle}</p>
      </div>

      {/* Structured Problem & Investigation Preview */}
      <div className="p-6 md:p-7 space-y-5 text-sm leading-relaxed text-slate-300">
        {/* The Problem */}
        <div className="bg-rose-950/15 border border-rose-900/30 p-4 rounded-xl">
          <div className="flex items-center gap-2 text-rose-400 font-mono text-xs uppercase tracking-wider font-semibold mb-1.5">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Problem &amp; Inefficiency</span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm">{caseStudy.problem}</p>
        </div>

        {/* The Investigation */}
        <div className="bg-amber-950/15 border border-amber-900/30 p-4 rounded-xl">
          <div className="flex items-center gap-2 text-amber-400 font-mono text-xs uppercase tracking-wider font-semibold mb-1.5">
            <Search className="w-3.5 h-3.5" />
            <span>Diagnostic Investigation</span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm">{caseStudy.investigation}</p>
        </div>

        {/* The Solution */}
        <div className="bg-emerald-950/15 border border-emerald-900/30 p-4 rounded-xl">
          <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold mb-1.5">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Architectural Solution</span>
          </div>
          <p className="text-slate-300 text-xs md:text-sm">{caseStudy.solution}</p>
        </div>

        {/* Expandable Section: Implementation, Code, Result & Learnings */}
        {isExpanded && (
          <div className="pt-4 border-t border-slate-800 space-y-6 animate-in fade-in duration-300">
            {/* Implementation Details */}
            <div>
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold mb-2">
                <Code2 className="w-3.5 h-3.5" />
                <span>Technical Implementation</span>
              </div>
              <p className="text-slate-300 text-xs md:text-sm mb-3">{caseStudy.implementation}</p>
              {caseStudy.implementationCode && (
                <CodeBlock
                  code={caseStudy.implementationCode}
                  language={caseStudy.codeLanguage || 'java'}
                  filename="ImplementationExcerpt"
                />
              )}
            </div>

            {/* Results / Production Impact */}
            <div className="bg-sky-950/20 border border-sky-800/40 p-4 rounded-xl">
              <div className="flex items-center gap-2 text-sky-400 font-mono text-xs uppercase tracking-wider font-semibold mb-1.5">
                <Award className="w-3.5 h-3.5" />
                <span>Production Impact &amp; Result</span>
              </div>
              <p className="text-slate-200 text-xs md:text-sm font-medium">{caseStudy.result}</p>
            </div>

            {/* Lessons Learned */}
            <div>
              <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 mb-2.5">
                Engineering Lessons Learned
              </h4>
              <ul className="space-y-1.5">
                {caseStudy.lessonsLearned.map((lesson, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/50 p-2.5 rounded-lg border border-slate-800">
                    <span className="text-emerald-400 font-bold">✓</span>
                    <span>{lesson}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
