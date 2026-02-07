import { create } from "zustand";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo } from "@/lib/github";
import { UserProfile } from "@/lib/github";
import { DEFAULT_THEME } from "@/lib/themes";

export interface PortfolioColors {
    accent: string;
    light: { bg: string; text: string };
    dark: { bg: string; text: string };
}

interface PortfolioState {
    portfolio: AIFolio | null;
    originalPortfolio: AIFolio | null;
    repos: Repo[];
    profile: UserProfile | null;
    originalProfile: UserProfile | null;
    colors: PortfolioColors;
    font: string;

    isSaving: boolean;
    saveError: string | null;
    lastSaved: Date | null;

    setPortfolio: (portfolio: AIFolio) => void;
    setRepos: (repos: Repo[]) => void;
    setProfile: (profile: UserProfile) => void;
    updatePortfolioField: (field: keyof AIFolio, value: AIFolio[keyof AIFolio]) => void;
    updateProfileField: (field: keyof UserProfile, value: UserProfile[keyof UserProfile]) => void;
    resetPortfolio: () => void;
    resetProfile: () => void;
    resetPortfolioField: (field: keyof AIFolio) => void;
    resetProfileField: (field: keyof UserProfile) => void;
    setFont: (font: string) => void;
    setColors: (colors: PortfolioColors) => void;
    updateColor: (path: 'accent' | 'light.bg' | 'light.text' | 'dark.bg' | 'dark.text', value: string) => void;
    resetCustomization: () => void;
    savePortfolio: (username: string) => Promise<{ success: boolean; error?: string }>;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
    portfolio: null,
    repos: [],
    profile: null,
    originalPortfolio: null,
    originalProfile: null,

    isSaving: false,
    saveError: null,
    lastSaved: null,

    setPortfolio: (portfolio) => set({ portfolio, originalPortfolio: portfolio }),
    setRepos: (repos) => set({ repos }),
    setProfile: (profile) => set({ profile, originalProfile: profile }),
    updatePortfolioField: (field, value) => {
        set((state) => {
            if (!state.portfolio) return {};
            return {
                portfolio: { ...state.portfolio, [field]: value }
            }
        })
    },
    updateProfileField: (field, value) => {
        set((state) => {
            if (!state.profile) return {};
            return {
                profile: { ...state.profile, [field]: value }
            }
        })
    },
    resetPortfolio: () => set((state) => ({ portfolio: state.originalPortfolio })),
    resetProfile: () => set((state) => ({ profile: state.originalProfile })),
    resetPortfolioField: (field) => {
        set((state) => {
            if (!state.portfolio) return {};
            return {
                portfolio: { ...state.portfolio, [field]: state.originalPortfolio?.[field] }
            }
        })
    },
    resetProfileField: (field) => {
        set((state) => {
            if (!state.profile) return {};
            return {
                profile: { ...state.profile, [field]: state.originalProfile?.[field] }
            }
        })
    },
    font: "inter",
    colors: DEFAULT_THEME.colors,
    setFont: (font) => set((state) => ({ font })),
    setColors: (colors) => set((state) => ({ colors })),
    updateColor: (path, value) => set((state) => {
        const newColors = { ...state.colors };

        if (path === 'accent') newColors.accent = value;
        else if (path.startsWith('light.')) {
            newColors.light = { ...state.colors.light, [path.split('.')[1]]: value };
        }
        else if (path.startsWith('dark.')) {
            newColors.dark = { ...state.colors.dark, [path.split('.')[1]]: value };
        }

        return { colors: newColors };
    }),
    resetCustomization: () => set({
        colors: DEFAULT_THEME.colors,
        font: "inter"
    }),

    savePortfolio: async (username: string) => {
        const state = get();

        if (!state.portfolio || !state.profile) {
            set({ saveError: "No portfolio data to save" });
            return { success: false, error: "No portfolio data to save" };
        }

        set({ isSaving: true, saveError: null });

        try {
            const response = await fetch('/api/portfolio/save', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    profile: state.profile,
                    repos: state.repos,
                    portfolio: state.portfolio,
                    colors: state.colors,
                    font: state.font,
                    username: username,
                }),
            });

            if (!response.ok) {
                const error = await response.json();
                throw new Error(error.error || 'Failed to save');
            }

            const data = await response.json();

            set({
                isSaving: false,
                lastSaved: new Date(),
                saveError: null
            });

            console.log("Portfolio saved successfully:", data.message);
            return { success: true };

        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error';
            set({
                isSaving: false,
                saveError: errorMessage
            });

            console.error("Save failed:", errorMessage);
            return { success: false, error: errorMessage };
        }
    },
}));
