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
              src="https://dexscreener.com/cronos/0x4A0C40d7bcA1D332C3e3a1Fff694fa4A9E81c03A?embed=1&loadChartSettings=0&trades=0&tabs=0&info=0&chartLeftToolbar=0&chartTheme=dark&theme=dark&chartStyle=0&chartType=usd&interval=15"
              className="absolute inset-0 w-full h-full border-0 rounded-2xl"
              title="DexScreener Trade Chart"
            />
          </div>
        </GlassCard>
        <div className="mt-4 flex justify-center">
          <a
            href="https://dexscreener.com/cronos/0x4A0C40d7bcA1D332C3e3a1Fff694fa4A9E81c03A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            Open on DexScreener <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}