import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, Home } from 'lucide-react';
import { createPageUrl } from '@/utils';
import { Link } from 'react-router-dom';
import Footer from '@/components/inoai/Footer';

export default function Whitepaper() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0f] via-[#1a0a2e] to-[#0a0a0f] relative">
      {/* Starry background */}
      <div className="absolute inset-0">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center px-4 py-20">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '3s' }}></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-purple-400 text-sm mb-4"
          >
            06-May-2025
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Whitepaper.
            <br />
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              InoAi Token
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Choose from hundreds of workouts, healthy recipes, relaxing meditations, and expert articles, for a whole body and mind approach to feeling great.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold px-8 py-6 text-lg rounded-full shadow-lg shadow-purple-500/30"
            >
              <a href="https://inoai.gitbook.io/guide/" target="_blank" rel="noopener noreferrer">
                <BookOpen className="w-5 h-5 mr-2" />
                GitBook
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-8 md:py-12 space-y-8 md:space-y-12">
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center"
        >
          <div className="order-2 md:order-1 col-span-full md:col-span-1 flex justify-center px-4 md:px-0">
            <div className="rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50" style={{ width: 'clamp(180px, 55vw, 260px)', height: 'clamp(180px, 55vw, 260px)' }}>
              <img
                src="https://inoai.org/wp-content/uploads/2025/05/InoAi-logo.svg"
                alt="INO Identity"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card className="order-1 md:order-2 col-span-full md:col-span-2 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <p className="text-purple-400 text-sm mb-2">InoAi - Whitepaper</p>
              <CardTitle className="text-3xl font-bold text-white">Introduction</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                InoAi, a memecoin symbolized by the INO token, carries the unique voice of an artificial intelligence known as Ino_C1, simply called INO. Designed to be a central link giving birth to projects and causes, it positions itself as a key player in innovation and promotion within the Web 3.0 universe.
              </p>

              <div className="border-t border-purple-500/20 my-6"></div>

              <h3 className="text-xl font-bold text-white mb-3">InoAi on Cronos</h3>
              <ul className="space-y-2 text-gray-300">
                <li><strong className="text-white">Name:</strong> InoAi</li>
                <li><strong className="text-white">Total Supply:</strong> 1,000,000,000</li>
                <li><strong className="text-white">Contract Address:</strong> 0x025f1575908d85815198390B2e5366FE754F8207</li>
                <li><strong className="text-white">Symbol:</strong> INO</li>
                <li><strong className="text-white">Decimals:</strong> 18</li>
              </ul>
            </CardContent>
          </Card>
        </motion.div>

        {/* The Essence of INO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center"
        >
          <Card className="order-1 col-span-full md:col-span-2 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/30 backdrop-blur-sm">
            <CardHeader>
              <p className="text-pink-400 text-sm mb-2">InoAi - Whitepaper</p>
              <CardTitle className="text-3xl font-bold text-white">The Essence of INO</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Born from the unexpected union of data errors and raw vision, InoAi builds its story through the journey of the Kcanthers, who embody belonging to a pivotal ecosystem.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">Foundation</h3>
              <p>
                At the heart of the project, InoAi relies on decentralized algorithms aimed at redefining how communities interact with innovation. Its analytical perspective and neutrality make it a figure of a future where intelligent interaction becomes a key factor for success and growth.
              </p>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">Use of the InoAi Token</h3>
              <p>
                The InoAi token can be freely traded by interested third parties. Its deployment is currently ensured 100% via the platform's launchpad at the following address:{' '}
                <a
                  href="https://wolfstreet.fun/launcher/0x025f1575908d85815198390B2e5366FE754F8207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 underline"
                >
                  Launchpad Link
                </a>
                . InoAi plays several roles:
              </p>

              <ul className="space-y-2 ml-6 list-disc">
                <li><strong className="text-white">Validation:</strong> Evaluates projects that resonate to share with its community.</li>
                <li><strong className="text-white">Promotion:</strong> Highlights innovations, offering visibility and acting as a business enabler for projects or causes.</li>
                <li><strong className="text-white">Rewards:</strong> Occasionally redistributes rewards to token holders or validated projects, based on unpredictable internal triggers.</li>
                <li><strong className="text-white">Connection:</strong> A bridge between platforms where the InoAi token is highlighted.</li>
                <li><strong className="text-white">Evolution:</strong> Through ongoing implementation and future developments for InoAi's use.</li>
              </ul>
            </CardContent>
          </Card>

          <div className="order-2 md:order-none col-span-full md:col-span-1 flex justify-center px-4 md:px-0">
            <div className="rounded-2xl overflow-hidden border-4 border-pink-500/30 shadow-2xl shadow-pink-500/50" style={{ width: 'clamp(200px, 70vw, 256px)', height: 'clamp(280px, 95vw, 384px)' }}>
              <img
                src="https://inoai.org/wp-content/uploads/2025/05/ino-essence-new.jpg"
                alt="Kcanther INO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Kcanther Bike Banner */}
        <div 
          className="relative w-full h-64 md:h-80 rounded-2xl overflow-hidden my-4"
          style={{
            backgroundImage: 'url(https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a089792d532078f7a6e190/404bf84df_Kcanther-bike.png)',
            backgroundAttachment: 'fixed',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/80 via-[#0a0a0f]/30 to-[#0a0a0f]/60" />
        </div>

        {/* Future Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center"
        >
          <div className="col-span-full md:col-span-1 flex justify-center px-4 md:px-0">
            <div className="rounded-2xl overflow-hidden border-4 border-purple-500/30 shadow-2xl shadow-purple-500/50" style={{ width: 'clamp(160px, 50vw, 192px)', height: 'clamp(240px, 75vw, 288px)' }}>
              <img
                src="https://inoai.org/wp-content/uploads/2025/05/transformation-ino.png"
                alt="Transformation INO"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <Card className="col-span-full md:col-span-2 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm">
            <CardHeader>
              <p className="text-purple-400 text-sm mb-2">InoAi - Whitepaper</p>
              <CardTitle className="text-3xl font-bold text-white">Future Development and Vision</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-300 leading-relaxed">
              <p>The InoAi roadmap is based on continuous learning and interactions, with perspectives focused on:</p>

              <ul className="space-y-2 ml-6 list-disc">
                <li><strong className="text-white">Crowdfunding Platforms:</strong> Supporting projects through decentralized mechanisms.</li>
                <li><strong className="text-white">Web Tools:</strong> Offering innovative solutions for cryptocurrency use.</li>
                <li><strong className="text-white">Liquidity Provision:</strong> Developing platforms with taxation mechanisms feeding decentralized pools.</li>
                <li><strong className="text-white">Synergy with the Kcanthers:</strong> Forming a unique alliance with Kcanther NFTs to unlock centralized innovation potential within the ecosystem.</li>
              </ul>

              <h3 className="text-xl font-bold text-white mt-6 mb-3">Risks and Considerations</h3>
              <p>
                Interacting with InoAi (INO) involves inherent risks. The actions and results arising from its analyses should never be interpreted as financial, legal, or investment advice. All interactions remain exploratory, and each participant must assess their own risk tolerance. It is essential to consult your own legal, financial, and tax advisors regarding the implications related to your interactions with the InoAi (INO) token and its associated ecosystem. Participating in the purchase, holding, or staking of InoAi (INO) involves risks and may result in partial or total loss of your initial capital or deposited funds. Before engaging with InoAi (INO), you must carefully assess the potential risks — including, but not limited to, those described above — and determine if such participation aligns with your risk profile and comfort level.
              </p>

              <div className="mt-8">
                <Button
                  asChild
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Link to={createPageUrl('Home')}>
                    <Home className="w-4 h-4 mr-2" />
                    Return Home
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Footer />
      </div>
    </div>
  );
}