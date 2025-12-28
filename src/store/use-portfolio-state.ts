import { create } from "zustand";
import { AIFolio } from "@/schemas/aifolio.schema";
import { Repo } from "@/lib/github";
import { UserProfile } from "@/lib/github";

interface PortfolioState {
    portfolio: AIFolio | null;
    repos: Repo[];
    profile: UserProfile | null;
    setPortfolio: (portfolio: AIFolio) => void;
    setRepos: (repos: Repo[]) => void;
    setProfile: (profile: UserProfile) => void;
    updatePortfolioField: (field: keyof AIFolio, value: AIFolio[keyof AIFolio]) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    portfolio: null,
    repos: [],
    profile: null,
    setPortfolio: (portfolio) => set({ portfolio }),
    setRepos: (repos) => set({ repos }),
    setProfile: (profile) => set({ profile }),
    updatePortfolioField: (field, value) => {
        set((state)=>{
            if(!state.portfolio) return {};
            return {
                portfolio: {...state.portfolio, [field]: value}
            }
        })
    },
}));
 