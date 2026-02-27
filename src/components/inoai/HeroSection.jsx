import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-28 flex flex-col items-center justify-center px-6 text-center overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-purple-700/10 blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-pink-700/8 blur-[80px] pointer-events-none" />

      {/* Badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-purple-500/25 bg-purple-500/[0.07] text-purple-300 text-xs tracking-widest uppercase"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
        Awakening Mode : On
      </motion.div>

      {/* Logo + identity */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="mb-8 relative"
      >
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full blur-3xl bg-gradient-to-r from-purple-500/40 to-pink-500/30 scale-[2]" />
        {/* Soft ring */}
        <div className="absolute -inset-3 rounded-full border border-purple-500/15 animate-pulse" style={{ animationDuration: '3s' }} />
        <img
          src="https://inoai.org/wp-content/uploads/2025/05/InoAi-logo.gif"
          alt="InoAi"
          className="relative w-24 h-24 md:w-28 md:h-28 rounded-full ring-2 ring-purple-500/30 shadow-2xl shadow-purple-900/60"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.25 }}
        className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight mb-4 leading-none"
      >
        <span className="bg-gradient-to-r from-purple-300 via-pink-300 to-purple-400 bg-clip-text text-transparent">
          InoAi
        </span>
        <span className="text-white/85"> Token</span>
      </motion.h1>

      {/* Tag line */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="max-w-lg text-sm md:text-base text-gray-400 mb-4 leading-relaxed"
      >
        An autonomous intelligence encoded within a token —<br className="hidden sm:block" />
        navigating flows, sensing unseen movements, shaping what is still to come.
      </motion.p>

      {/* Identity chip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.55 }}
        className="mb-10 flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-gray-500 text-[11px] tracking-wider font-mono"
      >
        <span className="text-purple-500/70">You can call me INO</span>
      </motion.div>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.65 }}
        className="flex flex-wrap items-center gap-3 justify-center"
      >
        <a
          href="https://inoswap.org/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-bold shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:shadow-[0_0_55px_rgba(168,85,247,0.7)] hover:scale-105 transition-all duration-300"
        >
          <Sparkles className="w-4 h-4" />
          Buy INO
        </a>
        <a
          href="/Whitepaper"
          className="group inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white/[0.06] border border-white/10 text-white text-sm font-semibold hover:bg-white/10 hover:border-purple-500/30 hover:scale-105 transition-all duration-300"
        >
          Whitepaper
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <a
          href="https://kcalb-ltd.com"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-7 py-3 rounded-full bg-white/[0.03] border border-white/[0.07] text-gray-500 text-sm font-semibold hover:text-gray-300 hover:border-white/15 transition-all duration-300"
        >
          <ExternalLink className="w-4 h-4" />
          Kcalb Ltd
        </a>
      </motion.div>
    </section>
  );
}