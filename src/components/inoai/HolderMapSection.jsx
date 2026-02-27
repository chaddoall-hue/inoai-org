import React from "react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { Search } from "lucide-react";

export default function HolderMapSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>INO Holder Map</SectionTitle>
        <GlassCard>
          <p className="text-white/60 mb-6">
            Visualize INO token distribution and wallet clusters on Bubblemaps
          </p>
          <a
            href="https://app.bubblemaps.io/cro/token/0x025f1575908d85815198390b2e5366fe754f8207"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold text-sm shadow-[0_0_25px_rgba(168,85,247,0.25)] hover:shadow-[0_0_35px_rgba(168,85,247,0.4)] transition-all duration-300 hover:scale-105"
          >
            <Search className="w-4 h-4" />
            Open on Bubblemaps.io
          </a>
        </GlassCard>
      </div>
    </section>
  );
}