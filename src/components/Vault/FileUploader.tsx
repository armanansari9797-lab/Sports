import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Upload, X, File, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FileUploaderProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FileUploader({ isOpen, onClose }: FileUploaderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const startUpload = () => {
    if (!file) return;
    setUploading(true);
    setProgress(0);

    // Simulate upload progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setUploading(false);
          // Simulate completion delay
          setTimeout(() => {
            onClose();
            setFile(null);
            setProgress(0);
          }, 1000);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="glass w-full max-w-lg p-6 relative overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Upload className="w-5 h-5 text-[var(--color-primary)]" />
                Ingest New Media Asset
              </h3>
              <button 
                onClick={onClose}
                className="p-1 hover:bg-white/5 rounded-md transition-colors"
              >
                <X className="w-5 h-5 text-slate-500" />
              </button>
            </div>

            {!file ? (
              <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className={cn(
                  "border-2 border-dashed rounded-xl p-10 flex flex-col items-center justify-center text-center transition-all cursor-pointer",
                  isDragging 
                    ? "border-[var(--color-primary)] bg-[var(--color-primary)]/5" 
                    : "border-slate-800 hover:border-slate-700 bg-black/20"
                )}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileSelect}
                  className="hidden"
                />
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <Upload className={cn("w-8 h-8 transition-colors", isDragging ? "text-[var(--color-primary)]" : "text-slate-500")} />
                </div>
                <p className="text-slate-200 font-medium mb-1">Click or drag file to upload</p>
                <p className="text-slate-500 text-xs">Maximum file size: 2GB (MP4, JPG, PNG, WAV)</p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="bg-white/5 rounded-xl p-4 flex items-center gap-4 border border-white/5">
                  <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center">
                    <File className="w-6 h-6 text-[var(--color-primary)]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-200 truncate">{file.name}</p>
                    <p className="text-xs text-slate-500 font-mono">{(file.size / (1024 * 1024)).toFixed(2)} MB</p>
                  </div>
                  {!uploading && (
                    <button 
                      onClick={() => setFile(null)}
                      className="p-1 hover:bg-white/5 rounded-md text-red-400"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {uploading || progress > 0 ? (
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono mb-1">
                      <span className="text-slate-500 uppercase">Encrypting & Uploading</span>
                      <span className="text-[var(--color-primary)]">{progress}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        className="h-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]"
                      />
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-slate-500 mt-2 italic">
                      <Loader2 className="w-3 h-3 animate-spin text-[var(--color-primary)]" />
                      SECURE CHANNEL ESTABLISHED...
                    </div>
                  </div>
                ) : (
                  <button
                    onClick={startUpload}
                    className="w-full py-4 bg-[var(--color-primary)] text-black rounded-xl font-bold flex items-center justify-center gap-2 hover:shadow-[0_0_25px_rgba(0,242,255,0.4)] transition-all"
                  >
                    Start Secure Ingestion
                  </button>
                )}
              </div>
            )}

            <div className="mt-8 pt-6 border-t border-white/5 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[var(--color-success)]" />
                <span className="text-[10px] text-slate-500 uppercase tracking-tighter">End-to-End Encryption</span>
              </div>
              <div className="flex items-center gap-2 leading-none">
                <AlertCircle className="w-4 h-4 text-slate-600" />
                <span className="text-[10px] text-slate-500 uppercase tracking-tighter">Blockchain Registered</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
