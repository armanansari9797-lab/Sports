import { useState } from 'react';
import { motion } from 'motion/react';
import { Database, Filter, Grid, List, Plus, Search, Shield, MoreHorizontal, Download, Share2, Lock } from 'lucide-react';
import { Asset } from '../types';
import FileUploader from '../components/Vault/FileUploader';

const assets: Asset[] = [
  { id: 'A1', name: 'WC_2026_Final_Highlights.mp4', type: 'video', status: 'protected', protectionScore: 99, uploadedAt: '12 Apr 2026', owner: 'FIFA Official', blockchainHash: '0x88f2...12a', fileSize: '1.2 GB' },
  { id: 'A2', name: 'Athlete_Interview_Kane.jpg', type: 'image', status: 'alert', protectionScore: 45, uploadedAt: '11 Apr 2026', owner: 'Team Media', blockchainHash: '0x44a1...99e', fileSize: '4.5 MB' },
  { id: 'A3', name: 'Training_Camp_Exclusive.mp4', type: 'video', status: 'protected', protectionScore: 98, uploadedAt: '10 Apr 2026', owner: 'Arsenal FC', blockchainHash: '0x22b4...cc1', fileSize: '850 MB' },
  { id: 'A4', name: 'Brand_Identity_Asset.svg', type: 'document', status: 'processing', protectionScore: 0, uploadedAt: 'Just Now', owner: 'Marketing Dep', blockchainHash: 'Pending...', fileSize: '120 KB' },
  { id: 'A5', name: 'Supporters_Chants_Live.wav', type: 'audio', status: 'protected', protectionScore: 95, uploadedAt: '09 Apr 2026', owner: 'Fan Engagement', blockchainHash: '0x11d8...ff3', fileSize: '32 MB' },
];

export default function Vault() {
  const [isUploaderOpen, setIsUploaderOpen] = useState(false);

  return (
    <div className="space-y-8 max-w-[1600px] mx-auto pb-10">
      <FileUploader isOpen={isUploaderOpen} onClose={() => setIsUploaderOpen(false)} />
      
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-100">Secure Media Vault</h2>
          <p className="text-slate-500 font-medium">Encrypted storage and ownership tracking</p>
        </div>
        <button 
          onClick={() => setIsUploaderOpen(true)}
          className="flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-black rounded-xl font-bold transition-all hover:shadow-[0_0_20px_rgba(0,242,255,0.3)] group"
        >
          <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          Ingest New Asset
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 items-center justify-between bg-slate-900/40 p-4 rounded-xl border border-slate-800">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-slate-800 rounded-lg w-full max-w-md">
            <Search className="w-4 h-4 text-slate-500" />
            <input type="text" placeholder="Filter by asset name, hash, or owner..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
          <button className="p-2 border border-slate-800 rounded-lg hover:bg-slate-800 text-slate-400">
            <Filter className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-2 border border-slate-800 p-1 rounded-lg">
          <button className="p-2 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-md">
            <Grid className="w-5 h-5" />
          </button>
          <button className="p-2 text-slate-500 hover:text-slate-300">
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {assets.map((asset, i) => (
          <motion.div 
            key={asset.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="glass-panel group overflow-hidden border border-slate-800 hover:border-[var(--color-primary)]/40 transition-all flex flex-col"
          >
            <div className="aspect-[16/10] bg-slate-900 relative flex items-center justify-center overflow-hidden">
              <div className="absolute top-3 left-3 z-20">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider ${
                  asset.status === 'protected' ? 'bg-emerald-500/10 text-emerald-400' : 
                  asset.status === 'alert' ? 'bg-red-500/10 text-red-400' : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {asset.status}
                </span>
              </div>
              <div className="absolute top-3 right-3 z-20 dropdown">
                 <button className="p-1 px-2 bg-black/40 backdrop-blur-md rounded border border-white/10 text-slate-400 hover:text-white transition-colors">
                   <MoreHorizontal className="w-4 h-4" />
                 </button>
              </div>
              
              {/* Asset Preview Mockup */}
              <Database className="w-16 h-16 text-slate-800 group-hover:scale-110 transition-transform duration-500" />
              
              {asset.status === 'protected' && (
                <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2 py-1 bg-black/60 backdrop-blur-md rounded border border-emerald-500/30">
                  <Lock className="w-3 h-3 text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-400">ENCRYPTED</span>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4 gap-2">
                 <button className="flex-1 py-1.5 bg-white text-black text-xs font-bold rounded hover:bg-slate-200 transition-all flex items-center justify-center gap-1">
                   <Download className="w-3 h-3" /> Download
                 </button>
                 <button className="flex-1 py-1.5 bg-slate-800 text-white text-xs font-bold rounded hover:bg-slate-700 transition-all flex items-center justify-center gap-1 border border-white/10">
                   <Share2 className="w-3 h-3" /> Share
                 </button>
              </div>
            </div>

            <div className="p-5 space-y-4">
              <div>
                <h3 className="font-bold text-slate-100 line-clamp-1">{asset.name}</h3>
                <p className="text-xs text-slate-500 font-mono mt-1 uppercase">{asset.type} • {asset.fileSize}</p>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-[10px] font-mono tracking-tighter">
                  <span className="text-slate-500">PROTECTION SCORE</span>
                  <span className={asset.protectionScore > 80 ? 'text-emerald-400' : 'text-red-400'}>{asset.protectionScore}%</span>
                </div>
                <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${asset.protectionScore}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className={`h-full ${asset.protectionScore > 80 ? 'bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]' : 'bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.3)]'}`}
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-2">
                 <div>
                    <p className="text-[10px] text-slate-600 uppercase mb-0.5">Asset Owner</p>
                    <p className="text-xs font-bold text-slate-400">{asset.owner}</p>
                 </div>
                 <div className="text-right">
                    <p className="text-[10px] text-slate-600 uppercase mb-0.5">BC Hash</p>
                    <p className="text-xs font-mono text-slate-500 truncate">{asset.blockchainHash}</p>
                 </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
