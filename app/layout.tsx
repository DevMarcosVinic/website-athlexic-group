import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google"; // Using Google Fonts
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" });

export const metadata: Metadata = {
  title: "Athexic Group | High-Performance Web Design & AI Automation",
  description: "Transforming businesses with futuristic Web Design and Intelligent Automation. Secure, Fast, and Scalable solutions.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://athexicgroup.com", // Placeholder
    title: "Athexic Group | High-Performance Web Design & AI Automation",
    description: "Transforming businesses with futuristic Web Design and Intelligent Automation.",
    siteName: "Athexic Group",
  },
  twitter: {
    card: "summary_large_image",
    title: "Athexic Group | High-Performance Web Design & AI Automation",
    description: "Transforming businesses with futuristic Web Design and Intelligent Automation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-slate-950 text-white antialiased">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
