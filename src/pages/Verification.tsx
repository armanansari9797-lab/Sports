import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, Lock, Database, Search, Cpu, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

const verificationSteps = [
  { id: 1, label: 'Asset Hash Extraction', duration: 1500 },
  { id: 2, label: 'Cross-Referencing Blockchain Ledger', duration: 2000 },
  { id: 3, label: 'AI Frame Integrity Check', duration: 2500 },
  { id: 4, label: 'Ownership Certificate Validation', duration: 1000 },
];

export default function Verification() {
  const [verifying, setVerifying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [assetId, setAssetId] = useState('0x882A-SPORT-2026');

  const startVerification = async () => {
    setVerifying(true);
    setCompleted(false);
    setCurrentStep(0);

    for (let i = 0; i < verificationSteps.length; i++) {
        setCurrentStep(i + 1);
        await new Promise(resolve => setTimeout(resolve, verificationSteps[i].duration));
    }

    setCompleted(true);
    setVerifying(false);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-12 pb-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">Integrity Verification Center</h2>
        <p className="text-slate-500 max-w-xl mx-auto">
          Verify digital asset ownership and authenticity using our proprietary 
          Dual-Layer Blockchain & AI Verification engine.
        </p>
      </div>

      <div className="glass-panel p-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
           <ShieldCheck className="w-40 h-40" />
        </div>

        <div className="space-y-8 relative z-10">
           <div>
              <label className="block text-xs font-mono text-slate-500 uppercase tracking-widest mb-2">Asset Transaction Hash / ID</label>
              <div className="flex gap-4">
                 <div className="flex-1 px-4 py-4 bg-slate-900 border border-slate-800 rounded-xl focus-within:border-[var(--color-primary)] transition-all flex items-center gap-3">
                    <Search className="w-5 h-5 text-slate-600" />
                    <input 
                      type="text" 
                      value={assetId}
                      onChange={(e) => setAssetId(e.target.value)}
                      placeholder="Enter asset hash..." 
                      className="bg-transparent border-none outline-none w-full text-slate-200 font-mono"
                    />
                 </div>
                 <button 
                   onClick={startVerification}
                   disabled={verifying}
                   className="px-8 py-4 bg-[var(--color-primary)] text-black rounded-xl font-bold flex items-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                 >
                   {verifying ? <Loader2 className="w-5 h-5 animate-spin" /> : <Cpu className="w-5 h-5" />}
                   {verifying ? 'Verifying...' : 'Start Audit'}
                 </button>
              </div>
           </div>

           <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-6">
                <h3 className="font-bold text-lg border-b border-white/5 pb-2">Verification Protocol</h3>
                <div className="space-y-4">
                  {verificationSteps.map((step) => (
                    <div key={step.id} className="flex items-center gap-4 group">
                       <div className={`w-8 h-8 rounded-full flex items-center justify-center border ${
                          currentStep >= step.id 
                            ? 'border-[var(--color-primary)] bg-[var(--color-primary)]/10 text-[var(--color-primary)]' 
                            : 'border-slate-800 text-slate-700'
                       } transition-all duration-500`}>
                          {currentStep > step.id ? <CheckCircle2 className="w-5 h-5" /> : <span className="text-xs font-mono">{step.id}</span>}
                       </div>
                       <span className={`text-sm font-medium ${currentStep >= step.id ? 'text-slate-200' : 'text-slate-600'}`}>
                         {step.label}
                       </span>
                       {verifying && currentStep === step.id && (
                         <motion.div 
                           initial={{ width: 0 }}
                           animate={{ width: '40px' }}
                           transition={{ duration: step.duration / 1000 }}
                           className="h-1 bg-[var(--color-primary)] rounded-full shadow-[0_0_10px_var(--color-primary)]"
                         />
                       )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-black/50 border border-slate-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative">
                 <AnimatePresence mode="wait">
                   {!verifying && !completed && (
                     <motion.div key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        <Database className="w-16 h-16 text-slate-700 mb-4 mx-auto" />
                        <p className="text-slate-500 text-sm">Enter a hash above to begin the multi-layer integrity audit.</p>
                     </motion.div>
                   )}

                   {verifying && (
                     <motion.div key="verifying" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
                        <div className="w-20 h-20 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin mx-auto" />
                        <p className="text-[var(--color-primary)] font-mono animate-pulse">SYNCHRONIZING WITH LEDGER...</p>
                     </motion.div>
                   )}

                   {completed && (
                     <motion.div 
                        key="completed" 
                        initial={{ opacity: 0, scale: 0.8 }} 
                        animate={{ opacity: 1, scale: 1 }} 
                        className="space-y-6"
                     >
                        <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                           <ShieldCheck className="w-12 h-12" />
                        </div>
                        <div>
                          <h4 className="text-2xl font-bold text-emerald-400 mb-2">VERIFIED AUTHENTIC</h4>
                          <p className="text-xs text-slate-500 font-mono uppercase tracking-widest mb-4">CERTIFICATE ID: #S-Shield-9921-X</p>
                          <div className="p-4 bg-slate-900 rounded-xl border border-slate-800 text-left space-y-2">
                             <div className="flex justify-between text-[10px]">
                               <span className="text-slate-600">MINTED DATE</span>
                               <span className="text-slate-400">APR 12, 2026</span>
                             </div>
                             <div className="flex justify-between text-[10px]">
                               <span className="text-slate-600">OWNER UID</span>
                               <span className="text-slate-400 truncate ml-4">FIFA_OFFICIAL_881</span>
                             </div>
                             <div className="flex justify-between text-[10px]">
                               <span className="text-slate-600">AI CONFIDENCE</span>
                               <span className="text-slate-400">99.98%</span>
                             </div>
                          </div>
                        </div>
                        <button className="text-[var(--color-primary)] text-xs font-bold border-b border-[var(--color-primary)] pb-0.5 hover:text-white hover:border-white transition-all">
                          Download Blockchain Proof (PDF)
                        </button>
                     </motion.div>
                   )}
                 </AnimatePresence>
              </div>
           </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Fake Detection', icon: AlertCircle, desc: 'Every frame is analyzed by our CNN-based manipulation engine to detect frame-doctoring.' },
          { title: 'Hash Fingerprint', icon: Lock, desc: 'Proprietary fingerprinting technology that survives re-encoding and compression.' },
          { title: 'Custody Chain', icon: Database, desc: 'Full immutable history of asset transfers and modifications on the SportShield ledger.' },
        ].map((item, i) => (
          <div key={i} className="glass-panel p-6 border border-white/5">
            <item.icon className="text-slate-400 w-6 h-6 mb-4" />
            <h4 className="font-bold text-slate-200 mb-2">{item.title}</h4>
            <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
