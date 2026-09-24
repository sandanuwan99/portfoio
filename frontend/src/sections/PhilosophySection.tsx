'use client';

import React, { useState } from 'react';
import { PHILOSOPHY_PRINCIPLES } from '@/lib/data';
import { CodeBlock } from '@/components/CodeBlock';
import { ShieldCheck, GitMerge, CheckCircle, ChevronRight, Terminal } from 'lucide-react';

export function PhilosophySection() {
  const [selectedPrincipleId, setSelectedPrincipleId] = useState(PHILOSOPHY_PRINCIPLES[0].id);
  const activePrinciple = PHILOSOPHY_PRINCIPLES.find((p) => p.id === selectedPrincipleId) || PHILOSOPHY_PRINCIPLES[0];

  return (
    <section id="philosophy" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
              02 • Engineering Principles
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I Think About Software
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
            Software engineering is an ongoing discipline of managing complexity. These principles guide every line of code, database schema, and architectural boundary I create.
          </p>
        </div>

        {/* Interactive Principle Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Principle Cards */}
          <div className="lg:col-span-5 space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 flex items-center justify-between">
              <span>Core Architectural Tenets</span>
              <span className="text-sky-400">Select to inspect</span>
            </div>

            {PHILOSOPHY_PRINCIPLES.map((principle) => {
              const isSelected = principle.id === selectedPrincipleId;
              return (
                <button
                  key={principle.id}
                  type="button"
                  onClick={() => setSelectedPrincipleId(principle.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 ${
                    isSelected
                      ? 'border-sky-500/50 bg-sky-950/20 text-slate-100 shadow-lg ring-1 ring-sky-500/30'
                      : 'border-slate-800/80 bg-slate-900/30 text-slate-400 hover:border-slate-700 hover:text-slate-200'
                  }`}
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400/90 block mb-0.5">
                      {principle.category}
                    </span>
                    <h3 className="text-sm font-bold text-slate-100">{principle.title}</h3>
                  </div>
                  <ChevronRight
                    className={`w-4 h-4 flex-shrink-0 transition-transform ${
                      isSelected ? 'text-sky-400 translate-x-1' : 'text-slate-600'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Deep Insight & Code Demonstration */}
          <div className="lg:col-span-7 glass-surface rounded-2xl p-6 sm:p-8 border border-slate-800 bg-[#090d18] shadow-2xl space-y-6">
            <div className="pb-4 border-b border-slate-800 flex items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-sky-400 uppercase tracking-wider block mb-1">
                  {activePrinciple.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-100">
                  {activePrinciple.title}
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-sky-950/60 border border-sky-800/60 text-sky-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
            </div>

            {/* Principle Core Rationale */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Core Philosophy</h4>
              <p className="text-slate-200 text-sm leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800/80">
                {activePrinciple.description}
              </p>
            </div>

            {/* Enterprise Context */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                Enterprise Production Context
              </h4>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                {activePrinciple.enterpriseContext}
              </p>
            </div>

            {/* Practical Applied Patterns */}
            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2.5">
                Applied Architectural Patterns
              </h4>
              <div className="space-y-2">
                {activePrinciple.patterns.map((pattern, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 text-xs text-slate-300 bg-slate-900/40 p-2.5 rounded-lg border border-slate-800/60"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-sky-400 flex-shrink-0 mt-0.5" />
                    <span>{pattern}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Real Code Insight */}
            {activePrinciple.codeInsight && (
              <div>
                <div className="flex items-center gap-2 mb-1 text-slate-400 text-xs font-mono">
                  <Terminal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Pattern Implementation In Java / Spring / SQL:</span>
                </div>
                <CodeBlock code={activePrinciple.codeInsight} language="java" />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
