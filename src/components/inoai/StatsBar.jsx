import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

async function fetchTotalHolders() {
  const res = await fetch('https://explorer.cronos.org/token/0x025f1575908d85815198390B2e5366FE754F8207#tokenHolders');
  const html = await res.text();
  const match = html.match(/<script id="__NEXT_DATA__" type="application\/json">([\s\S]*?)<\/script>/);
  if (!match) throw new Error('Cronos Explorer __NEXT_DATA__ not found');
  const data = JSON.parse(match[1]);
  const holdersCount = data?.props?.pageProps?.holdersCount;
  const total = holdersCount?.holderCount;
  if (typeof total !== 'number') throw new Error('Cronos Explorer holdersCount.holderCount missing');
  return total;
}

export default function StatsBar() {
  const [price, setPrice] = useState(null);
  const [change, setChange] = useState(null);
  const [fdv, setFdv] = useState(null);
  const [holders, setHolders] = useState(null);

  const fetchPrice = async () => {
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/inoai?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
      const data = await res.json();
      const p = data.market_data.current_price.usd;
      const c = data.market_data.price_change_percentage_24h;
      const f = data.market_data.fully_diluted_valuation?.usd ?? (p * 1_000_000_000);
      setPrice(p.toFixed(6));
      setChange(c.toFixed(2));
      setFdv(`$${Number(f).toLocaleString()}`);
    } catch (e) {
      console.error(e);
    }
  };

  const fetchHolders = async () => {
    try {
      const total = await fetchTotalHolders();
      if (total > 0) setHolders(total.toLocaleString());
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchPrice();
    fetchHolders();
    const priceInterval = setInterval(fetchPrice, 30000);
    const holdersInterval = setInterval(fetchHolders, 120000);
    return () => {
      clearInterval(priceInterval);
      clearInterval(holdersInterval);
    };
  }, []);

  const stats = [
    { label: 'INO Price', value: price ? `$${price}` : '--' },
    { label: '24h Change', value: change ? `${change}%` : '--', trend: change },
    { label: 'FDV', value: fdv ?? '--' },
    { label: 'Holders', value: holders ?? '--' },
    { label: 'Network', value: 'Cronos' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="border-y border-white/[0.06] bg-white/[0.02] backdrop-blur-sm"
    >
      <div className="px-6 py-3 flex items-center justify-center gap-0 overflow-x-auto scrollbar-hide">
        {stats.map((s, i) => (
          <React.Fragment key={i}>
            <div className="flex-shrink-0 px-5 text-center">
              <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-0.5">{s.label}</p>
              <p className={`text-sm font-semibold ${
                s.trend !== undefined && s.trend !== null
                  ? parseFloat(s.trend) >= 0 ? 'text-green-400' : 'text-red-400'
                  : 'text-white'
              }`}>
                {s.value}
              </p>
            </div>
            {i < stats.length - 1 && (
              <div className="flex-shrink-0 w-px h-6 bg-white/[0.08]" />
            )}
          </React.Fragment>
        ))}
      </div>
    </motion.div>
  );
}