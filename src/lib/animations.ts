import * as React from "react";

/**
 * Animation utilities for scroll-triggered animations
 */

export const animationVariants = {
  fadeInUp: "animate-in fade-in slide-in-from-bottom-4 duration-700",
  fadeIn: "animate-in fade-in duration-700",
  slideInLeft: "animate-in slide-in-from-left-4 duration-700",
  slideInRight: "animate-in slide-in-from-right-4 duration-700",
  zoomIn: "animate-in zoom-in-95 duration-700",
} as const;

/**
 * Intersection Observer hook for scroll animations
 */
export function useIntersectionObserver(
  ref: React.RefObject<HTMLElement>,
  options?: IntersectionObserverInit
) {
  const [isIntersecting, setIsIntersecting] = React.useState(false);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, options]);

  return isIntersecting;
}
