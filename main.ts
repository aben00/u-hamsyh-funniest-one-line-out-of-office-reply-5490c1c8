import { mkdirSync, writeFileSync } from "node:fs";

// One-line out-of-office reply: the inbox is delegated to a future self
// who is, inconveniently, also on holiday. No setup, no name, no signature
// needed — the joke lands on its own in a single read.
const LINE =
  "I'm out of office — my inbox is being handled by my future self, who is also on holiday.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
