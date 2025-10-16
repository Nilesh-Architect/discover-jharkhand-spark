import { useState } from "react";
import { Hotel, Star, MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Accommodation = () => {
  const [location, setLocation] = useState("");
  const [priceRange, setPriceRange] = useState("all");

  const hotels = [
    {
      id: 1,
      name: "JTDC Hotel Ranchi",
      location: "Ranchi",
      rating: 4.2,
      price: 2500,
      amenities: ["WiFi", "Restaurant", "Parking"],
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    },
    {
      id: 2,
      name: "Forest Rest House - Betla",
      location: "Betla National Park",
      rating: 4.0,
      price: 1800,
      amenities: ["Nature View", "Safari", "Dining"],
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },
    {
      id: 3,
      name: "Hotel Yuvraj Palace",
      location: "Deoghar",
      rating: 4.3,
      price: 3000,
      amenities: ["AC", "Restaurant", "Room Service"],
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    },
    {
      id: 4,
      name: "Budget Inn Jamshedpur",
      location: "Jamshedpur",
      rating: 3.8,
      price: 1200,
      amenities: ["WiFi", "Breakfast", "Parking"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427",
    },
  ];

  const filteredHotels = hotels.filter((hotel) => {
    const matchesLocation = location
      ? hotel.location.toLowerCase().includes(location.toLowerCase())
      : true;
    const matchesPrice =
      priceRange === "all"
        ? true
        : priceRange === "budget"
        ? hotel.price < 2000
        : priceRange === "mid"
        ? hotel.price >= 2000 && hotel.price < 3500
        : hotel.price >= 3500;
    return matchesLocation && matchesPrice;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="hero-gradient py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Where to Stay</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Find comfortable accommodation across Jharkhand
            </p>
          </div>
        </section>

        {/* Search & Filters */}
        <section className="py-8 bg-background border-b border-border sticky top-16 z-40">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                placeholder="Search by location..."
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
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
          </div>
        </section>

        {/* Hotels List */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-muted-foreground">
              Showing {filteredHotels.length} accommodation{filteredHotels.length !== 1 ? "s" : ""}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredHotels.map((hotel) => (
                <Card key={hotel.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="grid md:grid-cols-5">
                    <div className="md:col-span-2 h-48 md:h-auto relative">
                      <img
                        src={hotel.image}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="md:col-span-3 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-foreground">{hotel.name}</h3>
                        <div className="flex items-center gap-1 bg-accent/10 px-2 py-1 rounded">
                          <Star className="h-4 w-4 text-accent fill-accent" />
                          <span className="text-sm font-medium">{hotel.rating}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-1 text-muted-foreground mb-4">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{hotel.location}</span>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {hotel.amenities.map((amenity) => (
                          <span
                            key={amenity}
                            className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
                          >
                            {amenity}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-2xl font-bold text-primary">₹{hotel.price}</div>
                          <div className="text-xs text-muted-foreground">per night</div>
                        </div>
                        <Button className="btn-primary">Book Now</Button>
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

        {/* Contact Info */}
        <section className="py-12 bg-muted/30">
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
                      <div className="text-sm text-muted-foreground">booking@jharkhandt ourism.gov.in</div>
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

export default Accommodation;
