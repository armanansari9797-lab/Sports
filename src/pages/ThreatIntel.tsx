import { motion } from 'motion/react';
import { Shield, AlertCircle, Globe, Zap, Search, ChevronRight, Activity, Terminal } from 'lucide-react';

const securityLogs = [
  { id: 'LOG-1', type: 'BLOCKCARE', action: 'Scan Complete', target: 'Live Stream Node-4', result: 'Clean', time: '09:44:21' },
  { id: 'LOG-2', type: 'INTEGRITY', action: 'Auth Check', target: 'Asset: A-9921', result: 'Verified', time: '09:44:15' },
  { id: 'LOG-3', type: 'THREAT', action: 'Malicious Ingest', target: 'IP: 192.168.1.1', result: 'Blocked', time: '09:43:59' },
  { id: 'LOG-4', type: 'BC-TX', action: 'Mint Record', target: 'Asset: A-2200', result: 'Committed', time: '09:43:40' },
  { id: 'LOG-5', type: 'AI-ANALYSIS', action: 'Face Verif', target: 'Node: Video-X', result: '99% Human', time: '09:43:10' },
];

export default function ThreatIntel() {
  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">AI Threat Intelligence</h2>
          <p className="text-slate-500 font-medium">Predictive risk analysis and global threat monitoring</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 border border-emerald-500/30 bg-emerald-500/5 rounded-full text-emerald-400 text-xs font-mono">
           <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
           GLOBAL MONITORING ACTIVE
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* World Map Mockup */}
        <div className="lg:col-span-3 glass-panel p-8 relative overflow-hidden h-[600px] flex flex-col">
           <div className="flex items-center justify-between mb-8 z-10">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Globe className="text-[var(--color-primary)] w-5 h-5" />
                Global Threat Vector Map
              </h3>
              <div className="flex gap-4">
                <div className="flex items-center gap-2 text-xs font-mono">
                   <div className="w-2 h-2 bg-red-500 rounded-full" /> Critical Attack
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                   <div className="w-2 h-2 bg-amber-500 rounded-full" /> High Risk
                </div>
                <div className="flex items-center gap-2 text-xs font-mono">
                   <div className="w-2 h-2 bg-[var(--color-primary)] rounded-full" /> Monitoring Node
                </div>
              </div>
           </div>

           <div className="flex-1 relative bg-slate-950/20 rounded-2xl border border-white/5 flex items-center justify-center">
              {/* Complex SVG placeholder representing a stylized world map */}
              <div className="opacity-10 scale-150 grayscale blur-sm">
                 <Globe className="w-96 h-96" />
              </div>
              
              {/* Animated threat vectors */}
              {[...Array(8)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.3, 0.8, 0.3],
                  }}
                  transition={{ 
                    duration: 3 + Math.random() * 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute w-3 h-3 bg-red-400 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  style={{ 
                    top: `${20 + Math.random() * 60}%`, 
                    left: `${20 + Math.random() * 60}%` 
                  }}
                />
              ))}

              {[...Array(12)].map((_, i) => (
                <div key={i} className="absolute w-1.5 h-1.5 bg-[var(--color-primary)]/40 rounded-full"
                     style={{ top: `${15 + Math.random() * 70}%`, left: `${10 + Math.random() * 80}%` }} />
              ))}

              {/* Data Overlay */}
              <div className="absolute top-10 right-10 w-48 space-y-4">
                 <div className="glass-panel p-4 border-l-4 border-l-red-500">
                    <p className="text-[10px] text-slate-500 uppercase">Active Attack</p>
                    <p className="text-sm font-bold text-red-400">DDoS Attempt</p>
                    <p className="text-[10px] font-mono text-slate-600 mt-1">Origin: CN-822-X</p>
                 </div>
                 <div className="glass-panel p-4 border-l-4 border-l-[var(--color-primary)]">
                    <p className="text-[10px] text-slate-500 uppercase">System Status</p>
                    <p className="text-sm font-bold text-[var(--color-primary)]">Optimized</p>
                    <p className="text-[10px] font-mono text-slate-600 mt-1">Node Latency: 12ms</p>
                 </div>
              </div>
           </div>

           <div className="mt-8 grid grid-cols-4 gap-6 z-10">
              <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Packet Throughput</span>
                 <span className="text-xl font-bold font-mono">1.2 TB/s</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Active Scans</span>
                 <span className="text-xl font-bold font-mono">82,491</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Blocked IPs</span>
                 <span className="text-xl font-bold font-mono text-red-400">4,102</span>
              </div>
              <div className="flex flex-col">
                 <span className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Engine Load</span>
                 <span className="text-xl font-bold font-mono text-emerald-400">22%</span>
              </div>
           </div>
        </div>

        {/* Security Logs / Terminal */}
        <div className="glass-panel flex flex-col h-[600px]">
           <div className="p-6 border-b border-white/5 bg-slate-900/40 flex items-center gap-3">
              <Terminal className="w-5 h-5 text-slate-400" />
              <h3 className="font-bold">Real-time Logs</h3>
           </div>
           <div className="flex-1 p-4 font-mono text-[11px] space-y-4 overflow-y-auto custom-scrollbar">
              {securityLogs.map((log) => (
                <div key={log.id} className="pb-4 border-b border-white/5 last:border-0 group">
                   <div className="flex justify-between items-center mb-1">
                      <span className="text-[var(--color-primary)] font-bold">[{log.type}]</span>
                      <span className="text-slate-600 group-hover:text-slate-400 transition-colors">{log.time}</span>
                   </div>
                   <p className="text-slate-400"><span className="text-slate-200">ACTION:</span> {log.action}</p>
                   <p className="text-slate-400"><span className="text-slate-200">TARGET:</span> {log.target}</p>
                   <p className="text-emerald-400">RESULT: {log.result}</p>
                </div>
              ))}
              <div className="animate-pulse flex items-center gap-1 text-[var(--color-primary)]">
                <ChevronRight className="w-3 h-3" />
                <span>Awaiting new events...</span>
              </div>
           </div>
           <div className="p-4 bg-black/60 rounded-b-xl">
             <button className="w-full py-2 text-xs font-bold text-slate-500 hover:text-white border border-white/5 rounded hover:bg-slate-800 transition-all flex items-center justify-center gap-2">
               Download CSV Report <Activity className="w-3 h-3" />
             </button>
           </div>
        </div>
      </div>

      {/* Threat Intel Sources */}
      <div className="glass-panel p-8">
         <h3 className="text-xl font-bold mb-8">Integrated Intelligence Sources</h3>
         <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {['Telegram', 'DarkWeb', 'Reddit', 'Meta', 'TikTok', 'Twitter'].map((source) => (
              <div key={source} className="p-4 rounded-xl border border-slate-800 bg-slate-900/50 flex items-center justify-center text-center">
                 <div>
                    <div className="w-10 h-10 bg-slate-800 rounded-full mx-auto mb-3 flex items-center justify-center">
                       <Zap className="w-5 h-5 text-slate-500" />
                    </div>
                    <span className="text-xs font-bold text-slate-400">{source}</span>
                 </div>
              </div>
            ))}
         </div>
      </div>
    </div>
  );
}
