// SPDX-License-Identifier: MIT
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "I'm out of office until Monday — my inbox is being guarded by an intern who has never met me and is already afraid of you.";

if (!ENTRY || ENTRY.trim().length === 0) {
  throw new Error("ENTRY must not be empty");
}
if (ENTRY.includes("\n")) {
  throw new Error("ENTRY must be a single line");
}
if (ENTRY.length > 200) {
  throw new Error(`ENTRY must be at most 200 characters (got ${ENTRY.length})`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");
console.log(`Wrote entry.txt (${ENTRY.length} chars)`);
