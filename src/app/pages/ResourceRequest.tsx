import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function ResourceRequest() {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [currentRole, setCurrentRole] = useState('');
  const [primarySkill, setPrimarySkill] = useState('Cloud & DevOps');
  const [resourceRequested, setResourceRequested] = useState('VMS Resume Formatting Tips');
  const [activelyLooking, setActivelyLooking] = useState('Actively Looking');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`VRN Candidate Resource Request - ${resourceRequested}`);
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone || 'Not Provided'}\n` +
      `Current Role: ${currentRole}\n` +
      `Primary Skill: ${primarySkill}\n` +
      `Resource Requested: ${resourceRequested}\n` +
      `Actively Looking: ${activelyLooking}\n\n` +
      `Please send me the requested resource.`
    );
    window.location.href = `mailto:sales@vrntech.us?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative py-32 px-6 lg:px-8 bg-white min-h-screen pt-40">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Context Info */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ent-gold/5 text-ent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Candidate Resources
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
                Access Your <br />
                <span className="text-ent-gold">Free Resource</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                Fill out the form below and we'll send your selected resource directly to your inbox — usually within minutes. All VRN candidate resources are free, practical, and built specifically for professionals navigating enterprise technology staffing programs.
              </p>

              <div className="space-y-6 bg-slate-50 p-8 border border-slate-100 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-ent-gold/10 rounded-full flex items-center justify-center shrink-0 text-ent-gold">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Instant Delivery</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">Get immediate download links delivered directly to your inbox.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-ent-gold/10 rounded-full flex items-center justify-center shrink-0 text-ent-gold">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">Privacy First</h4>
                    <p className="text-sm text-slate-500 font-light mt-1">Your data is governed by our compliance routing protocols and never shared.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-slate-200 rounded-[2.5rem] p-8 lg:p-12 shadow-2xl shadow-slate-200/50"
            >
              {submitted ? (
                <div className="text-center py-12 space-y-8">
                  <div className="w-20 h-20 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 size={40} />
                  </div>
                  <div className="space-y-3">
                    <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Request Complete</h2>
                    <p className="text-slate-500 font-light max-w-lg mx-auto leading-relaxed text-base">
                      You're all set. If your mail client did not open automatically, please verify that your request was forwarded to <strong className="text-slate-900 font-semibold">sales@vrntech.us</strong> so we can deliver the resource directly to your inbox.
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t border-slate-100 flex flex-col items-center gap-4">
                    <Link 
                      to="/apply" 
                      className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:bg-ent-gold transition-all shadow-xl group"
                    >
                      Submit Your Profile to the Network
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={16} />
                    </Link>
                    <button 
                      onClick={() => { setSubmitted(false); setFirstName(''); setLastName(''); setEmail(''); setPhone(''); setCurrentRole(''); }}
                      className="text-xs font-black text-slate-400 uppercase tracking-widest hover:text-slate-600 transition-colors"
                    >
                      Request Another Resource
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">First Name *</label>
                      <input
                        type="text"
                        required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="e.g. Sarah"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Last Name *</label>
                      <input
                        type="text"
                        required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="e.g. Johnson"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Phone (Optional)</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="+1 (000) 000-0000"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Current Role / Title *</label>
                      <input
                        type="text"
                        required
                        value={currentRole}
                        onChange={(e) => setCurrentRole(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="e.g. AWS Solutions Architect"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Primary Skill Area *</label>
                      <select 
                        value={primarySkill}
                        onChange={(e) => setPrimarySkill(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>Cloud & DevOps</option>
                        <option>Data & AI</option>
                        <option>Enterprise Applications</option>
                        <option>Cybersecurity</option>
                        <option>Digital Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Resource Requested *</label>
                      <select 
                        value={resourceRequested}
                        onChange={(e) => setResourceRequested(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>VMS Resume Formatting Tips</option>
                        <option>Technical Screen Preparation</option>
                        <option>Compliance & Contractor Onboarding</option>
                        <option>All Three Resources</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Are you actively looking? *</label>
                      <select 
                        value={activelyLooking}
                        onChange={(e) => setActivelyLooking(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>Actively Looking</option>
                        <option>Open to Opportunities</option>
                        <option>Just Exploring</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ent-gold transition-all shadow-xl shadow-slate-900/10 group">
                      Send Me the Resource
                      <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                    </button>
                    
                    <p className="text-center text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
                      NO SPAM. NO SALES CALLS. JUST THE RESOURCE YOU REQUESTED.
                    </p>
                  </div>
                </form>
              )}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
