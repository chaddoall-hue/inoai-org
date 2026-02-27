import React from 'react';

export default function Connections() {
  const socials = [
    { name: 'X (Twitter)', url: 'https://x.com/Ino_C1', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/57/X_logo_2023_%28white%29.png' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/showcase/ino-c1/', icon: 'https://cdn-icons-png.flaticon.com/512/174/174857.png' }
  ];
  const partners = [
    { name: 'InoSwap', url: 'https://inoswap.org/', icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a089792d532078f7a6e190/eea4d74e7_inoswap-icon.png' },
    { name: 'Xitcoin', url: 'https://xitcoin.org/', icon: 'https://inoai.org/wp-content/uploads/2025/05/transparent-logo.png' },
    { name: 'Kcanther', url: 'https://x.com/kcanther_org', icon: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a089792d532078f7a6e190/138b2aab2_kcanther.png' },
    { name: 'Discord', url: 'https://discord.gg/wFrHx3tAD8', icon: 'https://inoai.org/wp-content/uploads/2025/05/logo-discord.png' },
    { name: 'Kcalb Ltd', url: 'https://kcalb-ltd.com/', icon: 'https://inoai.org/wp-content/uploads/2025/11/kcalb-logo.webp' }
  ];

  const IconLink = ({ item, rounded = 'rounded-lg', padding = 'p-2' }) => (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      title={item.name}
      className={`w-9 h-9 ${rounded} flex items-center justify-center transition-all hover:-translate-y-0.5 hover:scale-105 ${padding} overflow-hidden`}
    >
      <img
        src={item.icon}
        alt={item.name}
        className="w-full h-full object-contain"
      />
    </a>
  );

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5">
      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-4">Community</p>
      <div className="space-y-4">
        <div>
          <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-wider">Signals Beyond</p>
          <div className="flex gap-2">
            {socials.map((s, i) => <IconLink key={i} item={s} rounded="rounded-lg" padding="p-2" />)}
          </div>
        </div>
        <div className="h-px bg-white/[0.06]" />
        <div>
          <p className="text-[10px] text-gray-600 mb-2 uppercase tracking-wider">Linking Space</p>
          <div className="flex flex-wrap gap-2">
            {partners.map((p, i) => <IconLink key={i} item={p} rounded="rounded-xl" padding="p-1.5" />)}
          </div>
        </div>
      </div>
    </div>
  );
}