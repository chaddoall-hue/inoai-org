import React, { useState, useEffect, useCallback } from "react";
import GlassCard from "./GlassCard";
import SectionTitle from "./SectionTitle";
import { TrendingUp, TrendingDown, RefreshCw, ExternalLink } from "lucide-react";

export default function PriceSection() {
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [amount, setAmount] = useState(1);

  const fetchPrice = useCallback(async () => {
    try {
      const res = await fetch(
        "https://api.coingecko.com/api/v3/coins/inoai?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false"
      );
      const data = await res.json();
      setPriceData({
        price: data.market_data.current_price.usd,
        change24h: data.market_data.price_change_percentage_24h,
        fdv: data.market_data.fully_diluted_valuation?.usd,
      });
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchPrice();
    const interval = setInterval(fetchPrice, 30000);
    return () => clearInterval(interval);
  }, [fetchPrice]);

  const usdValue = priceData ? (amount * priceData.price).toFixed(6) : "—";
  const isPositive = priceData?.change24h >= 0;

  return (
    <section className="px-4 pb-16">
      <div className="max-w-6xl mx-auto">
        <SectionTitle>InoAi (INO) Price & Valuation</SectionTitle>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Price Card */}
          <GlassCard>
            <div className="flex items-center justify-between mb-5">
              <h3 className="text-lg font-semibold text-white">InoAi (INO)</h3>
              <button onClick={fetchPrice} className="p-2 rounded-lg hover:bg-white/5 transition-colors">
                <RefreshCw className={`w-4 h-4 text-white/40 ${loading ? "animate-spin" : ""}`} />
              </button>
            </div>
            {priceData ? (
              <>
                <p className="text-3xl font-bold text-white mb-1">
                  ${priceData.price?.toFixed(6)}
                  <span className="text-sm text-white/40 font-normal ml-2">USD</span>
                </p>
                <div className="flex items-center gap-4 mt-4 text-sm">
                  <span className="text-white/40">
                    FDV: <span className="text-white/60">${priceData.fdv?.toLocaleString() || "N/A"}</span>
                  </span>
                  <span className={`flex items-center gap-1 ${isPositive ? "text-green-400" : "text-red-400"}`}>
                    {isPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                    {priceData.change24h?.toFixed(2)}%
                  </span>
                </div>
              </>
            ) : (
              <div className="h-20 flex items-center">
                <div className="w-40 h-8 bg-white/5 rounded animate-pulse" />
              </div>
            )}
          </GlassCard>

          {/* Converter Card */}
          <GlassCard delay={0.1}>
            <h3 className="text-lg font-semibold text-white mb-5">INO → USD Converter</h3>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              min="0"
              step="0.01"
              className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white text-lg focus:outline-none focus:border-purple-500/40 transition-colors mb-4"
            />
            <p className="text-2xl font-bold text-white">
              ${usdValue}
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/30">
              <span>Powered by</span>
              <a href="https://www.coingecko.com/en/coins/inoai" target="_blank" rel="noopener noreferrer">
                <img
                  src="https://inoai.org/wp-content/uploads/2025/05/coingecko-logo-transparent.png"
                  alt="CoinGecko"
                  className="h-5 opacity-60 hover:opacity-100 transition-opacity"
                />
              </a>
            </div>
          </GlassCard>
        </div>

        <div className="mt-4 flex justify-center">
          <a
            href="https://www.coingecko.com/en/coins/inoai"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            View on CoinGecko <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}