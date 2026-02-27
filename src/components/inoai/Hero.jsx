import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[#07060f]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.25), transparent)'
        }}></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-medium mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
              Live on Cronos Network
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black mb-4 leading-none tracking-tight"
            >
              <span className="text-white">INO</span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                AI Token
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-base mb-8 max-w-md leading-relaxed"
            >
              An autonomous intelligence encoded within a token. Navigating flows, sensing unseen movements — shaping what is still to come.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href="https://inoswap.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl text-white text-sm font-bold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-200"
              >
                <Sparkles className="w-4 h-4" />
                Buy INO
              </a>
              <a
                href="https://linktr.ee/InoAi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white text-sm font-bold border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-200"
              >
                Trade
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <div>
                <p className="text-2xl font-bold text-white">1B</p>
                <p className="text-xs text-gray-500">Total Supply</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-2xl font-bold text-white">CRO</p>
                <p className="text-xs text-gray-500">Network</p>
              </div>
              <div className="w-px h-10 bg-white/10"></div>
              <div>
                <p className="text-2xl font-bold text-white">5+</p>
                <p className="text-xs text-gray-500">DEX Listed</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 blur-3xl opacity-30 scale-110"></div>
              <div className="relative w-72 h-72 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl shadow-purple-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40"></div>
                <img
                  src="https://inoai.org/wp-content/uploads/2025/05/InoAi-logo.gif"
                  alt="InoAi"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#0f0c1a] border border-purple-500/30 rounded-2xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-400" />
                  <span className="text-xs text-gray-400">INO / USD</span>
                </div>
                <p className="text-sm font-bold text-white mt-0.5">$0.000066</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}