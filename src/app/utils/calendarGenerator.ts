// Calendar .ics file generator for ITServe Synergy 2026 (Oct 29–30, 2026)

export function downloadSynergyCalendarInvite() {
  const icsContent = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//VRN Technologies//ITServe Synergy 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'BEGIN:VEVENT',
    `UID:synergy2026-vrn-booth64-${Date.now()}@vrntech.us`,
    `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
    'DTSTART;VALUE=DATE:20261029',
    'DTEND;VALUE=DATE:20261031',
    'SUMMARY:Meet VRN Technologies at ITServe Synergy 2026 (Booth #64)',
    'DESCRIPTION:Meet VRN Technologies at ITServe Synergy 2026 in Chicago!\\n\\nRole: Badge Sponsor & Solutions Partner\\nLocation: Booth #64\\nDates: October 29–30\\, 2026\\n\\nData\\, cloud and AI modernization consulting — plus MSP\\, VMS and contingent workforce programs built compliance-first for the enterprise.\\n\\nBook a meeting with our leadership team: https://vrntech.us/contact?ref=synergy26\\nWebsite: https://vrntech.us',
    'LOCATION:Booth #64\\, ITServe Synergy 2026\\, Chicago\\, Illinois',
    'STATUS:CONFIRMED',
    'TRANSP:TRANSPARENT',
    'BEGIN:VALARM',
    'TRIGGER:-P1D',
    'DESCRIPTION:Reminder: Meet VRN Technologies at Booth #64 (ITServe Synergy 2026)',
    'ACTION:DISPLAY',
    'END:VALARM',
    'END:VEVENT',
    'END:VCALENDAR'
  ].join('\r\n');

  const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'VRN-Technologies-Synergy-2026-Booth-64.ics');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
