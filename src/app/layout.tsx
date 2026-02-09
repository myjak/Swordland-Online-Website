import React from "react";
import type { Metadata, Viewport } from "next";
import { Rajdhani, Orbitron } from "next/font/google";
import "./globals.css";
import { SkipToContent } from "@/src/components/skip-to-content";
import { Toaster } from "sonner";

const fontSans = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const fontDisplay = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
});

const siteUrl = "https://swordlandonline.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Swordland Online | Hytale SAO Experience",
    template: "%s | Swordland Online",
  },
  description:
    "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
  keywords: [
    "Swordland Online",
    "Sword Art Online",
    "SAO",
    "Hytale",
    "Hytale server",
    "MMORPG",
    "gaming",
    "boss fights",
    "PvP",
    "Aincrad",
    "AniLand",
    "gaming community",
  ],
  authors: [{ name: "Swordland Online" }],
  creator: "Swordland Online",
  publisher: "Swordland Online",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Swordland Online",
    title: "Swordland Online | Hytale SAO Experience",
    description:
      "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
    images: [
      {
        url: "/logo/SLO-color.png",
        width: 1200,
        height: 630,
        alt: "Swordland Online Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Swordland Online | Hytale SAO Experience",
    description:
      "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
    images: ["/logo/SLO-color.png"],
    creator: "@swordlandonline",
    site: "@swordlandonline",
  },
  alternates: {
    canonical: siteUrl,
  },
  category: "Gaming",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo/SLO-color.png",
    apple: "/logo/SLO-color.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#52B9B3",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "VideoGame",
      "@id": `${siteUrl}#game`,
      name: "Swordland Online",
      description:
        "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
      applicationCategory: "Game",
      operatingSystem: "Hytale",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      genre: ["MMORPG", "Action", "Adventure"],
      gamePlatform: ["Hytale"],
      publisher: {
        "@type": "Organization",
        name: "Swordland Online",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.5",
        ratingCount: "1",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}#organization`,
      name: "Swordland Online",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo/SLO-color.png`,
      },
      sameAs: [
        "https://discord.gg/9gCkhkYQQ7",
        "https://x.com/swordlandonline",
        "https://youtube.com/@swordland.online",
        "https://www.instagram.com/swordland.online/",
        "https://www.tiktok.com/@swordland.online",
      ],
      description:
        "Swordland Online brings the world of Sword Art Online to Hytale. Master sword skills, conquer bosses, and forge your legend in AniLand.",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontSans.variable} ${fontDisplay.variable}`}>
      <body className="antialiased">
        <SkipToContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              borderRadius: 0,
              background: "var(--card)",
              color: "var(--card-foreground)",
              border: "1px solid var(--primary)",
            },
          }}
        />
      </body>
    </html>
  );
}
