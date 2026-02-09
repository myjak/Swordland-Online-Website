"use client";

import Image from "next/image";
import * as React from "react";
import { Skeleton } from "./ui/skeleton";
import { Image as ImageIcon, ImageOff } from "lucide-react";
import { GalleryLightbox } from "./gallery-lightbox";
import { GALLERY_IMAGES } from "@/src/lib/constants";

const RECTANGLE_ASPECT = "aspect-[3/2]";
const PRIORITY_IMAGE_COUNT = 6; // Number of images to prioritize (above the fold)

interface GalleryImageProps {
  src: string;
  alt: string;
  index: number;
  onImageClick: (index: number) => void;
  priority?: boolean;
}

function GalleryImage({ src, alt, index, onImageClick, priority = false }: GalleryImageProps) {
  const [loaded, setLoaded] = React.useState(false);
  const [error, setError] = React.useState(false);
  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onImageClick(index);
    }
  };

  return (
    <div role="gridcell" className="w-full">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => onImageClick(index)}
        onKeyDown={handleKeyDown}
        className={`relative group w-full ${RECTANGLE_ASPECT} border border-primary/15 bg-linear-to-br from-primary/10 to-card/90 shadow-md overflow-hidden transition-transform duration-300 hover:scale-[1.020] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none cursor-pointer`}
        style={{
          borderRadius: 0,
        }}
        aria-label={`View ${alt}`}
        aria-describedby={`gallery-image-desc-${index}`}
      >
        {!loaded && !error && (
          <Skeleton className="absolute inset-0 w-full h-full z-0 bg-linear-to-br from-primary/10 via-card/60 to-card/90 animate-pulse" />
        )}
        {error ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-linear-to-br from-primary/10 via-card/60 to-card/90 z-0 p-4">
            <ImageOff className="h-12 w-12 sm:h-16 sm:w-16 text-primary/50 mb-2" aria-hidden="true" />
            <span className="text-xs sm:text-sm text-card/60 text-center font-medium">
              Failed to load image
            </span>
          </div>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
            style={{
              objectFit: "cover",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.5s cubic-bezier(0.4,0,0.2,1)",
            }}
            className="duration-500"
            onLoad={() => setLoaded(true)}
            onError={() => {
              setError(true);
              setLoaded(false);
            }}
            priority={priority}
            loading={priority ? undefined : "lazy"}
          />
        )}
        {/* SAO-style subtle overlay */}
        {!error && (
          <div className="absolute inset-0 pointer-events-none bg-linear-to-t from-black/40 via-transparent to-transparent z-10 transition-opacity group-hover:opacity-85" />
        )}
        {/* Border accent on hover for effect, but keep rectangle */}
        <div
          className="absolute inset-0 pointer-events-none border border-white/5 group-hover:border-primary/25 transition-all duration-300"
          style={{ borderRadius: 0 }}
        />

        {/* Label redesign: keep SAO vibe, now more visible! */}
        <div
          className="absolute bottom-0 left-0 w-full z-20"
          style={{
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
        >
          <div
            className="flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 bg-linear-to-r from-white/25 via-primary/90 to-white/25 border-t border-primary/40 justify-center"
            style={{
              boxShadow: "0 6px 22px 0 rgba(32,25,46,0.11)",
              backdropFilter: "blur(3px)",
              borderBottomLeftRadius: 0,
              borderBottomRightRadius: 0,
            }}
          >
            <ImageIcon
              size={16}
              className="inline-block text-primary drop-shadow-[0_1px_6px_rgba(76,44,170,0.6)] shrink-0 h-4 w-4 sm:h-[18px] sm:w-[18px]"
              style={{
                filter: "drop-shadow(0 2px 8px rgba(120,86,180,0.25))",
              }}
              aria-hidden="true"
            />
            <span
              id={`gallery-image-desc-${index}`}
              className="font-display text-xs sm:text-sm md:text-base lg:text-[1.07rem] font-extrabold text-white tracking-wide truncate drop-shadow-[0_2px_12px_rgba(0,0,0,0.40)] text-center"
              style={{
                letterSpacing: "0.03em",
                textShadow: "0 0px 12px #222, 0 1px 8px #111, 0 0px 0px #fff",
                width: "100%",
                display: "block",
              }}
            >
              {alt}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export function GallerySection() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);

  const handleImageClick = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  // Empty state handling
  if (!GALLERY_IMAGES || GALLERY_IMAGES.length === 0) {
    return (
      <section
        id="gallery"
        className="relative py-16 sm:py-20 md:py-28"
        style={{
          scrollMarginTop: 90,
        }}
      >
        <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-8 text-center">
          <div
            className="mx-auto mb-6 sm:mb-7 md:mb-8 inline-block bg-primary/10 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-primary font-display text-sm sm:text-base font-semibold tracking-wider sm:tracking-widest border-b-2 border-primary/30 drop-shadow-sm"
            style={{ borderRadius: 0 }}
          >
            GALLERY
          </div>
          <h2 className="mb-3 sm:mb-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center text-card drop-shadow-xl px-2">
            Swordland Online In Action
          </h2>
          <div className="mx-auto max-w-2xl mt-12 p-8 border border-primary/20 bg-card/50 backdrop-blur-sm">
            <ImageOff className="h-16 w-16 mx-auto mb-4 text-primary/50" aria-hidden="true" />
            <p className="text-card/70 text-base sm:text-lg">
              No gallery images available at this time. Check back soon!
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="gallery"
      className="relative py-16 sm:py-20 md:py-28"
      style={{
        scrollMarginTop: 90,
      }}
    >
      {/* Themed Blurs and floating accents */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute left-1/2 top-1/4 h-[300px] w-[300px] sm:h-[360px] sm:w-[360px] md:h-[420px] md:w-[420px] -translate-x-1/2 rounded-full bg-primary/20 blur-[100px] sm:blur-[115px] md:blur-[130px]" />
        <div className="absolute right-0 bottom-[8%] h-[150px] w-[280px] sm:h-[175px] sm:w-[340px] md:h-[200px] md:w-[390px] rounded-full bg-card/70 blur-[80px] sm:blur-[90px] md:blur-[100px] opacity-25" />
        <div className="absolute left-[10%] top-[7%] h-[80px] w-[180px] sm:h-[90px] sm:w-[210px] md:h-[100px] md:w-[240px] rounded-full bg-primary/20 blur-[60px] sm:blur-[65px] md:blur-[70px] opacity-20" />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-3 sm:px-4 md:px-8 text-center">
        {/* Section badge in a pill, bolder */}
        <div
          className="mx-auto mb-6 sm:mb-7 md:mb-8 inline-block bg-primary/10 px-4 sm:px-5 md:px-6 py-1.5 sm:py-2 text-primary font-display text-sm sm:text-base font-semibold tracking-wider sm:tracking-widest border-b-2 border-primary/30 drop-shadow-sm"
          style={{ borderRadius: 0 }}
        >
          GALLERY
        </div>
        <h2 className="mb-3 sm:mb-4 font-display text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-center text-card drop-shadow-xl px-2">
          Swordland Online In Action
        </h2>
        <p className="mx-auto max-w-2xl text-balance text-card/70 text-base sm:text-lg md:text-xl text-center mb-10 sm:mb-12 md:mb-16 px-4">
          Scenes from the adventure—boss battles, beautiful zones, guilds, and
          moments that make Swordland unique!
        </p>
        <div
          role="grid"
          aria-label="Gallery images"
          className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ borderRadius: 0 }}
        >
          {GALLERY_IMAGES.map((img, index) => (
            <GalleryImage
              key={img.src}
              src={img.src}
              alt={img.alt}
              index={index}
              onImageClick={handleImageClick}
              priority={index < PRIORITY_IMAGE_COUNT}
            />
          ))}
        </div>
      </div>
      <GalleryLightbox
        images={GALLERY_IMAGES}
        initialIndex={lightboxIndex}
        open={lightboxOpen}
        onOpenChange={setLightboxOpen}
      />
    </section>
  );
}
