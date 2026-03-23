import React from 'react';
import { ExternalLink } from 'lucide-react';

const INO_TOKEN_ADDRESS = '0x025f1575908d85815198390B2e5366FE754F8207';
const DEXSCREENER_POOL_URL = 'https://dexscreener.com/cronos/0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2';
const DEXSCREENER_EMBED_URL = `${DEXSCREENER_POOL_URL}?embed=1&theme=dark&trades=0&info=0`;
const DEXSCREENER_FALLBACK_URL = `https://dexscreener.com/cronos/${INO_TOKEN_ADDRESS}?embed=1&theme=dark&trades=0&info=0`;

export default function TradeChart() {
  const [iframeError, setIframeError] = React.useState(false);

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
          src={iframeError ? DEXSCREENER_FALLBACK_URL : DEXSCREENER_EMBED_URL}
          title="Dexscreener Chart"
          loading="lazy"
          className="absolute inset-0 w-full h-full border-0"
          onError={() => setIframeError(true)}
          allow="clipboard-write"
          sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
        />
      </div>
    </div>
  );
}
