export interface Asset {
  id: string;
  name: string;
  type: 'video' | 'image' | 'audio' | 'document';
  status: 'protected' | 'alert' | 'processing';
  protectionScore: number;
  uploadedAt: string;
  owner: string;
  blockchainHash: string;
  thumbnail?: string;
  fileSize: string;
}

export interface Threat {
  id: string;
  assetId: string;
  severity: 'high' | 'medium' | 'low';
  type: 'piracy' | 'deepfake' | 'unauthorized_usage' | 'tampering';
  source: string;
  detectedAt: string;
  status: 'active' | 'mitigated' | 'investigating';
  description: string;
  confidence: number;
}

export interface SecurityMetric {
  label: string;
  value: string | number;
  change: number;
  trend: 'up' | 'down';
}

export interface VerificationLog {
  id: string;
  timestamp: string;
  action: string;
  details: string;
  txHash: string;
}
