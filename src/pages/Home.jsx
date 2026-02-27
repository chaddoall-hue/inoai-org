import React from 'react';
import HeroSection from '@/components/inoai/HeroSection';
import StatsBar from '@/components/inoai/StatsBar';
import MainGrid from '@/components/inoai/MainGrid';
import StarryBackground from '@/components/inoai/StarryBackground';
import Footer from '@/components/inoai/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#06040f] relative overflow-x-hidden">
      <StarryBackground />
      <div className="relative z-10 flex flex-col min-h-screen">
        <HeroSection />
        <StatsBar />
        <MainGrid />
        <Footer />
      </div>
    </div>
  );
}