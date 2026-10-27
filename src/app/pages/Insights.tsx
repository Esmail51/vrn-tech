import { useEffect } from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Clock, Calendar, Linkedin, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/articles';

export default function Insights() {
  useEffect(() => {
    document.title = "Insights & Analysis | VRN Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Executive insights, enterprise workforce intelligence, and industry analysis from the leadership team at VRN Technologies.'
      );
    }
  }, []);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="relative px-6 lg:px-8 py-16 bg-[#071326] text-white overflow-hidden">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-[#E5A93C] text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Sparkles size={12} />
              VRN Executive Insights
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05] mb-6 uppercase">
              Perspectives on <br />
              <span className="text-[#E5A93C]">Enterprise Workforce</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-300 font-light leading-relaxed">
              Field notes, data analysis, and pragmatic strategy on enterprise talent delivery, VMS/MSP operations, and mission-critical technology platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ARTICLES.map((article, index) => (
            <motion.article
              key={article.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl hover:border-slate-300 transition-all flex flex-col group"
            >
              <div className="p-7 flex flex-col flex-1">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-4">
                  <span className="font-bold text-[#CA9A06] uppercase tracking-wider text-[11px]">
                    {article.category}
                  </span>
                  <span className="inline-flex items-center gap-1 font-medium text-slate-400">
                    <Clock size={13} />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors leading-tight mb-3">
                  <Link to={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                {/* Description */}
                <p className="text-sm text-slate-600 line-clamp-3 leading-relaxed mb-6 font-light">
                  {article.description}
                </p>

                {/* Footer / Author */}
                <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={article.author.image}
                      alt={article.author.name}
                      className="w-10 h-10 rounded-full object-cover border border-slate-200 shadow-xs"
                    />
                    <div>
                      <a
                        href={article.author.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-bold text-slate-900 hover:text-blue-600 flex items-center gap-1 transition-colors"
                      >
                        {article.author.name}
                        <Linkedin size={11} className="text-blue-600" />
                      </a>
                      <p className="text-[10px] text-slate-500">{article.date}</p>
                    </div>
                  </div>

                  <Link
                    to={`/insights/${article.slug}`}
                    className="w-8 h-8 rounded-full bg-slate-50 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-400 transition-colors"
                    aria-label={`Read article: ${article.title}`}
                  >
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
