import React from "react"
import type { Metadata, Viewport } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";

const fontSans = Rajdhani({ 
  subsets: ['latin'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-sans' 
});

const fontDisplay = Orbitron({ 
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-display' 
});

export const metadata: Metadata = {
  title: "Swordland Online | Hytale SAO Experience",
  description: "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
};

export const viewport: Viewport = {
  themeColor: "#e5a022",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
