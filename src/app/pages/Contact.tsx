import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight, Phone, ShieldCheck, CheckCircle2, Sparkles, Calendar } from 'lucide-react';
import { useSearchParams } from 'react-router';
import { trackSynergyEvent } from '../utils/synergyTracking';
import { sendWeb3Form } from '../utils/emailService';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const isSynergyRef = searchParams.get('ref') === 'synergy26';

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [serviceInterest, setServiceInterest] = useState(
    isSynergyRef ? 'ITServe Synergy 2026 - Booth #64 Meeting' : 'Managed Service Provider (MSP)'
  );
  const [volumeEstimate, setVolumeEstimate] = useState('5-20 Roles / Month');
  const [programRequirements, setProgramRequirements] = useState(
    isSynergyRef
      ? 'I would like to schedule an executive meeting with the VRN Technologies team at Booth #64 during ITServe Synergy 2026 in Chicago (Oct 29–30). Please share available times.'
      : ''
  );
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.title = isSynergyRef
      ? "Book a Meeting at Booth 64 | ITServe Synergy 2026 | VRN Technologies"
      : "Contact VRN Technologies | Global Workforce Consultation";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        isSynergyRef
          ? "Schedule a meeting with VRN Technologies at ITServe Synergy 2026 in Chicago (Booth #64). Connect with our executive leadership team."
          : "Get in touch with our global workforce operations teams in North America and Asia Pacific. Accelerate your talent programs today."
      );
    }
  }, [isSynergyRef]);

  // If user navigated here with ref=synergy26 later
  useEffect(() => {
    if (isSynergyRef) {
      setServiceInterest('ITServe Synergy 2026 - Booth #64 Meeting');
      if (!programRequirements) {
        setProgramRequirements(
          'I would like to schedule an executive meeting with the VRN Technologies team at Booth #64 during ITServe Synergy 2026 in Chicago (Oct 29–30). Please share available times.'
        );
      }
    }
  }, [isSynergyRef]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const submissionData = {
      fullName,
      email,
      serviceInterest,
      volumeEstimate,
      programRequirements,
      isSynergyRef,
      submittedAt: new Date().toISOString(),
    };

    // 1. Persist to localStorage backup so no lead is EVER lost
    try {
      const existing = JSON.parse(localStorage.getItem('vrn_contact_submissions') || '[]');
      existing.push(submissionData);
      localStorage.setItem('vrn_contact_submissions', JSON.stringify(existing));
    } catch (err) {
      console.warn('LocalStorage backup failed:', err);
    }

    // 2. Track submission event
    if (isSynergyRef) {
      trackSynergyEvent('book_meeting', {
        source: 'contact_page',
        status: 'submitted',
        email,
      });
    }

    // 3. Send email in background via Web3Forms
    const subject = isSynergyRef
      ? `[ITServe Synergy 2026 Booth #64] Meeting Request - ${fullName}`
      : `VRN Enterprise Inquiry - ${fullName} (${serviceInterest})`;

    const emailResult = await sendWeb3Form({
      name: fullName,
      email: email,
      subject: subject,
      service_interest: serviceInterest,
      volume_estimate: volumeEstimate,
      event: isSynergyRef ? 'ITServe Synergy 2026 Chicago (Oct 29–30) - Booth #64' : 'Direct Website Inquiry',
      message: programRequirements,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Fallback: If Web3Forms has any network failure, prompt mailto
    if (!emailResult.success) {
      console.warn('Web3Forms returned non-success, triggering mailto fallback:', emailResult);
      const mailtoSubject = encodeURIComponent(subject);
      const mailtoBody = encodeURIComponent(
        `Full Name: ${fullName}\n` +
        `Work Email: ${email}\n` +
        `Service Interest: ${serviceInterest}\n` +
        `Volume Estimate: ${volumeEstimate}\n` +
        (isSynergyRef ? `Event: ITServe Synergy 2026 Chicago (Oct 29-30) - Booth #64\n` : '') +
        `\nProgram Requirements / Message:\n${programRequirements}\n\n` +
        `---\nSent via vrntech.us contact portal`
      );
      window.location.href = `mailto:sales@vrntech.us?subject=${mailtoSubject}&body=${mailtoBody}`;
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6 lg:px-8 bg-white min-h-screen pt-40">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              {isSynergyRef ? (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-600 text-xs font-black uppercase tracking-wider mb-8">
                  <Sparkles size={14} className="text-amber-500" />
                  ITServe Synergy 2026 · Booth #64
                </div>
              ) : (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ent-gold/5 text-ent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                  Connect With Us
                </div>
              )}

              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
                {isSynergyRef ? (
                  <>
                    Meet Us in <br />
                    <span className="text-ent-gold">Chicago.</span>
                  </>
                ) : (
                  <>
                    Ready to <br />
                    <span className="text-ent-gold">Scale?</span>
                  </>
                )}
              </h1>

              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                {isSynergyRef
                  ? "Book a 1-on-1 executive briefing at Booth #64 with our founders and practice leaders during ITServe Synergy 2026."
                  : "Whether you need specialized AI & tech talent on demand or a fully managed workforce program, our enterprise consultants deliver — fast."}
              </p>

              <div className="space-y-10">
                {[
                  { icon: Mail, title: 'Email Inquiries', value: 'sales@vrntech.us', desc: 'Direct response within 24 hours.' },
                  { icon: Phone, title: 'Global Support', value: '+1 (737) 287-3561', desc: 'Monday - Friday, 9am - 6pm CST.' },
                  { icon: ShieldCheck, title: 'Compliance Team', value: 'compliance@vrntech.us', desc: 'Governance and Vendor Management System inquiries.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 group">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover:bg-ent-gold group-hover:text-white group-hover:border-ent-gold transition-all">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-1">{item.title}</h4>
                      <div className="text-lg font-bold text-slate-900 mb-1">{item.value}</div>
                      <p className="text-sm text-slate-500 font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/50"
            >
              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 rounded-full bg-emerald-50 border-2 border-emerald-500/20 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/10">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-black uppercase tracking-widest text-emerald-600">
                      Request Confirmed
                    </span>
                    <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
                      Thank You, {fullName || 'Partner'}!
                    </h3>
                    <p className="text-slate-500 max-w-md mx-auto text-sm leading-relaxed">
                      {isSynergyRef
                        ? 'Your meeting request for ITServe Synergy 2026 (Booth #64) has been registered. Our leadership team has been notified and will coordinate your confirmed timeslot shortly.'
                        : 'Your inquiry has been routed to our enterprise workforce specialists. We guarantee a formal program response within 1 business hour.'}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 max-w-sm mx-auto text-xs text-slate-400 space-y-1">
                    <p>Confirmation email sent to: <span className="font-bold text-slate-700">{email}</span></p>
                    <p>Priority Reference: <span className="font-mono text-slate-600">VRN-{Date.now().toString().slice(-6)}</span></p>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setProgramRequirements('');
                    }}
                    className="mt-6 px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Synergy 2026 Special Banner */}
                  {isSynergyRef && (
                    <div className="bg-gradient-to-r from-[#071326] via-[#0b1c36] to-[#071326] text-white p-5 rounded-2xl border border-amber-500/30 flex items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm shrink-0">
                          64
                        </div>
                        <div>
                          <div className="text-xs font-black text-amber-400 uppercase tracking-wider">
                            ITServe Synergy 2026 · Badge Sponsor
                          </div>
                          <div className="text-sm font-bold text-white">
                            Executive Meeting Booking (Booth #64)
                          </div>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-bold text-slate-300">
                        <Calendar size={13} className="text-amber-400" />
                        Oct 29–30, Chicago
                      </span>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="e.g. John Smith"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="john@enterprise.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        Service Interest
                      </label>
                      <select
                        value={serviceInterest}
                        onChange={(e) => setServiceInterest(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        {isSynergyRef && (
                          <option value="ITServe Synergy 2026 - Booth #64 Meeting">
                            ITServe Synergy 2026 - Booth #64 Meeting
                          </option>
                        )}
                        <option value="Managed Service Provider (MSP)">Managed Service Provider (MSP)</option>
                        <option value="VMS Support / Enablement">VMS Support / Enablement</option>
                        <option value="Contingent Staffing">Contingent Staffing</option>
                        <option value="Direct Hire / Executive Search">Direct Hire / Executive Search</option>
                        <option value="AI Talent Delivery & Intelligence">AI Talent Delivery & Intelligence</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                        Volume Estimate
                      </label>
                      <select
                        value={volumeEstimate}
                        onChange={(e) => setVolumeEstimate(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option value="1-5 Roles / Month">1-5 Roles / Month</option>
                        <option value="5-20 Roles / Month">5-20 Roles / Month</option>
                        <option value="20-100 Roles / Month">20-100 Roles / Month</option>
                        <option value="100+ Enterprise Roles">100+ Enterprise Roles</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                      {isSynergyRef ? 'Meeting Objectives & Availability *' : 'Program Requirements *'}
                    </label>
                    <textarea
                      rows={5}
                      required
                      value={programRequirements}
                      onChange={(e) => setProgramRequirements(e.target.value)}
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold resize-none"
                      placeholder={
                        isSynergyRef
                          ? "Let us know your preferred meeting day (Oct 29 or 30), topics of interest (AI modernization, MSP, contingent programs), and attendee names..."
                          : "Describe your current workforce challenges and objectives..."
                      }
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-6 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ent-gold transition-all shadow-xl shadow-slate-900/10 group cursor-pointer disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      'Routing Inquiry...'
                    ) : isSynergyRef ? (
                      <>
                        Confirm Booth #64 Meeting Request
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </>
                    ) : (
                      <>
                        Send Inquiry
                        <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                      </>
                    )}
                  </button>

                  <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Guaranteed Data Privacy & Compliance Alignment
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── What Happens Next? Process Section ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200 mt-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Response Timeline
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
              What Happens <span className="font-bold text-ent-gold">Next?</span>
            </h2>
            <p className="text-slate-500 font-light text-base">
              Our structured enterprise onboarding pathway guarantees rapid program alignment and zero operational delay.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                step: '01',
                title: 'Inquiry Verification',
                desc: 'Your request is routed to our vendor management specialists. We verify compatibility with your target VMS within 1 business hour.'
              },
              {
                step: '02',
                title: 'Discovery & SLA Alignment',
                desc: 'We schedule a brief 15-minute alignment call to map technical requirements, volume expectations, and compliance controls.'
              },
              {
                step: '03',
                title: 'Squad Activation',
                desc: 'Upon parameter sign-off, our skills matching stack activates, indexing pre-vetted specialists for deployment within 72 hours.'
              }
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 space-y-4">
                <div className="text-sm font-black text-ent-gold tracking-widest">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Office Locations Section ─── */}
      <section className="py-24 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            
            {/* North America */}
            <div className="border border-slate-200 p-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-ent-gold">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Headquarters</p>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">North America Operations</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                1908 Yaupon Trail, Suite 203,<br />
                Cedar Park, TX 78613
              </p>
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-400 font-medium">
                <p>Phone: +1 (737) 287-3561</p>
                <p>Hours: 9:00 AM - 6:00 PM CST</p>
              </div>
            </div>

            {/* Asia Pacific */}
            <div className="border border-slate-200 p-10 space-y-6">
              <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-ent-gold">
                <MapPin size={24} />
              </div>
              <div className="space-y-2">
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Delivery Hub</p>
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Asia Pacific Delivery Center</h3>
              </div>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                #1013, 6th Floor, Manjeera Trinity,<br />
                KPHB Phase 3, Hyderabad, TS 500072
              </p>
              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-400 font-medium">
                <p>Phone: +91 (40) 4951-8600</p>
                <p>Hours: 9:00 AM - 6:00 PM IST</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}

