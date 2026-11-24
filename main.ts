// Cat Reviews Its Human — a one-star review, written by the house cat.
// The program writes the review as a single line to entry.txt in the
// output directory make.fun provides (MAKEFUN_OUTPUT_DIR, else ./output).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. The food is on time and the laptop is always warm, but he locks the bedroom door at night and then asks the vet why I scream at 4 a.m.";

// Self-check: the gate wants UTF-8 text of 1 to 200 characters, one line.
if (review.length < 1 || review.length > 200) {
  throw new Error(`review is ${review.length} characters, must be 1-200`);
}
if (review.includes("\n")) {
  throw new Error("review must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
console.log(`wrote entry.txt (${review.length} chars)`);
