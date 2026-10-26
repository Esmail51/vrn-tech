import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router';
import { X, Calendar, MapPin } from 'lucide-react';
import { CLIENT_LOGOS } from './ClientLogos';
import { trackSynergyEvent } from '../utils/synergyTracking';
import { downloadSynergyCalendarInvite } from '../utils/calendarGenerator';
import naveenHeadshot from '../../imports/NaveenValeti-Black (1).jpg';
import julieHeadshot from '../../imports/Julie Gerrard 2026 Headshot.png';
import sandeepHeadshot from '../../imports/02 GV1A1460.jpg.jpeg';

interface SynergyPopupProps {
  forceOpen?: boolean;
  onClose?: () => void;
}

export const SYNERGY_STORAGE_KEY_PERMANENT = 'vrn_synergy26';
export const SYNERGY_STORAGE_KEY_DISMISSED = 'vrn_synergy26_dismissed_until';

// Expiration date: Oct 31, 2026, 11:59:59 PM Central Time (UTC-5 => 2026-11-01T04:59:59Z)
export function isSynergyCampaignActive(): boolean {
  const expirationTimestamp = new Date('2026-11-01T04:59:59Z').getTime();
  return Date.now() <= expirationTimestamp;
}

export function shouldShowSynergyPopup(): boolean {
  if (!isSynergyCampaignActive()) return false;
  try {
    const permanent = localStorage.getItem(SYNERGY_STORAGE_KEY_PERMANENT);
    if (permanent === 'true' || permanent === 'never' || permanent === 'dismissed') {
      return false;
    }
    const dismissedUntil = localStorage.getItem(SYNERGY_STORAGE_KEY_DISMISSED);
    if (dismissedUntil && Date.now() < parseInt(dismissedUntil, 10)) {
      return false;
    }
    return true;
  } catch (e) {
    return true;
  }
}

export default function SynergyPopup({ forceOpen, onClose }: SynergyPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);
  const hasTriggeredRef = useRef(false);

  // Check route whitelist: Home page only, never on /contact, /apply, or legal pages
  const isHomePage = location.pathname === '/';
  const isRestrictedPage =
    location.pathname.startsWith('/contact') ||
    location.pathname.startsWith('/apply') ||
    location.pathname.startsWith('/privacy') ||
    location.pathname.startsWith('/terms') ||
    location.pathname.startsWith('/compliance');

  const triggerModal = useCallback(
    (reason: 'time_trigger' | 'scroll_trigger' | 'manual') => {
      if (hasTriggeredRef.current && reason !== 'manual') return;
      if (!isSynergyCampaignActive()) return;
      if (reason !== 'manual' && !shouldShowSynergyPopup()) return;
      if (reason !== 'manual' && (!isHomePage || isRestrictedPage)) return;

      hasTriggeredRef.current = true;
      previousActiveElement.current = document.activeElement as HTMLElement;
      setIsOpen(true);
      trackSynergyEvent('view', { source: reason });
    },
    [isHomePage, isRestrictedPage]
  );

  // If forceOpen prop changes (e.g. from site banner click)
  useEffect(() => {
    if (forceOpen) {
      triggerModal('manual');
    }
  }, [forceOpen, triggerModal]);

  // Listen for custom open event (from top banner or any trigger)
  useEffect(() => {
    const handleOpenEvent = () => {
      triggerModal('manual');
    };
    window.addEventListener('vrn:open_synergy_popup', handleOpenEvent);
    return () => {
      window.removeEventListener('vrn:open_synergy_popup', handleOpenEvent);
    };
  }, [triggerModal]);

  // Timed trigger: 4 seconds after page load OR 50% scroll
  useEffect(() => {
    if (!isHomePage || isRestrictedPage || !shouldShowSynergyPopup()) return;

    // 1. 4-second timer
    const timer = setTimeout(() => {
      triggerModal('time_trigger');
    }, 4000);

    // 2. 50% scroll trigger
    const handleScroll = () => {
      if (hasTriggeredRef.current) return;
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (docHeight > 0) {
        const scrollPercent = (scrollTop / docHeight) * 100;
        if (scrollPercent >= 50) {
          triggerModal('scroll_trigger');
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isHomePage, isRestrictedPage, triggerModal]);

  // Close handlers
  const handleClose = useCallback(
    (method: 'close_button' | 'backdrop' | 'escape' | 'dont_show_again') => {
      setIsOpen(false);
      trackSynergyEvent('dismiss', { method });

      if (method === 'dont_show_again') {
        try {
          localStorage.setItem(SYNERGY_STORAGE_KEY_PERMANENT, 'true');
        } catch (e) {
          /* ignore */
        }
      } else {
        // Standard close: dismiss for 7 days
        try {
          const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000;
          localStorage.setItem(
            SYNERGY_STORAGE_KEY_DISMISSED,
            (Date.now() + sevenDaysInMs).toString()
          );
        } catch (e) {
          /* ignore */
        }
      }

      if (onClose) onClose();

      // Return focus to previous active element
      if (previousActiveElement.current && typeof previousActiveElement.current.focus === 'function') {
        previousActiveElement.current.focus();
      }
    },
    [onClose]
  );

  // Esc key and Focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose('escape');
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // Initial focus on dialog container without causing any inner scroll
    const focusTimer = setTimeout(() => {
      if (modalRef.current) {
        modalRef.current.scrollTop = 0;
        modalRef.current.focus({ preventScroll: true });
      }
    }, 30);

    // Prevent background scrolling while modal is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      clearTimeout(focusTimer);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handleBookMeeting = () => {
    trackSynergyEvent('book_meeting', { source: 'popup' });
    handleClose('close_button');
    navigate('/contact?ref=synergy26');
  };

  const handleAddToCalendar = () => {
    trackSynergyEvent('add_to_calendar', { source: 'popup' });
    downloadSynergyCalendarInvite();
  };

  const handleLinkedInConnect = (name: string, url: string) => {
    trackSynergyEvent('linkedin_connect', { person: name, source: 'popup' });
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const teamMembers = [
    {
      initials: 'NV',
      name: 'Naveen Valeti',
      role: 'Founder & CEO',
      image: naveenHeadshot,
      linkedin: 'https://www.linkedin.com/in/naveenvaleti/',
    },
    {
      initials: 'JG',
      name: 'Julie Gerrard',
      role: 'Sr. Vice President, Growth & Strategy',
      image: julieHeadshot,
      linkedin: 'https://www.linkedin.com/in/juliegerrard/',
    },
    {
      initials: 'SP',
      name: 'Sandeep Polkam',
      role: 'Account Manager',
      image: sandeepHeadshot,
      linkedin: 'https://www.linkedin.com/in/sandeep-kumar-polkam-80ba055b/',
    },
  ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-0 sm:p-4 lg:p-6 bg-slate-950/75 backdrop-blur-sm animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose('backdrop');
        }
      }}
      role="presentation"
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="synergy-dialog-title"
        aria-describedby="synergy-dialog-desc"
        tabIndex={-1}
        className="relative w-full max-w-[1040px] max-h-[94vh] sm:max-h-[92vh] bg-white text-slate-900 rounded-t-[2rem] sm:rounded-3xl shadow-2xl overflow-y-auto outline-none border border-slate-700/30 flex flex-col transition-all duration-300"
      >
        {/* Mobile Drag Bar */}
        <div className="sm:hidden w-full pt-3 pb-1 flex justify-center bg-[#071326]">
          <div className="w-12 h-1 bg-slate-600 rounded-full" />
        </div>

        {/* ─── Top Section: Dark Event Header with Badge Graphic ─── */}
        <div className="relative bg-gradient-to-br from-[#071326] via-[#0b1c36] to-[#071326] text-white px-6 py-6 sm:px-8 sm:py-7 lg:px-9 lg:py-7 overflow-hidden shrink-0">
          {/* Subtle background glow */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 -right-12 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            type="button"
            id="synergy-close-btn"
            onClick={() => handleClose('close_button')}
            aria-label="Close dialog"
            className="absolute top-4 right-4 sm:top-5 sm:right-5 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-800/80 hover:bg-slate-700/90 text-slate-300 hover:text-white flex items-center justify-center transition-all cursor-pointer border border-slate-700/60 focus:ring-2 focus:ring-amber-400 focus:outline-none"
          >
            <X size={18} />
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            {/* Left Column: Event Info */}
            <div className="lg:col-span-8 space-y-3">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#E5A93C] text-slate-950 text-[10px] sm:text-[11px] font-black uppercase tracking-wider shadow-sm">
                  Badge Sponsor
                </span>
                <span className="inline-flex items-center px-3 py-1 rounded-full border border-[#E5A93C] text-[#E5A93C] text-[10px] sm:text-[11px] font-black uppercase tracking-wider">
                  Solutions Partner
                </span>
              </div>

              {/* Title */}
              <h2
                id="synergy-dialog-title"
                className="text-2xl sm:text-3xl lg:text-[32px] font-black tracking-tight text-white leading-[1.15]"
              >
                Meet VRN at ITServe Synergy 2026
              </h2>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs sm:text-sm font-medium text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <Calendar size={15} className="text-[#E5A93C]" />
                  October 29–30, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin size={15} className="text-[#E5A93C]" />
                  Chicago, Illinois
                </span>
              </div>

              {/* Description */}
              <p
                id="synergy-dialog-desc"
                className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-xl"
              >
                Data, cloud and AI modernization consulting — plus MSP, VMS and contingent workforce
                programs built compliance-first for the enterprise.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  id="synergy-book-meeting-btn"
                  onClick={handleBookMeeting}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-[#1d68f0] hover:bg-[#1554c9] text-white font-bold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 cursor-pointer focus:ring-2 focus:ring-white focus:outline-none"
                >
                  Book a meeting at Booth 64
                </button>

                <button
                  type="button"
                  id="synergy-add-calendar-btn"
                  onClick={handleAddToCalendar}
                  className="px-4 sm:px-5 py-2.5 sm:py-3 rounded-lg bg-[#E5A93C] hover:bg-[#d99b26] text-slate-950 font-bold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg focus:ring-2 focus:ring-slate-950 focus:outline-none"
                >
                  <Calendar size={15} />
                  Add to calendar
                </button>
              </div>
            </div>

            {/* Right Column: Realistic Hanging Badge Graphic */}
            <div className="hidden lg:flex lg:col-span-4 justify-center items-center">
              <div className="relative pt-4">
                {/* Lanyard Straps Hanging from Top */}
                <div className="absolute -top-7 left-1/2 -translate-x-1/2 w-28 h-12 pointer-events-none flex justify-center">
                  {/* Left ribbon */}
                  <div
                    className="w-3.5 h-10 bg-gradient-to-b from-blue-700 to-blue-500 shadow-sm transform -rotate-12 origin-top-left"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                  />
                  {/* Right ribbon */}
                  <div
                    className="w-3.5 h-10 bg-gradient-to-b from-blue-700 to-blue-500 shadow-md transform rotate-12 origin-top-right -ml-1"
                    style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                  />
                  {/* Metallic silver lanyard clip */}
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 w-6 h-4 bg-gradient-to-b from-slate-200 via-slate-400 to-slate-300 rounded-xs shadow-sm border border-slate-400 flex items-center justify-center">
                    <div className="w-2.5 h-1 bg-slate-600 rounded-full" />
                  </div>
                </div>

                {/* Badge Card */}
                <div className="w-[175px] bg-white rounded-xl shadow-2xl text-slate-900 border border-slate-100 overflow-hidden transform hover:scale-[1.02] transition-transform duration-300">
                  {/* Top punch-hole cutout for lanyard */}
                  <div className="pt-2.5 pb-1.5 flex justify-center">
                    <div className="w-6 h-1.5 bg-slate-200 rounded-full border border-slate-300 shadow-inner" />
                  </div>

                  {/* Badge Body */}
                  <div className="px-3 pb-3 pt-0.5 text-center">
                    <p className="text-[9px] font-black tracking-widest text-slate-500 uppercase">
                      ITSERVE SYNERGY 2026
                    </p>
                    <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 tracking-tight mt-0.5 mb-1.5">
                      VRN Technologies
                    </h3>

                    <div className="py-0.5">
                      <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest block">
                        BOOTH
                      </span>
                      <span className="text-5xl font-black text-slate-950 tracking-tighter leading-none block my-0.5">
                        64
                      </span>
                    </div>
                  </div>

                  {/* Gold Badge Sponsor Stripe */}
                  <div className="bg-[#E5A93C] text-slate-950 py-1.5 text-center">
                    <span className="text-[10px] font-black uppercase tracking-widest">
                      BADGE SPONSOR
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ─── Middle Section: 12 Client Logos & 5 Proof Stats ─── */}
        <div className="p-5 sm:p-6 lg:px-9 lg:py-5 bg-white shrink-0">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Supplier to Fortune 500 & global enterprises
            </h3>
            <p className="text-xs text-slate-500 font-medium">
              Banking · Insurance · Energy · Telecom · Technology
            </p>
          </div>

          {/* 12 Client Logos: 6x2 on desktop, 3 across on mobile */}
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-2.5 mb-5">
            {CLIENT_LOGOS.map((logo) => (
              <div
                key={logo.id}
                className="h-12 sm:h-13 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 flex items-center justify-center hover:border-slate-300 hover:shadow-xs transition-all overflow-hidden group"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.alt || logo.name}
                  loading="lazy"
                  className="max-h-7 max-w-[105px] w-auto h-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
              </div>
            ))}
          </div>

          {/* 5 Proof Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 pt-4 border-t border-slate-100">
            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                15+ years
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                in enterprise IT services
              </p>
            </div>

            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                500+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                consultants deployed on client projects
              </p>
            </div>

            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                50+
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                enterprise clients
              </p>
            </div>

            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                5× Inc. 5000
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                2022–2026 ·{' '}
                <a
                  href="https://www.inc.com/profile/vrn-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 underline font-semibold"
                >
                  profile
                </a>
              </p>
            </div>

            <div>
              <div className="text-lg sm:text-xl font-black text-slate-900 tracking-tight">
                MBE
              </div>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium mt-0.5">
                NMSDC-certified
              </p>
            </div>
          </div>
        </div>

        {/* ─── Bottom Section: Connect With Team & Footer ─── */}
        <div className="p-5 sm:p-6 lg:px-9 lg:py-5 bg-slate-50 border-t border-slate-200 shrink-0">
          {/* Header Row */}
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-3.5">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 tracking-tight">
              Connect with our team before the show
            </h3>
            <p className="text-xs text-slate-500">
              Send an invite — we’ll say hello at Booth 64
            </p>
          </div>

          {/* 3 Team Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white border border-slate-200 rounded-xl p-3 flex items-center justify-between gap-3 shadow-xs hover:border-slate-300 transition-all"
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-slate-100 border border-slate-200 text-slate-800 font-bold text-xs flex items-center justify-center shrink-0 overflow-hidden">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top"
                      />
                    ) : (
                      member.initials
                    )}
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 truncate">
                      {member.name}
                    </h4>
                    <p className="text-[11px] leading-tight text-slate-500 mt-0.5">{member.role}</p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleLinkedInConnect(member.name, member.linkedin)}
                  className="px-3 py-1.5 rounded-lg border border-blue-600 text-blue-600 hover:bg-blue-50 font-bold text-xs transition-colors shrink-0 cursor-pointer focus:ring-2 focus:ring-blue-600 focus:outline-none"
                  aria-label={`Connect with ${member.name} on LinkedIn`}
                >
                  Connect
                </button>
              </div>
            ))}
          </div>

          {/* Footer Row */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-4 border-t border-slate-200 text-xs text-slate-500">
            <div>
              Follow{' '}
              <a
                href="https://www.linkedin.com/company/vrn-jobs/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 font-semibold underline"
              >
                VRN Technologies on LinkedIn
              </a>{' '}
              ·{' '}
              <a href="https://vrntech.us" className="hover:text-slate-900 transition-colors">
                vrntech.us
              </a>
            </div>

            <button
              type="button"
              onClick={() => handleClose('dont_show_again')}
              className="text-xs text-slate-500 hover:text-slate-800 underline transition-colors cursor-pointer text-left sm:text-right"
            >
              Don’t show this again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
