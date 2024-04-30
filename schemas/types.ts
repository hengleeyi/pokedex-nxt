import { z } from "zod";

const responseSchema = z.object({
  count: z.number(),
  next: z.string().nullable(),
  previous: z.string().nullable(),
});

export const typeSchema = z.object({
  name: z.string().min(1),
  url: z.string().min(1),
});

export const typesResultSchema = z.object({
  results: z.array(typeSchema),
});

export const typesResponseSchema = responseSchema.merge(typesResultSchema);
