"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { getNavLinks, FEATURE_FLAGS } from "@/src/lib/constants";

const navLinks = getNavLinks(FEATURE_FLAGS.enableGallery);

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  // Close menu on ESC key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Focus trap for mobile menu
  useEffect(() => {
    if (isOpen && menuRef.current) {
      const focusableElements = menuRef.current.querySelectorAll(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement;

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== "Tab") return;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement?.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement?.focus();
          }
        }
      };

      menuRef.current.addEventListener("keydown", handleTab);
      firstElement?.focus();

      return () => {
        menuRef.current?.removeEventListener("keydown", handleTab);
      };
    }
  }, [isOpen]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isOpen &&
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !menuButtonRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 border-b-2 border-primary/80 backdrop-blur-xl shadow-lg"
      role="banner"
    >
      {/* Soft BG effects */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-0 h-[220px] w-[420px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-primary/10 blur-[90px]" />
        <div className="absolute right-1/4 bottom-0 h-[60px] w-[260px] rounded-full bg-card/70 blur-2xl opacity-25" />
      </div>
      <nav className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-4 md:px-8 py-1.5 sm:py-2 md:py-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 sm:gap-2 md:gap-3 min-w-0 group"
        >
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 md:h-10 md:w-10 items-center justify-center rounded border border-primary/50 bg-primary/10 transition-transform group-hover:scale-105 group-hover:shadow-md overflow-hidden">
            <Image
              src="/logo/SLO-color.png"
              alt="Swordland Online Logo"
              width={36}
              height={36}
              className="object-contain h-6 w-6 sm:h-7 sm:w-7 md:h-9 md:w-9 transition-transform"
              priority
            />
          </div>
          <span className="hidden sm:inline font-display text-sm sm:text-base md:text-xl lg:text-2xl font-bold sm:font-bold md:font-extrabold tracking-wider sm:tracking-widest md:tracking-widest text-primary drop-shadow-sm group-hover:text-primary/90 transition-colors truncate max-w-[140px] sm:max-w-none">
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
          ref={menuButtonRef}
          type="button"
          className="flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded border border-primary/20 bg-background/60 shadow-md md:hidden transition-colors focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px]"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {isOpen ? (
            <X className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
          ) : (
            <Menu className="h-6 w-6 sm:h-7 sm:w-7 text-primary" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />
          <div
            id="mobile-menu"
            ref={menuRef}
            className="relative z-50 border-t-2 border-primary/40 bg-background/98 backdrop-blur-xl md:hidden shadow-2xl animate-in slide-in-from-top duration-300"
            role="menu"
            aria-label="Mobile navigation"
          >
            {/* Decorative accent line */}
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/60 to-transparent" />
            
            <div className="flex flex-col gap-0 px-0 py-3 sm:py-4">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  ref={index === 0 ? firstLinkRef : null}
                  className="relative font-display text-lg sm:text-xl font-extrabold tracking-wide px-5 sm:px-6 md:px-7 py-4 sm:py-5 text-primary hover:bg-primary/15 hover:text-primary focus-visible:bg-primary/15 focus-visible:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all duration-200 min-h-[60px] sm:min-h-[64px] flex items-center border-b border-primary/20 last:border-b-0 group"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {/* Hover accent line */}
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  
                  {/* Link content */}
                  <span className="relative z-10 flex items-center gap-3">
                    <span className="text-primary/70 group-hover:text-primary transition-colors duration-200 font-mono text-sm sm:text-base font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-extrabold text-primary">{link.label}</span>
                  </span>
                  
                  {/* Arrow indicator */}
                  <span className="ml-auto text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 text-lg sm:text-xl font-bold">
                    →
                  </span>
                </Link>
              ))}
            </div>
            
            {/* Bottom accent */}
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-primary/40 to-transparent" />
          </div>
        </>
      )}
    </header>
  );
}
