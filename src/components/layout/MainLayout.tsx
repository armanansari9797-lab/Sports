import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, Search, User } from 'lucide-react';
import { cn } from '../../lib/utils';

export default function MainLayout() {
  return (
    <div className="flex h-screen bg-[var(--color-dark)] overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-[60px] border-b border-[var(--color-border)] bg-[var(--color-dark)] flex items-center justify-between px-6 z-10 flex-shrink-0">
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded border border-white/5 w-80">
               <Search className="w-3.5 h-3.5 text-[var(--color-text-dim)]" />
               <input 
                 type="text" 
                 placeholder="Search ledger..." 
                 className="bg-transparent border-none outline-none text-[11px] text-white w-full font-mono"
               />
             </div>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 px-3 py-1 border border-[var(--color-success)] bg-[var(--color-success)]/10 text-[var(--color-success)] rounded text-[10px] font-mono">
               <div className="pulse" />
               SYSTEM ARMED: ACTIVE MONITORING
            </div>
            
            <div className="flex items-center gap-4">
              <button className="p-1.5 text-[var(--color-text-dim)] hover:text-[var(--color-primary)] transition-colors relative">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-[var(--color-primary)] rounded-full animate-pulse shadow-[0_0_5px_var(--color-primary)]" />
              </button>
              <div className="flex items-center gap-3 pl-2">
                <div className="w-8 h-8 rounded bg-white/5 border border-white/10 flex items-center justify-center overflow-hidden">
                  <User className="w-4 h-4 text-[var(--color-text-dim)]" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content Area uses Grid according to theme */}
        <main className="flex-1 overflow-hidden">
           <div className="h-full w-full grid grid-cols-[1fr_280px] gap-3 p-3">
              <div className="overflow-y-auto custom-scrollbar">
                 <Outlet />
              </div>
              
              {/* Right Intel Panel built into layout based on density requirement */}
              <div className="flex flex-col gap-3 overflow-hidden">
                 <div className="glass flex-1 flex flex-col overflow-hidden">
                    <div className="p-4 border-b border-[var(--color-border)] bg-white/5 flex items-center justify-between">
                       <span className="text-[11px] font-bold tracking-widest uppercase">Piracy Alerts</span>
                       <span className="text-[10px] text-[var(--color-secondary)] font-bold">● 14 LIVE</span>
                    </div>
                    <div className="flex-1 overflow-y-auto p-4 space-y-3">
                       {[
                         { label: 'Unauthorized Stream', tag: 'TWITCH.TV', high: true },
                         { label: 'Illegal Highlight', tag: 'X.COM', high: false },
                         { label: 'Domain Hijack', tag: 'DNS_SEC', high: true },
                         { label: 'Deepfake Match', tag: 'YOUTUBE', high: false },
                         { label: 'IP Infringement', tag: 'IPTV', high: false },
                       ].map((alert, i) => (
                         <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--color-border)] last:border-0 border-dashed">
                            <span className={cn("text-[11px]", alert.high ? "text-[var(--color-secondary)] font-bold" : "text-white")}>{alert.label}</span>
                            <span className="label-tag">{alert.tag}</span>
                         </div>
                       ))}
                       
                       <div className="mt-8 bg-[var(--color-secondary)]/10 border border-[var(--color-secondary)]/40 p-4 rounded text-xs">
                          <p className="text-[var(--color-secondary)] font-bold mb-1">CRITICAL ANOMALY</p>
                          <p className="text-[10px] text-[var(--color-text-dim)] leading-tight">Detected mass re-broadcast from localized IP cluster in Singapore.</p>
                          <button className="w-full mt-3 bg-[var(--color-secondary)] text-white py-2 rounded text-[10px] font-bold hover:bg-[var(--color-secondary)]/80 transition-all uppercase tracking-tighter">
                             Execute Automated Takedown
                          </button>
                       </div>
                    </div>
                 </div>

                 <div className="glass h-[180px] p-4 flex flex-col">
                    <div className="card-title">Security Nodes</div>
                    <div className="flex gap-1.5 flex-wrap">
                       {[...Array(24)].map((_, i) => (
                          <div key={i} className="w-2.5 h-2.5 bg-[var(--color-success)] rounded-sm opacity-60 hover:opacity-100 transition-opacity cursor-pointer" />
                       ))}
                    </div>
                    <div className="mt-auto">
                       <div className="stat-value text-lg">2.4 TB/s</div>
                       <div className="text-[9px] text-[var(--color-text-dim)] font-mono uppercase tracking-widest mt-1">Scanning Traffic</div>
                    </div>
                 </div>
              </div>
           </div>
        </main>
      </div>
    </div>
  );
}

