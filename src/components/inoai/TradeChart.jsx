import React from 'react';
import { ExternalLink } from 'lucide-react';

export default function TradeChart() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">DexScreener</p>
          <h3 className="text-sm font-bold text-white">CRO-INO</h3>
        </div>
        <a
          href="https://dexscreener.com/cronos/0x025f1575908d85815198390B2e5366FE754F8207"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200"
        >
          Open <ExternalLink className="w-3 h-3" />
        </a>
      </div>
      <div style={{ height: '360px', background: '#0b0b0f' }}>
        <iframe
          src="https://dexscreener.com/cronos/0x025f1575908d85815198390B2e5366FE754F8207?embed=1&theme=dark&trades=0&info=0"
          title="DexScreener Chart"
          loading="eager"
          style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
        />
      </div>
    </div>
  );
}
