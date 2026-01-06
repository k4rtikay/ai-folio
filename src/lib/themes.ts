import { PortfolioColors } from "@/store/use-portfolio-state"; 

export interface ThemePreset {
  id: string;
  name: string;
  colors: PortfolioColors;
}

export const PORTFOLIO_THEMES: ThemePreset[] = [
  {
    id: "default-purple",
    name: "Modern Purple",
    colors: {
      accent: "#A855F7",
      light: { bg: "#FFFFFF", text: "#121212" },
      dark: { bg: "#1D1D21", text: "#F2F4F7" },
    },
  },
  {
    id: "ocean-blue",
    name: "Oceanic",
    colors: {
      accent: "#0EA5E9",
      light: { bg: "#F0F9FF", text: "#0C4A6E" },
      dark: { bg: "#0B1120", text: "#E0F2FE" },
    },
  },
  {
    id: "emerald-forest",
    name: "Forest",
    colors: {
      accent: "#10B981",
      light: { bg: "#ECFDF5", text: "#064E3B" },
      dark: { bg: "#064E3B", text: "#D1FAE5" },
    },
  },
  {
    id: "luxury-gold",
    name: "Luxury",
    colors: {
      accent: "#D4AF37",
      light: { bg: "#FAFAFA", text: "#171717" },
      dark: { bg: "#000000", text: "#F5F5F5" }, 
    },
  },
  {
    id: "coffee-warm",
    name: "Coffee Shop",
    colors: {
      accent: "#D97706",
      light: { bg: "#FFFBEB", text: "#451A03" },
      dark: { bg: "#291505", text: "#FEF3C7" }, 
    },
  },
];

export const DEFAULT_THEME = PORTFOLIO_THEMES[0];