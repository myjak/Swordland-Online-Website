import { Navbar } from "@/src/components/navbar";
import { HeroSection } from "@/src/components/hero-section";
import { FeaturesSection } from "@/src/components/features-section";
import { AboutSection } from "@/src/components/about-section";
import { CommunitySection } from "@/src/components/community-section";
import { Footer } from "@/src/components/footer";
import { JoinSection } from "@/src/components/join-section";
import { Analytics } from "@vercel/analytics/next"
import { GallerySection } from "@/src/components/gallery-section"

export default function Page() {
  return (
    <main className="min-h-screen">
      <Analytics />
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <JoinSection />
      <CommunitySection />
      <GallerySection />
      <Footer />
    </main>
  );
}
