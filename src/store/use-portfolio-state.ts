import { create } from "zustand";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo } from "@/lib/github";
import { UserProfile } from "@/lib/github";

export interface PortfolioColors {
    accent: string;
    light: { bg: string; text: string };
    dark: { bg: string; text: string };
}

const DEFAULT_COLORS: PortfolioColors = {
    accent: "#A855F7",
    light: { bg: "#FFFFFF", text: "#121212" },
    dark: { bg: "#1D1D21", text: "#F2F4F7" },
};

interface PortfolioState {
    portfolio: AIFolio | null;
    originalPortfolio: AIFolio | null;
    repos: Repo[];
    profile: UserProfile | null;
    originalProfile: UserProfile | null;
    colors: PortfolioColors;
    font: string;

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
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    portfolio: null,
    repos: [],
    profile: null,
    originalPortfolio: null,
    originalProfile: null,
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
    font: "Inter",
    colors: DEFAULT_COLORS,
    setFont: (font) => set((state) => ({ font })),
    setColors: (colors) => set((state) => ({ colors })),
    updateColor: (path, value) => set((state) => {
        const newColors = { ...state.colors }; // Shallow copy is enough for top level
        
        // Manual deep update (safest/fastest without external libs)
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
        colors: DEFAULT_COLORS, 
        font: "Inter" 
    }),
}));
