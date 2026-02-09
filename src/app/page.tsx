import { Suspense } from "react";
import { Navbar } from "@/src/components/navbar";
import { HeroSection } from "@/src/components/hero-section";
import { FeaturesSection } from "@/src/components/features-section";
import { AboutSection } from "@/src/components/about-section";
import { CommunitySection } from "@/src/components/community-section";
import { Footer } from "@/src/components/footer";
import { JoinSection } from "@/src/components/join-section";
import { Analytics } from "@vercel/analytics/next";
import { GallerySection } from "@/src/components/gallery-section";
import { BackToTop } from "@/src/components/back-to-top";
import { ScrollProgress } from "@/src/components/scroll-progress";
import { Skeleton } from "@/src/components/ui/skeleton";
import { FEATURE_FLAGS } from "@/src/lib/constants";

function SectionSkeleton() {
  return (
    <div className="py-24 px-4">
      <div className="mx-auto max-w-7xl">
        <Skeleton
          className="h-12 w-64 mx-auto mb-8"
          style={{ borderRadius: 0 }}
        />
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-48" style={{ borderRadius: 0 }} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <main id="main-content" className="min-h-screen" role="main">
      <Analytics />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <Suspense fallback={<SectionSkeleton />}>
        <FeaturesSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <JoinSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CommunitySection />
      </Suspense>
      {FEATURE_FLAGS.enableGallery && (
        <Suspense fallback={<SectionSkeleton />}>
          <GallerySection />
        </Suspense>
      )}
      <Footer />
      <BackToTop />
    </main>
  );
}
