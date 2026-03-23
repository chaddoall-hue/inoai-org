import React from "react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { ExternalLink } from "lucide-react";

export default function TradeSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Trade INO/CRO</SectionTitle>
        <GlassCard className="p-0 overflow-hidden">
          <div className="relative w-full" style={{ paddingBottom: "65%" }}>
            <iframe
              src="https://www.geckoterminal.com/cro/pools/0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2?embed=1"
              className="absolute inset-0 w-full h-full border-0 rounded-2xl"
              title="GeckoTerminal Trade Chart"
            />
          </div>
        </GlassCard>
        <div className="mt-4 flex justify-center">
          <a
            href="https://www.geckoterminal.com/cro/pools/0x8359cbcd88f5b1791bd158e7a2b83c977674f6c2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Open on GeckoTerminal <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
