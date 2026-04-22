import { Link, useLocation } from 'react-router-dom';
import { LayoutDashboard, Shield, Zap, Database, Settings, BarChart3, Lock, LogOut } from 'lucide-react';
import { cn } from '../../lib/utils';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard' },
  { icon: Shield, label: 'Threat Intel', path: '/threats' },
  { icon: Database, label: 'Media Vault', path: '/vault' },
  { icon: BarChart3, label: 'Analytics', path: '/analytics' },
  { icon: Lock, label: 'Verification', path: '/verify' },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="w-[240px] h-screen border-r border-[var(--color-border)] bg-[var(--color-dark)] flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-[var(--color-border)] flex items-center justify-between">
        <div className="logo text-lg font-extrabold flex items-center gap-2">
           <div className="w-6 h-6 bg-[var(--color-primary)] rounded shadow-[0_0_15px_var(--color-primary)]" />
           <span className="tracking-tight">SportShield <span className="font-light opacity-50">v2.4</span></span>
        </div>
      </div>

      <div className="p-3">
         <div className="glass p-4 mb-4">
            <div className="card-title">Integrity Score</div>
            <div className="relative w-24 h-24 rounded-full border-4 border-white/5 border-t-[var(--color-primary)] mx-auto flex items-center justify-center my-2">
               <span className="font-mono text-xl font-bold italic tracking-tighter">98.2</span>
            </div>
            <div className="text-[9px] text-center text-[var(--color-success)] font-bold tracking-widest mt-2 uppercase">EXCELLENT PROTECTION</div>
         </div>
      </div>

      <nav className="flex-1 px-3 space-y-1">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={cn(
              "flex items-center gap-2 px-3 py-2.5 rounded transition-all text-xs",
              location.pathname === item.path
                ? "neon-border text-white"
                : "text-[var(--color-text-dim)] hover:text-white"
            )}
          >
            <item.icon className="w-4 h-4" />
            <span className="font-medium tracking-tight">{item.label}</span>
          </Link>
        ))}
        
        <div className="pt-6 px-3">
           <div className="card-title">Live Licenses</div>
           <div className="space-y-2">
              <div className="flex justify-between text-[11px]">
                 <span className="text-[var(--color-text-dim)]">FIFA World Cup</span>
                 <span className="cyan-glow text-[9px] font-bold">LIVE</span>
              </div>
              <div className="flex justify-between text-[11px]">
                 <span className="text-[var(--color-text-dim)]">NBA Finals</span>
                 <span className="cyan-glow text-[9px] font-bold">LIVE</span>
              </div>
           </div>
        </div>
      </nav>

      <div className="p-3 border-t border-[var(--color-border)] bg-black/20">
         <div className="flex items-center gap-2 text-[10px] text-[var(--color-text-dim)] font-mono">
            <div className="pulse" />
            <span>SECURE_NODE: RY-82</span>
         </div>
      </div>
    </div>
  );
}

