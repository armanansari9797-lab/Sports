import { motion } from 'motion/react';
import { Shield, Zap, Lock, Database, ArrowRight, Target, Globe, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Landing() {
  return (
    <div className="min-h-screen bg-[var(--color-dark)] text-slate-200 selection:bg-[var(--color-primary)]/30">
      <div className="absolute inset-0 cyber-grid opacity-30 pointer-events-none" />
      
      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[var(--color-dark)]/80 backdrop-blur-xl px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] rounded-md flex items-center justify-center">
            <Zap className="text-white w-5 h-5" />
          </div>
          <span className="font-bold text-xl neon-text">SportShield AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
          <a href="#features" className="hover:text-[var(--color-primary)] transition-colors">Features</a>
          <a href="#security" className="hover:text-[var(--color-primary)] transition-colors">Security</a>
          <a href="#architecture" className="hover:text-[var(--color-primary)] transition-colors">Architecture</a>
        </div>
        <Link 
          to="/dashboard" 
          className="bg-[var(--color-primary)] hover:bg-[var(--color-primary)]/80 text-black px-5 py-2 rounded-full text-sm font-bold transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)]"
        >
          Enter Platform
        </Link>
      </nav>

      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto flex flex-col items-center text-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-20 -z-10 w-[600px] h-[600px] bg-[var(--color-primary)]/10 blur-[120px] rounded-full"
        />
        
        <motion.div {...fadeIn}>
          <span className="px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 text-xs font-mono text-[var(--color-primary)] mb-6 inline-block">
            ENTERPRISE DIGITAL ASSET PROTECTION
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] max-w-4xl mx-auto">
            Protecting the Integrity of <span className="neon-text italic">Digital Sports Media</span> with AI.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The elite cybersecurity platform built for sports organizations. Prevent piracy, verify authenticity, and secure ownership using state-of-the-art AI and Blockchain technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/dashboard" className="px-8 py-4 bg-[var(--color-primary)] text-black rounded-xl font-bold text-lg flex items-center gap-2 group hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all">
              Launch Shield Dashboard
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <button className="px-8 py-4 border border-slate-700 hover:bg-slate-800 rounded-xl font-bold text-lg transition-all">
              Technical Documentation
            </button>
          </div>
        </motion.div>

        {/* Floating Mockup */}
        <motion.div 
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-20 w-full max-w-5xl glass-panel p-2 shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-dark)] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="relative rounded-lg overflow-hidden bg-slate-900 aspect-video border border-white/5 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4 text-slate-600">
               <Shield className="w-16 h-16 opacity-20" />
               <p className="font-mono text-sm tracking-tighter uppercase">Simulation: Monitoring Global Media Flows</p>
            </div>
            {/* Pulsing dots simulation */}
            <div className="absolute inset-0 flex items-center justify-center">
              {[...Array(6)].map((_, i) => (
                <div key={i} className="absolute border border-[var(--color-primary)]/20 rounded-full animate-ping" 
                     style={{ width: `${(i+1)*100}px`, height: `${(i+1)*100}px`, animationDuration: `${(i+1)*2}s` }} />
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 md:px-12 border-y border-white/5 bg-slate-950/30">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Threats Detected', value: '1.2M+' },
            { label: 'Media Assets', value: '850K' },
            { label: 'Avg Takt Time', value: '45ms' },
            { label: 'Client Retention', value: '99.9%' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-bold neon-text mb-1">{stat.value}</span>
              <span className="text-sm text-slate-500 uppercase tracking-widest font-mono">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Autonomous Protection Layers</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Our multi-layered security protocol ensures your media remains yours, everywhere.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: Cpu, title: 'AI Authenticity', desc: 'Real-time deepfake and manipulation detection using advanced CNN models trained on millions of frames.' },
            { icon: Lock, title: 'Blockchain Ledger', desc: 'Every asset is hashed and stored on an immutable ledger, providing a permanent chain of custody.' },
            { icon: Target, title: 'Precision Piracy Tracking', desc: 'Autonomous bots scan the public and dark web to detect unauthorized distribution instantly.' },
            { icon: Globe, title: 'Global Footprint', desc: 'Protection nodes across 40+ regions ensuring zero-latency monitoring of live broadcasts.' },
            { icon: Database, title: 'Secure Media Vault', desc: 'Military-grade encryption for storage and role-based access control for your valuable highlights.' },
            { icon: Shield, title: 'Instant DMCA Automation', desc: 'Automated takedown requests sent to providers the moment infringement is verified.' },
          ].map((feature, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl glass-panel border border-white/5 hover:border-[var(--color-primary)]/30 transition-all group"
            >
              <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-[0_0_20px_rgba(0,242,255,0.2)] transition-all">
                <feature.icon className="text-[var(--color-primary)] w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 md:px-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-8">
            <Zap className="text-[var(--color-primary)] w-6 h-6" />
            <span className="font-bold text-xl neon-text">SportShield AI</span>
          </div>
          <p className="text-slate-500 text-sm max-w-md mx-auto mb-10 leading-relaxed">
            Leading the revolution in digital media security. Built for the modern sports enterprise.
          </p>
          <div className="flex justify-center gap-6 text-sm text-slate-500 font-medium">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
          <div className="mt-12 pt-12 border-t border-white/5 text-xs text-slate-600 font-mono">
            © 2026 SportShield AI. All rights reserved. SECURE-SYSTEM-ID: 88-X2-SPORT
          </div>
        </div>
      </footer>
    </div>
  );
}
