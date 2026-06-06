import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown, Users, Briefcase, BarChart3, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router';
import LogoMark from './LogoMark';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const solutions = [
    { label: 'Managed Service Provider', icon: ShieldCheck, desc: 'Full-cycle vendor management.', path: '/solutions/msp' },
    { label: 'Vendor Management System', icon: BarChart3, desc: 'Tech-enabled talent tracking.', path: '/solutions/vms' },
    { label: 'Contingent Staffing', icon: Users, desc: 'Scalable on-demand talent.', path: '/solutions/contingent-staffing' },
    { label: 'Direct Placement', icon: Briefcase, desc: 'Permanent hiring solutions.', path: '/solutions/direct-placement' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white border-b border-slate-200 py-4 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" onClick={() => setMobileMenuOpen(false)} className="block">
            <LogoMark size="sm" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6">
            <div
              className="relative group"
              onMouseEnter={() => setSolutionsOpen(true)}
              onMouseLeave={() => setSolutionsOpen(false)}
            >
              <button className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors py-2">
                Talent Solutions
                <ChevronDown size={14} className={`transition-transform duration-300 ${solutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {solutionsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full -left-10 pt-4 w-[450px]"
                  >
                    <div className="bg-white border border-slate-100 rounded-none p-4 shadow-2xl grid grid-cols-1 gap-1">
                      {[
                        { label: 'Managed Service Provider (MSP)', icon: ShieldCheck, desc: 'Enterprise-scale vendor management.', path: '/solutions/msp' },
                        { label: 'VMS Support / Enablement', icon: BarChart3, desc: 'Tech-enabled talent tracking systems.', path: '/solutions/vms' },
                        { label: 'Contingent Staffing', icon: Users, desc: 'Scalable specialized talent delivery.', path: '/solutions/contingent-staffing' },
                        { label: 'Direct Placement / Executive Hiring', icon: Briefcase, desc: 'Permanent leadership and technical hires.', path: '/solutions/direct-placement' }
                      ].map((item, i) => (
                        <Link
                          key={i}
                          to={item.path}
                          className="flex items-start gap-4 p-4 rounded-none hover:bg-slate-50 transition-all group/item"
                        >
                          <div className="w-10 h-10 rounded-none bg-ent-gold/5 flex items-center justify-center text-ent-gold group-hover/item:bg-ent-gold group-hover/item:text-white transition-colors">
                            <item.icon size={20} />
                          </div>
                          <div>
                            <div className="text-[11px] font-bold text-slate-900 uppercase tracking-wider">{item.label}</div>
                            <div className="text-[10px] text-slate-500 font-light mt-1">{item.desc}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link to="/workforce-operations" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors">
              Operations
            </Link>

            <Link to="/talent-network" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors">
              Network
            </Link>

            <Link to="/intelligence" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors">
              AI Technology
            </Link>

            <Link to="/company" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors">
              Company
            </Link>

            <Link to="/careers" className="text-[10px] font-black uppercase tracking-[0.15em] text-slate-700 hover:text-ent-gold transition-colors">
              Careers
            </Link>

            <Link
              to="/contact"
              className="px-5 py-3 bg-slate-900 text-white rounded-none text-[10px] font-black uppercase tracking-[0.15em] hover:bg-ent-gold transition-all shadow-xl ml-2"
            >
              Request Talent
            </Link>
          </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-none ${scrolled ? 'text-slate-900' : 'text-slate-700'}`}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>

      {/* Mobile Menu */ }
  <AnimatePresence>
    {mobileMenuOpen && (
      <motion.div
        initial={{ opacity: 0, x: '100%' }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: '100%' }}
        className="fixed inset-0 top-[96px] bg-white lg:hidden z-50 overflow-y-auto"
      >
        <div className="px-8 py-12 space-y-10">
          <div className="space-y-6">
            <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Talent Offerings</div>
            {solutions.map((item, i) => (
              <Link
                key={i}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-4 p-2"
              >
                <item.icon className="text-ent-gold" size={20} />
                <span className="text-sm font-black uppercase tracking-widest text-slate-900">{item.label}</span>
              </Link>
            ))}
          </div>

          <div className="h-px bg-slate-100" />

          <div className="space-y-6">
            <Link to="/workforce-operations" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-900">Workforce Operations</Link>
            <Link to="/talent-network" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-900">Talent Network</Link>
            <Link to="/company" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-900">Company</Link>
            <Link to="/careers" onClick={() => setMobileMenuOpen(false)} className="block text-sm font-black uppercase tracking-widest text-slate-900">Careers</Link>
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full py-5 bg-slate-900 text-white text-center rounded-none text-[10px] font-black uppercase tracking-widest"
          >
            Request Talent
          </Link>
        </div>
      </motion.div>
    )}
  </AnimatePresence>



    </motion.nav >
  );
}

