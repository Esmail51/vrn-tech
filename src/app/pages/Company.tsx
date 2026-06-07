import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Globe, Shield, Award, Users2, Landmark, CheckCircle, GraduationCap, Heart, Star, Linkedin } from 'lucide-react';
import { Link } from 'react-router';
import globalOperations from '../../imports/global_operations.png';
import abstractRays from '../../imports/abstract_rays.png';
import ceoHeadshot from '../../imports/NaveenValeti-Black (1).jpg';
import opsHeadshot from '../../imports/Julie Gerrard 2026 Headshot.png';
import ctoHeadshot from '../../imports/02 GV1A1460.jpg.jpeg';
import evolutionChart from '../../imports/evolution_chart.png';

export default function Company() {
  useEffect(() => {
    document.title = "About VRN Technologies | Redefining the Enterprise Workforce";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about VRN Technologies' history, milestones, executive leadership team, and our commitment to community development and giving back.");
    }
  }, []);

  const leadership = [
    {
      name: 'Naveen Valeti',
      role: 'Chief Executive Officer',
      image: ceoHeadshot,
      pos: 'object-center',
      bio: 'Founder and Chief Executive Officer at VRN Technologies. Over 18 years of experience building and scaling specialized technology staffing, MSP delivery programs, and strategic enterprise workforce operations.',
      linkedin: 'https://www.linkedin.com/in/naveenvaleti/'
    },
    {
      name: 'Julie Gerrard',
      role: 'Sr. Vice President – Growth & Strategy',
      image: opsHeadshot,
      pos: 'object-center',
      bio: 'Senior Vice President of Growth & Strategy. Leads enterprise client partnerships, commercial strategy, and workforce program optimization for Fortune 500 and high-growth accounts.',
      linkedin: 'https://www.linkedin.com/in/juliegerrard/'
    },
    {
      name: 'Sandeep Kumar Polkam',
      role: 'VP of Global Delivery & Technology Operations',
      image: ctoHeadshot,
      pos: 'object-[center_top]',
      bio: 'VP of Global Delivery & Technology Operations. Manages global delivery centers across the US and India, overseeing the engineering of VRN\'s AI matching workflows and operational compliance frameworks.',
      linkedin: 'https://www.linkedin.com/in/sandeep-kumar-polkam-80ba055b/'
    }
  ];

  const pillars = [
    {
      title: 'Enterprise Supplier Experience',
      desc: 'Deep alignment with corporate procurement workflows. Standardized compliance controls, transparent tier structures, and complete rate visibility built directly into VMS interfaces.'
    },
    {
      title: 'Global Presence',
      desc: 'Our global footprint means your critical roles, compliance requirements, and workforce operations are never on hold, never waiting for a time zone to catch up. From North America to Europe to Asia, VRN clients have one consistent experience: a partner that shows up, stays engaged, and delivers — wherever the work is, whenever it\'s needed. Same governance standards applied at every location.'
    },
    {
      title: 'Outcomes & Case Studies',
      desc: 'Proven delivery metrics. Delivering an average 35% time-to-fill reduction, 94% retention benchmarks, and total classification risk mitigation for global systems integrators.'
    }
  ];

  const milestones = [
    {
      year: '2017',
      title: 'Company Relaunch & Strategic Refocus',
      desc: 'VRN Technologies relaunches with a sharpened focus on specialized technology staffing and enterprise consulting services. Starting with a core team of 20 professionals, the company commits to one principle: deliver the right talent, under rigorous delivery standards, every time.'
    },
    {
      year: '2020',
      title: 'Scaling the Foundation',
      desc: 'Steady client growth drives rapid team expansion — headcount grows from 30 to 80 professionals. VRN deepens its delivery infrastructure, adds new technical practice areas, and establishes the operational playbooks that will support enterprise-grade program delivery at scale. The groundwork for what comes next is firmly in place.'
    },
    {
      year: '2021',
      title: 'Inc. 5000 Recognition — One of America\'s Fastest-Growing Companies',
      desc: 'VRN Technologies earns its first Inc. 5000 ranking — recognized as one of the fastest-growing private companies in the United States. With a team now exceeding 105 consultants, the recognition validates what clients already knew: VRN delivers. This milestone marks the transition from emerging firm to nationally recognized workforce partner.'
    },
    {
      year: '2022',
      title: 'First Fortune 500 Engagement',
      desc: 'VRN signs its first Fortune 500 client — a landmark moment that validates the company\'s enterprise-grade delivery model. With 150+ professionals supporting complex MSP-aligned programs, VRN demonstrates it can operate at the highest tier of corporate procurement standards, setting the benchmark for every engagement that follows.'
    },
    {
      year: '2024',
      title: 'Top-Tier Financial Services Expansion',
      desc: 'VRN expands into the US financial services sector, onboarding clients among the country\'s top-tier banking and financial institutions. With 200+ professionals now operating across delivery centers in Texas and Hyderabad, VRN\'s compliance-first model proves uniquely suited to the rigorous regulatory and governance requirements of financial services workforce programs.'
    },
    {
      year: '2026',
      title: 'Global Delivery Network & AI-Powered Operations',
      desc: 'VRN enters its most ambitious chapter — a 300-strong team operating across the United States delivering continuous around-the-clock workforce support to enterprise clients across North America, Europe, and Asia. AI-powered matching, automated compliance monitoring, and predictive workforce analytics are now embedded into every program VRN manages. The evolution from staffing firm to intelligent workforce partner is complete.'
    }
  ];

  return (
    <div className="bg-white min-h-screen pt-20">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: '550px' }}>
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={abstractRays}
            alt="About VRN"
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
                Enterprise Credentials
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                About <br /> <span className="font-bold text-white">VRN Technologies</span>
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-2xl font-light">
                VRN Technologies exists to make enterprise workforce programs faster, smarter, and more accountable — combining specialized talent delivery, AI-powered operations, and compliance-grade governance for organizations that can't afford to get workforce management wrong.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Story Section ─── */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
                <div className="w-8 h-px bg-ent-gold" /> Who We Are
              </div>
              <h2 className="text-3xl lg:text-5xl font-light text-slate-900 tracking-tight uppercase mb-6 leading-tight">
                Redefining the <br /><span className="font-bold">Enterprise Workforce</span>
              </h2>
              <p className="text-slate-600 font-light leading-relaxed text-lg max-w-2xl">
                VRN Technologies was founded on a simple but powerful observation: enterprise organizations were being underserved by the staffing industry. They needed partners who understood procurement compliance, not just candidate pipelines. Partners who could operate inside complex MSP and VMS environments, not around them. Partners who brought the rigor of enterprise operations to every engagement, not just the speed of a placement desk. That gap is what VRN was built to close — and has been closing for over 18 years, from Cedar Park, Texas to Hyderabad, India, for clients ranging from Fortune 500 enterprises to high-growth technology organizations.
              </p>
              <p className="text-slate-500 font-light leading-relaxed max-w-2xl">
                VRN is not a recruiting firm that added technology. We are a workforce intelligence company that has embedded human expertise at every stage where AI alone isn't enough. Our model combines deep technical sourcing, MSP program management, VMS configuration, and automated governance workflows — unified under a single accountable partner. Where AI identifies and ranks, VRN validates and delivers. That combination is what separates a successful placement from a successful program. Our hybrid model connects the intelligence of AI matching with the accountability of human verification.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="border border-slate-200 p-2 bg-white relative z-10 shadow-xl">
                <img
                  src={globalOperations}
                  alt="VRN Operations Office"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-ent-gold/5 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Pillars Section ─── */}
      <section className="py-24 bg-white border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid md:grid-cols-3 gap-16">
            {pillars.map((pil, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-sm font-black text-ent-gold tracking-widest">
                  0{idx + 1}
                </div>
                <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                  {pil.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {pil.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Mission & Values Section ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Driving Principles
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
              Mission & <span className="font-bold text-ent-gold">Core Values</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              {
                title: 'Uncompromised Integrity',
                desc: 'Every placement, every contract, every vendor relationship is held to the same compliance standard — transparent worker classification, audit-ready documentation, and zero tolerance for shortcuts that create legal exposure for our clients or our contractors.'
              },
              {
                title: 'Data-Driven Decisions',
                desc: 'Every recommendation VRN makes is backed by data — fill rate trends, market rate benchmarks, vendor performance scores, and predictive demand signals. Instinct has no place in enterprise workforce management. Evidence does.'
              },
              {
                title: 'Global Scale, Local Expertise',
                desc: 'Global programs fail when scale comes at the cost of local nuance. VRN operates in several countries with localized payroll structures, visa compliance frameworks, and in-market talent knowledge — delivering the consistency of a global program with the precision of a local partner.'
              },
              {
                title: 'Skills-Based Focus',
                desc: 'Abandoning generalist recruiting. Sourcing deep, validated specialists mapped directly to enterprise workloads.'
              }
            ].map((value, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">
                  Value 0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight">
                  {value.title}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Evolution Timeline ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Our Journey
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
              Milestones of <span className="font-bold text-ent-gold">Evolution</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-16 items-center">
            {/* Timeline List */}
            <div className="lg:col-span-7 relative border-l border-slate-200 ml-4 md:ml-6 space-y-16 py-4">
              {milestones.map((milestone, idx) => (
                <div key={idx} className="relative pl-10 md:pl-16">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-ent-gold" />
                  <div className="space-y-2">
                    <div className="text-2xl font-bold text-ent-gold tracking-tight">{milestone.year}</div>
                    <h3 className="text-xl font-bold text-slate-900 tracking-tight">{milestone.title}</h3>
                    <p className="text-sm text-slate-500 font-light max-w-xl leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Evolution chart image */}
            <div className="lg:col-span-5 relative">
              <div className="border border-slate-200 p-2 bg-white relative z-10 shadow-xl rounded-2xl overflow-hidden">
                <img
                  src={evolutionChart}
                  alt="Talent Growth & Scaling Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-ent-gold/5 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── Community & Giving Back Section ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20 max-w-3xl">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Beyond Business
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase mb-6">
              Community & <span className="font-bold text-ent-gold">Social Impact</span>
            </h2>
            <p className="text-slate-600 font-light text-lg leading-relaxed">
              VRN Technologies was built in Texas, grew in Texas, and remains deeply committed to the communities that made our growth possible. For us, corporate responsibility isn't a checkbox — it's a reflection of who we are as an organization and what we believe business should do for the people around it.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="bg-slate-50 p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-ent-gold/10 rounded-full flex items-center justify-center text-ent-gold mb-6">
                <GraduationCap size={24} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Educational Partnership</p>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                Investing in the Next Generation
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                VRN Technologies maintains an ongoing partnership with Austin Community College — contributing scholarships and financial support specifically targeted at underprivileged students pursuing technology and business careers. We believe access to education shouldn't be determined by economic circumstance, and that the talent pipeline of tomorrow starts with the opportunities we create today. Every scholarship we fund is an investment in a future professional who will go on to build, serve, and lead — just as our own team has.
              </p>
            </div>

            <div className="bg-slate-50 p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-ent-gold/10 rounded-full flex items-center justify-center text-ent-gold mb-6">
                <Heart size={24} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Community Service</p>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                Feeding Central Texas & Supporting our local Firefighters & Law enforcement
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                Since 2021, VRN Technologies has made one commitment to Central Texas and kept it without exception: we show up. Our team volunteers alongside the Central Texas Food Bank, delivers holiday gift baskets to local firefighters and law enforcement, and drops off gift cards, snacks, and drinks to the men and women who serve our community — not once a year as a scheduled obligation, but multiple times a year because that's what genuine appreciation looks like. Hunger doesn't take a quarter off, and the people protecting our communities deserve to know someone sees them.
              </p>
            </div>

            <div className="bg-slate-50 p-8 border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 bg-ent-gold/10 rounded-full flex items-center justify-center text-ent-gold mb-6">
                <Star size={24} />
              </div>
              <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Local Economic Impact</p>
              <h3 className="text-xl font-bold text-slate-900 tracking-tight leading-tight">
                Building Careers. Keeping Jobs in Texas.
              </h3>
              <p className="text-sm text-slate-500 font-light leading-relaxed">
                VRN Technologies makes a deliberate, ongoing commitment to hiring, developing, and retaining talent in the United States — with particular emphasis on Texas-based employment and workforce development. In an industry where offshoring is the default, we invest in local careers. We partner with community colleges, workforce development programs, and local institutions to ensure that the economic value we create stays in the communities where our clients, our families, and our team members live. Every U.S. job we create or retain is a conscious business decision.
              </p>
            </div>
          </div>

          <div className="p-8 border-l-2 border-ent-gold bg-slate-50">
            <span className="text-[10px] font-black text-ent-gold uppercase tracking-[0.2em]">Our Commitment</span>
            <p className="text-slate-600 font-light mt-2 leading-relaxed">
              At VRN Technologies, we measure success in two ways: the outcomes we deliver for our clients, and the impact we make in our community. One doesn't come at the expense of the other. A company that invests in scholarships, feeds its neighbors, and creates local jobs is a company that operates with the same integrity it promises its clients. That's the standard we hold ourselves to — in the boardroom and in the community.
            </p>
          </div>
        </div>
      </section>

      {/* ─── Leadership Section ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Our Leadership
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
              Leadership <span className="font-bold">Team</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {leadership.map((lead, idx) => (
              <div key={idx} className="space-y-6">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-slate-200 shadow-sm relative group">
                  <img
                    src={lead.image}
                    alt={lead.name}
                    className={`w-full h-full object-cover ${lead.pos || 'object-center'}`}
                  />
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-slate-900">{lead.name}</h3>
                    <a
                      href={lead.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-ent-gold transition-colors"
                      title={`${lead.name} LinkedIn Profile`}
                    >
                      <Linkedin size={16} />
                    </a>
                  </div>
                  <p className="text-xs text-ent-gold uppercase font-black tracking-widest mt-1">{lead.role}</p>
                </div>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {lead.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Case Study Outcomes Summary ─── */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left side */}
            <div className="lg:col-span-7 space-y-12">
              <div>
                <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
                  <div className="w-8 h-px bg-ent-gold" /> Case Summaries
                </div>
                <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
                  Clients & <span className="font-bold">Case Studies</span>
                </h2>
              </div>

              <div className="space-y-8">
                <div className="border-l border-slate-200 pl-6 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Global SI Delivery Scale</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    A leading global Systems Integrator faced a critical program gap — 40+ ServiceNow and SAP specialists needed within three weeks to meet a contracted client deadline. Traditional recruiting timelines would have caused a program breach. VRN activated its pre-qualified specialist network, applied AI-assisted matching against the specific technical and compliance requirements, and delivered a fully vetted, SLA-compliant delivery squad on time — without a single classification exception. The client avoided a contractual penalty and maintained program continuity across three geographies.
                  </p>
                </div>
                <div className="border-l border-slate-200 pl-6 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Total Compliance Clean Sweep</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    A Fortune 500 enterprise client identified systemic worker classification risk across its contingent workforce program — 150+ active contractors whose categorization had not been audited since initial placement. Regulatory exposure was significant. VRN deployed a structured compliance audit framework, reviewing every active engagement against current federal and state classification standards, visa status requirements, and co-employment risk thresholds. The result: 100% compliant recategorization across the entire contractor population, zero program risk warnings, and a governance framework that now prevents classification drift going forward. The client entered their next procurement audit with full confidence.
                  </p>
                </div>
                <div className="border-l border-slate-200 pl-6 space-y-2">
                  <h4 className="text-base font-bold text-slate-900">Financial Services Workforce Ramp</h4>
                  <p className="text-slate-500 text-sm font-light leading-relaxed">
                    A top-tier U.S. financial institution required rapid deployment of specialized technology contractors across multiple business units — with stringent FINRA compliance requirements, background check standards, and rate card governance that eliminated most staffing partners from consideration. VRN's compliance-first delivery model was purpose-built for exactly this environment. Within 30 days, VRN had onboarded as a compliant supplier, deployed 25+ vetted technology professionals across cloud, data, and cybersecurity roles, and established a reporting cadence that gave the client's procurement team full program visibility from day one.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side outcome card */}
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="bg-white border border-slate-200 rounded-[2.5rem] p-10 lg:p-12 shadow-xl shadow-slate-100/50 space-y-8">
                <div>
                  <div className="text-5xl font-black text-slate-900 mb-2">35%</div>
                  <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-4">Cost-of-Delivery Reduction</p>
                  <p className="text-sm text-slate-500 font-light leading-relaxed">
                    VRN clients achieve an average 35% reduction in cost-of-delivery compared to traditional technology recruiters — driven by AI-assisted screening that eliminates low-fit submissions, direct supplier coordination that removes intermediary markup, and consolidated program management that replaces multi-vendor overhead with a single accountable partner.
                  </p>
                </div>
                <div className="w-full h-px bg-slate-200" />
                <Link to="/contact" className="inline-flex items-center gap-2 text-xs font-black uppercase text-slate-900 hover:text-ent-gold transition-colors tracking-widest">
                  Request Briefing
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
