import fs from "fs";
import path from "path";

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const inputPath = path.join(currentDir, "input.txt");
const examplePath = path.join(currentDir, "example.txt");

let example: string[];
let input: string[];

try {
  const exampleData = fs.readFileSync(examplePath, "utf8");
  const data = fs.readFileSync(inputPath, "utf8");

  example = exampleData.split(/\r?\n/);
  input = data.split(/\r?\n/);
} catch (err) {
  console.error("Error reading input", err);
  example = [];
  input = [];
}

// edit day to match folder name
export const day2Example = example;
export const day2Input = input;
