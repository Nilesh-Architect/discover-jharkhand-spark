import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Hotel, Star, MapPin, ArrowLeft, Wifi, Car, Utensils, Dumbbell, Coffee, ExternalLink, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import waterfallImg from "@/assets/waterfall.jpg";
import templeImg from "@/assets/temple.jpg";
import wildlifeImg from "@/assets/wildlife.jpg";
import festivalImg from "@/assets/festival.jpg";

const DestinationAccommodation = () => {
  const { id } = useParams();
  const [priceRange, setPriceRange] = useState("all");

  // Mock data - in a real app, this would come from an API
  const destinationData: Record<string, any> = {
    "hundru-falls": {
      name: "Hundru Falls",
      location: "Ranchi, Jharkhand",
      image: waterfallImg,
      nearbyHotels: [
        {
          id: 1,
          name: "JTDC Hotel Ranchi",
          distance: "15 km",
          rating: 4.2,
          price: 2500,
          amenities: ["WiFi", "Restaurant", "Parking", "AC", "Room Service"],
          image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
          description: "Government-run hotel with modern amenities and excellent location",
          type: "Government",
          bookingLink: "https://www.booking.com/",
        },
        {
          id: 2,
          name: "Hotel Yuvraj Palace",
          distance: "18 km",
          rating: 4.3,
          price: 3000,
          amenities: ["AC", "Restaurant", "Room Service", "WiFi", "Parking"],
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
          description: "Luxury hotel with premium facilities and great service",
          type: "Luxury",
          bookingLink: "https://www.goibibo.com/",
        }
      ]
    },
    "baidyanath-temple": {
      name: "Baidyanath Temple",
      location: "Deoghar, Jharkhand",
      image: templeImg,
      nearbyHotels: [
        {
          id: 3,
          name: "Hotel Yuvraj Palace",
          distance: "1 km",
          rating: 4.3,
          price: 3000,
          amenities: ["AC", "Restaurant", "Room Service", "WiFi", "Parking"],
          image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
          description: "Luxury hotel near Baidyanath Temple with premium facilities",
          type: "Luxury",
          bookingLink: "https://www.goibibo.com/",
        },
        {
          id: 4,
          name: "Budget Inn Deoghar",
          distance: "2 km",
          rating: 3.8,
          price: 1500,
          amenities: ["WiFi", "Breakfast", "Parking", "AC"],
          image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
          description: "Affordable accommodation with basic amenities for budget travelers",
          type: "Budget",
          bookingLink: "https://www.trivago.in/",
        }
      ]
    },
    "betla-national-park": {
      name: "Betla National Park",
      location: "Latehar, Jharkhand",
      image: wildlifeImg,
      nearbyHotels: [
        {
          id: 5,
          name: "Forest Rest House - Betla",
          distance: "Inside the park",
          rating: 4.0,
          price: 1800,
          amenities: ["Nature View", "Safari", "Dining", "Parking"],
          image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
          description: "Unique accommodation inside the national park with wildlife viewing",
          type: "Forest Lodge",
          bookingLink: "https://www.makemytrip.com/",
        },
        {
          id: 6,
          name: "Wildlife Resort Latehar",
          distance: "5 km",
          rating: 4.1,
          price: 2200,
          amenities: ["Nature View", "Restaurant", "Parking", "WiFi"],
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
          description: "Resort with jungle views and wildlife safari packages",
          type: "Resort",
          bookingLink: "https://www.booking.com/",
        }
      ]
    },
    "sarhul-festival": {
      name: "Sarhul Festival",
      location: "Statewide, Jharkhand",
      image: festivalImg,
      nearbyHotels: [
        {
          id: 7,
          name: "Tribal Village Homestay",
          distance: "Rural setting",
          rating: 4.1,
          price: 1500,
          amenities: ["Cultural Experience", "Local Food", "Nature View"],
          image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96",
          description: "Authentic tribal homestay experience with local culture and traditions",
          type: "Homestay",
          bookingLink: "https://www.makemytrip.com/",
        },
        {
          id: 8,
          name: "Heritage Resort Netarhat",
          distance: "Hill station location",
          rating: 4.5,
          price: 4500,
          amenities: ["Mountain View", "Restaurant", "Spa", "WiFi", "Parking"],
          image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d",
          description: "Premium resort in the hills with breathtaking views and luxury amenities",
          type: "Resort",
          bookingLink: "https://www.booking.com/",
        }
      ]
    }
  };

  const destination = destinationData[id || ""] || destinationData["hundru-falls"];

  const filteredHotels = destination.nearbyHotels.filter((hotel: any) => {
    const matchesPrice =
      priceRange === "all"
        ? true
        : priceRange === "budget"
        ? hotel.price < 2000
        : priceRange === "mid"
        ? hotel.price >= 2000 && hotel.price < 3500
        : hotel.price >= 3500;
    return matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative h-64 overflow-hidden">
          <img
            src={destination.image}
            alt={destination.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container mx-auto px-4 pb-8">
              <Link to={`/destination/${id}`}>
                <Button variant="ghost" className="text-white hover:text-white/80 mb-4">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to {destination.name}
                </Button>
              </Link>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Hotels Near {destination.name}
              </h1>
              <p className="text-white/90">{destination.location}</p>
            </div>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <div className="flex items-center gap-4">
                <Input
                  placeholder="Search hotels..."
                  className="w-64"
                />
                <Select value={priceRange} onValueChange={setPriceRange}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Price Range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="budget">Budget (Under ₹2000)</SelectItem>
                    <SelectItem value="mid">Mid-range (₹2000-3500)</SelectItem>
                    <SelectItem value="luxury">Luxury (Above ₹3500)</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="btn-primary">Search</Button>
              </div>
              <div className="text-muted-foreground">
                {filteredHotels.length} hotel{filteredHotels.length !== 1 ? "s" : ""} found
              </div>
            </div>
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHotels.map((hotel: any) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 h-48 md:h-auto relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute top-2 left-2">
                        <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                          {hotel.type}
                        </span>
                      </div>
                      <div className="absolute top-2 right-2">
                        <div className="flex items-center gap-1 bg-black/70 text-white px-2 py-1 rounded-full">
                          <Star className="h-3 w-3 fill-current" />
                          <span className="text-xs font-medium">{hotel.rating}</span>
                        </div>
                      </div>
                    </div>
                    <CardContent className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-xl font-bold text-foreground mb-1">{hotel.name}</h3>
                          <div className="flex items-center gap-1 text-muted-foreground text-sm mb-2">
                            <MapPin className="h-4 w-4" />
                            <span>{hotel.distance} from {destination.name}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{hotel.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.slice(0, 4).map((amenity: string) => (
                          <span
                            key={amenity}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground flex items-center gap-1"
                          >
                            {amenity === "WiFi" && <Wifi className="h-3 w-3" />}
                            {amenity === "Parking" && <Car className="h-3 w-3" />}
                            {amenity === "Restaurant" && <Utensils className="h-3 w-3" />}
                            {amenity === "Spa" && <Dumbbell className="h-3 w-3" />}
                            {amenity === "Room Service" && <Coffee className="h-3 w-3" />}
                            {amenity}
                          </span>
                        ))}
                        {hotel.amenities.length > 4 && (
                          <span className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground">
                            +{hotel.amenities.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-primary">₹{hotel.price}</div>
                          <div className="text-xs text-muted-foreground">per night</div>
                        </div>
                        <Button 
                          className="btn-primary"
                          onClick={() => window.open(hotel.bookingLink, '_blank')}
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Book Now
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              ))}
            </div>

            {filteredHotels.length === 0 && (
              <div className="text-center py-12">
                <Hotel className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">No accommodations found. Try different filters.</p>
              </div>
            )}
          </div>
        </section>

        {/* Booking Platforms Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Book with Trusted Partners</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold text-xl">B</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Booking.com</h3>
                  <p className="text-sm text-muted-foreground mb-4">World's leading accommodation site</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.booking.com/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold text-xl">M</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">MakeMyTrip</h3>
                  <p className="text-sm text-muted-foreground mb-4">India's leading travel platform</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.makemytrip.com/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold text-xl">G</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Goibibo</h3>
                  <p className="text-sm text-muted-foreground mb-4">Great deals on hotels & flights</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.goibibo.com/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
              <Card className="p-6 hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-0">
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-red-600 font-bold text-xl">T</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Trivago</h3>
                  <p className="text-sm text-muted-foreground mb-4">Compare hotel prices</p>
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => window.open('https://www.trivago.in/', '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit Site
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
                  Need Help with Booking?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Call Us</div>
                      <div className="text-sm text-muted-foreground">+91 1800-XXX-XXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email Us</div>
                      <div className="text-sm text-muted-foreground">booking@jharkhandtourism.gov.in</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <EmergencyButton />
    </div>
  );
};

export default DestinationAccommodation;
