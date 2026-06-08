import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, ArrowLeft, Mail, FileCheck, Landmark, CheckCircle, Users } from 'lucide-react';
import { Link } from 'react-router';

export default function Compliance() {
  useEffect(() => {
    document.title = "Compliance | VRN Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Learn about the corporate compliance, verification policies, state audit readiness, and employment standards at VRN Technologies.");
    }
  }, []);

  return (
    <div className="bg-white min-h-screen pt-40 pb-24">
      {/* Header Banner */}
      <section className="bg-slate-900 py-16 text-white relative overflow-hidden mb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-ent-gold hover:text-white transition-colors mb-6 group">
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
          <h1 className="text-4xl lg:text-5xl font-light tracking-tight uppercase">
            Corporate <span className="font-bold text-ent-gold">Compliance</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl font-light text-sm">
            Maintaining institutional trust through strict adherence to employment verification, background screening, and vendor governance protocols.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 font-light text-slate-600 leading-relaxed space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-ent-gold" size={24} /> 1. Employment Verification & E-Verify
          </h2>
          <p>
            VRN Technologies is committed to maintaining a fully authorized and legally verified enterprise workforce. In accordance with federal guidelines, we strictly participate in the federal <strong>E-Verify</strong> program:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Form I-9 Verification:</strong> All newly hired contractors and employees are required to complete Form I-9 (Employment Eligibility Verification) within three business days of commencing work.</li>
            <li><strong>Electronic Verification:</strong> We submit Form I-9 data electronically to the U.S. Department of Homeland Security (DHS) and the Social Security Administration (SSA) to confirm employment authorization.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <FileCheck className="text-ent-gold" size={24} /> 2. Comprehensive Background Vetting
          </h2>
          <p>
            To align with our enterprise clients' security mandates, MSP governance, and state requirements, all candidates placed through our systems must undergo rigorous screening:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Criminal Background Screenings:</strong> County, state, and federal criminal database searches.</li>
            <li><strong>Employment & Education Verification:</strong> Direct credential checks with listed academic institutions and previous employers.</li>
            <li><strong>Drug Vetting:</strong> Client-specific drug screening panels completed at accredited facilities.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <Landmark className="text-ent-gold" size={24} /> 3. Audit Readiness & State Regulatory Standards
          </h2>
          <p>
            VRN Technologies maintains operational processes to ensure we are always prepared for client-led audits and state regulatory audits. This includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Texas State Compliance:</strong> Fully registered entity matching all regulatory requirements for the State of Texas and other operating regions.</li>
            <li><strong>Cross-Border Operations:</strong> Alignment between our North American headquarters in Cedar Park, Texas, and our offshore talent hub in Hyderabad, India, ensuring secure and legal operations across jurisdictions.</li>
            <li><strong>Record Retention:</strong> Safe storage and retention of placement files, background check confirmations, and signed agreements in accordance with statutory guidelines.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <Users className="text-ent-gold" size={24} /> 4. Subcontractor & Vendor Governance
          </h2>
          <p>
            We enforce uniform compliance standards across all suppliers and subcontracted agencies within our Vendor Management System (VMS) network. Subcontractors must satisfy identical compliance requirements, holding active business licenses, proper general liability insurance, and worker's compensation coverages prior to engagement.
          </p>
        </section>

        <section className="space-y-4 bg-slate-50 p-8 border border-slate-100 rounded-2xl flex items-start gap-4">
          <Mail className="text-ent-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Compliance & Audit Inquiries</h3>
            <p className="text-sm mt-1 text-slate-500">
              For client audit requests, validation certificates, or specific questions about our corporate verification policies, please contact our compliance desk:
            </p>
            <p className="text-sm font-bold text-slate-900 mt-2">
              Email: <a href="mailto:compliance@vrntech.us" className="text-ent-gold hover:underline">compliance@vrntech.us</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
