import { useParams, Link, Navigate } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Bot, Layers, Target, TrendingUp } from 'lucide-react';
import { servicesData } from '../data/services';

export default function ServicePage() {
  const { id } = useParams();
  const service = servicesData.find((s) => s.id === id);

  if (!service) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="bg-white min-h-screen pt-24">
      {/* ─── Hero Section ─── */}
      <section className="relative w-full overflow-hidden bg-slate-900" style={{ height: '500px' }}>
        <div className="absolute inset-0 z-0 opacity-40">
           <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent" />
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
                Enterprise Solution
              </div>
              <h1 className="text-4xl lg:text-6xl font-light text-white leading-[1.1] mb-6 tracking-tight uppercase">
                {service.heroTitle}
              </h1>
              <p className="text-lg text-slate-300 leading-relaxed mb-10 max-w-xl font-light">
                {service.heroBenefit}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── The Challenge Section ─── */}
      <section className="py-24 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Challenge */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-black text-slate-400 uppercase tracking-[0.5em]">
                <Target size={16} /> The Challenge
              </div>
              <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight uppercase">
                Operational Obstacles & Program Risks
              </h2>
              <p className="text-lg lg:text-xl text-slate-600 font-light leading-relaxed">
                {service.problem}
              </p>
            </div>
            
            {/* Right Column: Image Preview */}
            <div className="lg:col-span-5 relative">
              <div className="border border-slate-200 p-2 bg-white relative z-10 shadow-xl">
                <img 
                  src={service.image} 
                  alt={`${service.title} Overview`} 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-ent-gold/5 -z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* ─── The VRN Solution Section ─── */}
      <section className="py-24 bg-slate-50 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Left Column: Highlights Card */}
            <div className="lg:col-span-5 space-y-6 lg:order-1">
              <div className="bg-white p-8 border border-slate-200 shadow-sm space-y-6">
                <h4 className="text-xs font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 pb-4">
                  Program Focus Areas
                </h4>
                <ul className="space-y-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="text-ent-gold shrink-0 mt-0.5" size={18} />
                      <span className="text-sm font-bold text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: VRN Solution */}
            <div className="lg:col-span-7 space-y-6 lg:order-2">
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em]">
                The VRN Solution
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-slate-900 tracking-tight uppercase">
                Engineered for Impact & Control
              </h3>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                {service.solution}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── AI & Operations Layer ─── */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
         <div className="absolute inset-0 bg-grid-white/[0.02]" />
         <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16">
              
              {/* AI Enhancement */}
              <div className="border-l border-white/10 pl-8 relative">
                <div className="absolute -left-[1px] top-0 w-[2px] h-12 bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" />
                <div className="flex items-center gap-3 text-xs font-black text-cyan-400 uppercase tracking-[0.5em] mb-6">
                  <Bot size={18} /> How AI Enhances This
                </div>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  {service.aiEnhancement}
                </p>
              </div>

              {/* Operations Layer */}
              <div className="border-l border-white/10 pl-8 relative">
                <div className="absolute -left-[1px] top-0 w-[2px] h-12 bg-ent-gold shadow-[0_0_15px_rgba(234,179,8,0.5)]" />
                <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-6">
                  <Layers size={18} /> Workforce Operations Layer
                </div>
                <p className="text-lg text-slate-300 font-light leading-relaxed">
                  {service.operationsLayer}
                </p>
              </div>

            </div>
         </div>
      </section>

      {/* ─── Process Flow ─── */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="mb-20">
            <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-4">
              <div className="w-8 h-px bg-ent-gold" /> Execution Method
            </div>
            <h2 className="text-3xl lg:text-4xl font-light text-slate-900 tracking-tight uppercase">
              Process <span className="font-bold text-ent-gold">Flow</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting horizontal line for desktop */}
            <div className="hidden lg:block absolute top-12 left-8 right-8 h-px bg-slate-200 -z-0" />
            
            {service.processSteps.map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white p-8 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group">
                <div className="w-10 h-10 rounded-full bg-slate-50 text-slate-400 font-bold flex items-center justify-center border border-slate-100 mb-6 group-hover:bg-ent-gold group-hover:text-white group-hover:border-ent-gold transition-colors duration-300">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-2">
                  {step.name}
                </h3>
                <p className="text-sm text-slate-500 font-light leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Proof & Outcomes ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-16">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-3 text-xs font-black text-ent-gold uppercase tracking-[0.5em] mb-6">
                <TrendingUp size={16} /> Outcomes
              </div>
              <h2 className="text-3xl font-light text-slate-900 tracking-tight leading-tight mb-6">
                Measurable Impact. <br/><span className="font-bold">Enterprise Scale.</span>
              </h2>
            </div>
            
            <div className="lg:w-2/3 grid sm:grid-cols-3 gap-8">
               {service.metrics.map((metric, idx) => (
                 <div key={idx} className="bg-white p-8 border-t-2 border-t-ent-gold border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300">
                   <div className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight mb-2">{metric.value}</div>
                   <div className="text-xs font-black text-slate-400 uppercase tracking-widest leading-relaxed">{metric.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─── */}
      <section className="py-24 bg-ent-gold text-white text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl lg:text-5xl font-light mb-8 uppercase tracking-tight">
            Ready to deploy this solution?
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-4 px-10 py-5 bg-slate-900 text-white font-black text-[10px] uppercase tracking-[0.2em] hover:bg-white hover:text-slate-900 transition-colors shadow-xl"
          >
            Request Talent
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
