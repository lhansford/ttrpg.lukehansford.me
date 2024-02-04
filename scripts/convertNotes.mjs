import { readFileSync, readdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const TYPES = {
  POST: {
    dir: './src/posts/',
    template: 'post.webc',
  },
  BOOK: {
    dir: './src/books/',
    template: 'book.webc',
  },
  NOTE: {
    dir: './src/notes/',
    template: 'note.webc',
  },
};

function extractTitle(markdown) {
  const [, ...tail] = markdown.split('# ');
  const [title, ...content] = tail.join('# ').split('\n');

  return { title, content: content.join('\n') };
}

function convertMarkdown(type) {
  const { dir, template } = TYPES[type];
  const files = readdirSync(dir);
  for (const file of files) {
    const contents = readFileSync(join(dir, file), 'utf8');
    const markdown = matter(contents);

    let title = markdown.data.title;
    const result = extractTitle(markdown.content);
    const content = result.content;
    if (!title) {
      title = result.title;
    }

    markdown.data['layout'] = template;
    markdown.data['title'] = title;
    markdown.content = content;

    writeFileSync(join(dir, file), matter.stringify(markdown));
  }
}

convertMarkdown('POST');
convertMarkdown('BOOK');
convertMarkdown('NOTE');
