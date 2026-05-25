import { generateLeadPack, formatLeadPack } from "./agent.js";
import { getAgentIdentity } from "./identityAdapter.js";
import { confirmPaymentMock, quoteTask } from "./paymentAdapter.js";
import { generateReceipt, formatReceipt } from "./receipt.js";
import { verifyLeadPack } from "./verifyAgent.js";

async function main() {
  const task = "Find me 3 relevant healthcare admin opportunities in Toronto.";

  console.log("\nBountyAgent received task:");
  console.log(`"${task}"`);

  const agent = getAgentIdentity();
  console.log("\nRegistered agent identity:");
  console.log(agent);

  const quote = quoteTask(task);
  console.log("\nPayment quote:");
  console.log(quote);

  console.log("\nMock payment required -> confirming payment...");
  const payment = await confirmPaymentMock();
  console.log("Payment confirmed:");
  console.log(payment);

  console.log("\nGenerating deliverable...");
  const leadPack = await generateLeadPack(task);
  console.log(formatLeadPack(leadPack));

  console.log("\nRunning VerifyAgent...");
  const verification = verifyLeadPack(leadPack);
  console.log(verification);

  console.log("\nGenerating receipt...");
  const receipt = generateReceipt({
    agent,
    payment,
    verification,
    leadPack
  });

  console.log(formatReceipt(receipt));

  console.log("\nMVP complete: task -> payment -> deliverable -> verification -> receipt.");
}

main().catch((error) => {
  console.error("BountyAgent demo failed:", error);
  process.exit(1);
});
