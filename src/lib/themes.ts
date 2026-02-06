import { PortfolioColors } from "@/store/use-portfolio-state";

export interface ThemePreset {
  id: string;
  name: string;
  colors: PortfolioColors;
}

export const PORTFOLIO_THEMES: ThemePreset[] = [
  {
    id: "monochrome",
    name: "Monochrome",
    colors: {
      accent: "#888888",
      light: { bg: "#FFFFFF", text: "#000000" },
      dark: { bg: "#000000", text: "#EDEDED" },
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
      dark: { bg: "#0D1F17", text: "#A7F3D0" },
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
      dark: { bg: "#2f1a07ff", text: "#e0d3a6ff" },
    },
  },
  {
    id: "rose-blush",
    name: "Rosé",
    colors: {
      accent: "#E879A9",
      light: { bg: "#FDF2F8", text: "#831843" },
      dark: { bg: "#1F0A14", text: "#FCE7F3" },
    },
  },
];

export const DEFAULT_THEME = PORTFOLIO_THEMES[0];