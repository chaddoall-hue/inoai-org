import React from 'react';
import { ExternalLink } from 'lucide-react';

const GECKO_POOL_URL = 'https://www.geckoterminal.com/cro/pools/0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2';
const GECKO_EMBED_URL = `${GECKO_POOL_URL}?embed=1&info=0&swaps=0`;

export default function TradeChart() {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden bg-black/20">
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/20">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-500">GeckoTerminal</p>
          <h3 className="text-sm font-bold text-white">INO/WCRO</h3>
        </div>
        <a
          href={GECKO_POOL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-purple-300 hover:text-purple-200"
        >
          Open <ExternalLink className="w-3 h-3" />
        </a>
      </div>

      <div className="relative h-[400px] overflow-hidden bg-[#0b0b0f] sm:h-[440px]">
        <iframe
          src={GECKO_EMBED_URL}
          title="GeckoTerminal Chart"
          loading="eager"
          className="absolute left-0 top-0 border-0"
          style={{
            width: '100%',
            height: '760px',
            display: 'block',
            transform: 'translateY(-118px)',
            transformOrigin: 'top center',
          }}
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-[#0b0b0f] to-transparent" />
      </div>
    </div>
  );
}
