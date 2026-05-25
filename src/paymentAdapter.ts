import "dotenv/config";
import type { PaymentConfirmation, PaymentQuote } from "./types.js";

export function quoteTask(task: string): PaymentQuote {
  return {
    amount: process.env.PAYMENT_AMOUNT ?? "1",
    currency: process.env.PAYMENT_CURRENCY ?? "TEST",
    reason: `BountyAgent will complete and verify this microtask: "${task}"`,
    status: "payment_required"
  };
}

// Hackathon adapter.
// Tonight this is mocked. At the event, replace this with x402/GOAT payment confirmation.
export async function confirmPaymentMock(): Promise<PaymentConfirmation> {
  return {
    status: "confirmed",
    txHash: `mock-tx-${Math.random().toString(16).slice(2, 10)}`,
    paidAt: new Date().toISOString()
  };
}
