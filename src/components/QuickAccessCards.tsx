import { MapPin, Calendar, Hotel, Compass, Map, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";

const QuickAccessCards = () => {
  const cards = [
    {
      icon: MapPin,
      title: "Destinations",
      description: "Explore amazing places",
      path: "/attractions",
      color: "bg-primary",
    },
    {
      icon: Calendar,
      title: "Festivals",
      description: "Cultural celebrations",
      path: "/events",
      color: "bg-secondary",
    },
    {
      icon: Hotel,
      title: "Where to Stay",
      description: "Find accommodation",
      path: "/accommodation",
      color: "bg-accent",
    },
    {
      icon: Compass,
      title: "Things to Do",
      description: "Activities & adventures",
      path: "/attractions",
      color: "bg-primary",
    },
    {
      icon: Map,
      title: "Plan Your Trip",
      description: "Create itinerary",
      path: "/itinerary",
      color: "bg-secondary",
    },
    {
      icon: Sparkles,
      title: "Events",
      description: "Upcoming happenings",
      path: "/events",
      color: "bg-accent",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Would You Like to Explore?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Quick access to everything you need for your perfect Jharkhand adventure
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <Link key={card.title} to={card.path}>
              <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer overflow-hidden">
                <CardContent className="p-6">
                  <div className={`${card.color} text-white w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <card.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{card.title}</h3>
                  <p className="text-muted-foreground">{card.description}</p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickAccessCards;
