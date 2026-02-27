import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { ArrowRight, Info } from "lucide-react";

const roadmapItems = [
  { label: "Kcanther Collection", active: true },
  { label: "Crowdfunding Platform", active: false },
  { label: "Fundraising Platform", active: false },
  { label: "Market Place Platform", active: false },
  { label: "More To Come", info: true },
];

export default function RoadmapSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Road Map</SectionTitle>
        <GlassCard>
          <div className="space-y-0">
            {roadmapItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-4 py-3.5 border-b border-white/[0.04] last:border-0"
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${
                  item.info
                    ? "bg-purple-500/10"
                    : "bg-gradient-to-br from-purple-500/20 to-pink-500/20"
                }`}>
                  {item.info ? (
                    <Info className="w-4 h-4 text-purple-400" />
                  ) : (
                    <ArrowRight className="w-4 h-4 text-purple-400" />
                  )}
                </div>
                <span className="text-white/70 text-base">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
}