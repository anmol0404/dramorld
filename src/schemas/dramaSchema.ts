import { z } from "zod";

export const linkSchema = z.object({
  episodeNumber: z.number().int().positive(),
  shortUrl: z.string().url(),
  teleUrl: z.string().url(),
});

export const dramaSchema = z.object({
  shareId: z.number().int().positive(),
  messageIds: z.array(z.number().int().positive()),
  drama: z.string().min(1),
  detail: z.string().min(1),
  posterUrl: z.string().url(),
  year: z.number().int().gte(1900).lte(new Date().getFullYear()),
  quality: z.string().min(1),
  rating: z.string().min(1),
  teleDownloadLink: z.string().url(),
  episodes: z.array(linkSchema),
  sortUrl: z.string().url(),
});

export type Link = z.infer<typeof linkSchema>;
export type Drama = z.infer<typeof dramaSchema>;
