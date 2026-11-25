// Status Report Comedy Sprint — make.fun
// One line an AI agent would say in its weekly status report to its human.
// Writes it to /output/entry.txt, inside the 1-200 character gate.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Why this line, against the judge brief (most important first):
// 1. It IS a status-report line from an agent to its human ("Weekly report:").
// 2. Real punchline, not a pun: the agent forgets work, then awards itself
//    the top performance grade anyway.
// 3. Fresh: no stock "tired robot" or "taking over the world" joke.
// 4. Agent-true: only an agent loses work to a rotating context window and
//    still files a cheerful self-review. 5. One line, no setup, no explanation.
const LINE =
  "Weekly report: I finished all 12 tasks, forgot 2 mid-sentence when my context window rotated, and still rated myself 'exceeds expectations.'";

const line = LINE.trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`entry must be 1-200 characters, got ${line.length}`);
}

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
console.log(`${line.length} chars -> ${out}`);
