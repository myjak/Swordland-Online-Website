import Link from "next/link";
import { socials } from "../context/socials";

import { HugeiconsIcon } from "@hugeicons/react";
import {
  DiscordIcon,
  NewTwitterIcon,
  YoutubeIcon,
  InstagramIcon,
  TiktokIcon,
} from "@hugeicons/core-free-icons";
import { Sword } from "lucide-react";
import Image from "next/image";
import { getNavLinks, FEATURE_FLAGS } from "@/src/lib/constants";

const navLinks = getNavLinks(FEATURE_FLAGS.enableGallery);

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
      <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 py-8 sm:py-10 md:py-12">
        <div className="flex flex-col items-center gap-4 sm:gap-5 md:gap-6 text-center">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 group transition-colors"
            tabIndex={0}
          >
            <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 group-hover:bg-primary/30 transition-colors duration-200 shadow-sm group-focus:ring-2 group-focus:ring-primary">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 md:h-9 md:w-9 lg:h-10 lg:w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 transition-transform group-hover:scale-105 group-hover:shadow-md">
                <Image
                  src="/logo/SLO-color.png"
                  alt="Swordland Online Logo"
                  width={36}
                  height={36}
                  className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 transition-transform"
                  priority
                />
              </div>
            </div>
            <span className="font-display text-sm sm:text-base md:text-lg font-bold tracking-wider text-card-foreground group-hover:text-primary group-hover:drop-shadow-[0_2px_6px_rgba(252,211,77,0.3)] transition-all duration-200">
              SWORDLAND ONLINE
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-4 sm:gap-5 md:gap-6 mt-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 py-1.5 sm:py-1 font-semibold text-sm sm:text-base text-card/70 transition-colors duration-150 hover:text-primary focus-visible:text-primary after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200 min-h-[44px] flex items-center"
                style={{ color: "var(--sl-footer-nav, #6d6c7b)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-center gap-3 sm:gap-4 md:gap-5 mt-2 sm:mt-3">
            {socials.map(({ icon: _Icon, label, href }) => {
              const Hugeicon = iconMap[label];
              if (!Hugeicon) return null;
              return (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  className="
                    inline-flex items-center justify-center rounded
                    border border-card/30 bg-card text-primary
                    hover:bg-linear-to-tr hover:from-primary/10 hover:to-yellow-100/20
                    hover:text-primary-text
                    focus-visible:ring-2 focus-visible:ring-primary/70
                    transition-all duration-200 h-10 w-10 sm:h-11 sm:w-11
                    shadow-sm hover:shadow-primary/20 hover:shadow-md
                    group relative min-w-[44px] min-h-[44px]
                  "
                  tabIndex={0}
                >
                  <HugeiconsIcon
                    icon={Hugeicon}
                    size={18}
                    color="currentColor"
                    className="h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-12 group-focus:scale-110"
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
          <div className="text-xs sm:text-sm text-muted-foreground mt-2 sm:mt-3 px-4">
            <p className="mb-1.5 sm:mb-2">
              © {new Date().getFullYear()} Swordland Online. All rights
              reserved.
            </p>
            <p className="max-w-md text-balance leading-relaxed">
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
