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
          href="https://dexscreener.com/cronos/0x4A0C40d7bcA1D332C3e3a1Fff694fa4A9E81c03A"
          target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/15"
        >
          <ExternalLink className="w-3 h-3" />
          Full Chart
        </a>
      </div>
      <div className="relative flex-1" style={{ minHeight: 320 }}>
        <iframe
          src="https://dexscreener.com/cronos/0x4A0C40d7bcA1D332C3e3a1Fff694fa4A9E81c03A?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
          className="absolute inset-0 w-full h-full"
          style={{ border: 0 }}
          title="DexScreener Chart"
        />
      </div>
    </div>
  );
}