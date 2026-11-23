import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE = "My wife asked me to stop telling jokes about the bed. I said, 'I can't, I'm really good at making them.'";
if (JOKE.length < 1 || JOKE.length > 200) {
  throw new Error("entry must be 1-200 characters");
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
