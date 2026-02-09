"use client";

import { useEffect } from "react";
import { Button } from "@/src/components/ui/button";
import { Home, RefreshCw } from "lucide-react";
import Image from "next/image";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to console or error reporting service
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center px-3 sm:px-4 bg-background">
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

              {/* Error message */}
              <h1 className="mb-3 sm:mb-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-foreground px-2">
                Critical Error
              </h1>
              <p className="mb-6 sm:mb-7 md:mb-8 text-base sm:text-lg text-muted-foreground px-4">
                A critical error occurred that prevented the application from
                loading. Please try refreshing the page.
              </p>

              {/* Error details (only in development) */}
              {process.env.NODE_ENV === "development" && error.message && (
                <div className="mb-6 sm:mb-7 md:mb-8 rounded border border-destructive/20 bg-destructive/5 p-3 sm:p-4 text-left mx-2 sm:mx-4">
                  <p className="mb-2 text-xs sm:text-sm font-semibold text-destructive">
                    Error Details:
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground font-mono break-words">
                    {error.message}
                  </p>
                  {error.digest && (
                    <p className="mt-2 text-xs text-muted-foreground">
                      Error ID: {error.digest}
                    </p>
                  )}
                </div>
              )}

              {/* Action buttons */}
              <div className="flex flex-col items-stretch sm:items-center gap-3 sm:gap-4 sm:flex-row sm:justify-center px-4">
                <Button
                  onClick={reset}
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 font-bold shadow-primary/30 shadow-lg bg-primary hover:bg-primary/90 min-h-[44px]"
                  style={{ borderRadius: 0 }}
                >
                  <RefreshCw className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Reload Application
                </Button>
                <Button
                  onClick={() => (window.location.href = "/")}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto px-6 sm:px-7 md:px-8 py-2 border-primary/30 bg-transparent text-primary hover:bg-primary/10 hover:text-primary font-bold min-h-[44px]"
                  style={{ borderRadius: 0 }}
                >
                  <Home className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Go Home
                </Button>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
