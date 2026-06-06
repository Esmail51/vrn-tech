import { motion } from 'motion/react';
import { Mail, MapPin, ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

export default function Contact() {
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ent-gold/5 text-ent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Connect With Us
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
                Ready to <br />
                <span className="text-ent-gold">Scale?</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                Whether you need specialized AI & tech talent on demand or a fully managed workforce program, our enterprise consultants deliver — fast.
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
              <form className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Full Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                      placeholder="e.g. John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Work Email *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                      placeholder="john@enterprise.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Service Interest</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer">
                      <option>Managed Service Provider (MSP)</option>
                      <option>VMS Support / Enablement</option>
                      <option>Contingent Staffing</option>
                      <option>Direct Hire / Executive Search</option>
                      <option>AI Talent Delivery & Intelligence</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Volume Estimate</label>
                    <select className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer">
                      <option>1-5 Roles / Month</option>
                      <option>5-20 Roles / Month</option>
                      <option>20-100 Roles / Month</option>
                      <option>100+ Enterprise Roles</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Program Requirements *</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold resize-none"
                    placeholder="Describe your current workforce challenges and objectives..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ent-gold transition-all shadow-xl shadow-slate-900/10 group">
                  Send Inquiry
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>

                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                  Guaranteed Data Privacy & Compliance Alignment
                </p>
              </form>
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

