import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from "@/components/ui/accordion";

export const faqData = [
    {
        id: "faq-1",
        question: "Do you require write access to my GitHub account?",
        answer: "Absolutely not. GitXhibit only requests strictly read-only public access to pull your public profile metadata, contribution graph, and public repository metrics. We will never ask for permissions to modify your code or access your private repositories.",
    },
    {
        id: "faq-2",
        question: "How does the AI generate my bio and repository summaries?",
        answer: "Our engine scans your repository titles, descriptions, and root README files. It then analyzes your most frequent language metrics and commit patterns to synthesize an optimized professional summary, mapping out your core domain expertise without you needing to write a single word of copy.",
    },
    {
        id: "faq-3",
        question: "Can I connect a custom domain to my generated portfolio?",
        answer: "By default, every user gets a clean, premium shareable link at gitxhibit.com/username. Custom domain mapping (e.g., yourname.dev) is fully supported and can be configured in your account dashboard with a simple CNAME record update.",
    },
    {
        id: "faq-4",
        question: "How often does my portfolio data refresh?",
        answer: "Your public metrics, language distribution charts, and contribution graphs are cached for performance but sync automatically once every 24 hours. You can also trigger an instant, forced manual refresh directly from your dashboard at any time.",
    },
    {
        id: "faq-5",
        question:
            "Is there a limit to how many projects or themes I can display?",
        answer: "No. You can pin as many repositories as you like, customize layout configurations, and swap between premium developer-centric themes instantly. The free tier gives you full access to standard layout blocks and core analytics.",
    },
];

export default function FAQ() {
    return (
        <Accordion type="single" collapsible className="w-full max-w-2xl mb-24">
            {faqData.map(({ id, question, answer }) => (
                <AccordionItem key={id} value={id} className="py-2 text-left">
                    <AccordionTrigger className="text-xl text-balance font-medium leading-snug tracking-tight text-foreground hover:no-underline">
                        {question}
                    </AccordionTrigger>
                    <AccordionContent className="text-lg leading-relaxed tracking-tight text-muted-foreground">
                        {answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
}
