import { motion } from 'motion/react';
import { ArrowRight, Cpu, Brain, Settings, ShieldCheck, Code2, Users, Search, CheckCircle2, Zap, Database } from 'lucide-react';
import { Link } from 'react-router';
import abstractRays from '../../imports/abstract_rays.png';
import digTalent from '../../imports/digital_talent.png';
import itTalent from '../../imports/it_talent.png';
import engTalent from '../../imports/engineering_talent.png';
import aiDashboard from '../../imports/ai_intelligence_dashboard.png';
import officeImg from '../../imports/office.png';
import govImg from '../../imports/governance.png';
import talentDataIntelligence from '../../imports/talent_data_intelligence.png';

export default function TalentNetwork() {
  const networks = [
    {
      category: 'Cloud & DevOps',
      icon: Cpu,
      image: itTalent,
      roles: ['AWS Architect', 'Azure SRE', 'Kubernetes Administrator', 'Terraform Specialist', 'DevSecOps Engineer', 'GCP Engineer', 'Platform Engineer'],
      desc: 'Engineers who build, secure, and scale enterprise cloud infrastructure. We deliver specialists with hands-on experience in complex CI/CD pipelines, container orchestration, and automated infrastructure provisioning.'
    },
    {
      category: 'Data & AI',
      icon: Brain,
      image: aiDashboard,
      roles: ['ML Engineer', 'Data Scientist', 'Big Data Architect', 'LLM Engineer', 'AI Product Manager', 'Data Engineer', 'AI Solutions Architect'],
      desc: 'Specialists who build, deploy, and govern AI systems at enterprise scale — from classical ML pipelines and predictive models to large language model integration, RAG architectures, and agentic AI workflows. Our network spans data engineers, ML researchers, and applied AI practitioners with production deployment experience, not just theoretical backgrounds.'
    },
    {
      category: 'Enterprise Applications',
      icon: Settings,
      image: officeImg,
      roles: ['SAP S/4HANA Consultant', 'Oracle Cloud Specialist', 'ServiceNow Developer', 'Salesforce Architect', 'Workday Integrator', 'Pega Developer', 'Microsoft Dynamics Consultant'],
      desc: 'Certified consultants who implement, customize, and optimize the enterprise platforms your business runs on — from ERP and CRM to ITSM and HCM. Every professional in this network has production implementation experience, not just platform certification.'
    },
    {
      category: 'Cybersecurity',
      icon: ShieldCheck,
      image: govImg,
      roles: ['SecOps Analyst', 'IAM Architect', 'Penetration Tester', 'Threat Intelligence Specialist', 'CISO Advisor', 'Cloud Security Engineer', 'GRC Analyst'],
      desc: 'Guardians of enterprise data, protecting networks, endpoints, and cloud assets. We source certified professionals (CISSP, CEH, CISM) specialized in vulnerability management, threat intelligence, and zero-trust framework enforcement.'
    },
    {
      category: 'Digital Engineering',
      icon: Code2,
      image: engTalent,
      roles: ['React Developer', 'Node.js Architect', 'Swift/iOS Developer', 'UI/UX Designer', 'Python Software Engineer', 'Android Developer', 'DevOps Engineer'],
      desc: 'Full-stack engineers delivering modern, responsive digital products. High-performing builders focused on clean code, system architecture, performance optimization, and premium user experience design.'
    },
    {
      category: 'Data Governance & Analytics',
      icon: Database,
      image: talentDataIntelligence,
      roles: ['Data Governance Analyst', 'Power BI Developer', 'Tableau Specialist', 'MDM Architect', 'IBM Cognos Consultant'],
      desc: 'Data governance officers, MDM architects, and business intelligence specialists who ensure data integrity, regulatory compliance, and actionable insights. We connect you with experts skilled in setting up robust data quality frameworks, master data management, and designing high-impact analytics dashboards that power executive decision-making.'
    }
  ];

  const workflow = [
    { step: 'Search', desc: 'Sourcing passive talent via proprietary AI channels and curated direct networks.' },
    { step: 'Match', desc: 'Algorithm-driven profiling matching skills, availability, and technical culture.' },
    { step: 'Validate', desc: 'Rigorous human screening, code evaluation, and compliance verification.' },
    { step: 'Deploy', desc: 'Seamless onboarding and placement support for rapid project kick-off.' },
    { step: 'Manage', desc: 'Continuous performance tracking, compliance audits, and administrative governance.' }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: '550px' }}>
        <div className="absolute inset-0 z-0 opacity-40">
           <img
            src={abstractRays}
            alt="Talent Network"
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
                Specialized Capabilities
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                Talent <br /> <span className="font-bold">Network</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                Instant access to a pre-qualified network of specialized technical professionals — cloud architects, AI engineers, cybersecurity analysts, ERP consultants, and full-stack developers — ready to deploy into your enterprise program within 48 hours.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Alternating Specialties Section ─── */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight leading-tight uppercase mb-6">
              Our Domain <span className="font-bold">Expertise</span>
            </h2>
            <div className="w-12 h-px bg-ent-gold mx-auto mb-6" />
            <p className="text-slate-500 font-light text-lg leading-relaxed">
              VRN's talent network spans five high-demand technical domains — each built from years of specialized recruiting, skills validation, and active relationship management. Whether you need one niche expert or a scaled team, our bench is deep, qualified, and ready to engage on your timeline.
            </p>
          </div>

          <div className="space-y-32">
            {networks.map((net, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={idx}
                  className="flex flex-col lg:flex-row items-center gap-16"
                >
                  {/* Image side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="border border-slate-100 p-2 bg-slate-50 relative overflow-hidden group">
                      <img 
                        src={net.image} 
                        alt={net.category} 
                        className="w-full h-80 object-cover shadow-md hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>

                  {/* Content side */}
                  <div className={`w-full lg:w-1/2 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-slate-900 text-ent-gold flex items-center justify-center">
                        <net.icon size={20} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                          {net.category}
                        </h3>
                        <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">Domain Specialization</p>
                      </div>
                    </div>

                    <p className="text-base text-slate-600 font-light leading-relaxed">
                      {net.desc}
                    </p>

                    <div className="pt-4 border-t border-slate-100">
                      <h4 className="text-xs font-black text-slate-400 uppercase tracking-wider mb-3">Core Sourced Roles</h4>
                      <div className="flex flex-wrap gap-2">
                        {net.roles.map((role, rIdx) => (
                          <span key={rIdx} className="text-[10px] uppercase tracking-[0.1em] font-bold text-slate-500 bg-slate-50 border border-slate-200 px-3 py-1.5">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* Custom CTA Box */}
            <div className="p-10 border-2 border-dashed border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-8 max-w-5xl mx-auto">
              <div className="flex items-center gap-6">
                <Users size={40} className="text-slate-300 shrink-0" />
                <div className="text-left">
                  <h3 className="text-lg font-bold text-slate-900">Need a custom skillset?</h3>
                  <p className="text-sm text-slate-500 font-light mt-1">We regularly source bespoke expertise outside of our core domains.</p>
                </div>
              </div>
              <Link to="/contact" className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.15em] hover:bg-ent-gold transition-all">
                Search Talent Network
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── S-M-V-D-M Workflow Section ─── */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-4">
              <Zap size={16} /> Delivery Framework
            </div>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight uppercase mb-6">
              Search • Match • Validate • Deploy • Manage
            </h2>
            <p className="text-slate-400 font-light text-lg">
              Our structured workflow ensures only the highest quality talent enters your organization.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {workflow.map((item, idx) => (
              <div key={idx} className="bg-white/[0.02] border border-white/10 p-6 hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all duration-500 relative">
                <div className="text-[10px] font-black text-cyan-400 uppercase tracking-widest mb-6">
                  Phase 0{idx + 1}
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{item.step}</h4>
                <p className="text-xs text-slate-400 font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Outcomes / Trust ─── */}
      <section className="py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Human-in-the-Loop Sourcing</h4>
                  <p className="text-slate-500 font-light">Algorithms filter the noise, but industry-specialized recruiters validate practical expertise and cultural alignment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 mb-6">
                <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Rigorous Background Integrity</h4>
                  <p className="text-slate-500 font-light">Every consultant is verified against compliance checklist benchmarks before deployment.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-1">Global Delivery Standards</h4>
                  <p className="text-slate-500 font-light">Scale resources seamlessly across onshore and offshore delivery hubs.</p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="border border-slate-100 p-2 bg-slate-50">
                <img 
                  src={digTalent} 
                  alt="Enterprise Talent Delivery" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Talent Network FAQ ─── */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Clear Answers
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
              Network <span className="font-bold text-ent-gold">FAQ</span>
            </h2>
            <p className="text-slate-500 font-light text-base">
              Common questions from consultants about registration, matching speed, and compliance setup.
            </p>
          </div>

          <div className="max-w-3xl mx-auto grid gap-8">
            {[
              {
                q: 'How does the skills-matching workflow function?',
                a: 'When you submit your credentials or resume, our indexing system extracts your specific technical competencies and certifications. When a Fortune 500 partner releases a matching request, your profile is cross-matched and high-probability items are instantly routed to human coordinators.'
              },
              {
                q: 'Is there any cost associated with joining the network?',
                a: 'No, joining the VRN Talent Network is completely free. We work directly under corporate MSP programs where enterprise clients cover operational costs.'
              },
              {
                q: 'What types of job arrangements are available?',
                a: 'Our network supports temporary contingent contracts, multi-year program assignments, and direct-hire corporate roles. You can specify your preferences during application.'
              },
              {
                q: 'How is worker classification handled?',
                a: 'We perform robust tax and compliance classification audits (W2/1099, visa validation) in accordance with client vendor rules before any assignment launch, ensuring zero classification risks.'
              }
            ].map((faq, idx) => (
              <div key={idx} className="bg-white p-8 border border-slate-200 space-y-3">
                <h4 className="text-base font-bold text-slate-900">{faq.q}</h4>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
