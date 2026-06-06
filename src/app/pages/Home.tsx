import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Users,
  Briefcase,
  Globe,
  Settings,
  Bot,
  Layers,
  CheckCircle2,
  TrendingUp,
  Cpu,
  Brain,
  Code2
} from 'lucide-react';
import { Link } from 'react-router';
import clientLogo1 from '../../imports/image-1.png';
import clientLogo2 from '../../imports/image-2.png';
import clientLogo3 from '../../imports/image-3.png';
import mspImg from '../../imports/msp.png';
import vmsImg from '../../imports/vms.png';
import contingentImg from '../../imports/contingent.png';
import directImg from '../../imports/direct.png';
import officeImg from '../../imports/office.png';
import abstractRays from '../../imports/abstract_rays.png';
import digTalent from '../../imports/digital_talent.png';
import itTalent from '../../imports/it_talent.png';
import engTalent from '../../imports/engineering_talent.png';
import govImg from '../../imports/governance.png';
import aiDashboard from '../../imports/ai_intelligence_dashboard.png';
import globalOps from '../../imports/global_operations.png';
import vmsDashboard from '../../imports/vms_dashboard.png';
import workforceOpsDashboard from '../../imports/workforce_ops_dashboard.png';
import enterpriseCollab from '../../imports/enterprise_workforce_collaboration.png';
import officemeet from '../../imports/officemeet.jpeg';
import auditing from '../../imports/auditing.jpeg';
import teamDiscussTop from '../../imports/TeamDiscussTop.jpeg';
import teamSearching from '../../imports/TeamSearching.jpeg';
import twoPersonDiscussion from '../../imports/twoPersonDiscussion.jpeg';

export default function Home() {
  const solutions = [
    {
      title: 'Managed Service Provider',
      icon: ShieldCheck,
      image: mspImg,
      desc: 'Full-cycle contingent workforce management — vendor coordination, compliance oversight, and program governance — all under one accountable partner.',
      path: '/solutions/msp'
    },
    {
      title: 'Vendor Management System',
      icon: BarChart3,
      image: vmsImg,
      desc: 'Tech-enabled talent tracking and reporting platforms that provide total visibility into your non-employee workforce.',
      path: '/solutions/vms'
    },
    {
      title: 'Contingent Staffing',
      icon: Users,
      image: contingentImg,
      desc: 'On-demand access to vetted IT, engineering, and digital transformation talent — at the volume and speed enterprise programs require.',
      path: '/solutions/contingent-staffing'
    },
    {
      title: 'Direct Placement',
      icon: Briefcase,
      image: directImg,
      desc: 'Permanent hiring built for impact — placing the leadership and technical talent that drives your organization\'s long-term growth.',
      path: '/solutions/direct-placement'
    },
    {
      title: 'Workforce Operations',
      icon: Settings,
      image: officeImg,
      desc: 'Enterprise governance, contractor lifecycle management, and supplier coordination for maximum compliance.',
      path: '/solutions/workforce-operations'
    }
  ];

  const heroImages = [
    { src: enterpriseCollab, pos: 'object-center' },
    { src: officemeet, pos: 'object-center' },
    { src: teamDiscussTop, pos: 'object-center' },
    { src: teamSearching, pos: 'object-[center_top]' },
    { src: twoPersonDiscussion, pos: 'object-[center_top]' }
  ];
  const [currentHeroImgIndex, setCurrentHeroImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const opsImages = [
    govImg,
    globalOps,
    vmsDashboard,
    workforceOpsDashboard
  ];
  const [currentOpsImgIndex, setCurrentOpsImgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOpsImgIndex((prev) => (prev + 1) % opsImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [opsImages.length]);

  return (
    <div className="bg-white min-h-screen">
      {/* ─── Section 1: Hero ─── */}
      <section className="relative w-full overflow-hidden pt-20" style={{ height: '650px' }}>
        <div className="absolute inset-0 z-0 bg-slate-950">
          {heroImages.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              alt={`Workforce Solutions ${idx + 1}`}
              className={`absolute inset-0 w-full h-full object-cover ${img.pos} transition-all duration-1000 ${idx === currentHeroImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
        </div>
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-light text-white leading-[1.2] mb-6 tracking-tight uppercase">
                Enterprise Workforce Operations <br className="hidden md:block" />
                <span className="font-bold text-ent-gold">Powered by AI</span> & Specialized Talent
              </h1>
              <p className="text-base lg:text-lg text-white/80 leading-relaxed mb-10 max-w-2xl font-light">
                VRN delivers the people, processes, and AI intelligence enterprises need to build faster, leaner, and more resilient workforces — without the complexity.
              </p>
              <div className="flex gap-4">
                <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-ent-gold text-white font-semibold text-sm rounded hover:bg-ent-gold/90 transition-all">
                  Request Talent
                  <ArrowRight size={16} />
                </Link>
                <button
                  onClick={() => {
                    document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-white font-semibold text-sm rounded hover:bg-white/20 transition-all border border-white/20 cursor-pointer"
                >
                  Explore Solutions
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Section 2: Enterprise Trust Bar ─── */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-12">
            <div className="text-[10px] font-black text-slate-900 uppercase tracking-[0.5em] border-l-2 border-ent-gold pl-6">
              Enterprise Delivery Standards
            </div>
            <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-80 hover:opacity-100 transition-all duration-700">
              <img src={clientLogo1} alt="Partner" className="h-10 w-auto object-contain" />
              <img src={clientLogo2} alt="Partner" className="h-10 w-auto object-contain invert" />
              <img src={clientLogo3} alt="Partner" className="h-10 w-auto object-contain" />
            </div>
          </div>

          {/* Enterprise Credibility Grid */}
          <div className="grid md:grid-cols-3 gap-8 pt-8 border-t border-slate-100">
            <div className="flex gap-4">
              <div className="w-1 h-10 bg-ent-gold shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Procurement Integration</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">Proven supplier experience inside the most complex enterprise procurement ecosystems.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 h-10 bg-ent-gold shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Delivery Benchmarks</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">Delivery rigor built to Fortune 500 expectations — on time, on scope, on compliance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-1 h-10 bg-ent-gold shrink-0" />
              <div>
                <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-2">Program Governance</h4>
                <p className="text-sm text-slate-600 font-light leading-relaxed">End-to-end program governance — compliance-first, audit-ready, built to scale.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 3: Core Solutions ─── */}
      <section id="solutions" className="relative py-24 bg-gradient-to-br from-white via-slate-50 to-ent-gold/15 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 mb-16">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-800 mb-6 tracking-tight uppercase">
              Core Solutions
            </h2>
            <div className="w-12 h-px bg-ent-gold mx-auto" />
          </div>
        </div>

        {/* Horizontal Slider — Core Solutions (Full Width) */}
        <div className="w-full relative z-10">
          <div className="flex overflow-x-auto pb-12 pt-4 gap-8 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-6 lg:px-12 xl:px-24">
            {solutions.map((sol, i) => (
              <Link to={sol.path} key={i} className="flex-none w-[320px] lg:w-[400px] snap-center group bg-white rounded-none border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col cursor-pointer">
                <div className="w-full h-56 overflow-hidden relative">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight group-hover:text-ent-gold transition-colors">
                    {sol.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed font-light mb-6">
                    {sol.desc}
                  </p>
                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <span className="inline-flex items-center gap-2 text-xs font-black text-slate-900 group-hover:text-ent-gold uppercase tracking-widest transition-colors">
                      Explore Solution <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Section 4: Why Staffing Still Matters in the AI Era ─── */}
      <section className="py-24 bg-white text-slate-900 relative overflow-hidden border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="flex items-center gap-4 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-8">
                <div className="w-12 h-px bg-ent-gold" />
                Human Advantage
              </div>
              <h2 className="text-4xl lg:text-5xl font-light tracking-tight leading-tight mb-8">
                Why Staffing Still Matters in the <span className="font-bold text-ent-gold">AI Era</span>
              </h2>
              <div className="p-8 bg-slate-50 border-l-4 border-ent-gold mb-10">
                <p className="text-xl font-medium text-slate-800 leading-relaxed">
                  AI accelerates hiring. VRN delivers the people, governance, and execution enterprises need to make workforce programs successful.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                  <p className="text-slate-500 font-light text-lg">AI identifies potential matches faster, but <strong className="text-slate-900 font-bold">VRN validates skills, fit, compliance, and availability.</strong></p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                  <p className="text-slate-500 font-light text-lg">AI improves visibility, while VRN manages <strong className="text-slate-900 font-bold">delivery and accountability.</strong></p>
                </div>
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="text-ent-gold mt-1 shrink-0" size={20} />
                  <p className="text-slate-500 font-light text-lg">Enterprises demand trusted partners to scale talent programs <strong className="text-slate-900 font-bold">responsibly and at speed.</strong></p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square border border-slate-100 p-4 bg-slate-50">
                <img src={officeImg} alt="Human Collaboration" className="w-full h-full object-cover transition-all duration-700 shadow-sm hover:scale-105" />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-ent-gold text-slate-900 p-8 shadow-2xl max-w-xs hidden md:block">
                <div className="text-3xl font-light mb-2">100%</div>
                <div className="text-xs font-black uppercase tracking-widest">Human Validated Execution</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 5: Workforce Intelligence / AI ─── */}
      <section className="relative py-24 bg-[#020617] overflow-hidden border-t border-white/5">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-1/4 -left-32 w-[800px] h-[800px] bg-cyan-600/10 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 -right-32 w-[800px] h-[800px] bg-blue-600/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Heading & Visual */}
            <div className="lg:col-span-5 lg:sticky top-32">
              <div className="flex items-center gap-4 text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-6">
                Intelligence Layer
              </div>
              <h2 className="text-4xl lg:text-5xl font-light text-white tracking-tight leading-tight uppercase mb-8">
                Predictive Matching <br className="hidden lg:block" /> & <span className="font-bold text-cyan-400">Automation</span>
              </h2>
              <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
                Move beyond generic staffing. Our proprietary AI stack analyzes millions of data points to deliver candidates with the highest probability of long-term success.
              </p>
              <div className="relative aspect-video rounded-none overflow-hidden border border-white/10 shadow-[0_0_40px_rgba(6,182,212,0.15)]">
                <img
                  src={aiDashboard}
                  alt="AI Talent Acquisition Dashboard"
                  className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>
            </div>

            {/* Right Column: 5 Items Grid (1 featured + 4 standard) */}
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Predictive Matching', desc: 'Algorithm-driven candidate scoring for perfect technical and cultural fit. We evaluate beyond the resume to predict long-term retention.' },
                { title: 'Skills-based Search', desc: 'We search by what candidates can actually do — not what their title says. Deep competency indexing across technical, functional, and domain skills.' },
                { title: 'Real-time Visibility', desc: 'Live dashboard access to your talent pipeline — fill rates, time-to-submit, market availability, and bench strength. No more guessing.' },
                { title: 'Hiring Automation', desc: 'AI-driven sourcing and candidate outreach running around the clock — so your pipeline never goes cold.' },
                { title: 'Data-driven Decisions', desc: 'Real-time compensation benchmarks and hiring market intelligence — so every offer you make is competitive and every strategy is backed by data.' }
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-8 border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.05] hover:border-cyan-400/30 transition-all group ${i === 0 ? 'sm:col-span-2' : ''}`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="text-cyan-400 font-black text-sm tracking-widest bg-cyan-400/10 px-3 py-1 rounded-full group-hover:bg-cyan-400 group-hover:text-slate-900 transition-colors">
                      0{i + 1}
                    </div>
                    <h4 className="text-xl font-bold text-white tracking-tight">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-400 font-light leading-relaxed pl-12">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 6: Workforce Operations ─── */}
      <section className="bg-white border-y border-slate-100 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 items-stretch">

            {/* Left side: Full-height image slideshow */}
            <div className="lg:col-span-5 order-2 lg:order-1 relative overflow-hidden min-h-[400px] bg-slate-900">
              {opsImages.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Workforce Operations ${idx + 1}`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${idx === currentOpsImgIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
                    }`}
                />
              ))}
              <div className="absolute inset-0 bg-slate-900/10" />

              {/* Floating Stat Card */}
              <div className="absolute bottom-10 right-8 bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 z-20 w-52">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">Audit Status</div>
                </div>
                <div className="text-slate-900 font-light text-3xl tracking-tight">100%</div>
                <div className="text-xs text-slate-500 mt-1">Compliance Verified</div>
              </div>
            </div>

            {/* Right side: Content & Vertical Steps */}
            <div className="lg:col-span-7 order-1 lg:order-2 py-16 px-8 lg:px-16">

              <h2 className="text-4xl lg:text-6xl font-light text-slate-900 tracking-tight leading-tight mb-8">
                Enterprise Workforce <span className="font-bold">Operations.</span>
              </h2>
              <p className="text-lg text-slate-500 font-light mb-12 max-w-xl">
                We own the operational complexity — governance, reporting, compliance, and contractor lifecycle — so your procurement and HR teams don't have to.
              </p>

              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { title: 'Onboarding Workflows', desc: 'Streamlined background checks, credentialing, and day-one readiness.' },
                  { title: 'Contractor Lifecycle Management', desc: 'Full lifecycle ownership — from assignment start through extensions, transitions, and redeployment.' },
                  { title: 'Supplier Coordination', desc: 'Centralized vendor management with real-time SLA tracking and performance accountability.' },
                  { title: 'Compliance Checkpoints', desc: 'Rigorous ongoing audits for classification and visa status.' },
                  { title: 'Reporting & Analytics', desc: 'Real-time spend analytics and program performance reporting — giving stakeholders the visibility to make faster, smarter decisions.' }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start group">
                    <div className="w-8 h-8 rounded-none bg-slate-50 border border-slate-200 flex items-center justify-center text-xs text-slate-400 font-bold group-hover:bg-ent-gold group-hover:text-white group-hover:border-ent-gold transition-all duration-300 shrink-0 shadow-sm">
                      0{i + 1}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-slate-900 mb-1 tracking-tight group-hover:text-ent-gold transition-colors">{item.title}</h4>
                      <p className="text-xs text-slate-500 font-light leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-slate-100">
                <Link to="/solutions/workforce-operations" className="inline-flex items-center gap-4 text-xs font-black text-slate-900 uppercase tracking-widest hover:text-ent-gold transition-colors group">
                  Explore Operational Capabilities
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── Section 7: Talent Network ─── */}
      <section className="relative py-24 bg-slate-50 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-[0.10]">
          <img src={abstractRays} alt="Abstract Rays" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light text-slate-900 tracking-tight uppercase mb-4">
              Specialized Talent Network
            </h2>
            <div className="w-12 h-px bg-ent-gold mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { category: 'Cloud & DevOps', roles: 'AWS Architect, Azure SRE, Kubernetes, Terraform', icon: <Cpu size={24} /> },
              { category: 'Data & AI', roles: 'ML Engineer, Data Scientist, Big Data, LLM Engineer', icon: <Brain size={24} /> },
              { category: 'Enterprise Apps', roles: 'SAP S/4HANA, Oracle Cloud, ServiceNow, Salesforce', icon: <Settings size={24} /> },
              { category: 'Cybersecurity', roles: 'SecOps, IAM, Pen Testing, Threat Intel', icon: <ShieldCheck size={24} /> },
              { category: 'Digital Engineering', roles: 'React, Node.js, Swift, UI/UX Design, Python', icon: <Code2 size={24} /> }
            ].map((cat, i) => (
              <div key={i} className="group p-10 bg-white border border-slate-200 hover:bg-slate-900 hover:border-slate-800 transition-all duration-700 relative overflow-hidden shadow-sm hover:shadow-2xl">
                <div className="absolute top-0 right-0 p-8 text-slate-300 group-hover:text-white/10 transition-colors">
                  {cat.icon}
                </div>
                <h4 className="text-2xl font-light text-slate-900 group-hover:text-white mb-8 tracking-tight">
                  {cat.category}
                </h4>
                <div className="flex flex-wrap gap-3">
                  {cat.roles.split(', ').map((role, idx) => (
                    <span key={idx} className="text-[10px] uppercase tracking-[0.2em] font-black px-3 py-2 bg-slate-50 border border-slate-200 text-slate-500 group-hover:bg-white/10 group-hover:border-white/10 group-hover:text-ent-gold transition-all duration-500">
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* CTA Box */}
            <div className="p-10 border-2 border-dashed border-slate-200 flex flex-col justify-center items-center text-center">
              <p className="text-slate-500 font-light mb-6">Need a skill set not listed here? Our network runs deeper than what's on this page.</p>
              <Link to="/contact" className="text-xs font-black uppercase tracking-[0.3em] text-slate-900 hover:text-ent-gold transition-colors">
                Search Talent Network →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 8: Proof / Outcomes ─── */}
      <section className="py-24 bg-slate-900 text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-6">
                <TrendingUp size={16} /> Track Record
              </div>
              <h2 className="text-4xl font-light tracking-tight leading-tight mb-6 uppercase">
                Enterprise <br /><span className="font-bold">Outcomes.</span>
              </h2>
            </div>

            <div className="lg:w-2/3 grid sm:grid-cols-3 gap-8">
              {[
                { label: 'Avg Time-to-Submit', value: '48hr' },
                { label: 'Consultant Retention', value: '94%' },
                { label: 'Compliance Accuracy', value: '100%' }
              ].map((metric, idx) => (
                <div key={idx} className="border-l border-white/10 pl-6 hover:border-ent-gold transition-colors duration-500">
                  <div className="text-4xl lg:text-5xl font-light text-white mb-2">{metric.value}</div>
                  <div className="text-xs font-black text-ent-gold uppercase tracking-widest">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section 9: Final CTA ─── */}
      <section className="py-24 bg-ent-gold text-slate-900 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-5xl lg:text-6xl font-light mb-10 uppercase tracking-tight">
            Build a Smarter Workforce <span className="font-bold">with VRN</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-12 py-5 bg-slate-900 text-white font-black text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-all shadow-2xl"
          >
            Request Talent
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  );
}
