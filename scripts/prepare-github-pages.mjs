import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve("dist", "client");

mkdirSync(distDir, { recursive: true });
copyFileSync(resolve(distDir, "index.html"), resolve(distDir, "404.html"));
writeFileSync(resolve(distDir, ".nojekyll"), "");
