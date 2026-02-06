import { PortfolioColors } from "@/store/use-portfolio-state";

export interface HeatmapColors {
  light: [string, string, string, string, string];
  dark: [string, string, string, string, string];
}

export interface ThemePreset {
  id: string;
  name: string;
  colors: PortfolioColors;
  heatmap: HeatmapColors;
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
    heatmap: {
      light: ["#ebedf0", "#c6c6c6", "#9e9e9e", "#6e6e6e", "#333333"],
      dark: ["#161b22", "#2d2d2d", "#5a5a5a", "#8a8a8a", "#c0c0c0"],
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
    heatmap: {
      light: ["#e0f2fe", "#7dd3fc", "#38bdf8", "#0ea5e9", "#0369a1"],
      dark: ["#0c1929", "#0c4a6e", "#0369a1", "#0ea5e9", "#7dd3fc"],
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
    heatmap: {
      light: ["#d1fae5", "#6ee7b7", "#34d399", "#10b981", "#047857"],
      dark: ["#0d1f17", "#064e3b", "#047857", "#10b981", "#6ee7b7"],
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
    heatmap: {
      light: ["#fef9e7", "#f7e6a3", "#e8c547", "#d4af37", "#a68a29"],
      dark: ["#1a1505", "#3d310d", "#7a6319", "#d4af37", "#f0d678"],
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
    heatmap: {
      light: ["#fef3c7", "#fcd34d", "#fbbf24", "#d97706", "#92400e"],
      dark: ["#2f1a07", "#78350f", "#92400e", "#d97706", "#fbbf24"],
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
    heatmap: {
      light: ["#fce7f3", "#f9a8d4", "#f472b6", "#e879a9", "#be185d"],
      dark: ["#1f0a14", "#831843", "#be185d", "#e879a9", "#f9a8d4"],
    },
  },
];

export const DEFAULT_THEME = PORTFOLIO_THEMES[0];