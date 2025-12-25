import { z } from 'zod';

export const aifolioSchema = z.object({
    heroText: z.string().describe("A punchy 1-sentence hook to grab attention"),
    heroSubText: z.string().optional().describe("A short subtext to provide additional context to the hero text"),
    about: z.string().max(500).describe("A professional but engaging short bio"),
    skills: z.array(z.string()).describe("top 5-10 skills"),
});

export type AIFolio = z.infer<typeof aifolioSchema>;
