import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-jharkhand.jpg";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful waterfalls and lush green landscapes of Jharkhand"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
          Discover the Heart of India
        </h1>
        <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Experience Jharkhand's majestic waterfalls, rich tribal culture, and pristine wilderness
        </p>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto bg-white rounded-full shadow-2xl p-2 flex items-center gap-2">
          <Search className="h-5 w-5 text-muted-foreground ml-4" />
          <Input
            placeholder="Find your next destination in Jharkhand..."
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          <Button className="btn-primary rounded-full px-8">
            Search
          </Button>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            { number: "50+", label: "Destinations" },
            { number: "100+", label: "Hotels" },
            { number: "20+", label: "Festivals" },
            { number: "10+", label: "Wildlife Sanctuaries" },
          ].map((stat) => (
            <div key={stat.label} className="text-white">
              <div className="text-3xl md:text-4xl font-bold text-accent">{stat.number}</div>
              <div className="text-sm md:text-base text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
