import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { FeaturesSection } from "@/components/features-section";
import { AboutSection } from "@/components/about-section";
import { CommunitySection } from "@/components/community-section";
import { Footer } from "@/components/footer";
import { JoinSection } from "@/components/join-section";

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
