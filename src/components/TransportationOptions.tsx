import { useState } from "react";
import { Plane, Train, Bus, MapPin, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TransportOption {
  mode: string;
  icon: any;
  options: {
    from: string;
    to: string;
    duration: string;
    frequency: string;
    distance: string;
  }[];
}

const TransportationOptions = ({ destination }: { destination: string }) => {
  const [activeMode, setActiveMode] = useState("all");

  const transportOptions: TransportOption[] = [
    {
      mode: "air",
      icon: Plane,
      options: [
        {
          from: "Delhi",
          to: "Birsa Munda Airport, Ranchi",
          duration: "2h 15m",
          frequency: "4 flights daily",
          distance: "1,100 km",
        },
        {
          from: "Kolkata",
          to: "Birsa Munda Airport, Ranchi",
          duration: "1h 10m",
          frequency: "6 flights daily",
          distance: "400 km",
        },
      ],
    },
    {
      mode: "train",
      icon: Train,
      options: [
        {
          from: "Howrah Junction",
          to: "Ranchi Junction",
          duration: "6h 30m",
          frequency: "8 trains daily",
          distance: "420 km",
        },
        {
          from: "Delhi",
          to: "Ranchi Junction",
          duration: "18h 45m",
          frequency: "3 trains daily",
          distance: "1,350 km",
        },
        {
          from: "Patna Junction",
          to: "Ranchi Junction",
          duration: "4h 20m",
          frequency: "5 trains daily",
          distance: "332 km",
        },
      ],
    },
    {
      mode: "road",
      icon: Bus,
      options: [
        {
          from: "Ranchi",
          to: destination,
          duration: "1h 30m",
          frequency: "Buses every hour",
          distance: "45 km",
        },
        {
          from: "Jamshedpur",
          to: destination,
          duration: "4h 15m",
          frequency: "Regular buses",
          distance: "140 km",
        },
      ],
    },
  ];

  const filteredOptions =
    activeMode === "all"
      ? transportOptions
      : transportOptions.filter((opt) => opt.mode === activeMode);

  return (
    <div>
      <div className="flex items-center gap-2 mb-6 flex-wrap">
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

      <div className="space-y-6">
        {filteredOptions.map((transport) => (
          <div key={transport.mode}>
            <div className="flex items-center gap-2 mb-4">
              <transport.icon className="h-5 w-5 text-primary" />
              <h4 className="font-semibold text-foreground capitalize">
                {transport.mode === "road" ? "Road" : `By ${transport.mode}`}
              </h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {transport.options.map((option, idx) => (
                <Card key={idx} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-1">
                          <MapPin className="h-3 w-3" />
                          <span>{option.from}</span>
                        </div>
                        <div className="flex items-center gap-2 my-2">
                          <div className="h-px flex-1 bg-border"></div>
                          <transport.icon className="h-4 w-4 text-primary" />
                          <div className="h-px flex-1 bg-border"></div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          <span>{option.to}</span>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          Duration
                        </span>
                        <span className="font-medium text-foreground">{option.duration}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Frequency</span>
                        <span className="font-medium text-foreground">{option.frequency}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground">Distance</span>
                        <span className="font-medium text-foreground">{option.distance}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransportationOptions;