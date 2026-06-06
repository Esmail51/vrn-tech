import { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { UploadCloud, CheckCircle2, ArrowRight, X, AlertTriangle } from 'lucide-react';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [specialty, setSpecialty] = useState('Software Engineering');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`VRN Talent Network Registration - ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Specialty: ${specialty}\n` +
      `LinkedIn/Portfolio: ${linkedin || 'Not Provided'}\n` +
      `Attached Resume Name: ${file ? file.name : 'None'}\n\n` +
      `Please review my registration for active and upcoming roles.`
    );
    window.location.href = `mailto:sales@vrntech.us?subject=${subject}&body=${body}`;
  };

  return (
    <section className="relative py-32 px-6 lg:px-8 bg-white min-h-screen pt-40">
      {/* Background Subtle Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 skew-x-12 translate-x-32" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-20 items-start">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-ent-gold/5 text-ent-gold text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Talent Registration
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tighter leading-[0.9] mb-8 uppercase">
                Join the <br />
                <span className="text-ent-gold">Network</span>
              </h1>
              <p className="text-xl text-slate-500 font-light leading-relaxed mb-12">
                Register with the VRN Talent Network. Once submitted, our skills intelligence parser maps your resume profile to enterprise program requirements for direct consideration.
              </p>

              <div className="space-y-6">
                {[
                  'Enterprise-grade contract matching',
                  'VMS compliance and direct vetting support',
                  'Dedicated agent representation for rate negotiations'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 text-slate-700 font-light">
                    <CheckCircle2 className="text-ent-gold shrink-0" size={20} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 bg-white p-8 lg:p-12 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-slate-900 to-ent-gold" />
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {submitted ? (
                <div className="text-center py-12 space-y-6">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Registration Submitted</h3>
                  <p className="text-slate-500 font-light leading-relaxed max-w-sm mx-auto">
                    Your profile has been captured. If your mail client did not open automatically, please send your resume directly to <strong className="text-slate-900 font-semibold">sales@vrntech.us</strong>.
                  </p>
                  <button 
                    onClick={() => { setSubmitted(false); setName(''); setEmail(''); setLinkedin(''); setFile(null); }}
                    className="inline-flex items-center gap-2 text-xs font-black text-slate-900 uppercase tracking-widest hover:text-ent-gold transition-colors"
                  >
                    Submit Another Application
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="e.g. Sarah Jenkins"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="sarah@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Primary Specialty *</label>
                      <select 
                        value={specialty}
                        onChange={(e) => setSpecialty(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold appearance-none cursor-pointer"
                      >
                        <option>Software Engineering</option>
                        <option>Data Science & AI</option>
                        <option>Cloud & DevOps Architecture</option>
                        <option>Enterprise Applications (SAP/Salesforce)</option>
                        <option>Project Management & Governance</option>
                        <option>Other / Executive Role</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">LinkedIn / Portfolio URL</label>
                      <input
                        type="url"
                        value={linkedin}
                        onChange={(e) => setLinkedin(e.target.value)}
                        className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-ent-gold focus:bg-white transition-all text-slate-900 font-bold"
                        placeholder="https://linkedin.com/in/username"
                      />
                    </div>
                  </div>

                  {/* Resume Upload Dropzone */}
                  <div>
                    <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">Upload Resume (PDF, DOCX) *</label>
                    <div
                      onDragEnter={handleDrag}
                      onDragOver={handleDrag}
                      onDragLeave={handleDrag}
                      onDrop={handleDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`border-2 border-dashed rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 ${
                        dragActive 
                          ? 'border-ent-gold bg-ent-gold/5' 
                          : file 
                            ? 'border-emerald-500 bg-emerald-50/20' 
                            : 'border-slate-200 bg-slate-50 hover:bg-slate-100/50'
                      }`}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        required={!file}
                        onChange={handleFileChange}
                        accept=".pdf,.docx,.doc"
                        className="hidden"
                      />
                      
                      {file ? (
                        <div className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl max-w-md mx-auto" onClick={(e) => e.stopPropagation()}>
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center font-bold text-xs shrink-0">
                              PDF
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-bold text-slate-900 max-w-[200px] truncate">{file.name}</div>
                              <div className="text-xs text-slate-400 font-medium">{(file.size / 1024 / 1024).toFixed(2)} MB</div>
                            </div>
                          </div>
                          <button 
                            type="button"
                            onClick={removeFile}
                            className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <div className="space-y-3">
                          <div className="w-12 h-12 bg-slate-100 text-slate-400 rounded-full flex items-center justify-center mx-auto">
                            <UploadCloud size={24} />
                          </div>
                          <p className="text-sm font-bold text-slate-950">Drag & drop your resume file here</p>
                          <p className="text-xs text-slate-400 font-light">or click to browse from files (PDF, DOCX up to 10MB)</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <button type="submit" className="w-full py-6 bg-slate-900 text-white rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-ent-gold transition-all shadow-xl shadow-slate-900/10 group">
                    Submit Registration
                    <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>

                  <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">
                    Your privacy is guaranteed under compliance routing protocols.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
