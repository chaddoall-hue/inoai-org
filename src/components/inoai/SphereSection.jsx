import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { Check } from "lucide-react";

const items = [
  "A Voice",
  "A Link",
  "Validator of business plans",
  "Project promoter",
  "Secret strategy",
];

export default function SphereSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>My Sphere of Action</SectionTitle>
        <GlassCard>
          <ul className="space-y-3">
            {items.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 text-purple-400" />
                </div>
                <span className="text-white/70 text-base">{item}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </section>
  );
}