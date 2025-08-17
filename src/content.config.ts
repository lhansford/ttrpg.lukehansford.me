import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { CAMPAIGNS } from "./constants";
import type { BaseSchema, CollectionConfig } from "astro/content/config";

type Collection = {
  pcs: CollectionConfig<BaseSchema>;
};


// TODO: Will need to do this https://docs.astro.build/en/guides/content-collections/#defining-custom-ids

const locations = defineCollection({
  loader: glob({ pattern: ["**/locations/*.md"], base: "src/data/" }),
})

const pcs = defineCollection({
  loader: glob({ pattern: ["**/pcs/*.md"], base: "src/data/" }),
})

const npcs = defineCollection({
  loader: glob({ pattern: ["**/npcs/*.md"], base: "src/data/" }),
})

export const collections = {
  locations,
  pcs,
  npcs
};
