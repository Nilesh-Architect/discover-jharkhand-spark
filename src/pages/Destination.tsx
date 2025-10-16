import { useParams, Link } from "react-router-dom";
import { MapPin, Clock, Calendar, Phone, ArrowLeft, Map as MapIcon, Hotel, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import waterfallImg from "@/assets/waterfall.jpg";
import templeImg from "@/assets/temple.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import festivalImg from "@/assets/festival.jpg";

const Destination = () => {
  const { id } = useParams();

  // Mock data - in a real app, this would come from an API
  const destinationData: Record<string, any> = {
    "hundru-falls": {
      name: "Hundru Falls",
      location: "Ranchi, Jharkhand",
      category: "Nature",
      image: waterfallImg,
      description:
        "Hundru Falls is a spectacular waterfall located near Ranchi, Jharkhand. With a height of 320 feet, it's one of the highest waterfalls in the state. The falls are formed by the Subarnarekha River and are surrounded by dense forests, making it a perfect destination for nature lovers and adventure enthusiasts.",
      highlights: [
        "320 feet high waterfall",
        "Best visited during monsoon season",
        "Trekking opportunities",
        "Photography paradise",
      ],
      timings: "6:00 AM - 6:00 PM",
      bestTime: "July to October (Monsoon)",
      entryFee: "₹50 per person",
      nearbyAttractions: ["Jonha Falls", "Ranchi Lake", "Tagore Hill"],
    },
    "baidyanath-temple": {
      name: "Baidyanath Temple",
      location: "Deoghar, Jharkhand",
      category: "Spiritual",
      image: templeImg,
      description:
        "Baidyanath Temple, also known as Baba Baidyanath Dham, is one of the twelve Jyotirlingas in India. This ancient temple complex showcases stunning architecture and attracts millions of pilgrims annually, especially during the month of Shravan.",
      highlights: [
        "One of 12 Jyotirlingas",
        "Ancient architecture",
        "Spiritual significance",
        "Major pilgrimage site",
      ],
      timings: "4:00 AM - 9:00 PM",
      bestTime: "October to March",
      entryFee: "Free",
      nearbyAttractions: ["Naulakha Mandir", "Basukinath Temple", "Trikut Parvat"],
    },
    "betla-national-park": {
      name: "Betla National Park",
      location: "Latehar, Jharkhand",
      category: "Wildlife",
      image: wildlifeImg,
      description:
        "Betla National Park is the first national park in Jharkhand, known for its rich biodiversity. The park is home to elephants, tigers, leopards, and over 174 bird species. Safari tours offer visitors a chance to witness wildlife in their natural habitat.",
      highlights: [
        "Tigers, elephants, and leopards",
        "Safari tours available",
        "Rich bird diversity",
        "Ancient fort ruins",
      ],
      timings: "6:00 AM - 5:00 PM",
      bestTime: "November to April",
      entryFee: "₹150 per person",
      nearbyAttractions: ["Palamau Fort", "Lodh Falls", "Kechki"],
    },
    "sarhul-festival": {
      name: "Sarhul Festival",
      location: "Statewide, Jharkhand",
      category: "Culture",
      image: festivalImg,
      description:
        "Sarhul is the most important festival of the tribal communities in Jharkhand, celebrating the arrival of spring and the worship of nature. The festival features traditional dances, music, and colorful celebrations that showcase the rich cultural heritage of the region.",
      highlights: [
        "Tribal spring festival",
        "Traditional dances",
        "Nature worship",
        "Cultural performances",
      ],
      timings: "Usually in March-April",
      bestTime: "Spring season",
      entryFee: "Free to witness",
      nearbyAttractions: ["Tribal villages", "Cultural centers", "Local markets"],
    },
  };

  const destination = destinationData[id || ""] || destinationData["hundru-falls"];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Hero Image */}
        <section className="relative h-[60vh] overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 hero-gradient opacity-60" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Link to="/attractions">
                <Button variant="ghost" className="text-white hover:text-white/80 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Attractions
                </Button>
              </Link>
              <span className="inline-block bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium mb-3">
                {destination.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{destination.name}</h1>
              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4" />
                {destination.location}
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">About</h2>
                  <p className="text-muted-foreground leading-relaxed">{destination.description}</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Highlights</h2>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {destination.highlights.map((highlight: string) => (
                      <li key={highlight} className="flex items-center gap-2 text-muted-foreground">
                        <Camera className="h-4 w-4 text-primary flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Nearby Attractions</h2>
                  <div className="flex flex-wrap gap-2">
                    {destination.nearbyAttractions.map((attraction: string) => (
                      <span
                        key={attraction}
                        className="px-4 py-2 bg-muted rounded-full text-sm text-foreground"
                      >
                        {attraction}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Map Placeholder */}
                <Card>
                  <CardContent className="p-6">
                    <h2 className="text-xl font-bold text-foreground mb-4 flex items-center gap-2">
                      <MapIcon className="h-5 w-5 text-primary" />
                      Location Map
                    </h2>
                    <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                      <div className="text-center text-muted-foreground">
                        <MapIcon className="h-12 w-12 mx-auto mb-2" />
                        <p>Interactive map will be displayed here</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Info */}
                <Card>
                  <CardContent className="p-6 space-y-4">
                    <h3 className="font-bold text-foreground text-lg">Quick Information</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Timings</div>
                          <div className="text-sm text-muted-foreground">{destination.timings}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Best Time to Visit</div>
                          <div className="text-sm text-muted-foreground">{destination.bestTime}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <div>
                          <div className="font-medium text-foreground">Entry Fee</div>
                          <div className="text-sm text-muted-foreground">{destination.entryFee}</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Actions */}
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <Button className="w-full btn-primary">
                      <MapIcon className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                    <Link to="/accommodation" className="block">
                      <Button variant="outline" className="w-full">
                        <Hotel className="mr-2 h-4 w-4" />
                        Find Hotels Nearby
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full">
                      <Phone className="mr-2 h-4 w-4" />
                      Contact Tourist Office
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default Destination;
