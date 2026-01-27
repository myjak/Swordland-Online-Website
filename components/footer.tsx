import Link from "next/link";
import { Sword, MessageCircle, Twitter, Youtube, Github } from "lucide-react";

const socials = [
  {
    icon: MessageCircle,
    label: "Discord",
    href: "#",
  },
  {
    icon: Twitter,
    label: "Twitter",
    href: "#",
  },
  {
    icon: Youtube,
    label: "YouTube",
    href: "#",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "#",
  },
];

export function Footer() {
  return (
    <footer className="border-t-4 border-primary bg-card">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded border border-primary/50 bg-primary/10">
              <Sword className="h-5 w-5 text-primary" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider text-card-foreground">
              SWORDLAND ONLINE
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6">
            {["Features", "About", "Download", "Community"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-2">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex items-center justify-center rounded border border-card/30 bg-card text-primary hover:bg-primary/10 hover:text-primary focus-visible:ring-2 focus-visible:ring-primary transition h-10 w-10"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
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
