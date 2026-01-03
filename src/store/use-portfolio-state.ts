import { create } from "zustand";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo } from "@/lib/github";
import { UserProfile } from "@/lib/github";

interface PortfolioState {
    portfolio: AIFolio | null;
    originalPortfolio: AIFolio | null;
    repos: Repo[];
    profile: UserProfile | null;
    originalProfile: UserProfile | null;
    setPortfolio: (portfolio: AIFolio) => void;
    setRepos: (repos: Repo[]) => void;
    setProfile: (profile: UserProfile) => void;
    updatePortfolioField: (field: keyof AIFolio, value: AIFolio[keyof AIFolio]) => void;
    updateProfileField: (field: keyof UserProfile, value: UserProfile[keyof UserProfile]) => void;
    resetPortfolio: () => void;
    resetProfile: () => void;
    resetPortfolioField: (field: keyof AIFolio) => void;
    resetProfileField: (field: keyof UserProfile) => void;
    customization: {
        accentColor: string;
        font: string;
    }; 
    updateCustomization: (field: 'accentColor' | 'font', value: string) => void;
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
    customization: {
        accentColor: "#000000",
        font: "Inter",
    },
    updateCustomization: (field, value) => {
        set((state) => {
            return {
                customization: { ...state.customization, [field]: value }
            }
        })
    },
    resetCustomization: () => set((state) => ({ customization: { accentColor: '#000000', font: 'Inter' } })),
}));
