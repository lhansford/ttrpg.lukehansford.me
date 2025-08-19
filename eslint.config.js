import { defineConfig } from 'eslint/config';
import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigBase from 'eslint-config-lukehansford-base';
import markdown from '@eslint/markdown';

import noWikiStyleImages from './eslint-rules/no-wiki-style-images.js';

const config = eslintConfigBase.map((r) => ({ ...r, files: ['**/*.{ts,tsx,astro}'] }));
const personalMarkdownRulesPlugin = { rules: { 'no-wiki-style-images': noWikiStyleImages } };

// This is needed due to a conflict with @eslint/markdown. See https://github.com/ota-meshi/eslint-plugin-astro/issues/485
const moddedAstroConfig = [
  ...eslintPluginAstro.configs.recommended.filter((conf) => conf.files),
  {
    extends: [...eslintPluginAstro.configs.recommended.filter((conf) => !conf.files)],
    files: ['**/*.astro'],
  },
];

export default defineConfig([
  ...config,
  ...moddedAstroConfig,
  {
    files: ['**/*.{astro,ts,tsx}'],
    rules: {
      'import/no-unresolved': [
        'error',
        { ignore: ['astro:assets', 'astro:content', 'astro/loaders'] },
      ],
    },
  },
  {
    files: ['**/*.md'],
    plugins: { markdown, personal: personalMarkdownRulesPlugin },
    language: 'markdown/gfm',
    languageOptions: { frontmatter: 'yaml' },
    extends: ['markdown/recommended'],
    rules: {
      'personal/no-wiki-style-images': 'error',
      'markdown/no-html': 'off',
      'markdown/no-duplicate-headings': 'error',
      'markdown/no-missing-label-refs': 'off', // This doesn't play well with Obsidian-based markdown.
    },
  },
]);
