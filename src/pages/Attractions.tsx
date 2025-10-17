import { useState } from "react";
import { MapPin, Filter, Map as MapIcon, Grid3x3, Star, Clock, Users, TrendingUp, Camera, Heart, Share2 } from "lucide-react";
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

        {/* Statistics Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Jharkhand Tourism in Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">50+</h3>
                  <p className="text-muted-foreground">Tourist Destinations</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">2.5M+</h3>
                  <p className="text-muted-foreground">Annual Visitors</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">4.6</h3>
                  <p className="text-muted-foreground">Average Rating</p>
                </CardContent>
              </Card>
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">25%</h3>
                  <p className="text-muted-foreground">Growth Rate</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Popular Destinations Section */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Most Popular Destinations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.slice(0, 6).map((attraction, index) => (
                <Card key={attraction.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 text-foreground px-2 py-1 rounded-full text-xs font-medium">
                        #{index + 1} Popular
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 bg-white/20 hover:bg-white/30 text-white">
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <h3 className="text-lg font-bold mb-1">{attraction.name}</h3>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="h-3 w-3" />
                        {attraction.location}
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{attraction.description}</p>
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
              ))}
            </div>
          </div>
        </section>

        {/* Travel Tips Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Travel Tips & Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Best Time to Visit</h3>
                  <p className="text-muted-foreground mb-4">
                    October to March offers the most pleasant weather for sightseeing and outdoor activities.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Winter (Oct-Mar): Ideal for sightseeing</li>
                    <li>• Monsoon (Jul-Sep): Perfect for waterfalls</li>
                    <li>• Summer (Apr-Jun): Hot but good for wildlife</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                    <Camera className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Photography Tips</h3>
                  <p className="text-muted-foreground mb-4">
                    Capture the beauty of Jharkhand with these professional photography tips.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Golden hour: 6-8 AM & 5-7 PM</li>
                    <li>• Waterfalls: Use tripod for long exposure</li>
                    <li>• Wildlife: Patience is key</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">Travel Essentials</h3>
                  <p className="text-muted-foreground mb-4">
                    Pack smart and travel comfortably with these essential items.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Comfortable walking shoes</li>
                    <li>• Light cotton clothing</li>
                    <li>• Camera and extra batteries</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 hero-gradient text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Explore Jharkhand?</h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Discover the hidden gems, rich culture, and breathtaking landscapes that make Jharkhand a unique destination.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/itinerary">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                  <MapIcon className="h-5 w-5 mr-2" />
                  Plan Your Trip
                </Button>
              </Link>
              <Link to="/accommodation">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                  <Users className="h-5 w-5 mr-2" />
                  Find Hotels
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Attractions;
