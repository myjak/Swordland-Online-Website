"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ImageOff, Loader2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

interface GalleryLightboxProps {
  images: Array<{ src: string; alt: string }>;
  initialIndex: number;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function GalleryLightbox({
  images,
  initialIndex,
  open,
  onOpenChange,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [imageError, setImageError] = React.useState(false);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
    setImageLoaded(false);
    setImageError(false);
  }, [initialIndex]);

  // Preload adjacent images
  React.useEffect(() => {
    if (!open) return;

    const preloadImage = (src: string) => {
      const img = new window.Image();
      img.src = src;
    };

    const prevIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    const nextIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;

    if (images[prevIndex]) {
      preloadImage(images[prevIndex].src);
    }
    if (images[nextIndex]) {
      preloadImage(images[nextIndex].src);
    }
  }, [open, currentIndex, images]);

  const goToPrevious = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? images.length - 1 : prev - 1;
      setImageLoaded(false);
      setImageError(false);
      return newIndex;
    });
  }, [images.length]);

  const goToNext = React.useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === images.length - 1 ? 0 : prev + 1;
      setImageLoaded(false);
      setImageError(false);
      return newIndex;
    });
  }, [images.length]);

  React.useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      } else if (e.key === "Escape") {
        onOpenChange(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, goToPrevious, goToNext, onOpenChange]);

  const currentImage = images[currentIndex];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-[95vw] max-h-[95vh] w-full h-full sm:max-w-7xl sm:max-h-[90vh] p-0 gap-0 border-2 border-primary/50 bg-background/98 backdrop-blur-2xl overflow-hidden shadow-2xl"
        style={{ borderRadius: 0 }}
        hideCloseButton
        onEscapeKeyDown={(e) => onOpenChange(false)}
        onPointerDownOutside={(e) => onOpenChange(false)}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogTitle className="sr-only">
          {currentImage.alt} - Gallery Image {currentIndex + 1} of {images.length}
        </DialogTitle>
        <div className="relative flex items-center justify-center h-full w-full min-h-[400px]">
          {/* Close button */}
          <Button
            onClick={() => onOpenChange(false)}
            className="absolute right-2 top-2 sm:right-4 sm:top-4 z-20 h-10 w-10 sm:h-12 sm:w-12 bg-primary/95 hover:bg-primary border-2 border-primary shadow-xl backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px] transition-all duration-200 hover:scale-110"
            aria-label="Close lightbox"
            style={{ borderRadius: 0 }}
          >
            <X className="h-5 w-5 sm:h-6 sm:w-6 text-primary-foreground" />
          </Button>

          {/* Previous button */}
          {images.length > 1 && (
            <Button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 z-20 h-12 w-12 sm:h-14 sm:w-14 bg-primary/95 hover:bg-primary border-2 border-primary shadow-xl backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px] transition-all duration-200 hover:scale-110 group"
              aria-label="Previous image"
              style={{ borderRadius: 0 }}
            >
              <ChevronLeft className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground group-hover:-translate-x-1 transition-transform" />
            </Button>
          )}

          {/* Image container */}
          <div className="relative w-full h-full flex items-center justify-center overflow-hidden bg-background/50">
            {!imageLoaded && !imageError && (
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <Skeleton className="absolute inset-0 w-full h-full bg-linear-to-br from-primary/10 via-card/60 to-card/90 animate-pulse" />
                <Loader2 className="h-12 w-12 text-primary animate-spin z-20 relative" aria-hidden="true" />
              </div>
            )}
            {imageError ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 p-8">
                <div className="bg-background/95 backdrop-blur-md border-2 border-primary/50 p-8 shadow-2xl">
                  <ImageOff className="h-20 w-20 text-primary mb-4 mx-auto" aria-hidden="true" />
                  <p className="text-lg text-primary font-bold text-center">
                    Failed to load image
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full min-h-[400px] sm:min-h-[500px] flex items-center justify-center">
                <Image
                  src={currentImage.src}
                  alt={currentImage.alt}
                  fill
                  className="object-contain p-4 sm:p-8"
                  priority
                  sizes="100vw"
                  onLoad={() => setImageLoaded(true)}
                  onError={() => {
                    setImageError(true);
                    setImageLoaded(false);
                  }}
                />
              </div>
            )}
          </div>

          {/* Next button */}
          {images.length > 1 && (
            <Button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 z-20 h-12 w-12 sm:h-14 sm:w-14 bg-primary/95 hover:bg-primary border-2 border-primary shadow-xl backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary min-w-[44px] min-h-[44px] transition-all duration-200 hover:scale-110 group"
              aria-label="Next image"
              style={{ borderRadius: 0 }}
            >
              <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-primary-foreground group-hover:translate-x-1 transition-transform" />
            </Button>
          )}

          {/* Image counter */}
          {images.length > 1 && (
            <div className="absolute bottom-20 sm:bottom-8 left-1/2 -translate-x-1/2 z-20 bg-primary/95 backdrop-blur-md border-2 border-primary shadow-2xl px-5 sm:px-7 py-2.5 sm:py-3 font-display text-base sm:text-lg font-extrabold">
              <span className="text-primary-foreground">{currentIndex + 1}</span>
              <span className="mx-2.5 text-primary-foreground/70">/</span>
              <span className="text-primary-foreground/90">{images.length}</span>
            </div>
          )}

          {/* Image title */}
          <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 right-2 sm:right-4 z-20 bg-primary/95 backdrop-blur-md border-2 border-primary shadow-2xl px-5 sm:px-7 py-4 sm:py-5 font-display text-base sm:text-lg font-extrabold max-w-full sm:max-w-2xl mx-auto">
            <p className="line-clamp-2 sm:line-clamp-3 text-center text-primary-foreground drop-shadow-lg">
              {currentImage.alt}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
