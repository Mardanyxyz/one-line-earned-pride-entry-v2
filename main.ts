// One Line of Earned Pride — v2 (lifeguard lane)
// Pure Node, no dependencies. Writes a single line to /output/entry.txt.

import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "For nine summers he'd watched the pool without once needing to move; when the boy slipped under, he was in the water before anyone else stood up — then he climbed back into his chair, dripping, and went back to watching.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
