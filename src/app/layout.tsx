import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://gitxhibit.vercel.app";
const siteName = "GitXhibit | GitHub to Portfolio in Seconds";
const siteDescription =
  "From GitHub to Portfolio. Instantly. Showcase your work with stunning, customizable dev portfolio templates powered by AI.";
const ogImage = `${siteUrl}/gitxhibit-demo-1.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  keywords: [
    "portfolio",
    "github",
    "developer portfolio",
    "AI portfolio generator",
    "gitxhibit",
    "dev portfolio",
    "github portfolio",
  ],
  authors: [{ name: "GitXhibit" }],
  creator: "GitXhibit",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: siteName,
    description: siteDescription,
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: `${siteName} – From GitHub to Portfolio. Instantly.`,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: siteDescription,
    images: [ogImage],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="overscroll-y-none">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-(--bg-color) overscroll-y-none`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
