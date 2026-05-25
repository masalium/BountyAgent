import type { LeadPack, VerificationResult } from "./types.js";

export function verifyLeadPack(pack: LeadPack): VerificationResult {
  const checks = pack.leads.map((lead) => ({
    hasCompany: Boolean(lead.company),
    hasRole: Boolean(lead.role),
    hasLocation: Boolean(lead.location),
    hasFitReason: Boolean(lead.fitReason),
    hasNextAction: Boolean(lead.nextAction)
  }));

  const allPassed = checks.every((check) =>
    Object.values(check).every(Boolean)
  );

  return {
    status: allPassed ? "verified" : "failed",
    checkedBy: "VerifyAgent-local-001",
    checks,
    summary: allPassed
      ? `VerifyAgent approved ${pack.leads.length}/${pack.leads.length} leads.`
      : "VerifyAgent found missing required fields."
  };
}
