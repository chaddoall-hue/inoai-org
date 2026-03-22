import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function TradeChart() {
  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm overflow-hidden h-full flex flex-col">
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05]">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">DexScreener</p>
          <h3 className="text-sm font-bold text-white">INO / CRO</h3>
        </div>
        <a
          href="https://dexscreener.com/cronos/0x8359cbCD88F5b1791bD158e7A2b83c977674F6C2"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/15"
        >
          <ExternalLink className="w-3 h-3" />
          Full Chart
        </a>
      </div>
      <div className="relative flex-1" style={{ minHeight: 320 }}>
        <iframe
          src="https://dexscreener.com/cronos/0x8359cbCD88F5b1791bD158e7A2b83c977674F6C2?embed=1&theme=dark&trades=0&info=0"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          title="DexScreener Chart"
        />
      </div>
    </div>
  );
}