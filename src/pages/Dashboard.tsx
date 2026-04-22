import { useState } from 'react';
import { motion } from 'motion/react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Shield, AlertTriangle, ShieldCheck, Activity, TrendingUp, Search, ExternalLink } from 'lucide-react';
import { SecurityMetric, Threat } from '../types';

const metrics: SecurityMetric[] = [
  { label: 'Overall Protection', value: '98.4%', change: 2.1, trend: 'up' },
  { label: 'Assets Protected', value: '42,851', change: 12.5, trend: 'up' },
  { label: 'Threats Mitigated', value: '1,245', change: -4.3, trend: 'down' },
  { label: 'Verification Velocity', value: '0.4s', change: 15.0, trend: 'up' },
];

const mockChartData = [
  { name: '00:00', threats: 12, protection: 95 },
  { name: '04:00', threats: 18, protection: 94 },
  { name: '08:00', threats: 15, protection: 96 },
  { name: '12:00', threats: 32, protection: 92 },
  { name: '16:00', threats: 25, protection: 97 },
  { name: '20:00', threats: 10, protection: 99 },
  { name: '23:59', threats: 14, protection: 98 },
];

const recentThreats: Threat[] = [
  { 
    id: 'T1', 
    assetId: 'A882', 
    severity: 'high', 
    type: 'piracy', 
    source: 'Telegram Channel ID: 8821', 
    detectedAt: '2 mins ago', 
    status: 'active',
    description: 'Live broadcast leak detected on underground streaming channel.',
    confidence: 0.99
  },
  { 
    id: 'T2', 
    assetId: 'A102', 
    severity: 'medium', 
    type: 'deepfake', 
    source: 'Twitter/X Post', 
    detectedAt: '15 mins ago', 
    status: 'investigating',
    description: 'Deepfake analysis triggered for viral athlete interview clip.',
    confidence: 0.88
  },
  { 
    id: 'T3', 
    assetId: 'A441', 
    severity: 'high', 
    type: 'tampering', 
    source: 'Direct Upload Attempt', 
    detectedAt: '1 hour ago', 
    status: 'mitigated',
    description: 'Unauthorized watermark removal attempt blocked by AI engine.',
    confidence: 0.95
  },
];

export default function Dashboard() {
  const [selectedThreat, setSelectedThreat] = useState<Threat | null>(recentThreats[0]);

  return (
    <div className="space-y-4">
      {/* Metrics Grid - High Density */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {metrics.map((metric, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="glass p-4"
          >
            <div className="card-title">{metric.label}</div>
            <div className="flex items-end justify-between">
              <div className="stat-value">{metric.value}</div>
              <div className={`flex items-center gap-1 text-[10px] font-bold font-mono ${metric.trend === 'up' ? 'text-[var(--color-success)]' : 'text-[var(--color-secondary)]'}`}>
                {metric.trend === 'up' ? '+' : '-'}{Math.abs(metric.change)}%
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        {/* Main Feed Activity */}
        <div className="lg:col-span-2 space-y-3">
           <div className="glass p-4 h-[320px] flex flex-col">
              <div className="card-title">
                 <span>Live Feed Verification</span>
                 <span className="text-[var(--color-primary)] font-mono">NODE: CAM_04</span>
              </div>
              <div className="flex-1 bg-black rounded border border-white/5 relative overflow-hidden flex items-center justify-center">
                 <img 
                    src="https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&q=80&w=800" 
                    className="w-full h-full object-cover opacity-40 grayscale"
                    alt="Sport Feed"
                 />
                 <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--color-primary)] to-transparent animate-scan" style={{ top: '40%' }} />
                    <div className="absolute top-4 left-4 glass bg-black/80 px-3 py-2 border-[var(--color-primary)]/50">
                       <div className="text-[10px] text-[var(--color-primary)] font-bold tracking-tighter">ANALYZING STREAM...</div>
                       <div className="text-[14px] font-mono font-bold tracking-tighter">INTEGRITY: 99.98%</div>
                    </div>
                 </div>
              </div>
           </div>

           <div className="glass p-4">
              <div className="card-title">Blockchain Audit Ledger</div>
              <div className="font-mono text-[10px] space-y-2">
                 {[
                   { hash: '0x4f2..e1', action: 'ASSET_MINT', target: 'HIGHLIGHT_REEL_S2' },
                   { hash: '0x1a9..c4', action: 'OWNER_TRANS', target: 'SKY_MEDIA_GROUP' },
                   { hash: '0x9d2..a0', action: 'VERIFY_SIG', target: 'ATTESTATION_COMPLETE' },
                   { hash: '0x33b..ff', action: 'WATERMARK_SYNC', target: 'INVISIBLE_E_12' },
                 ].map((log, i) => (
                   <div key={i} className="flex gap-4 border-b border-white/5 pb-2 last:border-0 border-dashed">
                      <span className="cyan-glow font-bold">[{log.hash}]</span>
                      <span className="text-white">{log.action}:</span>
                      <span className="text-[var(--color-text-dim)]">{log.target}</span>
                   </div>
                 ))}
              </div>
           </div>
        </div>

        {/* AI Threat Intel Table */}
        <div className="glass p-4 flex flex-col h-[524px]">
           <div className="card-title">AI Threat Intel Heatmap</div>
           <div className="flex-1 grid grid-cols-10 grid-rows-6 gap-1 mt-2">
              {[...Array(60)].map((_, i) => {
                 const op = Math.random();
                 return (
                    <div 
                      key={i} 
                      className="bg-[var(--color-primary)] rounded-sm transition-all duration-1000"
                      style={{ opacity: op * 0.3 }}
                    />
                 );
              })}
           </div>
           <div className="flex justify-between mt-3 text-[9px] font-mono text-[var(--color-text-dim)] uppercase tracking-widest">
              <span>Low Risk</span>
              <span>Critical</span>
           </div>

           <div className="mt-6 space-y-4">
              <div className="card-title">Detection Explainer</div>
              {selectedThreat ? (
                <div className="space-y-3">
                   <div className="text-[11px] text-white font-medium italic leading-relaxed border-l-2 border-[var(--color-secondary)] pl-3">
                      "{selectedThreat.description}"
                   </div>
                   <div className="grid grid-cols-2 gap-2">
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                         <p className="text-[9px] text-[var(--color-text-dim)] uppercase">AI Confidence</p>
                         <p className="text-sm font-bold cyan-glow">{(selectedThreat.confidence * 100).toFixed(1)}%</p>
                      </div>
                      <div className="bg-white/5 p-2 rounded border border-white/5">
                         <p className="text-[9px] text-[var(--color-text-dim)] uppercase">Risk Level</p>
                         <p className="text-sm font-bold text-[var(--color-secondary)]">CRITICAL</p>
                      </div>
                   </div>
                </div>
              ) : (
                <p className="text-[10px] text-[var(--color-text-dim)] italic">Select node for analysis</p>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}

