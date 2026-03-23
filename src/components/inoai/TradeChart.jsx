import React from 'react';
import { ExternalLink } from 'lucide-react';

const DEXSCREENER_PAIR_ADDRESS = '0x8359cbCD88F5b1791bD158e7A2b83c977674F6C2';
const DEXSCREENER_POOL_URL = `https://dexscreener.com/cronos/${DEXSCREENER_PAIR_ADDRESS}`;
const DEXSCREENER_EMBED_URL = `${DEXSCREENER_POOL_URL}?embed=1&theme=dark&trades=0&info=0`;

export default function TradeChart() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">Dexscreener</p>
          <h3 className="text-sm font-bold text-white">INO/WCRO Chart</h3>
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
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}
