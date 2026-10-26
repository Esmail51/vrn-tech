// Event tracking utility for ITServe Synergy 2026 campaign

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

export type SynergyEventType =
  | 'view'
  | 'book_meeting'
  | 'add_to_calendar'
  | 'linkedin_connect'
  | 'dismiss';

export interface SynergyEventPayload {
  method?: 'close_button' | 'backdrop' | 'escape' | 'dont_show_again' | 'banner';
  person?: 'Naveen Valeti' | 'Julie Gerrard' | 'Sandeep Polkam' | string;
  source?: 'popup' | 'top_banner' | 'contact_page';
  [key: string]: any;
}

export function trackSynergyEvent(eventName: SynergyEventType, payload?: SynergyEventPayload) {
  const eventDetail = {
    event: `synergy_${eventName}`,
    event_category: 'Synergy 2026 Conference',
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // Google Analytics / GTM dataLayer
  if (typeof window !== 'undefined') {
    if (window.dataLayer && Array.isArray(window.dataLayer)) {
      window.dataLayer.push(eventDetail);
    }

    if (typeof window.gtag === 'function') {
      window.gtag('event', `synergy_${eventName}`, payload);
    }

    // Custom DOM event for any embedded analytics or listeners
    window.dispatchEvent(
      new CustomEvent('vrn:synergy_tracking', {
        detail: eventDetail,
      })
    );

    // Development / diagnostic log
    if (import.meta.env.DEV) {
      console.log('🎯 [Synergy 2026 Tracking]:', eventDetail);
    }
  }
}
