import React, { useState } from 'react';
import { Copy, Check, ExternalLink, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const CONTRACT = '0x025f1575908d85815198390B2e5366FE754F8207';

export default function Tokenomics() {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard.writeText(CONTRACT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const stats = [
    { label: 'Token', value: 'InoAi' },
    { label: 'Symbol', value: 'INO' },
    { label: 'Supply', value: '1,000,000,000' },
    { label: 'Decimals', value: '18' },
    { label: 'Network', value: 'Cronos' },
  ];

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5">
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">On-chain Data</p>
          <h2 className="text-base font-bold text-white">Tokenomics</h2>
        </div>
        <div className="flex gap-2">
          <a
            href="https://explorer.cronos.org/token/0x025f1575908d85815198390b2e5366fe754f8207"
            target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-purple-500/10 text-purple-300 hover:bg-purple-500/20 transition-colors border border-purple-500/15"
          >
            <ExternalLink className="w-3 h-3" /> Cronos Explorer
          </a>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 mb-3">
        {stats.map((s, i) => (
          <div key={i} className="rounded-xl bg-white/[0.03] border border-white/[0.06] px-3 py-2.5 text-center">
            <p className="text-[10px] text-gray-600 mb-0.5 uppercase tracking-wide">{s.label}</p>
            <p className="text-sm font-bold text-white">{s.value}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl bg-white/[0.03] border border-white/[0.06] px-4 py-2.5">
        <div className="min-w-0">
          <p className="text-[10px] text-gray-600 uppercase tracking-wide mb-0.5">Contract Address</p>
          <p className="text-xs font-mono text-gray-400 truncate">{CONTRACT}</p>
        </div>
        <button
          onClick={copy}
          className="ml-3 flex-shrink-0 p-1.5 rounded-lg hover:bg-purple-500/20 transition-colors"
        >
          {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4 text-purple-400" />}
        </button>
      </div>
    </div>
  );
}