import { useState } from "react";
import { Plane, Train, Bus, MapPin, Clock, ExternalLink, Car, Ticket, Calendar, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TransportOption {
  mode: string;
  icon: any;
  image: string;
  description: string;
  options: {
    from: string;
    to: string;
    duration: string;
    frequency: string;
    distance: string;
    price: string;
    bookingLink: string;
    operator?: string;
  }[];
}

const TransportationOptions = ({ destination }: { destination: string }) => {
  const [activeMode, setActiveMode] = useState("all");

  const transportOptions: TransportOption[] = [
    {
      mode: "air",
      icon: Plane,
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&h=400&fit=crop",
      description: "Fastest way to reach Jharkhand with direct flights from major cities",
      options: [
        {
          from: "Delhi",
          to: "Birsa Munda Airport, Ranchi",
          duration: "2h 15m",
          frequency: "4 flights daily",
          distance: "1,100 km",
          price: "₹4,500 - ₹8,000",
          bookingLink: "https://www.makemytrip.com/flights/",
          operator: "Air India, IndiGo, SpiceJet"
        },
        {
          from: "Kolkata",
          to: "Birsa Munda Airport, Ranchi",
          duration: "1h 10m",
          frequency: "6 flights daily",
          distance: "400 km",
          price: "₹2,800 - ₹5,500",
          bookingLink: "https://www.makemytrip.com/flights/",
          operator: "Air India, IndiGo"
        },
        {
          from: "Mumbai",
          to: "Birsa Munda Airport, Ranchi",
          duration: "2h 45m",
          frequency: "2 flights daily",
          distance: "1,350 km",
          price: "₹5,200 - ₹9,500",
          bookingLink: "https://www.makemytrip.com/flights/",
          operator: "Air India, Vistara"
        },
      ],
    },
    {
      mode: "train",
      icon: Train,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      description: "Comfortable and scenic journey through India's railway network",
      options: [
        {
          from: "Howrah Junction",
          to: "Ranchi Junction",
          duration: "6h 30m",
          frequency: "8 trains daily",
          distance: "420 km",
          price: "₹150 - ₹1,200",
          bookingLink: "https://www.irctc.co.in/nget/train-search",
          operator: "South Eastern Railway"
        },
        {
          from: "Delhi",
          to: "Ranchi Junction",
          duration: "18h 45m",
          frequency: "3 trains daily",
          distance: "1,350 km",
          price: "₹400 - ₹3,500",
          bookingLink: "https://www.irctc.co.in/nget/train-search",
          operator: "East Central Railway"
        },
        {
          from: "Patna Junction",
          to: "Ranchi Junction",
          duration: "4h 20m",
          frequency: "5 trains daily",
          distance: "332 km",
          price: "₹120 - ₹800",
          bookingLink: "https://www.irctc.co.in/nget/train-search",
          operator: "East Central Railway"
        },
      ],
    },
    {
      mode: "road",
      icon: Bus,
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      description: "Convenient road connectivity with regular bus services and private transport",
      options: [
        {
          from: "Ranchi",
          to: destination,
          duration: "1h 30m",
          frequency: "Buses every hour",
          distance: "45 km",
          price: "₹50 - ₹200",
          bookingLink: "https://www.redbus.in/",
          operator: "JSRTC, Private Operators"
        },
        {
          from: "Jamshedpur",
          to: destination,
          duration: "4h 15m",
          frequency: "Regular buses",
          distance: "140 km",
          price: "₹150 - ₹400",
          bookingLink: "https://www.redbus.in/",
          operator: "JSRTC, Private Operators"
        },
        {
          from: "Kolkata",
          to: destination,
          duration: "8h 30m",
          frequency: "Multiple daily",
          distance: "350 km",
          price: "₹300 - ₹800",
          bookingLink: "https://www.redbus.in/",
          operator: "SBSTC, Private Operators"
        },
      ],
    },
  ];

  const filteredOptions =
    activeMode === "all"
      ? transportOptions
      : transportOptions.filter((opt) => opt.mode === activeMode);

  return (
    <div className="w-full">
      {/* Transport Mode Selector */}
      <div className="flex items-center gap-2 mb-8 flex-wrap">
        <Button
          variant={activeMode === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveMode("all")}
          className={activeMode === "all" ? "btn-primary" : ""}
        >
          All Routes
        </Button>
        <Button
          variant={activeMode === "air" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveMode("air")}
          className={activeMode === "air" ? "btn-primary" : ""}
        >
          <Plane className="h-4 w-4 mr-2" />
          By Air
        </Button>
        <Button
          variant={activeMode === "train" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveMode("train")}
          className={activeMode === "train" ? "btn-primary" : ""}
        >
          <Train className="h-4 w-4 mr-2" />
          By Train
        </Button>
        <Button
          variant={activeMode === "road" ? "default" : "outline"}
          size="sm"
          onClick={() => setActiveMode("road")}
          className={activeMode === "road" ? "btn-primary" : ""}
        >
          <Bus className="h-4 w-4 mr-2" />
          By Road
        </Button>
      </div>

      {/* Full Screen Transport Options */}
      <div className="space-y-8">
        {filteredOptions.map((transport) => (
          <div key={transport.mode} className="w-full">
            {/* Transport Header with Image */}
            <div className="relative h-64 rounded-xl overflow-hidden mb-6">
              <img
                src={transport.image}
                alt={`${transport.mode} transportation`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <transport.icon className="h-16 w-16 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2 capitalize">
                    {transport.mode === "road" ? "Road Transport" : `By ${transport.mode}`}
                  </h3>
                  <p className="text-white/90 max-w-md">{transport.description}</p>
                </div>
              </div>
            </div>

            {/* Transport Options Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {transport.options.map((option, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-all duration-300 border-2 border-transparent hover:border-primary/20">
                  <CardContent className="p-6">
                    {/* Route Information */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{option.from}</span>
                      </div>
                      <div className="flex items-center gap-2 my-3">
                        <div className="h-px flex-1 bg-border"></div>
                        <transport.icon className="h-5 w-5 text-primary" />
                        <div className="h-px flex-1 bg-border"></div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="font-medium">{option.to}</span>
                      </div>
                    </div>

                    {/* Journey Details */}
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          Duration
                        </span>
                        <span className="font-semibold text-foreground">{option.duration}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Users className="h-4 w-4" />
                          Frequency
                        </span>
                        <span className="font-semibold text-foreground">{option.frequency}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Distance
                        </span>
                        <span className="font-semibold text-foreground">{option.distance}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Ticket className="h-4 w-4" />
                          Price Range
                        </span>
                        <span className="font-semibold text-primary">{option.price}</span>
                      </div>
                      {option.operator && (
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Operator</span>
                          <span className="font-medium text-foreground text-xs">{option.operator}</span>
                        </div>
                      )}
                    </div>

                    {/* Booking Button */}
                    <Button 
                      className="w-full btn-primary" 
                      onClick={() => window.open(option.bookingLink, '_blank')}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Book {transport.mode === "road" ? "Bus" : transport.mode === "air" ? "Flight" : "Train"}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Additional Services Section */}
      <div className="mt-12 p-6 bg-muted/30 rounded-xl">
        <h3 className="text-xl font-bold text-foreground mb-4 text-center">Additional Travel Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" onClick={() => window.open('https://www.uber.com/in/', '_blank')}>
            <Car className="h-6 w-6 text-primary" />
            <span className="font-medium">Local Taxi Services</span>
            <span className="text-xs text-muted-foreground">Uber, Ola, Local Cabs</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" onClick={() => window.open('https://www.zoomcar.com/', '_blank')}>
            <Car className="h-6 w-6 text-primary" />
            <span className="font-medium">Car Rental</span>
            <span className="text-xs text-muted-foreground">Self-drive options</span>
          </Button>
          <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2" onClick={() => window.open('https://www.irctc.co.in/nget/train-search', '_blank')}>
            <Calendar className="h-6 w-6 text-primary" />
            <span className="font-medium">Travel Packages</span>
            <span className="text-xs text-muted-foreground">Complete tour packages</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TransportationOptions;