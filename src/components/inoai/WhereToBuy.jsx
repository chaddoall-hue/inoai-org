import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function WhereToBuy() {
  const dexList = [
    { name: 'InoSwap', url: 'https://inoswap.org', primary: true },
    { name: 'Candy Dex', url: 'https://candycity.finance/' },
    { name: 'Obsidian Dex', url: 'https://obsidian.finance/' },
    { name: 'VVS Finance', url: 'https://vvs.finance/trade/swap?inputCurrency=cro&outputCurrency=0x025f1575908d85815198390B2e5366FE754F8207&exactAmount=0&exactField=input' },
    { name: 'Ebisusbay', url: 'https://app.ebisusbay.com/' },
    { name: 'wolfswap', url: 'https://wolfswap.app/swap' }
  ];

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">Markets</p>
          <h2 className="text-base font-bold text-white">Where to Buy INO</h2>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
        {dexList.map((dex, i) => (
          <a
            key={i}
            href={dex.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative flex items-center justify-between px-3.5 py-3 rounded-xl border transition-all duration-200 hover:-translate-y-0.5 ${
              dex.primary
                ? 'bg-gradient-to-br from-purple-600/20 to-pink-600/10 border-purple-500/30 hover:border-purple-400/50'
                : 'bg-white/[0.03] border-white/[0.07] hover:border-purple-500/25 hover:bg-purple-500/[0.06]'
            }`}
          >
            <span className={`text-xs font-semibold ${dex.primary ? 'text-purple-300' : 'text-gray-300 group-hover:text-white transition-colors'}`}>
              {dex.name}
            </span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-600 group-hover:text-purple-400 transition-colors" />
          </a>
        ))}
      </div>
    </div>
  );
}