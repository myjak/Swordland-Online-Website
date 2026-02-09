"use client";

import { useState, useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-40 h-10 w-10 sm:h-11 sm:w-11 md:h-12 md:w-12 rounded-full bg-primary shadow-lg shadow-primary/30 hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-300 min-w-[44px] min-h-[44px]"
      aria-label="Scroll to top"
      style={{ borderRadius: 0 }}
    >
      <ArrowUp className="h-4 w-4 sm:h-5 sm:w-5 text-primary-foreground" />
    </Button>
  );
}
