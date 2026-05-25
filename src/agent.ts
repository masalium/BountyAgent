import { readFile } from "node:fs/promises";
import { randomUUID } from "node:crypto";
import type { Lead, LeadPack } from "./types.js";

export async function generateLeadPack(task: string): Promise<LeadPack> {
  const raw = await readFile(new URL("../data/leads.json", import.meta.url), "utf-8");
  const leads = JSON.parse(raw) as Lead[];

  // MVP logic: select top 3 from a stable mock dataset.
  // At the event, this can become a real API/search adapter if time allows.
  const selected = leads.slice(0, 3);

  return {
    taskId: `task-${randomUUID()}`,
    task,
    leads: selected,
    generatedAt: new Date().toISOString()
  };
}

export function formatLeadPack(pack: LeadPack): string {
  const lines = [
    "=== VERIFIED LEAD PACK ===",
    `Task ID: ${pack.taskId}`,
    `Task: ${pack.task}`,
    `Generated: ${pack.generatedAt}`,
    ""
  ];

  pack.leads.forEach((lead, index) => {
    lines.push(
      `${index + 1}. ${lead.role} — ${lead.company}`,
      `   Location: ${lead.location}`,
      `   Why it matches: ${lead.fitReason}`,
      `   Next action: ${lead.nextAction}`,
      `   Source: ${lead.source}`,
      ""
    );
  });

  return lines.join("\n");
}
