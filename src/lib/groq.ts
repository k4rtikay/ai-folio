import { aifolioSchema } from "@/schemas/aifolio.schema";
import Groq from "groq-sdk";
import z from "zod";
import { UserProfile, Repo } from "./github";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generatePortfolio(profile: UserProfile, repos: Repo[]) {
    const chatCompletion = await getGroqChatCompletion(profile, repos);
    return chatCompletion;
}

export async function getGroqChatCompletion(profile: UserProfile, repos: Repo[]) {
    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                {
                    role: "system",
                    content: "You are a portfolio copywriter. Generate engaging portfolio content based on GitHub data. Return ONLY valid JSON matching the specified schema.",
                },
                {
                    role: "user",
                    content: `Here is the Github data: ${JSON.stringify({ profile, repos })}. Generate portfolio content in JSON format matching this schema:
                        {
                        heroText: z.string().describe("A punchy header in a a few words to grab attention"),
                        heroSubText: z.string().optional().describe("A short subtext to provide additional context to the hero text"),
                        about: z.string().max(500).describe("A professional but engaging short bio"),
                        projects: z.array(
                            z.object({
                                title: z.string().describe("The exact name of the repo this project belongs to"),
                                description: z.string().max(200).describe("Benefit-driven marketing copy for this project"),
                                techStack: z.array(z.string()).describe("3 or more key technologies, frameworks and libraries used in the project. Use the project description and repo data to infer this"),
                            })
                        ),
                        skills: z.array(z.string()).describe("top 4-10 specific programming languages and tools that the person is skilled at"),
                        }.
                    Ensure the JSON is properly formatted.`
                },
            ],
            response_format: { type: "json_object" },
            model: "llama-3.1-8b-instant",
        });

        const message = chatCompletion.choices[0]?.message?.content;

        const parsedMessage = aifolioSchema.parse(JSON.parse(message as string));

        return parsedMessage;
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error("Schema validation error:", error.issues);
        } else {
            console.error("Error during Groq chat completion:", error);
        }
        throw error;
    }
}
