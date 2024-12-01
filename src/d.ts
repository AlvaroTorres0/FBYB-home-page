import { z } from 'zod';

export const PropertyInsightSchema = z.object({
  title: z.string(),
  date: z.string(),
  readTime: z.string(),
  description: z.string(),
  buttonText: z.string(),
  rowCard: z.boolean(),
  buttonBlue: z.boolean(),
  imageUrlMobile: z.string(),
  imageUrlDesktop: z.string(),
  imageAltText: z.string().optional(),
});
