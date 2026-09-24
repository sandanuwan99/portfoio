'use client';

import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '@/lib/data';
import { TechBadge } from '@/components/TechBadge';
import { Server, Layout, Database, Layers, GitBranch, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'backend':
        return <Server className="w-4 h-4 text-sky-400" />;
      case 'frontend':
        return <Layout className="w-4 h-4 text-blue-400" />;
      case 'database':
        return <Database className="w-4 h-4 text-rose-400" />;
      case 'architecture':
        return <Layers className="w-4 h-4 text-amber-400" />;
      case 'devops':
        return <GitBranch className="w-4 h-4 text-emerald-400" />;
      case 'testing':
        return <ShieldCheck className="w-4 h-4 text-purple-400" />;
      case 'reporting':
        return <FileSpreadsheet className="w-4 h-4 text-indigo-400" />;
      default:
        return <Server className="w-4 h-4 text-sky-400" />;
    }
  };

  const filteredCategories =
    activeCategory === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeCategory);

  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-800/80 bg-[#070a12] relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs text-sky-400 uppercase tracking-wider bg-sky-950/60 border border-sky-800/40 px-3 py-1 rounded-full">
                03 • Technical Competencies
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
              Production Technical Skills
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Categorized enterprise toolkit utilized across mission-critical insurance, fintech, and HR platforms. Evaluated on production mastery rather than arbitrary percentages.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1.5 self-start md:self-auto bg-slate-900/60 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setActiveCategory('all')}
              type="button"
              className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                activeCategory === 'all'
                  ? 'bg-sky-400 text-slate-950 font-bold'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              All Categories
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                type="button"
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors ${
                  activeCategory === cat.id
                    ? 'bg-sky-400 text-slate-950 font-bold'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat) => (
            <div
              key={cat.id}
              className="glass-surface p-6 rounded-2xl border border-slate-800/90 bg-[#0d1222]/80 hover:border-slate-700 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-slate-100">{cat.name}</h3>
                    <span className="text-[11px] font-mono text-slate-400">Production Verified</span>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">{cat.description}</p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-800/80">
                  {cat.skills.map((skill) => (
                    <TechBadge
                      key={skill.name}
                      name={skill.name}
                      variant="default"
                      size="sm"
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
