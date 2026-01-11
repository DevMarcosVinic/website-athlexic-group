import type { Metadata } from "next";
import { Rajdhani, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono"
});

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
  icons: {
    icon: "/icon.png", // fallback to public if app/icon is processed
    shortcut: "/logo-symbol.png",
    apple: "/logo-symbol.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${rajdhani.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-[#050505] text-slate-200 antialiased selection:bg-cyan-500/30 selection:text-cyan-100">
        {children}
      </body>
    </html>
  );
}
