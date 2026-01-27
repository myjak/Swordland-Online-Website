"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sword } from "lucide-react";

const navLinks = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#community", label: "Community" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b-2 border-primary/80 backdrop-blur-xl shadow-lg">
      {/* Soft BG effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[220px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[90px]" />
        <div className="absolute right-1/4 bottom-0 h-[60px] w-[260px] rounded-full bg-card/70 blur-2xl opacity-25" />
      </div>
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-4 py-2 md:py-3 md:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 min-w-0 group"
        >
          <div className="flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 transition-transform group-hover:scale-105 group-hover:shadow-md">
            <Sword className="h-5 w-5 md:h-6 md:w-6 text-primary transition-colors group-hover:text-primary/80" />
          </div>
          <span className="font-display text-lg md:text-2xl font-bold md:font-extrabold tracking-widest md:tracking-widest text-primary drop-shadow-sm group-hover:text-primary/90 transition-colors">
            SWORDLAND ONLINE
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative px-2 py-1 font-semibold text-card/70 transition-colors duration-150 hover:text-primary focus-visible:text-primary after:absolute after:inset-x-2 after:-bottom-1 after:h-0.5 after:rounded-full after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded border border-primary/20 bg-background/60 shadow-md md:hidden transition-colors"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 text-primary" />
          ) : (
            <Menu className="h-6 w-6 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="relative z-20 border-t border-primary/15 bg-background/95 backdrop-blur-xl md:hidden animate-in slide-in-from-top transition-all">
          <div className="flex flex-col gap-2 px-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-display text-base font-bold tracking-wide rounded px-3 py-2 text-card-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
