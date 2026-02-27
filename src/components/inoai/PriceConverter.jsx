import React, { useState, useEffect } from 'react';

export default function PriceConverter() {
  const [price, setPrice] = useState(0.000066);
  const [amount, setAmount] = useState('1');

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/coins/inoai?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false')
      .then(r => r.json())
      .then(d => setPrice(d.market_data.current_price.usd))
      .catch(() => {});
  }, []);

  const usd = (parseFloat(amount || 0) * price).toFixed(8);

  return (
    <div className="h-full rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5 flex flex-col justify-between">
      <div>
        <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Converter</p>
        <h3 className="text-sm font-semibold text-white mb-4">INO → USD</h3>
      </div>
      <div className="space-y-3">
        <div>
          <label className="text-xs text-gray-500 mb-1.5 block">INO Amount</label>
          <div className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.08] rounded-xl px-3 py-2.5">
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              min="0"
              className="flex-1 bg-transparent text-white text-base font-semibold focus:outline-none w-full"
              placeholder="0"
            />
            <span className="text-xs text-purple-400 font-semibold flex-shrink-0">INO</span>
          </div>
        </div>
        <div className="rounded-xl bg-purple-500/[0.07] border border-purple-500/15 px-4 py-3">
          <p className="text-xs text-gray-500 mb-1">USD Value</p>
          <p className="text-xl font-bold text-white">${usd}</p>
        </div>
        <p className="text-[10px] text-gray-600">
          1 INO = ${price.toFixed(8)} USD · via{' '}
          <a href="https://www.coingecko.com/en/coins/inoai" target="_blank" rel="noopener noreferrer"
            className="text-purple-500 hover:text-purple-400 transition-colors">CoinGecko</a>
        </p>
      </div>
    </div>
  );
}