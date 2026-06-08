import { Linkedin, Mail, Globe } from 'lucide-react';
import { Link } from 'react-router';
import LogoMark from './LogoMark';

export default function Footer() {
  return (
    <footer className="relative bg-slate-50 border-t border-slate-200 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16 mb-20">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <Link to="/" className="inline-block mb-8">
              <LogoMark size="lg" />
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-sm font-light">
              Your strategic partner for enterprise-scale staffing, managed service programs, and vendor management solutions.
            </p>

            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/vrn-jobs/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-ent-gold hover:text-white transition-all duration-300 group shadow-sm"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} className="text-slate-600 group-hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:sales@vrntech.us"
                className="w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-ent-gold hover:text-white transition-all duration-300 group shadow-sm"
                aria-label="Email"
              >
                <Mail size={18} className="text-slate-600 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Talent Solutions</h4>
            <ul className="space-y-4">
              {[
                { name: 'Managed Service Provider', path: '/solutions/msp' },
                { name: 'Vendor Management System', path: '/solutions/vms' },
                { name: 'Contingent Staffing', path: '/solutions/contingent-staffing' },
                { name: 'Direct Placement', path: '/solutions/direct-placement' },
                { name: 'Workforce Operations', path: '/workforce-operations' },
                { name: 'AI Technology', path: '/intelligence' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="text-slate-500 hover:text-ent-gold transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="lg:col-span-2">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Company</h4>
            <ul className="space-y-4">
              {[
                { name: 'About VRN', path: '/company' },
                { name: 'Case Studies', path: '/company' },
                { name: 'Careers', path: '/careers' },
                { name: 'Contact', path: '/contact' }
              ].map((link, i) => (
                <li key={i}>
                  <Link 
                    to={link.path} 
                    className="text-slate-500 hover:text-ent-gold transition-colors text-sm font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Global Reach */}
          <div className="lg:col-span-4">
            <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-900 mb-8">Global Operations</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
              {[
                { country: 'North America', address: '1908 Yaupon Trail, Suite 203, Cedar Park, TX 78613' },
                { country: 'Asia Pacific', address: '#1013, 6th Floor, Manjeera Trinity, Hyderabad, TS 500072' }
              ].map((office, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-slate-200 flex items-center justify-center shrink-0">
                    <Globe size={18} className="text-ent-gold" />
                  </div>
                  <div>
                    <h5 className="text-slate-900 text-sm font-bold mb-1">{office.country}</h5>
                    <p className="text-slate-500 text-xs leading-relaxed">
                      {office.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Legal Bar */}
        <div className="pt-10 border-t border-slate-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-xs text-slate-400 font-medium">
              © 2026 VRN Technologies. High-Performance Workforce Solutions. | Powered by <a href="https://DigiAcceron.com" target="_blank" rel="noopener noreferrer" className="hover:text-ent-gold transition-colors">DigiAcceron.com</a>
            </p>
            <div className="flex gap-8">
              {[
                { name: 'Privacy Policy', path: '/privacy' },
                { name: 'Terms', path: '/terms' },
                { name: 'Compliance', path: '/compliance' }
              ].map((link, i) => (
                <Link key={i} to={link.path} className="text-xs text-slate-400 font-medium hover:text-ent-gold transition-colors">
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

