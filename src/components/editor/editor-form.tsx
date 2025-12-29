import { MapPin, X, Plus, RotateCcw } from "lucide-react";
import { usePortfolioStore } from "@/store/use-portfolio-state";
import { cn } from "@/lib/utils";
import { useState } from "react";


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
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

export function EditorForm() {
    const { portfolio, profile, updatePortfolioField, updateProfileField, resetPortfolio, resetProfile, resetPortfolioField, resetProfileField } = usePortfolioStore();

    const [newSkill, setNewSkill] = useState<string>("");

    const removeSkill = (skillToRemove: string) => {
        const currentSkills = portfolio?.skills || [];
        updatePortfolioField("skills", currentSkills.filter(s => s !== skillToRemove));
    };

    const handleAddSkill = (skill: string) => {
        const newSkill = skill.trim();

        const currentSkills = portfolio?.skills || [];

        if (currentSkills.includes(newSkill)) return;

        if (newSkill.length > 0) {
            updatePortfolioField("skills", [...currentSkills, newSkill]);
            setNewSkill("");
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleAddSkill(newSkill);
        }
    };

    if (!portfolio || !profile) return <div className="p-4 text-sm text-gray-500">Loading editor...</div>;

    const handleResetAll = () => {
        resetPortfolio();
        resetProfile();
    };

    return (
        <>
            <div className="flex justify-end px-2 my-4">
                <Button
                    variant="outline"
                    size="sm"
                    onClick={handleResetAll}
                    className="text-xs gap-1.5 text-orange-400 border-orange-400/30 hover:bg-orange-500/10 hover:text-orange-300"
                >
                    <RotateCcw className="w-3 h-3" />
                    Reset All
                </Button>
            </div>
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
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetPortfolioField("heroText")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupAddon align={"inline-end"}>
                                    <span className={cn("text-[10px]", (portfolio.heroText?.length || 0) >= 40 ? "text-red-500" : "text-foreground-muted")}>
                                        {portfolio.heroText?.length || 0}/40
                                    </span>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Headline"
                                    value={portfolio.heroText || ""}
                                    maxLength={40}
                                    onChange={(e) => updatePortfolioField("heroText", e.target.value)} />
                            </InputGroup>
                        </div>

                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Sub-Headline</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetPortfolioField("heroSubText")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupAddon align={"inline-end"}>
                                    <span className={cn("text-[10px]", (portfolio.heroSubText?.length || 0) >= 70 ? "text-red-500" : "text-foreground-muted")}>
                                        {portfolio.heroSubText?.length || 0}/70
                                    </span>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Sub-Headline"
                                    maxLength={70}
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
                                <InputGroupAddon align={"block-start"}>
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetPortfolioField("about")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupAddon align={"block-end"}>
                                    <InputGroupText className={cn("text-xs",
                                        (portfolio.about.length >= 400) ? "text-red-500" : "text-foreground-muted"
                                    )}> {400 - portfolio.about.length} characters left </InputGroupText>
                                </InputGroupAddon>
                                <InputGroupTextarea
                                    placeholder="Your Bio"
                                    value={portfolio.about || ""}
                                    maxLength={400}
                                    onChange={(e) => updatePortfolioField("about", e.target.value)} />
                            </InputGroup>
                        </div>

                        <div className="space-y-4 px-2">
                            <Label className="text-gray-200">Location</Label>
                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetProfileField("location")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                    <MapPin className="w-4 h-4 text-muted-foreground" />
                                </InputGroupAddon>
                                <InputGroupAddon align={"inline-end"}>
                                    <span className={cn("text-[10px]", (profile.location?.length || 0) > 30 ? "text-red-500" : "text-foreground-muted")}>
                                        {profile.location?.length || 0}/30
                                    </span>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Location"
                                    value={profile.location || ""}
                                    maxLength={30}
                                    onChange={(e) => updateProfileField("location", e.target.value)}
                                />
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
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetProfileField("twitterUsername")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
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
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetProfileField("blog")}
                                        title="Reset to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="https://example.com"
                                    value={profile.blog || ""}
                                    onChange={(e) => updateProfileField("blog", e.target.value)} />
                            </InputGroup>
                        </div>

                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="skills">
                    <AccordionTrigger className="font-semibold hover:no-underline text-sm py-4">Skills</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <div className="space-y-4 px-2 py-2">

                            <InputGroup>
                                <InputGroupAddon align={"inline-start"}>
                                    <InputGroupButton
                                        variant="ghost"
                                        size="icon-sm"
                                        className="h-6 w-6 rounded-full text-orange-400 hover:bg-orange-500/10 hover:text-orange-300"
                                        onClick={() => resetPortfolioField("skills")}
                                        title="Reset skills to original"
                                    >
                                        <RotateCcw className="w-3 h-3" />
                                    </InputGroupButton>
                                    <span className={cn("text-[10px]", (newSkill.length || 0) >= 25 ? "text-red-500" : "text-foreground-muted")}>
                                        {newSkill.length || 0}/25
                                    </span>
                                </InputGroupAddon>
                                <InputGroupAddon align={"inline-end"}>
                                    <InputGroupButton
                                        variant={"ghost"}
                                        size={"icon-sm"}
                                        className="h-6 w-6 rounded-full text-blue-200 bg-blue-500/20"
                                        onClick={() => handleAddSkill(newSkill)}
                                    >
                                        <Plus className="w-4 h-4" />
                                    </InputGroupButton>
                                </InputGroupAddon>
                                <InputGroupInput
                                    placeholder="Skill"
                                    value={newSkill}
                                    maxLength={25}
                                    className="rounded-full"
                                    onKeyDown={handleKeyDown}
                                    onChange={(e) => setNewSkill(e.target.value)}
                                />
                            </InputGroup>

                            <div className="flex flex-wrap gap-2">
                                {
                                    portfolio.skills.map((skill, index) => (
                                        <Badge
                                            key={index}
                                            variant={"outline"}
                                            className="py-1 px-1 text-xs text-[#F2F4F7]"
                                        >
                                            {skill}
                                            <Button
                                                variant={"ghost"}
                                                size={"icon-sm"}
                                                onClick={() => removeSkill(skill)}
                                                className="ml-2 h-6 w-6 rounded-full bg-red-500/20 hover:bg-red-500/20 text-red-400 hover:text-red-200 border-none"
                                            >
                                                <X className="w-4 h-4" />
                                            </Button>
                                        </Badge>
                                    ))
                                }
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </>
    )
}