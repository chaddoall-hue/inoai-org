import React, { useMemo, useState } from 'react';
import { TrendingUp, ExternalLink, Maximize2, Minimize2 } from 'lucide-react';

const INO_TOKEN = {
  address: '0x025f1575908d85815198390B2e5366FE754F8207',
  symbol: 'INO',
};

const CRO_TOKEN = {
  address: 'CRO',
  symbol: 'CRO',
};

export default function TradeChart() {
  const [isExpanded, setIsExpanded] = useState(false);

  const chartData = useMemo(() => {
    const inputToken = CRO_TOKEN;
    const outputToken = INO_TOKEN;

    const tokenAddress = inputToken.address !== 'CRO' && inputToken.address !== 'TCRO'
      ? inputToken.address
      : outputToken.address !== 'CRO' && outputToken.address !== 'TCRO'
        ? outputToken.address
        : null;

    if (!tokenAddress) return null;

    return {
      url: `https://dexscreener.com/cronos/${tokenAddress}?embed=1&theme=dark&trades=0&info=0`,
      externalUrl: `https://dexscreener.com/cronos/${tokenAddress}`,
      pairName: `${inputToken.symbol}-${outputToken.symbol}`,
    };
  }, []);

  if (!chartData) return null;

  return (
    <div className={`rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm overflow-hidden ${isExpanded ? 'fixed inset-4 z-50' : 'h-full flex flex-col'}`}>
      <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/[0.05] bg-white/[0.02]">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-4 h-4 text-purple-400" />
          <div>
            <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">GeckoTerminal</p>
            <h3 className="text-sm font-bold text-white">{chartData.pairName}</h3>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            {isExpanded ? <Minimize2 className="w-4 h-4 text-gray-300" /> : <Maximize2 className="w-4 h-4 text-gray-300" />}
          </button>
          <a
            href={chartData.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-md hover:bg-white/10 transition-colors"
          >
            <ExternalLink className="w-4 h-4 text-gray-300" />
          </a>
        </div>
      </div>
      <div className={`relative ${isExpanded ? 'h-[calc(100%-56px)]' : 'flex-1'}`} style={!isExpanded ? { minHeight: 320 } : undefined}>
        <iframe
          src={chartData.url}
          className="absolute inset-0 w-full h-full border-0"
          style={{ border: 0 }}
          title="GeckoTerminal Chart"
          loading="lazy"
        />
      </div>
      {isExpanded && (
        <div className="fixed inset-0 bg-black/60 -z-10" onClick={() => setIsExpanded(false)} />
      )}
    </div>
  );
}
