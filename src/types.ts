export type Lead = {
  company: string;
  role: string;
  location: string;
  source: string;
  fitReason: string;
  nextAction: string;
};

export type LeadPack = {
  taskId: string;
  task: string;
  leads: Lead[];
  generatedAt: string;
};

export type PaymentQuote = {
  amount: string;
  currency: string;
  reason: string;
  status: "payment_required" | "paid";
};

export type PaymentConfirmation = {
  status: "confirmed";
  txHash: string;
  paidAt: string;
};

export type AgentIdentity = {
  agentName: string;
  agentId: string;
  agentUri: string;
  network: string;
};

export type VerificationResult = {
  status: "verified" | "failed";
  checkedBy: string;
  checks: {
    hasCompany: boolean;
    hasRole: boolean;
    hasLocation: boolean;
    hasFitReason: boolean;
    hasNextAction: boolean;
  }[];
  summary: string;
};

export type Receipt = {
  receiptType: "BountyAgentTaskReceipt";
  taskId: string;
  agent: AgentIdentity;
  payment: PaymentConfirmation;
  verification: VerificationResult;
  deliverableSummary: string;
  issuedAt: string;
};
