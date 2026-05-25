import "dotenv/config";
import type { AgentIdentity } from "./types.js";

export function getAgentIdentity(): AgentIdentity {
  return {
    agentName: process.env.AGENT_NAME ?? "BountyAgent",
    agentId: process.env.AGENT_ID ?? "mock-erc8004-agent-001",
    agentUri: process.env.AGENT_URI ?? "https://example.com/bountyagent.json",
    network: "GOAT Testnet3 / mock local mode"
  };
}
