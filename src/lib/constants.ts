// ============================================================================
// NAVIGATION CONFIGURATION
// ============================================================================

export const NAV_LINKS = [
  { href: "/#features", label: "Features", enabled: true },
  { href: "/#about", label: "About", enabled: true },
  { href: "/#community", label: "Community", enabled: true },
  { href: "/#gallery", label: "Gallery", enabled: false }, // Controlled by FEATURE_FLAGS.enableGallery
] as const;

// Get enabled navigation links (excluding gallery which is controlled by feature flag)
export const getNavLinks = (
  includeGallery: boolean,
): Array<{ href: string; label: string }> => {
  return NAV_LINKS.filter((link) => {
    if (!link.enabled) return false;
    // Check if this is the gallery link
    if ((link.href as string) === "/#gallery") return includeGallery;
    return true;
  }).map((link) => ({ href: link.href as string, label: link.label }));
};

// ============================================================================
// SERVER CONFIGURATION
// ============================================================================

export const SERVER_CONFIG = {
  // Server IP address (use asterisks to hide: "*********************")
  ip: "play.swordland.online",
  // Whether the IP is hidden/obfuscated
  ipHidden: true,
  // Display text when IP is hidden (if different from actual IP)
  ipDisplayText: "*********************",
  // Player count display (set to null to hide)
  playerCount: "250+",
  // Server status message
  statusMessage:
    "Connect to our official multiplayer server. All custom features included—just hop in!",
} as const;

// Get the server IP to display (returns hidden text if ipHidden is true)
export const getServerIP = () => {
  return SERVER_CONFIG.ipHidden
    ? SERVER_CONFIG.ipDisplayText
    : SERVER_CONFIG.ip;
};

// Get the actual server IP for copying (returns actual IP even if hidden)
export const getServerIPForCopy = () => {
  return SERVER_CONFIG.ip;
};

// ============================================================================
// FEATURE FLAGS
// ============================================================================

export const FEATURE_FLAGS = {
  enableAnalytics: true,
  enablePWA: true,
  enableAnimations: true,
  enableGallery: false,
} as const;

// ============================================================================
// GALLERY CONFIGURATION
// ============================================================================

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
