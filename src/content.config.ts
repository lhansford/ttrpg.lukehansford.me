import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const locations = defineCollection({
  loader: glob({ pattern: ['**/locations/*.md'], base: 'src/data/' }),
});

const pcs = defineCollection({
  loader: glob({ pattern: ['**/pcs/*.md'], base: 'src/data/' }),
});

const npcs = defineCollection({
  loader: glob({ pattern: ['**/npcs/*.md'], base: 'src/data/' }),
});

const organisations = defineCollection({
  loader: glob({ pattern: ['**/organisations/*.md'], base: 'src/data/' }),
});

const sessionNotes = defineCollection({
  loader: glob({ pattern: ['**/session-notes/*.md'], base: 'src/data/' }),
});

const concepts = defineCollection({
  loader: glob({ pattern: ['**/concepts/*.md'], base: 'src/data/' }),
});

export const collections = {
  locations,
  pcs,
  npcs,
  concepts,
  organisations,
  'session-notes': sessionNotes,
};
