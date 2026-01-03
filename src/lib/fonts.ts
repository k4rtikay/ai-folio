import { Inter, Bricolage_Grotesque, Space_Mono, Playfair_Display, Syne } from 'next/font/google';

const fontInter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fontBricolage = Bricolage_Grotesque({ subsets: ['latin'], variable: '--font-bricolage' });
const fontSpace = Space_Mono({ weight: ["400", "700"], subsets: ['latin'], variable: '--font-space' });
const fontPlayfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const fontSyne = Syne({ subsets: ['latin'], variable: '--font-syne' });

export const fontOptions = [
  { label: "Inter (Default)", value: "inter", class: fontInter.className, variable: fontInter.variable },
  { label: "Bricolage", value: "bricolage", class: fontBricolage.className, variable: fontBricolage.variable },
  { label: "Space Mono", value: "space-mono", class: fontSpace.className, variable: fontSpace.variable },
  { label: "Playfair", value: "playfair", class: fontPlayfair.className, variable: fontPlayfair.variable },
  { label: "Syne", value: "syne", class: fontSyne.className, variable: fontSyne.variable },
];