import React from 'react';
import { motion } from 'framer-motion';
import AboutSection from './AboutSection';
import Tokenomics from './Tokenomics';
import TradeChart from './TradeChart';
import WhereToBuy from './WhereToBuy';
import SphereOfAction from './SphereOfAction';
import Roadmap from './Roadmap';
import MoreAbout from './MoreAbout';
import Connections from './Connections';
import Disclaimers from './Disclaimers';
import PriceConverter from './PriceConverter';

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, delay },
});

export default function MainGrid() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-3">

      {/* Row 1: Tokenomics */}
      <motion.div {...fade(0)}>
        <Tokenomics />
      </motion.div>

      {/* Row 2: About + Sphere */}
      <div className="grid md:grid-cols-5 gap-3">
        <motion.div {...fade(0.05)} className="md:col-span-3">
          <AboutSection />
        </motion.div>
        <motion.div {...fade(0.1)} className="md:col-span-2">
          <SphereOfAction />
        </motion.div>
      </div>

      {/* Row 3: Chart + Converter */}
      <div className="grid md:grid-cols-3 gap-3">
        <motion.div {...fade(0.05)} className="md:col-span-2">
          <TradeChart />
        </motion.div>
        <motion.div {...fade(0.1)} className="md:col-span-1">
          <PriceConverter />
        </motion.div>
      </div>

      {/* Row 4: Where to Buy */}
      <motion.div {...fade(0)}>
        <WhereToBuy />
      </motion.div>

      {/* Row 5: Roadmap + More About */}
      <div className="grid md:grid-cols-2 gap-3">
        <motion.div {...fade(0.05)}>
          <Roadmap />
        </motion.div>
        <motion.div {...fade(0.1)}>
          <MoreAbout />
        </motion.div>
      </div>

      {/* Row 6: Connections + Disclaimers */}
      <div className="grid md:grid-cols-2 gap-3">
        <motion.div {...fade(0.05)}>
          <Connections />
        </motion.div>
        <motion.div {...fade(0.1)}>
          <Disclaimers />
        </motion.div>
      </div>

    </div>
  );
}