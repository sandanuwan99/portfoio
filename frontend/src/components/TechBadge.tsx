import React from 'react';

interface TechBadgeProps {
  name: string;
  variant?: 'default' | 'accent' | 'highlight' | 'outline';
  size?: 'sm' | 'md';
}

export function TechBadge({ name, variant = 'default', size = 'sm' }: TechBadgeProps) {
  const sizeClasses = size === 'sm' ? 'px-2.5 py-0.5 text-xs' : 'px-3 py-1 text-xs md:text-sm';

  const variantClasses = {
    default: 'bg-slate-900/80 text-slate-300 border border-slate-700/60 hover:border-slate-500',
    accent: 'bg-sky-950/40 text-sky-300 border border-sky-800/60 hover:border-sky-600',
    highlight: 'bg-emerald-950/40 text-emerald-300 border border-emerald-800/60',
    outline: 'bg-transparent text-slate-400 border border-slate-800 hover:text-slate-200',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono font-medium rounded-md tracking-tight transition-colors ${sizeClasses} ${variantClasses[variant]}`}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-current opacity-70" />
      {name}
    </span>
  );
}
