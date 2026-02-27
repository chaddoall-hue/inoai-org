import React from 'react';
import { ArrowUpRight, BookOpen } from 'lucide-react';

export default function MoreAbout() {
  const links = [
    { title: 'About InoAi', desc: 'The project, the vision', url: 'https://inoai.gitbook.io/guide/about' },
    { title: 'Kcanthers Begins', desc: 'Explore the Kcanthers universe', url: 'https://kcanther.gitbook.io/guide/' }
  ];

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5 h-full flex flex-col">
      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Resources</p>
      <h2 className="text-base font-bold text-white mb-4">Learn More</h2>
      <div className="space-y-2 flex-1">
        {links.map((link, i) => (
          <a
            key={i}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-start justify-between p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-purple-500/25 hover:bg-purple-500/[0.04] transition-all"
          >
            <div>
              <p className="text-xs font-semibold text-white mb-0.5">{link.title}</p>
              <p className="text-[10px] text-gray-600">{link.desc}</p>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-700 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-0.5" />
          </a>
        ))}
      </div>
      <a
        href="https://inoai.gitbook.io/guide/"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 self-start inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] border border-purple-500/20 hover:border-purple-500/40 text-purple-300 text-[11px] font-medium transition-all hover:bg-purple-500/[0.08]"
      >
        <BookOpen className="w-3 h-3" />
        GitBook
      </a>
    </div>
  );
}