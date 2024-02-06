import { readFileSync, readdirSync, writeFileSync } from "fs";
import { join } from "path";

import matter from "gray-matter";

import { CAMPAIGNS } from "../campaigns.mjs";

function extractTitle(markdown) {
  const [, ...tail] = markdown.split("# ");
  const [title] = tail.join("# ").split("\n");

  return { title, content: markdown };
}

function getAllMarkdownFiles(dir) {
  const files = [];

  function traverseDirectory(currentDir) {
    const entries = readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = join(currentDir, entry.name);

      if (entry.isFile() && entry.name.endsWith(".md")) {
        files.push(fullPath);
      } else if (entry.isDirectory()) {
        traverseDirectory(fullPath);
      }
    }
  }

  traverseDirectory(dir);

  return files;
}

function convertMarkdown() {
  for (const campaign of CAMPAIGNS) {
    const dir = `./src/${campaign}/`;
    const files = getAllMarkdownFiles(dir);

    for (const file of files) {
      const contents = readFileSync(file, "utf8");
      const markdown = matter(contents);

      let title = markdown.data.title;
      const result = extractTitle(markdown.content);
      const content = result.content;
      if (!title) {
        title = result.title;
      }

      markdown.data["layout"] = "layout.webc";
      markdown.data["title"] = title;
      markdown.content = content;

      writeFileSync(file, matter.stringify(markdown));
    }
  }
}

convertMarkdown();
