import { defineCollection } from 'astro:content';
import { PropertyInsightSchema } from '../d';

const propertiesInsight = defineCollection({
  type: 'data',
  schema: PropertyInsightSchema,
});

export const collections = { propertiesInsight };
