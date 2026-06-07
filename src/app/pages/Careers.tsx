import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Briefcase, FileText, CheckCircle2, Star, Cpu } from 'lucide-react';
import { Link } from 'react-router';
import abstractRays from '../../imports/abstract_rays.png';
import digTalent from '../../imports/digital_talent.png';

export default function Careers() {
  useEffect(() => {
    document.title = "Careers at VRN Technologies | Join the Talent Network";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Explore active contract positions and full-time enterprise opportunities with top-tier brands through the VRN Talent Network.");
    }
  }, []);

  const openRoles = [
    {
      title: 'Senior AWS DevOps Architect',
      type: 'Contract (12 Months)',
      location: 'Remote (US/Canada)',
      vertical: 'Cloud & DevOps',
      desc: 'Lead infrastructure scaling, IaC (Terraform) integration, and EKS container configurations for a major banking systems upgrade.'
    },
    {
      title: 'Senior ServiceNow Solution Architect',
      type: 'Contract (18 Months)',
      location: 'Remote (US/Europe)',
      vertical: 'Enterprise Applications',
      desc: 'Design and configure IT Service Management (ITSM) and Custom Portal integrations, implementing global catalog standardizations.'
    },
    {
      title: 'SAP S/4HANA Finance Lead',
      type: 'Full-Time / Permanent',
      location: 'Hybrid (Toronto, ON)',
      vertical: 'Enterprise Applications',
      desc: 'Oversee functional configuration, migration pipelines, and stakeholder mapping for a Fortune 500 manufacturing transition.'
    },
    {
      title: 'Enterprise Cybersecurity Consultant',
      type: 'Contract (6 Months)',
      location: 'Hybrid (Dallas, TX)',
      vertical: 'Cybersecurity',
      desc: 'Drive vulnerability auditing and lead compliance pre-vetting checklist alignment for multi-tier vendor engagements.'
    },
    {
      title: 'Machine Learning Pipelines Engineer',
      type: 'Contract (6 Months)',
      location: 'Remote (Global)',
      vertical: 'Data & AI',
      desc: 'Build scalable pipeline architectures, fine-tune models, and deploy NLP models into production environments.'
    },
    {
      title: 'Lead React Native Developer',
      type: 'Full-Time / Permanent',
      location: 'Remote (US/Canada)',
      vertical: 'Digital Engineering',
      desc: 'Oversee mobile architecture, optimizing rendering speeds and state configurations for a high-volume client platform.'
    }
  ];

  const resources = [
    {
      title: 'VMS Resume Formatting Tips',
      desc: 'Most resumes fail VMS filters before a human ever sees them. This guide shows you exactly how to format, keyword-optimize, and structure your profile to pass automated screening and land in front of the hiring team — faster.'
    },
    {
      title: 'Technical Screen Preparation',
      desc: "Know what's coming before it comes. This checklist walks you through every stage of VRN's technical screening process — automated skills verification, domain assessments, and live evaluation formats — so you show up prepared, not surprised."
    },
    {
      title: 'Compliance & Contractor Onboarding',
      desc: 'From background check timelines and W2/1099/C2C classification to system access and day-one readiness — this guide covers every compliance and onboarding step so nothing delays your start date.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: '550px' }}>
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={abstractRays}
            alt="Careers at VRN"
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
                Join the Network
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                Enterprise <br /> <span className="font-bold text-white">Careers</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl font-light">
                Discover enterprise contracts and full-time opportunities with top-tier brands through the VRN Talent Network.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Open Roles Section ─── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
              Featured Open <span className="font-bold">Positions</span>
            </h2>
            <div className="w-12 h-px bg-ent-gold mx-auto mb-6" />
            <p className="text-slate-500 font-light text-lg">
              Directly supporting active projects at global organizations.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openRoles.map((role, idx) => (
              <div key={idx} className="border border-slate-200 p-8 hover:border-ent-gold transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6 bg-slate-50">
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-ent-gold bg-slate-900 px-3 py-1">{role.vertical}</span>
                    <span className="text-xs text-slate-400 font-medium">{role.type} • {role.location}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">{role.title}</h3>
                  <p className="text-sm text-slate-500 font-light max-w-xl">{role.desc}</p>
                </div>
                <Link to="/apply" className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-ent-gold transition-colors shrink-0">
                  Apply Now
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Join Talent Network CTA ─── */}
      <section className="py-24 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="border border-slate-100 p-2 bg-white">
                <img
                  src={digTalent}
                  alt="Join Talent Network"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
                <div className="w-8 h-px bg-ent-gold" /> Proactive Matching
              </div>
              <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
                Join the Talent <span className="font-bold">Network</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-lg">
                Not seeing the right role today? The best opportunities in VRN's network go to professionals who are already in it. Submit your credentials now and position yourself at the front of the line when enterprise clients request your exact skill set.
              </p>
              <p className="text-slate-600 font-light leading-relaxed">
                Once you're in the network, VRN's AI matching engine continuously maps your skills profile against live and upcoming enterprise requisitions — not just today's open roles, but tomorrow's pipeline. When a client match occurs, you're routed directly to the hiring team without competing through a generic application portal. Your profile works for you around the clock, even when you're not actively looking.
              </p>
              <Link to="/apply" className="inline-flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-ent-gold transition-colors">
                Submit Your Resume
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Network Benefits Section ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Why Join VRN
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
              Talent Network <span className="font-bold text-ent-gold">Advantages</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: 'Direct Enterprise Access',
                desc: 'Skip the intermediary layers that slow down placements and reduce your rate. VRN connects you directly to premium contract requisitions at Fortune 500 corporations and top-tier enterprise clients — with no middleman taking a cut between your skills and the client who needs them.'
              },
              {
                title: 'Transparent Margins',
                desc: 'What you see is what you get. VRN operates on transparent rate structures with no hidden markup tiers, no surprise deductions, and no fine print. Your payroll is set up directly under established VMS programs — meaning faster processing, cleaner paperwork, and a financial relationship you can actually trust.'
              },
              {
                title: 'Compliance Pre-Vetting',
                desc: "VRN handles the compliance groundwork before you ever start an assignment — W2/1099 classification confirmed, background checks completed, and tax documentation in order. When a client approves your profile, you're ready to start immediately. No last-minute paperwork delays. No compliance surprises that push back your start date."
              },
              {
                title: 'Skills-Based Profiling',
                desc: "VRN doesn't search by job title. Our AI profiles your actual competencies — technical skills, domain experience, certification depth, and delivery track record — and matches you to projects where you're genuinely qualified, not just keyword-adjacent. The result: higher match quality, faster placement, and engagements that actually fit your expertise."
              }
            ].map((benefit, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Advantage 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {benefit.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {benefit.desc}
                </p>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Candidate Resources ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
              Candidate <span className="font-bold">Resources</span>
            </h2>
            <div className="w-12 h-px bg-ent-gold mx-auto mb-6" />
            <p className="text-slate-500 font-light text-lg">
              Everything you need to walk into a VRN-managed engagement prepared, compliant, and confident — from resume formatting to day-one readiness.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {resources.map((res, idx) => (
              <div key={idx} className="border border-slate-200 p-8 flex flex-col justify-between hover:border-slate-400 transition-colors">
                <div>
                  <div className="w-8 h-8 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-xs text-slate-400 font-bold mb-6">
                    0{idx + 1}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{res.title}</h3>
                  <p className="text-sm text-slate-500 font-light leading-relaxed mb-6">{res.desc}</p>
                </div>
                <Link to="/resources/request" className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 hover:text-ent-gold transition-colors inline-flex items-center gap-2">
                  Get This Resource
                  <ArrowRight size={12} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
