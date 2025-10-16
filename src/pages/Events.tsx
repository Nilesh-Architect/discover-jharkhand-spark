import { Calendar, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmergencyButton from "@/components/EmergencyButton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import festivalImg from "@/assets/festival.jpg";

const Events = () => {
  const events = [
    {
      id: 1,
      name: "Sarhul Festival",
      date: "March 15-17, 2025",
      time: "All Day",
      location: "Statewide",
      description: "Traditional tribal spring festival celebrating nature and new beginnings with colorful dances and rituals.",
      image: festivalImg,
      category: "Cultural",
    },
    {
      id: 2,
      name: "Tusu Parab",
      date: "January 14, 2025",
      time: "Morning to Evening",
      location: "Tribal Villages",
      description: "Harvest festival featuring traditional songs, dances, and the iconic Tusu idol immersion ceremony.",
      image: festivalImg,
      category: "Festival",
    },
    {
      id: 3,
      name: "Karma Festival",
      date: "August 20-21, 2025",
      time: "Evening",
      location: "Rural Jharkhand",
      description: "Tribal festival dedicated to Karma Devta with traditional Karma dance and folk songs.",
      image: festivalImg,
      category: "Cultural",
    },
    {
      id: 4,
      name: "Chhath Puja",
      date: "November 7-10, 2025",
      time: "Sunrise & Sunset",
      location: "Riverbanks, Ranchi",
      description: "Grand celebration honoring the Sun God with rituals performed at dawn and dusk.",
      image: festivalImg,
      category: "Spiritual",
    },
  ];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="hero-gradient py-16 text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events & Festivals</h1>
            <p className="text-lg text-white/90 max-w-2xl">
              Experience the vibrant culture and celebrations of Jharkhand
            </p>
          </div>
        </section>

        {/* Festival Calendar Preview */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Festival Calendar</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3 mb-12">
              {months.map((month) => (
                <Button key={month} variant="outline" className="justify-center">
                  {month}
                </Button>
              ))}
            </div>

            {/* Upcoming Events */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-6">Upcoming Events</h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-5">
                      <div className="md:col-span-2 h-48 md:h-auto relative">
                        <img
                          src={event.image}
                          alt={event.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                            {event.category}
                          </span>
                        </div>
                      </div>
                      <CardContent className="md:col-span-3 p-6">
                        <h3 className="text-xl font-bold text-foreground mb-3">{event.name}</h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 text-primary" />
                            {event.date}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 text-primary" />
                            {event.time}
                          </div>
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            {event.location}
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-4">{event.description}</p>

                        <Button className="btn-primary w-full">Learn More</Button>
                      </CardContent>
                    </div>
                  </Card>
                ))}
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

export default Events;
