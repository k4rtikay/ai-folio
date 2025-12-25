/**
 * AI generation layer for portfolio copy.
 *
 * - Uses Groq chat completions
 * - Enforces strict JSON output via Zod
 * - Throws on malformed or non-conforming responses
 * - Assumes input data is already sanitized
 */



import { aifolioSchema } from "@/schemas/aifolio.schema";
import Groq from "groq-sdk";
import z from "zod";
import { UserProfile, Repo } from "./github";

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function generatePortfolio(profile: UserProfile, repos: Repo[]) : Promise<z.infer<typeof aifolioSchema>>{
    return getGroqChatCompletion(profile, repos);
}

async function getGroqChatCompletion(profile: UserProfile, repos: Repo[]) : Promise<z.infer<typeof aifolioSchema>> {
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
                        heroText: "string(A punchy header in a a few words to grab attention)",
                        heroSubText: "string(A short subtext to provide additional context to the hero text)",
                        about: "string(A professional but engaging short bio)",
                        skills: "array<string>(top 4-10 specific programming languages and tools that the person is skilled at)",
                        }
                    Do not include explanations, markdown, or text outside the JSON object.`
                },
            ],
            response_format: { type: "json_object" },
            model: "llama-3.1-8b-instant",
        });

        const message = chatCompletion.choices[0]?.message?.content;

        if (!message) {
            throw new Error("Groq returned an empty response");
        }

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
