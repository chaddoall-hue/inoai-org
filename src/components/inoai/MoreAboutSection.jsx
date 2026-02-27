import React from "react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { ArrowRight, ExternalLink } from "lucide-react";

const links = [
  { label: "About InoAi", url: "https://inoai.gitbook.io/guide/about" },
  { label: "Kcanthers Begins", url: "https://kcanther.gitbook.io/guide/" },
];

export default function MoreAboutSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>More About Me</SectionTitle>
        <GlassCard>
          <ul className="space-y-2 mb-6">
            {links.map((link, i) => (
              <li key={i}>
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-3 px-4 rounded-xl hover:bg-white/[0.03] transition-colors"
                >
                  <span className="text-white/70 group-hover:text-white transition-colors">{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-purple-400 group-hover:translate-x-1 transition-all" />
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://inoai.gitbook.io/guide/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-600/20 to-pink-500/20 border border-purple-500/20 text-white text-sm font-medium hover:from-purple-600/30 hover:to-pink-500/30 transition-all"
          >
            Guide GitBook <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </GlassCard>
      </div>
    </section>
  );
}