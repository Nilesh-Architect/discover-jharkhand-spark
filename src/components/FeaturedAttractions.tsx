import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ShareButtons from "@/components/ShareButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import waterfallImg from "@/assets/waterfall.jpg";
import templeImg from "@/assets/temple.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import festivalImg from "@/assets/festival.jpg";

const FeaturedAttractions = () => {
  const attractions = [
    {
      id: "hundru-falls",
      name: "Hundru Falls",
      location: "Ranchi",
      category: "Nature",
      image: waterfallImg,
      description: "Magnificent 320-feet waterfall surrounded by lush forests",
    },
    {
      id: "baidyanath-temple",
      name: "Baidyanath Temple",
      location: "Deoghar",
      category: "Spiritual",
      image: templeImg,
      description: "Sacred Jyotirlinga temple with stunning architecture",
    },
    {
      id: "betla-national-park",
      name: "Betla National Park",
      location: "Latehar",
      category: "Wildlife",
      image: wildlifeImg,
      description: "Home to elephants, tigers, and diverse wildlife",
    },
    {
      id: "sarhul-festival",
      name: "Sarhul Festival",
      location: "Statewide",
      category: "Culture",
      image: festivalImg,
      description: "Vibrant tribal spring festival celebrating nature",
    },
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Featured Destinations
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover the most popular attractions in Jharkhand
            </p>
          </div>
          <Link to="/attractions">
            <Button variant="outline" className="hidden md:flex items-center gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {attractions.map((attraction) => (
            <Link key={attraction.id} to={`/destination/${attraction.id}`}>
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
                  <ShareButtons title={attraction.name} compact />
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link to="/attractions">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              View All Destinations
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedAttractions;
