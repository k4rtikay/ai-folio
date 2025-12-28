import { MapPin } from "lucide-react";
import { usePortfolioStore } from "@/store/use-portfolio-state";


import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { Label } from "../ui/label";
import {
    InputGroup,
    InputGroupAddon,
    InputGroupButton,
    InputGroupInput,
    InputGroupText,
    InputGroupTextarea,
} from "@/components/ui/input-group";

export function EditorForm() {
    const { portfolio, profile, updatePortfolioField, updateProfileField } = usePortfolioStore();

    if (!portfolio || !profile) return <div className="p-4 text-sm text-gray-500">Loading editor...</div>;

    return (
        <>
            <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="hero"
            >
                <AccordionItem value="hero">
                    <AccordionTrigger
                        className="font-semibold hover:no-underline text-sm py-4"
                    >Hero Section</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Headline</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-end"}>
                                    <InputGroupText className="text-xs text-muted-foreground"> 40 characters left </InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Headline"
                                    value={portfolio.heroText || ""}
                                    onChange={(e) => updatePortfolioField("heroText", e.target.value)} />
                            </InputGroup>
                        </div>

                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Sub-Headline</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-end"}>
                                    <InputGroupText className="text-xs text-muted-foreground"> 60 characters left </InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Sub-Headline"
                                    value={portfolio.heroSubText || ""}
                                    onChange={(e) => updatePortfolioField("heroSubText", e.target.value)} />
                            </InputGroup>
                        </div>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="about">
                    <AccordionTrigger
                        className="font-semibold hover:no-underline text-sm py-4"
                    >About Section</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Your Bio</Label>
                            <InputGroup>
                                <InputGroupAddon align={"block-end"}>
                                    <InputGroupText className="text-xs text-muted-foreground"> 150 characters left </InputGroupText>
                                </InputGroupAddon>
                                <InputGroupTextarea
                                    placeholder="Your Bio"
                                    value={portfolio.about || ""}
                                    onChange={(e) => updatePortfolioField("about", e.target.value)} />
                            </InputGroup>
                        </div>

                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Location</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Location"
                                    value={profile.location || ""}
                                    onChange={(e) => updateProfileField("location", e.target.value)} />
                            </InputGroup>
                        </div>

                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="links">
                    <AccordionTrigger className="font-semibold hover:no-underline text-sm py-4">Links and Socials</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Twitter Username</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupText className="text-xs text-muted-foreground"> @ </InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput
                                placeholder="Twitter Username"
                                value={profile.twitterUsername || ""}
                                onChange={(e) => updateProfileField("twitterUsername", e.target.value)} />
                            </InputGroup>
                        </div>

                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Website</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupText className="text-xs text-muted-foreground"></InputGroupText>
                                </InputGroupAddon>
                                <InputGroupInput
                                placeholder="https://example.com"
                                value={profile.blog || ""}
                                onChange={(e) => updateProfileField("blog", e.target.value)} />
                            </InputGroup>
                        </div>

                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}