import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { isSynergyCampaignActive } from './SynergyPopup';
import { trackSynergyEvent } from '../utils/synergyTracking';

interface SynergyTopBannerProps {
  onOpenPopup?: () => void;
}

export default function SynergyTopBanner({ onOpenPopup }: SynergyTopBannerProps) {
  if (!isSynergyCampaignActive()) {
    return null;
  }

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    trackSynergyEvent('view', { source: 'top_banner' });
    if (onOpenPopup) {
      onOpenPopup();
    } else if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('vrn:open_synergy_popup'));
    }
  };

  return (
    <div
      role="banner"
      aria-label="ITServe Synergy 2026 Badge Sponsor Announcement"
      onClick={handleClick}
      className="w-full bg-gradient-to-r from-[#071326] via-[#0e2448] to-[#071326] text-white border-b border-amber-500/30 px-3 py-2 sm:py-2.5 text-xs sm:text-[13px] font-medium cursor-pointer transition-colors hover:bg-slate-900 group"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center flex-wrap">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#E5A93C] text-slate-950 font-black text-[10px] uppercase tracking-wider shrink-0 shadow-xs">
          <Sparkles size={10} className="fill-slate-950" />
          Badge Sponsor
        </span>

        <span className="text-slate-400 hidden sm:inline">·</span>

        <span className="font-bold text-white tracking-tight">
          Meet us at Booth 64
        </span>

        <span className="text-slate-400">·</span>

        <span className="text-slate-300">
          ITServe Synergy, Chicago
        </span>

        <span className="text-slate-400">·</span>

        <span className="text-amber-400 font-bold">
          Oct 29–30
        </span>

        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-300 group-hover:text-blue-200 transition-colors ml-1 underline underline-offset-2">
          View details
          <ArrowRight size={12} className="group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </div>
  );
}
