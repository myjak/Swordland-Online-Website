export const SITE_CONFIG = {
  name: "Swordland Online",
  description:
    "Enter Aincrad in Hytale. Swordland Online brings Sword Art Online to life with skills, leveling, epic boss fights, and intense PvP combat.",
  url: "https://swordlandonline.com",
  ogImage: "/logo/SLO-color.png",
  twitterHandle: "@swordlandonline",
} as const;

export const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#community", label: "Community" },
  { href: "#gallery", label: "Gallery" },
] as const;

export const SERVER_CONFIG = {
  ip: "play.swordland.online", // Hidden until server is available
  status: "hidden" as const,
} as const;

export const FEATURE_FLAGS = {
  enableAnalytics: true,
  enablePWA: true,
  enableAnimations: true,
  enableGallery: false,
} as const;

export const GALLERY_IMAGES: Array<{ src: string; alt: string }> = [
  {
    src: "/images/Hytale2026-01-28_10-42-35.png",
    alt: "Floor 7 boss fight in Swordland Online - epic boss battle scene",
  },
  {
    src: "/images/Hytale2026-01-30_21-02-48.png",
    alt: "Sword skill combat in Swordland Online - player using sword abilities",
  },
  {
    src: "/images/Hytale2026-01-30_21-03-47.png",
    alt: "Guild dungeon exploration in Swordland Online - multiplayer dungeon",
  },
  {
    src: "/images/Hytale2026-01-28_10-43-26.png",
    alt: "Castle view in Swordland Online - scenic Aincrad architecture",
  },
  {
    src: "/images/Hytale2026-01-30_21-03-04.png",
    alt: "PvP arena in Swordland Online - player versus player combat area",
  },
  {
    src: "/images/Hytale2026-01-30_21-04-02.png",
    alt: "Twilight biome in Swordland Online - beautiful game environment",
  },
];
