'use client';

import React from 'react';
import { ArchitectureDiagram } from '@/components/ArchitectureDiagram';
import { Layers } from 'lucide-react';

export function ArchitectureSection() {
  return (
    <section id="architecture" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#060910] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-2">
            <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5" />
              06 • System Architecture
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            How I Build Software
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
            Enterprise software requires predictable data flow, strict separation of concerns, and defensive programming at every tier. Explore how requests travel from Next.js user interfaces down to Microsoft SQL Server execution plans.
          </p>
        </div>

        {/* Visual Interactive Architecture Diagram */}
        <ArchitectureDiagram />
      </div>
    </section>
  );
}
