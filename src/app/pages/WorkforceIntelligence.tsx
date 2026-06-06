import { motion } from 'motion/react';
import { ArrowRight, Bot, ShieldAlert, BarChart3, Search, Settings, CheckCircle2, Cpu } from 'lucide-react';
import { Link } from 'react-router';
import aiDashboard from '../../imports/ai_intelligence_dashboard.png';
import abstractRays from '../../imports/abstract_rays.png';

export default function WorkforceIntelligence() {
  const capabilities = [
    {
      icon: Bot,
      title: 'AI-Assisted Matching',
      desc: 'Our proprietary matching algorithms match candidate profiles with enterprise requirements beyond keyword matching—analyzing career velocity, skill proximity, and technical fit.'
    },
    {
      icon: ShieldAlert,
      title: 'Screening Automation',
      desc: 'Automated technical screening and compliance validation checkpoints compress initial sourcing cycles from weeks to under 48 hours — eliminating low-fit profiles before they ever reach your hiring team. Every submission that lands in your inbox has already passed skills validation, availability confirmation, and rate alignment.'
    },
    {
      icon: Cpu,
      title: 'Skills Intelligence',
      desc: "VRN's skills intelligence engine continuously maps your active contractor workforce against evolving industry competency benchmarks — surfacing emerging gaps before they become program risks. Proactive talent planning replaces reactive backfilling, giving program managers a forward-looking view of capability coverage across every active engagement."
    },
    {
      icon: BarChart3,
      title: 'Real-Time Workforce Analytics',
      desc: 'Executive-ready dashboards deliver live visibility into talent utilization rates, contractor spend against forecast, time-to-fill trends, and supplier performance scorecards — formatted for CHROs, CPOs, and finance leaders who need answers in a glance, not a spreadsheet. Every metric is updated in real time, not end-of-month.'
    }
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-950" style={{ height: '550px' }}>
        <div className="absolute inset-0 z-0 opacity-20">
           <img
            src={abstractRays}
            alt="Workforce Intelligence"
            className="w-full h-full object-cover object-center mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
        </div>

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <div className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.5em] mb-6 border-l-2 border-cyan-400 pl-4">
                Workforce Intelligence
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                AI Technology & <br /> <span className="font-bold text-cyan-400">Analytics</span>
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl font-light">
                VRN's AI layer doesn't just support your workforce program — it runs underneath every decision, every submission, and every compliance checkpoint. Faster hiring cycles, real-time spend visibility, and zero compliance surprises — powered by predictive intelligence built specifically for enterprise contingent workforce programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Main Technical Capabilities Grid ─── */}
      <section className="py-24 bg-slate-900 border-y border-white/5 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight uppercase mb-6">
              AI-Driven Talent <span className="font-bold text-cyan-400">Infrastructure</span>
            </h2>
            <div className="w-12 h-px bg-cyan-400 mx-auto mb-6" />
            <p className="text-slate-400 font-light text-lg">
              Every phase of your workforce program — sourcing, screening, compliance, spend, and supplier performance — is continuously analyzed, scored, and optimized by VRN's proprietary AI infrastructure. Not as an add-on. As the foundation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.01] border-l-2 border-cyan-400 hover:border-cyan-300 p-10 hover:bg-white/[0.03] transition-all duration-500 relative group"
              >
                <div className="text-xs font-black text-cyan-400/40 group-hover:text-cyan-400 transition-colors tracking-widest mb-6">
                  CAPABILITY 0{idx + 1}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{cap.title}</h3>
                <p className="text-base text-slate-400 font-light leading-relaxed">
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── S-M-V-D Workflow Section ─── */}
      <section className="py-24 bg-slate-950 relative overflow-hidden border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4">
              Operational Pipeline
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight uppercase">
              The AI Delivery <span className="font-bold text-cyan-400">Workflow</span>
            </h2>
            <div className="w-12 h-px bg-cyan-400 mx-auto mt-6" />
          </div>

          <div className="grid md:grid-cols-5 gap-6 relative">
            {[
              { phase: '01', step: 'Search', desc: 'AI-assisted sourcing simultaneously scans active candidates, passive talent, and specialized professional networks — ranked by role fit before a human recruiter reviews a single profile.' },
              { phase: '02', step: 'Match', desc: 'Algorithmic matching targeting skill density, proximity, and historical performance metrics.' },
              { phase: '03', step: 'Validate', desc: 'Automated technical screenings and compliance checks combined with structured human validation — skills assessments, behavioral interviews, and certification verification completed before any profile is submitted to the client.' },
              { phase: '04', step: 'Deploy', desc: 'Accelerated onboarding with parallel-track background checks, credential verification, and automated compliance auditing — every contractor cleared and day-one ready without manual back-and-forth between teams.' },
              { phase: '05', step: 'Manage', desc: 'Ongoing performance monitoring, scheduled compliance audits, timesheet management, and administrative governance — running continuously so your program never drifts out of compliance or visibility.' }
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white/[0.01] border border-white/10 p-6 hover:bg-white/[0.04] hover:border-cyan-400/25 transition-all duration-300 relative group"
              >
                <div className="text-[10px] font-black text-cyan-400 tracking-widest mb-6">
                  PHASE {item.phase}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </h3>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Interactive Mockup Section ─── */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-6 relative">
              <div className="border border-white/10 p-2 bg-slate-900 shadow-[0_0_50px_rgba(6,182,212,0.15)]">
                <img 
                  src={aiDashboard} 
                  alt="Workforce Analytics Platform" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            <div className="lg:col-span-6">
              <div className="flex items-center gap-3 text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-6">
                <div className="w-8 h-px bg-cyan-400" /> Platform Architecture
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-white tracking-tight leading-tight mb-8">
                Absolute Visibility <br />Into <span className="font-bold text-cyan-400">Headcount & Spend.</span>
              </h2>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-8">
                Enterprise program managers shouldn't have to chase data across disconnected systems to answer basic questions — how many contractors are active, what are we spending, which suppliers are performing. VRN's platform gives them those answers instantly, with predictive rate mapping and supplier compliance matrices that update in real time.
              </p>
              <p className="text-lg text-slate-400 font-light leading-relaxed mb-10">
                Our intelligence layer consolidates data feeds across multiple systems, standardizing analytics into single-pane-of-glass dashboards to guide strategic workforce decisions.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-cyan-400 text-slate-950 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white transition-colors shadow-lg"
              >
                Schedule Technology Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
