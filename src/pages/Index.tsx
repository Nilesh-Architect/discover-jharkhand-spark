import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import QuickAccessCards from "@/components/QuickAccessCards";
import FeaturedAttractions from "@/components/FeaturedAttractions";
import SocialFeed from "@/components/SocialFeed";
import EmergencyButton from "@/components/EmergencyButton";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <HeroSection />
        <QuickAccessCards />
        <FeaturedAttractions />
        <SocialFeed />
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Index;
