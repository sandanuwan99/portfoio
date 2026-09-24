'use client';

import React, { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
}

export function CodeBlock({ code, language = 'java', filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  return (
    <div className="rounded-lg border border-slate-800 bg-[#070a11] overflow-hidden my-3 text-xs md:text-sm shadow-xl">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 bg-slate-900/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          {filename && <span className="font-mono text-slate-400 text-xs ml-2">{filename}</span>}
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 bg-slate-800/60 px-2 py-0.5 rounded">
            {language}
          </span>
          <button
            onClick={handleCopy}
            type="button"
            aria-label="Copy code"
            className="text-slate-400 hover:text-slate-200 p-1 rounded transition-colors focus:outline-none"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          </button>
        </div>
      </div>
      <pre className="p-4 overflow-x-auto text-slate-300 font-mono leading-relaxed selection:bg-sky-900/50 selection:text-white">
        <code>{code}</code>
      </pre>
    </div>
  );
}
