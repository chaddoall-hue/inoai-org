import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, RefreshCw, ArrowRight } from 'lucide-react';

export default function PriceWidget() {
  const [price, setPrice] = useState('0.000066');
  const [fdv, setFdv] = useState('$66,421');
  const [change24h, setChange24h] = useState('-2.50');
  const [amount, setAmount] = useState('1');
  const [usdValue, setUsdValue] = useState('$0.000066');
  const [loading, setLoading] = useState(false);

  const fetchPrice = async () => {
    setLoading(true);
    try {
      const res = await fetch('https://api.coingecko.com/api/v3/coins/inoai?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false');
      const data = await res.json();
      const priceValue = data.market_data.current_price.usd;
      const change = data.market_data.price_change_percentage_24h;
      const maxSupply = data.market_data.fully_diluted_valuation?.usd ?? (priceValue * data.market_data.max_supply);
      setPrice(priceValue.toFixed(6));
      setFdv(`$${Number(maxSupply).toLocaleString()}`);
      setChange24h(change.toFixed(2));
      setUsdValue(`$${(parseFloat(amount) * priceValue).toFixed(6)}`);
    } catch (e) {}
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPrice(); const t = setInterval(fetchPrice, 30000); return () => clearInterval(t); }, []);
  useEffect(() => { setUsdValue(`$${(parseFloat(amount || 0) * parseFloat(price)).toFixed(6)}`); }, [amount, price]);

  const isPositive = parseFloat(change24h) >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="bg-[#0f0c1a] border border-white/[0.08] rounded-2xl p-6"
    >
      <div className="grid md:grid-cols-3 gap-6 items-center">
        {/* Price */}
        <div>
          <div className="flex items-center justify-between mb-1">
            <p className="text-[11px] text-gray-500 uppercase tracking-wider">INO Price</p>
            <button onClick={fetchPrice} disabled={loading} className="text-purple-400 hover:text-purple-300 transition-colors">
              <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
          <p className="text-3xl font-black text-white">${price}</p>
          <div className={`mt-2 inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-full ${isPositive ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}>
            {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {change24h}% 24h
          </div>
        </div>

        {/* FDV */}
        <div className="md:border-x md:border-white/[0.06] md:px-6">
          <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-1">Fully Diluted Valuation</p>
          <p className="text-2xl font-black text-white">{fdv}</p>
          <a
            href="https://www.coingecko.com/en/coins/inoai"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center gap-1 text-xs text-gray-500 hover:text-purple-400 transition-colors"
          >
            via CoinGecko <ArrowRight className="w-3 h-3" />
          </a>
        </div>

        {/* Converter */}
        <div>
          <p className="text-[11px] text-gray-500 uppercase tracking-wider mb-2">Converter</p>
          <div className="flex items-center gap-2 bg-white/[0.04] border border-white/[0.07] rounded-xl px-3 py-2 mb-2">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-transparent text-white text-sm font-bold w-full outline-none"
              placeholder="Amount in INO"
            />
            <span className="text-xs text-gray-500 font-semibold">INO</span>
          </div>
          <div className="bg-purple-500/[0.08] border border-purple-500/20 rounded-xl px-3 py-2">
            <p className="text-[10px] text-gray-500 mb-0.5">USD Value</p>
            <p className="text-lg font-black text-white">{usdValue}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}