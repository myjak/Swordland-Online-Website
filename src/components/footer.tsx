import Link from "next/link";
import { socials } from "../context/socials";

import { HugeiconsIcon } from '@hugeicons/react';
import { DiscordIcon, NewTwitterIcon, YoutubeIcon, InstagramIcon, TiktokIcon } from '@hugeicons/core-free-icons'
import { Sword } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#download", label: "Download" },
  //{ href: "#community", label: "Community" }
];

const iconMap: Record<string, any> = {
  Discord: DiscordIcon,
  X: NewTwitterIcon,
  YouTube: YoutubeIcon,
  Instagram: InstagramIcon,
  TikTok: TiktokIcon,
};

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group transition-colors"
            tabIndex={0}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 group-hover:bg-primary/30 transition-colors duration-200 shadow-sm group-focus:ring-2 group-focus:ring-primary">
              <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 transition-transform group-hover:scale-105 group-hover:shadow-md">
                <Sword className="h-5 w-5 md:h-6 md:w-6 text-primary transition-colors group-hover:text-primary/80" />
              </div>
            </div>
            <span className="font-display text-lg font-bold tracking-wider text-card-foreground group-hover:text-primary group-hover:drop-shadow-[0_2px_6px_rgba(252,211,77,0.3)] transition-all duration-200">
              SWORDLAND ONLINE
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 font-semibold text-card/70 transition-colors duration-150 hover:text-primary focus-visible:text-primary after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
                style={{ color: "var(--sl-footer-nav, #6d6c7b)" }} // Less white, more muted color
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-3">
            {socials.map(({ icon: _Icon, label, href }) => {
              const Hugeicon = iconMap[label];
              if (!Hugeicon) return null;
              return (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="
                    inline-flex items-center justify-center rounded
                    border border-card/30 bg-card text-primary
                    hover:bg-linear-to-tr hover:from-primary/10 hover:to-yellow-100/20
                    hover:text-primary-text
                    focus-visible:ring-2 focus-visible:ring-primary/70
                    transition-all duration-200 h-10 w-10
                    shadow-sm hover:shadow-primary/20 hover:shadow-md
                    group relative
                  "
                  tabIndex={0}
                >
                  <HugeiconsIcon
                    icon={Hugeicon}
                    size={20}
                    color="currentColor"
                    className="transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-12 group-focus:scale-110"
                  />
                  <span className="sr-only">{label}</span>
                  <span
                    className="
                      pointer-events-none absolute left-1/2 top-full mt-1 w-max px-2 py-1 rounded
                      bg-primary text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100
                      transition-opacity duration-200 z-20 shadow
                      -translate-x-1/2
                    "
                  >
                    {label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground mt-2">
            <p className="mb-2">
              © {new Date().getFullYear()} Swordland Online. All rights
              reserved.
            </p>
            <p className="max-w-md text-balance">
              Swordland Online is a fan project and is not affiliated with Sword
              Art Online, Hypixel Studios, or Hytale.{" "}
              <span className="font-medium">Sword Art Online</span> is a
              trademark of ASCII Media Works and A-1 Pictures.{" "}
              <span className="font-medium">Hytale</span> is a trademark of
              Hypixel Studios.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
