import type { AgentIdentity, LeadPack, PaymentConfirmation, Receipt, VerificationResult } from "./types.js";

export function generateReceipt(args: {
  agent: AgentIdentity;
  payment: PaymentConfirmation;
  verification: VerificationResult;
  leadPack: LeadPack;
}): Receipt {
  return {
    receiptType: "BountyAgentTaskReceipt",
    taskId: args.leadPack.taskId,
    agent: args.agent,
    payment: args.payment,
    verification: args.verification,
    deliverableSummary: `Generated ${args.leadPack.leads.length} verified leads for task: ${args.leadPack.task}`,
    issuedAt: new Date().toISOString()
  };
}

export function formatReceipt(receipt: Receipt): string {
  return [
    "=== BOUNTYAGENT RECEIPT ===",
    `Receipt Type: ${receipt.receiptType}`,
    `Task ID: ${receipt.taskId}`,
    `Agent: ${receipt.agent.agentName}`,
    `Agent ID: ${receipt.agent.agentId}`,
    `Agent URI: ${receipt.agent.agentUri}`,
    `Network: ${receipt.agent.network}`,
    `Payment Status: ${receipt.payment.status}`,
    `Payment Tx: ${receipt.payment.txHash}`,
    `Verification: ${receipt.verification.status}`,
    `Verified By: ${receipt.verification.checkedBy}`,
    `Verification Summary: ${receipt.verification.summary}`,
    `Issued At: ${receipt.issuedAt}`
  ].join("\n");
}
