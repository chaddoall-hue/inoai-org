import React from "react";
import { motion } from "framer-motion";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";

const signals = [
  { name: "X", url: "https://x.com/Ino_C1", img: "https://inoai.org/wp-content/uploads/2025/05/logo-black.png" },
  { name: "LinkedIn", url: "https://www.linkedin.com/showcase/ino-c1/", img: "https://inoai.org/wp-content/uploads/2025/12/linkedin-logo.png" },
];

const partners = [
  { name: "Xitcoin", url: "https://xitcoin.org/", img: "https://inoai.org/wp-content/uploads/2025/05/transparent-logo.png" },
  { name: "Kcanther", url: "https://x.com/kcanther_org", img: "https://inoai.org/wp-content/uploads/2025/05/Kcanther-Transparent.png" },
  { name: "Discord", url: "https://discord.gg/wFrHx3tAD8", img: "https://inoai.org/wp-content/uploads/2025/05/logo-discord.png" },
  { name: "Kcalb Ltd", url: "https://kcalb-ltd.com/", img: "https://inoai.org/wp-content/uploads/2025/11/kcalb-logo.webp" },
];

function SocialGrid({ title, items }) {
  return (
    <div className="mb-8 last:mb-0">
      <p className="text-sm font-medium text-white/30 uppercase tracking-widest mb-4">{title}</p>
      <div className="flex flex-wrap gap-3">
        {items.map((item, i) => (
          <motion.a
            key={i}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group w-14 h-14 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center hover:border-purple-500/30 hover:bg-white/[0.08] hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all duration-300"
            title={item.name}
          >
            <img
              src={item.img}
              alt={item.name}
              className="w-7 h-7 object-contain brightness-0 invert opacity-50 group-hover:opacity-90 transition-opacity"
            />
          </motion.a>
        ))}
      </div>
    </div>
  );
}

export default function ConnectionsSection() {
  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>Connection</SectionTitle>
        <GlassCard>
          <SocialGrid title="Signals Beyond" items={signals} />
          <SocialGrid title="Linking Space" items={partners} />
        </GlassCard>
      </div>
    </section>
  );
}