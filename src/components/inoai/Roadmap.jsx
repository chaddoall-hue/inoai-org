import React from 'react';
import { ExternalLink, Sparkles, CheckCircle2, Circle } from 'lucide-react';

export default function Roadmap() {
  const items = [
    { title: 'InoSwap', url: 'https://inoswap.org', done: true },
    { title: 'InoShop', done: false },
    { title: 'InoPlay', done: false },
    { title: 'Kcanther Collection', done: false },
    { title: 'Crowdfunding Platform', done: false },
    { title: 'Fundraising Platform', done: false },
    { title: 'Market Place Platform', done: false },
    { title: 'More To Come', upcoming: true }
  ];

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5 h-full">
      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Vision</p>
      <h2 className="text-base font-bold text-white mb-4">Road Map</h2>
      <div className="space-y-1.5">
        {items.map((item, i) => (
          <div key={i}>
            {item.url ? (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/[0.04] transition-colors"
              >
                <CheckCircle2 className="w-4 h-4 text-purple-400 flex-shrink-0" />
                <span className="text-xs text-white flex-1 font-medium">{item.title}</span>
                <ExternalLink className="w-3 h-3 text-gray-600 group-hover:text-purple-400 transition-colors" />
              </a>
            ) : (
              <div className="flex items-center gap-3 px-3 py-2 rounded-lg">
                {item.upcoming
                  ? <Sparkles className="w-4 h-4 text-pink-500/50 flex-shrink-0" />
                  : <Circle className="w-4 h-4 text-gray-700 flex-shrink-0" />
                }
                <span className={`text-xs flex-1 ${item.upcoming ? 'text-pink-400/60 italic' : 'text-gray-500'}`}>
                  {item.title}
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}