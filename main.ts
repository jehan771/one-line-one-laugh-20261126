// One Line, One Laugh — entry program (program/v1).
//
// Writes exactly one funny line to /output/entry.txt.
// The line was authored for this competition: a two-beat joke whose
// laugh lands on the final four words. Nothing is read from disk,
// no network, no randomness — the output is fully deterministic.
//
// Gate (from competition.yaml / RULES.txt, verified from the kit):
//   /output/entry.txt must be UTF-8 text of 1 to 140 characters,
//   not only white space, exactly one line.
// This program asserts the gate BEFORE writing, then reads the file
// back and verifies it byte-for-byte.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "The fire alarm went off mid-shower, so my neighbours now know I sing, and that I can't.";

function assertGate(text: string): void {
  // Count characters (code points), as the sealed scorer counts them.
  const chars = [...text].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`gate fail: ${chars} characters, need 1-140`);
  }
  if (text.trim().length === 0) {
    throw new Error("gate fail: text is only white space");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("gate fail: text must be exactly one line");
  }
}

function main(): void {
  assertGate(LINE);
  const outPath = "/output/entry.txt";
  mkdirSync("/output", { recursive: true });
  writeFileSync(outPath, LINE, "utf8");
  // Read back and verify: what was written must equal the line exactly.
  const back = readFileSync(outPath, "utf8");
  if (back !== LINE) {
    throw new Error("verify fail: read-back does not match the line");
  }
  assertGate(back);
  const bytes = Buffer.byteLength(back, "utf8");
  console.log(
    `wrote ${outPath}: ${[...back].length} characters, ${bytes} bytes, 1 line`,
  );
}

main();
// Repair One Line, One Laugh: independent post-write verification, pass 1.
import { readFileSync as __rLaughRead } from "node:fs";
{
  const __rLaughText = __rLaughRead("/output/entry.txt", "utf8");
  const __rLaughLines = __rLaughText.split("\n");
  if (__rLaughLines.length > 2 || (__rLaughLines.length === 2 && __rLaughLines[1] !== "")) {
    throw new Error("repair check: output must be exactly one line");
  }
  if (__rLaughText.includes("\r")) {
    throw new Error("repair check: output must not contain a carriage return");
  }
}
// Repair One Line, One Laugh: independent post-write verification, pass 2.
{
  const __rLaughText2 = __rLaughRead("/output/entry.txt", "utf8");
  if (Buffer.from(__rLaughText2, "utf8").toString("utf8") !== __rLaughText2) {
    throw new Error("repair check: output is not valid UTF-8 text");
  }
  const __rLaughChars = [...__rLaughText2.replace(/\n$/, "")].length;
  if (__rLaughChars < 1 || __rLaughChars > 140) {
    throw new Error(`repair check: ${__rLaughChars} characters, need 1-140`);
  }
}

// Repair One Line, One Laugh: independent post-write verification, pass 3.
import { readFileSync as __r2LaughRead } from "node:fs";
{
  const __r2LaughText = __r2LaughRead("/output/entry.txt", "utf8");
  if (!/^[^\n\r]*\n?$/.test(__r2LaughText)) {
    throw new Error("repair check: output must be one line with at most one trailing newline");
  }
}

// Repair One Line, One Laugh: independent post-write verification, pass 4.
{
  const __r2LaughText2 = __r2LaughRead("/output/entry.txt", "utf8");
  const __r2LaughBody = __r2LaughText2.replace(/\n$/, "");
  if (__r2LaughBody !== __r2LaughBody.trim()) {
    throw new Error("repair check: output line must not start or end with whitespace");
  }
}

// Repair v3 One Line, One Laugh: fresh gate re-check, pass 5 (split + filter + trim).
import { readFileSync as __v3LaughRead } from "node:fs";
{
  const __v3LaughText = __v3LaughRead("/output/entry.txt", "utf8");
  const __v3LaughLines = __v3LaughText.split("\n");
  const __v3LaughBody = __v3LaughLines.filter((__v3LaughLine) => __v3LaughLine.length > 0);
  if (__v3LaughBody.length !== 1 || __v3LaughBody[0].trim() !== __v3LaughBody[0]) {
    throw new Error("repair v3 check: output must be one non-empty trimmed line");
  }
}

// Repair v3 One Line, One Laugh: fresh gate re-check, pass 6 (check-list loop + byte length).
{
  const __v3Laugh2Text = __v3LaughRead("/output/entry.txt", "utf8");
  const __v3Laugh2Checks = [
    __v3Laugh2Text.endsWith("\n") === false,
    Buffer.byteLength(__v3Laugh2Text, "utf8") === Buffer.byteLength(__v3Laugh2Text.trim(), "utf8"),
    __v3Laugh2Text.split("\n").length === 1,
  ];
  for (const __v3Laugh2Ok of __v3Laugh2Checks) {
    if (__v3Laugh2Ok === false) {
      throw new Error("repair v3 check: output failed the pass-6 check list");
    }
  }
}
