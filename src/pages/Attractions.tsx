import { useState } from "react";
import { MapPin, Filter, Map as MapIcon, Grid3x3 } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import ShareButtons from "@/components/ShareButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import waterfallImg from "@/assets/waterfall.jpg";
import templeImg from "@/assets/temple.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import festivalImg from "@/assets/festival.jpg";
import tribalPatternImg from "@/assets/tribal-pattern.jpg";

const Attractions = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [viewMode, setViewMode] = useState<"grid" | "map">("grid");

  const categories = ["All", "Nature", "Heritage", "Wildlife", "Spiritual", "Culture", "Adventure"];

  const attractions = [
    {
      id: "hundru-falls",
      name: "Hundru Falls",
      location: "Ranchi",
      category: "Nature",
      image: waterfallImg,
      description: "A magnificent 320-feet waterfall surrounded by lush forests, perfect for nature lovers",
      rating: 4.5,
    },
    {
      id: "baidyanath-temple",
      name: "Baidyanath Temple",
      location: "Deoghar",
      category: "Spiritual",
      image: templeImg,
      description: "One of the twelve Jyotirlingas with stunning ancient architecture",
      rating: 4.8,
    },
    {
      id: "betla-national-park",
      name: "Betla National Park",
      location: "Latehar",
      category: "Wildlife",
      image: wildlifeImg,
      description: "Rich biodiversity with elephants, tigers, and exotic bird species",
      rating: 4.6,
    },
    {
      id: "sarhul-festival",
      name: "Sarhul Festival",
      location: "Statewide",
      category: "Culture",
      image: festivalImg,
      description: "Vibrant tribal spring festival celebrating nature and traditions",
      rating: 4.7,
    },
    {
      id: "tribal-heritage",
      name: "Tribal Heritage Museum",
      location: "Ranchi",
      category: "Heritage",
      image: tribalPatternImg,
      description: "Explore the rich cultural heritage and art forms of Jharkhand tribes",
      rating: 4.4,
    },
    {
      id: "tagore-hill",
      name: "Tagore Hill",
      location: "Ranchi",
      category: "Nature",
      image: waterfallImg,
      description: "Scenic hilltop with panoramic views where Tagore found inspiration",
      rating: 4.3,
    },
  ];

  const filteredAttractions =
    selectedCategory === "All"
      ? attractions
      : attractions.filter((attr) => attr.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="hero-gradient py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore Jharkhand</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Discover breathtaking destinations, from cascading waterfalls to ancient temples
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-2 flex-wrap">
                <Filter className="h-5 w-5 text-muted-foreground" />
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className={selectedCategory === category ? "btn-primary" : ""}
                  >
                    {category}
                  </Button>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "btn-primary" : ""}
                >
                  <Grid3x3 className="h-4 w-4 mr-2" />
                  Grid
                </Button>
                <Button
                  variant={viewMode === "map" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("map")}
                  className={viewMode === "map" ? "btn-primary" : ""}
                >
                  <MapIcon className="h-4 w-4 mr-2" />
                  Map
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Attractions Grid/Map */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-muted-foreground">
              Showing {filteredAttractions.length} {selectedCategory === "All" ? "" : selectedCategory} destination
              {filteredAttractions.length !== 1 ? "s" : ""}
            </div>

            {viewMode === "map" ? (
              <div className="bg-muted rounded-lg h-[600px] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
                <div className="text-center text-muted-foreground z-10">
                  <MapIcon className="h-16 w-16 mx-auto mb-4 text-primary" />
                  <p className="text-lg font-medium mb-2">Interactive Map View</p>
                  <p className="text-sm">All {filteredAttractions.length} destinations displayed with markers</p>
                </div>
                {/* Simulated map pins */}
                {filteredAttractions.map((attraction, idx) => (
                  <div
                    key={attraction.id}
                    className="absolute cursor-pointer group"
                    style={{
                      left: `${20 + (idx * 15)}%`,
                      top: `${30 + (idx % 3) * 20}%`,
                    }}
                  >
                    <div className="relative">
                      <MapPin className="h-8 w-8 text-primary fill-primary drop-shadow-lg animate-bounce" />
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block">
                        <div className="bg-card border border-border rounded-lg shadow-xl p-3 whitespace-nowrap">
                          <p className="font-semibold text-foreground text-sm">{attraction.name}</p>
                          <p className="text-xs text-muted-foreground">{attraction.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAttractions.map((attraction) => (
                  <div key={attraction.id}>
                    <Link to={`/destination/${attraction.id}`}>
                      <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer h-full">
                        <div className="relative h-64 overflow-hidden">
                          <img
                            src={attraction.image}
                            alt={attraction.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 card-overlay" />
                          <div className="absolute top-4 right-4">
                            <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                              {attraction.category}
                            </span>
                          </div>
                          <div className="absolute bottom-4 left-4 right-4 text-white">
                            <h3 className="text-xl font-bold mb-1">{attraction.name}</h3>
                            <div className="flex items-center gap-1 text-sm text-white/90">
                              <MapPin className="h-3 w-3" />
                              {attraction.location}
                            </div>
                          </div>
                        </div>
                        <CardContent className="p-4">
                          <p className="text-sm text-muted-foreground mb-3">{attraction.description}</p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <div className="flex text-accent">
                                {"★".repeat(Math.floor(attraction.rating))}
                                {"☆".repeat(5 - Math.floor(attraction.rating))}
                              </div>
                              <span className="text-sm font-medium text-foreground">{attraction.rating}</span>
                            </div>
                            <ShareButtons title={attraction.name} compact />
                          </div>
                        </CardContent>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Attractions;
