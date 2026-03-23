import React from 'react';
import { ExternalLink } from 'lucide-react';

const DEXSCREENER_POOL_URL = 'https://dexscreener.com/cronos/0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2';
const DEXSCREENER_EMBED_URL = `${DEXSCREENER_POOL_URL}?embed=1&theme=dark&trades=0&info=0`;

export default function TradeChart() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">Dexscreener</p>
          <h3 className="text-sm font-bold text-white">INO/WCRO</h3>
        </div>
        <a
          href={DEXSCREENER_POOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200"
        >
          Open <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="relative h-[520px] bg-[#0b0b0f] sm:h-[580px]">
        <iframe
          src={DEXSCREENER_EMBED_URL}
          title="Dexscreener Chart"
          loading="eager"
          className="h-full w-full border-0"
        />
      </div>
    </div>
  );
}
