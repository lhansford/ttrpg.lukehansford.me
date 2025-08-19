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

export const collections = {
  locations,
  pcs,
  npcs,
};
