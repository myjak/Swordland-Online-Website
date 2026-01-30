import Link from "next/link";
import {
  Sword,
  MessageCircle,
  Twitter,
  Youtube,
  Github,
  X,
} from "lucide-react";
import { socials } from "../context/socials";

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
              <Sword className="h-5 w-5 text-primary group-hover:scale-110 group-hover:text-yellow-400 transition-all duration-200" />
            </div>
            <span className="font-display text-lg font-bold tracking-wider text-card-foreground group-hover:text-primary group-hover:drop-shadow-[0_2px_6px_rgba(252,211,77,0.3)] transition-all duration-200">
              SWORDLAND ONLINE
            </span>
          </Link>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 mt-1">
            {["Features", "About", "Download", "Community"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="
                  relative
                  text-sm text-muted-foreground px-1 py-0.5
                  transition-all duration-200
                  hover:text-primary
                  focus-visible:text-primary
                  focus-visible:outline-none
                  after:content-['']
                  after:absolute
                  after:left-0
                  after:bottom-0
                  after:w-0
                  after:h-0.5
                  after:bg-linear-to-r after:from-primary/80 after:to-yellow-400/70 
                  after:rounded
                  after:transition-all after:duration-200
                  hover:after:w-full
                  focus-visible:after:w-full
                  hover:after:h-0.5
                  focus-visible:after:h-0.5
                  after:z-10
                  after:pointer-events-none
                  overflow-hidden
                "
              >
                {item}
              </Link>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex justify-center gap-5 mt-3">
            {socials.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="
                  inline-flex items-center justify-center rounded
                  border border-card/30 bg-card text-primary
                  hover:bg-linear-to-tr hover:from-primary/10 hover:to-yellow-100/20
                  hover:text-yellow-500
                  focus-visible:ring-2 focus-visible:ring-primary/70
                  transition-all duration-200 h-10 w-10
                  shadow-sm hover:shadow-primary/20 hover:shadow-md
                  group relative
                "
                tabIndex={0}
              >
                <Icon className="h-5 w-5 transition-transform duration-200 group-hover:scale-125 group-hover:-rotate-12 group-focus:scale-110" />
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
            ))}
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
