import React, { useState } from "react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { Copy, Check, ExternalLink } from "lucide-react";

function CopyableItem({ label, value, displayValue }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <li className="flex items-start gap-3 py-3 border-b border-white/[0.04] last:border-0">
      <span className="text-white/40 text-sm font-medium min-w-[130px] shrink-0">{label}</span>
      <span className="text-white/80 text-sm break-all flex-1">{displayValue || value}</span>
      <button
        onClick={handleCopy}
        className="shrink-0 p-1.5 rounded-lg hover:bg-white/5 transition-colors"
        title="Copy"
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-green-400" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-white/30 hover:text-white/60" />
        )}
      </button>
    </li>
  );
}

export default function TokenomicsSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Tokenomics Overview</SectionTitle>
        <GlassCard>
          <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent mb-5">
            InoAi – On Cronos
          </h3>
          <ul>
            <CopyableItem label="Name" value="InoAi" />
            <CopyableItem label="Total Supply" value="1,000,000,000" />
            <CopyableItem
              label="Contract"
              value="0x025f1575908d85815198390B2e5366FE754F8207"
              displayValue={
                <span className="font-mono text-xs">
                  0x025f1575908d...FE754F8207
                </span>
              }
            />
            <CopyableItem label="Symbol" value="INO" />
            <CopyableItem label="Decimals" value="18" />
          </ul>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://cronoscan.com/token/0x025f1575908d85815198390B2e5366FE754F8207"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
            >
              View on Cronoscan <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://inoai.org/whitepaper/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/20 text-white text-sm font-medium hover:from-purple-600/30 hover:to-pink-500/30 transition-all"
            >
              WHITEPAPER <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}