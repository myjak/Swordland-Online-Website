import { Navbar } from "@/src/components/navbar";
import { HeroSection } from "@/src/components/hero-section";
import { FeaturesSection } from "@/src/components/features-section";
import { AboutSection } from "@/src/components/about-section";
import { CommunitySection } from "@/src/components/community-section";
import { Footer } from "@/src/components/footer";
import { JoinSection } from "@/src/components/join-section";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <JoinSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}
