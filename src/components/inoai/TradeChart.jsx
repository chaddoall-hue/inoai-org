import React from 'react';
import { ExternalLink } from 'lucide-react';

const PAIR_ADDRESS = '0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2';
const GECKOTERMINAL_EMBED_URL = `https://www.geckoterminal.com/cro/pools/${PAIR_ADDRESS}?embed=1&info=0&swaps=0`;
const GECKOTERMINAL_EXTERNAL_URL = `https://www.geckoterminal.com/cro/pools/${PAIR_ADDRESS}`;

export default function TradeChart() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">GeckoTerminal</p>
          <h3 className="text-sm font-bold text-white">INO Chart</h3>
        </div>
        <a
          href={GECKOTERMINAL_EXTERNAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200"
        >
          Open <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="relative h-[520px] bg-[#0b0b0f] sm:h-[580px]">
        <iframe
          src={GECKOTERMINAL_EMBED_URL}
          title="INO Chart"
          className="absolute inset-0 w-full h-full border-0"
        />
      </div>
    </div>
  );
}
