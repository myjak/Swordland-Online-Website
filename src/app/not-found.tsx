import Link from "next/link";
import { Button } from "@/src/components/ui/button";
import { Home, Search } from "lucide-react";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-3 sm:px-4">
      <div className="relative mx-auto max-w-2xl text-center w-full">
        {/* Background effects */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] sm:h-[350px] sm:w-[350px] md:h-[400px] md:w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[100px] sm:blur-[110px] md:blur-[120px]" />
        </div>

        <div className="relative z-10">
          {/* Logo */}
          <div className="mb-6 sm:mb-7 md:mb-8 flex justify-center">
            <div className="flex h-16 w-16 sm:h-18 sm:w-18 md:h-20 md:w-20 items-center justify-center rounded border border-primary/50 bg-primary/10 overflow-hidden">
              <Image
                src="/logo/SLO-color.png"
                alt="Swordland Online Logo"
                width={80}
                height={80}
                className="object-contain h-full w-full"
                priority
              />
            </div>
          </div>

          {/* 404 Text */}
          <h1 className="mb-3 sm:mb-4 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-primary px-2">
            404
          </h1>
          <h2 className="mb-3 sm:mb-4 font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-card px-2">
            Floor Not Found
          </h2>
          <p className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg text-card/70 px-4">
            The page you're looking for doesn't exist in Aincrad. It might have
            been moved, deleted, or you may have entered the wrong URL.
          </p>

          {/* Navigation links */}
          <div className="mb-6 sm:mb-7 md:mb-8 flex flex-wrap justify-center gap-3 sm:gap-4 px-4">
            <Link
              href="#features"
              className="text-sm sm:text-base text-primary hover:text-primary/80 underline min-h-[44px] flex items-center"
            >
              Features
            </Link>
            <Link
              href="#about"
              className="text-sm sm:text-base text-primary hover:text-primary/80 underline min-h-[44px] flex items-center"
            >
              About
            </Link>
            <Link
              href="#community"
              className="text-sm sm:text-base text-primary hover:text-primary/80 underline min-h-[44px] flex items-center"
            >
              Community
            </Link>
            <Link
              href="#gallery"
              className="text-sm sm:text-base text-primary hover:text-primary/80 underline min-h-[44px] flex items-center"
            >
              Gallery
            </Link>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col items-stretch sm:items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 font-bold shadow-primary/30 shadow-lg bg-primary hover:bg-primary/90 min-h-[44px]"
              style={{ borderRadius: 0 }}
            >
              <Link href="/" className="flex items-center justify-center">
                <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Return to Floor 1
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-bold min-h-[44px]"
              style={{ borderRadius: 0 }}
            >
              <Link href="/#features" className="flex items-center justify-center">
                <Search className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                Explore Features
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
