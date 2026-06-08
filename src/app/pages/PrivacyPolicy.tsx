import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export default function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy | VRN Technologies";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', "Read the Privacy Policy of VRN Technologies. Learn how we collect, protect, and handle candidate and enterprise data.");
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
            Privacy <span className="font-bold text-ent-gold">Policy</span>
          </h1>
          <p className="text-slate-400 mt-4 max-w-xl font-light text-sm">
            Effective Date: June 8, 2026. Data governance, collection safeguards, and compliance protocols.
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 font-light text-slate-600 leading-relaxed space-y-12">
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <ShieldCheck className="text-ent-gold" size={24} /> 1. Introduction
          </h2>
          <p>
            VRN Technologies ("we," "our," or "us") operates as a trusted partner to global enterprise clients and specialized talent networks. We are committed to protecting the privacy and security of the information entrusted to us by candidates, contractors, and business partners. This Privacy Policy describes how we collect, use, disclose, and safeguard your personal information when you use our website, register with our talent network, or apply for enterprise contract opportunities.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">2. Information We Collect</h2>
          <p>
            To successfully match candidates with complex enterprise requisitions inside Managed Service Provider (MSP) and Vendor Management System (VMS) environments, we collect specific personal and professional details, including:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Identification Data:</strong> Full name, email address, phone number, and physical mailing address.</li>
            <li><strong>Professional Background:</strong> Resume/CV files, primary skills, certifications, employment history, and work preferences.</li>
            <li><strong>Social Profile Data:</strong> LinkedIn and portfolio URLs provided during registration.</li>
            <li><strong>Technical Vetting Details:</strong> Skills assessments, coding results, and evaluation summaries gathered during our candidate vetting cycle.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">3. How We Use Your Information</h2>
          <p>
            The information we collect is processed solely to facilitate workforce operations and talent acquisition. Specific uses include:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Indexing and mapping candidate competencies against upcoming pipeline requests from enterprise buyers.</li>
            <li>Routing pre-screened qualifications to clients for matching roles.</li>
            <li>Managing the contractor onboarding cycle, credentialing, and compliance verification.</li>
            <li>Improving our automated skills-based indexing workflows and AI-driven match scoring.</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">4. Data Sharing & Security Protocols</h2>
          <p>
            We do not sell, rent, or trade your personal information. Candidate information is only shared with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Authorized enterprise procurement clients and hiring managers representing target MSP/VMS programs.</li>
            <li>Trusted screening partners who assist with compliance-grade visa checks, backgrounds, and credentialing.</li>
          </ul>
          <p>
            Our infrastructure maintains state-of-the-art security measures to protect your documents and files against unauthorized access, modification, or exposure.
          </p>
        </section>

        <section className="space-y-4 bg-slate-50 p-8 border border-slate-100 rounded-2xl flex items-start gap-4">
          <Mail className="text-ent-gold shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-slate-900 text-lg">Contact Our Privacy Officer</h3>
            <p className="text-sm mt-1 text-slate-500">
              For any privacy-related inquiries, data deletion requests, or questions regarding our information safeguards, please contact us at:
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
