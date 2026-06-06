import { motion } from 'motion/react';
import { ArrowRight, RefreshCw, ClipboardCheck, ShieldCheck, FileCheck, LineChart, BarChart3 } from 'lucide-react';
import { Link } from 'react-router';
import talentDataIntelligence from '../../imports/talent_data_intelligence.png';
import abstractRays from '../../imports/abstract_rays.png';
import workforceOpsDashboard from '../../imports/workforce_ops_dashboard.png';

export default function WorkforceOperations() {
  const operations = [
    {
      title: 'Contractor Lifecycle Management',
      desc: 'Full lifecycle ownership from the moment a req is raised — assignment deployment, mid-engagement check-ins, extension management, offboarding, and alumni tracking that keeps top contractors in your network for future redeployment.'
    },
    {
      title: 'Onboarding Coordination',
      desc: 'Seamless provisioning, background checks, and day-one readiness to accelerate contractor productivity.'
    },
    {
      title: 'Supplier Governance',
      desc: 'Every supplier in your program is held to unified SLAs — enforced, not suggested. AI-generated performance scorecards rank vendors by fill rate, quality, compliance accuracy, and time-to-submit, giving your procurement team the data to make consolidation decisions based on evidence, not relationships.'
    },
    {
      title: 'Compliance Tracking',
      desc: 'Continuous automated monitoring across every active contractor — Workorder renewals, visa status windows, certification renewals, insurance verification, and co-employment risk thresholds. Alerts trigger 30, 60, and 90 days before expiry. Nothing expires unnoticed. Nothing creates audit exposure.'
    },
    {
      title: 'Spend & Reporting Analytics',
      desc: 'Live market rate benchmarking flags overpayment before invoices are approved. Unified billing consolidates every vendor invoice into a single transparent statement. Customized executive dashboards give CHROs, CPOs, and finance leaders the workforce visibility they need — without pulling data manually from five different systems.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: '550px' }}>
        <div className="absolute inset-0 z-0 opacity-40">
           <img
            src={abstractRays}
            alt="Workforce Operations"
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
              <div className="text-[10px] font-black text-ent-gold uppercase tracking-[0.5em] mb-6 border-l-2 border-ent-gold pl-4">
                Core Capability
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                Workforce <br /> <span className="font-bold">Operations</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl font-light">
                Elevate your talent program from transactional staffing to strategic workforce management with enterprise-grade governance, compliance, and reporting.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── The 6-Cell Grid Section ─── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight uppercase">
              Operational <span className="font-bold text-ent-gold">Excellence</span>
            </h2>
            <div className="w-16 h-px bg-slate-200 mt-4" />
          </div>

          <div className="grid md:grid-cols-3 gap-x-12 gap-y-16 items-start">
            {operations.map((op, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-lg font-black text-ent-gold tracking-widest">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                  {op.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {op.desc}
                </p>
              </div>
            ))}

            {/* Image in the 6th slot */}
            <div className="relative">
              <img 
                src={workforceOpsDashboard} 
                alt="Workforce Operations Analytics" 
                className="w-full h-48 lg:h-56 object-cover rounded-2xl shadow-lg border border-slate-100"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Integrated Approach ─── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="border border-slate-100 p-2 bg-slate-50 relative z-10">
                <img 
                  src={talentDataIntelligence} 
                  alt="Workforce Program Management" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ent-gold/10 -z-0 rounded-none" />
            </div>
            
            <div>
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-6">
                <div className="w-8 h-px bg-ent-gold" /> The VRN Advantage
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight leading-tight mb-8">
                Turning Talent Data into <span className="font-bold">Business Intelligence.</span>
              </h2>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                Most workforce programs generate enormous amounts of data — fill rates, spend variance, contractor tenure, vendor performance, compliance events — and do nothing with it. It sits in spreadsheets, disconnected VMS reports, and email threads. VRN changes that. We turn your program's operational data into a live intelligence layer that drives smarter decisions at every level of your organization.
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-10">
                Every contractor, every supplier, every dollar flows through a single centralized program — tracked, benchmarked, and continuously optimized. Your CPO sees supplier performance. Your CFO sees spend against forecast. Your compliance team sees zero open risks. Everyone gets the visibility they need, without the manual effort it used to take to produce it.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-ent-gold transition-colors shadow-lg"
              >
                Optimize Your Operations
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
