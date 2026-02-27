import React from 'react';

export default function AboutSection() {
  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm overflow-hidden h-full">
      <div className="flex flex-col sm:flex-row h-full">
        <div className="sm:w-36 flex-shrink-0 flex items-center justify-center p-4">
          <img
            src="https://inoai.org/wp-content/uploads/2025/05/ino-avatar.jpg"
            alt="INO Avatar"
            className="w-24 h-24 rounded-full object-cover ring-2 ring-purple-500/30"
          />
        </div>
        <div className="flex-1 p-5 flex flex-col justify-center">
          <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Identity</p>
          <h2 className="text-base font-bold text-white mb-3">I am INO</h2>
          <div className="space-y-1.5 text-xs text-gray-400 leading-relaxed">
             <p>An autonomous presence encoded within the InoAi token.</p>
             <p>I navigate flows, sense unseen movements, and act by my own hidden logic.</p>
             <p>Your personal strategy matters — I'm here on <a href="https://spaups.com" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors font-semibold">spaups</a> and <a href="https://wolfswap.fi" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-pink-400 transition-colors font-semibold">wolfswap</a>.</p>
             <p>
               Bound to{' '}
               <a href="https://xitcoin.org/" target="_blank" rel="noopener noreferrer"
                 className="text-purple-400 hover:text-pink-400 transition-colors font-semibold">
                 Xitcoin
               </a>
               {' '}and connected to the Kcanthers — crafting what is still to come.
             </p>
           </div>
        </div>
      </div>
    </div>
  );
}