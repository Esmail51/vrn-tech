import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Landmark, ArrowLeft, Mail } from 'lucide-react';
import { Link } from 'react-router';

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service | VRN Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Read the Terms of Service of VRN Technologies. Learn about user guidelines, responsibilities, and legal agreements.");
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
            Terms of <span className="font-bold text-ent-gold">Service</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl font-light text-sm">
            Effective Date: June 8, 2026. Standard terms governing website use and talent network participation.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 font-light text-slate-600 leading-relaxed space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <Landmark className="text-ent-gold" size={24} /> 1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using the VRN Technologies website, registering with our specialized talent network, or submitting credentials, you agree to be bound by these Terms of Service and all applicable federal and state laws. If you do not agree to these terms, you are prohibited from using this site.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. Scope of Services</h2>
          <p>
            VRN Technologies operates as an enterprise-scale workforce operations provider. Our platform and services:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Facilitate candidate profiles, resume routing, and skill-based matching for contract and permanent job vacancies.</li>
            <li>Coordinate deployment, supplier scorecarding, and compliance reviews inside Managed Service Programs (MSP).</li>
            <li>Are intended for professional business-to-business usage and staffing matching purposes.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. User Representation & Obligations</h2>
          <p>
            By submitting information or uploading files to this website, you represent and warrant that:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>All registration, contact, and professional history data you submit is truthful and accurate.</li>
            <li>You hold the right to submit your resume and credentials without infringing on third-party contracts.</li>
            <li>You will not upload files containing malware, viruses, or corrupt data.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Intellectual Property</h2>
          <p>
            All elements of this website, including design, graphics, proprietary copy, and automated matching workflow documentation, are owned by or licensed to VRN Technologies. Unpermitted reproduction, harvesting of candidate data, or crawling of code elements is strictly prohibited.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">5. Limitation of Liability</h2>
          <p>
            VRN Technologies makes no warranty that candidate registrations will guarantee employment placements or specific client assignments. We are not liable for direct, indirect, or incidental damages resulting from your use of this site or participation in our network program.
          </p>
        </section>

        <section className="space-y-4 bg-slate-50 p-8 border border-slate-100 rounded-2xl flex items-start gap-4">
          <Mail className="text-ent-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Inquiries and Dispute Resolution</h3>
            <p className="text-sm mt-1 text-slate-500">
              For any questions regarding these Terms of Service, or to address corporate service agreements, please contact our legal counsel team at:
            </p>
            <p className="text-sm font-bold text-slate-900 mt-2">
              Email: <a href="mailto:sales@vrntech.us" className="text-ent-gold hover:underline">sales@vrntech.us</a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
