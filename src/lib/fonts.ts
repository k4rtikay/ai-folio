import { Inter, Work_Sans, JetBrains_Mono, Lora, Archivo } from 'next/font/google';

const fontInter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const fontWorkSans = Work_Sans({ subsets: ['latin'], variable: '--font-work-sans' });
const fontJetBrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });
const fontLora = Lora({ subsets: ['latin'], variable: '--font-lora' });
const fontArchivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' });

export const fontOptions = [
  { label: "Inter", value: "inter", class: fontInter.className, variable: fontInter.variable },
  { label: "Work Sans", value: "work-sans", class: fontWorkSans.className, variable: fontWorkSans.variable },
  { label: "JetBrains Mono", value: "jetbrains-mono", class: fontJetBrains.className, variable: fontJetBrains.variable },
  { label: "Lora", value: "lora", class: fontLora.className, variable: fontLora.variable },
  { label: "Archivo", value: "archivo", class: fontArchivo.className, variable: fontArchivo.variable },
];