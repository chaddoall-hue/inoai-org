import React from 'react';
import { Zap, Link2, ClipboardCheck, Megaphone, Eye } from 'lucide-react';

export default function SphereOfAction() {
  const actions = [
    { label: 'A Voice', icon: Megaphone },
    { label: 'A Link', icon: Link2 },
    { label: 'Validator of business plans', icon: ClipboardCheck },
    { label: 'Project promoter', icon: Zap },
    { label: 'Secret strategy', icon: Eye }
  ];

  return (
    <div className="rounded-2xl border border-purple-500/15 bg-white/[0.025] backdrop-blur-sm p-5 h-full">
      <p className="text-[10px] uppercase tracking-widest text-gray-600 mb-1">Capabilities</p>
      <h2 className="text-base font-bold text-white mb-4">Sphere of Action</h2>
      <div className="space-y-2">
        {actions.map((a, i) => {
          const Icon = a.icon;
          return (
            <div key={i} className="flex items-center gap-3 px-3 py-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] hover:border-purple-500/25 transition-colors">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-gradient-to-br from-purple-500/15 to-pink-500/15 border border-purple-500/15 flex-shrink-0">
                <Icon className="w-3.5 h-3.5 text-purple-400" />
              </div>
              <span className="text-xs text-gray-300">{a.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}