import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const internal = defineCollection({
  loader: glob({ base: './src/content/internal', pattern: '**/*.md' }),
});

export const collections = { internal };
