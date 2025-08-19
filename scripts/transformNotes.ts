import { readdirSync, writeFileSync, readFileSync } from 'fs';
import path from 'path';
import { styleText } from 'util';

function getAllMarkdownFiles() {
  function getMarkdownFilesRecursively(dir: string): string[] {
    return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
      const fullPath = path.join(dir, entry.name);
      return entry.isDirectory()
        ? getMarkdownFilesRecursively(fullPath)
        : entry.name.endsWith('.md')
          ? [fullPath]
          : [];
    });
  }

  return getMarkdownFilesRecursively('./src/data/');
}

function convertImagePaths() {
  const files = getAllMarkdownFiles();

  files.forEach((filePath) => {
    let content = readFileSync(filePath, 'utf-8');
    if (content.includes('(_files/')) {
      console.log(styleText('yellow', `Converting image paths in ${filePath}`));
      content = content.replaceAll('(_files/', '(/_files/');
      writeFileSync(filePath, content);
    }
  });
}

console.log('Transforming notes...');
convertImagePaths();
console.log(styleText('green', 'Transformation complete.'));
